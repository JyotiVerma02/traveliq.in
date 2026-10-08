import "server-only";
import { createHash } from "node:crypto";

import { appendLeadRow, getLeadRows, updateLeadCellRanges } from "@/lib/googleSheets";

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
  subject: string;
  status: LeadStatus;
  note: string;
  followUpDate: string;
  updatedAt: string;
  details: Array<{ label: string; value: string }>;
};

const metadataTab = "Admin Lead Metadata";
const statuses: LeadStatus[] = ["New", "Contacted", "Converted", "Rejected"];
const metadataHeaders = ["Lead ID", "Status", "Note", "Updated At", "Updated By", "Follow Up Date"];
export class AdminLeadNotFoundError extends Error {
  constructor() {
    super("The selected lead no longer exists in Google Sheets. Refresh the dashboard and try again.");
    this.name = "AdminLeadNotFoundError";
  }
}
export class AdminLeadIdentityConflictError extends Error {
  constructor() {
    super("This lead changed in Google Sheets. Refresh the dashboard and try again.");
    this.name = "AdminLeadIdentityConflictError";
  }
}
const cell = (row: string[], index: number) => String(row[index] ?? "").trim();
const columnName = (index: number) => {
  let value = index + 1;
  let name = "";
  while (value > 0) {
    const remainder = (value - 1) % 26;
    name = String.fromCharCode(65 + remainder) + name;
    value = Math.floor((value - 1) / 26);
  }
  return name;
};
const leadFingerprint = (row: string[]) => createHash("sha256").update(JSON.stringify(row)).digest("hex");
const leadId = (type: LeadType, row: string[], sheetRow: number) => `${type}:${sheetRow}:${leadFingerprint(row)}`;
const fullName = (...parts: string[]) => parts.map((part) => part.trim()).filter(Boolean).join(" ") || "Unnamed lead";
function submittedTime(value: string) {
  const local = /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:,?\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/.exec(value);
  const parsed = local
    ? new Date(Number(local[3]), Number(local[2]) - 1, Number(local[1]), Number(local[4] ?? 0), Number(local[5] ?? 0), Number(local[6] ?? 0))
    : new Date(value);
  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
}

function hasValidSubmittedAt(value: string) {
  return Boolean(value.trim()) && submittedTime(value) > 0;
}

function isValidMobile(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 12 && digits.startsWith("91"));
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidRegistrationRow(row: string[]) {
  const whatsapp = cell(row, 20);
  const uniqueMobile = cell(row, 21);
  const email = cell(row, 23);
  const uniqueEmail = cell(row, 22);
  return hasValidSubmittedAt(cell(row, 0))
    && isValidMobile(whatsapp)
    && isValidMobile(uniqueMobile)
    && isValidEmail(email)
    && isValidEmail(uniqueEmail)
    && /^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/.test(cell(row, 3))
    && Boolean(cell(row, 5))
    && /^[1-9][0-9]{5}$/.test(cell(row, 10))
    && Boolean(cell(row, 11) && cell(row, 12) && cell(row, 13) && cell(row, 9));
}

function isValidContactRow(row: string[]) {
  const hasContactContext = Boolean(cell(row, 5) || cell(row, 1) || cell(row, 4) || cell(row, 6) || cell(row, 7));
  return hasValidSubmittedAt(cell(row, 0))
    && isValidMobile(cell(row, 2))
    && isValidEmail(cell(row, 3))
    && hasContactContext;
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
  if (tab?.properties?.sheetId === undefined) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests: [{ addSheet: { properties: { title: metadataTab } } }] },
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `'${metadataTab}'!A1:F1`,
      valueInputOption: "RAW",
      requestBody: { values: [metadataHeaders] },
    });
    return;
  }
  const headerResponse = await sheets.spreadsheets.values.get({ spreadsheetId, range: `'${metadataTab}'!A1:Z1` });
  const existingHeaders = headerResponse.data.values?.[0] ?? [];
  for (const header of metadataHeaders) {
    if (existingHeaders.some((item) => String(item).trim().toLowerCase() === header.toLowerCase())) continue;
    let newHeaderIndex = existingHeaders.findIndex((item) => !String(item ?? "").trim());
    if (newHeaderIndex < 0) newHeaderIndex = existingHeaders.length;
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `'${metadataTab}'!${columnName(newHeaderIndex)}1`,
      valueInputOption: "RAW",
      requestBody: { values: [[header]] },
    });
    existingHeaders[newHeaderIndex] = header;
  }
}

