"use client";

import { useState } from "react";

const faqs = [
  {
    number: "01.",
    question: "How long does IRCTC Agent ID registration take?",
    answer:
      "IRCTC Agent ID registration typically takes 24 to 48 working hours upon document verification. Once generated, your OTP/Dongle login will be activated immediately on b2b.traveliq.in.",
  },
  {
    number: "02.",
    question: "Can I book unlimited train tickets as an authorized agent?",
    answer:
      "Yes! As an authorized IRCTC Principal Agent through TravelIQ, you can book unlimited railway tickets for commercial clients without facing personal account suspension risk.",
  },
  {
    number: "03.",
    question: "What documents are required for agent registration?",
    answer:
      "You need a valid PAN card, Aadhaar card, mobile number not previously registered on IRCTC, personal email address, and shop/office address proof.",
  },
  {
    number: "04.",
    question: "How does Aadhaar linking increase monthly booking limits?",
    answer:
      "When your IRCTC agent profile is verified with Aadhaar, your monthly ticket limit automatically increases to 24+ tickets, allowing higher transaction volumes and profit margins.",
  },
  {
    number: "05.",
    question: "What support is provided for ticket cancellations and instant refunds?",
    answer:
      "TravelIQ provides a dedicated helpdesk for quick ticket cancellations, immediate wallet refund processing, Tatkal booking assistance, and 24/7 WhatsApp agent support.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Top Title & Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60">
              Help &amp; FAQs
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 leading-tight max-w-2xl">
              Control All Your Bookings &amp; Learn Best TravelIQ Features
            </h2>
          </div>

          <a
            href="/contact-us/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 border border-slate-300 rounded-full px-5 py-2.5 transition hover:bg-slate-900 hover:text-white"
          >
            <span>See More FAQs</span>
            <span>→</span>
          </a>
        </div>

        {/* 2 Column Layout matching reference image */}
        <div className="grid gap-12 lg:grid-cols-12 items-start mt-4">
          
          {/* Left Column Image Box */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="TravelIQ Agent Support Team"
                className="h-[420px] w-full object-cover"
              />
              
              {/* Overlay Stat Pill */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-lg border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-bold">
                    💬
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">24/7 Agent Support Line</p>
                    <p className="text-[11px] font-medium text-slate-500">Gurugram Corporate Office: +91 7835025025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Numbered FAQ List matching reference image 01, 02, 03... */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.number}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-emerald-300 bg-emerald-50/30 p-6 shadow-xs"
                      : "border-slate-200/80 bg-white p-5 hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-slate-400 font-mono">
                        {faq.number}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-900">
                        {faq.question}
                      </span>
                    </div>

                    <span className={`text-slate-400 text-lg transition-transform ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-slate-200/60 pl-9">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
