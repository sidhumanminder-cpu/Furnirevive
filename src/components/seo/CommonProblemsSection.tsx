import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { COMMON_PROBLEMS } from "@/lib/seoConfigs/repair-data.ts";

interface CommonProblemsSectionProps {
  locality: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

export default function CommonProblemsSection({ locality }: CommonProblemsSectionProps) {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Common Problems
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Common Sofa Problems We Repair in {locality}
          </h2>
          <p className="mt-3 text-muted-foreground">
            Recognise any of these? We fix all of them at your doorstep.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {COMMON_PROBLEMS.map((problem) => (
            <motion.div
              key={problem.label}
              variants={itemVariants}
              className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:bg-secondary/20"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
              <span className="text-sm font-medium text-foreground">
                {problem.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
