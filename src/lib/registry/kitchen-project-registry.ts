/**
 * Kitchen Project Registry
 *
 * 75 entries — 25 NCR residential projects × 3 tier-matched page types each.
 *
 * Luxury tier  (7 projects):  modular + luxury + island
 * Premium tier (9 projects):  modular + luxury + l-shape
 * Midrange tier (9 projects): modular + affordable + l-shape
 */

export type ProjectPageType = "modular" | "luxury" | "island" | "affordable" | "l-shape";
export type ProjectTier = "luxury" | "premium" | "midrange";
export type PossessionStatus = "ready" | "under-construction" | "new-launch";

export type KitchenProjectEntry = {
  urlSlug: string;
  projectSlug: string;
  projectName: string;
  pageType: ProjectPageType;
  projectTier: ProjectTier;
  builderSlug: string;
  builderName: string;
  citySlug: "delhi" | "gurgaon" | "noida" | "ghaziabad" | "faridabad";
  cityName: string;
  localitySlug: string;
  localityName: string;
  handoverYear: number;
  possessionStatus: PossessionStatus;
  averageUnitSize: string;
  unitCount: number;
  kitchenStyle: string;
  recommendedFinishes: string[];
  priceMin: number;
  priceMax: number;
  nearbyProjects: string[];
};

// ---------------------------------------------------------------------------
// Helper — builds the URL slug from project slug and page type
// ---------------------------------------------------------------------------
function slug(pageType: ProjectPageType, projectSlug: string): string {
  switch (pageType) {
    case "modular":    return `modular-kitchen-${projectSlug}`;
    case "luxury":     return `luxury-modular-kitchen-${projectSlug}`;
    case "island":     return `island-modular-kitchen-${projectSlug}`;
    case "affordable": return `affordable-modular-kitchen-${projectSlug}`;
    case "l-shape":    return `l-shape-modular-kitchen-${projectSlug}`;
  }
}

// ---------------------------------------------------------------------------
// LUXURY TIER — page types: modular, luxury, island
// ---------------------------------------------------------------------------

const LUXURY_PAGE_TYPES: ProjectPageType[] = ["modular", "luxury", "island"];

