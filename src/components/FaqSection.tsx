import { ShieldCheck } from "lucide-react";

const faqs = [
  {
    number: "01.",
    question: "How long does IRCTC Agent ID registration take?",
    answer:
      "IRCTC Agent ID registration typically takes 24 to 48 working hours upon document verification. Once generated, your OTP/Dongle login will be activated immediately on b2b.traveliq.in.",
  },
  {
    number: "02.",
    question: "Can I book unlimited train tickets as an authorized agent?",
    answer:
      "Yes! As an authorized IRCTC Principal Agent through TravelIQ, you can book unlimited railway tickets for commercial clients without facing personal account suspension risk.",
  },
  {
    number: "03.",
    question: "What documents are required for agent registration?",
    answer:
      "You need a valid PAN card, Aadhaar card, mobile number not previously registered on IRCTC, personal email address, and shop/office address proof.",
  },
  {
    number: "04.",
    question: "How does Aadhaar linking increase monthly booking limits?",
    answer:
      "When your IRCTC agent profile is verified with Aadhaar, your monthly ticket limit automatically increases to 24+ tickets, allowing higher transaction volumes and profit margins.",
  },
  {
    number: "05.",
    question: "What support is provided for ticket cancellations and instant refunds?",
    answer:
      "TravelIQ provides a dedicated helpdesk for quick ticket cancellations, immediate wallet refund processing, Tatkal booking assistance, and 24/7 WhatsApp agent support.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#10407A]/10 bg-[#FFF8F3] py-20 lg:py-28">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Orange glow */}
        <div
          className="
            absolute
            -left-32
            top-20
            h-80
            w-80
            rounded-full
            bg-[#EE5326]/[0.035]
            blur-3xl
          "
        />

        {/* Navy glow */}
        <div
          className="
            absolute
            -right-32
            bottom-10
            h-96
            w-96
            rounded-full
            bg-[#10407A]/[0.035]
            blur-3xl
          "
        />

        {/* Soft center light */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/60
            blur-[120px]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <div
          className="
            flex
            flex-col
            justify-between
            gap-7
            pb-12
            md:flex-row
            md:items-end
          "
        >
          <div className="max-w-3xl">
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
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#EE5326]
                shadow-[4px_4px_10px_rgba(238,83,38,0.06),-4px_-4px_10px_rgba(255,255,255,0.95)]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />
              Help &amp; FAQs
            </div>

            {/* Heading */}

            <h2
              className="
                mt-5
                max-w-3xl
                text-3xl
                font-bold
                leading-[1.08]
                tracking-[-0.035em]
                text-[#0B1728]
                sm:text-4xl
                lg:text-[44px]
              "
            >
              Control All Your Bookings &amp; Learn
              <span className="text-[#EE5326]">
                {" "}
                Best TravelIQ Features
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                font-normal
                leading-7
                text-[#697589]
                sm:text-[15px]
              "
            >
              Everything you need to know about becoming a TravelIQ partner,
              managing bookings, and growing your travel business.
            </p>
          </div>

          {/* =====================================================
              SEE MORE BUTTON
          ===================================================== */}

          <a
            href="/contact-us/"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-3
              rounded-full
              border
              border-white
              bg-[#FFF8F3]
              px-5
              py-3
              text-xs
              font-bold
              text-[#10407A]
              shadow-[7px_7px_15px_rgba(16,64,122,0.10),-6px_-6px_14px_rgba(255,255,255,0.95)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#10407A]
         hover:!text-white
              hover:shadow-[8px_8px_18px_rgba(16,64,122,0.18)]
            "
          >
            <span>See More FAQs</span>

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#10407A]/[0.07]
                text-sm
                transition-all
                duration-300
                group-hover:translate-x-0.5
                group-hover:bg-white/10
                group-hover:text-white
              "
            >
              →
            </span>
          </a>
        </div>

        {/* =======================================================
            FAQ CONTENT
        ======================================================= */}

        <div
          className="
            mt-2
            grid
            items-start
            gap-10
            lg:grid-cols-12
            lg:gap-14
          "
        >
          {/* =====================================================
              LEFT SUPPORT CARD
          ===================================================== */}

          <div className="lg:col-span-5">
            <div
              className="
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-white
                bg-[#FFF8F3]
                p-3
                shadow-[12px_12px_28px_rgba(16,64,122,0.12),-10px_-10px_25px_rgba(255,255,255,0.95)]
              "
            >
              {/* Image */}

              <div className="relative overflow-hidden rounded-[26px]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="TravelIQ Agent Support Team"
                  className="
                    h-[420px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

                {/* Image overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#071F3D]/35
                    via-transparent
                    to-white/5
                  "
                />

                {/* Top badge */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    rounded-full
                    border
                    border-white/30
                    bg-[#071F3D]/70
                    px-3
                    py-2
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    shadow-lg
                    backdrop-blur-md
                  "
                >
                  TravelIQ Support
                </div>
              </div>

              {/* =================================================
                  FLOATING SUPPORT CARD
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7
                  rounded-[22px]
                  border
                  border-white
                  bg-white/95
                  p-4
                  shadow-[8px_8px_20px_rgba(16,64,122,0.13),-5px_-5px_14px_rgba(255,255,255,0.9)]
                  backdrop-blur-xl
                  sm:left-8
                  sm:right-8
                "
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#FFF0E9]
                      text-lg
                      shadow-[inset_3px_3px_7px_rgba(238,83,38,0.05),inset_-3px_-3px_7px_rgba(255,255,255,0.9)]
                    "
                  >
                    💬
                  </div>

                  {/* Text */}

                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#0B1728]">
                      24/7 Agent Support Line
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        font-semibold
                        text-[#10407A]/60
                        sm:text-[11px]
                      "
                    >
                      Gurugram Corporate Office: +91 7835025025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                SMALL REASSURANCE
            ================================================= */}

            <div className="mt-5 flex items-center gap-3 px-2">
              <div
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#FFF0E9]
                  text-[#EE5326]
                  shadow-[4px_4px_8px_rgba(238,83,38,0.06),-3px_-3px_7px_rgba(255,255,255,0.9)]
                "
              >
                <ShieldCheck size={15} strokeWidth={2.5} />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#8993A1]
                  "
                >
                  Need assistance?
                </p>

                <p className="mt-0.5 text-xs font-semibold text-[#10407A]">
                  Our team is here to help.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT FAQ LIST
          ===================================================== */}

          <div className="space-y-4 lg:col-span-7">
            {faqs.map((faq, index) => (
              <details
                key={faq.number}
                className="
                  group
                  rounded-[24px]
                  border
                  border-white
                  bg-[#FFF8F3]
                  p-5
                  shadow-[8px_8px_18px_rgba(16,64,122,0.08),-7px_-7px_16px_rgba(255,255,255,0.95)]
                  transition-all
                  duration-300

                  open:shadow-[10px_10px_22px_rgba(16,64,122,0.11),-8px_-8px_18px_rgba(255,255,255,0.98)]

                  hover:-translate-y-0.5
                  hover:shadow-[10px_10px_22px_rgba(16,64,122,0.11),-8px_-8px_18px_rgba(255,255,255,0.98)]
                "
                open={index === 0}
              >
                {/* =================================================
                    SUMMARY
                ================================================= */}

                <summary
                  className="
                    flex
                    w-full
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-4
                    text-left
                    [&::-webkit-details-marker]:hidden
                    focus:outline-none
                  "
                >
                  <div className="flex min-w-0 items-center gap-4">
                    {/* Number */}

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#FFF0E9]
                        font-mono
                        text-[10px]
                        font-semibold
                        text-[#EE5326]
                        shadow-[inset_2px_2px_5px_rgba(238,83,38,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                      "
                    >
                      {faq.number.replace(".", "")}
                    </span>

                    {/* Question */}

                    <span
                      className="
                        min-w-0
                        text-sm
                        font-semibold
                        leading-6
                        tracking-[-0.01em]
                        text-[#0B1728]
                        sm:text-base
                        lg:text-[16px]
                      "
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* =================================================
                      PLUS / MINUS BUTTON
                  ================================================= */}

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#10407A]/[0.055]
                      text-lg
                      font-medium
                      leading-none
                      text-[#10407A]
                      shadow-[4px_4px_9px_rgba(16,64,122,0.08),-3px_-3px_7px_rgba(255,255,255,0.95)]
                      transition-all
                      duration-300

                      group-open:bg-[#EE5326]
                      group-open:text-white
                    "
                  >
                    {/* Closed = + | Open = − */}
                    <span className="block group-open:hidden">
                      +
                    </span>

                    <span className="hidden group-open:block">
                      −
                    </span>
                  </span>
                </summary>

                {/* =================================================
                    ANSWER
                ================================================= */}

                <div
                  className="
                    mt-5
                    border-t
                    border-[#10407A]/[0.08]
                    pt-5
                    pl-0
                    sm:pl-[52px]
                  "
                >
                  <p
                    className="
                      max-w-2xl
                      text-xs
                      font-medium
                      leading-6
                      text-[#697589]
                      sm:text-sm
                      sm:leading-7
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}