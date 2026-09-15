import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";

export default function HeroMedia() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/vande_bharat_hero.webp"
        alt="TravelIQ travel destinations"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />

      <HeroVideo />

      <div className="absolute inset-0 bg-[#071F3D]/18" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071F3D]/35 via-[#071F3D]/60 to-[#071F3D]/35" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,31,61,0.58)_0%,rgba(7,31,61,0.32)_38%,rgba(7,31,61,0.05)_72%)]" />

      <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#071F3D]/85 via-[#071F3D]/30 to-transparent" />
    </div>
  );
}
