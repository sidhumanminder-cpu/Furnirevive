/**
 * Before & After Gallery Registry — structured image intelligence for SEO gallery engine.
 *
 * Architecture rules:
 * - Keyed by stable ID (e.g. "img-sofa-0001")
 * - ID must also be stored as the `id` field inside the record (for self-reference, analytics, CMS migration)
 * - Data only — no generated strings, no alt text, no captions (those live in gallery-engine.ts)
 * - Empty at launch; pages only render a gallery when real images are added
 * - No placeholder images, no stock images, no fallbacks
 *
 * Scoring weights are in GALLERY_MATCH_WEIGHTS (also this file).
 * Matching logic lives in gallery-engine.ts.
 *
 * LocalitySlug is derived from KNOWN_LOCALITY_FRAGMENTS in localities.ts (via repair-scenarios.ts).
 * SeoServiceKey is derived from SEO_SERVICE_CONFIG in service-config.ts.
 */

import type { LocalitySlug } from "./repair-scenarios.ts";
import type { SeoServiceKey } from "./service-config.ts";

// ─── Types ────────────────────────────────────────────────────────────────────

export type RoomType =
  | "living-room"
  | "office"
  | "reception"
  | "lobby"
  | "villa"
  | "waiting-area";

export type SofaStyle =
  | "modern"
  | "classic"
  | "traditional"
  | "luxury"
  | "minimalist";

export type GalleryImageRecord = {
  /** Stable ID — also stored as the registry key */
  id: string;
  beforeUrl: string;
  afterUrl: string;

  /** Services this job should appear on */
  services: SeoServiceKey[];
  /** All repair types performed in this job (one job often has several) */
  repairTypes: string[];
  furnitureType: string;
  damageType: string;
  material: string;
  roomType: RoomType;
  style: SofaStyle;

  /** Optional colour metadata for future UI filtering */
  primaryColor?: string;
  secondaryColor?: string;

  /**
   * Primary locality tags — exact match preferred in scoring.
   * An image tagged ["pitampura"] will also appear for city-level searches.
   */
  localityTags: LocalitySlug[];

  /**
   * City-level fallback tags (e.g. "delhi", "gurgaon", "noida", "ghaziabad", "faridabad").
   * Used when no exact locality match exists.
   */
  cityTags?: string[];

  /** 1–100. Higher = higher priority in scoring. Used to break ties. */
  priority: number;

  /** Featured images can be requested by homepage, blogs, case studies */
  isFeatured: boolean;

  /** ISO 8601 date. Optional. Future use: "Recent repair in Pitampura" */
  completedAt?: string;

  /** Schema metadata */
  copyrightHolder?: string;
  creator?: string;
  license?: string;
};

// ─── Scoring Weights ──────────────────────────────────────────────────────────

export const GALLERY_MATCH_WEIGHTS = {
  locality: 100,
  city: 60,
  service: 40,
  repairType: 30,
  furniture: 20,
  damage: 10,
  material: 5,
  /** priority (1–100) * this multiplier adds 0–20 bonus points */
  priorityMultiplier: 0.2,
} as const;

// ─── Registry ─────────────────────────────────────────────────────────────────

/**
 * Before & After Gallery Registry.
 *
 * Architecture rules:
 * - Keyed by stable ID (e.g. "img-sofa-0001")
 * - ID must also be stored as the `id` field inside the record (for self-reference, analytics, CMS migration)
 * - Data only — no generated strings, no alt text, no captions (those live in gallery-engine.ts)
 * - Empty at launch; pages only render a gallery when real images are added
 * - No placeholder images, no stock images, no fallbacks
 *
 * Scoring weights are in GALLERY_MATCH_WEIGHTS (also this file).
 * Matching logic lives in gallery-engine.ts.
 */
export const GALLERY_REGISTRY: Record<string, GalleryImageRecord> = {};
