import { Link } from "@/lib/router-compat.tsx";
import { MapPin } from "lucide-react";
import { resolveAreaHref } from "@/lib/area-links.ts";

const PILL = "inline-flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-full text-sm text-foreground";
// Unlinked pills share the linked pill look (same border, fill, icon colour); only hover and pointer differ.
const TONES = { secondary: "bg-secondary/50", background: "bg-background" } as const;

type AreaPillsProps = {
  areas: string[];
  pageSlug: string;
  /** Area name -> page slug, for areas whose page cannot be derived from the name */
  links?: Record<string, string>;
  /** Pill fill: "secondary" on plain sections, "background" on tinted sections */
  tone?: keyof typeof TONES;
  /** Render only pills that resolve to a real link */
  linkedOnly?: boolean;
  /** Replaces the default link lookup (registry pages verify city and service themselves) */
  resolve?: (area: string) => string | null;
};

/** Area pills: a real internal link where a page exists, plain text otherwise. */
export default function AreaPills({ areas, pageSlug, links, tone = "secondary", linkedOnly = false, resolve }: AreaPillsProps) {
  const items = areas
    .map((area) => ({ area, href: resolve ? resolve(area) : resolveAreaHref(area, pageSlug, links) }))
    .filter((item) => !linkedOnly || item.href);
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ area, href }) => {
        const inner = (
          <>
            <MapPin className="size-3.5 text-primary" />
            {area}
          </>
        );
        return href ? (
          <Link key={area} to={href} className={`${PILL} ${TONES[tone]} cursor-pointer transition-colors hover:border-primary/40 hover:text-primary`}>
            {inner}
          </Link>
        ) : (
          <span key={area} className={`${PILL} ${TONES[tone]} cursor-default`}>{inner}</span>
        );
      })}
    </div>
  );
}
