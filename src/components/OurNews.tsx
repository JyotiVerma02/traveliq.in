const news = [
  {
    title:
      "IRCTC User ID Aadhaar Link: Book up to 24 tickets in a month",
    date: "06/06/2022",
    image:
      "https://traveliq.in/wp-content/uploads/2022/06/Untitled-1.jpg",
    description:
      "The IRCTC Railway previously allowed people to book six tickets a month. Now the rule has been updated and you can book up to 24 tickets once linked with Aadhaar.",
    href: "/pages/social/if-your-irctc-user-id-is-linked-to-your-aadhaar-number-you-can-book-up-to-24-tickets-in-a-month/",
  },
  {
    title: "IRCTC Executive Lounge Booking for Premium Passengers",
    date: "16/04/2022",
    image:
      "https://traveliq.in/wp-content/uploads/2022/04/IRCTC-EXECUTIVE-LOUNGE-1.jpg",
    description:
      "The IRCTC Executive Lounge is a first-of-its-kind, completely air-conditioned facility where railway passengers can enjoy a premium waiting experience.",
    href: "/pages/social/irctc-executive-lounge-2022/",
  },
  {
    title: "SpiceJet Flights & Special Holiday Weekend Deals",
    date: "08/04/2022",
    image:
      "https://traveliq.in/wp-content/uploads/2022/04/spicejet-post.jpg",
    description:
      "Choose SpiceJet and prepare to enhance your flying experience with comfort, speed, and convenience for long weekend domestic trips.",
    href: "/pages/social/where-are-you-heading-this-long-weekend-april-2022/",
  },
  {
    title: "World Health Day & Travel IQ Wellness Initiatives",
    date: "07/04/2022",
    image:
      "https://traveliq.in/wp-content/uploads/2022/04/world-Health-Day-1-2.jpg",
    description:
      "World Health Day is observed every year to raise awareness about the importance of health, wellness, and healthy travel lifestyles.",
    href: "/pages/social/world-health-day-7-april-2022/",
  },
];

export default function OurNews() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1685e8] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200/80">
            Our News
          </span>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-slate-900 leading-tight uppercase">
            News &amp; Articles
          </h2>

          <p className="mt-2 text-base font-semibold text-slate-600">
            Latest Updates from TravelIQ
          </p>
        </div>

        {/* News Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-sky-100 bg-white shadow-xs transition duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-slate-700 shadow-xs">
                    {item.date}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900 group-hover:text-[#1685e8] transition">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 line-clamp-3 text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#1685e8] transition"
                >
                  <span>Read Article</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="/pages/social/"
            className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-7 py-3 text-xs font-bold text-slate-800 shadow-xs transition hover:bg-[#1685e8] hover:text-white hover:border-[#1685e8]"
          >
            View All News Articles
          </a>
        </div>

      </div>
    </section>
  );
}