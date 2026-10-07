import "server-only";

import { getLeadRows } from "@/lib/googleSheets";

export type LeadStatus = "New" | "Contacted" | "Converted" | "Rejected";
export type LeadType = "registration" | "contact";
export type AdminLead = {
  id: string;
  type: LeadType;
  submittedAt: string;
  name: string;
  agency: string;
  whatsapp: string;
  mobile: string;
  email: string;
  uniqueEmail: string;
  pan: string;
  city: string;
  state: string;
  plan: string;
  action: string;
  status: LeadStatus;
  note: string;
  updatedAt: string;
  details: Array<{ label: string; value: string }>;
};

const metadataTab = "Admin Lead Metadata";
const statuses: LeadStatus[] = ["New", "Contacted", "Converted", "Rejected"];
const cell = (row: string[], index: number) => String(row[index] ?? "").trim();
const fullName = (...parts: string[]) => parts.map((part) => part.trim()).filter(Boolean).join(" ") || "Unnamed lead";
function submittedTime(value: string) {
  const local = /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:,?\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/.exec(value);
  const parsed = local
    ? new Date(Number(local[3]), Number(local[2]) - 1, Number(local[1]), Number(local[4] ?? 0), Number(local[5] ?? 0), Number(local[6] ?? 0))
    : new Date(value);
  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
}

async function ensureMetadataTab() {
  const { google } = await import("googleapis");
  const encoded = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64;
  let credentials: { client_email?: string; private_key?: string } | undefined;
  if (encoded) credentials = JSON.parse(Buffer.from(encoded, "base64").toString("utf8"));
  if (!credentials?.client_email || !credentials.private_key) {
    const client_email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const private_key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    if (client_email && private_key) credentials = { client_email, private_key };
  }
  if (!credentials?.client_email || !credentials.private_key || !process.env.GOOGLE_SHEET_ID) {
    throw new Error("Google Sheets credentials are not configured");
  }
  const auth = new google.auth.GoogleAuth({
    credentials: { ...credentials, private_key: credentials.private_key.replace(/\\n/g, "\n") },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId, fields: "sheets.properties" });
  const tab = spreadsheet.data.sheets?.find((item) => item.properties?.title === metadataTab);
  if (tab?.properties?.sheetId !== undefined) return;
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: { requests: [{ addSheet: { properties: { title: metadataTab } } }] },
  });
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `'${metadataTab}'!A1:E1`,
    valueInputOption: "RAW",
    requestBody: { values: [["Lead ID", "Status", "Note", "Updated At", "Updated By"]] },
  });
}

async function metadataMap() {
  await ensureMetadataTab();
  const response = await getLeadRows(`'${metadataTab}'!A:E`);
  return new Map((response.data.values ?? []).slice(1).map((row) => [String(row[0] ?? ""), {
    status: statuses.includes(row[1] as LeadStatus) ? row[1] as LeadStatus : "New",
    note: String(row[2] ?? ""),
    updatedAt: String(row[3] ?? ""),
  }]));
}

