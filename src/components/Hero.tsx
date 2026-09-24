import Link from "next/link";
import {
  ArrowRight,
  Bus,
  Check,
  Globe2,
  Hotel,
  Plane,
  TrainFront,
} from "lucide-react";

import HeroMedia from "@/components/HeroMedia";
import { WhatsAppIcon } from "@/components/icons";

const stats = [
  {
    value: "2014",
    label: "Established",
  },
  {
    value: "20K+",
    label: "Travel Agents",
  },
  {
    value: "100%",
    label: "Verified Support",
  },
  {
    value: "B2B",
    label: "Travel Platform",
  },
];

const services = [
  {
    icon: TrainFront,
    title: "Railway",
    text: "IRCTC reservations",
  },
  {
    icon: Plane,
    title: "Flights",
    text: "Air ticket booking",
  },
  {
    icon: Hotel,
    title: "Hotels",
    text: "Hotel reservations",
  },
  {
    icon: Bus,
    title: "Bus",
    text: "Bus ticket booking",
  },
  {
    icon: Globe2,
    title: "Holidays",
    text: "Tour packages",
  },
];

const reassurance = [
  "Authorized Services",
  "Professional Support",
  "B2B Travel Network",
];

export default function Hero() {
  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-[100svh]
        overflow-hidden
      "
    >
      {/* ================================================
          BACKGROUND MEDIA
      ================================================= */}
      <HeroMedia />

      {/* ================================================
          HERO CONTENT WRAPPER
      ================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1500px]
          flex-1
          flex-col
          px-3
          pt-[80px]
          sm:px-5
          sm:pt-[86px]
          lg:px-8
          xl:pt-[90px]
        "
      >
        {/* ================================================
            CENTER HERO
        ================================================= */}
        <div
          className="
            flex
            min-h-0
            flex-1
            items-center
            justify-center
            py-3
            sm:py-4
            lg:py-5
          "
        >
          <div className="w-full max-w-[1050px] text-center">
            {/* KICKER */}
            <div
              className="
                mb-3
                flex
                items-center
                justify-center
                gap-2.5
                sm:mb-4
                sm:gap-3
              "
            >
              <span className="h-[2px] w-7 bg-[#EE5326] sm:w-10" />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white
                  sm:text-[10px]
                  sm:tracking-[0.25em]
                "
              >
                Your Travel Business Partner
              </span>

              <span className="h-[2px] w-7 bg-[#EE5326] sm:w-10" />
            </div>

            {/* ================================================
                MAIN HEADING
            ================================================= */}
            <h1
              className="
                mx-auto
                max-w-[1050px]
                text-[1.8rem]
                font-bold
                leading-[1.05]
                tracking-[-0.035em]
                text-white
                drop-shadow-[0_5px_24px_rgba(0,0,0,0.55)]
                xs:text-[2.1rem]
                sm:text-[3.15rem]
                md:text-[3.65rem]
                lg:text-[4.1rem]
                xl:text-[4.5rem]
              "
            >
              <span className="block">
                Grow Your Travel Business
              </span>

              <span
                className="
                  relative
                  mt-1
                  inline-block
                  text-[#FF7045]
                  sm:mt-1.5
                "
              >
                With TravelIQ.

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-1.5
                    left-1/2
                    h-[3px]
                    w-[42%]
                    -translate-x-1/2
                    rounded-full
                    bg-[#EE5326]
                    sm:-bottom-2
                  "
                />
              </span>
            </h1>

            {/* ================================================
                DESCRIPTION
            ================================================= */}
            <p
              className="
                mx-auto
                mt-4
                max-w-[720px]
                text-[12px]
                font-medium
                leading-5
                text-white/85
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]
                sm:mt-5
                sm:text-[14px]
                sm:leading-6
                lg:text-[15px]
              "
            >
              <span className="sm:hidden">
                One trusted platform for railway, flights, hotels, buses and
                holidays — built for travel professionals.
              </span>

              <span className="hidden sm:inline">
                Become an authorized IRCTC travel agent and access railway,
                flights, hotels, buses and holidays through one trusted B2B
                platform.
              </span>
            </p>

            {/* ================================================
                CTA BUTTONS
            ================================================= */}
            <div
              className="
                mx-auto
                mt-4
                flex
                w-full
                max-w-[430px]
                items-center
                justify-center
                gap-2.5
                sm:mt-5
                sm:w-auto
                sm:max-w-none
              "
            >
              {/* BECOME AGENT */}
              <Link
                href="/irctc-agent-registration"
                className="
                  group
                  inline-flex
                  min-h-[46px]
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#EE5326]
                  px-4
                  text-[10px]
                  font-semibold
                  tracking-[0.04em]
                  !text-white
                  shadow-[0_10px_25px_rgba(238,83,38,0.30)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#D9471D]
                  hover:shadow-[0_14px_30px_rgba(238,83,38,0.38)]
                  active:translate-y-0
                  sm:min-h-[50px]
                  sm:flex-none
                  sm:px-7
                  sm:text-[11px]
                "
              >
                <span className="!text-white">
                  Become an Agent
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="
                    !text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with TravelIQ on WhatsApp"
                className="
                  group
                  inline-flex
                  min-h-[46px]
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#25D366]
                  px-4
                  text-[10px]
                  font-semibold
                  tracking-[0.04em]
                  !text-white
                  shadow-[0_10px_25px_rgba(37,211,102,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#20BD5A]
                  hover:shadow-[0_14px_30px_rgba(37,211,102,0.28)]
                  active:translate-y-0
                  sm:min-h-[50px]
                  sm:flex-none
                  sm:px-6
                  sm:text-[11px]
                "
              >
                <WhatsAppIcon className="h-[17px] w-[17px] text-white" />

                <span className="!text-white">
                  WhatsApp Us
                </span>
              </a>
            </div>

            {/* ================================================
                REASSURANCE
                MOBILE
            ================================================= */}
            <div className="mt-4 grid grid-cols-3 gap-1.5 sm:hidden">
              {reassurance.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    min-w-0
                    flex-col
                    items-center
                    justify-center
                    gap-1.5
                    rounded-lg
                    border
                    border-white/15
                    bg-[#071F3D]/50
                    px-1
                    py-2
                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EE5326]
                      text-white
                    "
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>

                  <span
                    className="
                      text-center
                      text-[8px]
                      font-semibold
                      leading-tight
                      text-white/90
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* ================================================
                REASSURANCE
                TABLET / DESKTOP
            ================================================= */}
            <div
              className="
                mt-5
                hidden
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2
                sm:flex
              "
            >
              {reassurance.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  {index > 0 && (
                    <span className="mr-2 h-3 w-px bg-white/25" />
                  )}

                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EE5326]
                      text-white
                    "
                  >
                    <Check size={10} strokeWidth={3} />
                  </span>

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.11em]
                      text-white/80
                      lg:text-[9px]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================================================
            SERVICES STRIP
            MOBILE
        ================================================= */}
        <div
          className="
            grid
            shrink-0
            grid-cols-4
            gap-1.5
            border-t
            border-white/20
            py-2
            sm:hidden
          "
        >
          {services.slice(0, 4).map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  flex
                  min-w-0
                  flex-col
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  border
                  border-white/20
                  bg-[#071F3D]/75
                  px-1
                  py-2
                  backdrop-blur-md
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#EE5326]
                    text-white
                    shadow-[0_5px_15px_rgba(238,83,38,0.28)]
                  "
                >
                  <Icon size={18} strokeWidth={2.2} />
                </div>

                <span
                  className="
                    truncate
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  {service.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* ================================================
            SERVICES STRIP
            TABLET / DESKTOP
        ================================================= */}
        <div
          className="
            hidden
            shrink-0
            grid-cols-5
            gap-2.5
            border-t
            border-white/20
            py-2.5
            sm:grid
            lg:gap-3
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  flex
                  min-w-0
                  items-center
                  gap-3
                  rounded-lg
                  border
                  border-white/20
                  bg-[#071F3D]/70
                  px-3
                  py-2.5
                  shadow-[0_8px_24px_rgba(0,0,0,0.10)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#EE5326]/70
                  hover:bg-[#0A294F]/85
                "
              >
                {/* Orange icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#EE5326]
                    text-white
                    shadow-[0_6px_16px_rgba(238,83,38,0.28)]
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <Icon size={20} strokeWidth={2.2} />
                </div>

                <div className="min-w-0 text-left">
                  <p
                    className="
                      text-[12px]
                      font-bold
                      leading-4
                      text-white
                      lg:text-[13px]
                    "
                  >
                    {service.title}
                  </p>

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-[9px]
                      font-medium
                      text-white/70
                      lg:text-[10px]
                    "
                  >
                    {service.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================================================
            STATS
            DESKTOP ONLY

            Hidden below lg to make sure tablet/mobile
            hero remains comfortably inside viewport.
        ================================================= */}
        <div
          className="
            hidden
            shrink-0
            border-t
            border-white/15
            py-3
            lg:block
          "
        >
          <div className="grid grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  text-left
                  ${
                    index > 0
                      ? "border-l border-white/15 pl-6 lg:pl-8"
                      : ""
                  }
                `}
              >
                <p
                  className={`
                    text-xl
                    font-bold
                    tracking-[-0.04em]
                    xl:text-2xl
                    ${
                      index === 1
                        ? "text-[#FF7045]"
                        : "text-white"
                    }
                  `}
                >
                  {stat.value}
                </p>

                <p
                  className="
                    mt-0.5
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white/65
                    xl:text-[8px]
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
