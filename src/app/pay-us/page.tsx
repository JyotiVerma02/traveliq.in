import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pay Us | TravelIQ",
  description: "Secure payment information for TravelIQ Services Private Limited.",
};

export default function PayUsAliasPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fe] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-sky-100 bg-white p-8 shadow-sm">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-500">
          <Link href="/" className="transition hover:text-[#10407A]">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#10407A]">Pay Us</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Pay Online Secure Payment
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Pay your payment securely to Travel IQ Services Private Limited.
        </p>
      </div>
    </main>
  );
}
