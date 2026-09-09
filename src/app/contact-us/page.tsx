import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Travel IQ | TravelIQ",
  description:
    "Get in touch with Travel IQ. Contact us through WhatsApp, phone, email, or visit our office at JMD Megapolis, Gurugram.",
};

const clayCard =
  "border border-white/80 bg-white shadow-[10px_12px_30px_rgba(16,64,122,0.07),-8px_-8px_24px_rgba(255,255,255,0.95)]";

const clayCardHover =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[14px_18px_38px_rgba(16,64,122,0.10),-8px_-8px_24px_rgba(255,255,255,0.95)]";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0B1728]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative min-h-[500px] overflow-hidden bg-cover bg-center bg-no-repeat py-14 sm:py-18 lg:py-20 sm:min-h-[540px] sm:py-18 lg:min-h-[520px] lg:py-20"
        style={{
          backgroundImage: "url('/images/contact.webp')",
        }}
      >
        {/* Soft background shapes */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#EE5326]/8 blur-[110px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[430px] w-[430px] rounded-full bg-[#10407A]/7 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Breadcrumb */}
          <div className="mb-9 flex justify-center sm:mb-11">
            <div
              className={`${clayCard} flex items-center gap-3 rounded-full px-5 py-2.5 text-sm`}
            >
              <Link
                href="/"
                className="font-medium text-[#526174] transition-colors duration-200 hover:text-[#EE5326]"
              >
                Home
              </Link>

              <span className="text-[#EE5326]">/</span>

              <span className="font-semibold text-[#10407A]">Contact Us</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center rounded-full border border-[#EE5326]/15 bg-[#FFF4EF] px-5 py-2.5 text-xs font-semibold text-[#EE5326] shadow-[inset_2px_2px_5px_rgba(238,83,38,0.04),inset_-3px_-3px_7px_rgba(255,255,255,0.9)]">
              Let’s Connect
            </span>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] text-[#0B1728] sm:text-6xl lg:text-7xl">
              Let’s Talk.
              <br />
              <span className="text-[#EE5326]">Let’s Travel.</span>
            </h1>

            <p className="mt-6 w-full max-w-[680px] px-2 text-center text-base leading-7 text-[#526174] sm:text-lg sm:leading-8">
              Whether you have a question about our services, need help with
              your travel plans, or simply want to know more about TravelIQ, our
              team is ready to help.
            </p>

            {/* Trust Points */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              {/* Quick Response */}
              <div
                className={`${clayCard} flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-[#526174]`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EE5326] text-[10px] font-semibold text-white">
                  ✓
                </span>
                Quick Response
              </div>

              {/* Travel Experts */}
              <div
                className={`${clayCard} flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-[#526174]`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10407A] text-[10px] font-semibold text-white">
                  ✓
                </span>
                Travel Experts
              </div>

              {/* Dedicated Support */}
              <div
                className={`${clayCard} flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-[#526174]`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EE5326] text-[10px] font-semibold text-white">
                  ✓
                </span>
                Dedicated Support
              </div>
            </div>
          </div>
        </div>

        {/* Wave Curve */}
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
          CONTACT INFO CARDS
      ========================================================= */}
      <section className="relative z-20 pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* WhatsApp */}
            <div
              className={`group rounded-[26px] p-6 text-center ${clayCard} ${clayCardHover}`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#EFFFF5] text-[#25D366] shadow-[inset_3px_3px_8px_rgba(37,211,102,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] transition-transform duration-300 group-hover:scale-105">
                <FaWhatsapp className="h-7 w-7" />
              </div>

              <p className="mt-5 text-xs font-semibold text-[#7A8493]">
                WhatsApp
              </p>

              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-base font-semibold text-[#25D366] hover:underline"
              >
                +91 78350 25025
              </a>

              <p className="mt-1 text-xs text-slate-500">Chat with our team</p>
            </div>

            {/* Phone */}
            <div
              className={`group rounded-[26px] p-6 text-center ${clayCard} ${clayCardHover}`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#EEF4FA] text-[#10407A] shadow-[inset_3px_3px_8px_rgba(16,64,122,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] transition-transform duration-300 group-hover:scale-105">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>

              <p className="mt-5 text-xs font-semibold text-[#7A8493]">Phone</p>

              <a
                href="tel:+917835025030"
                className="mt-2 block text-base font-semibold text-[#10407A] hover:underline"
              >
                +91 78350 25030
              </a>

              <p className="mt-1 text-xs text-slate-500">Call us directly</p>
            </div>

            {/* Location */}
            <div
              className={`group rounded-[26px] p-6 text-center ${clayCard} ${clayCardHover}`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#EEF4FA] text-[#10407A] shadow-[inset_3px_3px_8px_rgba(16,64,122,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] transition-transform duration-300 group-hover:scale-105">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <p className="mt-5 text-xs font-semibold text-[#7A8493]">
                Office
              </p>

              <p className="mx-auto mt-2 max-w-[220px] text-sm font-semibold leading-6 text-[#0B1728]">
                Unit 1004G, JMD Megapolis,
                <br />
                Sector 48, Gurugram - 122018
              </p>
            </div>

            {/* Email */}
            <div
              className={`group rounded-[26px] p-6 text-center ${clayCard} ${clayCardHover}`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#EEF4FA] text-[#10407A] shadow-[inset_3px_3px_8px_rgba(16,64,122,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] transition-transform duration-300 group-hover:scale-105">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <p className="mt-5 text-xs font-semibold text-[#7A8493]">Email</p>

              <a
                href="mailto:support@traveliq.in"
                className="mt-2 block break-all text-sm font-semibold text-[#10407A] hover:underline"
              >
                support@traveliq.in
              </a>

              <p className="mt-1 text-xs text-slate-500">Send us an email</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT AREA
      ========================================================= */}
      <section className="relative overflow-hidden py-14 sm:py-18 lg:py-24">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-48 top-40 h-[420px] w-[420px] rounded-full bg-[#EE5326]/5 blur-[120px]" />

        <div className="pointer-events-none absolute -right-48 bottom-20 h-[450px] w-[450px] rounded-full bg-[#10407A]/6 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* =====================================================
                LEFT — CONTACT FORM
            ===================================================== */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-9 rounded-full bg-[#EE5326]" />

                  <span className="text-xs font-semibold text-[#EE5326]">
                    Contact Us
                  </span>
                </div>

                <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B1728] sm:text-5xl">
                  Tell us
                  <br />
                  <span className="text-[#EE5326]">what you need.</span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#526174] sm:text-lg">
                  Have a question, need assistance, or planning your next
                  journey? Share your requirements with us and our team will get
                  back to you with the right guidance.
                </p>
              </div>

              {/* Form Card */}
              <div className={`${clayCard} rounded-[30px] p-5 sm:p-7 lg:p-8`}>
                <ContactForm />
              </div>
            </div>

            {/* =====================================================
                RIGHT — SUPPORT / SOCIAL / MAP
            ===================================================== */}
            <div className="space-y-6 lg:col-span-5">
              {/* WhatsApp Support */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-[#EEF5FF] p-7 shadow-[10px_12px_30px_rgba(16,64,122,0.07),-8px_-8px_24px_rgba(255,255,255,0.95)] sm:p-8">
                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#10407A]/5" />

                <div className="pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-[#EE5326]/5" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="text-xs font-semibold text-[#10407A]">
                        Need help?
                      </span>

                      <h3 className="mt-2 text-2xl font-bold leading-tight text-[#0B1728] sm:text-3xl">
                        Talk to us on
                        <br />
                        <span className="text-[#25D366]">WhatsApp.</span>
                      </h3>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-white text-[#25D366] shadow-[4px_5px_12px_rgba(16,64,122,0.07),-3px_-3px_8px_rgba(255,255,255,0.95)]">
                      <FaWhatsapp className="h-8 w-8" />
                    </div>
                  </div>

                  <p className="mt-4 max-w-md text-sm leading-6 text-[#526174]">
                    Get quick answers from our travel support team. We are here
                    to help with your questions and travel requirements.
                  </p>

                  <a
                    href="https://wa.me/917835025025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-[16px] bg-[#25D366] px-5 py-3.5 text-sm font-semibold !text-white shadow-[0_10px_25px_rgba(37,211,102,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BD5A] hover:shadow-[0_14px_30px_rgba(37,211,102,0.25)]"
                  >
                    <FaWhatsapp className="h-5 w-5 !text-white" />

                    <span className="!text-white">Chat on WhatsApp</span>

                    <svg
                      className="ml-auto h-4 w-4 !text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className={`${clayCard} rounded-[30px] p-7 sm:p-8`}>
                <span className="text-xs font-semibold text-[#EE5326]">
                  Stay Connected
                </span>

                <h3 className="mt-2 text-2xl font-bold text-[#0B1728]">
                  Follow TravelIQ
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#526174]">
                  Stay updated with travel tips, destinations, services, and the
                  latest from TravelIQ.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {/* Facebook */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="group flex h-10 w-10 items-center justify-center rounded-[16px] bg-[#1877F2] !text-white shadow-[0_8px_18px_rgba(24,119,242,0.20)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#166FE5] hover:!text-white hover:shadow-[0_12px_24px_rgba(24,119,242,0.30)]"
                  >
                    <FaFacebookF
                      size={20}
                      className="!block !text-white transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="group flex h-10 w-10 items-center justify-center rounded-[16px] bg-[#E4405F] !text-white shadow-[0_8px_18px_rgba(228,64,95,0.20)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#D93656] hover:!text-white hover:shadow-[0_12px_24px_rgba(228,64,95,0.30)]"
                  >
                    <FaInstagram
                      size={22}
                      className="!block !text-white transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/travel-iq-services-private-limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group flex h-10 w-10 items-center justify-center rounded-[16px] bg-[#0A66C2] !text-white shadow-[0_8px_18px_rgba(10,102,194,0.20)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#0959A8] hover:!text-white hover:shadow-[0_12px_24px_rgba(10,102,194,0.30)]"
                  >
                    <FaLinkedinIn
                      size={20}
                      className="!block !text-white transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="group flex h-10 w-10 items-center justify-center rounded-[16px] bg-[#FF0000] !text-white shadow-[0_8px_18px_rgba(255,0,0,0.20)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#E60000] hover:!text-white hover:shadow-[0_12px_24px_rgba(255,0,0,0.30)]"
                  >
                    <FaYoutube
                      size={23}
                      className="!block !text-white transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className={`${clayCard} overflow-hidden rounded-[30px] p-2`}>
                <iframe
                  title="Travel IQ Location Map"
                  src="https://maps.google.com/maps?q=Travel%20IQ%20Services%20Private%20Limited&t=m&z=10&output=embed&iwloc=near"
                  width="100%"
                  height="300"
                  style={{
                    border: 0,
                    borderRadius: "1.5rem",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
