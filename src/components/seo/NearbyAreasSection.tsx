/**
 * NearbyAreasSection — internal-linking section for locality SEO pages.
 *
 * Strengthens topical clusters by linking to neighbouring locality pages.
 * Only renders when at least one registry-verified neighbour link exists.
 * All URLs come from the location graph — no URL construction in this component.
 *
 * Architecture: serviceKey is required (no default) — callers must explicitly
 * know which service they are on. This prevents wrong-service link generation.
 */

import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { getExistingNeighbourLinks } from "@/lib/seoConfigs/location-graph.ts";
import type { SeoServiceKey } from "@/lib/seoConfigs/service-config.ts";

interface NearbyAreasSectionProps {
  /** The current page's slug — used to derive neighbour links */
  slug: string;
  /** The service key for this page — used to build correct service URLs. Required, no default. */
  serviceKey: SeoServiceKey;
}

export default function NearbyAreasSection({ slug, serviceKey }: NearbyAreasSectionProps) {
  const neighbours = getExistingNeighbourLinks(slug, serviceKey);

  if (neighbours.length === 0) return null;

  return (
    <motion.section
      className="py-10 lg:py-14 bg-muted/30"
      aria-label="Nearby service areas"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Nearby Areas We Serve
        </h2>
        <p className="text-muted-foreground text-sm mb-6">
          We provide doorstep sofa repair across these nearby areas in the same zone.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {neighbours.map((link) => (
            <Link
              key={link.slug}
              to={link.href}
              className="border border-border rounded-lg p-3 flex items-center gap-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary cursor-pointer"
            >
              <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="truncate">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
