/**
 * CommonRepairsSection — presents the most frequent repair problems for a locality.
 * Pure presentation: receives ScenarioSection, renders it. No logic.
 */

import { Wrench } from "lucide-react";
import type { ScenarioSection } from "@/lib/seoConfigs/scenario-templates.ts";

interface CommonRepairsSectionProps {
  section: ScenarioSection;
}

export default function CommonRepairsSection({ section }: CommonRepairsSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
        <Wrench className="size-4 text-primary shrink-0" aria-hidden="true" />
        {section.heading}
      </h3>
      <ul className="space-y-2">
        {section.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
