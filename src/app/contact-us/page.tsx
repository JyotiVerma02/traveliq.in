import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Details Travel IQ | TravelIQ",
  description:
    "Touch with us via our chat support. WhatsApp No. : +91 78350 25025, Phone: +91-7835025030, Address: Unit 1004G, JMD Megapolis, Sector 48, Gurugram - 122018.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fe]">
        {/* Header Banner */}
        <section className="relative overflow-hidden bg-[#edf5ff] py-12 sm:py-16">
          <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-500">
              <Link href="/" className="transition hover:text-[#10407A]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#10407A]">Contact Us</span>
            </div>

            <div className="mx-auto max-w-3xl text-center space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#10407A]">
                Contact Details Travel IQ
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Touch with us via our chat support
              </h1>
              <h2 className="text-2xl font-bold text-[#10407A]">
                TravelIQ Chat Support
              </h2>
              <p className="text-base text-slate-600">If you have any query</p>
            </div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="-mt-6 py-6 sm:py-8">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* WhatsApp */}
              <div className="rounded-xl border border-sky-100 bg-white p-6 text-center shadow-xs">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-[#25D366]">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.75.46 3.46 1.33 4.97L2 22l5.28-1.39a9.86 9.86 0 0 0 4.76 1.22h.01c5.45 0 9.89-4.44 9.89-9.9C21.94 6.44 17.5 2 12.04 2zm5.79 14.2c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.14.1-1.84-.12-.42-.13-.96-.31-1.65-.61-2.91-1.25-4.8-4.17-4.95-4.36-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.49.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.1.2-.15.32-.29.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.07 1.3 2.37 1.45.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.65-.15.27.1 1.69.8 1.98.95.29.15.49.22.56.34.07.12.07.71-.17 1.39z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  WhatsApp No. :
                </h3>
                <a
                  href="https://wa.me/917835025025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-base font-bold text-[#25D366] hover:underline"
                >
                  +91 78350 25025
                </a>
              </div>

              {/* Phone */}
              <div className="rounded-xl border border-sky-100 bg-white p-6 text-center shadow-xs">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-[#10407A]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Phone
                </h3>
                <a
                  href="tel:+917835025030"
                  className="mt-1 block text-base font-bold text-[#10407A] hover:underline"
                >
                  +91-7835025030
                </a>
              </div>

              {/* Location */}
              <div className="rounded-xl border border-sky-100 bg-white p-6 text-center shadow-xs">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Location Address
                </h3>
                <p className="mt-1 text-xs font-bold text-slate-800 leading-relaxed">
                  Unit 1004G, JMD Megapolis, Sector 48, Gurugram - 122018
                </p>
              </div>

              {/* Email */}
              <div className="rounded-xl border border-sky-100 bg-white p-6 text-center shadow-xs">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-[#10407A]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Send Us A Message
                </h3>
                <a
                  href="mailto:support@traveliq.in"
                  className="mt-1 block text-base font-bold text-[#10407A] hover:underline"
                >
                  support@traveliq.in
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content: Form & Social Media */}
        <section className="py-10 sm:py-14">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              {/* Form Column */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#10407A]">
                    Contact Us
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900">Get In Touch</h2>
                </div>
                <ContactForm />
              </div>

              {/* Sidebar Column: Social Media & Map */}
              <div className="space-y-6 lg:col-span-5">
                <div className="rounded-xl border border-sky-100 bg-white p-6 shadow-xs space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Social Media</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    You can also check our social media profile details as mentioned below.
                  </p>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-[#10407A] hover:text-white transition"
                    >
                      Facebook-f
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-[#10407A] hover:text-white transition"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-[#10407A] hover:text-white transition"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-[#10407A] hover:text-white transition"
                    >
                      Linkedin-in
                    </a>
                    <a
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-[#10407A] hover:text-white transition"
                    >
                      Pinterest
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="overflow-hidden rounded-xl border border-sky-100 bg-white p-2 shadow-xs">
                  <iframe
                    title="Travel IQ Location Map"
                    src="https://maps.google.com/maps?q=Travel%20IQ%20Services%20Private%20Limited&t=m&z=10&output=embed&iwloc=near"
                    width="100%"
                    height="280"
                    style={{ border: 0, borderRadius: "0.75rem" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
