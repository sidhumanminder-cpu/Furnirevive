import type { KitchenLayoutsGridSectionData } from "@/lib/content-engine/index.ts";
import { ArrowRight } from "lucide-react";

export default function KitchenLayoutsGridSection({
  section,
}: {
  section: KitchenLayoutsGridSectionData;
}) {
  const { heading, layouts } = section.props;
  return (
    <section className="bg-muted/40 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{heading}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {layouts.map((layout) => (
            <a
              key={layout.slug}
              href={layout.href}
              className="bg-card rounded-xl p-5 border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group"
            >
              <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                {layout.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{layout.description}</p>
              <p className="text-xs text-muted-foreground mb-1">
                <span className="font-medium">Best for:</span> {layout.bestFor}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm font-semibold text-primary">{layout.costRange}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
