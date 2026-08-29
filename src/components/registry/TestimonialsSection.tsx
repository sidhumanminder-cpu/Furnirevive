import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import type { TestimonialsSectionData } from "@/lib/content-engine/index.ts";

export default function TestimonialsSection({ section }: { section: TestimonialsSectionData }) {
  const { heading, items } = section.props;

  if (items.length === 0) return null;

  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <Star className="size-6 text-amber-400 fill-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease: "easeOut" as const }}
            >
              <Card className="h-full">
                <CardContent className="py-5 flex flex-col gap-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`size-4 ${s < t.rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`}
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote className="size-5 text-primary/20 absolute -top-1 -left-0.5" />
                    <p className="text-sm text-foreground/85 leading-relaxed pl-5">{t.text}</p>
                  </div>
                  <div className="mt-auto pt-2 border-t border-border">
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.location}{t.service ? ` \u00B7 ${t.service}` : ""}
                    </p>
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
