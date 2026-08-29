/**
 * ServiceHubSection — renders all available services for the current locality.
 * Registry-driven: URLs via buildLocalityServiceUrl(), existence via pageExists().
 * Returns null when fewer than 2 services exist for the locality.
 */

import { Link } from "react-router-dom";
import { Sofa, Armchair, Wrench, CheckCircle2 } from "lucide-react";
import { getLocalityInfo } from "@/lib/seoConfigs/localities.ts";
import { buildLocalityServiceUrl, pageExists } from "@/lib/seoConfigs/location-graph.ts";
import type { SeoServiceKey } from "@/lib/seoConfigs/service-config.ts";
import { cn } from "@/lib/utils.ts";

// UI metadata only — URLs and existence come from the registry
const SERVICE_HUB_ITEMS: Record<string, { title: string; description: string; icon: React.ReactNode }> = {
  "sofa-repair": {
    title: "Sofa Repair",
    description: "Repair broken frames, springs, cushions and structural damage.",
    icon: <Sofa className="size-5" />,
  },
  "sofa-upholstery": {
    title: "Sofa Reupholstery",
    description: "Replace fabric, foam and stitching with premium materials.",
    icon: <Sofa className="size-5" />,
  },
  "recliner-repair": {
    title: "Recliner Repair",
    description: "Manual and electric recliner repair, motor replacement and servicing.",
    icon: <Armchair className="size-5" />,
  },
  "furniture-repair": {
    title: "Furniture Repair",
    description: "Repair wooden furniture, dining tables, beds and wardrobes.",
    icon: <Wrench className="size-5" />,
  },
} as const;

// Fixed display order
const SERVICE_ORDER: SeoServiceKey[] = [
  "sofa-repair",
  "sofa-upholstery",
  "recliner-repair",
  "furniture-repair",
];

interface ServiceHubSectionProps {
  slug: string;
  currentService: SeoServiceKey;
}

export default function ServiceHubSection({ slug, currentService }: ServiceHubSectionProps) {
  const info = getLocalityInfo(slug);

  // Build the list of visible services
  const services = SERVICE_ORDER.flatMap((serviceKey) => {
    const meta = SERVICE_HUB_ITEMS[serviceKey];
    if (!meta) return [];
    const href = buildLocalityServiceUrl(serviceKey, slug);
    const isCurrent = serviceKey === currentService;
    // Always include current service; others must exist in registry
    if (!isCurrent && !pageExists(href)) return [];
    return [{ serviceKey, meta, href, isCurrent }];
  });

  // Return null if fewer than 2 services available
  if (services.length < 2) return null;

  // Responsive grid cols based on count
  const gridCols =
    services.length === 2
      ? "sm:grid-cols-2"
      : services.length === 3
      ? "sm:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="py-10 lg:py-14 bg-muted/20 border-y border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Services Available in {info.name}, {info.city}
        </h2>
        <div className={cn("grid grid-cols-1 gap-3", gridCols)}>
          {services.map(({ serviceKey, meta, href, isCurrent }) =>
            isCurrent ? (
              <div
                key={serviceKey}
                className="flex flex-col gap-2 rounded-xl border-2 border-primary bg-primary/5 px-4 py-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-primary">{meta.icon}</span>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="size-3" />
                    Current Service
                  </span>
                </div>
                <p className="font-semibold text-foreground text-sm">{meta.title} in {info.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{meta.description}</p>
              </div>
            ) : (
              <Link
                key={serviceKey}
                to={href}
                className="flex flex-col gap-2 rounded-xl border border-border bg-background px-4 py-4 hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer group"
              >
                <span className="text-muted-foreground group-hover:text-primary transition-colors">{meta.icon}</span>
                <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  {meta.title} in {info.name}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{meta.description}</p>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
