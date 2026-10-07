import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin/auth";
import { getAdminLeads, type AdminLead } from "@/lib/admin/leads";
import AdminDashboard from "./admin-dashboard";

export const metadata = {
  title: "Lead Overview | TravelIQ Admin",
  description: "Private TravelIQ lead management workspace for authorized administrators.",
  robots: { index: false, follow: false, noarchive: true },
};

export default async function AdminDashboardPage() {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  const session = token ? verifyAdminSessionToken(token) : null;
  if (!session) redirect("/admin/login/");

  let leads: AdminLead[] = [];
  let loadError = "";
  try {
    leads = await getAdminLeads();
  } catch (error) {
    console.error("Admin dashboard initial lead load failed:", error);
    loadError = "Lead data could not be loaded. Check the Google Sheets connection and service account access.";
  }

  return <AdminDashboard email={session.email} initialLeads={leads} initialError={loadError} />;
}
