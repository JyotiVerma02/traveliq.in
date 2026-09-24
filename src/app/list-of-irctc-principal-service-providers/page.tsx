import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Phone,
  Mail,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Users,
  Train,
  ArrowRight,
  Calendar,
  FileText,
} from "lucide-react";

import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import { canonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "List Of IRCTC Principal Service Providers (PSP) | TravelIQ",
  description:
    "Official list of all IRCTC Principal Service Providers (PSP) under B2B, ICS, B2C, G2G, TIES, and E-Governance schemes together with admin contact details and official PDF format.",
  alternates: {
    canonical: canonicalUrl("/list-of-irctc-principal-service-providers"),
  },
  openGraph: {
    title: "List Of IRCTC Principal Service Providers (PSP) | TravelIQ",
    description:
      "Official directory of IRCTC Principal Service Providers (PSP) with contact information, admin emails, and official PDF document.",
    url: canonicalUrl("/list-of-irctc-principal-service-providers"),
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "List Of IRCTC Principal Service Providers (PSP) | TravelIQ",
    description:
      "Official directory of IRCTC Principal Service Providers (PSP) with official PDF format.",
  },
};

interface PSPCompany {
  sNo: number;
  name: string;
  contact: string;
  email: string;
  otherContact?: string;
  isTravelIQ?: boolean;
}

