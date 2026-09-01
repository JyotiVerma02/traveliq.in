"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Find Services", href: "/our-services/", hasDropdown: true },
  { name: "IRCTC Agent ID", href: "/irctc-agent-registration/" },
  { name: "Why TravelIQ", href: "/about-travel-iq/" },
  { name: "Video Gallery", href: "/video-gallery/" },
  { name: "Contact Us", href: "/contact-us/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#dcfce7]/85 border-b border-emerald-200/50 transition-all">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        
        {/* Brand Logo */}
        <Link href="/" aria-label="TravelIQ Home" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center rounded-xl bg-white/90 p-2 shadow-xs border border-emerald-200/60 transition group-hover:bg-white">
            <Image
              src="/logo.png"
              alt="TravelIQ Logo"
              width={160}
              height={42}
              priority
              className="h-9 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Center Navigation Links - Reference Pill style */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-xs lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              {item.name}
              {item.hasDropdown && (
                <svg
                  className="h-3 w-3 text-slate-400 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        {/* Right CTA Action Buttons - Dark & Green Pill Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="https://b2b.traveliq.in"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-slate-50 hover:border-slate-300"
          >
            Agent Login
          </a>

          <Link
            href="/irctc-agent-registration/"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-600 hover:shadow-emerald-500/25"
          >
            Get Agent ID
          </Link>
          
          <a
            href="https://wa.me/917835025025"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30 transition hover:scale-105 hover:bg-emerald-600"
            aria-label="Chat on WhatsApp"
            title="Chat with Specialist"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/irctc-agent-registration/"
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-xs"
          >
            Join Us
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-emerald-100 bg-white px-4 pt-2 pb-6 lg:hidden shadow-lg">
          <div className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://b2b.traveliq.in"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block w-full rounded-full border border-slate-300 py-2.5 text-center text-xs font-bold text-slate-800"
            >
              Agent Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}