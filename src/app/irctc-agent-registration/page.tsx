import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IRCTC Agent Registration | TravelIQ",
  description:
    "Register as an IRCTC agent with TravelIQ and unlock travel booking opportunities with secure onboarding support.",
};

export default function IrcTcAgentRegistrationPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fe]">
      <section className="relative overflow-hidden bg-[#edf5ff] py-12 sm:py-16">
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-500">
            <Link href="/" className="transition hover:text-[#10407A]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#10407A]">IRCTC Agent Registration</span>
          </div>

          <div className="mx-auto max-w-4xl text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#10407A]">
              IRCTC Agent Registration
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Start Your Travel Business with TravelIQ
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-700 leading-relaxed">
              Travel IQ services can help the aspiring travel agencies to increase their business and get more clients through online promotions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Why register with TravelIQ?</h2>
              <div className="mt-6 space-y-4 text-slate-700">
                <p>TravelIQ helps aspiring travel agents with a strong digital platform and onboarding support.</p>
                <p>We support agent registration, travel booking assistance, and professional travel service guidance.</p>
                <p>Our goal is to make the process practical, transparent, and easy to follow.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-[#f2f8ff] p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Quick steps</h2>
              <div className="mt-6 space-y-4">
                {[
                  "Submit your basic registration details.",
                  "Complete the verification and onboarding process.",
                  "Get access to travel booking support and services.",
                ].map((step, index) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10407A] text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
