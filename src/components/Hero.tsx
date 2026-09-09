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
  Sparkles,
  ArrowUpRight,
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
    <section className="home-hero relative overflow-hidden">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="home-hero__sun" />
        <div className="home-hero__rings" />
        <div className="home-hero__grain" />

        {/* Main soft light */}
        <div
          className="
            absolute
            left-1/2
            top-[8%]
            h-[600px]
            w-[1100px]
            -translate-x-1/2
            rounded-full
            bg-white/80
            blur-[150px]
          "
        />

        {/* Orange atmosphere */}
        <div
          className="
            absolute
            -right-48
            top-16
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#EE5326]/[0.055]
            blur-[120px]
          "
        />

        {/* Navy atmosphere */}
        <div
          className="
            absolute
            -left-48
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#10407A]/[0.035]
            blur-[120px]
          "
        />

        {/* Small orange glow */}
        <div
          className="
            absolute
            right-[25%]
            top-[42%]
            h-24
            w-24
            rounded-full
            bg-[#EE5326]/[0.04]
            blur-3xl
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =======================================================
            TRUST STRIP
        ======================================================= */}

        <div
          className="
            flex
            min-h-[54px]
            flex-col
            justify-center
            gap-3
            border-b
            border-[#10407A]/10
            py-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Trust indicators */}

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
                  bg-[#EE5326]/30
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
                text-[#10407A]
                sm:text-[9px]
              "
            >
              IRCTC Principal Agent
            </span>

            <span
              className="
                h-3
                w-px
                bg-[#10407A]/15
              "
            />

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.20em]
                text-[#687386]
                sm:text-[9px]
              "
            >
              IATA Accredited
            </span>
          </div>

          {/* Right message */}

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
                text-[#8993A1]
                sm:text-right
                sm:text-[9px]
              "
            >
              Trusted travel solutions since 2014
            </p>
          </div>
        </div>

        {/* =======================================================
            HERO CONTENT
        ======================================================= */}

        <div
          className="
            mx-auto
            max-w-[1280px]
            py-12
            sm:py-16
            lg:py-20
            xl:py-24
          "
        >
          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[1.08fr_0.92fr]
              lg:gap-14
              xl:gap-20
            "
          >
            {/* ===================================================
                LEFT CONTENT
            =================================================== */}

            <div
              className="
                min-w-0
                text-center
                lg:text-left
              "
            >
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
                <span
                  className="
                    h-[2px]
                    w-8
                    rounded-full
                    bg-[#EE5326]
                    sm:w-10
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[#EE5326]
                    sm:text-[10px]
                  "
                >
                  Your Travel Business Partner
                </span>
              </div>

              {/* Main heading */}

              <h1
                className="
                  mx-auto
                  max-w-[900px]
                  text-[3.35rem]
                  font-bold
                  leading-[1.1]
                  tracking-[-0.025em]
                  text-[#0B1728]
                  sm:text-[4.35rem]
                  md:text-[4.75rem]
                  lg:mx-0
                  lg:text-[4.6rem]
                  xl:text-[5.7rem]
                "
              >
                Grow Your
                <br />
                Travel Business
                <br />

                <span className="relative inline-block text-[#EE5326]">
                  With TravelIQ.

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[3px]
                      w-[42%]
                      rounded-full
                      bg-[#EE5326]/25
                    "
                  />
                </span>
              </h1>

              {/* Supporting statement */}

              <p
                className="
                  mx-auto
                  mt-7
                  max-w-[650px]
                  text-[15px]
                  font-medium
                  leading-7
                  tracking-[0.015em]
                  text-[#10407A]
                  sm:text-base
                  lg:mx-0
                  lg:text-[17px]
                  lg:leading-8
                "
              >
                Become an authorized IRCTC travel agent and access
                railway, flights, hotels, buses and holidays through
                one trusted B2B platform.
              </p>

              {/* =================================================
                  CTA BUTTONS
              ================================================= */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  items-center
                  gap-3
                  sm:flex-row
                  lg:justify-start
                "
              >
                {/* Primary CTA */}

                <Link
                  href="/irctc-agent-registration/"
                  className="
                    group
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    gap-3
                    rounded-[17px]
                    border
                    border-white/50
                    bg-[#EE5326]
                    px-7
                    text-[11px]
                    font-semibold
                    tracking-[0.055em]
                    !text-white
                    shadow-[8px_10px_22px_rgba(238,83,38,0.22),-5px_-5px_12px_rgba(255,255,255,0.8)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#D9471D]
                    hover:shadow-[10px_13px_26px_rgba(238,83,38,0.27),-5px_-5px_12px_rgba(255,255,255,0.85)]
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

                {/* =================================================
                    WHATSAPP CTA
                ================================================= */}

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
                    rounded-[17px]
                    border
                    border-[#25D366]/40
                    bg-[#25D366]
                    px-6
                    text-[11px]
                    font-semibold
                    tracking-[0.055em]
                    !text-white
                    shadow-[8px_10px_22px_rgba(37,211,102,0.22),-5px_-5px_12px_rgba(255,255,255,0.8)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#1DA851]
                    hover:shadow-[10px_13px_26px_rgba(37,211,102,0.28),-5px_-5px_12px_rgba(255,255,255,0.85)]
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
                      bg-white/15
                      text-white
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <FaWhatsapp
                      size={18}
                      className="text-white"
                    />
                  </span>

                  <span
                    className="
                      tracking-[0.055em]
                      !text-white
                    "
                  >
                    WhatsApp Us
                  </span>
                </a>
              </div>

              {/* =================================================
                  REASSURANCE
              ================================================= */}

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-5
                  gap-y-3
                  lg:justify-start
                "
              >
                {reassurance.map((item, index) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                    "
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
                RIGHT SIDE
            =================================================== */}

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[500px]
                lg:mx-0
                lg:ml-auto
              "
            >
              {/* Decorative orange rings */}

              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  h-32
                  w-32
                  rounded-full
                  border
                  border-[#EE5326]/10
                  bg-[#EE5326]/[0.025]
                "
              />

              <div
                className="
                  absolute
                  -right-2
                  -top-2
                  h-16
                  w-16
                  rounded-full
                  border
                  border-[#EE5326]/10
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

              {/* Main card */}

              <div
                className="
                  relative
                  rounded-[32px]
                  border
                  border-white/90
                  bg-white/55
                  p-3.5
                  shadow-[18px_22px_50px_rgba(16,64,122,0.13),-12px_-12px_32px_rgba(255,255,255,0.96)]
                  backdrop-blur-xl
                  sm:p-4
                "
              >
                {/* Premium navy panel */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[27px]
                    bg-[#10407A]
                    p-6
                    sm:p-7
                  "
                >
                  {/* Orange glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-72
                      w-72
                      rounded-full
                      bg-[#EE5326]/25
                      blur-[75px]
                    "
                  />

                  {/* White atmosphere */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-100px]
                      left-[-100px]
                      h-56
                      w-56
                      rounded-full
                      bg-white/[0.035]
                      blur-[70px]
                    "
                  />

                  {/* Inner border */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-2
                      rounded-[23px]
                      border
                      border-white/[0.06]
                    "
                  />

                  {/* Card header */}

                  <div
                    className="
                      relative
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#EE5326]
                          "
                        />

                        <p
                          className="
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-white/45
                          "
                        >
                          TravelIQ
                        </p>
                      </div>

                      <p
                        className="
                          mt-1.5
                          text-base
                          font-bold
                          tracking-[-0.005em]
                          text-white
                        "
                      >
                        B2B Travel Network
                      </p>
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        px-3
                        py-1.5
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-white/75
                        backdrop-blur
                      "
                    >
                      Since 2014
                    </span>
                  </div>

                  {/* Main stat */}

                  <div className="relative mt-12">
                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-white/40
                      "
                    >
                      Trusted network
                    </p>

                    <div
                      className="
                        mt-2
                        flex
                        items-end
                        gap-3
                      "
                    >
                      <span
                        className="
                          text-[4rem]
                          font-bold
                          leading-none
                          tracking-[-0.055em]
                          text-white
                          sm:text-[4.5rem]
                        "
                      >
                        20K+
                      </span>

                      <span
                        className="
                          mb-1.5
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-white/50
                        "
                      >
                        Agents
                      </span>
                    </div>

                    <p
                      className="
                        mt-4
                        max-w-[300px]
                        text-[12px]
                        font-medium
                        leading-5
                        tracking-[0.01em]
                        text-white/55
                      "
                    >
                      A growing network of travel professionals
                      building their business with TravelIQ.
                    </p>
                  </div>

                  {/* Accreditation badges */}

                  <div
                    className="
                      relative
                      mt-8
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        px-3
                        py-2
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-white/80
                      "
                    >
                      IRCTC Principal Agent
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-[#EE5326]
                        px-3
                        py-2
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-white
                        shadow-[5px_5px_14px_rgba(0,0,0,0.15)]
                      "
                    >
                      IATA Accredited
                    </span>
                  </div>
                </div>

                {/* =================================================
                    SERVICES PANEL
                ================================================= */}

                <div className="px-1 pb-1 pt-5">
                  {/* Services header */}

                  <div
                    className="
                      flex
                      items-end
                      justify-between
                      px-2
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.22em]
                          text-[#EE5326]
                        "
                      >
                        One Platform
                      </p>

                      <h3
                        className="
                          mt-1
                          text-lg
                          font-bold
                          tracking-[-0.025em]
                          text-[#0B1728]
                        "
                      >
                        Everything you need
                      </h3>
                    </div>

                    <div
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
                      <ArrowRight
                        size={15}
                        strokeWidth={2.2}
                      />
                    </div>
                  </div>

                  {/* Services grid */}

                  <div
                    className="
                      mt-4
                      grid
                      grid-cols-2
                      gap-2.5
                    "
                  >
                    {services.map((service, index) => {
                      const Icon = service.icon;

                      return (
                        <div
                          key={service.title}
                          className={`
                            group
                            rounded-[18px]
                            border
                            border-white/80
                            bg-[#FFF8F3]
                            p-3
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-white
                            hover:shadow-[7px_9px_16px_rgba(16,64,122,0.08),-5px_-5px_10px_rgba(255,255,255,0.95)]
                            ${
                              index === services.length - 1
                                ? "col-span-2"
                                : ""
                            }
                          `}
                        >
                          <div
                            className="
                              flex
                              items-center
                              gap-3
                            "
                          >
                            {/* Icon */}

                            <div
                              className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-[12px]
                                bg-white
                                text-[#EE5326]
                                shadow-[4px_5px_9px_rgba(16,64,122,0.07),-3px_-3px_8px_rgba(255,255,255,0.95)]
                                transition-all
                                duration-300
                                group-hover:bg-[#FFF0E9]
                              "
                            >
                              <Icon
                                size={16}
                                strokeWidth={2}
                              />
                            </div>

                            {/* Text */}

                            <div className="min-w-0">
                              <p
                                className="
                                  text-[10px]
                                  font-semibold
                                  tracking-[0.02em]
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
                                  tracking-[0.015em]
                                  text-[#8791A0]
                                "
                              >
                                {service.text}
                              </p>
                            </div>

                            {/* Arrow */}

                            <ArrowUpRight
                              size={12}
                              className="
                                ml-auto
                                shrink-0
                                text-[#10407A]/25
                                opacity-0
                                transition-all
                                duration-300
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                                group-hover:text-[#EE5326]
                                group-hover:opacity-100
                              "
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* =================================================
                  SMALL TRUST LABEL
              ================================================= */}

              <div
                className="
                  absolute
                  -bottom-5
                  -left-2
                  rounded-[18px]
                  border
                  border-white/80
                  bg-white/95
                  px-3
                  py-2.5
                  shadow-[0_18px_45px_rgba(16,64,122,0.12)]
                  backdrop-blur
                  sm:-left-5
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2.5
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#FFF0E9]
                      text-[#EE5326]
                    "
                  >
                    <ShieldCheck
                      size={16}
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#8993A1]
                      "
                    >
                      Built for
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[10px]
                        font-bold
                        tracking-[0.01em]
                        text-[#10407A]
                      "
                    >
                      Travel Professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              STATS BAR
          ========================================================= */}

          <div
            className="
              mt-16
              rounded-[26px]
              border
              border-white/90
              bg-white/55
              p-2.5
              shadow-[12px_15px_35px_rgba(16,64,122,0.08),-8px_-8px_25px_rgba(255,255,255,0.95)]
              backdrop-blur-xl
              sm:mt-20
              sm:p-3
            "
          >
            <div
              className="
                grid
                grid-cols-2
                gap-2
                sm:grid-cols-4
              "
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    group
                    rounded-[20px]
                    px-4
                    py-4
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    sm:px-5
                    sm:py-5
                    sm:text-left
                    ${
                      index === 1
                        ? `
                          bg-[#FFF0E9]
                          shadow-[inset_3px_3px_8px_rgba(238,83,38,0.04),inset_-3px_-3px_8px_rgba(255,255,255,0.9)]
                        `
                        : `
                          hover:bg-white/80
                        `
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
                      font-semibold
                      uppercase
                      tracking-[0.17em]
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