const LUXURY_PROJECTS: Omit<KitchenProjectEntry, "urlSlug" | "pageType">[] = [
  // 1. DLF The Crest
  {
    projectSlug: "dlf-the-crest",
    projectName: "DLF The Crest",
    projectTier: "luxury",
    builderSlug: "dlf",
    builderName: "DLF",
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "golf-course-road-gurgaon",
    localityName: "Golf Course Road, Gurgaon",
    handoverYear: 2016,
    possessionStatus: "ready",
    averageUnitSize: "5,200 sq ft",
    unitCount: 280,
    kitchenStyle: "open-island",
    recommendedFinishes: ["acrylic", "pu-finish", "glass"],
    priceMin: 280000,
    priceMax: 950000,
    nearbyProjects: ["dlf-camellias", "dlf-magnolias", "dlf-aralias", "m3m-golf-estate"],
  },
  // 2. DLF Camellias
  {
    projectSlug: "dlf-camellias",
    projectName: "DLF Camellias",
    projectTier: "luxury",
    builderSlug: "dlf",
    builderName: "DLF",
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "golf-course-road-gurgaon",
    localityName: "Golf Course Road, Gurgaon",
    handoverYear: 2020,
    possessionStatus: "ready",
    averageUnitSize: "8,400 sq ft",
    unitCount: 429,
    kitchenStyle: "open-island",
    recommendedFinishes: ["acrylic", "pu-finish", "glass"],
    priceMin: 350000,
    priceMax: 1200000,
    nearbyProjects: ["dlf-the-crest", "dlf-magnolias", "dlf-aralias", "m3m-golf-estate"],
  },
  // 3. DLF Magnolias
  {
    projectSlug: "dlf-magnolias",
    projectName: "DLF Magnolias",
    projectTier: "luxury",
    builderSlug: "dlf",
    builderName: "DLF",
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "dlf-phase-gurgaon",
    localityName: "DLF Phase 5, Gurgaon",
    handoverYear: 2011,
    possessionStatus: "ready",
    averageUnitSize: "6,500 sq ft",
    unitCount: 400,
    kitchenStyle: "open-island",
    recommendedFinishes: ["acrylic", "pu-finish", "glass"],
    priceMin: 300000,
    priceMax: 1000000,
    nearbyProjects: ["dlf-the-crest", "dlf-camellias", "dlf-aralias"],
  },
  // 4. DLF Aralias
  {
    projectSlug: "dlf-aralias",
    projectName: "DLF Aralias",
    projectTier: "luxury",
    builderSlug: "dlf",
    builderName: "DLF",
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "dlf-phase-gurgaon",
    localityName: "DLF Phase 5, Gurgaon",
    handoverYear: 2011,
    possessionStatus: "ready",
    averageUnitSize: "5,900 sq ft",
    unitCount: 332,
    kitchenStyle: "open-island",
    recommendedFinishes: ["acrylic", "pu-finish", "glass"],
    priceMin: 270000,
    priceMax: 900000,
    nearbyProjects: ["dlf-the-crest", "dlf-camellias", "dlf-magnolias"],
  },
  // 5. M3M Golf Estate
  {
    projectSlug: "m3m-golf-estate",
    projectName: "M3M Golf Estate",
    projectTier: "luxury",
    builderSlug: "m3m",
    builderName: "M3M",
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "golf-course-extension-gurgaon",
    localityName: "Golf Course Extension, Gurgaon",
    handoverYear: 2023,
    possessionStatus: "ready",
    averageUnitSize: "3,800 sq ft",
    unitCount: 1100,
    kitchenStyle: "open-island",
    recommendedFinishes: ["acrylic", "pu-finish", "glass"],
    priceMin: 260000,
    priceMax: 850000,
    nearbyProjects: ["dlf-the-crest", "ireo-victory-valley", "m3m-merlin"],
  },
  // 6. Ireo Victory Valley
  {
    projectSlug: "ireo-victory-valley",
    projectName: "Ireo Victory Valley",
    projectTier: "luxury",
    builderSlug: "ireo",
    builderName: "Ireo",
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "golf-course-extension-gurgaon",
    localityName: "Golf Course Extension, Gurgaon",
    handoverYear: 2018,
    possessionStatus: "ready",
    averageUnitSize: "3,200 sq ft",
    unitCount: 900,
    kitchenStyle: "open-island",
    recommendedFinishes: ["acrylic", "pu-finish", "glass"],
    priceMin: 250000,
    priceMax: 800000,
    nearbyProjects: ["m3m-golf-estate", "dlf-the-crest", "m3m-merlin"],
  },
  // 7. Godrej South Estate
  {
    projectSlug: "godrej-south-estate",
    projectName: "Godrej South Estate",
    projectTier: "luxury",
    builderSlug: "godrej",
    builderName: "Godrej Properties",
    citySlug: "delhi",
    cityName: "Delhi",
    localitySlug: "defence-colony",
    localityName: "Defence Colony, Delhi",
    handoverYear: 2025,
    possessionStatus: "under-construction",
    averageUnitSize: "3,500 sq ft",
    unitCount: 80,
    kitchenStyle: "open-island",
    recommendedFinishes: ["acrylic", "pu-finish", "glass"],
    priceMin: 280000,
    priceMax: 950000,
    nearbyProjects: ["dlf-the-crest", "godrej-woods", "dlf-camellias"],
  },
];

// ---------------------------------------------------------------------------
// PREMIUM TIER — page types: modular, luxury, l-shape
// ---------------------------------------------------------------------------

const PREMIUM_PAGE_TYPES: ProjectPageType[] = ["modular", "luxury", "l-shape"];

