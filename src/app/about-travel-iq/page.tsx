import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | TravelIQ",
  description:
    "Travel IQ Services is the best Principal agent of IRCTC and an IATA accredited travel agent in INDIA, Travel IQ has started its operations in the year 2014.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#f6f9fe] via-white to-[#f6f9fe]">
        {/* Breadcrumb & Hero Header - Enhanced */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1685e8]/10 via-[#cbf2ff]/30 to-[#eaf8ff]/50 py-16 sm:py-20">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#1685e8]/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-400/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-sky-200/10 blur-3xl" />
          
          <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500">
              <Link href="/" className="transition hover:text-[#1685e8] hover:underline">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#1685e8] font-semibold">About Us</span>
            </nav>

            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1685e8]/10 px-4 py-1.5 text-xs font-bold text-[#1685e8] border border-[#1685e8]/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1685e8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1685e8]"></span>
                </span>
                About TravelIQ
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
                We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1685e8] to-[#075ca8]">traveliQ</span>
              </h1>
              <p className="text-xl font-semibold text-slate-700 sm:text-2xl">
                Travel IQ Services is the best travel agency in INDIA
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                  ✓ IATA Accredited
                </span>
                <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-[#1685e8] border border-sky-200">
                  ✓ IRCTC Principal Agent
                </span>
                <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 border border-amber-200">
                  ★ 150K+ Registered Agents
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Left Column - Content */}
              <div className="space-y-8 lg:col-span-8">
                {/* Main Content Card */}
                <div className="group rounded-2xl border border-sky-100 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="space-y-5 text-slate-700 leading-relaxed text-base">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl text-[#1685e8]">✦</span>
                      <p>
                        Travel IQ Services is the best Principal agent of IRCTC and an IATA accredited travel agent in INDIA, Travel IQ has started its operations in the year 2014, Travel IQ has its Corporate office in Gurugram, IT city of Delhi/NCR. Since then it has been consistently showing substantial progress in the market. In 2017, within mere three years of its establishment, the company acquired recognition from IATA (International Air Transport Association), the most prestigious airline trade association which currently represents most of the total air traffic.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-2xl text-[#1685e8]">✦</span>
                      <p>
                        Foreseeing the digital transformation that revolutionized the travel industry, the company started its online portal under the name{" "}
                        <a
                          href="https://b2b.traveliq.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#1685e8] hover:underline hover:text-[#075ca8] transition"
                        >
                          https://b2b.traveliq.in
                        </a>{" "}
                        in the year 2016. The portal is basically designed for online travel assistance focusing primarily on B2B module of trade. The website has more than 150000 registered agents who are considered to be some of the most experienced pros in the marketplace.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-2xl text-[#1685e8]">✦</span>
                      <p>
                        Majorly operating in states like Haryana, Uttar Pradesh and Punjab Travel IQ has become a landmark in travel industry. Since the year 2014, the company is being awarded by some of the most esteemed airlines for its outstanding provision of services. This is because the company always focuses on offering travel-related quality services to its clients and maintaining healthy relationships. Having an edge in booking flights we also provide complete assistance in booking travel packages, hotels, bus services, travel insurance, assistance in acquiring passport/visa, booking a cruise and many more.
                      </p>
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-sky-100">
                    <div className="text-center">
                      <div className="text-2xl font-extrabold text-[#1685e8]">2014</div>
                      <div className="text-xs text-slate-500">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-extrabold text-[#1685e8]">150K+</div>
                      <div className="text-xs text-slate-500">Registered Agents</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-extrabold text-[#1685e8]">IATA</div>
                      <div className="text-xs text-slate-500">Accredited</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-extrabold text-[#1685e8]">IRCTC</div>
                      <div className="text-xs text-slate-500">Principal Agent</div>
                    </div>
                  </div>
                </div>

                {/* Vision Section */}
                <div className="group rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/30 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1685e8]/10 text-[#1685e8]">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#1685e8]">
                      Our Vision
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-3">
                    Guarantee Feel Free From Pain Again
                  </h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Mr. Neeraj Garg has always been a visionary who does not hesitate in thinking out of the box. The man is known for making full-proof strategies and ascertaining that they are well executed along with his great networking skills. With an utmost endeavor of keeping up with the latest technology and techniques, the company is also investing in new verticals and niche products. Rather than just being concerned about client satisfaction, we aim at making our clients happy. With the primary goal of being process driven, we focus on providing high standard services to our clients at affordable prices.
                  </p>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6 lg:col-span-4">
                {/* Image Card */}
                <div className="group overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://traveliq.in/wp-content/uploads/2022/01/TravelIQ-Train-Ticket-Booking.jpeg"
                      alt="TravelIQ Train Ticket Booking"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-[#1685e8] uppercase tracking-wider">Featured</span>
                    <p className="text-sm font-semibold text-slate-700">Train Ticket Booking Services</p>
                  </div>
                </div>

                {/* Features Cards */}
                <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400">
                    Why Choose Us
                  </h3>
                  
                  <div className="group/item border-b border-slate-100 pb-4 last:border-0 last:pb-0 transition-all hover:pl-2">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0-1v1m0 1v1" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">AFFORDABLE PRICE</h4>
                        <p className="text-xs text-slate-500">You can get affordable prices for all the travel products &amp; services.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group/item border-b border-slate-100 pb-4 last:border-0 last:pb-0 transition-all hover:pl-2">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#1685e8]">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">BEST DESTINATION</h4>
                        <p className="text-xs text-slate-500">Travel IQ is offering the best destinations for your holidays.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group/item transition-all hover:pl-2">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h-2m2 4h-2m2-4h2m-2 4h2M3 10h2m2 4H3m2-4h2m2 4H3m8 4h2m-2 4h2M3 18h2m2 4H3" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">PERSONAL SERVICE</h4>
                        <p className="text-xs text-slate-500">You will get personalized services at Travel IQ Services</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Staff Card */}
                <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/30 p-6 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1685e8]/10 text-[#1685e8]">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#1685e8]">Our Staff</span>
                      <h3 className="text-xl font-bold text-slate-900">Travel Partner</h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Travel IQ is having the best &amp; trained staff to help our agents in doing their travel agency business.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <Link
                      href="/our-services/"
                      className="rounded-full bg-slate-100 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-[#1685e8] hover:text-white transition-all hover:shadow-md"
                    >
                      View All Services
                    </Link>
                    <Link
                      href="/irctc-agent-registration/"
                      className="rounded-full bg-[#1685e8] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#0d76d4] transition-all hover:shadow-md"
                    >
                      IRCTC Agent Process
                    </Link>
                  </div>
                  <div className="mt-2 pt-3 border-t border-sky-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">Key Representative:</span>
                    <span className="text-sm font-bold text-slate-800">Vivek Shah</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner Section - Enhanced */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1685e8] via-[#1a7fd4] to-[#075ca8] p-8 sm:p-12 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
              
              <div className="relative z-10 mx-auto max-w-3xl text-center space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm border border-white/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Get in Touch
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Get Better Future with <span className="text-white/90">TravelIQ</span>
                </h2>
                <p className="text-base sm:text-lg text-sky-100 leading-relaxed max-w-2xl mx-auto">
                  Travel IQ services can help the aspiring travel agencies to increase their business and get more clients through online promotions.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://wa.me/917835025025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#20bd5a] hover:scale-105 hover:shadow-lg"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    WhatsApp Us
                  </a>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm border border-white/30 transition-all hover:bg-white/20 hover:scale-105"
                  >
                    Contact Us
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Our Staff Section - Premium Minimal */}
<section className="py-16 sm:py-20 bg-white">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-14">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#1685e8]/5 px-4 py-1.5 text-xs font-medium text-[#1685e8] border border-[#1685e8]/10 mb-4">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1685e8] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#1685e8]"></span>
        </span>
        Leadership Team
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
        Meet Our <span className="text-[#1685e8]">Team</span>
      </h2>
      <div className="w-12 h-0.5 bg-[#1685e8]/30 mx-auto mt-4" />
      <p className="mt-4 text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
        Experienced professionals dedicated to providing exceptional travel solutions.
      </p>
    </div>

    {/* Staff Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Staff Member 1 - Rahul Mehta */}
      <div className="group bg-white rounded-xl border border-slate-200/60 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center">
        {/* Avatar */}
        <div className="relative mx-auto h-28 w-28">
          <div className="relative h-full w-full rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-200/60 group-hover:border-[#1685e8]/30 transition-colors duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-semibold text-slate-600">RM</span>
            </div>
            {/* Uncomment when you have actual images */}
            {/* <Image
              src="/images/team/rahul-mehta.jpg"
              alt="Rahul Mehta"
              fill
              className="object-cover"
            /> */}
          </div>
        </div>
        
        <h3 className="mt-4 text-lg font-semibold text-slate-800">Rahul Mehta</h3>
        <p className="text-sm font-medium text-[#1685e8]">CEO &amp; Co-Founder</p>
        
        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
          Visionary leader with 18+ years in travel, pioneering digital transformation and building a network of 150K+ agents.
        </p>
        
        {/* Social Icons */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center gap-3">
          <a href="#" className="text-slate-400 hover:text-[#1685e8] transition-colors duration-200">
            <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:rahul@traveliq.in" className="text-slate-400 hover:text-[#1685e8] transition-colors duration-200">
            <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://wa.me/917835025025" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors duration-200">
            <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Staff Member 2 - Vivek Shah */}
      <div className="group bg-white rounded-xl border border-slate-200/60 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center">
        <div className="relative mx-auto h-28 w-28">
          <div className="relative h-full w-full rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-200/60 group-hover:border-[#1685e8]/30 transition-colors duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-semibold text-slate-600">VS</span>
            </div>
          </div>
        </div>
        
        <h3 className="mt-4 text-lg font-semibold text-slate-800">Vivek Shah</h3>
        <p className="text-sm font-medium text-[#1685e8]">VP of Operations</p>
        
        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
          Operations expert with a decade of experience ensuring seamless execution and exceptional service delivery.
        </p>
        
        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center gap-3">
          <a href="#" className="text-slate-400 hover:text-[#1685e8] transition-colors duration-200">
            <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:vivek@traveliq.in" className="text-slate-400 hover:text-[#1685e8] transition-colors duration-200">
            <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://wa.me/917835025025" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors duration-200">
            <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Staff Member 3 - Priya Sharma */}
      <div className="group bg-white rounded-xl border border-slate-200/60 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center">
        <div className="relative mx-auto h-28 w-28">
          <div className="relative h-full w-full rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-200/60 group-hover:border-[#1685e8]/30 transition-colors duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-semibold text-slate-600">PS</span>
            </div>
          </div>
        </div>
        
        <h3 className="mt-4 text-lg font-semibold text-slate-800">Priya Sharma</h3>
        <p className="text-sm font-medium text-[#1685e8]">Head of Client Relations</p>
        
        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
          Client satisfaction specialist focused on building lasting relationships and personalized service.
        </p>
        
        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center gap-3">
          <a href="#" className="text-slate-400 hover:text-[#1685e8] transition-colors duration-200">
            <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:priya@traveliq.in" className="text-slate-400 hover:text-[#1685e8] transition-colors duration-200">
            <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://wa.me/917835025025" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors duration-200">
            <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>

    {/* View All Members */}
    <div className="text-center mt-10">
      <Link
        href="/team/"
        className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1685e8]/5 hover:bg-[#1685e8]/10 border border-[#1685e8]/20 hover:border-[#1685e8]/30 rounded-full text-sm font-medium text-[#1685e8] transition-all duration-200"
      >
        <span>View All Team Members</span>
        <svg className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H5" />
        </svg>
      </Link>
    </div>
  </div>
</section>
      </main>
      <Footer />
    </>
  );
}