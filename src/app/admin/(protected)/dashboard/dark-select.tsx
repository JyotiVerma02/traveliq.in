"use client";

import { createPortal } from "react-dom";
import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export type SelectOption = { label: string; value: string; tone?: "blue" | "amber" | "green" | "red" };

const toneClasses = {
  blue: "bg-cyan-400",
  amber: "bg-amber-400",
  green: "bg-emerald-400",
  red: "bg-rose-400",
};

export default function DarkSelect({
  value,
  options,
  onChange,
  ariaLabel,
}: {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  ariaLabel: string;
}) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === value));

  function showMenu() {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const estimatedHeight = Math.min(options.length * 39 + 12, 256);
    const top = rect.bottom + estimatedHeight + 8 > window.innerHeight
      ? Math.max(8, rect.top - estimatedHeight - 8)
      : rect.bottom + 8;
    setPosition({ top, left: rect.left, width: Math.min(Math.max(rect.width, 192), window.innerWidth - 24) });
    setOpen(true);
  }

  function closeMenu(restoreFocus = false) {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => triggerRef.current?.focus());
  }

  useEffect(() => {
    if (!open) return;
    const rect = triggerRef.current?.getBoundingClientRect();
    if (rect) {
      const menuHeight = menuRef.current?.getBoundingClientRect().height ?? Math.min(options.length * 39 + 12, 256);
      const top = rect.bottom + menuHeight + 8 > window.innerHeight
        ? Math.max(8, rect.top - menuHeight - 8)
        : rect.bottom + 8;
      setPosition({ top, left: rect.left, width: Math.min(Math.max(rect.width, 192), window.innerWidth - 24) });
    }
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target) && !menuRef.current?.contains(target)) closeMenu();
    };
    const onViewportChange = () => {
      const nextRect = triggerRef.current?.getBoundingClientRect();
      if (nextRect) setPosition({ top: nextRect.bottom + 8, left: nextRect.left, width: Math.min(Math.max(nextRect.width, 192), window.innerWidth - 24) });
    };
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onViewportChange);
    window.addEventListener("scroll", onViewportChange, true);
    requestAnimationFrame(() => menuRef.current?.querySelector<HTMLElement>(`[data-index="${selectedIndex}"]`)?.focus());
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onViewportChange);
      window.removeEventListener("scroll", onViewportChange, true);
    };
  }, [open, selectedIndex, options.length]);

  function handleMenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Tab") {
      closeMenu();
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End", "Escape"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Escape") {
      event.stopPropagation();
      closeMenu(true);
      return;
    }
    const current = Number((event.target as HTMLElement).dataset.index ?? selectedIndex);
    const next = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1
      : (current + (event.key === "ArrowDown" ? 1 : -1) + options.length) % options.length;
    menuRef.current?.querySelector<HTMLElement>(`[data-index="${next}"]`)?.focus();
  }

  function selectOption(option: SelectOption) {
    onChange(option.value);
    closeMenu(true);
  }

  return <div ref={rootRef} className="relative min-w-0 flex-1">
    <button
      ref={triggerRef}
      type="button"
      aria-label={ariaLabel}
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-controls={id}
      onClick={() => open ? closeMenu() : showMenu()}
      onKeyDown={(event) => {
        if (["ArrowDown", "Enter", " "].includes(event.key)) {
          event.preventDefault();
          if (!open) showMenu();
        }
      }}
      className="flex h-10 w-full items-center justify-between gap-3 rounded-xl border border-slate-400/15 bg-[#0b1725] px-3 text-left text-xs text-slate-200 shadow-[inset_3px_3px_7px_rgba(0,0,0,.2),inset_-2px_-2px_6px_rgba(111,156,211,.025)] transition hover:border-slate-300/25 focus-visible:border-blue-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/15"
    >
      <span className="flex min-w-0 items-center gap-2">
        {options[selectedIndex]?.tone && <span className={`h-2 w-2 shrink-0 rounded-full ${toneClasses[options[selectedIndex].tone!]}`} />}
        <span className="truncate">{options[selectedIndex]?.label}</span>
      </span>
      <ChevronDown size={14} className={`shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
    {open && typeof document !== "undefined" && createPortal(
      <div
        ref={menuRef}
        id={id}
        role="listbox"
        aria-label={ariaLabel}
        onKeyDown={handleMenuKeyDown}
        className="fixed z-[100] max-h-64 overflow-y-auto rounded-xl border border-slate-300/15 bg-[#101e2e] p-1.5 shadow-[0_18px_44px_rgba(0,0,0,.5),inset_0_1px_0_rgba(255,255,255,.045)] outline-none admin-scrollbar"
        style={{ top: position.top, left: Math.max(12, Math.min(position.left, window.innerWidth - position.width - 12)), width: position.width }}
      >
        {options.map((option, index) => <button
          key={option.value}
          type="button"
          role="option"
          aria-selected={option.value === value}
          data-index={index}
          onClick={() => selectOption(option)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              selectOption(option);
            }
          }}
          className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-xs transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/25 ${option.value === value ? "bg-[#20334a] text-white" : "text-slate-300 hover:bg-white/[0.055] hover:text-white"}`}
        >
          {option.tone ? <span className={`h-2 w-2 shrink-0 rounded-full ${toneClasses[option.tone]}`} /> : <span className="h-2 w-2 shrink-0" />}
          <span className="min-w-0 flex-1 whitespace-nowrap">{option.label}</span>
          {option.value === value && <Check size={14} className="shrink-0 text-orange-300" />}
        </button>)}
      </div>,
      document.body,
    )}
  </div>;
}
