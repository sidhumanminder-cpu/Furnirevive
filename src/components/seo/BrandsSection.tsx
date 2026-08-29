import { Award } from "lucide-react";
import { motion } from "motion/react";
import { BRANDS } from "@/lib/seoConfigs/repair-data.ts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
} as const;

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
} as const;

export default function BrandsSection() {
  return (
    <section className="py-12 lg:py-16 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Award className="h-3.5 w-3.5" />
            Brand Expertise
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Brands We Repair
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
            Our technicians are experienced with all major furniture brands available in India.
          </p>
        </motion.div>

        {/* Brand Chips */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {BRANDS.map((brand) => (
            <motion.span
              key={brand.name}
              variants={chipVariants}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/5"
            >
              {brand.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 text-center text-xs text-muted-foreground"
        >
          We repair furniture from all brands. Brand names are used for reference only.
        </motion.p>
      </div>
    </section>
  );
}
