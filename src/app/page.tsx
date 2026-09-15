import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import Services from "@/components/Services";
import FaqSection from "@/components/FaqSection";
import WhyWeBetter from "@/components/WhyWeBetter";
import Testimonials from "@/components/Testimonials";
import LatestPosts from "@/components/OurNews";
import { JsonLd, getLocalBusinessSchema } from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel IQ - Your Own Travel Intelligence | IRCTC Principal Agent",
  description:
    "Become an authorized IRCTC travel agent with TravelIQ. Premier travel services including railway reservation, flight ticket booking, hotel booking, bus tickets, and tour packages.",
  alternates: {
    canonical: "https://traveliq.in/",
  },
  openGraph: {
    title: "Travel IQ - Your Own Travel Intelligence | IRCTC Principal Agent",
    description:
      "Become an authorized IRCTC travel agent with TravelIQ. Premier travel services including railway reservation, flight ticket booking, hotel booking, bus tickets, and tour packages.",
    url: "https://traveliq.in/",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "TravelIQ - Your Own Travel Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel IQ - Your Own Travel Intelligence | IRCTC Principal Agent",
    description:
      "Become an authorized IRCTC travel agent with TravelIQ. Premier travel services including railway reservation, flight ticket booking, hotel booking, bus tickets, and tour packages.",
    images: ["/images/hero-1.webp"],
  },
};

export default function HomePage() {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <>
      <JsonLd data={localBusinessSchema} />
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
