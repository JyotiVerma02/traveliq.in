import Image from "next/image";

// Tiny 8×5px blurred thumbnail of the hero — inlined so the placeholder
// is visible instantly (no network request) even on the server render.
const HERO_BLUR_DATA_URL =
  "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUABUB8JYgCdADze7UQAMtC4VB/uy+hQWFLf01+GoJ6fYRCr7KxqAA=";

export default function HeroMedia() {
  return (
    // bg-[#030C1A] is near-black (not vivid blue) — ensures white hero
    // text is always readable before the image/blur-placeholder paints.
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#030C1A]">
      {/* Server-rendered hero — immediately eligible for LCP.
          placeholder="blur" cross-fades from the inlined thumbnail
          to the full image so there is no jarring colour flash. */}
      <Image
        src="/vande_bharat_hero.webp"
        alt="Vande Bharat Express train travel in India"
        fill
        priority
        fetchPriority="high"
        loading="eager"
        quality={65}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={HERO_BLUR_DATA_URL}
        className="object-cover object-center opacity-45"
      />

      {/* Gradient overlays at z-[1] — above the image (z-0) but below
          Hero content (z-10). */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#071F3D]/35" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#071F3D]/45 via-[#071F3D]/65 to-[#071F3D]/45" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(7,31,61,0.48)_0%,rgba(7,31,61,0.32)_42%,rgba(7,31,61,0.18)_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[32%] bg-gradient-to-t from-[#071F3D]/90 via-[#071F3D]/40 to-transparent" />
    </div>
  );
}
