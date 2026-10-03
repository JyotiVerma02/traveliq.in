import { NextRequest, NextResponse } from "next/server";
import { sheets } from "@/lib/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { formType } = body;

    let range = "";
    let values: string[] = [];

    // -----------------------------
    // CONTACT LEADS
    // -----------------------------
    if (formType === "contact") {
      const {
        loginPlan,
        whatsappNumber,
        email,
        action,
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

      range = "Contact Leads!A:E";

      values = [
        new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
        loginPlan || "",
        whatsappNumber || "",
        email || "",
        action || "",
      ];
    }

    // -----------------------------
    // REGISTRATION LEADS
    // -----------------------------
    else if (formType === "registration") {
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

      range = "Registration Leads!A:P";

      values = [
        new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
        whatsappNumber || "",
        email || "",
        panNumber || "",
        uniqueMobileNumber || "",
        uniqueEmail || "",
        firstName || "",
        middleName || "",
        lastName || "",
        travelAgencyName || "",
        dateOfBirth || "",
        pinCode || "",
        city || "",
        state || "",
        postOffice || "",
        address || "",
      ];
    }

    // -----------------------------
    // INVALID FORM TYPE
    // -----------------------------
    else {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form type",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // SAVE TO GOOGLE SHEET
    // -----------------------------
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [values],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Lead saved successfully",
    });
  } catch (error) {
    console.error("Google Sheets API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save lead",
      },
      { status: 500 }
    );
  }
}