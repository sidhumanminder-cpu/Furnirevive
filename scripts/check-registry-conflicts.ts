/**
 * Registry conflict checker
 * Run: npx tsx scripts/check-registry-conflicts.ts
 *
 * Scans every published registry entry and checks whether any of its 4 URLs
 * conflict with legacy seo-pages slugs or App.tsx path= routes.
 * Exits with code 1 if any conflict is found.
 */
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { LOCALITY_REGISTRY } from "../src/lib/registry/locality-registry.ts";

const SEO_PAGES_DIR = join(process.cwd(), "src/lib/seo-pages");
const APP_TSX = join(process.cwd(), "src/App.tsx");

// Load all seo-pages content once
const seoPagesSources = readdirSync(SEO_PAGES_DIR)
  .filter((f) => f.endsWith(".ts") || f.endsWith(".tsx"))
  .map((f) => readFileSync(join(SEO_PAGES_DIR, f), "utf8"));

const appTsx = readFileSync(APP_TSX, "utf8");

function getUrls(slug: string, city: string): string[] {
  const upholstery =
    city === "delhi"
      ? `sofa-upholstery-${slug}-delhi`
      : `sofa-upholstery-${slug}`;
  return [
    `sofa-repair-${slug}`,
    `recliner-repair-${slug}`,
    `furniture-repair-${slug}`,
    upholstery,
  ];
}

let conflicts = 0;
const rows: string[] = [];

for (const loc of LOCALITY_REGISTRY) {
  if (loc.status !== "published") continue;

  for (const url of getUrls(loc.slug, loc.city)) {
    // Check 1: App.tsx path=
    const appHit = appTsx.includes(`path="/${url}"`);

    // Check 2: seo-pages slug: "..."
    const seoHit = seoPagesSources.some((src) =>
      src.includes(`slug: "${url}"`)
    );

    if (appHit || seoHit) {
      conflicts++;
      const sources: string[] = [];
      if (appHit) sources.push("App.tsx path=");
      if (seoHit) sources.push("seo-pages slug:");
      rows.push(`  CONFLICT  /${url}  [${sources.join(", ")}]  (registry: ${loc.id})`);
    }
  }
}

if (rows.length > 0) {
  console.error("\n=== REGISTRY CONFLICT REPORT ===");
  rows.forEach((r) => console.error(r));
  console.error(`\n${conflicts} conflict(s) found. Fix by setting status: "draft" on the affected entries.\n`);
  process.exit(1);
} else {
  console.log(`\nAll published registry entries are clean — no conflicts found.\n`);
}
