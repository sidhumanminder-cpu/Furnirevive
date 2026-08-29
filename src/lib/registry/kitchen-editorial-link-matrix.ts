/**
 * Kitchen Editorial Link Matrix
 *
 * Developer-only validator. Run at module load in dev mode.
 * Verifies that every editorial registry entry:
 *   1. Has valid references (no broken slugs)
 *   2. Has at least one outgoing link (not a dead end)
 *   3. Has at least one incoming link from layout/material/cost (not an orphan)
 *
 * Prints a summary table and PASS/FAIL verdict to console.
 * Completely stripped in production builds (import.meta.env.DEV guard).
 */

import { KITCHEN_EDITORIAL_REGISTRY } from "./kitchen-editorial-registry.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "./kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "./kitchen-material-registry.ts";
import { MODULAR_KITCHEN_COST_REGISTRY } from "./kitchen-cost-registry.ts";

function runEditorialLinkMatrix(): void {
  if (!import.meta.env.DEV) return;

  const validLayoutSlugs = new Set(MODULAR_KITCHEN_LAYOUT_REGISTRY.map((l) => l.slug));
  const validMaterialSlugs = new Set(MODULAR_KITCHEN_MATERIAL_REGISTRY.map((m) => m.slug));
  const validCostSlugs = new Set(MODULAR_KITCHEN_COST_REGISTRY.map((c) => c.slug));
  const validEditorialSlugs = new Set(KITCHEN_EDITORIAL_REGISTRY.map((e) => e.slug));

  let totalBroken = 0;
  let totalOrphans = 0;
  let totalDeadEnds = 0;
  let totalOutgoingLayouts = 0;
  let totalOutgoingMaterials = 0;
  let totalOutgoingCost = 0;
  let totalOutgoingEditorial = 0;

  // Build incoming-link index: which layout/material/cost slugs reference each editorial slug
  const incomingFromLayouts = new Map<string, string[]>();
  const incomingFromMaterials = new Map<string, string[]>();
  const incomingFromCosts = new Map<string, string[]>();

  for (const entry of KITCHEN_EDITORIAL_REGISTRY) {
    incomingFromLayouts.set(entry.slug, []);
    incomingFromMaterials.set(entry.slug, []);
    incomingFromCosts.set(entry.slug, []);
  }

  // Compute incoming links: for each editorial, which layout slugs include it?
  for (const editorial of KITCHEN_EDITORIAL_REGISTRY) {
    for (const layoutSlug of editorial.relatedLayouts) {
      // This editorial will appear in the layout page's pyramid links
      // Mark that the layout page → editorial (incoming for the editorial)
      // We track which editorials a layout page would link to
    }
  }

  // Reverse index: for each editorial, find all layout/material/cost pages that would link to it
  // (i.e., editorials where the layout/material/cost slug is in the relevant array)
  for (const editorial of KITCHEN_EDITORIAL_REGISTRY) {
    for (const layoutSlug of editorial.relatedLayouts) {
      incomingFromLayouts.get(editorial.slug)!.push(layoutSlug);
    }
    for (const materialSlug of editorial.relatedMaterials) {
      incomingFromMaterials.get(editorial.slug)!.push(materialSlug);
    }
    for (const costSlug of editorial.relatedCostPages) {
      incomingFromCosts.get(editorial.slug)!.push(costSlug);
    }
  }

  console.group("[Editorial Link Matrix]");

  for (const entry of KITCHEN_EDITORIAL_REGISTRY) {
    const brokenLayouts = entry.relatedLayouts.filter((s) => !validLayoutSlugs.has(s));
    const brokenMaterials = entry.relatedMaterials.filter((s) => !validMaterialSlugs.has(s));
    const brokenCosts = entry.relatedCostPages.filter((s) => !validCostSlugs.has(s));
    const brokenEditorials = entry.relatedEditorials.filter((s) => !validEditorialSlugs.has(s));

    const broken = [...brokenLayouts, ...brokenMaterials, ...brokenCosts, ...brokenEditorials];
    const outgoing =
      entry.relatedLayouts.length +
      entry.relatedMaterials.length +
      entry.relatedCostPages.length +
      entry.relatedEditorials.length;

    const incomingLayouts = incomingFromLayouts.get(entry.slug) ?? [];
    const incomingMaterials = incomingFromMaterials.get(entry.slug) ?? [];
    const incomingCosts = incomingFromCosts.get(entry.slug) ?? [];
    const totalIncoming = incomingLayouts.length + incomingMaterials.length + incomingCosts.length;

    totalBroken += broken.length;
    totalOutgoingLayouts += entry.relatedLayouts.length;
    totalOutgoingMaterials += entry.relatedMaterials.length;
    totalOutgoingCost += entry.relatedCostPages.length;
    totalOutgoingEditorial += entry.relatedEditorials.length;

    const isOrphan = totalIncoming === 0;
    const isDeadEnd = outgoing === 0;
    if (isOrphan) totalOrphans++;
    if (isDeadEnd) totalDeadEnds++;

    const flags = [
      ...(isOrphan ? ["⚠ ORPHAN (0 incoming)"] : []),
      ...(isDeadEnd ? ["⚠ DEAD END (0 outgoing)"] : []),
      ...(broken.length > 0 ? [`⚠ BROKEN REFS: ${broken.join(", ")}`] : []),
    ];

    if (flags.length > 0) {
      console.warn(`/${entry.slug} [${entry.category}]\n  ${flags.join("\n  ")}`);
    } else {
      console.log(
        `/${entry.slug} [${entry.category}] — out: ${outgoing} | in: ${totalIncoming} ✓`,
      );
    }
  }

  console.groupEnd();

  const pass = totalBroken === 0 && totalOrphans === 0 && totalDeadEnds === 0;
  console.group("[Editorial Link Matrix — Summary]");
  console.log(`Editorial Pages:    ${KITCHEN_EDITORIAL_REGISTRY.length}`);
  console.log(`Outgoing Links:`);
  console.log(`  → Layouts:        ${totalOutgoingLayouts}`);
  console.log(`  → Materials:      ${totalOutgoingMaterials}`);
  console.log(`  → Cost Pages:     ${totalOutgoingCost}`);
  console.log(`  → Editorials:     ${totalOutgoingEditorial}`);
  console.log(`Orphans:            ${totalOrphans}`);
  console.log(`Dead Ends:          ${totalDeadEnds}`);
  console.log(`Broken References:  ${totalBroken}`);
  console.log(pass ? "✅ PASS" : "❌ FAIL — fix registry before publishing");
  console.groupEnd();
}

runEditorialLinkMatrix();
