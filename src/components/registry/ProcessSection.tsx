import { motion } from "motion/react";
import type { ProcessSectionData } from "@/lib/content-engine/index.ts";

export default function ProcessSection({ section }: { section: ProcessSectionData }) {
  const { heading, subheading, steps } = section.props;

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
              className="relative rounded-xl border border-border bg-card p-6"
            >
              <span className="text-5xl font-black text-primary/20 leading-none select-none">
                {step.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
