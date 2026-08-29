/**
 * Pyramid internal linking structure for SEO pages.
 *
 * Generates 5–7 hierarchical links per page routing authority to the
 * correct cluster hub based on page type (sofa/furniture/recliner) and
 * region (Delhi / South Delhi / Gurgaon / Noida / Ghaziabad / Faridabad).
 *
 * Cluster authority hubs targeted:
 *   Sofa:       /sofa-repair-delhi (apex)
 *   Furniture:  /furniture-repair-delhi
 *   Recliner:   /recliner-repair-delhi
 *   South Delhi:/sofa-repair-south-delhi, /recliner-repair-south-delhi
 *   Gurgaon:    /sofa-repair-gurgaon, /furniture-repair-gurgaon, /recliner-repair-gurgaon
 *   Noida:      /sofa-repair-noida, /furniture-repair-noida, /recliner-repair-noida
 */

type Link = { label: string; href: string };

// ---------- Deterministic helpers ----------

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h = h & h;
  }
  return Math.abs(h);
}

function pickAnchor(pool: readonly string[], slug: string, salt: number): string {
  const idx = ((hash(slug) + salt) % pool.length + pool.length) % pool.length;
  return pool[idx];
}

// ---------- Anchor-text variation pools ----------

const SOFA_DELHI_ANCHORS = [
  "sofa repair in Delhi",
  "Delhi sofa repair services",
  "professional sofa repair Delhi",
  "sofa repair experts Delhi",
  "best sofa repair Delhi",
  "trusted sofa repair Delhi",
  "sofa restoration Delhi",
  "Delhi sofa repair specialists",
] as const;

const FURNITURE_DELHI_ANCHORS = [
  "furniture repair Delhi",
  "Delhi furniture repair services",
  "professional furniture repair Delhi",
  "furniture repair experts Delhi",
  "best furniture repair Delhi",
  "trusted furniture repair Delhi",
  "furniture restoration Delhi",
  "Delhi furniture repair specialists",
] as const;

const RECLINER_DELHI_ANCHORS = [
  "recliner repair Delhi",
  "Delhi recliner repair services",
  "professional recliner repair Delhi",
  "recliner repair experts Delhi",
  "best recliner repair Delhi",
  "trusted recliner repair Delhi",
  "recliner sofa repair Delhi",
  "Delhi recliner repair specialists",
] as const;

const SOFA_GURGAON_ANCHORS = [
  "sofa repair Gurgaon",
  "Gurgaon sofa repair services",
  "professional sofa repair Gurgaon",
  "sofa repair experts Gurgaon",
  "best sofa repair Gurgaon",
  "trusted sofa repair Gurgaon",
] as const;

const FURNITURE_GURGAON_ANCHORS = [
  "furniture repair Gurgaon",
  "Gurgaon furniture repair services",
  "professional furniture repair Gurgaon",
  "furniture repair experts Gurgaon",
  "best furniture repair Gurgaon",
  "trusted furniture repair Gurgaon",
] as const;

const RECLINER_GURGAON_ANCHORS = [
  "recliner repair Gurgaon",
  "Gurgaon recliner repair services",
  "professional recliner repair Gurgaon",
  "recliner repair experts Gurgaon",
  "best recliner repair Gurgaon",
] as const;

const SOFA_NOIDA_ANCHORS = [
  "sofa repair Noida",
  "Noida sofa repair services",
  "professional sofa repair Noida",
  "sofa repair experts Noida",
  "best sofa repair Noida",
  "trusted sofa repair Noida",
] as const;

const FURNITURE_NOIDA_ANCHORS = [
  "furniture repair Noida",
  "Noida furniture repair services",
  "professional furniture repair Noida",
  "furniture repair experts Noida",
  "best furniture repair Noida",
] as const;

const RECLINER_NOIDA_ANCHORS = [
  "recliner repair Noida",
  "Noida recliner repair services",
  "professional recliner repair Noida",
  "recliner repair experts Noida",
] as const;

const SOFA_SOUTH_DELHI_ANCHORS = [
  "sofa repair South Delhi",
  "South Delhi sofa repair services",
  "professional sofa repair South Delhi",
  "sofa repair experts South Delhi",
  "best sofa repair South Delhi",
] as const;

const RECLINER_SOUTH_DELHI_ANCHORS = [
  "recliner repair South Delhi",
  "South Delhi recliner repair services",
  "professional recliner repair South Delhi",
  "recliner repair experts South Delhi",
  "best recliner repair South Delhi",
] as const;

const COST_ANCHORS = [
  "sofa repair cost Delhi",
  "sofa repair pricing guide",
  "Delhi sofa repair rates",
  "cost of sofa repair Delhi",
  "sofa repair price list Delhi",
] as const;

// ---------- Parent-page mapping ----------

