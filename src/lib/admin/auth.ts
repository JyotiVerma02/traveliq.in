import "server-only";

import {
  createHmac,
  randomBytes,
  scrypt as scryptCallback,
  timingSafeEqual,
} from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);

export const ADMIN_SESSION_COOKIE = "traveliq_admin_session";
export const ADMIN_SESSION_MAX_AGE = 8 * 60 * 60;

type AdminConfig = {
  email: string;
  passwordHash: string;
  secret: string;
};

export type AdminSession = {
  email: string;
  expiresAt: number;
};

function parsePasswordHash(value: string) {
  const match = /^scrypt\$([a-f\d]{32})\$([a-f\d]{128})$/i.exec(value);
  return match ? { salt: match[1], hash: match[2] } : null;
}

export function getAdminConfig(): AdminConfig | null {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim();
  const secret = process.env.AUTH_SECRET;
  const reasons: string[] = [];

  if (!email) reasons.push("ADMIN_EMAIL is missing");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) reasons.push("ADMIN_EMAIL has an invalid format");

  if (!passwordHash) reasons.push("ADMIN_PASSWORD_HASH is missing");
  else if (!parsePasswordHash(passwordHash)) {
    reasons.push("ADMIN_PASSWORD_HASH must use scrypt$<32-character-hex-salt>$<128-character-hex-hash>");
  }

  const authSecretLength = secret ? Buffer.byteLength(secret, "utf8") : 0;
  if (!secret) reasons.push("AUTH_SECRET is missing");
  else if (authSecretLength < 32) reasons.push("AUTH_SECRET must be at least 32 bytes");

  console.log("[ADMIN AUTH CONFIG]", {
    hasEmail: Boolean(process.env.ADMIN_EMAIL),
    hasPasswordHash: Boolean(process.env.ADMIN_PASSWORD_HASH),
    hasAuthSecret: Boolean(process.env.AUTH_SECRET),
    hashPrefix: process.env.ADMIN_PASSWORD_HASH?.split("$")[0],
    authSecretLength: process.env.AUTH_SECRET?.length ?? 0,
    reasons,
  });

  if (reasons.length || !email || !passwordHash || !secret) return null;

  return { email, passwordHash, secret };
}

export async function verifyAdminPassword(password: string, storedHash: string) {
  const parsed = parsePasswordHash(storedHash);
  if (!parsed) return false;

  const expected = Buffer.from(parsed.hash, "hex");
  const actual = (await scrypt(password, Buffer.from(parsed.salt, "hex"), expected.length)) as Buffer;
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function createAdminSessionToken(email: string, secret: string, now = Date.now()) {
  const payload = Buffer.from(
    JSON.stringify({ email: email.toLowerCase(), expiresAt: now + ADMIN_SESSION_MAX_AGE * 1000 }),
  ).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifyAdminSessionToken(token: string, now = Date.now()): AdminSession | null {
  const config = getAdminConfig();
  if (!config) return null;

  const separator = token.lastIndexOf(".");
  if (separator < 1) return null;

  const payload = token.slice(0, separator);
  const suppliedSignature = Buffer.from(token.slice(separator + 1), "base64url");
  const expectedSignature = createHmac("sha256", config.secret).update(payload).digest();
  if (
    suppliedSignature.length !== expectedSignature.length ||
    !timingSafeEqual(suppliedSignature, expectedSignature)
  ) {
    return null;
  }

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as AdminSession;
    if (
      session.email !== config.email ||
      !Number.isSafeInteger(session.expiresAt) ||
      session.expiresAt <= now
    ) {
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function createAdminPasswordHash(password: string) {
  const salt = randomBytes(16);
  return scrypt(password, salt, 64).then((derived) =>
    `scrypt$${salt.toString("hex")}$${(derived as Buffer).toString("hex")}`,
  );
}
