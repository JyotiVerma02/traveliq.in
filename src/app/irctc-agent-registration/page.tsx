import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  JsonLd,
  getBreadcrumbSchema,
  getServiceSchema,
} from "@/components/JsonLd";
import { absoluteUrl, canonicalUrl, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, OG_IMAGE_PATH, WHATSAPP_URL } from "@/lib/site";
import { agentFaqItems } from "@/lib/agent-faqs";
import {
  CheckCircle2,
  ShieldCheck,
  FileText,
  HelpCircle,
  PhoneCall,
  ArrowRight,
  ExternalLink,
  Building2,
  Mail,
  CreditCard,
  UserCheck,
  Wallet,
  Zap,
  Award,
  Sparkles,
  Check,
  BadgePercent,
  Clock,
  Briefcase,
  Coins,
  Headphones,
  MapPin,
  Ticket,
  LogIn,
  Plane,
  CircleX,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

const pagePath = "/irctc-agent-registration";
const pageUrl = canonicalUrl(pagePath);

const faqItems = agentFaqItems;

const pricingPlans = [
  {
    name: "OTP Agent Login",
    tagline: "OTP-based authentication option",
    price: "₹ 500",
    gst: "+ 18% GST",
    popular: true,
    activation: "Timeline on confirmation",
    features: [
      "Login from any PC, Laptop, or Smartphone",
      "Instant Mobile OTP Login Authentication",
      "Applicable agent commission and charges, subject to current terms",
      "Print your Agency Name & Address on Tickets",
      "Agent booking access, subject to applicable IRCTC rules",
      "Dedicated WhatsApp & phone helpline",
    ],
    cta: "Apply for OTP Login",
    href: "/signup/registration_form/irctc-agent-registration/?plan=otp",
  },
  {
    name: "DSC Agent Login",
    tagline: "USB digital-signature authentication option",
    price: "₹ 1,500",
    gst: "+ 18% GST",
    popular: false,
    activation: "Timeline on confirmation",
    features: [
      "USB Dongle Digital Signature Authentication",
      "Digital-signature authentication with an applicable USB dongle",
      "Applicable agent commission and charges, subject to current terms",
      "Print your Agency Name & Address on Tickets",
      "Agent booking access, subject to applicable IRCTC rules",
      "Agent support and onboarding guidance",
      "Windows PC & Laptop Compatible",
    ],
    cta: "Apply for DSC Login",
    href: "/signup/registration_form/irctc-agent-registration/?plan=dsc",
  },
];

const resourceCards = [
  {
    title: "IRCTC Registration Fee",
    subtitle: "Registration fee starting from ₹500 + applicable GST",
    desc: "Review the current registration charge, GST, and applicable terms before applying.",
    link: "/signup/registration_form/irctc-agent-registration/",
    btnText: "Apply Now",
    icon: CreditCard,
  },
  {
    title: "IRCTC Agent Sign Up",
    subtitle: "Fast Digital Onboarding",
    desc: "Complete the online application and upload the applicable documents. Processing time depends on verification and onboarding requirements.",
    link: "/signup/registration_form/irctc-agent-registration/",
    btnText: "Register Online",
    icon: UserCheck,
  },
  {
    title: "Online Registration Form",
    subtitle: "Digital Application",
    desc: "IRCTC agent registration is completed online; the former registration PDF has been replaced by the online form.",
    link: "/signup/registration_form/irctc-agent-registration/",
    btnText: "Register Online",
    icon: FileText,
  },
  {
    title: "Monthly Maintenance",
    subtitle: "Applicable monthly maintenance",
    desc: "Monthly charges may apply depending on your selected setup. Confirm the current amount and terms before registering.",
    link: "/contact-us",
    btnText: "Ask About Charges",
    icon: Wallet,
  },
  {
    title: "Authorized PSP Directory",
    subtitle: "Page 5, Entry 21",
    desc: "Verify TravelIQ on the official Indian Railways Principal Service Provider directory.",
    link: "/list-of-irctc-principal-service-providers/",
    btnText: "View PSP Directory",
    icon: ShieldCheck,
    external: false,
  },
  {
    title: "ID Activation Status",
    subtitle: "Quick Verification",
    desc: "Contact TravelIQ support for your document verification and IRCTC ID activation status.",
    link: "/contact-us",
    btnText: "Contact Support",
    icon: CheckCircle2,
  },
];

const testimonials = [
  {
    name: "Subhash Sharma",
    role: "TravelIQ customer",
    date: "July 2, 2022",
    review:
      "Good travel agency last trip enjoyed a lot only because of your service. TravelIQ agent support is fast and reliable!",
  },
  {
    name: "Mr Shahid",
    role: "TravelIQ customer",
    date: "June 29, 2022",
    review:
      "I got agency within mentioned working days. Today I booked my 1st ticket with TravelIQ team support. Great WhatsApp response!",
  },
  {
    name: "Rahul Verma",
    role: "Agency Owner, Delhi",
    date: "August 15, 2022",
    review:
      "Very smooth agent onboarding. OTP login works from mobile and PC easily. Highly recommended for travel business owners!",
  },
];

export const metadata: Metadata = {
  title: "IRCTC Agent Registration Online | IRCTC Agent ID | TravelIQ",
  description:
    "Explore IRCTC Agent Registration Online with TravelIQ, including applicable fees, documents, OTP and DSC authentication, registration steps and agent support.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "IRCTC Agent Registration Online | IRCTC Agent ID | TravelIQ",
    description:
      "Explore IRCTC agent registration with TravelIQ, including authentication options, documents, fees and dedicated agent support.",
    url: pageUrl,
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
        width: 1200,
        height: 630,
        alt: "IRCTC Agent Registration Online TravelIQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCTC Agent Registration Online | IRCTC Agent ID | TravelIQ",
    description:
      "Explore IRCTC agent registration with TravelIQ, including authentication options, documents, fees and dedicated agent support.",
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

export default function IrcTcAgentRegistrationPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: canonicalUrl("/") },
    { name: "IRCTC Agent Registration", item: pageUrl },
  ]);

  const serviceSchema = getServiceSchema(
    "IRCTC Agent Registration",
    "Registration and onboarding guidance for travel businesses exploring an applicable IRCTC agent setup in India.",
    pageUrl
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#F6F9FE] text-slate-800">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />

      {/* ===================================================
          HERO SECTION
      ==================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#040C1A] via-[#0B2D5C] to-[#10407A] pb-20 pt-10 text-white sm:pb-28 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#EE5326]/20 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#3B82F6]/20 blur-[140px]" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs font-semibold text-white/70 sm:text-sm"
          >
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-[#EE5326]"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-[#FFD966]">
              IRCTC Agent Registration
            </span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* LEFT */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-400/30 bg-[#EE5326]/15 px-4 py-2 shadow-inner backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-[#FFD966]" />

                <span className="text-xs font-bold uppercase tracking-wider text-orange-200">
                  IRCTC Agent Registration
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                IRCTC Agent Registration{" "}
                <span className="bg-gradient-to-r from-[#FFD966] via-orange-300 to-[#EE5326] bg-clip-text text-transparent">
                  Online
                </span>
              </h1>

              <p className="max-w-2xl text-base font-normal leading-relaxed text-slate-200 sm:text-lg">
                <strong className="block text-white">
                  Build your travel business with step-by-step agent registration guidance.
                </strong>
                Compare OTP and DSC authentication, prepare your documents, and follow a clear application process with TravelIQ support.
              </p>

              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                <div className="group rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.035] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:bg-white/10 hover:shadow-xl">
                  <div className="flex items-center gap-2 text-[#FFD966]">
                    <BadgePercent className="h-[18px] w-[18px] shrink-0" />

                    <span className="text-xs font-bold uppercase tracking-wider">
                      Applicable terms
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-black text-white">
                    Commission as applicable
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.035] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:bg-white/10 hover:shadow-xl">
                  <div className="flex items-center gap-2 text-[#3B82F6]">
                    <Clock className="h-[18px] w-[18px] shrink-0" />

                    <span className="text-xs font-bold uppercase tracking-wider">
                      Processing
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-black text-white">
                    Timeline on confirmation
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.035] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:bg-white/10 hover:shadow-xl">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Coins className="h-[18px] w-[18px] shrink-0" />

                    <span className="text-xs font-bold uppercase tracking-wider">
                      Registration fee
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-black text-white">
                    From ₹ 500 + GST
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/signup/registration_form/irctc-agent-registration/"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#EE5326] px-6 py-3.5 text-sm font-extrabold !text-white shadow-xl shadow-orange-950/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#D9471D] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#EE5326] focus:ring-offset-2 focus:ring-offset-[#0B2D5C] sm:text-base"
                >
                  <span className="!text-white">
                    Register as an IRCTC Agent
                  </span>

                  <ArrowRight className="h-5 w-5 !text-white transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold !text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/20 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 sm:text-base"
                >
                  <WhatsAppIcon className="h-5 w-5 !text-white transition-transform duration-300 group-hover:scale-110" />

                  <span className="!text-white">
                    Talk to an Expert
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] sm:p-6">
                <div className="absolute -right-0 -top-3.5 rounded-full bg-gradient-to-r from-[#EE5326] to-amber-500 px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
                  Transparent pricing
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#06162d] p-5 sm:p-7">
                  <div className="absolute -right-16 -top-12 h-48 w-48 rounded-full border border-sky-300/15" />

                  <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD966]">
                        TravelIQ Agent
                      </p>

                      <h2 className="mt-1 text-xl font-bold text-white">
                        Agent Dashboard
                      </h2>
                    </div>

                    <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                      Secure access
                    </span>
                  </div>

                  <div className="relative mt-6 grid grid-cols-2 gap-3 text-sm">
                    {[
                      ["Railway booking", "Agent services"],
                      ["Agent ID", "••••••"],
                      ["Customer tickets", "Manage bookings"],
                      ["Support", "TravelIQ assistance"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-lg"
                      >
                        <p className="text-xs text-slate-400">{label}</p>

                        <p className="mt-1 font-bold text-white">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-5 flex items-center gap-3 text-xs font-semibold text-sky-200">
                    <span className="h-px flex-1 bg-sky-300/30" />
                    Railway · Air · Bus · Hotel
                    <span className="h-px flex-1 bg-sky-300/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
          {[
            ["Registration fee", "From ₹500 + GST"],
            ["Authentication", "OTP or DSC"],
            ["Documents", "PAN, Aadhaar & address proof"],
            ["Agent support", "WhatsApp & phone assistance"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-[0_8px_20px_rgba(16,64,122,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_14px_28px_rgba(238,83,38,0.09)] sm:px-6"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {label}
              </p>

              <p className="mt-1 text-sm font-bold text-[#0B2D5C]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================
          VERIFY OFFICIAL IRCTC LICENSE BANNER
      ==================================================== */}
      <section className="relative z-20 border-y border-[#EE5326]/30 bg-gradient-to-r from-[#040C1A] via-[#0B2D5C] to-[#10407A] py-8 text-white shadow-lg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl md:flex-row md:items-center md:justify-between sm:p-8">
            <div className="flex max-w-3xl items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EE5326] text-white shadow-lg">
                <ShieldCheck className="h-7 w-7 !text-white" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-extrabold text-white">
                    Verify TravelIQ&apos;s IRCTC PSP Listing
                  </h3>

                  <span className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                    Directory listing
                  </span>
                </div>

                <p className="mt-1.5 text-sm font-normal leading-relaxed text-slate-200">
                  TravelIQ is listed as an IRCTC Principal Service Provider,
                  shown as{" "}
                  <b className="text-[#FFD966]">
                    Entry No. 21 on Page 5
                  </b>{" "}
                  of the official IRCTC Authorized PSP directory.
                </p>
              </div>
            </div>

            <a
              href="https://contents.irctc.co.in/en/IRCTC%20Authorised%20Principal%20Service%20Providers.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-2xl bg-[#EE5326] px-7 py-4 text-sm font-extrabold !text-white shadow-xl shadow-orange-950/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#D9471D] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#EE5326] focus:ring-offset-2 focus:ring-offset-[#0B2D5C]"
            >
              <span className="!text-white">Verify on IRCTC</span>

              <ExternalLink className="h-4 w-4 !text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================
          IRCTC AGENT LOGIN BENEFITS
      ==================================================== */}
      <section className="relative overflow-hidden bg-[#F7FAFE] py-12 sm:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-orange-200/30 blur-[90px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-200/40 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#EE5326]">
              <span aria-hidden="true" className="h-px w-5 bg-[#EE5326]" />
              Grow your travel business
              <span aria-hidden="true" className="h-px w-5 bg-[#EE5326]" />
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl md:text-5xl">
              IRCTC Agent Login <span className="text-[#EE5326]">Benefits</span>
            </h2>
            <p className="mt-2 text-xl font-bold tracking-tight text-[#0B1F3A] sm:text-2xl">
              Benefits of IRCTC Agent Registration
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Getting an IRCTC agent login can give you more benefits as a travel agent. Every travel agent must be registered as an IRCTC authorized travel agent.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Agent Booking Access",
                description:
                  "Use an IRCTC agent ID for customer bookings, subject to applicable IRCTC rules and restrictions.",
                icon: Ticket,
              },
              {
                title: "Authorized Agent Listing",
                description:
                  "Your travel agency name will be listed as an IRCTC authorized travel agent on the IRCTC website.",
                icon: UserCheck,
              },
              {
                title: "Direct IRCTC Login",
                description:
                  "Book train tickets quickly through your direct IRCTC agent login.",
                icon: LogIn,
              },
              {
                title: "Multiple Travel Services",
                description:
                  "Sell air and bus tickets, hotels, tour packages and other travel services.",
                icon: Plane,
              },
              {
                title: "Dedicated Agent Support",
                description:
                  "Get special customer support for your IRCTC agent ID.",
                icon: Headphones,
              },
              {
                title: "Agency Details on Ticket",
                description:
                  "Your agency name and contact details will be printed on the train ticket.",
                icon: FileText,
              },
              {
                title: "Tatkal Booking",
                description:
                  "You can book Tatkal tickets through your agent login after the applicable 30-minute opening period.",
                icon: Zap,
              },
              {
                title: "Easy Ticket Cancellation",
                description:
                  "An agent can also cancel tickets using their IRCTC agent login.",
                icon: CircleX,
              },
              {
                title: "Flexible Business Hours",
                description:
                  "Manage customer enquiries and your travel business on a flexible schedule, while following IRCTC booking windows and operating rules.",
                icon: Clock,
              },
              {
                title: "Agent Booking Rules",
                description:
                  "Agent accounts follow booking limits and time restrictions set by IRCTC. Review the current rules before accepting customer bookings.",
                icon: FileText,
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const featured = index === 4;
              return (
                <article
                  key={benefit.title}
                  className={`group relative flex h-full flex-col rounded-[24px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(238,83,38,0.14)] motion-reduce:transform-none motion-reduce:transition-none ${featured ? "border-[#EE5326] bg-gradient-to-br from-white to-[#FFF0E9] shadow-[0_10px_24px_rgba(238,83,38,0.10)]" : "border-slate-100 bg-white/90 shadow-[0_8px_24px_rgba(16,64,122,0.07)] hover:border-[#EE5326]/50"}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className={`flex h-12 min-w-12 shrink-0 items-center justify-center rounded-xl px-3 text-lg font-extrabold ${featured ? "bg-gradient-to-br from-[#FF7B3D] to-[#EE3F12] text-white" : "bg-[#FFF0E3] text-[#EE4B1B]"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex h-[68px] w-[68px] items-center justify-center rounded-full ${featured ? "bg-[#EE5326]/10 text-[#EE5326]" : "bg-[#FFF6EF] text-[#EE5326]"}`}>
                      <Icon aria-hidden="true" className="h-8 w-8" strokeWidth={2.2} />
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-6 text-[#0B1F3A]">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-[1.45] text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl bg-[#0B1F3A] px-6 py-5 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-sm md:text-base">
              Become an authorized IRCTC travel agent and manage your train
              ticket booking services through a dedicated agent login.
            </p>
          </div>
          <div className="mt-7 text-center">
            <Link
              href="/benefits-of-irctc-agent-registration/"
              className="group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full border border-[#FFB199]/70 bg-[#EE5326] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_14px_28px_rgba(238,83,38,0.25),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D94316] hover:shadow-[0_18px_36px_rgba(238,83,38,0.34),inset_0_1px_0_rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE5326] focus-visible:ring-offset-4 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.25),rgba(255,255,255,0)_42%)] opacity-90" />
              <span className="relative !text-white">Explore all agent registration benefits</span>
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-[#EE5326] shadow-[0_5px_12px_rgba(131,36,7,0.18)] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          PRICING & PLANS
      ==================================================== */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#EE5326]">
              <CreditCard className="h-3.5 w-3.5" />
              Transparent Pricing
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              IRCTC Agent Registration Plans
            </h2>

            <p className="mt-3 text-base text-slate-600">
              Choose the authentication mode that fits your travel agency
              setup. Review the applicable registration fee, GST, and other
              terms before applying.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] border p-8 shadow-[0_12px_32px_rgba(16,64,122,0.09)] transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-1.5 before:w-full before:bg-gradient-to-r before:from-[#EE5326] before:to-amber-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(16,64,122,0.15)] motion-reduce:transform-none motion-reduce:transition-none ${
                  plan.popular
                    ? "border-[#EE5326]/25 bg-[#FFF8F3] ring-4 ring-[#EE5326]/10 hover:ring-[#EE5326]/20"
                    : "border-white bg-[#F6F9FE] hover:border-[#10407A]/20 hover:bg-white"
                }`}
              >
                {plan.popular && (
                    <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-[#EE5326] px-4 py-1.5 text-xs font-bold !text-white shadow transition-transform duration-300 group-hover:scale-105">
                    OTP OPTION
                  </div>
                )}

                <div>
                  <h3 className={`text-2xl font-black text-slate-900 ${plan.popular ? "mt-5" : ""}`}>
                    {plan.name}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex flex-wrap items-baseline gap-2 border-b border-slate-100 pb-6">
                    <span className="text-4xl font-black text-[#10407A]">
                      {plan.price}
                    </span>

                    <span className="text-xs font-bold text-slate-500">
                      {plan.gst}
                    </span>

                    <span className="ml-auto rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                      ⚡ {plan.activation}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={plan.href}
                    className={`group/btn inline-flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold !text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      plan.popular
                        ? "bg-[#EE5326] !text-white hover:bg-[#D9471D] focus:ring-[#EE5326]"
                        : "bg-[#10407A] !text-white hover:bg-[#0B2D5C] focus:ring-[#10407A]"
                    }`}
                  >
                    <span className="!text-white">{plan.cta}</span>

                    <ArrowRight className="h-4 w-4 !text-white transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500">
            Fees, authentication options, processing timelines, commissions,
            and booking rules are subject to change. Please confirm the
            applicable terms before registration.
          </p>
        </div>
      </section>

      {/* ===================================================
          OTP VS DSC
      ==================================================== */}
      <section className="bg-[#F7F9FC] py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EE5326]">
              Authentication options
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              OTP vs DSC Authentication
            </h2>

            <p className="mt-3 text-slate-600">
              Choose the authentication method that fits your applicable
              setup. Neither option is presented as universally better.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[24px] border border-orange-100 bg-gradient-to-br from-white via-[#FFF9F5] to-[#FFF0E8] p-7 shadow-[0_12px_28px_rgba(238,83,38,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(238,83,38,0.14)] motion-reduce:transform-none motion-reduce:transition-none">
              <h3 className="text-xl font-bold text-[#0B2D5C]">
                OTP Authentication
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Access is authenticated using an OTP delivered to the
                registered mobile number. The existing guidance states it can
                be used on a computer or mobile device.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[24px] border border-sky-100 bg-gradient-to-br from-white via-[#F8FBFF] to-[#EAF3FF] p-7 shadow-[0_12px_28px_rgba(16,64,122,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(16,64,122,0.14)] motion-reduce:transform-none motion-reduce:transition-none">
              <h3 className="text-xl font-bold text-[#0B2D5C]">
                DSC Authentication
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                DSC authentication uses an applicable USB digital-signature
                dongle. Confirm the current device and operating-system
                requirements before selecting this option.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-5xl overflow-x-auto border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-slate-50 text-[#0B2D5C]">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4">OTP</th>
                  <th className="p-4">DSC</th>
                </tr>
              </thead>

              <tbody className="text-slate-600">
                <tr className="border-t">
                  <td className="p-4 font-semibold">Authentication</td>
                  <td className="p-4">Mobile OTP</td>
                  <td className="p-4">Digital signature</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">Physical device</td>
                  <td className="p-4">No</td>
                  <td className="p-4">Applicable DSC device</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">Setup</td>
                  <td className="p-4">Digital verification</td>
                  <td className="p-4">DSC setup</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================================================
          TESTIMONIALS
      ==================================================== */}
      <section className="border-y border-slate-200/60 bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              Customer Feedback
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              What TravelIQ Customers Have Said
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              Selected feedback from previous TravelIQ customers.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-[22px] border border-slate-100 bg-white p-7 shadow-[0_12px_28px_rgba(16,64,122,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_20px_36px_rgba(238,83,38,0.12)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div>
                  <p className="text-sm italic leading-relaxed text-slate-700">
                    &quot;{t.review}&quot;
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/60 pt-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {t.name}
                    </h4>

                    <span className="text-xs text-slate-500">
                      {t.role}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-slate-400">
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          WHY CHOOSE TRAVELIQ
      ==================================================== */}
      <section className="bg-[#F6F9FE] py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#10407A]">
              <Award className="h-3.5 w-3.5" />
              Why Become An Agent
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Choose TravelIQ for IRCTC Agent Registration?
            </h2>

            <p className="mt-3 text-base text-slate-600">
              Clear guidance for the applicable registration process and
              travel-service setup.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Transparent Process",
                desc: "Understand the registration steps, authentication choices, and applicable charges before you apply.",
                icon: Wallet,
              },
              {
                title: "Documentation Guidance",
                desc: "Prepare the listed identity, contact, and address documents with clear registration guidance.",
                icon: Zap,
              },
              {
                title: "OTP & DSC Options",
                desc: "Choose from the available OTP and DSC authentication options according to the applicable setup.",
                icon: Building2,
              },
              {
                title: "Dedicated Agent Support",
                desc: "Use TravelIQ's WhatsApp, phone, and email channels for registration and onboarding support.",
                icon: ShieldCheck,
              },
              {
                title: "Travel Service Integration",
                desc: "Explore related air, bus, hotel, and holiday travel services alongside railway booking.",
                icon: Clock,
              },
              {
                title: "Official Source Verification",
                desc: "Review the linked IRCTC PSP directory and the published TravelIQ listing information.",
                icon: Briefcase,
              },
            ].map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group relative overflow-hidden rounded-[22px] border border-slate-100 bg-white p-7 shadow-[0_12px_28px_rgba(16,64,122,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_20px_36px_rgba(238,83,38,0.12)] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10407A] text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#EE5326]">
                    <Icon className="h-6 w-6 !text-white" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#10407A]">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          4 STEP PROCESS
      ==================================================== */}
      <section className="bg-[#EDF5FF] py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#EE5326]">
              <Clock className="h-3.5 w-3.5" />
              Simple Workflow
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              How to Become an Authorized IRCTC Agent in 4 Steps
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Fill Application Form",
                desc: "Complete the digital application form with your business and personal details.",
              },
              {
                step: "02",
                title: "Pay Registration Fee",
                desc: "Pay the registration fee online for your selected OTP or DSC agent login plan.",
              },
              {
                step: "03",
                title: "Upload Documents",
                desc: "Submit your PAN card, Aadhaar card, address proof, fresh mobile number, and email ID.",
              },
              {
                step: "04",
                title: "Activate & Start Booking",
                desc: "After verification and required authentication, agent credentials can be issued according to the applicable processing timeline.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[22px] border border-slate-100 bg-white p-7 shadow-[0_12px_28px_rgba(16,64,122,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_20px_36px_rgba(238,83,38,0.12)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0E7] text-xl font-black text-[#EE5326] transition-all duration-300 group-hover:bg-[#EE5326] group-hover:text-white">
                    {st.step}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {st.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs font-bold text-[#EE5326]">
                  <Check className="h-4 w-4" />
                  Quick Verification
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          DOCUMENTS
      ==================================================== */}
      <section className="border-b border-slate-200/60 bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-5 lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#10407A]">
                <FileText className="h-3.5 w-3.5" />
                Document Checklist
              </span>

              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Documents Required for IRCTC Agent Registration
              </h2>

              <p className="text-base leading-relaxed text-slate-600">
                Ensure you have scanned copies of the following documents ready
                before submitting your online application.
              </p>

              <div className="space-y-2 rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-amber-900">
                  <HelpCircle className="h-[18px] w-[18px] shrink-0 text-amber-600" />
                  Important Requirement
                </div>

                <p className="text-xs leading-relaxed text-amber-800">
                  Mobile number and email requirements may vary by the current
                  registration and verification process. Confirm the applicable
                  requirements before applying.
                </p>
              </div>
            </div>

            <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:col-span-7">
              {[
                {
                  label: "PAN Card",
                  note: "Valid PAN details as required for the applicable agent registration process.",
                },
                {
                  label: "Aadhaar Card",
                  note: "Valid Aadhaar details and applicable mobile verification requirements.",
                },
                {
                  label: "Address Proof",
                  note: "Provide the applicable office and residential address proof. Home-based applicants should confirm the address requirements for their registration.",
                },
                {
                  label: "Fresh Mobile No.",
                  note: "Use the mobile number required for the applicable registration and verification process.",
                },
                {
                  label: "Email Address",
                  note: "Provide an active email address for registration and agency communication.",
                },
                {
                  label: "Passport Photograph",
                  note: "Recent passport-size photograph as required during onboarding.",
                },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="group rounded-[20px] border border-slate-100 bg-gradient-to-br from-white to-[#F7FAFF] p-5 shadow-[0_8px_20px_rgba(16,64,122,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_14px_28px_rgba(238,83,38,0.10)] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E7] text-sm font-extrabold text-[#EE5326] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#EE5326] group-hover:!text-white">
                      {idx + 1}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {doc.label}
                      </h3>

                      <p className="mt-0.5 break-words text-xs leading-5 text-slate-500">
                        {doc.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          RESOURCES
      ==================================================== */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,#fff_0%,#f7faff_62%,#edf4ff_100%)] py-12 sm:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full border-[38px] border-orange-100/45" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-8 h-[30rem] w-[30rem] rounded-full border-[38px] border-blue-100/45" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-gradient-to-r from-white to-[#FFF0E7] px-5 py-2 text-xs font-bold uppercase tracking-wide text-[#D93D12] shadow-[0_5px_16px_rgba(238,83,38,0.08)]">
              <Sparkles className="h-3.5 w-3.5" />
              IRCTC Agent Resources
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#111936] sm:text-4xl md:text-5xl">
              Helpful IRCTC Agent Information
            </h2>
            <div aria-hidden="true" className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#FF612B] shadow-[0_2px_8px_rgba(255,97,43,0.25)]" />
          </div>

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resourceCards.map((card, idx) => {
              const Icon = card.icon;
              const featured = idx === 0 || idx === 4;

              return (
                <div
                  key={idx}
                  className={`group relative flex h-full flex-col justify-between rounded-[26px] border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(16,64,122,0.12)] motion-reduce:transform-none motion-reduce:transition-none ${featured ? "border-[#FF8A4C] bg-gradient-to-br from-white to-[#FFF1E7] shadow-[0_10px_25px_rgba(238,83,38,0.10)]" : "border-white/90 bg-white/75 shadow-[0_10px_28px_rgba(16,64,122,0.07)] hover:border-orange-200"}`}
                >
                  <div aria-hidden="true" className={`pointer-events-none absolute right-5 top-5 opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.12] ${featured ? "text-[#EE5326]" : "text-[#10407A]"}`}>
                    <Icon className="h-12 w-12" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="relative mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-[22px] bg-gradient-to-br from-[#FFF1E7] to-[#FFE8D8] text-[#EE4B1B] shadow-[0_5px_15px_rgba(238,83,38,0.06)] transition-all duration-300 group-hover:scale-105 group-hover:from-[#FF6A2E] group-hover:to-[#EE3F12] group-hover:!text-white">
                      <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                    </div>

                    <h3 className="relative text-lg font-extrabold tracking-tight text-[#111936]">
                      {card.title}
                    </h3>

                    <span className="relative mt-1 block text-sm font-medium text-[#D93D12]">
                      {card.subtitle}
                    </span>

                    <p className="relative mt-4 text-sm leading-6 text-slate-600">
                      {card.desc}
                    </p>
                  </div>

                  <div className="relative mt-6 border-t border-slate-200/80 pt-4">
                    {card.external ? (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/link inline-flex min-h-12 max-w-full flex-wrap items-center justify-center gap-2 rounded-full px-5 py-2 text-center text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 sm:gap-3 sm:px-7 ${featured ? "bg-gradient-to-r from-[#FF5D25] to-[#F04412] !text-white shadow-[0_7px_15px_rgba(238,83,38,0.18)]" : "bg-[#FFF0E6] text-[#D93D12] hover:bg-[#FFE4D4]"}`}
                      >
                        {card.btnText}

                        <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    ) : (
                      <Link
                        href={card.link}
                        className={`group/link inline-flex min-h-12 max-w-full flex-wrap items-center justify-center gap-2 rounded-full px-5 py-2 text-center text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 sm:gap-3 sm:px-7 ${featured ? "bg-gradient-to-r from-[#FF5D25] to-[#F04412] !text-white shadow-[0_7px_15px_rgba(238,83,38,0.18)]" : "bg-[#FFF0E6] text-[#D93D12] hover:bg-[#FFE4D4]"}`}
                      >
                        {card.btnText}

                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          NATIONWIDE
      ==================================================== */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#10407A]">
              <MapPin className="h-3.5 w-3.5" />
              Nationwide service
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              IRCTC Agent Registration Across India
            </h2>

            <p className="mt-3 text-slate-600">
              TravelIQ supports agent registration enquiries across multiple
              states in India. Contact our team to confirm availability and
              applicable requirements for your location.
            </p>
          </div>

          <div className="mx-auto mt-8 flex max-w-5xl justify-center">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full border border-[#10407A]/20 bg-[#F6F9FE] px-5 py-3 text-sm font-bold !text-[#10407A] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#10407A] hover:!text-white hover:shadow-lg"
            >
              <span className="group-hover:!text-white">
                Confirm availability for your location
              </span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:!text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          CONTACT & SUPPORT
      ==================================================== */}
      <section className="relative overflow-hidden border-t border-slate-100 bg-[radial-gradient(ellipse_at_top,#fff_0%,#f7faff_68%,#eef5ff_100%)] py-12 sm:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-[-7rem] h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/agent-support-character.png"
            alt="TravelIQ support agent ready to help"
            width={440}
            height={330}
            className="pointer-events-none absolute right-0 top-0 z-0 hidden w-[250px] object-contain xl:block 2xl:w-[290px]"
            priority
          />
          <div className="relative z-10 mx-auto mb-8 max-w-5xl text-center xl:mr-40 xl:max-w-4xl 2xl:mr-48">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF1E5] to-[#FFE9DC] px-5 py-2 text-xs font-extrabold uppercase tracking-wide text-[#E94716]">
              <Headphones className="h-4 w-4" />
              Agent Support
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#101B3B] sm:text-4xl md:text-5xl">
              We Are Here to <span className="text-[#F04B1B]">Support Your Agency</span>
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Have questions or need assistance with your IRCTC agent registration, bookings, or account? Our team is just a message away.
            </p>
          </div>

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/90 bg-gradient-to-br from-white via-white to-[#EFF7FF] p-5 sm:p-6 shadow-[0_12px_28px_rgba(18,70,140,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_34px_rgba(18,70,140,0.15)] motion-reduce:transform-none motion-reduce:transition-none">
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-8 h-32 w-32 rounded-full bg-blue-200/40 blur-2xl transition-transform group-hover:scale-125" />
              <div className="relative flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700"><Mail className="h-6 w-6" /></span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform group-hover:translate-x-1"><ArrowRight className="h-4 w-4" /></span>
              </div>
              <div className="relative mt-4 flex flex-1 flex-col justify-start">
                <h3 className="text-lg font-extrabold tracking-tight text-[#101B3B]">Email Support</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">Get help via email for any queries or issues.</p>
              </div>
              <a href="mailto:support@traveliq.in" className="relative mt-5 flex min-h-[56px] w-full items-center gap-2.5 border-t border-dashed border-blue-200 pt-4 text-sm font-bold text-blue-700 hover:underline">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100"><Mail className="h-3.5 w-3.5" /></span>
                <span className="min-w-0 break-all text-xs font-bold sm:text-sm">support@traveliq.in</span>
              </a>
            </article>

            <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/90 bg-gradient-to-br from-white via-white to-[#EDFFF4] p-5 sm:p-6 shadow-[0_12px_28px_rgba(18,100,70,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_34px_rgba(18,100,70,0.14)] motion-reduce:transform-none motion-reduce:transition-none">
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-8 h-32 w-32 rounded-full bg-emerald-200/40 blur-2xl transition-transform group-hover:scale-125" />
              <div className="relative flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"><WhatsAppIcon className="h-6 w-6" /></span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-transform group-hover:translate-x-1"><ArrowRight className="h-4 w-4" /></span>
              </div>
              <div className="relative mt-4 flex flex-1 flex-col justify-start">
                <h3 className="text-lg font-extrabold tracking-tight text-[#101B3B]">WhatsApp Helpline</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">Chat with our support team on WhatsApp.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="relative mt-5 flex min-h-[56px] w-full items-center gap-2.5 border-t border-dashed border-emerald-200 pt-4 text-sm font-bold text-emerald-700 hover:underline">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100"><WhatsAppIcon className="h-3.5 w-3.5" /></span>
                <span className="min-w-0 text-xs font-bold sm:text-sm">+91 78350 25025</span>
              </a>
            </article>

            <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/90 bg-gradient-to-br from-white via-white to-[#FFF0E8] p-5 sm:p-6 shadow-[0_12px_28px_rgba(180,70,30,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_34px_rgba(180,70,30,0.14)] motion-reduce:transform-none motion-reduce:transition-none">
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-8 h-32 w-32 rounded-full bg-orange-200/45 blur-2xl transition-transform group-hover:scale-125" />
              <div className="relative flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#EE5326]"><PhoneCall className="h-6 w-6" /></span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#EE5326] transition-transform group-hover:translate-x-1"><ArrowRight className="h-4 w-4" /></span>
              </div>
              <div className="relative mt-4 flex flex-1 flex-col justify-start">
                <h3 className="text-lg font-extrabold tracking-tight text-[#101B3B]">Phone Support</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">Speak directly with our support executive.</p>
              </div>
              <a href={`tel:${CONTACT_PHONE}`} className="relative mt-5 flex min-h-[56px] w-full items-center gap-2.5 border-t border-dashed border-orange-200 pt-4 text-sm font-bold text-[#E94A17] hover:underline">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100"><PhoneCall className="h-3.5 w-3.5" /></span>
                <span className="min-w-0 text-xs font-bold sm:text-sm">{CONTACT_PHONE_DISPLAY}</span>
              </a>
            </article>

            <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/90 bg-gradient-to-br from-white via-white to-[#F4F0FF] p-5 sm:p-6 shadow-[0_12px_28px_rgba(85,55,160,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_18px_34px_rgba(85,55,160,0.14)] motion-reduce:transform-none motion-reduce:transition-none">
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-8 h-32 w-32 rounded-full bg-violet-200/45 blur-2xl transition-transform group-hover:scale-125" />
              <div className="relative flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700"><MapPin className="h-6 w-6" /></span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600 transition-transform group-hover:translate-x-1"><ArrowRight className="h-4 w-4" /></span>
              </div>
              <div className="relative mt-4 flex flex-1 flex-col justify-start">
                <h3 className="text-lg font-extrabold tracking-tight text-[#101B3B]">Corporate Office</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">Visit our office for official communications.</p>
              </div>
              <Link href="/contact-us" className="relative mt-5 flex min-h-[56px] w-full items-center gap-2.5 border-t border-dashed border-violet-200 pt-4 text-sm font-bold text-violet-800 hover:underline">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100"><Building2 className="h-3.5 w-3.5" /></span>
                <span className="min-w-0 text-xs font-bold leading-tight sm:text-sm">JMD Megapolis, Sec 48, Gurugram</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================
          FAQ SECTION (TRAVELIQ DESIGN)
      ==================================================== */}
      <section id="faq" className="relative overflow-hidden border-t border-[#10407A]/10 bg-[#FFF8F3] py-12 sm:py-14 lg:py-16">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#EE5326]/[0.035] blur-3xl" />
          <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#10407A]/[0.035] blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 pb-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EE5326]/15 bg-[#FFF0E9] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C4320A] shadow-[4px_4px_10px_rgba(238,83,38,0.06),-4px_-4px_10px_rgba(255,255,255,0.95)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />
                Help &amp; FAQs
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0B1728] sm:text-4xl lg:text-[44px]">
                Control All Your Bookings &amp; Learn
                <span className="text-[#EE5326]"> IRCTC Agent Rules</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm font-normal leading-7 text-[#697589] sm:text-[15px]">
                Everything you need to know about IRCTC agent registration, fees, Tatkal booking rules, documents, and onboarding.
              </p>
            </div>

            <Link
              href="/frequently-asked-questions"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white bg-[#FFF8F3] px-5 py-3 text-xs font-bold text-[#10407A] shadow-[7px_7px_15px_rgba(16,64,122,0.10),-6px_-6px_14px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10407A] hover:!text-white hover:shadow-[8px_8px_18px_rgba(16,64,122,0.18)]"
            >
              <span>See More FAQs</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10407A]/[0.07] text-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/10 group-hover:text-white">
                →
              </span>
            </Link>
          </div>

          {/* Grid Content */}
          <div className="mt-2 ">


            {/* Right FAQ Accordions */}
            <div className="space-y-4 lg:w-full">
              {faqItems.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-[20px] border border-slate-100 bg-white p-5 shadow-[0_8px_22px_rgba(16,64,122,0.06)] transition-all duration-300 open:border-orange-200 open:bg-[#FFFAF7] open:shadow-[0_14px_30px_rgba(238,83,38,0.10)] hover:-translate-y-0.5 hover:border-orange-100 hover:shadow-[0_14px_28px_rgba(16,64,122,0.10)] motion-reduce:transform-none motion-reduce:transition-none"
                  open={index === 0}
                >
                  <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 text-left focus:outline-none [&::-webkit-details-marker]:hidden">
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E9] font-mono text-[10px] font-bold text-[#C4320A]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 text-sm font-semibold leading-6 tracking-[-0.01em] text-[#0B1728] sm:text-base lg:text-[16px]">
                        {faq.question}
                      </span>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#10407A]/[0.055] text-lg font-medium leading-none text-[#10407A] shadow-[4px_4px_9px_rgba(16,64,122,0.08),-3px_-3px_7px_rgba(255,255,255,0.95)] transition-all duration-300 group-open:bg-[#EE5326] group-open:text-white">
                      <span className="block group-open:hidden">+</span>
                      <span className="hidden group-open:block">−</span>
                    </span>
                  </summary>

                  <div className="mt-5 border-t border-[#10407A]/[0.08] pt-5 pl-0 sm:pl-[52px]">
                    <p className="max-w-2xl text-xs font-medium leading-6 text-[#697589] sm:text-sm sm:leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          BOTTOM CTA
      ==================================================== */}
  {/* ===================================================
    FINAL CTA
==================================================== */}
<section className="relative overflow-hidden border-t border-slate-200 bg-[#F7FAFE] py-12 sm:py-16">
  {/* Soft background decorations */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#10407A]/[0.05] blur-3xl" />

    <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#EE5326]/[0.07] blur-3xl" />

    <div className="absolute left-1/2 top-1/2 h-56 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div
      className="
        relative
        mx-auto
        max-w-5xl
        overflow-hidden
        rounded-[32px]
        border
        border-[#10407A]/10
        bg-white
        px-6
        py-10
        text-center
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
        sm:px-10
        sm:py-12
        lg:px-16
      "
    >
      {/* Card decoration */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10407A] via-[#EE5326] to-[#10407A]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#EE5326]/[0.05] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#10407A]/[0.05] blur-2xl"
      />

      <div className="relative">
        {/* Badge */}
        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#EE5326]/15
            bg-[#FFF4EF]
            px-4
            py-2
            text-[11px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#D9471D]
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EE5326] opacity-30" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EE5326]" />
          </span>

          Start Your Travel Business
        </span>

        {/* Heading */}
        <h2
          className="
            mx-auto
            mt-5
            max-w-3xl
            text-3xl
            font-black
            leading-tight
            tracking-[-0.035em]
            text-[#0B1F3A]
            sm:text-4xl
            lg:text-[42px]
          "
        >
          Ready to Start Your{" "}
          <span className="text-[#10407A]">
            IRCTC Travel Agency?
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-7
            text-slate-600
            sm:text-base
          "
        >
          Register with TravelIQ and get guidance through the applicable
          IRCTC agent registration, documentation and onboarding process.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/signup/registration_form/irctc-agent-registration/"
            className="
              group
              inline-flex
              min-w-[190px]
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#EE5326]
              px-7
              py-3.5
              text-sm
              font-extrabold
              !text-white
              shadow-[0_10px_25px_rgba(238,83,38,0.22)]
              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#D9471D]
              hover:shadow-[0_15px_30px_rgba(238,83,38,0.28)]

              focus:outline-none
              focus:ring-2
              focus:ring-[#EE5326]
              focus:ring-offset-2
            "
          >
            Apply Online Now

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              min-w-[190px]
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#25D366]/40
              bg-[#25D366]
              px-7
              py-3.5
              text-sm
              font-bold
              !text-white
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-[#20BD5A]
              hover:bg-[#20BD5A]
              hover:!text-white
              hover:shadow-lg
            "
          >
            <WhatsAppIcon className="h-[18px] w-[18px] !text-white transition-transform duration-300 group-hover:scale-110" />

            <span className="!text-white">
              Chat on WhatsApp
            </span>
          </a>
        </div>

        {/* Trust line */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Registration guidance
          </span>

          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Document support
          </span>

          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Agent assistance
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
