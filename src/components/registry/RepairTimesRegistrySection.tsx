import { Clock, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import type { RepairTimesSectionData } from "@/lib/content-engine/index.ts";

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

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
} as const;

function SameDayBadge({ value }: { value: "yes" | "usually" | "no" }) {
  if (value === "yes") {
    return (
      <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600">
        <CheckCircle2 className="h-4 w-4" />
        Yes
      </span>
    );
  }
  if (value === "usually") {
    return (
      <span className="text-sm font-medium text-amber-600">Usually</span>
    );
  }
  return <span className="text-sm text-muted-foreground">No</span>;
}

export default function RepairTimesRegistrySection({
  section,
}: {
  section: RepairTimesSectionData;
}) {
  const { heading, items } = section.props;

  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Clock className="h-3.5 w-3.5" />
            Turnaround
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {heading}
          </h2>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          className="hidden md:block overflow-hidden rounded-xl border border-border"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-secondary/20">
                <th className="px-5 py-3 text-sm font-semibold text-foreground">
                  Service
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-foreground">
                  Estimated Time
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-foreground">
                  Same-Day
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <motion.tr
                  key={item.service}
                  variants={rowVariants}
                  className="border-b border-border last:border-b-0"
                >
                  <td className="px-5 py-3.5 text-sm font-medium text-foreground">
                    {item.service}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">
                    {item.time}
                  </td>
                  <td className="px-5 py-3.5">
                    <SameDayBadge value={item.sameDay} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile stacked cards */}
        <motion.div
          className="grid gap-3 md:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {items.map((item) => (
            <motion.div key={item.service} variants={rowVariants}>
              <Card>
                <CardContent className="flex items-center justify-between gap-3 py-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {item.service}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                  <SameDayBadge value={item.sameDay} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
