import { motion } from "motion/react";
import { Zap, Battery, BatteryFull } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { FOAM_GUIDE } from "@/lib/upholsteryConfigs/foamGuide.ts";

const DENSITY_ICONS = {
  32: Battery,
  36: Zap,
  40: BatteryFull,
} as const;

const FIRMNESS_LABEL: Record<string, string> = {
  soft: "Soft",
  medium: "Medium",
  firm: "Firm",
  "extra-firm": "Extra Firm",
};

export default function FoamGuide() {
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            Which Foam Density Is Right for Your Sofa?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The foam inside your sofa determines how long it lasts and how comfortable it feels.
            Higher density means better durability and shape retention.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {FOAM_GUIDE.map((foam, i) => {
            const IconComp = DENSITY_ICONS[foam.density as keyof typeof DENSITY_ICONS] ?? Zap;
            const isRecommended = foam.density === 36;
            return (
              <motion.div
                key={foam.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`h-full relative ${isRecommended ? "border-primary ring-1 ring-primary" : ""}`}>
                  {isRecommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-0.5 rounded-full whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="py-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-lg p-2 bg-primary/10">
                        <IconComp className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{foam.label}</p>
                        <p className="text-xs text-muted-foreground">{foam.name}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground italic">{foam.tagline}</p>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="rounded-lg bg-muted/40 px-2.5 py-1.5">
                        <p className="text-muted-foreground">Lifespan</p>
                        <p className="font-semibold text-foreground">{foam.lifespanYears} years</p>
                      </div>
                      <div className="rounded-lg bg-muted/40 px-2.5 py-1.5">
                        <p className="text-muted-foreground">Firmness</p>
                        <p className="font-semibold text-foreground">{FIRMNESS_LABEL[foam.firmness]}</p>
                      </div>
                      <div className="col-span-2 rounded-lg bg-muted/40 px-2.5 py-1.5">
                        <p className="text-muted-foreground">Cost per cushion</p>
                        <p className="font-semibold text-foreground">{foam.costDisplay}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-foreground/70 mb-1.5">Best for</p>
                      <ul className="space-y-1">
                        {foam.bestFor.slice(0, 3).map((b) => (
                          <li key={b} className="text-xs text-foreground/80 flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">›</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-xs text-muted-foreground border-t border-border pt-2 mt-auto">
                      Warranty: {foam.warrantyYears} year{foam.warrantyYears > 1 ? "s" : ""}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Not sure which density to choose? Our technician will advise you based on your sofa and usage during the free inspection.
        </p>
      </div>
    </section>
  );
}
