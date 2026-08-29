import type { BrandsSectionData } from "@/lib/content-engine/index.ts";

export default function BrandsSection({ section }: { section: BrandsSectionData }) {
  const { heading, brands } = section.props;

  return (
    <section className="py-12 md:py-16 bg-muted/40">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{heading}</h2>

        <div className="flex flex-wrap gap-3">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="rounded-full border border-border bg-card px-4 py-2"
              title={brand.note}
            >
              <span className="text-sm font-medium text-foreground">{brand.name}</span>
              {brand.note ? (
                <span className="ml-2 text-xs text-muted-foreground">{brand.note}</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
