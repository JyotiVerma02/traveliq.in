import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  JsonLd,
  getOrganizationSchema,
  getWebSiteSchema,
} from "@/components/JsonLd";
import { absoluteUrl, OG_IMAGE_PATH, SITE_URL } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  variable: "--font-serif-accent",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Travel IQ - Your Own Travel Intelligence | IRCTC Principal Agent",
    template: "%s",
  },
  description:
    "TravelIQ is the leading IRCTC Principal Service Provider in India. Register as an authorized IRCTC travel agent, book train tickets, flights, buses, hotels, and holiday packages.",
  keywords: [
    "TravelIQ",
    "IRCTC agent registration",
    "IRCTC principal agent",
    "train ticket booking agent",
    "railway reservation",
    "flight ticket booking",
    "hotel booking",
    "bus ticket booking",
    "tour packages",
  ],
  authors: [{ name: "TravelIQ", url: SITE_URL }],
  creator: "Travel IQ Services Private Limited",
  publisher: "Travel IQ Services Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "TravelIQ | Travel Services & IRCTC Agent Services",
    description:
      "TravelIQ is an IATA accredited agency and IRCTC Principal Service Provider offering railway reservations, air tickets, hotel bookings, bus tickets, and agent registration across India.",
    url: SITE_URL,
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
        width: 1200,
        height: 630,
        alt: "TravelIQ - Your Own Travel Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelIQ | Travel Services & IRCTC Agent Services",
    description:
      "Register as an authorized IRCTC travel agent with TravelIQ. Railway reservations, flights, hotels, and bus ticket booking.",
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          href="/vande_bharat_hero.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="min-h-screen bg-[#F4F7FB] font-sans text-[#071F3D] selection:bg-[#FFF1EB] selection:text-[#10407A]">
        <div className="flex min-h-screen flex-col">
          {/* ================= HEADER ================= */}
          <Header />

          {/* ================= PAGE CONTENT ================= */}
          {children}

          {/* ================= FOOTER ================= */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
