import { motion } from "motion/react";
import { cn } from "@/lib/utils.ts";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { FABRIC_CATALOGUE } from "@/lib/upholsteryConfigs/fabricCatalogue.ts";

export default function FabricCatalogue() {
  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            Fabric Catalogue
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated range of upholstery fabrics. Each fabric is selected for durability,
            appearance, and suitability for Delhi NCR homes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FABRIC_CATALOGUE.map((fabric, i) => (
            <motion.div
              key={fabric.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="h-full overflow-hidden pt-0">
                {/* Colour swatch */}
                <div className={cn("h-16 w-full", fabric.swatchClass)} aria-hidden="true" />
                <CardContent className="pt-4 flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-base">{fabric.name}</h3>
                      <p className="text-xs text-muted-foreground">{fabric.tagline}</p>
                    </div>
                    <span className="text-xs font-medium text-primary whitespace-nowrap bg-primary/10 rounded-full px-2 py-0.5">
                      {fabric.priceDisplay}
                    </span>
                  </div>

                  {/* Durability bar */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Durability</span>
                      <span className="font-medium">{fabric.durability}/5</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${(fabric.durability / 5) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Properties */}
                  <div className="flex flex-wrap gap-1">
                    {fabric.properties.slice(0, 4).map((prop) => (
                      <span
                        key={prop}
                        className="text-xs rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground"
                      >
                        {prop}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground">{fabric.summary}</p>

                  <div className="text-xs text-muted-foreground border-t border-border pt-2 mt-auto">
                    Warranty: {fabric.warrantyYears} year{fabric.warrantyYears > 1 ? "s" : ""}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
