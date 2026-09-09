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
    <section className="relative overflow-hidden border-b border-[#10407A]/10 bg-[#FFF8F3] py-20 lg:py-28">
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Orange glow */}
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#EE5326]/[0.045]
            blur-[120px]
          "
        />

        {/* Navy glow */}
        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#10407A]/[0.035]
            blur-[120px]
          "
        />

        {/* Center soft light */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[550px]
            w-[800px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/70
            blur-[130px]
          "
        />

        {/* Small orange glow */}
        <div
          className="
            absolute
            left-[20%]
            top-[35%]
            h-32
            w-32
            rounded-full
            bg-[#EE5326]/[0.025]
            blur-3xl
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <div
          className="
            grid
            items-end
            gap-8
            border-b
            border-[#10407A]/10
            pb-10
            lg:grid-cols-[1fr_auto]
          "
        >
          {/* LEFT HEADER */}

          <div className="max-w-3xl">
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#EE5326]/15
                bg-[#FFF0E9]
                px-4
                py-2
                text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                text-[#EE5326]
                shadow-[4px_4px_10px_rgba(238,83,38,0.06),-4px_-4px_10px_rgba(255,255,255,0.95)]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />

              Agent Experiences
            </div>

            {/* Heading */}

            <h2
              className="
                mt-5
                max-w-3xl
                text-4xl
                font-black
                leading-[1.02]
                tracking-[-0.055em]
                text-[#0B1728]
                sm:text-5xl
                lg:text-[52px]
              "
            >
              Trusted by{" "}
              <span className="text-[#EE5326]">
                travel professionals.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                font-medium
                leading-7
                text-[#697589]
                sm:text-[15px]
              "
            >
              Real experiences from travel agents who trust TravelIQ to
              support their business and deliver seamless travel solutions.
            </p>
          </div>

          {/* =====================================================
              RATING SUMMARY
          ===================================================== */}

          <div
            className="
              flex
              w-fit
              items-center
              gap-4
              rounded-[22px]
              border
              border-white
              bg-[#FFF8F3]
              px-5
              py-4
              shadow-[7px_7px_16px_rgba(16,64,122,0.08),-6px_-6px_14px_rgba(255,255,255,0.95)]
            "
          >
            {/* Rating */}

            <div>
              <div className="flex items-center gap-2">
                <span
                  className="
                    text-2xl
                    font-black
                    tracking-tight
                    text-[#EE5326]
                  "
                >
                  4.9
                </span>

                <span className="text-[11px] font-bold text-[#697589]">
                  /5
                </span>
              </div>

              <div className="mt-1 flex items-center gap-1">
                <span className="text-[11px] tracking-[0.08em] text-[#EE5326]">
                  ★★★★★
                </span>
              </div>

              <p
                className="
                  mt-1
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-[#8993A1]
                "
              >
                Agent Rating
              </p>
            </div>

            {/* Divider */}

            <div className="h-12 w-px bg-[#10407A]/10" />

            {/* Network */}

            <div>
              <p
                className="
                  text-2xl
                  font-black
                  tracking-tight
                  text-[#10407A]
                "
              >
                20K+
              </p>

              <p
                className="
                  mt-1
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-[#8993A1]
                "
              >
                Agent Network
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            TESTIMONIAL GRID
        ========================================================= */}

        <div
          className="
            mt-12
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="
                group
                relative
                flex
                min-h-[410px]
                flex-col
                justify-between
                overflow-hidden
                rounded-[30px]
                border
                border-white
                bg-[#FFF8F3]
                p-6
                shadow-[10px_10px_24px_rgba(16,64,122,0.10),-8px_-8px_20px_rgba(255,255,255,0.96)]
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:shadow-[14px_14px_30px_rgba(16,64,122,0.13),-10px_-10px_24px_rgba(255,255,255,0.98)]
              "
            >
              {/* =================================================
                  ORANGE CORNER ACCENT
              ================================================= */}

              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-20
                  w-20
                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    h-20
                    w-20
                    rotate-45
                    bg-[#EE5326]
                    opacity-90
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* =================================================
                  TOP AREA
              ================================================= */}

              <div>
                {/* Number + Rating */}

                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#FFF0E9]
                      text-[9px]
                      font-black
                      text-[#EE5326]
                      shadow-[inset_2px_2px_5px_rgba(238,83,38,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div
                    className="
                      rounded-full
                      bg-white/80
                      px-3
                      py-1.5
                      shadow-[3px_3px_7px_rgba(16,64,122,0.06),-3px_-3px_7px_rgba(255,255,255,0.95)]
                    "
                  >
                    <span className="text-[10px] tracking-[0.08em] text-[#EE5326]">
                      {testimonial.rating}
                    </span>
                  </div>
                </div>

                {/* Quote */}

                <div className="relative mt-8">
                  <span
                    className="
                      pointer-events-none
                      absolute
                      -left-2
                      -top-8
                      font-serif
                      text-[80px]
                      font-black
                      leading-none
                      text-[#EE5326]/[0.08]
                    "
                  >
                    “
                  </span>

                  <p
                    className="
                      relative
                      z-10
                      text-[14px]
                      font-medium
                      leading-[1.8]
                      text-[#526174]
                    "
                  >
                    {testimonial.message}
                  </p>
                </div>
              </div>

              {/* =================================================
                  BOTTOM PROFILE
              ================================================= */}

              <div className="mt-10">
                {/* Divider */}

                <div
                  className="
                    mb-5
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-[#EE5326]/25
                    via-[#10407A]/10
                    to-transparent
                  "
                />

                <div className="flex items-center justify-between gap-3">
                  {/* Profile */}

                  <div className="flex min-w-0 items-center gap-3">
                    {/* Avatar */}

                    <div
                      className="
                        relative
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white
                        bg-[#FFF0E9]
                        shadow-[5px_5px_10px_rgba(238,83,38,0.08),-4px_-4px_9px_rgba(255,255,255,0.95)]
                      "
                    >
                      <span
                        className="
                          text-sm
                          font-black
                          text-[#EE5326]
                        "
                      >
                        {testimonial.name.charAt(0)}
                      </span>

                      {/* Verified */}

                      <span
                        className="
                          absolute
                          -bottom-1
                          -right-1
                          flex
                          h-4
                          w-4
                          items-center
                          justify-center
                          rounded-full
                          border-2
                          border-[#FFF8F3]
                          bg-[#10407A]
                          text-[7px]
                          font-black
                          text-white
                          shadow-sm
                        "
                      >
                        ✓
                      </span>
                    </div>

                    {/* Name + Role */}

                    <div className="min-w-0">
                      <h3
                        className="
                          truncate
                          text-[13px]
                          font-black
                          text-[#0B1728]
                        "
                      >
                        {testimonial.name}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.14em]
                          text-[#8993A1]
                        "
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Accent */}

                  <div
                    className="
                      h-8
                      w-1
                      shrink-0
                      rounded-full
                      bg-[#EE5326]
                      opacity-70
                      transition-all
                      duration-300
                      group-hover:h-10
                      group-hover:opacity-100
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  HOVER BOTTOM ACCENT
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  bg-[#EE5326]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>

        {/* =========================================================
            BOTTOM TRUST STRIP
        ========================================================= */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            rounded-[22px]
            border
            border-white
            bg-[#FFF8F3]
            px-5
            py-4
            shadow-[6px_6px_14px_rgba(16,64,122,0.06),-5px_-5px_12px_rgba(255,255,255,0.95)]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Trust message */}

          <div className="flex items-center gap-3">
            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#10407A]
                text-xs
                font-black
                text-white
                shadow-[4px_4px_8px_rgba(16,64,122,0.12),-3px_-3px_7px_rgba(255,255,255,0.9)]
              "
            >
              ✓
            </span>

            <p className="text-xs font-medium text-[#687386]">
              Trusted by travel professionals across India and beyond.
            </p>
          </div>

          {/* Network */}

          <div
            className="
              flex
              items-center
              gap-3
              rounded-full
              bg-[#FFF0E9]
              px-4
              py-2
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.18em]
                text-[#10407A]
              "
            >
              TravelIQ Agent Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}