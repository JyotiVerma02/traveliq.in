import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import { canonicalUrl } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

const pagePath = "/irctc-agent/how-to-become-irctc-agent";
const title = "How to Become an IRCTC Agent | TravelIQ";
const description =
  "Learn the general steps, eligibility checks, documents and authentication options involved in becoming an authorized IRCTC agent through a Principal Service Provider.";

export const metadata: Metadata = createMetadata({ title, description, path: pagePath, type: "article" });

const steps = [
  "Review the agent requirements and onboarding terms of the IRCTC Principal Service Provider you plan to use.",
  "Prepare the identity, business and contact documents requested for that application. Requirements can vary by provider and current IRCTC instructions.",
  "Submit the application through the PSP’s authorized process and complete any required verification.",
  "Choose an available authentication setup, such as OTP or a digital signature certificate, based on the current process and your working needs.",
  "After approval and activation, follow the agent rules, security practices and booking procedures provided for your account.",
];

const breadcrumb = getBreadcrumbSchema([
  { name: "Home", item: canonicalUrl("/") },
  { name: "IRCTC Agent Registration", item: canonicalUrl("/irctc-agent-registration") },
  { name: "How to Become an IRCTC Agent", item: canonicalUrl(pagePath) },
]);

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Become an IRCTC Agent",
  description,
  mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl(pagePath) },
  author: { "@type": "Organization", name: "TravelIQ" },
  publisher: { "@id": "https://traveliq.in/#organization" },
};

export default function HowToBecomeIrtctAgentPage() {
  return (
    <main className="min-h-screen bg-[#F4F7FB] px-4 py-10 text-[#071F3D] sm:px-6 sm:py-16">
      <JsonLd data={[breadcrumb, article]} />
      <article className="mx-auto max-w-5xl rounded-3xl border border-[#10407A]/10 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#10407A]">Home</Link>
          <span className="mx-2 text-[#EE5326]">/</span>
          <Link href="/irctc-agent-registration/" className="hover:text-[#10407A]">IRCTC Agent Registration</Link>
          <span className="mx-2 text-[#EE5326]">/</span>
          <span className="font-semibold text-[#10407A]">How to Become an IRCTC Agent</span>
        </nav>

        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EE5326]">Agent guide</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
          How to Become an IRCTC Agent
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
          Authorized IRCTC agents register through a Principal Service Provider (PSP) and must follow the agent policies attached to their account. The outline below explains the usual onboarding journey; the PSP and current IRCTC instructions determine the exact requirements.
        </p>

        <section className="mt-10 rounded-2xl border border-[#10407A]/10 bg-[#F5F8FC] p-5 sm:p-7">
          <h2 className="text-xl font-bold">Who can apply?</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Individuals and businesses interested in offering travel services can enquire with an authorized PSP. Confirm eligibility, business documentation, charges, service conditions and any technical requirements directly before paying or submitting sensitive documents.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Typical registration process</h2>
          <ol className="mt-5 space-y-4">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-2xl border border-slate-200 p-4 sm:p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#10407A] text-xs font-bold text-white">{index + 1}</span>
                <p className="leading-6 text-slate-600">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5 sm:p-6">
            <h2 className="text-xl font-bold">Documents and authentication</h2>
            <p className="mt-3 leading-7 text-slate-600">
              A PSP may request identity and address proof, PAN, contact details, business information and a photograph. OTP and DSC setups have different login and signing requirements; confirm which options are currently available for the selected plan.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 sm:p-6">
            <h2 className="text-xl font-bold">Agent account responsibilities</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Keep credentials private, use the account only as authorized, issue accurate customer receipts, protect customer data, and follow current agent booking and cancellation rules. The individual-user Aadhaar monthly limit is separate from agent policies.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#EE5326]/20 bg-[#FFF7F3] p-5 sm:p-7">
          <h2 className="text-xl font-bold">Before you proceed</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            {["Check the PSP’s current authorization and contact information.", "Read fees, refund terms, support scope and onboarding timelines before payment.", "Use only the official application and support channels."].map((item) => (
              <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#EE5326]" /><span>{item}</span></li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <div className="mt-5 space-y-5">
            <div><h3 className="font-bold">Does Aadhaar verification provide an agent with 24 individual tickets per month?</h3><p className="mt-2 leading-7 text-slate-600">No. IRCTC’s individual registered-user monthly ticket allowance and an authorized agent’s account rules are separate. Agents should follow their agent policy and PSP instructions.</p></div>
            <div><h3 className="font-bold">Is OTP or DSC required?</h3><p className="mt-2 leading-7 text-slate-600">That depends on the current account setup and service option. Confirm authentication requirements with the PSP before applying.</p></div>
            <div><h3 className="font-bold">How do I check the PSP information?</h3><p className="mt-2 leading-7 text-slate-600">Review the <Link className="font-semibold text-[#10407A] underline" href="/list-of-irctc-principal-service-providers/">IRCTC PSP directory</Link> and verify details against current IRCTC information.</p></div>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-200 pt-7">
          <Link href="/irctc-agent-registration/" className="inline-flex items-center gap-2 rounded-xl bg-[#EE5326] px-5 py-3 text-sm font-bold text-white hover:bg-[#D9471D]">View Registration Options <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/contact-us/" className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-[#10407A] hover:bg-slate-50">Ask TravelIQ</Link>
        </div>
      </article>
    </main>
  );
}
