import Link from "next/link";
import Image from "next/image";

const destinations = [
  {
    name: "Taj Mahal",
    location: "Agra, India",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "Madhya Pradesh",
    location: "Central India",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "United Kingdom",
    location: "London, UK",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "International",
    location: "Worldwide Travel",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=85",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FFF8F3]">
      {/* =========================================================
          SOFT PREMIUM BACKGROUND
      ========================================================= */}
      {/* Premium Light Hero Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft orange glow */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#EE5326]/[0.055] blur-[110px]" />

        {/* Soft navy glow */}
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#10407A]/[0.045] blur-[110px]" />

        {/* Center white light */}
        <div className="absolute left-1/2 top-1/3 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-white/60 blur-[100px]" />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#10407A 1px, transparent 1px), linear-gradient(90deg, #10407A 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        {/* =========================================================
            TOP INFORMATION BAR
        ========================================================= */}
        <div className="mb-10 flex flex-col gap-4 border-b border-[#10407A]/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-[#EE5326]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#10407A] sm:text-xs">
              IRCTC Principal Agent
            </span>

            <span className="h-3 w-px bg-[#10407A]/20" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#687386] sm:text-xs">
              IATA Accredited
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#687386] sm:text-xs">
            <span className="text-[#EE5326]">●</span>
            Corporate HQ — Gurugram, India
          </div>
        </div>

        {/* =========================================================
            MAIN HERO GRID
        ========================================================= */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* =======================================================
              LEFT CONTENT
          ======================================================= */}
          <div className="lg:col-span-5">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#EE5326]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-[#EE5326]">
                  Travel Intelligence
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-[3.3rem] font-bold leading-[0.98] tracking-[-0.045em] text-[#0B1728] sm:text-[4.4rem] lg:text-[4.2rem] xl:text-[5rem]">
                Your Journey.
                <br />
                <span className="text-[#EE5326]">Our Expertise.</span>
              </h1>

              {/* Supporting title */}
              <div className="mt-7 flex gap-4">
                <div className="mt-1 h-12 w-[3px] shrink-0 bg-[#EE5326]" />

                <div>
                  <p className="text-lg font-bold leading-snug text-[#10407A] sm:text-xl">
                    Become an IRCTC Travel Agent
                  </p>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#526174] sm:text-[15px]">
                    Grow your travel business with an authorized IRCTC Principal
                    Agent and IATA Accredited Travel Agency.
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-xl text-sm leading-6 text-[#687386] sm:text-base">
                Access railway reservations, flight tickets, hotels, buses,
                holiday packages and complete travel solutions through one
                trusted platform.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/irctc-agent-registration/"
                  className="group inline-flex items-center gap-3 bg-[#EE5326] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#EE5326]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9471D]"
                >
                  <span>View Plans & Pricing</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <a
                  href="https://wa.me/917835025025"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 border border-[#10407A]/20 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#10407A] shadow-sm transition-all duration-300 hover:border-[#EE5326] hover:bg-[#EE5326] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.75.46 3.46 1.33 4.97L2 22l5.28-1.39a9.86 9.86 0 0 0 4.76 1.22h.01c5.45 0 9.89-4.44 9.89-9.9C21.94 6.44 17.5 2 12.04 2zm5.79 14.2c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.14.1-1.84-.12-.42-.13-.96-.31-1.65-.61-2.91-1.25-4.8-4.17-4.95-4.36-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.49.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.1.2-.15.32-.29.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.07 1.3 2.37 1.45.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.65-.15.27.1 1.69.8 1.98.95.29.15.49.22.56.34.07.12.07.71-.17 1.39z" />
                  </svg>

                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* =====================================================
                DESTINATIONS
            ===================================================== */}
            <div className="mt-14 border-t border-[#10407A]/10 pt-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EE5326]">
                    Explore Travel
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#526174]">
                    Popular destinations
                  </p>
                </div>

                <span className="text-xs font-semibold text-[#10407A]/35">
                  04
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                {destinations.map((dest) => (
                  <div
                    key={dest.name}
                    className="group flex cursor-pointer items-center gap-3"
                  >
                    <div className="relative h-14 w-[76px] shrink-0 overflow-hidden border border-[#10407A]/10 shadow-sm">
                      <Image
                        src={dest.img}
                        alt={dest.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-black/5 transition group-hover:bg-transparent" />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-bold text-[#0B1728] transition-colors group-hover:text-[#EE5326]">
                        {dest.name}
                      </p>

                      <p className="mt-1 truncate text-[11px] text-[#7A8493]">
                        {dest.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =======================================================
              CENTER IMAGE
          ======================================================= */}
          <div className="relative lg:col-span-4">
            <div className="relative mx-auto w-full max-w-[420px]">
              {/* Orange frame accents */}
              <div className="absolute -left-3 -top-3 h-20 w-20 border-l-2 border-t-2 border-[#EE5326]" />

              <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-[#EE5326]" />

              {/* Image */}
              <div className="group relative aspect-[4/5] overflow-hidden border border-white bg-white shadow-2xl shadow-[#10407A]/15">
                <Image
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=90"
                  alt="Premium travel destination"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Light image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071f3d]/75 via-transparent to-transparent" />

                {/* Top label */}
                <div className="absolute left-5 top-5">
                  <div className="border border-white/40 bg-white/15 px-3 py-2 backdrop-blur-md">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                      Featured Destination
                    </p>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75">
                      Premium Travel
                    </span>
                  </div>

                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    Discover More.
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-white/70">
                    Travel smarter with TravelIQ.
                  </p>
                </div>
              </div>

              {/* Floating 20K stat */}
              <div className="absolute -bottom-5 -left-5 border border-[#10407A]/10 bg-white px-5 py-4 shadow-xl sm:-left-8">
                <p className="text-xl font-bold text-[#EE5326]">20K+</p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#687386]">
                  Registered Agents
                </p>
              </div>

              {/* IATA badge */}
              <div className="absolute -right-3 top-10 bg-[#10407A] px-3.5 py-2.5 shadow-lg">
                <p className="text-xs font-bold text-white">IATA</p>

                <p className="text-[7px] font-semibold uppercase tracking-wider text-white/70">
                  Accredited
                </p>
              </div>
            </div>
          </div>

          {/* =======================================================
              RIGHT CALLBACK FORM
          ======================================================= */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden borderborder border-[#10407A]/10 bg-white p-6 shadow-xl shadow-[#10407A]/10 sm:p-7">
              {/* Orange top accent */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-[#EE5326]" />

              {/* Header */}
              <div className="border-b border-[#10407A]/10 pb-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#EE5326]">
                    Get Started
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center border border-[#EE5326]/20 bg-[#FFF5F1] text-xs font-bold text-[#EE5326]">
                    01
                  </span>
                </div>

                <h2 className="text-2xl font-bold leading-tight tracking-[-0.025em] text-[#0B1728]">
                  Become an
                  <span className="text-[#EE5326]"> IRCTC Agent</span>
                </h2>

                <p className="mt-3 text-xs leading-5 text-[#687386]">
                  Request a callback and our travel specialist will guide you
                  through the registration process.
                </p>
              </div>

              {/* Form */}
              <form className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="hero-name"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#10407A]"
                  >
                    Full Name
                  </label>

                  <input
                    id="hero-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full border border-[#10407A]/12 bg-[#FAFBFC] px-4 py-3.5 text-sm font-medium text-[#0B1728] outline-none transition placeholder:text-[#8A94A3] focus:border-[#EE5326] focus:bg-white focus:ring-4 focus:ring-[#EE5326]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-phone"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#10407A]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="hero-phone"
                    type="tel"
                    required
                    placeholder="+91 Enter phone number"
                    className="w-full border border-[#10407A]/12 bg-[#FAFBFC] px-4 py-3.5 text-sm font-medium text-[#0B1728] outline-none transition placeholder:text-[#8A94A3] focus:border-[#EE5326] focus:bg-white focus:ring-4 focus:ring-[#EE5326]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 bg-[#10407A] py-4 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-md shadow-[#10407A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B315D]"
                >
                  <span>Request Callback</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <a
                  href="https://wa.me/917835025025"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 border border-[#EE5326] bg-[#EE5326] py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#D9471D]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.75.46 3.46 1.33 4.97L2 22l5.28-1.39a9.86 9.86 0 0 0 4.76 1.22h.01c5.45 0 9.89-4.44 9.89-9.9C21.94 6.44 17.5 2 12.04 2zm5.79 14.2c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.14.1-1.84-.12-.42-.13-.96-.31-1.65-.61-2.91-1.25-4.8-4.17-4.95-4.36-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.49.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.1.2-.15.32-.29.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.07 1.3 2.37 1.45.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.65-.15.27.1 1.69.8 1.98.95.29.15.49.22.56.34.07.12.07.71-.17 1.39z" />
                  </svg>
                  WhatsApp Us
                </a>
              </form>

              {/* Trust */}
              <div className="mt-6 border-t border-[#10407A]/10 pt-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-[#FFF4EF] text-xs font-bold text-[#EE5326]">
                    ✓
                  </span>

                  <p className="text-[10px] leading-5 text-[#687386]">
                    Authorized travel services backed by professional support
                    and a growing B2B travel network.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate HQ */}
            <div className="mt-5 border-l-2 border-[#EE5326] bg-[#F8F3F0] px-5 py-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#EE5326]">
                Corporate Headquarters
              </p>

              <p className="mt-2 text-xs leading-5 text-[#526174]">
                Unit 1004G, JMD Megapolis,
                <br />
                Sohna Road, Sector 48,
                <br />
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            TRUST BAR
        ========================================================= */}
        <div className="mt-14 border-t border-[#10407A]/10 pt-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <p className="text-2xl font-bold tracking-tight text-[#0B1728]">
                2014
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7A8493]">
                Established
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold tracking-tight text-[#EE5326]">
                20K+
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7A8493]">
                Travel Agents
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold tracking-tight text-[#10407A]">
                IATA
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7A8493]">
                Accredited
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold tracking-tight text-[#0B1728]">
                B2B
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7A8493]">
                Travel Platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
