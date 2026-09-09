import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pay Now | TravelIQ - Account Details & Secure Payment",
  description:
    "Pay Online Secure Payment - Pay your payment securely to Travel IQ Services Private Limited. Bank Details: 50200014341411, IFSC: HDFC0003648.",
};

const accountDetails = [
  {
    label: "A/C NAME",
    value: "Travel IQ Services Private Limited",
  },
  {
    label: "BANK NAME",
    value: "HDFC Bank Ltd",
  },
  {
    label: "ACCOUNT NO",
    value: "50200014341411",
  },
  {
    label: "IFSC CODE",
    value: "HDFC0003648",
  },
];

const clayCard =
  "border border-white/80 bg-white shadow-[10px_12px_30px_rgba(16,64,122,0.07),-8px_-8px_24px_rgba(255,255,255,0.95)]";

export default function PayNowPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F9FC] text-[#0B1728]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[500px] overflow-hidden sm:min-h-[540px] lg:min-h-[560px]">
        {/* Hero Background Image */}
 <Image
  src="/images/pay now.webp"
  alt="TravelIQ secure online payment"
  fill
  priority
  sizes="100vw"
  className="object-cover object-center"
/>

{/* Image Overlay */}
<div className="absolute inset-0 bg-white/25" />

{/* Soft Brand Gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/25 to-[#F7F9FC]/80" />

        {/* Brand Glows */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#EE5326]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#10407A]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl flex-col justify-center px-5 py-10 sm:min-h-[540px] sm:px-8 lg:min-h-[560px] lg:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center">
            <div
              className={`${clayCard} flex items-center gap-3 rounded-full px-5 py-2.5 text-xs sm:text-sm`}
            >
              <Link
                href="/"
                className="font-medium text-[#7A8493] transition-colors duration-300 hover:text-[#EE5326]"
              >
                Home
              </Link>

              <span className="text-[#EE5326]">/</span>

              <span className="font-semibold text-[#10407A]">
                Pay Now
              </span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mx-auto mt-9 max-w-3xl text-center sm:mt-10">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#EE5326]" />

              <span className="text-[10px] font-semibold text-[#EE5326] sm:text-xs">
                Secure Payment
              </span>

              <span className="h-[2px] w-8 rounded-full bg-[#EE5326]" />
            </div>

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-[#10407A] sm:text-5xl lg:text-[60px]">
              Pay Online{" "}
              <span className="text-[#EE5326]">
                Securely
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#526174] sm:text-base sm:leading-8">
              Complete your payment using the official TravelIQ account
              details below. Please verify all information before making your
              transaction.
            </p>

            {/* Hero Trust Points */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2.5 text-xs font-medium text-[#526174] shadow-[4px_6px_16px_rgba(16,64,122,0.06)] backdrop-blur-md">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EE5326] text-[10px] font-semibold text-white">
                  ✓
                </span>
                Secure Transaction
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2.5 text-xs font-medium text-[#526174] shadow-[4px_6px_16px_rgba(16,64,122,0.06)] backdrop-blur-md">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10407A] text-[10px] font-semibold text-white">
                  ✓
                </span>
                Official Account
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2.5 text-xs font-medium text-[#526174] shadow-[4px_6px_16px_rgba(16,64,122,0.06)] backdrop-blur-md">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EE5326] text-[10px] font-semibold text-white">
                  ✓
                </span>
                Easy Verification
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-20 overflow-hidden">
          <svg
            className="absolute bottom-0 h-full w-full"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,45 C300,95 500,5 760,45 C1000,82 1180,20 1440,45 L1440,100 L0,100 Z"
              fill="#F7F9FC"
            />
          </svg>
        </div>
      </section>

      {/* =========================================================
          MAIN PAYMENT AREA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F7F9FC] py-10 sm:py-14 lg:py-16">
        {/* Background decoration */}
        <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-[#EE5326]/4 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#10407A]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =====================================================
              MAIN PAYMENT CARD
          ===================================================== */}
          <div className={`${clayCard} overflow-hidden rounded-[32px]`}>
            <div className="grid lg:grid-cols-12">
              {/* =================================================
                  LEFT — ACCOUNT DETAILS
              ================================================= */}
              <div className="lg:col-span-7">
                <div className="h-full p-6 sm:p-8 lg:p-10">
                  {/* Heading */}
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center gap-3 lg:justify-start">
                      <span className="h-[2px] w-8 rounded-full bg-[#EE5326]" />

                      <span className="text-[10px] font-semibold text-[#EE5326]">
                        Bank Information
                      </span>
                    </div>

                    <h2 className="mt-3 text-2xl font-bold text-[#10407A] sm:text-3xl">
                      Travel IQ Account Details
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[#687386]">
                      Use the following details to make your payment securely.
                    </p>
                  </div>

                  {/* Soft Divider */}
                  <div className="my-7 h-px bg-[#10407A]/8" />

                  {/* Account Details */}
                  <div className="space-y-4">
                    {accountDetails.map((item, index) => (
                      <div
                        key={item.label}
                        className="group rounded-[20px] border border-white/80 bg-[#F7F9FC] p-4 shadow-[inset_3px_3px_8px_rgba(16,64,122,0.035),inset_-4px_-4px_8px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF9F6] hover:shadow-[5px_7px_18px_rgba(16,64,122,0.06),-4px_-4px_10px_rgba(255,255,255,0.95)]"
                      >
                        <div className="flex items-center gap-4">
                          {/* Number */}
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#FFF0EA] text-[10px] font-semibold text-[#EE5326] shadow-[inset_2px_2px_5px_rgba(238,83,38,0.04),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] transition-all duration-300 group-hover:bg-[#EE5326] group-hover:text-white">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          {/* Text */}
                          <div className="min-w-0 flex-1">
                            <p className="text-[9px] font-semibold text-[#8A94A3] sm:text-[10px]">
                              {item.label}
                            </p>

                            <p className="mt-1 break-words text-sm font-semibold leading-6 text-[#172033] sm:text-[15px]">
                              {item.value}
                            </p>
                          </div>

                          {/* Check */}
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#EE5326]/45 transition-all duration-300 group-hover:scale-110 group-hover:text-[#EE5326]" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Security Notice */}
                  <div className="mt-6 rounded-[20px] border border-white/80 bg-[#EEF5FF] p-4 shadow-[inset_3px_3px_8px_rgba(16,64,122,0.035),inset_-4px_-4px_8px_rgba(255,255,255,0.95)]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-white shadow-[4px_5px_12px_rgba(16,64,122,0.06)]">
                        <ShieldCheck className="h-5 w-5 text-[#10407A]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#10407A]">
                          Verify Before Payment
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#687386]">
                          Please carefully check the account name, account
                          number and IFSC code before completing your
                          transaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT — PAYMENT IMAGE
              ================================================= */}
              <div className="relative min-h-[360px] overflow-hidden bg-[#10407A] sm:min-h-[420px] lg:col-span-5 lg:min-h-full">
                <Image
                  src="/images/pay now.webp"
                  alt="TravelIQ Online Payment and Booking"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-[#10407A]/15" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/90 via-[#10407A]/30 to-transparent" />

                {/* Security Badge */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2.5 shadow-[0_8px_20px_rgba(7,26,53,0.12)] backdrop-blur-md">
                    <LockKeyhole className="h-4 w-4 text-[#EE5326]" />

                    <span className="text-[10px] font-semibold text-[#10407A]">
                      Secure Transaction
                    </span>
                  </div>
                </div>

                {/* Image Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 lg:p-8">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-white shadow-[6px_8px_18px_rgba(7,26,53,0.18)]">
                    <CreditCard className="h-6 w-6 text-[#EE5326]" />
                  </div>

                  <p className="mt-5 text-[10px] font-semibold text-white">
                    TravelIQ Payments
                  </p>

                  <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Simple. Secure.
                    <br />
                    Reliable.
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/90">
                    Complete your payment using the verified TravelIQ account
                    details.
                  </p>

                  {/* Payment Status */}
                  <div className="mt-5 flex items-center gap-3 border-t border-white/20 pt-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Payment Information Ready
                      </p>

                      <p className="mt-0.5 text-[10px] text-white/75">
                        Verify details before transferring funds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              INFORMATION CARDS
          ===================================================== */}
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {/* Secure Payment */}
            <div
              className={`${clayCard} group rounded-[22px] p-5 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#FFF0EA] shadow-[inset_2px_2px_6px_rgba(238,83,38,0.04),inset_-3px_-3px_6px_rgba(255,255,255,0.95)] transition-transform duration-300 group-hover:scale-105">
                  <LockKeyhole className="h-5 w-5 text-[#EE5326]" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#10407A]">
                    Secure Payment
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#7A8493]">
                    Protected transaction process
                  </p>
                </div>
              </div>
            </div>

            {/* Official Account */}
            <div
              className={`${clayCard} group rounded-[22px] p-5 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#EEF5FF] shadow-[inset_2px_2px_6px_rgba(16,64,122,0.04),inset_-3px_-3px_6px_rgba(255,255,255,0.95)] transition-transform duration-300 group-hover:scale-105">
                  <Building2 className="h-5 w-5 text-[#10407A]" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#10407A]">
                    Official Account
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#7A8493]">
                    TravelIQ Services Private Limited
                  </p>
                </div>
              </div>
            </div>

            {/* Easy Verification */}
            <div
              className={`${clayCard} group rounded-[22px] p-5 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#FFF0EA] shadow-[inset_2px_2px_6px_rgba(238,83,38,0.04),inset_-3px_-3px_6px_rgba(255,255,255,0.95)] transition-transform duration-300 group-hover:scale-105">
                  <CheckCircle2 className="h-5 w-5 text-[#EE5326]" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#10407A]">
                    Easy Verification
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#7A8493]">
                    Verify details before payment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              HELP / CONTACT
          ===================================================== */}
          <div className={`${clayCard} mt-7 rounded-[26px] p-6 sm:p-8`}>
            <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
              <div>
                <div className="flex items-center justify-center gap-3 lg:justify-start">
                  <span className="h-[2px] w-8 rounded-full bg-[#EE5326]" />

                  <span className="text-[10px] font-semibold text-[#EE5326]">
                    Need Assistance?
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-[#10407A] sm:text-2xl">
                  Have questions about your payment?
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687386]">
                  Our TravelIQ team is available to assist you with your
                  payment-related queries.
                </p>
              </div>

              <Link
                href="/contact-us/"
                className="group inline-flex shrink-0 items-center gap-2 rounded-[15px] bg-[#EE5326] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(238,83,38,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9471D] hover:shadow-[0_14px_30px_rgba(238,83,38,0.25)]"
              >
                Contact Us

                <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}