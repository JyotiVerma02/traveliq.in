import { NextRequest, NextResponse } from "next/server";
import { findRegisteredAccountConflicts } from "@/lib/registered-accounts";

async function checkUniqueValues(mobile: unknown, email: unknown) {
  const normalizedMobile = String(mobile ?? "").trim();
  const normalizedEmail = String(email ?? "").trim();
  const hasMobile = Boolean(normalizedMobile);
  const hasEmail = Boolean(normalizedEmail);

  if (!hasMobile && !hasEmail) {
    return NextResponse.json(
      { success: false, message: "Provide a mobile number or email address." },
      { status: 400 },
    );
  }

  if (hasMobile && !/^\d{10}$/.test(normalizedMobile)) {
    return NextResponse.json(
      { success: false, message: "Enter a valid 10-digit mobile number." },
      { status: 400 },
    );
  }

  if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return NextResponse.json(
      { success: false, message: "Enter a valid email address." },
      { status: 400 },
    );
  }

  console.log("[UNIQUE CHECK] request", {
    mobileProvided: hasMobile,
    emailProvided: hasEmail,
  });

  try {
    const errors = await findRegisteredAccountConflicts(normalizedEmail, normalizedMobile);
    const response: Record<string, boolean> = { success: true };
    if (hasMobile) response.mobileExists = Boolean(errors.uniqueMobile);
    if (hasEmail) response.emailExists = Boolean(errors.uniqueEmail);

    return NextResponse.json(response);
  } catch (error) {
    console.error("[UNIQUE CHECK] Google Sheets lookup failed:", error);
    return NextResponse.json(
      { success: false, message: "Registration uniqueness checks are temporarily unavailable." },
      { status: 503 },
    );
  }
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  return checkUniqueValues(params.get("mobile"), params.get("email"));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return checkUniqueValues(
      body.uniqueMobile ?? body.uniqueMobileNumber ?? body.mobile,
      body.uniqueEmail ?? body.email,
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid verification request." },
      { status: 400 },
    );
  }
}
