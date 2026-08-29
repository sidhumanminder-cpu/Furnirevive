import { CheckCircle2, Building2 } from "lucide-react";
import { motion } from "motion/react";
import type { ServiceCoverageSectionData } from "@/lib/content-engine/index.ts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
} as const;

const chipVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
} as const;

export default function ServiceCoverageRegistrySection({
  section,
}: {
  section: ServiceCoverageSectionData;
}) {
  const { heading, coverageTypes } = section.props;

  return (
    <section className="py-10 lg:py-12 bg-primary/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            {heading}
          </h2>
          <p className="mt-2 text-muted-foreground">
            We come to you, wherever you are.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {coverageTypes.map((type) => (
            <motion.div
              key={type.label}
              variants={chipVariants}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-background p-3 transition-colors hover:bg-secondary/20"
            >
              <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-green-600" />
              <span className="text-sm font-medium text-foreground">
                {type.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-5 text-xs text-muted-foreground"
        >
          Society gate procedures handled. No need to move your furniture.
        </motion.p>
      </div>
    </section>
  );
}
