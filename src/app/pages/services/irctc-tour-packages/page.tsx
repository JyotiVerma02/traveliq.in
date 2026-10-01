import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Domestic & International Tour Packages | TravelIQ",
  description:
    "Explore tour and holiday package options through TravelIQ, subject to current itinerary availability and terms.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/irctc-tour-packages/",
  },
  openGraph: {
    title: "Domestic & International Tour Packages | TravelIQ",
    description:
      "Explore tour and holiday package options through TravelIQ, subject to current itinerary availability and terms.",
    url: "https://traveliq.in/pages/services/irctc-tour-packages/",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/services/tour-packages.webp",
        width: 1200,
        height: 630,
        alt: "Domestic & International Tour Packages by TravelIQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domestic & International Tour Packages | TravelIQ",
    description:
      "Explore tour and holiday package options through TravelIQ, subject to current itinerary availability and terms.",
    images: ["/images/services/tour-packages.webp"],
  },
};

export default function Page() {
  return (
    <ServiceDetail
      title="Tour Packages"
      slug="irctc-tour-packages"
      image="/images/services/tour-packages.webp"
      imageAlt="Beautiful Indian travel destination - Book Holiday Tour Packages with TravelIQ"
      intro="Explore domestic and international tour and holiday package options through TravelIQ. Availability and itinerary details depend on current offerings and supplier terms."
      sections={[
        {
          heading: "Tour & Holiday Packages",
          body: "Review package itineraries and travel details currently available through TravelIQ. Destinations, inclusions, dates and prices vary by package and supplier.",
        },
        {
          heading: "Package Information",
          body: "Contact TravelIQ to ask about the details and terms of a listed tour or holiday package.",
        },
        {
          heading: "How to Compare a Tour Package",
          body: "Check the travel dates, itinerary, transport, accommodation, meals, inclusions and cancellation conditions. Confirm availability and final pricing for the selected departure before making payment.",
        },
      ]}
    />
  );
}
