import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 font-sans">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-14 border-b border-slate-900">

          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-xl p-2 inline-block">
                <Image
                  src="/logo.png"
                  alt="TravelIQ Logo"
                  width={150}
                  height={38}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm">
              Your trusted travel partner for railway reservation, air tickets, hotel booking, bus tickets, tour packages and IRCTC agent services.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-emerald-950 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-800/60">
                IATA Accredited
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-slate-300 border border-slate-800">
                IRCTC Principal Agent
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about-travel-iq/" className="hover:text-emerald-400 transition">About Us</Link>
              </li>
              <li>
                <Link href="/our-services/" className="hover:text-emerald-400 transition">Our Services</Link>
              </li>
              <li>
                <Link href="/video-gallery/" className="hover:text-emerald-400 transition">Video Gallery</Link>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:text-emerald-400 transition">Contact Us</Link>
              </li>
              <li>
                <Link href="/pay-now/" className="hover:text-emerald-400 transition">Pay us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Services
            </h3>

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><Link href="/pages/services/online-air-ticket-booking" className="hover:text-emerald-400 transition">Air Ticket Booking</Link></li>
              <li><Link href="/pages/services/railway-reservations" className="hover:text-emerald-400 transition">Railway Reservation</Link></li>
              <li><Link href="/pages/services/online-hotel-booking" className="hover:text-emerald-400 transition">Hotel Booking</Link></li>
              <li><Link href="/pages/services/bus-ticket-booking" className="hover:text-emerald-400 transition">Bus Ticket Booking</Link></li>
              <li><Link href="/pages/services/irctc-domestic-packages" className="hover:text-emerald-400 transition">IRCTC Domestic Packages</Link></li>
              <li><Link href="/pages/services/irctc-tour-packages" className="hover:text-emerald-400 transition">Tour Packages</Link></li>
            </ul>
          </div>

          {/* Contact Details from traveliq.in */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-400">
              <p className="font-semibold text-white">Travel IQ - Your Own Travel Intelligence</p>
              <p>Unit no 820, 8th Floor, JMD Megapolis, Sohna Road, Sector 48, Gurugram, HARYANA 122018, INDIA</p>
              <p>Email: <a href="mailto:support@traveliq.in" className="text-emerald-400 hover:underline">support@traveliq.in</a></p>
              <p>Phone: <a href="tel:+917835025000" className="text-emerald-400 hover:underline">+91 7835025000</a> / <a href="tel:+917835025025" className="text-emerald-400 hover:underline">+91 7835025025</a></p>
              <p>B2B Portal: <a href="https://b2b.traveliq.in" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">b2b.traveliq.in</a></p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Travel IQ. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-slate-400 cursor-pointer">Privacy Policy</Link>
            <Link href="/terms-and-conditions/" className="hover:text-slate-400 cursor-pointer">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}