import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight, Clock } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/icons";

const quickLinks = [
  { label: "About TravelIQ", href: "/about-travel-iq" },
  { label: "Our Services", href: "/our-services" },
  { label: "IRCTC Pay Now", href: "/pay-now" },
  { label: "Become an Agent", href: "/irctc-agent-registration" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#040C1A] text-white pt-16 pb-12 overflow-hidden border-t border-white/10">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#10407A]/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#EE5326]/12 blur-[120px]" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        {/* ===================================================
            TOP BRANDING SECTION
        ==================================================== */}
        <div className="pb-10 border-b border-white/15">
          {/* Logo directly on background */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="TravelIQ"
              width={250}
              height={60}
              className="h-auto w-[220px] sm:w-[250px] object-contain"
            />
          </div>

          <h2 className="mt-5 text-2xl font-black tracking-tight text-white sm:text-3xl">
            Your Own Travel{" "}
            <span className="text-[#EE5326]">Intelligence</span>.
          </h2>

          <p className="mt-2.5 max-w-2xl text-sm font-medium leading-6 text-white">
            A trusted partner for smarter journeys and better travel-business growth.
          </p>
        </div>

        {/* ===================================================
            MAIN 3-COLUMN CONTENT GRID
        ==================================================== */}
        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          {/* COLUMN 1: CONTACT */}
          <div>
            <div className="mb-7">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#EE5326]">
                CONTACT
              </h3>
              <div className="mt-2 h-[2px] w-8 bg-[#EE5326]" />
            </div>

            <div className="space-y-6">
              {/* Office */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F2D59] text-[#EE5326] border border-white/10 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.08)]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-white">
                    OFFICE
                  </p>
                  <p className="mt-0.5 text-xs font-medium leading-5 text-white">
                    1004G, JMD Megapolis, Sector 48, Gurugram.
                  </p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:support@traveliq.in"
                className="group flex items-start gap-4 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F2D59] text-[#EE5326] border border-white/10 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.08)] group-hover:border-[#EE5326]/50">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-white">
                    EMAIL
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-white group-hover:text-[#EE5326] transition-colors">
                    support@traveliq.in
                  </p>
                </div>
              </a>

              {/* Call Us */}
              <a
                href="tel:+917835025030"
                className="group flex items-start gap-4 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F2D59] text-[#EE5326] border border-white/10 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.08)] group-hover:border-[#EE5326]/50">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-white">
                    CALL US
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-white group-hover:text-[#EE5326] transition-colors">
                    +91 78350 25030
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <div className="mb-7">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#EE5326]">
                QUICK LINKS
              </h3>
              <div className="mt-2 h-[2px] w-8 bg-[#EE5326]" />
            </div>

            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between text-xs font-medium text-white transition-colors hover:text-[#EE5326]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#EE5326] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Callout Card */}
            <Link
              href="/irctc-agent-registration"
              className="group mt-8 flex items-center justify-between rounded-xl border border-[#EE5326]/40 bg-[#0D2240] p-4 shadow-[6px_6px_18px_rgba(0,0,0,0.35),inset_1px_1px_2px_rgba(255,255,255,0.08)] transition-all hover:border-[#EE5326]/70 hover:bg-[#0F294D]"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-[#EE5326]">
                  BECOME AN AGENT
                </p>
                <p className="mt-0.5 text-xs font-medium text-white">
                  Grow your travel business
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#EE5326] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* COLUMN 3: CONNECT WITH US & FOLLOW TRAVELIQ */}
          <div>
            <div className="mb-7">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#EE5326]">
                CONNECT WITH US
              </h3>
              <div className="mt-2 h-[2px] w-8 bg-[#EE5326]" />
            </div>

            {/* Working Hours Card */}
            <div className="rounded-xl border border-white/10 bg-[#0D2240] p-5 shadow-[6px_6px_18px_rgba(0,0,0,0.35),inset_1px_1px_2px_rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-2 text-white">
                <Clock className="h-4 w-4 text-white" />
                <span className="text-[10px] font-black uppercase tracking-wider text-white">
                  WORKING HOURS
                </span>
              </div>
              <p className="mt-3 text-sm font-bold text-white">
                10:00 AM – 06:00 PM
              </p>
              <p className="mt-0.5 text-xs font-medium text-white">
                Monday – Saturday
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-white">
                <span className="h-2 w-2 rounded-full bg-[#25D366] shadow-[0_0_8px_rgba(37,211,102,0.8)]" />
                <span>We are available during these timings.</span>
              </div>
            </div>

            {/* Follow TravelIQ */}
            <div className="mt-7">
              <div className="mb-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#EE5326]">
                  FOLLOW TRAVELIQ
                </h3>
                <div className="mt-2 h-[2px] w-8 bg-[#EE5326]" />
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/traveliqindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow TravelIQ on Facebook"
                  className="transition-transform duration-200 hover:scale-115 !text-white"
                >
                  <FacebookIcon className="h-7 w-7 text-[#1877F2]" />
                </a>

                <a
                  href="https://www.instagram.com/traveliqindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow TravelIQ on Instagram"
                  className="transition-transform duration-200 hover:scale-115"
                >
                  <InstagramIcon className="h-7 w-7 text-[#E4405F]" />
                </a>

                <a
                  href="https://www.linkedin.com/company/traveliq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow TravelIQ on LinkedIn"
                  className="transition-transform duration-200 hover:scale-115"
                >
                  <LinkedInIcon className="h-7 w-7 text-[#0A66C2]" />
                </a>

                <a
                  href="https://wa.me/917835025025"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with TravelIQ on WhatsApp"
                  className="transition-transform duration-200 hover:scale-115"
                >
                  <WhatsAppIcon className="h-7 w-7 text-[#25D366]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM FOOTER BAR
        ==================================================== */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TravelIQ. All rights reserved.</p>
          <p>
            Design and Developed by{" "}
            <span className="font-bold text-white">
              CoderLala Technologies Pvt. Ltd.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
