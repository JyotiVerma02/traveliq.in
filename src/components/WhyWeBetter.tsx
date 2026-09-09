import Image from "next/image";

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

export default function WhyWeBetter() {
  return (
    <section className="relative overflow-hidden border-b border-[#10407A]/10 bg-[#FFF8F3] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Orange glow */}

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#EE5326]/[0.045]
            blur-[120px]
          "
        />

        {/* Navy glow */}

        <div
          className="
            absolute
            -bottom-48
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#10407A]/[0.035]
            blur-[120px]
          "
        />

        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[750px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/70
            blur-[130px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="max-w-4xl">
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#EE5326]/15
              bg-[#FFF0E9]
              px-4
              py-2
              text-[10px]
              font-black
              uppercase
              tracking-[0.2em]
              text-[#EE5326]
              shadow-[4px_4px_10px_rgba(238,83,38,0.06),-4px_-4px_10px_rgba(255,255,255,0.95)]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />

            Why TravelIQ
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              max-w-4xl
              text-4xl
              font-black
              leading-[1.04]
              tracking-[-0.055em]
              text-[#0B1728]
              sm:text-5xl
              lg:text-[52px]
            "
          >
            TravelIQ —
            <span className="text-[#EE5326]">
              {" "}
              Your Own Travel Intelligence
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-[#697589]
              sm:text-[15px]
            "
          >
            A trusted travel technology and B2B platform built to simplify
            travel services for agents and customers across India.
          </p>

          {/* Divider */}

          <div
            className="
              mt-7
              h-px
              w-full
              max-w-4xl
              bg-gradient-to-r
              from-[#EE5326]/35
              via-[#10407A]/10
              to-transparent
            "
          />
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            items-start
            gap-12
            lg:grid-cols-12
            lg:gap-16
            xl:gap-20
          "
        >
          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <div className="lg:col-span-7">
            <div
              className="
                rounded-[30px]
                border
                border-white
                bg-[#FFF8F3]
                p-6
                shadow-[9px_9px_22px_rgba(16,64,122,0.07),-8px_-8px_20px_rgba(255,255,255,0.95)]
                sm:p-8
                lg:p-9
              "
            >
              <div
                className="
                  space-y-6
                  text-[15px]
                  font-medium
                  leading-7
                  text-[#4A5568]
                  sm:text-base
                "
              >
                {/* INTRO */}

                <p>
                  <strong className="font-black text-[#0B1728]">
                    Travel IQ Services
                  </strong>{" "}
                  is India&apos;s best IRCTC principal agent and an IATA
                  accredited travel agency.
                </p>

                {/* HISTORY */}

                <p>
                  <strong className="font-black text-[#0B1728]">
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
                  In 2016, the company launched its web portal{" "}
                  <a
                    href="https://b2b.traveliq.in"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      font-black
                      text-[#EE5326]
                      underline
                      decoration-[#EE5326]/30
                      underline-offset-4
                      transition-colors
                      hover:text-[#D9471D]
                      hover:decoration-[#EE5326]
                    "
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
                  <strong className="font-black text-[#0B1728]">
                    20,000 registered agents
                  </strong>
                  , many of whom are experienced professionals in the travel
                  industry.
                </p>

                {/* =================================================
                    STATES / REACH CARD
                ================================================== */}

                <div
                  className="
                    relative
                    my-9
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white
                    bg-[#FFF8F3]
                    p-1
                    shadow-[7px_7px_16px_rgba(16,64,122,0.07),-6px_-6px_14px_rgba(255,255,255,0.95)]
                  "
                >
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[20px]
                      bg-gradient-to-br
                      from-[#FFF0E9]
                      via-[#FFF8F3]
                      to-white
                      px-6
                      py-6
                      sm:px-7
                    "
                  >
                    {/* Orange accent */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[3px]
                        bg-[#EE5326]
                      "
                    />

                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className="
                          text-[10px]
                          font-black
                          uppercase
                          tracking-[0.18em]
                          text-[#EE5326]
                        "
                      >
                        Our Reach
                      </span>

                      <span className="h-px w-8 bg-[#EE5326]/30" />
                    </div>

                    <p
                      className="
                        mb-2
                        text-sm
                        font-black
                        text-[#0B1728]
                        sm:text-[15px]
                      "
                    >
                      TravelIQ is available across multiple states and
                      territories in India, including:
                    </p>

                    <p
                      className="
                        text-sm
                        font-medium
                        leading-6
                        text-[#596579]
                      "
                    >
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

              <div
                className="
                  mt-10
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-4
                "
              >
                {/* Founded */}

                <div
                  className="
                    rounded-[20px]
                    border
                    border-white
                    bg-[#FFF8F3]
                    p-4
                    shadow-[5px_5px_11px_rgba(16,64,122,0.06),-4px_-4px_10px_rgba(255,255,255,0.95)]
                  "
                >
                  <p className="text-2xl font-black tracking-tight text-[#0B1728]">
                    2014
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.15em]
                      text-[#8993A1]
                    "
                  >
                    Founded
                  </p>
                </div>

                {/* Agents */}

                <div
                  className="
                    rounded-[20px]
                    border
                    border-white
                    bg-[#FFF8F3]
                    p-4
                    shadow-[5px_5px_11px_rgba(16,64,122,0.06),-4px_-4px_10px_rgba(255,255,255,0.95)]
                  "
                >
                  <p className="text-2xl font-black tracking-tight text-[#0B1728]">
                    20K+
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.15em]
                      text-[#8993A1]
                    "
                  >
                    Agents
                  </p>
                </div>

                {/* IATA */}

                <div
                  className="
                    rounded-[20px]
                    border
                    border-white
                    bg-[#FFF8F3]
                    p-4
                    shadow-[5px_5px_11px_rgba(16,64,122,0.06),-4px_-4px_10px_rgba(255,255,255,0.95)]
                  "
                >
                  <p className="text-2xl font-black tracking-tight text-[#EE5326]">
                    IATA
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.15em]
                      text-[#8993A1]
                    "
                  >
                    Accredited
                  </p>
                </div>

                {/* B2B */}

                <div
                  className="
                    rounded-[20px]
                    border
                    border-white
                    bg-[#FFF8F3]
                    p-4
                    shadow-[5px_5px_11px_rgba(16,64,122,0.06),-4px_-4px_10px_rgba(255,255,255,0.95)]
                  "
                >
                  <p className="text-2xl font-black tracking-tight text-[#0B1728]">
                    B2B
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.15em]
                      text-[#8993A1]
                    "
                  >
                    Platform
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT COLUMN
          ==================================================== */}

          <div className="lg:sticky lg:top-24 lg:col-span-5">
            {/* =================================================
                LOGO CLAY CARD
            ================================================== */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-white
                bg-[#FFF8F3]
                p-3
                shadow-[12px_12px_28px_rgba(16,64,122,0.12),-10px_-10px_25px_rgba(255,255,255,0.96)]
              "
            >
              {/* Decorative orange circle */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-44
                  w-44
                  rounded-full
                  bg-[#EE5326]/[0.07]
                "
              />

              {/* Decorative navy circle */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#10407A]/[0.045]
                "
              />

              {/* Logo inner area */}

              <div
                className="
                  relative
                  flex
                  min-h-[300px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[27px]
                  border
                  border-white
                  bg-gradient-to-br
                  from-white
                  via-[#FFF8F3]
                  to-[#FFF0E9]/60
                  p-8
                  shadow-[inset_4px_4px_10px_rgba(16,64,122,0.03),inset_-5px_-5px_12px_rgba(255,255,255,0.95)]
                  sm:min-h-[360px]
                  sm:p-10
                "
              >
                <div className="absolute left-6 top-6">
                  <span
                    className="
                      rounded-full
                      border
                      border-[#EE5326]/15
                      bg-[#FFF0E9]
                      px-3
                      py-1.5
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-[#EE5326]
                    "
                  >
                    Travel Intelligence
                  </span>
                </div>

                <Image
                  src="/logo1.png"
                  alt="TravelIQ Logo"
                  width={400}
                  height={180}
                  priority
                  className="
                    relative
                    z-10
                    h-auto
                    w-full
                    max-w-[320px]
                    object-contain
                    drop-shadow-[0_12px_20px_rgba(16,64,122,0.08)]
                  "
                />
              </div>
            </div>

            {/* =================================================
                QUICK ACCESS
            ================================================== */}

            <div className="mt-9">
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#FFF0E9]
                    px-3
                    py-1.5
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />

                  <span
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.18em]
                      text-[#EE5326]
                    "
                  >
                    Quick Access
                  </span>
                </div>

                <span className="h-px flex-1 bg-[#10407A]/10" />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {quickLinks.map((item) => {
                  const isInternal = item.href === "#";

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={isInternal ? undefined : "_blank"}
                      rel={isInternal ? undefined : "noreferrer"}
                      className="
                        group
                        relative
                        flex
                        items-center
                        justify-between
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-white
                        bg-[#FFF8F3]
                        px-4
                        py-3.5
                        shadow-[6px_6px_14px_rgba(16,64,122,0.07),-5px_-5px_12px_rgba(255,255,255,0.95)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-[8px_8px_18px_rgba(16,64,122,0.10),-6px_-6px_14px_rgba(255,255,255,0.98)]
                      "
                    >
                      {/* Orange hover line */}

                      <span
                        className="
                          absolute
                          bottom-0
                          left-0
                          top-0
                          w-0
                          bg-[#EE5326]
                          transition-all
                          duration-300
                          group-hover:w-[3px]
                        "
                      />

                      <div className="flex items-center gap-3">
                        {/* Icon */}

                        <span
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#FFF0E9]
                            text-sm
                            font-black
                            text-[#EE5326]
                            shadow-[inset_2px_2px_5px_rgba(238,83,38,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                            transition-all
                            duration-300
                            group-hover:bg-[#EE5326]
                            group-hover:text-white
                          "
                        >
                          {item.icon}
                        </span>

                        {/* Title */}

                        <span
                          className="
                            text-sm
                            font-black
                            text-[#0B1728]
                            transition-colors
                            duration-300
                            group-hover:text-[#EE5326]
                          "
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* Arrow */}

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          bg-[#10407A]/[0.055]
                          text-sm
                          font-bold
                          text-[#10407A]
                          transition-all
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:bg-[#EE5326]
                          group-hover:text-white
                        "
                      >
                        →
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                BOTTOM BRAND LINE
            ================================================== */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white
                bg-[#FFF8F3]
                px-4
                py-3
                shadow-[5px_5px_11px_rgba(16,64,122,0.05),-4px_-4px_10px_rgba(255,255,255,0.95)]
              "
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#EE5326]" />

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-[#8993A1]
                "
              >
                Trusted Travel Solutions Since 2014
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}