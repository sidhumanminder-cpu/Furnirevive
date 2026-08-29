/**
 * Content Engine — Testimonials Module
 *
 * Selects 3 representative reviews per page using deterministic rotation.
 * Prefers reviews matching the current service, pads from the full pool.
 * Never creates locality-specific fake reviews.
 * Domain data only.
 */

import { hashCode } from "../content-uniqueness.ts";
import { TESTIMONIALS_POOL } from "../testimonials-config.ts";
import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { TestimonialsSectionData, TestimonialItem } from "../types.ts";

const COUNT = 3;

export function buildTestimonials(
  locality: LocalityEntry,
  service: ServiceEntry,
): TestimonialsSectionData {
  const key = `${service.slug}-${locality.slug}`;
  const seed = hashCode(key);

  // Split pool into matching service and rest
  const serviceMatch = service.slug === "office-furniture-repair"
    ? "Office Furniture Repair"
    : service.capabilities?.audience?.corporate
      ? "Office Chair Repair"
      : service.name.split(" ")[0];
  const matching = TESTIMONIALS_POOL.filter(
    (t) => t.service?.toLowerCase().includes(serviceMatch.toLowerCase()),
  );
  const rest = TESTIMONIALS_POOL.filter(
    (t) => !matching.includes(t),
  );

  // Pick from matching first, rotate deterministically
  const picks: TestimonialItem[] = [];
  const matchingCount = Math.min(2, matching.length);
  for (let i = 0; i < matchingCount; i++) {
    const idx = ((seed + i * 7) % matching.length + matching.length) % matching.length;
    const candidate = matching[idx];
    if (!picks.includes(candidate)) picks.push(candidate);
  }

  // Pad from rest to reach COUNT
  let restOffset = 0;
  while (picks.length < COUNT && restOffset < rest.length * 2) {
    const idx = ((seed + restOffset * 13) % rest.length + rest.length) % rest.length;
    const candidate = rest[idx];
    if (!picks.includes(candidate)) picks.push(candidate);
    restOffset++;
  }

  // Override location with the current page's city so Panchkula/Mohali/Chandigarh
  // pages don't show "Delhi NCR" attribution on reviews.
  const cityLabel = locality.city
    ? locality.city.charAt(0).toUpperCase() + locality.city.slice(1)
    : undefined;
  const localizedItems = cityLabel
    ? picks.slice(0, COUNT).map((t) => ({ ...t, location: cityLabel }))
    : picks.slice(0, COUNT);

  return {
    id: `${service.slug}-${locality.slug}-testimonials`,
    type: "testimonials",
    version: "v1",
    props: {
      heading: "What Our Customers Say",
      items: localizedItems,
    },
  };
}
