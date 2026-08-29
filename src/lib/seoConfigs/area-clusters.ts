/**
 * AREA_CLUSTERS
 *
 * Unified configuration layer for all Delhi NCR locality clusters.
 * Single source of truth for cluster → locality list mapping.
 *
 * Usage:
 *   AREA_CLUSTERS.southDelhi   → readonly LocalityEntry[]
 *   AREA_CLUSTERS.westDelhi    → readonly LocalityEntry[]
 *
 * Adding a new cluster:
 *   1. Create src/lib/seoConfigs/<cluster>-localities.ts
 *   2. Extend ClusterKey union below
 *   3. Add one entry to AREA_CLUSTERS
 *
 * No changes needed anywhere else for the config layer.
 */

import {
  SOUTH_DELHI_PREMIUM_LOCALITIES,
  type LocalityEntry,
} from "./south-delhi-localities.ts";

import { WEST_DELHI_LOCALITIES } from "./west-delhi-localities.ts";
import { NORTH_DELHI_LOCALITIES } from "./north-delhi-localities.ts";

// Re-export for consumers who prefer a single import point
export type { LocalityEntry };

export type ClusterKey = "southDelhi" | "westDelhi" | "northDelhi";

export const AREA_CLUSTERS = {
  southDelhi: SOUTH_DELHI_PREMIUM_LOCALITIES,
  westDelhi: WEST_DELHI_LOCALITIES,
  northDelhi: NORTH_DELHI_LOCALITIES,
} as const satisfies Record<ClusterKey, readonly LocalityEntry[]>;
