import { Users, Star, Home, Tag, Droplets, Sparkles, Thermometer, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FABRIC_SELECTOR_GUIDE } from "@/lib/upholsteryConfigs/upholsteryPricing.ts";

const ICON_MAP: Record<string, LucideIcon> = {
  users: Users,
  star: Star,
  home: Home,
  tag: Tag,
  droplets: Droplets,
  sparkles: Sparkles,
  thermometer: Thermometer,
  paw: Heart, // lucide has no paw — using Heart as substitute
};

export default function FabricSelector() {
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            Which Fabric Should You Choose?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Match your household needs to the best fabric option. Our guide is based on thousands
            of reupholstery jobs across Delhi NCR.
          </p>
        </div>

        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="hidden sm:grid grid-cols-3 bg-muted/60 px-5 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            <span>Your Requirement</span>
            <span>Best Fabric</span>
            <span>Why</span>
          </div>
          <div className="divide-y divide-border">
            {FABRIC_SELECTOR_GUIDE.map((row) => {
              const IconComp = ICON_MAP[row.icon] ?? Star;
              return (
                <div
                  key={row.requirement}
                  className="grid sm:grid-cols-3 gap-2 sm:gap-0 px-5 py-4 hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="rounded-lg p-1.5 bg-primary/10 shrink-0">
                      <IconComp className="size-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{row.requirement}</span>
                  </div>
                  <div className="sm:pl-4">
                    <span className="text-sm font-semibold text-primary">{row.bestFabric}</span>
                  </div>
                  <div className="sm:pl-4">
                    <span className="text-sm text-muted-foreground">{row.reason}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Not sure? Our technician brings fabric samples to your home during the free inspection.
        </p>
      </div>
    </section>
  );
}
