import { Link } from "react-router-dom";
import { Wrench, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { SERVICES_GRID } from "@/lib/seoConfigs/repair-data.ts";

interface ServicesGridSectionProps {
  locality: string;
  localitySlug?: string;
}

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

export default function ServicesGridSection({
  locality,
  localitySlug,
}: ServicesGridSectionProps) {
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Services
        </p>

        {/* Heading */}
        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground lg:text-4xl">
          What We Repair in {locality}
        </h2>

        {/* Subheading */}
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Expert doorstep repair for every type of sofa damage in {locality}
        </p>

        {/* Grid */}
        <motion.div
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SERVICES_GRID.map((service) => (
            <motion.div key={service.slug + service.name} variants={cardVariants}>
              <Link
                to={service.slug}
                aria-label={`${service.name} in ${locality}`}
                className="block h-full"
              >
                <Card className="h-full cursor-pointer transition-shadow duration-200 hover:shadow-md">
                  <CardContent className="flex h-full flex-col gap-3">
                    <Wrench className="h-5 w-5 text-primary" />

                    <span className="font-semibold text-foreground">
                      {service.name}
                    </span>

                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>

                    <span className="text-xs text-muted-foreground/70">
                      Available in {locality}
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
