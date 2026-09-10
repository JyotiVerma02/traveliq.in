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
    <footer className="relative mt-20 overflow-hidden bg-[#041426] text-white">
      {/* ============ TOP WAVE SEPARATOR - THIS FIXES MERGING ============ */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[98%] text-[#F5F7FB]">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="h- w-full"
          fill="currentColor"
        >
          <path d="M0,70 C360,10 720,100 1080,60 C1260,40 1350,55 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Background glows - reduced so not merging */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#EE5326]/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h- w- rounded-full bg-[#0A2A50]/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-8 lg:py-20">
        {/* TOP BRAND */}
        <div className="mb-12 flex flex-col gap-7 border-b border-white/[0.07] pb-10 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <div className="inline-flex rounded- border border-white/10 bg-white px-4 py-3 shadow-[8px_10px_22px_rgba(0,0,0,0.3)]">
              <Image src="/logo.png" alt="TravelIQ" width={170} height={41} className="h-auto w- sm:w-" />
            </div>
            <div className="mt-6">
              <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Your Own Travel <span className="text-[#EE5326]">Intelligence.</span>
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                A trusted partner for smarter journeys and better travel-business growth.
              </p>
            </div>
          </div>

          <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/[0.08] bg-[#081C31] px-4 py-2.5 text-xs font-semibold text-white/65">
            <span className="h-2 w-2 rounded-full bg-[#EE5326] shadow-[0_0_9px_rgba(238,83,38,0.45)]" />
            Trusted Travel Solutions Since 2014
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.85fr] lg:gap-12">
          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text- font-bold uppercase tracking-[0.22em] text-[#EE5326]">Get In Touch</h3>
            <p className="mb-6 max-w-md text-sm leading-7 text-white/45">
              Have questions about our travel services or agent solutions? Our team is ready to help you.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-4 rounded- border border-white/[0.07] bg-[#081C31] p-4 transition hover:-translate-y-0.5 hover:bg-[#0A223A]">
                <div className="grid h-10 w-10 place-items-center rounded- bg-[#0B243D] text-[#EE5326]"><MapPin className="h- w-" /></div>
                <div><p className="mb-1 text- font-bold uppercase tracking-[0.16em] text-white/30">Office</p><p className="text-sm leading-6 text-white/65">1004G, JMD Megapolis, Sector 48, Gurugram</p></div>
              </div>
              <a href="mailto:support@traveliq.in" className="flex items-center gap-4 rounded- border border-white/[0.07] bg-[#081C31] p-4 transition hover:-translate-y-0.5 hover:bg-[#0A223A]">
                <div className="grid h-10 w-10 place-items-center rounded- bg-[#0B243D] text-[#EE5326]"><Mail className="h- w-" /></div>
                <div><p className="mb-1 text- font-bold uppercase tracking-[0.16em] text-white/30">Email</p><p className="text-sm text-white/65">support@traveliq.in</p></div>
              </a>
              <a href="tel:+917835025030" className="flex items-center gap-4 rounded- border border-white/[0.07] bg-[#081C31] p-4 transition hover:-translate-y-0.5 hover:bg-[#0A223A]">
                <div className="grid h-10 w-10 place-items-center rounded- bg-[#0B243D] text-[#EE5326]"><Phone className="h- w-" /></div>
                <div><p className="mb-1 text- font-bold uppercase tracking-[0.16em] text-white/30">Call Us</p><p className="text-sm text-white/65">+91 78350 25030</p></div>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text- font-bold uppercase tracking-[0.22em] text-[#EE5326]">Quick Links</h3>
            <ul className="space-y-2.5">
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="flex items-center justify-between rounded- px-4 py-3.5 text-sm font-medium text-white/55 transition hover:bg-[#0A223A] hover:text-white">
                    <span>{label}</span><ArrowUpRight className="h-4 w-4 text-white/20" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/irctc-agent-registration/" className="mt-6 flex items-center justify-between rounded- border border-[#EE5326]/20 bg-[#0A1E32] px-4 py-4 transition hover:bg-[#10263D]">
              <div><p className="text-xs font-bold text-[#EE5326]">Become an Agent</p><p className="mt-1 text- text-white/40">Grow your travel business</p></div>
              <ArrowUpRight className="h-5 w-5 text-[#EE5326]" />
            </Link>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="mb-5 text- font-bold uppercase tracking-[0.22em] text-[#EE5326]">Connect With Us</h3>
            <div className="rounded- border border-white/[0.07] bg-[#081C31] p-5">
              <p className="text- font-bold uppercase tracking-[0.16em] text-white/30">Working Hours</p>
              <p className="mt-2 text-sm font-bold text-white">10:00 AM – 06:00 PM</p>
              <p className="mt-1 text-xs text-white/40">Monday – Saturday</p>
              <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-white/45">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#25D366]" />
                <span>We are available during these timings.</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text- font-bold uppercase tracking-[0.16em] text-white/30">Follow TravelIQ</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/traveliqindia" target="_blank" className="grid h-11 w-11 place-items-center rounded- border border-white/[0.08] bg-[#081C31] text-white/65 transition hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white!"><FaFacebookF className="h- w-!text-white" /></a>
                <a href="https://www.instagram.com/traveliqindia/" target="_blank" className="grid h-11 w-11 place-items-center rounded- border border-white/[0.08] bg-[#081C31] text-white/65 transition hover:-translate-y-1 hover:bg-[#E4405F] hover:text-white!"><FaInstagram className="h- w-!text-white" /></a>
                <a href="https://www.linkedin.com/company/traveliq/" target="_blank" className="grid h-11 w-11 place-items-center rounded- border border-white/[0.08] bg-[#081C31] text-white/65 transition hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white!"><FaLinkedinIn className="h- w-!text-white" /></a>
                <a href="https://wa.me/917835025025" target="_blank" className="grid h-11 w-11 place-items-center rounded- border border-[#25D366]/20 bg-[#08271E] text-[#25D366] transition hover:-translate-y-1 hover:bg-[#25D366] hover:text-white!"><FaWhatsapp className="h- w-!text-white" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded- border border-white/[0.06] bg-[#03101F] px-5 py-5 text-xs text-white/35 sm:px-6 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} TravelIQ. All rights reserved.</span>
          <span>Design and Developed by <span className="font-semibold text-white/50">CoderLala Technologies Pvt. Ltd.</span></span>
        </div>
      </div>
    </footer>
  );
}