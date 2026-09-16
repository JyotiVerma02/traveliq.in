"use client";

import dynamic from "next/dynamic";

const HeroCarousel = dynamic(() => import("@/components/HeroCarousel"), {
  ssr: false,
});

export default function HeroCarouselLoader() {
  return <HeroCarousel />;
}
