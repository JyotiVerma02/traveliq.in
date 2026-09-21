import Link from "next/link";
import {
  ArrowRight,
  Bus,
  Check,
  Globe2,
  Hotel,
  Plane,
  Sparkles,
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
    <section className="relative isolate overflow-hidden">
      <HeroMedia />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* ===================================================
            TOP TRUST BAR
        ==================================================== */}
        <div
          className="
            flex
            min-h-[54px]
            flex-col
            justify-center
            gap-3
            border-b
            border-white/15
            py-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              sm:justify-start
            "
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="relative h-2 w-2 rounded-full bg-[#EE5326]" />
            </span>

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.20em]
                text-white
                sm:text-[9px]
              "
            >
              IRCTC Principal Agent
            </span>

            <span className="h-3 w-px bg-white/30" />

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.20em]
                text-white/75
                sm:text-[9px]
              "
            >
              Authorized B2B Partner
            </span>
          </div>

          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              sm:justify-end
            "
          >
            <Sparkles size={11} strokeWidth={2} className="text-[#EE5326]" />

            <p
              className="
                text-center
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white/65
                sm:text-right
                sm:text-[9px]
              "
            >
              Trusted travel solutions since 2014
            </p>
          </div>
        </div>

        {/* ===================================================
            CENTER HERO CONTENT
        ==================================================== */}
        <div
          className="
            flex
            min-h-[420px]
            items-center
            justify-center
            py-6
            sm:min-h-[600px]
            sm:py-12
            lg:min-h-[700px]
            lg:py-16
          "
        >
          <div
            className="
              w-full
              max-w-[900px]
              text-center
            "
          >
            {/* Kicker */}
            <div
              className="
                mb-4
                flex
                items-center
                justify-center
                gap-3
                sm:mb-6
              "
            >
              <span
                className="
                  h-[2px]
                  w-9
                  bg-[#EE5326]
                  sm:w-11
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-white
                  sm:text-[10px]
                "
              >
                Your Travel Business Partner
              </span>

              <span
                className="
                  h-[2px]
                  w-9
                  bg-[#EE5326]
                  sm:w-11
                "
              />
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================== */}
            <h1
              className="
                mx-auto
                max-w-[900px]
                text-[1.75rem]
                font-bold
                leading-[1.08]
                tracking-[-0.03em]
                text-white
                drop-shadow-[0_5px_24px_rgba(0,0,0,0.55)]
                xs:text-[2rem]
                sm:text-[4rem]
                sm:leading-[1.06]
                sm:tracking-[-0.035em]
                md:text-[4.5rem]
                lg:text-[5rem]
                xl:text-[5.35rem]
              "
            >
              <span className="block">Grow Your</span>

              <span className="block sm:inline">Travel Business</span>

              <span className="hidden sm:inline">
                <br />
              </span>

              <span className="relative mt-1 inline-block text-[#FF7045] sm:mt-0">
                With TravelIQ.
                <span
                  className="
                    absolute
                    -bottom-1.5
                    left-1/2
                    h-[3px]
                    w-[42%]
                    -translate-x-1/2
                    bg-[#EE5326]
                    sm:-bottom-2
                  "
                />
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-4
                max-w-[680px]
                text-[13px]
                font-medium
                leading-6
                text-white/85
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]
                sm:mt-7
                sm:text-base
                sm:leading-8
                lg:text-[17px]
              "
            >
              {/* Mobile: shorter, punchier copy */}
              <span className="sm:hidden">
                One trusted platform for railway, flights, hotels, buses and
                holidays — built for travel professionals.
              </span>
              {/* Desktop: full copy */}
              <span className="hidden sm:inline">
                Become an authorized IRCTC travel agent and access railway,
                flights, hotels, buses and holidays through one trusted B2B
                platform.
              </span>
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}
            <div
              className="
                mt-5
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-3
                sm:mt-8
                sm:w-auto
                sm:flex-row
              "
            >
              {/* Become an Agent */}
              <Link
                href="/irctc-agent-registration"
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[14px]
                  bg-[#C4320A]
                  px-7
                  text-[11px]
                  font-semibold
                  tracking-[0.055em]
                  !text-white
                  shadow-[0_12px_30px_rgba(196,50,10,0.30)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#A82907]
                  hover:shadow-[0_16px_35px_rgba(196,50,10,0.40)]
                  active:translate-y-0
                  sm:min-h-[54px]
                  sm:w-auto
                "
              >
                <span className="!text-white">Become an Agent</span>

                <ArrowRight
                  size={17}
                  strokeWidth={2.5}
                  className="
                    !text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-[14px]
                  border
                  border-white/35
                  bg-white/10
                  px-6
                  text-[11px]
                  font-semibold
                  tracking-[0.055em]
                  !text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/50
                  hover:bg-white/20
                  active:translate-y-0
                  sm:min-h-[54px]
                  sm:w-auto
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#25D366]
                  "
                >
                  <WhatsAppIcon className="h-[18px] w-[18px] text-white" />
                </span>

                <span className="!text-white">WhatsApp Us</span>
              </a>
            </div>

            {/* =================================================
                REASSURANCE
                Mobile: 3-col card grid with orange icon + label
                sm+: inline horizontal row
            ================================================== */}

            {/* Mobile grid */}
            <div className="mt-5 grid grid-cols-3 gap-2 sm:hidden">
              {reassurance.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/15
                    bg-white/8
                    px-2
                    py-3
                    backdrop-blur-sm
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EE5326]/20
                      text-[#FF7045]
                    "
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span
                    className="
                      text-center
                      text-[9px]
                      font-semibold
                      leading-tight
                      text-white/80
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop inline row */}
            <div
              className="
                mt-7
                hidden
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-3
                sm:flex
              "
            >
              {reassurance.map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  {index > 0 && (
                    <span
                      className="
                        mr-3
                        h-3
                        w-px
                        bg-white/25
                      "
                    />
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
                      bg-white/10
                      text-[#FF7045]
                      backdrop-blur-sm
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
                      text-white/70
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================
            SERVICES STRIP
            Mobile: 4-col compact icon + label tiles (first 4)
            sm+: 5-col full strip with text
        ==================================================== */}

        {/* Mobile — 4 icon tiles */}
        <div className="grid grid-cols-4 gap-2 border-t border-white/15 py-4 sm:hidden">
          {services.slice(0, 4).map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/15
                  bg-[#071F3D]/30
                  px-1
                  py-3
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
                    bg-white/10
                    text-[#FF7045]
                  "
                >
                  <Icon size={18} strokeWidth={2} />
                </div>
                <span className="text-[9px] font-semibold text-white">
                  {service.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Desktop — full 5-col strip */}
        <div
          className="
            hidden
            grid-cols-5
            gap-3
            border-t
            border-white/15
            py-5
            sm:grid
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
                  items-center
                  gap-3
                  border
                  border-white/15
                  bg-[#071F3D]/30
                  px-3
                  py-3
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-[#071F3D]/50
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    bg-white/10
                    text-[#FF7045]
                    transition-all
                    duration-300
                    group-hover:bg-[#EE5326]
                    group-hover:text-white
                  "
                >
                  <Icon size={16} strokeWidth={2} />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      text-white
                    "
                  >
                    {service.title}
                  </p>

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-[8px]
                      font-medium
                      text-white/70
                    "
                  >
                    {service.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================================================
            SCROLL TO EXPLORE — mobile only
        ==================================================== */}
        <div className="flex flex-col items-center gap-1.5 pb-4 pt-1 sm:hidden">
          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/50
            "
          >
            Scroll to explore
          </span>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            className="animate-bounce text-white/40"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* ===================================================
            STATS — hidden on mobile, visible on sm+
        ==================================================== */}
        <div
          className="
            mb-8
            hidden
            border-t
            border-white/15
            py-5
            sm:mb-10
            sm:block
            sm:py-6
          "
        >
          <div
            className="
              grid
              grid-cols-4
              gap-0
            "
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  text-left
                  ${index > 0 ? "border-l border-white/15 pl-8" : ""}
                `}
              >
                <p
                  className={`
                    text-3xl
                    font-bold
                    tracking-[-0.05em]
                    ${index === 1 ? "text-[#FF7045]" : "text-white"}
                  `}
                >
                  {stat.value}
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-white/65
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
