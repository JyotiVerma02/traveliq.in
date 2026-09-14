import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

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
    <main className="min-h-screen overflow-hidden bg-[#f4f7fb] text-[#0b1728]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f7f9fc]">

        {/* Background glow */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#ee5326]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-52 -left-40 h-[500px] w-[500px] rounded-full bg-[#10407a]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-7 sm:px-8 sm:pb-20 lg:pb-24">

          {/* Breadcrumb */}

          <div className="mb-10">

            <div className="inline-flex items-center gap-2 rounded-[14px] border border-white bg-white/80 px-4 py-2.5 text-xs shadow-[5px_6px_14px_rgba(16,64,122,0.07),-4px_-4px_10px_rgba(255,255,255,0.95)] backdrop-blur-sm">

              <Link
                href="/"
                className="text-[#66758a] transition-colors duration-300 hover:text-[#ee5326]"
              >
                Home
              </Link>

              <span className="text-[#ee5326]">/</span>

              <span className="font-medium text-[#10407a]">
                Services
              </span>

            </div>

          </div>


          {/* Hero Heading */}

          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-px w-9 bg-[#ee5326]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ee5326]">
                TravelIQ Services
              </span>

              <span className="h-px w-9 bg-[#ee5326]" />

            </div>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#10407a] sm:text-5xl lg:text-[56px]">

              Complete Travel Solutions

              <span className="block text-[#ee5326]">
                Built for Better Journeys
              </span>

            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#66758a] sm:text-base">
              From flights and railway reservations to hotels, bus tickets and
              holiday packages, TravelIQ provides reliable travel solutions for
              agents and travellers across India.
            </p>

          </div>


          {/* =====================================================
              HERO IMAGE
          ===================================================== */}

          <div className="relative mt-12 sm:mt-14">

            {/* Shadow layer */}

            <div className="absolute inset-x-5 bottom-[-12px] top-5 rounded-[32px] bg-[#cdd8e5] blur-sm" />

            {/* Main clay frame */}

            <div className="relative overflow-hidden rounded-[32px] border border-white/90 bg-white p-2 shadow-[12px_15px_34px_rgba(16,64,122,0.12),-10px_-10px_28px_rgba(255,255,255,0.95)]">

              <div className="relative aspect-[16/7] min-h-[230px] overflow-hidden rounded-[25px] sm:min-h-[330px] lg:min-h-[430px]">

                <Image
                  src="/images/services.webp"
                  alt="TravelIQ travel services"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 1400px"
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-r from-[#071a35]/75 via-[#071a35]/30 to-[#071a35]/10" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071a35]/45 via-transparent to-transparent" />


                {/* Hero image content */}

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9">

                  <div className="max-w-xl">

                    <div className="mb-3 inline-flex items-center gap-2 rounded-[12px] border border-white/25 bg-white/10 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-md">

                      <Sparkles className="h-3.5 w-3.5 text-white" />

                      Travel Solutions

                    </div>

                    <p className="text-sm font-medium leading-6 text-white sm:text-base">
                      Reliable travel services designed for agents,
                      businesses and modern travellers.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f4f7fb] py-20 sm:py-24 lg:py-28">

        <div className="pointer-events-none absolute -left-56 top-24 h-[500px] w-[500px] rounded-full bg-[#ee5326]/5 blur-[130px]" />

        <div className="pointer-events-none absolute -right-56 bottom-0 h-[500px] w-[500px] rounded-full bg-[#10407a]/7 blur-[130px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">

          {/* Section heading */}

          <div className="mb-12 grid gap-6 border-b border-[#10407a]/10 pb-8 lg:grid-cols-[1fr_430px] lg:items-end">

            <div>

              <div className="mb-3 flex items-center gap-3">

                <span className="h-px w-9 bg-[#ee5326]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ee5326]">
                  What We Offer
                </span>

              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[#10407a] sm:text-4xl">
                Our Travel Services
              </h2>

            </div>

            <p className="text-sm leading-7 text-[#66758a] lg:text-right">
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
                className="group flex min-h-[500px] flex-col overflow-hidden rounded-[28px] border border-white/90 bg-[#f7f9fc] p-2 shadow-[10px_12px_28px_rgba(16,64,122,0.10),-9px_-9px_24px_rgba(255,255,255,0.95)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[16px_20px_40px_rgba(16,64,122,0.14),-12px_-12px_30px_rgba(255,255,255,1)]"
              >

                {/* Image */}

                <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-[#eaf0f6]">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a35]/75 via-transparent to-transparent" />


                  {/* Number */}

                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-[13px] border border-white/30 bg-white/15 text-xs font-semibold text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  {/* Image bottom label */}

                  <div className="absolute bottom-4 left-4">

                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/80">
                      TravelIQ
                    </span>

                  </div>

                </div>


                {/* Content */}

                <div className="flex flex-1 flex-col px-5 pb-5 pt-6 sm:px-6 sm:pb-6">

                  <div className="mb-3 flex items-center gap-3">

                    <span className="h-px w-7 bg-[#ee5326] transition-all duration-300 group-hover:w-10" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#78879a]">
                      Travel Service
                    </span>

                  </div>


                  <h3 className="text-xl font-semibold leading-snug text-[#10407a] transition-colors duration-300 group-hover:text-[#ee5326]">
                    {service.title}
                  </h3>


                  <p className="mt-3 flex-1 text-sm leading-7 text-[#66758a]">
                    {service.description}
                  </p>


                  {/* Bottom */}

                  <div className="mt-6 flex items-center justify-between border-t border-[#10407a]/10 pt-5">

                    <span className="text-sm font-semibold text-[#10407a]">
                      Explore Service
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-[11px] border border-white bg-[#f1f4f8] text-[#ee5326] shadow-[4px_5px_10px_rgba(16,64,122,0.08),-3px_-3px_8px_rgba(255,255,255,0.9)] transition-all duration-300 group-hover:bg-[#ee5326] group-hover:text-white">

                      <ArrowRight className="h-4 w-4" />

                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          BUSINESS SOLUTIONS
      ========================================================= */}

      <section className="relative overflow-hidden border-y border-[#10407a]/10 bg-[#eaf0f6] py-16 sm:py-20">

        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#ee5326]/7 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

          <div className="rounded-[30px] border border-white/90 bg-[#f5f8fb] p-7 shadow-[10px_12px_28px_rgba(16,64,122,0.10),-9px_-9px_25px_rgba(255,255,255,0.95)] sm:p-10 lg:p-12">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">

              {/* Left */}

              <div>

                <div className="mb-3 flex items-center gap-3">

                  <span className="h-px w-8 bg-[#ee5326]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#ee5326]">
                    Why TravelIQ
                  </span>

                </div>

                <h2 className="text-2xl font-semibold leading-snug text-[#10407a] sm:text-3xl">
                  One Travel Partner.
                  <span className="block">
                    Multiple Business Opportunities.
                  </span>
                </h2>

              </div>


              {/* Divider */}

              <div className="hidden h-16 w-px bg-[#10407a]/15 lg:block" />


              {/* Description */}

              <p className="max-w-xl text-sm leading-7 text-[#66758a]">
                TravelIQ brings multiple travel and business services
                together so agents can offer more to their customers while
                building a stronger travel business.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          UPCOMING SERVICES
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24">

        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#ee5326]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-4 flex items-center justify-center gap-3">

              <span className="h-px w-9 bg-[#ee5326]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ee5326]">
                Coming Next
              </span>

              <span className="h-px w-9 bg-[#ee5326]" />

            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-[#10407a] sm:text-4xl">
              Upcoming Services
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#66758a]">
              More business-focused services are being added to the TravelIQ
              ecosystem.
            </p>

          </div>


          {/* Cards */}

          <div className="mx-auto mt-12 grid max-w-5xl gap-7 md:grid-cols-2">

            {upcomingServices.map((item) => (

              <div
                key={item.title}
                className="group rounded-[26px] border border-white bg-[#f5f8fb] p-7 shadow-[9px_11px_25px_rgba(16,64,122,0.09),-8px_-8px_23px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1"
              >

                <div className="flex items-start gap-5">

                  {/* Number */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-white bg-[#eef2f6] text-xs font-semibold text-[#ee5326] shadow-[4px_5px_10px_rgba(16,64,122,0.07),-3px_-3px_8px_rgba(255,255,255,0.95)]">

                    {item.number}

                  </div>


                  {/* Content */}

                  <div>

                    <h3 className="text-lg font-semibold text-[#10407a]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#66758a]">
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

      <section className="relative overflow-hidden bg-[#e9f1f8] py-20 sm:py-24">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#ee5326]/8 blur-[110px]" />

        <div className="pointer-events-none absolute -bottom-48 -left-32 h-[400px] w-[400px] rounded-full bg-[#10407a]/8 blur-[110px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">

          <div className="rounded-[32px] border border-white/90 bg-[#f5f8fb] px-6 py-12 shadow-[12px_15px_32px_rgba(16,64,122,0.10),-10px_-10px_28px_rgba(255,255,255,0.95)] sm:px-12 sm:py-14">

            {/* Label */}

            <div className="mx-auto mb-5 flex items-center justify-center gap-3">

              <span className="h-px w-9 bg-[#ee5326]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ee5326]">
                Partner With TravelIQ
              </span>

              <span className="h-px w-9 bg-[#ee5326]" />

            </div>


            <h2 className="text-3xl font-semibold tracking-tight text-[#10407a] sm:text-4xl">
              Build a Better Travel Business
            </h2>


            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#66758a] sm:text-base">
              Connect with TravelIQ and explore travel services designed to
              help agents expand their offerings, serve customers better and
              grow their business.
            </p>


            {/* Buttons */}

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

              {/* Primary */}

              <Link
                href="/contact-us/"
                className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[14px] bg-[#ee5326] px-7 py-3.5 text-sm font-semibold text-white shadow-[7px_8px_18px_rgba(238,83,38,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9471d] hover:shadow-[9px_11px_23px_rgba(238,83,38,0.25)]"
              >
                <span className="text-white">
                  Contact TravelIQ
                </span>

                <ArrowRight className="h-4 w-4 text-white" />

              </Link>


              {/* WhatsApp */}

              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[14px] bg-[#10407a] px-7 py-3.5 text-sm font-semibold text-white shadow-[7px_8px_18px_rgba(16,64,122,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c315e]"
              >
                <MessageCircle className="h-4 w-4 text-white" />

                <span className="text-white">
                  WhatsApp Us
                </span>

              </a>

            </div>


            {/* Small trust line */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-[#66758a]">

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#ee5326]" />
                Reliable Support
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#ee5326]" />
                Travel Solutions
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#ee5326]" />
                Business Focused
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}