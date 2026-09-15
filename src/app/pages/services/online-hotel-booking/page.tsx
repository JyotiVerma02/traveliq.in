import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Online Hotel Booking - Luxury & Budget Accommodation | TravelIQ",
  description:
    "Book hotels online in India and worldwide with TravelIQ. Compare luxury resorts, business hotels, and budget stays with exclusive agent discounts.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/online-hotel-booking",
  },
  openGraph: {
    title: "Online Hotel Booking - Luxury & Budget Accommodation | TravelIQ",
    description:
      "Book hotels online in India and worldwide with TravelIQ. Compare luxury resorts, business hotels, and budget stays with exclusive agent discounts.",
    url: "https://traveliq.in/pages/services/online-hotel-booking",
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
    title: "Online Hotel Booking - Luxury & Budget Accommodation | TravelIQ",
    description:
      "Book hotels online in India and worldwide with TravelIQ. Compare luxury resorts, business hotels, and budget stays with exclusive agent discounts.",
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
      intro="TravelIQ offers a wide selection of luxury resorts, star business hotels, heritage properties, and budget accommodations across major cities in India and top international destinations."
      sections={[
        {
          heading: "Worldwide Hotel Reservation Network",
          body: "Easily search, compare, and reserve hotel rooms with real-time room availability and instant confirmation.\n\nEnjoy transparent rates, flexible check-in options, group reservation support, and attractive B2B margins for travel agents across thousands of hotel properties worldwide.",
        },
      ]}
    />
  );
}
