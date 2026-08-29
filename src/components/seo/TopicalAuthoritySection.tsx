/**
 * TopicalAuthoritySection — Renders semantic cross-links as contextual prose sentences.
 *
 * Architecture position:
 * - Pyramid Links = structural hierarchy (who is the parent)
 * - Nearby Areas   = geographic relevance (adjacent localities)
 * - Topical Authority = semantic relationships (subject-matter peers)
 *
 * Renders nothing when matches is null or empty.
 * Each match is a prose sentence with an inline React Router Link — never a bare bullet list.
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Network } from "lucide-react";
import type { AuthorityMatch } from "@/lib/seoConfigs/authority-engine.ts";

interface TopicalAuthoritySectionProps {
  matches: AuthorityMatch[] | null;
  /** Used to pick a section heading variant deterministically */
  slug: string;
}

const SECTION_TITLES = [
  "Related Repair Guides",
  "Helpful Resources",
  "Explore More Services",
  "Useful References",
] as const;

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h = h & h;
  }
  return Math.abs(h);
}

/**
 * Splits a mention string on the display name to render the inline link.
 * The engine embeds `record.displayName` directly in the template string.
 * We split on it to wrap just that part in a <Link>.
 */
function MentionWithLink({
  mention,
  displayName,
  href,
}: {
  mention: string;
  displayName: string;
  href: string;
}) {
  const parts = mention.split(displayName);
  if (parts.length !== 2) {
    // Fallback: render full mention with standalone link
    return (
      <span>
        {mention}{" "}
        <Link to={href} className="text-primary hover:underline font-medium">
          {displayName}
        </Link>
      </span>
    );
  }
  const [before, after] = parts;
  return (
    <span>
      {before}
      <Link to={href} className="text-primary hover:underline font-medium">
        {displayName}
      </Link>
      {after}
    </span>
  );
}

export default function TopicalAuthoritySection({
  matches,
  slug,
}: TopicalAuthoritySectionProps) {
  if (!matches || matches.length === 0) return null;

  const titleIdx = hash(slug) % SECTION_TITLES.length;
  const sectionTitle = SECTION_TITLES[titleIdx];

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="py-10 lg:py-14"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-6">
          <Network className="size-5 text-primary shrink-0" />
          <h3 className="text-lg font-serif font-semibold">{sectionTitle}</h3>
        </div>

        <ul className="space-y-3" role="list">
          {matches.map((match) => (
            <li
              key={match.record.slug}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              <MentionWithLink
                mention={match.mention}
                displayName={match.record.displayName}
                href={`/${match.record.slug}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
