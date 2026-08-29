import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Network } from "lucide-react";
import type { TopicalAuthoritySectionData } from "@/lib/content-engine/index.ts";

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

export default function TopicalAuthorityRegistrySection({
  section,
}: {
  section: TopicalAuthoritySectionData;
}) {
  const { heading, links } = section.props;

  if (links.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.55, ease: "easeOut" as const }}
      className="py-10 lg:py-14"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-6">
          <Network className="size-5 text-primary shrink-0" />
          <h3 className="text-lg font-semibold">{heading}</h3>
        </div>
        <ul className="space-y-3" role="list">
          {links.map((link) => (
            <li key={link.href} className="text-sm text-muted-foreground leading-relaxed">
              <MentionWithLink
                mention={link.mention}
                displayName={link.displayName}
                href={link.href}
              />
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
