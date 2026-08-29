/**
 * Central SEO page registry.
 * Every programmatic SEO page is registered here.
 * The dynamic route component uses this registry to look up page data by slug.
 * The sitemap generation uses this to list all URLs.
 */
import type { SeoPageData } from "@/lib/seo-constants.ts";
import { ALL_SERVICE_PAGES } from "@/lib/seo-service-pages.ts";
import { ALL_LOCATION_PAGES } from "@/lib/seo-location-pages/index.ts";
import { NEAR_ME_PAGES } from "@/lib/seo-pages/near-me-pages.ts";
import { PROBLEM_PRICE_PAGES_1 } from "@/lib/seo-pages/problem-price-pages-1.ts";
import { PROBLEM_PRICE_PAGES_2 } from "@/lib/seo-pages/problem-price-pages-2.ts";
import { TRUST_PAGES } from "@/lib/seo-pages/trust-pages.ts";
import { AREA_PAGES_1 } from "@/lib/seo-pages/area-pages-1.ts";
import { AREA_PAGES_2 } from "@/lib/seo-pages/area-pages-2.ts";
import { FURNITURE_TYPE_PAGES } from "@/lib/seo-pages/furniture-type-pages.ts";
import { BRAND_PAGES } from "@/lib/seo-pages/brand-pages.ts";
import { LANDMARK_PAGES_1 } from "@/lib/seo-pages/landmark-pages-1.ts";
import { LANDMARK_PAGES_2 } from "@/lib/seo-pages/landmark-pages-2.ts";
import { DELHI_SOFA_PAGES_1 } from "@/lib/seo-pages/delhi-sofa-pages-1.ts";
import { DELHI_SOFA_PAGES_2 } from "@/lib/seo-pages/delhi-sofa-pages-2.ts";
import { DELHI_FURNITURE_PAGES } from "@/lib/seo-pages/delhi-furniture-pages.ts";
import { NOIDA_SECTOR_PAGES } from "@/lib/seo-pages/noida-sector-pages.ts";
import { GURGAON_SECTOR_PAGES } from "@/lib/seo-pages/gurgaon-sector-pages.ts";
import { REPAIR_PROBLEM_PAGES_1 } from "@/lib/seo-pages/repair-problem-pages-1.ts";
import { REPAIR_PROBLEM_PAGES_3 } from "@/lib/seo-pages/repair-problem-pages-3.ts";
import { NEAR_ME_DELHI_PAGES } from "@/lib/seo-pages/near-me-delhi-pages.ts";
import { HOME_SERVICE_DELHI_PAGES } from "@/lib/seo-pages/home-service-delhi-pages.ts";
import { URGENCY_DELHI_PAGES } from "@/lib/seo-pages/urgency-delhi-pages.ts";
import { COST_DELHI_PAGES } from "@/lib/seo-pages/cost-delhi-pages.ts";
import { FURNITURE_SUBTYPE_DELHI_PAGES } from "@/lib/seo-pages/furniture-subtype-delhi-pages.ts";
import { SETTING_DELHI_PAGES } from "@/lib/seo-pages/setting-delhi-pages.ts";
import { DOORSTEP_DELHI_PAGES } from "@/lib/seo-pages/doorstep-delhi-pages.ts";
import { GALLERY_DELHI_PAGES } from "@/lib/seo-pages/gallery-delhi-pages.ts";
import { DELHI_MICRO_LOCATION_PAGES } from "@/lib/seo-pages/delhi-micro-location-pages.ts";
import { GURGAON_MICRO_LOCATION_PAGES } from "@/lib/seo-pages/gurgaon-micro-location-pages.ts";
import { NOIDA_GHAZIABAD_MICRO_PAGES } from "@/lib/seo-pages/noida-ghaziabad-micro-pages.ts";
import { FARIDABAD_MICRO_PAGES } from "@/lib/seo-pages/faridabad-micro-pages.ts";
import { SOFA_CHILD_DELHI_PAGES } from "@/lib/seo-pages/sofa-child-delhi-pages.ts";
import { SOFA_CHILD_NCR_PAGES } from "@/lib/seo-pages/sofa-child-ncr-pages.ts";
import { CRAWL_BOOST_PAGES } from "@/lib/seo-pages/crawl-boost-pages.ts";
import { leatherSofaRepairDelhi } from "@/lib/seo-pages/leather-sofa-repair-delhi-page.ts";
import { sofaRepairDwarka } from "@/lib/seo-pages/sofa-repair-dwarka-page.ts";
import { recliferSofaRepairDelhi } from "@/lib/seo-pages/recliner-sofa-repair-delhi-page.ts";
import { NEW_DELHI_GURGAON_PAGES } from "@/lib/seo-pages/new-delhi-gurgaon-pages.ts";
import { NEW_NOIDA_GHAZIABAD_PAGES } from "@/lib/seo-pages/new-noida-ghaziabad-pages.ts";
import { NEW_MIXED_PAGES } from "@/lib/seo-pages/new-mixed-pages.ts";
import { MICRO_LOCATION_BATCH_2 } from "@/lib/seo-pages/micro-location-batch-2.ts";
import { MICRO_LOCATION_BATCH_1 } from "@/lib/seo-pages/micro-location-batch-1.ts";
import { MICRO_LOCATION_BATCH_3 } from "@/lib/seo-pages/micro-location-batch-3.ts";
import { MICRO_LOCATION_BATCH_4 } from "@/lib/seo-pages/micro-location-batch-4.ts";
import { MICRO_LOCATION_BATCH_5 } from "@/lib/seo-pages/micro-location-batch-5.ts";
import { MICRO_LOCATION_BATCH_6 } from "@/lib/seo-pages/micro-location-batch-6.ts";
import { MICRO_LOCATION_BATCH_7 } from "@/lib/seo-pages/micro-location-batch-7.ts";
import { LEATHER_RECLINER_BATCH_1 } from "@/lib/seo-pages/leather-recliner-batch-1.ts";
import { LEATHER_RECLINER_BATCH_2 } from "@/lib/seo-pages/leather-recliner-batch-2.ts";
import { LEATHER_RECLINER_BATCH_3 } from "@/lib/seo-pages/leather-recliner-batch-3.ts";
import { SOUTH_DELHI_BATCH_1 } from "@/lib/seo-pages/south-delhi-batch-1.ts";
import { SOUTH_DELHI_BATCH_2 } from "@/lib/seo-pages/south-delhi-batch-2.ts";
import { SOUTH_DELHI_BATCH_3 } from "@/lib/seo-pages/south-delhi-batch-3.ts";
import { GURGAON_DLF_BATCH_1 } from "@/lib/seo-pages/gurgaon-dlf-batch-1.ts";
import { GURGAON_DLF_BATCH_2 } from "@/lib/seo-pages/gurgaon-dlf-batch-2.ts";
import { GURGAON_DLF_BATCH_3 } from "@/lib/seo-pages/gurgaon-dlf-batch-3.ts";
import { NOIDA_AUTHORITY_BATCH_1 } from "@/lib/seo-pages/noida-authority-batch-1.ts";
import { NOIDA_AUTHORITY_BATCH_2 } from "@/lib/seo-pages/noida-authority-batch-2.ts";
import { NOIDA_AUTHORITY_BATCH_3 } from "@/lib/seo-pages/noida-authority-batch-3.ts";
import { AUTHORITY_BATCH_1 } from "@/lib/seo-pages/authority-batch-1.ts";
import { AUTHORITY_BATCH_2 } from "@/lib/seo-pages/authority-batch-2.ts";
import { AUTHORITY_BATCH_3 } from "@/lib/seo-pages/authority-batch-3.ts";
import { AUTHORITY_BATCH_4 } from "@/lib/seo-pages/authority-batch-4.ts";
import { RECLINER_AUTHORITY_BATCH_1 } from "@/lib/seo-pages/recliner-authority-batch-1.ts";
import { RECLINER_AUTHORITY_BATCH_2 } from "@/lib/seo-pages/recliner-authority-batch-2.ts";
import { RECLINER_AUTHORITY_BATCH_3 } from "@/lib/seo-pages/recliner-authority-batch-3.ts";
import { SOUTH_DELHI_BATCH_4 } from "@/lib/seo-pages/south-delhi-batch-4.ts";
import { SOUTH_DELHI_BATCH_5 } from "@/lib/seo-pages/south-delhi-batch-5.ts";
import { GURGAON_LUXURY_BATCH_1 } from "@/lib/seo-pages/gurgaon-luxury-batch-1.ts";
import { GURGAON_LUXURY_BATCH_2 } from "@/lib/seo-pages/gurgaon-luxury-batch-2.ts";
import { GURGAON_NEW_CLUSTER_BATCH_1 } from "@/lib/seo-pages/gurgaon-new-cluster-batch-1.ts";
import { GURGAON_NEW_CLUSTER_BATCH_2 } from "@/lib/seo-pages/gurgaon-new-cluster-batch-2.ts";
import { GURGAON_SERVICE_BATCH_1 } from "@/lib/seo-pages/gurgaon-service-batch-1.ts";
import { GURGAON_SERVICE_BATCH_2 } from "@/lib/seo-pages/gurgaon-service-batch-2.ts";
import { GURGAON_PREMIUM_BATCH_1 } from "@/lib/seo-pages/gurgaon-premium-batch-1.ts";
import { GURGAON_PREMIUM_BATCH_2 } from "@/lib/seo-pages/gurgaon-premium-batch-2.ts";
import { DELHI_LUXURY_BATCH_1 } from "@/lib/seo-pages/delhi-luxury-batch-1.ts";
import { DELHI_LUXURY_BATCH_2 } from "@/lib/seo-pages/delhi-luxury-batch-2.ts";
import { NOIDA_SERVICE_BATCH_1 } from "@/lib/seo-pages/noida-service-batch-1.ts";
import { NOIDA_SERVICE_BATCH_2 } from "@/lib/seo-pages/noida-service-batch-2.ts";
import { NOIDA_SERVICE_BATCH_3 } from "@/lib/seo-pages/noida-service-batch-3.ts";
import { NOIDA_SERVICE_BATCH_4 } from "@/lib/seo-pages/noida-service-batch-4.ts";
import { NOIDA_SECTOR_PREMIUM_BATCH_1 } from "@/lib/seo-pages/noida-sector-premium-batch-1.ts";
import { NOIDA_SECTOR_PREMIUM_BATCH_2 } from "@/lib/seo-pages/noida-sector-premium-batch-2.ts";
import { NOIDA_SECTOR_PREMIUM_BATCH_3 } from "@/lib/seo-pages/noida-sector-premium-batch-3.ts";
import { NOIDA_SECTOR_PREMIUM_BATCH_4 } from "@/lib/seo-pages/noida-sector-premium-batch-4.ts";
import { NOIDA_SECTOR_PREMIUM_BATCH_5 } from "@/lib/seo-pages/noida-sector-premium-batch-5.ts";
import { DELHI_BRAND_BATCH_A } from "@/lib/seo-pages/delhi-brand-batch-a.ts";
import { DELHI_BRAND_BATCH_B } from "@/lib/seo-pages/delhi-brand-batch-b.ts";
import { DELHI_BRAND_BATCH_C } from "@/lib/seo-pages/delhi-brand-batch-c.ts";
import { DELHI_BRAND_BATCH_D } from "@/lib/seo-pages/delhi-brand-batch-d.ts";
import { GURGAON_BRAND_BATCH_A } from "@/lib/seo-pages/gurgaon-brand-batch-a.ts";
import { GURGAON_BRAND_BATCH_B } from "@/lib/seo-pages/gurgaon-brand-batch-b.ts";
import { GURGAON_BRAND_BATCH_C } from "@/lib/seo-pages/gurgaon-brand-batch-c.ts";
import { GURGAON_BRAND_BATCH_D } from "@/lib/seo-pages/gurgaon-brand-batch-d.ts";
import { NOIDA_BRAND_BATCH_A } from "@/lib/seo-pages/noida-brand-batch-a.ts";
import { NOIDA_BRAND_BATCH_B } from "@/lib/seo-pages/noida-brand-batch-b.ts";
import { NOIDA_BRAND_BATCH_C } from "@/lib/seo-pages/noida-brand-batch-c.ts";
import { NOIDA_BRAND_BATCH_D } from "@/lib/seo-pages/noida-brand-batch-d.ts";
import { TRICITY_BRAND_BATCH_A } from "@/lib/seo-pages/tricity-brand-batch-a.ts";
import { NORTH_DELHI_BATCH_A } from "@/lib/seo-pages/north-delhi-batch-a.ts";
import { NORTH_DELHI_BATCH_B } from "@/lib/seo-pages/north-delhi-batch-b.ts";
import { NORTH_DELHI_BATCH_C } from "@/lib/seo-pages/north-delhi-batch-c.ts";
import { NORTH_DELHI_BATCH_D } from "@/lib/seo-pages/north-delhi-batch-d.ts";
import { FARIDABAD_SERVICE_BATCH_A } from "@/lib/seo-pages/faridabad-service-batch-a.ts";
import { FARIDABAD_SERVICE_BATCH_B } from "@/lib/seo-pages/faridabad-service-batch-b.ts";
import { FARIDABAD_SERVICE_BATCH_C } from "@/lib/seo-pages/faridabad-service-batch-c.ts";
import { FARIDABAD_SERVICE_BATCH_D } from "@/lib/seo-pages/faridabad-service-batch-d.ts";
import { PRICING_HUB_BATCH_A } from "@/lib/seo-pages/pricing-hub-batch-a.ts";
import { PRICING_HUB_BATCH_B } from "@/lib/seo-pages/pricing-hub-batch-b.ts";
import { PRICING_HUB_BATCH_C } from "@/lib/seo-pages/pricing-hub-batch-c.ts";
import { WEST_DELHI_BATCH_A } from "@/lib/seo-pages/west-delhi-batch-a.ts";
import { WEST_DELHI_BATCH_B } from "@/lib/seo-pages/west-delhi-batch-b.ts";
import { SOUTH_DELHI_FURNITURE_BATCH_1 } from "@/lib/seo-pages/south-delhi-furniture-batch-1.ts";
import { SOUTH_DELHI_RECLINER_BATCH_1 } from "@/lib/seo-pages/south-delhi-recliner-batch-1.ts";
import { SOUTH_DELHI_RECLINER_P1 } from "@/lib/seo-pages/south-delhi-recliner-p1.ts";
import { SOUTH_DELHI_RECLINER_P2 } from "@/lib/seo-pages/south-delhi-recliner-p2.ts";
import { SOUTH_DELHI_RECLINER_P3 } from "@/lib/seo-pages/south-delhi-recliner-p3.ts";
import { SOUTH_DELHI_RECLINER_P4 } from "@/lib/seo-pages/south-delhi-recliner-p4.ts";
import { SOUTH_DELHI_RECLINER_P5 } from "@/lib/seo-pages/south-delhi-recliner-p5.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_1 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-1.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_2_P5 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-2-p5.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_2_P4 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-2-p4.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_2_P3 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-2-p3.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_2_P2 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-2-p2.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_2_P1 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-2-p1.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_3_P5 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-3-p5.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_3_P4 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-3-p4.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_3_P3 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-3-p3.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_3_P1 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-3-p1.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_3_P2 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-3-p2.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_4_P5 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-4-p5.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_4_P3 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-4-p3.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_4_P2 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-4-p2.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_4_P4 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-4-p4.ts";
import { GURGAON_PREMIUM_LOCALITY_BATCH_4_P1 } from "@/lib/seo-pages/gurgaon-premium-locality-batch-4-p1.ts";
import { SOUTH_DELHI_AUTHORITY_P1 } from "@/lib/seo-pages/south-delhi-authority-p1.ts";
import { SOUTH_DELHI_AUTHORITY_P2 } from "@/lib/seo-pages/south-delhi-authority-p2.ts";
import { SOUTH_DELHI_AUTHORITY_P3 } from "@/lib/seo-pages/south-delhi-authority-p3.ts";
import { SOUTH_DELHI_AUTHORITY_P4 } from "@/lib/seo-pages/south-delhi-authority-p4.ts";
import { SOUTH_DELHI_AUTHORITY_P5 } from "@/lib/seo-pages/south-delhi-authority-p5.ts";
import { WEST_DELHI_HUB_PAGES } from "@/lib/seo-pages/west-delhi-hub-pages.ts";
import { WEST_DELHI_RECLINER_PAGES } from "@/lib/seo-pages/west-delhi-recliner-pages.ts";
import { WEST_DELHI_FURNITURE_LOCALITY_PAGES } from "@/lib/seo-pages/west-delhi-furniture-locality-pages.ts";
import { areasWeServePage } from "@/lib/seo-pages/areas-we-serve-page.ts";
import { DELHI_RECLINER_BATCH_1 } from "@/lib/seo-pages/delhi-recliner-batch-1.ts";
import { DELHI_RECLINER_BATCH_2 } from "@/lib/seo-pages/delhi-recliner-batch-2.ts";
import { GURGAON_RECLINER_NEW_BATCH_1 } from "@/lib/seo-pages/gurgaon-recliner-new-batch-1.ts";
import { GURGAON_RECLINER_NEW_BATCH_2 } from "@/lib/seo-pages/gurgaon-recliner-new-batch-2.ts";
import { GURGAON_RECLINER_NEW_BATCH_3 } from "@/lib/seo-pages/gurgaon-recliner-new-batch-3.ts";
import { GURGAON_RECLINER_NEW_BATCH_4 } from "@/lib/seo-pages/gurgaon-recliner-new-batch-4.ts";
import { PROGRAMMATIC_SECTOR_PAGES } from "@/lib/seo-pages/programmatic-sector-pages.ts";
import { SOUTH_DELHI_MISSING_REPAIR_PAGES } from "@/lib/seo-pages/south-delhi-missing-repair-pages.ts";
import { WEST_DELHI_MISSING_RECLINER_PAGES } from "@/lib/seo-pages/west-delhi-missing-recliner-pages.ts";
import { NORTH_DELHI_MISSING_REPAIR_PAGES } from "@/lib/seo-pages/north-delhi-missing-repair-pages.ts";
import { NORTH_DELHI_PHASE2_REPAIR_PAGES } from "@/lib/seo-pages/north-delhi-phase2-repair-pages.ts";

