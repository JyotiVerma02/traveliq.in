"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";

export default function RegistrationDetailsForm() {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const draft = JSON.parse(sessionStorage.getItem("traveliq-registration-contact") || "{}");
      for (const key of ["mobile", "email", "plan", "referenceId", "initialReferenceId"]) {
        const input = formRef.current?.elements.namedItem(key);
        if (input instanceof HTMLInputElement && typeof draft[key] === "string") input.value = draft[key];
      }
    } catch { /* The form also works when browser storage is unavailable. */ }
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Preview only. Your details have not been sent or saved.");
  }

  const inputClass = "mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none focus:border-[#10407A] focus:ring-2 focus:ring-blue-100";
  function field(name: string, label: string, options: { type?: string; required?: boolean; placeholder?: string; pattern?: string; maxLength?: number; autoComplete?: string } = {}) {
    return <div key={name}>
      <label htmlFor={`${id}-${name}`} className="text-sm font-semibold text-slate-700">{label}{options.required && <span aria-hidden="true" className="text-red-600"> *</span>}</label>
      <input id={`${id}-${name}`} name={name} type={options.type ?? "text"} {...options} maxLength={options.maxLength ?? 160} className={inputClass} />
    </div>;
  }
  const phone = { type: "tel", required: true, pattern: "[0-9]{10}", maxLength: 10, placeholder: "Enter 10 digit mobile number" };
  const sectionClass = "rounded-xl border border-slate-200 bg-white p-5 sm:p-7";
  const legendClass = "px-2 text-lg font-semibold text-[#10407A]";

  return <form ref={formRef} onSubmit={submit} className="space-y-6 text-left">
    <Link href="/signup/registration_form/irctc-agent-registration/" className="inline-block font-semibold text-[#10407A] underline">Back to Plans &amp; Registration</Link>
    <p className="text-sm text-slate-600">This form is currently a preview. To proceed with registration, <Link href="/contact-us/" className="underline">contact TravelIQ support</Link> or use WhatsApp below.</p>
    <input type="hidden" name="plan" />
    <input type="hidden" name="referenceId" />
    <input type="hidden" name="initialReferenceId" />
    <fieldset className={sectionClass}>
      <legend className={legendClass}>Basic Details</legend>
      <div className="grid gap-5 sm:grid-cols-2">
        {field("mobile", "WhatsApp Number", { ...phone, autoComplete: "tel-national" })}
        {field("email", "Email ID", { type: "email", required: true, autoComplete: "email", placeholder: "Enter your email ID" })}
      </div>
    </fieldset>
    <fieldset className={sectionClass}>
      <legend className={legendClass}>Document &amp; Unique Details</legend>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {field("pan", "Pan Number", { required: true, pattern: "[A-Za-z]{5}[0-9]{4}[A-Za-z]", maxLength: 10, placeholder: "Enter your PAN card number" })}
        {field("uniqueMobile", "Unique Mobile Number", phone)}
        {field("uniqueEmail", "Unique Email ID", { type: "email", required: true, placeholder: "Enter your unique email ID" })}
      </div>
    </fieldset>
    <fieldset className={sectionClass}>
      <legend className={legendClass}>Name, Company &amp; DOB Details</legend>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {field("firstName", "First Name", { required: true, autoComplete: "given-name" })}
        {field("middleName", "Middle Name", { autoComplete: "additional-name" })}
        {field("lastName", "Last Name", { autoComplete: "family-name" })}
        {field("agencyName", "Travel Agency Name", { autoComplete: "organization", placeholder: "Agency name or your own name" })}
        {field("dob", "Date of Birth", { type: "date", autoComplete: "bday" })}
      </div>
    </fieldset>
    <fieldset className={sectionClass}>
      <legend className={legendClass}>Address</legend>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-pin`} className="text-sm font-semibold text-slate-700">PIN code <span aria-hidden="true" className="text-red-600">*</span></label>
          <input id={`${id}-pin`} name="pin" type="text" inputMode="numeric" autoComplete="postal-code" pattern="[1-9][0-9]{5}" maxLength={6} required placeholder="Enter PIN Code" className={inputClass} />
        </div>
        {field("city", "City", { required: true, autoComplete: "address-level2" })}
        {field("state", "State", { required: true, autoComplete: "address-level1" })}
        <div>
          <label htmlFor={`${id}-postOffice`} className="text-sm font-semibold text-slate-700">Post Office <span aria-hidden="true" className="text-red-600">*</span></label>
          <input id={`${id}-postOffice`} name="postOffice" required maxLength={160} placeholder="Enter post office" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-address`} className="text-sm font-semibold text-slate-700">Address <span aria-hidden="true" className="text-red-600">*</span></label>
          <textarea id={`${id}-address`} name="address" required maxLength={1000} rows={3} autoComplete="street-address" placeholder="Enter address as per address proof" className={inputClass} />
        </div>
      </div>
    </fieldset>
    {message && <p role="alert" className="rounded-lg bg-amber-50 p-4 text-sm text-amber-900">{message}</p>}
    <div className="flex flex-wrap items-center justify-center gap-4">
      <button type="submit" className="rounded-full bg-[#EE5326] px-8 py-3 font-semibold !text-white hover:bg-[#ce421b]">Preview Registration Details</button>
      <a href="https://wa.me/917835025025?text=I%20need%20IRCTC%20agent%20ID" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#10407A] underline">WhatsApp us</a>
    </div>
  </form>;
}
