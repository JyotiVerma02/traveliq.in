import type { Metadata } from "next";
import RegistrationDetailsForm from "@/components/RegistrationDetailsForm";
import { canonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "IRCTC Agent Registration Form Details | TravelIQ",
  description: "Complete your IRCTC agent registration with your contact, PAN, agency and address details.",
  alternates: { canonical: canonicalUrl("/signup/registration_form/irctc-agent-registration-details/") },
  openGraph: { title: "IRCTC Agent Registration Form Details | TravelIQ", url: canonicalUrl("/signup/registration_form/irctc-agent-registration-details/"), type: "website" },
};

export default function RegistrationDetailsPage() {
  return <main className="bg-[#f6f9fe] px-4 py-12 sm:px-6">
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-8 text-center text-2xl font-bold text-[#10407A] sm:text-3xl">IRCTC Agent Registration Form Details</h1>
      <RegistrationDetailsForm />
    </div>
  </main>;
}
