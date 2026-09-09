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
          HEADER
      ========================================================= */}
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[100]
          transition-all
          duration-500
          ${
            isScrolled
              ? "py-3"
              : "py-0"
          }
        `}
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
            px-3
            sm:px-5
            lg:px-8
            xl:px-10
          "
        >
          {/* =====================================================
              MAIN CLAY NAVBAR
          ===================================================== */}
          <div
            className={`
              relative
              flex
              w-full
              items-center
              justify-between
              border
              border-white/90
              bg-[var(--tiq-bg)]
              backdrop-blur-xl
              transition-all
              duration-500

              ${
                isScrolled
                  ? `
                    h-[68px]
                    rounded-[26px]
                    px-3
                    shadow-[
                      12px_14px_32px_rgba(16,64,122,0.14),
                      -10px_-10px_28px_rgba(255,255,255,0.95)
                    ]
                  `
                  : `
                    h-[82px]
                    rounded-b-[30px]
                    px-3
                    shadow-[
                      10px_14px_35px_rgba(16,64,122,0.09),
                      -8px_-8px_28px_rgba(255,255,255,0.95)
                    ]
                  `
              }
            `}
          >
            {/* ===================================================
                INNER CLAY HIGHLIGHT
            =================================================== */}
            <div
              className="
                pointer-events-none
                absolute
                inset-[1px]
                rounded-[inherit]
                border
                border-white/50
                opacity-70
              "
            />

            {/* ===================================================
                LOGO
            =================================================== */}
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
                rounded-[18px]
                p-1.5
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
                  duration-500

                  ${
                    isScrolled
                      ? "w-[125px] sm:w-[140px]"
                      : "w-[145px] sm:w-[165px] lg:w-[185px]"
                  }
                `}
              />
            </Link>

            {/* ===================================================
                DESKTOP NAVIGATION
            =================================================== */}
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
                  rounded-full
                  border
                  border-white/80
                  bg-[var(--tiq-surface-soft)]
                  p-1.5
                  shadow-[
                    inset_3px_3px_8px_rgba(16,64,122,0.035),
                    inset_-3px_-3px_8px_rgba(255,255,255,0.9)
                  ]
                "
              >
                {/* =================================================
                    HOME
                ================================================= */}
                <Link
                  href="/"
                  className={`
                    group
                    relative
                    flex
                    items-center
                    rounded-full
                    px-3.5
                    py-2
                    text-[11px]
                    font-extrabold
                    transition-all
                    duration-300

                    ${
                      isActive("/")
                        ? `
                          bg-[var(--tiq-orange-soft)]
                          text-[var(--tiq-orange)]
                          shadow-[
                            4px_5px_10px_rgba(238,83,38,0.08),
                            inset_-2px_-2px_5px_rgba(255,255,255,0.9)
                          ]
                        `
                        : `
                          text-[var(--tiq-text-blue)]
                          hover:-translate-y-0.5
                          hover:bg-white
                          hover:text-[var(--tiq-orange)]
                          hover:shadow-[
                            4px_5px_10px_rgba(16,64,122,0.06),
                            -3px_-3px_8px_rgba(255,255,255,0.9)
                          ]
                        `
                    }
                  `}
                >
                  Home

                  {isActive("/") && (
                    <span
                      className="
                        absolute
                        bottom-[3px]
                        left-1/2
                        h-[2px]
                        w-3
                        -translate-x-1/2
                        rounded-full
                        bg-[var(--tiq-orange)]
                      "
                    />
                  )}
                </Link>

                {/* =================================================
                    ABOUT
                ================================================= */}
                <Link
                  href="/about-travel-iq/"
                  className={`
                    rounded-full
                    px-3.5
                    py-2
                    text-[11px]
                    font-extrabold
                    transition-all
                    duration-300

                    ${
                      isActive("/about-travel-iq/")
                        ? `
                          bg-[var(--tiq-orange-soft)]
                          text-[var(--tiq-orange)]
                          shadow-[
                            inset_2px_2px_6px_rgba(238,83,38,0.04)
                          ]
                        `
                        : `
                          text-[var(--tiq-text-blue)]
                          hover:-translate-y-0.5
                          hover:bg-white
                          hover:text-[var(--tiq-orange)]
                          hover:shadow-[
                            4px_5px_10px_rgba(16,64,122,0.06),
                            -3px_-3px_8px_rgba(255,255,255,0.9)
                          ]
                        `
                    }
                  `}
                >
                  About
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
                      flex
                      items-center
                      gap-1
                      rounded-full
                      px-3.5
                      py-2
                      text-[11px]
                      font-extrabold
                      transition-all
                      duration-300

                      ${
                        servicesActive
                          ? `
                            bg-[var(--tiq-orange-soft)]
                            text-[var(--tiq-orange)]
                            shadow-[
                              inset_2px_2px_6px_rgba(238,83,38,0.04)
                            ]
                          `
                          : `
                            text-[var(--tiq-text-blue)]
                            hover:-translate-y-0.5
                            hover:bg-white
                            hover:text-[var(--tiq-orange)]
                            hover:shadow-[
                              4px_5px_10px_rgba(16,64,122,0.06),
                              -3px_-3px_8px_rgba(255,255,255,0.9)
                            ]
                          `
                      }
                    `}
                  >
                    Services

                    <ChevronDown
                      size={13}
                      strokeWidth={2.5}
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
                        rounded-[28px]
                        border
                        border-white
                        bg-[var(--tiq-bg)]
                        p-3
                        shadow-[
                          18px_22px_50px_rgba(16,64,122,0.16),
                          -12px_-12px_32px_rgba(255,255,255,0.96)
                        ]
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
                          opacity-[0.07]
                          blur-2xl
                        "
                      />

                      {/* DROPDOWN HEADER */}
                      <div
                        className="
                          relative
                          overflow-hidden
                          rounded-[22px]
                          bg-[var(--tiq-surface-blue)]
                          p-4
                          shadow-[
                            inset_4px_4px_9px_rgba(16,64,122,0.045),
                            inset_-4px_-4px_9px_rgba(255,255,255,0.9)
                          ]
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
                                text-[8px]
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
                                text-[15px]
                                font-black
                                text-[var(--tiq-navy)]
                              "
                            >
                              Travel Solutions
                            </p>

                            <p
                              className="
                                mt-1
                                text-[9px]
                                font-semibold
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
                              rounded-[16px]
                              bg-[var(--tiq-orange)]
                              !text-white
                              shadow-[
                                7px_8px_16px_rgba(238,83,38,0.20),
                                -4px_-4px_10px_rgba(255,255,255,0.85)
                              ]
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
                                rounded-[17px]
                                border
                                border-transparent
                                px-3.5
                                py-2.5
                                text-[11px]
                                font-bold
                                transition-all
                                duration-200

                                ${
                                  isActive(href)
                                    ? `
                                      border-white
                                      bg-[var(--tiq-orange-soft)]
                                      text-[var(--tiq-orange)]
                                      shadow-[
                                        inset_3px_3px_7px_rgba(238,83,38,0.045),
                                        inset_-3px_-3px_7px_rgba(255,255,255,0.85)
                                      ]
                                    `
                                    : `
                                      text-[var(--tiq-text)]
                                      hover:-translate-y-0.5
                                      hover:border-white
                                      hover:bg-white
                                      hover:text-[var(--tiq-navy)]
                                      hover:shadow-[
                                        5px_6px_12px_rgba(16,64,122,0.07),
                                        -4px_-4px_10px_rgba(255,255,255,0.9)
                                      ]
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
                                    font-black

                                    ${
                                      isActive(href)
                                        ? `
                                          bg-white
                                          text-[var(--tiq-orange)]
                                        `
                                        : `
                                          bg-[var(--tiq-surface-blue)]
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
                                size={13}
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
                          rounded-[18px]
                          bg-[var(--tiq-navy)]
                          px-4
                          py-3
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          !text-white
                          shadow-[
                            8px_9px_18px_rgba(16,64,122,0.17),
                            -3px_-3px_8px_rgba(255,255,255,0.55)
                          ]
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:bg-[var(--tiq-navy-dark)]
                          hover:!text-white
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

                {/* =================================================
                    VIDEO
                ================================================= */}
                <Link
                  href="/video-gallery/"
                  className={`
                    rounded-full
                    px-3.5
                    py-2
                    text-[11px]
                    font-extrabold
                    transition-all
                    duration-300

                    ${
                      isActive("/video-gallery/")
                        ? `
                          bg-[var(--tiq-orange-soft)]
                          text-[var(--tiq-orange)]
                        `
                        : `
                          text-[var(--tiq-text-blue)]
                          hover:-translate-y-0.5
                          hover:bg-white
                          hover:text-[var(--tiq-orange)]
                        `
                    }
                  `}
                >
                  Video Gallery
                </Link>

                {/* =================================================
                    CONTACT
                ================================================= */}
                <Link
                  href="/contact-us/"
                  className={`
                    rounded-full
                    px-3.5
                    py-2
                    text-[11px]
                    font-extrabold
                    transition-all
                    duration-300

                    ${
                      isActive("/contact-us/")
                        ? `
                          bg-[var(--tiq-orange-soft)]
                          text-[var(--tiq-orange)]
                        `
                        : `
                          text-[var(--tiq-text-blue)]
                          hover:-translate-y-0.5
                          hover:bg-white
                          hover:text-[var(--tiq-orange)]
                        `
                    }
                  `}
                >
                  Contact
                </Link>

                {/* =================================================
                    PAY NOW
                ================================================= */}
                <Link
                  href="/pay-now/"
                  className={`
                    rounded-full
                    px-3.5
                    py-2
                    text-[11px]
                    font-extrabold
                    transition-all
                    duration-300

                    ${
                      isActive("/pay-now/")
                        ? `
                          bg-[var(--tiq-orange-soft)]
                          text-[var(--tiq-orange)]
                        `
                        : `
                          text-[var(--tiq-text-blue)]
                          hover:-translate-y-0.5
                          hover:bg-white
                          hover:text-[var(--tiq-orange)]
                        `
                    }
                  `}
                >
                  Pay now
                </Link>
              </div>
            </nav>

            {/* ===================================================
                DESKTOP ACTIONS
            =================================================== */}
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
              {/* =================================================
                  AGENT LOGIN
              ================================================= */}
              <a
                href="https://b2b.traveliq.in"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-transparent
                  px-3
                  py-2
                  text-[10px]
                  font-extrabold
                  text-[var(--tiq-navy)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white
                  hover:bg-white
                  hover:text-[var(--tiq-orange)]
                  hover:shadow-[
                    4px_5px_10px_rgba(16,64,122,0.06),
                    -3px_-3px_8px_rgba(255,255,255,0.9)
                  ]
                "
              >
                Agent Login

                <ArrowUpRight
                  size={12}
                  className="
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              {/* =================================================
                  BECOME AN AGENT
              ================================================= */}
              <Link
                href="/irctc-agent-registration/"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-[17px]
                  border
                  border-white/40
                  bg-[var(--tiq-orange)]
                  px-4
                  py-2.5
                  text-[10px]
                  font-black
                  !text-white
                  shadow-[
                    7px_8px_18px_rgba(238,83,38,0.24),
                    -4px_-4px_10px_rgba(255,255,255,0.72)
                  ]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--tiq-orange-dark)]
                  hover:!text-white
                  hover:shadow-[
                    9px_11px_22px_rgba(238,83,38,0.28),
                    -4px_-4px_10px_rgba(255,255,255,0.8)
                  ]
                "
              >
                <span className="!text-white">
                  Become an Agent
                </span>

                <ArrowUpRight
                  size={13}
                  className="
                    !text-white
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              {/* =================================================
                  WHATSAPP
              ================================================= */}
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
                  rounded-[15px]
                  border
                  border-white/70
                  bg-[#25D366]
                  !text-white
                  shadow-[
                    6px_7px_15px_rgba(37,211,102,0.20),
                    -4px_-4px_10px_rgba(255,255,255,0.85)
                  ]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:!text-white
                  hover:shadow-[
                    8px_10px_18px_rgba(37,211,102,0.24),
                    -4px_-4px_10px_rgba(255,255,255,0.9)
                  ]
                "
              >
                <FaWhatsapp
                  className="
                    h-[18px]
                    w-[18px]
                    !text-white
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            </div>

            {/* ===================================================
                MOBILE MENU BUTTON
            =================================================== */}
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
                rounded-[15px]
                border
                border-white
                bg-[var(--tiq-bg)]
                text-[var(--tiq-navy)]
                shadow-[
                  5px_6px_12px_rgba(16,64,122,0.10),
                  -4px_-4px_10px_rgba(255,255,255,0.95)
                ]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:text-[var(--tiq-orange)]
                active:translate-y-0
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

          {/* =====================================================
              MOBILE MENU
          ===================================================== */}
          <div
            className={`
              overflow-hidden
              transition-all
              duration-500
              xl:hidden

              ${
                open
                  ? "max-h-[calc(100vh-90px)] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div
              className="
                mt-3
                max-h-[calc(100vh-95px)]
                overflow-y-auto
                rounded-[28px]
                border
                border-white
                bg-[var(--tiq-bg)]
                p-3
                shadow-[
                  14px_17px_38px_rgba(16,64,122,0.14),
                  -8px_-8px_25px_rgba(255,255,255,0.95)
                ]
              "
            >
              {/* =================================================
                  MOBILE NAVIGATION
              ================================================= */}
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
                      rounded-[17px]
                      border
                      border-transparent
                      px-4
                      py-3
                      text-[13px]
                      font-extrabold
                      transition-all
                      duration-200

                      ${
                        isActive(href)
                          ? `
                            border-white
                            bg-[var(--tiq-orange-soft)]
                            text-[var(--tiq-orange)]
                            shadow-[
                              inset_3px_3px_7px_rgba(238,83,38,0.04),
                              inset_-3px_-3px_7px_rgba(255,255,255,0.9)
                            ]
                          `
                          : `
                            text-[var(--tiq-navy)]
                            hover:-translate-y-0.5
                            hover:border-white
                            hover:bg-white
                            hover:text-[var(--tiq-orange)]
                            hover:shadow-[
                              5px_6px_12px_rgba(16,64,122,0.06),
                              -4px_-4px_10px_rgba(255,255,255,0.9)
                            ]
                          `
                      }
                    `}
                  >
                    <span>{name}</span>

                    <ArrowUpRight
                      size={14}
                      className="
                        opacity-50
                        transition-all
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                ))}

                {/* =================================================
                    MOBILE SERVICES
                ================================================= */}
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
                      rounded-[17px]
                      border
                      border-transparent
                      px-4
                      py-3
                      text-[13px]
                      font-extrabold
                      transition-all

                      ${
                        servicesActive
                          ? `
                            border-white
                            bg-[var(--tiq-orange-soft)]
                            text-[var(--tiq-orange)]
                          `
                          : `
                            text-[var(--tiq-navy)]
                            hover:bg-white
                            hover:text-[var(--tiq-orange)]
                          `
                      }
                    `}
                  >
                    Services

                    <ChevronDown
                      size={17}
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
                        border-[var(--tiq-navy)]/10
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
                          rounded-[14px]
                          bg-[var(--tiq-surface-blue)]
                          px-3
                          py-2.5
                          text-[12px]
                          font-black
                          text-[var(--tiq-navy)]
                          shadow-[
                            inset_2px_2px_6px_rgba(16,64,122,0.035),
                            inset_-2px_-2px_6px_rgba(255,255,255,0.9)
                          ]
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
                              rounded-[14px]
                              px-3
                              py-2.5
                              text-[12px]
                              font-semibold
                              transition-all

                              ${
                                isActive(href)
                                  ? `
                                    bg-[var(--tiq-orange-soft)]
                                    text-[var(--tiq-orange)]
                                  `
                                  : `
                                    text-[var(--tiq-muted)]
                                    hover:bg-white
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

              {/* =================================================
                  MOBILE ACTIONS
              ================================================= */}
              <div className="mt-4 grid gap-2.5">
                {/* =================================================
                    MOBILE LOGIN
                ================================================= */}
                <a
                  href="https://b2b.traveliq.in"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    min-h-12
                    items-center
                    justify-center
                    rounded-[17px]
                    border
                    border-white
                    bg-[var(--tiq-bg)]
                    px-4
                    py-3
                    text-sm
                    font-extrabold
                    text-[var(--tiq-navy)]
                    shadow-[
                      6px_7px_14px_rgba(16,64,122,0.08),
                      -5px_-5px_12px_rgba(255,255,255,0.95)
                    ]
                    transition-all
                    hover:-translate-y-0.5
                    hover:text-[var(--tiq-orange)]
                  "
                >
                  Agent Login
                </a>

                {/* =================================================
                    MOBILE BECOME AGENT
                ================================================= */}
                <Link
                  href="/irctc-agent-registration/"
                  onClick={closeMenu}
                  className="
                    flex
                    min-h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-[17px]
                    border
                    border-white/40
                    bg-[var(--tiq-orange)]
                    px-4
                    py-3
                    text-sm
                    font-black
                    !text-white
                    shadow-[
                      8px_9px_18px_rgba(238,83,38,0.22),
                      -4px_-4px_10px_rgba(255,255,255,0.7)
                    ]
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-[var(--tiq-orange-dark)]
                    hover:!text-white
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

                {/* =================================================
                    MOBILE WHATSAPP
                ================================================= */}
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
                    rounded-[17px]
                    border
                    border-white/70
                    bg-[#25D366]
                    px-4
                    py-3
                    text-sm
                    font-black
                    !text-white
                    shadow-[
                      7px_8px_18px_rgba(37,211,102,0.18),
                      -4px_-4px_10px_rgba(255,255,255,0.8)
                    ]
                    transition-all
                    hover:-translate-y-0.5
                    hover:!text-white
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

              {/* =================================================
                  HELP CARD
              ================================================= */}
              <div
                className="
                  mt-4
                  rounded-[18px]
                  bg-[var(--tiq-surface-blue)]
                  px-4
                  py-4
                  text-center
                  shadow-[
                    inset_3px_3px_8px_rgba(16,64,122,0.035),
                    inset_-3px_-3px_8px_rgba(255,255,255,0.9)
                  ]
                "
              >
                <p
                  className="
                    text-[11px]
                    font-semibold
                    leading-5
                    text-[var(--tiq-muted)]
                  "
                >
                  Need help getting started?
                  <br />

                  <span
                    className="
                      font-black
                      text-[var(--tiq-navy)]
                    "
                  >
                    Talk to a TravelIQ specialist.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================
          NON-HOME PAGE SPACING
      ========================================================= */}
      {!isHome && (
        <div
          className={
            isScrolled
              ? "h-[84px]"
              : "h-[82px]"
          }
          aria-hidden="true"
        />
      )}
    </>
  );
}