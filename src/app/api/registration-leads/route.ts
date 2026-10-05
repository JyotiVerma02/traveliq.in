import { NextRequest, NextResponse } from "next/server";
import { appendLeadRow } from "@/lib/googleSheets";
import { findRegisteredAccountConflicts } from "@/lib/registered-accounts";

export async function POST(request: NextRequest) {
  try {
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

    const fieldErrors = await findRegisteredAccountConflicts(
      [email, uniqueEmail],
      [whatsappNumber, uniqueMobileNumber],
    );
    if (Object.keys(fieldErrors).length) {
      return NextResponse.json(
        {
          success: false,
          statusCode: 409,
          fieldErrors,
          ...(fieldErrors.email ? { field: "email", message: fieldErrors.email } : {}),
          ...(fieldErrors.mobile ? { mobileMessage: fieldErrors.mobile } : {}),
        },
        { status: 409 }
      );
    }

    // ---------------------------------------
    // Request details
    // ---------------------------------------

    const forwardedFor =
      request.headers.get("x-forwarded-for");

    const ipAddress =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "";

    const host =
      request.headers.get("host") || "";

    const origin =
      request.headers.get("origin") || "";

    const referer =
      request.headers.get("referer") || "";

    const website =
      origin || host;

    const sourceUrl =
      referer || origin || "";

    // ---------------------------------------
    // Data must match A -> AF exactly
    // ---------------------------------------

    const values = [
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
      uniqueMobileNumber || "",

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
      uniqueMobileNumber || "",

      // W - Unique Email
      uniqueEmail || "",

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

    if (values.length !== 32) {
      throw new Error("Registration lead column mapping must contain exactly 32 values (A:AF)");
    }

    const result = await appendLeadRow("'Registration Leads'", "A:AF", values);

    return NextResponse.json({
      success: true,
      message:
        "Registration lead saved successfully",

      updatedRange: result.data.updates?.updatedRange,
    });
  } catch (error) {
    console.error("Registration lead append failed:", error);

    const unavailable = error instanceof Error && error.message === "Registered accounts lookup is not configured";
    return NextResponse.json(
      {
        success: false,
        message:
          unavailable
            ? "Registration uniqueness checks are temporarily unavailable."
            : "Failed to save registration lead",
      },
      { status: unavailable ? 503 : 500 }
    );
  }
}
