"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/site";

export default function RegistrationDetailsForm() {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);

  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [pending, setPending] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const verificationIds = useRef<Record<string, number>>({});
  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isValidMobile = (value: string) => /^\d{10}$/.test(value.replace(/\D/g, "").slice(-10));

  useEffect(() => {
    try {
      const draft = JSON.parse(
        sessionStorage.getItem("traveliq-registration-contact") || "{}",
      );

      for (const key of [
        "mobile",
        "email",
        "plan",
        "referenceId",
        "initialReferenceId",
      ]) {
        const input = formRef.current?.elements.namedItem(key);

        if (
          input instanceof HTMLInputElement &&
          typeof draft[key] === "string"
        ) {
          input.value = draft[key];
        }
      }
    } catch {
      // Form still works if sessionStorage is unavailable
    }
  }, []);

  function validationMessage(
    name: string,
    label: string,
    value: string,
    isValid: boolean,
    required: boolean,
  ) {
    if (!value.trim() && required) {
      if (name === "mobile") return "Mobile number is required.";
      if (name === "email") return "Email is required.";
      if (name === "firstName") return "Name is required.";
      return `${label} is required.`;
    }
    if (!value.trim()) return "";

    if (name === "email" || name === "uniqueEmail") {
      return isValidEmail(value) ? "" : "Enter a valid email.";
    }
    if (name === "mobile" || name === "uniqueMobile") {
      return isValidMobile(value) ? "" : "Enter a valid 10-digit mobile number.";
    }
    if (!isValid) {
      if (name === "pin") return "Enter a valid 6-digit PIN code.";
      if (name === "pan") return "Enter a valid PAN number.";
      return `Enter a valid ${label.toLowerCase()}.`;
    }
    return "";
  }

  function validateForm(form: HTMLFormElement) {
    const errors: Record<string, string> = {};
    const controls = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      "input[required], textarea[required], select[required]",
    );

    controls.forEach((control) => {
      const label = control.labels?.[0]?.textContent?.replace("*", "").trim() || control.name;
      const error = validationMessage(
        control.name,
        label,
        control.value,
        control.validity.valid,
        control.required,
      );
      if (error) errors[control.name] = error;
    });

    return errors;
  }

  function handleFieldChange(name: string, value: string, control: HTMLInputElement | HTMLTextAreaElement) {
    setFormError("");
    const verificationId = (verificationIds.current[name] ?? 0) + 1;
    verificationIds.current[name] = verificationId;

    const currentError = fieldErrors[name];
    const label = control.labels?.[0]?.textContent?.replace("*", "").trim() || name;
    const updatedError = currentError
      ? validationMessage(name, label, value, control.validity.valid, control.required)
      : "";
    setFieldErrors((current) => ({ ...current, [name]: updatedError }));

    const isEmail = name === "email" || name === "uniqueEmail";
    const isMobile = name === "mobile" || name === "uniqueMobile";
    const validEmail = isEmail && isValidEmail(value);
    const validMobile = isMobile && isValidMobile(value);
    if (validEmail || validMobile) {
      void recheckRegistrationField(name, value, verificationId);
    } else if (isEmail || isMobile) {
      setFieldErrors((current) => {
        const next = { ...current };
        if (next[name]?.startsWith("This ") || next[name]?.startsWith("Unable to verify ")) delete next[name];
        return next;
      });
    }
  }

