import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Travel IQ - Your Own Travel Intelligence",
    template: "%s",
  },
  description:
    "Know More to Become an IRCTC Travel Agent",
  keywords: [
    "TravelIQ",
    "IRCTC agent",
    "IRCTC agent registration",
    "train ticket booking",
    "flight ticket booking",
    "hotel booking",
    "travel services",
  ],
  openGraph: {
    title: "TravelIQ | Travel Services & IRCTC Agent Services",
    description:
      "TravelIQ provides railway reservation, flight booking, hotel booking, bus ticket booking, tour packages and IRCTC agent services.",
    type: "website",
    url: "https://traveliq.in",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#ffffff] font-sans text-slate-900 selection:bg-[#fff1eb] selection:text-[#10407A]">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
