"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";

export default function DashboardActions() {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function signOut() {
    setIsSigningOut(true);
    try {
      await fetch("/api/admin/logout/", { method: "POST" });
    } finally {
      router.replace("/admin/login/");
      router.refresh();
    }
  }

  return (
    <button
      type="button"
      onClick={signOut}
      disabled={isSigningOut}
      className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-[#173B68] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 disabled:opacity-60"
    >
      <LogOut aria-hidden="true" className="h-4 w-4" />
      {isSigningOut ? "Signing out..." : "Sign out"}
    </button>
  );
}
