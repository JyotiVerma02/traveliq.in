import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | TravelIQ",
  description:
    "Read Travel IQ Services Private Limited's privacy policy regarding data collection, protection, and security.",
  alternates: {
    canonical: "https://traveliq.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | TravelIQ",
    description:
      "Read Travel IQ Services Private Limited's privacy policy regarding data collection, protection, and security.",
    url: "https://traveliq.in/privacy-policy",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | TravelIQ",
    description:
      "Read Travel IQ Services Private Limited's privacy policy regarding data collection, protection, and security.",
  },
};

export default function Page() {
  return (
    <PolicyPage
      title="Privacy Policy of Travel IQ"
      intro="We maintain full privacy of your personal information shared with us. We never misuse any of your personal information. Our privacy policy is as given below:"
      sections={[
        {
          heading: "1. Collection and Sharing of customer information:",
          body: "We collect information from you only after you agree to provide it. Any information you give us is held with care and security. We may collect your title, name, gender, email address, postal address, telephone number, mobile number, payment details or bank account details. All this information is processed securely for your protection. Under no circumstances do we rent, trade or share your personal information for marketing purposes without your consent.",
        },
        {
          heading: "2. Intellectual Property Rights:",
          body: "All content included on this site, such as text, graphics, logos, button icons, images and software, is the property of Travel IQ Services Private Limited.",
        },
      ]}
    />
  );
}
