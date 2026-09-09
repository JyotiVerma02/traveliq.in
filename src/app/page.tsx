import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import Services from "@/components/Services";
import WhyWeBetter from "@/components/WhyWeBetter";
import Testimonials from "@/components/Testimonials";
import LatestPosts from "@/components/OurNews";
import FaqSection from "@/components/FaqSection";
import type { Metadata } from "next";

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