const PREMIUM_PROJECTS: Omit<KitchenProjectEntry, "urlSlug" | "pageType">[] = [
  // 8. DLF Arkade
  {
    projectSlug: "dlf-arkade",
    projectName: "DLF Arkade",
    projectTier: "premium",
    builderSlug: "dlf",
    builderName: "DLF",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-150-noida",
    localityName: "Sector 150, Noida",
    handoverYear: 2025,
    possessionStatus: "under-construction",
    averageUnitSize: "2,200 sq ft",
    unitCount: 600,
    kitchenStyle: "l-shape",
    recommendedFinishes: ["acrylic", "laminate", "glass"],
    priceMin: 175000,
    priceMax: 480000,
    nearbyProjects: ["tata-primanti", "godrej-woods", "ats-pristine", "ace-parkway"],
  },
  // 9. M3M Merlin
  {
    projectSlug: "m3m-merlin",
    projectName: "M3M Merlin",
    projectTier: "premium",
    builderSlug: "m3m",
    builderName: "M3M",
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "golf-course-extension-gurgaon",
    localityName: "Golf Course Extension, Gurgaon",
    handoverYear: 2022,
    possessionStatus: "ready",
    averageUnitSize: "2,600 sq ft",
    unitCount: 736,
    kitchenStyle: "l-shape",
    recommendedFinishes: ["acrylic", "laminate", "glass"],
    priceMin: 180000,
    priceMax: 520000,
    nearbyProjects: ["m3m-heights", "m3m-golf-estate", "emaar-palm-drive", "ireo-victory-valley"],
  },
  // 10. M3M Heights
  {
    projectSlug: "m3m-heights",
    projectName: "M3M Heights",
    projectTier: "premium",
    builderSlug: "m3m",
    builderName: "M3M",
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "golf-course-extension-gurgaon",
    localityName: "Golf Course Extension, Gurgaon",
    handoverYear: 2021,
    possessionStatus: "ready",
    averageUnitSize: "2,000 sq ft",
    unitCount: 980,
    kitchenStyle: "l-shape",
    recommendedFinishes: ["acrylic", "laminate", "glass"],
    priceMin: 160000,
    priceMax: 420000,
    nearbyProjects: ["m3m-merlin", "m3m-golf-estate", "emaar-palm-drive"],
  },
  // 11. Tata Primanti
  {
    projectSlug: "tata-primanti",
    projectName: "Tata Primanti",
    projectTier: "premium",
    builderSlug: "tata",
    builderName: "Tata Housing",
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "nirvana-country-gurgaon",
    localityName: "Nirvana Country, Gurgaon",
    handoverYear: 2017,
    possessionStatus: "ready",
    averageUnitSize: "3,000 sq ft",
    unitCount: 550,
    kitchenStyle: "l-shape",
    recommendedFinishes: ["acrylic", "laminate", "glass"],
    priceMin: 190000,
    priceMax: 560000,
    nearbyProjects: ["emaar-palm-drive", "m3m-heights", "mahagun-mezzaria"],
  },
  // 12. Emaar Palm Drive
  {
    projectSlug: "emaar-palm-drive",
    projectName: "Emaar Palm Drive",
    projectTier: "premium",
    builderSlug: "emaar",
    builderName: "Emaar India",
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    localitySlug: "golf-course-extension-gurgaon",
    localityName: "Golf Course Extension, Gurgaon",
    handoverYear: 2020,
    possessionStatus: "ready",
    averageUnitSize: "2,800 sq ft",
    unitCount: 430,
    kitchenStyle: "l-shape",
    recommendedFinishes: ["acrylic", "laminate", "glass"],
    priceMin: 185000,
    priceMax: 540000,
    nearbyProjects: ["tata-primanti", "m3m-merlin", "m3m-heights"],
  },
  // 13. Godrej Woods
  {
    projectSlug: "godrej-woods",
    projectName: "Godrej Woods",
    projectTier: "premium",
    builderSlug: "godrej",
    builderName: "Godrej Properties",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-150-noida",
    localityName: "Sector 150, Noida",
    handoverYear: 2023,
    possessionStatus: "ready",
    averageUnitSize: "2,400 sq ft",
    unitCount: 800,
    kitchenStyle: "l-shape",
    recommendedFinishes: ["acrylic", "laminate", "glass"],
    priceMin: 170000,
    priceMax: 460000,
    nearbyProjects: ["ats-pristine", "dlf-arkade", "ace-parkway", "mahagun-mezzaria"],
  },
  // 14. ATS Pristine
  {
    projectSlug: "ats-pristine",
    projectName: "ATS Pristine",
    projectTier: "premium",
    builderSlug: "ats",
    builderName: "ATS Infrastructure",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-150-noida",
    localityName: "Sector 150, Noida",
    handoverYear: 2019,
    possessionStatus: "ready",
    averageUnitSize: "1,900 sq ft",
    unitCount: 528,
    kitchenStyle: "l-shape",
    recommendedFinishes: ["acrylic", "laminate", "glass"],
    priceMin: 155000,
    priceMax: 400000,
    nearbyProjects: ["ats-one-hamlet", "godrej-woods", "dlf-arkade"],
  },
  // 15. ATS One Hamlet
  {
    projectSlug: "ats-one-hamlet",
    projectName: "ATS One Hamlet",
    projectTier: "premium",
    builderSlug: "ats",
    builderName: "ATS Infrastructure",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-78-noida",
    localityName: "Sector 78, Noida",
    handoverYear: 2020,
    possessionStatus: "ready",
    averageUnitSize: "1,800 sq ft",
    unitCount: 660,
    kitchenStyle: "l-shape",
    recommendedFinishes: ["acrylic", "laminate", "glass"],
    priceMin: 150000,
    priceMax: 400000,
    nearbyProjects: ["ats-pristine", "mahagun-mezzaria", "saya-gold-avenue"],
  },
  // 16. Mahagun Mezzaria
  {
    projectSlug: "mahagun-mezzaria",
    projectName: "Mahagun Mezzaria",
    projectTier: "premium",
    builderSlug: "mahagun",
    builderName: "Mahagun Group",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-78-noida",
    localityName: "Sector 78, Noida",
    handoverYear: 2022,
    possessionStatus: "ready",
    averageUnitSize: "2,100 sq ft",
    unitCount: 780,
    kitchenStyle: "l-shape",
    recommendedFinishes: ["acrylic", "laminate", "glass"],
    priceMin: 165000,
    priceMax: 440000,
    nearbyProjects: ["ats-one-hamlet", "godrej-woods", "mahagun-moderne"],
  },
];

