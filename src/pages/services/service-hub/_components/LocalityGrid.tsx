import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import type { HubLocality } from "../_lib/hub-config.ts";

type Props = {
  items: readonly HubLocality[];
  heading: string;
  description?: string;
};

/** Grid of links to each locality page. Shared by new hubs and protected legacy pages. */
export default function LocalityGrid({ items, heading, description }: Props) {
  if (items.length === 0) return null;
  return (
    <section className="py-12 lg:py-16" data-hub-locality-grid>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">{heading}</h2>
        {description && <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {items.map(({ entry, href }) => (
            <Link key={entry.id} to={href} className="cursor-pointer group">
              <Card className="h-full py-0 transition-colors group-hover:border-primary/50">
                <CardContent className="flex items-center justify-between gap-2 px-4 py-3">
                  <span className="flex items-center gap-2 min-w-0">
                    <MapPin className="size-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium truncate">{entry.name}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
