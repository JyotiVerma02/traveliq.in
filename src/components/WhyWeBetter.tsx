export default function WhyWeBetter() {
  const quickLinks = [
    { title: "Digital Promotion", href: "https://webshlok.com", icon: "🌐" },
    { title: "YouTube Channel", href: "https://www.youtube.com/c/TravelIQindia", icon: "▶️" },
    { title: "Book Tickets Anytime", href: "#", icon: "⏰" },
    { title: "Online Chat Support", href: "https://wa.me/917835025025", icon: "💬" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf7] via-white to-[#fff5f0] py-20 lg:py-28">
      {/* Soft ambient orange glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-[#EE5326]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#EE5326]/[0.05] blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#EE5326]/25 bg-[#fff4ef] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#EE5326] shadow-sm shadow-[#EE5326]/10">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326] animate-pulse" />
            Why We Better
          </span>

          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#08090b] leading-tight uppercase">
            TravelIQ – Your Own Travel Intelligence
          </h2>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#4a5568] leading-relaxed font-normal">
            <p>
              <strong className="text-[#08090b] font-bold">Travel IQ Services</strong> is India&apos;s best IRCTC principal agent and an IATA accredited travel agency.
            </p>
            <p>
              <strong className="text-[#08090b] font-bold">Founded in 2014</strong>, Travel IQ has its corporate headquarters in Gurugram, the IT capital of Delhi/NCR. Since then, it has routinely made significant gains in the market. In 2017, the company received recognition from IATA (International Air Transport Group), the most prestigious airline trade association that today represents the majority of overall air traffic, just three years after its founding.
            </p>
            <p>
              In 2016, the company launched its web portal,{" "}
              <a
                href="https://b2b.traveliq.in"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#EE5326] underline decoration-[#EE5326]/40 underline-offset-2 hover:text-[#d9441a] hover:decoration-[#EE5326]"
              >
                https://b2b.traveliq.in
              </a>
              , which is providing the online services for domestic and international air ticket, bus tickets, railway reservation, hotel booking, visa assistance, tour packages and UTI Pan Card Services.
            </p>
            <p>
              Anticipating the digital shift that would disrupt the travel sector. The site is primarily intended for online travel assistance, with a concentration on the B2B trade module. The website has over 150000 registered agents, many of whom are regarded as some of the most knowledgeable professionals in the industry.
            </p>

            <div>
              <p className="font-bold text-[#08090b] mb-2">
                TraveliQ is available in many states &amp; dominions in India, such as:
              </p>
              <p className="bg-gradient-to-br from-[#fff8f5] to-[#fff4ef] p-4 rounded-2xl border border-[#EE5326]/18 text-xs sm:text-sm text-[#4a5568] leading-relaxed shadow-sm shadow-[#EE5326]/[0.04]">
                Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Uttar Pradesh, Uttarakhand, West Bengal are the states where TraveliQ is most active.
              </p>
            </div>

            <p>
              Travel IQ has established itself as a landmark in the travel business. Since 2014, the company has been recognised by some of the world&apos;s most prestigious airlines for its outstanding service delivery. This is due to the company&apos;s constant focus on providing high-quality travel-related services to its clients while also keeping good connections. We offer complete assistance in booking vacation packages, hotels, bus services, travel insurance, assistance in obtaining a passport/visa, booking a cruise, and many more services.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3.5 rounded-2xl border border-[#EE5326]/12 bg-white/90 p-4 shadow-sm shadow-[#EE5326]/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-[#EE5326]/30 hover:bg-[#fff8f5] hover:shadow-md hover:shadow-[#EE5326]/10"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#EE5326]/15 to-[#EE5326]/5 text-lg transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#08090b] group-hover:text-[#EE5326] transition">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>

            {/* Visual Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#EE5326]/15 bg-white p-6 shadow-xl shadow-[#EE5326]/[0.08] text-center">
              {/* Top orange accent line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#EE5326] via-[#ff7a45] to-[#EE5326]" />

              <span className="text-[11px] font-bold text-[#EE5326] bg-[#fff4ef] px-3 py-1 rounded-full border border-[#EE5326]/20 uppercase tracking-wider">
                Corporate HQ • Gurugram
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#08090b]">
                India&apos;s Best IRCTC Principal Agent
              </h3>

              <p className="mt-2 text-xs text-[#4a5568] leading-relaxed">
                Unit no 820, 8th Floor, JMD Megapolis, Sohna Road, Sector 48, Gurugram, Haryana - 122018
              </p>

              <div className="mt-6 pt-4 border-t border-[#EE5326]/10 flex items-center justify-center gap-4 text-xs font-bold text-[#08090b]">
                <span className="flex items-center gap-1 text-[#EE5326]">✓ IATA Accredited</span>
                <span className="text-[#EE5326]/30">•</span>
                <span className="flex items-center gap-1 text-[#EE5326]">✓ 150k+ Agents</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}