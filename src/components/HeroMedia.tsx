"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroMedia() {
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

  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/vande_bharat_hero.webp"
        alt="TravelIQ travel destinations"
        fill
        priority
        fetchPriority="high"
        quality={70}
        sizes="100vw"
        className="object-cover object-center"
      />

      {showVideo ? (
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
      ) : null}

      <div className="absolute inset-0 bg-[#071F3D]/18" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071F3D]/35 via-[#071F3D]/60 to-[#071F3D]/35" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,31,61,0.58)_0%,rgba(7,31,61,0.32)_38%,rgba(7,31,61,0.05)_72%)]" />

      <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#071F3D]/85 via-[#071F3D]/30 to-transparent" />
    </div>
  );
}
