"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Activity, ArrowDownUp, Bell, Check, CheckCircle2, ChevronDown, CircleHelp, Clock3,
  Database, Download, Eye, FileText, Filter, Home, LayoutDashboard, LogOut, Menu,
  MessageSquareText, MoreVertical, Phone, Search, ShieldCheck, SlidersHorizontal, Target, Users, X,
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
  New: "status-pill",
  Contacted: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  Converted: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  Rejected: "border-rose-400/20 bg-rose-400/10 text-rose-300",
};
const statusDotStyles: Record<LeadStatus, string> = {
  New: "bg-blue-300",
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
  if (!target) return false;
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

function groupLeadDetails(details: AdminLead["details"], type: LeadType = details.some((item) => item.label === "Message") ? "contact" : "registration") {
  const groups = type === "contact" ? [
    { title: "Contact details", keys: ["name", "email", "whatsappnumber"] },
    { title: "Enquiry", keys: ["subject", "message", "actionsubject"] },
    { title: "Service interest", keys: ["serviceplan", "loginplan", "plan"] },
    { title: "Submission", keys: ["submittedat"] },
  ] : [
    { title: "Applicant details", keys: ["firstname", "middlename", "lastname", "dateofbirth", "emailid", "whatsappnumber"] },
    { title: "Agency & plan", keys: ["travelagencyname", "plan", "loginplan"] },
    { title: "Documents & unique details", keys: ["pannumber", "uniquemobilenumber", "uniqueemailid", "referenceid", "transactionid"] },
    { title: "Office address", keys: ["officepincode", "pincode", "city", "state", "postoffice", "officeaddress"] },
    { title: "Submission", keys: ["submittedat", "sourceurl"] },
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

function todayInIndia() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)?.value ?? "";
  return `${part("year")}-${part("month")}-${part("day")}`;
}

function followUpInfo(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const selected = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(selected.getTime()) || selected.toISOString().slice(0, 10) !== value) return null;
  const today = todayInIndia();
  const difference = (selected.getTime() - new Date(`${today}T00:00:00.000Z`).getTime()) / 86400000;
  if (difference < 0) return { label: "Overdue", className: "border-rose-400/20 bg-rose-400/10 text-rose-300" };
  if (difference === 0) return { label: "Today", className: "border-blue-400/20 bg-blue-400/10 text-blue-300" };
  if (difference === 1) return { label: "Tomorrow", className: "border-violet-400/20 bg-violet-400/10 text-violet-300" };
  return {
    label: new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", timeZone: "UTC" }).format(selected),
    className: "border-slate-400/15 bg-slate-400/5 text-slate-300",
  };
}

