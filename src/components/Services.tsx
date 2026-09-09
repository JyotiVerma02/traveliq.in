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
      const boundaryTolerance = 24;
      const atStart = track.scrollLeft <= boundaryTolerance;
      const atEnd = track.scrollLeft >= maxScrollLeft - boundaryTolerance;
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
      const targetScrollLeft = Math.max(
        0,
        Math.min(
          maxScrollLeft,
          track.scrollLeft + (movingRight ? cardStep : -cardStep),
        ),
      );

      wheelLockedRef.current = true;
      track.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });

      window.setTimeout(() => {
        wheelLockedRef.current = false;
      }, 220);
    };

    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => section.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section ref={servicesSectionRef} className="bg-[#F4F7FB]">
      <div className="relative w-full py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EE5326]">
            Our Services
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#071F3D] sm:text-5xl lg:text-6xl">
            Best travel services in <span className="text-[#EE5326]">India</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#5A6A80]">
            Air tickets, railway reservations, hotels, buses, tour packages and visa assistance — arranged with care.
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
              className="group flex h-[500px] w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-[24px] border border-[#10407A]/10 bg-white shadow-[0_18px_50px_rgba(16,64,122,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EE5326]/25 hover:shadow-[0_28px_60px_rgba(16,64,122,0.12)] sm:w-[360px] lg:w-[380px]"
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
        <Link
  href="/our-services/"
  className="inline-flex items-center gap-2 rounded-full bg-[#EE5326] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] !text-white transition hover:bg-[#D9471D]"
>
  <span className="!text-white">View All Services</span>
  <ArrowRight size={16} className="!text-white" />
</Link>
        </div>
      </div>
    </section>
  );
}
