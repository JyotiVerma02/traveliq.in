import type { Metadata } from "next";
import Link from "next/link";
import VideoGalleryGrid from "@/components/VideoGalleryGrid";

export const metadata: Metadata = {
  title: "Video Gallery | TravelIQ",
  description:
    "TravelIQ video gallery featuring travel guides, agent onboarding, and service highlights.",
};

const videos = [
  {
    title: "Travel Agents: Get IRCTC Authorized Agent ID at Just ₹1 + GST | Lowest Service Fee",
    description: "Learn how travel agents can get an IRCTC authorized agent ID with TravelIQ.",
    badge: "Agent Registration",
    url: "https://www.youtube.com/watch?v=MdC5RSfDweQ",
  },
  {
    title: "अपने b2b.traveliq.in पोर्टल को कैसे activate करें | How to activate your b2b.traveliq.in portal",
    description: "Follow the steps shown for activating a b2b.traveliq.in portal.",
    badge: "Portal Guide",
    url: "https://www.youtube.com/watch?v=AD8vt8i_ygE",
  },
  {
    title: "b2b.traveliq.in पोर्टल में पासवर्ड कैसे रीसेट करें | How to reset password in b2b.traveliq.in portal",
    description: "See how to reset a forgotten password for the TravelIQ B2B portal.",
    badge: "Portal Guide",
    url: "https://www.youtube.com/watch?v=VxvVduiiP38",
  },
  {
    title: "b2b.traveliq.in पोर्टल में वॉलेट रिचार्ज कैसे करें | How to recharge wallet b2b.traveliq.in portal",
    description: "Learn the wallet recharge process inside the b2b.traveliq.in portal.",
    badge: "Portal Guide",
    url: "https://www.youtube.com/watch?v=bB73D9a33No",
  },
  {
    title: "IRCTC से tour package कैसे बुक करें । How to book tour package from IRCTC",
    description: "Watch the process for booking an IRCTC tour package.",
    badge: "Tour Packages",
    url: "https://www.youtube.com/watch?v=l7XWudlhw5g",
  },
  {
    title: "IRCTC agent id ka password reset kaise kare | How to change IRCTC agent id password",
    description: "Follow the steps for changing an IRCTC agent ID password.",
    badge: "IRCTC Guide",
    url: "https://www.youtube.com/watch?v=brgyki6sJRA",
  },
  {
    title: "Train ticket ka Boarding station kaise badle | How to change Boarding station after ticket booking",
    description: "Learn how to change the boarding station after booking a train ticket.",
    badge: "Railway Guide",
    url: "https://www.youtube.com/watch?v=5lqMtPfJY20",
  },
  {
    title: "Chrome history kaise delete kare | How to delete history and cookies from chrome browser",
    description: "See how to delete browser history and cookies in Chrome.",
    badge: "Browser Guide",
    url: "https://www.youtube.com/watch?v=TKPU8ADzoy4",
  },
  {
    title: "IRCTC Agent Id से टिकट प्रिंट कैसे करे | How to Print Ticket from IRCTC Agent Id",
    description: "Learn how to print a ticket from an IRCTC agent ID.",
    badge: "IRCTC Guide",
    url: "https://www.youtube.com/watch?v=zKSxk49vOqs",
  },
  {
    title: "IRCTC Cancel ticket ka OTP verify kaise kare | How to verify OTP for cancel ticket",
    description: "Follow the OTP verification step for cancelling an IRCTC ticket.",
    badge: "IRCTC Guide",
    url: "https://www.youtube.com/watch?v=oGYePMmJZqo",
  },
  {
    title: "IRCTC Agent ID से टिकट कैसे कैंसिल करे 2021 | How to cancel ticket with IRCTC Agent ID",
    description: "Learn how to cancel a ticket using an IRCTC agent ID.",
    badge: "IRCTC Guide",
    url: "https://www.youtube.com/watch?v=PF2oP_hGSco",
  },
];

export default function VideoGalleryPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#FFF8F3] py-14 sm:py-18 lg:py-20">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#EE5326]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#10407A]/7 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-3 text-sm font-medium">
            <Link
              href="/"
              className="text-[#10407A]/55 transition hover:text-[#EE5326]"
            >
              Home
            </Link>

            <span className="text-[#EE5326]">/</span>

            <span className="font-semibold text-[#10407A]">
              Video Gallery
            </span>
          </div>

          {/* Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#EE5326]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EE5326]">
                TravelIQ Videos
              </span>

              <span className="h-[2px] w-10 bg-[#EE5326]" />
            </div>

            <h1 className="text-4xl font-extrabold tracking-[-0.045em] text-[#10407A] sm:text-5xl lg:text-6xl">
              Explore TravelIQ{" "}
              <span className="text-[#EE5326]">in Motion</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#526174] sm:text-base">
              Discover TravelIQ services, agent solutions, travel technology
              and helpful guides through our video collection.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO GALLERY
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-[#FFF0E8] blur-[120px]" />

        <div className="pointer-events-none absolute bottom-10 right-[-180px] h-[420px] w-[420px] rounded-full bg-[#EEF4FA] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <VideoGalleryGrid videos={videos} />
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#F2F6FB] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="mx-auto h-[2px] w-10 bg-[#EE5326]" />

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#10407A] sm:text-4xl">
            Want to Know More About TravelIQ?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#526174] sm:text-base">
            Connect with our team to learn more about our travel solutions,
            agent services and business opportunities.
          </p>

          <Link
            href="/contact-us/"
            className="mt-7 inline-flex items-center gap-3 bg-[#EE5326] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(238,83,38,0.22)] transition hover:-translate-y-0.5 hover:bg-[#D9471D]"
          >
            Contact TravelIQ
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}