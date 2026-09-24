"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  [
    "Air Tickets",
    "Travel IQ is offering the cheapest fares for all domestic & International air tickets.",
    "/pages/services/online-air-ticket-booking",
    "/images/services/air-tickets.webp",
  ],
  [
    "Bus Tickets",
    "TravelIQ provides easy online bus tickets for comfortable bus and train travel.",
    "/pages/services/bus-ticket-booking",
    "/images/services/bus-tickets.webp",
  ],
  [
    "Hotel Booking",
    "You can get the latest deals and offers on hotel bookings all over the world.",
    "/pages/services/online-hotel-booking",
    "/images/services/hotel-booking.webp",
  ],
  [
    "IRCTC Domestic Packages",
    "Book Branded IRCTC Domestic tour packages and earn commission.",
    "/pages/services/irctc-domestic-packages",
    "/images/services/irctc-domestic-packages.webp",
  ],
  [
    "Tour Packages",
    "Best tour packages for domestic and international holidays.",
    "/pages/services/irctc-tour-packages",
    "/images/services/tour-packages.webp",
  ],
  [
    "IRCTC Agency",
    "IRCTC Agent Registration in very affordable price. OTP and DC Based Login Authentication.",
    "/irctc-agent-registration",
    "/images/services/railway-reservations.webp",
  ],
] as const;

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -380 : 380;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#F4F7FB]">
      <div className="relative mx-auto max-w-[1500px] bg-[#F4F7FB] px-0 py-12 sm:py-14 lg:py-16">
        {/* Section Header with Left/Right Controls */}
        <div className="flex flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:items-end sm:px-8 lg:px-12">
          <Reveal className="w-full max-w-2xl text-center sm:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C4320A]">
              Our Services
            </p>
            <h2 className="mt-3 whitespace-nowrap text-[clamp(0.95rem,4.8vw,3.75rem)] font-bold tracking-[-0.055em] text-[#071F3D]">
              Best travel services in{" "}
              <span className="text-[#C4320A]">India</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5A6A80]">
              Air tickets, railway reservations, hotels, buses, tour packages and
              visa assistance — arranged with care.
            </p>
          </Reveal>

          {/* Carousel Control Buttons */}
          <Reveal className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#10407A]/15
                bg-white
                text-[#10407A]
                shadow-sm
                transition-all
                duration-300
                hover:border-[#EE5326]
                hover:bg-[#EE5326]
                hover:text-white
                hover:shadow-md
                active:scale-95
              "
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>

            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#10407A]/15
                bg-white
                text-[#10407A]
                shadow-sm
                transition-all
                duration-300
                hover:border-[#EE5326]
                hover:bg-[#EE5326]
                hover:text-white
                hover:shadow-md
                active:scale-95
              "
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </Reveal>
        </div>

        {/* Cards Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="
            mt-12
            flex
            w-full
            snap-x
            snap-mandatory
            gap-6
            overflow-x-auto
            px-5
            pb-3
            pt-2
            scrollbar-none
            sm:px-8
            lg:px-12
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overscrollBehaviorX: "contain",
            touchAction: "pan-x pan-y",
            scrollBehavior: "smooth",
          }}
        >
          {services.map(([title, description, href, image], index) => (
            <Reveal
              key={title}
              delay={Math.min(index, 4) * 0.08}
              direction="right"
              distance={24}
              className="flex h-[460px] w-[280px] shrink-0 snap-start xs:w-[320px] sm:w-[360px] lg:w-[380px]"
            >
              <Link
                href={href}
                className="
                  group
                  flex
                  h-full
                  w-full
                  flex-col
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#10407A]/15
                  bg-white
                  shadow-none
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#EE5326]/30
                  hover:shadow-[0_28px_60px_rgba(16,64,122,0.12)]
                "
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-[#EEF4FA]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    loading="lazy"
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 479px) 280px, (max-width: 639px) 320px, (max-width: 1023px) 360px, 380px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/65 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                  <span className="absolute bottom-4 left-5 text-xs font-bold tracking-[0.18em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card Content (Equalized Flex Heights) */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-2.5 flex items-center gap-3">
                    <span className="h-[2px] w-7 bg-[#EE5326] transition-all duration-300 group-hover:w-11" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#526174]">
                      Travel Service
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#10407A] transition-colors duration-300 group-hover:text-[#EE5326] sm:text-2xl">
                    {title}
                  </h3>

                  <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-[#526174] sm:text-base sm:leading-7">
                    {description}
                  </p>

                  {/* Bottom Action Footer (Pushed to bottom) */}
                  <div className="mt-auto flex items-center justify-between border-t border-[#10407A]/10 pt-4">
                    <span className="text-sm font-bold text-[#10407A] transition-colors group-hover:text-[#EE5326]">
                      Explore Service
                    </span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#EE5326]/30
                        text-[#EE5326]
                        transition-all
                        duration-300
                        group-hover:bg-[#EE5326]
                        group-hover:text-white
                        group-hover:shadow-md
                      "
                    >
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Services section action */}
        <div className="mx-5 flex justify-center bg-[#F4F7FB] pt-9 sm:mx-8 sm:pt-11 lg:mx-12 lg:pt-13">
          <Link
            href="/our-services"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#EE5326] px-5 text-[10px] font-bold uppercase tracking-[0.12em] !text-white shadow-[0_8px_20px_rgba(238,83,38,0.18)] transition-colors hover:bg-[#D9471D] sm:text-[11px]"
          >
            <span className="!text-white">View All Services</span>
            <ArrowRight className="h-4 w-4 !text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}
