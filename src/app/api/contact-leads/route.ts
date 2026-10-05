import { NextRequest, NextResponse } from "next/server";
import { appendLeadRow } from "@/lib/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { loginPlan, whatsappNumber, email, action } = body;

    if (!whatsappNumber) {
      return NextResponse.json(
        {
          success: false,
          message: "WhatsApp number is required",
        },
        { status: 400 }
      );
    }

    const values = [
      // A - Date
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
      // B - Login Plan
      loginPlan || "",
      // C - WhatsApp Number
      whatsappNumber || "",
      // D - Email
      email || "",
      // E - Action
      action || "",
    ];

    if (values.length !== 5) {
      throw new Error("Contact lead column mapping must contain exactly five values");
    }

    const result = await appendLeadRow("'Contact Leads'", "A:E", values);

    return NextResponse.json({
      success: true,
      message: "Contact lead saved successfully",
      updatedRange: result.data.updates?.updatedRange,
    });
  } catch (error) {
    console.error("Contact lead append failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your enquiry right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