const b2bProviders: PSPCompany[] = [
  { sNo: 1, name: "M/s Frequency Weekly Management Services, Delhi", contact: "9772424365", email: "support@fwmspl.com", otherContact: "9772424365" },
  { sNo: 2, name: "M/s Birdres Technologies P. Ltd., Delhi", contact: "9999094078, 0124-3073093", email: "manoj@birdres.com, gn@birdres.com", otherContact: "011-46092654, 30616651" },
  { sNo: 3, name: "M/s Ebix Travels Pvt Ltd., (VIA.COM), Bangalore", contact: "080-46414141", email: "care@via.com, railwaycell@via.com", otherContact: "080-46414141" },
  { sNo: 4, name: "M/s Interactive Tradex India (P) Ltd. (ITIPL), Mumbai", contact: "022-61125757", email: "care@ebixcash.com", otherContact: "022-61125757" },
  { sNo: 5, name: "M/s Jayaswal Enterprise P. Ltd., Ahmedabad", contact: "07961901100, 918866465566", email: "jagdish@aireo.in, vishal@aireo.in", otherContact: "9227247047" },
  { sNo: 6, name: "M/s Akbar Online Booking Co. Pvt. Ltd., Mumbai", contact: "9167251095, 704527536", email: "Raildata@akbartravelsonline.com", otherContact: "022-40996000" },
  { sNo: 7, name: "M/s Pay Point India Network Private Limited, Mumbai", contact: "9987589259 / 022-28604343", email: "Naresh.rathod@paypointindia.com", otherContact: "8452008803" },
  { sNo: 8, name: "M/s RLTC Travel Pvt. Ltd., New Delhi", contact: "9643897492, 9643197492", email: "nitin.rltc@rlgroup.com, Rail.ggn@riya.travel", otherContact: "01141525188" },
  { sNo: 9, name: "M/s Simplyyatra Tour Travels Pvt. Ltd, Lucknow", contact: "8953982777", email: "ceo@simplyyatra.in, contactus@simplyyatra.in", otherContact: "0522-4921000" },
  { sNo: 10, name: "M/s Spice Money Limited, Noida", contact: "9136003023", email: "zagham.hussain@spicemoney.com", otherContact: "0120-4035602" },
  { sNo: 11, name: "M/s Payworld Digital Services Private Limited, Delhi", contact: "011-43758800 / 28753882", email: "preeti.sharma@payworldindia.com", otherContact: "9717311800" },
  { sNo: 12, name: "M/s TBO Tek Limited, Gurgaon", contact: "0124-4998999", email: "Railways@tbo.com", otherContact: "9999094078" },
  { sNo: 13, name: "M/s TSI Yatra Private Limited, Gurgaon", contact: "0120-6904820, 7838883264", email: "satyajit.mishra@tsi-yatra.com", otherContact: "0124-6768300" },
  { sNo: 14, name: "M/s Sunalpha Green Technologies Pvt. Ltd, Ahmedabad", contact: "9227079999, 9724000401", email: "railway@tripborn.com", otherContact: "7940191914" },
  { sNo: 15, name: "M/s Interactive Financial & Trading Services Pvt. Ltd. (IFTSPL), Mumbai", contact: "022-61125757", email: "care@ebixcash.com", otherContact: "022-61125757" },
  { sNo: 16, name: "M/s RITCO Travels & Tours Pvt. Ltd, Jaipur", contact: "9350825876", email: "himanshu@transcorpint.com", otherContact: "011-30418901–05" },
  { sNo: 17, name: "M/s Jai Steel Facilitation Pvt. Ltd., Delhi", contact: "7065222285", email: "Support_irctc@jaisteelfacilitation.com", otherContact: "7065222285" },
  { sNo: 18, name: "M/s Blue Star Air travel Services Pvt. Ltd., Mumbai", contact: "9819666668", email: "info@bookonbluestar.com", otherContact: "022-40999333" },
  { sNo: 19, name: "M/s Easy Trip Planners Ltd, Delhi", contact: "011-43030303", email: "quality@easemytrip.com", otherContact: "011-43131313" },
  { sNo: 20, name: "M/s Nearby Technology Pvt. Ltd., Mumbai", contact: "033-66909090", email: "travelsupport@paynearby.in", otherContact: "044-66909005" },
  { sNo: 21, name: "M/s Sahaj Retail Ltd, Kolkata", contact: "7605014837", email: "IRCTCADMIN@Sahaj.co.in", otherContact: "7605014837" },
  { sNo: 22, name: "M/s Just Click Karo Services Pvt. Ltd., Delhi", contact: "9899005005", email: "admin@justclicktravels.com", otherContact: "9899005005" },
  { sNo: 23, name: "M/s Trip Jack Private Limited, Mumbai", contact: "8657738978", email: "madhusudhan.p@tripjack.com", otherContact: "8657738978" },
  { sNo: 24, name: "M/s Integra Micro Systems Pvt. Ltd. (IMSPL), Bangalore", contact: "22257027", email: "support@integramicro.com", otherContact: "8022250073" },
  { sNo: 25, name: "M/s Kafila Hospitality And Travels Private Limited, Delhi", contact: "011-45022249", email: "accounts@kafilatravel.com", otherContact: "011-45022249" },
  { sNo: 26, name: "M/s Mos Utility Limited (Multilink), Mumbai", contact: "022-42383838", email: "info@multilinkworld.com", otherContact: "022-42383838" },
  { sNo: 27, name: "M/s Alhind Tours & Travels P. Ltd, Delhi", contact: "8929014201", email: "delhi@alhindonline.com", otherContact: "8929014201" },
  { sNo: 28, name: "M/s Viand Research Private Limited, Ghaziabad", contact: "9650258747, 8851217534", email: "pradeep@tripmgt.com", otherContact: "9650258747" },
  { sNo: 29, name: "M/s ROINET Solution Pvt. Ltd., Gurgaon", contact: "1244154700, 9540055152", email: "contact@roinet.in", otherContact: "1244154700" },
  { sNo: 30, name: "M/s Neptune Travels India Pvt. Ltd, Bangalore", contact: "8287166555, 9686112984", email: "sksharma@neptunenext.com", otherContact: "08041786200" },
  { sNo: 31, name: "M/s Redmil Business Mall Private Limited, Noida", contact: "9151012248", email: "ojaswee.singh@redmil.in", otherContact: "9151012248" },
  { sNo: 32, name: "M/s Oxigen Services (India) Pvt. Ltd, Gurgaon", contact: "9953077077", email: "new@myoxigen.com", otherContact: "9953077077" },
  { sNo: 33, name: "M/s U&V Nexgen Exim Private Limited, Mumbai", contact: "8104339422", email: "anuragpandey1981@gmail.com", otherContact: "8104339422" },
  { sNo: 34, name: "M/s Richa World Travels, Ahmedabad, Gujarat", contact: "9825026299", email: "richatravels@yahoo.co.in", otherContact: "9825326799" },
];

