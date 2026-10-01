import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import HeroMedia from "@/components/HeroMedia";
import { WhatsAppIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/site";

const stats = [
  { value: "2014", label: "Established" },
  { value: "Pan India", label: "Service Coverage" },
  { value: "B2B", label: "Travel Platform" },
];

const reassurance = [
  "Railway & IRCTC",
  "Agent Support",
  "B2B Services",
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[min(680px,calc(100svh-68px))] w-full overflow-hidden bg-[#F5F9FC] sm:min-h-[700px] lg:min-h-[720px]">
      <HeroMedia />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-center px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-14 2xl:px-16">
        <div className="mx-auto w-full max-w-[620px] text-center lg:mx-0 lg:mr-4 lg:max-w-[600px] lg:pr-4 lg:text-left xl:mr-5 xl:max-w-[650px] xl:pr-5 min-[1440px]:mr-6 min-[1440px]:max-w-[700px] min-[1440px]:pr-6 min-[1600px]:max-w-[760px] min-[1600px]:pr-8 min-[1920px]:max-w-[820px] min-[1920px]:pr-10 min-[2560px]:max-w-[880px] min-[2560px]:pr-12">
          <div className="mb-3 flex items-center justify-center gap-2 sm:mb-4 sm:gap-3 lg:justify-start">
            <span className="h-[2px] w-7 shrink-0 bg-[#EE5326] sm:w-10" />
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#10407A] min-[360px]:tracking-[0.16em] sm:text-[10px] sm:tracking-[0.22em]">
              Services for Travel Professionals
            </span>
            <span className="h-[2px] w-7 shrink-0 bg-[#EE5326] sm:w-10" />
          </div>

          <h1 className="w-full text-[clamp(2.25rem,8vw,2.9rem)] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[clamp(3.1rem,7vw,3.9rem)] lg:text-[clamp(2.65rem,2.45vw,3.6rem)] xl:text-[clamp(3rem,2.25vw,4rem)] min-[1440px]:text-[clamp(3.5rem,2.55vw,4.5rem)] min-[1600px]:text-[clamp(3.8rem,2.4vw,4.9rem)] min-[1920px]:text-[clamp(4.2rem,2.2vw,5.2rem)] min-[2560px]:text-[clamp(4.6rem,1.9vw,5.6rem)]">
            <span className="block whitespace-nowrap text-[#10407A]">Grow Your Travel Business</span>
            <span className="relative mt-1 inline-block whitespace-nowrap text-[#EE5326] sm:mt-1.5">
              With TravelIQ.
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 left-1/2 h-[3px] w-[42%] -translate-x-1/2 rounded-full bg-[#EE5326] sm:-bottom-2"
              />
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[620px] text-[14px] font-medium leading-6 text-[#526174] sm:mt-5 sm:text-[15px] sm:leading-7 lg:mx-0 lg:text-[1.02rem] xl:text-[1.08rem] min-[1440px]:text-[1.12rem] min-[1440px]:leading-7 min-[1600px]:text-[1.18rem] min-[1600px]:leading-8 min-[1920px]:text-[1.24rem] min-[2560px]:text-[1.32rem] min-[2560px]:leading-[2rem]">
            Access railway, flight, hotel, bus and holiday services through a B2B platform designed for travel professionals. IRCTC agent onboarding and registration support is available through TravelIQ.
          </p>
          <div className="mx-auto mt-5 flex w-full max-w-[460px] flex-col gap-2.5 min-[425px]:flex-row sm:mt-6 lg:mx-0 lg:justify-start min-[1440px]:mt-6 min-[1440px]:max-w-[500px] min-[1920px]:mt-7 min-[1920px]:max-w-[540px]">
            <Link
              href="/irctc-agent-registration" prefetch={false}
                className="group inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#C4320A] px-3 text-[13px] font-semibold !text-white shadow-[0_10px_25px_rgba(238,83,38,0.24)] transition-[transform,color,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#A82907] hover:shadow-[0_14px_30px_rgba(238,83,38,0.32)] min-[425px]:px-3.5 sm:min-h-12 sm:flex-none sm:px-5 sm:text-sm min-[1440px]:min-h-[3rem] min-[1440px]:px-5 min-[1440px]:text-[0.95rem] min-[1920px]:min-h-[3.25rem] min-[1920px]:px-6 min-[1920px]:text-[1rem] min-[2560px]:min-h-[3.5rem] min-[2560px]:px-7 min-[2560px]:text-[1.05rem]"
            >
              <span className="!text-white">Become an Agent</span>
              <ArrowRight size={18} strokeWidth={2.5} className="shrink-0 !text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with TravelIQ on WhatsApp"
              className="group inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#117A3B] bg-[#117A3B] px-3 text-[13px] font-semibold !text-white shadow-[0_8px_20px_rgba(37,211,102,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B7138] hover:bg-[#0B7138] hover:shadow-[0_12px_24px_rgba(37,211,102,0.3)] min-[425px]:px-3.5 sm:min-h-12 sm:flex-none sm:px-5 sm:text-sm min-[1440px]:min-h-[3rem] min-[1440px]:px-5 min-[1440px]:text-[0.95rem] min-[1920px]:min-h-[3.25rem] min-[1920px]:px-6 min-[1920px]:text-[1rem] min-[2560px]:min-h-[3.5rem] min-[2560px]:px-7 min-[2560px]:text-[1.05rem]"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 !text-white" />
              <span className="!text-white">WhatsApp Us</span>
            </a>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:flex sm:flex-wrap sm:gap-2.5 lg:gap-3 min-[1440px]:mt-5 min-[1440px]:gap-3 min-[1920px]:mt-6 min-[2560px]:gap-3.5">
            {reassurance.map((item) => (
              <div
                key={item}
                className="flex min-h-[68px] min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#10407A]/10 bg-white/90 px-1.5 py-2 shadow-[0_4px_14px_rgba(16,64,122,0.06)] backdrop-blur-sm sm:min-h-10 sm:flex-row sm:gap-2 sm:px-3 sm:py-2 lg:px-3.5 min-[1440px]:min-h-[4.2rem] min-[1440px]:px-3.5 min-[1440px]:py-2.5 min-[1920px]:min-h-[4.75rem] min-[2560px]:min-h-[5.1rem]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EE5326] text-white">
                  <Check size={11} strokeWidth={3} />
                </span>
                <span className="text-center text-[10px] font-semibold leading-tight text-[#10407A] sm:text-[10px] sm:uppercase sm:tracking-[0.08em] lg:text-[11px] min-[1440px]:text-[10.5px] min-[1920px]:text-[11px] min-[2560px]:text-[12px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3 lg:mt-5 lg:grid-cols-4 min-[1440px]:mt-4 min-[1440px]:gap-3 min-[1920px]:mt-5 min-[2560px]:gap-3.5">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex min-h-[66px] flex-col items-center justify-center rounded-xl border border-[#10407A]/10 bg-white/90 px-2 py-2 text-center shadow-[0_4px_14px_rgba(16,64,122,0.06)] backdrop-blur-sm sm:min-h-[72px] sm:rounded-2xl sm:px-3 min-[1440px]:min-h-[74px] min-[1920px]:min-h-[80px] min-[2560px]:min-h-[86px]"
              >
                <p className={`text-xl font-bold leading-tight tracking-[-0.04em] sm:text-2xl min-[1440px]:text-[1.7rem] min-[1600px]:text-[1.9rem] min-[1920px]:text-[2.15rem] min-[2560px]:text-[2.4rem] ${index === 1 ? "text-[#EE5326]" : "text-[#10407A]"}`}>
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#10407A]/75 sm:text-[10px] sm:tracking-[0.1em] min-[1440px]:text-[10px] min-[1920px]:text-[10.5px] min-[2560px]:text-[11px]">
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
