import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer Policy | TravelIQ",
  description:
    "Read the TravelIQ disclaimer about railway service information, third-party suppliers, travel disruptions, and linked websites.",
  alternates: {
    canonical: "https://traveliq.in/disclaimer-policy/",
  },
  openGraph: {
    title: "Disclaimer Policy | TravelIQ",
    description:
      "Read the TravelIQ disclaimer about railway service information, third-party suppliers, travel disruptions, and linked websites.",
    url: "https://traveliq.in/disclaimer-policy/",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer Policy | TravelIQ",
    description:
      "Read the TravelIQ disclaimer about railway service information, third-party suppliers, travel disruptions, and linked websites.",
  },
};

const paragraphs = [
  "We have made every commercially reasonable effort to ensure that the information contained on this website is accurate and correct. However, we cannot warrant the validity, quality, and pricing of the railway services offered on this website. The information, software, services, and products published on this website may include inaccuracies or typographical errors. In particular, we or our affiliates do not guarantee the accuracy of, and disclaim liability for inaccuracies related to the information and description of railway tickets (including pricing), schedules, routes, facilities, or other travel-related products displayed on this website.",
  'Neither we nor our affiliates make any representations about the suitability of the information, software, products, and services contained on this website for any particular purpose. The inclusion or offering for sale of any products or services on this website does not constitute any endorsement or recommendation of such products or services by us or our affiliates. All such information, software, products, and services are provided "as is" without any warranty of any kind. We and our affiliates hereby disclaim all warranties and conditions regarding this information, software, products, and services, including all implied warranties and conditions of merchantability, fitness for a particular purpose, title, and non-infringement.',
  "The railway operators and other suppliers providing travel or other services through our platform are independent contractors and not our agents or that of our affiliates. We are not liable for the acts, errors, omissions, representations, warranties, breaches, or negligence of any such suppliers or for any personal injuries, death, property damage, or other damages or expenses resulting from them.",
  "We or our affiliates will not be liable and will make no refund in the event of any delay, cancellation, overbooking, strike, force majeure, or any other causes beyond our direct control. We also have no responsibility for any additional expenses, omissions, delays, re-routing, or actions by any government or authority. We have not reviewed all the sites, downloads, plug-ins, features, or advertisements linked to this website, and we are not responsible for the content or accuracy of any off-site pages or any other sites linked to this website (including, but not limited to, sites linked through advertisements or search engines). The inclusion of any link does not imply that we or our affiliates endorse the linked site, and you use the links at your own risk. We do not accept any responsibility or liability for any claims arising out of your use of these links.",
  "Your correspondence or dealings with, or participation in promotions of, advertisers on the website are solely between you and such advertisers. Neither we nor our affiliates will be liable or responsible for any loss or damage incurred as a result of such dealings or the presence of advertisements on this website.",
];

export default function DisclaimerPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f8fd] px-4 py-10 text-slate-800 sm:px-6 sm:py-16">
      <div className="pointer-events-none absolute -left-24 -top-28 h-96 w-96 rounded-full bg-[#c7ddff]/70 blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-[#ffe9a8]/50 blur-[90px]" />
      <article className="relative mx-auto max-w-[920px]">
        <header className="relative mb-8 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0b2d5c] to-[#1c4a86] px-7 py-10 text-white shadow-[0_30px_60px_-25px_rgba(11,45,92,0.55),0_10px_20px_-10px_rgba(11,45,92,0.25)] sm:px-10 sm:py-11">
          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,217,102,0.35)_0%,transparent_70%)]" />
          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Legal · Travel IQ Services Pvt. Ltd.</span>
            </div>
            <h1 className="text-[clamp(1.6rem,3.4vw,2.3rem)] font-bold leading-tight tracking-tight">
              Disclaimer Policy
            </h1>
          </div>
        </header>

        <div className="rounded-3xl border border-[#e6ecf5] bg-white px-6 py-7 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.28),0_4px_14px_-8px_rgba(15,23,42,0.08)] sm:px-9 sm:py-9">
          <div className="space-y-6 text-base leading-7 text-slate-700">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          </div>
        </div>
      </article>
    </main>
  );
}
