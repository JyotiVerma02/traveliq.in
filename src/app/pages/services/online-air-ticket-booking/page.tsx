import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Online Flight Ticket Booking - Domestic & International | TravelIQ",
  description:
    "Book low fare domestic and international flight tickets with TravelIQ. Premier travel agency offering central reservation system fares for all major airlines.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/online-air-ticket-booking/",
  },
  openGraph: {
    title: "Online Flight Ticket Booking - Domestic & International | TravelIQ",
    description:
      "Book low fare domestic and international flight tickets with TravelIQ. Premier travel agency offering central reservation system fares for all major airlines.",
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
      "Book low fare domestic and international flight tickets with TravelIQ. Premier travel agency offering central reservation system fares for all major airlines.",
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
      intro="TravelIQ is a leading travel platform equipped with global distribution systems (GDS) and direct ticketing inventory for all major domestic and international airlines."
      sections={[
        {
          heading: "Competitive Fares & Instant Confirmation",
          body: "Through our airline booking services, TravelIQ helps travel agents and travelers check flight availability, fares, group booking options, and ticket issuance.\n\nFor domestic routes across India, options may include IndiGo, Air India, Air India Express, SpiceJet and other leading airlines, subject to route availability and current inventory. International flight options are also available through the platform. Contact TravelIQ to confirm current availability and terms.",
        },
      ]}
    />
  );
}
