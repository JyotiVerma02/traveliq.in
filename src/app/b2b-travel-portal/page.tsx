import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BusFront, Building2, Plane, ShieldCheck, TrainFront } from "lucide-react";
import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import { canonicalUrl } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

const path = "/b2b-travel-portal";
const title = "B2B Travel Portal for Travel Agents in India | TravelIQ";
const description = "Explore TravelIQ’s B2B travel platform for agents, with railway, flight, hotel, bus and holiday booking services and onboarding support.";
export const metadata: Metadata = createMetadata({ title, description, path });

const services = [
  { name: "Railway reservations", detail: "Railway booking access for eligible authorized agents.", href: "/pages/services/railway-reservations/", Icon: TrainFront, color: "bg-[#FFF0E9] text-[#EE5326]" },
  { name: "Flight booking", detail: "Domestic and international air booking support.", href: "/pages/services/online-air-ticket-booking/", Icon: Plane, color: "bg-[#EAF5FF] text-sky-600" },
  { name: "Hotel reservations", detail: "Hotel inventory and reservation services.", href: "/pages/services/online-hotel-booking/", Icon: Building2, color: "bg-[#EAF8F0] text-emerald-600" },
  { name: "Bus tickets", detail: "Bus ticket booking through the travel service platform.", href: "/pages/services/bus-ticket-booking/", Icon: BusFront, color: "bg-[#F3EEFF] text-violet-600" },
  { name: "Holiday packages", detail: "Tour and holiday booking options for customers.", href: "/pages/services/irctc-tour-packages/", Icon: ShieldCheck, color: "bg-[#FFF7DF] text-amber-600" },
];

const breadcrumb = getBreadcrumbSchema([
  { name: "Home", item: canonicalUrl("/") },
  { name: "B2B Travel Portal", item: canonicalUrl(path) },
]);

export default function B2BTravelPortalPage() {
  return (
    <main className="min-h-screen bg-[#F4F7FB] px-4 py-10 text-[#071F3D] sm:px-6 sm:py-16">
      <JsonLd data={breadcrumb} />
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500"><Link href="/" className="hover:text-[#10407A]">Home</Link><span className="mx-2 text-[#EE5326]">/</span><span className="font-semibold text-[#10407A]">B2B Travel Portal</span></nav>

        <section className="overflow-hidden rounded-[30px] border border-[#10407A]/10 bg-white shadow-sm">
          <div className="grid gap-8 bg-gradient-to-br from-white via-[#F5F9FD] to-[#FFF3ED] p-6 sm:p-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:p-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EE5326]">TravelIQ agent platform</p>
              <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">B2B Travel Portal for Travel Agents in India</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">A business-to-business travel platform brings multiple travel services into one agent workflow. TravelIQ supports travel professionals with service access, onboarding guidance and assistance, subject to the terms and eligibility of each service.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/irctc-agent-registration/" className="inline-flex items-center gap-2 rounded-xl bg-[#EE5326] px-5 py-3 text-sm font-bold text-white hover:bg-[#D9471D]">Become an Agent <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/contact-us/" className="inline-flex items-center rounded-xl border border-[#10407A]/20 bg-white px-5 py-3 text-sm font-bold text-[#10407A] hover:bg-[#F5F8FC]">Talk to our team</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {services.slice(0, 4).map(({ name, Icon, color }) => <div key={name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"><span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${color}`}><Icon className="h-5 w-5" /></span><p className="mt-3 text-sm font-bold">{name}</p><p className="mt-1 text-xs text-slate-500">Agent service</p></div>)}
            </div>
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
          <div className="max-w-3xl"><h2 className="text-2xl font-extrabold sm:text-3xl">Travel services in one place</h2><p className="mt-3 leading-7 text-slate-600">Agents can review available service categories below. Availability, access conditions, commission, inventory and payment terms can vary by service and provider; confirm current terms during onboarding.</p></div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ name, detail, href, Icon, color }) => <Link key={name} href={href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#10407A]/25 hover:shadow-md"><span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${color}`}><Icon className="h-5 w-5" /></span><h3 className="mt-4 font-bold group-hover:text-[#EE5326]">{name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#10407A]">Explore service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}
          </div>
        </section>

        <section className="mt-12 grid gap-6 rounded-3xl border border-[#10407A]/10 bg-white p-6 shadow-sm sm:mt-16 sm:grid-cols-2 sm:p-8">
          <div><h2 className="text-xl font-bold">Who is the portal for?</h2><p className="mt-3 leading-7 text-slate-600">Independent travel agents, agencies and other eligible travel businesses looking to access supported B2B travel services. Individual service enrollment may require separate verification or agreements.</p></div>
          <div><h2 className="text-xl font-bold">Getting started</h2><p className="mt-3 leading-7 text-slate-600">Review the <Link href="/irctc-agent-registration/" className="font-semibold text-[#10407A] underline">agent registration information</Link>, check the <Link href="/list-of-irctc-principal-service-providers/" className="font-semibold text-[#10407A] underline">PSP directory</Link> where relevant, and contact our team to confirm current onboarding requirements.</p></div>
        </section>

        <section className="mx-auto mt-12 max-w-4xl sm:mt-16">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
            <div className="py-5"><h3 className="font-bold">What is a B2B travel portal?</h3><p className="mt-2 text-sm leading-6 text-slate-600">It is a platform through which eligible travel businesses can access travel products or booking services for their customers under the provider’s commercial terms.</p></div>
            <div className="py-5"><h3 className="font-bold">Does one registration enable every service?</h3><p className="mt-2 text-sm leading-6 text-slate-600">Not necessarily. Some services have separate eligibility, verification, supplier conditions or onboarding steps. Confirm access and charges with TravelIQ.</p></div>
            <div className="py-5"><h3 className="font-bold">Where can I ask about joining?</h3><p className="mt-2 text-sm leading-6 text-slate-600">Use the <Link href="/contact-us/" className="font-semibold text-[#10407A] underline">contact page</Link> or review current <Link href="/irctc-agent-registration/" className="font-semibold text-[#10407A] underline">IRCTC agent registration details</Link>.</p></div>
          </div>
        </section>
      </div>
    </main>
  );
}
