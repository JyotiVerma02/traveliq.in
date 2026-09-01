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
    <section className="bg-white py-20 lg:py-28 border-b border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Testimonial
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 leading-tight">
            Agent Testimonials
          </h2>

          <p className="mt-2 text-base text-slate-600 font-semibold">
            Latest Reviews
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-[32px] border border-slate-200/80 bg-[#f8fafc] p-7 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-white hover:shadow-xl shadow-emerald-500/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-500 text-sm font-bold tracking-widest">{t.rating}</span>
                </div>

                <p className="mt-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  &ldquo;{t.message}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-sm">
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