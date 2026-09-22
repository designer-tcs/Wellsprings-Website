import { useState, type FormEvent } from "react";
import { PhoneField } from "@/components/page/PhoneField";
import { VisitDateTimeField } from "@/components/page/VisitDateTimeField";
import { GRADE_OPTIONS } from "@/lib/leads/grade";
import { enquiryFormSchema } from "@/lib/leads/schemas";
import { submitEnquiry } from "@/lib/leads/submit-lead";

function Field({
  label, name, type = "text", required, placeholder, textarea, maxLength,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean; maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--grey-700)]">
        {label}{required && <span className="ml-1 text-[var(--coral-600)]">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={4} maxLength={maxLength}
          className="mt-2 w-full border border-[var(--grey-300)] bg-white px-4 py-3 text-[15px] text-[var(--ws-ink)] outline-none transition-colors focus:border-[var(--ws-ink)]" />
      ) : (
        <input type={type} name={name} required={required} placeholder={placeholder} maxLength={maxLength}
          className="mt-2 h-11 w-full border border-[var(--grey-300)] bg-white px-4 py-3 text-[15px] text-[var(--ws-ink)] outline-none transition-colors focus:border-[var(--ws-ink)]" />
      )}
    </label>
  );
}

function SelectField({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--grey-700)]">
        {label}{required && <span className="ml-1 text-[var(--coral-600)]">*</span>}
      </span>
      <select name={name} required={required} defaultValue=""
        className="mt-2 h-11 w-full border border-[var(--grey-300)] bg-white px-4 text-[15px] text-[var(--ws-ink)] outline-none transition-colors focus:border-[var(--ws-ink)]">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | undefined>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPhoneError(undefined);
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      parentFirstName: String(fd.get("parentFirstName") ?? ""),
      parentLastName: String(fd.get("parentLastName") ?? ""),
      phone,
      email: String(fd.get("email") ?? ""),
      childName: String(fd.get("childName") ?? ""),
      grade: String(fd.get("grade") ?? ""),
      visitTime: String(fd.get("visitTime") ?? "") || undefined,
      message: String(fd.get("message") ?? "") || undefined,
    };

    const result = enquiryFormSchema.safeParse(payload);
    if (!result.success) {
      const phoneIssue = result.error.issues.find((issue) => issue.path[0] === "phone");
      if (phoneIssue) setPhoneError(phoneIssue.message);
      setError(phoneIssue ? null : "Please check the form and try again.");
      setSubmitting(false);
      return;
    }

    try {
      await submitEnquiry(result.data);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-[var(--grey-300)] bg-white p-8">
        <p className="font-serif text-2xl text-[var(--ws-ink)]">Thank you — we've got your details.</p>
        <p className="mt-3 text-[15px] leading-[1.7] text-[var(--grey-700)]">
          Our admissions team will be in touch within one working day to confirm a visit time. If it's urgent, call us on 063663 61707.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Parent first name" name="parentFirstName" required maxLength={50} />
        <Field label="Parent last name" name="parentLastName" required maxLength={50} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <PhoneField
          label="Phone"
          required
          value={phone}
          onChange={(next) => {
            setPhone(next);
            if (phoneError) setPhoneError(undefined);
          }}
          error={phoneError}
          id="enquiry-phone"
        />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Child's name" name="childName" required maxLength={100} />
        <SelectField label="Grade applying for" name="grade" required options={[...GRADE_OPTIONS]} />
      </div>
      <VisitDateTimeField />
      <Field label="Anything you'd like us to know" name="message" textarea placeholder="A line about your child, a question, a constraint." />
      {error && (
        <p className="text-[14px] text-[var(--coral-600)]" role="alert">{error}</p>
      )}
      <button type="submit" disabled={submitting}
        className="mt-2 inline-flex w-fit items-center gap-2 bg-[var(--ws-ink)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--coral-600)] disabled:cursor-not-allowed disabled:opacity-60">
        {submitting ? "Sending…" : "Request a visit"}
      </button>
      <p className="text-[12px] text-[var(--grey-700)]">
        We use your details only to plan your visit. We don't add you to a marketing list.
      </p>
    </form>
  );
}
