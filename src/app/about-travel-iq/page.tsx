import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  Plane,
  UsersRound,
  Award,
  Clock,
  Globe,
  Shield,
  Train,
  Building2,
  MapPin,
  BriefcaseBusiness,
  Hotel,
  Bus,
  Ship,
  FileCheck,
  Star,
  HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | TravelIQ",
  description:
    "Travel IQ Services is the best Principal agent of IRCTC and an IATA accredited travel agent in INDIA.",
};

const solutions: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "AFFORDABLE PRICE",
    description:
      "You can get affordable prices for all the travel products & services.",
    icon: BadgeCheck,
  },
  {
    title: "BEST DESTINATION",
    description:
      "Travel IQ is offering the best destinations for your holidays.",
    icon: Plane,
  },
  {
    title: "PERSONAL SERVICE",
    description: "You will get personalized services at Travel IQ Services.",
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
      "Complete hotel and accommodation solutions for business and leisure travel.",
    icon: Hotel,
  },
  {
    title: "TRAIN SERVICES",
    description:
      "Convenient railway booking assistance through our IRCTC travel network.",
    icon: Train,
  },
  {
    title: "BUS SERVICES",
    description:
      "Easy and dependable bus booking support for different travel requirements.",
    icon: Bus,
  },
  {
    title: "TRAVEL INSURANCE",
    description:
      "Travel insurance assistance designed to make your journey safer and more secure.",
    icon: Shield,
  },
  {
    title: "VISA ASSISTANCE",
    description:
      "Professional assistance for passport and visa-related travel requirements.",
    icon: FileCheck,
  },
];

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
    label: "Registered Agents",
    icon: UsersRound,
  },
  {
    number: "IATA",
    label: "Accredited",
    icon: Award,
  },
  {
    number: "IRCTC",
    label: "Principal Agent",
    icon: Shield,
  },
];

