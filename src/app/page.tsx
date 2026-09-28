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
  title: "TravelIQ | B2B Travel Services for Travel Professionals",
  description:
    "TravelIQ supports travel professionals with railway, flight, hotel, bus, holiday and B2B travel services, including agent onboarding support.",
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    title: "TravelIQ | B2B Travel Services for Travel Professionals",
    description:
      "TravelIQ supports travel professionals with railway, flight, hotel, bus, holiday and B2B travel services, including agent onboarding support.",
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
    title: "TravelIQ | B2B Travel Services for Travel Professionals",
    description:
      "TravelIQ supports travel professionals with railway, flight, hotel, bus, holiday and B2B travel services, including agent onboarding support.",
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
