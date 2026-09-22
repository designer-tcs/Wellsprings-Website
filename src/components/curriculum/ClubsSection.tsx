import { TreePine, Heart, BookOpen } from "lucide-react";
import { SectionShell } from "@/components/page/Primitives";
import { OfferingCards, type Offering } from "@/components/curriculum/blocks";

const CLUBS: Offering[] = [
  {
    name: "Eco Club",
    note: "Looks after the school garden, runs the seed-ball drive, and asks honest questions about waste and water.",
    icon: TreePine,
  },
  {
    name: "Health & Wellness Club",
    note: "Morning movement, peer check-ins, and the quieter practices — breath, sleep, food.",
    icon: Heart,
  },
  {
    name: "Literary Club",
    note: "Reads together, writes together, and runs the open-mic, debate and storytelling moments through the year.",
    icon: BookOpen,
  },
];

export function ClubsSection() {
  return (
    <SectionShell
      background="paper"
      eyebrow="Clubs"
      pillar="Belong"
      title="Three clubs, child-led, year-round."
      intro={
        <p>
          Smaller than events, steadier than units — clubs meet through the year and become the
          place a child finds their first specific interest, and the friends who share it.
        </p>
      }
    >
      <OfferingCards items={CLUBS} pillar="Belong" cols={3} />
    </SectionShell>
  );
}
