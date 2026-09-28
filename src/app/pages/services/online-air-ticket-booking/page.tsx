import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Online Flight Ticket Booking - Domestic & International | TravelIQ",
  description:
    "Explore domestic and international flight booking options through TravelIQ, subject to current availability and terms.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/online-air-ticket-booking/",
  },
  openGraph: {
    title: "Online Flight Ticket Booking - Domestic & International | TravelIQ",
    description:
      "Explore domestic and international flight booking options through TravelIQ, subject to current availability and terms.",
    url: "https://traveliq.in/pages/services/online-air-ticket-booking/",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/services/air-tickets.webp",
        width: 1200,
        height: 630,
        alt: "Flight Ticket Booking with TravelIQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Flight Ticket Booking - Domestic & International | TravelIQ",
    description:
      "Explore domestic and international flight booking options through TravelIQ, subject to current availability and terms.",
    images: ["/images/services/air-tickets.webp"],
  },
};

export default function Page() {
  return (
    <ServiceDetail
      title="Air Ticket Booking"
      slug="online-air-ticket-booking"
      image="/images/services/air-tickets.webp"
      imageAlt="Passenger airplane flying above clouds - Book Air Tickets with TravelIQ"
      intro="TravelIQ provides domestic and international flight booking options for agents and travellers, subject to current availability and terms."
      sections={[
        {
          heading: "Domestic & International Flight Booking",
          body: "TravelIQ supports flight search and booking requests for domestic and international travel. Airline, route, schedule, fare and ticket conditions depend on current availability and supplier terms.",
        },
      ]}
    />
  );
}
