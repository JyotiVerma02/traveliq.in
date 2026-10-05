import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
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
    <main className="inner-page-hero bg-[#F4F7FB] px-4 pb-10 pt-6 text-[#071F3D] sm:px-6 sm:pb-16 sm:pt-8">
      <JsonLd data={[breadcrumb, article]} />
      <article className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#10407A]/10 border-t-4 border-t-[#EE5326] bg-white p-5 shadow-[0_18px_55px_rgba(16,64,122,0.08)] sm:p-10 lg:p-14">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#10407A]">Home</Link>
          <span className="mx-2 text-[#EE5326]">/</span>
          <Link href="/irctc-agent-registration/" className="hover:text-[#10407A]">IRCTC Agent Registration</Link>
          <span className="mx-2 text-[#EE5326]">/</span>
          <span className="font-semibold text-[#10407A]">How to Become an IRCTC Agent</span>
        </nav>

        <header className="mb-10 rounded-2xl border border-[#10407A]/10 bg-gradient-to-br from-[#F2F7FC] via-white to-[#FFF5EF] p-5 sm:p-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#EE5326]/20 bg-[#EE5326]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#C4320A]">
            <ShieldCheck className="h-4 w-4" />
            Agent guide
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-tight text-[#10407A] sm:text-5xl">
            How to Become an IRCTC Agent
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
            Authorized IRCTC agents register through a Principal Service Provider (PSP) and must follow the agent policies attached to their account. The outline below explains the usual onboarding journey; the PSP and current IRCTC instructions determine the exact requirements.
          </p>
        </header>

        <section className="mt-10 rounded-2xl border border-[#10407A]/10 bg-[#F3F8FD] p-5 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#10407A]/10 text-[#10407A]">
              <Building2 className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-[#10407A]">Who can apply?</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Individuals and businesses interested in offering travel services can enquire with an authorized PSP. Confirm eligibility, business documentation, charges, service conditions and any technical requirements directly before paying or submitting sensitive documents.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EE5326]/10 text-[#C4320A]">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-bold text-[#10407A]">Typical registration process</h2>
          </div>
          <ol className="mt-5 space-y-4">
            {steps.map((step, index) => (
              <li key={step} className="group flex gap-3 rounded-2xl border border-[#10407A]/10 bg-gradient-to-br from-white to-[#F7FAFD] p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EE5326]/30 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none sm:p-5">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${index % 2 === 0 ? "bg-[#10407A]" : "bg-[#EE5326]"}`}>{index + 1}</span>
                <p className="min-w-0 leading-6 text-slate-600">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#10407A]/10 bg-gradient-to-br from-white to-[#F5F9FD] p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#10407A]/25 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#10407A]/10 text-[#10407A]">
              <FileText className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-bold text-[#10407A]">Documents and authentication</h2>
            <p className="mt-3 leading-7 text-slate-600">
              A PSP may request identity and address proof, PAN, contact details, business information and a photograph. OTP and DSC setups have different login and signing requirements; confirm which options are currently available for the selected plan.
            </p>
          </div>
          <div className="rounded-2xl border border-[#EE5326]/20 bg-gradient-to-br from-white to-[#FFF7F2] p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EE5326]/35 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EE5326]/10 text-[#C4320A]">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-bold text-[#10407A]">Agent account responsibilities</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Keep credentials private, use the account only as authorized, issue accurate customer receipts, protect customer data, and follow current agent booking and cancellation rules. The individual-user Aadhaar monthly limit is separate from agent policies.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#EE5326]/20 bg-gradient-to-br from-[#FFF8F3] to-white p-5 shadow-sm sm:p-7">
          <h2 className="flex items-center gap-3 text-xl font-bold text-[#10407A]">
            <ShieldCheck className="h-5 w-5 shrink-0 text-[#C4320A]" />
            Before you proceed
          </h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            {["Check the PSP’s current authorization and contact information.", "Read fees, refund terms, support scope and onboarding timelines before payment.", "Use only the official application and support channels."].map((item) => (
              <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#EE5326]" /><span>{item}</span></li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-[#10407A]/10 bg-[#F7FAFD] p-4 transition-colors duration-200 hover:border-[#10407A]/25 sm:p-5"><h3 className="font-bold text-[#10407A]">Does Aadhaar verification provide an agent with 24 individual tickets per month?</h3><p className="mt-2 leading-7 text-slate-600">No. IRCTC’s individual registered-user monthly ticket allowance and an authorized agent’s account rules are separate. Agents should follow their agent policy and PSP instructions.</p></div>
            <div className="rounded-xl border border-[#10407A]/10 bg-[#F7FAFD] p-4 transition-colors duration-200 hover:border-[#10407A]/25 sm:p-5"><h3 className="font-bold text-[#10407A]">Is OTP or DSC required?</h3><p className="mt-2 leading-7 text-slate-600">That depends on the current account setup and service option. Confirm authentication requirements with the PSP before applying.</p></div>
            <div className="rounded-xl border border-[#10407A]/10 bg-[#F7FAFD] p-4 transition-colors duration-200 hover:border-[#10407A]/25 sm:p-5"><h3 className="font-bold text-[#10407A]">How do I check the PSP information?</h3><p className="mt-2 leading-7 text-slate-600">Review the <Link className="font-semibold text-[#10407A] underline" href="/list-of-irctc-principal-service-providers/">IRCTC PSP directory</Link> and verify details against current IRCTC information.</p></div>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-[#10407A]/10 pt-7">
          <Link href="/irctc-agent-registration/" className="group inline-flex items-center gap-2 rounded-xl bg-[#EE5326] px-5 py-3 text-sm font-bold !text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D9471D] hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none">View Registration Options <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" /></Link>
          <Link href="/contact-us/" className="inline-flex items-center rounded-xl border border-[#10407A]/20 bg-[#F7FAFD] px-5 py-3 text-sm font-bold text-[#10407A] transition-colors duration-200 hover:border-[#10407A]/35 hover:bg-[#EFF5FB] motion-reduce:transition-none">Ask TravelIQ</Link>
        </div>
      </article>
    </main>
  );
}
