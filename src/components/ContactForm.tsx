"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="rounded-xl border border-sky-100 bg-white p-6 sm:p-8 shadow-xs">
      <h3 className="text-2xl font-bold text-slate-900">Send Us A Message</h3>
      <p className="mt-1 text-sm text-slate-500">
        Have a question about IRCTC agent registration, flight bookings, or services? Fill out the form below.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-lg bg-emerald-50 p-6 text-center border border-emerald-200">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="mt-4 text-lg font-bold text-emerald-900">Thank You!</h4>
          <p className="mt-1 text-sm text-emerald-700">
            Your message has been received. Our TravelIQ support team will get back to you shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            }}
            className="mt-6 rounded-full bg-emerald-600 px-6 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1685e8] focus:bg-white focus:ring-2 focus:ring-[#1685e8]/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1685e8] focus:bg-white focus:ring-2 focus:ring-[#1685e8]/20"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 9876543210"
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1685e8] focus:bg-white focus:ring-2 focus:ring-[#1685e8]/20"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="IRCTC Agent ID, Air Booking, etc."
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1685e8] focus:bg-white focus:ring-2 focus:ring-[#1685e8]/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we help you?"
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1685e8] focus:bg-white focus:ring-2 focus:ring-[#1685e8]/20"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#1685e8] py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#0d76d4]"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
