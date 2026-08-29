/**
 * RepairScenarioSection — orchestrating presentation component for repair scenario content.
 *
 * Presentation-only: receives RepairScenarioOutput data prop, renders populated sections.
 * No business logic, no URL construction, no engine calls inside this component.
 */

import type { RepairScenarioOutput } from "@/lib/seoConfigs/repair-scenario-engine.ts";
import CommonRepairsSection from "./CommonRepairsSection.tsx";
import TechnicianInsightsSection from "./TechnicianInsightsSection.tsx";
import MaintenanceSection from "./MaintenanceSection.tsx";
import type { ScenarioSection } from "@/lib/seoConfigs/scenario-templates.ts";

interface RepairScenarioSectionProps {
  data: RepairScenarioOutput;
}

/** Generic section renderer for sections without a dedicated component */
function GenericScenarioSection({ section }: { section: ScenarioSection }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-3">{section.heading}</h3>
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

export default function RepairScenarioSection({ data }: RepairScenarioSectionProps) {
  const hasContent = Object.values(data).some((v) => v !== undefined);
  if (!hasContent) return null;

  return (
    <section className="py-12 lg:py-16 bg-background" aria-label="Repair scenario details">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {data.commonRepairs && <CommonRepairsSection section={data.commonRepairs} />}
          {data.furnitureTypes && <GenericScenarioSection section={data.furnitureTypes} />}
          {data.causes && <GenericScenarioSection section={data.causes} />}
          {data.technicianInsights && <TechnicianInsightsSection section={data.technicianInsights} />}
          {data.materials && <GenericScenarioSection section={data.materials} />}
          {data.maintenance && <MaintenanceSection section={data.maintenance} />}
          {data.repairVsReplace && <GenericScenarioSection section={data.repairVsReplace} />}
        </div>
      </div>
    </section>
  );
}
