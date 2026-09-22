import { ClipboardList } from "lucide-react";

export const SHOW_DOC_BADGES = false;

export function DocBadge({ label }: { label?: string }) {
  if (!SHOW_DOC_BADGES) return null;
  const text = label ? `Principal's list · ${label}` : "Principal's list";
  return (
    <span className="mb-2 inline-flex items-center gap-1.5 rounded border border-dashed border-[var(--sun-700)]/40 bg-[var(--sun-100)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--sun-700)]">
      <ClipboardList size={12} strokeWidth={1.8} />
      {text}
    </span>
  );
}
