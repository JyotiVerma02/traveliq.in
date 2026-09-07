import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services Provided by Travel IQ | TravelIQ",
  description:
    "Travel IQ offers air tickets, railway reservations, hotel bookings, bus tickets, tour packages, IRCTC services and digital solutions.",
};

const services = [
  {
    title: "Air Tickets",
    description:
      "Travel IQ offers competitive fares for domestic and international air tickets with reliable booking support.",
    image: "/images/services/air-tickets.jpg",
    href: "/pages/services/online-air-ticket-booking",
  },
  {
    title: "Bus Tickets",
    description:
      "Book bus tickets with convenient online booking options and travel support across major routes.",
    image: "/images/services/bus-tickets.jpg",
    href: "/pages/services/bus-ticket-booking",
  },
  {
    title: "Hotel Booking",
    description:
      "Find hotels worldwide with attractive deals and offers designed to make every journey comfortable.",
    image: "/images/services/hotel-booking.jpg",
    href: "/pages/services/online-hotel-booking",
  },
  {
    title: "IRCTC Domestic Packages",
    description:
      "Book branded IRCTC domestic tour packages and create additional earning opportunities for your business.",
    image: "/images/services/irctc-domestic-packages.jpg",
    href: "/pages/services/irctc-domestic-packages",
  },
  {
    title: "Tour Packages",
    description:
      "Explore carefully planned domestic and international holiday packages for memorable travel experiences.",
    image: "/images/services/tour-packages.jpg",
    href: "/pages/services/irctc-tour-packages",
  },
  {
    title: "Railway Reservations",
    description:
      "Book railway tickets across India with convenient reservation support for different travel requirements.",
    image: "/images/services/railway-reservations.jpg",
    href: "/pages/services/railway-reservations",
  },
  {
    title: "Class 3 Digital Signature",
    description:
      "Get Class 3 Digital Signature Certificates with solutions designed for business and professional requirements.",
    image: "/images/services/digital-signature.jpg",
    href: "/pages/services/digital-signature-provider-in-gurgaon",
  },
];

