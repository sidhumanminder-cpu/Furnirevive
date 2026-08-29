export const DIMENSION_REGISTRY_VERSION = 1;

export type TemplateVariant = "layout" | "material" | "style" | "finish" | "budget" | "renovation" | "commercial" | "repair" | "hub";

export type DimensionEntry = {
  readonly slug: string;
  readonly displayName: string;
  readonly urlPrefix: string;
  readonly generatorKey: string;
  readonly pagePriority: number;
  readonly searchDemandPriority: number;
  readonly commercialIntent: "low" | "medium" | "high" | "very-high";
  readonly templateVariant: TemplateVariant;
  readonly enabledForMarkets: readonly string[];
  readonly isActive: boolean;
};

export const DIMENSION_REGISTRY: readonly DimensionEntry[] = [
  // Layouts
  { slug: "l-shape", displayName: "L-Shape", urlPrefix: "l-shape-modular-kitchen", generatorKey: "layout", pagePriority: 0.8, searchDemandPriority: 90, commercialIntent: "high", templateVariant: "layout", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "u-shape", displayName: "U-Shape", urlPrefix: "u-shape-modular-kitchen", generatorKey: "layout", pagePriority: 0.8, searchDemandPriority: 85, commercialIntent: "high", templateVariant: "layout", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "parallel", displayName: "Parallel", urlPrefix: "parallel-modular-kitchen", generatorKey: "layout", pagePriority: 0.75, searchDemandPriority: 80, commercialIntent: "high", templateVariant: "layout", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "straight", displayName: "Straight", urlPrefix: "straight-modular-kitchen", generatorKey: "layout", pagePriority: 0.7, searchDemandPriority: 70, commercialIntent: "medium", templateVariant: "layout", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  // Materials
  { slug: "acrylic", displayName: "Acrylic", urlPrefix: "acrylic-modular-kitchen", generatorKey: "material", pagePriority: 0.8, searchDemandPriority: 90, commercialIntent: "high", templateVariant: "material", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "laminate", displayName: "Laminate", urlPrefix: "laminate-modular-kitchen", generatorKey: "material", pagePriority: 0.75, searchDemandPriority: 85, commercialIntent: "high", templateVariant: "material", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "hdhmr", displayName: "HDHMR", urlPrefix: "hdhmr-modular-kitchen", generatorKey: "material", pagePriority: 0.75, searchDemandPriority: 75, commercialIntent: "high", templateVariant: "material", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "marine-ply", displayName: "Marine Ply", urlPrefix: "marine-ply-modular-kitchen", generatorKey: "material", pagePriority: 0.7, searchDemandPriority: 70, commercialIntent: "medium", templateVariant: "material", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "membrane", displayName: "Membrane", urlPrefix: "membrane-modular-kitchen", generatorKey: "material", pagePriority: 0.7, searchDemandPriority: 65, commercialIntent: "medium", templateVariant: "material", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  // Styles
  { slug: "modern", displayName: "Modern Style", urlPrefix: "modern-modular-kitchen", generatorKey: "style", pagePriority: 0.75, searchDemandPriority: 80, commercialIntent: "high", templateVariant: "style", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "contemporary", displayName: "Contemporary Style", urlPrefix: "contemporary-modular-kitchen", generatorKey: "style", pagePriority: 0.75, searchDemandPriority: 75, commercialIntent: "high", templateVariant: "style", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "minimalist", displayName: "Minimalist Style", urlPrefix: "minimalist-modular-kitchen", generatorKey: "style", pagePriority: 0.75, searchDemandPriority: 75, commercialIntent: "medium", templateVariant: "style", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "scandinavian", displayName: "Scandinavian Style", urlPrefix: "scandinavian-modular-kitchen", generatorKey: "style", pagePriority: 0.7, searchDemandPriority: 65, commercialIntent: "medium", templateVariant: "style", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  // Finishes
  { slug: "high-gloss", displayName: "High Gloss Finish", urlPrefix: "high-gloss-modular-kitchen", generatorKey: "finish", pagePriority: 0.7, searchDemandPriority: 75, commercialIntent: "high", templateVariant: "finish", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "matte-finish", displayName: "Matte Finish", urlPrefix: "matte-finish-modular-kitchen", generatorKey: "finish", pagePriority: 0.7, searchDemandPriority: 70, commercialIntent: "medium", templateVariant: "finish", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "textured", displayName: "Textured Finish", urlPrefix: "textured-modular-kitchen", generatorKey: "finish", pagePriority: 0.7, searchDemandPriority: 65, commercialIntent: "medium", templateVariant: "finish", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "dual-tone", displayName: "Dual-Tone Finish", urlPrefix: "dual-tone-modular-kitchen", generatorKey: "finish", pagePriority: 0.7, searchDemandPriority: 65, commercialIntent: "medium", templateVariant: "finish", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  // Budget
  { slug: "budget", displayName: "Budget Kitchen", urlPrefix: "budget-modular-kitchen", generatorKey: "budget", pagePriority: 0.75, searchDemandPriority: 85, commercialIntent: "very-high", templateVariant: "budget", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "luxury", displayName: "Luxury Kitchen", urlPrefix: "luxury-modular-kitchen", generatorKey: "budget", pagePriority: 0.75, searchDemandPriority: 80, commercialIntent: "very-high", templateVariant: "budget", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  // Renovation
  { slug: "renovation", displayName: "Kitchen Renovation", urlPrefix: "modular-kitchen-renovation", generatorKey: "renovation", pagePriority: 0.8, searchDemandPriority: 90, commercialIntent: "very-high", templateVariant: "renovation", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "remodeling", displayName: "Kitchen Remodeling", urlPrefix: "kitchen-remodeling", generatorKey: "renovation", pagePriority: 0.8, searchDemandPriority: 85, commercialIntent: "very-high", templateVariant: "renovation", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
  { slug: "makeover", displayName: "Kitchen Makeover", urlPrefix: "kitchen-makeover", generatorKey: "renovation", pagePriority: 0.75, searchDemandPriority: 75, commercialIntent: "very-high", templateVariant: "renovation", enabledForMarkets: ["delhi-ncr", "chandigarh-tricity"], isActive: true },
] as const;

export function getDimensionsByGeneratorKey(generatorKey: string): readonly DimensionEntry[] {
  return DIMENSION_REGISTRY.filter((d) => d.generatorKey === generatorKey && d.isActive);
}

export function getDimensionBySlug(slug: string): DimensionEntry | undefined {
  return DIMENSION_REGISTRY.find((d) => d.slug === slug);
}