export async function getAdminLeads() {
  const [registrationResponse, contactResponse, metadata] = await Promise.all([
    getLeadRows("'Registration Leads'!A:AF"),
    getLeadRows("'Contact Leads'!A:E"),
    metadataMap(),
  ]);
  const registration = (registrationResponse.data.values ?? []).slice(1).flatMap((row, index) => {
    if (!row.some((value) => String(value ?? "").trim())) return [];
    const sheetRow = index + 2;
    const id = `registration:${sheetRow}`;
    const first = cell(row, 5), middle = cell(row, 6), last = cell(row, 7);
    const state = cell(row, 11), city = cell(row, 12);
    const info = metadata.get(id);
    return [{
      id, type: "registration" as const, submittedAt: cell(row, 0), name: fullName(first, middle, last),
      agency: cell(row, 4), whatsapp: cell(row, 20), mobile: cell(row, 21) || cell(row, 14),
      email: cell(row, 23), uniqueEmail: cell(row, 22), pan: cell(row, 3), city, state,
      plan: cell(row, 27), action: "Agent registration", status: info?.status ?? "New" as LeadStatus,
      note: info?.note ?? "", updatedAt: info?.updatedAt ?? "",
      details: [
        ["WhatsApp Number", cell(row, 20)], ["Email ID", cell(row, 23)], ["PAN Number", cell(row, 3)],
        ["Unique Mobile Number", cell(row, 21)], ["Unique Email ID", cell(row, 22)],
        ["First Name", first], ["Middle Name", middle], ["Last Name", last], ["Travel Agency Name", cell(row, 4)],
        ["Date of Birth", cell(row, 8)], ["Office PIN Code", cell(row, 10)], ["City", city], ["State", state],
        ["Post Office", cell(row, 13)], ["Office Address", cell(row, 9)], ["Plan", cell(row, 27)],
        ["Source URL", cell(row, 28)], ["Reference ID", cell(row, 24)], ["Transaction ID", cell(row, 26)],
        ["Submitted At", cell(row, 0)],
      ].map(([label, value]) => ({ label, value })),
    }];
  });
  const contact = (contactResponse.data.values ?? []).slice(1).flatMap((row, index) => {
    if (!row.some((value) => String(value ?? "").trim())) return [];
    const sheetRow = index + 2;
    const id = `contact:${sheetRow}`;
    const info = metadata.get(id);
    return [{
      id, type: "contact" as const, submittedAt: cell(row, 0), name: fullName(cell(row, 3).split("@")[0]), agency: "—",
      whatsapp: cell(row, 2), mobile: cell(row, 2), email: cell(row, 3), uniqueEmail: "—", pan: "—", city: "—", state: "—",
      plan: cell(row, 1), action: cell(row, 4) || "Contact enquiry", status: info?.status ?? "New" as LeadStatus,
      note: info?.note ?? "", updatedAt: info?.updatedAt ?? "",
      details: [["Submitted At", cell(row, 0)], ["Login Plan", cell(row, 1)], ["WhatsApp Number", cell(row, 2)],
        ["Email", cell(row, 3)], ["Action / Subject", cell(row, 4)]].map(([label, value]) => ({ label, value })),
    }];
  });
  return [...registration, ...contact].sort((a, b) => submittedTime(b.submittedAt) - submittedTime(a.submittedAt));
}

export async function updateLeadMetadata(id: string, status: LeadStatus, note: string, updatedBy: string) {
  if (!statuses.includes(status)) throw new Error("Invalid lead status");
  if (!/^(registration|contact):\d+$/.test(id)) throw new Error("Invalid lead ID");
  await ensureMetadataTab();
  const current = await getLeadRows(`'${metadataTab}'!A:E`);
  const values = current.data.values ?? [];
  const existingIndex = values.findIndex((row, index) => index > 0 && String(row[0] ?? "") === id);
  const updatedAt = new Date().toISOString();
  const row = [id, status, note.slice(0, 5000), updatedAt, updatedBy];
  if (existingIndex >= 1) {
    const rowNumber = existingIndex + 1;
    const { google } = await import("googleapis");
    const encoded = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64;
    const parsed = encoded ? JSON.parse(Buffer.from(encoded, "base64").toString("utf8")) : undefined;
    const credentials = parsed?.client_email && parsed?.private_key ? parsed : {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    };
    const auth = new google.auth.GoogleAuth({ credentials, scopes: ["https://www.googleapis.com/auth/spreadsheets"] });
    await google.sheets({ version: "v4", auth }).spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!, range: `'${metadataTab}'!A${rowNumber}:E${rowNumber}`,
      valueInputOption: "RAW", requestBody: { values: [row] },
    });
  } else {
    const { appendLeadRow } = await import("@/lib/googleSheets");
    await appendLeadRow(`'${metadataTab}'`, "A:E", row);
  }
  return { updatedAt };
}
