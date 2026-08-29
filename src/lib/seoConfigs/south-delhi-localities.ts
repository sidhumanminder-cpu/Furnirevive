/**
 * SOUTH_DELHI_PREMIUM_LOCALITIES
 *
 * Canonical array of South Delhi premium locality slugs and display names.
 * Single source of truth used for:
 * - Sofa upholstery page generation (Milestone 3)
 * - Sitemap generation
 * - Internal linking and Service Hub resolution
 * - Future bulk operations and tests
 *
 * Rule: keep this as { slug, name } only — no service-specific data.
 * Extend with a new city by creating a parallel file (e.g. west-delhi-localities.ts).
 */
export type LocalityEntry = {
  /** URL slug fragment, e.g. "vasant-vihar" */
  slug: string;
  /** Display name, e.g. "Vasant Vihar" */
  name: string;
};

export const SOUTH_DELHI_PREMIUM_LOCALITIES: readonly LocalityEntry[] = [
  { slug: "vasant-vihar",       name: "Vasant Vihar" },
  { slug: "defence-colony",     name: "Defence Colony" },
  { slug: "friends-colony",     name: "Friends Colony" },
  { slug: "maharani-bagh",      name: "Maharani Bagh" },
  { slug: "green-park",         name: "Green Park" },
  { slug: "hauz-khas",          name: "Hauz Khas" },
  { slug: "safdarjung-enclave", name: "Safdarjung Enclave" },
  { slug: "panchsheel-park",    name: "Panchsheel Park" },
  { slug: "gulmohar-park",      name: "Gulmohar Park" },
  { slug: "greater-kailash-1",  name: "Greater Kailash 1" },
  { slug: "greater-kailash-2",  name: "Greater Kailash 2" },
  { slug: "greater-kailash-3",  name: "Greater Kailash 3" },
] as const;
