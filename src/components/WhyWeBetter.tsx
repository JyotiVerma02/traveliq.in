export default function WhyWeBetter() {
  const quickLinks = [
    { title: "Digital Promotion", href: "https://webshlok.com", icon: "🌐" },
    { title: "YouTube Channel", href: "https://www.youtube.com/c/TravelIQindia", icon: "▶️" },
    { title: "Book Tickets Anytime", href: "#", icon: "⏰" },
    { title: "Online Chat Support", href: "https://wa.me/917835025025", icon: "💬" },
  ];

  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28 border-y border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header matching traveliq.in homepage */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Why We Better
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-slate-900 leading-tight">
            TraveliQ – Your Own Travel Intelligence
          </h2>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Exact Text from traveliq.in */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            <p>
              <strong className="text-slate-900 font-bold">Travel IQ Services</strong> is India&apos;s best IRCTC principal agent and an IATA accredited travel agency.
            </p>

            <p>
              <strong className="text-slate-900 font-bold">Founded in 2014</strong>, Travel IQ has its corporate headquarters in Gurugram, the IT capital of Delhi/NCR. Since then, it has routinely made significant gains in the market. In 2017, the company received recognition from IATA (International Air Transport Group), the most prestigious airline trade association that today represents the majority of overall air traffic, just three years after its founding.
            </p>

            <p>
              In 2016, the company launched its web portal,{" "}
              <a
                href="https://b2b.traveliq.in"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-emerald-700 underline hover:text-emerald-900"
              >
                https://b2b.traveliq.in
              </a>
              , which is providing the online services for domestic and international air ticket, bus tickets, railway reservation, hotel booking, visa assistance, tour packages and UTI Pan Card Services.
            </p>

            <p>
              Anticipating the digital shift that would disrupt the travel sector. The site is primarily intended for online travel assistance, with a concentration on the B2B trade module. The website has over 150000 registered agents, many of whom are regarded as some of the most knowledgeable professionals in the industry.
            </p>

            <div>
              <p className="font-bold text-slate-900 mb-2">
                TraveliQ is available in many states &amp; dominions in India, such as:
              </p>
              <p className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Uttar Pradesh, Uttarakhand, West Bengal are the states where TraveliQ is most active.
              </p>
            </div>

            <p>
              Travel IQ has established itself as a landmark in the travel business. Since 2014, the company has been recognised by some of the world&apos;s most prestigious airlines for its outstanding service delivery. This is due to the company&apos;s constant focus on providing high-quality travel-related services to its clients while also keeping good connections. We offer complete assistance in booking vacation packages, hotels, bus services, travel insurance, assistance in obtaining a passport/visa, booking a cruise, and many more services.
            </p>
          </div>

          {/* Right Column: 4 Feature Items & Logo Banner from traveliq.in */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50/30"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100/70 text-lg">
                    {item.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>

            {/* Visual Card from traveliq.in */}
            <div className="rounded-[32px] border border-emerald-100 bg-white p-6 shadow-lg shadow-emerald-500/5 text-center">
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/50 uppercase tracking-wider">
                Corporate HQ • Gurugram
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                India&apos;s Best IRCTC Principal Agent
              </h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Unit no 820, 8th Floor, JMD Megapolis, Sohna Road, Sector 48, Gurugram, Haryana - 122018
              </p>
              
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-xs font-bold text-slate-800">
                <span className="flex items-center gap-1 text-emerald-600">✓ IATA Accredited</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-600">✓ 150k+ Agents</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}