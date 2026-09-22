import { useState, type ReactNode } from "react";
import { PhoneField } from "@/components/page/PhoneField";
import { GRADE_OPTIONS } from "@/lib/leads/grade";
import { submitVisitBooking } from "@/lib/leads/submit-lead";
import { visitBookingFormSchema } from "@/lib/leads/schemas";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const labelCls =
  "font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--grey-700)]";
const inputCls =
  "mt-2 h-11 w-full border border-[var(--grey-300)] bg-white px-4 text-[15px] text-[var(--ws-ink)] outline-none transition-colors focus:border-[var(--ws-ink)]";

export function VisitDialog({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [phone, setPhone] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const fd = new FormData(e.currentTarget);
    const result = visitBookingFormSchema.safeParse({
      studentName: String(fd.get("studentName") ?? ""),
      parentFirstName: String(fd.get("parentFirstName") ?? ""),
      parentLastName: String(fd.get("parentLastName") ?? ""),
      phone,
      grade: String(fd.get("grade") ?? ""),
      comments: String(fd.get("comments") ?? ""),
    });

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      await submitVisitBooking(result.data);
      setSent(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again or call us.";
      const issues = err instanceof Error && "issues" in err ? (err as Error & { issues?: Array<{ field: string; message: string }> }).issues : undefined;
      if (issues?.length) {
        const next: Record<string, string> = {};
        for (const issue of issues) next[issue.field] = issue.message;
        setErrors(next);
      } else {
        setFormError(message);
      }
    } finally {
      setSubmitting(false);
    }
  }

  function onOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setSent(false);
      setErrors({});
      setFormError(null);
      setSubmitting(false);
      setPhone("");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[440px] rounded-none border-[var(--grey-300)] bg-[var(--ws-paper)]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-normal text-[var(--ws-ink)]">
            Book your visit
          </DialogTitle>
          <DialogDescription className="text-[15px] leading-[1.6] text-[var(--grey-700)]">
            Leave your details and we will call you to schedule a visit.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="py-2">
            <p className="font-serif text-xl text-[var(--ws-ink)]">Thank you.</p>
            <p className="mt-2 text-[15px] leading-[1.7] text-[var(--grey-700)]">
              We have your details. Someone from admissions will call you to schedule a
              visit. If it is urgent, call us on 063663 61707.
            </p>
          </div>
        ) : (
          <form className="grid gap-4" onSubmit={onSubmit} noValidate>
            <label className="block">
              <span className={labelCls}>Student's name</span>
              <input name="studentName" maxLength={100} className={inputCls} />
              {errors.studentName && (
                <span className="mt-1 block text-[12px] text-[var(--coral-600)]">
                  {errors.studentName}
                </span>
              )}
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className={labelCls}>
                  Parent first name<span className="ml-1 text-[var(--coral-600)]">*</span>
                </span>
                <input name="parentFirstName" required maxLength={50} className={inputCls} />
                {errors.parentFirstName && (
                  <span className="mt-1 block text-[12px] text-[var(--coral-600)]">
                    {errors.parentFirstName}
                  </span>
                )}
              </label>
              <label className="block">
                <span className={labelCls}>
                  Parent last name<span className="ml-1 text-[var(--coral-600)]">*</span>
                </span>
                <input name="parentLastName" required maxLength={50} className={inputCls} />
                {errors.parentLastName && (
                  <span className="mt-1 block text-[12px] text-[var(--coral-600)]">
                    {errors.parentLastName}
                  </span>
                )}
              </label>
            </div>
            <PhoneField
              label="Mobile number"
              required
              value={phone}
              onChange={(next) => {
                setPhone(next);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
              }}
              error={errors.phone}
              id="visit-phone"
            />
            <label className="block">
              <span className={labelCls}>
                Grade applying for<span className="ml-1 text-[var(--coral-600)]">*</span>
              </span>
              <select name="grade" required defaultValue="" className={inputCls}>
                <option value="" disabled>
                  Select…
                </option>
                {GRADE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.grade && (
                <span className="mt-1 block text-[12px] text-[var(--coral-600)]">
                  {errors.grade}
                </span>
              )}
            </label>
            <label className="block">
              <span className={labelCls}>Comments</span>
              <textarea
                name="comments"
                rows={3}
                maxLength={500}
                placeholder="A preferred day or time, a question, anything else."
                className="mt-2 w-full border border-[var(--grey-300)] bg-white px-4 py-3 text-[15px] text-[var(--ws-ink)] outline-none transition-colors focus:border-[var(--ws-ink)]"
              />
            </label>
            {formError && (
              <p className="text-[14px] text-[var(--coral-600)]" role="alert">{formError}</p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="mt-1 inline-flex w-fit items-center gap-2 bg-[var(--coral-600)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--coral-700)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request a call back"}
            </button>
            <p className="text-[12px] text-[var(--grey-700)]">
              We will call you to schedule a visit.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
