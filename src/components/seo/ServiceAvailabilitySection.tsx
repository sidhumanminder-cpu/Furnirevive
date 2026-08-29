/**
 * ServiceAvailabilitySection — geographic coverage section for service SEO pages.
 *
 * Demonstrates broad geographic reach by listing all cities in the active metro
 * with featured locality chips and links to city-level service pages.
 * All URLs come from location graph helpers — no URL concatenation in this component.
 */

import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.tsx";
import {
  getMetro,
  getFeaturedLocalities,
  buildCityServiceUrl,
} from "@/lib/seoConfigs/location-graph.ts";
import { SEO_SERVICE_CONFIG } from "@/lib/seoConfigs/service-config.ts";
import type { SeoServiceKey } from "@/lib/seoConfigs/service-config.ts";

interface ServiceAvailabilitySectionProps {
  /** The resolved service key — e.g. "leather-sofa-repair" */
  serviceKey: SeoServiceKey;
  /** Max featured localities shown per city card (default 5) */
  maxFeaturedLocalities?: number;
}

const CARD_STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

const CARD_ITEM = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
} as const;

export default function ServiceAvailabilitySection({
  serviceKey,
  maxFeaturedLocalities = 5,
}: ServiceAvailabilitySectionProps) {
  const metro = getMetro();
  const serviceDisplayName = SEO_SERVICE_CONFIG[serviceKey].displayName;

  return (
    <section
      className="py-12 lg:py-16"
      aria-label={`Service availability across ${metro.displayName}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Available Across {metro.displayName}
        </h2>
        <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
          FurniRevive provides {serviceDisplayName.toLowerCase()} at your doorstep
          across all major areas.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={CARD_STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {metro.cities.map((city) => {
            const localities = getFeaturedLocalities(city.key, maxFeaturedLocalities);
            const cityServiceUrl = buildCityServiceUrl(serviceKey, city.key);

            return (
              <motion.div key={city.key} variants={CARD_ITEM}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2
                        className="size-5 text-primary shrink-0"
                        aria-hidden="true"
                      />
                      {city.displayName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    {/* Locality chips */}
                    {localities.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {localities.map((loc) => (
                          <Link
                            key={loc.slug}
                            to={loc.href}
                            className="text-xs px-2 py-1 rounded-full border border-border hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
                          >
                            {loc.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* View All link */}
                    <Link
                      to={cityServiceUrl}
                      className="text-sm font-medium text-primary hover:text-primary/80 cursor-pointer transition-colors mt-auto"
                    >
                      View all {city.displayName} areas &rarr;
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
