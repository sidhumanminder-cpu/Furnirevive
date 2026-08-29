export type CommercialIntentGroup = "design" | "purchase" | "execution";

export type CommercialIntentEntry = {
  slug: string;
  intent: "company" | "manufacturer" | "showroom" | "dealer" | "designer" | "installation" | "contractors";
  group: CommercialIntentGroup;
  city: "delhi" | "gurgaon" | "noida" | "faridabad" | "ghaziabad" | "chandigarh" | "mohali" | "panchkula" | "tricity";
  cityName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
};

type IntentDef = {
  intent: CommercialIntentEntry["intent"];
  group: CommercialIntentGroup;
  h1Pattern: string;
};

type CityDef = {
  key: CommercialIntentEntry["city"];
  name: string;
};

const INTENTS: IntentDef[] = [
  { intent: "company", group: "design", h1Pattern: "Modular Kitchen Company in {City}" },
  { intent: "designer", group: "design", h1Pattern: "Modular Kitchen Designer in {City}" },
  { intent: "showroom", group: "purchase", h1Pattern: "Modular Kitchen Showroom in {City}" },
  { intent: "dealer", group: "purchase", h1Pattern: "Modular Kitchen Dealer in {City}" },
  { intent: "manufacturer", group: "purchase", h1Pattern: "Modular Kitchen Manufacturer in {City}" },
  { intent: "installation", group: "execution", h1Pattern: "Modular Kitchen Installation in {City}" },
  { intent: "contractors", group: "execution", h1Pattern: "Modular Kitchen Contractors in {City}" },
];

const CITIES: CityDef[] = [
  { key: "delhi", name: "Delhi" },
  { key: "gurgaon", name: "Gurgaon" },
  { key: "noida", name: "Noida" },
  { key: "faridabad", name: "Faridabad" },
  { key: "ghaziabad", name: "Ghaziabad" },
  { key: "chandigarh", name: "Chandigarh" },
  { key: "mohali", name: "Mohali" },
  { key: "panchkula", name: "Panchkula" },
  { key: "tricity", name: "Chandigarh Tricity" },
];

function buildMetaDescription(intent: string, group: CommercialIntentGroup, cityName: string): string {
  switch (group) {
    case "design":
      return `Looking for a modular kitchen ${intent} in ${cityName}? FurniRevive offers free home visits, 3D design, and factory manufacturing across ${cityName}. Call for a free consultation.`;
    case "purchase":
      return `Find the best modular kitchen ${intent} in ${cityName}. FurniRevive — premium materials, Hettich/Blum hardware, transparent pricing. Free home visit.`;
    case "execution":
      return `Professional modular kitchen ${intent} in ${cityName}. FurniRevive handles site preparation, fitting, plumbing coordination, and alignment. 10-year warranty.`;
  }
}

function generateEntries(): CommercialIntentEntry[] {
  const entries: CommercialIntentEntry[] = [];
  for (const intentDef of INTENTS) {
    for (const cityDef of CITIES) {
      const slug = `modular-kitchen-${intentDef.intent}-${cityDef.key}`;
      const h1 = intentDef.h1Pattern.replace("{City}", cityDef.name);
      entries.push({
        slug,
        intent: intentDef.intent,
        group: intentDef.group,
        city: cityDef.key,
        cityName: cityDef.name,
        h1,
        metaTitle: `${h1} | FurniRevive`,
        metaDescription: buildMetaDescription(intentDef.intent, intentDef.group, cityDef.name),
      });
    }
  }
  return entries;
}

export const KITCHEN_COMMERCIAL_INTENT_REGISTRY: readonly CommercialIntentEntry[] = generateEntries();

const slugMap = new Map<string, CommercialIntentEntry>(
  KITCHEN_COMMERCIAL_INTENT_REGISTRY.map((e) => [e.slug, e])
);

export function getCommercialIntentEntry(slug: string): CommercialIntentEntry | undefined {
  return slugMap.get(slug);
}
