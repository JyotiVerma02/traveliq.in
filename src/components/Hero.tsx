import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf5ff] via-[#f0f7ff] to-white pt-10 pb-16 lg:pt-16 lg:pb-24 w-full">
      <div className="hero-soft-glow" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/90 px-4 py-1.5 text-xs font-bold text-[#1685e8] shadow-xs">
            <span className="hero-live-dot" />
            IRCTC Principal Agent Partner &amp; IATA Accredited
          </div>

          <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">
            Corporate HQ • Gurugram, India
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading & Feature Card */}
          <div className="flex flex-col justify-between lg:col-span-6 xl:col-span-5">
            <div>
              <h1 className="font-sans text-[3rem] sm:text-[4rem] lg:text-[4.6rem] font-extrabold tracking-tight text-slate-900 leading-[1.02]">
                <span className="block hero-fade-up">Travel Agency</span>
                <span className="hero-fade-up text-[#1685e8] inline-block">
                  in Gurgaon
                  <span className="hero-cursor" />
                </span>
              </h1>

              <p className="mt-4 text-lg sm:text-xl font-bold text-slate-800 leading-snug hero-fade-up">
                Know More to Become an IRCTC Travel Agent
              </p>

              <div className="mt-4 flex items-start gap-3 hero-fade-up">
                <span className="mt-3 block h-[2px] w-8 shrink-0 bg-[#1685e8]" />
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Authorized IRCTC Principal Agent and IATA Accredited Travel Agency providing railway reservation, air tickets, hotel booking, bus tickets &amp; tour packages.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 hero-fade-up">
                <Link
                  href="/irctc-agent-registration/"
                  className="inline-flex items-center justify-center rounded-full bg-[#1685e8] px-7 py-3.5 text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d76d4]"
                >
                  Plans &amp; Pricing
                </Link>

                <a
                  href="https://wa.me/917835025025"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-50/90 px-6 py-3.5 text-xs sm:text-sm font-bold text-emerald-800 shadow-xs backdrop-blur-xs transition-all duration-300 hover:bg-emerald-100"
                >
                  <span>WhatsApp Us</span>
                  <span className="hero-whatsapp-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Dark Featured Card - High Contrast & Crystal Clear Text */}
            <div className="mt-10 relative overflow-hidden rounded-[28px] bg-slate-950 p-6 text-white shadow-2xl group hero-card-raise border border-slate-800">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80"
                  alt="Popular Destination"
                  fill
                  className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
              </div>

              <div className="relative z-10 space-y-2">
                <span className="inline-block rounded-full bg-sky-500/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-sky-300 border border-sky-400/30">
                  Featured Offerings
                </span>
                <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow-sm">
                  Popular Destinations
                </h3>
                <p className="text-xs font-medium text-slate-200 leading-relaxed max-w-[280px]">
                  Explore top-rated travel packages and high agent commissions.
                </p>

                <div className="pt-2">
                  <Link
                    href="/our-services/"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition hover:bg-[#1685e8] hover:text-white"
                  >
                    <span>Our Gallery</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Image & Plan a Trip Button */}
          <div className="relative flex flex-col items-center lg:col-span-6 xl:col-span-4">
            <div className="relative w-full aspect-[4/5] max-h-[540px] overflow-hidden rounded-[36px] border-4 border-white shadow-2xl sm:rounded-[44px] hero-float">
              <Image
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80"
                alt="Santorini Travel Architecture"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 hero-pulse">
                <Link
                  href="/irctc-agent-registration/"
                  className="inline-flex items-center justify-center rounded-full bg-[#1685e8] px-8 py-3.5 text-xs font-extrabold text-white uppercase tracking-wider shadow-2xl shadow-blue-600/50 transition-all duration-300 hover:scale-105 hover:bg-blue-600"
                >
                  Plan a trip
                </Link>
              </div>

              <div className="hero-corner corner-top-left" />
              <div className="hero-corner corner-top-right" />
              <div className="hero-corner corner-bottom-left" />
              <div className="hero-corner corner-bottom-right" />
            </div>
          </div>

          {/* Right Column: Callback Request Form */}
          <div className="flex flex-col justify-between lg:col-span-12 xl:col-span-3">
            <div className="rounded-[32px] border border-sky-100 bg-white p-6 shadow-xl shadow-blue-500/5 backdrop-blur-md hero-card-raise">
              <div>
                <span className="inline-block rounded-full border border-sky-200/80 bg-sky-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1685e8]">
                  Instant Callback
                </span>
                <h2 className="mt-2 text-xl font-extrabold leading-snug tracking-tight text-slate-900">
                  Simply request a callback to obtain Your IRCTC Rail ID
                </h2>
              </div>

              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="hero-name" className="mb-1 block text-xs font-bold text-slate-700">
                    Name
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-[#1685e8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 transition"
                  />
                </div>

                <div>
                  <label htmlFor="hero-phone" className="mb-1 block text-xs font-bold text-slate-700">
                    Phone number
                  </label>
                  <input
                    id="hero-phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-[#1685e8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 transition"
                  />
                </div>

                <div className="flex flex-col gap-2.5 pt-1">
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-full bg-[#1685e8] py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:bg-[#0d76d4] hover:-translate-y-0.5"
                  >
                    Submit
                  </button>

                  <a
                    href="https://wa.me/917835025025"
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] py-3 text-center text-xs font-bold text-white shadow-md transition duration-300 hover:bg-emerald-600"
                  >
                    <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    WhatsApp us
                  </a>
                </div>
              </form>
            </div>

            <div className="mt-6 border-t border-sky-100 pt-4">
              <p className="text-xs font-semibold leading-relaxed text-slate-500">
                ★ Corporate HQ: Unit 1004G, JMD Megapolis, Sohna Road, Sector 48, Gurugram
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}