import { sheets } from "@/lib/googleSheets";

export const REGISTRATION_DUPLICATE_MESSAGES = {
  email: "This email is already registered. Please use a different email address.",
  mobile: "This mobile number is already registered. Please use a different mobile number.",
} as const;

export type RegistrationFieldErrors = Partial<
  Record<keyof typeof REGISTRATION_DUPLICATE_MESSAGES, string>
>;

/** Checks the dedicated registered accounts store. Lead sheets are never queried here. */
export async function findRegisteredAccountConflicts(
  emailValues: unknown[],
  mobileValues: unknown[],
): Promise<RegistrationFieldErrors> {
  const spreadsheetId = process.env.REGISTERED_ACCOUNTS_SPREADSHEET_ID;
  const emailRange = process.env.REGISTERED_ACCOUNTS_EMAIL_RANGE;
  const mobileRange = process.env.REGISTERED_ACCOUNTS_MOBILE_RANGE;

  if (!spreadsheetId || !emailRange || !mobileRange) {
    throw new Error("Registered accounts lookup is not configured");
  }

  const normalizeEmail = (value: unknown) => String(value ?? "").trim().toLowerCase();
  const normalizeMobile = (value: unknown) => {
    const digits = String(value ?? "").replace(/\D/g, "");
    if (digits.length === 10) return digits;
    return digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : "";
  };
  const emails = emailValues
    .map(normalizeEmail)
    .filter((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  const mobiles = mobileValues.map(normalizeMobile).filter(Boolean);

  const [emailRows, mobileRows] = await Promise.all([
    emails.length
      ? sheets.spreadsheets.values.get({ spreadsheetId, range: emailRange })
      : Promise.resolve({ data: { values: [] as string[][] } }),
    mobiles.length
      ? sheets.spreadsheets.values.get({ spreadsheetId, range: mobileRange })
      : Promise.resolve({ data: { values: [] as string[][] } }),
  ]);

  const registeredEmails = new Set((emailRows.data.values || []).map((row) => normalizeEmail(row[0])));
  const registeredMobiles = new Set((mobileRows.data.values || []).map((row) => normalizeMobile(row[0])));
  const errors: RegistrationFieldErrors = {};

  if (emails.some((email) => registeredEmails.has(email))) {
    errors.email = REGISTRATION_DUPLICATE_MESSAGES.email;
  }
  if (mobiles.some((mobile) => registeredMobiles.has(mobile))) {
    errors.mobile = REGISTRATION_DUPLICATE_MESSAGES.mobile;
  }

  return errors;
}
