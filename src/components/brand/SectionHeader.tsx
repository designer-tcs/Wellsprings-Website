type Props = {
  num: string;
  title: string;
  intro?: string;
};

export function SectionHeader({ num, title, intro }: Props) {
  return (
    <header className="mb-12 border-b border-[var(--ws-ink)] pb-8">
      <p className="sl-section-num text-[var(--grey-700)]">Section {num}</p>
      <h1 className="mt-3 text-5xl tracking-tight md:text-6xl">{title}</h1>
      {intro && (
        <p className="mt-5 max-w-[60ch] font-sans text-lg leading-[1.55] text-[var(--grey-800)]">
          {intro}
        </p>
      )}
    </header>
  );
}

export function SubHeader({ id, label, title }: { id?: string; label: string; title: string }) {
  return (
    <div id={id} className="mb-6 mt-14 first:mt-0">
      <p className="sl-section-num text-[var(--grey-700)]">{label}</p>
      <h2 className="mt-2 text-3xl tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}
