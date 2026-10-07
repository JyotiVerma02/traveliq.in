import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin/auth";
import { getAdminLeads, updateLeadMetadata, type LeadStatus } from "@/lib/admin/leads";

export const dynamic = "force-dynamic";

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
    const body = await request.json();
    if (typeof body.id !== "string" || typeof body.status !== "string" || typeof body.note !== "string") {
      return NextResponse.json({ message: "Invalid lead update" }, { status: 400 });
    }
    const result = await updateLeadMetadata(body.id, body.status as LeadStatus, body.note, admin.email);
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("Admin lead update failed:", error);
    return NextResponse.json({ message: "Unable to save lead changes." }, { status: 500 });
  }
}
