/**
 * Content Engine — SEO Audit Layer
 *
 * Development-only utility. Validates the output of `buildPageSections` against
 * structural SEO requirements before a page is served or deployed.
 *
 * IMPORTANT: This file must not be imported in production bundles. Every check
 * is guarded by `import.meta.env.DEV` at the call-site but the guard is also
 * documented here to make the intent explicit.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { PageSections, PageSectionData } from "./types.ts";

export type SeoAuditResult = {
  valid: boolean;
  /** Human-readable identifier for the audited page, e.g. "sofa-repair-lajpat-nagar" */
  pageId: string;
  errors: string[];
  warnings: string[];
};

function findSection<T extends PageSectionData["type"]>(
  sections: PageSections,
  type: T,
): Extract<PageSectionData, { type: T }> | undefined {
  return sections.find((s) => s.type === type) as Extract<PageSectionData, { type: T }> | undefined;
}

/**
 * Audit the sections produced by `buildPageSections` for a locality + service.
 *
 * Returns a `SeoAuditResult`. Should only be called in development.
 */
export function auditPageSections(
  sections: PageSections,
  locality: LocalityEntry,
  service: ServiceEntry,
): SeoAuditResult {
  const pageId = `${service.slug}-${locality.slug}`;
  const errors: string[] = [];
  const warnings: string[] = [];

  // ── Hero ──────────────────────────────────────────────────────────────────
  const hero = findSection(sections, "hero");
  if (!hero) {
    errors.push("Missing hero section");
  } else {
    if (!hero.props.headline.trim()) errors.push("Hero headline is empty");
    if (!hero.props.subheadline.trim()) errors.push("Hero subheadline is empty");
    if (!hero.props.localityName.trim()) errors.push("Hero localityName is empty");
    if (!hero.props.serviceName.trim()) errors.push("Hero serviceName is empty");
  }

  // ── Intro ─────────────────────────────────────────────────────────────────
  const intro = findSection(sections, "intro");
  if (!intro) {
    warnings.push("Missing intro section");
  } else {
    if (intro.props.paragraphs.length === 0) errors.push("Intro has no paragraphs");
    if (intro.props.keyFacts.length === 0) errors.push("Intro has no key facts");
  }

  // ── FAQ ───────────────────────────────────────────────────────────────────
  const faq = findSection(sections, "faq");
  if (!faq) {
    errors.push("Missing FAQ section");
  } else if (faq.props.faqs.length < 5) {
    errors.push(`FAQ section has ${faq.props.faqs.length} items — minimum is 5`);
  }

  // ── Nearby ────────────────────────────────────────────────────────────────
  const nearby = findSection(sections, "nearby");
  if (!nearby) {
    warnings.push("Missing nearby section");
  } else if (nearby.props.areas.length < 2) {
    warnings.push(`Nearby section has only ${nearby.props.areas.length} area(s) — at least 2 recommended`);
  }

  // ── Service Hub ───────────────────────────────────────────────────────────
  const servicehub = findSection(sections, "servicehub");
  if (servicehub) {
    const selfLink = servicehub.props.services.find((s) => s.name === service.name);
    if (selfLink) {
      errors.push(`ServiceHub links back to the current service "${service.name}"`);
    }
  }

  // ── CTA ───────────────────────────────────────────────────────────────────
  const cta = findSection(sections, "cta");
  if (!cta) {
    warnings.push("Missing CTA section");
  }

  // ── General: no empty required string fields ──────────────────────────────
  for (const section of sections) {
    if (!section.id.trim()) {
      errors.push(`Section of type "${section.type}" has an empty id`);
    }
  }

  return {
    valid: errors.length === 0,
    pageId,
    errors,
    warnings,
  };
}