const icsProviders: PSPCompany[] = [
  { sNo: 1, name: "M/s Travel IQ Services Private Limited, Gurgaon", contact: "7835025025", email: "support@traveliq.in", otherContact: "7835025025", isTravelIQ: true },
  { sNo: 2, name: "M/s Frequency Weekly Management Services Pvt. Ltd., Delhi", contact: "9599550009", email: "support@saarthii.in", otherContact: "9599550009" },
  { sNo: 3, name: "M/s Webshlok Digital Services LLP, Gurgaon", contact: "9311950006", email: "info@webshlok.com, rajat.b@webshlok.com", otherContact: "9311950006" },
  { sNo: 4, name: "M/s GI Technology Private limited., Chennai", contact: "9500690514/ 044- 42886000", email: "guna.g@hermes-it.in, irctc.support@gitechnology.in", otherContact: "9500690514/ 044- 42886000" },
  { sNo: 5, name: "M/s Grameen Sanchar Society, Kolkata", contact: "9007885085, 033- 23577075", email: "sdaschaudhuri@yahoo.co.in, Partha@praxissoftek.com", otherContact: "9007885085, 033- 23577075" },
  { sNo: 6, name: "M/s Make on Trips, Delhi", contact: "9015367279, 8076515415", email: "makeontrips@gmail.com", otherContact: "9015367279, 8076515415" },
  { sNo: 7, name: "M/s Interactive Tradex India (P) Ltd. (ITIPL), Mumbai", contact: "022 -61125757", email: "care@ebixcash.com", otherContact: "022 -61125757" },
  { sNo: 8, name: "M/s Richa World Travels, Ahmedabad, Gujarat", contact: "9825026299, 9825326799", email: "richatravels@yahoo.co.in, jaymin@richaworldtravels.com", otherContact: "9825026299, 9825326799" },
  { sNo: 9, name: "M/s SC Infotech Pvt. Ltd, Delhi", contact: "9871777448", email: "info@scinfotech.com", otherContact: "011- 41411801" },
  { sNo: 10, name: "M/s Surabhi Travels, Kanpur", contact: "9026482028", email: "surabhitravels@live.com", otherContact: "0512-2659867, 2659621" },
  { sNo: 11, name: "M/s Corequest Technologies Pvt Ltd, Hooghly", contact: "7050374082, 98755571333", email: "info@corequestsholidays.com, business@corequestsholidays.com", otherContact: "7050374082, 9875557133" },
  { sNo: 12, name: "M/s Ticket2Trip, New Delhi", contact: "9311640505/ 9311540505", email: "sunil.gautam@ticket2trip.in, info@ticket2trip.in", otherContact: "011-29534772" },
  { sNo: 13, name: "M/s Quick E Solutions, New Delhi", contact: "011-65651977", email: "agent.airsamrat@gmail.com, agent@airsamrat.com", otherContact: "8800336703/8800337425" },
  { sNo: 14, name: "M/s Dhanlaxmi Agencies, Mumbai", contact: "8898852222", email: "dhanlaxmiagencies64@gmail.com", otherContact: "9892955584" },
  { sNo: 15, name: "M/s Interactive Financial & Trading Services Pvt. Ltd. (IFTSPL), Mumbai", contact: "022 -61125757", email: "care@ebixcash.com", otherContact: "022 -61125757" },
  { sNo: 16, name: "M/s Gayatri Travels, Assam", contact: "9435011700", email: "info@gayatritravels.in", otherContact: "0361-2604524" },
  { sNo: 17, name: "M/s Apptimate Software Pvt. Ltd., Odisha", contact: "09040019780, 09040017577", email: "admin@qubeinfosolutions.in", otherContact: "09040019780" },
  { sNo: 18, name: "M/s Flywidus.Com, Delhi", contact: "9911222666", email: "sevenseaz@flywidus.com", otherContact: "011- 48444444" },
  { sNo: 19, name: "M/s Aastha Travels, Meerut", contact: "9821561200, 8393004422", email: "careaasthatravels@gmail.com", otherContact: "0120-4118868" },
  { sNo: 20, name: "M/s RNFI Services Ltd., Delhi", contact: "011-45545350, 8470000012", email: "info@rnfiservices.com", otherContact: "011-45545350" },
  { sNo: 21, name: "M/s Ezypay Online Services Pvt. Ltd., Asansol", contact: "9378440056, 9332997400", email: "support@ezypay.co.in", otherContact: "341 2221124" },
  { sNo: 22, name: "M/s Equity Capital Advisors (India) Pvt. Ltd., Hyderabad", contact: "9513199983", email: "traveldesk@ecaps.in", otherContact: "080-40668888" },
  { sNo: 23, name: "M/s Chennai Marcopia Travels Pvt. Ltd., Mumbai", contact: "076208 52969", email: "chennaimarcopia13@gmail.com", otherContact: "076208 52969" },
  { sNo: 24, name: "M/s InstantPay India Limited, Delhi", contact: "11 40849944, 8125814414", email: "shailendra@instantpay.in, bops@instantpay.in", otherContact: "7011617472" },
  { sNo: 25, name: "M/s Fly Travel2Money Trek Private Limited, Delhi", contact: "011-41666554", email: "dilshad.ahmed@boomtravels.in", otherContact: "011-41666554" },
  { sNo: 26, name: "M/s VS Travel Solutions, Meerut", contact: "7417001002 / 9319711717", email: "vstravelsolution@gmail.com", otherContact: "0121-4035219" },
  { sNo: 27, name: "M/s IPS E Services Private Limited, Mumbai", contact: "9324956397", email: "contact@ipsindia.co.in", otherContact: "022-65510350" },
  { sNo: 28, name: "M/s DialMyTrip Tech Private Limited, Noida", contact: "0120-4151488, 9999354581", email: "help@dialmytrip.com", otherContact: "0120-4151488" },
  { sNo: 29, name: "M/s SI Online Technomart Pvt. Ltd., Ratlam", contact: "9425720753", email: "support@sionline.co.in", otherContact: "9425720753" },
  { sNo: 30, name: "M/s Apoorv Travels, Vadodara", contact: "9375072020, 9825072020", email: "apoorvtravels@gmail.com", otherContact: "9375072020" },
  { sNo: 31, name: "M/s Anupam Tour & Travels, Pvt. Ltd, Howrah", contact: "9883577816, 8100999727", email: "anupamtourandtravels@gmail.com", otherContact: "9883577816" },
  { sNo: 32, name: "M/s Travocare Worldwide Services Pvt. Ltd, Jammu", contact: "09419190628, 09018147979", email: "travocarejammu@gmail.com", otherContact: "09419190628" },
  { sNo: 33, name: "M/s Next Wave Travel & Trade Pvt. Ltd, Muzaffarpur, Bihar", contact: "8271716971, 9835864343", email: "admin@nextwavetravel.com", otherContact: "8271716971" },
  { sNo: 34, name: "M/s Appan Dukan Marketing & Services Pvt. Ltd, Mumbai", contact: "022-69595940", email: "adms.sales@gmail.com", otherContact: "022-69595940" },
  { sNo: 35, name: "M/s Super Yatra Online Pvt. Ltd, Sikar", contact: "8824002020, 92144-55665", email: "info@superyatra.com", otherContact: "8824002020" },
  { sNo: 36, name: "M/s Prem Travels, Ludhiana", contact: "9653388000, 8360169301", email: "premtravelsldh@gmail.com", otherContact: "9653388000" },
  { sNo: 37, name: "M/s Krazy Trip, Guwahati", contact: "8811088992", email: "admin@krazytrip.com, rashid@krazytrip.com", otherContact: "0361-2732788" },
  { sNo: 38, name: "M/s Sarkar Travels, Mumbai", contact: "9820658477, 9869610454", email: "sarkartravels.parel@gmail.com", otherContact: "022-24163786" },
  { sNo: 39, name: "M/s Trips King, Moradabad", contact: "9536615000, 9634980715", email: "support@tripsking.in", otherContact: "9012059557" },
  { sNo: 40, name: "M/s Religare Broking Ltd, Delhi", contact: "120-3391000, 011-46272400", email: "singh.harbhajan@religare.com", otherContact: "120-3391000" },
  { sNo: 41, name: "M/s BLS E-Services Limited, Delhi", contact: "9619576633", email: "investors@blsinternational.net", otherContact: "9619576633" },
  { sNo: 42, name: "M/s Airtrips, Siliguri (West Bengal)", contact: "9609596096", email: "rail@airtripsonline.com, care@airtripsonline.com", otherContact: "353-2500025" },
  { sNo: 43, name: "M/s Leisure & Lifestyle Global Services Pvt. Ltd, Noida", contact: "9871450349", email: "info@llgspl.in, llgspl2020@gmail.com", otherContact: "9871450349" },
  { sNo: 44, name: "M/s CGS Hospitality, Kolkata", contact: "+91 33 2529 5065, 9330900266", email: "mailtoanil8@gmail.com, anil@ktsclickworld.com", otherContact: "8336911118" },
  { sNo: 45, name: "M/s Mobisafar Services Private Limited, Ludhiana", contact: "9876713635", email: "care@mobisafar.com", otherContact: "0161-5015050" },
  { sNo: 46, name: "M/s Singla Enterprises, Ludhiana", contact: "9115112001", email: "admin@iflynpay.com", otherContact: "9115112001" },
  { sNo: 47, name: "M/s Book N Travel, Bhopal", contact: "7389908892", email: "bookntravelbpl@gmail.com", otherContact: "7389908892" },
  { sNo: 48, name: "M/s Peediakkal Agencies, Ernakulam Kerala", contact: "9037110110", email: "peediakkalagencies@yahoo.com", otherContact: "9037110110" },
  { sNo: 49, name: "M/s Roundpay Techno Media OPC P Ltd, Lucknow", contact: "0522-4069292", email: "support@roundpay.in, help@roundpay.in", otherContact: "9044004486" },
  { sNo: 50, name: "M/s U&V Nexgen Exim Private Limited, Mumbai", contact: "8104339422", email: "anuragpandey1981@gmail.com", otherContact: "8104339422" },
  { sNo: 51, name: "M/s Gandhi Services, Bareilly", contact: "7409717717", email: "gandhienterprises5@gmail.com", otherContact: "7409717717" },
  { sNo: 52, name: "M/s Upcurve Consumer Technologies Pvt. Ltd. (Udchalo) Pune", contact: "7499159789, 8208199634", email: "franchise@udchalo.com", otherContact: "7499159789" },
  { sNo: 53, name: "M/s Jasyatra Tours And Travels Private, Indore", contact: "07314795777", email: "sales@jasyatra.com, support@jasyatra.com", otherContact: "07314795777" },
  { sNo: 54, name: "M/s Viand Research Private Limited, Ghaziabad", contact: "9650258747, 8851217534", email: "pradeep@tripmgt.com", otherContact: "9650258747" },
  { sNo: 55, name: "M/s Rapipay Fintech Private Limited, Noida", contact: "7503245345", email: "ankur@rapipay.com", otherContact: "7503245345" },
  { sNo: 56, name: "M/s Isha Travels And Tours Pvt. Ltd, Delhi", contact: "9999757650", email: "ishatravel@yahoo.co.uk", otherContact: "011-5731333" },
  { sNo: 57, name: "M/s Excel One Stop Solution Pvt. Ltd, Jodhpur", contact: "9214897703", email: "info@a2zsuvidhaa.com", otherContact: "9214897703" },
  { sNo: 58, name: "M/s Riseel Edugrow India Pvt. Ltd, Deoghar Jharkhand", contact: "7295816952, 6209303936", email: "abkvs123@gmail.com", otherContact: "7295816952" },
  { sNo: 59, name: "M/s Noble Web Studio Pvt. Ltd, Jaipur", contact: "7340019561, 7340019563", email: "ravi@noblewebstudio.com", otherContact: "7340019561" },
  { sNo: 60, name: "M/s Quicksun Technologies Pvt. Ltd., Gurgaon", contact: "9910779923", email: "ankur.gupta@quicksuntech.com, info@quicksuntech.com", otherContact: "9910779923" },
  { sNo: 61, name: "M/s AISECT Ltd., Bhopal", contact: "9111009112", email: "anilrawat@aisect.org, santonu@aisect.org", otherContact: "0755-2432842" },
  { sNo: 62, name: "M/s Mindsarray Network Pvt. Ltd, Maharashtra", contact: "8748946955", email: "railsupport@pay1.in", otherContact: "8748946955" },
  { sNo: 63, name: "M/s VK Venture Private Limited, Thane Maharashtra", contact: "9372612139", email: "vinay@biznext.in", otherContact: "9372612139" },
  { sNo: 64, name: "M/s Sec2Pay India E-Service Private Limited, Pune", contact: "9145157373", email: "support@indirail.in", otherContact: "9673883883" },
  { sNo: 65, name: "M/s Maddox Consultancy Services Private Limited, Delhi", contact: "9999026763", email: "niklank@maddox.co.in", otherContact: "9999026763" },
  { sNo: 66, name: "M/s Make My Trip India Private Limited, Gurgaon", contact: "7303335806", email: "Pawan.Chauhan@go-mmt.com", otherContact: "7303335806" },
  { sNo: 67, name: "M/s Encore Digitech Pvt. Ltd, Kolkata", contact: "9205177056", email: "jhasuman2007@gmail.com", otherContact: "033-263871" },
  { sNo: 68, name: "M/s Inbix Digital Pvt. Ltd, Lucknow", contact: "9651045666", email: "inbix.in@gmail.com", otherContact: "9651045666" },
  { sNo: 69, name: "M/s Jirawala Travels Private Limited, Ahmedabad", contact: "7922860799, 9998802711", email: "jirawalatravelspvtltd@gmail.com", otherContact: "079-48481115" },
  { sNo: 70, name: "M/s Uselocator Advertising Private Limited, Bhopal", contact: "9200333344", email: "sanjay@uselocator.in", otherContact: "9993332161" },
  { sNo: 71, name: "M/s Quiick Yatra, Delhi", contact: "9650036716, 9999688375", email: "Sumit.sachdeva@quiickyatra.com", otherContact: "011-41444256" },
  { sNo: 72, name: "M/s Stelling Technologies Pvt. Ltd., Noida", contact: "8590136938", email: "assistedbooking@railyatri.in", otherContact: "8590136938" },
  { sNo: 73, name: "M/s Travelink, Kolkata", contact: "9831112679", email: "travelinkrail@gmail.com", otherContact: "03335942321" },
  { sNo: 74, name: "M/s Mobifast Solutions Private Limited, Delhi", contact: "8447445497", email: "help@impsguru.com, preeti@impsguru.com", otherContact: "011-49954822" },
];

