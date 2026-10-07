import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminLoginForm from "@/app/admin/login/login-form";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin/auth";

export const metadata: Metadata = {
  title: "Admin Login | TravelIQ",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (token && verifyAdminSessionToken(token)) {
    redirect("/admin/dashboard/");
  }

  return <AdminLoginForm />;
}
