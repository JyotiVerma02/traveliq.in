import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Bus Ticket Booking Online | TravelIQ",
  description:
    "Book online bus tickets across 12,000+ routes in India with TravelIQ. Choose from Volvo, AC Sleeper, Deluxe, and Express buses with best fare support.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/bus-ticket-booking",
  },
  openGraph: {
    title: "Bus Ticket Booking Online | TravelIQ",
    description:
      "Book online bus tickets across 12,000+ routes in India with TravelIQ. Choose from Volvo, AC Sleeper, Deluxe, and Express buses with best fare support.",
    url: "https://traveliq.in/pages/services/bus-ticket-booking",
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
      "Book online bus tickets across 12,000+ routes in India with TravelIQ. Choose from Volvo, AC Sleeper, Deluxe, and Express buses with best fare support.",
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
      intro="Why wait in long queues at bus ticket counters for your next journey? TravelIQ provides an easy, reliable B2B and online bus ticket booking platform connecting top bus operators nationwide."
      sections={[
        {
          heading: "Why Book Bus Tickets with TravelIQ?",
          body: "TravelIQ is India's fast-growing travel ticketing platform, offering comprehensive bus ticket reservation services for travel agents and individuals. Choose from Volvo AC, Luxury Sleeper, Non-AC, Deluxe, and Express buses across more than 12,000 bus routes.\n\nKey features include instant seat selection, transparent pricing, multiple bus operators, easy cancellation support, and dedicated 24/7 agent assistance.",
        },
      ]}
    />
  );
}
