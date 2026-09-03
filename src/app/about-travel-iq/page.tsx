import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Headphones,
  Plane,
  Train,
  UsersRound,
  Award,
  Clock,
  Globe,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | TravelIQ",
  description:
    "Travel IQ Services is the best Principal agent of IRCTC and an IATA accredited travel agent in INDIA.",
};

const solutions: [string, string, LucideIcon][] = [
  [
    "AFFORDABLE PRICE",
    "You can get affordable prices for all the travel products & services.",
    BadgeCheck,
  ],
  [
    "BEST DESTINATION",
    "Travel IQ is offering the best destinations for your holidays.",
    Plane,
  ],
  [
    "PERSONAL SERVICE",
    "You will get personalized services at Travel IQ Services",
    Headphones,
  ],
];

const stats = [
  { number: "2014", label: "Founded", icon: Clock },
  { number: "20K+", label: "Registered Agents", icon: UsersRound },
  { number: "IATA", label: "Accredited", icon: Award },
  { number: "IRCTC", label: "Principal Agent", icon: Shield },
];

export default function AboutPage() {
  return (
    <main className="about-page overflow-hidden bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="about-hero relative overflow-hidden bg-[#102F52]">
        {/* Background grid */}
        <div className="hero-grid absolute inset-0 opacity-30" />

        {/* Radial orange glow */}
        <div className="pointer-events-none absolute -left-40 top-[-120px] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-3xl" />

        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.07fr_.93fr] lg:gap-20 lg:py-24">
          {/* HERO CONTENT */}
          <div className="reveal">
            <p className="eyebrow">
              <UsersRound size={15} />
              About Us
            </p>

            <nav className="mb-7 mt-4 text-sm text-white/70">
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-orange-400"
              >
                Home
              </Link>

              <span className="mx-2 text-white/30">/</span>

              <Link
                href="/about-travel-iq/"
                className="text-white transition-colors duration-300 hover:text-orange-400"
              >
                About Us
              </Link>
            </nav>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.5rem]">
              We Are
              <br />
              <span className="text-orange-500">TraveliQ</span>
            </h1>

            <span className="about-hero__rule mt-7 block" />

            <p className="mt-7 max-w-xl text-lg font-bold leading-8 text-white">
              Travel IQ Services is the best travel agency in INDIA
            </p>

            {/* TRUST POINTS */}
            <div className="mt-8 grid max-w-xl grid-cols-1 border-y border-white/10 sm:grid-cols-3">
              <div className="border-b border-white/10 py-4 sm:border-b-0 sm:border-r sm:pr-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-400">
                  ✓ IATA Accredited
                </p>
              </div>

              <div className="border-b border-white/10 py-4 sm:border-b-0 sm:px-5 sm:border-r">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white">
                  ✓ IRCTC Principal Agent
                </p>
              </div>

              <div className="py-4 sm:pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-orange-400">
                  ★ 20K+ Registered Agents
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative reveal-delay">
            <div className="absolute -right-5 -top-5 h-full w-full border border-orange-500/30" />

            <div className="absolute -bottom-5 -left-5 h-24 w-24 border-b-2 border-l-2 border-orange-500/40" />

            <div className="hero-image-wrap relative overflow-hidden bg-white/5 shadow-2xl shadow-black/30">
              <Image
                src="/vande_bharat_hero.jpg"
                alt="TravelIQ travel services"
                width={881}
                height={587}
                priority
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
              />

              <div className="image-wash" />

              {/* Image overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#102F52]/80 to-transparent" />
            </div>

            {/* HERO PROOF */}
            <div className="hero-proof border-l-2 border-orange-500">
              <div className="flex h-10 w-10 items-center justify-center bg-orange-500 text-white">
                <Train size={20} />
              </div>

              <span>
                <b>Travel IQ Services</b>
                <small>Your Own Travel Intelligence</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="about-story relative overflow-hidden bg-[#F8FAFC]">
        {/* BACKGROUND GLOWS */}
        <div className="pointer-events-none absolute left-[-180px] top-[-150px] h-[450px] w-[450px] rounded-full bg-orange-500/[0.07] blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[450px] w-[450px] rounded-full bg-[#1C487B]/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          {/* SECTION HEADER */}
          <div className="mb-14 max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              <span className="h-[2px] w-9 bg-orange-500" />
              Our Story
            </p>

            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#1C487B] sm:text-5xl lg:text-[3.7rem]">
              A Journey Built on
              <span className="text-orange-500"> Trust &amp; Travel</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
              From a vision started in 2014 to a growing network of travel
              professionals, Travel IQ continues to build smarter solutions for
              India's travel agents.
            </p>
          </div>

          {/* STORY */}
          <div className="grid gap-12 lg:grid-cols-[.30fr_1fr] lg:gap-20">
            {/* LEFT — YEAR / TIMELINE */}
            <div className="relative">
              <div className="absolute left-[25px] top-0 hidden h-full w-px bg-slate-200 lg:block" />

              <div className="relative lg:sticky lg:top-24">
                {/* ICON */}
                <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center border border-orange-500/30 bg-white text-[#1C487B] shadow-sm transition-all duration-300 hover:border-orange-500 hover:text-orange-500">
                  <Building2 size={24} strokeWidth={1.7} />
                </div>

                {/* YEAR */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                    Established
                  </p>

                  <p className="mt-1 text-7xl font-black leading-none tracking-[-0.06em] text-[#1C487B] sm:text-8xl">
                    2014
                  </p>

                  <div className="mt-6 h-[3px] w-14 bg-orange-500" />

                  <p className="mt-5 max-w-[220px] text-sm leading-6 text-slate-500">
                    Growing from a focused travel service into a trusted B2B
                    travel partner.
                  </p>
                </div>

                {/* SMALL STATS */}
                <div className="mt-10 grid max-w-[250px] grid-cols-2 border-t border-slate-200 pt-6">
                  <div>
                    <p className="text-2xl font-extrabold text-[#1C487B]">
                      20K+
                    </p>

                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      Registered Agents
                    </p>
                  </div>

                  <div className="border-l border-slate-200 pl-5">
                    <p className="text-2xl font-extrabold text-[#1C487B]">
                      2017
                    </p>

                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      IATA Recognition
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — CONTENT */}
            <div className="relative">
              {/* TOP LINE */}
              <div className="mb-10 flex items-center gap-3">
                <span className="h-2 w-2 bg-orange-500" />
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="about-copy space-y-8 text-[16px] leading-8 text-slate-600">
                {/* PARAGRAPH 1 */}
                <div className="group relative border-l border-slate-200 pl-7">
                  <span className="absolute -left-[5px] top-2 h-3 w-3 border-2 border-orange-500 bg-white transition-all duration-300 group-hover:bg-orange-500" />

                  <p>
                    Travel IQ Services is the best Principal agent of IRCTC and
                    an IATA accredited travel agent in INDIA. Travel IQ started
                    its operations in the year 2014 and has its Corporate office
                    in Gurugram, IT city of Delhi/NCR. Since then, it has been
                    consistently showing substantial progress in the market.
                  </p>

                  <p className="mt-5">
                    In 2017, within mere three years of its establishment, the
                    company acquired recognition from IATA (International Air
                    Transport Association), the most prestigious airline trade
                    association which currently represents most of the total air
                    traffic.
                  </p>
                </div>

                {/* HIGHLIGHT */}
                <div className="relative overflow-hidden border-l-4 border-orange-500 bg-white px-7 py-7 shadow-[0_12px_40px_rgba(28,72,123,0.06)]">
                  <div className="pointer-events-none absolute right-[-30px] top-[-30px] h-40 w-40 rounded-full bg-orange-500/[0.06] blur-2xl" />

                  <div className="relative">
                    <div className="mb-4 h-[2px] w-8 bg-orange-500" />

                    <p className="text-lg font-semibold leading-8 text-[#1C487B]">
                      “Foreseeing the digital transformation that revolutionized
                      the travel industry, Travel IQ stepped forward to create a
                      stronger digital ecosystem for travel professionals.”
                    </p>
                  </div>
                </div>

                {/* PARAGRAPH 2 */}
                <div className="group relative border-l border-slate-200 pl-7">
                  <span className="absolute -left-[5px] top-2 h-3 w-3 border-2 border-orange-500 bg-white transition-all duration-300 group-hover:bg-orange-500" />

                  <p>
                    The company started its online portal under the name{" "}
                    <a
                      href="https://b2b.traveliq.in"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[#1C487B] underline decoration-orange-500/40 underline-offset-4 transition-colors hover:text-orange-500"
                    >
                      b2b.traveliq.in
                    </a>{" "}
                    in the year 2016. The portal is basically designed for
                    online travel assistance, focusing primarily on the B2B
                    module of trade.
                  </p>

                  <p className="mt-5">
                    The website has more than 20,000 registered agents who are
                    considered to be some of the most experienced professionals
                    in the marketplace.
                  </p>
                </div>

                {/* PARAGRAPH 3 */}
                <div className="group relative border-l border-slate-200 pl-7">
                  <span className="absolute -left-[5px] top-2 h-3 w-3 border-2 border-orange-500 bg-white transition-all duration-300 group-hover:bg-orange-500" />

                  <p>
                    Majorly operating in states like Haryana, Uttar Pradesh and
                    Punjab, Travel IQ has become a landmark in the travel
                    industry. Since the year 2014, the company has been awarded
                    by some of the most esteemed airlines for its outstanding
                    provision of services.
                  </p>

                  <p className="mt-5">
                    This is because the company always focuses on offering
                    travel-related quality services to its clients and
                    maintaining healthy relationships.
                  </p>

                  <p className="mt-5">
                    Having an edge in booking flights, we also provide complete
                    assistance in booking travel packages, hotels, bus services,
                    travel insurance, assistance in acquiring passport/visa,
                    booking a cruise and many more.
                  </p>
                </div>
              </div>

              {/* BOTTOM SERVICES STRIP */}
              <div className="mt-12 grid border-y border-slate-200 sm:grid-cols-3">
                <div className="border-b border-slate-200 px-5 py-5 transition-colors duration-300 hover:bg-orange-50 sm:border-b-0 sm:border-r">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                    Flights
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#1C487B]">
                    Easy Air Booking
                  </p>
                </div>

                <div className="border-b border-slate-200 px-5 py-5 transition-colors duration-300 hover:bg-orange-50 sm:border-b-0 sm:border-r">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                    Hospitality
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#1C487B]">
                    Hotels &amp; Packages
                  </p>
                </div>

                <div className="px-5 py-5 transition-colors duration-300 hover:bg-orange-50">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                    Assistance
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#1C487B]">
                    Visa, Insurance &amp; More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative overflow-hidden bg-[#1C487B]">
        {/* Orange glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-[-250px] h-[400px] w-[400px] rounded-full bg-orange-500/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative px-5 py-10 text-center transition-all duration-500 hover:bg-white/[0.035] sm:px-7 sm:py-12 ${
                  index !== 0
                    ? "border-t border-white/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <stat.icon
                  className="mx-auto mb-4 h-7 w-7 text-orange-400 transition-transform duration-300 group-hover:-translate-y-1"
                  strokeWidth={1.7}
                />

                <div className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {stat.number}
                </div>

                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50">
                  {stat.label}
                </div>

                <div className="mx-auto mt-5 h-[2px] w-7 bg-orange-500 transition-all duration-300 group-hover:w-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUTION SECTION ===== */}
      <section className="about-solution relative overflow-hidden bg-white">
        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="pointer-events-none absolute right-[-180px] top-[35%] h-[500px] w-[500px] rounded-full bg-[#1C487B]/[0.08] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          {/* INTRO */}
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
            {/* CONTENT */}
            <div className="animate-[fadeUp_.8s_ease-out]">
              <p className="section-kicker mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                <span className="h-[2px] w-8 bg-orange-500" />
                Best Solution for Our Agent
              </p>

              <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1C487B] sm:text-5xl lg:text-[3.9rem]">
                Guarantee Feel Free
                <br />
                <span className="relative inline-block text-orange-500">
                  From Pain Again
                  <span className="absolute -bottom-2 left-0 h-[3px] w-1/2 bg-orange-500/30" />
                </span>
              </h2>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-1 w-16 bg-orange-500" />
                <span className="h-1 w-3 bg-[#1C487B]" />
              </div>

              <p className="mt-8 max-w-2xl text-[16px] leading-8 text-slate-600">
                Mr. Neeraj Garg has always been a visionary who does not
                hesitate in thinking out of the box. The man is known for making
                full-proof strategies and ascertaining that they are well
                executed along with his great networking skills. With an utmost
                endeavor of keeping up with the latest technology and
                techniques, the company is also investing in new verticals and
                niche products.
              </p>

              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-slate-600">
                Rather than just being concerned about client satisfaction, we
                aim at making our clients happy. With the primary goal of being
                process driven, we focus on providing high standard services to
                our clients at affordable prices.
              </p>

              {/* TRUST LINE */}
              <div className="mt-9 flex items-center gap-4 border-l-2 border-orange-500 pl-5">
                <div>
                  <p className="text-sm font-bold text-[#1C487B]">
                    Trusted Travel Solutions
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Built for agents. Designed for growth.
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Orange glow */}
              <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

              <div className="relative w-full max-w-[430px] animate-[imageFloat_6s_ease-in-out_infinite]">
                {/* Decorative frame */}
                <div className="absolute -right-4 -top-4 h-full w-full border border-orange-500/30" />

                <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-[#1C487B]/30" />

                {/* IMAGE */}
                <div className="relative overflow-hidden bg-slate-50 shadow-2xl shadow-[#1C487B]/10">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1C487B]/20 via-transparent to-orange-500/5" />

                  <Image
                    src="/images/TravelIQ-IRCTC-Agent-Registration-Fees-Rs-1000-Only.png.webp"
                    alt="TravelIQ representative holding a laptop"
                    width={520}
                    height={650}
                    className="relative h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>

                {/* FLOATING BADGE */}
                <div className="absolute -bottom-6 left-5 z-20 bg-[#1C487B] px-6 py-4 shadow-xl">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                    Travel IQ
                  </span>

                  <span className="mt-1 block text-sm font-bold text-white">
                    Your Travel Partner
                  </span>
                </div>

                {/* ORANGE ACCENT */}
                <div className="absolute -right-3 bottom-10 h-14 w-14 bg-orange-500/90" />
              </div>
            </div>
          </div>

          {/* SOLUTIONS */}
          <div className="mt-28 border-t border-slate-200 pt-20">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="section-kicker flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  <span className="h-[2px] w-8 bg-orange-500" />
                  Why Choose Us
                </p>

                <h3 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-[#1C487B] sm:text-4xl lg:text-5xl">
                  Built Around
                  <span className="text-orange-500"> Your Business</span>
                </h3>
              </div>

              <p className="max-w-md text-sm leading-7 text-slate-500 lg:text-right">
                Everything we do is focused on helping travel agents simplify
                their operations, attract customers and grow with confidence.
              </p>
            </div>

            {/* SOLUTION GRID */}
            <div className="mt-12 grid border-y border-slate-200 md:grid-cols-3">
              {solutions.map(([title, text, Icon], index) => (
                <article
                  key={title}
                  className="group relative border-b border-slate-200 p-7 transition-all duration-500 hover:bg-[#1C487B] md:border-b-0 md:border-l first:md:border-l-0 lg:p-9"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/[0.10] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.2em] text-orange-500">
                        0{index + 1}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center border border-[#1C487B]/10 transition-all duration-500 group-hover:border-orange-500/30 group-hover:bg-orange-500/10">
                        <Icon
                          className="h-5 w-5 text-[#1C487B] transition-colors duration-300 group-hover:text-orange-500"
                          strokeWidth={1.7}
                        />
                      </div>
                    </div>

                    <h3 className="mt-14 text-xl font-bold text-[#1C487B] transition-colors duration-300 group-hover:text-white">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 transition-colors duration-300 group-hover:text-white/70">
                      {text}
                    </p>

                    <div className="mt-8 h-[2px] w-8 bg-orange-500 transition-all duration-500 group-hover:w-16" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative mt-28 overflow-hidden border-y border-orange-500/20 bg-[#FFF8F2]">
            {/* Orange glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

            {/* Navy glow */}
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#1C487B]/[0.06] blur-3xl" />

            {/* Decorative circles */}
            <div className="pointer-events-none absolute right-10 top-8 h-40 w-40 rounded-full border border-orange-500/10" />

            <div className="pointer-events-none absolute right-20 top-16 h-24 w-24 rounded-full border border-[#1C487B]/10" />

            <div className="relative grid items-center gap-10 px-7 py-12 sm:px-12 sm:py-14 lg:grid-cols-[1fr_auto] lg:px-16 lg:py-16">
              <div className="max-w-3xl">
                <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  <span className="h-[2px] w-8 bg-orange-500" />
                  Touch With Us
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#1C487B] sm:text-4xl lg:text-[2.8rem]">
                  Get Better Future with{" "}
                  <span className="text-orange-600">TravelIQ</span>
                </h2>

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600">
                  Travel IQ services can help aspiring travel agencies increase
                  their business and get more clients through online promotions.
                </p>
              </div>

              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-3 bg-[#1C487B] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#1C487B]/15 transition-all duration-300 hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-500/20"
              >
                WhatsApp Us

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* STAFF / TEAM */}
          <div className="mt-28 border-t border-slate-200 pt-20">
            {/* CONTENT ABOVE IMAGE */}
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="section-kicker flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  <span className="h-[2px] w-8 bg-orange-500" />
                  Our Staff
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#1C487B] sm:text-4xl lg:text-5xl">
                  Meet the
                  <span className="text-orange-500"> Travel Partner</span>
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Travel IQ is backed by an experienced and trained team
                  dedicated to helping agents manage and grow their travel
                  agency business.
                </p>
              </div>

              <Link
                href="/our-services/"
                className="group inline-flex items-center gap-2 border-b-2 border-[#1C487B] pb-2 text-sm font-bold text-[#1C487B] transition-colors duration-300 hover:border-orange-500 hover:text-orange-500"
              >
                View All Services

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* LARGE IMAGE PLACEHOLDER */}
            <div className="group relative mt-12 min-h-[320px] overflow-hidden bg-[#F1F5F9] sm:min-h-[420px] lg:min-h-[520px]">
              {/* Background glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(249,115,22,0.12),transparent_45%)]" />

              {/* Inner frame */}
              <div className="absolute inset-4 border border-white/80" />

              {/* Image goes here */}

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-orange-500/40 bg-white/70 text-[#1C487B] shadow-sm">
                    <Globe size={23} strokeWidth={1.5} />
                  </div>

                  <p className="text-sm font-semibold text-[#1C487B]">
                    Staff Image
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Add your full-width team image here
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-[#1C487B]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}