const b2cProviders = [
  "M/s LE Travenues Technology Ltd. (Confirm Ticket) (Mobile App)",
  "M/s LE Travenues Technology Ltd. (Confirm Ticket) (Website)",
  "M/s Make My Trip India Private Limited (MMT)",
  "M/s Yatra Online Ltd.",
  "M/s ICICI Bank Ltd.",
  "M/s One 97 Communication Ltd. (PayTM)",
  "M/s Make My Trip India Private Limited (IBIBO)",
  "M/s LE Travenues Technology Ltd. (IXIGO)",
  "M/s LE Travenues Technology Ltd. (IXIGO Flight)",
  "M/s Stark Enterprises Pvt. Ltd (Trainman)",
  "M/s State Bank of India (SBI)",
  "M/s Easy Trip Planners Limited",
  "M/s Stelling Technologies Pvt. Ltd. (RailYatri)",
  "M/s Rewards 360 Global Services Pvt. Ltd.",
  "M/s Amazon Pay India Private Limited",
  "M/s Rodeo Travel Technologies Private Limited (Railofy)",
  "M/s Airtel Payments Bank Ltd.",
  "M/s TripOzo Private Limited",
  "M/s Redbus India Private Limited",
  "M/s Redbus India Private Limited (redRail)",
  "M/s Aeries Financial Technologies Private Limited",
  "M/s The Karur Vysaya Bank Ltd.",
  "M/s Prago Remitap Techno Services Pvt. Ltd.",
  "M/s Amazon Seller Services Pvt. Ltd.",
  "M/s Bank of Baroda",
];

