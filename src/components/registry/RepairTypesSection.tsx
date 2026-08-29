import { Wrench } from "lucide-react";
import type { RepairTypesSectionData } from "@/lib/content-engine/index.ts";

export default function RepairTypesSection({ section }: { section: RepairTypesSectionData }) {
  const { heading, problems } = section.props;

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{heading}</h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Wrench className="size-4 text-primary" />
              </span>
              <span className="text-sm font-medium text-foreground">{problem.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
