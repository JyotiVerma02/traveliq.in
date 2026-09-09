import Link from "next/link";
import {
  ArrowRight,
  Check,
  Plane,
  TrainFront,
  Hotel,
  Bus,
  Globe2,
  ShieldCheck,
} from "lucide-react";

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

export default function Hero() {
  return (
    <section className="home-hero relative overflow-hidden">
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="home-hero__sun" />
        <div className="home-hero__rings" />
        <div className="home-hero__grain" />

        {/* Soft center light */}
        <div
          className="
            absolute
            left-1/2
            top-[18%]
            h-[520px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-white/70
            blur-[140px]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* =======================================================
            TRUST STRIP
        ======================================================= */}

        <div
          className="
            flex
            min-h-[52px]
            flex-col
            justify-center
            gap-2
            border-b
            border-[#10407A]/10
            py-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Left trust information */}
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <span className="relative flex h-2 w-2 shrink-0">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#EE5326]/30
                "
              />

              <span className="relative h-2 w-2 rounded-full bg-[#EE5326]" />
            </span>

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.2em]
                text-[#10407A]
                sm:text-[10px]
              "
            >
              IRCTC Principal Agent
            </span>

            <span className="h-3 w-px bg-[#10407A]/15" />

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.2em]
                text-[#687386]
                sm:text-[10px]
              "
            >
              IATA Accredited
            </span>
          </div>

          {/* Right trust information */}
          <p
            className="
              text-center
              text-[8px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#8993A1]
              sm:text-right
              sm:text-[9px]
            "
          >
            Powering travel businesses since 2014
          </p>
        </div>

        {/* =======================================================
            HERO CONTENT
        ======================================================= */}

        <div className="mx-auto max-w-[1280px] py-10 sm:py-14 lg:py-16">
          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-12
              xl:gap-16
            "
          >
            {/* ===================================================
                LEFT CONTENT
            =================================================== */}

            <div className="min-w-0 text-center lg:text-left">
              {/* Eyebrow */}
              <div
                className="
                  mb-5
                  flex
                  items-center
                  justify-center
                  gap-3
                  lg:justify-start
                "
              >
                <span className="h-[2px] w-8 rounded-full bg-[#EE5326] sm:w-10" />

                <span
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.27em]
                    text-[#EE5326]
                    sm:text-[10px]
                  "
                >
                  Your Travel Business Partner
                </span>
              </div>

              {/* =================================================
                  MAIN HEADING
                  EXACTLY 3 LINES ON DESKTOP
              ================================================= */}

              <h1
                className="
                  mx-auto
                  w-full
                  max-w-[900px]
                  text-[3.35rem]
                  font-black
                  leading-[0.94]
                  tracking-[-0.065em]
                  sm:text-[4.5rem]
                  md:text-[5.25rem]
                  lg:mx-0
                  lg:max-w-[850px]
                  lg:text-[5rem]
                  xl:max-w-[900px]
                  xl:text-[6rem]
                "
              >
                Grow Your
                <br />
                Travel Business
                <br />
                <span>With TravelIQ.</span>
              </h1>

              {/* Supporting heading */}
              <h2
                className="
                  mx-auto
                  mt-6
                  max-w-[650px]
                  text-base
                  font-extrabold
                  leading-6
                  tracking-[-0.025em]
                  text-[#10407A]
                  sm:text-lg
                  sm:leading-7
                  lg:mx-0
                  lg:text-xl
                "
              >
                Become an authorized IRCTC travel agent and unlock
                a complete B2B travel ecosystem.
              </h2>

              {/* Description */}
              <p
                className="
                  mx-auto
                  mt-3
                  max-w-[650px]
                  text-[13px]
                  leading-6
                  text-[#697589]
                  sm:text-sm
                  sm:leading-7
                  lg:mx-0
                  lg:text-[15px]
                "
              >
                Access railway reservations, flights, hotels, buses
                and holiday packages through one trusted platform
                designed to help your travel business grow.
              </p>

              {/* =================================================
                  CTA BUTTONS
              ================================================= */}

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  items-center
                  gap-3
                  sm:flex-row
                  lg:justify-start
                "
              >
                {/* PRIMARY CTA */}

                <Link
                  href="/irctc-agent-registration/"
                  className="hero-primary-btn group"
                >
                  <span>Become an Agent</span>

                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                {/* WHATSAPP CTA */}

                <a
                  href="https://wa.me/917835025025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-whatsapp-btn"
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-[#25D366]/10
                      text-[#25D366]
                    "
                  >
                    <span className="text-[11px]">●</span>
                  </span>

                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* =================================================
                  REASSURANCE
              ================================================= */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-5
                  gap-y-2
                  lg:justify-start
                "
              >
                {[
                  "Authorized Services",
                  "Professional Support",
                  "B2B Travel Network",
                ].map((item, index) => (
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
                          bg-[#10407A]/10
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
                        bg-[#FFF0E9]
                        text-[#EE5326]
                        shadow-[3px_3px_6px_rgba(238,83,38,0.06),-2px_-2px_5px_rgba(255,255,255,0.9)]
                      "
                    >
                      <Check size={11} strokeWidth={3} />
                    </span>

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.09em]
                        text-[#7A8493]
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================================================
                RIGHT CLAY DASHBOARD
            =================================================== */}

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[510px]
                lg:mx-0
                lg:ml-auto
              "
            >
              {/* Decorative orange circle */}

              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  border
                  border-[#EE5326]/10
                  bg-[#EE5326]/[0.025]
                "
              />

              {/* Decorative navy circle */}

              <div
                className="
                  absolute
                  -bottom-8
                  -left-8
                  h-24
                  w-24
                  rounded-full
                  bg-[#10407A]/[0.025]
                "
              />

              {/* =================================================
                  MAIN CLAY CARD
              ================================================= */}

              <div className="hero-clay-card relative p-4 sm:p-5">
                {/* =================================================
                    NAVY INNER PANEL
                ================================================= */}

                <div className="hero-clay-panel relative p-6 sm:p-7">
                  {/* Orange glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-48
                      w-48
                      rounded-full
                      bg-[#EE5326]/30
                      blur-2xl
                    "
                  />

                  {/* White glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-20
                      -left-20
                      h-48
                      w-48
                      rounded-full
                      bg-white/5
                      blur-2xl
                    "
                  />

                  {/* =================================================
                      PANEL HEADER
                  ================================================= */}

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p
                        className="
                          text-[8px]
                          font-black
                          uppercase
                          tracking-[0.24em]
                          text-white/55
                        "
                      >
                        TravelIQ
                      </p>

                      <p className="mt-1 text-sm font-black text-white">
                        B2B Travel Network
                      </p>
                    </div>

                    <div
                      className="
                        shrink-0
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        px-3
                        py-1.5
                        text-[7px]
                        font-black
                        uppercase
                        tracking-[0.13em]
                        text-white/80
                        backdrop-blur
                      "
                    >
                      Since 2014
                    </div>
                  </div>

                  {/* =================================================
                      BIG STAT
                  ================================================= */}

                  <div className="relative mt-10">
                    <div className="flex items-end gap-3">
                      <span
                        className="
                          text-[3.5rem]
                          font-black
                          leading-none
                          tracking-[-0.07em]
                          text-white
                          sm:text-[4rem]
                        "
                      >
                        20K+
                      </span>

                      <span
                        className="
                          mb-1.5
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-white/55
                        "
                      >
                        Agents
                      </span>
                    </div>

                    <p
                      className="
                        mt-3
                        max-w-[270px]
                        text-xs
                        leading-5
                        text-white/60
                      "
                    >
                      Trusted by travel professionals building
                      and growing their business.
                    </p>
                  </div>

                  {/* =================================================
                      PANEL BADGES
                  ================================================= */}

                  <div className="relative mt-7 flex flex-wrap gap-2">
                    <div
                      className="
                        rounded-full
                        bg-white/10
                        px-3
                        py-2
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.1em]
                        text-white/80
                      "
                    >
                      IRCTC Principal Agent
                    </div>

                    <div
                      className="
                        rounded-full
                        bg-[#EE5326]
                        px-3
                        py-2
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.1em]
                        text-white
                        shadow-[5px_5px_12px_rgba(0,0,0,0.12)]
                      "
                    >
                      IATA Accredited
                    </div>
                  </div>
                </div>

                {/* =================================================
                    SERVICES
                ================================================= */}

                <div className="mt-5">
                  {/* Section title */}

                  <div className="flex items-end justify-between px-2">
                    <div>
                      <p
                        className="
                          text-[8px]
                          font-black
                          uppercase
                          tracking-[0.2em]
                          text-[#EE5326]
                        "
                      >
                        One Platform
                      </p>

                      <h3
                        className="
                          mt-1
                          text-lg
                          font-black
                          tracking-[-0.04em]
                          text-[#0B1728]
                        "
                      >
                        Everything you need
                      </h3>
                    </div>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#FFF8F3]
                        text-[#EE5326]
                        shadow-[5px_5px_10px_rgba(16,64,122,0.08),-5px_-5px_10px_rgba(255,255,255,0.95)]
                      "
                    >
                      <ArrowRight size={15} />
                    </span>
                  </div>

                  {/* Service cards */}

                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    {services.map((service, index) => {
                      const Icon = service.icon;

                      return (
                        <div
                          key={service.title}
                          className={`hero-service-card group p-3 ${
                            index === services.length - 1
                              ? "col-span-2"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {/* Icon */}

                            <div className="hero-icon-clay h-9 w-9 shrink-0">
                              <Icon size={16} strokeWidth={2} />
                            </div>

                            {/* Text */}

                            <div className="min-w-0">
                              <p
                                className="
                                  text-[10px]
                                  font-black
                                  text-[#0B1728]
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
                                  text-[#8791A0]
                                "
                              >
                                {service.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING TRUST BADGE
              ================================================= */}

              <div
                className="
                  hero-trust-badge
                  absolute
                  -bottom-6
                  -left-3
                  px-4
                  py-3
                  sm:-left-6
                "
              >
                <div className="flex items-center gap-3">
                  {/* Shield icon */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#FFF0E9]
                      text-[#EE5326]
                      shadow-[inset_2px_2px_5px_rgba(238,83,38,0.04),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]
                    "
                  >
                    <ShieldCheck size={17} />
                  </div>

                  {/* Badge text */}

                  <div>
                    <p
                      className="
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#8993A1]
                      "
                    >
                      Trusted Partner
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[11px]
                        font-black
                        text-[#10407A]
                      "
                    >
                      Professional Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              STATS BAR
          ========================================================= */}

          <div className="hero-stats mt-16 p-3 sm:mt-20 sm:p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`hero-stat-box px-4 py-4 text-center sm:text-left ${
                    index === 1 ? "is-orange" : ""
                  }`}
                >
                  <p
                    className={`
                      text-2xl
                      font-black
                      tracking-[-0.05em]
                      ${
                        index === 1
                          ? "text-[#EE5326]"
                          : index === 2
                            ? "text-[#10407A]"
                            : "text-[#0B1728]"
                      }
                    `}
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-[#7A8493]
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}