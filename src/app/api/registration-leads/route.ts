import { NextRequest, NextResponse } from "next/server";
import { appendLeadRow, getLeadRows, updateLeadCells } from "@/lib/googleSheets";
import {
  findRegisteredAccountConflicts,
  normalizeRegistrationEmail,
  normalizeRegistrationMobile,
  type RegistrationFieldErrors,
} from "@/lib/registered-accounts";

export async function POST(request: NextRequest) {
  try {
    console.log("[REGISTRATION] submission received");
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ success: false, message: "Invalid registration submission." }, { status: 400 });
    }
    const text = (value: unknown) => String(value ?? "").trim();
    const whatsappNumber = text(body.whatsappNumber);
    const email = text(body.email);
    const panNumber = text(body.panNumber);
    const uniqueMobileNumber = text(body.uniqueMobileNumber);
    const uniqueEmail = text(body.uniqueEmail);
    const firstName = text(body.firstName);
    const middleName = text(body.middleName);
    const lastName = text(body.lastName);
    const travelAgencyName = text(body.travelAgencyName);
    const dateOfBirth = text(body.dateOfBirth);
    const pinCode = text(body.pinCode);
    const city = text(body.city);
    const state = text(body.state);
    const postOffice = text(body.postOffice);
    const address = text(body.address);
    const referenceId = text(body.referenceId);
    const initialReferenceId = text(body.initialReferenceId);
    const transactionId = text(body.transactionId);
    const plan = text(body.plan);

    const normalizedUniqueEmail = normalizeRegistrationEmail(uniqueEmail);
    const normalizedUniqueMobile = normalizeRegistrationMobile(uniqueMobileNumber);
    const fieldErrors: RegistrationFieldErrors & Record<string, string> = {};
    if (!normalizeRegistrationMobile(whatsappNumber)) fieldErrors.mobile = "Enter a valid 10-digit WhatsApp number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Enter a valid email address.";
    if (!/^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/.test(panNumber)) fieldErrors.pan = "Enter a valid PAN number.";
    if (!normalizedUniqueMobile) fieldErrors.uniqueMobile = "Enter a valid 10-digit mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedUniqueEmail)) fieldErrors.uniqueEmail = "Enter a valid email address.";
    if (!firstName) fieldErrors.firstName = "First name is required.";
    if (!/^[1-9][0-9]{5}$/.test(pinCode)) fieldErrors.pin = "Enter a valid 6-digit PIN code.";
    if (!city) fieldErrors.city = "City is required.";
    if (!state) fieldErrors.state = "State is required.";
    if (!postOffice) fieldErrors.postOffice = "Post Office is required.";
    if (!address) fieldErrors.address = "Address is required.";
    if (dateOfBirth && !/^\d{4}-\d{2}-\d{2}$/.test(dateOfBirth)) fieldErrors.dob = "Enter a valid date of birth.";
    if (Object.keys(fieldErrors).length) {
      return NextResponse.json({ success: false, message: "Please correct the registration details.", fieldErrors }, { status: 400 });
    }

    let duplicateErrors: RegistrationFieldErrors;
    try {
      duplicateErrors = await findRegisteredAccountConflicts(normalizedUniqueEmail, normalizedUniqueMobile);
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

    if (Object.keys(duplicateErrors).length) {
      const field = duplicateErrors.uniqueMobile ? "uniqueMobile" : "uniqueEmail";
      return NextResponse.json(
        {
          success: false,
          statusCode: 409,
          fieldErrors: duplicateErrors,
          field,
          message: duplicateErrors[field],
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
      uniqueMobileNumber,

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
      uniqueMobileNumber,

      // W - Unique Email
      uniqueEmail,

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
    const registrationHeaders = [
      "Date", "IP Address", "Website", "PAN Number", "Company Name", "First Name", "Middle Name", "Last Name",
      "Date of Birth", "Office Address", "Office PIN Code", "Office State", "Office City", "Post Office", "Office Mobile",
      "Home Address", "Home PIN Code", "Home State", "Home City", "Home Post Office", "WhatsApp Phone", "Unique No",
      "Unique Email", "Office Email", "Reff ID", "Init ID", "Transaction ID", "Plan", "Source URL", "Comment 1", "Comment 2", "Comment Timestamp",
    ];
    const firstRow = existingRows[0] || [];
    const pastedHeaders = firstRow.length === 1 ? String(firstRow[0] ?? "").split("\t").map((value) => value.trim()) : [];
    if (pastedHeaders.length === registrationHeaders.length
      && pastedHeaders.every((value, index) => value === registrationHeaders[index])) {
      await updateLeadCells("'Registration Leads'!A1:AF1", registrationHeaders);
    }
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
