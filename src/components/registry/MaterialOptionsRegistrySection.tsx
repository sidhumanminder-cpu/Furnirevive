import { Layers } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import type { MaterialOptionsSectionData } from "@/lib/content-engine/index.ts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
} as const;

export default function MaterialOptionsRegistrySection({
  section,
}: {
  section: MaterialOptionsSectionData;
}) {
  const { heading, groups } = section.props;

  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Layers className="h-3.5 w-3.5" />
            Materials
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
            Choose from a wide range of fabrics, foams and leathers for your
            repair.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {groups.map((group) => (
            <motion.div key={group.category} variants={cardVariants}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground">
                    {group.category}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground before:mr-2 before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60 before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
