const testimonials = [
  {
    name: "Rishabh Kumar",
    role: "Entrepreneur",
    rating: "★★★★★",
    message:
      "Wow...what an experience. Excellent arrangements, a nice hotel, and the serene atmosphere of Bali. Our client made this statement when he traveled here last week. THANK YOU",
  },
  {
    name: "Reenu Sharma",
    role: "Manager",
    rating: "★★★★★",
    message:
      "Thanks to the team's excellent planning, we were able to enjoy the trip as a ladies group at a slower pace. Everything ran smoothly during our trip to Everest. Highly recommend TraveliQ.",
  },
  {
    name: "Rohit Sharma",
    role: "Digital Marketer",
    rating: "★★★★★",
    message:
      "Singapore is a famous destination as it is clean, safe, green and well equipped with amazing tourist attractions. We appreciate Travel IQ for providing high-quality travel life.",
  },
  {
    name: "Danvendra Sharma",
    role: "Manager",
    rating: "★★★★★",
    message:
      "It was a well-planned, excellent trip to Amritsar Dharamshala. Additionally, it was an excellent value in terms of travel. Travel-Friendly, and awesome moments to cherish along the way!",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fff9f5] py-20 lg:py-28">
      {/* Soft ambient glows – orange + subtle blue */}
      <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-[#EE5326]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-[#10407A]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10407A]/[0.03] blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#EE5326]/25 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#EE5326] shadow-sm shadow-[#EE5326]/10">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326] animate-pulse" />
            Testimonials
          </span>

          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#08090b] leading-tight uppercase">
            Agent Testimonials
          </h2>

          <p className="mt-3 text-base font-semibold text-[#EE5326]">
            Latest Reviews from TravelIQ Agent Network
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#EE5326]/12 bg-white p-6 shadow-sm shadow-[#EE5326]/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#EE5326]/30 hover:shadow-xl hover:shadow-[#EE5326]/10"
            >
              {/* Top accent line on hover */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#EE5326] via-[#ff7a45] to-[#EE5326] transition-transform duration-300 group-hover:scale-x-100" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-[#EE5326]">
                    {t.rating}
                  </span>
                </div>

                <p className="mt-5 text-xs sm:text-sm leading-relaxed text-[#5c534e]">
                  &ldquo;{t.message}&rdquo;
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-[#EE5326]/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#EE5326] to-[#ff7a45] text-sm font-bold text-white shadow-md shadow-[#EE5326]/25">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#08090b]">{t.name}</h3>
                  <p className="text-xs font-medium text-[#8a7f78]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}