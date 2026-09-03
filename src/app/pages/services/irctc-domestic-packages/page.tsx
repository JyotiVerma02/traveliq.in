import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
export const metadata: Metadata = { title: "IRCTC Domestic Packages", description: "Book branded IRCTC domestic tour packages with TravelIQ." };
export default function Page() { return <ServiceDetail title="IRCTC Domestic Packages" intro="Book Branded IRCTC Domestic tour packages and earn commission." sections={[{ heading: "IRCTC Domestic Packages", body: "TraveliQ helps travel agents offer branded domestic tour packages with dependable booking support and attractive opportunities for their customers." }]} />; }
