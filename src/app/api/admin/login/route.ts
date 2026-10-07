import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  createAdminSessionToken,
  getAdminConfig,
  verifyAdminPassword,
} from "@/lib/admin/auth";

export async function POST(request: NextRequest) {
  const config = getAdminConfig();
  if (!config) {
    return NextResponse.json(
      { success: false, code: "CONFIGURATION", message: "Admin login is temporarily unavailable." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Enter your email and password." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { success: false, message: "Enter your email and password." },
      { status: 400 },
    );
  }

  const { email, password } = body as { email?: unknown; password?: unknown };
  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    return NextResponse.json(
      { success: false, message: "Enter your email and password." },
      { status: 400 },
    );
  }

  const passwordMatches = await verifyAdminPassword(password, config.passwordHash);
  if (email.trim().toLowerCase() !== config.email || !passwordMatches) {
    return NextResponse.json(
      { success: false, code: "INVALID_CREDENTIALS", message: "Invalid email or password." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ success: true, redirectTo: "/admin/dashboard/" });
  response.cookies.set(
    ADMIN_SESSION_COOKIE,
    createAdminSessionToken(config.email, config.secret),
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: ADMIN_SESSION_MAX_AGE,
    },
  );
  return response;
}
