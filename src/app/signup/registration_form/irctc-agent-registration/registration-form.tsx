"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/site";

export default function RegistrationForm() {
  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);

  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  // --------------------------------------------------
  // Restore saved form values
  // --------------------------------------------------

  useEffect(() => {
    try {
      const draft = JSON.parse(
        sessionStorage.getItem(
          "traveliq-registration-contact"
        ) || "{}"
      );

      for (const key of ["mobile", "email", "plan"]) {
        const input =
          formRef.current?.elements.namedItem(key);

        if (
          (
            input instanceof HTMLInputElement ||
            input instanceof HTMLSelectElement
          ) &&
          typeof draft[key] === "string"
        ) {
          input.value = draft[key];
        }
      }
    } catch {
      // User can still enter details manually
    }

    // Plan from URL
    const plan = new URLSearchParams(
      window.location.search
    ).get("plan");

    const input =
      formRef.current?.elements.namedItem("plan");

    if (
      input instanceof HTMLSelectElement &&
      (plan === "otp" || plan === "dsc")
    ) {
      input.value = plan;
    }
  }, []);

  // --------------------------------------------------
  // Convert plan value to readable text
  // --------------------------------------------------

  function getPlanName(plan: string) {
    if (plan === "otp") {
      return "OTP Agent Login";
    }

    if (plan === "dsc") {
      return "DSC Agent Login";
    }

    return "Help me choose a plan";
  }

  // --------------------------------------------------
  // Save Contact Lead to Google Sheet
  // --------------------------------------------------

  async function saveContactLead({
    plan,
    mobile,
    email,
    action,
  }: {
    plan: string;
    mobile: string;
    email: string;
    action: string;
  }) {
    const response = await fetch("/api/contact-leads/", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        loginPlan: getPlanName(plan),

        whatsappNumber: `+91${mobile}`,

        email,

        action,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.message ||
          "Unable to save your details. Please try again."
      );
    }

    return data;
  }

  // --------------------------------------------------
  // Next button submit
  // --------------------------------------------------

  async function submit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (pending) return;

    setError("");
    setPending(true);

    const fields = new FormData(
      event.currentTarget
    );

    const query = new URLSearchParams(
      window.location.search
    );

    const mobile = String(
      fields.get("mobile") || ""
    ).trim();

    const email = String(
      fields.get("email") || ""
    ).trim();

    const plan = String(
      fields.get("plan") || ""
    );

    try {
      // ----------------------------------------------
      // 1. Save lead to Google Sheet
      // ----------------------------------------------

      await saveContactLead({
        plan,
        mobile,
        email,
        action: "Open full registration form",
      });

      // ----------------------------------------------
      // 2. Save locally for next registration page
      // ----------------------------------------------

      sessionStorage.setItem(
        "traveliq-registration-contact",

        JSON.stringify({
          mobile,
          email,
          plan,

          referenceId:
            query.get("reffid") ?? "",

          initialReferenceId:
            query.get("initid") ?? "",
        })
      );

      // ----------------------------------------------
      // 3. Redirect user
      // ----------------------------------------------

      router.push(
        "/signup/registration_form/irctc-agent-registration-details/"
      );
    } catch (err) {
      console.error(
        "Registration contact error:",
        err
      );

      setError("Unable to submit your enquiry right now. Please try again.");

      setPending(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      aria-busy={pending}
      className="space-y-4"
    >
      {/* Login Plan */}

      <div className="text-left">
        <label
          htmlFor="registration-plan"
          className="text-sm font-extrabold text-[#0B2545]"
        >
          Login plan
        </label>

        <select
          id="registration-plan"
          name="plan"
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm"
        >
          <option value="">
            Help me choose a plan
          </option>

          <option value="otp">
            OTP Agent Login
          </option>

          <option value="dsc">
            DSC Agent Login
          </option>
        </select>
      </div>

      {/* Mobile + Email */}

      <div className="grid gap-4 text-left sm:grid-cols-2">

        {/* WhatsApp */}

        <div className="rounded-2xl border border-[#FFE3D9] bg-white p-4 shadow-xs">
          <div className="mb-3 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5F8ED] text-[#16A34A]">
              <WhatsAppIcon className="h-4 w-4" />
            </div>

            <label
              htmlFor="registration-mobile"
              className="text-sm font-extrabold text-[#0B2545]"
            >
              WhatsApp Number{" "}
              <span className="text-red-500">
                *
              </span>
            </label>
          </div>

          <div className="flex items-center rounded-xl border border-slate-200 bg-white px-3.5 py-3 focus-within:border-slate-300">

            <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
              <span>+91</span>

              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </div>

            <div className="mx-2.5 h-4 w-px bg-slate-200" />

            <input
              id="registration-mobile"
              name="mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="Enter your mobile number"
              pattern="[0-9]{10}"
              minLength={10}
              maxLength={10}
              title="Please enter 10 digit mobile number."
              required
              className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Email */}

        <div className="rounded-2xl border border-[#FFE3D9] bg-white p-4 shadow-xs">
          <div className="mb-3 flex items-center gap-2.5">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF0EB] text-[#FF5722]">
              <Mail className="h-4 w-4" />
            </div>

            <label
              htmlFor="registration-email"
              className="text-sm font-extrabold text-[#0B2545]"
            >
              Email ID{" "}
              <span className="text-red-500">
                *
              </span>
            </label>
          </div>

          <div className="flex items-center rounded-xl border border-slate-200 bg-white px-3.5 py-3 focus-within:border-slate-300">

            <input
              id="registration-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email ID"
              maxLength={160}
              required
              className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Error */}

      {error && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-800"
        >
          {error}
        </p>
      )}

      {/* Information */}

      <div className="flex items-center gap-3.5 rounded-2xl border border-[#D8E5FF] bg-[#F0F5FF] p-4 text-left">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-xs">
          <Check className="h-4.5 w-4.5 stroke-[3]" />
        </div>

        <div>
          <h3 className="text-sm font-extrabold text-[#0B2545]">
            Open full registration form
          </h3>

          <p className="mt-0.5 text-xs font-medium text-slate-500">
            You will be redirected to the complete
            registration form in the next step.
          </p>
        </div>
      </div>

      {/* Next */}

      <button
        type="submit"
        disabled={pending}
        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FF4D1D] py-4 text-base font-extrabold !text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:bg-[#E03E12] hover:shadow-xl hover:shadow-orange-500/35 disabled:cursor-wait disabled:opacity-60"
      >
        <span>
          {pending
            ? "Saving details…"
            : "Next"}
        </span>

        <ArrowRight className="h-5 w-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      {/* Divider */}

      <div className="my-5 flex items-center gap-4">

        <div className="h-px flex-1 bg-slate-200" />

        <span className="text-xs font-extrabold text-slate-400">
          OR
        </span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* WhatsApp */}

      <a
        href={`${WHATSAPP_URL}?text=I%20need%20IRCTC%20agent%20ID`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex w-full items-center justify-center gap-2.5 rounded-2xl border border-[#25D366]/40 bg-[#25D366] py-4 text-base font-extrabold !text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:border-[#20BD5A] hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-emerald-500/30"
      >
        <WhatsAppIcon className="h-6 w-6 !text-white transition-transform duration-200 group-hover:scale-110" />

        <span>Chat on WhatsApp</span>

        <ArrowRight className="h-5 w-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
      </a>

      {/* Privacy */}

      <div className="mt-5 flex items-center justify-center gap-2 pt-1">

        <ShieldCheck className="h-4 w-4 text-slate-400" />

        <p className="text-center text-xs font-medium text-slate-500">
          Your details are used only for
          registration-related enquiries.
        </p>
      </div>
    </form>
  );
}
