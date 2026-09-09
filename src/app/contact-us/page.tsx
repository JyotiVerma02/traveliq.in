import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Travel IQ | TravelIQ",
  description:
    "Get in touch with Travel IQ. Contact us through WhatsApp, phone, email, or visit our office at JMD Megapolis, Gurugram.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F6F9FE] text-[#0B1728]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FFF8F3] py-14 sm:py-18 lg:py-20">

        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#EE5326]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#10407A]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Breadcrumb */}
          <div className="mb-8 flex justify-center sm:mb-10">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-[#EE5326]"
              >
                Home
              </Link>

              <span className="text-slate-300">/</span>

              <span className="text-[#10407A]">
                Contact Us
              </span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

            <span className="mb-5 inline-flex items-center rounded-full border border-[#EE5326]/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#EE5326]">
              Let’s Connect
            </span>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-[#0B1728] sm:text-6xl lg:text-7xl">
              Let’s Talk.
              <br />
              <span className="text-[#EE5326]">
                Let’s Travel.
              </span>
            </h1>

            <p className="mt-6 w-full max-w-[680px] px-2 text-center text-base leading-7 text-[#526174] sm:text-lg sm:leading-8">
              Whether you have a question about our services, need help with
              your travel plans, or simply want to know more about TravelIQ,
              our team is ready to help.
            </p>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-[#526174]">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EE5326] text-[10px] font-black text-white">
                  ✓
                </span>
                Quick Response
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10407A] text-[10px] font-black text-white">
                  ✓
                </span>
                Travel Experts
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EE5326] text-[10px] font-black text-white">
                  ✓
                </span>
                Dedicated Support
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          CONTACT INFO CARDS
      ========================================================= */}
      <section className="relative z-20 -mt-5 pb-10 sm:-mt-6 sm:pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* WhatsApp */}
            <div className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-[0_12px_35px_rgba(16,64,122,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,64,122,0.12)]">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] transition-transform duration-300 group-hover:scale-105">
                <FaWhatsapp className="h-7 w-7" />
              </div>

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#7A8493]">
                WhatsApp
              </p>

              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-base font-bold text-[#25D366] hover:underline"
              >
                +91 78350 25025
              </a>

              <p className="mt-1 text-xs text-slate-500">
                Chat with our team
              </p>
            </div>


            {/* Phone */}
            <div className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-[0_12px_35px_rgba(16,64,122,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,64,122,0.12)]">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10407A]/10 text-[#10407A] transition-transform duration-300 group-hover:scale-105">

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

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#7A8493]">
                Phone
              </p>

              <a
                href="tel:+917835025030"
                className="mt-2 block text-base font-bold text-[#10407A] hover:underline"
              >
                +91 78350 25030
              </a>

              <p className="mt-1 text-xs text-slate-500">
                Call us directly
              </p>
            </div>


            {/* Location */}
            <div className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-[0_12px_35px_rgba(16,64,122,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,64,122,0.12)]">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-[#10407A] transition-transform duration-300 group-hover:scale-105">

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

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#7A8493]">
                Office
              </p>

              <p className="mx-auto mt-2 max-w-[220px] text-sm font-bold leading-6 text-[#0B1728]">
                Unit 1004G, JMD Megapolis,
                <br />
                Sector 48, Gurugram - 122018
              </p>
            </div>


            {/* Email */}
            <div className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-[0_12px_35px_rgba(16,64,122,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,64,122,0.12)]">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10407A]/10 text-[#10407A] transition-transform duration-300 group-hover:scale-105">

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

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#7A8493]">
                Email
              </p>

              <a
                href="mailto:support@traveliq.in"
                className="mt-2 block break-all text-sm font-bold text-[#10407A] hover:underline"
              >
                support@traveliq.in
              </a>

              <p className="mt-1 text-xs text-slate-500">
                Send us an email
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          MAIN CONTACT AREA
      ========================================================= */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">

            {/* =====================================================
                LEFT — CONTACT FORM
            ===================================================== */}
            <div className="lg:col-span-7">

              <div className="mb-7">

                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#EE5326]">
                  <span className="h-[2px] w-8 bg-[#EE5326]" />
                  Contact Us
                </span>

                <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#0B1728] sm:text-5xl">
                  Tell us
                  <br />
                  <span className="text-[#EE5326]">
                    what you need.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#526174] sm:text-lg">
                  Have a question, need assistance, or planning your next
                  journey? Share your requirements with us and our team will
                  get back to you with the right guidance.
                </p>

              </div>


              {/* Form Card */}
              <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(16,64,122,0.08)] sm:p-7 lg:p-8">

                <ContactForm />

              </div>

            </div>


            {/* =====================================================
                RIGHT — SUPPORT / SOCIAL / MAP
            ===================================================== */}
            <div className="space-y-6 lg:col-span-5">


              {/* WhatsApp Support */}
              <div className="relative overflow-hidden rounded-3xl border border-[#D8E8FA] bg-[#EEF5FF] p-7 sm:p-8">

                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#10407A]/5" />
                <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-[#EE5326]/5" />

                <div className="relative z-10">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#10407A]">
                        Need help?
                      </span>

                      <h3 className="mt-2 text-2xl font-black text-[#0B1728] sm:text-3xl">
                        Talk to us on
                        <br />
                        <span className="text-[#25D366]">
                          WhatsApp.
                        </span>
                      </h3>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#25D366] shadow-sm">
                      <FaWhatsapp className="h-8 w-8" />
                    </div>

                  </div>

                  <p className="mt-4 max-w-md text-sm leading-6 text-[#526174]">
                    Get quick answers from our travel support team. We are
                    here to help with your questions and travel requirements.
                  </p>

                  <a
                    href="https://wa.me/917835025025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(37,211,102,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BD5A] hover:shadow-[0_14px_30px_rgba(37,211,102,0.28)]"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    Chat on WhatsApp

                    <svg
                      className="ml-auto h-4 w-4"
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
              <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_12px_35px_rgba(16,64,122,0.07)] sm:p-8">

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#EE5326]">
                  Stay Connected
                </span>

                <h3 className="mt-2 text-2xl font-black text-[#0B1728]">
                  Follow TravelIQ
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#526174]">
                  Stay updated with travel tips, destinations, services, and
                  the latest from TravelIQ.
                </p>


                <div className="mt-6 flex flex-wrap gap-3">

                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1F5FA] text-[#10407A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#10407A] hover:text-white"
                  >
                    <FaFacebookF className="h-4 w-4" />
                  </a>


                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1F5FA] text-[#10407A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EE5326] hover:text-white"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>


                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1F5FA] text-[#10407A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#10407A] hover:text-white"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>


                  {/* YouTube */}
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1F5FA] text-[#10407A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EE5326] hover:text-white"
                  >
                    <FaYoutube className="h-5 w-5" />
                  </a>

                </div>

              </div>


              {/* Map */}
              <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-2 shadow-[0_12px_35px_rgba(16,64,122,0.07)]">

                <iframe
                  title="Travel IQ Location Map"
                  src="https://maps.google.com/maps?q=Travel%20IQ%20Services%20Private%20Limited&t=m&z=10&output=embed&iwloc=near"
                  width="100%"
                  height="300"
                  style={{
                    border: 0,
                    borderRadius: "1.25rem",
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