import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const PartnerLogos = dynamic(() => import("@/components/PartnerLogos"));
const Services = dynamic(() => import("@/components/Services"));
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const WhyWeBetter = dynamic(() => import("@/components/WhyWeBetter"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const LatestPosts = dynamic(() => import("@/components/OurNews"));

export const metadata: Metadata = {
  title: "Travel IQ - Your Own Travel Intelligence",
  description: "Know More to Become an IRCTC Travel Agent",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <Services />
      <FaqSection />
      <WhyWeBetter />
      <Testimonials />
      <LatestPosts />
    </>
  );
}
