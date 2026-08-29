/**
 * WEST_DELHI_LOCALITIES
 *
 * Canonical array of West Delhi locality slugs and display names.
 * Single source of truth for:
 * - Sofa upholstery page generation
 * - Sitemap generation
 * - Internal linking and Service Hub resolution
 *
 * Rule: keep this as { slug, name } only — no service-specific data.
 */
import type { LocalityEntry } from "./south-delhi-localities.ts";

export const WEST_DELHI_LOCALITIES: readonly LocalityEntry[] = [
  { slug: "rajouri-garden", name: "Rajouri Garden" },
  { slug: "punjabi-bagh",   name: "Punjabi Bagh" },
  { slug: "janakpuri",      name: "Janakpuri" },
  { slug: "paschim-vihar",  name: "Paschim Vihar" },
  { slug: "tilak-nagar",    name: "Tilak Nagar" },
  { slug: "vikaspuri",      name: "Vikaspuri" },
  { slug: "uttam-nagar",    name: "Uttam Nagar" },
] as const;