// ---------------------------------------------------------------------------
// MIDRANGE TIER — page types: modular, affordable, l-shape
// ---------------------------------------------------------------------------

const MIDRANGE_PAGE_TYPES: ProjectPageType[] = ["modular", "affordable", "l-shape"];

const MIDRANGE_PROJECTS: Omit<KitchenProjectEntry, "urlSlug" | "pageType">[] = [
  // 17. Supertech Capetown
  {
    projectSlug: "supertech-capetown",
    projectName: "Supertech Capetown",
    projectTier: "midrange",
    builderSlug: "supertech",
    builderName: "Supertech",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-137-noida",
    localityName: "Sector 137, Noida",
    handoverYear: 2018,
    possessionStatus: "ready",
    averageUnitSize: "1,050 sq ft",
    unitCount: 2000,
    kitchenStyle: "compact-l-shape",
    recommendedFinishes: ["laminate", "membrane", "acrylic"],
    priceMin: 80000,
    priceMax: 170000,
    nearbyProjects: ["supertech-ecovillage", "ace-parkway", "saya-gold-avenue", "gaur-city"],
  },
  // 18. Supertech Ecovillage
  {
    projectSlug: "supertech-ecovillage",
    projectName: "Supertech Ecovillage",
    projectTier: "midrange",
    builderSlug: "supertech",
    builderName: "Supertech",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-137-noida",
    localityName: "Sector 137, Noida",
    handoverYear: 2020,
    possessionStatus: "ready",
    averageUnitSize: "980 sq ft",
    unitCount: 3200,
    kitchenStyle: "compact-l-shape",
    recommendedFinishes: ["laminate", "membrane", "acrylic"],
    priceMin: 75000,
    priceMax: 160000,
    nearbyProjects: ["supertech-capetown", "ace-parkway", "saya-gold-avenue"],
  },
  // 19. Ace Parkway
  {
    projectSlug: "ace-parkway",
    projectName: "Ace Parkway",
    projectTier: "midrange",
    builderSlug: "ace",
    builderName: "Ace",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-150-noida",
    localityName: "Sector 150, Noida",
    handoverYear: 2022,
    possessionStatus: "ready",
    averageUnitSize: "1,100 sq ft",
    unitCount: 1600,
    kitchenStyle: "compact-l-shape",
    recommendedFinishes: ["laminate", "membrane", "acrylic"],
    priceMin: 85000,
    priceMax: 175000,
    nearbyProjects: ["supertech-capetown", "godrej-woods", "ats-pristine", "gaur-city"],
  },
  // 20. Mahagun Moderne
  {
    projectSlug: "mahagun-moderne",
    projectName: "Mahagun Moderne",
    projectTier: "midrange",
    builderSlug: "mahagun",
    builderName: "Mahagun Group",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-78-noida",
    localityName: "Sector 78, Noida",
    handoverYear: 2019,
    possessionStatus: "ready",
    averageUnitSize: "1,200 sq ft",
    unitCount: 1800,
    kitchenStyle: "compact-l-shape",
    recommendedFinishes: ["laminate", "membrane", "acrylic"],
    priceMin: 90000,
    priceMax: 185000,
    nearbyProjects: ["mahagun-mezzaria", "ats-one-hamlet", "gaur-cascades"],
  },
  // 21. ATS Greens
  {
    projectSlug: "ats-greens",
    projectName: "ATS Greens",
    projectTier: "midrange",
    builderSlug: "ats",
    builderName: "ATS Infrastructure",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-100-noida",
    localityName: "Sector 100, Noida",
    handoverYear: 2010,
    possessionStatus: "ready",
    averageUnitSize: "1,400 sq ft",
    unitCount: 320,
    kitchenStyle: "compact-l-shape",
    recommendedFinishes: ["laminate", "membrane", "acrylic"],
    priceMin: 95000,
    priceMax: 200000,
    nearbyProjects: ["ats-pristine", "ats-one-hamlet", "mahagun-moderne"],
  },
  // 22. Gaur City
  {
    projectSlug: "gaur-city",
    projectName: "Gaur City",
    projectTier: "midrange",
    builderSlug: "gaur",
    builderName: "Gaursons",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-137-noida",
    localityName: "Sector 137, Noida",
    handoverYear: 2018,
    possessionStatus: "ready",
    averageUnitSize: "890 sq ft",
    unitCount: 5000,
    kitchenStyle: "compact-l-shape",
    recommendedFinishes: ["laminate", "membrane", "acrylic"],
    priceMin: 70000,
    priceMax: 150000,
    nearbyProjects: ["gaur-cascades", "supertech-capetown", "supertech-ecovillage", "saya-gold-avenue"],
  },
  // 23. Saya Gold Avenue
  {
    projectSlug: "saya-gold-avenue",
    projectName: "Saya Gold Avenue",
    projectTier: "midrange",
    builderSlug: "saya",
    builderName: "Saya Group",
    citySlug: "noida",
    cityName: "Noida",
    localitySlug: "sector-137-noida",
    localityName: "Sector 137, Noida",
    handoverYear: 2022,
    possessionStatus: "ready",
    averageUnitSize: "950 sq ft",
    unitCount: 2200,
    kitchenStyle: "compact-l-shape",
    recommendedFinishes: ["laminate", "membrane", "acrylic"],
    priceMin: 78000,
    priceMax: 165000,
    nearbyProjects: ["gaur-city", "supertech-capetown", "gaur-cascades", "ats-one-hamlet"],
  },
  // 24. Gaur Cascades
  {
    projectSlug: "gaur-cascades",
    projectName: "Gaur Cascades",
    projectTier: "midrange",
    builderSlug: "gaur",
    builderName: "Gaursons",
    citySlug: "ghaziabad",
    cityName: "Ghaziabad",
    localitySlug: "vaishali-ghaziabad",
    localityName: "Vaishali, Ghaziabad",
    handoverYear: 2021,
    possessionStatus: "ready",
    averageUnitSize: "1,050 sq ft",
    unitCount: 1400,
    kitchenStyle: "compact-l-shape",
    recommendedFinishes: ["laminate", "membrane", "acrylic"],
    priceMin: 80000,
    priceMax: 170000,
    nearbyProjects: ["gaur-city", "saya-gold-avenue", "supertech-ecovillage"],
  },
  // 25. BPTP Parklands
  {
    projectSlug: "bptp-parklands",
    projectName: "BPTP Parklands",
    projectTier: "midrange",
    builderSlug: "bptp",
    builderName: "BPTP",
    citySlug: "faridabad",
    cityName: "Faridabad",
    localitySlug: "sector-21c-faridabad",
    localityName: "Sector 21C, Faridabad",
    handoverYear: 2017,
    possessionStatus: "ready",
    averageUnitSize: "1,150 sq ft",
    unitCount: 900,
    kitchenStyle: "compact-l-shape",
    recommendedFinishes: ["laminate", "membrane", "acrylic"],
    priceMin: 82000,
    priceMax: 175000,
    nearbyProjects: ["gaur-cascades", "saya-gold-avenue", "supertech-capetown"],
  },
];

