// Chunk "hubs-ncr": Noida / Gurgaon / Ghaziabad / Faridabad city hubs (loaded on demand via group-loaders.ts).
import type { SeoPageData } from "@/lib/seo-constants.ts";
import * as ncrHubs from "@/lib/seo-location-pages/ncr-hubs.ts";

const isPage = (v: unknown): v is SeoPageData => typeof v === "object" && v !== null && "slug" in v;

export const PAGES: SeoPageData[] = Object.values(ncrHubs).filter(isPage);
