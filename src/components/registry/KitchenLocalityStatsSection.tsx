import type { KitchenLocalityStatsSectionData } from "@/lib/content-engine/index.ts";
import { CheckCircle } from "lucide-react";

export default function KitchenLocalityStatsSection({
  section,
}: {
  section: KitchenLocalityStatsSectionData;
}) {
  const { servingTypes, popularBudget, recommendedFinish, recommendedLayout, installationDays } =
    section.props;

  const stats = [
    { label: "Serving", value: servingTypes.join(", ") },
    { label: "Popular Budget", value: popularBudget },
    { label: "Recommended Finish", value: recommendedFinish },
    { label: "Recommended Layout", value: recommendedLayout },
    { label: "Est. Installation", value: installationDays },
  ];

  return (
    <section className="bg-amber-50 dark:bg-amber-950/30 border-y border-amber-100 dark:border-amber-900">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-4 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex items-start gap-2 min-w-0">
              <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div>
                <span className="text-xs text-stone-500 dark:text-stone-400 block">{s.label}</span>
                <span className="text-sm font-semibold text-stone-800 dark:text-stone-200">{s.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