const gsaAbroad = [
  "M/s 12 GO (Thailand) Co. Ltd (GSA Thailand)",
  "M/s Aditi Travels (GSA Nepal)",
  "M/s Trip Planner Travel & Tours Pvt. Ltd. (GSA Nepal)",
  "M/s Easy Tech International Travels and Tours Pvt. Ltd. (GSA Nepal)",
  "M/s Orient Paradise Tours & Travels Pvt. Ltd. (GSA Nepal)",
  "M/s Maruti Nandan Tours & Travels Pvt. Ltd. (GSA Nepal)",
  "M/s Krishna Travels & Tours Pvt. Ltd. (GSA Nepal)",
  "M/s Mahesh Travel & Tours Pvt. Ltd. (GSA Nepal)",
  "M/s All Time Tours and Travels Private Limited (GSA Nepal)",
  "M/s Navada Travel & Tours Pvt. Ltd. (GSA Nepal)",
  "M/s Peace Nepal Travels Service Private Limited (GSA Nepal)",
  "M/s Rex Travels Pvt. Ltd. (GSA Nepal)",
  "M/s Caesars Holidays (GSA, Kuwait)",
  "M/s Galaxy Travel International (GSA Bangladesh)",
  "M/s Smart Vacation Holidays Tour & Travels Pvt. Ltd. (GSA Nepal)",
  "M/s Aotrek Tourism Pvt. Ltd. (GSA Bangladesh)",
  "M/s Aeroplane Tours and Travels (GSA Bangladesh)",
];

