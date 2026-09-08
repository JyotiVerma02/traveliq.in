"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

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

  const navClass = (active: boolean) =>
    `flex items-center rounded-full px-3.5 py-2 text-[12px] font-bold transition-all duration-200 ${
      isScrolled ? "px-3 py-1.5 text-[11px]" : ""
    } ${
      active
        ? "bg-[#FFF1EB] text-[#EE5326]"
        : "text-[#10407A] hover:bg-[#F4F7FB] hover:text-[#071F3D]"
    }`;

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* =====================================================
          PREMIUM HEADER
      ===================================================== */}
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[100]
          w-full
          transition-all
          duration-500
          ${isScrolled
            ? "py-2"
            : "py-0"
          }
        `}
      >
        {/* Capsule Container */}
        <div
          className={`
            mx-auto
            w-full
            max-w-[1540px]
            px-5
            sm:px-8
            lg:px-12
            xl:px-16
            2xl:px-20
            transition-all
            duration-500
            ${isScrolled
              ? "px-3 sm:px-4"
              : ""
            }
          `}
        >
          <div
            className={`
              relative
              mx-auto
              flex
              w-full
              items-center
              justify-between
              transition-all
              duration-500
              ease-in-out
              ${isScrolled
                ? "h-[64px] rounded-full bg-white/95 px-4 shadow-[0_8px_40px_rgba(16,64,122,0.12)] backdrop-blur-xl sm:px-6"
                : isHome
                  ? "h-[80px] rounded-b-2xl bg-white/95 px-0 shadow-[0_8px_30px_rgba(16,64,122,0.08)] backdrop-blur-xl"
                  : "h-[80px] bg-white/90 px-0 backdrop-blur-md"
              }
            `}
          >
            {/* =================================================
                LOGO
            ================================================= */}
            <Link
              href="/"
              aria-label="TravelIQ home"
              onClick={closeMenu}
              className={`
                relative
                z-[110]
                shrink-0
                transition-all
                duration-300
                hover:opacity-90
                ${isScrolled
                  ? "scale-90"
                  : ""
                }
              `}
            >
              <Image
                src="/logo.png"
                alt="TravelIQ"
                width={225}
                height={56}
                priority
                className={`
                  h-auto
                  transition-all
                  duration-300
                  ${isScrolled
                    ? "w-[120px] sm:w-[140px]"
                    : "w-[155px] sm:w-[175px] lg:w-[195px] xl:w-[205px]"
                  }
                `}
              />
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}
            <nav
              className="hidden items-center xl:flex"
              aria-label="Main navigation"
            >
              <div className="flex items-center gap-0.5">
                <Link href="/" className={navClass(isActive("/"))}>
                  Home
                </Link>

                <Link href="/about-travel-iq/" className={navClass(isActive("/about-travel-iq/"))}>
                  About
                </Link>

                {/* =================================================
                    SERVICES
                ================================================= */}
                <div
                  className="group relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/our-services/"
                    className={`${navClass(servicesActive)} gap-1`}
                  >
                    Services

                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`
                        transition-transform
                        duration-300
                        ${servicesOpen
                          ? "rotate-180"
                          : ""
                        }
                      `}
                    />
                  </Link>

                  {/* =================================================
                      DROPDOWN
                  ================================================= */}
                  <div
                    className={`
                      absolute
                      left-1/2
                      top-full
                      z-[120]
                      w-[340px]
                      -translate-x-1/2
                      pt-3
                      transition-all
                      duration-200
                      ${servicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden rounded-2xl border border-[#10407A]/8 bg-white p-2">
                      {/* DROPDOWN INTRO */}
                      <div className="mb-1 rounded-xl bg-[#F6F9FE] px-4 py-3.5">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#EE5326]">
                              TravelIQ
                            </p>

                            <p className="mt-1 text-sm font-bold text-[#10407A]">
                              Our Services
                            </p>
                          </div>

                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#EE5326]">
                            <ArrowUpRight size={17} />
                          </div>
                        </div>
                      </div>

                      {/* SERVICES */}
                      <div className="space-y-0.5">
                        {services.map(([name, href]) => (
                          <Link
                            key={href}
                            href={href}
                            className={`
                              group
                              flex
                              items-center
                              justify-between
                              rounded-xl
                              px-4
                              py-2.5
                              text-[13px]
                              font-semibold
                              transition-all
                              duration-200
                              ${isActive(href)
                                ? "bg-[#FFF4EE] text-[#EE5326]"
                                : "text-[#334155] hover:bg-[#F6F9FE] hover:text-[#10407A]"
                              }
                            `}
                          >
                            <span>{name}</span>

                            <ArrowUpRight
                              size={15}
                              className={`
                                transition-all
                                duration-200
                                ${isActive(href)
                                  ? "opacity-100"
                                  : "opacity-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                }
                              `}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* VIDEO GALLERY */}
                <Link href="/video-gallery/" className={navClass(isActive("/video-gallery/"))}>
                  Video Gallery
                </Link>

                <Link href="/contact-us/" className={navClass(isActive("/contact-us/"))}>
                  Contact
                </Link>

                <Link href="/pay-now/" className={navClass(isActive("/pay-now/"))}>
                  Pay now
                </Link>
              </div>
            </nav>

            {/* =================================================
                RIGHT ACTIONS
            ================================================= */}
            <div className="hidden items-center gap-2.5 xl:flex">
              {/* AGENT LOGIN */}
              <a
                href="https://b2b.traveliq.in"
                target="_blank"
                rel="noreferrer"
                className={`
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  px-3
                  py-2
                  text-[12px]
                  font-bold
                  transition-colors
                  duration-200
                  ${isScrolled
                    ? "text-[10px] px-2.5 py-1.5"
                    : ""
                  }
                  text-[#10407A] hover:bg-[#F4F7FB]
                `}
              >
                Agent login

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* BECOME AGENT */}
              <Link
                href="/irctc-agent-registration/"
                className={`
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#EE5326]
                  px-4
                  py-2.5
                  text-[12px]
                  font-extrabold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#D94720]
                  ${isScrolled
                    ? "px-3.5 py-2 text-[10px]"
                    : ""
                  }
                `}
              >
                Become an Agent

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with us on WhatsApp"
                className={`
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#25D366]
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#20BD5A]
                  ${isScrolled
                    ? "h-8 w-8"
                    : "h-10 w-10"
                  }
                `}
              >
                <FaWhatsapp className={`
                  ${isScrolled
                    ? "h-3.5 w-3.5"
                    : "h-4.5 w-4.5"
                  }
                `} />
              </a>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
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
                className={`
                  relative
                  z-[110]
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-200
                  xl:hidden
                  ${isScrolled
                    ? "h-8 w-8"
                    : "h-10 w-10"
                  }
                  border-[#10407A]/12 bg-white text-[#10407A] hover:border-[#EE5326]/30 hover:text-[#EE5326]
                `}
            >
              {open ? (
                <X size={isScrolled ? 18 : 20} />
              ) : (
                <Menu size={isScrolled ? 18 : 20} />
              )}
            </button>
          </div>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}
        <div
          className={`
            overflow-hidden
            bg-white
            transition-all
            duration-300
            xl:hidden
            ${isScrolled
              ? "mt-2 mx-3 sm:mx-4 rounded-2xl shadow-[0_8px_40px_rgba(16,64,122,0.12)]"
              : ""
            }
            ${open
              ? "max-h-[calc(100vh-80px)] opacity-100"
              : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto px-5 pb-6 pt-3 sm:px-8">
            <nav
              className="space-y-1"
              aria-label="Mobile navigation"
            >
              {/* MAIN NAV */}
              {nav.map(([name, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    text-[14px]
                    font-bold
                    transition-all
                    ${isActive(href)
                      ? "bg-[#F1F6FC] text-[#10407A]"
                      : "text-[#24364B] hover:bg-[#F6F9FE] hover:text-[#10407A]"
                    }
                  `}
                >
                  <span>{name}</span>
                  <ArrowUpRight size={15} />
                </Link>
              ))}

              {/* SERVICES */}
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
                    rounded-xl
                    px-4
                    py-3
                    text-[14px]
                    font-bold
                    transition-all
                    ${servicesActive
                      ? "bg-[#F1F6FC] text-[#10407A]"
                      : "text-[#24364B] hover:bg-[#F6F9FE]"
                    }
                  `}
                >
                  <span>Services</span>

                  <ChevronDown
                    size={17}
                    className={`
                      transition-transform
                      duration-300
                      ${servicesOpen
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
                    ${servicesOpen
                      ? "max-h-[650px] opacity-100"
                      : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-[#10407A]/8 pl-3">
                    <Link
                      href="/our-services/"
                      onClick={closeMenu}
                      className={`
                        flex
                        items-center
                        justify-between
                        rounded-lg
                        px-3
                        py-2
                        text-sm
                        font-semibold
                        ${isActive("/our-services/")
                          ? "bg-[#F1F6FC] text-[#10407A]"
                          : "text-slate-600 hover:bg-[#F6F9FE] hover:text-[#10407A]"
                        }
                      `}
                    >
                      <span>All Services</span>
                      <ArrowUpRight size={14} />
                    </Link>

                    {services.map(([name, href]) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeMenu}
                        className={`
                          flex
                          items-center
                          justify-between
                          rounded-lg
                          px-3
                          py-2
                          text-sm
                          font-semibold
                          ${isActive(href)
                            ? "bg-[#FFF4EE] text-[#EE5326]"
                            : "text-slate-600 hover:bg-[#F6F9FE] hover:text-[#10407A]"
                          }
                        `}
                      >
                        <span>{name}</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* =================================================
                MOBILE ACTIONS
            ================================================= */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a
                href="https://b2b.traveliq.in"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#10407A]/10
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-extrabold
                  text-[#10407A]
                  transition
                  hover:bg-[#F6F9FE]
                "
              >
                Agent login
              </a>

              <Link
                href="/irctc-agent-registration/"
                onClick={closeMenu}
                className="
                  flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#EE5326]
                  px-4
                  py-2.5
                  text-sm
                  font-extrabold
                  text-white
                  transition
                  hover:bg-[#D94720]
                "
              >
                Join us
              </Link>

              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp us"
                className="
                  flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#25D366]
                  px-4
                  py-2.5
                  text-sm
                  font-extrabold
                  text-white
                  transition
                  hover:bg-[#20BD5A]
                "
              >
                <FaWhatsapp className="h-4.5 w-4.5" />
                WhatsApp
              </a>
            </div>

            {/* MOBILE HELP */}
            <div className="mt-4 rounded-2xl bg-[#F6F9FE] px-4 py-3.5 text-center">
              <p className="text-xs font-semibold leading-5 text-[#687386]">
                Need help with your travel plans?
                <br />
                <span className="font-extrabold text-[#10407A]">
                  Chat with TravelIQ anytime.
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          HEADER SPACING
      ===================================================== */}
      {!isHome && (
        <div
          className={`
            transition-all
            duration-500
            ${isScrolled ? "h-[64px]" : "h-[80px]"}
          `}
          aria-hidden="true"
        />
      )}
    </>
  );
}