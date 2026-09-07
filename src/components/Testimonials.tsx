const testimonials = [
  {
    name: "Rishabh Kumar",
    role: "Entrepreneur",
    rating: "★★★★★",
    message:
      "Wow... what an experience. Excellent arrangements, a nice hotel, and the serene atmosphere of Bali. Our client made this statement when he traveled here last week. THANK YOU.",
  },
  {
    name: "Reenu Sharma",
    role: "Manager",
    rating: "★★★★★",
    message:
      "Thanks to the team's excellent planning, we were able to enjoy the trip as a ladies group at a slower pace. Everything ran smoothly during our trip to Everest. Highly recommend TravelIQ.",
  },
  {
    name: "Rohit Sharma",
    role: "Digital Marketer",
    rating: "★★★★★",
    message:
      "Singapore is a famous destination as it is clean, safe, green and well equipped with amazing tourist attractions. We appreciate TravelIQ for providing a high-quality travel experience.",
  },
  {
    name: "Danvendra Sharma",
    role: "Manager",
    rating: "★★★★★",
    message:
      "It was a well-planned, excellent trip to Amritsar and Dharamshala. Additionally, it was an excellent value in terms of travel. Travel-friendly, with awesome moments to cherish along the way!",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F5] py-20 lg:py-28">
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Orange ambient glow */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#EE5326]/[0.045] blur-[120px]" />

        {/* Navy ambient glow */}
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#10407A]/[0.035] blur-[120px]" />

        {/* Subtle center light */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <div className="grid items-end gap-8 border-b border-[#10407A]/10 pb-10 lg:grid-cols-[1fr_auto]">
          <div>
            {/* Small label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#EE5326]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#EE5326]">
                Agent Experiences
              </span>
            </div>

            {/* Heading */}
           <h2 className="max-w-3xl text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-[#10407A] sm:text-4xl lg:text-[48px]">
  Trusted by{" "}
  <span className="text-[#EE5326]">travel professionals.</span>
</h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#687386] sm:text-base">
              Real experiences from travel agents who trust TravelIQ to support
              their business and deliver seamless travel solutions.
            </p>
          </div>

          {/* Right information */}
          <div className="flex items-center gap-5 lg:pb-1">
            <div>
              <p className="text-2xl font-bold tracking-tight text-[#EE5326]">
                4.9/5
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7A8493]">
                Agent Rating
              </p>
            </div>

            <div className="h-10 w-px bg-[#10407A]/15" />

            <div>
              <p className="text-2xl font-bold tracking-tight text-[#10407A]">
                20K+
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7A8493]">
                Agent Network
              </p>
            </div>
          </div>
        </div>
        {/* =========================================================
            TESTIMONIAL GRID
        ========================================================= */}
    
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, index) => (
            <article
              key={t.name}
              className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden border border-[#10407A]/10 bg-white p-7 shadow-[0_10px_40px_rgba(16,64,122,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-[#EE5326]/25 hover:shadow-[0_18px_50px_rgba(16,64,122,0.10)]"
            >
              {/* =====================================================
          PREMIUM CORNER ACCENT
      ===================================================== */}
              <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
                <div className="absolute right-[-32px] top-[-32px] h-16 w-16 rotate-45 bg-[#EE5326]" />
              </div>

              {/* =====================================================
          TOP META
      ===================================================== */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#10407A]/40">
                  
                  </span>

                  <div className="flex items-center gap-1">
                    <span className="text-[12px] tracking-[0.12em] text-[#EE5326]">
                      ★★★★★
                    </span>
                  </div>
                </div>

                {/* =================================================
            QUOTE
        ================================================= */}
                <div className="relative mt-8">
                  <span className="absolute -left-1 -top-7 font-serif text-[76px] leading-none text-[#EE5326]/10">
                    “
                  </span>

                  <p className="relative z-10 text-[14px] font-medium leading-[1.8] text-[#526174]">
                    {t.message}
                  </p>
                </div>
              </div>

              {/* =====================================================
          BOTTOM PROFILE
      ===================================================== */}
              <div className="mt-10">
                <div className="mb-5 h-px w-full bg-gradient-to-r from-[#EE5326]/25 via-[#10407A]/10 to-transparent" />

                <div className="flex items-center justify-between">
                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-11 w-11 items-center justify-center border border-[#EE5326]/20 bg-[#FFF6F1]">
                      <span className="text-sm font-bold text-[#EE5326]">
                        {t.name.charAt(0)}
                      </span>

                      {/* Small verified dot */}
                      <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center border-2 border-white bg-[#10407A] text-[7px] font-bold text-white">
                        ✓
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[13px] font-bold text-[#0B1728]">
                        {t.name}
                      </h3>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#8A94A3]">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {/* Orange detail */}
                  <div className="h-7 w-[2px] bg-[#EE5326]" />
                </div>
              </div>

              {/* =====================================================
          HOVER BOTTOM ACCENT
      ===================================================== */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#EE5326] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      
        {/* =========================================================
            BOTTOM TRUST STRIP
        ========================================================= */}
        <div className="mt-8 flex flex-col gap-5 border-t border-[#10407A]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center bg-[#EE5326] text-xs font-bold text-white">
              ✓
            </span>

            <p className="text-xs font-medium text-[#687386]">
              Trusted by travel professionals across India and beyond.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#10407A]">
              TravelIQ Agent Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