const g2gList = [
  "CGDA (B2B)",
  "Central Reserve Police Force (CRPF) (B2B)",
  "National Disaster Response Force (NDRF) (B2B)",
  "Directorate General Assam Rifles (B2B)",
  "Central Industrial Security Force (CISF) (B2B)",
  "Border Security Force (BSF) (B2B)",
  "National Security Guard (NSG) (ICS)",
  "Indo Tibetan Border Police (ITBP) (B2B)",
  "India Post Payment Bank (IPPB) (B2B)",
];

const tiesList = [
  "M/s Google LLC (Where is My Train)",
  "M/s Google LLC (Google Search)",
  "M/s Google LLC (Google Maps)",
  "M/s Guerrilla Infra Solutions Pvt. Ltd (OYO: Hotel Booking App.)",
  "M/s Google LLC (Assistant)",
];

const eGovernanceProviders = [
  { sNo: 1, name: "M/s CSC e Governance Services India Ltd. Delhi", email: "gaurav.chauhan@csc.gov.in, wasif.ali@csc.gov.in", contact: "011-49754975", otherContact: "011-49754975" },
  { sNo: 2, name: "M/s Rajcomp Info Services Pvt. Ltd. Jaipur", email: "irctc.emitra@rajasthan.gov.in", contact: "141-5103902", otherContact: "510313" },
];

const pdfPath = "/irctc-authorised-principal-service-providers.pdf";

export default function IRCTCPrincipalServiceProvidersPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: canonicalUrl("/") },
    {
      name: "List of IRCTC Principal Service Providers",
      item: canonicalUrl("/list-of-irctc-principal-service-providers"),
    },
  ]);

  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#0B1728] antialiased pb-20 sm:pb-24">
      <JsonLd data={breadcrumbSchema} />

      {/* =====================================================
          HERO BANNER
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#E7F0FB] via-[#F4F8FD] to-[#EAF2FC] min-h-[480px] sm:min-h-[540px] flex items-center">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] -z-0 overflow-hidden">
          <Image
            src="/images/irctc_psp_hero.jpg"
            alt="IRCTC Vande Bharat Express Train"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center lg:object-right opacity-90 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#E7F0FB] via-[#E7F0FB]/80 to-transparent lg:via-[#E7F0FB]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F7FB] via-transparent to-transparent lg:hidden" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-md mb-5">
              <Link href="/" className="hover:text-[#10407A] transition-colors">
                Home
              </Link>
              <span className="text-[#EE5326]">/</span>
              <span className="text-[#10407A]">List of IRCTC Principal Service Providers</span>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EE5326] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                <ShieldCheck className="h-4 w-4" /> IRCTC SERVICE PROVIDER DIRECTORY
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-[#0F2D5E] leading-[1.1]">
              List Of IRCTC{" "}
              <span className="text-[#EE5326]">Principal Service Providers</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base font-medium text-slate-600 leading-relaxed max-w-xl">
              The following is a list of all the Principal Service Providers of IRCTC, together with their available contact information.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/irctc-agent-registration"
                className="inline-flex items-center gap-2 rounded-full bg-[#EE5326] px-6 py-3.5 text-xs sm:text-sm font-bold !text-white shadow-[0_10px_25px_rgba(238,83,38,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#D9471D]"
              >
                <Users className="h-4 w-4" /> Become an IRCTC Agent <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#official-pdf"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#10407A] bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[#10407A] shadow-sm transition-all hover:bg-slate-50"
              >
                <FileText className="h-4 w-4" /> View Official PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FLOATING STATS BAR
      ===================================================== */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 z-20">
        <div className="rounded-3xl border border-white bg-white p-4 sm:p-6 shadow-[0_15px_40px_rgba(16,64,122,0.08)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            <div className="flex items-center gap-3.5 p-2 sm:p-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0EA] text-[#EE5326] shadow-sm">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0F2D5E]">{icsProviders.length}</p>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                  ICS PSP PROVIDERS
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 sm:p-3 pt-4 lg:pt-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#10407A] shadow-sm">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0F2D5E]">{b2bProviders.length}</p>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                  B2B SCHEME PROVIDERS
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 sm:p-3 pt-4 lg:pt-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0F2D5E]">{b2cProviders.length}</p>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                  B2C PROVIDERS
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 sm:p-3 pt-4 lg:pt-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 shadow-sm">
                <Globe2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0F2D5E]">{gsaAbroad.length}</p>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                  GSAS OVERSEAS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DIRECTORY HEADER CARD
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2D5E] tracking-tight">
                IRCTC Authorized Service Providers (Agents) Directory
              </h2>
              <div className="mt-2 h-1 w-14 bg-[#EE5326] rounded-full" />

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                The following directory groups IRCTC Principal Service Providers by scheme and shows the administrative contact details and email addresses provided in the supplied source.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
              <span className="inline-flex items-center gap-1.5 text-[#EE5326] font-bold">
                <Calendar className="h-4 w-4" /> Last Updated: 23-December-2024
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-slate-600 font-bold">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> Directory source information
              </span>
            </div>
          </div>

          <div id="official-pdf" className="lg:col-span-5 rounded-2xl border border-slate-200 bg-[#F8FAFD] p-6 flex flex-col justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0EA] text-[#EE5326]">
              <FileText className="h-5 w-5" />
            </div>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#EE5326]">Reference document</p>
            <h3 className="mt-1 text-lg font-extrabold text-[#0F2D5E]">IRCTC Principal Service Providers PDF</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">Open the source PDF for the directory information shown on this page.</p>
            <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0F2D5E] px-5 py-3 text-xs font-bold !text-white transition hover:bg-[#10407A]">
              <FileText className="h-4 w-4" /> View Source PDF
            </a>
          </div>
        </div>
      </section>



      {/* =====================================================
          TABLE SECTIONS
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 space-y-12">
        {/* SECTION 1: B2B SCHEME TABLE */}
        <div id="b2b-scheme" className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="bg-[#0F2D5E] p-5 sm:p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">1. List of B2B Principal Service Providers</h3>
              <p className="text-xs text-white/80 mt-1">Business to Business (B2B) Scheme Authorized Providers</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white border border-white/20">
              {b2bProviders.length} Providers
            </span>
          </div>

          <div className="overflow-x-auto p-4 sm:p-6">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-slate-100 text-[#0F2D5E] uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 rounded-l-xl">S.No</th>
                  <th className="py-3.5 px-4">Company Name & City</th>
                  <th className="py-3.5 px-4">Admin Contact Details</th>
                  <th className="py-3.5 px-4">Admin Email Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {b2bProviders.map((item) => (
                  <tr key={item.sNo} className="hover:bg-sky-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-500">{item.sNo}</td>
                    <td className="py-3.5 px-4 font-semibold text-[#0F2D5E] max-w-xs">{item.name}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-600">{item.contact}</td>
                    <td className="py-3.5 px-4 font-medium text-sky-700 break-all">{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 2: ICS SCHEME TABLE */}
        <div id="ics-scheme" className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="bg-[#EE5326] p-5 sm:p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">2. List of Internet Cafe Scheme (ICS) Principal Service Providers</h3>
              <p className="text-xs text-white/90 mt-1">Authorized ICS Principal Service Providers Directory</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white">
              {icsProviders.length} Providers
            </span>
          </div>

          <div className="overflow-x-auto p-4 sm:p-6">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-slate-100 text-[#0F2D5E] uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 rounded-l-xl">S.No</th>
                  <th className="py-3.5 px-4">Company Name & City</th>
                  <th className="py-3.5 px-4">Admin Contact Details</th>
                  <th className="py-3.5 px-4">Admin Email Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {icsProviders.map((item) => (
                  <tr
                    key={item.sNo}
                    className={
                      item.isTravelIQ
                        ? "bg-amber-50/90 font-semibold border-l-4 border-l-[#EE5326]"
                        : "hover:bg-sky-50/50 transition-colors"
                    }
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-500">
                      {item.isTravelIQ ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EE5326] text-xs font-bold text-white shadow-sm">
                          ★
                        </span>
                      ) : (
                        item.sNo
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#0F2D5E] max-w-xs">
                      {item.name}
                      {item.isTravelIQ && (
                        <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-[#EE5326]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#EE5326]">
                          <CheckCircle2 className="h-3 w-3" /> Featured PSP
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-700">
                      {item.isTravelIQ ? (
                        <a
                          href="https://wa.me/917835025025"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#EE5326] font-bold hover:underline"
                        >
                          <Phone className="h-3.5 w-3.5" /> 7835025025
                        </a>
                      ) : (
                        item.contact
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-sky-700 break-all">
                      {item.isTravelIQ ? (
                        <a href="mailto:support@traveliq.in" className="inline-flex items-center gap-1 font-bold hover:underline">
                          <Mail className="h-3.5 w-3.5" /> support@traveliq.in
                        </a>
                      ) : (
                        item.email
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 3: B2C, G2G & TIES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* B2C Companies List */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#10407A]">
                  <Train className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F2D5E]">3. B2C Principal Service Providers</h3>
                  <p className="text-xs text-slate-500">Business to Customer (B2C) Scheme Entities</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                {b2cProviders.map((company, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-600">
                      {idx + 1}
                    </span>
                    <span className="truncate">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* G2G & TIES */}
          <div className="space-y-6">
            {/* G2G Scheme */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F2D5E]">4. G2G Scheme (Government to Government)</h3>
                  <p className="text-xs text-slate-500">Government Bodies & Defense Forces</p>
                </div>
              </div>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                {g2gList.map((g2g, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{g2g}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TIES Scheme */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F2D5E]">5. TIES Scheme (Train Information Enquiry Service)</h3>
                  <p className="text-xs text-slate-500">Authorized Enquiry & Integration Partners</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-xs font-medium text-slate-700">
                {tiesList.map((ties, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0" />
                    <span>{ties}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 4: GSAs OVERSEAS & E-GOVERNANCE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GSAs Abroad */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F2D5E]">6. GSAs Abroad - Internet Cafe Scheme</h3>
                <p className="text-xs text-slate-500">General Sales Agents Overseas (Nepal, Thailand, Bangladesh, Kuwait)</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-xs font-medium text-slate-700">
              {gsaAbroad.map((gsa, idx) => (
                <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700">
                    {idx + 1}
                  </span>
                  <span>{gsa}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* E-Governance & CTA */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F2D5E]">7. E-Governance Scheme Working PSPs</h3>
                  <p className="text-xs text-slate-500">Government Portal Services</p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {eGovernanceProviders.map((egov) => (
                  <div key={egov.sNo} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <p className="font-bold text-[#0F2D5E]">{egov.name}</p>
                    <p className="mt-1 text-slate-600">Admin Email: {egov.email}</p>
                    <p className="mt-0.5 text-slate-600">Contact: {egov.contact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TravelIQ CTA Card */}
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#0F2D5E] to-[#10407A] p-6 text-white text-center shadow-lg">
              <h4 className="text-lg font-bold">Register as an Authorized IRCTC Agent</h4>
              <p className="mt-2 text-xs text-white/80">
                Partner with TravelIQ — official IRCTC Principal Service Provider for instant agent ID creation, high commission, and 24/7 support.
              </p>
              <Link
                href="/irctc-agent-registration"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EE5326] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#D9471D] transition"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
