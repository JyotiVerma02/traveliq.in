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
        relative mx-3 mt-6 overflow-hidden
        rounded-[24px]
        border border-[#10407A]/10
        bg-white
        py-7
        shadow-[0_8px_30px_rgba(7,31,61,0.08)]
        sm:mx-5
        sm:mt-8
        lg:mx-8
        lg:mt-10
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
          bg-[#EE5326]/[0.05]
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
          bg-[#10407A]/[0.06]
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-6 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#EE5326]/70" />

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#EE5326]">
              Our Network
            </span>

            <span className="h-px w-7 bg-[#EE5326]/70" />
          </div>

          <h2 className="text-lg font-semibold text-[#071F3D] sm:text-xl">
            Trusted Travel Partners
          </h2>

          <p className="mt-1 text-xs text-[#071F3D]/50">
            Connected with trusted names across travel, aviation and railway.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="
                group relative flex min-h-[72px]
                items-center justify-center
                overflow-hidden
                rounded-[14px]
                border border-[#10407A]/10
                bg-[#F8FAFC]
                px-3 py-3
                text-center

                shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9),0_3px_10px_rgba(7,31,61,0.05)]

                transition-all duration-300

                hover:-translate-y-0.5
                hover:border-[#EE5326]/25
                hover:bg-white
                hover:shadow-[0_8px_18px_rgba(7,31,61,0.09)]
              "
            >
              {/* Orange glow */}
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
                <div className="mb-1 text-[8px] font-semibold text-[#10407A]/25">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Partner Name */}
                <div className="flex items-center justify-center gap-1.5">
                  <span
                    className="
                      h-1.5 w-1.5 shrink-0
                      rounded-full
                      bg-[#EE5326]
                      shadow-[0_0_7px_rgba(238,83,38,0.25)]
                      transition-transform duration-300
                      group-hover:scale-125
                    "
                  />

                  <span
                    className="
                      text-xs font-semibold
                      text-[#071F3D]/85
                      transition-colors duration-300
                      group-hover:text-[#071F3D]
                      sm:text-sm
                    "
                  >
                    {partner.text}
                  </span>
                </div>

                {/* Partner Type */}
                <p className="mt-0.5 text-[9px] font-medium text-[#10407A]/40">
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
        <div className="mt-5 flex items-center justify-center gap-2">
          <span
            className="
              h-1.5 w-1.5
              rounded-full
              bg-[#25D366]
              shadow-[0_0_7px_rgba(37,211,102,0.35)]
            "
          />

          <p className="text-[10px] font-medium text-[#071F3D]/40">
            Reliable connections across the travel ecosystem
          </p>
        </div>
      </div>
    </section>
  );
}