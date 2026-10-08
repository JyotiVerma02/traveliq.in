"use client";

import { useState, FormEvent } from "react";
import { WHATSAPP_URL } from "@/lib/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (pending) return;
    setError("");
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please complete your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (formData.phone.replace(/\D/g, "").slice(-10).length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setPending(true);
    try {
      const response = await fetch("/api/contact-leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          whatsappNumber: formData.phone.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          action: formData.subject.trim() || "Contact form enquiry",
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true || result.updatedRows !== 1) {
        throw new Error("Unable to submit your enquiry right now. Please try again.");
      }

    const details = [
      ["Name", formData.name.trim()],
      ["Email", formData.email.trim()],
      ["Phone", formData.phone.trim()],
      ["Subject", formData.subject.trim()],
      ["Message", formData.message.trim()],
    ] as const;
    const message = [
      "TravelIQ website enquiry",
      ...details.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`),
    ].join("\n");
    setWhatsappLink(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setError("Unable to submit your enquiry right now. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="rounded-xl border border-[#10407A]/12 bg-white p-6 sm:p-8 shadow-xs">
      <h3 className="text-2xl font-bold text-[#08090b]">Send Us A Message</h3>
      <p className="mt-1 text-sm text-[#0E3360]">
        Have a question about IRCTC agent registration, flight bookings, or services? Fill out the form below.
      </p>

      {submitted ? (
        <div role="status" className="mt-8 rounded-lg bg-[#fff4ef] p-6 text-center border border-[#EE5326]/25">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EE5326]/15 text-[#EE5326]">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="mt-4 text-lg font-bold text-[#08090b]">Continue in WhatsApp</h4>
          <p className="mt-1 text-sm text-[#10407A]">
            Your message is ready. Open WhatsApp and tap Send to contact TravelIQ.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#117A3B] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0B7138]"
          >
            Open WhatsApp
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setError("");
              setWhatsappLink("");
            }}
            className="mt-6 rounded-full bg-[#EE5326] px-6 py-2 text-xs font-bold text-white transition hover:bg-[#d7491d]"
          >
            Back to Form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {error && (
            <div
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
            >
              {error}
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#10407A]">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="mt-1.5 w-full rounded-lg border border-[#10407A]/15 bg-[#fff8f5] px-4 py-3 text-base text-[#08090b] outline-none transition focus:border-[#EE5326] focus:bg-white focus:ring-2 focus:ring-[#EE5326]/15"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#10407A]">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                placeholder="name@example.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-[#10407A]/15 bg-[#fff8f5] px-4 py-3 text-base text-[#08090b] outline-none transition focus:border-[#EE5326] focus:bg-white focus:ring-2 focus:ring-[#EE5326]/15"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#10407A]">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                pattern="[+]?[0-9 ()-]{10,16}"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 9876543210"
                className="mt-1.5 w-full rounded-lg border border-[#10407A]/15 bg-[#fff8f5] px-4 py-3 text-base text-[#08090b] outline-none transition focus:border-[#EE5326] focus:bg-white focus:ring-2 focus:ring-[#EE5326]/15"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#10407A]">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="IRCTC Agent ID, Air Booking, etc."
                className="mt-1.5 w-full rounded-lg border border-[#10407A]/15 bg-[#fff8f5] px-4 py-3 text-base text-[#08090b] outline-none transition focus:border-[#EE5326] focus:bg-white focus:ring-2 focus:ring-[#EE5326]/15"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#10407A]">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we help you?"
              className="mt-1.5 w-full rounded-lg border border-[#10407A]/15 bg-[#fff8f5] px-4 py-3 text-base text-[#08090b] outline-none transition focus:border-[#EE5326] focus:bg-white focus:ring-2 focus:ring-[#EE5326]/15"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-[#EE5326] py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#d7491d] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {pending ? "Submitting..." : "Continue with WhatsApp"}
          </button>
        </form>
      )}
    </div>
  );
}