const upcomingServices = [
  {
    number: "01",
    title: "PAN Card",
    description:
      "UTIITSL authorized PAN Card services with opportunities to become a UTI PSA agent.",
  },
  {
    number: "02",
    title: "IRCTC Domestic Packages",
    description:
      "Book branded IRCTC domestic tour packages and unlock additional earning opportunities.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FBFCFE] text-[#0B1728]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-[#10407A]/8 bg-[#FFF8F3]">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#EE5326]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-52 -left-40 h-[450px] w-[450px] rounded-full bg-[#10407A]/8 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          {/* Breadcrumb */}
          <div className="mb-12 flex items-center gap-3 text-sm">
            <Link
              href="/"
              className="font-medium text-[#526174] transition hover:text-[#EE5326]"
            >
              Home
            </Link>

            <span className="text-[#EE5326]">/</span>

            <span className="font-semibold text-[#10407A]">Services</span>
          </div>

          {/* Hero Content */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#EE5326]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EE5326]">
                TravelIQ Services
              </span>

              <span className="h-[2px] w-10 bg-[#EE5326]" />
            </div>

            <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-[#10407A] sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
              Complete Travel Solutions
              <span className="block text-[#EE5326]">
                Built for Better Journeys
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#526174] sm:text-base">
              From flights and railway reservations to hotels, bus tickets and
              holiday packages, TravelIQ provides reliable travel solutions for
              agents and travellers across India.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative mt-12 w-full overflow-hidden rounded-md border border-white/80 bg-white shadow-[0_25px_70px_rgba(16,64,122,0.12)]">
            <div className="relative aspect-[16/6] min-h-[210px] w-full sm:min-h-[280px]">
              <Image
                src="/images/services/services-banner.jpg"
                alt="TravelIQ travel services"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-52 top-20 h-[450px] w-[450px] rounded-full bg-[#FFF1EA] blur-[130px]" />

        <div className="pointer-events-none absolute -right-52 bottom-0 h-[450px] w-[450px] rounded-full bg-[#EEF4FA] blur-[130px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          {/* Section Heading */}
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#10407A]/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#EE5326]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EE5326]">
                  What We Offer
                </span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#10407A] sm:text-4xl">
                Our Travel Services
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#526174] sm:text-right">
              Professional travel services designed to help agents and
              travellers manage bookings, reservations and complete travel
              requirements with confidence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex min-h-[500px] flex-col overflow-hidden border border-[#10407A]/10 bg-white shadow-[0_12px_40px_rgba(16,64,122,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EE5326]/25 hover:shadow-[0_22px_55px_rgba(16,64,122,0.11)]"
              >
                {/* Service Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#EEF4FA]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/65 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                  <span className="absolute bottom-4 left-5 text-xs font-bold tracking-[0.18em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Service Content */}
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-[2px] w-7 bg-[#EE5326] transition-all duration-300 group-hover:w-11" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#526174]">
                      Travel Service
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[#10407A] transition-colors duration-300 group-hover:text-[#EE5326]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-base leading-7 text-[#526174]">
                    {service.description}
                  </p>

                  {/* Service Link */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#10407A]/8 pt-4">
                    <span className="text-sm font-bold text-[#10407A]">
                      Explore Service
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center border border-[#EE5326]/25 text-[#EE5326] transition-all duration-300 group-hover:bg-[#EE5326] group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BUSINESS SOLUTIONS STRIP
      ========================================================= */}
      <section className="border-y border-[#10407A]/8 bg-[#F2F6FB] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            {/* Left Content */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EE5326]">
                Why TravelIQ
              </span>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#10407A] sm:text-3xl">
                One Travel Partner.
                <span className="block">
                  Multiple Business Opportunities.
                </span>
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden h-16 w-px bg-[#10407A]/15 lg:block" />

            {/* Description */}
            <p className="max-w-xl text-sm leading-7 text-[#526174]">
              TravelIQ brings multiple travel and business services together
              so agents can offer more to their customers while building a
              stronger travel business.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          UPCOMING SERVICES
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-9 bg-[#EE5326]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EE5326]">
                Coming Next
              </span>

              <span className="h-[2px] w-9 bg-[#EE5326]" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#10407A] sm:text-4xl">
              Upcoming Services
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#526174]">
              More business-focused services are being added to the TravelIQ
              ecosystem.
            </p>
          </div>

          {/* Upcoming Services */}
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {upcomingServices.map((item) => (
              <div
                key={item.title}
                className="group border border-[#10407A]/10 bg-[#FBFCFE] p-6 shadow-[0_10px_35px_rgba(16,64,122,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#EE5326]/25 hover:shadow-[0_18px_45px_rgba(16,64,122,0.08)] sm:p-7"
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#EE5326]/20 bg-[#FFF5F1] text-xs font-extrabold tracking-widest text-[#EE5326]">
                    {item.number}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-[#10407A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#526174]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#EAF3FB] py-16 sm:py-20">
        {/* Orange background glows */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#EE5326]/6 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-48 -left-32 h-[400px] w-[400px] rounded-full bg-[#EE5326]/7 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          {/* CTA Label */}
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-[#EE5326]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EE5326]">
              Partner With TravelIQ
            </span>

            <span className="h-[2px] w-9 bg-[#EE5326]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#10407A] sm:text-4xl">
            Build a Better Travel Business
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#526174] sm:text-base">
            Connect with TravelIQ and explore travel services designed to help
            agents expand their offerings, serve customers better and grow
            their business.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-3 bg-[#EE5326] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(238,83,38,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D9471D]"
            >
              Contact TravelIQ
              <span>→</span>
            </Link>

            <a
              href="https://wa.me/917835025025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:border-[#EE5326]/50 hover:bg-white/10"
            >
              WhatsApp Us
              <span className="text-[#EE5326]">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}