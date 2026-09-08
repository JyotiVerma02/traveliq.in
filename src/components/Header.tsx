
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

const nav = [
  ["Home", "/"],
  ["About", "/about-travel-iq/"],
  ["Video Gallery", "/video-gallery/"],
  ["Contact", "/contact-us/"],
  ["Pay now", "/pay-now/"],
];

const services = [
  ["Railway Agent ID", "/pages/services/railway-reservations/"],
  ["IRCTC Domestic Packages", "/pages/services/irctc-domestic-packages/"],
  ["Tour Packages", "/pages/services/irctc-tour-packages/"],
  ["Air Tickets", "/pages/services/online-air-ticket-booking/"],
  ["Bus Tickets", "/pages/services/bus-ticket-booking/"],
  ["Hotel Booking", "/pages/services/online-hotel-booking/"],
  [
    "Class 3 Digital Signature",
    "/pages/services/digital-signature-provider-in-gurgaon/",
  ],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const normalizedPath = pathname.replace(/\/$/, "") || "/";

  const isActive = (href: string) => {
    const normalizedHref = href.replace(/\/$/, "") || "/";

    return (
      normalizedPath === normalizedHref ||
      (normalizedHref !== "/" &&
        normalizedPath.startsWith(`${normalizedHref}/`))
    );
  };

  const servicesActive =
    isActive("/our-services/") ||
    services.some(([, href]) => isActive(href));

  const navClass = (href: string) =>
    `site-nav-link${isActive(href) ? " is-active" : ""}`;

  return (
    <header
      className={`site-header relative z-50 bg-[#FFF8F3]${
        isScrolled ? " is-scrolled" : ""
      }`}
    >
      {/* ================= HEADER ================= */}
      <div className="mx-auto flex h-[98px] w-full max-w-[1500px] items-center justify-between px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          aria-label="TravelIQ home"
          className="shrink-0"
        >
          <Image
            src="/logo.png"
            alt="TravelIQ"
            width={225}
            height={56}
            priority
            className="h-auto w-[185px] sm:w-[205px] lg:w-[220px]"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav
          className="hidden items-center gap-3 xl:flex"
          aria-label="Main navigation"
        >
          {nav.slice(0, 2).map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className={navClass(href)}
            >
              {name}
            </Link>
          ))}

          {/* SERVICES */}
          <div className="group relative">
            <Link
              href="/our-services/"
              className={`site-nav-link flex items-center gap-2${
                servicesActive ? " is-active" : ""
              }`}
            >
              Services

              <ChevronDown
                size={18}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="service-menu">
              {services.map(([name, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={isActive(href) ? "is-active" : ""}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {nav.slice(2).map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className={navClass(href)}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* ================= RIGHT BUTTONS ================= */}
        <div className="hidden items-center gap-4 xl:flex">

          {/* Agent Login */}
          <a
            href="https://b2b.traveliq.in"
            target="_blank"
            rel="noreferrer"
            className="header-login"
          >
            Agent login
          </a>

          {/* Become Agent */}
          <Link
            href="/irctc-agent-registration/"
            className="brand-button"
          >
            Become an Agent
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917835025025"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="header-whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          className="grid h-12 w-12 place-items-center rounded-xl border border-[#10407A]/15 text-[#10407A] transition hover:border-[#EE5326]/40 hover:text-[#EE5326] xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="mobile-menu border-t border-[#10407A]/10 bg-white xl:hidden">
          <nav>
            {nav.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={isActive(href) ? "is-active" : ""}
              >
                {name}
              </Link>
            ))}

            {/* SERVICES */}
            <Link
              href="/our-services/"
              onClick={() => setOpen(false)}
              className={servicesActive ? "is-active" : ""}
            >
              Services
            </Link>

            <div className="ml-3 border-l border-[#10407A]/10 pl-3">
              {services.map(([name, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`text-sm!${
                    isActive(href) ? " is-active" : ""
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </nav>

          {/* MOBILE ACTIONS */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            <a
              href="https://b2b.traveliq.in"
              target="_blank"
              rel="noreferrer"
              className="header-login text-center"
            >
              Agent login
            </a>

            <Link
              href="/irctc-agent-registration/"
              onClick={() => setOpen(false)}
              className="brand-button text-center"
            >
              Join us
            </Link>

            <a
              href="https://wa.me/917835025025"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp us"
              className="header-whatsapp mx-auto"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
