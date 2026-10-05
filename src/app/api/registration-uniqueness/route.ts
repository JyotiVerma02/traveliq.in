import { NextRequest, NextResponse } from "next/server";
import { findRegisteredAccountConflicts } from "@/lib/registered-accounts";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const errors = await findRegisteredAccountConflicts(
      [body.email],
      [body.mobile],
    );

    return NextResponse.json({ success: true, errors }, {
      status: Object.keys(errors).length ? 409 : 200,
    });
  } catch (error) {
    console.error("Registration uniqueness lookup error:", error);
    return NextResponse.json(
      { success: false, message: "Registration uniqueness checks are temporarily unavailable." },
      { status: 503 },
    );
  }
}
