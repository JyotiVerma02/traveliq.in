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
  [
    "IRCTC Domestic Packages",
    "/pages/services/irctc-domestic-packages/",
  ],
  [
    "Tour Packages",
    "/pages/services/irctc-tour-packages/",
  ],
  [
    "Air Tickets",
    "/pages/services/online-air-ticket-booking/",
  ],
  [
    "Bus Tickets",
    "/pages/services/bus-ticket-booking/",
  ],
  [
    "Hotel Booking",
    "/pages/services/online-hotel-booking/",
  ],
  [
    "Class 3 Digital Signature",
    "/pages/services/digital-signature-provider-in-gurgaon/",
  ],
];

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =========================================================
     SCROLL DETECTION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
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
     CLOSE MENUS ON ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* =========================================================
     ACTIVE ROUTE
  ========================================================= */

  const normalizedPath =
    pathname.replace(/\/$/, "") || "/";

  const isActive = (href: string) => {
    const normalizedHref =
      href.replace(/\/$/, "") || "/";

    return (
      normalizedPath === normalizedHref ||
      (normalizedHref !== "/" &&
        normalizedPath.startsWith(`${normalizedHref}/`))
    );
  };

  const isHome = normalizedPath === "/";

  const servicesActive =
    isActive("/our-services/") ||
    services.some(([, href]) => isActive(href));

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* =========================================================
          FULL WIDTH HEADER
      ========================================================= */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[100]
          w-full
          bg-white
          transition-all
          duration-300

          ${
            isScrolled
              ? "border-b border-[#10407A]/10 shadow-[0_6px_25px_rgba(7,31,61,0.08)]"
              : "border-b border-[#10407A]/[0.06]"
          }
        `}
      >
        {/* =======================================================
            NAV INNER CONTAINER
        ======================================================= */}

        <div
          className={`
            mx-auto
            flex
            w-full
            max-w-[1500px]
            items-center
            justify-between

            px-4
            sm:px-6
            lg:px-8
            xl:px-10

            transition-all
            duration-300

            ${
              isScrolled
                ? "h-[68px]"
                : "h-[80px]"
            }
          `}
        >
          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            href="/"
            aria-label="TravelIQ home"
            onClick={closeMenu}
            className="
              relative
              z-[110]
              flex
              shrink-0
              items-center
              rounded-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            <Image
              src="/logo.png"
              alt="TravelIQ"
              width={225}
              height={56}
              priority
              className={`
                h-auto
                object-contain
                transition-all
                duration-300

                ${
                  isScrolled
                    ? "w-[145px] sm:w-[160px]"
                    : "w-[160px] sm:w-[180px] lg:w-[195px]"
                }
              `}
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav
            className="
              relative
              z-[105]
              hidden
              xl:block
            "
            aria-label="Main navigation"
          >
            <div
              className="
                flex
                items-center
                gap-1
              "
            >
              {/* HOME */}

              <Link
                href="/"
                className={`
                  group
                  relative
                  flex
                  items-center

                  px-3.5
                  py-2.5

                  text-[14px]
                  font-semibold
                  tracking-[0.02em]

                  transition-all
                  duration-300

                  ${
                    isActive("/")
                      ? `
                        text-[var(--tiq-orange)]
                      `
                      : `
                        text-[var(--tiq-navy)]

                        hover:text-[var(--tiq-orange)]
                      `
                  }
                `}
              >
                Home

                {isActive("/") && (
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

              {/* ABOUT */}

              <Link
                href="/about-travel-iq/"
                className={`
                  group
                  relative
                  flex
                  items-center

                  px-3.5
                  py-2.5

                  text-[14px]
                  font-semibold
                  tracking-[0.02em]

                  transition-all
                  duration-300

                  ${
                    isActive("/about-travel-iq/")
                      ? `
                        text-[var(--tiq-orange)]
                      `
                      : `
                        text-[var(--tiq-navy)]

                        hover:text-[var(--tiq-orange)]
                      `
                  }
                `}
              >
                About

                {isActive("/about-travel-iq/") && (
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

              {/* =================================================
                  SERVICES
              ================================================= */}

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
                  href="/our-services/"
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-1

                    px-3.5
                    py-2.5

                    text-[14px]
                    font-semibold
                    tracking-[0.02em]

                    transition-all
                    duration-300

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
                      duration-300

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

                {/* =================================================
                    SERVICES DROPDOWN
                ================================================= */}

                <div
                  className={`
                    absolute
                    left-1/2
                    top-full
                    z-[200]

                    w-[365px]

                    -translate-x-1/2

                    pt-4

                    transition-all
                    duration-300

                    ${
                      servicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }
                  `}
                >
                  <div
                    className="
                      relative
                      overflow-hidden

                      rounded-[20px]

                      border
                      border-[#10407A]/10

                      bg-white

                      p-3

                      shadow-[0_18px_45px_rgba(7,31,61,0.14)]
                    "
                  >
                    {/* DROPDOWN GLOW */}

                    <div
                      className="
                        pointer-events-none
                        absolute

                        -right-10
                        -top-10

                        h-28
                        w-28

                        rounded-full

                        bg-[var(--tiq-orange)]

                        opacity-[0.06]
                        blur-2xl
                      "
                    />

                    {/* DROPDOWN HEADER */}

                    <div
                      className="
                        relative
                        overflow-hidden

                        rounded-[16px]

                        bg-[#F5F8FC]

                        p-4
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <div>
                          <p
                            className="
                              text-[9px]
                              font-black
                              uppercase
                              tracking-[0.25em]
                              text-[var(--tiq-orange)]
                            "
                          >
                            TravelIQ
                          </p>

                          <p
                            className="
                              mt-1
                              text-[16px]
                              font-bold
                              text-[var(--tiq-navy)]
                            "
                          >
                            Travel Solutions
                          </p>

                          <p
                            className="
                              mt-1
                              text-[10px]
                              font-medium
                              text-[var(--tiq-muted)]
                            "
                          >
                            Everything your travel business needs.
                          </p>
                        </div>

                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center

                            rounded-[13px]

                            bg-[var(--tiq-orange)]

                            !text-white
                          "
                        >
                          <ArrowUpRight
                            size={18}
                            strokeWidth={2.5}
                            className="!text-white"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SERVICES */}

                    <div className="mt-2.5 space-y-1">
                      {services.map(
                        ([name, href], index) => (
                          <Link
                            key={href}
                            href={href}
                            className={`
                              group

                              flex
                              items-center
                              justify-between

                              rounded-[13px]

                              border
                              border-transparent

                              px-3.5
                              py-2.5

                              text-[13px]
                              font-semibold

                              transition-all
                              duration-200

                              ${
                                isActive(href)
                                  ? `
                                    border-[var(--tiq-orange)]/10
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
                            <span className="flex items-center gap-2">
                              <span
                                className={`
                                  flex
                                  h-5
                                  w-5
                                  items-center
                                  justify-center

                                  rounded-md

                                  text-[8px]
                                  font-bold

                                  ${
                                    isActive(href)
                                      ? `
                                        bg-white
                                        text-[var(--tiq-orange)]
                                      `
                                      : `
                                        bg-[#F1F5F9]
                                        text-[var(--tiq-navy)]
                                      `
                                  }
                                `}
                              >
                                {String(index + 1).padStart(
                                  2,
                                  "0"
                                )}
                              </span>

                              {name}
                            </span>

                            <ArrowUpRight
                              size={14}
                              className="
                                opacity-0
                                transition-all
                                duration-200

                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                                group-hover:opacity-100
                              "
                            />
                          </Link>
                        )
                      )}
                    </div>

                    {/* ALL SERVICES */}

                    <Link
                      href="/our-services/"
                      className="
                        group

                        mt-2.5

                        flex
                        items-center
                        justify-between

                        rounded-[14px]

                        bg-[var(--tiq-navy)]

                        px-4
                        py-3

                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]

                        !text-white

                        transition-all
                        duration-300

                        hover:bg-[var(--tiq-navy-dark)]
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

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* VIDEO */}

              <Link
                href="/video-gallery/"
                className={`
                  group
                  relative

                  px-3.5
                  py-2.5

                  text-[14px]
                  font-semibold
                  tracking-[0.02em]

                  transition-all
                  duration-300

                  ${
                    isActive("/video-gallery/")
                      ? `
                        text-[var(--tiq-orange)]
                      `
                      : `
                        text-[var(--tiq-navy)]
                        hover:text-[var(--tiq-orange)]
                      `
                  }
                `}
              >
                Video Gallery

                {isActive("/video-gallery/") && (
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

              {/* CONTACT */}

              <Link
                href="/contact-us/"
                className={`
                  group
                  relative

                  px-3.5
                  py-2.5

                  text-[14px]
                  font-semibold
                  tracking-[0.02em]

                  transition-all
                  duration-300

                  ${
                    isActive("/contact-us/")
                      ? `
                        text-[var(--tiq-orange)]
                      `
                      : `
                        text-[var(--tiq-navy)]
                        hover:text-[var(--tiq-orange)]
                      `
                  }
                `}
              >
                Contact

                {isActive("/contact-us/") && (
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

              {/* PAY NOW */}

              <Link
                href="/pay-now/"
                className={`
                  group
                  relative

                  px-3.5
                  py-2.5

                  text-[14px]
                  font-semibold
                  tracking-[0.02em]

                  transition-all
                  duration-300

                  ${
                    isActive("/pay-now/")
                      ? `
                        text-[var(--tiq-orange)]
                      `
                      : `
                        text-[var(--tiq-navy)]
                        hover:text-[var(--tiq-orange)]
                      `
                  }
                `}
              >
                Pay now

                {isActive("/pay-now/") && (
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
            </div>
          </nav>

          {/* =====================================================
              DESKTOP ACTIONS
          ===================================================== */}

          <div
            className="
              relative
              z-[105]

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
              rel="noreferrer"
              className="
                group

                flex
                items-center
                gap-1.5

                px-3
                py-2

                text-[13px]
                font-semibold
                tracking-[0.03em]

                text-[var(--tiq-navy)]

                transition-all
                duration-300

                hover:text-[var(--tiq-orange)]
              "
            >
              Agent Login

              <ArrowUpRight
                size={13}
                className="
                  transition-transform

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

            {/* BECOME AN AGENT */}

            <Link
              href="/irctc-agent-registration/"
              className="
                group

                flex
                items-center
                gap-2

                rounded-[11px]

                bg-[var(--tiq-orange)]

                px-4
                py-2.5

                text-[11px]
                font-semibold
                tracking-[0.05em]

                !text-white

                shadow-[0_7px_18px_rgba(238,83,38,0.18)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[var(--tiq-orange-dark)]
                hover:!text-white
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
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/917835025025"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="
                group

                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-[11px]

                bg-[#25D366]

                !text-white

                shadow-[0_6px_15px_rgba(37,211,102,0.18)]

                transition-all
                duration-300

                hover:-translate-y-0.5
              "
            >
              <FaWhatsapp
                className="
                  h-[19px]
                  w-[19px]
                  !text-white

                  transition-transform
                  duration-300

                  group-hover:scale-110
                "
              />
            </a>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            className="
              relative
              z-[110]

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

              shadow-[0_4px_12px_rgba(7,31,61,0.08)]

              transition-all
              duration-300

              hover:text-[var(--tiq-orange)]

              xl:hidden
            "
          >
            {open ? (
              <X
                size={20}
                strokeWidth={2.5}
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={2.5}
              />
            )}
          </button>
        </div>

        {/* =======================================================
            MOBILE MENU
        ======================================================= */}

        <div
          className={`
            overflow-hidden
            bg-white

            transition-all
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
              mx-4
              mb-4
              mt-2

              max-h-[calc(100vh-95px)]

              overflow-y-auto

              rounded-[18px]

              border
              border-[#10407A]/10

              bg-white

              p-3

              shadow-[0_12px_30px_rgba(7,31,61,0.10)]
            "
          >
            {/* MOBILE NAVIGATION */}

            <nav
              className="space-y-1"
              aria-label="Mobile navigation"
            >
              {nav.map(([name, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={`
                    group

                    flex
                    w-full
                    items-center
                    justify-between

                    rounded-[12px]

                    px-4
                    py-3

                    text-[14px]
                    font-semibold

                    transition-all
                    duration-200

                    ${
                      isActive(href)
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
                    size={14}
                    className="
                      opacity-40

                      transition-all

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}

              {/* MOBILE SERVICES */}

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() =>
                    setServicesOpen(
                      (value) => !value
                    )
                  }
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between

                    rounded-[12px]

                    px-4
                    py-3

                    text-[14px]
                    font-semibold

                    transition-all

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
                  Services

                  <ChevronDown
                    size={17}
                    strokeWidth={2.3}
                    className={`
                      transition-transform
                      duration-300

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
                    transition-all
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
                      mt-2
                      space-y-1

                      border-l-2
                      border-[var(--tiq-orange)]/15

                      pl-3
                    "
                  >
                    {/* ALL SERVICES */}

                    <Link
                      href="/our-services/"
                      onClick={closeMenu}
                      className="
                        group

                        flex
                        items-center
                        justify-between

                        rounded-[11px]

                        bg-[#F5F8FC]

                        px-3
                        py-2.5

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
                      ([name, href]) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={closeMenu}
                          className={`
                            group

                            flex
                            items-center
                            justify-between

                            rounded-[11px]

                            px-3
                            py-2.5

                            text-[13px]
                            font-medium

                            transition-all

                            ${
                              isActive(href)
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
                              opacity-40

                              transition-all

                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:opacity-100
                            "
                          />
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </nav>

            {/* MOBILE ACTIONS */}

            <div className="mt-4 grid gap-2.5">
              {/* LOGIN */}

              <a
                href="https://b2b.traveliq.in"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  min-h-12

                  items-center
                  justify-center

                  rounded-[12px]

                  border
                  border-[#10407A]/10

                  bg-white

                  px-4
                  py-3

                  text-sm
                  font-semibold

                  text-[var(--tiq-navy)]

                  shadow-[0_4px_12px_rgba(7,31,61,0.05)]

                  transition-all

                  hover:text-[var(--tiq-orange)]
                "
              >
                Agent Login
              </a>

              {/* BECOME AGENT */}

              <Link
                href="/irctc-agent-registration/"
                onClick={closeMenu}
                className="
                  flex
                  min-h-12

                  items-center
                  justify-center
                  gap-2

                  rounded-[12px]

                  bg-[var(--tiq-orange)]

                  px-4
                  py-3

                  text-sm
                  font-semibold

                  !text-white

                  shadow-[0_7px_16px_rgba(238,83,38,0.18)]

                  transition-all

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
                rel="noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="
                  flex
                  min-h-12

                  items-center
                  justify-center
                  gap-2

                  rounded-[12px]

                  bg-[#25D366]

                  px-4
                  py-3

                  text-sm
                  font-semibold

                  !text-white

                  shadow-[0_7px_16px_rgba(37,211,102,0.16)]

                  transition-all

                  hover:-translate-y-0.5
                "
              >
                <FaWhatsapp
                  className="
                    h-4
                    w-4
                    !text-white
                  "
                />

                <span className="!text-white">
                  WhatsApp
                </span>
              </a>
            </div>

            {/* HELP CARD */}

            <div
              className="
                mt-4

                rounded-[14px]

                bg-[#F5F8FC]

                px-4
                py-4

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
          NON-HOME PAGE SPACING
      ========================================================= */}

      {!isHome && (
        <div
          className="
            h-[80px]
            lg:h-[82px]
          "
          aria-hidden="true"
        />
      )}
    </>
  );
}