async function submit(
  event: FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  if (pending) return;

  const form = event.currentTarget;
  const validationErrors = validateForm(form);
  setFieldErrors(validationErrors);
  setMessage("");
  setFormError("");

  if (Object.keys(validationErrors).length) return;

  setPending(true);

  const fields = new FormData(form);

  const mobile = String(
    fields.get("mobile") || ""
  ).trim();

  const email = String(
    fields.get("email") || ""
  ).trim();

  const pan = String(
    fields.get("pan") || ""
  ).trim();

  const uniqueMobile = String(
    fields.get("uniqueMobile") || ""
  ).trim();

  const uniqueEmail = String(
    fields.get("uniqueEmail") || ""
  ).trim();

  const firstName = String(
    fields.get("firstName") || ""
  ).trim();

  const middleName = String(
    fields.get("middleName") || ""
  ).trim();

  const lastName = String(
    fields.get("lastName") || ""
  ).trim();

  const agencyName = String(
    fields.get("agencyName") || ""
  ).trim();

  const dob = String(
    fields.get("dob") || ""
  ).trim();

  const pin = String(
    fields.get("pin") || ""
  ).trim();

  const city = String(
    fields.get("city") || ""
  ).trim();

  const state = String(
    fields.get("state") || ""
  ).trim();

  const postOffice = String(
    fields.get("postOffice") || ""
  ).trim();

  const address = String(
    fields.get("address") || ""
  ).trim();

  const referenceId = String(
    fields.get("referenceId") || ""
  ).trim();

  const initialReferenceId = String(
    fields.get("initialReferenceId") || ""
  ).trim();

  const plan = String(
    fields.get("plan") || ""
  ).trim();

  const transactionId = "";

  try {
    const response = await fetch(
      "/api/registration-leads/",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          whatsappNumber: `+91${mobile}`,
          email,

          panNumber: pan,

          uniqueMobileNumber:
            `+91${uniqueMobile}`,

          uniqueEmail,

          firstName,
          middleName,
          lastName,

          travelAgencyName:
            agencyName,

          dateOfBirth: dob,

          pinCode: pin,
          city,
          state,
          postOffice,
          address,

          referenceId,
          initialReferenceId,
          transactionId,
          plan,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 503) {
        setFieldErrors((current) => ({
          ...current,
          email: isValidEmail(email) ? "Unable to verify email right now." : current.email,
          uniqueEmail: isValidEmail(uniqueEmail) ? "Unable to verify email right now." : current.uniqueEmail,
          mobile: isValidMobile(mobile) ? "Unable to verify mobile number right now." : current.mobile,
          uniqueMobile: isValidMobile(uniqueMobile) ? "Unable to verify mobile number right now." : current.uniqueMobile,
        }));
        return;
      }
      if (response.status === 409) {
        const conflicts = data?.fieldErrors ?? {
          [data?.field === "email" ? "email" : "mobile"]: true,
        };
        setFieldErrors((current) => ({
          ...current,
          ...(conflicts.email ? {
            ...(isValidEmail(email) ? { email: "This email is already in use." } : {}),
            ...(isValidEmail(uniqueEmail) ? { uniqueEmail: "This email is already in use." } : {}),
          } : {}),
          ...(conflicts.mobile ? {
            ...(isValidMobile(mobile) ? { mobile: "This mobile number is already in use." } : {}),
            ...(isValidMobile(uniqueMobile) ? { uniqueMobile: "This mobile number is already in use." } : {}),
          } : {}),
        }));
        return;
      }

      throw new Error(
        data?.message ||
          "Unable to save registration details."
      );
    }

    setMessage(
      "Your registration details have been submitted successfully."
    );

    formRef.current?.reset();

    sessionStorage.removeItem(
      "traveliq-registration-contact"
    );
  } catch (error) {
    console.error("Registration submission error:", error);

    setFormError("Unable to submit your registration details right now. Please try again.");
  } finally {
    setPending(false);
  }

}

  async function recheckRegistrationField(name: string, value: string, verificationId: number) {
    const fieldName = name.toLowerCase().includes("email") ? "email" : "mobile";
    const input = formRef.current?.elements.namedItem(name);
    if (!(input instanceof HTMLInputElement) || validationMessage(name, name, value, input.validity.valid, input.required)) return;
    try {
      const response = await fetch("/api/registration-uniqueness/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fieldName === "email" ? { email: value } : { mobile: value }),
      });
      const data = await response.json();
      if (verificationIds.current[name] !== verificationId) return;

      let error = "";
      if (response.status === 503 || !response.ok && response.status !== 409) {
        error = fieldName === "email"
          ? "Unable to verify email right now."
          : "Unable to verify mobile number right now.";
      } else if (data?.errors?.[fieldName]) {
        error = fieldName === "email"
          ? "This email is already in use."
          : "This mobile number is already in use.";
      }

      // A stale request or newly invalid value must never restore a uniqueness error.
      if (verificationIds.current[name] !== verificationId || validationMessageForCurrentField(name)) return;

      setFieldErrors((current) => {
        const next = { ...current };
        if (error && !validationMessageForCurrentField(name)) next[name] = error;
        else delete next[name];
        return next;
      });
    } catch {
      if (verificationIds.current[name] !== verificationId || validationMessageForCurrentField(name)) return;
      setFieldErrors((current) => ({
        ...current,
        [name]: fieldName === "email"
          ? "Unable to verify email right now."
          : "Unable to verify mobile number right now.",
      }));
    }
  }

  function validationMessageForCurrentField(name: string) {
    const control = formRef.current?.elements.namedItem(name);
    if (!(control instanceof HTMLInputElement)) return false;
    const label = control.labels?.[0]?.textContent?.replace("*", "").trim() || name;
    return Boolean(validationMessage(name, label, control.value, control.validity.valid, control.required));
  }

  const inputClass =
    "mt-2 block w-full rounded-xl border border-white/90 bg-[#F3F7FC] px-4 py-3.5 text-sm text-slate-900 shadow-[inset_3px_3px_7px_rgba(16,64,122,0.07),inset_-3px_-3px_7px_rgba(255,255,255,0.95)] outline-none transition-[box-shadow,border-color,background-color] duration-200 placeholder:text-slate-400 hover:bg-white focus:border-[#10407A]/30 focus:bg-white focus:shadow-[inset_2px_2px_5px_rgba(16,64,122,0.04),0_0_0_4px_rgba(16,64,122,0.09)]";

  function field(
    name: string,
    label: string,
    options: {
      type?: string;
      required?: boolean;
      placeholder?: string;
      pattern?: string;
      maxLength?: number;
      autoComplete?: string;
    } = {},
  ) {
    return (
      <div key={name}>
        <label
          htmlFor={`${id}-${name}`}
          className="text-sm font-semibold text-slate-700"
        >
          {label}

          {options.required && (
            <span aria-hidden="true" className="text-red-600">
              {" "}
              *
            </span>
          )}
        </label>

        <input
          id={`${id}-${name}`}
          name={name}
          type={options.type ?? "text"}
          {...options}
          maxLength={options.maxLength ?? 160}
          aria-invalid={Boolean(fieldErrors[name])}
          aria-describedby={fieldErrors[name] ? `${id}-${name}-error` : undefined}
          onChange={(event) => handleFieldChange(name, event.currentTarget.value, event.currentTarget)}
          className={`${inputClass} ${fieldErrors[name] ? "border-red-500 focus:border-red-500" : ""}`}
        />
        {fieldErrors[name] && (
          <p id={`${id}-${name}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-600">
            {fieldErrors[name]}
          </p>
        )}
      </div>
    );
  }

  const phone = {
    type: "tel",
    required: true,
    pattern: "[0-9]{10}",
    maxLength: 10,
    placeholder: "Enter 10 digit mobile number",
  };

  const sectionClass =
    "rounded-[24px] border border-white/90 bg-[#F7FAFE] p-5 shadow-[7px_8px_18px_rgba(16,64,122,0.08),-6px_-6px_16px_rgba(255,255,255,0.95)] transition-shadow duration-300 hover:shadow-[9px_11px_22px_rgba(16,64,122,0.10),-5px_-5px_14px_rgba(255,255,255,0.9)] motion-reduce:transition-none sm:p-7";

  const legendClass =
    "rounded-lg px-3 py-1 text-base font-bold text-[#10407A] sm:text-lg";

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      noValidate
      aria-busy={pending}
      className="space-y-6 rounded-[30px] border border-white bg-white/75 p-4 text-left shadow-[14px_16px_38px_rgba(16,64,122,0.12),-10px_-10px_30px_rgba(255,255,255,0.95)] backdrop-blur-sm sm:p-8 lg:p-10"
    >
      <div className="mb-1 flex flex-col gap-3 border-b border-[#10407A]/[0.08] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/signup/registration_form/irctc-agent-registration/"
          className="inline-flex w-fit items-center rounded-full border border-[#10407A]/10 bg-[#F5F8FC] px-4 py-2.5 text-sm font-semibold text-[#10407A] shadow-[4px_4px_10px_rgba(16,64,122,0.07),-3px_-3px_8px_rgba(255,255,255,0.95)] transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10407A]"
        >
          Back to Plans &amp; Registration
        </Link>

        <span className="text-xs font-medium text-slate-500">
          Fields marked <span className="text-red-600">*</span> are required
        </span>
      </div>

      <input type="hidden" name="plan" />

      <input type="hidden" name="referenceId" />

      <input type="hidden" name="initialReferenceId" />

      <fieldset className={sectionClass}>
        <legend className={legendClass}>Basic Details</legend>

        <div className="grid gap-5 sm:grid-cols-2">
          {field("mobile", "WhatsApp Number", {
            ...phone,
            autoComplete: "tel-national",
          })}

          {field("email", "Email ID", {
            type: "email",
            required: true,
            autoComplete: "email",
            placeholder: "Enter your email ID",
          })}
        </div>
      </fieldset>

      <fieldset className={sectionClass}>
        <legend className={legendClass}>Document &amp; Unique Details</legend>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {field("pan", "Pan Number", {
            required: true,
            pattern: "[A-Za-z]{5}[0-9]{4}[A-Za-z]",
            maxLength: 10,
            placeholder: "Enter your PAN card number",
          })}

          {field("uniqueMobile", "Unique Mobile Number", phone)}

          {field("uniqueEmail", "Unique Email ID", {
            type: "email",
            required: true,
            placeholder: "Enter your unique email ID",
          })}
        </div>
      </fieldset>

      <fieldset className={sectionClass}>
        <legend className={legendClass}>Name, Company &amp; DOB Details</legend>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {field("firstName", "First Name", {
            required: true,
            autoComplete: "given-name",
          })}

          {field("middleName", "Middle Name", {
            autoComplete: "additional-name",
          })}

          {field("lastName", "Last Name", {
            autoComplete: "family-name",
          })}

          {field("agencyName", "Travel Agency Name", {
            autoComplete: "organization",
            placeholder: "Agency name or your own name",
          })}

          {field("dob", "Date of Birth", {
            type: "date",
            autoComplete: "bday",
          })}
        </div>
      </fieldset>

      <fieldset className={sectionClass}>
        <legend className={legendClass}>Address</legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor={`${id}-pin`}
              className="text-sm font-semibold text-slate-700"
            >
              PIN code{" "}
              <span aria-hidden="true" className="text-red-600">
                *
              </span>
            </label>

            <input
              id={`${id}-pin`}
              name="pin"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              pattern="[1-9][0-9]{5}"
              maxLength={6}
              required
              aria-invalid={Boolean(fieldErrors.pin)}
              aria-describedby={fieldErrors.pin ? `${id}-pin-error` : undefined}
              onChange={(event) => handleFieldChange("pin", event.currentTarget.value, event.currentTarget)}
              placeholder="Enter PIN Code"
              className={`${inputClass} ${fieldErrors.pin ? "border-red-500 focus:border-red-500" : ""}`}
            />
            {fieldErrors.pin && <p id={`${id}-pin-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-600">{fieldErrors.pin}</p>}
          </div>

          {field("city", "City", {
            required: true,
            autoComplete: "address-level2",
          })}

          {field("state", "State", {
            required: true,
            autoComplete: "address-level1",
          })}

          <div>
            <label
              htmlFor={`${id}-postOffice`}
              className="text-sm font-semibold text-slate-700"
            >
              Post Office{" "}
              <span aria-hidden="true" className="text-red-600">
                *
              </span>
            </label>

            <input
              id={`${id}-postOffice`}
              name="postOffice"
              required
              maxLength={160}
              aria-invalid={Boolean(fieldErrors.postOffice)}
              aria-describedby={fieldErrors.postOffice ? `${id}-postOffice-error` : undefined}
              onChange={(event) => handleFieldChange("postOffice", event.currentTarget.value, event.currentTarget)}
              placeholder="Enter post office"
              className={`${inputClass} ${fieldErrors.postOffice ? "border-red-500 focus:border-red-500" : ""}`}
            />
            {fieldErrors.postOffice && <p id={`${id}-postOffice-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-600">{fieldErrors.postOffice}</p>}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor={`${id}-address`}
              className="text-sm font-semibold text-slate-700"
            >
              Address{" "}
              <span aria-hidden="true" className="text-red-600">
                *
              </span>
            </label>

            <textarea
              id={`${id}-address`}
              name="address"
              required
              maxLength={1000}
              rows={3}
              autoComplete="street-address"
              placeholder="Enter address as per address proof"
              aria-invalid={Boolean(fieldErrors.address)}
              aria-describedby={fieldErrors.address ? `${id}-address-error` : undefined}
              onChange={(event) => handleFieldChange("address", event.currentTarget.value, event.currentTarget)}
              className={`${inputClass} ${fieldErrors.address ? "border-red-500 focus:border-red-500" : ""}`}
            />
            {fieldErrors.address && <p id={`${id}-address-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-600">{fieldErrors.address}</p>}
          </div>
        </div>
      </fieldset>

      {message && !Object.keys(fieldErrors).length && (
        <p
          role="alert"
          className="rounded-2xl border border-[#10407A]/10 bg-[#F5F8FC] p-4 text-sm text-[#10407A]"
        >
          {message}
        </p>
      )}

      <div className="flex flex-col justify-center gap-3 border-t border-[#10407A]/[0.08] pt-6 sm:flex-row sm:gap-4">
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex min-h-12 items-center justify-center rounded-full bg-[#EE5326] px-8 py-3 text-sm font-bold !text-white shadow-[0_9px_20px_rgba(238,83,38,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9471D] hover:shadow-[0_13px_25px_rgba(238,83,38,0.30)] disabled:cursor-wait disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE5326] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
        >
          {pending ? "Submitting..." : "Submit Registration Details"}
        </button>

        <a
          href={`${WHATSAPP_URL}?text=I%20need%20IRCTC%20agent%20ID`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366] px-6 py-3 text-sm font-bold !text-white shadow-[0_9px_20px_rgba(37,211,102,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#20BD5A] hover:bg-[#20BD5A] hover:shadow-[0_13px_25px_rgba(37,211,102,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
        >
          <WhatsAppIcon className="h-5 w-5 !text-white" />
          WhatsApp us
        </a>
      </div>
      {formError && <p role="alert" className="text-center text-sm font-medium text-red-600">{formError}</p>}
    </form>
  );
}
