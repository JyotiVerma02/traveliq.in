import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services Provided by Travel IQ | TravelIQ",
  description:
    "Travel IQ is the best travel agent for Air tickets, Railway reservations, Hotel Bookings, Tour Packages & VISA assistance.",
};

const services = [
  {
    title: "Air Tickets",
    description: "Travel IQ is offering the cheapest fares for all domestic & International air tickets.",
    icon: "✈️",
  },
  {
    title: "Bus Tickets",
    description: "TraveliQ is India's leading provider of online bus ticketing services that provide comfortable bus and train travel.",
    icon: "🚌",
  },
  {
    title: "Hotel Booking",
    description: "You can get the latest deals and offers on hotel bookings all over the world.",
    icon: "🏨",
  },
  {
    title: "IRCTC Domestic Packages",
    description: "Book Branded IRCTC Domestic tour packages and earn commission.",
    icon: "🚆",
  },
  {
    title: "Tour Packages",
    description: "Best tour packages for domestic and international holidays",
    icon: "🏝️",
  },
  {
    title: "IRCTC Agency",
    description: "IRCTC Agent Registration in very affordable price. OTP and DC Based Login Authentication",
    icon: "🎫",
  },
  {
    title: "Class 3 Digital Signature",
    description: "Get lots of benefits using our Digital Signature Certificate",
    icon: "🔐",
  },
];

const upcomingServices = [
  {
    title: "Pan Card",
    description: "Utiitsl Authorized Pan Card Center. We offers to our clients to become uti psa agent.",
    icon: "💳",
  },
  {
    title: "IRCTC Domestic Packages",
    description: "Book Branded IRCTC Domestic tour packages and earn commission.",
    icon: "🚆",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f9fe]">
        {/* Header Banner */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#cbf2ff]/70 via-[#eaf8ff]/50 to-[#f6f9fe] py-12 sm:py-16">
          <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-500">
              <Link href="/" className="transition hover:text-[#1685e8]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#1685e8]">Services</span>
            </div>

            <div className="mx-auto max-w-4xl text-center space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#1685e8]">
                Our Services
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Services Provided by Travel IQ
              </h1>
              <h2 className="text-xl font-bold text-slate-800">
                Best Travel Services in India
              </h2>
              <p className="text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
                Travel IQ is the best travel agent for Air tickets, Railway reservations, Hotel Bookings, Tour Packages &amp; VISA assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 sm:py-14">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-sky-100 bg-white p-6 sm:p-8 shadow-xs transition hover:-translate-y-1 hover:border-[#1685e8]/30 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-2xl">
                      {service.icon}
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Services */}
        <section className="bg-white py-10 sm:py-14 border-y border-slate-100">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#1685e8]">
                Upcoming Services
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                TraveliQ Upcoming Services
              </h2>
              <p className="text-sm text-slate-600">Below is the upcoming services</p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              {upcomingServices.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 rounded-xl border border-sky-100 bg-[#f6f9fe] p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-2xl shadow-xs">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-10 sm:py-14">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-gradient-to-r from-[#1685e8] to-[#075ca8] p-8 sm:p-12 text-white shadow-md">
              <div className="mx-auto max-w-3xl text-center space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-sky-200">
                  Touch with us for a better Solution.
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Get Better Future with TravelIQ
                </h2>
                <p className="text-base sm:text-lg text-sky-100 leading-relaxed">
                  Travel IQ services can help the aspiring travel agencies to increase their business and get more clients through online promotions.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/917835025025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#20bd5a]"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
