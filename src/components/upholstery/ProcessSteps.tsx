import { motion } from "motion/react";
import { Search, Palette, Truck, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { UPHOLSTERY_PROCESS_STEPS } from "@/lib/upholsteryConfigs/upholsteryPricing.ts";

const ICON_MAP: Record<string, LucideIcon> = {
  search: Search,
  palette: Palette,
  truck: Truck,
  check: CheckCircle2,
};

export default function ProcessSteps() {
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            How the Upholstery Process Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From inspection to delivery — a clear, transparent process with no surprises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPHOLSTERY_PROCESS_STEPS.map((s, i) => {
            const IconComp = ICON_MAP[s.icon] ?? CheckCircle2;
            return (
              <motion.div
                key={s.step}
                className="flex flex-col items-center text-center gap-3"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative">
                  <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComp className="size-6 text-primary" />
                  </div>
                  <span className="absolute -top-1 -right-1 size-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-semibold text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
