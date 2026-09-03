"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const nav = [["Home", "/"], ["About", "/about-travel-iq/"], ["Video Gallery", "/video-gallery/"], ["Contact", "/contact-us/"], ["Pay now", "/pay-now/"]];
const services = [["Railway Agent ID", "/pages/services/railway-reservations/"], ["IRCTC Domestic Packages", "/pages/services/irctc-domestic-packages/"], ["Tour Packages", "/pages/services/irctc-tour-packages/"], ["Air Tickets", "/pages/services/online-air-ticket-booking/"], ["Bus Tickets", "/pages/services/bus-ticket-booking/"], ["Hotel Booking", "/pages/services/online-hotel-booking/"], ["Class 3 Digital Signature", "/pages/services/digital-signature-provider-in-gurgaon/"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  const isActive = (href: string) => {
    const normalizedHref = href.replace(/\/$/, "") || "/";
    return normalizedPath === normalizedHref || (normalizedHref !== "/" && normalizedPath.startsWith(`${normalizedHref}/`));
  };
  const servicesActive = isActive("/our-services/") || services.some(([, href]) => isActive(href));
  const navClass = (href: string) => `site-nav-link${isActive(href) ? " is-active" : ""}`;

  return <header className="site-header"><div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
    <Link href="/" aria-label="TravelIQ home" className="shrink-0"><Image src="/logo.png" alt="TravelIQ" width={166} height={40} priority className="h-auto w-[142px] sm:w-[166px]" /></Link>
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
      {nav.slice(0, 2).map(([name, href]) => <Link key={href} href={href} className={navClass(href)}>{name}</Link>)}
      <div className="group relative"><button className={`site-nav-link flex items-center gap-1${servicesActive ? " is-active" : ""}`}>Services <ChevronDown size={15} /></button><div className="service-menu">{services.map(([name, href]) => <Link key={href} href={href} className={isActive(href) ? "is-active" : ""}>{name}</Link>)}<Link className={`font-bold text-[#ee5326]!${isActive("/our-services/") ? " is-active" : ""}`} href="/our-services/">Explore all services →</Link></div></div>
      {nav.slice(2).map(([name, href]) => <Link key={href} href={href} className={navClass(href)}>{name}</Link>)}
    </nav>
    <div className="hidden items-center gap-3 lg:flex"><a href="https://b2b.traveliq.in" target="_blank" rel="noreferrer" className="header-login">Agent login</a><Link href="/irctc-agent-registration/" className="brand-button">Become an Agent</Link><a href="https://wa.me/917835025025" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" className="header-whatsapp"><FaWhatsapp /></a></div><button className="grid h-10 w-10 place-items-center rounded-xl border border-[#10407a]/15 text-[#10407a] lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
  </div>{open && <div className="mobile-menu lg:hidden"><nav>{nav.map(([name, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className={isActive(href) ? "is-active" : ""}>{name}</Link>)}<Link onClick={() => setOpen(false)} href="/our-services/" className={servicesActive ? "is-active" : ""}>Services</Link><div className="ml-3 border-l border-[#10407a]/10 pl-2">{services.map(([name, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className={`text-sm!${isActive(href) ? " is-active" : ""}`}>{name}</Link>)}</div></nav><div className="mt-4 grid grid-cols-3 gap-2"><a href="https://b2b.traveliq.in" className="header-login text-center">Agent login</a><Link href="/irctc-agent-registration/" className="brand-button text-center">Join us</Link><a href="https://wa.me/917835025025" aria-label="WhatsApp us" className="header-whatsapp mx-auto"><FaWhatsapp /></a></div></div>}</header>;
}
