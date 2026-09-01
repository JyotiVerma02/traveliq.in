import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">{children}</body>
    </html>
  );
}
