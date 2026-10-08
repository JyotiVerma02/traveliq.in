import { NextRequest, NextResponse } from "next/server";
import { appendLeadRow, getLeadRows, updateLeadCells } from "@/lib/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ success: false, message: "Invalid contact submission." }, { status: 400 });
    }
    const { loginPlan, whatsappNumber, email, action, name, subject, message } = body;
    const text = (value: unknown) => String(value ?? "").trim();
    const cleanPhone = text(whatsappNumber);
    const digits = cleanPhone.replace(/\D/g, "");
    const validPhone = digits.length === 10 || (digits.length === 12 && digits.startsWith("91"));
    const cleanEmail = text(email);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);
    const isRegistrationFunnel = Boolean(text(loginPlan));
    const errors: Record<string, string> = {};

    if (!validPhone) errors.phone = "Enter a valid 10-digit mobile number.";
    if (!validEmail) errors.email = "Enter a valid email address.";
    if (!isRegistrationFunnel && !text(name)) errors.name = "Name is required.";
    if (!isRegistrationFunnel && !text(message)) errors.message = "Message is required.";
    if (Object.keys(errors).length) {
      return NextResponse.json({ success: false, message: "Please correct the contact details.", fieldErrors: errors }, { status: 400 });
    }

    const values = [
      // A - Date
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
      // B - Service or login plan
      text(loginPlan) || (text(name) ? "Website contact form" : ""),
      // C - WhatsApp Number
      cleanPhone,
      // D - Email
      cleanEmail,
      // E - Action (legacy-compatible summary)
      text(action) || text(subject) || "Contact form enquiry",
      // F - Name
      text(name),
      // G - Subject
      text(subject),
      // H - Message
      text(message),
    ];

    if (values.length !== 8) {
      throw new Error("Contact lead column mapping must contain exactly eight values");
    }

    const extraHeaders = (await getLeadRows("'Contact Leads'!F1:H1")).data.values?.[0] ?? [];
    if (extraHeaders.every((value) => !String(value ?? "").trim())) {
      await updateLeadCells("'Contact Leads'!F1:H1", ["Name", "Subject", "Message"]);
    } else if (extraHeaders.join("|") !== "Name|Subject|Message") {
      throw new Error("Contact Leads columns F:H already contain different data");
    }

    const result = await appendLeadRow("'Contact Leads'", "A:H", values);

    const updatedRows = result.data.updates?.updatedRows ?? 0;
    const updatedRange = result.data.updates?.updatedRange;
    const updatedStart = updatedRange?.split("!").at(-1)?.split(":")[0]?.replace(/\$/g, "");
    if (updatedRows !== 1 || !updatedStart || !/^A\d+$/.test(updatedStart)) {
      throw new Error("Google Sheets did not confirm that a contact lead was appended from column A");
    }

    return NextResponse.json({
      success: true,
      message: "Contact lead saved successfully",
      updatedRows,
      updatedRange,
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
