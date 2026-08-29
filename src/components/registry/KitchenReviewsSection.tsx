import type { KitchenReviewsSectionData } from "@/lib/content-engine/index.ts";

export default function KitchenReviewsSection({
  section,
}: {
  section: KitchenReviewsSectionData;
}) {
  const { heading, subheading, items } = section.props;
  return (
    <section className="py-14 bg-amber-50/40 dark:bg-stone-950">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
          <p className="text-muted-foreground">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((review) => (
            <div
              key={review.id}
              className="bg-card border rounded-xl p-5 flex flex-col gap-3 shadow-sm"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl leading-none ${i < review.stars ? "text-amber-500" : "text-muted-foreground/30"}`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="text-sm text-foreground/80 italic leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-auto pt-3 border-t border-border">
                <p className="font-semibold text-sm text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{review.area} · {review.kitchenType}</p>
                {review.budgetRange && (
                  <span className="mt-2 inline-block rounded-full bg-primary/10 text-primary text-xs px-2 py-0.5 font-medium">
                    Project: {review.budgetRange}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