const journey = [
  {
    year: "2014",
    title: "Company Established",
    description:
      "Travel IQ Services began its journey with a vision to provide reliable and professional travel solutions.",
  },
  {
    year: "2016",
    title: "Online B2B Portal",
    description:
      "The company launched its online travel assistance portal, focusing primarily on the B2B travel trade.",
  },
  {
    year: "2017",
    title: "IATA Recognition",
    description:
      "Travel IQ acquired recognition from IATA within three years of its establishment.",
  },
  {
    year: "Today",
    title: "Growing Travel Network",
    description:
      "Travel IQ continues to expand its services, technology and network of travel professionals across India.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#FFFDFB] text-[#526174]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#FFF8F3]">
        {/* Background effects */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#EE5326]/10 blur-[130px] animate-pulse" />
        <div className="pointer-events-none absolute -right-40 top-40 h-[550px] w-[550px] rounded-full bg-[#10407A]/8 blur-[150px] animate-pulse" />
        <div className="pointer-events-none absolute bottom-[-200px] left-[35%] h-[450px] w-[450px] rounded-full bg-[#F5A27D]/10 blur-[130px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#10407A 1px, transparent 1px), linear-gradient(90deg, #10407A 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-6 sm:px-8 lg:pb-32 lg:pt-8">
          {/* Top information */}
          <div className="mb-14 flex flex-wrap items-center justify-between gap-4 border-b border-[#10407A]/10 pb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#10407A]/65 animate-[fadeDown_0.8s_ease-out]">
            <span>Travel IQ Services</span>

            <div className="hidden h-px flex-1 bg-[#10407A]/10 sm:mx-8 sm:block" />

            <span>Travel Intelligence</span>

            <span className="hidden sm:block">
              Corporate HQ — Gurugram, India
            </span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            {/* LEFT */}
            <div className="relative z-10 animate-[fadeUp_0.9s_ease-out]">
              {/* Breadcrumb */}
              <div className="mb-8 flex items-center gap-3 text-sm font-medium">
                <Link
                  href="/"
                  className="text-[#10407A]/55 transition hover:text-[#EE5326]"
                >
                  Home
                </Link>

                <span className="text-[#EE5326]">/</span>

                <span className="font-semibold text-[#10407A]">About Us</span>
              </div>

              {/* Kicker */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#EE5326] transition-all duration-500 hover:w-16" />

                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#EE5326]">
                  About TravelIQ
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-2xl text-[3.4rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#10407A] sm:text-[4.3rem] lg:text-[5rem]">
                The{" "}
                <span className="relative inline-block text-[#EE5326]">
                  TravelIQ
                  <span className="absolute -bottom-2 left-0 h-[5px] w-2/3 rounded-full bg-[#EE5326]/20 blur-[2px]" />
                </span>{" "}
                Story
              </h1>

              <h2 className="mt-8 max-w-xl text-xl font-bold leading-snug text-[#0B1728] sm:text-2xl">
                Travel IQ Services is the best travel agency in INDIA
              </h2>

              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#526174] sm:text-base">
                Travel IQ Services is the best Principal agent of IRCTC and an
                IATA accredited travel agent in INDIA, Travel IQ has started its
                operations in the year 2014, Travel IQ has its Corporate office
                in Gurugram, IT city of Delhi/NCR. Since then it has been
                consistently showing substantial progress in the market.
              </p>

              <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[#526174] sm:text-base">
                In 2017, within mere three years of its establishment, the
                company acquired recognition from IATA (International Air
                Transport Association), the most prestigious airline trade
                association which currently represents most of the total air
                traffic.
              </p>

              {/* Trust cards */}
              <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  ["IATA", "Accredited"],
                  ["IRCTC", "Principal Agent"],
                  ["20K+", "Registered Agents"],
                ].map(([title, text], index) => (
                  <div
                    key={title}
                    className="group border border-[#10407A]/10 bg-white/80 p-4 shadow-[0_12px_40px_rgba(16,64,122,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#EE5326]/30 hover:shadow-[0_20px_45px_rgba(16,64,122,0.10)] animate-[fadeUp_0.8s_ease-out]"
                    style={{
                      animationDelay: `${index * 120}ms`,
                    }}
                  >
                    <div className="text-lg font-extrabold text-[#10407A] transition-colors group-hover:text-[#EE5326]">
                      {title}
                    </div>

                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#EE5326]">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative mx-auto w-full max-w-[650px] animate-[fadeRight_1s_ease-out]">
              <div className="absolute -inset-5 bg-[#EE5326]/10 blur-3xl" />

              <div className="absolute -right-3 -top-3 h-28 w-28 border-r border-t border-[#EE5326]/40 transition-all duration-700 group-hover:h-36 group-hover:w-36 sm:-right-5 sm:-top-5 sm:h-40 sm:w-40" />

              <div className="absolute -bottom-3 -left-3 h-28 w-28 border-b border-l border-[#10407A]/25 sm:-bottom-5 sm:-left-5 sm:h-40 sm:w-40" />

              <div className="group relative overflow-hidden border border-[#10407A]/12 bg-white p-2 shadow-[0_35px_100px_rgba(16,64,122,0.13)]">
                <div className="relative aspect-[1.05/1] overflow-hidden">
                  <Image
                    src="/vande_bharat_hero.jpg"
                    alt="TravelIQ travel services"
                    fill
                    priority
                    className="object-cover transition duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10407A]/60 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/75">
                        Travel Intelligence
                      </div>

                      <div className="mt-1 text-xl font-bold text-white">
                        Your Travel Partner
                      </div>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/30 bg-white/15 backdrop-blur-md transition duration-500 group-hover:rotate-12">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating proof */}
              <div className="absolute -bottom-8 right-5 border border-[#10407A]/10 bg-white p-5 shadow-[0_20px_55px_rgba(16,64,122,0.13)] transition duration-500 hover:-translate-y-2 sm:right-8 sm:min-w-[230px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center bg-[#FFF1EA]">
                    <BadgeCheck className="h-5 w-5 text-[#EE5326]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#EE5326]">
                      Travel IQ Services
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#10407A]">
                      Your Own Travel Intelligence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STORY
      ========================================================= */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-[#FFF0E8] blur-[120px]" />

        <div className="pointer-events-none absolute right-[-180px] bottom-10 h-[420px] w-[420px] rounded-full bg-[#EEF4FA] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end animate-[fadeUp_0.8s_ease-out]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#EE5326]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#EE5326]">
                  Our Story
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-[#10407A] sm:text-5xl">
                A Journey Built on{" "}
                <span className="text-[#EE5326]">Trust & Travel</span>
              </h2>
            </div>

            <p className="max-w-2xl text-[15px] leading-8 text-[#526174] lg:ml-auto">
              Travel IQ Services has grown with a clear vision — to make travel
              assistance smarter, more accessible and more reliable for travel
              professionals across India.
            </p>
          </div>

          {/* Journey cards */}
          <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((item, index) => (
              <div
                key={item.year}
                className="group relative border border-[#10407A]/10 bg-[#FFFDFB] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#EE5326]/30 hover:bg-white hover:shadow-[0_25px_60px_rgba(16,64,122,0.10)] animate-[fadeUp_0.8s_ease-out]"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold tracking-[-0.04em] text-[#10407A] transition-colors group-hover:text-[#EE5326]">
                    {item.year}
                  </span>

                  <span className="text-xs font-bold text-[#10407A]/15">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-6 h-[2px] w-8 bg-[#EE5326] transition-all duration-500 group-hover:w-16" />

                <h3 className="mt-6 text-lg font-bold text-[#10407A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#526174]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Story text */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[280px_1fr]">
            {/* Timeline */}
            <div className="relative hidden lg:block">
              <div className="absolute left-[13px] top-2 h-[calc(100%-15px)] w-px bg-gradient-to-b from-[#EE5326]/40 via-[#10407A]/15 to-transparent" />

              <div className="sticky top-32 space-y-10">
                {[
                  ["2014", "Established"],
                  ["2016", "B2B Portal"],
                  ["2017", "IATA Recognition"],
                  ["20K+", "Travel Agents"],
                ].map(([year, label]) => (
                  <div key={year} className="group relative flex gap-5">
                    <div className="relative z-10 mt-1 h-7 w-7 border border-[#EE5326]/30 bg-white p-1">
                      <div className="h-full w-full bg-[#EE5326] transition-transform duration-300 group-hover:scale-75" />
                    </div>

                    <div>
                      <div className="text-2xl font-extrabold text-[#10407A]">
                        {year}
                      </div>

                      <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#526174]">
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Story content */}
            <div className="max-w-4xl">
              <p className="text-[16px] leading-8 text-[#526174]">
                Travel IQ Services is the best Principal agent of IRCTC and IATA
                accredited travel agent in India. Started in 2014, the company
                has its corporate office in Gurugram, Delhi/NCR and has
                consistently shown substantial progress in the market.
              </p>

              <p className="mt-6 text-[16px] leading-8 text-[#526174]">
                In 2017, within mere three years of its establishment, the
                company acquired recognition from IATA (International Air
                Transport Association), the most prestigious airline trade
                association which currently represents most of the total air
                traffic.
              </p>

              {/* Quote */}
              <div className="group relative my-12 border-l-[3px] border-[#EE5326] bg-[#FFF8F3] px-7 py-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(238,83,38,0.08)] sm:px-10">
                <div className="absolute -left-[3px] top-0 h-12 w-[3px] bg-[#10407A] transition-all duration-500 group-hover:h-full" />

                <p className="text-xl font-bold leading-8 text-[#10407A] sm:text-2xl">
                  “Foreseeing the digital transformation that revolutionized the
                  travel industry, the company started its online portal under
                  the name b2b.traveliq.in in the year 2016.”
                </p>
              </div>

              <p className="text-[16px] leading-8 text-[#526174]">
                The portal is basically designed for online travel assistance
                focusing primarily on B2B module of trade. The website has more
                than 20000 registered agents who are considered to be some of
                the most experienced pros in the marketplace.
              </p>

              <p className="mt-6 text-[16px] leading-8 text-[#526174]">
                Majorly operating in states like Haryana, Uttar Pradesh and
                Punjab Travel IQ has become a landmark in travel industry. Since
                the year 2014, the company is being awarded by some of the most
                esteemed airlines for its outstanding provision of services.
              </p>

              <p className="mt-6 text-[16px] leading-8 text-[#526174]">
                This is because the company always focuses on offering
                travel-related quality services to its clients and maintaining
                healthy relationships. Having an edge in booking flights we also
                provide complete assistance in booking travel packages, hotels,
                bus services, travel insurance, assistance in acquiring
                passport/visa, booking a cruise and many more.
              </p>

              {/* Service strip */}
              <div className="mt-14 grid border border-[#10407A]/10 bg-[#F2F6FB] sm:grid-cols-3">
                {[
                  [Plane, "Flights", "Easy Air Booking"],
                  [Building2, "Hospitality", "Hotels & Packages"],
                  [Headphones, "Assistance", "Visa, Insurance & More"],
                ].map(([Icon, title, subtitle]) => {
                  const ServiceIcon = Icon as LucideIcon;

                  return (
                    <div
                      key={title as string}
                      className="group border-b border-[#10407A]/10 p-6 transition-all duration-500 hover:bg-white last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                    >
                      <ServiceIcon className="h-5 w-5 text-[#EE5326] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />

                      <div className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-[#10407A]">
                        {title as string}
                      </div>

                      <div className="mt-1 text-sm text-[#526174]">
                        {subtitle as string}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-[#10407A]/8 bg-[#F2F6FB]">
        <div className="pointer-events-none absolute left-1/3 top-0 h-64 w-64 rounded-full bg-[#EE5326]/7 blur-[100px]" />

        <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#10407A]/6 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ number, label, icon: Icon }, index) => (
              <div
                key={number}
                className={`group relative p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white ${
                  index !== stats.length - 1
                    ? "border-b border-[#10407A]/10 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center bg-[#FFF1EA] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5 text-[#EE5326]" />
                  </div>

                  <span className="text-xs font-bold text-[#10407A]/20">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-7 text-3xl font-extrabold tracking-[-0.04em] text-[#10407A]">
                  {number}
                </div>

                <div className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#526174]">
                  {label}
                </div>

                <div className="mt-6 h-[2px] w-8 bg-[#EE5326] transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FFF8F3]">
        <div className="pointer-events-none absolute -left-32 top-20 h-[450px] w-[450px] rounded-full bg-[#EE5326]/8 blur-[130px]" />

        <div className="pointer-events-none absolute right-[-200px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-[#10407A]/7 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
            {/* TEXT */}
            <div className="animate-[fadeUp_0.8s_ease-out]">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#EE5326]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#EE5326]">
                  Best Solution for Our Agent
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-[#10407A] sm:text-5xl">
                Guarantee Feel Free{" "}
                <span className="text-[#EE5326]">From Pain Again</span>
              </h2>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#526174]">
                Mr. Neeraj Garg has always been a visionary who does not
                hesitate in thinking out of the box. The man is known for making
                full-proof strategies and ascertaining that they are well
                executed along with his great networking skills.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#526174]">
                With an utmost endeavor of keeping up with the latest technology
                and techniques, the company is also investing in new verticals
                and niche products. Rather than just being concerned about
                client satisfaction, we aim at making our clients happy.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#526174]">
                With the primary goal of being process driven, we focus on
                providing high standard services to our clients at affordable
                prices.
              </p>

              {/* Trust box */}
              <div className="group mt-10 flex items-center gap-5 border border-[#10407A]/10 bg-white p-5 shadow-[0_20px_60px_rgba(16,64,122,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(16,64,122,0.12)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#FFF1EA] transition-transform duration-500 group-hover:rotate-6">
                  <Shield className="h-5 w-5 text-[#EE5326]" />
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#EE5326]">
                    Trusted Travel Solutions
                  </div>

                  <div className="mt-1 text-sm font-semibold text-[#10407A]">
                    Built around service, technology & relationships.
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="group relative mx-auto w-full max-w-[500px] animate-[fadeRight_0.9s_ease-out]">
              <div className="absolute -inset-6 bg-[#EE5326]/10 blur-3xl" />

              <div className="absolute -right-4 -top-4 h-28 w-28 border-r border-t border-[#EE5326]/40" />

              <div className="absolute -bottom-4 -left-4 h-28 w-28 border-b border-l border-[#10407A]/25" />

              <div className="relative border border-[#10407A]/10 bg-white p-2 shadow-[0_30px_80px_rgba(16,64,122,0.12)]">
                <div className="relative aspect-[0.9/1] overflow-hidden">
                  <Image
                    src="/images/TravelIQ-IRCTC-Agent-Registration-Fees-Rs-1000-Only.png.webp"
                    alt="TravelIQ representative holding a laptop"
                    fill
                    className="object-cover transition duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10407A]/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-7 left-5 right-5 border border-[#10407A]/10 bg-white p-5 shadow-[0_18px_55px_rgba(16,64,122,0.14)] transition-all duration-500 hover:-translate-y-2 sm:left-auto sm:right-[-25px] sm:w-[250px]">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#EE5326]">
                  TravelIQ Advantage
                </div>

                <div className="mt-2 text-lg font-bold leading-snug text-[#10407A]">
                  Quality services at affordable prices.
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              SOLUTION CARDS
          ===================================================== */}
          <div className="mt-24">
            <div className="mb-10 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#EE5326]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#EE5326]">
                  What We Offer
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-[#10407A] sm:text-4xl">
                Complete Travel{" "}
                <span className="text-[#EE5326]">Solutions</span>
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[#526174]">
                Everything travel professionals need, supported by experience,
                technology and dedicated service.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map(({ title, description, icon: Icon }, index) => (
                <div
                  key={title}
                  className="group relative overflow-hidden border border-[#10407A]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#EE5326]/30 hover:shadow-[0_25px_65px_rgba(16,64,122,0.10)] animate-[fadeUp_0.7s_ease-out]"
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  {/* Hover background */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#EE5326]/5 transition-all duration-700 group-hover:scale-[2.5]" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#FFF1EA] transition-all duration-500 group-hover:bg-[#EE5326] group-hover:rotate-6">
                      <Icon className="h-5 w-5 text-[#EE5326] transition-colors duration-500 group-hover:text-white" />
                    </div>

                    <h3 className="mt-7 text-sm font-extrabold uppercase tracking-[0.13em] text-[#10407A] transition-colors duration-300 group-hover:text-[#EE5326]">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#526174]">
                      {description}
                    </p>

                    <div className="mt-7 flex items-center gap-2">
                      <div className="h-[2px] w-7 bg-[#EE5326] transition-all duration-500 group-hover:w-14" />

                      <ArrowRight className="h-4 w-4 text-[#EE5326] opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute left-[10%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#FFF0E8] blur-[110px]" />

        <div className="pointer-events-none absolute right-[5%] top-0 h-[320px] w-[320px] rounded-full bg-[#EEF4FA] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="group relative overflow-hidden border border-[#10407A]/10 bg-[#FFF8F3] px-7 py-12 shadow-[0_25px_80px_rgba(16,64,122,0.06)] transition-all duration-700 hover:shadow-[0_35px_100px_rgba(16,64,122,0.10)] sm:px-12 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 border-r border-t border-[#EE5326]/20 transition-all duration-700 group-hover:h-52 group-hover:w-52" />

            <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 border-b border-l border-[#10407A]/15" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-9 bg-[#EE5326]" />

                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#EE5326]">
                    Touch with us for a better Solution.
                  </span>
                </div>

                <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.045em] text-[#10407A] sm:text-5xl">
                  Get Better Future with{" "}
                  <span className="text-[#EE5326]">TravelIQ</span>
                </h2>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#526174]">
                  Travel IQ services can help the aspiring travel agencies to
                  increase their business and get more clients through online
                  promotions.
                </p>
              </div>

              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noreferrer"
                className="group/btn inline-flex items-center justify-center gap-3 bg-[#EE5326] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(238,83,38,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#D9471D]"
              >
                WhatsApp Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STAFF
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F2F6FB]">
        <div className="pointer-events-none absolute -left-40 top-20 h-[380px] w-[380px] rounded-full bg-[#EE5326]/8 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#10407A]/7 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* LEFT */}
            <div className="relative animate-[fadeUp_0.8s_ease-out]">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#EE5326]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#EE5326]">
                  Our Staff
                </span>
              </div>

              <h2 className="mt-5 max-w-md text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-[#10407A] sm:text-5xl">
                Your Trusted{" "}
                <span className="text-[#EE5326]">Travel Partner</span>
              </h2>

              <div className="mt-7 flex items-center gap-2">
                <span className="h-[3px] w-12 bg-[#EE5326]" />
                <span className="h-[3px] w-3 bg-[#10407A]/20" />
              </div>

              <div className="mt-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EE5326]">
                  Meet Our Team
                </p>

                <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-[#10407A] sm:text-3xl">
                  Vivek Shah
                </h3>
              </div>

              <p className="mt-5 max-w-lg text-[15px] leading-8 text-[#526174]">
                Travel IQ is having the best & trained staff to help our agents
                in doing their travel agency business.
              </p>

              <div className="group mt-8 flex max-w-md items-center gap-4 border-l-2 border-[#EE5326] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(16,64,122,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,64,122,0.10)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#FFF1EA] transition-transform duration-500 group-hover:rotate-6">
                  <UsersRound className="h-5 w-5 text-[#EE5326]" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#10407A]">
                    Experienced & Trained Team
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#526174]">
                    Dedicated support for our travel agents.
                  </p>
                </div>
              </div>

              <Link
                href="/our-services/"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#10407A] transition duration-300 hover:text-[#EE5326]"
              >
                View All Services
                <span className="flex h-9 w-9 items-center justify-center border border-[#10407A]/15 bg-white transition duration-300 group-hover:border-[#EE5326]/30 group-hover:bg-[#FFF1EA]">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="group relative mx-auto w-full max-w-[620px] animate-[fadeRight_0.9s_ease-out]">
              <div className="pointer-events-none absolute -inset-6 bg-[#EE5326]/8 blur-3xl" />

              <div className="absolute -right-3 -top-3 z-20 h-24 w-24 border-r-2 border-t-2 border-[#EE5326]/45 transition-all duration-700 group-hover:h-32 group-hover:w-32 sm:-right-5 sm:-top-5" />

              <div className="absolute -bottom-3 -left-3 z-20 h-24 w-24 border-b-2 border-l-2 border-[#10407A]/20 sm:-bottom-5 sm:-left-5" />

              <div className="relative overflow-hidden border border-[#10407A]/10 bg-white shadow-[0_25px_70px_rgba(16,64,122,0.12)]">
                <div className="relative h-[360px] overflow-hidden sm:h-[420px] lg:h-[455px]">
                  <Image
                    src="/images/traveliq staff(1).jpeg"
                    alt="Vivek Shah - TravelIQ Staff"
                    fill
                    className="object-cover object-[center_24%] transition duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#071A35]/95 via-[#071A35]/30 to-transparent" />

                  <div className="absolute left-5 top-5 z-20 flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 bg-[#EE5326]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                      TravelIQ Team
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
                    <div className="flex items-end justify-between gap-5 rounded-sm border border-white/15 bg-[#071A35]/35 p-4 text-white backdrop-blur-[2px] sm:p-5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] !text-white/85">
                          Travel IQ Services
                        </p>

                        <h3 className="mt-2 text-2xl font-extrabold !text-white sm:text-3xl">
                          Vivek Shah
                        </h3>

                        <p className="mt-1 text-sm font-medium !text-white/90">
                          Helping travel agents grow their business.
                        </p>
                      </div>

                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center border border-white/25 bg-white/10 backdrop-blur-md sm:flex">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 z-30 h-[3px] w-full bg-gradient-to-r from-[#EE5326] via-[#F29A78] to-[#10407A]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
    TRUST / ADVANTAGE CARDS
========================================================= */}
      <section className="relative overflow-hidden bg-[#fcf8f7]">
        {/* Background decorative elements */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#EE5326]/8 blur-[100px]" />
        <div className="pointer-events-none absolute right-[-100px] bottom-0 h-80 w-80 rounded-md bg-[#10407A]/8 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[2px] w-9 bg-[#EE5326]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#EE5326]">
                Why TravelIQ
              </span>

              <span className="h-[2px] w-9 bg-[#EE5326]" />
            </div>

            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.045em] text-[#10407A] sm:text-5xl">
              Built Around <span className="text-[#EE5326]">Trust</span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#526174]">
              Everything we do is focused on helping travel professionals grow
              with confidence, reliability and better service.
            </p>
          </div>

          {/* Cards */}
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
                className="group relative overflow-hidden rounded-md border border-[#10407A]/10 bg-white p-7 shadow-[0_10px_35px_rgba(16,64,122,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-[#EE5326]/25 hover:shadow-[0_25px_60px_rgba(16,64,122,0.12)]"
              >
                {/* Hover background */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#EE5326]/8 transition-all duration-700 group-hover:scale-[2.2]" />

                {/* Number */}
                <span className="absolute right-6 top-5 text-[11px] font-extrabold tracking-[0.15em] text-[#10407A]/15 transition-colors duration-500 group-hover:text-[#EE5326]/30">
                  {number}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF1EA] transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-[#EE5326]">
                  <Icon className="h-6 w-6 text-[#EE5326] transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="relative mt-7 text-sm font-extrabold uppercase tracking-[0.12em] text-[#10407A] transition-colors duration-300 group-hover:text-[#EE5326]">
                  {title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-[#526174]">
                  {description}
                </p>

                {/* Animated line */}
                <div className="relative mt-7 flex items-center gap-2">
                  <span className="h-[3px] w-8 rounded-full bg-[#EE5326] transition-all duration-500 group-hover:w-16" />

                  <span className="h-[3px] w-2 rounded-full bg-[#10407A]/15 transition-all duration-500 group-hover:w-4 group-hover:bg-[#10407A]/30" />
                </div>

                {/* Bottom orange reveal */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#EE5326] transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
