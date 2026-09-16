"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroSlides = [
  {
    src: "/vande_bharat_hero.webp",
    alt: "Vande Bharat Express train travel in India",
  },
  {
    src: "/flight_hero.webp",
    alt: "Flight ticket booking and air travel",
  },
  {
    src: "/hotel_hero.webp",
    alt: "Luxury hotel stay and accommodation booking",
  },
  {
    src: "/bus_hero.webp",
    alt: "Bus reservation and scenic road travel",
  },
  {
    src: "/holiday_hero.webp",
    alt: "Holiday tour packages and tropical destinations",
  },
];

export default function HeroMedia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#071F3D]">
      {/* Primary LCP Image - Always rendered upfront with high priority */}
      <Image
        src={heroSlides[0].src}
        alt={heroSlides[0].alt}
        fill
        priority
        fetchPriority="high"
        loading="eager"
        sizes="100vw"
        className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
          currentIndex === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      />

      {/* Secondary Slides - Mounted on client for smooth background transitions */}
      {isMounted &&
        heroSlides.slice(1).map((slide, idx) => {
          const actualIndex = idx + 1;
          const isActive = actualIndex === currentIndex;

          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                loading="lazy"
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}

      {/* Gradient Overlays with pointer-events-none for LCP trace compatibility */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[#071F3D]/18" />

      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-[#071F3D]/35 via-[#071F3D]/60 to-[#071F3D]/35" />

      <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,rgba(7,31,61,0.58)_0%,rgba(7,31,61,0.32)_38%,rgba(7,31,61,0.05)_72%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[32%] bg-gradient-to-t from-[#071F3D]/85 via-[#071F3D]/30 to-transparent" />
    </div>
  );
}
