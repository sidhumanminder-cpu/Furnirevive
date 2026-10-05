/** Service-aware wording for the inline CTA shown after the FAQ list. */
const CTA_SUFFIX = "Book a free inspection today — same-day slots available.";

export function getInlineCtaLabel(slug: string): string {
  const s = slug.toLowerCase();
  if (s.includes("recliner")) return `Ready to restore your recliner? ${CTA_SUFFIX}`;
  if (s.includes("upholster")) return `Ready to refresh your upholstery? ${CTA_SUFFIX}`;
  if (s.includes("chair")) return `Ready to repair your chair? ${CTA_SUFFIX}`;
  if (s.startsWith("furniture-")) return `Ready to restore your furniture? ${CTA_SUFFIX}`;
  return `Ready to restore your sofa? ${CTA_SUFFIX}`;
}

/** Short service noun for the final CTA heading ("Ready to Restore Your {noun}?"). */
export function getCtaNoun(slug: string): string {
  const s = slug.toLowerCase();
  if (s.includes("recliner")) return "Recliner";
  if (s.includes("upholster")) return "Upholstery";
  if (s.includes("chair")) return "Chair";
  if (s.startsWith("furniture-") || s.includes("carpenter")) return "Furniture";
  return "Sofa";
}

/** Related-services links, grouped by the page's service. Only pages that exist. */
export type RelatedLink = { href: string; label: string };

const SOFA_LINKS: RelatedLink[] = [
  { href: "/sofa-repair-cost-delhi", label: "Sofa Repair Cost Delhi" },
  { href: "/sofa-repair-near-me-delhi", label: "Sofa Repair Near Me Delhi" },
  { href: "/sofa-upholstery-delhi", label: "Sofa Upholstery Delhi" },
  { href: "/furniture-repair-cost-delhi", label: "Furniture Repair Cost Delhi" },
  { href: "/upholstery-home-service-delhi", label: "Upholstery Home Service Delhi" },
];

const RELATED_LINKS: Record<string, RelatedLink[]> = {
  Recliner: [
    { href: "/recliner-repair-cost-delhi", label: "Recliner Repair Cost Delhi" },
    { href: "/recliner-repair-delhi", label: "Recliner Repair Delhi" },
    { href: "/recliner-motor-repair-delhi", label: "Recliner Motor Repair Delhi" },
    { href: "/sofa-repair-cost-delhi", label: "Sofa Repair Cost Delhi" },
    { href: "/furniture-repair-cost-delhi", label: "Furniture Repair Cost Delhi" },
  ],
  Chair: [
    { href: "/chair-repair-delhi", label: "Chair Repair Delhi" },
    { href: "/furniture-repair-cost-delhi", label: "Furniture Repair Cost Delhi" },
    { href: "/furniture-repair-near-me-delhi", label: "Furniture Repair Near Me Delhi" },
    { href: "/upholstery-home-service-delhi", label: "Upholstery Home Service Delhi" },
  ],
  Furniture: [
    { href: "/furniture-repair-cost-delhi", label: "Furniture Repair Cost Delhi" },
    { href: "/furniture-repair-near-me-delhi", label: "Furniture Repair Near Me Delhi" },
    { href: "/chair-repair-delhi", label: "Chair Repair Delhi" },
    { href: "/sofa-repair-cost-delhi", label: "Sofa Repair Cost Delhi" },
    { href: "/upholstery-home-service-delhi", label: "Upholstery Home Service Delhi" },
  ],
  Upholstery: [
    { href: "/sofa-upholstery-delhi", label: "Sofa Upholstery Delhi" },
    { href: "/upholstery-home-service-delhi", label: "Upholstery Home Service Delhi" },
    { href: "/sofa-repair-cost-delhi", label: "Sofa Repair Cost Delhi" },
    { href: "/furniture-repair-cost-delhi", label: "Furniture Repair Cost Delhi" },
  ],
};

export function getRelatedLinks(slug: string): RelatedLink[] {
  return RELATED_LINKS[getCtaNoun(slug)] ?? SOFA_LINKS;
}
