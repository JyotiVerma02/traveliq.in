import Link from "next/link";
import {
  ArrowRight,
  Check,
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
        min-h-[100dvh]
        lg:min-h-[calc(100svh+5rem)]
        lg:min-h-[calc(100dvh+5rem)]
        min-[1441px]:min-h-0
        min-[1441px]:h-auto
        bg-[#F5F9FC]
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
          max-w-[2300px]
          flex-1
          flex-col
          px-4
          pt-[64px]
          sm:px-6
          sm:pt-[72px]
          lg:px-10
          xl:px-[clamp(4rem,6vw,8rem)]
          xl:pt-[72px]
          min-[1441px]:pt-[84px]
          min-[1441px]:pb-10
        "
      >
        {/* ================================================
            CENTER HERO
        ================================================= */}
        <div
          className="
            flex
            min-h-0
            flex-none
            items-center
            justify-center
            py-5
            sm:py-6
            lg:items-start
            lg:pt-[clamp(2rem,4vh,4rem)]
            lg:pb-5
            2xl:pt-6
            lg:justify-start
            min-[1441px]:justify-start
            min-[1441px]:pt-6
            min-[1441px]:pb-2
          "
        >
          <div className="w-full max-w-[680px] text-center lg:mr-auto lg:max-w-[min(42vw,760px)] lg:text-left min-[1441px]:mr-auto min-[1441px]:max-w-[860px]">
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
                lg:justify-start
                min-[1441px]:mb-4
              "
            >
              <span className="h-[2px] w-7 bg-[#EE5326] sm:w-10 min-[1441px]:w-14" />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#10407A]
                  sm:text-[10px]
                  sm:tracking-[0.25em]
                  min-[1441px]:text-[12px]
                  min-[1441px]:tracking-[0.28em]
                "
              >
                Your Travel Business Partner
              </span>

              <span className="h-[2px] w-7 bg-[#EE5326] sm:w-10 min-[1441px]:w-14" />
            </div>

            {/* ================================================
                MAIN HEADING
            ================================================= */}
            <h1
              className="
                mx-auto
                min-[1441px]:mx-0
                max-w-[700px]
                lg:max-w-[680px]
                min-[1441px]:max-w-[860px]
                text-[clamp(2.1rem,4.6vw,6rem)]
                min-[1441px]:text-[58px]
                font-bold
                leading-[0.98]
                min-[1441px]:leading-[1.05]
                tracking-[-0.04em]
                text-[#10407A]
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
                  text-[#EE5326]
                  sm:mt-1.5
                  min-[1441px]:mt-2.5
                "
              >
                With TravelIQ.

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-1.5
                    left-1/2
                    h-[3.5px]
                    w-[42%]
                    -translate-x-1/2
                    rounded-full
                    bg-[#EE5326]
                    sm:-bottom-2
                    min-[1441px]:-bottom-3
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
                mt-3
                max-w-[650px]
                text-[14px]
                font-medium
                leading-6
                text-[#526174]
                sm:mt-5
                sm:text-[15px]
                sm:leading-7
                lg:mx-0
                lg:text-[clamp(1.05rem,1.15vw,1.5rem)]
                min-[1441px]:mt-6
                min-[1441px]:max-w-[800px]
                min-[1441px]:text-[20px]
                min-[1441px]:leading-[1.6]
                min-[1441px]:text-[#3B4A5C]
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
                lg:mx-0
                lg:justify-start
                min-[1441px]:mt-7
                min-[1441px]:gap-4
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
                  text-[12px]
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
                  sm:min-h-[46px]
                  sm:flex-none
                  sm:px-5
                  sm:text-[14px]
                  min-[1441px]:min-h-[54px]
                  min-[1441px]:px-7
                  min-[1441px]:text-[16px]
                  min-[1441px]:rounded-2xl
                "
              >
                <span className="!text-white">
                  Become an Agent
                </span>

                <ArrowRight
                  size={18}
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
                  border
                  border-[#25D366]
                  bg-white
                  px-4
                  text-[12px]
                  font-semibold
                  tracking-[0.04em]
                  !text-[#149447]
                  shadow-[0_8px_20px_rgba(37,211,102,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#F4FFF7]
                  hover:shadow-[0_12px_24px_rgba(37,211,102,0.18)]
                  active:translate-y-0
                  sm:min-h-[46px]
                  sm:flex-none
                  sm:px-5
                  sm:text-[14px]
                  min-[1441px]:min-h-[54px]
                  min-[1441px]:px-7
                  min-[1441px]:text-[16px]
                  min-[1441px]:rounded-2xl
                "
              >
                <WhatsAppIcon className="h-[19px] w-[19px] text-[#149447]" />

                <span className="!text-[#149447]">
                  WhatsApp Us
                </span>
              </a>
            </div>

            {/* ================================================
                REASSURANCE MOBILE
            ================================================= */}
            <div className="mt-3 grid grid-cols-3 gap-1.5 sm:hidden lg:hidden">
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
                    border-[#10407A]/10
                    bg-white/90
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
                      text-[#10407A]/85
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* STATS MOBILE */}
            <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#10407A]/10 bg-white/90 px-3 py-2 text-center shadow-[0_4px_14px_rgba(16,64,122,0.06)] backdrop-blur-sm"
                >
                  <p
                    className={`text-lg font-bold leading-tight tracking-[-0.04em] ${
                      index === 1 ? "text-[#EE5326]" : "text-[#10407A]"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#10407A]/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* ================================================
                REASSURANCE TABLET / DESKTOP
            ================================================= */}
            <div
              className="
                mt-4
                hidden
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2
                sm:flex
                lg:justify-start
                min-[1441px]:mt-7
                min-[1441px]:gap-x-4
              "
            >
              {reassurance.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-[#10407A]/10
                    bg-white/90
                    px-3
                    py-2
                    shadow-[0_4px_14px_rgba(16,64,122,0.06)]
                    backdrop-blur-sm
                    min-[1441px]:rounded-full
                    min-[1441px]:bg-white/95
                    min-[1441px]:px-5
                    min-[1441px]:py-2.5
                    min-[1441px]:border-[#EE5326]/20
                    min-[1441px]:shadow-[0_4px_16px_rgba(16,64,122,0.08)]
                  "
                >
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
                      min-[1441px]:h-5.5
                      min-[1441px]:w-5.5
                    "
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.11em]
                      text-[#10407A]/80
                      lg:text-[9px]
                      2xl:text-[11px]
                      min-[1441px]:text-[11px]
                      min-[1441px]:font-bold
                      min-[1441px]:text-[#10407A]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* STATS */}
            <div
              className="
                mt-5
                hidden
                w-full
                sm:block
                lg:max-w-[min(50vw,900px)]
                min-[1441px]:mr-auto
                min-[1441px]:max-w-[820px]
                min-[1441px]:mt-7
              "
            >
              <div className="grid grid-cols-4 gap-2 xl:gap-3 min-[1441px]:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="
                      rounded-xl
                      border
                      border-[#10407A]/10
                      bg-white/90
                      px-1.5
                      py-2
                      text-center
                      shadow-[0_4px_14px_rgba(16,64,122,0.06)]
                      backdrop-blur-sm
                      min-[1441px]:rounded-2xl
                      min-[1441px]:bg-white/95
                      min-[1441px]:py-4.5
                      min-[1441px]:px-5
                      min-[1441px]:border-[#10407A]/12
                      min-[1441px]:shadow-[0_8px_24px_rgba(16,64,122,0.10)]
                    "
                  >
                    <p
                      className={`text-xl font-bold tracking-[-0.04em] xl:text-2xl 2xl:text-3xl min-[1441px]:text-[32px] ${
                        index === 1 ? "text-[#EE5326]" : "text-[#10407A]"
                      }`}
                    >
                      {stat.value}
                    </p>

                    <p className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.15em] text-[#10407A]/65 xl:text-[8px] 2xl:text-[10px] min-[1441px]:text-[10px] min-[1441px]:tracking-[0.14em]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
