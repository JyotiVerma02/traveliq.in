import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";

import { canonicalUrl } from "@/lib/site";
import RegistrationForm from "./registration-form";

export const metadata: Metadata = {
  title: "IRCTC Agent Registration – Plans & Pricing | TravelIQ",
  description:
    "Enter your WhatsApp mobile number and email ID to proceed with IRCTC agent registration and learn about TravelIQ plan details.",
  alternates: {
    canonical: canonicalUrl(
      "/signup/registration_form/irctc-agent-registration/"
    ),
  },
  openGraph: {
    title: "IRCTC Agent Registration – Plans & Pricing | TravelIQ",
    description:
      "Enter your WhatsApp mobile number and email ID to explore IRCTC agent registration plans and pricing.",
    url: canonicalUrl(
      "/signup/registration_form/irctc-agent-registration/"
    ),
    type: "website",
  },
};

export default function RegistrationPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#E6F0FA] via-[#EBF3FC] to-[#E3EFFB] px-4 py-8 sm:px-6 lg:px-8">
      {/* Outer Floating Decorative Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-10 top-24 h-6 w-6 rounded-full border-2 border-orange-300/70 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-1/4 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-1/4 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl"
      />

      {/* Outer Floating Dot Grid on Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 grid-cols-5 gap-2.5 opacity-30 md:grid"
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>

      <div className="relative w-full max-w-[620px]">
        {/* Top Back Link */}
        <div className="mb-4">
          <Link
            href="/irctc-agent-registration"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0B2545] transition-colors hover:text-[#EE5326]"
          >
            <ArrowLeft className="h-4 w-4 stroke-[2.5]" />
            Back to IRCTC Agent Registration
          </Link>
        </div>

        {/* Main Outer Card */}
        <section
          aria-labelledby="registration-heading"
          className="overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(11,37,69,0.11)]"
        >
          {/* Header Banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#03183B] via-[#052960] to-[#0A4595] text-white">
            {/* Integrated Train Image on Right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-[55%] pointer-events-none overflow-hidden">
              <Image
                src="/vande_bharat_hero.webp"
                alt="IRCTC Vande Bharat Express Train"
                fill
                priority
                sizes="(max-width: 768px) 50vw, 340px"
                className="object-cover object-right"
              />
              {/* Left-to-right navy gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#03183B] via-[#03183B]/70 to-transparent" />
            </div>

            {/* Header Content */}
            <div className="relative z-10 p-6 sm:p-8 sm:pb-10 max-w-[340px] sm:max-w-[380px]">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5429] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                <Sparkles className="h-3 w-3 fill-current" />
                PLANS &amp; PRICING
              </div>

              {/* Title */}
              <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                IRCTC{" "}
                <span className="text-[#FF8A3D]">
                  Agent Registration
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-2 text-xs font-medium leading-relaxed text-blue-100/90 sm:text-sm">
                Enter your details to explore TravelIQ&apos;s IRCTC agent plans and pricing.
              </p>
            </div>

            {/* Wavy bottom transition with Orange accent stroke underneath */}
            <div className="relative w-full h-8 -mt-5 z-20 pointer-events-none">
              {/* Orange accent wave layer underneath */}
              <svg
                viewBox="0 0 1440 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 w-full h-8 text-[#FF5722] fill-current translate-y-[3px]"
              >
                <path d="M0,35 C360,85 840,15 1440,45 L1440,100 L0,100 Z"></path>
              </svg>
              {/* White top wave layer */}
              <svg
                viewBox="0 0 1440 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 w-full h-8 text-white fill-current"
              >
                <path d="M0,35 C360,85 840,15 1440,45 L1440,100 L0,100 Z"></path>
              </svg>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-6 py-6 sm:px-10 sm:py-8">
            {/* Get Started Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="h-px w-6 bg-orange-300" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#E56B48]">
                  GET STARTED
                </span>
                <span className="h-px w-6 bg-orange-300" />
              </div>

              <h2
                id="registration-heading"
                className="mt-2 text-2xl font-black text-[#0B2545] sm:text-[28px] tracking-tight"
              >
                Enter your details to proceed
              </h2>

              <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm max-w-md mx-auto leading-relaxed">
                Enter your WhatsApp number and E-mail ID to know more about our plan details.
              </p>
            </div>

            {/* Form */}
            <div className="mt-6">
              <RegistrationForm />
            </div>
          </div>
        </section>

        {/* Bottom Footer Link */}
        <p className="mt-6 text-center text-xs font-semibold text-slate-600 sm:text-sm">
          Need help?{" "}
          <Link
            href="/contact-us"
            className="font-extrabold text-[#0B2545] transition-colors hover:text-[#EE5326]"
          >
            Contact TravelIQ Support
          </Link>
        </p>
      </div>
    </main>
  );
}