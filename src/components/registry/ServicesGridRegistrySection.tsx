import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Wrench, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import type { ServicesGridSectionData } from "@/lib/content-engine/index.ts";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
} as const;

export default function ServicesGridRegistrySection({
  section,
}: {
  section: ServicesGridSectionData;
}) {
  const { heading, localityName, items } = section.props;

  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Services
        </p>

        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground lg:text-4xl">
          {heading}
        </h2>

        <p className="mt-2 max-w-2xl text-muted-foreground">
          Expert doorstep repair for every type of furniture in {localityName}
        </p>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {items.map((item) => (
            <motion.div key={item.slug + item.name} variants={cardVariants}>
              <Link
                to={item.slug}
                aria-label={`${item.name} in ${localityName}`}
                className="block h-full"
              >
                <Card className="h-full cursor-pointer transition-shadow duration-200 hover:shadow-md">
                  <CardContent className="flex h-full flex-col gap-3">
                    <Wrench className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">
                      {item.name}
                    </span>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <span className="text-xs text-muted-foreground/70">
                      Available in {localityName}
                    </span>
                    <ArrowRight className="mt-auto h-4 w-4 text-primary" />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
