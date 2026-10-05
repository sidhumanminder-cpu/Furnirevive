import type { ContentWeight, LocalityEntry, SearchPriority } from "./types.ts";

/**
 * Minimum content tier implied by a locality's search demand (1 = low, 5 = high).
 * Demand 4-5 unlocks the full-depth (90) intro; 3 unlocks the standard (70) tier.
 */
const SEARCH_PRIORITY_FLOOR: Record<SearchPriority, ContentWeight> = {
  1: 50,
  2: 50,
  3: 70,
  4: 90,
  5: 90,
};

/**
 * Effective content tier used to gate section depth.
 * Only ever raises a locality's tier: the result is never below `contentWeight`.
 * 100 is never assigned from demand alone, so answer-variant selection that
 * reads the raw `contentWeight` is unaffected.
 */
export function getEffectiveContentWeight(
  locality: Pick<LocalityEntry, "contentWeight" | "searchPriority">,
): ContentWeight {
  return Math.max(locality.contentWeight, SEARCH_PRIORITY_FLOOR[locality.searchPriority] ?? 50) as ContentWeight;
}