async function metadataMap() {
  await ensureMetadataTab();
  const response = await getLeadRows(`'${metadataTab}'!A:Z`);
  const values = response.data.values ?? [];
  const headers = (values[0] ?? []).map((header) => String(header ?? "").trim().toLowerCase());
  const index = (header: string) => headers.indexOf(header.toLowerCase());
  const idIndex = index("Lead ID"), statusIndex = index("Status"), noteIndex = index("Note");
  const updatedIndex = index("Updated At"), followUpIndex = index("Follow Up Date");
  if ([idIndex, statusIndex, noteIndex, updatedIndex, followUpIndex].some((value) => value < 0)) {
    throw new Error("Admin Lead Metadata headers are incomplete");
  }
  return new Map(values.slice(1).map((row) => [String(row[idIndex] ?? ""), {
    status: statuses.includes(row[statusIndex] as LeadStatus) ? row[statusIndex] as LeadStatus : "New",
    note: String(row[noteIndex] ?? ""),
    updatedAt: String(row[updatedIndex] ?? ""),
    followUpDate: String(row[followUpIndex] ?? ""),
  }]));
}

export async function getAdminLeads() {
  const [registrationResponse, contactResponse, metadata] = await Promise.all([
    getLeadRows("'Registration Leads'!A:AF"),
    getLeadRows("'Contact Leads'!A:H"),
    metadataMap(),
  ]);
  const registration = (registrationResponse.data.values ?? []).slice(1).flatMap((row, index) => {
    if (!isValidRegistrationRow(row)) return [];
    const sheetRow = index + 2;
    const id = leadId("registration", row, sheetRow);
    const first = cell(row, 5), middle = cell(row, 6), last = cell(row, 7);
    const state = cell(row, 11), city = cell(row, 12);
    const info = metadata.get(id) ?? metadata.get(`registration:${sheetRow}`);
    return [{
      id, type: "registration" as const, submittedAt: cell(row, 0), name: fullName(first, middle, last),
      agency: cell(row, 4), whatsapp: cell(row, 20), mobile: cell(row, 21) || cell(row, 14),
      email: cell(row, 23), uniqueEmail: cell(row, 22), pan: cell(row, 3), city, state,
      plan: cell(row, 27), action: "Agent registration", subject: "", status: info?.status ?? "New" as LeadStatus,
      note: info?.note ?? "", updatedAt: info?.updatedAt ?? "", followUpDate: info?.followUpDate ?? "",
      details: [
        ["Submitted At", cell(row, 0)], ["IP Address", cell(row, 1)], ["Website", cell(row, 2)],
        ["PAN Number", cell(row, 3)], ["Travel Agency Name", cell(row, 4)],
        ["First Name", first], ["Middle Name", middle], ["Last Name", last], ["Date of Birth", cell(row, 8)],
        ["Office Address", cell(row, 9)], ["Office PIN Code", cell(row, 10)], ["Office State", cell(row, 11)],
        ["Office City", cell(row, 12)], ["Office Post Office", cell(row, 13)], ["Office Mobile", cell(row, 14)],
        ["Home Address", cell(row, 15)], ["Home PIN Code", cell(row, 16)], ["Home State", cell(row, 17)],
        ["Home City", cell(row, 18)], ["Home Post Office", cell(row, 19)], ["WhatsApp Number", cell(row, 20)],
        ["Unique Mobile Number", cell(row, 21)], ["Unique Email ID", cell(row, 22)], ["Office Email", cell(row, 23)],
        ["Reference ID", cell(row, 24)], ["Initial Reference ID", cell(row, 25)], ["Transaction ID", cell(row, 26)],
        ["Plan", cell(row, 27)], ["Source URL", cell(row, 28)], ["Comment 1", cell(row, 29)],
        ["Comment 2", cell(row, 30)], ["Comment Timestamp", cell(row, 31)],
      ].map(([label, value]) => ({ label, value })),
    }];
  });
  const contact = (contactResponse.data.values ?? []).slice(1).flatMap((row, index) => {
    if (!isValidContactRow(row)) return [];
    const sheetRow = index + 2;
    const id = leadId("contact", row, sheetRow);
    const info = metadata.get(id) ?? metadata.get(`contact:${sheetRow}`);
    return [{
      id, type: "contact" as const, submittedAt: cell(row, 0), name: cell(row, 5) || "Unnamed lead", agency: "—",
      whatsapp: cell(row, 2), mobile: cell(row, 2), email: cell(row, 3), uniqueEmail: "—", pan: "—", city: "—", state: "—",
      plan: cell(row, 1), action: cell(row, 4) || "Contact enquiry", subject: cell(row, 6), status: info?.status ?? "New" as LeadStatus,
      note: info?.note ?? "", updatedAt: info?.updatedAt ?? "", followUpDate: info?.followUpDate ?? "",
      details: [["Name", cell(row, 5) || "Unnamed lead"], ["Email", cell(row, 3)],
        ["WhatsApp Number", cell(row, 2)], ["Action", cell(row, 4)], ["Subject", cell(row, 6)], ["Message", cell(row, 7)],
        ["Service / Plan", cell(row, 1)], ["Submitted At", cell(row, 0)]].map(([label, value]) => ({ label, value })),
    }];
  });
  return [...registration, ...contact].sort((a, b) => submittedTime(b.submittedAt) - submittedTime(a.submittedAt));
}

