"use client";

import React, { useState } from "react";

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
      type: "Official Partner",
      badge: "Railway Partner",
      bg: "bg-gradient-to-br from-[#F4F8FF] via-white to-[#EBF3FF]",
      border: "border-[#1D5FA7]/25",
      typeColor: "text-[#1D5FA7]",
      hoverBorder: "hover:border-[#1D5FA7]",
      glow: "bg-[#1D5FA7]/15",
    },
    {
      name: "Air India",
      logo: "air-india",
      type: "Airline Partner",
      badge: "National Carrier",
      bg: "bg-gradient-to-br from-[#FFF5F6] via-white to-[#FFEBEF]",
      border: "border-[#D71920]/25",
      typeColor: "text-[#D71920]",
      hoverBorder: "hover:border-[#D71920]",
      glow: "bg-[#D71920]/15",
    },
    {
      name: "IndiGo",
      logo: "indigo",
      type: "Airline Partner",
      badge: "6E Fleet",
      bg: "bg-gradient-to-br from-[#F3F5FF] via-white to-[#E8ECFF]",
      border: "border-[#2B3990]/25",
      typeColor: "text-[#2B3990]",
      hoverBorder: "hover:border-[#2B3990]",
      glow: "bg-[#2B3990]/15",
    },
    {
      name: "SpiceJet",
      logo: "spicejet",
      type: "Airline Partner",
      badge: "Direct Routes",
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-7 lg:px-8">
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
            Trusted Travel Partners
          </h2>

          <p className="mx-auto mt-1.5 max-w-xl text-xs leading-5 text-[#071F3D]/65 sm:text-sm">
            Connected with trusted names across travel, aviation and railway.
          </p>
        </div>

        {/* PARTNER CARDS */}
        <div
          className="
            mx-auto
            grid
            max-w-6xl
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
                min-h-[135px]
                w-full
                flex-col
                items-center
                justify-between
                overflow-hidden
                rounded-[20px]
                border
                p-4
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

              {/* Main Logo Container filling full card width */}
              <div className="relative flex w-full flex-1 items-center justify-center py-2">
                <PartnerMark name={partner.name} logo={partner.logo} />
              </div>

              {/* Bottom Partner Type Label */}
              <div className="relative mt-1 flex w-full items-center justify-between border-t border-black/5 pt-2">
                <span className="text-[9px] font-semibold text-gray-500">
                  {partner.badge}
                </span>
                <p
                  className={`
                    text-[10px]
                    font-extrabold
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

        {/* TRUST LINE */}
        <div
          className="
            mx-auto
            mt-6
            flex
            w-fit
            items-center
            justify-center
            gap-2.5
            rounded-full
            border
            border-[#10407A]/10
            bg-white/80
            px-5
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
                h-2.5
                w-2.5
                rounded-full
                bg-[#25D366]
              "
            />
          </span>

          <p className="text-[11px] font-semibold text-[#0E3360]">
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

// Clean vector logos for fallback rendering
function PartnerLogoSvg({ logo }: { logo: string }) {
  switch (logo) {
    case "irctc":
      return (
        <svg viewBox="0 0 280 80" className="h-full w-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 8)">
            <circle cx="32" cy="32" r="30" fill="#003366"/>
            <circle cx="32" cy="32" r="24" fill="#FFFFFF"/>
            <path d="M32 14 C22 14 14 22 14 32 C14 42 22 50 32 50 C42 50 50 42 50 32 C50 22 42 14 32 14 Z" fill="#003366"/>
            <path d="M24 22 H40 V30 C40 35 36 38 32 38 C28 38 24 35 24 30 V22 Z" fill="#F37023"/>
            <path d="M28 24 H36 V28 H28 Z" fill="#FFFFFF"/>
            <circle cx="32" cy="43" r="2.5" fill="#FFFFFF"/>
          </g>
          <text x="82" y="46" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="32" fill="#003366" letterSpacing="2">IRCTC</text>
          <text x="83" y="60" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9.5" fill="#F37023" letterSpacing="1">OFFICIAL RAILWAY PARTNER</text>
        </svg>
      );
    case "air-india":
      return (
        <svg viewBox="0 0 280 80" className="h-full w-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 10)">
            <path d="M5 45 C15 15 45 5 55 25 C40 22 25 32 15 48 Z" fill="#ED1C24"/>
            <circle cx="38" cy="22" r="6" fill="#FFC20E"/>
            <path d="M20 48 C30 35 50 28 58 35 C45 38 32 45 20 48 Z" fill="#B3141A"/>
          </g>
          <text x="75" y="45" fontFamily="'Times New Roman', Georgia, serif" fontWeight="bold" fontSize="28" fill="#ED1C24" letterSpacing="0.5">AIR INDIA</text>
          <text x="76" y="60" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" fill="#B3141A" letterSpacing="2">AIRLINE PARTNER</text>
        </svg>
      );
    case "indigo":
      return (
        <svg viewBox="0 0 280 80" className="h-full w-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(12, 16)">
            <circle cx="8" cy="8" r="4.5" fill="#001B94" opacity="0.4"/>
            <circle cx="20" cy="8" r="4.5" fill="#001B94" opacity="0.6"/>
            <circle cx="32" cy="8" r="4.5" fill="#001B94" opacity="0.9"/>
            <circle cx="14" cy="22" r="4.5" fill="#001B94" opacity="0.6"/>
            <circle cx="26" cy="22" r="4.5" fill="#001B94" opacity="0.85"/>
            <circle cx="38" cy="22" r="4.5" fill="#001B94" opacity="1.0"/>
            <circle cx="20" cy="36" r="4.5" fill="#001B94" opacity="0.8"/>
            <circle cx="32" cy="36" r="4.5" fill="#001B94" opacity="0.95"/>
            <circle cx="44" cy="36" r="4.5" fill="#001B94" opacity="1.0"/>
          </g>
          <text x="72" y="48" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="34" fill="#001B94" letterSpacing="-0.5">IndiGo</text>
          <text x="73" y="62" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9" fill="#001B94" opacity="0.8" letterSpacing="1.5">6E AIRLINES</text>
        </svg>
      );
    case "spicejet":
      return (
        <svg viewBox="0 0 280 80" className="h-full w-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 14)">
            <circle cx="6" cy="10" r="3.5" fill="#E31E24"/>
            <circle cx="16" cy="10" r="3.5" fill="#E31E24"/>
            <circle cx="26" cy="10" r="3.5" fill="#E31E24"/>
            <circle cx="36" cy="10" r="3.5" fill="#FF9800"/>
            <circle cx="46" cy="10" r="3.5" fill="#FF9800"/>
            <circle cx="11" cy="22" r="3.5" fill="#E31E24"/>
            <circle cx="21" cy="22" r="3.5" fill="#E31E24"/>
            <circle cx="31" cy="22" r="3.5" fill="#FF9800"/>
            <circle cx="41" cy="22" r="3.5" fill="#FF9800"/>
            <circle cx="16" cy="34" r="3.5" fill="#E31E24"/>
            <circle cx="26" cy="34" r="3.5" fill="#E31E24"/>
            <circle cx="36" cy="34" r="3.5" fill="#E31E24"/>
          </g>
          <text x="68" y="47" fontFamily="system-ui, sans-serif" fontWeight="900" fontStyle="italic" fontSize="30" fill="#E31E24" letterSpacing="-0.5">SpiceJet</text>
          <text x="70" y="61" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5" fill="#C61A1F" letterSpacing="1.5">RED. HOT. SPICY.</text>
        </svg>
      );
    default:
      return null;
  }
}

function PartnerMark({ name, logo }: { name: string; logo: string }) {
  const [imgError, setImgError] = useState(false);
  const src = partnerLogoSources[logo];

  return (
    <div className="flex h-16 w-full items-center justify-center p-1.5">
      {!imgError && src ? (
        <img
          src={src}
          alt={`${name} official logo`}
          loading="lazy"
          onError={() => setImgError(true)}
          className="h-full w-full max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-[1.05]"
        />
      ) : (
        <PartnerLogoSvg logo={logo} />
      )}
    </div>
  );
}
