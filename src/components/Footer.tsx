import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const links = [
  ["About TravelIQ", "/about-travel-iq/"],
  ["Our Services", "/our-services/"],
  ["IRCTC Agent Registration", "/irctc-agent-registration/"],
  ["Pay Now", "/pay-now/"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071F3D] text-white">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#EE5326]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-6 inline-flex rounded-2xl bg-white px-4 py-3">
              <Image
                src="/logo.png"
                alt="TravelIQ"
                width={170}
                height={41}
                className="h-auto w-[170px]"
              />
            </div>
            <p className="max-w-sm text-lg font-semibold leading-snug text-white">
              Your Own Travel Intelligence.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/65">
              A trusted partner for smarter journeys and better travel-business growth.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF8A62]" />
                1004G, JMD Megapolis, Sector 48, Gurugram
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#FF8A62]" />
                support@traveliq.in
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#FF8A62]" />
                +91 78350 25030
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#FF8A62]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 transition hover:text-[#FF8A62]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#FF8A62]">
              Connect With Us
            </h3>
            <p className="text-sm leading-6 text-white/65">
              10:00 AM – 06 PM, Monday – Saturday
              <br />
              We are available in the above timings.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.facebook.com/traveliqindia" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-[#EE5326] hover:bg-[#EE5326]">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/traveliqindia/" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-[#EE5326] hover:bg-[#EE5326]">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/traveliq/" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-[#EE5326] hover:bg-[#EE5326]">
                <FaLinkedinIn />
              </a>
              <a href="https://wa.me/917835025025" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-[#25D366] hover:bg-[#25D366]">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <span>© {new Date().getFullYear()} TravelIQ. All rights reserved.</span>
          <span>Design and Developed by CoderLala Technologies Pvt. Ltd.</span>
        </div>
      </div>
    </footer>
  );
}
