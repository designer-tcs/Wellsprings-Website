type Slot = { time: string; title: string; note: string };

const SLOTS: Slot[] = [
  {
    time: "8:00 – 8:25 AM",
    title: "Breakfast",
    note: "The day starts at a table, not a desk. Warm food, a bit of chatter, and time to arrive properly.",
  },
  {
    time: "8:25 – 8:40 AM",
    title: "Assembly",
    note: "The whole school in one place — a thought for the day, a house announcement, a child at the mic.",
  },
  {
    time: "8:40 – 9:20 AM",
    title: "Session 1",
    note: "The first stretch, while heads are freshest — usually where the heavier thinking is put.",
  },
  {
    time: "9:20 – 10:00 AM",
    title: "Session 2",
    note: "Straight on, with the morning still on our side.",
  },
  {
    time: "10:00 – 10:15 AM",
    title: "Short break",
    note: "Fifteen minutes to stand up, step out, and let the noise out of the room.",
  },
  {
    time: "10:15 – 10:55 AM",
    title: "Session 3",
    note: "Back in, and often the one with hands in it — an experiment, a map, a problem set.",
  },
  {
    time: "10:55 – 11:35 AM",
    title: "Session 4",
    note: "The last of the morning, before the day starts thinking about lunch.",
  },
  {
    time: "11:35 AM – 12:15 PM",
    title: "Session 5",
    note: "Language, art or music often land here, when a change of gear helps.",
  },
  {
    time: "12:15 – 12:55 PM",
    title: "Session 6",
    note: "One more before the break — short enough to hold attention, long enough to finish something.",
  },
  {
    time: "12:55 – 1:30 PM",
    title: "Lunch break",
    note: "Lunch, then a wander. This is where friendships get made, more than anywhere on the timetable.",
  },
  {
    time: "1:30 – 2:10 PM",
    title: "Session 7",
    note: "The afternoon opens with something to do rather than something to sit through.",
  },
  {
    time: "2:10 – 2:50 PM",
    title: "Session 8",
    note: "The last teaching hour, and often where the week's work gets pulled together.",
  },
  {
    time: "2:50 – 3:00 PM",
    title: "Class teacher's time & pack up",
    note: "Bags, notes home, and ten minutes with the teacher who knows how the day actually went.",
  },
  {
    time: "3:00 PM",
    title: "Dispersal",
    note: "Lines, buses, gates. Children leave the way they came in — known by name.",
  },
];

export function DaySchedule() {
  return (
    <div>
      <ol className="border-t border-[var(--ws-ink)]/10">
        {SLOTS.map((s) => (
          <li
            key={s.time + s.title}
            className="grid gap-1 border-b border-[var(--ws-ink)]/10 py-5 sm:grid-cols-[170px_1fr] sm:gap-6"
          >
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--sage-700)]">
              {s.time}
            </span>
            <div>
              <h4 className="font-serif text-[19px] leading-[1.25] text-[var(--ws-ink)]">{s.title}</h4>
              <p className="mt-1 text-[14px] leading-[1.65] text-[var(--grey-800)]">{s.note}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-5 text-[13px] leading-[1.6] text-[var(--grey-600)]">
        Timings shift a little through the year, and the youngest children keep a gentler version
        of this day. The almanac carries the working timetable for your child's grade.
      </p>
    </div>
  );
}
