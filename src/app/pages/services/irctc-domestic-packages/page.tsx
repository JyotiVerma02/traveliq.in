import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "IRCTC Domestic Tour Packages | TravelIQ",
  description:
    "Book official IRCTC domestic tour packages across India with TravelIQ. Bharat Gaurav trains, pilgrim packages, hill stations, and heritage tours with attractive agent commissions.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/irctc-domestic-packages",
  },
  openGraph: {
    title: "IRCTC Domestic Tour Packages | TravelIQ",
    description:
      "Book official IRCTC domestic tour packages across India with TravelIQ. Bharat Gaurav trains, pilgrim packages, hill stations, and heritage tours with attractive agent commissions.",
    url: "https://traveliq.in/pages/services/irctc-domestic-packages",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/services/irctc-domestic-packages.webp",
        width: 1200,
        height: 630,
        alt: "IRCTC Domestic Tour Packages by TravelIQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCTC Domestic Tour Packages | TravelIQ",
    description:
      "Book official IRCTC domestic tour packages across India with TravelIQ. Bharat Gaurav trains, pilgrim packages, hill stations, and heritage tours with attractive agent commissions.",
    images: ["/images/services/irctc-domestic-packages.webp"],
  },
};

export default function Page() {
  return (
    <ServiceDetail
      title="IRCTC Domestic Packages"
      slug="irctc-domestic-packages"
      image="/images/services/irctc-domestic-packages.webp"
      imageAlt="Indian train on scenic landscape - IRCTC Domestic Tour Packages by TravelIQ"
      intro="Explore India with official IRCTC domestic tour packages. TravelIQ enables travel agents to book branded IRCTC rail packages, spiritual circuits, and holiday tours for their clients."
      sections={[
        {
          heading: "Official IRCTC Domestic Tour Packages",
          body: "As an IRCTC Principal Service Provider, TravelIQ allows travel agents to sell branded domestic packages covering pilgrimage circuits (Char Dham, Jyotirlinga, Ramayana Yatra), heritage destinations, hill stations, and coastal retreats.\n\nEnjoy hassle-free online booking, transparent commission structures, all-inclusive train transfers, hotel stays, guided sightseeing, and dedicated agent support.",
        },
      ]}
    />
  );
}