// ---------------------------------------------------------------------------
// Expand each project × page types → full entries
// ---------------------------------------------------------------------------

function expandEntries(
  projects: Omit<KitchenProjectEntry, "urlSlug" | "pageType">[],
  pageTypes: ProjectPageType[],
): KitchenProjectEntry[] {
  return projects.flatMap((project) =>
    pageTypes.map((pageType) => ({
      ...project,
      pageType,
      urlSlug: slug(pageType, project.projectSlug),
    })),
  );
}

export const KITCHEN_PROJECT_REGISTRY: readonly KitchenProjectEntry[] = [
  ...expandEntries(LUXURY_PROJECTS, LUXURY_PAGE_TYPES),   // 7 × 3 = 21
  ...expandEntries(PREMIUM_PROJECTS, PREMIUM_PAGE_TYPES), // 9 × 3 = 27
  ...expandEntries(MIDRANGE_PROJECTS, MIDRANGE_PAGE_TYPES), // 9 × 3 = 27
] as const;

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getProjectEntry(urlSlug: string): KitchenProjectEntry | undefined {
  return KITCHEN_PROJECT_REGISTRY.find((e) => e.urlSlug === urlSlug);
}

export function getProjectsByBuilder(builderSlug: string): KitchenProjectEntry[] {
  return KITCHEN_PROJECT_REGISTRY.filter(
    (e) => e.builderSlug === builderSlug && e.pageType === "modular",
  );
}

