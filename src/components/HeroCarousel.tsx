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
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isFadingIn, setIsFadingIn] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((previous) => {
        setPreviousIndex(previous || null);
        setIsFadingIn(false);
        return (previous + 1) % (heroSlides.length + 1);
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentIndex === 0) return;

    const frameId = window.requestAnimationFrame(() => setIsFadingIn(true));
    return () => window.cancelAnimationFrame(frameId);
  }, [currentIndex]);

  const previousSlide = previousIndex ? heroSlides[previousIndex - 1] : null;
  const currentSlide = currentIndex ? heroSlides[currentIndex - 1] : null;

  return (
    <>
      {previousSlide && (
        <div className="absolute inset-0 z-1 opacity-0 transition-opacity duration-1000 ease-in-out">
          <Image
            src={previousSlide.src}
            alt={previousSlide.alt}
            fill
            loading="lazy"
            quality={65}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}

      {currentSlide && (
        <div
          className={`absolute inset-0 z-1 transition-opacity duration-1000 ease-in-out ${
            isFadingIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            loading="lazy"
            quality={65}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}
    </>
  );
}
