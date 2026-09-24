export default function PartnerLogos() {
  const partners = [
    {
      name: "IRCTC",
      text: "IRCTC Official",
      type: "Official Partner",

      // IRCTC blue
      bg: "bg-[#EAF3FF]",
      border: "border-[#1D5FA7]/25",
      dot: "bg-[#1D5FA7]",
      number: "text-[#1D5FA7]/55",
      typeColor: "text-[#1D5FA7]/75",
      hoverBorder: "hover:border-[#1D5FA7]/50",
      glow: "bg-[#1D5FA7]/10",
    },

    {
      name: "Air India",
      text: "Air India",
      type: "Airline Partner",

      // Air India red
      bg: "bg-[#FFF0F2]",
      border: "border-[#D71920]/20",
      dot: "bg-[#D71920]",
      number: "text-[#D71920]/50",
      typeColor: "text-[#B5161C]/70",
      hoverBorder: "hover:border-[#D71920]/45",
      glow: "bg-[#D71920]/10",
    },

    {
      name: "IndiGo",
      text: "IndiGo",
      type: "Airline Partner",

      // IndiGo blue
      bg: "bg-[#EEF1FF]",
      border: "border-[#2B3990]/20",
      dot: "bg-[#2B3990]",
      number: "text-[#2B3990]/50",
      typeColor: "text-[#2B3990]/70",
      hoverBorder: "hover:border-[#2B3990]/45",
      glow: "bg-[#2B3990]/10",
    },

    {
      name: "SpiceJet",
      text: "SpiceJet",
      type: "Airline Partner",

      // SpiceJet red
      bg: "bg-[#FFF1F1]",
      border: "border-[#E31E24]/20",
      dot: "bg-[#E31E24]",
      number: "text-[#E31E24]/50",
      typeColor: "text-[#C61A1F]/70",
      hoverBorder: "hover:border-[#E31E24]/45",
      glow: "bg-[#E31E24]/10",
    },

    {
      name: "Vande Bharat",
      text: "Vande Bharat Express",
      type: "Railway Partner",

      // Vande Bharat blue
      bg: "bg-[#EAF7FF]",
      border: "border-[#1674A8]/20",
      dot: "bg-[#1674A8]",
      number: "text-[#1674A8]/50",
      typeColor: "text-[#1674A8]/75",
      hoverBorder: "hover:border-[#1674A8]/45",
      glow: "bg-[#1674A8]/10",
    },
  ];

  return (
    <section
      className="
        relative
        mx-3
        mt-6
        overflow-hidden
        rounded-[24px]
        border
        border-[#10407A]/20
        bg-[#F1F6FC]
        py-7
        shadow-[0_12px_35px_rgba(7,31,61,0.10)]
        sm:mx-5
        sm:mt-8
        sm:py-8
        lg:mx-8
        lg:mt-10
      "
    >
      {/* Top accent */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-0
          top-0
          h-[3px]
          w-full
          bg-gradient-to-r
          from-[#10407A]
          via-[#EE5326]
          to-[#10407A]
        "
      />

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-[#10407A]/[0.07]
          blur-[90px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-28
          -right-20
          h-72
          w-72
          rounded-full
          bg-[#EE5326]/[0.07]
          blur-[100px]
        "
      />

      {/* Dot pattern */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:radial-gradient(#10407A_1px,transparent_1px)]
          [background-size:18px_18px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-7 lg:px-8">
        {/* =========================
            HEADING
        ========================== */}
        <div className="mb-6 text-center sm:mb-7">
          <div className="mb-2.5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#EE5326]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C4320A]">
              Our Network
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#EE5326]" />
          </div>

          <h2 className="text-xl font-bold tracking-[-0.02em] text-[#071F3D] sm:text-2xl">
            Trusted Travel Partners
          </h2>

          <p className="mx-auto mt-1.5 max-w-xl text-xs leading-5 text-[#071F3D]/65 sm:text-sm">
            Connected with trusted names across travel, aviation and railway.
          </p>
        </div>

        {/* =========================
            PARTNER CARDS
        ========================== */}
        <div
          className="
            mx-auto
            grid
            max-w-6xl
            grid-cols-2
            gap-2.5
            sm:grid-cols-3
            sm:gap-3
            lg:grid-cols-5
            lg:gap-3.5
          "
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`
                group
                relative
                flex
                min-h-[94px]
                items-center
                justify-center
                overflow-hidden
                rounded-[16px]
                border
                px-3
                py-4
                text-center
                shadow-[0_4px_14px_rgba(7,31,61,0.06)]
                transition-all
                duration-300

                ${partner.bg}
                ${partner.border}
                ${partner.hoverBorder}

                hover:-translate-y-1
                hover:shadow-[0_10px_24px_rgba(7,31,61,0.11)]
              `}
            >
              {/* Brand glow */}
              <div
                aria-hidden="true"
                className={`
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-24
                  w-24
                  rounded-full
                  opacity-60
                  blur-2xl
                  transition-all
                  duration-300
                  group-hover:opacity-100

                  ${partner.glow}
                `}
              />

              {/* Subtle white highlight */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-1/2
                  bg-gradient-to-b
                  from-white/35
                  to-transparent
                "
              />

              <div className="relative w-full">
                {/* Number */}
                <div
                  className={`
                    mb-1.5
                    text-[9px]
                    font-bold
                    tracking-[0.14em]

                    ${partner.number}
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Name */}
                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      shadow-[0_0_8px_rgba(0,0,0,0.12)]
                      transition-transform
                      duration-300
                      group-hover:scale-125

                      ${partner.dot}
                    `}
                  />

                  <span
                    className="
                      text-xs
                      font-bold
                      leading-5
                      text-[#071F3D]
                      sm:text-sm
                    "
                  >
                    {partner.text}
                  </span>
                </div>

                {/* Type */}
                <p
                  className={`
                    mt-1
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.06em]

                    ${partner.typeColor}
                  `}
                >
                  {partner.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            TRUST LINE
        ========================== */}
        <div
          className="
            mx-auto
            mt-5
            flex
            w-fit
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-[#10407A]/10
            bg-white/80
            px-4
            py-2
            shadow-sm
            backdrop-blur-sm
            sm:mt-6
          "
        >
          <span className="relative flex h-2 w-2">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-[#25D366]
                opacity-30
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2
                w-2
                rounded-full
                bg-[#25D366]
              "
            />
          </span>

          <p className="text-[10px] font-semibold text-[#0E3360] sm:text-[11px]">
            Reliable connections across the travel ecosystem
          </p>
        </div>
      </div>
    </section>
  );
}