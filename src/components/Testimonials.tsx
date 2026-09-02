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
    <section className="bg-white py-20 lg:py-28 border-b border-sky-100">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1685e8] bg-sky-100/70 px-3.5 py-1.5 rounded-full border border-sky-200">
            Testimonials
          </span>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-slate-900 leading-tight uppercase">
            Agent Testimonials
          </h2>

          <p className="mt-2 text-base text-slate-600 font-semibold">
            Latest Reviews from TravelIQ Agent Network
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-[32px] border border-sky-100 bg-[#f8fbff] p-7 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-xl shadow-blue-500/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1685e8] text-sm font-bold tracking-widest">{t.rating}</span>
                </div>

                <p className="mt-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  &ldquo;{t.message}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-sky-100 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1685e8] text-white font-bold text-sm shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{t.name}</h3>
                  <p className="text-xs font-medium text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}