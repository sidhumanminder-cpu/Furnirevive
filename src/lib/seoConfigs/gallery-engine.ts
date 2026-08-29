import type { SeoServiceKey } from "./service-config.ts";
import type { LocalitySlug } from "./repair-scenarios.ts";
import {
  GALLERY_REGISTRY,
  GALLERY_MATCH_WEIGHTS,
  type GalleryImageRecord,
} from "./gallery-registry.ts";
import { resolveLocalityKey } from "./repair-scenario-engine.ts";
import { getLocalityInfo } from "./localities.ts";

// ─── Types ───────────────────────────────────────────────────────────────────

export type GalleryMatch = {
  id: string;
  record: GalleryImageRecord;
  score: number;
};

export type GalleryImageSchema = {
  "@context": "https://schema.org";
  "@type": "ImageObject";
  name: string;
  description: string;
  url: string;
  copyrightHolder?: { "@type": "Organization"; name: string };
  creator?: { "@type": "Person" | "Organization"; name: string };
  license?: string;
  dateCreated?: string;
};

export type GetGalleryOptions = {
  limit?: number;
  featuredOnly?: boolean;
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Converts "sofa-repair" → "Sofa Repair", "living-room" → "Living Room" */
function humanise(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// ─── Scoring ─────────────────────────────────────────────────────────────────

/**
 * Scores a single registry entry against the current page context.
 * Returns 0 if the entry is ineligible (e.g. no service overlap).
 */
export function scoreRecord(
  record: GalleryImageRecord,
  serviceKey: SeoServiceKey,
  localitySlug: LocalitySlug | null,
  cityKey: string | null,
): number {
  let score = 0;
  let hasLocalityOrCity = false;
  let hasService = false;

  // Locality match
  if (localitySlug && record.localityTags.includes(localitySlug)) {
    score += GALLERY_MATCH_WEIGHTS.locality;
    hasLocalityOrCity = true;
  }

  // City match — only if locality didn't already match
  if (!hasLocalityOrCity && cityKey && record.cityTags?.includes(cityKey)) {
    score += GALLERY_MATCH_WEIGHTS.city;
    hasLocalityOrCity = true;
  }

  // Service match
  if (record.services.includes(serviceKey)) {
    score += GALLERY_MATCH_WEIGHTS.service;
    hasService = true;
  }

  // Eligibility gate: must have at least service OR locality/city match
  if (!hasService && !hasLocalityOrCity) {
    return 0;
  }

  // Repair type — loose match between repairType entries and the service key
  const serviceRoot = serviceKey.split("-")[0];
  if (
    record.repairTypes.some(
      (rt) => serviceKey.includes(rt) || rt.includes(serviceRoot),
    )
  ) {
    score += GALLERY_MATCH_WEIGHTS.repairType;
  }

  // Bonus points (only added because the record already has a non-zero score
  // from locality/city/service above)
  score += GALLERY_MATCH_WEIGHTS.furniture;
  score += GALLERY_MATCH_WEIGHTS.damage;
  score += GALLERY_MATCH_WEIGHTS.material;

  // Priority bonus (float)
  score += record.priority * GALLERY_MATCH_WEIGHTS.priorityMultiplier;

  return score;
}

// ─── Gallery Selection ───────────────────────────────────────────────────────

/**
 * Returns the top-scored gallery images for a given service + page slug.
 *
 * Returns null when:
 * - GALLERY_REGISTRY is empty
 * - No record scores > 0 for this page
 *
 * Never returns placeholder, stock, or generic fallback images.
 */
export function getGalleryImages(
  serviceKey: SeoServiceKey,
  slug: string,
  options: GetGalleryOptions = {},
): GalleryMatch[] | null {
  const entries = Object.entries(GALLERY_REGISTRY);
  if (entries.length === 0) return null;

  const localitySlug = resolveLocalityKey(slug);
  const localityInfo = getLocalityInfo(slug);
  const cityKey: string | null = localityInfo.cityKey ?? null;

  // Score all entries
  const scored: GalleryMatch[] = [];
  for (const [id, record] of entries) {
    const score = scoreRecord(record, serviceKey, localitySlug, cityKey);
    if (score > 0) {
      scored.push({ id, record, score });
    }
  }

  if (scored.length === 0) return null;

  // Sort by score descending, then by priority descending as tiebreaker
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.record.priority - a.record.priority;
  });

  // Apply featuredOnly filter
  let results = options.featuredOnly
    ? scored.filter((m) => m.record.isFeatured)
    : scored;

  if (results.length === 0) return null;

  // Apply limit cap
  const limit = options.limit ?? 4;
  results = results.slice(0, limit);

  return results;
}

// ─── Text Generation ─────────────────────────────────────────────────────────

export function generateAlt(
  record: GalleryImageRecord,
  side: "before" | "after",
): string {
  const furnitureType = humanise(record.furnitureType);

  if (side === "before") {
    const damageType = humanise(record.damageType);
    const style = humanise(record.style as string);
    const roomType = humanise(record.roomType as string);
    return `Before repair: ${damageType} on a ${style} ${furnitureType} in ${roomType} \u2014 FurniRevive`;
  }

  const repairTypes = record.repairTypes.map(humanise).join(" and ");
  return `After repair: ${furnitureType} restored after ${repairTypes} \u2014 FurniRevive`;
}

export function generateTitle(record: GalleryImageRecord): string {
  const furnitureType = humanise(record.furnitureType);
  const primaryRepair = humanise(record.repairTypes[0] ?? "repair");
  return `${furnitureType} ${primaryRepair} \u2014 Doorstep Repair by FurniRevive`;
}

export function generateCaption(record: GalleryImageRecord): string {
  const style = humanise(record.style as string);
  const material = humanise(record.material);
  const furnitureType = humanise(record.furnitureType);
  const repairTypes = record.repairTypes.map(humanise).join(" and ");
  const roomType = humanise(record.roomType as string);

  return `${style} ${material} ${furnitureType} restored after ${repairTypes} in a ${roomType}.`;
}

// ─── Schema Generation ───────────────────────────────────────────────────────

export function generateImageSchema(
  record: GalleryImageRecord,
  side: "before" | "after",
): GalleryImageSchema {
  const url = side === "before" ? record.beforeUrl : record.afterUrl;

  const schema: GalleryImageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: `${generateTitle(record)} \u2014 ${side}`,
    description: generateAlt(record, side),
    url,
  };

  if (record.copyrightHolder) {
    schema.copyrightHolder = {
      "@type": "Organization",
      name: record.copyrightHolder,
    };
  }

  if (record.creator) {
    schema.creator = {
      "@type": "Organization",
      name: record.creator,
    };
  }

  if (record.license) {
    schema.license = record.license;
  }

  if (record.completedAt) {
    schema.dateCreated = record.completedAt;
  }

  return schema;
}
