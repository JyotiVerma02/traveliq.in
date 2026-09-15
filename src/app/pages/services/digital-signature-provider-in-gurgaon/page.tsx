import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Class 3 Digital Signature Provider in Gurgaon | TravelIQ",
  description:
    "Get Class 3 Digital Signature Certificates (DSC) in Gurgaon with TravelIQ. Official CCA accredited DSC issuing assistance for IRCTC agents, e-tendering, and GST filing.",
  alternates: {
    canonical: "https://traveliq.in/pages/services/digital-signature-provider-in-gurgaon",
  },
  openGraph: {
    title: "Class 3 Digital Signature Provider in Gurgaon | TravelIQ",
    description:
      "Get Class 3 Digital Signature Certificates (DSC) in Gurgaon with TravelIQ. Official CCA accredited DSC issuing assistance for IRCTC agents, e-tendering, and GST filing.",
    url: "https://traveliq.in/pages/services/digital-signature-provider-in-gurgaon",
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
    title: "Class 3 Digital Signature Provider in Gurgaon | TravelIQ",
    description:
      "Get Class 3 Digital Signature Certificates (DSC) in Gurgaon with TravelIQ. Official CCA accredited DSC issuing assistance for IRCTC agents, e-tendering, and GST filing.",
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
      intro="Under the RCAI hierarchy of the Controller of Certifying Authorities (CCA), Government of India, Class 3 Digital Signature Certificate (DSC) offers the highest level of security, encryption, and cryptographic trust."
      sections={[
        {
          heading: "Class 3 Digital Signature Certificate (DSC) Solutions",
          body: "Class 3 Digital Signature Certificates are essential for IRCTC travel agent onboarding, e-tendering, e-procurement, MCA filing, trademark registration, and GST filing. TravelIQ provides fast paperless video verification and USB token delivery across Gurgaon and Delhi NCR.\n\nBenefits include legal authenticity, high-encryption security, fast processing times, and dedicated technical support for USB token configuration.",
        },
      ]}
    />
  );
}
