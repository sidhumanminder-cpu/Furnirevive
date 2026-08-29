import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { DECISION_CATEGORIES, DECISION_SUMMARY } from "@/lib/upholsteryConfigs/decisionGuide.ts";

export default function DecisionGuide() {
  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            Should You Reupholster or Replace Your Sofa?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use this quick guide to make the right decision before spending money.
          </p>
        </div>

        {/* Quick summary cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
            <CardContent className="py-5">
              <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                <Check className="size-4" />
                {DECISION_SUMMARY.reupholster.headline}
              </h3>
              <ul className="space-y-2">
                {DECISION_SUMMARY.reupholster.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="size-3.5 text-green-600 mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800">
            <CardContent className="py-5">
              <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                <X className="size-4" />
                {DECISION_SUMMARY.replace.headline}
              </h3>
              <ul className="space-y-2">
                {DECISION_SUMMARY.replace.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                    <X className="size-3.5 text-red-600 mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Detailed rules by category */}
        <div className="space-y-8">
          {DECISION_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.07 }}
            >
              <h3 className="font-semibold text-base mb-3 text-foreground/70 uppercase tracking-wide text-sm">
                {cat.heading}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {cat.rules.map((rule) => (
                  <div
                    key={rule.condition}
                    className={`rounded-xl border px-4 py-3 flex gap-3 items-start ${
                      rule.decision === "reupholster"
                        ? "border-green-200 bg-green-50/60 dark:bg-green-950/10 dark:border-green-900"
                        : "border-red-200 bg-red-50/60 dark:bg-red-950/10 dark:border-red-900"
                    }`}
                  >
                    <span
                      className={`mt-0.5 shrink-0 rounded-full p-0.5 ${
                        rule.decision === "reupholster"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {rule.icon === "check" ? <Check className="size-4" /> : <X className="size-4" />}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{rule.condition}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{rule.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
