import type { Metadata } from "next";
import RegistrationDetailsForm from "@/components/RegistrationDetailsForm";
import { absoluteUrl, canonicalUrl, OG_IMAGE_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "IRCTC Agent Registration Form Details | TravelIQ",
  description: "Complete your IRCTC agent registration with your contact, PAN, agency and address details.",
  alternates: { canonical: canonicalUrl("/signup/registration_form/irctc-agent-registration-details/") },
  robots: { index: false, follow: true },
  openGraph: {
    title: "IRCTC Agent Registration Form Details | TravelIQ",
    description:
      "Complete your IRCTC agent registration enquiry with your contact, PAN, agency and address details.",
    url: canonicalUrl("/signup/registration_form/irctc-agent-registration-details/"),
    type: "website",
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
        width: 1200,
        height: 630,
        alt: "TravelIQ IRCTC agent registration form",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCTC Agent Registration Form Details | TravelIQ",
    description:
      "Complete your IRCTC agent registration enquiry with TravelIQ.",
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

export default function RegistrationDetailsPage() {
  return <main className="inner-page-hero relative isolate overflow-hidden bg-[#F2F6FC] px-4 pb-10 pt-5 sm:px-6 sm:pb-14 sm:pt-7 lg:pt-10">
    <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-[#10407A]/[0.06] blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#EE5326]/[0.07] blur-3xl" />
    <div className="relative mx-auto max-w-5xl">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center rounded-full border border-[#10407A]/10 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#10407A] shadow-[4px_4px_10px_rgba(16,64,122,0.07),-4px_-4px_10px_rgba(255,255,255,0.95)]">TravelIQ Agent Onboarding</span>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[#10407A] sm:text-3xl">IRCTC Agent Registration Form Details</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">Share your contact, identity and agency details to continue with your registration enquiry.</p>
      </div>
      <RegistrationDetailsForm />
    </div>
  </main>;
}
