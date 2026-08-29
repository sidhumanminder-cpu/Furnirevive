/**
 * BUSINESS_RULES
 *
 * Pure functions that determine whether a page should be generated for a
 * given locality + service combination.
 *
 * Rules:
 * - No imports from registries (receives data as arguments)
 * - No side effects
 * - Fully testable in isolation
 * - Returns true by default; add specific exclusions as the platform grows
 */

import type { LocalityEntry, ServiceEntry, PageStatus } from "./types.ts";

/** Statuses that are eligible for page generation */
const GENERATABLE_STATUSES: ReadonlySet<PageStatus> = new Set(["published"]);

/**
 * Determines whether a page should be generated for a locality + service pair.
 *
 * Current rules:
 * 1. Locality status must be "published"
 * 2. Service must not be in the locality's excludeServices list
 * 3. All other services are enabled for all published localities (default: true)
 *
 * Future rules to add here (examples, not yet active):
 * - Skip upholstery for industrial areas
 * - Luxury template only for premiumLevel >= 4
 * - Experimental services in one city only
 * - Skip recliner repair where searchPriority < 2
 */
export function canGeneratePage(
  locality: LocalityEntry,
  service: ServiceEntry,
): boolean {
  // Rule 1: locality must have a generatable status
  if (!GENERATABLE_STATUSES.has(locality.status)) {
    return false;
  }

  // Rule 2: service must not be in the locality's excludeServices list
  if (locality.excludeServices?.includes(service.slug)) {
    return false;
  }

  return true;
}
