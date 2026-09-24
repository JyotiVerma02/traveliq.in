import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import Services from "@/components/Services";
import WhyWeBetter from "@/components/WhyWeBetter";
import Testimonials from "@/components/Testimonials";
import LatestPosts from "@/components/OurNews";
import { JsonLd, getLocalBusinessSchema } from "@/components/JsonLd";
import type { Metadata } from "next";
import { absoluteUrl, canonicalUrl, OG_IMAGE_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Travel IQ - Your Own Travel Intelligence | IRCTC Principal Agent",
  description:
    "Become an authorized IRCTC travel agent with TravelIQ. Premier travel services including railway reservation, flight ticket booking, hotel booking, bus tickets, and tour packages.",
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    title: "Travel IQ - Your Own Travel Intelligence | IRCTC Principal Agent",
    description:
      "Become an authorized IRCTC travel agent with TravelIQ. Premier travel services including railway reservation, flight ticket booking, hotel booking, bus tickets, and tour packages.",
    url: canonicalUrl("/"),
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
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
    images: [absoluteUrl(OG_IMAGE_PATH)],
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
      <WhyWeBetter />
      <Testimonials />
      <LatestPosts />
    </>
  );
}
