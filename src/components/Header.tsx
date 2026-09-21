"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";

/* =========================================================
   MAIN NAVIGATION
========================================================= */

const nav = [
  ["Home", "/"],
  ["About", "/about-travel-iq"],
  ["Video Gallery", "/video-gallery"],
  ["Contact", "/contact-us"],
  ["Pay now", "/pay-now"],
] as const;

/* =========================================================
   SERVICES
========================================================= */

const services = [
  ["Railway Agent ID", "/pages/services/railway-reservations"],
  [
    "IRCTC Domestic Packages",
    "/pages/services/irctc-domestic-packages",
  ],
  [
    "Tour Packages",
    "/pages/services/irctc-tour-packages",
  ],
  [
    "Air Tickets",
    "/pages/services/online-air-ticket-booking",
  ],
  [
    "Bus Tickets",
    "/pages/services/bus-ticket-booking",
  ],
  [
    "Hotel Booking",
    "/pages/services/online-hotel-booking",
  ],
  [
    "Class 3 Digital Signature",
    "/pages/services/digital-signature-provider-in-gurgaon",
  ],
] as const;

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =========================================================
     SCROLL DETECTION

     Header height NEVER changes.
     Only shadow/border changes.
  ========================================================= */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        ticking = false;
      });

      ticking = true;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENUS ON ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* =========================================================
     NORMALIZE PATH
  ========================================================= */

  const normalizePath = (path: string) => {
    return path.replace(/\/$/, "") || "/";
  };

  const currentPath = normalizePath(pathname);

  /* =========================================================
     ACTIVE ROUTE
  ========================================================= */

  const isActive = (href: string) => {
    const normalizedHref = normalizePath(href);

    /* Home must match ONLY the homepage */
    if (normalizedHref === "/") {
      return currentPath === "/";
    }

    return (
      currentPath === normalizedHref ||
      currentPath.startsWith(`${normalizedHref}/`)
    );
  };

  /* =========================================================
     SERVICES ACTIVE STATE
  ========================================================= */

  const servicesActive =
    isActive("/our-services") ||
    services.some(([, href]) => isActive(href));

  const isHome = currentPath === "/";

  /* =========================================================
     CLOSE MENU
  ========================================================= */

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* =====================================================
          FIXED HEADER
      ===================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[100]
          w-full

          border-b

          bg-white/95
          backdrop-blur-md

          transition-[box-shadow,border-color,background-color]
          duration-300

          ${
            isScrolled
              ? `
                border-[#10407A]/10
                shadow-[0_8px_30px_rgba(4,12,26,0.08)]
              `
              : `
                border-[#10407A]/[0.06]
                shadow-none
              `
          }
        `}
      >
        {/* ===================================================
            HEADER INNER

            STATIC 80px HEIGHT
        =================================================== */}

        <div
          className="
            mx-auto

            flex
            h-[80px]
            w-full
            max-w-[1500px]

            items-center
            justify-between

            px-4
            sm:px-6
            lg:px-8
            xl:px-10
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            aria-label="TravelIQ home"
            onClick={closeMenu}
            className="
              relative
              z-[120]

              flex
              shrink-0
              items-center

              rounded-lg

              outline-none

              transition-transform
              duration-300

              hover:-translate-y-0.5

              focus-visible:ring-2
              focus-visible:ring-[var(--tiq-orange)]
              focus-visible:ring-offset-2
            "
          >
            <Image
              src="/logo.webp"
              alt="TravelIQ"
              width={1166}
              height={280}
              quality={70}
              priority
              sizes="
                (max-width: 639px) 150px,
                (max-width: 1023px) 175px,
                (max-width: 1279px) 190px,
                205px
              "
              className="
                h-auto
                w-[150px]
                object-contain

                sm:w-[175px]
                lg:w-[190px]
                xl:w-[205px]
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION

              IMPORTANT:
              Desktop navigation starts at XL / 1280px.
              This prevents wrapping at 1024px.
          ================================================= */}

          <nav
            className="
              relative
              z-[110]

              hidden
              xl:block

              xl:ml-auto
              xl:mr-6
            "
            aria-label="Main navigation"
          >
            <div className="flex items-center gap-0.5">
              {/* =============================================
                  HOME
              ============================================= */}

              <NavLink
                href="/"
                active={isActive("/")}
              >
                Home
              </NavLink>

              {/* =============================================
                  ABOUT
              ============================================= */}

              <NavLink
                href="/about-travel-iq"
                active={isActive("/about-travel-iq")}
              >
                About
              </NavLink>

              {/* =============================================
                  SERVICES
              ============================================= */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setServicesOpen(true)
                }
                onMouseLeave={() =>
                  setServicesOpen(false)
                }
              >
                <Link
                  href="/our-services"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  className={`
                    group

                    relative

                    flex
                    items-center
                    gap-1

                    rounded-lg

                    px-3.5
                    py-2.5

                    text-[14px]
                    font-semibold
                    tracking-[0.01em]

                    outline-none

                    transition-colors
                    duration-200

                    focus-visible:ring-2
                    focus-visible:ring-[var(--tiq-orange)]

                    ${
                      servicesActive
                        ? "text-[var(--tiq-orange)]"
                        : `
                          text-[var(--tiq-navy)]
                          hover:text-[var(--tiq-orange)]
                        `
                    }
                  `}
                >
                  Services

                  <ChevronDown
                    size={14}
                    strokeWidth={2.3}
                    className={`
                      transition-transform
                      duration-200

                      ${
                        servicesOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                  {servicesActive && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-1/2

                        h-[2px]
                        w-5

                        -translate-x-1/2

                        rounded-full

                        bg-[var(--tiq-orange)]
                      "
                    />
                  )}
                </Link>

                {/* =========================================
                    SERVICES DROPDOWN
                ========================================= */}

                <div
                  className={`
                    absolute
                    left-1/2
                    top-full
                    z-[300]

                    w-[380px]

                    -translate-x-1/2

                    pt-3

                    transition-all
                    duration-200

                    ${
                      servicesOpen
                        ? `
                          visible
                          translate-y-0
                          opacity-100
                        `
                        : `
                          invisible
                          -translate-y-1
                          opacity-0
                        `
                    }
                  `}
                >
                  <div
                    className="
                      overflow-hidden

                      rounded-[18px]

                      border
                      border-[#10407A]/10

                      bg-white

                      p-2.5

                      shadow-[0_20px_55px_rgba(4,12,26,0.13)]
                    "
                  >
                    {/* DROPDOWN HEADER */}

                    <div
                      className="
                        relative
                        overflow-hidden

                        rounded-[14px]

                        bg-[#F5F8FC]

                        px-4
                        py-3.5
                      "
                    >
                      <div
                        className="
                          pointer-events-none

                          absolute
                          -right-8
                          -top-10

                          h-24
                          w-24

                          rounded-full

                          bg-[var(--tiq-orange)]

                          opacity-[0.07]
                          blur-2xl
                        "
                      />

                      <div
                        className="
                          relative

                          flex
                          items-center
                          justify-between
                        "
                      >
                        <div>
                          <p
                            className="
                              text-[9px]
                              font-extrabold
                              uppercase
                              tracking-[0.22em]

                              text-[var(--tiq-orange)]
                            "
                          >
                            TravelIQ
                          </p>

                          <h3
                            className="
                              mt-1

                              text-[16px]
                              font-bold

                              text-[var(--tiq-navy)]
                            "
                          >
                            Travel Solutions
                          </h3>

                          <p
                            className="
                              mt-0.5

                              text-[11px]
                              font-medium

                              text-[var(--tiq-muted)]
                            "
                          >
                            One platform for your travel
                            business.
                          </p>
                        </div>

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0

                            items-center
                            justify-center

                            rounded-[11px]

                            bg-[var(--tiq-orange)]

                            text-white

                            shadow-[0_7px_16px_rgba(238,83,38,0.18)]
                          "
                        >
                          <ArrowUpRight
                            size={17}
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>
                    </div>

                    {/* SERVICE LIST */}

                    <div className="mt-2 space-y-0.5">
                      {services.map(
                        ([name, href], index) => {
                          const active = isActive(href);

                          return (
                            <Link
                              key={href}
                              href={href}
                              className={`
                                group

                                flex
                                items-center
                                justify-between

                                rounded-[11px]

                                px-3
                                py-2.5

                                outline-none

                                transition-all
                                duration-200

                                focus-visible:ring-2
                                focus-visible:ring-[var(--tiq-orange)]

                                ${
                                  active
                                    ? `
                                      bg-[var(--tiq-orange-soft)]
                                      text-[var(--tiq-orange)]
                                    `
                                    : `
                                      text-[var(--tiq-text)]

                                      hover:bg-[#F5F8FC]
                                      hover:text-[var(--tiq-navy)]
                                    `
                                }
                              `}
                            >
                              <span
                                className="
                                  flex
                                  min-w-0
                                  items-center
                                  gap-2.5
                                "
                              >
                                <span
                                  className={`
                                    flex
                                    h-6
                                    w-6
                                    shrink-0

                                    items-center
                                    justify-center

                                    rounded-md

                                    text-[8px]
                                    font-bold

                                    ${
                                      active
                                        ? `
                                          bg-white
                                          text-[var(--tiq-orange)]
                                        `
                                        : `
                                          bg-[#F1F5F9]
                                          text-[var(--tiq-muted)]
                                        `
                                    }
                                  `}
                                >
                                  {String(
                                    index + 1
                                  ).padStart(2, "0")}
                                </span>

                                <span
                                  className="
                                    truncate

                                    text-[13px]
                                    font-semibold
                                  "
                                >
                                  {name}
                                </span>
                              </span>

                              <ArrowUpRight
                                size={13}
                                className={`
                                  shrink-0

                                  transition-all
                                  duration-200

                                  ${
                                    active
                                      ? `
                                        text-[var(--tiq-orange)]
                                        opacity-100
                                      `
                                      : `
                                        opacity-0

                                        group-hover:translate-x-0.5
                                        group-hover:-translate-y-0.5
                                        group-hover:opacity-70
                                      `
                                  }
                                `}
                              />
                            </Link>
                          );
                        }
                      )}
                    </div>

                    {/* ALL SERVICES */}

                    <Link
                      href="/our-services"
                      className="
                        group

                        mt-2

                        flex
                        items-center
                        justify-between

                        rounded-[12px]

                        bg-[var(--tiq-navy)]

                        px-3.5
                        py-3

                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.11em]

                        !text-white

                        transition-all
                        duration-200

                        hover:bg-[#0B2D5C]
                      "
                    >
                      <span className="!text-white">
                        Explore all services
                      </span>

                      <ArrowUpRight
                        size={14}
                        className="
                          !text-white

                          transition-transform
                          duration-200

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* =============================================
                  VIDEO GALLERY
              ============================================= */}

              <NavLink
                href="/video-gallery"
                active={isActive("/video-gallery")}
              >
                Video Gallery
              </NavLink>

              {/* =============================================
                  CONTACT
              ============================================= */}

              <NavLink
                href="/contact-us"
                active={isActive("/contact-us")}
              >
                Contact
              </NavLink>

              {/* =============================================
                  PAY NOW
              ============================================= */}

              <NavLink
                href="/pay-now"
                active={isActive("/pay-now")}
              >
                Pay now
              </NavLink>
            </div>
          </nav>

          {/* =================================================
              DESKTOP ACTIONS

              Starts at XL to match desktop navigation.
          ================================================= */}

          <div
            className="
              hidden

              items-center
              gap-2

              xl:flex
            "
          >
            {/* AGENT LOGIN */}

            <a
              href="https://b2b.traveliq.in"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group

                flex
                items-center
                gap-1.5

                rounded-lg

                px-3
                py-2

                text-[13px]
                font-semibold
                tracking-[0.02em]

                text-[var(--tiq-navy)]

                outline-none

                transition-colors
                duration-200

                hover:text-[var(--tiq-orange)]

                focus-visible:ring-2
                focus-visible:ring-[var(--tiq-orange)]
              "
            >
              Agent Login

              <ArrowUpRight
                size={13}
                className="
                  transition-transform
                  duration-200

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

            {/* BECOME AN AGENT */}

            <Link
              href="/irctc-agent-registration"
              className="
                group

                flex
                items-center
                gap-1.5

                rounded-[10px]

                bg-[var(--tiq-orange)]

                px-4
                py-2.5

                text-[12px]
                font-bold
                tracking-[0.03em]

                !text-white

                shadow-[0_7px_18px_rgba(238,83,38,0.17)]

                outline-none

                transition-all
                duration-200

                hover:-translate-y-0.5
                hover:bg-[var(--tiq-orange-dark)]

                focus-visible:ring-2
                focus-visible:ring-[var(--tiq-orange)]
                focus-visible:ring-offset-2
              "
            >
              <span className="!text-white">
                Become an Agent
              </span>

              <ArrowUpRight
                size={14}
                className="
                  !text-white

                  transition-transform
                  duration-200

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/917835025025"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with TravelIQ on WhatsApp"
              className="
                group

                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-[10px]

                bg-[#25D366]

                !text-white

                shadow-[0_6px_16px_rgba(37,211,102,0.15)]

                outline-none

                transition-all
                duration-200

                hover:-translate-y-0.5
                hover:shadow-[0_9px_20px_rgba(37,211,102,0.20)]

                focus-visible:ring-2
                focus-visible:ring-[#25D366]
                focus-visible:ring-offset-2
              "
            >
              <WhatsAppIcon
                className="
                  h-[18px]
                  w-[18px]
                  !text-white

                  transition-transform
                  duration-200

                  group-hover:scale-110
                "
              />
            </a>
          </div>

          {/* =================================================
              MOBILE / TABLET MENU BUTTON

              Visible below 1280px.
          ================================================= */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            className="
              relative
              z-[120]

              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-[10px]

              border
              border-[#10407A]/10

              bg-white

              text-[var(--tiq-navy)]

              shadow-[0_4px_12px_rgba(4,12,26,0.06)]

              outline-none

              transition-all
              duration-200

              hover:border-[var(--tiq-orange)]/20
              hover:text-[var(--tiq-orange)]

              focus-visible:ring-2
              focus-visible:ring-[var(--tiq-orange)]

              xl:hidden
            "
          >
            {open ? (
              <X
                size={20}
                strokeWidth={2.4}
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={2.4}
              />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE / TABLET MENU

            Visible below 1280px.
        ===================================================== */}

        <div
          className={`
            overflow-hidden

            border-t
            border-[#10407A]/[0.06]

            bg-white

            transition-[max-height,opacity]
            duration-300

            xl:hidden

            ${
              open
                ? "max-h-[calc(100vh-80px)] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              mx-3
              mb-3
              mt-3

              max-h-[calc(100vh-96px)]

              overflow-y-auto

              rounded-[16px]

              border
              border-[#10407A]/10

              bg-white

              p-2.5

              shadow-[0_14px_35px_rgba(4,12,26,0.09)]
            "
          >
            {/* ===============================================
                MOBILE NAV
            =============================================== */}

            <nav
              aria-label="Mobile navigation"
              className="space-y-0.5"
            >
              {nav.map(([name, href]) => {
                const active = isActive(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className={`
                      group

                      flex
                      min-h-12
                      w-full

                      items-center
                      justify-between

                      rounded-[11px]

                      px-4
                      py-3

                      text-[15px]
                      font-semibold

                      outline-none

                      transition-colors
                      duration-200

                      focus-visible:ring-2
                      focus-visible:ring-[var(--tiq-orange)]

                      ${
                        active
                          ? `
                            bg-[var(--tiq-orange-soft)]
                            text-[var(--tiq-orange)]
                          `
                          : `
                            text-[var(--tiq-navy)]

                            hover:bg-[#F5F8FC]
                            hover:text-[var(--tiq-orange)]
                          `
                      }
                    `}
                  >
                    <span>{name}</span>

                    <ArrowUpRight
                      size={15}
                      className="
                        opacity-35

                        transition-all
                        duration-200

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                );
              })}

              {/* =============================================
                  MOBILE SERVICES
              ============================================= */}

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() =>
                    setServicesOpen((value) => !value)
                  }
                  aria-expanded={servicesOpen}
                  className={`
                    flex
                    min-h-12
                    w-full

                    items-center
                    justify-between

                    rounded-[11px]

                    px-4
                    py-3

                    text-[15px]
                    font-semibold

                    outline-none

                    transition-colors
                    duration-200

                    focus-visible:ring-2
                    focus-visible:ring-[var(--tiq-orange)]

                    ${
                      servicesActive
                        ? `
                          bg-[var(--tiq-orange-soft)]
                          text-[var(--tiq-orange)]
                        `
                        : `
                          text-[var(--tiq-navy)]

                          hover:bg-[#F5F8FC]
                          hover:text-[var(--tiq-orange)]
                        `
                    }
                  `}
                >
                  <span>Services</span>

                  <ChevronDown
                    size={17}
                    strokeWidth={2.3}
                    className={`
                      transition-transform
                      duration-200

                      ${
                        servicesOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden

                    transition-[max-height,opacity]
                    duration-300

                    ${
                      servicesOpen
                        ? "max-h-[700px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div
                    className="
                      ml-3
                      mt-1.5

                      space-y-0.5

                      border-l-2
                      border-[var(--tiq-orange)]/15

                      pl-2.5
                    "
                  >
                    {/* ALL SERVICES */}

                    <Link
                      href="/our-services"
                      onClick={closeMenu}
                      className="
                        group

                        flex
                        min-h-11

                        items-center
                        justify-between

                        rounded-[10px]

                        bg-[#F5F8FC]

                        px-3

                        text-[13px]
                        font-bold

                        text-[var(--tiq-navy)]
                      "
                    >
                      All Services

                      <ArrowUpRight
                        size={14}
                        className="
                          transition-transform

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </Link>

                    {/* SERVICES */}

                    {services.map(
                      ([name, href]) => {
                        const active =
                          isActive(href);

                        return (
                          <Link
                            key={href}
                            href={href}
                            onClick={closeMenu}
                            className={`
                              group

                              flex
                              min-h-11

                              items-center
                              justify-between

                              rounded-[10px]

                              px-3

                              text-[13px]
                              font-medium

                              transition-colors
                              duration-200

                              ${
                                active
                                  ? `
                                    bg-[var(--tiq-orange-soft)]
                                    text-[var(--tiq-orange)]
                                  `
                                  : `
                                    text-[var(--tiq-muted)]

                                    hover:bg-[#F5F8FC]
                                    hover:text-[var(--tiq-navy)]
                                  `
                              }
                            `}
                          >
                            <span>{name}</span>

                            <ArrowUpRight
                              size={13}
                              className="
                                opacity-30

                                transition-all

                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                                group-hover:opacity-100
                              "
                            />
                          </Link>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </nav>

            {/* ===============================================
                MOBILE ACTIONS
            =============================================== */}

            <div className="mt-3 grid gap-2">
              {/* AGENT LOGIN */}

              <a
                href="https://b2b.traveliq.in"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  min-h-12

                  items-center
                  justify-center

                  rounded-[11px]

                  border
                  border-[#10407A]/10

                  bg-white

                  px-4

                  text-[14px]
                  font-semibold

                  text-[var(--tiq-navy)]

                  shadow-[0_3px_10px_rgba(4,12,26,0.04)]

                  transition-colors
                  duration-200

                  hover:border-[var(--tiq-orange)]/20
                  hover:text-[var(--tiq-orange)]
                "
              >
                Agent Login
              </a>

              {/* BECOME AN AGENT */}

              <Link
                href="/irctc-agent-registration"
                onClick={closeMenu}
                className="
                  flex
                  min-h-12

                  items-center
                  justify-center
                  gap-2

                  rounded-[11px]

                  bg-[var(--tiq-orange)]

                  px-4

                  text-[14px]
                  font-bold

                  !text-white

                  shadow-[0_7px_16px_rgba(238,83,38,0.16)]

                  transition-all
                  duration-200

                  hover:bg-[var(--tiq-orange-dark)]
                "
              >
                <span className="!text-white">
                  Become an Agent
                </span>

                <ArrowUpRight
                  size={15}
                  className="!text-white"
                />
              </Link>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with TravelIQ on WhatsApp"
                className="
                  flex
                  min-h-12

                  items-center
                  justify-center
                  gap-2

                  rounded-[11px]

                  bg-[#25D366]

                  px-4

                  text-[14px]
                  font-bold

                  !text-white

                  shadow-[0_7px_16px_rgba(37,211,102,0.14)]

                  transition-transform
                  duration-200

                  hover:-translate-y-0.5
                "
              >
                <WhatsAppIcon
                  className="
                    h-[18px]
                    w-[18px]
                    !text-white
                  "
                />

                <span className="!text-white">
                  WhatsApp
                </span>
              </a>
            </div>

            {/* ===============================================
                HELP CARD
            =============================================== */}

            <div
              className="
                mt-3

                rounded-[12px]

                bg-[#F5F8FC]

                px-4
                py-3.5

                text-center
              "
            >
              <p
                className="
                  text-[11px]
                  font-medium
                  leading-5

                  text-[var(--tiq-muted)]
                "
              >
                Need help getting started?
                <br />

                <span
                  className="
                    font-semibold

                    text-[var(--tiq-navy)]
                  "
                >
                  Talk to a TravelIQ specialist.
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================
          FIXED HEADER SPACING

          Header is always 80px.
      ========================================================= */}

      {!isHome && (
        <div
          className="h-[80px]"
          aria-hidden="true"
        />
      )}
    </>
  );
}

/* =============================================================
   DESKTOP NAV LINK COMPONENT
============================================================= */

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`
        group

        relative

        flex
        items-center

        rounded-lg

        px-3.5
        py-2.5

        text-[14px]
        font-semibold
        tracking-[0.01em]

        outline-none

        transition-colors
        duration-200

        focus-visible:ring-2
        focus-visible:ring-[var(--tiq-orange)]

        ${
          active
            ? "text-[var(--tiq-orange)]"
            : `
              text-[var(--tiq-navy)]
              hover:text-[var(--tiq-orange)]
            `
        }
      `}
    >
      {children}

      {active && (
        <span
          className="
            absolute
            bottom-0
            left-1/2

            h-[2px]
            w-5

            -translate-x-1/2

            rounded-full

            bg-[var(--tiq-orange)]
          "
        />
      )}
    </Link>
  );
}