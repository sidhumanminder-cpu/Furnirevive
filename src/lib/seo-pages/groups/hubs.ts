// Chunk "hubs": Delhi service hubs, pricing hubs and the areas page (loaded on demand via group-loaders.ts).
import type { SeoPageData } from "@/lib/seo-constants.ts";
import { ALL_SERVICE_PAGES } from "@/lib/seo-service-pages.ts";
import { PRICING_HUB_BATCH_A } from "@/lib/seo-pages/pricing-hub-batch-a.ts";
import { PRICING_HUB_BATCH_B } from "@/lib/seo-pages/pricing-hub-batch-b.ts";
import { PRICING_HUB_BATCH_C } from "@/lib/seo-pages/pricing-hub-batch-c.ts";
import { WEST_DELHI_HUB_PAGES } from "@/lib/seo-pages/west-delhi-hub-pages.ts";
import { areasWeServePage } from "@/lib/seo-pages/areas-we-serve-page.ts";

export const PAGES: SeoPageData[] = [
  ...ALL_SERVICE_PAGES,
  ...PRICING_HUB_BATCH_A,
  ...PRICING_HUB_BATCH_B,
  ...PRICING_HUB_BATCH_C,
  ...WEST_DELHI_HUB_PAGES,
  areasWeServePage,
];
