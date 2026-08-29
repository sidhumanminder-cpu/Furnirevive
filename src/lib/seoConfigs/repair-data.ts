export type CommonProblem = { label: string };
export type Brand = { name: string; note?: string };
export type MaterialGroup = { category: string; items: string[] };
export type CoverageType = { label: string };

export const COMMON_PROBLEMS: CommonProblem[] = [
  { label: "Sagging cushions & seat depression" },
  { label: "Broken or squeaky springs" },
  { label: "Torn or frayed upholstery fabric" },
  { label: "Loose or cracked wooden frame" },
  { label: "Leather peeling or cracking" },
  { label: "Recliner not opening or motor failure" },
  { label: "Pet scratch and claw damage" },
  { label: "Water stains and mould damage" },
  { label: "Cushion foam gone flat or hard" },
  { label: "Loose armrest or wobbly legs" },
];

export const BRANDS: Brand[] = [
  { name: "Natuzzi" },
  { name: "La-Z-Boy" },
  { name: "Durian" },
  { name: "Godrej Interio" },
  { name: "IKEA" },
  { name: "Urban Ladder" },
  { name: "Wakefit" },
  { name: "Royal Oak" },
];

export const MATERIAL_OPTIONS: MaterialGroup[] = [
  {
    category: "Fabric",
    items: ["Velvet", "Suede", "Chenille", "Linen", "Microfibre"],
  },
  {
    category: "Foam",
    items: ["32 Density", "40 Density", "HR Foam", "Memory Foam"],
  },
  {
    category: "Leather",
    items: ["Genuine Leather", "Synthetic Leather", "PU Leather", "Bonded Leather"],
  },
  {
    category: "Wood",
    items: ["Teak", "Sheesham", "Plywood", "MDF"],
  },
];

export const COVERAGE_TYPES: CoverageType[] = [
  { label: "Apartments" },
  { label: "Villas & Bungalows" },
  { label: "Offices" },
  { label: "Hotels" },
  { label: "Restaurants & Cafes" },
  { label: "Showrooms" },
];

export const SERVICES_GRID = [
  { name: "Sofa Upholstery", slug: "/sofa-upholstery-delhi", description: "Full fabric or leather reupholstery" },
  { name: "Foam Replacement", slug: "/sofa-foam-replacement-delhi", description: "Restore seat firmness and comfort" },
  { name: "Spring Repair", slug: "/sofa-spring-repair-delhi", description: "Fix sagging and broken springs" },
  { name: "Wooden Frame Repair", slug: "/wooden-sofa-repair-delhi", description: "Strengthen loose or cracked frames" },
  { name: "Leather Sofa Repair", slug: "/leather-sofa-repair-delhi", description: "Patch, recolour and restore leather" },
  { name: "Recliner Repair", slug: "/recliner-repair-delhi", description: "Mechanism, motor and frame repair" },
  { name: "Cushion Refilling", slug: "/sofa-repair-delhi", description: "Replace foam for renewed comfort" },
  { name: "Fabric Replacement", slug: "/sofa-repair-delhi", description: "Wide range of fabrics and textures" },
] as const;
