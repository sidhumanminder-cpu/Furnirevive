import { Scale } from "lucide-react";
import type { ComparisonSectionData } from "@/lib/content-engine/index.ts";

export default function ComparisonSection({ section }: { section: ComparisonSectionData }) {
  const { heading, subheading, rows, conclusion } = section.props;

  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <Scale className="size-6 text-primary shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-muted-foreground mb-8 ml-9">{subheading}</p>

        <div className="rounded-xl border border-border overflow-hidden mb-6">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-primary/10">
                <th className="px-5 py-3 font-semibold text-foreground w-[30%]">Aspect</th>
                <th className="px-5 py-3 font-semibold text-primary">Repair with FurniRevive</th>
                <th className="px-5 py-3 font-semibold text-muted-foreground">Buy New</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.aspect} className={i % 2 === 0 ? "bg-background" : "bg-secondary/40"}>
                  <td className="px-5 py-4 font-semibold text-foreground">{row.aspect}</td>
                  <td className="px-5 py-4 text-foreground/90">{row.repair}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row.replace}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground italic ml-1">{conclusion}</p>
      </div>
    </section>
  );
}
