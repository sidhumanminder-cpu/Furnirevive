/**
 * NORTH_DELHI_LOCALITIES
 *
 * Canonical array of North Delhi locality slugs and display names.
 * Single source of truth for:
 * - Sofa upholstery page generation
 * - Sitemap generation
 * - Internal linking and Service Hub resolution
 *
 * Rule: keep this as { slug, name } only — no service-specific data.
 */
import type { LocalityEntry } from "./south-delhi-localities.ts";

export const NORTH_DELHI_LOCALITIES: readonly LocalityEntry[] = [
  { slug: "rohini",          name: "Rohini" },
  { slug: "pitampura",       name: "Pitampura" },
  { slug: "ashok-vihar",     name: "Ashok Vihar" },
  { slug: "model-town",      name: "Model Town" },
  { slug: "shalimar-bagh",   name: "Shalimar Bagh" },
  // Phase 2 — premium North Delhi localities
  { slug: "kamla-nagar",     name: "Kamla Nagar" },
  { slug: "civil-lines",     name: "Civil Lines" },
  { slug: "mukherjee-nagar", name: "Mukherjee Nagar" },
  { slug: "gtb-nagar",       name: "GTB Nagar" },
  { slug: "adarsh-nagar",    name: "Adarsh Nagar" },
  { slug: "gujranwala-town", name: "Gujranwala Town" },
  { slug: "keshav-puram",    name: "Keshav Puram" },
  { slug: "derawal-nagar",   name: "Derawal Nagar" },
  { slug: "shakti-nagar",    name: "Shakti Nagar" },
  { slug: "hudson-lane",     name: "Hudson Lane" },
] as const;
