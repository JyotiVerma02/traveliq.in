import { google } from "googleapis";

type ServiceAccountCredentials = {
  client_email?: string;
  private_key?: string;
};

function loadCredentials(): Required<ServiceAccountCredentials> {
  const encodedCredentials = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64;

  if (encodedCredentials) {
    const parsed = JSON.parse(
      Buffer.from(encodedCredentials, "base64").toString("utf8"),
    ) as ServiceAccountCredentials;
    if (parsed.client_email && parsed.private_key) {
      return {
        client_email: parsed.client_email,
        private_key: parsed.private_key.replace(/\\n/g, "\n"),
      };
    }
  }

  const client_email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const private_key = process.env.GOOGLE_PRIVATE_KEY;
  if (client_email && private_key) {
    return {
      client_email,
      private_key: private_key.replace(/\\n/g, "\n"),
    };
  }

  throw new Error("Google Sheets service account credentials are not configured");
}

export const sheets = google.sheets({
  version: "v4",
  auth: new google.auth.GoogleAuth({
    credentials: loadCredentials(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  }),
});

export async function appendLeadRow(
  sheetName: string,
  columns: string,
  values: string[],
) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) throw new Error("Google Sheets spreadsheet ID is not configured");

  return sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!${columns}`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [values] },
  });
}
