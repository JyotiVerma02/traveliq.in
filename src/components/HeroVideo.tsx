"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;
    const enableVideo = () => setShowVideo(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enableVideo, { timeout: 2500 });
    } else {
      timeoutId = setTimeout(enableVideo, 1200);
    }

    return () => {
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  if (!showVideo) return null;

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/vande_bharat_hero.webp"
      aria-label="TravelIQ travel destinations montage"
      className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
    >
      <source src="/traveliq_hero_slider.mp4" type="video/mp4" />
    </video>
  );
}
