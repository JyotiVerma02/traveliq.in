
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  CreditCard,
  Landmark,
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
  "border border-white/90 bg-white shadow-[8px_10px_30px_rgba(16,64,122,0.08),-7px_-7px_22px_rgba(255,255,255,0.95)]";

const clayHover =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_16px_38px_rgba(16,64,122,0.12),-8px_-8px_25px_rgba(255,255,255,0.98)]";

export default function PayNowPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#F4F7FB] text-[#0B1728] antialiased">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate min-h-[550px] overflow-hidden sm:min-h-[590px] lg:min-h-[620px]">
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/pay-now.webp"
            alt="TravelIQ secure online payment"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Image-preserving overlay */}
        <div className="absolute inset-0 -z-10 bg-white/35" />

        {/* Soft readability gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/80 via-white/45 to-white/20" />

        <div className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-[#10407A]/10 blur-3xl" />

        <div className="absolute -right-24 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#EE5326]/10 blur-3xl" />

        {/* Hero content */}
        <div className="mx-auto flex min-h-[550px] w-full max-w-7xl flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[590px] sm:px-6 lg:min-h-[620px] lg:px-8">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-4 py-2 shadow-[6px_7px_18px_rgba(16,64,122,0.08),-5px_-5px_15px_rgba(255,255,255,0.9)] backdrop-blur-md sm:px-5 sm:py-2.5">
            <Link
              href="/"
              className="text-sm font-semibold text-[#7A8493] transition-colors hover:text-[#10407A]"
            >
              Home
            </Link>

            <span className="text-[#EE5326]">/</span>

            <span className="text-sm font-bold text-[#10407A]">
              Pay Now
            </span>
          </div>

          {/* Hero text */}
          <div className="mt-7 flex w-full max-w-4xl flex-col items-center sm:mt-9">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EE5326]/10 bg-[#FFF0EA]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-[#EE5326] shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#EE5326]" />
              Secure Payment
            </div>

            {/* Heading */}
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#0F2E5E] sm:text-5xl md:text-6xl lg:text-[64px]">
              Pay Online{" "}
              <span className="text-[#EE5326]">Securely</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-balance text-sm font-medium leading-6 text-[#526174] sm:text-base sm:leading-7">
              Complete your payment using the official TravelIQ account
              details below. Please verify all information before making your
              transaction.
            </p>

            {/* Trust badges */}
            <div className="mt-7 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3">
              {[
                {
                  label: "Secure Transaction",
                  icon: LockKeyhole,
                },
                {
                  label: "Official Account",
                  icon: Building2,
                },
                {
                  label: "Easy Verification",
                  icon: CheckCircle2,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/85 px-3.5 py-2 text-xs font-semibold text-[#344154] shadow-[5px_6px_16px_rgba(16,64,122,0.07)] backdrop-blur-sm sm:px-4 sm:py-2.5"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10407A]">
                      <Icon className="h-3 w-3 text-white" />
                    </span>

                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-[-1px] left-0 right-0 h-14 sm:h-20">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="h-full w-full"
            fill="#F4F7FB"
          >
            <path d="M0,55 C260,100 480,15 720,45 C950,75 1140,80 1440,35 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* =====================================================
          MAIN PAYMENT SECTION
      ===================================================== */}

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div
          className={`grid w-full overflow-hidden rounded-[30px] ${clayCard} lg:grid-cols-12`}
        >
          {/* =================================================
              LEFT — BANK INFORMATION
          ================================================= */}

          <div className="flex w-full flex-col p-5 sm:p-7 md:p-9 lg:col-span-7 lg:p-10">
            {/* Heading */}
            <div className="flex w-full items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EE5326]">
                  Bank Information
                </p>

                <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.025em] text-[#10305E] sm:text-3xl">
                  Travel IQ Account Details
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#6E7C8F]">
                  Use the following details to make your payment securely.
                </p>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F3F6FA] shadow-inner">
                <Landmark className="h-5 w-5 text-[#10305E]" />
              </div>
            </div>

            <div className="my-6 h-px w-full bg-[#EEF2F7]" />

            {/* Account details */}
            <div className="flex w-full flex-col gap-3">
              {accountDetails.map((item, index) => (
                <div
                  key={item.label}
                  className="group flex w-full items-center justify-between gap-3 rounded-[20px] border border-[#EEF2F6] bg-[#F8FAFC] px-3.5 py-3.5 transition-all duration-300 hover:border-[#DCE5F0] hover:bg-white hover:shadow-[0_6px_18px_rgba(16,64,122,0.05)] sm:px-4 sm:py-4"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                    {/* Number */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-bold text-[#10305E] shadow-sm ring-1 ring-[#EEF2F7]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9AA7B8] sm:text-[11px]">
                        {item.label}
                      </p>

                      <p className="mt-1 break-words text-sm font-bold leading-5 text-[#172033] sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#10407A]/20 transition-colors group-hover:text-[#10407A]/50" />
                </div>
              ))}
            </div>

            {/* =================================================
                VERIFY BEFORE PAYMENT
            ================================================= */}

            <div className="mt-6 flex w-full items-start gap-3 rounded-[22px] bg-[#10305E] p-4 shadow-[0_10px_25px_rgba(16,48,94,0.18)] sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white">
                  Verify Before Payment
                </p>

                <p className="mt-1 text-xs leading-5 text-white/70 sm:text-sm">
                  Please carefully check the account name, account number and
                  IFSC code before completing your transaction.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — IMAGE
          ================================================= */}

          <div className="relative min-h-[480px] w-full overflow-hidden bg-[#0E2A52] sm:min-h-[540px] lg:col-span-5 lg:min-h-[650px]">
            <Image
              src="/images/pay now.webp"
              alt="TravelIQ Online Payment"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-[#0E2A52]/25" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/95 via-[#0E2A52]/25 to-transparent" />

            {/* Secure badge */}
            <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-3.5 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.15)] backdrop-blur-md">
                <LockKeyhole className="h-3.5 w-3.5 text-[#EE5326]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#10305E] sm:text-xs">
                  Secure Transaction
                </span>
              </div>
            </div>

            {/* Image content */}
            <div className="relative z-10 mt-auto flex min-h-[480px] w-full flex-col justify-end p-6 sm:min-h-[540px] sm:p-8">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.18)]">
                <CreditCard className="h-6 w-6 text-[#EE5326]" />
              </div>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/55 sm:text-xs">
                TravelIQ Payments
              </p>

              <h3 className="mt-2 text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl">
                Simple. Secure.
                <br />
                Reliable.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
                Complete your payment using the verified TravelIQ account
                details.
              </p>

              {/* Status */}
              <div className="mt-6 flex w-full items-center gap-3 rounded-[20px] border border-white/10 bg-white/10 p-3.5 backdrop-blur-md">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#22C55E] shadow-sm">
                  <Check className="h-5 w-5 text-white" strokeWidth={3} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold text-white">
                    Payment Information Ready
                  </p>

                  <p className="mt-0.5 text-xs leading-5 text-white/60">
                    Verify details before transferring funds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            THREE INFO CARDS
        ===================================================== */}

        <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {[
            {
              icon: LockKeyhole,
              title: "Secure Payment",
              desc: "Protected transaction process",
            },
            {
              icon: Building2,
              title: "Official Account",
              desc: "TravelIQ Services Private Limited",
            },
            {
              icon: CheckCircle2,
              title: "Easy Verification",
              desc: "Verify details before payment",
            },
          ].map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`flex w-full items-center gap-4 rounded-[22px] p-4 ${clayCard} ${clayHover} sm:p-5`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0EA]">
                  <Icon className="h-5 w-5 text-[#EE5326]" />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[#10305E]">
                    {card.title}
                  </h4>

                  <p className="mt-0.5 text-xs leading-5 text-[#7A8A9F]">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            ASSISTANCE CTA
        ===================================================== */}

        <div
          className={`mt-6 flex w-full flex-col items-center gap-5 rounded-[26px] p-6 text-center ${clayCard} sm:p-8 md:flex-row md:justify-between md:text-left`}
        >
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EE5326]">
              Need Assistance?
            </p>

            <h3 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-[#10305E] sm:text-2xl">
              Have questions about your payment?
            </h3>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#6E7C8F]">
              Our TravelIQ team is available to assist you with your
              payment-related queries.
            </p>
          </div>

          {/* IMPORTANT: icon + text white */}
          <Link
            href="/contact-us/"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#EE5326] px-6 py-3.5 text-sm font-bold !text-white shadow-[0_10px_24px_rgba(238,83,38,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9471D] hover:shadow-[0_14px_30px_rgba(238,83,38,0.32)] sm:px-7"
          >
            <span className="!text-white">Contact Us</span>

            <ArrowRight className="h-4 w-4 !text-white" />
          </Link>
        </div>
      </section>
    </main>
  );
}

