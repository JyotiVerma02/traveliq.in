import Image from "next/image";

export default function HeroMedia() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#071F3D]">
      {/* Server-rendered hero — immediately eligible for LCP */}
      <Image
        src="/vande_bharat_hero.webp"
        alt="Vande Bharat Express train travel in India"
        fill
        priority
        fetchPriority="high"
        loading="eager"
        quality={65}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlays at z-[1] — above the image (z-0) but below Hero content (z-10).
          Using bracket notation z-[1] to guarantee a concrete stacking context value in Tailwind. */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#071F3D]/18" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#071F3D]/35 via-[#071F3D]/60 to-[#071F3D]/35" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(7,31,61,0.58)_0%,rgba(7,31,61,0.32)_38%,rgba(7,31,61,0.05)_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[32%] bg-gradient-to-t from-[#071F3D]/85 via-[#071F3D]/30 to-transparent" />
    </div>
  );
}
