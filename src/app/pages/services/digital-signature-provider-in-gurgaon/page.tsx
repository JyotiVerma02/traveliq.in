import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Class 3 Digital Signature | TravelIQ",
  description: "Class 3 Digital Signature Certificate services from TravelIQ.",
};

export default function Page() {
  return (
    <ServiceDetail
      title="Class 3 Digital Signature"
      image="/images/services/digital-signature.jpg"
      imageAlt="Digital security and electronic signature on laptop - Class 3 DSC by TravelIQ"
      intro="As part of the RCAI hierarchy arrangement of Controller of Certifying Authorities (CCA) in India, a Class 3 Digital Signature Certificate (DSC) renders the highest level of trust and assurance."
      sections={[
        {
          heading: "Class 3 Digital Signature Certificate",
          body: "In general, DSCs are utilized primarily within the e-procurement and e-tendering processes. Get lots of benefits using our Digital Signature Certificate.",
        },
      ]}
    />
  );
}
