import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Hotel Booking Services | TravelIQ",
  description:
    "Explore hotel search and booking options through TravelIQ, subject to current property availability and terms.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/online-hotel-booking/",
  },
  openGraph: {
    title: "Hotel Booking Services | TravelIQ",
    description:
      "Explore hotel search and booking options through TravelIQ, subject to current property availability and terms.",
    url: "https://traveliq.in/pages/services/online-hotel-booking/",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/services/hotel-booking.webp",
        width: 1200,
        height: 630,
        alt: "Hotel Booking with TravelIQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Booking Services | TravelIQ",
    description:
      "Explore hotel search and booking options through TravelIQ, subject to current property availability and terms.",
    images: ["/images/services/hotel-booking.webp"],
  },
};

export default function Page() {
  return (
    <ServiceDetail
      title="Hotel Booking"
      slug="online-hotel-booking"
      image="/images/services/hotel-booking.webp"
      imageAlt="Luxury hotel room with king bed and city view - Book Hotels with TravelIQ"
      intro="TravelIQ provides hotel search and booking options for agents and travellers, subject to current property availability and terms."
      sections={[
        {
          heading: "Hotel Search and Booking",
          body: "Search hotel options and submit booking requests through TravelIQ. Property availability, room details, rates, check-in conditions and booking terms depend on the selected property and supplier.",
        },
      ]}
    />
  );
}
