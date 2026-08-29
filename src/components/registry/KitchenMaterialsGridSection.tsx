import type { KitchenMaterialsGridSectionData } from "@/lib/content-engine/index.ts";
import { CheckCircle2, ArrowRight } from "lucide-react";

const DURABILITY_LABELS: Record<string, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  "very-high": "Very High",
};

export default function KitchenMaterialsGridSection({
  section,
}: {
  section: KitchenMaterialsGridSectionData;
}) {
  const { heading, materials } = section.props;
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{heading}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {materials.map((mat) => (
            <a
              key={mat.slug}
              href={mat.href}
              className="bg-card rounded-xl p-4 border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group flex flex-col"
            >
              <h3 className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">
                {mat.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{mat.finish}</p>
              <div className="text-xs text-muted-foreground mb-2">
                <span className="font-medium">Durability:</span>{" "}
                {DURABILITY_LABELS[mat.durability] ?? mat.durability}
              </div>
              <ul className="space-y-0.5 mb-3">
                {mat.pros.slice(0, 2).map((pro, i) => (
                  <li key={i} className="flex items-start gap-1 text-xs">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-semibold text-primary">{mat.costRange}</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
