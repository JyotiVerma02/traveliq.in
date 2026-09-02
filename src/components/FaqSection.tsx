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
  return (
    <section className="border-b border-slate-100 bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 pb-12 md:flex-row md:items-end">
          <div>
            <span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600">
              Help &amp; FAQs
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
              Control All Your Bookings &amp; Learn Best TravelIQ Features
            </h2>
          </div>

          <a
            href="/contact-us/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            <span>See More FAQs</span>
            <span>→</span>
          </a>
        </div>

        <div className="mt-4 grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="TravelIQ Agent Support Team"
                className="h-[420px] w-full object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700">
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

          <div className="space-y-4 lg:col-span-7">
            {faqs.map((faq, index) => (
              <details key={faq.number} className="faq-item" open={index === 0}>
                <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 text-left focus:outline-none">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-slate-400">{faq.number}</span>
                    <span className="text-base font-bold text-slate-900 sm:text-lg">{faq.question}</span>
                  </div>

                  <span className="faq-plus text-lg text-slate-400">+</span>
                </summary>

                <div className="mt-4 border-t border-slate-200/60 pt-4 pl-9">
                  <p className="text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
