import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import Services from "@/components/Services";
import WhyWeBetter from "@/components/WhyWeBetter";
import Testimonials from "@/components/Testimonials";
import LatestPosts from "@/components/OurNews";
import type { Metadata } from "next";
import { absoluteUrl, canonicalUrl, OG_IMAGE_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "IRCTC Agent Registration & B2B Travel Portal | TravelIQ",
  description:
    "TravelIQ supports travel professionals with IRCTC agent registration, railway services, flight booking, hotels, buses, tour packages and B2B travel solutions.",
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    title: "IRCTC Agent Registration & B2B Travel Portal | TravelIQ",
    description:
      "TravelIQ supports travel professionals with IRCTC agent registration, railway services, flight booking, hotels, buses, tour packages and B2B travel solutions.",
    url: canonicalUrl("/"),
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
        width: 960,
        height: 717,
        alt: "TravelIQ - IRCTC Agent Registration and B2B Travel Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCTC Agent Registration & B2B Travel Portal | TravelIQ",
    description:
      "TravelIQ supports travel professionals with IRCTC agent registration, railway services, flight booking, hotels, buses, tour packages and B2B travel solutions.",
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <PartnerLogos />
      <Services />
      <WhyWeBetter />
      <Testimonials />
      <LatestPosts />
    </main>
  );
}
