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

export default function PayNowPage() {
  return (
    <main className="min-h-screen flex-1 overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FFF8F3]">
        {/* Soft decorative background */}
        <div className="pointer-events-none absolute -left-32 -top-28 h-80 w-80 rounded-full bg-[#EE5326]/[0.07] blur-[90px]" />

        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#10407A]/[0.05] blur-[90px]" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#EE5326]/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-8 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#7A8493] sm:text-sm">
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-[#EE5326]"
            >
              Home
            </Link>

            <span className="text-[#B8C0CA]">/</span>

            <span className="text-[#10407A]">Pay Now</span>
          </div>

          {/* Hero heading */}
          <div className="mx-auto mt-9 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#EE5326]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#EE5326]">
                Secure Payment
              </span>

              <span className="h-[2px] w-8 rounded-full bg-[#EE5326]" />
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.05em] text-[#10407A] sm:text-5xl lg:text-[56px]">
              Pay Online{" "}
              <span className="text-[#EE5326]">Securely</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 !text-[#687386] sm:text-base">
              Complete your payment using the official TravelIQ account
              details below. Please verify all information before making your
              transaction.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN PAYMENT AREA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F6F9FE] py-10 sm:py-14 lg:py-16">
        {/* Background decoration */}
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#EE5326]/[0.025] blur-[100px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#10407A]/[0.035] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =====================================================
              MAIN CARD
          ===================================================== */}
          <div className="overflow-hidden rounded-[22px] border border-[#10407A]/[0.08] bg-white shadow-[0_18px_60px_rgba(16,64,122,0.07)]">
            <div className="grid lg:grid-cols-12">
              {/* =================================================
                  LEFT — ACCOUNT DETAILS
              ================================================= */}
              <div className="lg:col-span-7">
                <div className="h-full p-6 sm:p-8 lg:p-10">
                  {/* Section heading */}
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center gap-3 lg:justify-start">
                      <span className="h-[2px] w-7 rounded-full bg-[#EE5326]" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#EE5326]">
                        Bank Information
                      </span>
                    </div>

                    <h2 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-[#10407A] sm:text-3xl">
                      Travel IQ Account Details
                    </h2>

                    <p className="mt-2 text-sm leading-6 !text-[#687386]">
                      Use the following details to make your payment securely.
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="my-7 h-px bg-[#10407A]/[0.08]" />

                  {/* Account details */}
                  <div className="space-y-3">
                    {accountDetails.map((item, index) => (
                      <div
                        key={item.label}
                        className="group rounded-xl border border-[#10407A]/[0.07] bg-[#FAFCFF] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#EE5326]/20 hover:bg-[#FFF9F6] hover:shadow-[0_12px_30px_rgba(16,64,122,0.06)]"
                      >
                        <div className="flex items-center gap-4">
                          {/* Number */}
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF1EB] text-[10px] font-bold text-[#EE5326] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#EE5326] group-hover:text-white">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          {/* Text */}
                          <div className="min-w-0 flex-1">
                            <p className="text-[9px] font-bold uppercase tracking-[0.18em] !text-[#8A94A3] sm:text-[10px]">
                              {item.label}
                            </p>

                            <p className="mt-1 break-words text-sm font-bold leading-6 !text-[#172033] sm:text-[15px]">
                              {item.value}
                            </p>
                          </div>

                          {/* Check */}
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#EE5326]/50 transition-all duration-500 group-hover:scale-110 group-hover:text-[#EE5326]" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Security notice */}
                  <div className="mt-6 rounded-xl border border-[#10407A]/[0.07] bg-[#F4F8FD] p-4 transition-all duration-300 hover:bg-[#EEF5FF]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                        <ShieldCheck className="h-5 w-5 text-[#10407A]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold !text-[#10407A]">
                          Verify Before Payment
                        </p>

                        <p className="mt-1 text-xs leading-5 !text-[#687386]">
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
              <div className="relative min-h-[390px] overflow-hidden bg-[#FFF8F3] lg:col-span-5 lg:min-h-full">
                <Image
                  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=85"
                  alt="TravelIQ Online Payment and Booking"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-white/15" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10407A]/75 via-[#10407A]/20 to-transparent" />

                {/* =================================================
                    TOP SECURITY BADGE
                ================================================= */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-md">
                    <LockKeyhole className="h-4 w-4 text-[#EE5326]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] !text-[#10407A]">
                      Secure Transaction
                    </span>
                  </div>
                </div>

                {/* =================================================
                    IMAGE CONTENT
                ================================================= */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 lg:p-8">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-xl transition-transform duration-500 hover:scale-105">
                    <CreditCard className="h-6 w-6 text-[#EE5326]" />
                  </div>

                  {/* Title */}
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] !text-white">
                    TravelIQ Payments
                  </p>

                  <h3 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.04em] !text-white sm:text-3xl">
                    Simple. Secure.
                    <br />
                    Reliable.
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-sm text-sm leading-6 !text-white">
                    Complete your payment using the verified TravelIQ account
                    details.
                  </p>

                  {/* Payment status */}
                  <div className="mt-5 flex items-center gap-3 border-t border-white/20 pt-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>

                    <div>
                      <p className="text-xs font-bold !text-white">
                        Payment Information Ready
                      </p>

                      <p className="mt-0.5 text-[10px] !text-white">
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
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {/* Secure Payment */}
            <div className="group rounded-xl border border-[#10407A]/[0.07] bg-white p-5 shadow-[0_8px_25px_rgba(16,64,122,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(16,64,122,0.08)]">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFF1EB] transition-transform duration-500 group-hover:scale-110">
                  <LockKeyhole className="h-5 w-5 text-[#EE5326]" />
                </div>

                <div>
                  <h3 className="text-sm font-bold !text-[#10407A]">
                    Secure Payment
                  </h3>

                  <p className="mt-1 text-xs leading-5 !text-[#7A8493]">
                    Protected transaction process
                  </p>
                </div>
              </div>
            </div>

            {/* Official Account */}
            <div className="group rounded-xl border border-[#10407A]/[0.07] bg-white p-5 shadow-[0_8px_25px_rgba(16,64,122,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(16,64,122,0.08)]">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF5FF] transition-transform duration-500 group-hover:scale-110">
                  <Building2 className="h-5 w-5 text-[#10407A]" />
                </div>

                <div>
                  <h3 className="text-sm font-bold !text-[#10407A]">
                    Official Account
                  </h3>

                  <p className="mt-1 text-xs leading-5 !text-[#7A8493]">
                    TravelIQ Services Private Limited
                  </p>
                </div>
              </div>
            </div>

            {/* Easy Verification */}
            <div className="group rounded-xl border border-[#10407A]/[0.07] bg-white p-5 shadow-[0_8px_25px_rgba(16,64,122,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(16,64,122,0.08)]">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFF1EB] transition-transform duration-500 group-hover:scale-110">
                  <CheckCircle2 className="h-5 w-5 text-[#EE5326]" />
                </div>

                <div>
                  <h3 className="text-sm font-bold !text-[#10407A]">
                    Easy Verification
                  </h3>

                  <p className="mt-1 text-xs leading-5 !text-[#7A8493]">
                    Verify details before payment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              HELP / CONTACT
          ===================================================== */}
          <div className="mt-8 rounded-2xl border border-[#10407A]/[0.08] bg-white p-6 shadow-[0_10px_35px_rgba(16,64,122,0.05)] sm:p-8">
            <div className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">
              <div>
                <div className="flex items-center justify-center gap-3 lg:justify-start">
                  <span className="h-[2px] w-7 rounded-full bg-[#EE5326]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EE5326]">
                    Need Assistance?
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold tracking-[-0.03em] !text-[#10407A] sm:text-2xl">
                  Have questions about your payment?
                </h3>

                <p className="mt-2 text-sm leading-6 !text-[#687386]">
                  Our TravelIQ team is available to assist you with your
                  payment-related queries.
                </p>
              </div>

              <Link
                href="/contact-us/"
                className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#EE5326] px-6 py-3.5 text-sm font-bold !text-white shadow-[0_8px_20px_rgba(238,83,38,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9471D] hover:shadow-[0_12px_28px_rgba(238,83,38,0.25)]"
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