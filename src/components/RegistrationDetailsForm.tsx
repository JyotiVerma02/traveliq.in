"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { WhatsAppIcon } from "@/components/icons";

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

  const inputClass = "mt-2 block w-full rounded-xl border border-white/90 bg-[#F3F7FC] px-4 py-3.5 text-sm text-slate-900 shadow-[inset_3px_3px_7px_rgba(16,64,122,0.07),inset_-3px_-3px_7px_rgba(255,255,255,0.95)] outline-none transition-[box-shadow,border-color,background-color] duration-200 placeholder:text-slate-400 hover:bg-white focus:border-[#10407A]/30 focus:bg-white focus:shadow-[inset_2px_2px_5px_rgba(16,64,122,0.04),0_0_0_4px_rgba(16,64,122,0.09)]";
  function field(name: string, label: string, options: { type?: string; required?: boolean; placeholder?: string; pattern?: string; maxLength?: number; autoComplete?: string } = {}) {
    return <div key={name}>
      <label htmlFor={`${id}-${name}`} className="text-sm font-semibold text-slate-700">{label}{options.required && <span aria-hidden="true" className="text-red-600"> *</span>}</label>
      <input id={`${id}-${name}`} name={name} type={options.type ?? "text"} {...options} maxLength={options.maxLength ?? 160} className={inputClass} />
    </div>;
  }
  const phone = { type: "tel", required: true, pattern: "[0-9]{10}", maxLength: 10, placeholder: "Enter 10 digit mobile number" };
  const sectionClass = "rounded-[24px] border border-white/90 bg-[#F7FAFE] p-5 shadow-[7px_8px_18px_rgba(16,64,122,0.08),-6px_-6px_16px_rgba(255,255,255,0.95)] transition-shadow duration-300 hover:shadow-[9px_11px_22px_rgba(16,64,122,0.10),-5px_-5px_14px_rgba(255,255,255,0.9)] motion-reduce:transition-none sm:p-7";
  const legendClass = "rounded-lg px-3 py-1 text-base font-bold text-[#10407A] sm:text-lg";

  return <form ref={formRef} onSubmit={submit} className="space-y-6 rounded-[30px] border border-white bg-white/75 p-4 shadow-[14px_16px_38px_rgba(16,64,122,0.12),-10px_-10px_30px_rgba(255,255,255,0.95)] backdrop-blur-sm sm:p-8 lg:p-10 text-left">
    <div className="mb-1 flex flex-col gap-3 border-b border-[#10407A]/[0.08] pb-5 sm:flex-row sm:items-center sm:justify-between">
      <Link href="/signup/registration_form/irctc-agent-registration/" className="inline-flex w-fit items-center rounded-full border border-[#10407A]/10 bg-[#F5F8FC] px-4 py-2.5 text-sm font-semibold text-[#10407A] shadow-[4px_4px_10px_rgba(16,64,122,0.07),-3px_-3px_8px_rgba(255,255,255,0.95)] transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10407A]">Back to Plans &amp; Registration</Link>
      <span className="text-xs font-medium text-slate-500">Fields marked <span className="text-red-600">*</span> are required</span>
    </div>
    <p className="rounded-2xl border border-[#10407A]/[0.07] bg-[#F5F8FC]/80 px-4 py-3.5 text-sm leading-6 text-slate-600">This form is currently a preview. To proceed with registration, <Link href="/contact-us/" className="font-semibold text-[#10407A] underline decoration-[#10407A]/30 underline-offset-4 hover:text-[#EE5326]">contact TravelIQ support</Link> or use WhatsApp below.</p>
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
    {message && <p role="alert" className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 shadow-[inset_3px_3px_8px_rgba(146,64,14,0.06),inset_-3px_-3px_8px_rgba(255,255,255,0.9)]">{message}</p>}
    <div className="flex flex-col justify-center gap-3 border-t border-[#10407A]/[0.08] pt-6 sm:flex-row sm:gap-4">
      <button type="submit" className="group inline-flex min-h-12 items-center justify-center rounded-full bg-[#EE5326] px-8 py-3 text-sm font-bold !text-white shadow-[0_9px_20px_rgba(238,83,38,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9471D] hover:shadow-[0_13px_25px_rgba(238,83,38,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE5326] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none">Preview Registration Details</button>
      <a href="https://wa.me/917835025025?text=I%20need%20IRCTC%20agent%20ID" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366] px-6 py-3 text-sm font-bold !text-white shadow-[0_9px_20px_rgba(37,211,102,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#20BD5A] hover:bg-[#20BD5A] hover:shadow-[0_13px_25px_rgba(37,211,102,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"><WhatsAppIcon className="h-5 w-5 !text-white" />WhatsApp us</a>
    </div>
  </form>;
}
