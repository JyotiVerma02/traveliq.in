import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  type: string;
  badge: string;
  bg: string;
  border: string;
  typeColor: string;
  hoverBorder: string;
  glow: string;
}

export default function PartnerLogos() {
  const partners: Partner[] = [
    {
      name: "IRCTC",
      logo: "irctc",
      type: "Railway Services",
      badge: "IRCTC agent workflows",
      bg: "bg-gradient-to-br from-[#F4F8FF] via-white to-[#EBF3FF]",
      border: "border-[#1D5FA7]/25",
      typeColor: "text-[#1D5FA7]",
      hoverBorder: "hover:border-[#1D5FA7]",
      glow: "bg-[#1D5FA7]/15",
    },
    {
      name: "Air India",
      logo: "air-india",
      type: "Airline Services",
      badge: "Flight booking options",
      bg: "bg-gradient-to-br from-[#FFF5F6] via-white to-[#FFEBEF]",
      border: "border-[#D71920]/25",
      typeColor: "text-[#D71920]",
      hoverBorder: "hover:border-[#D71920]",
      glow: "bg-[#D71920]/15",
    },
    {
      name: "IndiGo",
      logo: "indigo",
      type: "Airline Services",
      badge: "Flight booking options",
      bg: "bg-gradient-to-br from-[#F3F5FF] via-white to-[#E8ECFF]",
      border: "border-[#2B3990]/25",
      typeColor: "text-[#2B3990]",
      hoverBorder: "hover:border-[#2B3990]",
      glow: "bg-[#2B3990]/15",
    },
    {
      name: "SpiceJet",
      logo: "spicejet",
      type: "Airline Services",
      badge: "Flight booking options",
      bg: "bg-gradient-to-br from-[#FFF4F4] via-white to-[#FFE8E8]",
      border: "border-[#E31E24]/25",
      typeColor: "text-[#E31E24]",
      hoverBorder: "hover:border-[#E31E24]",
      glow: "bg-[#E31E24]/15",
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
      {/* Top accent line */}
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

      <div className="tiq-container relative">
        {/* HEADING */}
        <div className="mb-6 text-center sm:mb-7">
          <div className="mb-2.5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#EE5326]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C4320A]">
              Our Network
            </span>
            <span className="h-[2px] w-8 rounded-full bg-[#EE5326]" />
          </div>

          <h2 className="text-xl font-bold tracking-[-0.02em] text-[#071F3D] sm:text-2xl">
            Travel Services Across Leading Networks
          </h2>

          <p className="mx-auto mt-1.5 max-w-xl text-xs leading-5 text-[#071F3D]/65 sm:text-sm">
            Railway and flight services accessible through TravelIQ.
          </p>
        </div>

        {/* PARTNER CARDS */}
        <div
          className="
            mx-auto
            grid
            max-w-full
            grid-cols-2
            gap-3
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-4
          "
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`
                group
                relative
                flex
                min-h-[158px]
                w-full
                flex-col
                items-center
                justify-between
                overflow-hidden
                rounded-[22px]
                border
                px-4
                py-4
                text-center
                shadow-[0_4px_16px_rgba(7,31,61,0.06)]
                transition-all
                duration-300

                ${partner.bg}
                ${partner.border}
                ${partner.hoverBorder}

                hover:-translate-y-1.5
                hover:shadow-[0_12px_28px_rgba(7,31,61,0.14)]
              `}
            >
              {/* Brand glow on hover */}
              <div
                aria-hidden="true"
                className={`
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-28
                  w-28
                  rounded-full
                  opacity-40
                  blur-2xl
                  transition-all
                  duration-300
                  group-hover:opacity-100

                  ${partner.glow}
                `}
              />

              {/* Subtle top glare highlight */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-1/2
                  bg-gradient-to-b
                  from-white/60
                  to-transparent
                "
              />

              {/* Partner logo */}
              <div className="relative flex w-full flex-1 items-center justify-center py-1">
                <PartnerMark name={partner.name} logo={partner.logo} />
              </div>

              {/* Partner details */}
              <div className="relative mt-2 flex w-full flex-col items-center justify-center gap-1.5 border-t border-[#10407A]/10 pt-2.5 text-center">
                <span className="text-[10px] font-medium leading-tight text-[#526174] sm:text-[11px]">
                  {partner.badge}
                </span>
                <p
                  className={`
                    rounded-full
                    border border-[#10407A]/10
                    bg-white/75
                    px-3
                    py-1
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    leading-tight
                    text-center
                    ${partner.typeColor}
                    sm:text-[10px]
                  `}
                >
                  {partner.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST LINE */}
        <div
          className="
            mx-auto
            mt-6
            flex
            w-fit
            max-w-full
            items-center
            justify-center
            gap-2.5
            rounded-full
            border
            border-[#10407A]/10
            bg-white/80
            px-3
            py-2
            shadow-sm
            backdrop-blur-sm
          "
        >
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                motion-safe:animate-ping
                rounded-full
                bg-[#25D366]
                opacity-30
              "
            />
            <span
              className="
                relative
                inline-flex
                h-2.5
                w-2.5
                rounded-full
                bg-[#25D366]
              "
            />
          </span>

          <p className="text-center text-[10px] font-semibold leading-4 text-[#0E3360] sm:text-[11px]">
            Reliable connections across the travel ecosystem
          </p>
        </div>
      </div>
    </section>
  );
}

const partnerLogoSources: Record<string, string> = {
  irctc: "/partners/irctc.svg",
  "air-india": "/partners/air-india.svg",
  indigo: "/partners/indigo.svg",
  spicejet: "/partners/spicejet.svg",
};

function PartnerMark({ name, logo }: { name: string; logo: string }) {
  const src = partnerLogoSources[logo];

  return (
    <div className="relative flex h-[68px] w-full items-center justify-center px-2 sm:h-[76px]">
      {src && (
        <Image
          src={src}
          alt={`${name} logo`}
          width={260}
          height={80}
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 260px"
          className="h-auto max-h-[64px] w-full max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:max-h-[70px] sm:max-w-[230px]"
        />
      )}
    </div>
  );
}
