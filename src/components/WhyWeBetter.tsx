
import Image from "next/image";

export default function WhyWeBetter() {
  const quickLinks = [
    {
      title: "Digital Promotion",
      href: "https://webshlok.com",
      icon: "↗",
    },
    {
      title: "YouTube Channel",
      href: "https://www.youtube.com/c/TravelIQindia",
      icon: "▶",
    },
    {
      title: "Book Tickets Anytime",
      href: "#",
      icon: "◷",
    },
    {
      title: "Online Chat Support",
      href: "https://wa.me/917835025025",
      icon: "✦",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#EE5326]/[0.055] blur-3xl" />

        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#EE5326]/[0.035] blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EE5326]/[0.018] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#EE5326]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EE5326]">
              Why TravelIQ
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#08090b] sm:text-4xl lg:text-[48px]">
            TravelIQ —
            <span className="text-[#EE5326]">
              {" "}
              Your Own Travel Intelligence
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#687386] sm:text-base">
            A trusted travel technology and B2B platform built to simplify
            travel services for agents and customers across India.
          </p>

          <div className="mt-7 h-px w-full max-w-4xl bg-gradient-to-r from-[#EE5326]/35 via-slate-200 to-transparent" />
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="mt-14 grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}
          <div className="lg:col-span-7">
            <div className="space-y-6 text-[15px] leading-7 text-[#4a5568] sm:text-base">
              {/* INTRO */}
              <p>
                <strong className="font-semibold text-[#08090b]">
                  Travel IQ Services
                </strong>{" "}
                is India&apos;s best IRCTC principal agent and an IATA
                accredited travel agency.
              </p>

              {/* HISTORY */}
              <p>
                <strong className="font-semibold text-[#08090b]">
                  Founded in 2014
                </strong>
                , Travel IQ has its corporate headquarters in Gurugram, the
                IT capital of Delhi/NCR. Since then, the company has
                consistently made significant gains in the travel market.
                In 2017, the company received recognition from IATA
                (International Air Transport Association), just three years
                after its founding.
              </p>

              {/* B2B PLATFORM */}
              <p>
                In 2016, the company launched its web portal,{" "}
                <a
                  href="https://b2b.traveliq.in"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#EE5326] underline decoration-[#EE5326]/30 underline-offset-4 transition hover:text-[#c9401b] hover:decoration-[#EE5326]"
                >
                  b2b.traveliq.in
                </a>
                , providing online services for domestic and international
                air tickets, bus tickets, railway reservations, hotel
                bookings, visa assistance, tour packages and UTI PAN Card
                services.
              </p>

              {/* DIGITAL SHIFT */}
              <p>
                Anticipating the digital shift that would transform the
                travel sector, the platform focuses primarily on online
                travel assistance with a strong emphasis on the B2B trade
                module. Today, the website has over{" "}
                <strong className="font-semibold text-[#08090b]">
                  20,000 registered agents
                </strong>
                , many of whom are experienced professionals in the travel
                industry.
              </p>

              {/* =================================================
                  STATES HIGHLIGHT
              ================================================== */}
              <div className="relative my-9 overflow-hidden border border-[#EE5326]/15 bg-gradient-to-r from-[#fff8f5] via-white to-white">
                {/* Orange vertical accent */}
                <div className="absolute left-0 top-0 h-full w-[3px] bg-[#EE5326]" />

                <div className="px-6 py-6 sm:px-7">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#EE5326]">
                      Our Reach
                    </span>

                    <span className="h-px w-8 bg-[#EE5326]/30" />
                  </div>

                  <p className="mb-2 text-sm font-bold text-[#08090b] sm:text-[15px]">
                    TraveliQ is available across multiple states and
                    territories in India, including:
                  </p>

                  <p className="text-sm leading-6 text-[#596579]">
                    Andhra Pradesh, Arunachal Pradesh, Assam, Bihar,
                    Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh,
                    Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra,
                    Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab,
                    Rajasthan, Sikkim, Tamil Nadu, Telangana, Uttar Pradesh,
                    Uttarakhand and West Bengal.
                  </p>
                </div>
              </div>

              {/* EXPERIENCE */}
              <p>
                Travel IQ has established itself as a landmark in the travel
                business. Since 2014, the company has been recognised by
                some of the world&apos;s most prestigious airlines for its
                service delivery. This reflects the company&apos;s continued
                focus on providing high-quality travel-related services while
                maintaining strong industry relationships.
              </p>

              {/* SERVICES */}
              <p>
                We offer complete assistance with vacation packages, hotels,
                bus services, travel insurance, passport and visa assistance,
                cruise bookings, and many other travel services.
              </p>
            </div>

            {/* =================================================
                TRUST STATISTICS
            ================================================== */}
            <div className="mt-11 grid grid-cols-2 border-y border-slate-200 sm:grid-cols-4">
              {/* Founded */}
              <div className="px-3 py-6 sm:px-4">
                <p className="text-2xl font-bold tracking-tight text-[#08090b]">
                  2014
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7b8492]">
                  Founded
                </p>
              </div>

              {/* Agents */}
              <div className="border-l border-slate-200 px-3 py-6 sm:px-4">
                <p className="text-2xl font-bold tracking-tight text-[#08090b]">
                  20K+
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7b8492]">
                  Agents
                </p>
              </div>

              {/* IATA */}
              <div className="border-l border-slate-200 px-3 py-6 sm:px-4">
                <p className="text-2xl font-bold tracking-tight text-[#EE5326]">
                  IATA
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7b8492]">
                  Accredited
                </p>
              </div>

              {/* B2B */}
              <div className="border-l border-slate-200 px-3 py-6 sm:px-4">
                <p className="text-2xl font-bold tracking-tight text-[#08090b]">
                  B2B
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7b8492]">
                  Platform
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT COLUMN
          ==================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            {/* Logo */}
            <div className="flex min-h-[300px] items-center justify-center overflow-hidden border border-[#EE5326]/25 bg-white p-8 shadow-[0_20px_55px_rgba(16,64,122,0.10)] sm:min-h-[360px] sm:p-10">
              <Image
                src="/logo1.png"
                alt="TravelIQ Logo"
                width={400}
                height={180}
                className="h-auto w-full max-w-[320px] object-contain"
              />
            </div>

            {/* =================================================
                QUICK ACCESS
            ================================================== */}
            <div className="mt-9">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7b8492]">
                  Quick Access
                </span>

                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {quickLinks.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href !== "#" ? "_blank" : undefined}
                    rel={item.href !== "#" ? "noreferrer" : undefined}
                    className="quick-access-link group flex items-center justify-between border border-slate-200 bg-white px-4 py-3.5 transition-all duration-200 hover:border-[#EE5326]/35 hover:bg-[#fff9f6]"
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#fff4ef] text-sm font-semibold text-[#EE5326] transition-all duration-200 group-hover:bg-[#EE5326] group-hover:text-white">
                        {item.icon}
                      </span>

                      {/* Title */}
                      <span className="text-sm font-semibold text-[#08090b] transition-colors duration-200 group-hover:text-[#EE5326]">
                        {item.title}
                      </span>
                    </div>

                    {/* Arrow */}
                    <span className="text-sm text-[#a0a7b2] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#EE5326]">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* =================================================
                BOTTOM BRAND LINE
            ================================================== */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#EE5326]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a929e]">
                Trusted Travel Solutions Since 2014
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
