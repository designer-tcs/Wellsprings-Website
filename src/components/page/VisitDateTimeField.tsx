import { useMemo, useState } from "react";
import { format, isBefore, startOfToday } from "date-fns";
import { CalendarDays } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const TIME_SLOTS = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
] as const;

function formatTimeLabel(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return format(date, "h:mm a");
}

function formatVisitDateTimeIso(date: Date, time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const combined = new Date(date);
  combined.setHours(hours, minutes, 0, 0);
  // Zoho CRM expects ISO 8601 with timezone (Asia/Kolkata).
  return `${format(combined, "yyyy-MM-dd'T'HH:mm:ss")}+05:30`;
}

const fieldCls =
  "mt-2 flex h-11 w-full items-center border border-[var(--grey-300)] bg-white px-4 text-[15px] text-[var(--ws-ink)] outline-none transition-colors hover:border-[var(--ws-ink)] focus:border-[var(--ws-ink)]";

export function VisitDateTimeField({
  name = "visitTime",
  required,
}: {
  name?: string;
  required?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const today = useMemo(() => startOfToday(), []);

  const value = date && time ? formatVisitDateTimeIso(date, time) : "";

  return (
    <div>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--grey-700)]">
        Preferred visit time
        {required && <span className="ml-1 text-[var(--coral-600)]">*</span>}
      </span>
      <div className="grid gap-3 sm:grid-cols-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button type="button" className={`${fieldCls} justify-between text-left`}>
              <span className={date ? "text-[var(--ws-ink)]" : "text-[var(--grey-500)]"}>
                {date ? format(date, "d MMM yyyy") : "Choose a date"}
              </span>
              <CalendarDays size={16} strokeWidth={1.6} className="shrink-0 text-[var(--grey-700)]" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-auto rounded-none border-[var(--grey-300)] bg-[var(--ws-paper)] p-0"
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={(next) => {
                setDate(next);
                setOpen(false);
              }}
              disabled={(day) => isBefore(day, today) || day.getDay() === 0}
              defaultMonth={date ?? today}
            />
          </PopoverContent>
        </Popover>

        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required={required}
          disabled={!date}
          className={`${fieldCls} disabled:cursor-not-allowed disabled:bg-[var(--grey-200)] disabled:text-[var(--grey-600)]`}
        >
          <option value="" disabled>
            Choose a time
          </option>
          {TIME_SLOTS.map((slot) => (
            <option key={slot} value={slot}>
              {formatTimeLabel(slot)}
            </option>
          ))}
        </select>
      </div>
      <input type="hidden" name={name} value={value} />
      <p className="mt-2 text-[12px] text-[var(--grey-700)]">Campus visits run Monday to Saturday, 8 am to 5 pm.</p>
    </div>
  );
}
