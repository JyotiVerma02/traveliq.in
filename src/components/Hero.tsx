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
    <section className="relative overflow-hidden bg-[#FFF8F3]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#EE5326]/[0.045] blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#10407A]/[0.035] blur-[120px]" />

        <div className="absolute left-1/2 top-[10%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-white/70 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(#10407A 1px, transparent 1px), linear-gradient(90deg, #10407A 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* =========================================================
            TOP TRUST STRIP
        ========================================================= */}
        <div className="flex min-h-[54px] flex-col justify-center gap-3 border-b border-[#10407A]/10 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#10407A] sm:text-[11px]">
              IRCTC Principal Agent
            </span>

            <span className="h-3 w-px bg-[#10407A]/15" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#687386] sm:text-[11px]">
              IATA Accredited
            </span>
          </div>

          <div className="text-center text-[9px] font-semibold uppercase tracking-[0.15em] text-[#7A8493] sm:text-right sm:text-[10px]">
            Corporate Headquarters · Gurugram, India
          </div>
        </div>

        {/* =========================================================
            MAIN HERO
        ========================================================= */}
        <div className="mx-auto flex max-w-[1150px] flex-col items-center px-2 pb-14 pt-14 text-center sm:pb-16 sm:pt-16 lg:pb-18 lg:pt-20">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
            <span className="h-px w-8 bg-[#EE5326] sm:w-12" />

            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#EE5326] sm:text-[10px]">
              Travel Intelligence
            </span>

            <span className="h-px w-8 bg-[#EE5326] sm:w-12" />
          </div>

          {/* =====================================================
              MAIN HEADING
          ===================================================== */}
          <h1
            className="
              mx-auto
              max-w-[1050px]
              text-[3.2rem]
              font-black
              leading-[0.92]
              tracking-[-0.055em]
              text-[#0B1728]
              sm:text-[4.5rem]
              md:text-[5.2rem]
              lg:text-[6rem]
              xl:text-[6.4rem]
            "
          >
            Your Journey.
            <br />
            <span className="text-[#EE5326]">Our Expertise.</span>
          </h1>

          {/* =====================================================
              MAIN MESSAGE
          ===================================================== */}
          <div className="mx-auto mt-7 max-w-[760px] sm:mt-8">
            <h2 className="text-lg font-bold tracking-[-0.025em] text-[#10407A] sm:text-xl md:text-2xl">
              Become an IRCTC Travel Agent
            </h2>

            <p className="mx-auto mt-2.5 max-w-[680px] text-sm leading-6 text-[#526174] sm:text-[15px] sm:leading-7 md:text-base">
              Grow your travel business with an authorized IRCTC Principal
              Agent and IATA Accredited Travel Agency.
            </p>
          </div>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <p className="mx-auto mt-3.5 max-w-[720px] text-[13px] leading-6 text-[#687386] sm:text-sm sm:leading-6 md:text-[15px]">
            Access railway reservations, flight tickets, hotels, buses,
            holiday packages and complete travel solutions through one trusted
            platform.
          </p>

          {/* =====================================================
              CTA
          ===================================================== */}
          <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/irctc-agent-registration/"
              className="
                group
                inline-flex
                h-[52px]
                w-full
                items-center
                justify-center
                gap-3
                bg-[#EE5326]
                px-7
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                !text-white
                shadow-lg
                shadow-[#EE5326]/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#D9471D]
                sm:w-auto
              "
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
              className="
                group
                inline-flex
                h-[52px]
                w-full
                items-center
                justify-center
                gap-3
                border
                border-[#10407A]/15
                bg-white
                px-7
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#10407A]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#25D366]
                hover:bg-[#25D366]
                hover:text-white
                sm:w-auto
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.75.46 3.46 1.33 4.97L2 22l5.28-1.39a9.86 9.86 0 0 0 4.76 1.22h.01c5.45 0 9.89-4.44 9.89-9.9C21.94 6.44 17.5 2 12.04 2zm5.79 14.2c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.14.1-1.84-.12-.42-.13-.96-.31-1.65-.61-2.91-1.25-4.8-4.17-4.95-4.36-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.49.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.1.2-.15.32-.29.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.07 1.3 2.37 1.45.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.65-.15.27.1 1.69.8 1.98.95.29.15.49.22.56.34.07.12.07.71-.17 1.39z" />
              </svg>

              WhatsApp
            </a>
          </div>

          {/* Small reassurance */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#7A8493]">
            <span className="flex items-center gap-1.5">
              <span className="text-[#EE5326]">✓</span>
              Authorized Services
            </span>

            <span className="hidden h-3 w-px bg-[#10407A]/10 sm:block" />

            <span className="flex items-center gap-1.5">
              <span className="text-[#EE5326]">✓</span>
              Professional Support
            </span>

            <span className="hidden h-3 w-px bg-[#10407A]/10 sm:block" />

            <span className="flex items-center gap-1.5">
              <span className="text-[#EE5326]">✓</span>
              B2B Travel Network
            </span>
          </div>
        </div>

        {/* =========================================================
            DESTINATIONS
        ========================================================= */}
        <div className="border-y border-[#10407A]/10 py-8">
          <div className="mb-6 flex items-end justify-between gap-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#EE5326]">
                Explore Travel
              </p>

              <h2 className="mt-1 text-lg font-bold tracking-tight text-[#0B1728]">
                Popular Destinations
              </h2>
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#10407A]/35">
              04 Destinations
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((dest) => (
              <div
                key={dest.name}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  border
                  border-[#10407A]/8
                  bg-white/60
                  p-3.5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-lg
                "
              >
                <div className="relative h-[62px] w-[82px] shrink-0 overflow-hidden">
                  <Image
                    src={dest.img}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#0B1728] transition-colors group-hover:text-[#EE5326]">
                    {dest.name}
                  </p>

                  <p className="mt-1 truncate text-[11px] text-[#7A8493]">
                    {dest.location}
                  </p>
                </div>

                <span className="ml-auto text-sm text-[#10407A]/25 transition-all group-hover:translate-x-1 group-hover:text-[#EE5326]">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            CALLBACK SECTION
        ========================================================= */}
        <div className="mx-auto max-w-[1250px] py-10 lg:py-12">
          <div className="relative overflow-hidden border border-[#10407A]/10 bg-white shadow-xl shadow-[#10407A]/8">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#EE5326]" />

            <div className="p-5 pt-7 sm:p-7 lg:p-8">
              <div className="grid gap-7 lg:grid-cols-[0.85fr_1.5fr] lg:items-center lg:gap-10">
                {/* Intro */}
                <div className="lg:border-r lg:border-[#10407A]/10 lg:pr-10">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EE5326]">
                      Get Started
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#10407A]" />
                  </div>

                  <h2 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#0B1728] sm:text-3xl">
                    Become an{" "}
                    <span className="text-[#EE5326]">IRCTC Agent</span>
                  </h2>

                  <p className="mt-2 max-w-lg text-xs leading-5 text-[#687386] sm:text-sm">
                    Leave your details and our travel specialist will help you
                    get started.
                  </p>
                </div>

                {/* Form */}
                <form className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
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
                      className="h-[52px] w-full border border-[#10407A]/12 bg-[#FAFBFC] px-4 text-sm font-medium text-[#0B1728] outline-none transition placeholder:text-[#8A94A3] focus:border-[#EE5326] focus:bg-white focus:ring-4 focus:ring-[#EE5326]/10"
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
                      className="h-[52px] w-full border border-[#10407A]/12 bg-[#FAFBFC] px-4 text-sm font-medium text-[#0B1728] outline-none transition placeholder:text-[#8A94A3] focus:border-[#EE5326] focus:bg-white focus:ring-4 focus:ring-[#EE5326]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex h-[52px] items-center justify-center gap-3 bg-[#10407A] px-7 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md shadow-[#10407A]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B315D]"
                  >
                    <span>Request Callback</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </form>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#10407A]/10 pt-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#EE5326]">✓</span>

                  <span className="text-[10px] font-semibold text-[#687386]">
                    Authorized Travel Services
                  </span>
                </div>

                <span className="hidden h-3 w-px bg-[#10407A]/10 sm:block" />

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#EE5326]">✓</span>

                  <span className="text-[10px] font-semibold text-[#687386]">
                    Professional Support
                  </span>
                </div>

                <span className="hidden h-3 w-px bg-[#10407A]/10 sm:block" />

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#EE5326]">✓</span>

                  <span className="text-[10px] font-semibold text-[#687386]">
                    Growing B2B Network
                  </span>
                </div>

                {/* <a
                  href="https://wa.me/917835025025"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto text-[10px] font-bold uppercase tracking-[0.14em] text-[#EE5326] transition-colors hover:text-[#10407A]"
                >
                  Chat on WhatsApp →
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            CREDIBILITY
        ========================================================= */}
        <div className="border-t border-[#10407A]/10 pb-8 pt-6">
          <div className="grid grid-cols-2 divide-x divide-[#10407A]/10 sm:grid-cols-4">
            <div className="px-4 text-center sm:text-left">
              <p className="text-2xl font-bold tracking-tight text-[#0B1728]">
                2014
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-[#7A8493]">
                Established
              </p>
            </div>

            <div className="px-4 text-center sm:text-left">
              <p className="text-2xl font-bold tracking-tight text-[#EE5326]">
                20K+
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-[#7A8493]">
                Travel Agents
              </p>
            </div>

            <div className="px-4 pt-5 text-center sm:pt-0 sm:text-left">
              <p className="text-2xl font-bold tracking-tight text-[#10407A]">
                IATA
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-[#7A8493]">
                Accredited
              </p>
            </div>

            <div className="px-4 pt-5 text-center sm:pt-0 sm:text-left">
              <p className="text-2xl font-bold tracking-tight text-[#0B1728]">
                B2B
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-[#7A8493]">
                Travel Platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}