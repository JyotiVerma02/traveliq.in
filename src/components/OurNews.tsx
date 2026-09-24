import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getPostBySlug } from "@/lib/local-content";

const news = [
  {
    title:
      "IRCTC User ID Aadhaar Link: Book up to 24 tickets in a month",
    date: "06/06/2026",
    image:
      "https://traveliq.in/wp-content/uploads/2022/06/Untitled-1.jpg",
    description:
      "The IRCTC Railway previously allowed people to book six tickets a month. Now the rule has been updated and you can book up to 24 tickets once linked with Aadhaar.",
    href: "/pages/if-your-irctc-user-id-is-linked-to-your-aadhaar-number-you-can-book-up-to-24-tickets-in-a-month",
  },
  {
    title: "IRCTC Railway Refund Rule",
    date: "16/04/2026",
    image:
      "https://traveliq.in/wp-content/uploads/2022/04/IRCTC-EXECUTIVE-LOUNGE-1.jpg",
    description:
      "Understand railway refund rules and how cancellation timing can affect the refund process for passengers and agents.",
    href: "/pages/irctc-railway-refund-rule",
  },
  {
    title: "Rules for IRCTC Ticket Cancellation and Refund",
    date: "08/04/2026",
    image:
      "https://traveliq.in/wp-content/uploads/2022/04/spicejet-post.jpg",
    description:
      "Review important cancellation and refund rules that IRCTC agents and railway passengers should understand.",
    href: "/pages/rules-for-irctc-ticket-cancellation-and-refund",
  },
  {
    title: "Rules for Online Ticket Booking for IRCTC Agents",
    date: "07/04/2026",
    image:
      "https://traveliq.in/wp-content/uploads/2022/04/world-Health-Day-1-2.jpg",
    description:
      "Learn practical rules and booking guidance for IRCTC agents using online railway ticketing workflows.",
    href: "/pages/rules-for-the-online-ticket-booking-for-irctc-agents",
  },
];

