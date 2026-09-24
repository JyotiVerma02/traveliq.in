import type { Metadata } from "next";
import {
  AlertCircle,
  ArrowRight,
  Clock3,
  FileCheck2,
  Info,
  ReceiptText,
  ShieldCheck,
  TrainFront,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | TravelIQ",
  description:
    "Cancellation and refund rules for IRCTC train e-tickets booked through TravelIQ.",
  alternates: {
    canonical: "https://traveliq.in/refund-cancellation-policy/",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | TravelIQ",
    description:
      "Cancellation and refund rules for IRCTC train e-tickets booked through TravelIQ.",
    url: "https://traveliq.in/refund-cancellation-policy/",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Refund & Cancellation Policy | TravelIQ",
    description:
      "Cancellation and refund rules for IRCTC train e-tickets booked through TravelIQ.",
  },
};

const confirmedCharges = [
  ["AC First Class/Executive Class", "Rs. 240"],
  ["AC 2 Tier/First Class", "Rs. 200"],
  ["AC 3 Tier/ AC Chair car/ AC 3 Economy", "Rs. 180"],
  ["Sleeper Class", "Rs. 120"],
  ["Second Class", "Rs. 60"],
];

const quickRules = [
  {
    icon: Clock3,
    title: "More than 72 hours",
    text: "Minimum flat cancellation charges are deducted per passenger.",
  },
  {
    icon: ReceiptText,
    title: "72 to 24 hours",
    text: "25% of fare, subject to the minimum cancellation charge plus GST for AC classes.",
  },
  {
    icon: AlertCircle,
    title: "24 to 8 hours",
    text: "50% of fare, subject to the minimum cancellation charge plus GST for AC classes.",
  },
  {
    icon: Info,
    title: "Less than 8 hrs",
    text: "No refund, unless applicable TDR rules allow a claim.",
  },
];

const tdrRules = [
  [
    "Train late more than three hours and passenger Not travelled",
    "Up to the actual departure time of the train at Boarding Station",
  ],
  [
    "Difference Of Fare In Case proper Coach Not Attached (passenger has to travel in lower class)",
    "Up to 2 days (Excluding the day of issue of the certificate)",
  ],
  [
    "AC Failure",
    "Within 20 hours of actual arrival time of the train at Passenger's Destination Station",
  ],
  [
    "All Confirmed Passenger Not Travelled",
    "Up to 4 hours before the Schedule Departure time of the train at Passenger's Boarding Station",
  ],
  [
    "Train Diverted and Passenger Not Travelled",
    "Up to 72 hours from Schedule Departure of the Train from Passenger's Boarding Station",
  ],
  [
    "Train Diverted and Train not touching Boarding Station",
    "Up to 72 hours from Schedule Departure time of the train at Passenger's Boarding Station",
  ],
  [
    "Train Diverted and Train not touching Destination Station",
    "Up to 72 hours from Schedule Departure time of the train at Passenger's Boarding Station",
  ],
  [
    "Party Partially Confirm/Waitlist & Waitlisted Passengers Did Not Travel",
    "Up to 72 hours of actual Arrival Time of the Train at Passenger's Destination Station",
  ],
  [
    "Party Partially Confirmed/Waitlisted And All Passengers Did Not Travel",
    "Up to 30 Minutes before the Schedule Departure Time of the Train at Passenger's Boarding Station",
  ],
  [
    "Difference of Fare as Passenger Travelled in Lower Class",
    "Up to 2 days (Excluding the day of issue of the certificate)",
  ],
  [
    "Party Partially Travelled (Refund on Partially Used Ticket)",
    "Up to 72 hours from Schedule Departure Time of the Train at Passenger's Boarding Station",
  ],
  [
    "Passenger Not Travelled as Reservation provided in Lower class",
    "Within 3 Hours from the Actual Departure Time of the train at Passenger's Boarding Station",
  ],
  [
    "Passenger Not travelled Due To Coach Damage",
    "Within 3 Hours from the Actual Departure Time of the train at Passenger's Boarding Station",
  ],
  [
    "Train Terminated Short of Destination",
    "TDR shall be filed up to 72 hours of the Scheduled Arrival of the Train at Passenger's Destination",
  ],
];