// Combine all page collections into a single registry
export const ALL_SEO_PAGES: SeoPageData[] = [
  ...ALL_SERVICE_PAGES,
  ...ALL_LOCATION_PAGES,
  ...NEAR_ME_PAGES,
  ...PROBLEM_PRICE_PAGES_1,
  ...PROBLEM_PRICE_PAGES_2,
  ...TRUST_PAGES,
  ...AREA_PAGES_1,
  ...AREA_PAGES_2,
  ...FURNITURE_TYPE_PAGES,
  ...BRAND_PAGES,
  ...LANDMARK_PAGES_1,
  ...LANDMARK_PAGES_2,
  ...DELHI_SOFA_PAGES_1,
  ...DELHI_SOFA_PAGES_2,
  ...DELHI_FURNITURE_PAGES,
  ...NOIDA_SECTOR_PAGES,
  ...GURGAON_SECTOR_PAGES,
  ...REPAIR_PROBLEM_PAGES_1,
  ...REPAIR_PROBLEM_PAGES_3,
  ...NEAR_ME_DELHI_PAGES,
  ...HOME_SERVICE_DELHI_PAGES,
  ...URGENCY_DELHI_PAGES,
  ...COST_DELHI_PAGES,
  ...FURNITURE_SUBTYPE_DELHI_PAGES,
  ...SETTING_DELHI_PAGES,
  ...DOORSTEP_DELHI_PAGES,
  ...GALLERY_DELHI_PAGES,
  ...DELHI_MICRO_LOCATION_PAGES,
  ...GURGAON_MICRO_LOCATION_PAGES,
  ...NOIDA_GHAZIABAD_MICRO_PAGES,
  ...FARIDABAD_MICRO_PAGES,
  ...SOFA_CHILD_DELHI_PAGES,
  ...SOFA_CHILD_NCR_PAGES,
  ...CRAWL_BOOST_PAGES,
  leatherSofaRepairDelhi,
  sofaRepairDwarka,
  recliferSofaRepairDelhi,
  ...NEW_DELHI_GURGAON_PAGES,
  ...NEW_NOIDA_GHAZIABAD_PAGES,
  ...NEW_MIXED_PAGES,
  ...MICRO_LOCATION_BATCH_2,
  ...MICRO_LOCATION_BATCH_1,
  ...MICRO_LOCATION_BATCH_3,
  ...MICRO_LOCATION_BATCH_4,
  ...MICRO_LOCATION_BATCH_5,
  ...MICRO_LOCATION_BATCH_6,
  ...MICRO_LOCATION_BATCH_7,
  ...LEATHER_RECLINER_BATCH_1,
  ...LEATHER_RECLINER_BATCH_2,
  ...LEATHER_RECLINER_BATCH_3,
  ...SOUTH_DELHI_BATCH_1,
  ...SOUTH_DELHI_BATCH_2,
  ...SOUTH_DELHI_BATCH_3,
  ...GURGAON_DLF_BATCH_1,
  ...GURGAON_DLF_BATCH_2,
  ...GURGAON_DLF_BATCH_3,
  ...NOIDA_AUTHORITY_BATCH_1,
  ...NOIDA_AUTHORITY_BATCH_2,
  ...NOIDA_AUTHORITY_BATCH_3,
  ...AUTHORITY_BATCH_1,
  ...AUTHORITY_BATCH_2,
  ...AUTHORITY_BATCH_3,
  ...AUTHORITY_BATCH_4,
  ...RECLINER_AUTHORITY_BATCH_1,
  ...RECLINER_AUTHORITY_BATCH_2,
  ...RECLINER_AUTHORITY_BATCH_3,
  ...SOUTH_DELHI_BATCH_4,
  ...SOUTH_DELHI_BATCH_5,
  ...GURGAON_LUXURY_BATCH_1,
  ...GURGAON_LUXURY_BATCH_2,
  ...GURGAON_NEW_CLUSTER_BATCH_1,
  ...GURGAON_NEW_CLUSTER_BATCH_2,
  ...GURGAON_SERVICE_BATCH_1,
  ...GURGAON_SERVICE_BATCH_2,
  ...GURGAON_PREMIUM_BATCH_1,
  ...GURGAON_PREMIUM_BATCH_2,
  ...DELHI_LUXURY_BATCH_1,
  ...DELHI_LUXURY_BATCH_2,
  ...NOIDA_SERVICE_BATCH_1,
  ...NOIDA_SERVICE_BATCH_2,
  ...NOIDA_SERVICE_BATCH_3,
  ...NOIDA_SERVICE_BATCH_4,
  ...NOIDA_SECTOR_PREMIUM_BATCH_1,
  ...NOIDA_SECTOR_PREMIUM_BATCH_2,
  ...NOIDA_SECTOR_PREMIUM_BATCH_3,
  ...NOIDA_SECTOR_PREMIUM_BATCH_4,
  ...NOIDA_SECTOR_PREMIUM_BATCH_5,
  ...DELHI_BRAND_BATCH_A,
  ...DELHI_BRAND_BATCH_B,
  ...DELHI_BRAND_BATCH_C,
  ...DELHI_BRAND_BATCH_D,
  ...GURGAON_BRAND_BATCH_A,
  ...GURGAON_BRAND_BATCH_B,
  ...GURGAON_BRAND_BATCH_C,
  ...GURGAON_BRAND_BATCH_D,
  ...NOIDA_BRAND_BATCH_A,
  ...NOIDA_BRAND_BATCH_B,
  ...NOIDA_BRAND_BATCH_C,
  ...NOIDA_BRAND_BATCH_D,
  ...TRICITY_BRAND_BATCH_A,
  ...NORTH_DELHI_BATCH_A,
  ...NORTH_DELHI_BATCH_B,
  ...NORTH_DELHI_BATCH_C,
  ...NORTH_DELHI_BATCH_D,
  ...FARIDABAD_SERVICE_BATCH_A,
  ...FARIDABAD_SERVICE_BATCH_B,
  ...FARIDABAD_SERVICE_BATCH_C,
  ...FARIDABAD_SERVICE_BATCH_D,
  ...PRICING_HUB_BATCH_A,
  ...PRICING_HUB_BATCH_B,
  ...PRICING_HUB_BATCH_C,
  ...WEST_DELHI_BATCH_A,
  ...WEST_DELHI_BATCH_B,
  ...SOUTH_DELHI_FURNITURE_BATCH_1,
  ...SOUTH_DELHI_RECLINER_BATCH_1,
  ...SOUTH_DELHI_RECLINER_P1,
  ...SOUTH_DELHI_RECLINER_P2,
  ...SOUTH_DELHI_RECLINER_P3,
  ...SOUTH_DELHI_RECLINER_P4,
  ...SOUTH_DELHI_RECLINER_P5,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_1,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_2_P5,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_2_P4,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_2_P3,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_2_P2,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_2_P1,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_3_P5,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_3_P4,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_3_P3,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_3_P1,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_3_P2,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_4_P1,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_4_P4,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_4_P2,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_4_P3,
  ...GURGAON_PREMIUM_LOCALITY_BATCH_4_P5,
  ...SOUTH_DELHI_AUTHORITY_P1,
  ...SOUTH_DELHI_AUTHORITY_P2,
  ...SOUTH_DELHI_AUTHORITY_P3,
  ...SOUTH_DELHI_AUTHORITY_P4,
  ...SOUTH_DELHI_AUTHORITY_P5,
  ...WEST_DELHI_HUB_PAGES,
  ...WEST_DELHI_RECLINER_PAGES,
  ...WEST_DELHI_FURNITURE_LOCALITY_PAGES,
  areasWeServePage,
  ...DELHI_RECLINER_BATCH_1,
  ...DELHI_RECLINER_BATCH_2,
  ...GURGAON_RECLINER_NEW_BATCH_1,
  ...GURGAON_RECLINER_NEW_BATCH_2,
  ...GURGAON_RECLINER_NEW_BATCH_3,
  ...GURGAON_RECLINER_NEW_BATCH_4,
  // Programmatic pipeline pages — built via createSeoPage → buildPageData
  ...PROGRAMMATIC_SECTOR_PAGES,
  // South Delhi — missing repair pages (GK1/GK2/GK3 + Maharani Bagh)
  ...SOUTH_DELHI_MISSING_REPAIR_PAGES,
  ...WEST_DELHI_MISSING_RECLINER_PAGES,
  ...NORTH_DELHI_MISSING_REPAIR_PAGES,
  ...NORTH_DELHI_PHASE2_REPAIR_PAGES,
];

// Slug → SeoPageData lookup map for O(1) access in the dynamic route
const PAGE_MAP = new Map<string, SeoPageData>();
for (const page of ALL_SEO_PAGES) {
  PAGE_MAP.set(page.slug, page);
}

/** Look up a page by its slug. Returns undefined if not found. */
export function getPageBySlug(slug: string): SeoPageData | undefined {
  return PAGE_MAP.get(slug);
}

/**
 * Returns all registered page slugs for sitemap generation.
 * Priority is assigned based on page type.
 */
export function getAllSlugsForSitemap(): { slug: string; priority: string }[] {
  return ALL_SEO_PAGES.map((page) => {
    // High-traffic "near me" and Delhi service pages get highest priority
    const isHighTraffic =
      page.slug.includes("near-me") || page.slug.endsWith("-delhi");
    return {
      slug: page.slug,
      priority: isHighTraffic ? "0.9" : "0.8",
    };
  });
}
