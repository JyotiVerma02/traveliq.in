import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Domestic & International Tour Packages | TravelIQ",
  description:
    "Book customized domestic and international holiday tour packages with TravelIQ. Family vacations, honeymoon specials, weekend getaways, and spiritual tours with best prices.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/irctc-tour-packages/",
  },
  openGraph: {
    title: "Domestic & International Tour Packages | TravelIQ",
    description:
      "Book customized domestic and international holiday tour packages with TravelIQ. Family vacations, honeymoon specials, weekend getaways, and spiritual tours with best prices.",
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
      "Book customized domestic and international holiday tour packages with TravelIQ. Family vacations, honeymoon specials, weekend getaways, and spiritual tours with best prices.",
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
      intro="Transform every vacation into an unforgettable journey. TravelIQ offers curated domestic and international holiday tour packages designed for families, couples, corporate groups, and solo travelers."
      sections={[
        {
          heading: "Top Reasons to Book Tour Packages with TravelIQ",
          body: "TravelIQ provides exclusive discounts on family holidays, honeymoon specials, weekend getaways, and seasonal tour packages.\n\nTheme-based holidays include Wildlife, Pilgrimage, Honeymoon, Beach, Hill Stations, Adventure, and Cultural Heritage. Top destinations include Kerala, Kashmir, Himachal Pradesh, Rajasthan, Goa, Andaman, Ladakh, Dubai, and Thailand.",
        },
        {
          heading: "Tailored Family & Group Tours",
          body: "Our team designs custom itineraries matching your budget and preferences, including hotel stays, sightseeing transfers, meal plans, and 24/7 travel assistance.",
        },
      ]}
    />
  );
}
