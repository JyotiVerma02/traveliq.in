import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle, Video, BookOpen, UsersRound } from "lucide-react";
import VideoGalleryGrid from "@/components/VideoGalleryGrid";

export const metadata: Metadata = {
  title: "Video Gallery | TravelIQ",
  description:
    "TravelIQ video gallery featuring travel guides, agent onboarding, and service highlights.",
};

const videos = [
  {
    title:
      "Travel Agents: Get IRCTC Authorized Agent ID at Just ₹1 + GST | Lowest Service Fee",
    description:
      "Learn how travel agents can get an IRCTC authorized agent ID with TravelIQ.",
    badge: "Agent Registration",
    url: "https://www.youtube.com/watch?v=MdC5RSfDweQ",
  },
  {
    title:
      "अपने b2b.traveliq.in पोर्टल को कैसे activate करें | How to activate your b2b.traveliq.in portal",
    description:
      "Follow the steps shown for activating a b2b.traveliq.in portal.",
    badge: "Portal Guide",
    url: "https://www.youtube.com/watch?v=AD8vt8i_ygE",
  },
  {
    title:
      "b2b.traveliq.in पोर्टल में पासवर्ड कैसे रीसेट करें | How to reset password in b2b.traveliq.in portal",
    description:
      "See how to reset a forgotten password for the TravelIQ B2B portal.",
    badge: "Portal Guide",
    url: "https://www.youtube.com/watch?v=VxvVduiiP38",
  },
  {
    title:
      "b2b.traveliq.in पोर्टल में वॉलेट रिचार्ज कैसे करें | How to recharge wallet b2b.traveliq.in portal",
    description:
      "Learn the wallet recharge process inside the b2b.traveliq.in portal.",
    badge: "Portal Guide",
    url: "https://www.youtube.com/watch?v=bB73D9a33No",
  },
  {
    title:
      "IRCTC से tour package कैसे बुक करें । How to book tour package from IRCTC",
    description:
      "Watch the process for booking an IRCTC tour package.",
    badge: "Tour Packages",
    url: "https://www.youtube.com/watch?v=l7XWudlhw5g",
  },
  {
    title:
      "IRCTC agent id ka password reset kaise kare | How to change IRCTC agent id password",
    description:
      "Follow the steps for changing an IRCTC agent ID password.",
    badge: "IRCTC Guide",
    url: "https://www.youtube.com/watch?v=brgyki6sJRA",
  },
  {
    title:
      "Train ticket ka Boarding station kaise badle | How to change Boarding station after ticket booking",
    description:
      "Learn how to change the boarding station after booking a train ticket.",
    badge: "Railway Guide",
    url: "https://www.youtube.com/watch?v=5lqMtPfJY20",
  },
  {
    title:
      "Chrome history kaise delete kare | How to delete history and cookies from chrome browser",
    description:
      "See how to delete browser history and cookies in Chrome.",
    badge: "Browser Guide",
    url: "https://www.youtube.com/watch?v=TKPU8ADzoy4",
  },
  {
    title:
      "IRCTC Agent Id से टिकट प्रिंट कैसे करे | How to Print Ticket from IRCTC Agent Id",
    description:
      "Learn how to print a ticket from an IRCTC agent ID.",
    badge: "IRCTC Guide",
    url: "https://www.youtube.com/watch?v=zKSxk49vOqs",
  },
  {
    title:
      "IRCTC Cancel ticket ka OTP verify kaise kare | How to verify OTP for cancel ticket",
    description:
      "Follow the OTP verification step for cancelling an IRCTC ticket.",
    badge: "IRCTC Guide",
    url: "https://www.youtube.com/watch?v=oGYePMmJZqo",
  },
  {
    title:
      "IRCTC Agent ID से टिकट कैसे कैंसिल करे 2021 | How to cancel ticket with IRCTC Agent ID",
    description:
      "Learn how to cancel a ticket using an IRCTC agent ID.",
    badge: "IRCTC Guide",
    url: "https://www.youtube.com/watch?v=PF2oP_hGSco",
  },
];

const clayCard =
  "border border-white/90 bg-white shadow-[10px_12px_30px_rgba(16,64,122,0.08),-8px_-8px_24px_rgba(255,255,255,0.95)]";

const clayHover =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[14px_18px_38px_rgba(16,64,122,0.12),-8px_-8px_24px_rgba(255,255,255,0.95)]";