export function buildProjectFaqs(
  entry: KitchenProjectEntry,
): readonly { q: string; a: string }[] {
  const priceStr = `₹${(entry.priceMin / 100000).toFixed(1)}L–₹${(entry.priceMax / 100000).toFixed(0)}L`;
  const tierCopy =
    entry.projectTier === "luxury"
      ? "ultra-premium acrylic or PU-finish cabinets with handleless profiles"
      : entry.projectTier === "premium"
      ? "premium acrylic shutters, soft-close hardware, and quartz counters"
      : "high-quality laminate shutters with good-quality hinges and particle-board carcass";

  return [
    {
      q: `How much does a modular kitchen cost in ${entry.projectName}?`,
      a: `A modular kitchen in ${entry.projectName} typically costs ${priceStr} depending on kitchen size, finish, and layout. We offer free home visits and 3D designs before you commit.`,
    },
    {
      q: `Which kitchen layout fits ${entry.projectName} apartments?`,
      a: `Most ${entry.projectName} units have a ${entry.kitchenStyle} kitchen configuration with approximately ${entry.averageUnitSize} total apartment area. We measure the exact slab before designing.`,
    },
    {
      q: `What finishes do you recommend for ${entry.projectName}?`,
      a: `For ${entry.projectName}, we recommend ${tierCopy}. These finishes complement the project's interior quality and are easy to maintain.`,
    },
    {
      q: `How long does kitchen installation take in ${entry.projectName}?`,
      a: `Installation in ${entry.projectName} typically takes 10–14 days after design sign-off. We work during building society hours to avoid penalties.`,
    },
    {
      q: `Does FurniRevive have experience in ${entry.projectName}?`,
      a: `Yes. We have installed modular kitchens in ${entry.projectName} and other ${entry.builderName} projects in ${entry.cityName}. Our teams are familiar with the building layout, lift access, and society rules.`,
    },
    {
      q: `Do you provide a warranty for kitchens in ${entry.projectName}?`,
      a: `All our kitchen installations come with a 10-year structural warranty and 2-year hardware warranty. This applies to ${entry.projectName} and all other projects we serve.`,
    },
  ] as const;
}
