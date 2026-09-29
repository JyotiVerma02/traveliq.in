import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CarouselControls from "@/components/CarouselControls";

const services = [
  [
    "Air Tickets",
    "Access domestic and international flight booking options through TravelIQ services.",
    "/pages/services/online-air-ticket-booking",
    "/images/services/air-tickets.webp",
  ],
  [
    "Bus Tickets",
    "Access bus booking options across supported routes and operators.",
    "/pages/services/bus-ticket-booking",
    "/images/services/bus-tickets.webp",
  ],
  [
    "Hotel Booking",
    "Search and book accommodation for domestic and international travel requirements.",
    "/pages/services/online-hotel-booking",
    "/images/services/hotel-booking.webp",
  ],
  [
    "IRCTC Domestic Packages",
    "Explore IRCTC domestic package options available through TravelIQ.",
    "/pages/services/irctc-domestic-packages",
    "/images/services/irctc-domestic-packages.webp",
  ],
  [
    "Tour Packages",
    "Explore tour and holiday package options for domestic and international travel.",
    "/pages/services/irctc-tour-packages",
    "/images/services/tour-packages.webp",
  ],
  [
    "IRCTC Agent Registration",
    "Apply for IRCTC agent onboarding with supported OTP and DSC-based authentication options.",
    "/irctc-agent-registration",
    "/images/services/railway-reservations.webp",
  ],
] as const;

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FB]">
      <div className="relative mx-auto max-w-[1400px] bg-[#F4F7FB] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        {/* Section Header with Left/Right Controls */}
        <div className="flex flex-col items-center gap-4 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-none text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C4320A]">
              Our Services
            </p>
            <h2 className="mt-2 text-[clamp(1.65rem,6vw,3.75rem)] font-bold leading-tight tracking-[-0.055em] text-[#071F3D] 2xl:whitespace-nowrap 2xl:text-[2.75rem]">
              Travel Services for{" "}
              <span className="text-[#C4320A]">Travel Professionals</span>
            </h2>
            <p className="mx-auto mt-3 max-w-5xl text-base leading-7 text-[#5A6A80]">
              Railway and IRCTC services, flights, hotels, buses, holiday packages and agent support for travel professionals.
            </p>
          </div>

          {/* Carousel Control Buttons */}
          <div className="self-end">
            <CarouselControls
              targetId="home-services-carousel"
              previousLabel="Scroll services left"
              nextLabel="Scroll services right"
              className="flex items-center gap-3"
              buttonClassName="
                flex h-12 w-12 items-center justify-center rounded-full border
                border-[#10407A]/15 bg-white text-[#10407A] shadow-sm
                transition-all duration-300 hover:border-[#EE5326]
                hover:bg-[#EE5326] hover:text-white hover:shadow-md active:scale-95
              "
              iconStrokeWidth={2.5}
            />
          </div>
        </div>

        {/* Cards Carousel Container */}
        <div
          id="home-services-carousel"
          className="
            mt-8
            flex
            w-full
            snap-x
            snap-mandatory
            gap-6
            overflow-x-auto
            pl-1
            pr-0
            pb-3
            pt-2
            scrollbar-none
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overscrollBehaviorX: "contain",
            touchAction: "pan-x pan-y",
          }}
        >
          {services.map(([title, description, href, image], index) => (
            <div
              key={title}
              className="service-slide flex min-h-[420px] min-w-0 shrink-0 snap-start sm:min-h-[460px]"
            >
              <Link
                href={href} prefetch={false}
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
                  transition-[transform,border-color,box-shadow]
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#EE5326]/30
                  hover:shadow-[0_28px_60px_rgba(16,64,122,0.12)]
                "
              >
                {/* Image Container with high brightness and soft bottom gradient */}
                <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-[#EEF4FA]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    loading="lazy"
                    quality={60}
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 639px) 88vw, (max-width: 1023px) 46vw, 31vw"
                  />

                  {/* Soft bottom-only gradient for number tag legibility without darkening the main subject */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 transition-opacity duration-300 group-hover:opacity-50" />

                  <span className="absolute bottom-3 left-4 rounded-md bg-black/40 px-2 py-0.5 text-[11px] font-bold tracking-[0.16em] text-white backdrop-blur-xs">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
