"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
}

export const servicesData: ServiceItem[] = [
  {
    title: "Air Tickets",
    description:
      "Access domestic and international flight booking options through TravelIQ services.",
    image: "/images/services/air-tickets.webp",
    href: "/pages/services/online-air-ticket-booking",
    tags: ["FLIGHTS", "DOMESTIC", "INTERNATIONAL"],
  },
  {
    title: "Bus Tickets",
    description:
      "Explore bus booking options for supported routes and operators through TravelIQ.",
    image: "/images/services/bus-tickets.webp",
    href: "/pages/services/bus-ticket-booking",
    tags: ["BUS", "ROUTES", "OPERATORS"],
  },
  {
    title: "Hotel Booking",
    description:
      "Search and reserve hotel stays through TravelIQ, subject to current property availability.",
    image: "/images/services/hotel-booking.webp",
    href: "/pages/services/online-hotel-booking",
    tags: ["HOTELS", "SEARCH", "BOOKING"],
  },
  {
    title: "IRCTC Domestic Packages",
    description:
      "Explore IRCTC Domestic Packages available through TravelIQ.",
    image: "/images/services/irctc-domestic-packages.webp",
    href: "/pages/services/irctc-domestic-packages",
    tags: ["IRCTC", "PACKAGES", "DOMESTIC"],
  },
  {
    title: "Tour Packages",
    description:
      "Explore domestic and international tour and holiday package options.",
    image: "/images/services/tour-packages.webp",
    href: "/pages/services/irctc-tour-packages",
    tags: ["HOLIDAYS", "TOURS", "VACATION"],
  },
  {
    title: "Railway Reservations",
    description:
      "Railway reservation services and agent workflows, subject to applicable IRCTC requirements.",
    image: "/images/services/railway-reservations.webp",
    href: "/pages/services/railway-reservations",
    tags: ["TRAINS", "IRCTC", "RESERVATION"],
  },
  {
    title: "Class 3 Digital Signature",
    description:
      "Get Class 3 Digital Signature Certificates with solutions designed for business and professional requirements.",
    image: "/images/services/digital-signature.webp",
    href: "/pages/services/digital-signature-provider-in-gurgaon",
    tags: ["DSC", "SECURITY", "DIGITAL"],
  },
];

interface ServicesScrollProps {
  kicker?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  description?: string;
}

export default function ServicesScroll({
  kicker = "Capabilities",
  titlePrefix = "Product engineering for ",
  titleHighlight = "the AI era",
  titleSuffix = "",
  description = "We design, build, and scale AI-native products, digital platforms, and automated systems for teams that want a lasting edge.",
}: ServicesScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          {kicker && (
            <div className="mb-4 inline-block">
              <span className="rounded-full bg-[#FFF1EB] px-4 py-1.5 text-xs font-semibold text-[#C4320A] shadow-xs">
                {kicker}
              </span>
            </div>
          )}

          <h2 className="text-3xl font-bold tracking-tight text-[#0B1728] sm:text-4xl lg:text-5xl">
            {titlePrefix}
            {titleHighlight && (
              <span className="text-[#EE5326]">{titleHighlight}</span>
            )}
            {titleSuffix}
          </h2>

          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#526174] sm:text-base">
              {description}
            </p>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-end gap-3 px-2 sm:px-4">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-[#EE5326] hover:bg-[#EE5326] hover:text-white cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-[#EE5326] hover:bg-[#EE5326] hover:text-white cursor-pointer"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Cards Track */}
      <div className="mt-6 w-full">
       <div
  ref={scrollRef}
  className="
    flex
    w-full
    snap-x
    snap-mandatory
    gap-6
    overflow-x-auto
    overflow-y-hidden
    overscroll-x-contain
    overscroll-y-auto
    pb-8
    pt-2
    scrollbar-none
    px-5
    sm:px-8
    lg:px-16
  "
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
>
          {servicesData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative flex h-[460px] w-[300px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[32px] p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 sm:w-[350px] md:w-[380px]"
            >
              {/* Card Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 300px, 380px"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30 opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Top Tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="line-clamp-3 text-xs leading-relaxed text-gray-300 sm:text-sm">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#EE5326] transition-colors duration-300 group-hover:text-white">
                    EXPLORE SOLUTION
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#EE5326] group-hover:bg-[#EE5326]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
