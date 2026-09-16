import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, getBreadcrumbSchema, getServiceSchema } from "@/components/JsonLd";
import { absoluteUrl, canonicalUrl, OG_IMAGE_PATH } from "@/lib/site";

const pagePath = "/irctc-agent-registration";
const pageUrl = canonicalUrl(pagePath);

const faqItems = [
  {
    question: "Who can apply for IRCTC agent registration?",
    answer:
      "Individuals and travel businesses that want to offer railway ticket booking services can contact TravelIQ for eligibility guidance and onboarding support.",
  },
  {
    question: "What documents are generally required?",
    answer:
      "Applicants should be ready with identity, address, contact, and business details. The exact document checklist should be verified with the TravelIQ registration team before submission.",
  },
  {
    question: "Are IRCTC agent registration fees and commission fixed?",
    answer:
      "Fees, service charges, and commission details can change based on current commercial terms and verification status. TravelIQ should confirm current charges directly before payment.",
  },
  {
    question: "Does TravelIQ help after agent ID activation?",
    answer:
      "TravelIQ provides B2B platform access, onboarding guidance, and support for travel services offered through the TravelIQ ecosystem.",
  },
];

export const metadata: Metadata = {
  title: "IRCTC Agent Registration - Become an Authorized IRCTC Travel Agent | TravelIQ",
  description:
    "Register as an authorized IRCTC travel agent with TravelIQ. Get official IRCTC agency license, fast onboarding support, and grow your train ticket booking business across India.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "IRCTC Agent Registration - Become an Authorized IRCTC Travel Agent | TravelIQ",
    description:
      "Register as an authorized IRCTC travel agent with TravelIQ. Get official IRCTC agency license, fast onboarding support, and grow your train ticket booking business across India.",
    url: pageUrl,
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
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
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

export default function IrcTcAgentRegistrationPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: canonicalUrl("/") },
    { name: "IRCTC Agent Registration", item: pageUrl },
  ]);

  const serviceSchema = getServiceSchema(
    "IRCTC Agent Registration",
    "Authorized IRCTC travel agent license registration and onboarding support for travel agents in India.",
    pageUrl
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#f6f9fe]">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#C4320A]">
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
                  Expand your agency portfolio with <Link href="/pages/services/railway-reservations" className="font-semibold text-[#10407A] underline hover:text-[#EE5326]">Railway Reservations</Link>, <Link href="/pages/services/online-air-ticket-booking" className="font-semibold text-[#10407A] underline hover:text-[#EE5326]">Air Ticket Bookings</Link>, <Link href="/pages/services/bus-ticket-booking" className="font-semibold text-[#10407A] underline hover:text-[#EE5326]">Bus Tickets</Link>, and <Link href="/pages/services/irctc-tour-packages" className="font-semibold text-[#10407A] underline hover:text-[#EE5326]">IRCTC Tour Packages</Link>.
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
                  href="/contact-us"
                  className="inline-flex rounded-full bg-[#EE5326] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#D9471D] transition"
                >
                  Contact Support for Registration
                </Link>
                <Link
                  href="/our-services"
                  className="inline-flex rounded-full border border-[#10407A] px-6 py-3 text-sm font-bold text-[#10407A] hover:bg-[#10407A] hover:text-white transition"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Who Can Become an Agent?",
                body: "Travel businesses, entrepreneurs, and service providers who want to support customers with railway ticket booking can apply after eligibility and document verification.",
              },
              {
                title: "Documents to Keep Ready",
                body: "Keep identity proof, address proof, contact details, business information, and any documents requested by the onboarding team ready for review.",
              },
              {
                title: "Fees and Commission",
                body: "Current fees, service charges, and commission terms must be confirmed directly with TravelIQ before payment. This page avoids publishing unverified or outdated amounts.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-bold text-[#10407A]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              IRCTC Authorized Agent Registration Support
            </h2>
            <div className="mt-5 grid gap-5 text-sm leading-7 text-slate-700 md:grid-cols-2">
              <p>
                An IRCTC authorized agent can support customers with railway
                ticket booking through an approved business process instead of
                using a personal account for commercial bookings.
              </p>
              <p>
                TravelIQ helps applicants understand the registration flow,
                required verification, digital signature requirements, platform
                access, and the next steps after activation.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-sky-100 bg-[#f2f8ff] p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Benefits for Travel Agents
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <li>Access to railway booking support through TravelIQ.</li>
                <li>Opportunity to offer flights, hotels, buses, and packages.</li>
                <li>Business-focused onboarding and customer support.</li>
                <li>Centralized B2B platform access for travel services.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Registration FAQs
              </h2>
              <div className="mt-5 space-y-4">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-xl border border-sky-100 bg-[#f8fbff] p-4"
                  >
                    <summary className="cursor-pointer text-sm font-bold text-[#10407A]">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
