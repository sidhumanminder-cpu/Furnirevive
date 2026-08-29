import { Link } from "react-router-dom";
import type { PyramidLinksSectionData } from "@/lib/content-engine/index.ts";

export default function PyramidLinksSection({ section }: { section: PyramidLinksSectionData }) {
  const { heading, links } = section.props;

  if (links.length === 0) return null;

  return (
    <section className="py-10 border-t border-border">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          {heading}
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-sm text-primary hover:underline underline-offset-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
