import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { resolveAreaHref } from "@/lib/area-links.ts";

const PILL = "inline-flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-full text-sm text-foreground";
const TONES = { secondary: "bg-secondary/50", background: "bg-background" } as const;

type AreaPillsProps = {
  areas: string[];
  pageSlug: string;
  /** Area name -> page slug, for areas whose page cannot be derived from the name */
  links?: Record<string, string>;
  /** Pill fill: "secondary" on plain sections, "background" on tinted sections */
  tone?: keyof typeof TONES;
};

/** Area pills: a real internal link where a page exists, plain text otherwise. */
export default function AreaPills({ areas, pageSlug, links, tone = "secondary" }: AreaPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {areas.map((area) => {
        const href = resolveAreaHref(area, pageSlug, links);
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
          <span key={area} className={`${PILL} ${TONES[tone]}`}>{inner}</span>
        );
      })}
    </div>
  );
}
