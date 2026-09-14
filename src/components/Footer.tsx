import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const links = [
  ["About TravelIQ", "/about-travel-iq/"],
  ["Our Services", "/our-services/"],
  ["IRCTC Pay Now", "/pay-now/"],
  ["Become an Agent", "/irctc-agent-registration/"],
];

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-[#060F1F] text-white">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ultra dark glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h- w- rounded-full bg-[#EE5326]/[0.03] blur-" />
      <div className="pointer-events-none absolute right-0 top-0 h- w- rounded-full bg-[#0A2A50]/20 blur-" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-8 lg:py-20">
        {/* TOP BRAND - Same as your dark navy image */}
        <div className="mb-12 border-b border-white/[0.06] pb-10">
          <div className="inline-flex rounded-lg border border-white/5 bg-[#0A182E] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
            <Image src="/logo.png" alt="TravelIQ" width={170} height={41} className="h-auto w- sm:w-" />
          </div>
          <div className="mt-6 max-w-2xl">
            <p className="text-2xl font-black tracking-tight text-white sm:text-">
              Your Own Travel <span className="text-[#EE5326]">Intelligence.</span>
            </p>
            <p className="mt-3 text- leading-6 text-white/50">
              A trusted partner for smarter journeys and better travel-business growth.
            </p>
          </div>
        </div>

        {/* GRID - Exactly like image */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.85fr] lg:gap-12">
          {/* GET IN TOUCH */}
          <div>
            <h3 className="mb-7 text- font-bold uppercase tracking-[0.22em] text-[#FF6B35]">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="group flex items-start gap-4 rounded- border border-white/[0.06] bg-[#0A182E] p-4 transition-all hover:border-white/10 hover:bg-[#0F1E36]">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded- bg-[#111F35] text-[#FF6B35]">
                  <MapPin className="h- w-" />
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text- font-bold uppercase tracking-[0.14em] text-white/55">Office</p>
                  <p className="text- leading-5 text-white/70">1004G, JMD Megapolis, Sector 48, Gurugram</p>
                </div>
              </div>

              <a href="mailto:support@traveliq.in" className="group flex items-start gap-4 rounded- border border-white/[0.06] bg-[#0A182E] p-4 transition-all hover:border-white/10 hover:bg-[#0F1E36]">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded- bg-[#111F35] text-[#FF6B35]">
                  <Mail className="h- w-" />
                </div>
                <div>
                  <p className="mb-1 text- font-bold uppercase tracking-[0.14em] text-white/55">Email</p>
                  <p className="text- text-white/70">support@traveliq.in</p>
                </div>
              </a>

              <a href="tel:+917835025030" className="group flex items-start gap-4 rounded- border border-white/[0.06] bg-[#0A182E] p-4 transition-all hover:border-white/10 hover:bg-[#0F1E36]">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded- bg-[#111F35] text-[#FF6B35]">
                  <Phone className="h- w-" />
                </div>
                <div>
                  <p className="mb-1 text- font-bold uppercase tracking-[0.14em] text-white/55">Call Us</p>
                  <p className="text- text-white/70">+91 78350 25030</p>
                </div>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-7 text- font-bold uppercase tracking-[0.22em] text-[#FF6B35]">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="flex items-center justify-between rounded- px-3 py-3 text-[13.5px] font-medium text-white/60 transition-all hover:bg-[#0A182E] hover:text-white">
                    <span>{label}</span>
                    <ArrowUpRight className="h-4 w-4 text-[#FF6B35]/60" />
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="/irctc-agent-registration/" className="mt-6 flex items-center justify-between rounded- border border-[#FF6B35]/30 bg-[#0F1E36] px-4 py-4 transition-all hover:bg-[#14223E] hover:border-[#FF6B35]/40 group">
              <div>
                <p className="text- font-bold text-[#FF6B35]">Become an Agent</p>
                <p className="mt-1 text- text-white/40">Grow your travel business</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#FF6B35] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* CONNECT WITH US */}
          <div>
            <h3 className="mb-7 text- font-bold uppercase tracking-[0.22em] text-[#FF6B35]">
              Connect With Us
            </h3>
            <div className="rounded- border border-white/[0.06] bg-[#0A182E] p-5">
              <p className="flex items-center gap-2 text- font-bold uppercase tracking-[0.14em] text-white/55">
                <Clock className="h-3.5 w-3.5" /> Working Hours
              </p>
              <p className="mt-3 text- font-bold text-white">10:00 AM – 06:00 PM</p>
              <p className="mt-1 text- text-white/40">Monday – Saturday</p>
              <div className="mt-4 flex items-start gap-2 text- leading-5 text-white/50">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#25D366] shadow-[0_0_6px_rgba(37,211,102,0.5)]" />
                <span>We are available during these timings.</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 text- font-bold uppercase tracking-[0.14em] text-white/55">Follow TravelIQ</p>
              <div className="flex gap-2.5">
                <a
                  href="https://www.facebook.com/traveliqindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow TravelIQ on Facebook"
                  className="grid h-10 w-10 place-items-center rounded- border border-[#FF6B35]/20 bg-[#0A182E] text-white/70 transition-all hover:-translate-y-0.5 hover:bg-[#1877F2] hover:text-white hover:border-transparent"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/traveliqindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow TravelIQ on Instagram"
                  className="grid h-10 w-10 place-items-center rounded- border border-[#FF6B35]/20 bg-[#0A182E] text-white/70 transition-all hover:-translate-y-0.5 hover:bg-[#E4405F] hover:text-white hover:border-transparent"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/traveliq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow TravelIQ on LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded- border border-[#FF6B35]/20 bg-[#0A182E] text-white/70 transition-all hover:-translate-y-0.5 hover:bg-[#0A66C2] hover:text-white hover:border-transparent"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/917835025025"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with TravelIQ on WhatsApp"
                  className="grid h-10 w-10 place-items-center rounded- border border-[#25D366]/30 bg-[#0A2418] text-[#25D366] transition-all hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR - Same as image */}
        <div className="mt-14 flex flex-col gap-3 rounded- border border-white/[0.04] bg-[#08101E] px-5 py-4 text- text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} TravelIQ. All rights reserved.</span>
          <span className="text-white/40">
            Design and Developed by <span className="font-semibold text-white/60">CoderLala Technologies Pvt. Ltd.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}