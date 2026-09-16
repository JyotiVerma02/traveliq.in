"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroSlides = [
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
] as const;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % (heroSlides.length + 1));
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      {heroSlides.map((slide, index) => {
        const isActive = currentIndex === index + 1;

        return (
          <div
            key={slide.src}
            className={`absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
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
    </>
  );
}
