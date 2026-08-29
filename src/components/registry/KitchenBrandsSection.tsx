import type { KitchenBrandsSectionData } from "@/lib/content-engine/index.ts";
import { CheckCircle2 } from "lucide-react";

export default function KitchenBrandsSection({
  section,
}: {
  section: KitchenBrandsSectionData;
}) {
  const { heading, subheading, brands } = section.props;
  return (
    <section className="py-14 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brands.map((brand) => (
            <div key={brand.id} className="bg-card border rounded-xl p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{brand.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{brand.origin}</p>
                </div>
                <span
                  className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
                    brand.tier === "premium"
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {brand.tier === "premium" ? "Premium" : "Value"}
                </span>
              </div>
              <p className="text-sm italic text-muted-foreground mb-4">{brand.tagline}</p>
              <p className="text-xs font-medium text-foreground mb-2 uppercase tracking-wide">
                Typical use
              </p>
              <p className="text-sm text-muted-foreground mb-4">{brand.typicalUse}</p>
              <ul className="space-y-1.5">
                {brand.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
