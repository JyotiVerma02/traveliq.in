"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden hero-green-bg pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background radial glow effect */}
      <div className="pointer-events-none absolute inset-0 hero-glow-light -z-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Headings & Value Proposition */}
          <div className="lg:col-span-6 xl:col-span-6">
            
            {/* Top Green Accent Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-100/60 px-3.5 py-1.5 text-xs font-bold text-emerald-800 backdrop-blur-xs mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              IRCTC Principal Agent Partner
            </div>

            {/* Main Headline from traveliq.in */}
            <h1 className="text-[2.6rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.4rem] font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Travel Agency in Gurgaon
            </h1>

            {/* Subheading from traveliq.in */}
            <p className="mt-5 text-lg sm:text-xl font-semibold text-slate-700 max-w-xl leading-relaxed">
              Know More to Become an IRCTC Travel Agent
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg">
              Authorized IRCTC Principal Agent and IATA Accredited Travel Agency providing railway reservation, air tickets, hotel booking, bus tickets &amp; tour packages.
            </p>

            {/* CTA Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/irctc-agent-registration/"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-emerald-600 hover:shadow-emerald-600/30 hover:-translate-y-0.5"
              >
                Plans &amp; Pricing
              </Link>

              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-50/80 px-6 py-3.5 text-sm font-bold text-emerald-800 shadow-xs backdrop-blur-xs transition-all hover:bg-emerald-100"
              >
                <span>WhatsApp Us</span>
                <span className="text-emerald-600">→</span>
              </a>
            </div>

            {/* Sub-text summary */}
            <div className="mt-8 pt-4 border-t border-emerald-200/50">
              <p className="text-xs font-semibold text-slate-500">
                ★ Corporate HQ: Unit no 820, 8th Floor, JMD Megapolis, Sohna Road, Sector 48, Gurugram
              </p>
            </div>

          </div>

          {/* Right Column: Exact Form from traveliq.in */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              
              {/* Form Card Container */}
              <div className="relative rounded-[32px] border border-emerald-100 bg-white/95 p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.12)] backdrop-blur-xl">
                
                {/* Form Heading from traveliq.in */}
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/50 uppercase tracking-wider">
                    Instant Callback
                  </span>
                  <h2 className="mt-3 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    Simply request a callback to obtain Your IRCTC Rail ID
                  </h2>
                </div>

                {/* Callback Form */}
                {submitted ? (
                  <div className="mt-6 rounded-2xl bg-emerald-50 p-6 border border-emerald-200 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white text-xl font-bold">
                      ✓
                    </div>
                    <h3 className="mt-3 text-base font-bold text-emerald-900">Form Sent Successfully!</h3>
                    <p className="mt-1 text-xs text-emerald-700">
                      Our TravelIQ team will call you back shortly on your provided phone number.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-6 space-y-4"
                  >
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        className="flex-1 cursor-pointer rounded-full bg-slate-900 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-600 hover:shadow-emerald-500/30 text-center"
                      >
                        Submit
                      </button>

                      <a
                        href="https://wa.me/917835025025"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-full border-2 border-emerald-500 bg-emerald-500 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-600 text-center"
                      >
                        <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                        </svg>
                        WhatsApp us
                      </a>
                    </div>
                  </form>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}