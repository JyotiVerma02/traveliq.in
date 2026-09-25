import Image from "next/image";

// Tiny 8×5px blurred thumbnail of the hero — inlined so the placeholder
// is visible instantly (no network request) even on the server render.
const HERO_BLUR_DATA_URL =
  "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUABUB8JYgCdADze7UQAMtC4VB/uy+hQWFLf01+GoJ6fYRCr7KxqAA=";

export default function HeroMedia() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#F5F9FC]">
      <div className="relative h-full w-full">
        <Image
          src="/vande_bharat_hero.webp"
          alt="Vande Bharat train crossing a bridge at sunset"
          fill
          priority
          fetchPriority="high"
          loading="eager"
          quality={75}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={HERO_BLUR_DATA_URL}
          className="object-cover object-[center_48%] opacity-55 lg:opacity-100"
        />

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/95 to-white/10 lg:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.97)_37%,rgba(255,255,255,0.25)_60%,transparent_82%)]" />
      </div>
    </div>
  );
}
