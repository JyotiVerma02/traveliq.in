import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart2,
  Headphones,
  Plane,
  UsersRound,
  Award,
  Clock,
  Globe,
  Shield,
  Train,
  Building2,
  Hotel,
  Bus,
  Share2,
  Rocket,
  ChevronRight,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/icons";
import { canonicalUrl, WHATSAPP_URL } from "@/lib/site";

const aboutTitle = "About TravelIQ | Travel Technology & B2B Services";
const aboutDescription =
  "Learn about TravelIQ, a Gurugram-based travel technology and services brand supporting travel professionals with railway, flight, hotel, bus, holiday and B2B travel solutions.";

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: {
    canonical: canonicalUrl("/about-travel-iq/"),
  },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    url: canonicalUrl("/about-travel-iq/"),
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/about.webp",
        width: 1200,
        height: 630,
        alt: "About TravelIQ Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutTitle,
    description: aboutDescription,
    images: ["/images/about.webp"],
  },
};

/* =========================================================
   SOLUTIONS
========================================================= */

const solutions: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "AGENT SUPPORT",
    description: "Practical assistance for agent onboarding and supported services.",
    icon: BadgeCheck,
  },
  {
    title: "HOLIDAY SERVICES",
    description: "Holiday options and planning support for travel professionals.",
    icon: Plane,
  },
  {
    title: "PERSONAL SERVICE",
    description: "Agent-focused assistance for supported travel services.",
    icon: Headphones,
  },
  {
    title: "FLIGHT BOOKING",
    description:
      "Reliable flight booking assistance with competitive fares and professional support.",
    icon: Plane,
  },
  {
    title: "HOTEL & STAY",
    description:
      "Hotel search and reservation services for travel professionals.",
    icon: Hotel,
  },
  {
    title: "TRAIN & BUS SERVICES",
    description:
      "Convenient IRCTC rail and dependable bus booking assistance through our travel network.",
    icon: Train,
  },
];

/* =========================================================
   STATS
========================================================= */

const stats: {
  number: string;
  label: string;
  icon: LucideIcon;
}[] = [
  {
    number: "2014",
    label: "Founded",
    icon: Clock,
  },
  {
    number: "20K+",
    label: "Registrations / Agents Served",
    icon: UsersRound,
  },
  {
    number: "B2B",
    label: "Travel Platform",
    icon: Award,
  },
  {
    number: "Pan India",
    label: "Service Coverage",
    icon: Shield,
  },
];

/* =========================================================
   JOURNEY
========================================================= */


