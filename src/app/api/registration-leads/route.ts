import { NextRequest, NextResponse } from "next/server";
import { appendLeadRow, getLeadRows } from "@/lib/googleSheets";
import {
  findRegisteredAccountConflicts,
  normalizeRegistrationEmail,
  normalizeRegistrationMobile,
  type RegistrationFieldErrors,
} from "@/lib/registered-accounts";

export async function POST(request: NextRequest) {
  try {
    console.log("[REGISTRATION] submission received");
    const body = await request.json();

    const {
      whatsappNumber,
      email,
      panNumber,
      uniqueMobileNumber,
      uniqueEmail,
      firstName,
      middleName,
      lastName,
      travelAgencyName,
      dateOfBirth,
      pinCode,
      city,
      state,
      postOffice,
      address,
      referenceId,
      initialReferenceId,
      transactionId,
      plan,
    } = body;

    if (!whatsappNumber) {
      return NextResponse.json(
        {
          success: false,
          message: "WhatsApp number is required",
        },
        { status: 400 }
      );
    }

    const normalizedUniqueEmail = normalizeRegistrationEmail(uniqueEmail);
    const normalizedUniqueMobile = normalizeRegistrationMobile(uniqueMobileNumber);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedUniqueEmail)) {
      return NextResponse.json(
        { success: false, fieldErrors: { uniqueEmail: "Enter a valid email address." } },
        { status: 400 },
      );
    }
    if (!normalizedUniqueMobile) {
      return NextResponse.json(
        { success: false, fieldErrors: { uniqueMobile: "Enter a valid 10-digit mobile number." } },
        { status: 400 },
      );
    }

    let fieldErrors: RegistrationFieldErrors;
    try {
      fieldErrors = await findRegisteredAccountConflicts(normalizedUniqueEmail, normalizedUniqueMobile);
    } catch (error) {
      console.error("Registration duplicate lookup failed:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Registration uniqueness checks are temporarily unavailable.",
        },
        { status: 503 },
      );
    }

    if (Object.keys(fieldErrors).length) {
      const field = fieldErrors.uniqueMobile ? "uniqueMobile" : "uniqueEmail";
      return NextResponse.json(
        {
          success: false,
          statusCode: 409,
          fieldErrors,
          field,
          message: fieldErrors[field],
        },
        { status: 409 }
      );
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "";
    const host = request.headers.get("host") || "";
    const origin = request.headers.get("origin") || "";
    const referer = request.headers.get("referer") || "";
    const website = origin || host;
    const sourceUrl = referer || origin || "";

    // Match the live Registration Leads headers from A through AF.
    const row = [
      // A - Date
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),

      // B - IP Address
      ipAddress,

      // C - Website
      website,

      // D - PAN Number
      panNumber || "",

      // E - Company Name
      travelAgencyName || "",

      // F - First Name
      firstName || "",

      // G - Middle Name
      middleName || "",

      // H - Last Name
      lastName || "",

      // I - Date of Birth
      dateOfBirth || "",

      // J - Office Address
      address || "",

      // K - Office PIN Code
      pinCode || "",

      // L - Office State
      state || "",

      // M - Office City
      city || "",

      // N - Post Office
      postOffice || "",

      // O - Office Mobile
      normalizedUniqueMobile,

      // P - Home Address
      "",

      // Q - Home PIN Code
      "",

      // R - Home State
      "",

      // S - Home City
      "",

      // T - Home Post Office
      "",

      // U - WhatsApp Phone
      whatsappNumber || "",

      // V - Unique No
      normalizedUniqueMobile,

      // W - Unique Email
      normalizedUniqueEmail,

      // X - Office Email
      email || "",

      // Y - Reff ID
      referenceId || "",

      // Z - Init ID
      initialReferenceId || "",

      // AA - Transaction ID
      transactionId || "",

      // AB - Plan
      plan || "",

      // AC - Source URL
      sourceUrl,

      // AD - Comment 1
      "",

      // AE - Comment 2
      "",

      // AF - Comment Timestamp
      "",
    ];

    if (row.length !== 32 || !row[0]) {
      throw new Error("Registration lead column mapping must contain exactly 32 values (A:AF)");
    }

    // Find the last occupied row first. The existing sheet has older rows whose
    // data starts in P; using A:AF as an append table range alone can make Sheets
    // continue that misplaced table. Starting after the last used row anchors the
    // append at column A without overwriting those rows.
    const existing = await getLeadRows("'Registration Leads'!A:AF");
    const existingRows = existing.data.values || [];
    const lastOccupiedRow = existingRows.reduce(
      (last, values, index) =>
        values.some((value) => String(value ?? "").trim() !== "") ? index + 1 : last,
      0,
    );
    const nextRow = Math.max(lastOccupiedRow + 1, 2);
    const appendColumns = `A${nextRow}:AF`;
    const range = `'Registration Leads'!${appendColumns}`;

    console.log("[REGISTRATION] target", {
      spreadsheetConfigured: Boolean(process.env.GOOGLE_SHEET_ID),
      range,
    });
    console.log("ROW LENGTH:", row.length);
    console.log("ROW FIRST 5 COLUMNS:", ["Date", "IP Address", "Website", "PAN Number", "Company Name"]);
    console.log("ROW[0] is Date:", Boolean(row[0]));
    console.log("ROW[1] has IP address:", Boolean(row[1]));
    console.log("RANGE:", range);

    const result = await appendLeadRow("'Registration Leads'", appendColumns, row);
    const updatedRows = result.data.updates?.updatedRows ?? 0;
    const updatedRange = result.data.updates?.updatedRange;
    const updatedStart = updatedRange?.split("!").at(-1)?.split(":")[0]?.replace(/\$/g, "");

    console.log("[REGISTRATION] Google append result", {
      updatedRows,
      updatedRange,
    });

    if (updatedRows < 1 || !updatedStart || !/^A\d+$/.test(updatedStart)) {
      throw new Error("Google Sheets did not confirm that a registration row was appended from column A");
    }

    return NextResponse.json({
      success: true,
      message: "Registration saved successfully",
      updatedRows,
      updatedRange,
    });
  } catch (error) {
    console.error("[REGISTRATION] Google Sheets append failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to save registration right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
