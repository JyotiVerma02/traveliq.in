import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { agentFaqItems } from "@/lib/agent-faqs";
import { canonicalUrl } from "@/lib/site";

const homeFaqs = [
  ["How long does IRCTC Agent ID registration take?", "IRCTC Agent ID registration typically takes 24 to 48 working hours after document verification."],
  ["Can I book unlimited train tickets as an authorized agent?", "Yes, an authorized agent can book tickets without the personal-account monthly limit."],
  ["What documents are required for agent registration?", "You need PAN, Aadhaar, a fresh mobile number, email ID, and address proof."],
  ["How does Aadhaar linking increase booking limits?", "Aadhaar verification supports the required IRCTC account verification process."],
  ["What support is provided for cancellations and refunds?", "TravelIQ provides helpdesk and WhatsApp support for agent booking queries."],
].map(([question, answer]) => ({ question, answer }));

const allFaqs = [...homeFaqs, ...agentFaqItems];

export const metadata: Metadata = {
  title: "Frequently Asked Questions | TravelIQ",
  description: "Answers to frequently asked questions about TravelIQ and IRCTC agent registration.",
  alternates: { canonical: canonicalUrl("/frequently-asked-questions") },
};

export default function FrequentlyAskedQuestionsPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fe] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold text-[#10407A] hover:text-[#EE5326]">Home / FAQs</Link>
        <div className="mt-6 text-center"><HelpCircle className="mx-auto h-9 w-9 text-[#EE5326]" /><h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Frequently Asked Questions</h1><p className="mt-3 text-slate-600">Complete answers about TravelIQ and IRCTC agent registration.</p></div>
        <div className="mt-10 space-y-4">{allFaqs.map((faq, index) => <details key={faq.question} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none font-bold text-[#10407A]"><span className="mr-3 text-[#EE5326]">{String(index + 1).padStart(2, "0")}</span>{faq.question}</summary><p className="mt-4 border-t border-slate-100 pt-4 leading-relaxed text-slate-700">{faq.answer}</p></details>)}</div>
      </div>
    </main>
  );
}
