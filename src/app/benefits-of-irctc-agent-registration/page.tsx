import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  CheckCircle2,
  CircleHelp,
  FileCheck2,
  Headphones,
  Wallet,
} from "lucide-react";
import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import { canonicalUrl, absoluteUrl, OG_IMAGE_PATH } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

const pagePath = "/benefits-of-irctc-agent-registration";
const pageUrl = canonicalUrl(pagePath);

const benefits = [
  {
    icon: BadgeCheck,
    title: "Authorized agent access",
    text: "Register through an IRCTC Principal Service Provider and use the applicable agent booking setup, subject to current IRCTC rules.",
    tone: "orange",
  },
  {
    icon: Building2,
    title: "Build your travel business",
    text: "Offer railway reservations alongside other travel services such as air tickets, buses, hotels, and tour packages.",
    tone: "blue",
  },
  {
    icon: FileCheck2,
    title: "Agency details on tickets",
    text: "Agent tickets can show the agency name and contact details according to the applicable ticketing process.",
    tone: "orange",
  },
  {
    icon: Headphones,
    title: "Dedicated agent support",
    text: "Get onboarding guidance and support for registration, verification, authentication, and account queries.",
    tone: "blue",
  },
  {
    icon: Wallet,
    title: "Wallet-based payments",
    text: "Use the applicable TravelIQ wallet process for booking transactions. Confirm funding methods, charges, and terms before registering.",
    tone: "orange",
  },
  {
    icon: CalendarClock,
    title: "Flexible business schedule",
    text: "Manage customer enquiries and your travel business flexibly while following IRCTC booking windows and operating restrictions.",
    tone: "blue",
  },
  {
    icon: CheckCircle2,
    title: "Booking and cancellation tools",
    text: "Manage eligible bookings and cancellation requests through the agent workflow, subject to IRCTC rules and ticket conditions.",
    tone: "orange",
  },
  {
    icon: CircleHelp,
    title: "Understand the rules clearly",
    text: "Agent accounts use separate commercial rules, booking windows, and restrictions. Check the current IRCTC instructions before accepting bookings.",
    tone: "blue",
  },
  {
    icon: BadgeCheck,
    title: "Sell through an authorized channel",
    text: "Commercial railway ticket selling should be done through the authorized IRCTC agent or PSP process, not a personal user account.",
    tone: "orange",
  },
  {
    icon: Building2,
    title: "Build recognition and trust",
    text: "An active agent registration gives customers a way to verify your authorized status and identify your agency for railway bookings.",
    tone: "blue",
  },
  {
    icon: Wallet,
    title: "Earn permitted service charges",
    text: "Applicable customer service charges may be collected through the authorized process. Rates and any agent earnings depend on current policy and PSP terms.",
    tone: "orange",
  },
];

export const metadata: Metadata = {
  title: "Benefits of IRCTC Agent Registration | TravelIQ",
  description:
    "Explore the benefits of IRCTC agent registration, including authorized booking access, travel services, wallet payments, support, and business flexibility.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Benefits of IRCTC Agent Registration | TravelIQ",
    description:
      "Learn how an IRCTC agent setup can support your travel business, with booking access, agent support, and clear guidance on applicable rules.",
    url: pageUrl,
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
    images: [{ url: absoluteUrl(OG_IMAGE_PATH), width: 1200, height: 630, alt: "Benefits of IRCTC Agent Registration" }],
  },
};

export default function AgentRegistrationBenefitsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", item: canonicalUrl("/") },
    { name: "IRCTC Agent Registration", item: canonicalUrl("/irctc-agent-registration") },
    { name: "Benefits of IRCTC Agent Registration", item: pageUrl },
  ]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F7FC] text-[#0B1F3A]">
      <JsonLd data={[breadcrumb]} />

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#07182E] via-[#0B2D5C] to-[#10407A] px-4 pb-20 pt-12 text-white sm:px-6 sm:pb-28 sm:pt-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-12 h-80 w-80 rounded-full bg-[#EE5326]/25 blur-[100px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky-400/20 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-9 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/65 sm:text-sm">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/irctc-agent-registration/" className="transition-colors hover:text-white">IRCTC Agent Registration</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#FFD966]">Benefits</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-orange-100 shadow-inner">
                <span className="h-2 w-2 rounded-full bg-[#FFD966] shadow-[0_0_12px_rgba(255,217,102,0.8)]" />
                Travel business guide
              </span>
              <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Benefits of IRCTC Agent Registration
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-blue-100/85 sm:text-lg sm:leading-8">
                India&apos;s rail network creates opportunities for travel businesses serving customers who need ticketing help. An authorized agent setup can support railway bookings and related travel services, but income is not guaranteed and all bookings must follow current rules.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/signup/registration_form/irctc-agent-registration/" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#EE5326] px-6 py-3 text-sm font-bold !text-white shadow-[0_12px_28px_rgba(238,83,38,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9471D] hover:shadow-[0_16px_32px_rgba(238,83,38,0.35)] motion-reduce:transform-none motion-reduce:transition-none">
                  Explore registration options <ArrowRight className="h-4 w-4 !text-white transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/irctc-agent-registration/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-6 py-3 text-sm font-semibold !text-white backdrop-blur transition-colors hover:bg-white/[0.14]">
                  View plans and fees
                </Link>
              </div>
            </div>

            <aside className="rounded-[28px] border border-white/15 bg-white/[0.08] p-6 shadow-[10px_14px_32px_rgba(0,0,0,0.18),-6px_-6px_18px_rgba(255,255,255,0.06)] backdrop-blur-lg">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFD966]">A clear starting point</p>
              <p className="mt-3 text-lg font-bold leading-7 text-white">Choose the right setup for your agency.</p>
              <p className="mt-2 text-sm leading-6 text-blue-100/75">Compare OTP and DSC options, applicable charges, documents, and current booking rules before applying.</p>
              <Link href="/irctc-agent-registration/" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#FFD966]">
                See the registration guide <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-11 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#10407A]/10 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#10407A] shadow-[4px_4px_10px_rgba(16,64,122,0.07),-4px_-4px_10px_rgba(255,255,255,0.95)]">What an agent setup can offer</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0B1F3A] sm:text-4xl">Support for the way your agency works</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Benefits depend on the selected setup and current IRCTC and TravelIQ terms. Review each item before you register.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const orange = benefit.tone === "orange";
              return (
                <article key={benefit.title} className="group relative overflow-hidden rounded-[26px] border border-white/90 bg-[#F7FAFE] p-6 shadow-[8px_10px_22px_rgba(16,64,122,0.10),-7px_-7px_18px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#10407A]/15 hover:bg-white hover:shadow-[12px_16px_30px_rgba(16,64,122,0.15),-5px_-5px_14px_rgba(255,255,255,0.9)] motion-reduce:transform-none motion-reduce:transition-none">
                  <div aria-hidden="true" className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-80 ${orange ? "bg-[#EE5326]/[0.08]" : "bg-[#10407A]/[0.08]"}`} />
                  <div className="relative">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-[inset_2px_2px_5px_rgba(255,255,255,0.45),4px_5px_12px_rgba(16,64,122,0.10)] transition-all duration-300 group-hover:scale-105 ${orange ? "bg-[#FFF0E9] text-[#C4320A] group-hover:bg-[#EE5326] group-hover:!text-white" : "bg-[#EAF1FB] text-[#10407A] group-hover:bg-[#10407A] group-hover:!text-white"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mt-5 block text-[10px] font-extrabold tracking-[0.16em] text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-1.5 text-lg font-bold leading-6 text-[#0B1F3A]">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#10407A]/[0.07] bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#EE5326]/15 bg-[#FFF0E9] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C4320A]">The details behind the benefits</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0B1F3A] sm:text-4xl">What to expect as an IRCTC agent</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">A practical summary of authorization, bookings, charges, payments, and day-to-day operations.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[26px] border border-white bg-[#FFF8F3] p-6 shadow-[8px_10px_22px_rgba(16,64,122,0.09),-7px_-7px_18px_rgba(255,255,255,0.95)] sm:p-8">
              <h3 className="text-xl font-extrabold text-[#0B1F3A]">Authorization and legality</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">If you sell railway tickets as a business, use an authorized agent channel rather than a personal IRCTC account. Section 143 of the Railways Act addresses unauthorized procurement and sale of railway tickets; it provides for penalties that may include imprisonment up to three years, a fine up to ₹10,000, or both. The facts and applicable law determine any outcome.</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">IRCTC&apos;s service-provider policy describes a Retail Service Provider as an agent of a PSP registered to book reserved rail e-tickets for customers. Keep your registration active and follow the PSP&apos;s requirements.</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold">
                <a href="https://www.indiacode.nic.in/bitstream/123456789/15416/1/the_railways_act%2C_1989.pdf" target="_blank" rel="noopener noreferrer" className="text-[#10407A] underline decoration-[#10407A]/30 underline-offset-4 hover:text-[#C4320A]">Read the Railways Act, Section 143</a>
                <a href="https://contents.irctc.co.in/en/Policy_for_e-ticketing_Service_Providers-2013.pdf" target="_blank" rel="noopener noreferrer" className="text-[#10407A] underline decoration-[#10407A]/30 underline-offset-4 hover:text-[#C4320A]">Read IRCTC service-provider policy</a>
              </div>
            </article>

            <article className="rounded-[26px] border border-white bg-[#F1F6FD] p-6 shadow-[8px_10px_22px_rgba(16,64,122,0.09),-7px_-7px_18px_rgba(255,255,255,0.95)] sm:p-8">
              <h3 className="text-xl font-extrabold text-[#0B1F3A]">Wallets, RDS, and bank details</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">IRCTC&apos;s policy uses a Rolling Deposit System (RDS) account for the Principal Service Provider (PSP), which is funded in advance and debited for ticket transactions. The PSP must maintain and replenish the required RDS balance. A PSP may also provide a wallet or balance interface for its agents; wallet top-up timing and transaction records depend on that provider&apos;s process.</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">Because the PSP manages the IRCTC RDS account, the older claim that every agent never needs a bank account is too broad. Ask TravelIQ which payment, settlement, and identity documents apply to your setup before registering. Keep the booking invoice and transaction record for each customer as required by the provider process.</p>
              <a href="https://contents.irctc.co.in/en/New_B2C_Policy.pdf" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-xs font-bold text-[#10407A] underline decoration-[#10407A]/30 underline-offset-4 hover:text-[#C4320A]">See IRCTC&apos;s RDS and service-charge policy</a>
            </article>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-[22px] border border-white bg-[#F7FAFE] p-5 shadow-[6px_7px_16px_rgba(16,64,122,0.08),-5px_-5px_13px_rgba(255,255,255,0.95)]">
              <h3 className="font-bold text-[#0B1F3A]">Bookings and ticket volume</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">A personal user account has a monthly booking cap, while agent accounts use separate commercial rules. This does not mean unrestricted or literally unlimited booking: time windows, quota, passenger, and other restrictions still apply. See <a href="https://www.irctc.co.in/eticketing/findAgents.jsf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#10407A] underline underline-offset-4">IRCTC&apos;s agent information</a> and current agent instructions.</p>
            </article>
            <article className="rounded-[22px] border border-white bg-[#F7FAFE] p-5 shadow-[6px_7px_16px_rgba(16,64,122,0.08),-5px_-5px_13px_rgba(255,255,255,0.95)]">
              <h3 className="font-bold text-[#0B1F3A]">Commissions and service charges</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">IRCTC&apos;s B2C PSP policy currently lists customer service charges of ₹20 for Non-AC and ₹40 for AC tickets, irrespective of passenger count, subject to change by railway instructions. These are customer charges under that scheme, not a promise of fixed monthly income or guaranteed agent take-home commission. Confirm the current customer charge, PSP terms, and payment-gateway fees before quoting a price.</p>
            </article>
            <article className="rounded-[22px] border border-white bg-[#F7FAFE] p-5 shadow-[6px_7px_16px_rgba(16,64,122,0.08),-5px_-5px_13px_rgba(255,255,255,0.95)]">
              <h3 className="font-bold text-[#0B1F3A]">Cancellation and refunds</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Agents can manage eligible cancellation requests from booking history by selecting the relevant PNR and passenger details. Refunds and cancellation fees follow the ticket type and current railway rules; a confirmed Tatkal ticket, for example, may have different refund rules.</p>
            </article>
            <article className="rounded-[22px] border border-white bg-[#F7FAFE] p-5 shadow-[6px_7px_16px_rgba(16,64,122,0.08),-5px_-5px_13px_rgba(255,255,255,0.95)]">
              <h3 className="font-bold text-[#0B1F3A]">Flexible work, within booking hours</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">You can manage enquiries and run your agency on a schedule that suits your business. Ticket booking itself is limited to IRCTC service hours and agent-specific restricted periods, including special rules around Tatkal openings.</p>
            </article>
            <article className="rounded-[22px] border border-white bg-[#F7FAFE] p-5 shadow-[6px_7px_16px_rgba(16,64,122,0.08),-5px_-5px_13px_rgba(255,255,255,0.95)]">
              <h3 className="font-bold text-[#0B1F3A]">Recognition and shop signage</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Registration helps establish your agency as an authorized booking point and can build customer confidence. IRCTC&apos;s RSP policy requires an agency signboard and display of the authorization certificate, rules, and applicable charges. Follow the PSP instructions for the IRCTC logo and registered location.</p>
            </article>
            <article className="rounded-[22px] border border-white bg-[#F7FAFE] p-5 shadow-[6px_7px_16px_rgba(16,64,122,0.08),-5px_-5px_13px_rgba(255,255,255,0.95)]">
              <h3 className="font-bold text-[#0B1F3A]">Licences, fees, and local requirements</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">IRCTC agent authorization is required for commercial ticket sales. It does not automatically replace any local business, tax, or premises requirements that may apply to you. Do not rely on old claims that registration costs ₹99 or ₹2,999; current TravelIQ charges can vary. <Link href="/irctc-agent-registration/" className="font-semibold text-[#10407A] underline underline-offset-4">Check current plans and charges</Link>.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-white bg-[#FFF8F3] p-7 shadow-[8px_10px_22px_rgba(16,64,122,0.09),-7px_-7px_18px_rgba(255,255,255,0.95)] sm:p-9">
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#C4320A]">Good to know</span>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B1F3A]">Plan around the applicable rules</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Agent access is designed for authorized commercial bookings. It does not guarantee unlimited ticket availability, fixed commission, or monthly income. Booking windows, Tatkal restrictions, service charges, cancellations, and account requirements can change.</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">The old article included repeated paragraphs and conflicting registration prices. Confirm current charges, commission arrangements, wallet funding, and any maintenance fees with TravelIQ before payment.</p>
          </article>
          <article className="rounded-[28px] border border-white bg-[#F1F6FD] p-7 shadow-[8px_10px_22px_rgba(16,64,122,0.09),-7px_-7px_18px_rgba(255,255,255,0.95)] sm:p-9">
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#10407A]">Continue exploring</span>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B1F3A]">Ready to compare registration options?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Review the registration process, documents, OTP and DSC authentication, and applicable fees on our main IRCTC agent registration page.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/irctc-agent-registration/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#10407A] px-6 py-3 text-sm font-bold !text-white shadow-[0_9px_20px_rgba(16,64,122,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#0B2D5C] motion-reduce:transform-none">Registration guide <ArrowRight className="h-4 w-4 !text-white" /></Link>
              <a href="https://wa.me/917835025025" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366] px-6 py-3 text-sm font-bold !text-white shadow-[0_9px_20px_rgba(37,211,102,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#20BD5A] motion-reduce:transform-none"><WhatsAppIcon className="h-5 w-5 !text-white" />Chat with TravelIQ</a>
            </div>
            <p className="mt-5 text-xs font-medium text-slate-500">Customer care: <a href="tel:+917835025025" className="font-bold text-[#10407A] hover:text-[#C4320A]">+91 78350 25025</a></p>
          </article>
        </div>
      </section>
    </main>
  );
}
