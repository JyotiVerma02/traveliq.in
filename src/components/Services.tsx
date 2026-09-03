import Link from "next/link";
import { ArrowRight, Bus, Hotel, Map, Plane, Ticket, TrainFront } from "lucide-react";

const services = [
  ["Air Tickets", "Travel IQ is offering the cheapest fares for all domestic & International air tickets.", "/pages/services/online-air-ticket-booking/", Plane],
  ["Bus Tickets", "TraveliQ is India's leading provider of online bus ticketing services that provide comfortable bus and train travel.", "/pages/services/bus-ticket-booking/", Bus],
  ["Hotel Booking", "You can get the latest deals and offers on hotel bookings all over the world.", "/pages/services/online-hotel-booking/", Hotel],
  ["IRCTC Domestic Packages", "Book Branded IRCTC Domestic tour packages and earn commission.", "/pages/services/irctc-domestic-packages/", TrainFront],
  ["Tour Packages", "Best tour packages for domestic and international holidays", "/pages/services/irctc-tour-packages/", Map],
  ["IRCTC Agency", "IRCTC Agent Registration in very affordable price. OTP and DC Based Login Authentication", "/irctc-agent-registration/", Ticket],
] as const;

export default function Services() { return <section className="orange-services"><div className="orange-services__glow" /><div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-2xl text-center"><p className="orange-kicker">Our Services</p><h2>Best Travel Services in <span>India</span></h2><p>Travel IQ is the best travel agent for Air tickets, Railway reservations, Bus Ticket, Hotel Bookings, Tour Packages &amp; VISA assistance.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, description, href, Icon], index) => <Link href={href} key={title} className="orange-service-card"><span className="service-count">0{index + 1}</span><span className="service-icon"><Icon /></span><h3>{title}</h3><p>{description}</p><span className="service-more">Explore Details <ArrowRight size={16}/></span></Link>)}</div><div className="mt-12 text-center"><Link href="/our-services/" className="orange-primary">View All Services <ArrowRight size={16}/></Link></div></div></section>; }
