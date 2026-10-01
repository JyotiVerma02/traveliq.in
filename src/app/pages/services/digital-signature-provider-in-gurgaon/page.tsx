import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Class 3 Digital Signature Services | TravelIQ",
  description:
    "Explore Class 3 Digital Signature Certificate options through TravelIQ. Issuer eligibility, verification and delivery terms depend on the selected certificate provider.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/digital-signature-provider-in-gurgaon/",
  },
  openGraph: {
    title: "Class 3 Digital Signature Services | TravelIQ",
    description:
      "Explore Class 3 Digital Signature Certificate options through TravelIQ. Issuer eligibility, verification and delivery terms depend on the selected certificate provider.",
    url: "https://traveliq.in/pages/services/digital-signature-provider-in-gurgaon/",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/services/digital-signature.webp",
        width: 1200,
        height: 630,
        alt: "Class 3 Digital Signature Certificate by TravelIQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Class 3 Digital Signature Services | TravelIQ",
    description:
      "Explore Class 3 Digital Signature Certificate options through TravelIQ. Issuer eligibility, verification and delivery terms depend on the selected certificate provider.",
    images: ["/images/services/digital-signature.webp"],
  },
};

export default function Page() {
  return (
    <ServiceDetail
      title="Class 3 Digital Signature Provider in Gurgaon"
      slug="digital-signature-provider-in-gurgaon"
      image="/images/services/digital-signature.webp"
      imageAlt="Digital security and electronic signature on laptop - Class 3 DSC by TravelIQ"
      intro="TravelIQ offers a Class 3 Digital Signature Certificate service. Certificate issuance, verification requirements and delivery terms depend on the selected provider."
      sections={[
        {
          heading: "Class 3 Digital Signature Certificate",
          body: "Contact TravelIQ to review the available Class 3 Digital Signature Certificate options and applicable provider requirements. Supported use cases, verification steps, hardware and delivery terms depend on the certificate provider.",
        },
        {
          heading: "Who May Need a Class 3 DSC",
          body: "A Class 3 DSC may suit professionals or businesses that need a verified digital signature for a supported filing or online workflow. Confirm that the receiving platform accepts the certificate and provider type you choose.",
        },
        {
          heading: "What to Confirm Before Applying",
          body: "Review the issuer's eligibility and document checklist, verification steps, certificate validity, delivery method and renewal terms. Ask whether a USB token or other hardware is required for your intended use.",
        },
      ]}
    />
  );
}
