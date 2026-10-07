import { getLeadRows } from "@/lib/googleSheets";

export const REGISTRATION_DUPLICATE_MESSAGES = {
  uniqueEmail: "This email address is already in use. Please use a different email.",
  uniqueMobile: "This mobile number is already in use. Please use a different number.",
} as const;

export type RegistrationFieldErrors = Partial<
  Record<keyof typeof REGISTRATION_DUPLICATE_MESSAGES, string>
>;

export function normalizeRegistrationEmail(value: unknown) {
  return String(value ?? "").trim().toLowerCase();
}

export function normalizeRegistrationMobile(value: unknown) {
  const digits = String(value ?? "").replace(/\D/g, "");
  if (digits.length === 10) return digits;
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  return "";
}

/** Checks only Unique Mobile (column V) and Unique Email (column W). */
export async function findRegisteredAccountConflicts(
  uniqueEmailValue: unknown,
  uniqueMobileValue: unknown,
): Promise<RegistrationFieldErrors> {
  const email = normalizeRegistrationEmail(uniqueEmailValue);
  const mobile = normalizeRegistrationMobile(uniqueMobileValue);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validMobile = Boolean(mobile);
  const errors: RegistrationFieldErrors = {};

  if (!validEmail && !validMobile) return errors;

  const response = await getLeadRows("'Registration Leads'!V2:W");
  const rows = response.data.values || [];
  console.log("[UNIQUE CHECK] rows fetched", rows.length);

  const mobileExists = validMobile && rows.some((row) => {
    const existing = normalizeRegistrationMobile(row[0]);
    return Boolean(existing) && existing === mobile;
  });
  const emailExists = validEmail && rows.some((row) => {
    const existing = normalizeRegistrationEmail(row[1]);
    return Boolean(existing) && existing === email;
  });

  if (emailExists) errors.uniqueEmail = REGISTRATION_DUPLICATE_MESSAGES.uniqueEmail;
  if (mobileExists) errors.uniqueMobile = REGISTRATION_DUPLICATE_MESSAGES.uniqueMobile;

  console.log("[UNIQUE CHECK] result", { mobileExists, emailExists });

  return errors;
}
