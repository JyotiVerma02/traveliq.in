"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#F4F7FB] px-5 py-20 text-[#0B1728]">
      <section className="mx-auto max-w-3xl rounded-[28px] border border-white bg-white p-8 text-center shadow-[8px_10px_28px_rgba(16,64,122,0.09)] sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EE5326]">
          Something went wrong
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#10407A] sm:text-5xl">
          We could not load this page
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#526174] sm:text-base">
          Please try again. If the issue continues, TravelIQ support can help.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center justify-center rounded-[14px] bg-[#EE5326] px-6 text-sm font-bold text-white transition hover:bg-[#D9471D]"
          >
            Try Again
          </button>
          <Link
            href="/contact-us"
            className="inline-flex min-h-12 items-center justify-center rounded-[14px] border border-[#10407A]/20 px-6 text-sm font-bold text-[#10407A] transition hover:border-[#10407A] hover:bg-[#10407A] hover:text-white"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}
