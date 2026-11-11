import type { HubEditorial } from "./types.ts";
import sofaRepairNorthDelhi from "./sofa-repair-north-delhi.ts";
import sofaRepairCentralDelhi from "./sofa-repair-central-delhi.ts";
import reclinerRepairNorthDelhi from "./recliner-repair-north-delhi.ts";
import reclinerRepairEastDelhi from "./recliner-repair-east-delhi.ts";
import reclinerRepairCentralDelhi from "./recliner-repair-central-delhi.ts";
import furnitureRepairNorthDelhi from "./furniture-repair-north-delhi.ts";
import furnitureRepairCentralDelhi from "./furniture-repair-central-delhi.ts";
import sofaUpholsteryGhaziabad from "./sofa-upholstery-ghaziabad.ts";
import sofaUpholsterySouthDelhi from "./sofa-upholstery-south-delhi.ts";
import sofaUpholsteryWestDelhi from "./sofa-upholstery-west-delhi.ts";
import sofaUpholsteryEastDelhi from "./sofa-upholstery-east-delhi.ts";
import sofaUpholsteryCentralDelhi from "./sofa-upholstery-central-delhi.ts";
import sofaUpholsteryDwarka from "./sofa-upholstery-dwarka.ts";

export type { HubEditorial };

/** Original, zone-specific copy for the 13 new service hubs, keyed by slug. */
export const HUB_EDITORIAL: Record<string, HubEditorial> = {
  "sofa-repair-north-delhi": sofaRepairNorthDelhi,
  "sofa-repair-central-delhi": sofaRepairCentralDelhi,
  "recliner-repair-north-delhi": reclinerRepairNorthDelhi,
  "recliner-repair-east-delhi": reclinerRepairEastDelhi,
  "recliner-repair-central-delhi": reclinerRepairCentralDelhi,
  "furniture-repair-north-delhi": furnitureRepairNorthDelhi,
  "furniture-repair-central-delhi": furnitureRepairCentralDelhi,
  "sofa-upholstery-ghaziabad": sofaUpholsteryGhaziabad,
  "sofa-upholstery-south-delhi": sofaUpholsterySouthDelhi,
  "sofa-upholstery-west-delhi": sofaUpholsteryWestDelhi,
  "sofa-upholstery-east-delhi": sofaUpholsteryEastDelhi,
  "sofa-upholstery-central-delhi": sofaUpholsteryCentralDelhi,
  "sofa-upholstery-dwarka": sofaUpholsteryDwarka,
};

/** Every paragraph-sized string of a hub, used to detect copy shared between hubs. */
function textBlocks(e: HubEditorial): string[] {
  return [
    ...e.intro,
    ...e.areaNotes.map((n) => n.body),
    ...e.problems.map((p) => p.body),
    ...e.faqs.map((f) => f.a),
  ];
}

/** Returns "slugA | slugB: text" for each paragraph that appears on two hubs. */
export function findSharedParagraphs(all: Record<string, HubEditorial>): string[] {
  const seen = new Map<string, string>();
  const shared: string[] = [];
  for (const [slug, editorial] of Object.entries(all)) {
    for (const block of textBlocks(editorial)) {
      const key = block.trim().toLowerCase();
      const first = seen.get(key);
      if (first && first !== slug) shared.push(`${first} | ${slug}: ${block.slice(0, 80)}`);
      else seen.set(key, slug);
    }
  }
  return shared;
}

if (import.meta.env?.DEV) {
  const shared = findSharedParagraphs(HUB_EDITORIAL);
  if (shared.length > 0) console.warn("[hub-editorial] paragraphs shared between hubs:", shared);
}