const PARENT_MAP: Record<string, Link> = {
  // Sofa child pages (Delhi) → furniture-repair parent
  "sofa-repair-east-delhi": { label: "Furniture Repair East Delhi", href: "/furniture-repair-east-delhi" },
  "sofa-repair-lajpat-nagar": { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
  "sofa-repair-kirti-nagar": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  "sofa-repair-vasant-kunj": { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },

  // Sofa child pages (NCR) → city-level parent
  "sofa-repair-dwarka-expressway-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-golf-course-road-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-noida-sector-18": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-noida-sector-150": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-crossing-republik-ghaziabad": { label: "Furniture Repair Crossing Republik", href: "/furniture-repair-crossing-republik-ghaziabad" },
  // sofa-repair-nit-faridabad is handled in the Faridabad section below

  // East Delhi sofa micro-location pages → sofa-repair-east-delhi parent
  "sofa-repair-anand-vihar": { label: "Sofa Repair East Delhi", href: "/sofa-repair-east-delhi" },
  "sofa-repair-patparganj": { label: "Sofa Repair East Delhi", href: "/sofa-repair-east-delhi" },
  "sofa-repair-preet-vihar": { label: "Sofa Repair East Delhi", href: "/sofa-repair-east-delhi" },
  "sofa-repair-laxmi-nagar": { label: "Sofa Repair East Delhi", href: "/sofa-repair-east-delhi" },
  "sofa-repair-mayur-vihar": { label: "Sofa Repair East Delhi", href: "/sofa-repair-east-delhi" },

  // Delhi sofa area pages → furniture-repair parent
  "sofa-repair-dwarka": { label: "Furniture Repair Dwarka", href: "/furniture-repair-dwarka" },
  "sofa-repair-rohini": { label: "Furniture Repair Rohini", href: "/furniture-repair-rohini" },
  "sofa-repair-janakpuri": { label: "Furniture Repair Janakpuri", href: "/furniture-repair-janakpuri" },
  "sofa-repair-saket": { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
  "sofa-repair-south-delhi": { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
  "sofa-repair-greater-kailash": { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
  "sofa-repair-defence-colony": { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },

  // Delhi micro-location furniture pages → city-level parent
  "furniture-repair-south-delhi": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  "furniture-repair-east-delhi": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  "furniture-repair-dwarka": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  "furniture-repair-rohini": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  "furniture-repair-janakpuri": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },

  // Recliner locality pages → recliner-repair-south-delhi parent
  "recliner-repair-panchsheel-park": { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
  "recliner-repair-gulmohar-park": { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
  "recliner-repair-safdarjung-enclave": { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
  "recliner-repair-east-of-kailash": { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
  "recliner-repair-new-friends-colony": { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
  "recliner-repair-greater-kailash": { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
  "recliner-repair-defence-colony": { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
  "recliner-repair-hauz-khas": { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
  "recliner-repair-green-park": { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },

  // Recliner South Delhi → recliner-repair-delhi
  "recliner-repair-south-delhi": { label: "Recliner Repair Delhi", href: "/recliner-repair-delhi" },

  // Recliner Gurgaon locality pages → recliner-repair-gurgaon
  "recliner-repair-dlf-phase-3-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-dlf-phase-4-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-dlf-phase-5-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-sohna-road-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-udyog-vihar-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-palam-vihar-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-sector-56-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-sector-57-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-golf-course-road-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-golf-course-extension-road-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-nirvana-country-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-sector-43-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-sector-45-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-sector-50-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-sector-65-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },

  // Recliner Gurgaon → furniture-repair-gurgaon
  "recliner-repair-gurgaon": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },

  // Recliner Noida locality → recliner-repair-noida
  "recliner-repair-noida-sector-18": { label: "Recliner Repair Noida", href: "/recliner-repair-noida" },
  "recliner-repair-noida-sector-50": { label: "Recliner Repair Noida", href: "/recliner-repair-noida" },
  "recliner-repair-noida-sector-62": { label: "Recliner Repair Noida", href: "/recliner-repair-noida" },
  "recliner-repair-greater-noida": { label: "Recliner Repair Noida", href: "/recliner-repair-noida" },

  // Recliner Noida → furniture-repair-noida
  "recliner-repair-noida": { label: "Furniture Repair Noida", href: "/furniture-repair-noida" },

  // West Delhi recliner locality pages → recliner-repair-west-delhi
  "recliner-repair-vikaspuri": { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
  "recliner-repair-janakpuri": { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
  "recliner-repair-rajouri-garden": { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
  "recliner-repair-paschim-vihar": { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
  "recliner-repair-punjabi-bagh": { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
  "recliner-repair-subhash-nagar": { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
  "recliner-repair-uttam-nagar": { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
  "recliner-repair-tagore-garden": { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
  "recliner-repair-delhi-cantt": { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },

  // West Delhi hub pages → Delhi city-level parents
  "recliner-repair-west-delhi": { label: "Recliner Repair Delhi", href: "/recliner-repair-delhi" },
  "sofa-repair-west-delhi": { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  "furniture-repair-west-delhi": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },

  // West Delhi sofa locality pages → sofa-repair-west-delhi
  "sofa-repair-vikaspuri": { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
  "sofa-repair-tilak-nagar": { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
  "sofa-repair-tagore-garden": { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
  "sofa-repair-delhi-cantt": { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
  "sofa-repair-rajouri-garden": { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
  "sofa-repair-paschim-vihar": { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
  "sofa-repair-punjabi-bagh": { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
  "sofa-repair-subhash-nagar": { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
  "sofa-repair-uttam-nagar": { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
  // (sofa-repair-kirti-nagar and sofa-repair-janakpuri already defined above with specific parents)

  // West Delhi furniture locality pages → furniture-repair-west-delhi
  "furniture-repair-vikaspuri": { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
  "furniture-repair-tilak-nagar": { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
  // (furniture-repair-janakpuri already defined above → furniture-repair-delhi)
  "furniture-repair-kirti-nagar": { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
  "furniture-repair-rajouri-garden": { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
  "furniture-repair-paschim-vihar": { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
  "furniture-repair-punjabi-bagh": { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
  "furniture-repair-subhash-nagar": { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
  "furniture-repair-tagore-garden": { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
  "furniture-repair-delhi-cantt": { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
  "furniture-repair-uttam-nagar": { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },

  // NCR micro-location pages → city-level parent
  "sofa-repair-sohna-road-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-palam-vihar-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-udyog-vihar-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "furniture-repair-dwarka-expressway-gurgaon": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  "furniture-repair-golf-course-road-gurgaon": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  "furniture-repair-palam-vihar-gurgaon": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  "furniture-repair-udyog-vihar-gurgaon": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  "furniture-repair-sector-46-gurgaon": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  "chair-repair-gurgaon": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },

  // Gurgaon city hubs → Delhi parents
  "sofa-repair-gurgaon": { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  "furniture-repair-gurgaon": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },

  // Noida micro-location pages → city-level parent
  "sofa-repair-greater-noida": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-indirapuram-ghaziabad": { label: "Sofa Repair Ghaziabad", href: "/sofa-repair-ghaziabad" },
  "furniture-repair-crossing-republik-ghaziabad": { label: "Furniture Repair Ghaziabad", href: "/furniture-repair-ghaziabad" },

  // Noida city hubs → Delhi parents
  "sofa-repair-noida": { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  "furniture-repair-noida": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },

  // Faridabad — sofa locality pages → sofa-repair-faridabad hub
  "sofa-repair-neharpar-faridabad": { label: "Sofa Repair Faridabad", href: "/sofa-repair-faridabad" },
  "sofa-repair-sector-16a-faridabad": { label: "Sofa Repair Faridabad", href: "/sofa-repair-faridabad" },
  "sofa-repair-sector-21c-faridabad": { label: "Sofa Repair Faridabad", href: "/sofa-repair-faridabad" },
  "sofa-repair-old-faridabad": { label: "Sofa Repair Faridabad", href: "/sofa-repair-faridabad" },
  "sofa-repair-nit-faridabad": { label: "Sofa Repair Faridabad", href: "/sofa-repair-faridabad" },
  // Faridabad — furniture locality pages → furniture-repair-faridabad hub
  "furniture-repair-nit-faridabad": { label: "Furniture Repair Faridabad", href: "/furniture-repair-faridabad" },
  "chair-repair-faridabad": { label: "Furniture Repair Faridabad", href: "/furniture-repair-faridabad" },
  // Faridabad — recliner pages → recliner-repair-faridabad hub
  "recliner-motor-repair-faridabad": { label: "Recliner Repair Faridabad", href: "/recliner-repair-faridabad" },
  "recliner-sofa-repair-faridabad": { label: "Recliner Repair Faridabad", href: "/recliner-repair-faridabad" },
  "leather-sofa-repair-faridabad": { label: "Recliner Repair Faridabad", href: "/recliner-repair-faridabad" },
  // Faridabad city hubs → Delhi parents
  "sofa-repair-faridabad": { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  "furniture-repair-faridabad": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  "recliner-repair-faridabad": { label: "Recliner Repair Delhi", href: "/recliner-repair-delhi" },

  // Furniture type pages
  "wooden-furniture-repair-delhi": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  "bed-repair-delhi": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  "wardrobe-repair-delhi": { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },

  // South Delhi authority pages → sub-regional hubs
  "furniture-repair-defence-colony": { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
  "furniture-repair-greater-kailash": { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
  "furniture-repair-hauz-khas": { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
  "furniture-repair-green-park": { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
  "furniture-repair-south-extension": { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
  "recliner-repair-south-extension": { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
  "recliner-repair-maharani-bagh": { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
  "sofa-repair-maharani-bagh": { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
  "sofa-repair-greater-kailash-1": { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
  "sofa-repair-greater-kailash-2": { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
  "sofa-repair-greater-kailash-3": { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
  "sofa-repair-friends-colony": { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
  "sofa-repair-south-extension": { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },

  // Gurgaon DLF / new cluster pages → cluster hub
  "furniture-repair-dlf-phase-1": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  "furniture-repair-dlf-phase-2": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  "furniture-repair-dlf-phase-3": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  "furniture-repair-dlf-phase-4": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  "furniture-repair-dlf-phase-5": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  "furniture-repair-sushant-lok-gurgaon": { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  "recliner-repair-dlf-phase-1-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-dlf-phase-2-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "recliner-repair-sushant-lok-gurgaon": { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
  "sofa-repair-south-city-1-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-south-city-2-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-sector-42-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-sector-43-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-sector-49-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-sector-50-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-sector-55-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-sector-65-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-emerald-hills-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  "sofa-repair-suncity-gurgaon": { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },

  // Noida sector premium pages → sofa/furniture-repair-noida
  "sofa-repair-sector-94-noida": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-sector-100-noida": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-sector-105-noida": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-sector-128-noida": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-sector-134-noida": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-sector-142-noida": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-sector-145-noida": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-sector-168-noida": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-ahinsa-khand": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  "sofa-repair-shakti-khand": { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },

  // Cost page
  "sofa-repair-cost-delhi": { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },

};

// ---------- Extra cross-links for Gurgaon recliner locality pages ----------

const EXTRA_LINKS: Record<string, Link[]> = {
  // Western/central Gurgaon pages → Udyog Vihar + DLF Phase 3
  "recliner-repair-palam-vihar-gurgaon": [
    { label: "Recliner Repair Udyog Vihar Gurgaon", href: "/recliner-repair-udyog-vihar-gurgaon" },
    { label: "Recliner Repair DLF Phase 3 Gurgaon", href: "/recliner-repair-dlf-phase-3-gurgaon" },
  ],
  "recliner-repair-sector-50-gurgaon": [
    { label: "Recliner Repair Udyog Vihar Gurgaon", href: "/recliner-repair-udyog-vihar-gurgaon" },
    { label: "Recliner Repair DLF Phase 3 Gurgaon", href: "/recliner-repair-dlf-phase-3-gurgaon" },
  ],
  // Southern/eastern Gurgaon pages → DLF Phase 5 + Golf Course Road + Sohna Road
  "recliner-repair-sector-43-gurgaon": [
    { label: "Recliner Repair DLF Phase 5 Gurgaon", href: "/recliner-repair-dlf-phase-5-gurgaon" },
    { label: "Recliner Repair Golf Course Road Gurgaon", href: "/recliner-repair-golf-course-road-gurgaon" },
    { label: "Recliner Repair Sohna Road Gurgaon", href: "/recliner-repair-sohna-road-gurgaon" },
  ],
  "recliner-repair-sector-45-gurgaon": [
    { label: "Recliner Repair DLF Phase 5 Gurgaon", href: "/recliner-repair-dlf-phase-5-gurgaon" },
    { label: "Recliner Repair Golf Course Road Gurgaon", href: "/recliner-repair-golf-course-road-gurgaon" },
    { label: "Recliner Repair Sohna Road Gurgaon", href: "/recliner-repair-sohna-road-gurgaon" },
  ],
  "recliner-repair-sector-56-gurgaon": [
    { label: "Recliner Repair DLF Phase 5 Gurgaon", href: "/recliner-repair-dlf-phase-5-gurgaon" },
    { label: "Recliner Repair Golf Course Road Gurgaon", href: "/recliner-repair-golf-course-road-gurgaon" },
    { label: "Recliner Repair Sohna Road Gurgaon", href: "/recliner-repair-sohna-road-gurgaon" },
  ],
  "recliner-repair-sector-57-gurgaon": [
    { label: "Recliner Repair DLF Phase 5 Gurgaon", href: "/recliner-repair-dlf-phase-5-gurgaon" },
    { label: "Recliner Repair Golf Course Road Gurgaon", href: "/recliner-repair-golf-course-road-gurgaon" },
    { label: "Recliner Repair Sohna Road Gurgaon", href: "/recliner-repair-sohna-road-gurgaon" },
  ],
  "recliner-repair-sector-65-gurgaon": [
    { label: "Recliner Repair DLF Phase 5 Gurgaon", href: "/recliner-repair-dlf-phase-5-gurgaon" },
    { label: "Recliner Repair Golf Course Road Gurgaon", href: "/recliner-repair-golf-course-road-gurgaon" },
    { label: "Recliner Repair Sohna Road Gurgaon", href: "/recliner-repair-sohna-road-gurgaon" },
  ],
  "recliner-repair-golf-course-extension-road-gurgaon": [
    { label: "Recliner Repair DLF Phase 5 Gurgaon", href: "/recliner-repair-dlf-phase-5-gurgaon" },
    { label: "Recliner Repair Golf Course Road Gurgaon", href: "/recliner-repair-golf-course-road-gurgaon" },
    { label: "Recliner Repair Sohna Road Gurgaon", href: "/recliner-repair-sohna-road-gurgaon" },
  ],
  "recliner-repair-nirvana-country-gurgaon": [
    { label: "Recliner Repair DLF Phase 5 Gurgaon", href: "/recliner-repair-dlf-phase-5-gurgaon" },
    { label: "Recliner Repair Golf Course Road Gurgaon", href: "/recliner-repair-golf-course-road-gurgaon" },
    { label: "Recliner Repair Sohna Road Gurgaon", href: "/recliner-repair-sohna-road-gurgaon" },
  ],
};

/** Infer a parent when not in the explicit map */
function inferParent(slug: string): Link | null {
  if (PARENT_MAP[slug]) return PARENT_MAP[slug];

  // Gurgaon recliner pages → recliner-repair-gurgaon
  if (slug.includes("recliner") && (slug.includes("gurgaon") || slug.includes("sohna") || slug.includes("dlf"))) {
    return { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" };
  }
  // Noida recliner pages → recliner-repair-noida
  if (slug.includes("recliner") && (slug.includes("noida") || slug.includes("greater-noida"))) {
    return { label: "Recliner Repair Noida", href: "/recliner-repair-noida" };
  }
  // South Delhi recliner → recliner-repair-south-delhi
  if (slug.includes("recliner") && (slug.includes("south-delhi") || slug.includes("hauz-khas") || slug.includes("safdarjung") || slug.includes("panchsheel") || slug.includes("gulmohar") || slug.includes("lajpat") || slug.includes("vasant") || slug.includes("kailash") || slug.includes("defence") || slug.includes("green-park") || slug.includes("friends-colony") || slug.includes("saket"))) {
    return { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" };
  }
  // Faridabad recliner pages → recliner-repair-faridabad
  if (slug.includes("recliner") && slug.includes("faridabad") && slug !== "recliner-repair-faridabad") {
    return { label: "Recliner Repair Faridabad", href: "/recliner-repair-faridabad" };
  }
  // Any other recliner → recliner-repair-delhi
  if (slug.includes("recliner") && slug !== "recliner-repair-delhi") {
    return { label: "Recliner Repair Delhi", href: "/recliner-repair-delhi" };
  }

  // Gurgaon furniture → furniture-repair-gurgaon
  if (slug.startsWith("furniture-repair-") && (slug.includes("gurgaon") || slug.includes("sohna") || slug.includes("dlf"))) {
    return { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" };
  }
  // Noida furniture → furniture-repair-noida
  if (slug.startsWith("furniture-repair-") && (slug.includes("noida") || slug.includes("greater-noida"))) {
    return { label: "Furniture Repair Noida", href: "/furniture-repair-noida" };
  }

  // Gurgaon sofa → sofa-repair-gurgaon
  if (slug.startsWith("sofa-repair-") && (slug.includes("gurgaon") || slug.includes("sohna") || slug.includes("dlf"))) {
    return { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" };
  }
  // Noida sofa → sofa-repair-noida
  if (slug.startsWith("sofa-repair-") && (slug.includes("noida") || slug.includes("greater-noida"))) {
    return { label: "Sofa Repair Noida", href: "/sofa-repair-noida" };
  }

  // sofa-repair-* → sofa-repair-delhi
  if (slug.startsWith("sofa-repair-") && slug !== "sofa-repair-delhi" && slug !== "sofa-repair-cost-delhi") {
    return { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" };
  }
  // furniture-repair-* → furniture-repair-delhi
  if (slug.startsWith("furniture-repair-") && slug !== "furniture-repair-delhi") {
    return { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" };
  }
  // chair-repair-* → furniture-repair-delhi
  if (slug.startsWith("chair-repair-") && slug !== "chair-repair-delhi") {
    return { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" };
  }
  // Content with "sofa" or "upholstery" → sofa-repair-delhi
  if (slug.includes("sofa") || slug.includes("upholstery")) {
    return { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" };
  }
  // Default fallback
  return { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" };
}

// ---------- Regional sibling pools ----------

const SIBLING_POOLS: Record<string, Link[]> = {
  "delhi-sofa": [
    { label: "Sofa Repair Dwarka", href: "/sofa-repair-dwarka" },
    { label: "Sofa Repair Rohini", href: "/sofa-repair-rohini" },
    { label: "Sofa Repair Janakpuri", href: "/sofa-repair-janakpuri" },
    { label: "Sofa Repair Saket", href: "/sofa-repair-saket" },
    { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
    { label: "Sofa Repair East Delhi", href: "/sofa-repair-east-delhi" },
    { label: "Sofa Repair Greater Kailash", href: "/sofa-repair-greater-kailash" },
    { label: "Sofa Repair Lajpat Nagar", href: "/sofa-repair-lajpat-nagar" },
    { label: "Sofa Repair Vasant Kunj", href: "/sofa-repair-vasant-kunj" },
    { label: "Sofa Repair Kirti Nagar", href: "/sofa-repair-kirti-nagar" },
  ],
  "delhi-furniture": [
    { label: "Furniture Repair Dwarka", href: "/furniture-repair-dwarka" },
    { label: "Furniture Repair Rohini", href: "/furniture-repair-rohini" },
    { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
    { label: "Furniture Repair East Delhi", href: "/furniture-repair-east-delhi" },
    { label: "Furniture Repair Janakpuri", href: "/furniture-repair-janakpuri" },
  ],
  "delhi-recliner": [
    { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
    { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
    { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
    { label: "Recliner Repair Noida", href: "/recliner-repair-noida" },
    { label: "Recliner Sofa Repair Delhi", href: "/recliner-sofa-repair-delhi" },
    { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
    { label: "Recliner Repair Rohini", href: "/recliner-repair-rohini" },
    { label: "Recliner Repair Pitampura", href: "/recliner-repair-pitampura" },
    { label: "Recliner Repair Ashok Vihar", href: "/recliner-repair-ashok-vihar" },
    { label: "Recliner Repair Model Town", href: "/recliner-repair-model-town" },
    { label: "Recliner Repair Karol Bagh", href: "/recliner-repair-karol-bagh" },
    { label: "Recliner Repair Preet Vihar", href: "/recliner-repair-preet-vihar" },
    { label: "Recliner Repair Mayur Vihar", href: "/recliner-repair-mayur-vihar" },
    { label: "Recliner Repair Laxmi Nagar", href: "/recliner-repair-laxmi-nagar" },
    { label: "Recliner Repair Lajpat Nagar", href: "/recliner-repair-lajpat-nagar" },
    { label: "Recliner Repair Saket", href: "/recliner-repair-saket" },
    { label: "Recliner Repair Greater Kailash 2", href: "/recliner-repair-greater-kailash-2" },
    { label: "Recliner Repair Malviya Nagar", href: "/recliner-repair-malviya-nagar" },
    { label: "Recliner Repair Vasant Kunj", href: "/recliner-repair-vasant-kunj" },
    { label: "Recliner Repair Vasant Vihar", href: "/recliner-repair-vasant-vihar" },
    { label: "Recliner Repair Friends Colony", href: "/recliner-repair-friends-colony" },
    { label: "Recliner Repair Maharani Bagh", href: "/recliner-repair-maharani-bagh" },
    { label: "Recliner Repair Dwarka", href: "/recliner-repair-dwarka" },
  ],
  "west-delhi-recliner": [
    { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
    { label: "Recliner Repair Vikaspuri", href: "/recliner-repair-vikaspuri" },
    { label: "Recliner Repair Janakpuri", href: "/recliner-repair-janakpuri" },
    { label: "Recliner Repair Rajouri Garden", href: "/recliner-repair-rajouri-garden" },
    { label: "Recliner Repair Paschim Vihar", href: "/recliner-repair-paschim-vihar" },
    { label: "Recliner Repair Punjabi Bagh", href: "/recliner-repair-punjabi-bagh" },
    { label: "Recliner Repair Subhash Nagar", href: "/recliner-repair-subhash-nagar" },
    { label: "Recliner Repair Uttam Nagar", href: "/recliner-repair-uttam-nagar" },
    { label: "Recliner Repair Tagore Garden", href: "/recliner-repair-tagore-garden" },
    { label: "Recliner Repair Delhi Cantt", href: "/recliner-repair-delhi-cantt" },
    { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
    { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
  ],
  "west-delhi-sofa": [
    { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
    { label: "Sofa Repair Vikaspuri", href: "/sofa-repair-vikaspuri" },
    { label: "Sofa Repair Tilak Nagar", href: "/sofa-repair-tilak-nagar" },
    { label: "Sofa Repair Tagore Garden", href: "/sofa-repair-tagore-garden" },
    { label: "Sofa Repair Delhi Cantt", href: "/sofa-repair-delhi-cantt" },
    { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
    { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
    { label: "Sofa Repair Janakpuri", href: "/sofa-repair-janakpuri" },
    { label: "Sofa Repair Rajouri Garden", href: "/sofa-repair-rajouri-garden" },
    { label: "Sofa Repair Paschim Vihar", href: "/sofa-repair-paschim-vihar" },
    { label: "Sofa Repair Punjabi Bagh", href: "/sofa-repair-punjabi-bagh" },
    { label: "Sofa Repair Uttam Nagar", href: "/sofa-repair-uttam-nagar" },
  ],
  "west-delhi-furniture": [
    { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
    { label: "Furniture Repair Vikaspuri", href: "/furniture-repair-vikaspuri" },
    { label: "Furniture Repair Janakpuri", href: "/furniture-repair-janakpuri" },
    { label: "Furniture Repair Kirti Nagar", href: "/furniture-repair-kirti-nagar" },
    { label: "Furniture Repair Tilak Nagar", href: "/furniture-repair-tilak-nagar" },
    { label: "Furniture Repair Rajouri Garden", href: "/furniture-repair-rajouri-garden" },
    { label: "Furniture Repair Paschim Vihar", href: "/furniture-repair-paschim-vihar" },
    { label: "Furniture Repair Punjabi Bagh", href: "/furniture-repair-punjabi-bagh" },
    { label: "Furniture Repair Subhash Nagar", href: "/furniture-repair-subhash-nagar" },
    { label: "Furniture Repair Tagore Garden", href: "/furniture-repair-tagore-garden" },
    { label: "Furniture Repair Delhi Cantt", href: "/furniture-repair-delhi-cantt" },
    { label: "Furniture Repair Uttam Nagar", href: "/furniture-repair-uttam-nagar" },
    { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
    { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
  ],
  "south-delhi-recliner": [
    // Original South Delhi recliner localities
    { label: "Recliner Repair Panchsheel Park", href: "/recliner-repair-panchsheel-park" },
    { label: "Recliner Repair Gulmohar Park", href: "/recliner-repair-gulmohar-park" },
    { label: "Recliner Repair Safdarjung Enclave", href: "/recliner-repair-safdarjung-enclave" },
    { label: "Recliner Repair East of Kailash", href: "/recliner-repair-east-of-kailash" },
    { label: "Recliner Repair New Friends Colony", href: "/recliner-repair-new-friends-colony" },
    { label: "Recliner Repair Greater Kailash", href: "/recliner-repair-greater-kailash" },
    { label: "Recliner Repair Defence Colony", href: "/recliner-repair-defence-colony" },
    { label: "Recliner Repair Hauz Khas", href: "/recliner-repair-hauz-khas" },
    { label: "Recliner Repair Green Park", href: "/recliner-repair-green-park" },
    // New South Delhi locality pages — geographically proximate
    { label: "Recliner Repair Lajpat Nagar", href: "/recliner-repair-lajpat-nagar" },
    { label: "Recliner Repair Saket", href: "/recliner-repair-saket" },
    { label: "Recliner Repair Greater Kailash 2", href: "/recliner-repair-greater-kailash-2" },
    { label: "Recliner Repair Vasant Kunj", href: "/recliner-repair-vasant-kunj" },
    { label: "Recliner Repair Friends Colony", href: "/recliner-repair-friends-colony" },
    { label: "Recliner Repair South Extension", href: "/recliner-repair-south-extension" },
    { label: "Recliner Repair Maharani Bagh", href: "/recliner-repair-maharani-bagh" },
  ],
  "east-delhi": [
    { label: "Sofa Repair East Delhi", href: "/sofa-repair-east-delhi" },
    { label: "Sofa Repair Mayur Vihar", href: "/sofa-repair-mayur-vihar" },
    { label: "Sofa Repair Preet Vihar", href: "/sofa-repair-preet-vihar" },
    { label: "Sofa Repair Laxmi Nagar", href: "/sofa-repair-laxmi-nagar" },
    { label: "Sofa Repair Anand Vihar", href: "/sofa-repair-anand-vihar" },
    { label: "Sofa Repair Patparganj", href: "/sofa-repair-patparganj" },
    { label: "Furniture Repair East Delhi", href: "/furniture-repair-east-delhi" },
  ],
  "south-delhi": [
    { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
    { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
    { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
    { label: "Sofa Repair Greater Kailash", href: "/sofa-repair-greater-kailash" },
    { label: "Sofa Repair Lajpat Nagar", href: "/sofa-repair-lajpat-nagar" },
    { label: "Sofa Repair Defence Colony", href: "/sofa-repair-defence-colony" },
    { label: "Sofa Repair Hauz Khas", href: "/sofa-repair-hauz-khas" },
    { label: "Sofa Repair Vasant Kunj", href: "/sofa-repair-vasant-kunj" },
    { label: "Sofa Repair Saket", href: "/sofa-repair-saket" },
    { label: "Sofa Repair Panchsheel Park", href: "/sofa-repair-panchsheel-park" },
    { label: "Sofa Repair Gulmohar Park", href: "/sofa-repair-gulmohar-park" },
    { label: "Sofa Repair Safdarjung Enclave", href: "/sofa-repair-safdarjung-enclave" },
    { label: "Sofa Repair East of Kailash", href: "/sofa-repair-east-of-kailash" },
    { label: "Sofa Repair New Friends Colony", href: "/sofa-repair-new-friends-colony" },
    { label: "Furniture Repair Panchsheel Park", href: "/furniture-repair-panchsheel-park" },
    { label: "Furniture Repair Gulmohar Park", href: "/furniture-repair-gulmohar-park" },
    { label: "Furniture Repair Safdarjung Enclave", href: "/furniture-repair-safdarjung-enclave" },
    { label: "Furniture Repair East of Kailash", href: "/furniture-repair-east-of-kailash" },
    { label: "Furniture Repair New Friends Colony", href: "/furniture-repair-new-friends-colony" },
    { label: "Furniture Repair Defence Colony", href: "/furniture-repair-defence-colony" },
    { label: "Furniture Repair Greater Kailash", href: "/furniture-repair-greater-kailash" },
    { label: "Furniture Repair Hauz Khas", href: "/furniture-repair-hauz-khas" },
    { label: "Furniture Repair Green Park", href: "/furniture-repair-green-park" },
    { label: "Furniture Repair South Extension", href: "/furniture-repair-south-extension" },
  ],
  gurgaon: [
    { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
    { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
    { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
    { label: "Sofa Repair Sohna Road Gurgaon", href: "/sofa-repair-sohna-road-gurgaon" },
    { label: "Sofa Repair Dwarka Expressway Gurgaon", href: "/sofa-repair-dwarka-expressway-gurgaon" },
    { label: "Sofa Repair Golf Course Road", href: "/sofa-repair-golf-course-road-gurgaon" },
    { label: "Chair Repair Gurgaon", href: "/chair-repair-gurgaon" },
    { label: "Recliner Repair DLF Phase 3 Gurgaon", href: "/recliner-repair-dlf-phase-3-gurgaon" },
    { label: "Recliner Repair DLF Phase 4 Gurgaon", href: "/recliner-repair-dlf-phase-4-gurgaon" },
    { label: "Recliner Repair DLF Phase 5 Gurgaon", href: "/recliner-repair-dlf-phase-5-gurgaon" },
    { label: "Sofa Repair Palam Vihar Gurgaon", href: "/sofa-repair-palam-vihar-gurgaon" },
    { label: "Furniture Repair Palam Vihar Gurgaon", href: "/furniture-repair-palam-vihar-gurgaon" },
    { label: "Sofa Repair Udyog Vihar Gurgaon", href: "/sofa-repair-udyog-vihar-gurgaon" },
    { label: "Furniture Repair Udyog Vihar Gurgaon", href: "/furniture-repair-udyog-vihar-gurgaon" },
    { label: "Recliner Repair Sohna Road Gurgaon", href: "/recliner-repair-sohna-road-gurgaon" },
    { label: "Furniture Repair Sector 46 Gurgaon", href: "/furniture-repair-sector-46-gurgaon" },
    { label: "Recliner Repair Udyog Vihar Gurgaon", href: "/recliner-repair-udyog-vihar-gurgaon" },
    { label: "Furniture Repair DLF Phase 1 Gurgaon", href: "/furniture-repair-dlf-phase-1" },
    { label: "Furniture Repair DLF Phase 2 Gurgaon", href: "/furniture-repair-dlf-phase-2" },
    { label: "Furniture Repair DLF Phase 3 Gurgaon", href: "/furniture-repair-dlf-phase-3" },
    { label: "Furniture Repair DLF Phase 5 Gurgaon", href: "/furniture-repair-dlf-phase-5" },
    { label: "Furniture Repair Sushant Lok Gurgaon", href: "/furniture-repair-sushant-lok-gurgaon" },
    { label: "Sofa Repair South City 1 Gurgaon", href: "/sofa-repair-south-city-1-gurgaon" },
    { label: "Sofa Repair South City 2 Gurgaon", href: "/sofa-repair-south-city-2-gurgaon" },
    { label: "Sofa Repair Sector 42 Gurgaon", href: "/sofa-repair-sector-42-gurgaon" },
    { label: "Sofa Repair Sector 43 Gurgaon", href: "/sofa-repair-sector-43-gurgaon" },
    { label: "Sofa Repair Sector 49 Gurgaon", href: "/sofa-repair-sector-49-gurgaon" },
    { label: "Sofa Repair Sector 65 Gurgaon", href: "/sofa-repair-sector-65-gurgaon" },
    { label: "Recliner Repair DLF Phase 1 Gurgaon", href: "/recliner-repair-dlf-phase-1-gurgaon" },
    { label: "Recliner Repair DLF Phase 2 Gurgaon", href: "/recliner-repair-dlf-phase-2-gurgaon" },
    { label: "Recliner Repair Sushant Lok Gurgaon", href: "/recliner-repair-sushant-lok-gurgaon" },
  ],
  "gurgaon-recliner": [
    { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
    { label: "Recliner Repair DLF Phase 3 Gurgaon", href: "/recliner-repair-dlf-phase-3-gurgaon" },
    { label: "Recliner Repair DLF Phase 4 Gurgaon", href: "/recliner-repair-dlf-phase-4-gurgaon" },
    { label: "Recliner Repair DLF Phase 5 Gurgaon", href: "/recliner-repair-dlf-phase-5-gurgaon" },
    { label: "Recliner Repair Sohna Road Gurgaon", href: "/recliner-repair-sohna-road-gurgaon" },
    { label: "Recliner Repair Udyog Vihar Gurgaon", href: "/recliner-repair-udyog-vihar-gurgaon" },
    { label: "Recliner Repair Palam Vihar Gurgaon", href: "/recliner-repair-palam-vihar-gurgaon" },
    { label: "Recliner Repair Golf Course Extension Road Gurgaon", href: "/recliner-repair-golf-course-extension-road-gurgaon" },
    { label: "Recliner Repair Nirvana Country Gurgaon", href: "/recliner-repair-nirvana-country-gurgaon" },
    { label: "Recliner Repair Sector 43 Gurgaon", href: "/recliner-repair-sector-43-gurgaon" },
    { label: "Recliner Repair Sector 45 Gurgaon", href: "/recliner-repair-sector-45-gurgaon" },
    { label: "Recliner Repair Sector 50 Gurgaon", href: "/recliner-repair-sector-50-gurgaon" },
    { label: "Recliner Repair Sector 56 Gurgaon", href: "/recliner-repair-sector-56-gurgaon" },
    { label: "Recliner Repair Sector 57 Gurgaon", href: "/recliner-repair-sector-57-gurgaon" },
    { label: "Recliner Repair Sector 65 Gurgaon", href: "/recliner-repair-sector-65-gurgaon" },
    { label: "Recliner Repair DLF Phase 1 Gurgaon", href: "/recliner-repair-dlf-phase-1-gurgaon" },
    { label: "Recliner Repair DLF Phase 2 Gurgaon", href: "/recliner-repair-dlf-phase-2-gurgaon" },
    { label: "Recliner Repair Sushant Lok Gurgaon", href: "/recliner-repair-sushant-lok-gurgaon" },
    { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
    { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  ],
  noida: [
    { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
    { label: "Furniture Repair Noida", href: "/furniture-repair-noida" },
    { label: "Recliner Repair Noida", href: "/recliner-repair-noida" },
    { label: "Sofa Repair Greater Noida", href: "/sofa-repair-greater-noida" },
    { label: "Sofa Repair Noida Sector 18", href: "/sofa-repair-noida-sector-18" },
    { label: "Sofa Repair Noida Sector 150", href: "/sofa-repair-noida-sector-150" },
    { label: "Sofa Repair Noida Sector 62", href: "/sofa-repair-noida-sector-62" },
    { label: "Sofa Repair Noida Sector 104", href: "/sofa-repair-noida-sector-104" },
    { label: "Sofa Repair Noida Sector 107", href: "/sofa-repair-noida-sector-107" },
    { label: "Sofa Repair Noida Sector 143", href: "/sofa-repair-noida-sector-143" },
    { label: "Sofa Repair Ahinsa Khand", href: "/sofa-repair-ahinsa-khand" },
    { label: "Sofa Repair Shakti Khand", href: "/sofa-repair-shakti-khand" },
    { label: "Sofa Repair Sector 94 Noida", href: "/sofa-repair-sector-94-noida" },
    { label: "Sofa Repair Sector 100 Noida", href: "/sofa-repair-sector-100-noida" },
    { label: "Furniture Repair Noida Sector 18", href: "/furniture-repair-noida-sector-18" },
    { label: "Furniture Repair Noida Sector 150", href: "/furniture-repair-noida-sector-150" },
  ],
  "noida-recliner": [
    { label: "Recliner Repair Noida", href: "/recliner-repair-noida" },
    { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
    { label: "Furniture Repair Noida", href: "/furniture-repair-noida" },
    { label: "Recliner Repair Noida Sector 18", href: "/recliner-repair-noida-sector-18" },
    { label: "Recliner Repair Noida Sector 50", href: "/recliner-repair-noida-sector-50" },
    { label: "Recliner Repair Noida Sector 62", href: "/recliner-repair-noida-sector-62" },
    { label: "Recliner Repair Greater Noida", href: "/recliner-repair-greater-noida" },
    { label: "Recliner Motor Repair Noida", href: "/recliner-motor-repair-noida" },
    { label: "Recliner Repair Gurgaon", href: "/recliner-repair-gurgaon" },
    { label: "Recliner Repair Delhi", href: "/recliner-repair-delhi" },
  ],
  ghaziabad: [
    { label: "Sofa Repair Indirapuram", href: "/sofa-repair-indirapuram-ghaziabad" },
    { label: "Sofa Repair Crossing Republik", href: "/sofa-repair-crossing-republik-ghaziabad" },
    { label: "Sofa Repair Ghaziabad", href: "/sofa-repair-ghaziabad" },
    { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  ],
  faridabad: [
    { label: "Sofa Repair Faridabad", href: "/sofa-repair-faridabad" },
    { label: "Furniture Repair Faridabad", href: "/furniture-repair-faridabad" },
    { label: "Recliner Repair Faridabad", href: "/recliner-repair-faridabad" },
    { label: "Sofa Repair Neharpar Faridabad", href: "/sofa-repair-neharpar-faridabad" },
    { label: "Sofa Repair NIT Faridabad", href: "/sofa-repair-nit-faridabad" },
    { label: "Chair Repair Faridabad", href: "/chair-repair-faridabad" },
    { label: "Sofa Repair Sector 16A Faridabad", href: "/sofa-repair-sector-16a-faridabad" },
    { label: "Sofa Repair Sector 21C Faridabad", href: "/sofa-repair-sector-21c-faridabad" },
    { label: "Sofa Repair Old Faridabad", href: "/sofa-repair-old-faridabad" },
    { label: "Recliner Motor Repair Faridabad", href: "/recliner-motor-repair-faridabad" },
    { label: "Leather Sofa Repair Faridabad", href: "/leather-sofa-repair-faridabad" },
    { label: "Furniture Repair NIT Faridabad", href: "/furniture-repair-nit-faridabad" },
  ],
  "near-me": [
    { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
    { label: "Sofa Repair Near Me", href: "/sofa-repair-near-me" },
    { label: "Carpenter Near Me Delhi", href: "/carpenter-near-me-delhi" },
  ],
  "furniture-type": [
    { label: "Wooden Furniture Repair Delhi", href: "/wooden-furniture-repair-delhi" },
    { label: "Bed Repair Delhi", href: "/bed-repair-delhi" },
    { label: "Wardrobe Repair Delhi", href: "/wardrobe-repair-delhi" },
  ],
  pricing: [
    { label: "Sofa Repair Cost Delhi", href: "/sofa-repair-cost-delhi" },
    { label: "Recliner Repair Cost Delhi", href: "/recliner-repair-cost-delhi" },
    { label: "Furniture Repair Price Guide Delhi", href: "/furniture-repair-price-guide-delhi" },
    { label: "Furniture Repair Price List Delhi", href: "/furniture-repair-price-list-delhi" },
    { label: "Sofa Foam Replacement Cost Delhi", href: "/sofa-foam-replacement-cost-delhi" },
    { label: "Leather Sofa Repair Cost Delhi", href: "/leather-sofa-repair-cost-delhi" },
    { label: "Recliner Motor Repair Cost Delhi", href: "/recliner-motor-repair-cost-delhi" },
    { label: "Sofa Upholstery Price List Delhi", href: "/sofa-upholstery-price-list-delhi" },
  ],
  service: [
    { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
    { label: "Sofa Repair Near Me", href: "/sofa-repair-near-me" },
    { label: "Carpenter Home Service Delhi", href: "/carpenter-home-service-delhi" },
  ],
  default: [
    { label: "Sofa Repair Near Me", href: "/sofa-repair-near-me" },
    { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
    { label: "Carpenter Home Service Delhi", href: "/carpenter-home-service-delhi" },
  ],
};

// ---------- Region/type detection helpers ----------

function isReclinderSlug(slug: string): boolean {
  return slug.includes("recliner") || slug.includes("leather-sofa") || slug.includes("leather-recliner");
}

function isFurnitureSlug(slug: string): boolean {
  return (slug.startsWith("furniture-repair-") || slug.startsWith("chair-repair-") || slug.includes("wooden-furniture") || slug.includes("bed-repair") || slug.includes("wardrobe-repair")) && !isReclinderSlug(slug);
}

function isFaridabadSlug(slug: string): boolean {
  return slug.includes("faridabad") || slug.includes("neharpar") || slug.includes("nit-");
}

function isGurgaonSlug(slug: string): boolean {
  return slug.includes("gurgaon") || slug.includes("sohna") || (slug.includes("dlf") && !slug.includes("noida")) || slug.includes("south-city-1") || slug.includes("south-city-2") || slug.includes("emerald-hills") || slug.includes("suncity") || slug.includes("nirvana-country");
}

function isNoidaSlug(slug: string): boolean {
  return slug.includes("noida") || slug.includes("greater-noida") || slug.includes("ahinsa-khand") || slug.includes("shakti-khand");
}

function isGhaziabadSlug(slug: string): boolean {
  return slug.includes("ghaziabad") || slug.includes("indirapuram") || slug.includes("crossing-republik");
}

function isWestDelhiSlug(slug: string): boolean {
  return slug.includes("west-delhi") || slug.includes("vikaspuri") || slug.includes("janakpuri") || slug.includes("rajouri-garden") || slug.includes("paschim-vihar") || slug.includes("punjabi-bagh") || slug.includes("subhash-nagar") || slug.includes("uttam-nagar") || slug.includes("tagore-garden") || slug.includes("delhi-cantt") || slug.includes("kirti-nagar") || slug.includes("tilak-nagar");
}

function isSouthDelhiSlug(slug: string): boolean {
  return slug.includes("south-delhi") || slug.includes("hauz-khas") || slug.includes("safdarjung") || slug.includes("panchsheel") || slug.includes("gulmohar") || slug.includes("lajpat") || slug.includes("vasant-kunj") || slug.includes("greater-kailash") || slug.includes("defence-colony") || slug.includes("green-park") || slug.includes("friends-colony") || slug.includes("saket") || slug.includes("east-of-kailash") || slug.includes("maharani-bagh") || slug.includes("south-extension");
}

function isEastDelhiSlug(slug: string): boolean {
  return slug.includes("east-delhi") || slug.includes("mayur-vihar") || slug.includes("preet-vihar") || slug.includes("laxmi-nagar") || slug.includes("anand-vihar") || slug.includes("patparganj");
}

/** Determine which sibling pool a slug belongs to */
function getRegion(slug: string): string {
  if (isReclinderSlug(slug)) {
    if (isGurgaonSlug(slug)) return "gurgaon-recliner";
    if (isNoidaSlug(slug) || isGhaziabadSlug(slug)) return "noida-recliner";
    if (isSouthDelhiSlug(slug)) return "south-delhi-recliner";
    if (isWestDelhiSlug(slug)) return "west-delhi-recliner";
    return "delhi-recliner";
  }
  if (isGurgaonSlug(slug)) return "gurgaon";
  if (isNoidaSlug(slug)) return "noida";
  if (isGhaziabadSlug(slug)) return "ghaziabad";
  if (isFaridabadSlug(slug)) return "faridabad";
  if (isSouthDelhiSlug(slug)) return "south-delhi";
  if (isEastDelhiSlug(slug)) return "east-delhi";
  if (slug.includes("near-me")) return "near-me";
  if (slug.includes("wooden-") || slug.includes("bed-repair") || slug.includes("wardrobe-")) return "furniture-type";
  if (slug.includes("-cost-") || slug.includes("price-guide") || slug.includes("price-list")) return "pricing";

  if (isWestDelhiSlug(slug) && isFurnitureSlug(slug)) return "west-delhi-furniture";
  if (isWestDelhiSlug(slug) && slug.startsWith("sofa-repair-") && !slug.includes("cost")) return "west-delhi-sofa";
  if (slug.startsWith("furniture-repair-")) return "delhi-furniture";
  if (slug.startsWith("sofa-repair-") && !slug.includes("cost") && !slug.includes("near-me")) return "delhi-sofa";

  if (slug.includes("carpenter") || slug.includes("doorstep") || slug.includes("home-service") || slug.includes("polish") || slug.includes("upholstery")) return "service";

  return "default";
}

// ---------- Main export ----------

/**
 * Generate pyramid-structure internal links for any SEO page slug.
 *
 * Structure (5–7 links):
 *   1–2 → apex authority (/sofa-repair-delhi)
 *   1   → regional/type-specific authority hub
 *   1   → /sofa-repair-cost-delhi (support page)
 *   1   → parent page
 *   0–2 → regional siblings
 */
export function getPyramidLinks(slug: string): Link[] {
  const links: Link[] = [];
  const h = hash(slug);
  const has = (href: string) => links.some((l) => l.href === href);

  // ── 1. Apex authority: /sofa-repair-delhi ──
  if (slug !== "sofa-repair-delhi") {
    const anchor1 = pickAnchor(SOFA_DELHI_ANCHORS, slug, 0);
    links.push({ label: anchor1, href: "/sofa-repair-delhi" });
    if (h % 5 < 2) {
      const anchor2 = pickAnchor(SOFA_DELHI_ANCHORS, slug, 7);
      if (anchor2 !== anchor1) {
        links.push({ label: anchor2, href: "/sofa-repair-delhi" });
      }
    }
  }

  // ── 2. Regional / type-specific authority hub ──
  const isRecliner = isReclinderSlug(slug);
  const isFurniture = isFurnitureSlug(slug);
  const isGurgaon = isGurgaonSlug(slug);
  const isNoida = isNoidaSlug(slug) || isGhaziabadSlug(slug);
  const isFaridabad = isFaridabadSlug(slug);
  const isSouthDelhi = isSouthDelhiSlug(slug);
  const isWestDelhi = isWestDelhiSlug(slug);

  if (isGurgaon) {
    if (isRecliner && slug !== "recliner-repair-gurgaon") {
      links.push({ label: pickAnchor(RECLINER_GURGAON_ANCHORS, slug, 1), href: "/recliner-repair-gurgaon" });
    } else if (isFurniture && slug !== "furniture-repair-gurgaon") {
      links.push({ label: pickAnchor(FURNITURE_GURGAON_ANCHORS, slug, 1), href: "/furniture-repair-gurgaon" });
    } else if (!isRecliner && !isFurniture && slug !== "sofa-repair-gurgaon") {
      links.push({ label: pickAnchor(SOFA_GURGAON_ANCHORS, slug, 1), href: "/sofa-repair-gurgaon" });
    }
  } else if (isNoida) {
    if (isRecliner && slug !== "recliner-repair-noida") {
      links.push({ label: pickAnchor(RECLINER_NOIDA_ANCHORS, slug, 1), href: "/recliner-repair-noida" });
    } else if (isFurniture && slug !== "furniture-repair-noida") {
      links.push({ label: pickAnchor(FURNITURE_NOIDA_ANCHORS, slug, 1), href: "/furniture-repair-noida" });
    } else if (!isRecliner && !isFurniture && slug !== "sofa-repair-noida") {
      links.push({ label: pickAnchor(SOFA_NOIDA_ANCHORS, slug, 1), href: "/sofa-repair-noida" });
    }
  } else if (isFaridabad) {
    if (isRecliner && slug !== "recliner-repair-faridabad") {
      links.push({ label: "recliner repair Faridabad", href: "/recliner-repair-faridabad" });
    } else if (isFurniture && slug !== "furniture-repair-faridabad") {
      links.push({ label: "furniture repair Faridabad", href: "/furniture-repair-faridabad" });
    } else if (!isRecliner && !isFurniture && slug !== "sofa-repair-faridabad") {
      links.push({ label: "sofa repair Faridabad", href: "/sofa-repair-faridabad" });
    }
  } else if (isSouthDelhi) {
    if (isRecliner && slug !== "recliner-repair-south-delhi") {
      links.push({ label: pickAnchor(RECLINER_SOUTH_DELHI_ANCHORS, slug, 1), href: "/recliner-repair-south-delhi" });
    } else if (!isRecliner && slug !== "sofa-repair-south-delhi") {
      links.push({ label: pickAnchor(SOFA_SOUTH_DELHI_ANCHORS, slug, 1), href: "/sofa-repair-south-delhi" });
    }
  } else if (isWestDelhi) {
    if (isRecliner && slug !== "recliner-repair-west-delhi") {
      links.push({ label: "recliner repair West Delhi", href: "/recliner-repair-west-delhi" });
    } else if (isFurniture && slug !== "furniture-repair-west-delhi") {
      links.push({ label: "furniture repair West Delhi", href: "/furniture-repair-west-delhi" });
    } else if (!isRecliner && !isFurniture && slug !== "sofa-repair-west-delhi") {
      links.push({ label: "sofa repair West Delhi", href: "/sofa-repair-west-delhi" });
    }
  } else {
    // Delhi pages: add type-specific authority hub
    if (isRecliner && slug !== "recliner-repair-delhi") {
      links.push({ label: pickAnchor(RECLINER_DELHI_ANCHORS, slug, 1), href: "/recliner-repair-delhi" });
    } else if (isFurniture && slug !== "furniture-repair-delhi" && !has("/furniture-repair-delhi")) {
      links.push({ label: pickAnchor(FURNITURE_DELHI_ANCHORS, slug, 1), href: "/furniture-repair-delhi" });
    }
  }

  // ── 3. Support page: /sofa-repair-cost-delhi ──
  if (slug !== "sofa-repair-cost-delhi" && !has("/sofa-repair-cost-delhi")) {
    links.push({ label: pickAnchor(COST_ANCHORS, slug, 3), href: "/sofa-repair-cost-delhi" });
  }

  // ── 4. Parent page ──
  const parent = inferParent(slug);
  if (parent && parent.href !== `/${slug}` && !has(parent.href)) {
    links.push(parent);
  }

  // ── 5. Regional siblings (fill up to 7 total, max 2 siblings) ──
  const region = getRegion(slug);
  const pool = SIBLING_POOLS[region] ?? SIBLING_POOLS["default"];
  const available = pool
    .filter((s) => s.href !== `/${slug}` && !has(s.href))
    .sort((a, b) => hash(a.href + slug) - hash(b.href + slug));

  const maxSiblings = Math.min(2, Math.max(0, 7 - links.length));
  for (let i = 0; i < maxSiblings && i < available.length; i++) {
    links.push(available[i]);
  }

  // ── 6. Extra cross-links for specific locality pages ──
  const extras = EXTRA_LINKS[slug];
  if (extras) {
    for (const extra of extras) {
      if (!has(extra.href) && extra.href !== `/${slug}`) {
        links.push(extra);
      }
    }
  }

  return links;
}
