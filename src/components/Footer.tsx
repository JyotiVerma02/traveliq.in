import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
} from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  officialSocialIconButtonClass,
  officialSocialIconClass,
  WhatsAppIcon,
} from "@/components/icons";

const usefulLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/term-and-conditions/" },
  {
    label: "Refund & Cancellation Policy",
    href: "/refund-cancellation-policy",
  },
  { label: "Disclaimer Policy", href: "/disclaimer-policy" },
  {
    label: "Frequently Asked Questions",
    href: "/frequently-asked-questions",
  },
];

const irctcSupportLinks = [
  {
    label: "IRCTC Agent Registration",
    href: "/irctc-agent-registration",
  },
  {
    label: "Plans & Registration",
    href: "/signup/registration_form/irctc-agent-registration/",
  },
  {
    label: "IRCTC Principal Service Providers",
    href: "/list-of-irctc-principal-service-providers",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020A17] pb-5 pt-10 text-white sm:pt-12">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#10407A]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#EE5326]/10 blur-[120px]" />

      {/* Flight path */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 select-none overflow-hidden opacity-30">
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full text-sky-500/30"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M -50 380 Q 200 380 350 240 T 380 100"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          <path
            d="M -30 395 Q 220 395 370 245 T 395 85"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-60"
          />

          <g transform="translate(350, 240) rotate(-45) scale(0.8)">
            <path
              fill="currentColor"
              d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
        {/* ===============================
            MAIN FOOTER
        ================================ */}
        <div className="grid grid-cols-1 gap-10 pb-9 md:grid-cols-2 md:gap-x-10 lg:grid-cols-[1.15fr_0.85fr_1fr] lg:gap-0">
          {/* ===============================
              COLUMN 1
              BRAND + CONTACT
          ================================ */}
          <div className="min-w-0 lg:border-r lg:border-white/10 lg:pr-10 xl:pr-14">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.webp"
                alt="TravelIQ"
                width={210}
                height={52}
                className="h-auto w-[170px] object-contain brightness-125 contrast-110 sm:w-[185px]"
              />
            </Link>

            <h2 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
              Your Own Travel{" "}
              <span className="text-[#EE5326]">
                Intelligence.
              </span>
            </h2>

            <p className="mt-2 max-w-sm text-xs leading-5 text-slate-300/80 sm:text-sm">
              A trusted partner for smarter journeys and better travel-business
              growth.
            </p>

            <div className="my-5 h-px max-w-sm bg-white/10" />

            {/* CONTACT */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <ContactIcon>
                  <MapPin className="h-4 w-4" />
                </ContactIcon>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Office
                  </p>

                  <p className="mt-0.5 max-w-xs text-xs font-medium leading-5 text-white sm:text-sm">
                    1004G, JMD Megapolis, Sector 48, Gurugram.
                  </p>
                </div>
              </div>

              <a
                href="mailto:support@traveliq.in"
                className="group flex items-start gap-3"
              >
                <ContactIcon>
                  <Mail className="h-4 w-4" />
                </ContactIcon>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-white transition-colors group-hover:text-[#EE5326] sm:text-sm">
                    support@traveliq.in
                  </p>
                </div>
              </a>

              <a
                href="tel:+917835025030"
                className="group flex items-start gap-3"
              >
                <ContactIcon>
                  <Phone className="h-4 w-4" />
                </ContactIcon>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Call Us
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-white transition-colors group-hover:text-[#EE5326] sm:text-sm">
                    +91 78350 25030
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ===============================
              COLUMN 2
              USEFUL LINKS
          ================================ */}
          <div className="min-w-0 md:border-r md:border-white/10 md:pr-8 lg:px-10 xl:px-12">
            <SectionHeading>Useful Links</SectionHeading>

            <ul className="mt-5 space-y-3.5">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ===============================
              COLUMN 3
              IRCTC + HOURS + SOCIAL
          ================================ */}
          <div className="min-w-0 md:col-span-2 md:border-t md:border-white/10 md:pt-8 lg:col-span-1 lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12">
            {/* IRCTC */}
            <SectionHeading>IRCTC &amp; Support</SectionHeading>

            <ul className="mt-5 space-y-3.5">
              {irctcSupportLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>

            {/* WORK HOURS */}
            <div className="mt-7">
              <SectionHeading>Work Hours</SectionHeading>

              <div className="mt-4 flex max-w-sm items-center gap-3 rounded-xl border border-white/10 bg-[#091A34]/90 p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-[#0B2247] text-[#EE5326]">
                  <Clock className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    10:00 AM – 06:00 PM
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-slate-400">
                    Monday – Saturday
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-6">
              <SectionHeading>Follow TravelIQ</SectionHeading>

              <div className="mt-4 flex items-center gap-3">
                <SocialLink
                  href="https://www.facebook.com/traveliqindia"
                  label="Facebook"
                  className={officialSocialIconButtonClass.facebook}
                >
                  <FacebookIcon className={officialSocialIconClass} />
                </SocialLink>

                <SocialLink
                  href="https://www.instagram.com/traveliqindia/"
                  label="Instagram"
                  className={officialSocialIconButtonClass.instagram}
                >
                  <InstagramIcon className={officialSocialIconClass} />
                </SocialLink>

                <SocialLink
                  href="https://www.linkedin.com/company/traveliq/"
                  label="LinkedIn"
                  className={officialSocialIconButtonClass.linkedin}
                >
                  <LinkedInIcon className={officialSocialIconClass} />
                </SocialLink>

                <SocialLink
                  href="https://wa.me/917835025025"
                  label="WhatsApp"
                  className={officialSocialIconButtonClass.whatsapp}
                >
                  <WhatsAppIcon className={officialSocialIconClass} />
                </SocialLink>
              </div>
            </div>
          </div>
        </div>

        {/* ===============================
            BOTTOM BAR
        ================================ */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} TravelIQ. All rights reserved.
          </p>

          <p className="text-center sm:text-right">
            Design and Developed by{" "}
            <span className="font-semibold text-white">
              CoderLala Technologies Pvt. Ltd.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =====================================
   SMALL INTERNAL COMPONENTS
===================================== */

function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EE5326]">
        {children}
      </h3>

      <div className="mt-2 h-[2px] w-7 bg-[#EE5326]" />
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5 text-xs font-medium text-slate-200 transition-colors hover:text-[#EE5326] sm:text-sm"
    >
      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#EE5326] transition-transform duration-200 group-hover:translate-x-0.5" />

      <span>{children}</span>
    </Link>
  );
}

function ContactIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0B1E3B] text-[#EE5326]">
      {children}
    </div>
  );
}

function SocialLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
}