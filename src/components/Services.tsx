"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  ["Air Tickets", "Travel IQ is offering the cheapest fares for all domestic & International air tickets.", "/pages/services/online-air-ticket-booking/", "/images/services/air-tickets.jpg"],
  ["Bus Tickets", "TraveliQ is India's leading provider of online bus ticketing services that provide comfortable bus and train travel.", "/pages/services/bus-ticket-booking/", "/images/services/bus-tickets.jpg"],
  ["Hotel Booking", "You can get the latest deals and offers on hotel bookings all over the world.", "/pages/services/online-hotel-booking/", "/images/services/hotel-booking.jpg"],
  ["IRCTC Domestic Packages", "Book Branded IRCTC Domestic tour packages and earn commission.", "/pages/services/irctc-domestic-packages/", "/images/services/irctc-domestic-packages.jpg"],
  ["Tour Packages", "Best tour packages for domestic and international holidays", "/pages/services/irctc-tour-packages/", "/images/services/tour-packages.jpg"],
  ["IRCTC Agency", "IRCTC Agent Registration in very affordable price. OTP and DC Based Login Authentication", "/irctc-agent-registration/", "/images/services/railway-reservations.jpg"],
] as const;

export default function Services() {
  const servicesSectionRef = useRef<HTMLElement>(null);
  const servicesTrackRef = useRef<HTMLDivElement>(null);
  const wheelLockedRef = useRef(false);

  useEffect(() => {
    const section = servicesSectionRef.current;
    const track = servicesTrackRef.current;

    if (!section || !track) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
        return;
      }

      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      const movingRight = event.deltaY > 0;
      const atStart = track.scrollLeft <= 12;
      const atEnd = track.scrollLeft >= maxScrollLeft - 12;
      const canMoveRight = !atEnd;
      const canMoveLeft = !atStart;

      if ((movingRight && !canMoveRight) || (!movingRight && !canMoveLeft)) {
        return;
      }

      event.preventDefault();

      if (wheelLockedRef.current) {
        return;
      }

      const firstCard = track.firstElementChild as HTMLElement | null;
      const cardStep = firstCard
        ? firstCard.getBoundingClientRect().width + 28
        : 420;

      wheelLockedRef.current = true;
      track.scrollBy({
        left: movingRight ? cardStep : -cardStep,
        behavior: "smooth",
      });

      window.setTimeout(() => {
        wheelLockedRef.current = false;
      }, 320);
    };

    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => section.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section ref={servicesSectionRef} className="orange-services">
      <div className="orange-services__glow" />

      <div className="relative w-full py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="orange-kicker">Our Services</p>
          <h2>Best Travel Services in <span>India</span></h2>
          <p>
            Travel IQ is the best travel agent for Air tickets, Railway
            reservations, Bus Ticket, Hotel Bookings, Tour Packages &amp; VISA
            assistance.
          </p>
        </div>

        <div
          ref={servicesTrackRef}
          className="mt-12 flex w-full snap-x snap-mandatory gap-7 overflow-x-auto px-5 pb-8 pt-2 scrollbar-none sm:px-8 lg:px-16"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overscrollBehaviorX: "contain",
            touchAction: "pan-x pan-y",
            scrollBehavior: "smooth",
            paddingRight: "clamp(32px, 10vw, 180px)",
            scrollPaddingInline: "32px",
          }}
        >
          {services.map(([title, description, href, image], index) => (
            <Link
              href={href}
              key={title}
              className="group flex h-[500px] w-[320px] shrink-0 snap-start flex-col overflow-hidden border border-[#10407A]/10 bg-white shadow-[0_12px_40px_rgba(16,64,122,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EE5326]/25 hover:shadow-[0_22px_55px_rgba(16,64,122,0.11)] sm:w-[360px] lg:w-[380px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#EEF4FA]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A35]/65 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <span className="absolute bottom-4 left-5 text-xs font-bold tracking-[0.18em] text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-[2px] w-7 bg-[#EE5326] transition-all duration-300 group-hover:w-11" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#526174]">
                    Travel Service
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-[#10407A] transition-colors duration-300 group-hover:text-[#EE5326]">
                  {title}
                </h3>

                <p className="mt-3 flex-1 text-base leading-7 text-[#526174]">
                  {description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#10407A]/8 pt-4">
                  <span className="text-sm font-bold text-[#10407A]">
                    Explore Service
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center border border-[#EE5326]/25 text-[#EE5326] transition-all duration-300 group-hover:bg-[#EE5326] group-hover:text-white">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/our-services/" className="orange-primary">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
