import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1C487B] via-[#071f3d] to-[#E45025] text-white/90 pt-16 pb-12 border-t border-white/10 font-sans overflow-hidden">
      {/* Decorative gradient overlay for extra richness */}
      <div className="absolute inset-0 bg-[#071f3d]/40 mix-blend-multiply pointer-events-none" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-14 border-b border-white/20">

          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-md p-2 inline-block bg-white shadow-lg shadow-black/20">
                <Image
                  src="/logo.png"
                  alt="TravelIQ Logo"
                  width={150}
                  height={38}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-white/80 max-w-sm drop-shadow-sm">
              Your trusted travel partner for railway reservation, air tickets, hotel booking, bus tickets, tour packages and IRCTC agent services.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white border border-white/30 shadow-sm">
                IATA Accredited
              </span>
              <span className="inline-flex items-center rounded-full bg-[#10407A]/80 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white border border-[#10407A] shadow-sm">
                IRCTC Principal Agent
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white drop-shadow-sm">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition drop-shadow-sm">Home</Link>
              </li>
              <li>
                <Link href="/about-travel-iq/" className="hover:text-white hover:underline transition drop-shadow-sm">About Us</Link>
              </li>
              <li>
                <Link href="/our-services/" className="hover:text-white hover:underline transition drop-shadow-sm">Our Services</Link>
              </li>
              <li>
                <Link href="/video-gallery/" className="hover:text-white hover:underline transition drop-shadow-sm">Video Gallery</Link>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:text-white hover:underline transition drop-shadow-sm">Contact Us</Link>
              </li>
              <li>
                <Link href="/pay-now/" className="hover:text-white hover:underline transition drop-shadow-sm">Pay us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white drop-shadow-sm">
              Our Services
            </h3>

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-white/80">
              <li><Link href="/pages/services/online-air-ticket-booking" className="hover:text-white hover:underline transition drop-shadow-sm">Air Ticket Booking</Link></li>
              <li><Link href="/pages/services/railway-reservations" className="hover:text-white hover:underline transition drop-shadow-sm">Railway Reservation</Link></li>
              <li><Link href="/pages/services/online-hotel-booking" className="hover:text-white hover:underline transition drop-shadow-sm">Hotel Booking</Link></li>
              <li><Link href="/pages/services/bus-ticket-booking" className="hover:text-white hover:underline transition drop-shadow-sm">Bus Ticket Booking</Link></li>
              <li><Link href="/pages/services/irctc-domestic-packages" className="hover:text-white hover:underline transition drop-shadow-sm">IRCTC Domestic Packages</Link></li>
              <li><Link href="/pages/services/irctc-tour-packages" className="hover:text-white hover:underline transition drop-shadow-sm">Tour Packages</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white drop-shadow-sm">
              Contact Us
            </h3>

            <div className="mt-4 space-y-3 text-xs sm:text-sm text-white/80">
              <p className="font-semibold text-white drop-shadow-sm">Travel IQ - Your Own Travel Intelligence</p>
              <p className="drop-shadow-sm">Unit no 820, 8th Floor, JMD Megapolis, Sohna Road, Sector 48, Gurugram, HARYANA 122018, INDIA</p>
              <p className="drop-shadow-sm">Email: <a href="mailto:support@traveliq.in" className="text-white font-medium hover:underline">support@traveliq.in</a></p>
              <p className="drop-shadow-sm">Phone: <a href="tel:+917835025000" className="text-white font-medium hover:underline">+91 7835025000</a> / <a href="tel:+917835025025" className="text-white font-medium hover:underline">+91 7835025025</a></p>
              <p className="drop-shadow-sm">B2B Portal: <a href="https://b2b.traveliq.in" target="_blank" rel="noreferrer" className="text-white font-medium hover:underline">b2b.traveliq.in</a></p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p className="drop-shadow-sm">© {new Date().getFullYear()} Travel IQ. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-white transition cursor-pointer drop-shadow-sm">Privacy Policy</Link>
            <Link href="/terms-and-conditions/" className="hover:text-white transition cursor-pointer drop-shadow-sm">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}