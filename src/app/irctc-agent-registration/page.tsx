import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, getBreadcrumbSchema, getServiceSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "IRCTC Agent Registration - Become an Authorized IRCTC Travel Agent | TravelIQ",
  description:
    "Register as an authorized IRCTC travel agent with TravelIQ. Get official IRCTC agency license, fast onboarding support, and grow your train ticket booking business across India.",
  alternates: {
    canonical: "https://traveliq.in/irctc-agent-registration/",
  },
  openGraph: {
    title: "IRCTC Agent Registration - Become an Authorized IRCTC Travel Agent | TravelIQ",
    description:
      "Register as an authorized IRCTC travel agent with TravelIQ. Get official IRCTC agency license, fast onboarding support, and grow your train ticket booking business across India.",
    url: "https://traveliq.in/irctc-agent-registration/",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "IRCTC Agent Registration with TravelIQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCTC Agent Registration - Become an Authorized IRCTC Travel Agent | TravelIQ",
    description:
      "Register as an authorized IRCTC travel agent with TravelIQ. Get official IRCTC agency license, fast onboarding support, and grow your train ticket booking business across India.",
    images: ["/images/hero-1.webp"],
  },
};

export default function IrcTcAgentRegistrationPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://traveliq.in/" },
    { name: "IRCTC Agent Registration", item: "https://traveliq.in/irctc-agent-registration/" },
  ]);

  const serviceSchema = getServiceSchema(
    "IRCTC Agent Registration",
    "Authorized IRCTC travel agent license registration and onboarding support for travel agents in India.",
    "https://traveliq.in/irctc-agent-registration/"
  );

  return (
    <main className="min-h-screen bg-[#f6f9fe]">
      <JsonLd data={[breadcrumbSchema, serviceSchema]} />
      <section className="relative overflow-hidden bg-[#edf5ff] py-12 sm:py-16">
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-500">
            <Link href="/" className="transition hover:text-[#10407A]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#10407A]">IRCTC Agent Registration</span>
          </nav>

          <div className="mx-auto max-w-4xl text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE5326]">
              IRCTC Agent Registration
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Start Your Authorized IRCTC Travel Business with TravelIQ
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-700 leading-relaxed sm:text-lg">
              TravelIQ is a leading IRCTC Principal Service Provider helping aspiring travel agents build a profitable travel agency business with official IRCTC agent license and online booking support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Why Register with TravelIQ?</h2>
              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  TravelIQ empowers travel agents with a reliable B2B digital platform, quick registration assistance, and dedicated customer care.
                </p>
                <p>
                  As an official IRCTC Principal Service Provider, we support authorized train ticket booking agent license registration, digital signature integration, and complete travel service guidance.
                </p>
                <p>
                  Expand your agency portfolio with <Link href="/pages/services/railway-reservations/" className="font-semibold text-[#10407A] underline hover:text-[#EE5326]">Railway Reservations</Link>, <Link href="/pages/services/online-air-ticket-booking/" className="font-semibold text-[#10407A] underline hover:text-[#EE5326]">Air Ticket Bookings</Link>, <Link href="/pages/services/bus-ticket-booking/" className="font-semibold text-[#10407A] underline hover:text-[#EE5326]">Bus Tickets</Link>, and <Link href="/pages/services/irctc-tour-packages/" className="font-semibold text-[#10407A] underline hover:text-[#EE5326]">IRCTC Tour Packages</Link>.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-[#f2f8ff] p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">3 Quick Onboarding Steps</h2>
              <div className="mt-6 space-y-4">
                {[
                  "Submit your basic registration details and documentation.",
                  "Complete the verification and digital signature (Class 3 DSC) setup.",
                  "Get your official IRCTC Agent ID and start booking tickets for customers immediately.",
                ].map((step, index) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10407A] text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-slate-700 font-medium">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-4 border-t border-sky-200 flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact-us/"
                  className="inline-flex rounded-full bg-[#EE5326] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#D9471D] transition"
                >
                  Contact Support for Registration
                </Link>
                <Link
                  href="/our-services/"
                  className="inline-flex rounded-full border border-[#10407A] px-6 py-3 text-sm font-bold text-[#10407A] hover:bg-[#10407A] hover:text-white transition"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
