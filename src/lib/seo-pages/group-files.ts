// Static view of every page group. Used ONLY by tests and scripts (never import from app code:
// it pulls all page content into one bundle). App code uses group-loaders.ts instead.
import type { SeoPageData } from "@/lib/seo-constants.ts";
import { PAGES as hubs } from "./groups/hubs.ts";
import { PAGES as hubs_ncr } from "./groups/hubs-ncr.ts";
import { PAGES as hubs_tricity } from "./groups/hubs-tricity.ts";
import { PAGES as other_1 } from "./groups/other-1.ts";
import { PAGES as other_2 } from "./groups/other-2.ts";
import { PAGES as other_3 } from "./groups/other-3.ts";
import { PAGES as delhi_1 } from "./groups/delhi-1.ts";
import { PAGES as delhi_2 } from "./groups/delhi-2.ts";
import { PAGES as delhi_3 } from "./groups/delhi-3.ts";
import { PAGES as delhi_4 } from "./groups/delhi-4.ts";
import { PAGES as noida_1 } from "./groups/noida-1.ts";
import { PAGES as noida_2 } from "./groups/noida-2.ts";
import { PAGES as gurgaon_1 } from "./groups/gurgaon-1.ts";
import { PAGES as gurgaon_2 } from "./groups/gurgaon-2.ts";
import { PAGES as gurgaon_3 } from "./groups/gurgaon-3.ts";
import { PAGES as faridabad } from "./groups/faridabad.ts";
import { PAGES as tricity } from "./groups/tricity.ts";

export const GROUP_FILES: Record<string, SeoPageData[]> = {
  "hubs": hubs,
  "hubs-ncr": hubs_ncr,
  "hubs-tricity": hubs_tricity,
  "other-1": other_1,
  "other-2": other_2,
  "other-3": other_3,
  "delhi-1": delhi_1,
  "delhi-2": delhi_2,
  "delhi-3": delhi_3,
  "delhi-4": delhi_4,
  "noida-1": noida_1,
  "noida-2": noida_2,
  "gurgaon-1": gurgaon_1,
  "gurgaon-2": gurgaon_2,
  "gurgaon-3": gurgaon_3,
  "faridabad": faridabad,
  "tricity": tricity,
};
