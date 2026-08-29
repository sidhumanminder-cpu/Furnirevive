/**
 * Core internal links that every SEO page must include.
 * These are the mandatory links specified in the SEO strategy.
 * All 6 authority clusters participate: Sofa, Furniture, Recliner,
 * South Delhi, Gurgaon, Noida.
 */
export const CORE_INTERNAL_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book a Repair", href: "/book" },
  // Sofa cluster
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
  { label: "Sofa Repair Ghaziabad", href: "/sofa-repair-ghaziabad" },
  { label: "Sofa Repair Faridabad", href: "/sofa-repair-faridabad" },
  // Furniture cluster
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  { label: "Furniture Repair Noida", href: "/furniture-repair-noida" },
  // Recliner cluster
  { label: "Recliner Repair Delhi", href: "/recliner-repair-delhi" },
  { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  { label: "Recliner Repair Noida", href: "/recliner-repair-noida" },
  // Support + utility
  { label: "Carpenter Home Service Delhi", href: "/carpenter-home-service-delhi" },
  { label: "Blog", href: "/blog" },
] as const;

/** Returns core links plus additional related pages, excluding the current page slug */
export function buildRelatedPages(
  currentSlug: string,
  additionalPages: { label: string; href: string }[] = [],
) {
  const allPages = [...CORE_INTERNAL_LINKS, ...additionalPages];
  return allPages.filter((p) => p.href !== `/${currentSlug}`);
}
