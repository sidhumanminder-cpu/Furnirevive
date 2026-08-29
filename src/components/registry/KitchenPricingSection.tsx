import type { KitchenPricingSectionData } from "@/lib/content-engine/index.ts";
import { CheckCircle2 } from "lucide-react";

export default function KitchenPricingSection({
  section,
}: {
  section: KitchenPricingSectionData;
}) {
  const { heading, rows, whatsIncluded, disclaimer } = section.props;
  return (
    <section className="bg-muted/40 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{heading}</h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <div className="bg-card rounded-xl border overflow-hidden">
              <div className="grid grid-cols-3 bg-muted px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                <span>Kitchen Type</span>
                <span className="text-center">Price Range</span>
                <span className="text-right">Size</span>
              </div>
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-3 px-4 py-3 border-t items-center">
                  <span className="font-medium text-sm">{row.label}</span>
                  <span className="text-center text-sm font-semibold text-primary">
                    {row.priceRange}
                  </span>
                  <span className="text-right text-xs text-muted-foreground">{row.note}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">{disclaimer}</p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-card rounded-xl p-5 border">
              <h3 className="font-semibold mb-3">What's Included</h3>
              <ul className="space-y-2">
                {whatsIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
