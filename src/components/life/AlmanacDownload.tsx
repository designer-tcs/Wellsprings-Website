import { Download, FileText } from "lucide-react";
import almanacAsset from "@/assets/wellsprings-almanac.pdf?url";

export function AlmanacDownload() {
  return (
    <div className="flex flex-col gap-6 border border-[var(--grey-200)] bg-white p-7 md:flex-row md:items-center md:justify-between md:p-9">
      <div className="flex items-start gap-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--sun-100)]">
          <FileText size={22} strokeWidth={1.5} className="text-[var(--sun-700)]" />
        </span>
        <div>
          <h3 className="font-serif text-2xl leading-[1.2]">The school almanac</h3>
          <p className="mt-2 max-w-[52ch] text-[15px] leading-[1.7] text-[var(--grey-800)]">
            School timings, the term calendar, holidays, uniform and the day-to-day guidelines
            families ask about most — in one document you can keep on your phone.
          </p>
        </div>
      </div>
      <a
        href={almanacAsset}
        download="wellsprings-almanac.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center justify-center gap-2 bg-[var(--ws-ink)] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[var(--sage-700)]"
      >
        <Download size={16} strokeWidth={1.7} />
        Download the almanac
      </a>
    </div>
  );
}
