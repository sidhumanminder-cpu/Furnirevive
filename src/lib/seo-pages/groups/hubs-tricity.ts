// Chunk "hubs-tricity": Chandigarh / Mohali / Panchkula hubs (loaded on demand via group-loaders.ts).
import type { SeoPageData } from "@/lib/seo-constants.ts";
import * as chandigarh from "@/lib/seo-location-pages/chandigarh-hubs.ts";
import * as mohali from "@/lib/seo-location-pages/mohali-hubs.ts";
import * as panchkula from "@/lib/seo-location-pages/panchkula-hubs.ts";

const isPage = (v: unknown): v is SeoPageData => typeof v === "object" && v !== null && "slug" in v;

export const PAGES: SeoPageData[] = [chandigarh, mohali, panchkula].flatMap((m) => Object.values(m).filter(isPage));
