export default function PartnerLogos() {
  const partners = [
    { name: "IRCTC", text: "IRCTC Official" },
    { name: "IATA", text: "IATA Accredited" },
    { name: "Air India", text: "Air India" },
    { name: "IndiGo", text: "IndiGo" },
    { name: "SpiceJet", text: "SpiceJet" },
    { name: "Vande Bharat", text: "Vande Bharat Express" },
  ];

  return (
    <section
      className="
        relative mx-3 overflow-hidden
        rounded-[28px]
        border border-white/[0.07]
        bg-[#0A1B32]
        py-6
        shadow-[-8px_-8px_20px_rgba(255,255,255,0.035),_12px_14px_28px_rgba(0,0,0,0.35)]
        sm:mx-5
        lg:mx-8
      "
    >
      {/* Soft background glow */}
      <div
        className="
          pointer-events-none absolute
          -left-32 top-1/2
          h-64 w-64
          -translate-y-1/2
          rounded-full
          bg-[#EE5326]/[0.045]
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-32 top-1/2
          h-64 w-64
          -translate-y-1/2
          rounded-full
          bg-[#10407A]/20
          blur-[100px]
        "
      />

      {/* Subtle inner highlight */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/[0.025]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-5 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#EE5326]/70" />

            <span className="text-[10px] font-medium text-[#EE5326]">
              Our Network
            </span>

            <span className="h-px w-7 bg-[#EE5326]/70" />
          </div>

          <h2 className="text-lg font-semibold text-white sm:text-xl">
            Trusted Travel Partners
          </h2>

          <p className="mt-1 text-xs text-white/45">
            Connected with trusted names across travel, aviation and railway.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="
                group relative flex min-h-[68px]
                items-center justify-center
                overflow-hidden
                rounded-[16px]
                border border-white/[0.06]
                bg-[#071428]
                px-3 py-3
                text-center

                shadow-[
                  inset_2px_2px_6px_rgba(255,255,255,0.02),
                  inset_-3px_-3px_8px_rgba(0,0,0,0.25)
                ]

                transition-all duration-300

                hover:-translate-y-0.5
                hover:border-[#EE5326]/20
                hover:bg-[#09192E]

                hover:shadow-[
                  -3px_-3px_8px_rgba(255,255,255,0.025),
                  5px_6px_12px_rgba(0,0,0,0.3)
                ]
              "
            >
              {/* Card orange glow */}
              <div
                className="
                  pointer-events-none absolute
                  -right-8 -top-8
                  h-20 w-20
                  rounded-full
                  bg-[#EE5326]/10
                  blur-2xl
                  opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              <div className="relative">
                {/* Number */}
                <div className="mb-1 text-[8px] font-medium text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Partner Name */}
                <div className="flex items-center justify-center gap-1.5">
                  <span
                    className="
                      h-1.5 w-1.5 shrink-0
                      rounded-full
                      bg-[#EE5326]
                      shadow-[0_0_8px_rgba(238,83,38,0.35)]
                      transition-transform duration-300
                      group-hover:scale-125
                    "
                  />

                  <span
                    className="
                      text-xs font-medium
                      text-white/85
                      transition-colors duration-300
                      group-hover:text-white
                      sm:text-sm
                    "
                  >
                    {partner.text}
                  </span>
                </div>

                {/* Partner Type */}
                <p className="mt-0.5 text-[9px] text-white/30">
                  {partner.name === "IRCTC" && "Official Partner"}
                  {partner.name === "IATA" && "Accredited"}
                  {partner.name === "Air India" && "Airline Partner"}
                  {partner.name === "IndiGo" && "Airline Partner"}
                  {partner.name === "SpiceJet" && "Airline Partner"}
                  {partner.name === "Vande Bharat" && "Railway"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <span
            className="
              h-1.5 w-1.5
              rounded-full
              bg-[#25D366]
              shadow-[0_0_8px_rgba(37,211,102,0.4)]
            "
          />

          <p className="text-[10px] text-white/35">
            Reliable connections across the travel ecosystem
          </p>
        </div>
      </div>
    </section>
  );
}