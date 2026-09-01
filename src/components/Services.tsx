import Link from "next/link";

const services = [
  {
    title: "Air Tickets",
    description: "TravelIQ offers cheapest fares for all domestic & international air ticket bookings with instant confirmation.",
    href: "/pages/services/online-air-ticket-booking",
    icon: "✈️",
    badge: "Instant Approval",
  },
  {
    title: "Bus Tickets",
    description: "India's leading provider of online bus ticketing services with comfortable seat selection and live tracking.",
    href: "/pages/services/bus-ticket-booking",
    icon: "🚌",
    badge: "Wide Network",
  },
  {
    title: "Hotel Booking",
    description: "Exclusive agent rates and corporate deals on luxury and budget hotels worldwide.",
    href: "/pages/services/online-hotel-booking",
    icon: "🏨",
    badge: "Best Rates",
  },
  {
    title: "IRCTC Domestic Packages",
    description: "Book branded IRCTC domestic tour packages, train luxury berths, and earn high agent commission.",
    href: "/pages/services/irctc-domestic-packages",
    icon: "🧳",
    badge: "High Margin",
  },
  {
    title: "Holiday Tour Packages",
    description: "Tailor-made domestic and international holiday tour itineraries for families, groups, and corporates.",
    href: "/pages/services/irctc-tour-packages",
    icon: "🌍",
    badge: "All Inclusive",
  },
  {
    title: "IRCTC Agency ID",
    description: "IRCTC Principal Agent Registration at affordable prices. OTP and Dongle-based authentication supported.",
    href: "/irctc-agent-registration/",
    icon: "📄",
    badge: "Official Agent",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Heading matching reference image */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60">
            Our Core Offerings
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 leading-tight">
            Integrated Travel Services to Empower Your Business
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            TravelIQ delivers complete travel technology solutions for Air tickets, Railway reservations, Bus tickets, Hotel bookings, Tour packages &amp; VISA assistance.
          </p>
        </div>

        {/* Feature Cards Grid - matching reference layout & styling */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col justify-between rounded-[32px] border border-slate-200/80 bg-[#f8fafc] p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div>
                {/* Top Row: Icon Badge & Status Pill */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-xs border border-slate-100 group-hover:bg-emerald-50 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/50">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-950 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition">
                <span>Explore Details</span>
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}