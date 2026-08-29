// ---------------------------------------------------------------------------
// Hub pages barrel — one file per city group
// Each city's hubs live in their own file (max ~400 lines each).
// Add new city files here and include exports in ALL_LOCATION_PAGES.
// ---------------------------------------------------------------------------

export {
  furnitureRepairNoida,
  furnitureRepairGurgaon,
  furnitureRepairGhaziabad,
  furnitureRepairFaridabad,
  sofaRepairNoida,
  sofaRepairGurgaon,
  sofaRepairGhaziabad,
  sofaRepairFaridabad,
} from "./ncr-hubs.ts";

export {
  sofaRepairChandigarh,
  reclinerRepairChandigarh,
  furnitureRepairChandigarh,
  sofaUpholsteryChandigarh,
  officeChairRepairChandigarh,
  sameDaySofaRepairChandigarh,
  doorstepSofaRepairChandigarh,
  leatherSofaRepairChandigarh,
  carpenterHomeServiceChandigarh,
  sofaRepairCostChandigarh,
  reclinerRepairCostChandigarh,
  furnitureRepairCostChandigarh,
} from "./chandigarh-hubs.ts";

export {
  sofaRepairMohali,
  reclinerRepairMohali,
  furnitureRepairMohali,
  sofaUpholsteryMohali,
  officeChairRepairMohali,
  sameDaySofaRepairMohali,
  doorstepSofaRepairMohali,
  leatherSofaRepairMohali,
  carpenterHomeServiceMohali,
  sofaRepairCostMohali,
  reclinerRepairCostMohali,
  furnitureRepairCostMohali,
} from "./mohali-hubs.ts";

export {
  sofaRepairPanchkula,
  reclinerRepairPanchkula,
  furnitureRepairPanchkula,
  sofaUpholsteryPanchkula,
  officeChairRepairPanchkula,
  sameDaySofaRepairPanchkula,
  doorstepSofaRepairPanchkula,
  leatherSofaRepairPanchkula,
  carpenterHomeServicePanchkula,
  sofaRepairCostPanchkula,
  reclinerRepairCostPanchkula,
  furnitureRepairCostPanchkula,
} from "./panchkula-hubs.ts";

// ---------------------------------------------------------------------------
// Future city files go here:
// ---------------------------------------------------------------------------

import type { SeoPageData } from "@/lib/seo-constants.ts";
import {
  furnitureRepairNoida,
  furnitureRepairGurgaon,
  furnitureRepairGhaziabad,
  furnitureRepairFaridabad,
  sofaRepairNoida,
  sofaRepairGurgaon,
  sofaRepairGhaziabad,
  sofaRepairFaridabad,
} from "./ncr-hubs.ts";
import {
  sofaRepairChandigarh,
  reclinerRepairChandigarh,
  furnitureRepairChandigarh,
  sofaUpholsteryChandigarh,
  officeChairRepairChandigarh,
  sameDaySofaRepairChandigarh,
  doorstepSofaRepairChandigarh,
  leatherSofaRepairChandigarh,
  carpenterHomeServiceChandigarh,
  sofaRepairCostChandigarh,
  reclinerRepairCostChandigarh,
  furnitureRepairCostChandigarh,
} from "./chandigarh-hubs.ts";
import {
  sofaRepairMohali,
  reclinerRepairMohali,
  furnitureRepairMohali,
  sofaUpholsteryMohali,
  officeChairRepairMohali,
  sameDaySofaRepairMohali,
  doorstepSofaRepairMohali,
  leatherSofaRepairMohali,
  carpenterHomeServiceMohali,
  sofaRepairCostMohali,
  reclinerRepairCostMohali,
  furnitureRepairCostMohali,
} from "./mohali-hubs.ts";

import {
  sofaRepairPanchkula,
  reclinerRepairPanchkula,
  furnitureRepairPanchkula,
  sofaUpholsteryPanchkula,
  officeChairRepairPanchkula,
  sameDaySofaRepairPanchkula,
  doorstepSofaRepairPanchkula,
  leatherSofaRepairPanchkula,
  carpenterHomeServicePanchkula,
  sofaRepairCostPanchkula,
  reclinerRepairCostPanchkula,
  furnitureRepairCostPanchkula,
} from "./panchkula-hubs.ts";

export const ALL_LOCATION_PAGES: SeoPageData[] = [
  furnitureRepairNoida,
  furnitureRepairGurgaon,
  furnitureRepairGhaziabad,
  furnitureRepairFaridabad,
  sofaRepairNoida,
  sofaRepairGurgaon,
  sofaRepairGhaziabad,
  sofaRepairFaridabad,
  sofaRepairChandigarh,
  reclinerRepairChandigarh,
  furnitureRepairChandigarh,
  sofaUpholsteryChandigarh,
  officeChairRepairChandigarh,
  sameDaySofaRepairChandigarh,
  doorstepSofaRepairChandigarh,
  leatherSofaRepairChandigarh,
  carpenterHomeServiceChandigarh,
  sofaRepairCostChandigarh,
  reclinerRepairCostChandigarh,
  furnitureRepairCostChandigarh,
  sofaRepairMohali,
  reclinerRepairMohali,
  furnitureRepairMohali,
  sofaUpholsteryMohali,
  officeChairRepairMohali,
  sameDaySofaRepairMohali,
  doorstepSofaRepairMohali,
  leatherSofaRepairMohali,
  carpenterHomeServiceMohali,
  sofaRepairCostMohali,
  reclinerRepairCostMohali,
  furnitureRepairCostMohali,
  sofaRepairPanchkula,
  reclinerRepairPanchkula,
  furnitureRepairPanchkula,
  sofaUpholsteryPanchkula,
  officeChairRepairPanchkula,
  sameDaySofaRepairPanchkula,
  doorstepSofaRepairPanchkula,
  leatherSofaRepairPanchkula,
  carpenterHomeServicePanchkula,
  sofaRepairCostPanchkula,
  reclinerRepairCostPanchkula,
  furnitureRepairCostPanchkula,
];
