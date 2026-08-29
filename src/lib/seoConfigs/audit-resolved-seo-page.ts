/**
 * QA Auditor — FurniRevive SEO
 *
 * auditResolvedSeoPage(page: ResolvedSeoPage) → AuditResult
 *
 * Validates a ResolvedSeoPage before rendering.
 * Never mutates input. Never throws.
 * `valid` is true only when `errors` is empty.
 *
 * Errors   — page is invalid; should not be rendered
 * Warnings — page is valid but worth reviewing
 */

import type { ResolvedSeoPage } from "./page-composition-engine.ts";

// ─── Types ────────────────────────────────────────────────────────────────────

export type AuditSeverity = "error" | "warning";

export type AuditIssue = {
  severity: AuditSeverity;
  /** Short machine-readable code e.g. "MISSING_SLUG" */
  code: string;
  /** Field path e.g. "slug", "faqs[2].question", "nearbyAreas[0].href" */
  field: string;
  message: string;
};

export type AuditResult = {
  valid: boolean;
  errors: AuditIssue[];
  warnings: AuditIssue[];
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function error(code: string, field: string, message: string): AuditIssue {
  return { severity: "error", code, field, message };
}

function warning(code: string, field: string, message: string): AuditIssue {
  return { severity: "warning", code, field, message };
}

// ─── Auditor ─────────────────────────────────────────────────────────────────

/**
 * Validates a ResolvedSeoPage.
 * Returns { valid, errors, warnings } — never throws, never mutates.
 */
export function auditResolvedSeoPage(page: ResolvedSeoPage): AuditResult {
  const errors: AuditIssue[] = [];
  const warnings: AuditIssue[] = [];

  try {
    // ── slug ────────────────────────────────────────────────────────────────
    if (!page.slug || typeof page.slug !== "string" || page.slug.trim().length === 0) {
      errors.push(error("MISSING_SLUG", "slug", "Page slug is missing or empty."));
    }

    // ── manifest ─────────────────────────────────────────────────────────────
    if (!page.manifest || typeof page.manifest !== "object") {
      errors.push(error("MISSING_MANIFEST", "manifest", "Page manifest is missing."));
    } else {
      // Warn if any engine version is not 1 (signals a version bump occurred)
      const engines = page.manifest.engines;
      if (engines) {
        const engineEntries = Object.entries(engines) as [string, number][];
        for (const [name, ver] of engineEntries) {
          if (ver !== 1) {
            warnings.push(
              warning(
                "ENGINE_VERSION_MISMATCH",
                `manifest.engines.${name}`,
                `Engine "${name}" is at version ${String(ver)}, not 1. Verify page data is still valid.`,
              ),
            );
          }
        }
      }
    }

    // ── hero ─────────────────────────────────────────────────────────────────
    if (page.hero !== null && page.hero !== undefined) {
      if (!page.hero.id || typeof page.hero.id !== "string" || page.hero.id.trim().length === 0) {
        errors.push(error("INVALID_HERO_ID", "hero.id", "Hero image id is missing or empty."));
      }
      if (!page.hero.url || typeof page.hero.url !== "string" || !page.hero.url.startsWith("https://")) {
        errors.push(error("INVALID_HERO_URL", "hero.url", "Hero image url is missing or not a valid https URL."));
      }
      if (!page.hero.fileId || typeof page.hero.fileId !== "string" || page.hero.fileId.trim().length === 0) {
        errors.push(error("INVALID_HERO_FILE_ID", "hero.fileId", "Hero image fileId is missing or empty."));
      }
    }

    // ── gallery — duplicate IDs ───────────────────────────────────────────────
    if (Array.isArray(page.gallery)) {
      const seenGalleryIds = new Set<string>();
      for (let i = 0; i < page.gallery.length; i++) {
        const entry = page.gallery[i];
        if (entry.id) {
          if (seenGalleryIds.has(entry.id)) {
            errors.push(
              error("DUPLICATE_GALLERY_ID", `gallery[${i}].id`, `Gallery image id "${entry.id}" appears more than once.`),
            );
          }
          seenGalleryIds.add(entry.id);
        }
      }
    }

    // ── faqs — duplicate questions ────────────────────────────────────────────
    if (Array.isArray(page.faqs)) {
      const seenQuestions = new Set<string>();
      for (let i = 0; i < page.faqs.length; i++) {
        const faq = page.faqs[i];
        const q = faq.question?.trim().toLowerCase();
        if (q) {
          if (seenQuestions.has(q)) {
            errors.push(
              error("DUPLICATE_FAQ_QUESTION", `faqs[${i}].question`, `FAQ question appears more than once: "${faq.question}".`),
            );
          }
          seenQuestions.add(q);
        }
      }
    }

    // ── authorityLinks — duplicate hrefs + self-link ──────────────────────────
    if (Array.isArray(page.authorityLinks)) {
      const seenAuthorityHrefs = new Set<string>();
      const currentSlug = page.slug ?? "";

      for (let i = 0; i < page.authorityLinks.length; i++) {
        const link = page.authorityLinks[i];
        // AuthorityPageRecord uses `slug`; the href is derived as "/" + slug
        const recordSlug = link.record?.slug;
        const href = recordSlug ? `/${recordSlug}` : undefined;

        if (href && recordSlug) {
          if (seenAuthorityHrefs.has(href)) {
            errors.push(
              error("DUPLICATE_AUTHORITY_HREF", `authorityLinks[${i}].record.slug`, `Authority link slug "${recordSlug}" appears more than once.`),
            );
          }
          seenAuthorityHrefs.add(href);

          // Self-link: authority link points to the current page
          if (currentSlug && (recordSlug === currentSlug || href === `/${currentSlug}`)) {
            errors.push(
              error("SELF_LINK_IN_AUTHORITY", `authorityLinks[${i}].record.slug`, `Authority link "${href}" points to the current page (self-link).`),
            );
          }
        }
      }
    }

    // ── nearbyAreas — duplicate hrefs + empty hrefs ───────────────────────────
    if (Array.isArray(page.nearbyAreas)) {
      const seenNearbyHrefs = new Set<string>();

      for (let i = 0; i < page.nearbyAreas.length; i++) {
        const area = page.nearbyAreas[i];

        if (!area.href || area.href.trim().length === 0) {
          errors.push(
            error("EMPTY_NEARBY_HREF", `nearbyAreas[${i}].href`, `Nearby area "${area.name ?? i}" has an empty href.`),
          );
        } else {
          if (seenNearbyHrefs.has(area.href)) {
            errors.push(
              error("DUPLICATE_NEARBY_HREF", `nearbyAreas[${i}].href`, `Nearby area href "${area.href}" appears more than once.`),
            );
          }
          seenNearbyHrefs.add(area.href);
        }
      }
    }

    // ── repairScenario — warn if present but all sections empty ───────────────
    if (page.repairScenario !== null && page.repairScenario !== undefined) {
      const sectionValues = Object.values(page.repairScenario);
      const allEmpty = sectionValues.length === 0 || sectionValues.every((v) => v == null);
      if (allEmpty) {
        warnings.push(
          warning(
            "EMPTY_REPAIR_SCENARIO",
            "repairScenario",
            "repairScenario is present but contains no populated sections.",
          ),
        );
      }
    }
  } catch {
    // Safety net — auditor must never throw
    errors.push(
      error("AUDIT_INTERNAL_ERROR", "unknown", "An unexpected error occurred during audit. Check page data integrity."),
    );
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
