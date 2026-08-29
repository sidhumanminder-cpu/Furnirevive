import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import type { NearbySectionData } from "@/lib/content-engine/index.ts";

export default function NearbySection({ section }: { section: NearbySectionData }) {
  const { heading, areas } = section.props;

  return (
    <section className="py-12 md:py-16 bg-muted/40">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{heading}</h2>

        <div className="flex flex-wrap gap-3">
          {areas.map((area) => (
            <Link
              key={area.href}
              to={area.href}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <MapPin className="size-4 text-primary" />
              {area.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
