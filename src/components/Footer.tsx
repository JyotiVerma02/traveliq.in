import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const links = [
  ["About TravelIQ", "/about-travel-iq/"],
  ["Our Services", "/our-services/"],
  ["IRCTC Agent Registration", "/irctc-agent-registration/"],
  ["Pay Now", "/pay-now/"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071F3D] text-white">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#EE5326]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 -top-24 h-[420px] w-[420px] rounded-full bg-[#EE5326]/15 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[38%] h-[360px] w-[360px] rounded-full bg-[#10407A]/50 blur-3xl" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[12%] top-24 hidden h-28 w-28 rounded-full border border-white/5 lg:block" />

      <div className="pointer-events-none absolute right-[14%] top-28 hidden h-20 w-20 rounded-full border border-[#EE5326]/10 lg:block" />

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-18">
        {/* =======================================================
            TOP BRAND INTRO
        ======================================================= */}
        <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* Logo */}
            <div
              className="
                inline-flex
                rounded-[22px]
                border
                border-white
                bg-white
                px-5
                py-3.5
                shadow-[8px_8px_20px_rgba(0,0,0,0.18),-5px_-5px_14px_rgba(255,255,255,0.05)]
              "
            >
              <Image
                src="/logo.png"
                alt="TravelIQ"
                width={170}
                height={41}
                className="h-auto w-[170px]"
              />
            </div>

            <div className="mt-6">
              <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Your Own Travel{" "}
                <span className="text-[#FF7043]">Intelligence.</span>
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                A trusted partner for smarter journeys and better
                travel-business growth.
              </p>
            </div>
          </div>

          {/* Small trust badge */}
          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.06]
              px-4
              py-2.5
              text-xs
              font-bold
              text-white/75
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.04),4px_4px_12px_rgba(0,0,0,0.12)]
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#FF7043] shadow-[0_0_10px_rgba(238,83,38,0.7)]" />
            Trusted Travel Solutions Since 2014
          </div>
        </div>

        {/* =======================================================
            MAIN GRID
        ======================================================= */}
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr_0.85fr] lg:gap-12">
          {/* =====================================================
              CONTACT
          ===================================================== */}
          <div>
            <h3 className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#FF7043]">
              Get In Touch
            </h3>

            <p className="mb-6 max-w-md text-sm leading-7 text-white/55">
              Have questions about our travel services or agent solutions?
              Our team is ready to help you build a smarter travel business.
            </p>

            <div className="space-y-3">
              {/* Address */}
              <div
                className="
                  group
                  flex
                  items-start
                  gap-4
                  rounded-[20px]
                  border
                  border-white/[0.08]
                  bg-white/[0.045]
                  p-4
                  shadow-[5px_5px_15px_rgba(0,0,0,0.14),inset_-2px_-2px_5px_rgba(255,255,255,0.025)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#EE5326]/30
                  hover:bg-white/[0.065]
                "
              >
                <div
                  className="
                    grid
                    h-10
                    w-10
                    shrink-0
                    place-items-center
                    rounded-[13px]
                    bg-[#EE5326]/10
                    text-[#FF7043]
                    shadow-[inset_2px_2px_5px_rgba(255,255,255,0.04),3px_3px_8px_rgba(0,0,0,0.15)]
                  "
                >
                  <MapPin className="h-[18px] w-[18px]" />
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/35">
                    Office
                  </p>
                  <p className="text-sm leading-6 text-white/70">
                    1004G, JMD Megapolis, Sector 48, Gurugram
                  </p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:support@traveliq.in"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-[20px]
                  border
                  border-white/[0.08]
                  bg-white/[0.045]
                  p-4
                  shadow-[5px_5px_15px_rgba(0,0,0,0.14),inset_-2px_-2px_5px_rgba(255,255,255,0.025)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#EE5326]/30
                  hover:bg-white/[0.065]
                "
              >
                <div
                  className="
                    grid
                    h-10
                    w-10
                    shrink-0
                    place-items-center
                    rounded-[13px]
                    bg-[#EE5326]/10
                    text-[#FF7043]
                    shadow-[inset_2px_2px_5px_rgba(255,255,255,0.04),3px_3px_8px_rgba(0,0,0,0.15)]
                  "
                >
                  <Mail className="h-[18px] w-[18px]" />
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/35">
                    Email
                  </p>
                  <p className="text-sm text-white/70 transition group-hover:text-[#FF7043]">
                    support@traveliq.in
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+917835025030"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-[20px]
                  border
                  border-white/[0.08]
                  bg-white/[0.045]
                  p-4
                  shadow-[5px_5px_15px_rgba(0,0,0,0.14),inset_-2px_-2px_5px_rgba(255,255,255,0.025)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#EE5326]/30
                  hover:bg-white/[0.065]
                "
              >
                <div
                  className="
                    grid
                    h-10
                    w-10
                    shrink-0
                    place-items-center
                    rounded-[13px]
                    bg-[#EE5326]/10
                    text-[#FF7043]
                    shadow-[inset_2px_2px_5px_rgba(255,255,255,0.04),3px_3px_8px_rgba(0,0,0,0.15)]
                  "
                >
                  <Phone className="h-[18px] w-[18px]" />
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/35">
                    Call Us
                  </p>
                  <p className="text-sm text-white/70 transition group-hover:text-[#FF7043]">
                    +91 78350 25030
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}
          <div>
            <h3 className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#FF7043]">
              Quick Links
            </h3>

            <ul className="space-y-2.5">
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      rounded-[17px]
                      border
                      border-transparent
                      px-4
                      py-3.5
                      text-sm
                      font-medium
                      text-white/65
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-white/[0.08]
                      hover:bg-white/[0.045]
                      hover:text-white
                      hover:shadow-[4px_4px_12px_rgba(0,0,0,0.12)]
                    "
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {label}
                    </span>

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        text-white/25
                        transition-all
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:text-[#FF7043]
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Agent CTA */}
            <Link
              href="/irctc-agent-registration/"
              className="
                group
                mt-6
                flex
                items-center
                justify-between
                rounded-[20px]
                border
                border-[#EE5326]/30
                bg-[#EE5326]/10
                px-4
                py-4
                shadow-[5px_5px_14px_rgba(0,0,0,0.12),inset_2px_2px_5px_rgba(255,255,255,0.03)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#EE5326]/50
                hover:bg-[#EE5326]/15
              "
            >
              <div>
                <p className="text-xs font-extrabold text-[#FF7043]">
                  Become an Agent
                </p>
                <p className="mt-1 text-[11px] text-white/45">
                  Grow your travel business
                </p>
              </div>

              <ArrowUpRight
                className="
                  h-5
                  w-5
                  text-[#FF7043]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>

          {/* =====================================================
              CONNECT
          ===================================================== */}
          <div>
            <h3 className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#FF7043]">
              Connect With Us
            </h3>

            {/* Working hours */}
            <div
              className="
                rounded-[22px]
                border
                border-white/[0.08]
                bg-white/[0.045]
                p-5
                shadow-[5px_5px_15px_rgba(0,0,0,0.14),inset_-2px_-2px_5px_rgba(255,255,255,0.025)]
              "
            >
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/35">
                Working Hours
              </p>

              <p className="mt-2 text-sm font-bold text-white">
                10:00 AM – 06:00 PM
              </p>

              <p className="mt-1 text-xs text-white/45">
                Monday – Saturday
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
                <span className="h-2 w-2 rounded-full bg-[#25D366] shadow-[0_0_8px_rgba(37,211,102,0.55)]" />
                We are available during these timings.
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6">
              <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/35">
                Follow TravelIQ
              </p>

              <div className="flex flex-wrap gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/traveliqindia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="
                    group
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-[15px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    text-white/70
                    shadow-[5px_5px_12px_rgba(0,0,0,0.15),inset_2px_2px_5px_rgba(255,255,255,0.025)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#1877F2]/40
                    hover:bg-[#1877F2]
                    hover:text-white
                  "
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/traveliqindia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="
                    group
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-[15px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    text-white/70
                    shadow-[5px_5px_12px_rgba(0,0,0,0.15),inset_2px_2px_5px_rgba(255,255,255,0.025)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#E4405F]/40
                    hover:bg-[#E4405F]
                    hover:text-white
                  "
                >
                  <FaInstagram className="h-[17px] w-[17px]" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/traveliq/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
                    group
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-[15px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    text-white/70
                    shadow-[5px_5px_12px_rgba(0,0,0,0.15),inset_2px_2px_5px_rgba(255,255,255,0.025)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#0A66C2]/40
                    hover:bg-[#0A66C2]
                    hover:text-white
                  "
                >
                  <FaLinkedinIn className="h-[17px] w-[17px]" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917835025025"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="
                    group
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-[15px]
                    border
                    border-[#25D366]/20
                    bg-[#25D366]/10
                    text-[#25D366]
                    shadow-[5px_5px_12px_rgba(0,0,0,0.15),inset_2px_2px_5px_rgba(255,255,255,0.025)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#25D366]
                    hover:bg-[#25D366]
                    hover:text-white
                  "
                >
                  <FaWhatsapp className="h-[19px] w-[19px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-4
            rounded-[22px]
            border
            border-white/[0.08]
            bg-white/[0.035]
            px-5
            py-5
            text-xs
            text-white/40
            shadow-[inset_2px_2px_6px_rgba(255,255,255,0.02),5px_5px_15px_rgba(0,0,0,0.12)]
            sm:px-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>
            © {new Date().getFullYear()} TravelIQ. All rights reserved.
          </span>

          <span className="text-left sm:text-right">
            Design and Developed by{" "}
            <span className="font-semibold text-white/55">
              CoderLala Technologies Pvt. Ltd.
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}