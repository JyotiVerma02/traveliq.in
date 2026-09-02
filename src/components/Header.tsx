import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-travel-iq/" },
  { name: "Services", href: "/our-services/" },
  { name: "Video Gallery", href: "/video-gallery/" },
  { name: "Contact", href: "/contact-us/" },
  { name: "Pay Us", href: "/pay-now/" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          aria-label="TravelIQ Home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo.png"
            alt="TravelIQ"
            width={180}
            height={55}
            priority
            className="h-auto w-[155px] sm:w-[175px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1.5 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="whitespace-nowrap rounded-full px-4.5 py-2.5 text-[15px] font-semibold text-slate-700 transition-all hover:bg-sky-50 hover:text-[#1685e8]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3.5 lg:flex">

          {/* Agent Login */}
          <a
            href="https://b2b.traveliq.in"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-4xl border border-slate-200 bg-white px-6 py-3 text-[14px] font-semibold text-slate-800 transition-all hover:border-[#1685e8] hover:bg-sky-50 hover:text-[#1685e8]"
          >
            Agent Login
          </a>

          {/* Book Trip */}
          <Link
            href="/irctc-agent-registration/"
            className="whitespace-nowrap rounded-4xl bg-[#1685e8] px-7 py-3 text-[14px] font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-[#0d76d4] hover:shadow-blue-500/35"
          >
            Book Trip
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917835025025"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with TravelIQ on WhatsApp"
            title="Chat with TravelIQ on WhatsApp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-[22px] w-[22px] fill-current"
              aria-hidden="true"
            >
              <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.75.46 3.46 1.33 4.97L2 22l5.28-1.39a9.86 9.86 0 0 0 4.76 1.22h.01c5.45 0 9.89-4.44 9.89-9.9C21.94 6.44 17.5 2 12.04 2zm5.79 14.2c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.14.1-1.84-.12-.42-.13-.96-.31-1.65-.61-2.91-1.25-4.8-4.17-4.95-4.36-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.49.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.1.2-.15.32-.29.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.02 1.12.99 2.07 1.3 2.37 1.45.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.65-.15.27.1 1.69.8 1.98.95.29.15.49.22.56.34.07.12.07.71-.17 1.39z" />
            </svg>
          </a>
        </div>

        {/* Mobile Navigation */}
        <details className="relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700">
            <span className="text-2xl leading-none">☰</span>
          </summary>

          <div className="absolute right-0 top-14 z-50 w-[290px] rounded-2xl border border-sky-100 bg-white p-5 shadow-xl">

            {/* Mobile Links */}
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="whitespace-nowrap rounded-lg px-4 py-3.5 text-[15px] font-semibold text-slate-700 transition-colors hover:bg-sky-50 hover:text-[#1685e8]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Buttons */}
            <div className="mt-4 space-y-2.5 border-t border-slate-100 pt-4">

              {/* Agent Login */}
              <a
                href="https://b2b.traveliq.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block whitespace-nowrap rounded-full border border-slate-300 px-4 py-3 text-center text-[14px] font-semibold text-slate-800 transition-colors hover:border-[#1685e8] hover:bg-sky-50"
              >
                Agent Login
              </a>

              {/* Book Trip */}
              <Link
                href="/irctc-agent-registration/"
                className="block whitespace-nowrap rounded-full bg-[#1685e8] px-4 py-3 text-center text-[14px] font-bold uppercase tracking-wider text-white"
              >
                Book Trip
              </Link>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917835025025"
                target="_blank"
                rel="noopener noreferrer"
                className="block whitespace-nowrap rounded-full bg-[#25D366] px-4 py-3 text-center text-[14px] font-semibold text-white"
              >
                WhatsApp Us
              </a>

            </div>
          </div>
        </details>

      </div>
    </header>
  );
}