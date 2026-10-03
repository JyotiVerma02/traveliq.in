import { google } from "googleapis";

const encodedCredentials =
  process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64;

if (!encodedCredentials) {
  throw new Error(
    "GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 is missing"
  );
}

const credentials = JSON.parse(
  Buffer.from(encodedCredentials, "base64").toString("utf8")
);

if (!credentials.client_email || !credentials.private_key) {
  throw new Error(
    "Invalid Google service account credentials"
  );
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  },
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

export const sheets = google.sheets({
  version: "v4",
  auth,
});