export async function updateLeadMetadata(id: string, status: LeadStatus, note: string, followUpDate: string, updatedBy: string) {
  if (!statuses.includes(status)) throw new Error("Invalid lead status");
  if (typeof note !== "string" || note.length > 5000) throw new Error("Admin notes must be 5,000 characters or fewer");
  if (typeof followUpDate !== "string" || (followUpDate && !isValidFollowUpDate(followUpDate))) {
    throw new Error("Choose today or a future follow-up date.");
  }
  const match = /^(registration|contact):(\d+):([a-f0-9]{64})$/.exec(id);
  if (!match) throw new Error("Invalid lead ID. Refresh the dashboard and try again.");

  const type = match[1] as LeadType;
  const sheetRow = Number(match[2]);
  if (!Number.isSafeInteger(sheetRow) || sheetRow < 2) throw new Error("Invalid lead ID. Refresh the dashboard and try again.");
  const sourceRange = type === "registration"
    ? `'Registration Leads'!A${sheetRow}:AF${sheetRow}`
    : `'Contact Leads'!A${sheetRow}:H${sheetRow}`;
  const sourceResponse = await getLeadRows(sourceRange);
  const sourceRow = sourceResponse.data.values?.[0] ?? [];
  if (leadFingerprint(sourceRow) !== match[3]) throw new AdminLeadIdentityConflictError();
  if (type === "registration" ? !isValidRegistrationRow(sourceRow) : !isValidContactRow(sourceRow)) throw new AdminLeadNotFoundError();

  await ensureMetadataTab();
  const current = await getLeadRows(`'${metadataTab}'!A:Z`);
  const values = current.data.values ?? [];
  const headers = (values[0] ?? []).map((header) => String(header ?? "").trim().toLowerCase());
  const idIndex = headers.indexOf("lead id");
  const existingIndex = values.findIndex((row, index) => index > 0 && String(row[idIndex] ?? "") === id);
  const legacyIndex = existingIndex >= 1 ? -1 : values.findIndex((row, index) => index > 0 && String(row[idIndex] ?? "") === `${type}:${sheetRow}`);
  const updatedAt = new Date().toISOString();
  const updates: Array<{ range: string; value: string }> = [
    ["Lead ID", id], ["Status", status], ["Note", note], ["Updated At", updatedAt],
    ["Updated By", updatedBy], ["Follow Up Date", followUpDate],
  ].map(([header, value]) => {
    const columnIndex = headers.indexOf(String(header).toLowerCase());
    if (columnIndex < 0) throw new Error(`Admin Lead Metadata is missing the ${header} column`);
    return { range: `'${metadataTab}'!${columnName(columnIndex)}${existingIndex >= 1 || legacyIndex >= 1 ? (existingIndex >= 1 ? existingIndex : legacyIndex) + 1 : ""}`, value: String(value) };
  });
  if (existingIndex >= 1 || legacyIndex >= 1) {
    const result = await updateLeadCellRanges(updates);
    if ((result.data.totalUpdatedCells ?? 0) < updates.length) throw new Error("Google Sheets did not confirm the lead update");
  } else {
    const row = Array.from({ length: Math.max(headers.length, 26) }, () => "");
    for (const update of updates) {
      const column = update.range.match(/!([A-Z]+)$/)?.[1];
      if (!column) throw new Error("Invalid Admin Lead Metadata column");
      let index = 0;
      for (const character of column) index = index * 26 + character.charCodeAt(0) - 64;
      row[index - 1] = update.value;
    }
    const result = await appendLeadRow(`'${metadataTab}'`, `A:${columnName(row.length - 1)}`, row);
    if (result.data.updates?.updatedRows !== 1) throw new Error("Google Sheets did not confirm the lead update");
  }
  return { updatedAt, followUpDate };
}

function todayInIndia() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)?.value ?? "";
  return `${part("year")}-${part("month")}-${part("day")}`;
}

function isValidFollowUpDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value && value >= todayInIndia();
}