export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://traveliq.in/" },
    { name: "About Us", item: "https://traveliq.in/about-travel-iq/" },
  ]);

  return (
    <main className="overflow-hidden bg-[#FFFDFB] text-[#526174]">
      <JsonLd data={breadcrumbSchema} />
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="inner-page-hero relative overflow-hidden bg-white">
        {/* =====================================================
      SUBTLE BACKGROUND
  ===================================================== */}

        <div
          className="
      pointer-events-none
      absolute
      -left-32
      top-20
      h-[420px]
      w-[420px]
      rounded-full
      bg-[#EE5326]/[0.05]
      blur-[120px]
    "
        />

        <div
          className="
      pointer-events-none
      absolute
      -right-32
      bottom-0
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#10407A]/[0.05]
      blur-[140px]
    "
        />

        <div
          className="
      relative
      mx-auto
      max-w-7xl
      px-5
      pb-10 pt-5
      sm:px-8
      sm:pb-14 sm:pt-7
      lg:px-8
      lg:pb-16 lg:pt-10
    "
        >
          {/* ===================================================
        TOP LINE
    =================================================== */}

          <div
            className="
        mb-10
        flex
        items-center
        justify-between
        border-b
        border-[#10407A]/10
        pb-4
      "
          >
            <span
              className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.22em]
          text-[#10407A]/60
          sm:text-[10px]
        "
            >
              TravelIQ
            </span>

            <div className="hidden h-px flex-1 bg-[#10407A]/10 sm:mx-8 sm:block" />

            <span
              className="
          hidden
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-[#10407A]/45
          sm:block
          sm:text-[10px]
        "
            >
              Corporate HQ — Gurugram
            </span>
          </div>

          {/* ===================================================
        HERO GRID
    =================================================== */}

          <div
            className="
        grid
        items-center
        gap-10
        lg:grid-cols-[0.82fr_1.18fr]
        lg:gap-14
        xl:gap-20
      "
          >
            {/* =================================================
          LEFT CONTENT
      ================================================= */}

            <div className="relative z-10">
              
              <div
                className="
            mb-7
            flex
            items-center
            gap-3
            text-[12px]
            font-medium
            sm:text-[13px]
          "
              >
                <Link
                  href="/"
                  className="
              text-[#10407A]/50
              transition-colors
              duration-300
              hover:text-[#EE5326]
            "
                >
                  Home
                </Link>

                <span className="text-[#EE5326]">/</span>

                <span className="font-semibold text-[#10407A]">About Us</span>
              </div>

              
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#EE5326]" />

                <span
                  className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.24em]
              text-[#EE5326]
            "
                >
                  About TravelIQ
                </span>
              </div>

              
              <h1
                className="
            max-w-[680px]
            text-balance
            text-[2.7rem]
            font-bold
            leading-[1.03]
            tracking-[-0.04em]
            text-[#10407A]
            sm:text-[3.2rem]
            lg:text-[3.5rem]
            xl:text-[3.75rem]
          "
              >
                Building Smarter Travel Services Since 2014
              </h1>

              
              <div className="mt-5 flex items-center gap-2">
                <span className="h-[3px] w-14 bg-[#EE5326]" />
                <span className="h-[3px] w-5 bg-[#10407A]/15" />
              </div>

              
              <h2
                className="
            mt-7
            max-w-[560px]
            text-lg
            font-semibold
            leading-7
            text-[#111D2E]
            sm:text-xl
            sm:leading-8
          "
              >
                Supporting Travel Professionals
              </h2>

              
              <p
                className="
            mt-5
            max-w-[590px]
            text-[14px]
            leading-7
            text-[#59687A]
            sm:text-[15px]
            sm:leading-7
          "
              >
                TravelIQ is a Gurugram-based travel technology and services brand supporting travel professionals with railway, flight, hotel, bus and holiday solutions.
              </p>

              <p
                className="
            mt-4
            max-w-[590px]
            text-[14px]
            leading-7
            text-[#59687A]
            sm:text-[15px]
            sm:leading-7
          "
              >
                Through its B2B travel platform, onboarding assistance and agent support services, TravelIQ helps travel businesses access and manage multiple travel services from one ecosystem.


              </p>

              {/* =================================================
            TRUST INFORMATION
        ================================================= */}

              <div
                className="
            mt-8
            flex
            flex-wrap
            gap-x-7
            gap-y-4
            border-t
            border-[#10407A]/10
            pt-6
          "
              >
                <div>
                  <p
                    className="
                text-xl
                font-bold
                tracking-tight
                text-[#10407A]
              "
                  >
                    2014
                  </p>

                  <p
                    className="
                mt-1
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#EE5326]
              "
                  >
                    Established
                  </p>
                </div>

                <div className="hidden h-10 w-px bg-[#10407A]/10 sm:block" />

                <div>
                  <p
                    className="
                text-xl
                font-bold
                tracking-tight
                text-[#10407A]
              "
                  >
                    20K+
                  </p>

                  <p
                    className="
                mt-1
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#EE5326]
              "
                  >
                    Registrations / Agents Served
                  </p>
                </div>

                <div className="hidden h-10 w-px bg-[#10407A]/10 sm:block" />

                <div>
                  <p
                    className="
                text-xl
                font-bold
                tracking-tight
                text-[#10407A]
              "
                  >
                    B2B
                  </p>

                  <p
                    className="
                mt-1
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#EE5326]
              "
                  >
                    Travel Platform
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
          RIGHT IMAGE PANEL
      ================================================= */}

            <div className="relative z-10 w-full min-w-0">
              
              <div
                className="
            absolute
            -right-3
            -top-3
            z-20
            h-24
            w-24
            border-r-2
            border-t-2
            border-[#EE5326]
            sm:-right-5
            sm:-top-5
            sm:h-32
            sm:w-32
          "
              />

              
              <div
                className="
            absolute
            -bottom-3
            -left-3
            z-20
            h-24
            w-24
            border-b-2
            border-l-2
            border-[#10407A]/30
            sm:-bottom-5
            sm:-left-5
            sm:h-32
            sm:w-32
          "
              />

              
              <div className="group relative h-[380px] overflow-hidden rounded-[24px] bg-[#EEF3F8] sm:h-[440px] lg:h-[480px] xl:h-[520px]">
                <Image
                  src="/images/about.webp"
                  alt="TravelIQ travel services"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 58vw"
                  loading="eager"
                  fetchPriority="high"
                  quality={75}
                />

                
                <div
                  className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#071A35]/85
              via-[#071A35]/10
              to-transparent
            "
                />

                
                <div
                  className="
              absolute
              bottom-0
              left-0
              h-1
              w-full
              bg-[#EE5326]
            "
                />

                
                <div
                  className="
              absolute
              bottom-0
              left-0
              right-0
              p-5
              sm:p-7
              lg:p-8
            "
                >
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p
                        className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-white/70
                  "
                      >
                        Travel Intelligence
                      </p>

                      <h3
                        className="
                    mt-2
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                      >
                        Your Travel Partner
                      </h3>

                      <p
                        className="
                    mt-2
                    max-w-md
                    text-xs
                    leading-5
                    text-white/70
                    sm:text-sm
                  "
                      >
                        Connecting people, journeys and travel opportunities
                        with trusted expertise.
                      </p>
                    </div>

                    
                    <div
                      className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-white/30
                  bg-white/10
                  backdrop-blur-md
                  sm:h-14
                  sm:w-14
                "
                    >
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
            SMALL IMAGE LABEL
        ================================================= */}

              <div
                className="
            absolute
            -bottom-5
            right-5
            z-30
            flex
            items-center
            gap-3
            border
            border-[#10407A]/10
            bg-white
            px-4
            py-3
            shadow-[0_12px_30px_rgba(16,64,122,0.12)]
            sm:right-8
            sm:px-5
            sm:py-4
          "
              >
                <div
                  className="
              flex
              h-9
              w-9
              items-center
              justify-center
              bg-[#FFF0EA]
            "
                >
                  <BadgeCheck className="h-5 w-5 text-[#EE5326]" />
                </div>

                <div>
                  <p
                    className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#EE5326]
              "
                  >
                    Trusted Since
                  </p>

                  <p
                    className="
                mt-0.5
                text-sm
                font-bold
                text-[#10407A]
              "
                  >
                    2014
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
      BOTTOM WHITE TRANSITION
  ===================================================== */}

        <div className="h-12 bg-white" />
      </section>

      {/* =========================================================
          OUR STORY — A Journey Built on Trust & Travel
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FDF8F3] py-16 sm:py-20 lg:py-24">
        {/* Background decorative curved wave rings & flight path overlay */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#FFE8DA]/70 via-[#FFF2EA]/30 to-transparent blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-10 h-[500px] w-[500px] rounded-full bg-[#EE5326]/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="relative grid items-start gap-y-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)_minmax(280px,0.85fr)]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#EE5326]" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#10407A]">OUR STORY</span>
                <span className="h-[2px] w-8 bg-[#EE5326]" />
              </div>

              <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0E2954] sm:text-5xl lg:text-[3.25rem]">
                <span className="block whitespace-nowrap">A Journey Built on</span>
                <span className="block whitespace-nowrap text-[#EE5326]">Trust & Travel</span>
              </h2>

              <p className="mt-4 max-w-[420px] text-[14px] leading-7 text-[#5A687C] sm:text-[15px]">
                TravelIQ provides technology-enabled travel services designed for travel agents and businesses across India, with a focus on practical technology, accessible support and straightforward onboarding.
              </p>

              <div className="relative mt-7 space-y-5 border-l border-dashed border-[#EE5326]/40 pl-5 sm:space-y-6">
                {[
                  { year: "2014", title: "Established", desc: "TravelIQ is based in Gurugram, Haryana, India.", icon: Building2 },
                  { year: "2016", title: "B2B platform growth", desc: "Launched the online portal b2b.traveliq.in.", icon: BarChart2 },
                  { year: "2017", title: "Service network expansion", desc: "Expanded our travel service network across India.", icon: Share2 },
                  { year: "Today", title: "Travel services", desc: "Continuing to innovate and support travel professionals.", icon: Rocket },
                ].map(({ year, title, desc, icon: Icon }) => (
                  <div key={year} className="relative flex items-start gap-3 sm:gap-4">
                    <span aria-hidden="true" className="absolute -left-[25px] top-4 h-2.5 w-2.5 rounded-full border-[2px] border-[#FFF8F3] bg-[#EE5326] shadow-[0_0_0_1px_rgba(238,83,38,0.18)]" />
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[20px] border border-[#FFDEC9]/60 bg-[#FFF0E9] text-[#EE5326] shadow-[0_5px_14px_rgba(238,83,38,0.06)] sm:h-[52px] sm:w-[52px]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-xl font-black leading-6 text-[#10407A]">{year}</p>
                      <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#10407A] sm:text-[10px]">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-[#5A687C] sm:text-[13px]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 space-y-5 text-[14px] leading-7 text-[#5A687C] sm:text-[15px] lg:pt-[205px]">
              <p>
                TravelIQ is based in Gurugram, Haryana, India, and supports travel professionals with railway, flight, hotel, bus and holiday services. IRCTC-related agent services are provided in accordance with applicable authorization, PSP and agent requirements.
              </p>
              <p>
                The platform brings together travel services and related support to help agents manage their operations more efficiently.
              </p>

              <blockquote className="relative overflow-hidden rounded-[18px] border border-[#FFDEC9] border-l-[3px] border-l-[#EE5326] bg-gradient-to-r from-[#FFF5EE]/95 to-white/70 px-5 py-5 shadow-[0_8px_22px_rgba(238,83,38,0.04)] sm:px-7">
                <span aria-hidden="true" className="absolute left-4 top-2 text-5xl font-serif font-bold leading-none text-[#EE5326] sm:left-6">&ldquo;</span>
                <p className="relative pl-9 pr-1 text-[15px] font-bold leading-6 text-[#10407A] sm:pl-11 sm:text-base sm:leading-7">
                  Foreseeing the digital transformation that revolutionized the travel industry, the company started its online portal under the name b2b.traveliq.in in the year 2016.
                </p>
                <svg aria-hidden="true" className="pointer-events-none absolute bottom-2 right-3 h-14 w-16 text-[#EE5326]/75" viewBox="0 0 64 48" fill="none">
                  <path d="M3 39c17 9 37-2 46-28" stroke="currentColor" strokeDasharray="3 4" />
                  <path d="m43 13 7-5 1 9" stroke="currentColor" strokeWidth="2" />
                </svg>
                <Plane aria-hidden="true" className="absolute bottom-7 right-5 h-5 w-5 rotate-[-32deg] text-[#EE5326] sm:right-6" />
              </blockquote>

              <p>
                The B2B platform is designed to help travel businesses access and manage multiple travel services from one ecosystem.
              </p>
              <p>
                Since 2014, TravelIQ has continued to develop travel services, technology and support for travel professionals.
              </p>
              <p>
                TravelIQ focuses on practical technology, accessible support and a straightforward onboarding experience across confirmed booking services.
              </p>
            </div>

            <div className="relative hidden h-[430px] min-w-0 overflow-visible xl:block xl:pt-3 xl:h-[470px]">
              <div aria-hidden="true" className="absolute -right-3 -top-8 h-[310px] w-[310px] rounded-full border-[20px] border-[#FFEAD9]/80 bg-[#FFF3E9]" />
              <div className="absolute right-0 top-2 h-[270px] w-[270px] overflow-hidden rounded-l-[145px] rounded-br-[135px] rounded-tr-[155px] border-[5px] border-white shadow-[0_15px_40px_rgba(16,64,122,0.1)]">
                <Image
                  src="/images/about.webp"
                  alt="Travel across India by air and rail"
                  fill
                  sizes="270px"
                  className="object-cover object-[70%_34%]"
                />
              </div>
              <div className="absolute right-0 top-[215px] h-[205px] w-[220px] overflow-hidden rounded-[52%_0_46%_52%] border-[5px] border-white shadow-[0_15px_40px_rgba(16,64,122,0.12)]">
                <Image
                  src="/images/services/irctc-domestic-packages-bright.jpg"
                  alt="Taj Mahal gardens"
                  fill
                  sizes="220px"
                  className="object-cover object-center"
                />
              </div>
              <div aria-hidden="true" className="absolute right-2 top-[180px] flex h-9 w-9 items-center justify-center rounded-full bg-[#EE6A3B] text-white shadow-md">
                <MapPin aria-hidden="true" className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3">
            <article className="group relative min-h-[184px] overflow-hidden rounded-[20px] border border-white/90 bg-white/90 p-5 shadow-[0_8px_24px_rgba(16,64,122,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
              <Plane aria-hidden="true" className="pointer-events-none absolute -right-1 top-3 h-16 w-16 text-[#F2ECE8] opacity-35 transition-transform duration-500 group-hover:scale-110" />
              <div className="relative z-10 grid grid-cols-[56px_minmax(0,1fr)] grid-rows-[56px_auto] items-start gap-x-4 gap-y-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#FFF0E9] text-[#EE5326]"><Plane className="h-7 w-7" /></span>
                <div className="min-w-0"><p className="text-[10px] font-extrabold uppercase tracking-wider text-[#10407A]">Flights</p><h3 className="mt-1 break-words text-sm font-bold leading-5 text-[#10407A]">Easy Air Booking</h3></div>
                <p className="col-start-2 min-w-0 pr-8 text-xs leading-5 text-[#657894]">Access a wide range of domestic and international flight options for your customers.</p>
              </div>
              <span aria-hidden="true" className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#EE5326] text-[#EE5326] transition-transform group-hover:translate-x-1"><ChevronRight className="h-4 w-4" /></span>
            </article>

            <article className="group relative min-h-[184px] overflow-hidden rounded-[20px] border border-white/90 bg-white/90 p-5 shadow-[0_8px_24px_rgba(16,64,122,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
              <Building2 aria-hidden="true" className="pointer-events-none absolute -right-1 top-3 h-16 w-16 text-[#F2ECE8] opacity-35 transition-transform duration-500 group-hover:scale-110" />
              <div className="relative z-10 grid grid-cols-[56px_minmax(0,1fr)] grid-rows-[56px_auto] items-start gap-x-4 gap-y-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#FFF0E9] text-[#EE5326]"><Building2 className="h-7 w-7" /></span>
                <div className="min-w-0"><p className="text-[10px] font-extrabold uppercase tracking-wider text-[#10407A]">Hospitality</p><h3 className="mt-1 break-words text-sm font-bold leading-5 text-[#10407A]">Hotels & Packages</h3></div>
                <p className="col-start-2 min-w-0 pr-8 text-xs leading-5 text-[#657894]">Explore a wide range of hotels and curated holiday packages across popular destinations.</p>
              </div>
              <span aria-hidden="true" className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#EE5326] text-[#EE5326] transition-transform group-hover:translate-x-1"><ChevronRight className="h-4 w-4" /></span>
            </article>

            <article className="group relative min-h-[184px] overflow-hidden rounded-[20px] border border-white/90 bg-white/90 p-5 shadow-[0_8px_24px_rgba(16,64,122,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
              <Headphones aria-hidden="true" className="pointer-events-none absolute -right-1 top-3 h-16 w-16 text-[#F2ECE8] opacity-35 transition-transform duration-500 group-hover:scale-110" />
              <div className="relative z-10 grid grid-cols-[56px_minmax(0,1fr)] grid-rows-[56px_auto] items-start gap-x-4 gap-y-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#FFF0E9] text-[#EE5326]"><Headphones className="h-7 w-7" /></span>
                <div className="min-w-0"><p className="text-[10px] font-extrabold uppercase tracking-wider text-[#10407A]">Agent support</p><h3 className="mt-1 break-words text-sm font-bold leading-5 text-[#10407A]">Onboarding & Service Help</h3></div>
                <p className="col-start-2 min-w-0 pr-8 text-xs leading-5 text-[#657894]">Get started with simple onboarding and reliable support to manage your business smoothly.</p>
              </div>
              <span aria-hidden="true" className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#EE5326] text-[#EE5326] transition-transform group-hover:translate-x-1"><ChevronRight className="h-4 w-4" /></span>
            </article>
          </div>

        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          border-y
          border-[#10407A]/[0.08]
          bg-[linear-gradient(115deg,#f8fbff_0%,#f1f7ff_52%,#fff9f5_100%)]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            left-1/3
            top-0
            h-64
            w-64
            rounded-full
            bg-[#EE5326]/[0.07]
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            h-72
            w-72
            rounded-full
            bg-[#10407A]/[0.06]
            blur-[100px]
          "
        />

        <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-44 w-full text-[#BBD2F1]/25" viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path fill="currentColor" d="M0 116h24V91h14v25h13V71h21v45h14V88h18v28h14V64h25v52h15V82h18v34h14V74h25v42h18V91h17v25h28V78h20v38h21V56h24v60h16V83h17v33h22V71h22v45h18V91h22v25h19V64h28v52h20V81h17v35h27V70h24v46h23V85h19v31h25V63h24v53h20V77h20v39h26V89h17v27h21V64h26v52h20V81h18v35h25V72h23v44h20V55h25v61h18V83h19v33h25V69h22v47h23V91h18v25h25V77h20v39h22V63h27v53h17V84h23v32h22V71h22v45h23V90h20v26h24V76h20v40h21V58h26v58h18V83h21v33h27V70h24v46h18V89h22v27h27v64H0z" />
          <path d="M0 104c120 46 226-23 343 11s214 50 335 6 236-33 354 2 264 21 408-20v77H0z" fill="#fff" fillOpacity=".75" />
        </svg>
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 560" preserveAspectRatio="none">
          <path d="M0 290c100 40 120-95 224-83s46 83 12 104" fill="none" stroke="#BCD8FF" strokeDasharray="5 8" strokeWidth="2" opacity=".55" />
          <path d="M1440 145c-105 20-115 105-207 110s-66 69-120 108" fill="none" stroke="#BCD8FF" strokeDasharray="5 8" strokeWidth="2" opacity=".55" />
        </svg>
        <Plane aria-hidden="true" className="pointer-events-none absolute left-[11%] top-[29%] h-8 w-8 rotate-[-18deg] text-[#9FC7F5]/60" />
        <MapPin aria-hidden="true" className="pointer-events-none absolute left-[3%] top-[48%] h-7 w-7 fill-[#EE5326]/20 text-[#EE5326]/40" />
        <MapPin aria-hidden="true" className="pointer-events-none absolute right-[4%] top-[23%] h-7 w-7 fill-[#EE5326]/20 text-[#EE5326]/40" />

        <div
          className="
            relative
            mx-auto
            max-w-[1360px]
            px-5
            pb-12
            pt-8
            sm:px-8
            sm:pb-14
            sm:pt-8
            lg:pb-20
            lg:pt-8
          "
        >
          <header className="mx-auto mb-7 max-w-6xl text-center sm:mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FFE1D2] bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#526174] shadow-sm">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#EE5326]" />
              Our Journey
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#173B68] sm:text-4xl lg:whitespace-nowrap lg:text-[2.75rem]">
              Built for Travel. Empowering Growth.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#64748B] sm:text-base">
              A trusted travel platform enabling agents and businesses across India.
            </p>
          </header>

          <div className="relative z-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {stats.map(({ number, label, icon: Icon }, index) => (
              <div
                key={number}
                className={`
                  group
                  relative
                  min-h-[220px]
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/90
                  bg-white/80
                  p-5
                  shadow-[0_12px_30px_rgba(16,64,122,0.08)]
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#EE5326]/20
                  hover:bg-white
                  sm:p-6
                `}
              >
                <svg aria-hidden="true" className={`pointer-events-none absolute inset-x-0 bottom-0 h-[58px] w-full ${index === 2 ? "text-[#EAF2FF]" : "text-[#FFF0E8]"}`} viewBox="0 0 320 64" preserveAspectRatio="none">
                  <path fill="currentColor" d="M0 42c48-21 78 13 128 5s78-36 122-27 48 17 70 11v33H0z" />
                </svg>
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[24px] bg-[#FFF1EA] text-[#EE5326] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                    <Icon className="h-8 w-8" strokeWidth={1.9} />
                  </div>
                  <span className="pt-1 text-xl font-extrabold tracking-tight text-[#10407A]/10">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative z-10 mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[#10407A] sm:text-[2rem]">
                  {number}
                </div>

                <div className="relative z-10 mt-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#526174] sm:text-[10px] lg:whitespace-nowrap lg:text-[9px] xl:text-[10px]">
                  {label}
                </div>

                <div className="relative z-10 mt-6 h-[2px] w-10 bg-[#EE5326] transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS FOR OUR AGENTS
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#FDF7F2] py-16 sm:py-20 lg:py-24">
        {/* Organic radial background glow rings behind right character */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#FFEBE0]/80 via-[#FFF2EB]/40 to-transparent blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-[450px] w-[450px] rounded-full bg-[#EE5326]/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            
            {/* ── LEFT COLUMN ── */}
            <div className="lg:col-span-6 xl:col-span-7">
              {/* Eyebrow badge */}
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#EE5326]" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#10407A]">
                  SOLUTIONS FOR OUR AGENTS
                </span>
                <span className="h-[2px] w-8 bg-[#EE5326]" />
              </div>

              {/* Title */}
              <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0E2954] sm:text-5xl lg:text-[3.25rem]">
                Helping Agents Feel{" "}
                <span className="block text-[#EE5326]">Supported Again</span>
              </h2>

              {/* Paragraphs */}
              <div className="mt-5 space-y-4 max-w-xl text-[15px] leading-7 text-[#5A687C] sm:text-base font-medium">
                <p>
                  Mr. Neeraj Garg has always been a visionary who does not hesitate in thinking out of the box. The man is known for making full-proof strategies and ascertaining that they are well executed along with his great networking skills.
                </p>
                <p>
                  With an utmost endeavor of keeping up with the latest technology and techniques, the company is also investing in new verticals and niche products. Rather than just being concerned about client satisfaction, we aim at making our clients happy.
                </p>
                <p>
                  With the primary goal of being process driven, we focus on providing high standard services to our clients at affordable prices.
                </p>
              </div>

              {/* Feature Rows */}
              <ul className="mt-8 space-y-6">
                {[
                  {
                    icon: <Shield className="h-5 w-5 text-[#EE5326]" />,
                    title: "Reliable Support",
                    desc: "Dedicated assistance whenever you need it.",
                  },
                  {
                    icon: <BarChart2 className="h-5 w-5 text-[#EE5326]" />,
                    title: "Business Growth",
                    desc: "Tools and services to help you scale faster.",
                  },
                  {
                    icon: <UsersRound className="h-5 w-5 text-[#EE5326]" />,
                    title: "Long-Term Partnership",
                    desc: "Built on trust, service and mutual success.",
                  },
                ].map(({ icon, title, desc }) => (
                  <li key={title} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FFDEC9]/70 bg-[#FFF0E9] shadow-sm">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#10407A]">{title}</h3>
                      <p className="mt-0.5 text-xs text-[#64748B] sm:text-sm">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>

            {/* ── RIGHT COLUMN (Character & Floating Transport Icons) ── */}
            <div className="relative flex items-center justify-center lg:col-span-6 xl:col-span-5">
              
              {/* Dashed connector curve */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                viewBox="0 0 450 520"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 90 70 Q 230 160 320 240 Q 380 320 330 430"
                  stroke="#EE5326"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                  opacity="0.35"
                />
              </svg>

              {/* Floating transport badges */}
              {/* Airplane (Top-Left, Orange) */}
              <div aria-hidden="true" className="absolute left-[2%] top-[4%] z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_10px_25px_rgba(16,64,122,0.08)] transition-transform duration-300 hover:scale-105 sm:left-[6%]">
                <Plane className="h-7 w-7 text-[#EE5326]" />
              </div>

              {/* Hotel / Building (Top-Right, Navy) */}
              <div aria-hidden="true" className="absolute right-[2%] top-[2%] z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_10px_25px_rgba(16,64,122,0.08)] transition-transform duration-300 hover:scale-105">
                <Building2 className="h-7 w-7 text-[#10407A]" />
              </div>

              {/* Train (Middle-Right, Orange) */}
              <div aria-hidden="true" className="absolute right-[0%] top-[42%] z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_10px_25px_rgba(16,64,122,0.08)] transition-transform duration-300 hover:scale-105">
                <Train className="h-7 w-7 text-[#EE5326]" />
              </div>

              {/* Bus (Bottom-Right, Navy) */}
              <div aria-hidden="true" className="absolute bottom-[8%] right-[4%] z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_10px_25px_rgba(16,64,122,0.08)] transition-transform duration-300 hover:scale-105">
                <Bus className="h-7 w-7 text-[#10407A]" />
              </div>

              {/* Presenter Character Image (Standing directly on background, cropped at waist) */}
              <div className="relative z-10 mx-auto flex h-[460px] w-full max-w-[440px] items-end justify-center overflow-hidden sm:h-[500px]">
                <Image
                  src="/images/irctc-agent-character.png"
                  alt="TravelIQ travel agent holding laptop showing TravelIQ platform"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-contain object-top drop-shadow-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTION CARDS (WHAT WE DO)
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#FFF8F3] py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-10 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#EE5326]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[#EE5326]
                  "
                >
                  What We Offer
                </span>
              </div>

              <h3
                className="
                  mt-5
                  text-3xl
                  font-bold
                  tracking-[-0.025em]
                  text-[#10407A]
                  sm:text-4xl
                "
              >
                What We Do
              </h3>

              <p
                className="
                  mt-4
                  text-[15px]
                  leading-7
                  tracking-[0.015em]
                  text-[#526174]
                "
              >
                Everything travel professionals need, supported by experience,
                technology and dedicated service.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map(({ title, description, icon: Icon }, index) => (
                <div
                  key={title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-white/90
                    bg-white
                    p-8
                    shadow-[7px_9px_22px_rgba(16,64,122,0.06),-5px_-5px_12px_rgba(255,255,255,0.95)]
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-[#EE5326]/25
                    hover:shadow-[12px_18px_38px_rgba(16,64,122,0.11)]
                    animate-[fadeUp_0.7s_ease-out]
                  "
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-28
                      w-28
                      rounded-full
                      bg-[#EE5326]/5
                      transition-all
                      duration-700
                      group-hover:scale-[2.5]
                    "
                  />

                  <div className="relative">
                    

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-[14px]
                        bg-[#FFF1EA]
                        transition-all
                        duration-500
                        group-hover:rotate-6
                        group-hover:bg-[#EE5326]
                      "
                    >
                      <Icon
                        className="
                          h-5
                          w-5
                          text-[#EE5326]
                          transition-colors
                          duration-500
                          group-hover:text-white
                        "
                      />
                    </div>

                    

                    <h3
                      className="
                        mt-7
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#10407A]
                        transition-colors
                        duration-300
                        group-hover:text-[#EE5326]
                      "
                    >
                      {title}
                    </h3>

                    

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-7
                        tracking-[0.01em]
                        text-[#526174]
                      "
                    >
                      {description}
                    </p>

                    

                    <div className="mt-7 flex items-center gap-2">
                      <div
                        className="
                          h-[2px]
                          w-7
                          bg-[#EE5326]
                          transition-all
                          duration-500
                          group-hover:w-14
                        "
                      />

                      <ArrowRight
                        className="
                          h-4
                          w-4
                          text-[#EE5326]
                          opacity-0
                          transition-all
                          duration-500
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      />
                    </div>
                  </div>

                  

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-0
                      bg-[#EE5326]
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-white">
        <div
          className="
            pointer-events-none
            absolute
            left-[10%]
            top-1/2
            h-[300px]
            w-[300px]
            -translate-y-1/2
            rounded-full
            bg-[#FFF0E8]
            blur-[110px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[5%]
            top-0
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#EEF4FA]
            blur-[120px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            py-24
            sm:px-8
            lg:py-28
          "
        >
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/90
              bg-[#FFF8F3]
              px-7
              py-12
              shadow-[12px_18px_40px_rgba(16,64,122,0.07),-7px_-7px_18px_rgba(255,255,255,0.95)]
              transition-all
              duration-700
              hover:shadow-[16px_24px_50px_rgba(16,64,122,0.10)]
              sm:px-12
              lg:px-16
              lg:py-16
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-40
                w-40
                border-r
                border-t
                border-[#EE5326]/20
                transition-all
                duration-700
                group-hover:h-52
                group-hover:w-52
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                h-40
                w-40
                border-b
                border-l
                border-[#10407A]/15
              "
            />

            <div
              className="
                relative
                grid
                items-center
                gap-10
                lg:grid-cols-[1fr_auto]
              "
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-9 bg-[#EE5326]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.24em]
                      text-[#EE5326]
                    "
                  >
                    Connect with us for the right solution.
                  </span>
                </div>

                <h2
                  className="
                    mt-5
                    text-4xl
                    font-bold
                    tracking-[-0.025em]
                    text-[#10407A]
                    sm:text-5xl
                  "
                >
                  Get Better Future with{" "}
                  <span className="text-[#EE5326]">TravelIQ</span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-[15px]
                    leading-8
                    tracking-[0.015em]
                    text-[#526174]
                  "
                >
                  Explore TravelIQ travel services, the B2B platform and agent onboarding options.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="
                  group/btn
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-2.5
                  rounded-[16px]
                  border
                  border-[#25D366]/40
                  bg-[#25D366]
                  px-6
                  text-[10px]
                  font-semibold
                  tracking-[0.055em]
                  !text-white
                  shadow-[8px_10px_22px_rgba(37,211,102,0.20),-5px_-5px_12px_rgba(255,255,255,0.85)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#20BD5A]
                  hover:shadow-[10px_13px_28px_rgba(37,211,102,0.27),-5px_-5px_12px_rgba(255,255,255,0.9)]
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                  "
                >
                  <span className="text-white">
                    <WhatsAppIcon className="h-[18px] w-[18px]" />
                  </span>
                </span>

                <span className="!text-white tracking-[0.055em]">
                  WhatsApp Us
                </span>

                <ArrowRight
                  className="
                    h-4
                    w-4
                    text-white
                    transition-transform
                    duration-300
                    group-hover/btn:translate-x-1
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STAFF
      ========================================================= */}

      <section className="relative min-h-[640px] overflow-hidden bg-[#071F3D] lg:min-h-[720px]">
        
        <div className="absolute inset-0">
          <Image
            src="/images/staff-member.webp"
            alt="TravelIQ support team"
            fill
            sizes="100vw"
            quality={70}
            className="object-cover object-center"
          />
        </div>

        {/* Left-to-right navy overlay
      Strong on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071F3D] from-[0%] via-[#071F3D]/95 via-[25%] via-[#071F3D]/70 via-[45%] via-[#071F3D]/30 via-[60%] to-transparent" />

        
        <div className="absolute inset-0 bg-[#071F3D]/10" />

        
        <div className="relative z-10 flex min-h-[640px] items-center lg:min-h-[720px]">
          <div className="w-full px-6 py-20 sm:px-10 lg:px-[4.3vw] lg:py-24">
            <div className="max-w-[820px]">
              
              <div className="flex items-center gap-5">
                <span className="h-[3px] w-12 bg-[#EE5326]" />

                <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#EE5326]">
                  Our Team
                </span>
              </div>

              
              <h2 className="mt-6 max-w-[760px] text-[42px] font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-[50px] lg:text-[58px]">
                Trusted People Behind
                <br />
                <span className="text-[#EE5326]">Your Travel Business</span>
              </h2>

              
              <div className="mt-7 flex items-center gap-3">
                <span className="h-[4px] w-12 bg-[#EE5326]" />
                <span className="h-[4px] w-5 bg-white/80" />
              </div>

              
              <div className="mt-8 max-w-[735px]">
                <p className="text-[15px] font-normal leading-[1.9] tracking-[0.01em] text-white/90 sm:text-[16px]">
                  Behind every successful travel agent is a team that
                  understands the journey. At TravelIQ, our experienced and
                  dedicated team works closely with agents to simplify travel
                  operations and provide dependable support at every step.
                </p>

                <p className="mt-4 text-[15px] font-normal leading-[1.9] tracking-[0.01em] text-white/80 sm:text-[16px]">
                  From ticketing and reservations to business support and travel
                  solutions, we are committed to helping our agent network work
                  smarter, serve customers better, and grow with confidence.
                </p>
              </div>

              
              <div className="mt-8 grid max-w-[820px] gap-5 sm:grid-cols-2">
                
                <div className="flex min-h-[112px] items-center gap-5 rounded-[9px] border border-white/20 border-l-[4px] border-l-[#EE5326] bg-[#071F3D]/55 px-6 py-5 backdrop-blur-[3px]">
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[8px] bg-[#EE5326]">
                    <UsersRound
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    />
                  </div>

                  <div>
                    <p className="text-[15px] font-bold text-white">
                      Experienced Team
                    </p>

                    <p className="mt-1 text-[13px] leading-6 text-white/70">
                      Skilled professionals supporting travel agents.
                    </p>
                  </div>
                </div>

                
                <div className="flex min-h-[112px] items-center gap-5 rounded-[9px] border border-white/20 border-l-[4px] border-l-[#10407A] bg-[#071F3D]/55 px-6 py-5 backdrop-blur-[3px]">
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[8px] bg-[#10407A]">
                    <Globe aria-hidden="true" className="h-8 w-8 text-white" />
                  </div>

                  <div>
                    <p className="text-[15px] font-bold text-white">
                      Agent-Focused Support
                    </p>

                    <p className="mt-1 text-[13px] leading-6 text-white/70">
                      Reliable assistance for your daily travel business.
                    </p>
                  </div>
                </div>
              </div>

              
              <Link
                href="/our-services"
                aria-label="Explore TravelIQ services"
                className="group mt-7 inline-flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:text-[#EE5326]"
              >
                <span>Explore Our Services</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EE5326] transition-all duration-300 group-hover:bg-[#EE5326]">
                  <ArrowRight
                    aria-hidden="true"
                    className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 z-20 h-[3px] w-full bg-[#EE5326]" />
      </section>

      {/* =========================================================
          TRUST / ADVANTAGE
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#FCF8F7]">
        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-10
            h-72
            w-72
            rounded-full
            bg-[#EE5326]/[0.08]
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-[-100px]
            h-80
            w-80
            rounded-full
            bg-[#10407A]/[0.08]
            blur-[110px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            py-20
            sm:px-8
            lg:py-24
          "
        >
          

          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-9 bg-[#EE5326]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#EE5326]
                "
              >
                Why TravelIQ
              </span>

              <span className="h-[2px] w-9 bg-[#EE5326]" />
            </div>

            <h2
              className="
                mt-5
                text-4xl
                font-bold
                tracking-[-0.025em]
                text-[#10407A]
                sm:text-5xl
              "
            >
              Built for Travel Professionals
            </h2>

            <p
              className="
                mt-5
                text-[15px]
                leading-7
                tracking-[0.015em]
                text-[#526174]
              "
            >
              TravelIQ combines a multi-service platform, onboarding assistance and support for travel professionals.
            </p>
          </div>

          

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Trusted Partner",
                description: "Built on long-term relationships",
                number: "01",
              },
              {
                icon: UsersRound,
                title: "B2B Expertise",
                description: "Designed for travel professionals",
                number: "02",
              },
              {
                icon: BadgeCheck,
                title: "Quality Service",
                description: "Professional and reliable assistance",
                number: "03",
              },
              {
                icon: Globe,
                title: "Pan India",
                description: "Growing travel network across India",
                number: "04",
              },
            ].map(({ icon: Icon, title, description, number }) => (
              <div
                key={title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/90
                  bg-white
                  p-7
                  shadow-[7px_9px_22px_rgba(16,64,122,0.06),-5px_-5px_12px_rgba(255,255,255,0.95)]
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-[#EE5326]/25
                  hover:shadow-[12px_18px_38px_rgba(16,64,122,0.11)]
                "
              >
                

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-[#EE5326]/[0.08]
                    transition-all
                    duration-700
                    group-hover:scale-[2.2]
                  "
                />

                

                <span
                  className="
                    absolute
                    right-6
                    top-5
                    text-[10px]
                    font-bold
                    tracking-[0.16em]
                    text-[#10407A]/15
                    transition-colors
                    duration-500
                    group-hover:text-[#EE5326]/30
                  "
                >
                  {number}
                </span>

                

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-[15px]
                    bg-[#FFF1EA]
                    transition-all
                    duration-500
                    group-hover:rotate-3
                    group-hover:scale-110
                    group-hover:bg-[#EE5326]
                  "
                >
                  <Icon
                    className="
                      h-6
                      w-6
                      text-[#EE5326]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:text-white
                    "
                  />
                </div>

                

                <h3
                  className="
                    relative
                    mt-7
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#10407A]
                    transition-colors
                    duration-300
                    group-hover:text-[#EE5326]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    relative
                    mt-4
                    text-sm
                    leading-7
                    tracking-[0.01em]
                    text-[#526174]
                  "
                >
                  {description}
                </p>

                

                <div className="relative mt-7 flex items-center gap-2">
                  <span
                    className="
                      h-[3px]
                      w-8
                      rounded-full
                      bg-[#EE5326]
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />

                  <span
                    className="
                      h-[3px]
                      w-2
                      rounded-full
                      bg-[#10407A]/15
                      transition-all
                      duration-500
                      group-hover:w-4
                      group-hover:bg-[#10407A]/30
                    "
                  />
                </div>

                

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-[#EE5326]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