export default function OurNews() {
  return (
    <section className="relative overflow-hidden border-b border-[#10407A]/8 bg-[#FFF8F3] py-20 lg:py-28">
      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#EE5326]/8 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#10407A]/8 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[8%] top-20 hidden h-24 w-24 rounded-full border border-[#10407A]/5 lg:block" />

      <div className="pointer-events-none absolute right-[10%] top-24 hidden h-14 w-14 rounded-full border border-[#EE5326]/10 lg:block" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}
        <Reveal className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white
              bg-[#FFF8F3]
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#C4320A]
              shadow-[5px_5px_12px_rgba(16,64,122,0.08),-4px_-4px_10px_rgba(255,255,255,0.95)]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />
            Our News
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              tracking-[-0.04em]
              text-[#071F3D]
              sm:text-5xl
              lg:text-[52px]
              lg:leading-[1.05]
            "
          >
            News &amp;{" "}
            <span className="text-[#EE5326]">Articles</span>
          </h2>

          <p className="mt-4 text-sm font-semibold text-[#10407A] sm:text-base">
            Latest Updates from TravelIQ
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#374151]">
            Stay updated with the latest railway, flight, travel and
            industry news from TravelIQ.
          </p>
        </Reveal>

        {/* =======================================================
            NEWS GRID
        ======================================================= */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {news.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article
                className="
                  group
                  relative
                  flex
                  min-h-full
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white
                  bg-[#FFF8F3]
                  shadow-[9px_9px_22px_rgba(16,64,122,0.09),-8px_-8px_18px_rgba(255,255,255,0.95)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[12px_14px_28px_rgba(16,64,122,0.13),-8px_-8px_20px_rgba(255,255,255,1)]
                "
              >
                {/* Orange accent */}
                <div
                  className="
                    absolute
                    left-0
                    top-7
                    z-20
                    h-10
                    w-1
                    rounded-r-full
                    bg-[#EE5326]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden p-2">
                  <div
                    className="
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      rounded-[22px]
                      bg-[#F4F7FB]
                      shadow-[inset_2px_2px_7px_rgba(16,64,122,0.08)]
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-110
                      "
                    />

                    {/* Image overlay */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#071F3D]/35
                        via-transparent
                        to-transparent
                        opacity-60
                      "
                    />

                    {/* Article number */}
                    <div
                      className="
                        absolute
                        left-3
                        top-3
                        grid
                        h-8
                        w-8
                        place-items-center
                        rounded-full
                        border
                        border-white/60
                        bg-[#FFF8F3]/90
                        text-[10px]
                        font-black
                        text-[#10407A]
                        shadow-[3px_3px_8px_rgba(0,0,0,0.12)]
                        backdrop-blur-md
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Date */}
                    <div
                      className="
                        absolute
                        bottom-3
                        left-3
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-white/60
                        bg-white/90
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        text-[#10407A]
                        shadow-[3px_3px_8px_rgba(0,0,0,0.12)]
                        backdrop-blur-md
                      "
                    >
                      <CalendarDays className="h-3 w-3 text-[#EE5326]" />
                      {item.date}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  {/* Category */}
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#C4320A]">
                    TravelIQ Updates
                  </span>

                  {/* Title */}
                  <h3
                    className="
                      mt-2.5
                      line-clamp-2
                      min-h-[46px]
                      text-[16px]
                      font-bold
                      leading-[1.45]
                      tracking-[-0.015em]
                      text-[#071F3D]
                      transition-colors
                      duration-300
                      group-hover:text-[#EE5326]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      line-clamp-3
                      text-[12px]
                      font-medium
                      leading-6
                      text-[#374151]
                    "
                  >
                    {item.description}
                  </p>

                  {/* Read article */}
                  <div className="mt-auto pt-5">
                    {getPostBySlug(item.href.split("/").at(-1)!) ? <Link
                      href={item.href}
                      className="
                        group/link
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-[#10407A]/10
                        bg-white/70
                        px-4
                        py-2.5
                        text-[11px]
                        font-bold
                        !text-[#10407A]
                        shadow-[3px_3px_8px_rgba(16,64,122,0.06),-2px_-2px_6px_rgba(255,255,255,0.9)]
                        transition-all
                        duration-300
                        hover:border-[#EE5326]/20
                        hover:bg-[#EE5326]
                        hover:!text-white
                        hover:shadow-[4px_5px_10px_rgba(238,83,38,0.18)]
                      "
                    >
                      <span className="!text-current group-hover/link:!text-white">
                        Read Article
                        <span className="sr-only"> — {item.title}</span>
                      </span>

                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5
                          !text-current
                          group-hover/link:!text-white
                          transition-transform
                          duration-300
                          group-hover/link:-translate-y-0.5
                          group-hover/link:translate-x-0.5
                        "
                      />
                    </Link> : <span className="text-xs text-slate-500">Article unavailable</span>}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* =======================================================
            VIEW ALL BUTTON - FIXED WHITE TEXT ON ORANGE HOVER
        ======================================================= */}
        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/frequently-asked-questions/"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white
              bg-[#FFF8F3]
              px-6
              py-3.5
              text-xs
              font-bold
              !text-[#10407A]
              shadow-[7px_7px_16px_rgba(16,64,122,0.09),-6px_-6px_14px_rgba(255,255,255,0.95)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#EE5326]
              hover:bg-[#EE5326]
              hover:!text-white
              hover:shadow-[8px_10px_20px_rgba(238,83,38,0.18)]
            "
          >
            <span className="!text-current transition-colors duration-300 group-hover:!text-white">
              View IRCTC FAQs
            </span>

            <span
              className="
                grid
                h-7
                w-7
                place-items-center
                rounded-full
                bg-[#10407A]/8
                !text-[#071F3D]
                transition-all
                duration-300
                group-hover:bg-white/20
                group-hover:!text-white
              "
            >
              <ArrowUpRight
                className="
                  h-3.5
                  w-3.5
                  !text-current
                  group-hover:!text-white
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
