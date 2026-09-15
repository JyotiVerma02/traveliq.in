import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | TravelIQ",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F4F7FB] px-5 py-20 text-[#0B1728]">
      <section className="mx-auto max-w-3xl rounded-[28px] border border-white bg-white p-8 text-center shadow-[8px_10px_28px_rgba(16,64,122,0.09)] sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EE5326]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#10407A] sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#526174] sm:text-base">
          The page you are looking for may have moved, or the link may no
          longer be available.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-[14px] bg-[#EE5326] px-6 text-sm font-bold text-white transition hover:bg-[#D9471D]"
          >
            Go to Home
          </Link>
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
