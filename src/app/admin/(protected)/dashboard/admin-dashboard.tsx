"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Activity, ArrowDownUp, Bell, Check, ChevronDown, CircleHelp, Clock3,
  Download, Eye, FileText, Filter, LayoutDashboard, LogOut, Menu, MessageSquareText,
  Search, ShieldCheck, SlidersHorizontal, Users, X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import type { AdminLead, LeadStatus, LeadType } from "@/lib/admin/leads";
import DarkSelect, { type SelectOption } from "./dark-select";

const statusOptions: SelectOption[] = [
  { value: "all", label: "All statuses" },
  { value: "New", label: "New", tone: "blue" },
  { value: "Contacted", label: "Contacted", tone: "amber" },
  { value: "Converted", label: "Converted", tone: "green" },
  { value: "Rejected", label: "Rejected", tone: "red" },
];

const statusStyles: Record<LeadStatus, string> = {
  New: "border-cyan-400/25 bg-cyan-400/10 text-cyan-200",
  Contacted: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  Converted: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  Rejected: "border-rose-400/20 bg-rose-400/10 text-rose-300",
};
const statusDotStyles: Record<LeadStatus, string> = {
  New: "bg-cyan-300",
  Contacted: "bg-amber-300",
  Converted: "bg-emerald-300",
  Rejected: "bg-rose-300",
};

