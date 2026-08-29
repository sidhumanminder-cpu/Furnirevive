import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";

type BeforeAfterItem = {
  oldFabric: string;
  newFabric: string;
  sofaType: string;
  completionTime: string;
  location?: string;
};

const BEFORE_AFTER_EXAMPLES: BeforeAfterItem[] = [
  {
    oldFabric: "Torn velvet, faded burgundy",
    newFabric: "Premium leatherette, charcoal grey",
    sofaType: "3-seater sofa",
    completionTime: "4 days",
    location: "DLF Phase 4, Gurgaon",
  },
  {
    oldFabric: "Worn polyester, sagging cushions",
    newFabric: "36D foam + chenille fabric, olive green",
    sofaType: "L-shaped sectional",
    completionTime: "6 days",
    location: "Sector 56, Gurgaon",
  },
  {
    oldFabric: "Cat-scratched suede",
    newFabric: "Microfiber, dark navy (pet-proof)",
    sofaType: "2-seater + 3-seater set",
    completionTime: "5 days",
    location: "Golf Course Extension, Gurgaon",
  },
  {
    oldFabric: "Sun-faded linen, broken springs",
    newFabric: "Jacquard fabric + 40D foam replacement",
    sofaType: "5-seater sofa",
    completionTime: "7 days",
    location: "Sushant Lok, Gurgaon",
  },
  {
    oldFabric: "Stained velvet, flat cushions",
    newFabric: "Bouclé fabric, ivory white + 36D foam",
    sofaType: "Chesterfield sofa",
    completionTime: "5 days",
    location: "Nirvana Country, Gurgaon",
  },
  {
    oldFabric: "Ripped leatherette, yellowed arms",
    newFabric: "Premium leatherette, dark espresso brown",
    sofaType: "Recliner (3-seat)",
    completionTime: "6 days",
    location: "Sector 49, Gurgaon",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            Before & After Transformations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real upholstery jobs completed across Gurgaon — showing old fabric, new material, and completion time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BEFORE_AFTER_EXAMPLES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Card className="h-full">
                <CardContent className="py-5 flex flex-col gap-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {item.sofaType}
                  </p>

                  <div className="flex items-start gap-3">
                    <div className="flex-1 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900 px-3 py-2">
                      <p className="text-xs text-red-600 dark:text-red-400 font-medium mb-0.5">Before</p>
                      <p className="text-xs text-foreground/80">{item.oldFabric}</p>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground mt-3 shrink-0" />
                    <div className="flex-1 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900 px-3 py-2">
                      <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-0.5">After</p>
                      <p className="text-xs text-foreground/80">{item.newFabric}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t border-border">
                    <span>⏱ {item.completionTime}</span>
                    {item.location && <span>📍 {item.location}</span>}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
