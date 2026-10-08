import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin/auth";
import { AdminLeadIdentityConflictError, AdminLeadNotFoundError, getAdminLeads, updateLeadMetadata, type LeadStatus } from "@/lib/admin/leads";

export const dynamic = "force-dynamic";
const validStatuses = new Set(["New", "Contacted", "Converted", "Rejected"]);

async function requireAdmin() {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  return token ? verifyAdminSessionToken(token) : null;
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  try {
    return NextResponse.json({ leads: await getAdminLeads() }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Admin leads load failed:", error);
    return NextResponse.json({ message: "Unable to load leads. Check the Google Sheets connection." }, { status: 503 });
  }
}

export async function PATCH(request: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object" || Array.isArray(body)
      || typeof body.id !== "string" || typeof body.status !== "string" || typeof body.note !== "string"
      || typeof body.followUpDate !== "string") {
      return NextResponse.json({ message: "Invalid lead update" }, { status: 400 });
    }
    if (!validStatuses.has(body.status)) {
      return NextResponse.json({ message: "Choose a valid lead status." }, { status: 400 });
    }
    if (!/^(?:registration|contact):\d+:[a-f0-9]{64}$/.test(body.id)) {
      return NextResponse.json({ message: "Invalid lead ID." }, { status: 400 });
    }
    if (body.note.length > 5000) {
      return NextResponse.json({ message: "Admin notes must be 5,000 characters or fewer." }, { status: 400 });
    }
    const result = await updateLeadMetadata(body.id, body.status as LeadStatus, body.note, body.followUpDate, admin.email);
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("Admin lead update failed:", error);
    if (error instanceof AdminLeadNotFoundError) {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }
    if (error instanceof AdminLeadIdentityConflictError) {
      return NextResponse.json({ message: error.message }, { status: 409 });
    }
    if (error instanceof Error && error.message === "Choose today or a future follow-up date.") {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: "Unable to save lead changes." }, { status: 500 });
  }
}
