import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Bus Ticket Booking Online | TravelIQ",
  description:
    "Explore bus ticket booking options through TravelIQ, subject to current route and operator availability.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/bus-ticket-booking/",
  },
  openGraph: {
    title: "Bus Ticket Booking Online | TravelIQ",
    description:
      "Explore bus ticket booking options through TravelIQ, subject to current route and operator availability.",
    url: "https://traveliq.in/pages/services/bus-ticket-booking/",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/services/bus-tickets.webp",
        width: 1200,
        height: 630,
        alt: "Book Bus Tickets with TravelIQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bus Ticket Booking Online | TravelIQ",
    description:
      "Explore bus ticket booking options through TravelIQ, subject to current route and operator availability.",
    images: ["/images/services/bus-tickets.webp"],
  },
};

export default function Page() {
  return (
    <ServiceDetail
      title="Bus Ticket Booking"
      slug="bus-ticket-booking"
      image="/images/services/bus-tickets.webp"
      imageAlt="Modern luxury air-conditioned coach bus - Book Bus Tickets with TravelIQ"
      intro="TravelIQ provides bus ticket booking options for agents and travellers, subject to current route and operator availability."
      sections={[
        {
          heading: "Bus Ticket Booking",
          body: "Explore bus services for supported routes and operators through TravelIQ. Available schedules, fares, seat options and ticket conditions depend on the operator and route selected.",
        },
        {
          heading: "Who Can Use Bus Booking",
          body: "Travel agents and travellers arranging supported intercity journeys can review bus options through TravelIQ. Available operators and routes depend on current service coverage.",
        },
        {
          heading: "Before You Confirm a Ticket",
          body: "Check the boarding and drop-off points, travel date, seat details, passenger information and the operator's change or cancellation terms before completing a booking.",
        },
      ]}
    />
  );
}
