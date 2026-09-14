
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Travel IQ | TravelIQ",
  description:
    "Get in touch with Travel IQ. Contact us through WhatsApp, phone, email, or visit our office at JMD Megapolis, Gurugram.",
};

/* =========================================================
   NEO / CLAY MORPHISM
========================================================= */

const clayCard =
  "border border-white/90 bg-white shadow-[8px_10px_28px_rgba(16,64,122,0.09),-7px_-7px_22px_rgba(255,255,255,0.95)]";

const clayCardHover =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_16px_35px_rgba(16,64,122,0.13),-8px_-8px_25px_rgba(255,255,255,0.98)]";

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
    bg: "bg-[#1877F2]",
    shadow:
      "shadow-[0_8px_20px_rgba(24,119,242,0.28)] hover:shadow-[0_12px_26px_rgba(24,119,242,0.38)]",
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
    bg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4]",
    shadow:
      "shadow-[0_8px_20px_rgba(221,42,123,0.25)] hover:shadow-[0_12px_26px_rgba(221,42,123,0.38)]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/travel-iq-services-private-limited/",
    icon: FaLinkedinIn,
    bg: "bg-[#0A66C2]",
    shadow:
      "shadow-[0_8px_20px_rgba(10,102,194,0.28)] hover:shadow-[0_12px_26px_rgba(10,102,194,0.4)]",
  },
  {
    name: "YouTube",
    href: "#",
    icon: FaYoutube,
    bg: "bg-[#FF0000]",
    shadow:
      "shadow-[0_8px_20px_rgba(255,0,0,0.24)] hover:shadow-[0_12px_26px_rgba(255,0,0,0.38)]",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#F4F7FB] text-[#0B1728] antialiased">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate min-h-[570px] overflow-hidden sm:min-h-[610px] lg:min-h-[640px]">
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/contact.webp"
            alt="Contact TravelIQ"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Soft image-preserving overlay */}
        <div className="absolute inset-0 -z-10 bg-white/38" />

        {/* Blue/orange depth overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/80 via-white/45 to-white/20" />

        <div className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-[#10407A]/10 blur-3xl" />

        <div className="absolute -right-24 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#EE5326]/10 blur-3xl" />

        {/* Main hero content */}
        <div className="mx-auto flex min-h-[570px] w-full max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[610px] sm:px-6 lg:min-h-[640px] lg:px-8">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 shadow-[6px_7px_18px_rgba(16,64,122,0.08),-5px_-5px_15px_rgba(255,255,255,0.8)] backdrop-blur-md sm:px-5 sm:py-2.5">
            <Link
              href="/"
              className="text-sm font-semibold text-[#7A8493] transition-colors hover:text-[#10407A]"
            >
              Home
            </Link>

            <span className="text-[#EE5326]">/</span>

            <span className="text-sm font-bold text-[#10407A]">
              Contact Us
            </span>
          </div>

          {/* Hero content */}
          <div className="mt-7 flex w-full max-w-4xl flex-col items-center sm:mt-9">
            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EE5326]/10 bg-[#FFF2EC]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#EE5326] shadow-sm sm:px-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />
              Let&apos;s Connect
            </div>

            {/* Heading */}
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#0F2E5E] sm:text-5xl md:text-[58px] lg:text-[64px]">
              Let&apos;s Talk.
              <br />
              <span className="text-[#EE5326]">Let&apos;s Travel.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-balance text-sm font-medium leading-6 text-[#344154] sm:mt-6 sm:text-base sm:leading-7">
              Whether you have a question about our services, need help with
              your travel plans, or simply want to know more about TravelIQ,
              our team is ready to help.
            </p>

            {/* Trust pills */}
            <div className="mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3">
              {[
                "Quick Response",
                "Travel Experts",
                "Dedicated Support",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#344154] shadow-[5px_6px_15px_rgba(16,64,122,0.07)] backdrop-blur-sm sm:px-4 sm:py-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10407A]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-[-1px] left-0 right-0 h-16 sm:h-20">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="h-full w-full"
            fill="#F4F7FB"
          >
            <path d="M0,55 C260,100 480,15 720,45 C950,75 1140,80 1440,35 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFO CARDS
      ===================================================== */}

      <section className="relative z-10 mx-auto -mt-2 w-full max-w-7xl px-4 pb-12 sm:-mt-4 sm:px-6 lg:px-8 lg:pb-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* WhatsApp */}
          <div
            className={`group flex min-h-[205px] flex-col items-center justify-center rounded-[24px] p-6 text-center ${clayCard} ${clayCardHover}`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFFFF5] text-[#25D366] shadow-inner transition duration-300 group-hover:scale-105">
              <FaWhatsapp className="h-6 w-6" />
            </div>

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9AA7B8]">
              WhatsApp
            </p>

            <a
              href="https://wa.me/917835025025"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-base font-bold text-[#0B1728] transition-colors hover:text-[#10407A]"
            >
              +91 78350 25025
            </a>

            <p className="mt-1 text-sm text-[#7A8493]">
              Chat with our team
            </p>
          </div>

          {/* Phone */}
          <div
            className={`group flex min-h-[205px] flex-col items-center justify-center rounded-[24px] p-6 text-center ${clayCard} ${clayCardHover}`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FA] text-[#10407A] shadow-inner transition duration-300 group-hover:scale-105">
              <Phone className="h-6 w-6" />
            </div>

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9AA7B8]">
              Phone
            </p>

            <a
              href="tel:+917835025030"
              className="mt-2 text-base font-bold text-[#0B1728] transition-colors hover:text-[#10407A]"
            >
              +91 78350 25030
            </a>

            <p className="mt-1 text-sm text-[#7A8493]">
              Call us directly
            </p>
          </div>

          {/* Office */}
          <div
            className={`group flex min-h-[205px] flex-col items-center justify-center rounded-[24px] p-6 text-center ${clayCard} ${clayCardHover}`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF1EB] text-[#EE5326] shadow-inner transition duration-300 group-hover:scale-105">
              <MapPin className="h-6 w-6" />
            </div>

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9AA7B8]">
              Office
            </p>

            <p className="mt-2 max-w-[240px] text-sm font-semibold leading-5 text-[#0B1728]">
              Unit 1004G, JMD Megapolis, Sector 48, Gurugram - 122018
            </p>
          </div>

          {/* Email */}
          <div
            className={`group flex min-h-[205px] flex-col items-center justify-center rounded-[24px] p-6 text-center ${clayCard} ${clayCardHover}`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FA] text-[#10407A] shadow-inner transition duration-300 group-hover:scale-105">
              <Mail className="h-6 w-6" />
            </div>

            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9AA7B8]">
              Email
            </p>

            <a
              href="mailto:support@traveliq.in"
              className="mt-2 break-all text-sm font-bold text-[#0B1728] transition-colors hover:text-[#10407A]"
            >
              support@traveliq.in
            </a>

            <p className="mt-1 text-sm text-[#7A8493]">
              Send us an email
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT AREA
      ===================================================== */}

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <div className="w-full lg:col-span-7">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EE5326]">
                Contact Us
              </p>

              <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-[-0.025em] text-[#0B1728] sm:text-4xl">
                Tell us{" "}
                <span className="text-[#EE5326]">what you need.</span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5B6B7F] sm:text-base">
                Have a question, need assistance, or planning your next
                journey? Share your requirements with us and our team will get
                back to you with the right guidance.
              </p>
            </div>

            {/* Form card */}
            <div
              className={`w-full rounded-[28px] p-5 sm:p-7 lg:p-8 ${clayCard}`}
            >
              <ContactForm />
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex w-full flex-col gap-6 lg:col-span-5">
            {/* WhatsApp CTA */}
            <div
              className={`relative overflow-hidden rounded-[28px] bg-[#EEF5FF] p-6 sm:p-8 ${clayCard}`}
            >
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#10407A]/10 blur-2xl" />

              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#EE5326]/8 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#10407A]">
                      Need help?
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#0B1728] sm:text-3xl">
                      Talk to us on{" "}
                      <span className="text-[#25D366]">WhatsApp.</span>
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#25D366] shadow-[5px_7px_18px_rgba(16,64,122,0.08)]">
                    <FaWhatsapp className="h-6 w-6" />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#526174] sm:text-base">
                  Get quick answers from our travel support team. We are here
                  to help with your questions and travel requirements.
                </p>

                {/* IMPORTANT: icon + text WHITE */}
                <a
                  href="https://wa.me/917835025025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-bold !text-white shadow-[0_12px_24px_rgba(37,211,102,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BD5A] hover:shadow-[0_16px_30px_rgba(37,211,102,0.36)]"
                >
                  <FaWhatsapp className="h-5 w-5 !text-white" />

                  <span className="!text-white">
                    Chat on WhatsApp
                  </span>

                  <ArrowRight className="h-4 w-4 !text-white" />
                </a>
              </div>
            </div>

            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}

            <div
              className={`rounded-[28px] p-6 sm:p-8 ${clayCard} ${clayCardHover}`}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#EE5326]">
                Stay Connected
              </span>

              <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-[#0B1728]">
                Follow TravelIQ
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-[#6E7C8F]">
                Stay updated with travel tips, destinations, services, and the
                latest from TravelIQ.
              </p>

              <div className="mt-6 grid grid-cols-4 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.href !== "#" ? "_blank" : undefined}
                      rel={
                        social.href !== "#"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.name}
                      className={`group flex aspect-square w-full items-center justify-center rounded-2xl ${social.bg} ${social.shadow} transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]`}
                    >
                      {/* IMPORTANT: force icon white */}
                      <Icon className="h-5 w-5 !text-white transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                MAP
            ================================================= */}

            <div
              className={`overflow-hidden rounded-[28px] p-2 ${clayCard}`}
            >
              <div className="overflow-hidden rounded-[22px]">
                <iframe
                  title="Travel IQ Location Map"
                  src="https://maps.google.com/maps?q=Travel%20IQ%20Services%20Private%20Limited&t=m&z=14&output=embed&iwloc=near"
                  width="100%"
                  height="320"
                  className="block w-full border-0 sm:h-[350px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

