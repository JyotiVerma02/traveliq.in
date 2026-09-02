import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "TravelIQ | Travel Services & IRCTC Agent Services",
    template: "%s | TravelIQ",
  },
  description:
    "TravelIQ provides railway reservation, flight booking, hotel booking, bus ticket booking, tour packages and IRCTC agent services.",
  keywords: [
    "TravelIQ",
    "IRCTC agent",
    "IRCTC agent registration",
    "train ticket booking",
    "flight ticket booking",
    "hotel booking",
    "travel services",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f0f7ff] text-slate-900 selection:bg-blue-100 selection:text-blue-900">{children}</body>
    </html>
  );
}
