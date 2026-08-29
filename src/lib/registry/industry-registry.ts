/**
 * INDUSTRY_REGISTRY
 *
 * Reusable industry definitions for B2B service pages.
 * The `industries.ts` content module renders relevant entries
 * based on the commercial locality's industry mix.
 */

export type IndustryKey =
  | "it"
  | "hospital"
  | "school"
  | "coworking"
  | "hotel"
  | "government"
  | "bank"
  | "retail"
  | "architect"
  | "law-firm"
  | "bpo"
  | "manufacturing";

export type IndustryEntry = {
  key: IndustryKey;
  name: string;
  description: string;
  /** Icon name hint for the renderer — uses lucide-react icon names */
  icon: string;
};

export const INDUSTRY_REGISTRY: readonly IndustryEntry[] = [
  { key: "it", name: "IT & Tech Companies", description: "Software firms, startups and tech offices with large ergonomic chair fleets.", icon: "Monitor" },
  { key: "hospital", name: "Hospitals & Clinics", description: "Medical facilities needing durable, hygienic seating repair and maintenance.", icon: "Building2" },
  { key: "school", name: "Schools & Colleges", description: "Educational institutions requiring bulk student and faculty chair repairs.", icon: "GraduationCap" },
  { key: "coworking", name: "Coworking Spaces", description: "Shared workspaces needing regular chair maintenance and quick turnaround.", icon: "Users" },
  { key: "hotel", name: "Hotels & Hospitality", description: "Hotels and restaurants requiring premium chair restoration and upholstery.", icon: "Hotel" },
  { key: "government", name: "Government Offices", description: "Central and state government offices needing GST-compliant furniture repair.", icon: "Landmark" },
  { key: "bank", name: "Banks & NBFCs", description: "Banking institutions requiring professional chair repair with corporate invoicing.", icon: "Banknote" },
  { key: "retail", name: "Retail & Showrooms", description: "Retail stores and showrooms needing display and staff seating maintenance.", icon: "ShoppingBag" },
  { key: "architect", name: "Architect & Design Firms", description: "Design studios requiring high-quality ergonomic and aesthetic chair repairs.", icon: "Compass" },
  { key: "law-firm", name: "Law Firms", description: "Legal offices needing premium executive and conference chair restoration.", icon: "Scale" },
];
