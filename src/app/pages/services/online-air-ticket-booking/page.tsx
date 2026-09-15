import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Online Flight Ticket Booking - Domestic & International | TravelIQ",
  description:
    "Book low fare domestic and international flight tickets with TravelIQ. IATA accredited travel agency offering central reservation system fares for all major airlines.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/online-air-ticket-booking/",
  },
  openGraph: {
    title: "Online Flight Ticket Booking - Domestic & International | TravelIQ",
    description:
      "Book low fare domestic and international flight tickets with TravelIQ. IATA accredited travel agency offering central reservation system fares for all major airlines.",
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
      "Book low fare domestic and international flight tickets with TravelIQ. IATA accredited travel agency offering central reservation system fares for all major airlines.",
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
      intro="TravelIQ is an IATA-accredited travel agency equipped with global distribution systems (GDS) and direct ticketing inventory for all major domestic and international airlines."
      sections={[
        {
          heading: "Competitive Fares & Instant Confirmation",
          body: "Through our established airline partnerships, TravelIQ provides travel agents and travelers with real-time flight availability, specially contracted corporate fares, group booking deals, and quick ticket issuance.\n\nWhether booking domestic routes across India (IndiGo, Air India, SpiceJet, Vistara) or international flights globally, enjoy competitive pricing, flexible baggage allowances, and professional customer assistance.",
        },
      ]}
    />
  );
}
