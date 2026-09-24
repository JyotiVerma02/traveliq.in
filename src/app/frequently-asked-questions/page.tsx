import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { agentFaqItems } from "@/lib/agent-faqs";
import { canonicalUrl } from "@/lib/site";

const allFaqs = agentFaqItems;

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  title: "IRCTC Agent Registration FAQs | TravelIQ",

  description:
    "Get answers about IRCTC agent registration, fees, required documents, Tatkal booking rules, cancellations, account management and TravelIQ support.",

  alternates: {
    canonical: canonicalUrl("/frequently-asked-questions"),
  },

  openGraph: {
    title: "IRCTC Agent Registration FAQs | TravelIQ",
    description:
      "Find answers about IRCTC agent registration, fees, documents, Tatkal booking rules, cancellations and support.",
    url: canonicalUrl("/frequently-asked-questions"),
    siteName: "TravelIQ",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "IRCTC Agent Registration FAQs | TravelIQ",
    description:
      "Find answers about IRCTC agent registration, fees, documents, booking rules and support.",
  },
};

/* =========================================================
   RENDER LINKS INSIDE FAQ ANSWERS
========================================================= */

function renderAnswerWithLinks(text: string) {
  const parts = text.split(
    /(https?:\/\/[^\s]+|\[[^\]]+\]\(https?:\/\/[^\)]+\))/g
  );

  return parts.map((part, index) => {
    const markdownLink = part.match(
      /^\[([^\]]+)\]\((https?:\/\/[^\)]+)\)$/
    );

    if (markdownLink) {
      return (
        <a
          key={`${markdownLink[2]}-${index}`}
          href={markdownLink[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-semibold
            text-[#EE5326]
            underline
            decoration-[#EE5326]/25
            decoration-2
            underline-offset-4
            transition-colors
            duration-200
            hover:text-[#C4320A]
            hover:decoration-[#C4320A]/50
          "
        >
          {markdownLink[1]}
        </a>
      );
    }

    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="
            break-all
            font-semibold
            text-[#EE5326]
            underline
            decoration-[#EE5326]/25
            decoration-2
            underline-offset-4
            transition-colors
            duration-200
            hover:text-[#C4320A]
          "
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

/* =========================================================
   PAGE
========================================================= */

export default function FrequentlyAskedQuestionsPage() {
  /* =======================================================
     FAQ SCHEMA
  ======================================================= */

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Frequently Asked Questions",
        item: canonicalUrl("/frequently-asked-questions"),
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC]">
      <JsonLd data={[faqSchema, breadcrumbSchema]} />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        aria-labelledby="faq-heading"
        className="
          relative
          overflow-hidden
          border-b
          border-slate-200/70
          bg-white
        "
      >
        {/* Background decorations */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Orange glow */}

          <div
            className="
              absolute
              -left-40
              -top-40
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#EE5326]/[0.07]
              blur-[100px]
            "
          />

          {/* Blue glow */}

          <div
            className="
              absolute
              -right-40
              top-0
              h-[480px]
              w-[480px]
              rounded-full
              bg-[#10407A]/[0.07]
              blur-[110px]
            "
          />

          {/* Center glow */}

          <div
            className="
              absolute
              left-1/2
              top-20
              h-[300px]
              w-[700px]
              -translate-x-1/2
              rounded-full
              bg-[#FFF4EF]/80
              blur-[120px]
            "
          />

          {/* Decorative dots */}

          <div className="absolute left-[8%] top-[35%] h-2 w-2 animate-pulse rounded-full bg-[#EE5326]/30" />

          <div className="absolute right-[12%] top-[25%] h-3 w-3 animate-pulse rounded-full bg-[#10407A]/20 [animation-delay:500ms]" />

          <div className="absolute bottom-[18%] left-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#10407A]/25 [animation-delay:900ms]" />
        </div>

        {/* ===================================================
            CONTAINER
        =================================================== */}

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* =================================================
              BREADCRUMB
          ================================================= */}

          <nav
            aria-label="Breadcrumb"
            className="
              flex
              items-center
              gap-2
              border-b
              border-slate-100
              py-4
              text-xs
              sm:text-sm
            "
          >
            <Link
              href="/"
              className="
                font-semibold
                text-[#10407A]
                transition-colors
                duration-200
                hover:text-[#EE5326]
              "
            >
              Home
            </Link>

            <span aria-hidden="true" className="text-slate-300">
              /
            </span>

            <span
              aria-current="page"
              className="truncate font-medium text-slate-500"
            >
              Frequently Asked Questions
            </span>
          </nav>

          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div
            className="
              mx-auto
              max-w-4xl
              py-14
              text-center
              sm:py-16
              lg:py-20
            "
          >
            {/* Badge */}

            <div
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
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#C4320A]
                shadow-[0_6px_20px_rgba(238,83,38,0.08)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_10px_25px_rgba(238,83,38,0.12)]
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#EE5326]
                    opacity-40
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#EE5326]
                  "
                />
              </span>

              IRCTC Agent Help Center
            </div>

            {/* Heading */}

            <h1
              id="faq-heading"
              className="
                mt-6
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#0B1728]
                sm:text-4xl
                lg:text-[52px]
              "
            >
              Everything About{" "}
              <span className="relative whitespace-nowrap text-[#EE5326]">
                IRCTC Agent
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-[3px]
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-[#EE5326]
                    to-[#EE5326]/20
                  "
                />
              </span>{" "}
              Registration
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-slate-600
                sm:text-base
              "
            >
              Clear answers about IRCTC agent registration, charges, required
              documents, Tatkal booking, account setup, system compatibility
              and TravelIQ support.
            </p>

            {/* =================================================
                INFO CHIPS
            ================================================= */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              <span
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#EE5326]/20
                  hover:shadow-md
                "
              >
                {allFaqs.length} Questions
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#10407A]/20
                  hover:shadow-md
                "
              >
                Agent Registration
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#10407A]/20
                  hover:shadow-md
                "
              >
                Booking &amp; Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ SECTION
      ===================================================== */}

      <section
        id="faq"
        aria-labelledby="faq-list-heading"
        className="
          relative
          bg-gradient-to-b
          from-[#F8FAFC]
          via-white
          to-[#F8FAFC]
          py-12
          sm:py-16
          lg:py-20
        "
      >
        {/* Background glow */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="
              absolute
              -left-48
              top-[30%]
              h-96
              w-96
              rounded-full
              bg-[#10407A]/[0.025]
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -right-48
              top-[60%]
              h-96
              w-96
              rounded-full
              bg-[#EE5326]/[0.025]
              blur-3xl
            "
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <header className="mb-8 sm:mb-10">
            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#EE5326]
                  "
                >
                  TravelIQ Knowledge Base
                </p>

                <h2
                  id="faq-list-heading"
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    tracking-[-0.025em]
                    text-[#0B1728]
                    sm:text-3xl
                  "
                >
                  Frequently asked questions
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                  Click any question below to view the complete answer.
                </p>
              </div>

              <div
                className="
                  w-fit
                  rounded-full
                  border
                  border-[#10407A]/10
                  bg-white
                  px-4
                  py-2
                  text-xs
                  font-bold
                  text-[#10407A]
                  shadow-sm
                "
              >
                {allFaqs.length} answers available
              </div>
            </div>
          </header>

          {/* =================================================
              FAQ LIST
          ================================================= */}

          <div className="space-y-3.5">
            {allFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-slate-200/80
                  bg-white
                  shadow-[0_4px_18px_rgba(15,23,42,0.035)]
                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:border-[#10407A]/20
                  hover:shadow-[0_14px_35px_rgba(16,64,122,0.08)]

                  open:border-[#10407A]/15
                  open:shadow-[0_16px_40px_rgba(16,64,122,0.09)]
                "
              >
                {/* Accent line */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    origin-top
                    scale-y-0
                    bg-gradient-to-b
                    from-[#EE5326]
                    to-[#10407A]
                    transition-transform
                    duration-300
                    group-open:scale-y-100
                  "
                />

                {/* ===========================================
                    QUESTION
                =========================================== */}

                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-3
                    px-4
                    py-4
                    text-left
                    outline-none
                    transition-colors
                    duration-300

                    hover:bg-[#FAFCFF]
                    group-open:bg-[#FCFDFE]

                    sm:gap-4
                    sm:px-6
                    sm:py-5

                    [&::-webkit-details-marker]:hidden
                  "
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    {/* Number */}

                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#FFF2EC]
                        font-mono
                        text-[10px]
                        font-bold
                        text-[#D74618]
                        shadow-[inset_0_0_0_1px_rgba(238,83,38,0.04)]
                        transition-all
                        duration-300

                        group-hover:scale-105

                        group-open:scale-105
                        group-open:bg-[#EE5326]
                        group-open:text-white
                        group-open:shadow-[0_6px_15px_rgba(238,83,38,0.25)]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}

                    <span
                      className="
                        text-sm
                        font-bold
                        leading-6
                        text-[#172033]
                        transition-colors
                        duration-200
                        group-open:text-[#10407A]
                        sm:text-[15px]
                        lg:text-base
                      "
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus / Minus */}

                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#10407A]/10
                      bg-[#F5F8FC]
                      text-lg
                      font-medium
                      leading-none
                      text-[#10407A]
                      shadow-sm
                      transition-all
                      duration-300

                      group-hover:border-[#10407A]/20
                      group-hover:bg-[#EEF4FA]

                      group-open:rotate-180
                      group-open:border-[#EE5326]
                      group-open:bg-[#EE5326]
                      group-open:text-white
                      group-open:shadow-[0_5px_15px_rgba(238,83,38,0.22)]
                    "
                  >
                    <span className="block group-open:hidden">+</span>

                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>

                {/* ===========================================
                    ANSWER
                =========================================== */}

                <div
                  className="
                    border-t
                    border-slate-100
                    bg-gradient-to-b
                    from-[#FCFDFE]
                    to-white
                    px-4
                    py-5
                    sm:px-6
                    sm:py-6
                  "
                >
                  <div className="sm:pl-14">
                    <p
                      className="
                        max-w-4xl
                        whitespace-pre-line
                        text-sm
                        font-normal
                        leading-7
                        text-slate-600
                      "
                    >
                      {renderAnswerWithLinks(faq.answer)}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>

          {/* =================================================
              SUPPORT CTA
          ================================================= */}

          <aside
            aria-labelledby="faq-support-heading"
            className="
              group
              relative
              mt-14
              overflow-hidden
              rounded-[30px]
              bg-[#10407A]
              px-6
              py-9
              shadow-[0_20px_60px_rgba(16,64,122,0.18)]
              transition-all
              duration-500
              hover:shadow-[0_25px_70px_rgba(16,64,122,0.24)]
              sm:px-10
              sm:py-11
            "
          >
            {/* CTA decorations */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div
                className="
                  absolute
                  -left-20
                  -top-24
                  h-56
                  w-56
                  rounded-full
                  border-[40px]
                  border-white/[0.035]
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  -bottom-32
                  -right-20
                  h-80
                  w-80
                  rounded-full
                  bg-[#EE5326]/25
                  blur-3xl
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  right-[25%]
                  top-0
                  h-40
                  w-40
                  rounded-full
                  bg-white/[0.025]
                  blur-2xl
                "
              />
            </div>

            <div
              className="
                relative
                flex
                flex-col
                gap-7
                text-center
                md:flex-row
                md:items-center
                md:justify-between
                md:text-left
              "
            >
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF9C7C]"
                  />

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-orange-200
                    "
                  >
                    Need more help?
                  </p>
                </div>

                <h2
                  id="faq-support-heading"
                  className="
                    mt-3
                    text-2xl
                    font-bold
                    tracking-[-0.025em]
                    text-white
                    sm:text-3xl
                  "
                >
                  Have a specific registration question?
                </h2>

                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Our support team can help with IRCTC agent registration,
                  document verification, registration plans, account setup and
                  booking-related queries.
                </p>
              </div>

              <Link
                href="/contact-us"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-xs
                  font-bold
                  text-[#10407A]
                  shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#FFF0E9]
                  hover:text-[#EE5326]
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]

                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
              >
                Contact TravelIQ

                <span
                  aria-hidden="true"
                  className="
                    ml-2
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </aside>

          {/* =================================================
              REGISTRATION CTA
          ================================================= */}

          <div className="mt-8 text-center">
            <p className="text-sm leading-7 text-slate-500">
              Ready to become an authorized IRCTC agent?{" "}
              <Link
                href="/irctc-agent-registration"
                className="
                  relative
                  inline-flex
                  font-bold
                  text-[#10407A]
                  underline
                  decoration-[#10407A]/20
                  decoration-2
                  underline-offset-4
                  transition-colors
                  duration-200
                  hover:text-[#EE5326]
                  hover:decoration-[#EE5326]/40
                "
              >
                View IRCTC Agent Registration
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}