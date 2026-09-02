import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 w-full">
      {/* Full-width Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1920&q=80"
          alt="Travel India Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10407A]/80 to-[#EE5326]/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white shadow-xs">
            <span className="hero-live-dot bg-white" />
            <span className="!text-white">IRCTC Principal Agent Partner &amp; IATA Accredited</span>
          </div>

          <span className="text-xs font-semibold tracking-wider uppercase !text-white/80">
            Corporate HQ • Gurugram, India
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading & Feature Card */}
          <div className="flex flex-col justify-between lg:col-span-6 xl:col-span-5">
            <div>
              <h1 className="font-sans text-[3rem] sm:text-[4rem] lg:text-[4.6rem] font-extrabold tracking-tight !text-white leading-[1.02] drop-shadow-md">
                <span className="block hero-fade-up">Travel Agency</span>
                <span className="hero-fade-up inline-block !text-[#EE5326] drop-shadow-md">
                  in Gurgaon
                  <span className="hero-cursor bg-white" />
                </span>
              </h1>

              <p className="mt-4 text-lg sm:text-xl font-bold !text-white leading-snug hero-fade-up drop-shadow-sm">
                Know More to Become an IRCTC Travel Agent
              </p>

              <div className="mt-4 flex items-start gap-3 hero-fade-up">
                <span className="mt-3 block h-[2px] w-8 shrink-0 bg-[#EE5326]" />
                <p className="text-sm sm:text-base !text-white/90 leading-relaxed font-normal drop-shadow-sm">
                  Authorized IRCTC Principal Agent and IATA Accredited Travel Agency providing railway reservation, air tickets, hotel booking, bus tickets &amp; tour packages.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 hero-fade-up">
                <Link
                  href="/irctc-agent-registration/"
                  className="inline-flex items-center justify-center rounded-full bg-[#EE5326] px-7 py-3.5 text-xs sm:text-sm font-extrabold !text-white uppercase tracking-wider shadow-lg shadow-[#EE5326]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d7491d] hover:!text-white"
                >
                  Plans &amp; Pricing
                </Link>

                <a
                  href="https://wa.me/917835025025"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-bold !text-white shadow-xs transition-all duration-300 hover:bg-[#25D366] hover:border-[#25D366] hover:!text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.75.46 3.46 1.33 4.97L2 22l5.28-1.39a9.86 9.86 0 0 0 4.76 1.22h.01c5.45 0 9.89-4.44 9.89-9.9C21.94 6.44 17.5 2 12.04 2zm5.79 14.2c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.14.1-1.84-.12-.42-.13-.96-.31-1.65-.61-2.91-1.25-4.8-4.17-4.95-4.36-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.49.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.1.2-.15.32-.29.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.07 1.3 2.37 1.45.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.65-.15.27.1 1.69.8 1.98.95.29.15.49.22.56.34.07.12.07.71-.17 1.39z" />
                  </svg>
                  <span>WhatsApp Us</span>
                  <span className="hero-whatsapp-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Popular Destinations Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-8 hero-fade-up">
              {[
                { name: "Tarova", location: "Durrial", img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=200&q=80" },
                { name: "Manda Barak", location: "Mankermaria", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=200&q=80" },
                { name: "United Kingdom", location: "Gaarmatin", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=200&q=80" },
                { name: "China-Ran", location: "Destinations", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80" }
              ].map((dest, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative h-[60px] w-[90px] shrink-0 overflow-hidden rounded-[14px] border border-white/20 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Image src={dest.img} alt={dest.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[16px] font-bold !text-white drop-shadow-md leading-tight">
                      {dest.name}
                    </span>
                    <span className="text-[14px] font-normal !text-white/80 drop-shadow-sm leading-tight mt-0.5">
                      {dest.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column: Image & Plan a Trip Button */}
          <div className="relative flex flex-col items-center lg:col-span-6 xl:col-span-4">
         <div className="relative w-full aspect-[4/5] max-h-[540px] group">
  {/* Outer glow effect */}
  <div className="absolute -inset-4 bg-gradient-to-r from-[#EE5326]/20 via-[#10407A]/20 to-[#EE5326]/20 rounded-[44px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
  
  {/* Gradient border ring */}
  <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-[#EE5326] via-[#10407A] to-[#EE5326] p-[2px] animate-gradient-x">
    <div className="relative w-full h-full rounded-[38px] overflow-hidden">
      {/* Inner container with glass effect */}
      <div className="relative w-full h-full overflow-hidden rounded-[36px] border-2 border-white/20 shadow-2xl">
        
        {/* Main Image */}
        <Image
          src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80"
          alt="Santorini Travel Architecture"
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay - multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071f3d]/70 via-[#071f3d]/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071f3d]/10 via-transparent to-[#071f3d]/40 pointer-events-none" />
        
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Animated shimmer overlay */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

        {/* Bottom gradient glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#EE5326]/10 via-transparent to-transparent pointer-events-none" />

        {/* Floating Plan a trip button */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
          <Link
            href="/irctc-agent-registration/"
            className="group/btn inline-flex items-center gap-2 rounded-full bg-[#EE5326] px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-2xl shadow-[#EE5326]/40 transition-all duration-300 hover:scale-105 hover:bg-[#D9471D] hover:text-white"
            style={{ color: "#ffffff" }}
          >
            <span>Plan a trip</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "#ffffff" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Premium corner accents */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-2xl" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-2xl" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-2xl" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30 rounded-br-2xl" />

        {/* Decorative dot patterns */}
        <div className="absolute top-6 left-6 flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        </div>
        
        <div className="absolute bottom-6 right-6 flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>

        {/* Optional: Floating badge */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-block px-4 py-1.5 bg-black/30 backdrop-blur-md rounded-full text-[10px] font-bold text-white/80 uppercase tracking-wider border border-white/10">
            ✦ Featured Destination
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>

          {/* Right Column: Callback Request Form */}
          <div className="flex flex-col justify-between lg:col-span-12 xl:col-span-3">
            <div className="rounded-[32px] border border-[#10407A]/12 bg-white p-6 shadow-xl shadow-[#10407A]/8 backdrop-blur-md hero-card-raise">
              <div>
                <span className="inline-block rounded-full border border-[#EE5326]/25 bg-[#fff4ef] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#EE5326]">
                  Instant Callback
                </span>
                <h2 className="mt-2 text-xl font-extrabold leading-snug tracking-tight text-[#08090b]">
                  Simply request a callback to obtain Your IRCTC Rail ID
                </h2>
              </div>

              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="hero-name" className="mb-1 block text-xs font-bold text-[#10407A]">
                    Name
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-[#10407A]/15 bg-[#fff8f5] px-4 py-3.5 text-sm font-medium text-[#08090b] placeholder:text-[#10407A]/40 focus:border-[#EE5326] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#EE5326]/10 transition"
                  />
                </div>

                <div>
                  <label htmlFor="hero-phone" className="mb-1 block text-xs font-bold text-[#10407A]">
                    Phone number
                  </label>
                  <input
                    id="hero-phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-[#10407A]/15 bg-[#fff8f5] px-4 py-3.5 text-sm font-medium text-[#08090b] placeholder:text-[#10407A]/40 focus:border-[#EE5326] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#EE5326]/10 transition"
                  />
                </div>

                <div className="flex flex-col gap-2.5 pt-1">
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-full bg-[#10407A] py-3.5 text-center text-xs font-bold uppercase tracking-wider !text-white shadow-md shadow-[#10407A]/20 transition-all duration-300 hover:bg-[#0a3260] hover:-translate-y-0.5 hover:!text-white"
                  >
                    Submit
                  </button>

                  <a
                    href="https://wa.me/917835025025"
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#EE5326] bg-[#EE5326] py-3 text-center text-xs font-bold !text-white shadow-md transition duration-300 hover:bg-[#d7491d] hover:!text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.75.46 3.46 1.33 4.97L2 22l5.28-1.39a9.86 9.86 0 0 0 4.76 1.22h.01c5.45 0 9.89-4.44 9.89-9.9C21.94 6.44 17.5 2 12.04 2zm5.79 14.2c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.14.1-1.84-.12-.42-.13-.96-.31-1.65-.61-2.91-1.25-4.8-4.17-4.95-4.36-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.49.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.1.2-.15.32-.29.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.07 1.3 2.37 1.45.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.65-.15.27.1 1.69.8 1.98.95.29.15.49.22.56.34.07.12.07.71-.17 1.39z" />
                    </svg>
                    WhatsApp us
                  </a>
                </div>
              </form>
            </div>

            <div className="mt-6 border-t border-white/20 pt-4">
              <p className="text-xs font-semibold leading-relaxed !text-white/80 drop-shadow-sm">
                ★ Corporate HQ: Unit 1004G, JMD Megapolis, Sohna Road, Sector 48, Gurugram
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}