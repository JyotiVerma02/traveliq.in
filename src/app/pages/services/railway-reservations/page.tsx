import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Railway Reservation & IRCTC Agent Ticket Booking | TravelIQ",
  description:
    "Authorized IRCTC train ticket reservation services with TravelIQ. Book general, Tatkal, AC, Sleeper, and luxury train tickets across Indian Railways network.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/railway-reservations",
  },
  openGraph: {
    title: "Railway Reservation & IRCTC Agent Ticket Booking | TravelIQ",
    description:
      "Authorized IRCTC train ticket reservation services with TravelIQ. Book general, Tatkal, AC, Sleeper, and luxury train tickets across Indian Railways network.",
    url: "https://traveliq.in/pages/services/railway-reservations",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/services/railway-reservations.webp",
        width: 1200,
        height: 630,
        alt: "Railway Reservations by TravelIQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Railway Reservation & IRCTC Agent Ticket Booking | TravelIQ",
    description:
      "Authorized IRCTC train ticket reservation services with TravelIQ. Book general, Tatkal, AC, Sleeper, and luxury train tickets across Indian Railways network.",
    images: ["/images/services/railway-reservations.webp"],
  },
};

export default function Page() {
  return (
    <ServiceDetail
      title="Railway Reservations"
      slug="railway-reservations"
      image="/images/services/railway-reservations.webp"
      imageAlt="Indian railway station with trains on platform - Railway Reservations by TravelIQ"
      intro="The Indian Railway Reservation System connects millions of travelers across India daily. As an authorized IRCTC Principal Service Provider, TravelIQ enables travel agents to book train tickets seamlessly."
      sections={[
        {
          heading: "Indian Railway Reservation System & Agent Services",
          body: "Through TravelIQ's agent network, book train tickets in 1AC, 2AC, 3AC, AC Chair Car, and Sleeper classes. Access IRCTC quotas including General, Tatkal, Senior Citizen, and Ladies quotas with direct B2B portal integration.\n\nEnjoy transparent ticket printing, instant PNR status updates, fast cancellation & refund handling, and complete onboarding assistance to become a licensed IRCTC booking agent.",
        },
      ]}
    />
  );
}