function parseLeadDate(value: string) {
  if (!value) return null;
  const local = /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:,?\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/.exec(value);
  if (local) return new Date(Number(local[3]), Number(local[2]) - 1, Number(local[1]), Number(local[4] ?? 0), Number(local[5] ?? 0), Number(local[6] ?? 0));
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function displayDate(value: string) {
  if (!value) return "—";
  const date = parseLeadDate(value);
  return date ? new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(date) : value;
}

function matchesDate(value: string, edge: string, end = false) {
  if (!edge) return true;
  const target = parseLeadDate(value);
  if (!target) return true;
  const boundary = new Date(`${edge}T${end ? "23:59:59.999" : "00:00:00"}`);
  return end ? target <= boundary : target >= boundary;
}

function uniqueLeadDetails(details: AdminLead["details"]) {
  const seen = new Set<string>();
  return details.filter((detail) => {
    const normalized = detail.label.toLowerCase().replace(/[^a-z]/g, "");
    const key = normalized === "dob" || normalized.includes("dateofbirth") ? "dateofbirth" : normalized;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function groupLeadDetails(details: AdminLead["details"]) {
  const groups = [
    { title: "Basic Details", keys: ["whatsappnumber", "emailid", "email", "submittedat"] },
    { title: "Documents & Unique Details", keys: ["pannumber", "uniquemobilenumber", "uniqueemailid", "referenceid", "transactionid"] },
    { title: "Agency & Personal Details", keys: ["firstname", "middlename", "lastname", "travelagencyname", "dateofbirth", "plan", "loginplan"] },
    { title: "Address Details", keys: ["officepincode", "pincode", "city", "state", "postoffice", "officeaddress"] },
  ];
  const remaining = [...uniqueLeadDetails(details)];
  const result = groups.flatMap((group) => {
    const items = remaining.filter((detail) => group.keys.includes(detail.label.toLowerCase().replace(/[^a-z]/g, "")));
    if (!items.length) return [];
    for (const item of items) remaining.splice(remaining.indexOf(item), 1);
    return [{ title: group.title, items }];
  });
  if (remaining.length) result.push({ title: "Submission Details", items: remaining });
  return result;
}

function displayDateTime(value: string) {
  if (!value) return "";
  const date = parseLeadDate(value);
  return date ? new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" }).format(date) : value;
}

function Metric({ title, value, hint, icon: Icon, tone = "orange" }: { title: string; value: number; hint: string; icon: typeof Users; tone?: "orange" | "blue" | "green" | "purple" | "amber" | "cyan" }) {
  const tones = {
    orange: "bg-orange-400/10 text-orange-300 ring-orange-300/10",
    blue: "bg-blue-400/10 text-blue-300 ring-blue-300/10",
    green: "bg-emerald-400/10 text-emerald-300 ring-emerald-300/10",
    purple: "bg-violet-400/10 text-violet-300 ring-violet-300/10",
    amber: "bg-amber-400/10 text-amber-300 ring-amber-300/10",
    cyan: "bg-cyan-400/10 text-cyan-200 ring-cyan-300/10",
  };
  return <article className="group relative overflow-hidden rounded-[20px] border border-white/[0.075] bg-[linear-gradient(145deg,#142235_0%,#101b2b_58%,#0e1928_100%)] p-5 shadow-[10px_12px_28px_rgba(0,0,0,.24),-5px_-5px_18px_rgba(111,156,211,.035),inset_1px_1px_0_rgba(255,255,255,.055),inset_-1px_-1px_0_rgba(0,0,0,.2)] transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/[0.16] hover:shadow-[12px_16px_34px_rgba(0,0,0,.3),0_0_26px_rgba(244,81,30,.055),inset_1px_1px_0_rgba(255,255,255,.065)] sm:p-5">
    <span className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-blue-300/[0.035] blur-2xl transition group-hover:bg-orange-300/[0.08]"/>
    <div className="flex items-start justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[.15em] text-slate-400">{title}</p><p className="mt-3 text-[28px] font-semibold tracking-tight text-slate-100">{value.toLocaleString()}</p></div><span className={`grid h-10 w-10 place-items-center rounded-[14px] ring-1 ${tones[tone]}`}><Icon size={18} /></span></div>
    <p className="mt-2 text-xs text-slate-400">{hint}</p>
  </article>;
}

export default function AdminDashboard({ email, initialLeads, initialError }: { email: string; initialLeads: AdminLead[]; initialError: string }) {
  const [leads, setLeads] = useState(initialLeads);
  const [loadError] = useState(initialError);
  const [activeType, setActiveType] = useState<"all" | LeadType>("all");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selected, setSelected] = useState<AdminLead | null>(null);
  const [noteDraft, setNoteDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!selected) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  const filtered = useMemo(() => leads.filter((lead) => {
    const searchText = `${lead.name} ${lead.agency} ${lead.whatsapp} ${lead.mobile} ${lead.email} ${lead.uniqueEmail} ${lead.pan}`.toLowerCase();
    return (activeType === "all" || lead.type === activeType)
      && (statusFilter === "all" || lead.status === statusFilter)
      && (!query.trim() || searchText.includes(query.trim().toLowerCase()))
      && matchesDate(lead.submittedAt, from)
      && matchesDate(lead.submittedAt, to, true);
  }), [leads, activeType, statusFilter, query, from, to]);

  const counts = useMemo(() => ({
    all: leads.length,
    registration: leads.filter((lead) => lead.type === "registration").length,
    contact: leads.filter((lead) => lead.type === "contact").length,
    fresh: leads.filter((lead) => lead.status === "New").length,
    contacted: leads.filter((lead) => lead.status === "Contacted").length,
    converted: leads.filter((lead) => lead.status === "Converted").length,
  }), [leads]);

  const hasActiveFilters = Boolean(query.trim() || from || to || statusFilter !== "all" || activeType !== "all");

  function openLead(lead: AdminLead) {
    setSelected(lead);
    setNoteDraft(lead.note);
    setSaveError("");
  }

  async function saveLead(status = selected?.status) {
    if (!selected || !status) return;
    setSaving(true);
    setSaveError("");
    try {
      const response = await fetch("/api/admin/leads/", {
        method: "PATCH", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selected.id, status, note: noteDraft }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Could not save changes");
      const updated = { ...selected, status, note: noteDraft, updatedAt: result.updatedAt };
      setLeads((current) => current.map((lead) => lead.id === selected.id ? updated : lead));
      setSelected(updated);
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : "Could not save changes");
    } finally {
      setSaving(false);
    }
  }

  async function signOut() {
    await fetch("/api/admin/logout/", { method: "POST" });
    router.replace("/admin/login/");
    router.refresh();
  }

  const nav = <>
    <p className="px-3 pb-2 pt-7 text-[10px] font-bold uppercase tracking-[.19em] text-slate-500">Workspace</p>
    <button onClick={() => setActiveType("all")} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${activeType === "all" ? "bg-orange-500/[0.12] text-orange-300 shadow-[inset_2px_0_0_#f4511e,0_5px_20px_rgba(244,81,30,.07)]" : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"}`}><LayoutDashboard size={17}/> Overview</button>
    <button onClick={() => setActiveType("registration")} className={`mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${activeType === "registration" ? "bg-orange-500/[0.12] text-orange-300 shadow-[inset_2px_0_0_#f4511e]" : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"}`}><Users size={17}/> Registration leads <span className="ml-auto text-xs text-slate-500">{counts.registration}</span></button>
    <button onClick={() => setActiveType("contact")} className={`mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${activeType === "contact" ? "bg-orange-500/[0.12] text-orange-300 shadow-[inset_2px_0_0_#f4511e]" : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"}`}><MessageSquareText size={17}/> Contact leads <span className="ml-auto text-xs text-slate-500">{counts.contact}</span></button>
    <p className="px-3 pb-2 pt-8 text-[10px] font-bold uppercase tracking-[.19em] text-slate-500">Management</p>
    <button onClick={() => setStatusFilter("all")} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/[0.04] hover:text-slate-200"><Activity size={17}/> Lead activity</button>
  </>;

  return <main className="min-h-screen bg-[#080f1b] text-slate-200 selection:bg-orange-500/30 [color-scheme:dark]">
    <div className="pointer-events-none fixed inset-0 overflow-hidden"><div className="absolute -left-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-500/[0.06] blur-[120px]"/><div className="absolute right-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-orange-500/[0.045] blur-[130px]"/></div>
    <div className="relative mx-auto flex min-h-screen max-w-[1920px] gap-0 p-3 sm:gap-3 sm:p-4 lg:p-5">
      <aside className="hidden w-[238px] shrink-0 flex-col rounded-[22px] border border-white/[0.075] bg-[linear-gradient(155deg,#101d2e_0%,#0c1624_62%,#0b1421_100%)] px-3 py-4 shadow-[14px_18px_42px_rgba(0,0,0,.28),-5px_-5px_18px_rgba(111,156,211,.025),inset_1px_1px_0_rgba(255,255,255,.05)] lg:flex">
        <div className="flex items-center gap-3 px-2 py-2"><span className="grid h-10 w-10 place-items-center rounded-[14px] bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-[0_7px_22px_rgba(244,81,30,.25)]"><span className="text-lg font-black">T</span></span><div><p className="text-sm font-bold tracking-wide text-slate-100">TravelIQ</p><p className="mt-0.5 text-[10px] font-medium uppercase tracking-[.16em] text-slate-400">Admin workspace</p></div></div>
        <nav className="mt-5">{nav}</nav>
        <div className="mt-auto rounded-2xl border border-blue-300/[0.08] bg-gradient-to-br from-[#142235] to-[#111c2b] p-4"><div className="flex items-center gap-2 text-blue-300"><ShieldCheck size={16}/><span className="text-xs font-semibold">Protected workspace</span></div><p className="mt-2 text-[11px] leading-5 text-slate-400">Lead information is available to authorized admins only.</p></div>
        <button onClick={signOut} className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-rose-400/[0.08] hover:text-rose-300"><LogOut size={17}/> Sign out</button>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="rounded-[20px] border border-white/[0.075] bg-[linear-gradient(145deg,rgba(17,29,45,.94),rgba(11,21,34,.95))] px-4 py-3 shadow-[0_14px_36px_rgba(0,0,0,.24),inset_1px_1px_0_rgba(255,255,255,.045)] backdrop-blur-xl sm:px-6">
          <div className="flex min-h-10 items-center justify-between gap-4"><div className="flex items-center gap-3"><button className="rounded-lg p-2 text-slate-400 hover:bg-white/[0.05] lg:hidden" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation">{mobileNav ? <X size={19}/> : <Menu size={19}/>}</button><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-orange-400">TravelIQ · Workspace</p><h1 className="mt-1 text-lg font-semibold tracking-tight text-slate-100 sm:text-xl">Lead overview</h1></div></div><div className="flex items-center gap-2 sm:gap-4"><button aria-label="Notifications" className="relative rounded-xl border border-white/[0.06] bg-[#111d2d] p-2.5 text-slate-400"><Bell size={17}/><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-orange-400"/></button><div className="hidden h-8 w-px bg-white/[0.08] sm:block"/><div className="hidden items-center gap-2.5 sm:flex"><div className="grid h-9 w-9 place-items-center rounded-full border border-orange-300/20 bg-orange-400/10 text-xs font-bold text-orange-300">{email.slice(0,1).toUpperCase()}</div><div><p className="max-w-[170px] truncate text-xs font-semibold text-slate-200">{email}</p><p className="text-[10px] text-slate-400">Administrator</p></div></div><button onClick={signOut} className="rounded-xl border border-white/[0.07] bg-[#111d2d] px-3 py-2 text-xs font-semibold text-slate-300 hover:border-white/[0.13] lg:hidden">Sign out</button></div></div>
          {mobileNav && <nav className="mt-3 border-t border-white/[0.06] pt-3 lg:hidden">{nav}</nav>}
        </header>

        <section className="mx-auto max-w-[1600px] pb-10 pt-6 sm:pt-7">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4"><div><h2 className="text-2xl font-semibold tracking-tight text-white sm:text-[27px]">Good to see you<span className="text-orange-400">.</span></h2><p className="mt-1.5 text-sm text-slate-400">Your leads at a glance. Review, follow up, and keep things moving.</p></div><div className="flex items-center gap-2 rounded-xl border border-emerald-300/[0.1] bg-[linear-gradient(135deg,#11251f,#101b27)] px-3 py-2 text-xs text-slate-300 shadow-[inset_1px_1px_0_rgba(255,255,255,.035),0_6px_18px_rgba(0,0,0,.16)]"><span className={`h-2 w-2 rounded-full ${loadError ? "bg-rose-400" : "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.6)]"}`}/>{loadError ? "Google Sheets unavailable" : "Google Sheets connected"} <ChevronDown size={14} className="ml-1 text-slate-400"/></div></div>

          {loadError && <div role="alert" className="mb-5 flex items-center gap-3 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] px-4 py-3 text-sm text-amber-200"><CircleHelp size={17}/>{loadError}</div>}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
            <Metric title="Total leads" value={counts.all} hint="Across all lead sources" icon={Users} tone="orange"/>
            <Metric title="Registration" value={counts.registration} hint="Agent onboarding requests" icon={FileText} tone="blue"/>
            <Metric title="Contact enquiries" value={counts.contact} hint="Website contact submissions" icon={MessageSquareText} tone="purple"/>
            <Metric title="New" value={counts.fresh} hint="Waiting for first follow-up" icon={Clock3} tone="cyan"/>
            <Metric title="Contacted" value={counts.contacted} hint="Follow-up in progress" icon={Activity} tone="amber"/>
            <Metric title="Converted" value={counts.converted} hint="Successfully onboarded" icon={Check} tone="green"/>
          </div>

          <section className="mt-6 overflow-hidden rounded-[22px] border border-white/[0.075] bg-[linear-gradient(145deg,#101a29,#0d1725_55%,#0a1421)] shadow-[14px_18px_46px_rgba(0,0,0,.29),-6px_-6px_24px_rgba(111,156,211,.025),inset_1px_1px_0_rgba(255,255,255,.045)]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] px-4 py-4 sm:px-5"><div><h3 className="text-base font-semibold text-slate-100">Lead management</h3><p className="mt-1 text-xs text-slate-400">Search and manage registrations and enquiries</p></div><button disabled title="CSV export is coming soon" className="inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#111d2c] px-3.5 py-2.5 text-xs font-semibold text-slate-400 opacity-75"><Download size={15}/> Export CSV <span className="rounded-md bg-white/[0.05] px-1.5 py-0.5 text-[9px] uppercase tracking-wider">Soon</span></button></div>
            <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.06] px-4 py-3 sm:px-5"><div className="flex gap-1 rounded-xl border border-white/[0.05] bg-[#080f1a] p-1"><button onClick={() => setActiveType("all")} className={`rounded-lg px-3 py-2 text-xs font-semibold ${activeType === "all" ? "bg-[#19283a] text-slate-100 shadow-sm" : "text-slate-400 hover:text-slate-300"}`}>All leads <span className="ml-1 text-slate-400">{counts.all}</span></button><button onClick={() => setActiveType("registration")} className={`rounded-lg px-3 py-2 text-xs font-semibold ${activeType === "registration" ? "bg-[#19283a] text-slate-100 shadow-sm" : "text-slate-400 hover:text-slate-300"}`}>Registration</button><button onClick={() => setActiveType("contact")} className={`rounded-lg px-3 py-2 text-xs font-semibold ${activeType === "contact" ? "bg-[#19283a] text-slate-100 shadow-sm" : "text-slate-400 hover:text-slate-300"}`}>Contact</button></div><div className="ml-auto flex items-center gap-2 text-xs text-slate-400"><SlidersHorizontal size={14}/>{filtered.length} shown</div></div>
<div className="flex flex-wrap items-end gap-2.5 border-b border-white/[0.06] px-4 py-3 sm:px-5"><label className="flex min-w-[220px] flex-1 items-center gap-2.5 rounded-xl border border-white/[0.07] bg-[#080f1a] px-3 py-2.5 text-slate-400 shadow-[inset_3px_3px_7px_rgba(0,0,0,.2),inset_-2px_-2px_6px_rgba(111,156,211,.025)] transition focus-within:border-blue-400/30 focus-within:ring-2 focus-within:ring-blue-400/10"><Search size={15}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, mobile, email or PAN" className="h-full w-full bg-transparent text-xs text-slate-200 outline-none placeholder:text-slate-400"/></label><div role="group" aria-label="Submission date range" className="grid w-full grid-cols-2 gap-2 sm:w-auto">
                <label htmlFor="lead-date-from" className="flex min-w-0 flex-col gap-1">
                  <span className="text-[10px] font-medium text-slate-400">From date</span>
                  <input id="lead-date-from" type="date" value={from} onChange={(event) => setFrom(event.target.value)} className="h-10 min-w-0 w-full rounded-xl border border-white/[0.07] bg-[#080f1a] px-2.5 text-xs text-slate-300 outline-none transition [color-scheme:dark] focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/15 sm:w-[140px]"/>
                </label>
                <label htmlFor="lead-date-to" className="flex min-w-0 flex-col gap-1">
                  <span className="text-[10px] font-medium text-slate-400">To date</span>
                  <input id="lead-date-to" type="date" value={to} onChange={(event) => setTo(event.target.value)} className="h-10 min-w-0 w-full rounded-xl border border-white/[0.07] bg-[#080f1a] px-2.5 text-xs text-slate-300 outline-none transition [color-scheme:dark] focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/15 sm:w-[140px]"/>
                </label>
              </div><div className="flex min-w-[165px] items-center gap-2"><Filter size={14} className="shrink-0 text-slate-400"/><DarkSelect ariaLabel="Filter leads by status" value={statusFilter} options={statusOptions} onChange={setStatusFilter}/></div>{hasActiveFilters && <button onClick={() => { setQuery(""); setFrom(""); setTo(""); setStatusFilter("all"); setActiveType("all"); }} className="rounded-lg px-2.5 py-2 text-xs font-semibold text-slate-400 transition hover:bg-orange-400/[0.07] hover:text-orange-300">Clear filters</button>}</div>

            <div className="admin-scrollbar overflow-x-auto"><table className="w-full min-w-[1060px] border-collapse text-left"><thead className="sticky top-0 z-10 bg-[#0b1420]"><tr className="text-[10px] font-bold uppercase tracking-[.13em] text-slate-400"><th className="px-5 py-3.5"><span className="inline-flex items-center gap-1.5">Date <ArrowDownUp size={11}/></span></th><th className="px-4 py-3.5">Lead</th>{activeType !== "contact" && <><th className="px-4 py-3.5">Agency</th><th className="px-4 py-3.5">Unique mobile</th><th className="px-4 py-3.5">Unique email</th><th className="px-4 py-3.5">PAN</th><th className="px-4 py-3.5">Location</th></>}{activeType === "contact" && <><th className="px-4 py-3.5">WhatsApp</th><th className="px-4 py-3.5">Email</th><th className="px-4 py-3.5">Plan</th><th className="px-4 py-3.5">Enquiry</th></>}<th className="px-4 py-3.5">Status</th><th className="px-5 py-3.5 text-right">Actions</th></tr></thead><tbody className="divide-y divide-white/[0.045]">{filtered.map((lead) => <tr key={lead.id} className="group transition hover:bg-white/[0.025]"><td className="whitespace-nowrap px-5 py-4 text-xs text-slate-400">{displayDate(lead.submittedAt)}</td><td className="px-4 py-4"><div className="flex items-center gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-[11px] bg-gradient-to-br from-[#243b55] to-[#17273a] text-[10px] font-bold text-blue-200 ring-1 ring-white/[0.06]">{lead.name.slice(0,1).toUpperCase()}</span><div className="min-w-0"><p className="max-w-[170px] truncate text-xs font-semibold text-slate-200">{lead.name}</p><p className="mt-1 max-w-[170px] truncate text-[10px] text-slate-400">{lead.whatsapp || lead.email || "—"}</p></div></div></td>{activeType !== "contact" && <><td className="max-w-[150px] truncate px-4 py-4 text-xs text-slate-400">{lead.agency || "—"}</td><td className="whitespace-nowrap px-4 py-4 text-xs text-slate-400">{lead.mobile || "—"}</td><td className="max-w-[190px] truncate px-4 py-4 text-xs text-slate-400">{lead.uniqueEmail || "—"}</td><td className="px-4 py-4 font-mono text-[11px] text-slate-400">{lead.pan || "—"}</td><td className="whitespace-nowrap px-4 py-4 text-xs text-slate-400">{[lead.city, lead.state].filter((value) => value && value !== "—").join(", ") || "—"}</td></>}{activeType === "contact" && <><td className="px-4 py-4 text-xs text-slate-400">{lead.whatsapp || "—"}</td><td className="max-w-[180px] truncate px-4 py-4 text-xs text-slate-400">{lead.email || "—"}</td><td className="px-4 py-4 text-xs text-slate-400">{lead.plan || "—"}</td><td className="max-w-[150px] truncate px-4 py-4 text-xs text-slate-400">{lead.action || "—"}</td></>}<td className="px-4 py-4"><span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${statusStyles[lead.status]}`}><span className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[lead.status]}`}/>{lead.status}</span></td><td className="px-5 py-4 text-right"><button onClick={() => openLead(lead)} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300/15 bg-[#162438] px-3 py-1.5 text-[11px] font-semibold text-slate-200 transition hover:border-blue-300/30 hover:bg-[#1b2d43] hover:text-white"><Eye size={13}/> View details</button></td></tr>)}{filtered.length === 0 && <tr><td colSpan={activeType === "contact" ? 7 : 10} className="px-5 py-16 text-center"><span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.035] text-slate-500"><Search size={18}/></span><p className="mt-3 text-sm font-medium text-slate-300">No leads match these filters</p><p className="mt-1 text-xs text-slate-500">Try clearing a filter or changing your search.</p></td></tr>}</tbody></table></div>
            <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3 text-[11px] text-slate-500"><span>Showing {filtered.length} of {leads.length} leads</span><span>Source: Google Sheets</span></div>
          </section>
          <p className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-600"><ShieldCheck size={12}/> Private workspace · Authorized team members only</p>
        </section>
      </div>
    </div>

    {selected && <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-[3px]" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><aside role="dialog" aria-modal="true" aria-label="Lead details" className="flex h-full w-full max-w-[560px] flex-col border-l border-white/[0.08] bg-[#0c1624] shadow-[-25px_0_80px_rgba(0,0,0,.45)]"><div className="flex items-start justify-between border-b border-white/[0.07] px-5 py-5 sm:px-7"><div><p className="text-[10px] font-bold uppercase tracking-[.17em] text-orange-400">{selected.type === "registration" ? "Registration lead" : "Contact enquiry"}</p><h2 className="mt-1.5 text-xl font-semibold text-slate-100">{selected.name}</h2><p className="mt-1 text-xs text-slate-400">Submitted {displayDate(selected.submittedAt)}</p></div><button aria-label="Close details" onClick={() => setSelected(null)} className="rounded-xl border border-white/[0.07] bg-[#111d2b] p-2 text-slate-400 hover:text-white"><X size={17}/></button></div><div className="admin-scrollbar flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-7">{groupLeadDetails(selected.details).map((group) => <section key={group.title} className="rounded-2xl border border-slate-300/[0.09] bg-[linear-gradient(145deg,#122235,#0f1a28)] p-4 shadow-[7px_9px_20px_rgba(0,0,0,.18),inset_0_1px_0_rgba(255,255,255,.035)]"><h3 className="mb-3 text-[10px] font-bold uppercase tracking-[.13em] text-slate-400">{group.title}</h3><div className="grid grid-cols-1 gap-x-4 gap-y-3 min-[420px]:grid-cols-2">{group.items.map((detail) => <div key={detail.label} className="min-w-0 border-b border-white/[0.045] pb-2 last:border-0"><p className="text-[9px] font-semibold uppercase tracking-[.1em] text-slate-400">{detail.label}</p><p className="mt-1 break-words text-xs leading-5 text-slate-100">{detail.value || "—"}</p></div>)}</div></section>)}<section className="rounded-2xl border border-white/[0.07] bg-[linear-gradient(145deg,#142235,#101a28)] p-4 shadow-[7px_9px_20px_rgba(0,0,0,.2),inset_1px_1px_0_rgba(255,255,255,.045)]"><div className="flex items-center justify-between"><div><h3 className="text-sm font-semibold text-slate-200">Lead status</h3><p className="mt-1 text-[11px] text-slate-400">Choose the current follow-up stage</p></div><span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${statusStyles[selected.status]}`}><span className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[selected.status]}`}/>{selected.status}</span></div><div className="mt-3 flex flex-col gap-2 sm:flex-row"><div className="min-w-0 flex-1"><DarkSelect ariaLabel="Update lead status" value={selected.status} options={statusOptions.slice(1)} onChange={(value) => setSelected({ ...selected, status: value as LeadStatus })}/></div><button type="button" disabled={saving} onClick={() => saveLead(selected.status)} className="rounded-xl border border-orange-400/20 bg-orange-400/[0.09] px-4 py-2.5 text-xs font-semibold text-orange-200 transition hover:bg-orange-400/[0.15] disabled:opacity-50">Save status</button></div></section><section className="rounded-2xl border border-white/[0.07] bg-[linear-gradient(145deg,#142235,#101a28)] p-4 shadow-[7px_9px_20px_rgba(0,0,0,.2),inset_1px_1px_0_rgba(255,255,255,.045)]"><div className="flex items-center justify-between"><div><h3 className="flex items-center gap-2 text-sm font-semibold text-slate-200"><MessageSquareText size={15} className="text-orange-300"/> Admin Notes</h3><p className="mt-1 text-[11px] text-slate-400">Private working notes for your team</p></div>{selected.updatedAt && <span className="text-[9px] text-slate-500">Last updated {displayDateTime(selected.updatedAt)}</span>}</div><textarea value={noteDraft} onChange={(event) => setNoteDraft(event.target.value)} maxLength={5000} rows={5} placeholder="Add context, follow-up reminders, or call notes..." className="mt-3 w-full resize-y rounded-xl border border-white/[0.07] bg-[#080f1a] p-3 text-xs shadow-[inset_4px_4px_9px_rgba(0,0,0,.24),inset_-2px_-2px_7px_rgba(111,156,211,.025)] leading-5 text-slate-200 outline-none placeholder:text-slate-600 focus:border-blue-400/30 focus:ring-2 focus:ring-blue-400/10"/><p className="mt-1 text-right text-[10px] text-slate-600">{noteDraft.length}/5000</p></section>{saveError && <p role="alert" className="rounded-lg border border-rose-400/20 bg-rose-400/[0.06] px-3 py-2 text-xs text-rose-300">{saveError}</p>}</div><div className="flex items-center justify-between border-t border-white/[0.07] px-5 py-4 sm:px-7"><span className="text-[10px] text-slate-500">Status and notes are stored privately.</span><button disabled={saving} onClick={() => saveLead()} className="rounded-xl bg-gradient-to-r from-[#f4511e] to-[#e4461d] px-4 py-2.5 text-xs font-bold text-white shadow-[0_7px_22px_rgba(244,81,30,.2)] transition hover:brightness-110 disabled:opacity-60">{saving ? "Saving..." : "Save note"}</button></div></aside></div>}
  </main>;
}
