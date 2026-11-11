import { Link } from "@/lib/router-compat.tsx";
import { ArrowRight, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { hasSeoPage } from "@/lib/seo-pages/slug-index.ts";

export type ExtraLocalityLink = { name: string; href: string };

type Props = { heading: string; links: readonly ExtraLocalityLink[] };

/** Resolves a sofa-repair link for a Gurgaon sector or area, trying both slug patterns. Null when no page exists. */
export function resolveGurgaonLink(name: string, slugPart: string): ExtraLocalityLink | null {
  const candidates = [`sofa-repair-${slugPart}-gurgaon`, `sofa-repair-gurgaon-${slugPart}`];
  const slug = candidates.find((c) => hasSeoPage(c));
  return slug ? { name, href: `/${slug}` } : null;
}

/** Plain link grid for localities that live outside the locality registry. Renders nothing when empty. */
export default function ExtraLocalityLinks({ heading, links }: Props) {
  if (links.length === 0) return null;
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">{heading}</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {links.map(({ name, href }) => (
            <Link key={href} to={href} className="cursor-pointer group">
              <Card className="h-full py-0 transition-colors group-hover:border-primary/50">
                <CardContent className="flex items-center justify-between gap-2 px-4 py-3">
                  <span className="flex items-center gap-2 min-w-0">
                    <MapPin className="size-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium truncate">{name}</span>
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
