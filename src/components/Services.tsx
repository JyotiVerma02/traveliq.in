import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Shield, Clock } from "lucide-react";

const services = [
  {
    title: "Air Tickets",
    description:
      "TravelIQ offers cheapest fares for all domestic & international air ticket bookings with instant confirmation.",
    href: "/pages/services/online-air-ticket-booking",
    icon: "✈️",
    badge: "Instant Approval",
    color: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "hover:border-blue-200",
  },
  {
    title: "Bus Tickets",
    description:
      "India's leading provider of online bus ticketing services with comfortable seat selection and live tracking.",
    href: "/pages/services/bus-ticket-booking",
    icon: "🚌",
    badge: "Wide Network",
    color: "from-green-500/10 to-green-600/5",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "hover:border-green-200",
  },
  {
    title: "Hotel Booking",
    description:
      "Exclusive agent rates and corporate deals on luxury and budget hotels worldwide.",
    href: "/pages/services/online-hotel-booking",
    icon: "🏨",
    badge: "Best Rates",
    color: "from-purple-500/10 to-purple-600/5",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "hover:border-purple-200",
  },
  {
    title: "IRCTC Domestic Packages",
    description:
      "Book branded IRCTC domestic tour packages, train luxury berths, and earn high agent commission.",
    href: "/pages/services/irctc-domestic-packages",
    icon: "🧳",
    badge: "High Margin",
    color: "from-amber-500/10 to-amber-600/5",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "hover:border-amber-200",
  },
  {
    title: "Holiday Tour Packages",
    description:
      "Tailor-made domestic and international holiday tour itineraries for families, groups, and corporates.",
    href: "/pages/services/irctc-tour-packages",
    icon: "🌍",
    badge: "All Inclusive",
    color: "from-rose-500/10 to-rose-600/5",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "hover:border-rose-200",
  },
  {
    title: "IRCTC Agency ID",
    description:
      "IRCTC Principal Agent Registration at affordable prices. OTP and Dongle-based authentication supported.",
    href: "/irctc-agent-registration/",
    icon: "📄",
    badge: "Official Agent",
    color: "from-indigo-500/10 to-indigo-600/5",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    borderColor: "hover:border-indigo-200",
  },
];

export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white py-16 sm:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EE5326]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10407A]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#EE5326]/5 to-[#10407A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EE5326] bg-[#fff4ef] px-4 py-1.5 rounded-full border border-[#EE5326]/20 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Our Core Offerings
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08090b] leading-tight">
            Best Travel Services in{" "}
            <span className="text-[#EE5326]">India</span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#EE5326] to-[#10407A] mx-auto mt-4 rounded-full" />

          <p className="mt-5 text-base sm:text-lg text-[#4a5568] font-normal leading-relaxed max-w-2xl mx-auto">
            TravelIQ is the leading provider for Air tickets, Railway
            reservations, Bus Tickets, Hotel Bookings, Tour Packages &amp; IRCTC
            agent services.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col rounded-2xl bg-white p-7 shadow-sm border border-slate-200/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#EE5326]/5 hover:border-[#EE5326]/30"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl" />

              {/* Top Row: Icon Badge & Status Pill */}
              <div className="relative flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.iconBg} ${service.iconColor} text-3xl shadow-sm border border-slate-200/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  {service.icon}
                </div>
                <span className="flex items-center gap-1 text-[10px] font-bold text-[#EE5326] bg-[#fff4ef] px-3 py-1 rounded-full border border-[#EE5326]/20 whitespace-nowrap">
                  <Clock className="h-3 w-3" />
                  {service.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative mt-5 text-xl font-bold tracking-tight text-[#08090b] group-hover:text-[#EE5326] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative mt-2 text-sm text-[#4a5568] leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Bottom Action Link */}
              <div className="relative mt-6 pt-4 border-t border-slate-100 group-hover:border-[#EE5326]/20 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#10407A] group-hover:text-[#EE5326] transition-colors duration-300">
                    Explore Details
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#10407A] group-hover:text-[#EE5326] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#EE5326]/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/our-services/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#EE5326] text-white hover:text-white font-semibold rounded-full shadow-lg shadow-[#EE5326]/30 hover:bg-[#D9471D] hover:shadow-[#EE5326]/50 hover:-translate-y-0.5 transition-all duration-300"
            style={{ color: "#ffffff" }}
          >
            <span>View All Services</span>
            <ArrowRight className="h-4 w-4 text-white" style={{ color: "#ffffff" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