const policySections = [
  {
    title: "2. Cancellation Charges for Waitlisted Tickets",
    body: [
      "In case a wait-listed ticket is cancelled online, the refund of fare shall be made after deducting the cancellation charge of Rs. 60/- (per passenger).",
      "If all passengers on a ticket remain on waiting list after first charting, user need not cancel such tickets. Such tickets will be cancelled automatically through the system, and the full refund will be credited back, without deducting any cancellation.",
    ],
  },
  {
    title: "3. Cancellation Charges for Partially Confirmed Tickets",
    body: [
      "In case, on a party e-ticket or a family e-ticket issued for travel of more than one passenger, some passengers have confirmed reservation and others are on waiting list, full refund of fare, less cancellation charge of Rs. 20/- +GST per passenger, shall be admissible for confirmed passengers also subject to the condition that the ticket shall be cancelled online or online TDR shall be filed for all the passengers up to four hours before the Scheduled Departure of the Train.",
      "In case, on a party e-ticket or a family e-ticket issued for travel of more than one passenger, some passengers have confirmed reservation and others are on waiting list, full refund of fare without deducting cancellation, shall be admissible for confirmed passengers also subject to the condition that the ticket shall be cancelled online or online TDR shall be filed for all the passengers after first charting and up to thirty minutes before the scheduled departure of the train.",
      "In case of party e-ticket or family e-ticket issued for travel of more than one passenger, some passengers have confirmed reservation and others are on the list of waiting list, then in case of passengers in waiting list not travelling, a certificate shall be obtained by travelling passengers from the ticket checking staff to that effect and refund of fare shall be processed online through TDR, indicating the details of the certificate issued by ticket checking staff and the online TDR shall be filed up to seventy-two (72) hours of actual arrival of the train at passengers' destination and the original certificate issued by ticket checking staff shall be sent through post to Group General Manager/IT, Indian Railway Catering and Tourism Corporation Ltd., Internet Ticketing Centre, IRCA Building, State Entry Road, New Delhi - 110055.",
    ],
  },
  {
    title: "4. Cancellation Charges for Wait List Tickets Dropped from Charting",
    body: [
      "In case of wait-listed e-tickets on which all the passengers are on waiting list even after preparation of reservation chart, names of all such passengers booked on that Passenger Name Record (PNR) will be dropped from the reservation chart and refund of full fare will be credited back to the account from which booking transaction took place, without deducting any cancellation charges.",
    ],
  },
  {
    title:
      "5. Cancellation Charges for Full Cancellation of Train (from originating station to destination station)",
    body: [
      "In case of full cancellation of trains from source to destination, automatic full refund of fare on confirmed e-tickets will be directly credited back to the account from which booking transaction took place, and online cancellation or filing of TDR is not required in such cases for use.",
    ],
  },
  {
    title: "6. Cancellation Charges for Partial Cancellation of Train",
    body: [
      "In case of partial train cancellation, train diverted, train short terminated etc., TDR is required to be filed online up to Seventy Two Hours of the Scheduled Departure of the Train at Passenger's Boarding Station.",
    ],
  },
  {
    title:
      "7. Cancellation Charges for Train Running More than 3 Hours Late and Passenger not travelled",
    body: [
      "No cancellation charge will be levied and full fare will be refunded back to all passengers holding fully or partially confirmed tickets, if the journey is not undertaken due to late running of the train by more than three hours of the scheduled departure of the train from the station commencing journey subject to the condition that:",
      "Train is running late by more than three hours at the passenger boarding station.",
      "TDR is filed online before the actual departure of the train, for availing full refund.",
      "All passengers booked on a PNR have not travelled.",
      "In case the ticket is cancelled, or if the request for refund of fare is filed online after the actual departure of train, No refund of fare will be admissible.",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F8FC] text-[#10233F]">
      <section className="relative overflow-hidden bg-[#0B2D5C] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(238,83,38,0.25),rgba(255,255,255,0)_42%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F8FC] to-transparent" />

        <div className="relative mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-[#FFD7C7]" />
            IRCTC train e-ticket rules
          </span>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
                Cancellation and Refund Rules for IRCTC Trains
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
                E-Ticket booked for IRCTC Trains can be cancelled online and
                refund will be granted by the system as per IRCTC Refund Rules,
                as follows:
              </p>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#EE5326] shadow-[0_12px_25px_rgba(0,0,0,0.14)]">
                  <TrainFront className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Online process</p>
                  <p className="mt-1 text-sm leading-6 text-white/75">
                    Cancellation, automatic refund and TDR timelines depend on
                    the ticket status and train situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto -mt-6 max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickRules.map((rule) => {
              const Icon = rule.icon;

              return (
                <article
                  key={rule.title}
                  className="group rounded-2xl border border-[#DCE7F5] bg-white p-5 shadow-[8px_10px_24px_rgba(16,64,122,0.08),-6px_-6px_18px_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EE5326]/35 hover:shadow-[0_18px_36px_rgba(238,83,38,0.14),-6px_-6px_18px_rgba(255,255,255,0.95)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF0E9] text-[#EE5326] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-base font-extrabold text-[#0B2D5C]">
                    {rule.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {rule.text}
                  </p>
                </article>
              );
            })}
          </div>

          <section className="mt-10 overflow-hidden rounded-[28px] border border-[#DCE7F5] bg-white shadow-[0_22px_55px_rgba(16,64,122,0.10)]">
            <div className="border-b border-[#E8EEF7] bg-[#FBFDFF] px-5 py-5 sm:px-8">
              <span className="inline-flex rounded-full bg-[#FFF0E9] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#C4320A]">
                1. Confirmed tickets
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0B2D5C]">
                Cancellation Charges for Confirmed Tickets
              </h2>
              <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">
                The amount deducted is based on the time of cancellation and the
                status of your ticket at the time of cancellation. Detailed
                explanations are given below:
              </p>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
              <div className="p-5 sm:p-8">
                <p className="text-sm leading-7 text-slate-700">
                  If a confirmed ticket is cancelled online more than
                  seventy-two (72) hours in advance of the scheduled departure of
                  the train, a minimum per passenger cancellation charges shall
                  be deducted at the flat rate as below:
                </p>

                <div className="mt-5 overflow-hidden rounded-2xl border border-[#DCE7F5]">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead className="bg-[#0B2D5C] text-white">
                      <tr>
                        <th className="px-4 py-3 font-bold">
                          Class of Your Ticket
                        </th>
                        <th className="px-4 py-3 font-bold">
                          Flat Cancellation Charges per Passenger
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8EEF7]">
                      {confirmedCharges.map(([ticketClass, charge]) => (
                        <tr key={ticketClass} className="bg-white">
                          <td className="px-4 py-3 font-semibold text-[#0B2D5C]">
                            {ticketClass}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {charge}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-t border-[#E8EEF7] bg-[#F8FBFF] p-5 sm:p-8 lg:border-l lg:border-t-0">
                <div className="space-y-4">
                  <TimelineItem
                    title="Between seventy-two (72) hours and up to twenty-four (24) hours"
                    text="Cancellation charges will be deducted as follows: 25%(Twenty Five percent) of the fare subject to the minimum cancellation charge referred to in clause 1(a) plus GST applicable for all AC Classes."
                  />
                  <TimelineItem
                    title="Between twenty-four (24) hours and up to eight (8) hours"
                    text="Cancellation charges as folllows: 50%(Fifty percent) of the fare subject to the minimum cancellation charge referred to in clause 1(a) ) plus GST applicable for all AC Classes."
                  />
                  <TimelineItem
                    title="Up to four hours before scheduled departure"
                    text="No refund of fare shall be admissible on the tickets having confirmed reservation in case ticket is not cancelled online or TDR not filed online up to four hours before the scheduled departure of the train."
                  />
                  <TimelineItem
                    title="Less than 8 hrs"
                    text="No refund."
                    danger
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="mt-8 grid gap-5">
            {policySections.map((section) => (
              <article
                key={section.title}
                className="rounded-[24px] border border-[#DCE7F5] bg-white p-5 shadow-[0_16px_40px_rgba(16,64,122,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(16,64,122,0.11)] sm:p-7"
              >
                <h2 className="text-xl font-extrabold text-[#0B2D5C]">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-600 sm:text-[15px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <section className="mt-8 overflow-hidden rounded-[28px] border border-[#DCE7F5] bg-white shadow-[0_22px_55px_rgba(16,64,122,0.10)]">
            <div className="border-b border-[#E8EEF7] bg-[#0B2D5C] px-5 py-6 text-white sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-white/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                    8. TDR filing
                  </span>
                  <h2 className="mt-3 text-2xl font-extrabold">
                    TDR filing for IRCTC Trains (Rules & Validations)
                  </h2>
                </div>
                <FileCheck2 className="h-10 w-10 text-[#FFD7C7]" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead className="bg-[#F8FBFF] text-[#0B2D5C]">
                  <tr>
                    <th className="w-[48%] px-5 py-4 font-extrabold">
                      TDR Filing Reasons
                    </th>
                    <th className="px-5 py-4 font-extrabold">
                      Time Limit/Rules
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8EEF7]">
                  {tdrRules.map(([reason, limit]) => (
                    <tr
                      key={reason}
                      className="transition-colors duration-200 hover:bg-[#FFF8F4]"
                    >
                      <td className="px-5 py-4 font-semibold text-[#0B2D5C]">
                        {reason}
                      </td>
                      <td className="px-5 py-4 leading-6 text-slate-600">
                        {limit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-8 rounded-[28px] border border-[#F6C7B3] bg-[#FFF7F2] p-5 shadow-[0_18px_45px_rgba(238,83,38,0.10)] sm:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B2D5C]">
                  Final Notes
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-[15px]">
                  <p>
                    Cancellations and refunds are governed by Indian Railways
                    policies.
                  </p>
                  <p>Refund timelines depend on Indian Railways.</p>
                  <p>
                    Connecting Train ticket booking not allowed on IRCTC trains.
                    As such no refund is applicable on connecting journey
                    tickets.
                  </p>
                </div>
              </div>

              <a
                href="https://www.irctc.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#EE5326] px-5 py-3 text-sm font-extrabold text-white! shadow-[0_14px_28px_rgba(238,83,38,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D94316]"
              >
                Visit IRCTC
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function TimelineItem({
  title,
  text,
  danger = false,
}: {
  title: string;
  text: string;
  danger?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[#DCE7F5] bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
      <div className="flex gap-3">
        <span
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
            danger ? "bg-[#FEE2E2] text-[#B42318]" : "bg-[#EAF2FF] text-[#0B2D5C]"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-current" />
        </span>
        <div>
          <h3 className="text-sm font-extrabold text-[#0B2D5C]">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      </div>
    </div>
  );
}