function Metric({ title, value, hint, icon: Icon, tone = "blue" }: { title: string; value: number; hint: string; icon: typeof Users; tone?: "blue" | "cyan" | "purple" | "amber" | "sky" | "green" }) {
  const tones = {
    blue: { surface: "metric-blue", icon: "bg-blue-500/20 text-blue-400 ring-blue-500/30", bar: "bg-blue-400" },
    cyan: { surface: "metric-cyan", icon: "bg-teal-500/20 text-teal-300 ring-teal-500/30", bar: "bg-teal-400" },
    purple: { surface: "metric-purple", icon: "bg-purple-500/20 text-purple-300 ring-purple-500/30", bar: "bg-purple-400" },
    amber: { surface: "metric-amber", icon: "bg-amber-500/20 text-amber-300 ring-amber-500/30", bar: "bg-amber-400" },
    sky: { surface: "metric-sky", icon: "bg-sky-500/20 text-sky-300 ring-sky-500/30", bar: "bg-sky-400" },
    green: { surface: "metric-green", icon: "bg-emerald-500/20 text-emerald-300 ring-emerald-500/30", bar: "bg-emerald-400" },
  };
  const colors = tones[tone];
  return <article className={`metric-card ${colors.surface} relative flex flex-col justify-between overflow-hidden rounded-xl p-3 min-h-[82px]`}>
    <div className="flex items-center gap-2">
      <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg ring-1 ${colors.icon}`}><Icon size={13} /></span>
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-300">{title}</p>
    </div>
    <div className="mt-1 flex items-end justify-between">
      <div>
        <p className="text-xl font-extrabold tracking-tight text-white">{value.toLocaleString()}</p>
        <p className="mt-0.5 text-[10px] text-slate-400">{hint}</p>
      </div>
      <div aria-hidden="true" className="flex items-end gap-[3px] opacity-85 pb-0.5">
        <span className={`w-[3px] rounded-sm ${colors.bar} h-2 opacity-60`}/>
        <span className={`w-[3px] rounded-sm ${colors.bar} h-3.5 opacity-85`}/>
        <span className={`w-[3px] rounded-sm ${colors.bar} h-2.5 opacity-70`}/>
        <span className={`w-[3px] rounded-sm ${colors.bar} h-4 opacity-100`}/>
      </div>
    </div>
  </article>;
}

type DashboardView = "all" | LeadType;

export default function AdminDashboard({ email, initialLeads, initialError, initialView }: { email: string; initialLeads: AdminLead[]; initialError: string; initialView: DashboardView }) {
  const [leads, setLeads] = useState(initialLeads);
  const [loadError] = useState(initialError);
  const [activeType, setActiveType] = useState<DashboardView>(initialView);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [selected, setSelected] = useState<AdminLead | null>(null);
  const [statusDraft, setStatusDraft] = useState<LeadStatus>("New");
  const [noteDraft, setNoteDraft] = useState("");
  const [followUpDraft, setFollowUpDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const router = useRouter();

  function selectView(view: DashboardView) {
    setActiveType(view);
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `traveliq_admin_dashboard_view=${view}; Path=/admin/dashboard; Max-Age=31536000; SameSite=Lax${secure}`;
  }

  useEffect(() => {
    if (!selected) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  const filtered = useMemo(() => {
    const list = leads.filter((lead) => {
      const searchText = `${lead.name} ${lead.agency} ${lead.whatsapp} ${lead.mobile} ${lead.email} ${lead.uniqueEmail} ${lead.pan} ${lead.plan} ${lead.action} ${lead.subject} ${lead.details.map((item) => item.value).join(" ")}`.toLowerCase();
      return (activeType === "all" || lead.type === activeType)
        && (statusFilter === "all" || lead.status === statusFilter)
        && (!query.trim() || searchText.includes(query.trim().toLowerCase()))
        && matchesDate(lead.submittedAt, from)
        && matchesDate(lead.submittedAt, to, true);
    });
    return list.sort((a, b) => {
      const da = parseLeadDate(a.submittedAt)?.getTime() ?? 0;
      const db = parseLeadDate(b.submittedAt)?.getTime() ?? 0;
      return sortAsc ? da - db : db - da;
    });
  }, [leads, activeType, statusFilter, query, from, to, sortAsc]);

  const counts = useMemo(() => ({
    all: leads.length,
    registration: leads.filter((lead) => lead.type === "registration").length,
    contact: leads.filter((lead) => lead.type === "contact").length,
    fresh: leads.filter((lead) => lead.status === "New").length,
    contacted: leads.filter((lead) => lead.status === "Contacted").length,
    converted: leads.filter((lead) => lead.status === "Converted").length,
  }), [leads]);

  const scopedLeads = useMemo(
    () => activeType === "all" ? leads : leads.filter((lead) => lead.type === activeType),
    [leads, activeType],
  );
  const scopedCounts = useMemo(() => ({
    total: scopedLeads.length,
    fresh: scopedLeads.filter((lead) => lead.status === "New").length,
    contacted: scopedLeads.filter((lead) => lead.status === "Contacted").length,
    converted: scopedLeads.filter((lead) => lead.status === "Converted").length,
    rejected: scopedLeads.filter((lead) => lead.status === "Rejected").length,
    followUp: scopedLeads.filter((lead) => lead.status === "New" || lead.status === "Contacted").length,
  }), [scopedLeads]);

  const metrics = activeType === "all"
    ? [
        { title: "TOTAL LEADS", value: counts.all, hint: "Across all lead sources", icon: Users, tone: "blue" as const },
        { title: "REGISTRATION", value: counts.registration, hint: "Agent onboarding requests", icon: FileText, tone: "cyan" as const },
        { title: "CONTACT ENQUIRIES", value: counts.contact, hint: "Website contact submissions", icon: MessageSquareText, tone: "purple" as const },
        { title: "NEW", value: counts.fresh, hint: "Waiting for first follow-up", icon: Clock3, tone: "amber" as const },
        { title: "CONTACTED", value: counts.contacted, hint: "Follow-up in progress", icon: Phone, tone: "sky" as const },
        { title: "CONVERTED", value: counts.converted, hint: "Successfully onboarded", icon: CheckCircle2, tone: "green" as const },
      ]
    : [
        { title: activeType === "registration" ? "REGISTRATION LEADS" : "CONTACT ENQUIRIES", value: scopedCounts.total, hint: activeType === "registration" ? "Agent onboarding requests" : "Website contact submissions", icon: activeType === "registration" ? Users : MessageSquareText, tone: "blue" as const },
        { title: "NEW", value: scopedCounts.fresh, hint: "Waiting for first follow-up", icon: Clock3, tone: "amber" as const },
        { title: "CONTACTED", value: scopedCounts.contacted, hint: "Follow-up in progress", icon: Phone, tone: "sky" as const },
        { title: "CONVERTED", value: scopedCounts.converted, hint: "Successfully completed", icon: CheckCircle2, tone: "green" as const },
        { title: "REJECTED", value: scopedCounts.rejected, hint: "Closed without conversion", icon: CircleHelp, tone: "purple" as const },
        { title: "NEEDS FOLLOW-UP", value: scopedCounts.followUp, hint: "New or awaiting response", icon: Bell, tone: "cyan" as const },
      ];

  const viewTitle = activeType === "all" ? "All leads" : activeType === "registration" ? "Registration leads" : "Contact enquiries";
  const viewDescription = activeType === "registration"
    ? "Search and manage registrations and website enquiries."
    : activeType === "contact"
      ? "Review website enquiries and respond to prospective customers."
      : "Search and manage registrations and website enquiries.";

  const hasActiveFilters = Boolean(query.trim() || from || to || statusFilter !== "all");

  function openLead(lead: AdminLead) {
    setSelected(lead);
    setStatusDraft(lead.status);
    setNoteDraft(lead.note);
    setFollowUpDraft(lead.followUpDate);
    setSaveError("");
    setSaveSuccess("");
  }

  async function saveLead(status = statusDraft) {
    if (!selected || !status) return;
    setSaving(true);
    setSaveError("");
    setSaveSuccess("");
    try {
      const response = await fetch("/api/admin/leads/", {
        method: "PATCH", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selected.id, status, note: noteDraft, followUpDate: followUpDraft }),
      });
      const result = await response.json();
      if (!response.ok || result?.success !== true || typeof result?.updatedAt !== "string" || result?.followUpDate !== followUpDraft) {
        throw new Error(result.message || "Could not save changes");
      }
      const updated = { ...selected, status, note: noteDraft, followUpDate: result.followUpDate, updatedAt: result.updatedAt };
      setLeads((current) => current.map((lead) => lead.id === selected.id ? updated : lead));
      setSelected(updated);
      setStatusDraft(status);
      setSaveSuccess("Lead updated successfully.");
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
    <button onClick={() => selectView("all")} className={`flex w-full items-center gap-3.5 px-4 py-2.5 text-xs font-semibold transition ${activeType === "all" ? "sidebar-item-active" : "text-slate-300 hover:bg-white/[0.04] hover:text-white"}`}><Home size={16}/> Overview</button>
  </>;

  return <main className="admin-workspace relative h-screen w-screen overflow-hidden text-slate-200 selection:bg-blue-500/30 [color-scheme:dark]">
    <div className="flex h-full w-full overflow-hidden">
      <aside className="admin-sidebar hidden h-full w-60 shrink-0 flex-col border-r border-white/[0.07] bg-[#0b172a] p-4 lg:flex">
        <div className="flex items-center gap-3 px-2 py-1">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 text-white font-black text-lg shadow-lg shadow-blue-500/30">T</span>
          <div>
            <p className="text-sm font-bold tracking-wide text-white">TravelIQ</p>
            <p className="text-[9px] font-medium uppercase tracking-[.18em] text-slate-400">ADMIN PANEL</p>
          </div>
        </div>

        <nav className="mt-8">{nav}</nav>

        <div className="mt-auto">
          <button onClick={signOut} className="flex w-full items-center gap-3 rounded-xl border border-white/[0.08] bg-[#081120] px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-rose-500/10 hover:text-rose-300">
            <LogOut size={16}/> Sign out
          </button>
        </div>
      </aside>

      <div className="flex-1 h-full min-w-0 overflow-y-auto admin-scrollbar p-4 sm:p-6 lg:p-7 space-y-5">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button className="rounded-lg p-1.5 text-slate-400 hover:bg-white/[0.05] lg:hidden" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation">{mobileNav ? <X size={18}/> : <Menu size={18}/>}</button>
            <span>Dashboard</span>
            <span>&gt;</span>
            <span className="font-medium text-slate-200">Lead overview</span>
          </div>

          <div className="flex items-center gap-3">
            <button aria-label="Notifications" className="relative rounded-xl border border-white/10 bg-[#0c182c] p-2 text-slate-300 hover:bg-[#12223d]">
              <Bell size={16}/>
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-500"/>
            </button>
            <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0c182c] py-1 pl-1 pr-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white">A</span>
              <div className="hidden sm:block">
                <p className="max-w-[140px] truncate text-xs font-semibold text-slate-100">{email}</p>
                <p className="text-[9px] text-slate-400">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {mobileNav && <nav className="border-b border-white/10 pb-3 lg:hidden">{nav}</nav>}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Lead overview</h1>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">Your leads at a glance. Review, follow up, and keep things moving.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c182c] px-3 py-2 text-xs text-slate-300">
              <Clock3 size={14} className="text-blue-400"/>
              <span>08 Oct 2026 &mdash; 08 Oct 2026</span>
              <ChevronDown size={14} className="text-slate-400"/>
            </div>
            <div className="w-36">
              <DarkSelect ariaLabel="Filter leads by status" value={statusFilter} options={statusOptions} onChange={setStatusFilter}/>
            </div>
          </div>
        </div>

        {loadError && <div role="alert" className="flex items-center gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs text-amber-200"><CircleHelp size={15}/>{loadError}</div>}
        
        {activeType === "all" && <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {metrics.map((metric) => <Metric key={metric.title} {...metric} />)}
        </div>}

        <section className="clay-card overflow-hidden rounded-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-400">
                <Database size={18}/>
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">{viewTitle}</h3>
                <p className="text-xs text-slate-400">{viewDescription}</p>
              </div>
            </div>
            <button disabled title="CSV export is coming soon" className="inline-flex items-center gap-2 rounded-xl border border-blue-500/40 bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 disabled:opacity-90">
              <Download size={14} className="text-blue-100"/> Export CSV
            </button>
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] px-5 py-3">
            <div className="inline-flex flex-wrap items-center gap-2">
              <button onClick={() => selectView("all")} className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition ${activeType === "all" ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-600/30" : "border border-white/10 bg-[#081120] text-slate-300 hover:text-white"}`}>
                <LayoutDashboard size={14}/> All leads <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">{counts.all}</span>
              </button>
              <button onClick={() => selectView("registration")} className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition ${activeType === "registration" ? "border border-teal-500/50 bg-teal-500/15 text-teal-300" : "border border-white/10 bg-[#081120] text-slate-300 hover:text-white"}`}>
                <FileText size={14}/> Registration leads <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">{counts.registration}</span>
              </button>
              <button onClick={() => selectView("contact")} className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition ${activeType === "contact" ? "border border-purple-500/50 bg-purple-500/15 text-purple-300" : "border border-white/10 bg-[#081120] text-slate-300 hover:text-white"}`}>
                <MessageSquareText size={14}/> Contact enquiries <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">{counts.contact}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-b border-white/[0.06] px-5 py-3.5">
            <label className="dark-input flex h-10 min-w-[260px] flex-1 items-center gap-2.5 rounded-xl px-3.5 text-slate-400 transition">
              <Search size={16}/>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name, mobile, email, PAN or agency..." className="h-full w-full bg-transparent text-xs text-slate-200 outline-none placeholder:text-slate-500"/>
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">From date</span>
                <input type="date" value={from} onChange={(event) => setFrom(event.target.value)} className="dark-input h-10 w-36 rounded-xl px-2.5 text-xs text-slate-300 outline-none transition [color-scheme:dark]"/>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">To date</span>
                <input type="date" value={to} onChange={(event) => setTo(event.target.value)} className="dark-input h-10 w-36 rounded-xl px-2.5 text-xs text-slate-300 outline-none transition [color-scheme:dark]"/>
              </div>
            </div>
            <div className="w-44 min-w-[170px] flex items-center gap-2">
              <Filter size={15} className="text-slate-400 shrink-0"/>
              <DarkSelect ariaLabel="Filter leads by status" value={statusFilter} options={statusOptions} onChange={setStatusFilter}/>
            </div>
            {hasActiveFilters && <button onClick={() => { setQuery(""); setFrom(""); setTo(""); setStatusFilter("all"); }} className="rounded-xl border border-white/10 bg-[#11213b] px-3 py-2 text-xs font-semibold text-blue-400 hover:text-blue-300">Clear filters</button>}
          </div>

          <div className="admin-scrollbar overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead className="bg-[#081324] text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-white/[0.08]">
                <tr>
                  <th className="px-4 py-3.5 text-center w-10">#</th>
                  <th className="px-4 py-3.5 whitespace-nowrap select-none">
                    <button onClick={() => setSortAsc(!sortAsc)} className="inline-flex items-center gap-1.5 hover:text-white transition" title="Sort by Date">
                      Date <ArrowDownUp size={11} className={`transition-transform ${sortAsc ? "rotate-180 text-blue-400" : "text-blue-400"}`}/>
                    </button>
                  </th>
                  <th className="px-4 py-3.5 whitespace-nowrap min-w-[120px]">Type</th>
                  <th className="px-4 py-3.5 whitespace-nowrap min-w-[170px]">Name</th>
                  <th className="px-4 py-3.5 whitespace-nowrap min-w-[130px]">Agency</th>
                  <th className="px-4 py-3.5 whitespace-nowrap min-w-[125px]">Mobile</th>
                  <th className="px-4 py-3.5 whitespace-nowrap min-w-[170px]">Email</th>
                  <th className="px-4 py-3.5 whitespace-nowrap min-w-[110px]">PAN</th>
                  <th className="px-4 py-3.5 whitespace-nowrap min-w-[140px]">Location</th>
                  <th className="px-4 py-3.5 whitespace-nowrap min-w-[110px]">Status</th>
                  <th className="px-4 py-3.5 whitespace-nowrap text-right min-w-[130px]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filtered.map((lead, index) => <tr key={lead.id} className="group transition hover:bg-white/[0.02]">
                  <td className="px-4 py-3 text-center text-xs font-bold text-slate-500">{index + 1}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-300">{displayDate(lead.submittedAt)}</td>
                  <td className="px-4 py-3">
                    {lead.type === "registration" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-teal-500/40 bg-teal-500/15 px-2.5 py-1 text-[10px] font-semibold text-teal-300">
                        <FileText size={12}/> Registration
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-purple-500/40 bg-purple-500/15 px-2.5 py-1 text-[10px] font-semibold text-purple-300">
                        <MessageSquareText size={12}/> Contact
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-700 text-[11px] font-bold text-slate-200">{lead.name.slice(0,1).toUpperCase()}</span>
                      <div className="min-w-0">
                        <p className="max-w-[160px] truncate text-xs font-semibold text-slate-100">{lead.name}</p>
                        <p className="max-w-[160px] truncate text-[10px] text-slate-400">{lead.mobile || lead.whatsapp || lead.email || "—"}</p>
                      </div>
                    </div>
                  </td>
                  <td className="max-w-[140px] truncate px-4 py-3 text-xs text-slate-300">{lead.agency || "—"}</td>
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-slate-300">{lead.mobile || "—"}</td>
                  <td className="max-w-[180px] truncate px-4 py-3 text-xs text-slate-300">{lead.uniqueEmail || lead.email || "—"}</td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-300">{lead.pan || "—"}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-300">{[lead.city, lead.state].filter((v) => v && v !== "—").join(", ") || "—"}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col items-start gap-1">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${statusStyles[lead.status]}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[lead.status]}`}/>
                        {lead.status}
                      </span>
                      {lead.followUpDate && (() => {
                        const info = followUpInfo(lead.followUpDate);
                        return info ? <span className={`inline-flex rounded-full border px-2 py-0.5 text-[9px] font-medium ${info.className}`}>{info.label}</span> : null;
                      })()}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button onClick={() => openLead(lead)} className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0d1c33] px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-[#142848] hover:text-white">
                        <Eye size={13} className="text-blue-400"/> View details
                      </button>
                      <button aria-label="Lead actions" onClick={() => openLead(lead)} className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white">
                        <MoreVertical size={15}/>
                      </button>
                    </div>
                  </td>
                </tr>)}
                {filtered.length === 0 && <tr>
                  <td colSpan={11} className="px-4 py-12 text-center">
                    <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-slate-400"><Search size={18}/></span>
                    <p className="mt-2.5 text-xs font-medium text-slate-200">No leads match these filters</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">Try clearing a filter or changing your search query.</p>
                  </td>
                </tr>}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-white/[0.08] px-5 py-3 text-xs text-slate-400">
            <span>Showing 1 to {filtered.length} of {leads.length} leads</span>
            <div className="flex items-center gap-1">
              <button disabled className="rounded-lg border border-white/10 bg-[#081120] px-2.5 py-1 text-slate-500 disabled:opacity-50">&lt;</button>
              <button className="rounded-lg bg-blue-600 px-3 py-1 font-bold text-white shadow-sm">1</button>
              <button disabled className="rounded-lg border border-white/10 bg-[#081120] px-2.5 py-1 text-slate-500 disabled:opacity-50">&gt;</button>
            </div>
          </div>
        </section>
      </div>
    </div>

    {selected && <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
      <aside role="dialog" aria-modal="true" aria-label="Lead details" className="flex h-full w-full max-w-[560px] flex-col border-l border-white/10 bg-[#0b172a] shadow-2xl">
        <div className="flex items-start justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-blue-400">{selected.type === "registration" ? "Registration lead" : "Contact enquiry"}</p>
            <h2 className="mt-1 text-xl font-bold text-white">{selected.name}</h2>
            <p className="mt-0.5 text-xs text-slate-400">Submitted {displayDate(selected.submittedAt)}</p>
          </div>
          <button aria-label="Close details" onClick={() => setSelected(null)} className="rounded-xl border border-white/10 bg-[#0d1c33] p-2 text-slate-400 hover:text-white"><X size={17}/></button>
        </div>
        
        <div className="admin-scrollbar flex-1 space-y-5 overflow-y-auto px-6 py-5">
          {groupLeadDetails(selected.details).map((group) => <section key={group.title} className="clay-card rounded-2xl p-4">
            <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[.15em] text-slate-400">{group.title}</h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 min-[420px]:grid-cols-2">
              {group.items.map((detail) => <div key={detail.label} className="min-w-0 border-b border-white/[0.04] pb-2 last:border-0">
                <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">{detail.label}</p>
                <p className="mt-1 break-words text-xs leading-relaxed text-slate-100">{detail.value || "—"}</p>
              </div>)}
            </div>
          </section>)}

          <section className="clay-card rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white">Lead status</h3>
                <p className="mt-0.5 text-[11px] text-slate-400">Choose the current follow-up stage</p>
              </div>
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${statusStyles[selected.status]}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[selected.status]}`}/>
                {selected.status}
              </span>
            </div>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <div className="min-w-0 flex-1">
                <DarkSelect ariaLabel="Update lead status" value={statusDraft} options={statusOptions.slice(1)} onChange={(value) => { setStatusDraft(value as LeadStatus); setSaveError(""); setSaveSuccess(""); }}/>
              </div>
              <button type="button" disabled={saving} onClick={() => saveLead(statusDraft)} className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 disabled:opacity-50">Save status</button>
            </div>
          </section>

          <section className="clay-card rounded-2xl p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-white">Next follow-up</h3>
                <p className="mt-0.5 text-[11px] text-slate-400">Schedule when the team should contact this lead</p>
              </div>
              {selected.followUpDate && (() => {
                const info = followUpInfo(selected.followUpDate);
                return info ? <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-medium ${info.className}`}>{info.label} · {displayDate(selected.followUpDate)}</span> : null;
              })()}
            </div>
            <label className="mt-3 block text-[10px] font-semibold uppercase tracking-wider text-slate-400" htmlFor="lead-follow-up-date">Follow-up date</label>
            <input
              id="lead-follow-up-date"
              type="date"
              min={todayInIndia()}
              value={followUpDraft}
              onChange={(event) => { setFollowUpDraft(event.target.value); setSaveError(""); setSaveSuccess(""); }}
              className="dark-input mt-1.5 w-full rounded-xl px-3 py-2.5 text-xs text-slate-200 outline-none"
            />
            <p className="mt-1.5 text-[10px] text-slate-500">Today or a future date. Clear the field to remove the reminder.</p>
          </section>

          <section className="clay-card rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-white"><MessageSquareText size={15} className="text-blue-400"/> Admin Notes</h3>
                <p className="mt-0.5 text-[11px] text-slate-400">Private working notes for your team</p>
              </div>
              {selected.updatedAt && <span className="text-[9px] text-slate-400">Last updated {displayDateTime(selected.updatedAt)}</span>}
            </div>
            {!noteDraft.trim() && <p className="mt-3 rounded-xl border border-dashed border-white/10 px-3 py-3 text-xs text-slate-400">No notes added yet.</p>}
            <textarea value={noteDraft} onChange={(event) => { setNoteDraft(event.target.value); setSaveError(""); setSaveSuccess(""); }} maxLength={5000} rows={5} placeholder="Add a private note..." className="dark-input mt-3 w-full resize-y rounded-xl p-3 text-xs leading-relaxed text-slate-200 outline-none placeholder:text-slate-500"/>
            <p className="mt-1 text-right text-[10px] text-slate-500">{noteDraft.length}/5000</p>
          </section>

          {saveError && <p role="alert" className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-300">{saveError}</p>}
          {saveSuccess && <p role="status" className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">{saveSuccess}</p>}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
          <span className="text-[10px] text-slate-400">Status, notes, and follow-up are stored privately.</span>
          <button disabled={saving} onClick={() => saveLead(statusDraft)} className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 disabled:opacity-60">{saving ? "Saving..." : "Save changes"}</button>
        </div>
      </aside>
    </div>}
  </main>;
}