export default function VideoGalleryPage() {
  return (
    <main className="min-h-screen w-full bg-[#F5F7FB] text-[#0B1728] antialiased">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative w-full overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/video-gallery.webp"
            alt="TravelIQ Video Gallery"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Soft clay-style image overlay */}
          <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]" />

          {/* Navy/orange depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/55 to-[#F5F7FB]/95" />

          {/* Subtle orange glow */}
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#EE5326]/10 blur-[100px]" />

          {/* Subtle navy glow */}
          <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#10407A]/10 blur-[100px]" />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          {/* Breadcrumb */}
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/90
              bg-white/90
              px-4
              py-2
              text-xs
              shadow-[0_8px_24px_rgba(16,64,122,0.08)]
              backdrop-blur-md
              sm:px-5
              sm:py-2.5
              sm:text-sm
            "
          >
            <Link
              href="/"
              className="font-medium text-[#7A8493] transition-colors hover:text-[#EE5326]"
            >
              Home
            </Link>

            <span className="text-[#EE5326]">/</span>

            <span className="font-bold text-[#10407A]">
              Video Gallery
            </span>
          </div>

          {/* Main Hero */}
          <div className="mt-7 flex w-full max-w-4xl flex-col items-center text-center">

            {/* Label */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#EE5326]/10
                bg-[#FFF0EA]/95
                px-4
                py-2
                shadow-[4px_5px_14px_rgba(238,83,38,0.06)]
              "
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EE5326] text-white">
                <PlayCircle className="h-3 w-3" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#EE5326] sm:text-xs">
                TravelIQ Videos
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-5
                text-balance
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-[-0.035em]
                text-[#10305E]
                sm:text-5xl
                lg:text-[58px]
              "
            >
              Explore TravelIQ{" "}
              <span className="text-[#EE5326]">
                in Motion
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-2xl
                text-balance
                text-sm
                leading-6
                text-[#526174]
                sm:text-base
                sm:leading-7
              "
            >
              Discover TravelIQ services, agent solutions, travel technology
              and helpful guides through our video collection.
            </p>

            {/* Trust / Feature Chips */}
            <div className="mt-7 flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white
                  bg-white/95
                  px-3.5
                  py-2.5
                  text-xs
                  font-semibold
                  text-[#344154]
                  shadow-[5px_6px_16px_rgba(16,64,122,0.07)]
                  backdrop-blur-md
                  sm:px-4
                "
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10407A] text-white">
                  <Video className="h-3 w-3" />
                </span>
                Helpful Videos
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white
                  bg-white/95
                  px-3.5
                  py-2.5
                  text-xs
                  font-semibold
                  text-[#344154]
                  shadow-[5px_6px_16px_rgba(16,64,122,0.07)]
                  backdrop-blur-md
                  sm:px-4
                "
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10407A] text-white">
                  <UsersRound className="h-3 w-3" />
                </span>
                Agent Guides
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white
                  bg-white/95
                  px-3.5
                  py-2.5
                  text-xs
                  font-semibold
                  text-[#344154]
                  shadow-[5px_6px_16px_rgba(16,64,122,0.07)]
                  backdrop-blur-md
                  sm:px-4
                "
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10407A] text-white">
                  <BookOpen className="h-3 w-3" />
                </span>
                Step-by-Step Guides
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-10 text-[#F5F7FB] sm:h-14">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="h-full w-full"
            fill="currentColor"
          >
            <path d="M0,45 C300,85 570,5 850,35 C1100,62 1250,48 1440,25 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* =====================================================
          VIDEO GALLERY
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#F5F7FB] py-12 sm:py-16 lg:py-20">

        {/* Background clay decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#FFF0E8] blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#EAF1F9] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mb-10 flex flex-col items-center text-center sm:mb-12">

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EE5326] sm:text-xs">
              Watch & Learn
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#10305E] sm:text-4xl">
              TravelIQ Video Collection
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#68778A] sm:text-base">
              Explore practical guides and useful videos to help you manage
              your TravelIQ services and travel business with confidence.
            </p>

            <div className="mt-4 h-1 w-12 rounded-full bg-[#EE5326]" />
          </div>

          {/* Existing Video Grid */}
          <VideoGalleryGrid videos={videos} />
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20">

        {/* Clay background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FFF0EA] blur-[100px]" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#EEF4FA] blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">

          {/* Clay CTA card */}
          <div
            className={`
              relative
              overflow-hidden
              rounded-[28px]
              px-6
              py-10
              sm:px-10
              sm:py-12
              lg:px-14
              ${clayCard}
            `}
          >

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#EE5326]/10 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0EA] text-[#EE5326] shadow-sm">
                <PlayCircle className="h-6 w-6" />
              </div>

              <div className="mx-auto mt-5 h-[2px] w-10 bg-[#EE5326]" />

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#10407A] sm:text-4xl">
                Want to Know More About TravelIQ?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#526174] sm:text-base">
                Connect with our team to learn more about our travel
                solutions, agent services and business opportunities.
              </p>

              {/* CTA Button */}
              <Link
                href="/contact-us/"
                className="
                  mt-7
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  bg-[#EE5326]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  !text-white
                  shadow-[0_10px_25px_rgba(238,83,38,0.28)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#D9471D]
                  hover:shadow-[0_15px_32px_rgba(238,83,38,0.35)]
                "
              >
                <span className="!text-white">
                  Contact TravelIQ
                </span>

                <ArrowRight className="h-4 w-4 !text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}