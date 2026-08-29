import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import type { WhyChooseSectionData } from "@/lib/content-engine/index.ts";

export default function WhyChooseSection({ section }: { section: WhyChooseSectionData }) {
  const { heading, items } = section.props;

  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
          {heading}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease: "easeOut" as const }}
            >
              <Card className="h-full">
                <CardContent className="py-6">
                  <CheckCircle2 className="size-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
