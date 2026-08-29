import type { KitchenComparisonSectionData } from "@/lib/content-engine/index.ts";

const VALUE_DISPLAY: Record<"yes" | "no" | "partial", { icon: string; className: string }> = {
  yes: { icon: "✅", className: "text-green-600" },
  no: { icon: "❌", className: "text-red-500" },
  partial: { icon: "⚠️", className: "text-amber-500" },
};

export default function KitchenComparisonSection({
  section,
}: {
  section: KitchenComparisonSectionData;
}) {
  const { heading, subheading, options, rows, footnote } = section.props;
  return (
    <section className="py-14 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-4 font-semibold text-foreground w-2/5">Feature</th>
                {options.map((opt) => (
                  <th
                    key={opt.id}
                    className={`text-center px-5 py-4 font-semibold ${
                      opt.id === "modular"
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {opt.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-border last:border-0 ${i % 2 === 1 ? "bg-muted/20" : ""}`}
                >
                  <td className="px-5 py-3.5 font-medium text-foreground">{row.feature}</td>
                  {options.map((opt) => {
                    const val = (row.values[opt.id] ?? "partial") as "yes" | "no" | "partial";
                    const display = VALUE_DISPLAY[val];
                    return (
                      <td key={opt.id} className={`text-center px-5 py-3.5 text-base ${display.className}`}>
                        {display.icon}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm text-muted-foreground italic leading-relaxed max-w-3xl mx-auto">
          {footnote}
        </p>
      </div>
    </section>
  );
}
