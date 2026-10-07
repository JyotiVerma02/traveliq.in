"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = (await response.json()) as { success?: boolean; code?: string };

      if (!response.ok || !result.success) {
        setError(
          response.status === 401
            ? "Invalid email or password."
            : "Admin login is temporarily unavailable.",
        );
        return;
      }

      router.replace("/admin/dashboard/");
      router.refresh();
    } catch {
      setError("Admin login is temporarily unavailable.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#06162C] px-3 py-5 text-white sm:px-5 sm:py-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_36%,rgba(47,128,237,0.16),transparent_38%),linear-gradient(135deg,#06162C,#0A2342)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#2F80ED]/10 blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#F4511E]/[0.08] blur-[110px]" />
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.12]" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path d="M-30 610c180 10 157-178 335-192s180 137 315 97 181-180 331-142 203 142 522 11" fill="none" stroke="#78AAE8" strokeDasharray="4 10" strokeWidth="2" />
      </svg>

      <section className="relative w-full max-w-[440px] overflow-hidden rounded-[30px] border border-[#A9C7ED]/20 bg-[linear-gradient(145deg,rgba(24,48,76,0.97),rgba(12,31,54,0.98))] p-5 shadow-[14px_16px_36px_rgba(0,0,0,0.34),-8px_-8px_26px_rgba(114,157,208,0.08),inset_1px_1px_0_rgba(255,255,255,0.09)] backdrop-blur-2xl sm:p-7">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#B8D6FA]/70 to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-56 w-56 rounded-full bg-[#2F80ED]/10 blur-[70px]" />

        <div className="relative mb-5 flex items-center justify-between sm:mb-6">
          <Image src="/logo.webp" alt="TravelIQ" width={126} height={46} className="h-9 w-auto object-contain brightness-0 invert" priority />
          <span className="rounded-full border border-white/[0.08] bg-[#163353] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#B7D5FA] shadow-[4px_4px_10px_rgba(0,0,0,0.2),-3px_-3px_8px_rgba(124,166,213,0.08),inset_1px_1px_0_rgba(255,255,255,0.08)]">
            Admin portal
          </span>
        </div>

        <div className="relative mb-5 sm:mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4511E]">TravelIQ Admin</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-[2rem]">Welcome back</h1>
          <p className="mt-2 text-sm leading-6 text-slate-300">Secure access to website leads and registrations.</p>
        </div>

        <form onSubmit={handleSubmit} className="relative space-y-4">
          <div>
            <label htmlFor="admin-email" className="mb-1.5 block text-sm font-medium text-slate-200">Email</label>
            <div className="relative">
              <Mail aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
              <input
                id="admin-email"
                name="email"
                type="email"
                autoComplete="email"
                autoCapitalize="none"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@example.com"
                className="h-12 w-full rounded-[15px] border border-white/[0.08] bg-[#0A1D34]/90 pl-11 pr-4 text-sm text-white shadow-[inset_5px_5px_12px_rgba(0,0,0,0.22),inset_-4px_-4px_10px_rgba(111,155,204,0.045)] outline-none transition placeholder:text-slate-500 focus:border-[#6AA4EF]/70 focus:ring-4 focus:ring-[#2F80ED]/15"
              />
            </div>
          </div>

          <div>
            <label htmlFor="admin-password" className="mb-1.5 block text-sm font-medium text-slate-200">Password</label>
            <div className="relative">
              <LockKeyhole aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
              <input
                id="admin-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="h-12 w-full rounded-[15px] border border-white/[0.08] bg-[#0A1D34]/90 pl-11 pr-12 text-sm text-white shadow-[inset_5px_5px_12px_rgba(0,0,0,0.22),inset_-4px_-4px_10px_rgba(111,155,204,0.045)] outline-none transition placeholder:text-slate-500 focus:border-[#6AA4EF]/70 focus:ring-4 focus:ring-[#2F80ED]/15"
              />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6AA4EF]"
              >
                {showPassword ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
              </button>
            </div>
          </div>

          {error ? (
            <p role="alert" aria-live="polite" className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-12 w-full items-center justify-center rounded-[15px] bg-gradient-to-br from-[#FF6A32] to-[#E9481C] px-4 text-sm font-bold text-white shadow-[6px_7px_15px_rgba(0,0,0,0.24),-3px_-3px_10px_rgba(255,159,119,0.12),inset_1px_1px_0_rgba(255,255,255,0.24)] transition hover:brightness-110 hover:shadow-[7px_9px_18px_rgba(0,0,0,0.28),-3px_-3px_10px_rgba(255,159,119,0.14)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F4511E]/30 disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting ? "Signing in..." : "Sign in to Dashboard"}
          </button>
        </form>

        <div className="relative mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-4 text-xs text-slate-400">
          <ShieldCheck aria-hidden="true" className="h-4 w-4 text-[#75A9E9]" />
          <span>Protected admin access</span>
        </div>
      </section>
    </main>
  );
}
