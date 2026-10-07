import Image from "next/image";

export default function HeroMedia() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#F5F9FC]">
      <Image
        src="/vande_bharat_hero.webp"
        alt=""
        fill
        preload
        quality={65}
        sizes="(max-width: 768px) 100vw, 100vw"
        className="object-cover object-[70%_center] opacity-75 sm:object-[67%_center] sm:opacity-85 lg:object-center lg:opacity-100 ultra:object-[42%_center]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.94)_52%,rgba(255,255,255,0.58)_100%)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.82)_48%,rgba(255,255,255,0.35)_100%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.92)_38%,rgba(255,255,255,0.5)_56%,rgba(255,255,255,0.05)_78%,transparent_100%)] ultra:bg-[linear-gradient(90deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.38)_18%,rgba(255,255,255,0.88)_31%,rgba(255,255,255,0.86)_48%,rgba(255,255,255,0.42)_62%,rgba(255,255,255,0.04)_82%,transparent_100%)]" />
    </div>
  );
}
