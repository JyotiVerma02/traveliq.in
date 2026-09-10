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
import { FaWhatsapp } from "react-icons/fa";

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
    value: "IATA",
    label: "Accredited",
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
    <section className="relative isolate overflow-hidden bg-[#071F3D]">
      {/* =====================================================
          VIDEO BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        >
          <source
            src="/traveliq_hero_slider.mp4"
            type="video/mp4"
          />
        </video>

        {/* Light overall overlay */}
        <div className="absolute inset-0 bg-[#071F3D]/18" />

        {/* Center readability overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#071F3D]/35
            via-[#071F3D]/60
            to-[#071F3D]/35
          "
        />

        {/* Slightly stronger center area */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(7,31,61,0.58)_0%,rgba(7,31,61,0.32)_38%,rgba(7,31,61,0.05)_72%)]
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[32%]
            bg-gradient-to-t
            from-[#071F3D]/85
            via-[#071F3D]/30
            to-transparent
          "
        />

        {/* Subtle orange glow */}
        <div
          className="
            absolute
            right-[5%]
            top-[18%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#EE5326]/8
            blur-[130px]
          "
        />
      </div>

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
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#EE5326]/60
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-[#EE5326]
                "
              />
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
              IATA Accredited
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
            <Sparkles
              size={11}
              strokeWidth={2}
              className="text-[#EE5326]"
            />

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
            min-h-[650px]
            items-center
            justify-center
            py-16
            sm:min-h-[680px]
            sm:py-20
            lg:min-h-[700px]
            lg:py-24
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
                mb-6
                flex
                items-center
                justify-center
                gap-3
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
                text-[3rem]
                font-bold
                leading-[1.04]
                tracking-[-0.035em]
                text-white
                drop-shadow-[0_5px_24px_rgba(0,0,0,0.55)]
                sm:text-[4rem]
                md:text-[4.5rem]
                lg:text-[5rem]
                xl:text-[5.35rem]
              "
            >
              Grow Your
              <br />

              Travel Business
              <br />

              <span className="relative inline-block text-[#FF7045]">
                With TravelIQ.

                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    h-[3px]
                    w-[42%]
                    -translate-x-1/2
                    bg-[#EE5326]
                  "
                />
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-7
                max-w-[680px]
                text-[14px]
                font-medium
                leading-7
                text-white/85
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]
                sm:text-base
                sm:leading-8
                lg:text-[17px]
              "
            >
              Become an authorized IRCTC travel agent and access
              railway, flights, hotels, buses and holidays through
              one trusted B2B platform.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}
            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              {/* Become an Agent */}
              <Link
                href="/irctc-agent-registration/"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[14px]
                  bg-[#EE5326]
                  px-7
                  text-[11px]
                  font-semibold
                  tracking-[0.055em]
                  !text-white
                  shadow-[0_12px_30px_rgba(238,83,38,0.30)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#D9471D]
                  hover:shadow-[0_16px_35px_rgba(238,83,38,0.40)]
                  active:translate-y-0
                "
              >
                <span className="!text-white">
                  Become an Agent
                </span>

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
                  min-h-[54px]
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
                  <FaWhatsapp
                    size={18}
                    className="text-white"
                  />
                </span>

                <span className="!text-white">
                  WhatsApp Us
                </span>
              </a>
            </div>

            {/* =================================================
                REASSURANCE
            ================================================== */}
            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-3
              "
            >
              {reassurance.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  {index > 0 && (
                    <span
                      className="
                        mr-3
                        hidden
                        h-3
                        w-px
                        bg-white/25
                        sm:block
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
                    <Check
                      size={10}
                      strokeWidth={3}
                    />
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
        ==================================================== */}
        <div
          className="
            grid
            grid-cols-2
            gap-2
            border-t
            border-white/15
            py-5
            sm:grid-cols-5
            sm:gap-3
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
                  <Icon
                    size={16}
                    strokeWidth={2}
                  />
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
                      text-white/50
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
            STATS
        ==================================================== */}
        <div
          className="
            mb-8
            border-t
            border-white/15
            py-5
            sm:mb-10
            sm:py-6
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-y-6
              sm:grid-cols-4
              sm:gap-0
            "
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  text-center
                  sm:text-left
                  ${
                    index > 0
                      ? "sm:border-l sm:border-white/15 sm:pl-8"
                      : ""
                  }
                `}
              >
                <p
                  className={`
                    text-2xl
                    font-bold
                    tracking-[-0.05em]
                    sm:text-3xl
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
                    mt-1
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-white/50
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