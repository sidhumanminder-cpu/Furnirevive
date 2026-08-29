/**
 * Repair Scenario Profiles — structured locality intelligence for SEO content engine.
 *
 * Architecture rules:
 * - Keyed by bare locality slug (e.g. "pitampura", not "sofa-repair-pitampura")
 * - No rendered strings — only structured, reusable data arrays
 * - Service-specific wording is added by scenario-templates.ts, not here
 * - Adding a new locality = adding one entry to REPAIR_SCENARIO_PROFILES
 *
 * LocalitySlug is derived from the keys of KNOWN_LOCALITY_FRAGMENTS in localities.ts.
 * This gives compile-time typo protection for profile keys.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type CustomerType =
  | "family"
  | "senior"
  | "professional"
  | "luxury"
  | "office"
  | "mixed";

export type HousingType =
  | "dda-flats"
  | "builder-floors"
  | "independent-houses"
  | "gated-societies"
  | "luxury-apartments"
  | "mixed-residential"
  | "commercial-mixed";

export type RepairPreference =
  | "cost-conscious"
  | "quality-focused"
  | "premium"
  | "quick-turnaround"
  | "same-day";

export type RepairScenarioProfile = {
  /** Most frequent repair types reported in this locality */
  commonRepairs: string[];
  /** Furniture types most frequently seen in this locality */
  commonFurniture: string[];
  /** Primary causes of damage in this locality (climate, usage, housing type) */
  commonCauses: string[];
  /** Dominant customer profile */
  customerType: CustomerType;
  /** Dominant housing type */
  housingType: HousingType;
  /** How customers in this locality typically prefer repairs */
  repairPreference: RepairPreference;
  /** Observations a technician would make specific to this locality */
  technicianInsights: string[];
  /** Materials that perform well given local climate/housing conditions */
  recommendedMaterials: string[];
  /** Maintenance advice relevant to this locality's conditions */
  maintenanceTips: string[];
};

/**
 * LocalitySlug — the bare locality keys from KNOWN_LOCALITY_FRAGMENTS in localities.ts.
 * Using a union type prevents profile key typos at compile time.
 */
export type LocalitySlug =
  | "gaur-city"
  | "ats-pristine"
  | "mahagun"
  | "knowledge-park"
  | "pari-chowk"
  | "jaypee-greens"
  | "rohini"
  | "pitampura"
  | "shalimar-bagh"
  | "ashok-vihar"
  | "model-town"
  | "kamla-nagar"
  | "civil-lines"
  | "mukherjee-nagar"
  | "gtb-nagar"
  | "adarsh-nagar"
  | "gujranwala-town"
  | "keshav-puram"
  | "derawal-nagar"
  | "shakti-nagar"
  | "hudson-lane"
  | "dwarka"
  | "janakpuri"
  | "rajouri-garden"
  | "punjabi-bagh"
  | "greater-kailash"
  | "vasant-kunj"
  | "vasant-vihar"
  | "saket"
  | "lajpat-nagar"
  | "south-delhi"
  | "preet-vihar"
  | "mayur-vihar"
  | "east-delhi"
  | "karol-bagh"
  | "nehru-place"
  | "dlf-phase-1"
  | "dlf-phase-2"
  | "dlf-phase-3"
  | "dlf-phase-4"
  | "dlf-phase-5"
  | "sushant-lok"
  | "golf-course"
  | "sohna-road"
  | "cyber-city"
  | "nirvana-country"
  | "new-gurgaon"
  | "dwarka-expressway"
  | "indirapuram"
  | "vaishali"
  | "kaushambi"
  | "raj-nagar-extension"
  | "crossing-republik"
  | "vasundhara-ghaziabad"
  | "bptp"
  | "neharpar"
  | "greater-faridabad"
  | "old-faridabad"
  | "surajkund"
  | "sector-62-noida"
  | "sector-49-gurgaon"
  | "sector-50-gurgaon"
  | "sector-56-gurgaon"
  | "sector-57-gurgaon"
  | "sector-58-gurgaon"
  | "sector-65-gurgaon"
  | "sector-67-gurgaon"
  | "sector-70-gurgaon"
  | "sector-71-gurgaon"
  | "golf-course-extension-gurgaon"
  | "sector-51-gurgaon"
  | "sector-59-gurgaon"
  | "sector-60-gurgaon"
  | "sector-61-gurgaon"
  | "sector-62-gurgaon"
  | "sector-63-gurgaon"
  | "sector-64-gurgaon"
  | "sector-66-gurgaon"
  | "sector-68-gurgaon"
  | "sector-69-gurgaon"
  | "sector-72-gurgaon"
  | "sector-73-gurgaon"
  | "sector-74-gurgaon"
  | "sector-75-gurgaon"
  | "sector-76-gurgaon"
  | "sector-77-gurgaon"
  | "sector-78-gurgaon"
  | "sector-79-gurgaon"
  | "sector-80-gurgaon"
  | "sector-81-gurgaon"
  | "dwarka-expressway-gurgaon"
  | "sector-82-gurgaon"
  | "sector-82a-gurgaon"
  | "sector-83-gurgaon"
  | "sector-84-gurgaon"
  | "sector-85-gurgaon"
  | "sector-86-gurgaon"
  | "sector-87-gurgaon"
  | "sector-88-gurgaon"
  | "sector-89-gurgaon"
  | "sector-90-gurgaon"
  | "new-residential-gurgaon"
  | "sector-91-gurgaon"
  | "sector-92-gurgaon"
  | "sector-93-gurgaon"
  | "sector-95-gurgaon"
  | "sector-99-gurgaon"
  | "sector-102-gurgaon"
  | "sector-104-gurgaon"
  | "sector-109-gurgaon"
  | "sector-110-gurgaon"
  | "sector-111-gurgaon"
  | "vipul-world-gurgaon"
  | "central-park-gurgaon"
  | "tata-raisina-gurgaon"
  | "emaar-palm-drive-gurgaon"
  | "emaar-marbella-gurgaon"
  | "orchid-petals-gurgaon"
  | "bestech-park-view-gurgaon"
  | "vatika-city-gurgaon"
  | "richmond-park-gurgaon"
  | "hamilton-court-gurgaon"
  | "sector-67-gurgaon"
  | "sector-70-gurgaon"
  | "sector-71-gurgaon"
  | "golf-course-extension"
  | "south-city-1"
  | "south-city-2"
  | "palam-vihar"
  | "sector-40-gurgaon"
  | "sector-41-gurgaon"
  | "sector-44-gurgaon"
  | "sector-45-gurgaon"
  | "sector-46-gurgaon"
  | "sector-47-gurgaon"
  | "sector-48-gurgaon"
  | "sector-52-gurgaon"
  | "sector-53-gurgaon"
  | "sector-54-gurgaon"
  | "sector-55-gurgaon"
  | "malibu-towne"
  | "ardee-city"
  | "heritage-city-gurgaon"
  // West Delhi cluster
  | "rajouri-garden"
  | "punjabi-bagh"
  | "janakpuri"
  | "paschim-vihar"
  | "tilak-nagar"
  | "vikaspuri"
  | "uttam-nagar"
  // South Delhi cluster
  | "defence-colony"
  | "friends-colony"
  | "maharani-bagh"
  | "green-park"
  | "hauz-khas"
  | "safdarjung-enclave"
  | "panchsheel-park"
  | "gulmohar-park"
  | "greater-kailash-1"
  | "greater-kailash-2"
  | "greater-kailash-3";

// ─── Profiles ─────────────────────────────────────────────────────────────────

/**
 * REPAIR_SCENARIO_PROFILES — 10 representative locality profiles for Milestone 3A.
 * Expand to all localities in Milestone 3B after validating output quality.
 */
export const REPAIR_SCENARIO_PROFILES: Partial<Record<LocalitySlug, RepairScenarioProfile>> = {

  "pitampura": {
    commonRepairs: [
      "foam replacement in 3-seater sofas",
      "fabric re-upholstery on heavily used L-shaped sofas",
      "broken recliner mechanism repair",
      "sofa frame joint re-gluing",
      "spring sagging in older sofa sets",
    ],
    commonFurniture: [
      "fabric L-shaped sofas",
      "3+2+1 sofa sets",
      "recliner chairs",
      "sofa cum beds in second bedrooms",
      "wooden framed sofas",
    ],
    customerType: "family",
    housingType: "mixed-residential",
    repairPreference: "cost-conscious",
    commonCauses: [
      "daily heavy-use compression of foam over 5–8 years",
      "pet scratching on fabric armrests",
      "joint loosening from regular movement during cleaning",
      "children jumping causing spring fatigue",
      "dust accumulation in fabric causing accelerated wear",
    ],
    technicianInsights: [
      "Most flats are 2–3 BHK with standard-sized living rooms — sofas rarely exceed 3-seater",
      "Older DDA-era flats have low door clearances, requiring sofa repair on-site without disassembly",
      "Families typically request foam upgrade (32D to 40D) during repair to extend lifespan",
      "Recliner mechanism failures are common due to frequent use by multiple family members",
    ],
    recommendedMaterials: [
      "40D high-resilience foam for seats",
      "32D back support foam",
      "stain-resistant polyester fabric for households with children",
      "PU synthetic leather for armrests prone to abrasion",
    ],
    maintenanceTips: [
      "Vacuum fabric sofas weekly to prevent dust from degrading fabric fibre",
      "Rotate cushions every 2–3 months to even out foam compression",
      "Avoid placing sofas directly under AC vents — cold air accelerates leather cracking",
      "Use armrest covers in households with children or pets",
    ],
  },

  "rohini": {
    commonRepairs: [
      "foam replacement in DDA flat living room sofas",
      "spring repair in older sofa sets",
      "fabric re-upholstery for heavily worn sectional sofas",
      "wooden frame joint tightening",
      "recliner mechanism adjustment",
    ],
    commonFurniture: [
      "DDA-standard 3+1+1 sofa sets",
      "fabric sectional sofas",
      "wooden framed sofas from local markets",
      "recliner chairs",
      "fold-out sofa cum beds",
    ],
    customerType: "family",
    housingType: "dda-flats",
    repairPreference: "cost-conscious",
    commonCauses: [
      "foam degradation from extended daily use in compact living rooms",
      "spring fatigue from seating pressure on older sets",
      "joint loosening in wooden frames due to seasonal humidity changes",
      "fabric fraying on armrests and seat edges from daily wear",
      "dust and pet hair accumulation causing fabric matting",
    ],
    technicianInsights: [
      "Rohini has one of the highest concentrations of DDA flats — most sofas are standard-market purchases from Kirti Nagar or Lajpat Rai Market",
      "Many homes have 10–15 year old sofa sets that are structurally sound but need foam and fabric refresh",
      "Sector-based layout means technicians can cover multiple jobs in the same sector on a single visit",
      "Customers value transparent pricing given typical middle-income household budgets",
    ],
    recommendedMaterials: [
      "35D foam for budget-conscious repairs with good durability",
      "40D high-resilience foam for primary seating positions",
      "cotton-polyester blend fabric for breathability in compact rooms",
      "nylon webbing for spring support replacement",
    ],
    maintenanceTips: [
      "Brush and vacuum sofas weekly — Rohini's dust levels accelerate fabric wear",
      "Keep sofas away from balcony doors to reduce dust and moisture exposure",
      "Use a fabric protector spray after re-upholstery to extend lifespan",
      "Tighten visible wooden joint screws annually before the monsoon season",
    ],
  },

  "greater-kailash": {
    commonRepairs: [
      "leather sofa crack repair and conditioning",
      "recliner mechanism replacement on premium sets",
      "foam replacement with high-density upgrade",
      "Italian leather colour restoration",
      "wooden frame restoration on designer sofas",
    ],
    commonFurniture: [
      "Italian and imported leather sofas",
      "designer modular sofas",
      "premium recliner sets",
      "chesterfield and button-tufted sofas",
      "custom upholstered accent chairs",
    ],
    customerType: "luxury",
    housingType: "independent-houses",
    repairPreference: "quality-focused",
    commonCauses: [
      "leather drying and cracking from central AC dehumidification",
      "colour fading on light-toned leather from UV exposure through large windows",
      "recliner mechanism wear from frequent use in premium sets",
      "pet scratches on leather panels",
      "foam compression in premium sofas after 3–5 years of regular use",
    ],
    technicianInsights: [
      "GK homes typically have Italian or high-end Indian leather sofas — repair must match original quality",
      "Many customers have interior-designed living rooms and require colour-matched repairs invisible to the eye",
      "Premium leather sofas often have complex mechanisms or modular configurations requiring specialist tools",
      "Customers expect detailed inspection reports and material specifications before approving work",
    ],
    recommendedMaterials: [
      "semi-aniline leather fill compound for crack repairs",
      "colour-matched leather dye for seamless panel restoration",
      "high-density 50D foam for premium seating replacement",
      "genuine leather or top-grain PU for panel replacement",
    ],
    maintenanceTips: [
      "Condition leather with a pH-neutral conditioner every 3–4 months to prevent drying",
      "Keep leather sofas at least 2 feet from AC vents and direct sunlight",
      "Blot spills immediately — never rub — to prevent permanent staining",
      "Annual professional cleaning recommended for white or light-coloured leather sets",
    ],
  },

  // ─── Gurgaon localities ────────────────────────────────────────────────────

  "dlf-phase-1": {
    commonRepairs: [
      "high-density foam replacement in original teak sofa sets from 1990s–2000s kothi furnishing",
      "re-upholstery of sheesham wood frame sofas with sagging seats",
      "spring unit restoration in vintage 3-seater sets",
      "armrest padding rebuild on carved wooden sofa frames",
      "full cushion refilling where original cotton-coir filling has compressed over decades",
    ],
    commonFurniture: [
      "solid teak 5-seater sofa sets with carved armrests",
      "sheesham wood 3+2 configurations",
      "diwan-style daybeds with bolster cushions",
      "colonial-inspired settees with cane detailing",
      "heavy rosewood sofa-cum-beds from early 2000s Delhi showroom purchases",
    ],
    customerType: "senior",
    housingType: "independent-houses",
    repairPreference: "quality-focused",
    commonCauses: [
      "two decades of daily use compressing original cotton and coir filling",
      "fabric worn through at seat edges from years of repeated sitting positions",
      "jute webbing beneath seats stretched beyond tension from prolonged weight",
      "sunlight fading on south-facing drawing room sofas near large kothi windows",
      "termite trail damage to wooden frame joints in ground-floor living rooms",
    ],
    technicianInsights: [
      "Kothis along Sheetla Mata Road often have narrow internal staircases — sofa sets in first-floor drawing rooms cannot be removed for workshop repair and must be serviced in-situ",
      "Many homes on DLF Phase 1 Main Road were furnished by Kirti Nagar workshops in the late 1990s — these Burma teak frames are structurally sound and almost always worth restoring rather than replacing",
      "Residents frequently request matching the exact original fabric texture rather than choosing new options — sourcing from old-stock textile dealers is sometimes needed",
      "Ground-floor drawing rooms in older kothis have marble flooring that scratches easily — technicians must carry felt pads and floor blankets for on-site work",
    ],
    recommendedMaterials: [
      "40D HR foam with bonded cotton wrap for authentic firm-seat feel matching original era",
      "mill-woven cotton canvas in neutral tones matching original upholstery era",
      "premium jute webbing for spring-base re-strapping on vintage frames",
      "rubberised coir sheets as secondary support layer under foam",
    ],
    maintenanceTips: [
      "rotate seat cushions monthly to distribute compression evenly across the foam",
      "place silica gel sachets inside arm cavities during monsoon months to prevent musty odour in old padding",
      "avoid placing teak sofas directly against freshly whitewashed walls — lime residue accelerates fabric discolouration at contact points",
      "schedule a foam-firmness check every 3 years once sofas cross the 15-year mark",
    ],
  },

  "dlf-phase-2": {
    commonRepairs: [
      "complete fabric change to match newly renovated room colour palettes",
      "leather sofa colour restoration after clashing with updated wall paint",
      "arm and backrest re-padding to refresh silhouette without replacing the frame",
      "stain and watermark removal on fabric sofas exposed during renovation dust and painting",
      "loose cover tailoring for sofas being retained through phased interior work",
    ],
    commonFurniture: [
      "Italian-style leather 3-seater sofas from 2005–2012 purchases",
      "chesterfield-inspired rolled-arm sofas in drawing rooms",
      "modular L-shaped sets bought during previous renovation cycles",
      "suede and microfibre loveseats in family TV rooms",
      "imported fabric recliners from early home-theatre setups",
    ],
    customerType: "luxury",
    housingType: "mixed-residential",
    repairPreference: "premium",
    commonCauses: [
      "renovation dust and paint splatter settling into fabric weave during ongoing interior work",
      "colour mismatch becoming apparent only after new flooring or curtains are installed",
      "leather drying and cracking from chemical fumes during adjacent room renovation",
      "adhesive and varnish residue from nearby carpentry work transferring to upholstery",
      "existing sofa dimensions no longer fitting after room layout reconfiguration",
    ],
    technicianInsights: [
      "Apartments in group housing blocks along Golf Course Road extension often have ongoing renovation on adjacent floors — technicians should confirm lift access and stairwell clearance before arriving with material rolls",
      "Kothi owners on Phase 2 main road frequently provide interior designer colour swatches and expect exact fabric matching — carrying a physical swatch book from suppliers avoids repeat visits",
      "Many homes are mid-renovation with furniture shifted to one room — work must often happen in cramped temporary arrangements rather than the sofa's final placement position",
      "Residents in towers near the Phase 2–3 boundary often request co-ordinated re-covering of dining chairs alongside sofa work for a unified post-renovation look",
    ],
    recommendedMaterials: [
      "dust-resistant tightly woven polyester-cotton blends in contemporary muted tones",
      "leather re-colouring dye kits with sealant topcoat for post-renovation colour correction",
      "Scotchgard-equivalent fabric protector spray applied post-upholstery during ongoing renovation",
      "high-GSM cotton duck canvas for temporary protective loose covers during phased renovation",
    ],
    maintenanceTips: [
      "cover sofas with breathable cotton sheets during any adjacent painting or carpentry — renovation dust embeds permanently into open-weave fabrics within days",
      "wait at least two weeks after wall painting before removing sofa covers to allow volatile fumes to dissipate",
      "request a fabric swatch from your upholsterer before committing — colours appear different under warm interior lighting versus showroom LEDs",
      "schedule upholstery work as the final step in a renovation sequence to avoid re-contamination from later trades",
    ],
  },

  "dlf-phase-3": {
    commonRepairs: [
      "sectional sofa realignment and connector bracket tightening on oversized villa sets",
      "compact apartment sofa re-foaming where thin cushions have bottomed out",
      "ottoman and chaise extension reattachment on L-shaped villa configurations",
      "frame reinforcement on wide 4-metre sectionals where centre spans have sagged",
      "seat depth adjustment on deep-set villa sofas that smaller family members find uncomfortable",
    ],
    commonFurniture: [
      "oversized U-shaped sectionals in villa double-height living rooms",
      "compact 2-seater loveseats in group housing apartment living areas",
      "floor-level modular loungers in villa entertainment rooms",
      "standard 3-seater fabric sofas in mid-size apartment drawing rooms",
      "daybed-style window seats custom-built for villa bay windows",
    ],
    customerType: "mixed",
    housingType: "mixed-residential",
    repairPreference: "quality-focused",
    commonCauses: [
      "sectional connector hardware loosening from repeated movement during floor cleaning in large villa rooms",
      "thin-profile apartment sofa foam compressing within 5 years due to lower-density filling used to keep retail price accessible",
      "uneven floor surfaces in older villas causing frame stress on one side of long sectionals",
      "children using deep-seat villa sectionals as play surfaces accelerating fabric pilling and foam compression",
      "apartment balcony door drafts causing localised drying of leather on sofas placed near sliding glass",
    ],
    technicianInsights: [
      "Villa lanes near DLF Golf Course have 4-metre-wide sofas that cannot pass through standard doorframes — repair must happen in the living room with drop cloths protecting imported flooring",
      "Group housing societies near Qutab Plaza have strict entry timing for service personnel — gate pass and goods-lift availability must be confirmed before scheduling",
      "Two-technician teams are needed for villa sectionals but a single technician handles apartment sofas comfortably — dispatch must confirm sofa dimensions at booking to allocate correctly",
      "Several villas on interior roads have sunken living rooms accessed by two or three steps — heavy sectional components cannot be tilted easily and must be serviced in-place",
    ],
    recommendedMaterials: [
      "44D foam in 5-inch slabs for deep-seat villa sectional cushion rebuilds",
      "32D foam in 3-inch cuts for compact apartment sofa re-foaming where thinner profiles are needed",
      "heavy-duty metal sectional connector brackets to replace original plastic ones on oversized sets",
      "durable polyester-blend fabric rated for high-abrasion use in homes with young children",
    ],
    maintenanceTips: [
      "check sectional connector bolts every 6 months — household cleaning staff often push segments apart and reconnect them loosely",
      "for compact apartment sofas, flip reversible cushions weekly to extend foam life given the thinner padding",
      "place furniture coasters under sectional legs on villa marble floors to prevent micro-scratches from lateral movement",
      "avoid pushing oversized sectionals flush against walls — a 2-inch gap allows air circulation and prevents back-panel moisture accumulation",
    ],
  },

  "dlf-phase-4": {
    commonRepairs: [
      "flat-pack joint re-tightening on Pepperfry and Urban Ladder sofa frames",
      "L-shaped sofa chaise mechanism repair where connector bolts have worked loose",
      "replacement of low-density foam in online-brand sofas that compressed within 3 years",
      "fabric replacement on modular sofa units where covers are no longer available from the original brand",
      "leg and castor reattachment on sofas with screw-in feet that strip over time on hard flooring",
    ],
    commonFurniture: [
      "L-shaped modular sofas from Pepperfry and Urban Ladder",
      "IKEA-format compact sofas with removable washable covers",
      "convertible sofa-beds used in guest rooms of 2 BHK apartments",
      "fabric pull-out sectionals from online furniture brands",
      "slim-profile 2-seater sofas from newer D2C furniture startups",
    ],
    customerType: "professional",
    housingType: "gated-societies",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "cam-lock and bolt joints loosening from repeated assembly during house-shifting common among renting professionals",
      "lower-density foam used by online brands to reduce shipping weight degrading faster than showroom equivalents",
      "engineered wood frames in flat-pack sofas swelling at joints during Gurgaon monsoon humidity",
      "fabric pilling and tearing at seam lines where machine stitching was optimised for cost rather than durability",
      "castors and screw-in legs stripping their threads on hard vitrified tile flooring common in newer societies",
    ],
    technicianInsights: [
      "Gated societies near Galleria Market have online booking systems for service-provider entry — technicians must register vehicle numbers a day in advance or face denied entry at the boom barrier",
      "Many flats in towers near Ardee City are rented by young professionals who work from home — they strongly prefer defined 2-hour service windows rather than full-day availability",
      "Builder floors in plotted blocks between Phase 4 and Ardee City often lack lifts — carrying foam sheets and tools to third-floor walkups requires advance planning on material size",
      "Residents frequently show the original product listing on their phone as a reference — having assembly diagrams for common Pepperfry and Urban Ladder models saves diagnosis time on-site",
    ],
    recommendedMaterials: [
      "35D HR foam as a direct upgrade for the 28D foam shipped by most online brands",
      "stainless steel connector bolts to replace original zinc-alloy hardware that strips after repeated assembly",
      "pre-shrunk cotton-polyester blend fabric in contemporary greys and navies matching current online sofa aesthetics",
      "furniture-grade wood filler and PVA adhesive for repairing cam-lock bore holes in engineered wood panels",
    ],
    maintenanceTips: [
      "re-tighten all visible bolts and Allen-key joints every 6 months — flat-pack furniture loosens incrementally with daily use",
      "place a dehumidifier sachet inside the base cavity of engineered-wood frame sofas before monsoon season begins",
      "avoid dragging modular units across tiles when rearranging — lift and place to prevent leg-thread stripping",
      "when shifting homes, disassemble at original joint points rather than forcing the assembled unit through doorframes",
    ],
  },

  "dlf-phase-5": {
    commonRepairs: [
      "motorised recliner mechanism replacement and re-wiring",
      "Italian leather reconditioning and colour restoration on premium sets",
      "sectional sofa frame realignment after module shifting in large apartments",
      "foam core replacement in deep-seat European-format cushions",
      "armrest leather peeling repair on high-use powered recliners",
    ],
    commonFurniture: [
      "motorised leather recliners with built-in USB charging ports",
      "imported European modular sectionals (Natuzzi, Poltrona Frau format)",
      "custom-upholstered chaise lounges in master suite sitting areas",
      "home-theatre recliners with cup holders",
      "designer accent chairs with metal-and-leather frames",
    ],
    customerType: "luxury",
    housingType: "luxury-apartments",
    repairPreference: "premium",
    commonCauses: [
      "leather drying and cracking from year-round air conditioning in sealed luxury apartments",
      "motorised mechanism burnout from daily recliner use in entertainment rooms",
      "pet claw marks on aniline-dyed leather surfaces",
      "colour fading on south-facing living rooms with floor-to-ceiling glass",
      "frame stress from heavy marble flooring causing uneven sofa settling over time",
    ],
    technicianInsights: [
      "Magnolias and Aralias towers require 24–48 hour advance security clearance with resident approval before service lift access is granted",
      "Golf Course Road luxury towers have narrow service elevators — disassembly in the parking basement is often needed for sectional modules wider than 80cm",
      "Most Pinnacle and Aralias apartments have imported sofas with non-standard European foam densities that require custom-order sourcing",
      "Written material sample approvals are expected before any leather or fabric work begins — residents will decline work if shade matching is visibly off",
    ],
    recommendedMaterials: [
      "full-grain Italian aniline leather thickness-matched to original hide for seamless panel repairs",
      "high-resilience 45D+ foam for deep-seat European format cushion replacement",
      "German-made recliner motor assemblies (Okin or Limoss brand) for mechanism replacement",
      "UV-resistant leather conditioner for glass-wall sun exposure",
    ],
    maintenanceTips: [
      "apply pH-balanced leather conditioner every 6–8 weeks to counter AC-induced drying in sealed apartments",
      "keep motorised recliners on surge protectors to prevent mechanism burnout during voltage fluctuations",
      "rotate sectional modules quarterly to distribute wear evenly across seating positions",
      "use window film or blinds on south-facing glass walls to reduce UV leather degradation on exposed cushion panels",
    ],
  },

  "golf-course": {
    commonRepairs: [
      "full re-upholstery after multiple tenant cycles in corporate rental apartments",
      "sagging seat cushion foam replacement from heavy continuous use",
      "fabric stain removal and protective re-coating between tenant handovers",
      "broken armrest repair from rough handling during tenant moves",
      "loose leg joints and wobbly frame tightening on mid-range apartment sofas",
    ],
    commonFurniture: [
      "mid-range fabric L-shaped sectionals (Urban Ladder, Pepperfry era)",
      "compact 3-seater sofas sized for apartment living rooms",
      "sofa-cum-beds used in guest bedrooms of 2–3 BHK flats",
      "furnished-apartment standard sofas in corporate rental units",
      "modular sofas with removable washable covers",
    ],
    customerType: "mixed",
    housingType: "gated-societies",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "accelerated wear from 2–3 tenant turnovers without interim maintenance",
      "moving damage — scratches, torn fabric, bent legs from flat transitions",
      "food and beverage staining from tenants treating rental furniture casually",
      "foam compression from continuous heavy use without cushion rotation between tenancies",
      "pet damage accumulated across successive pet-owning tenants",
    ],
    technicianInsights: [
      "Repair requests in Sector 42–43 Ireo towers frequently come from property managers who need quick estimates over WhatsApp based on photo assessments alone",
      "Emaar Palm Hills and Unitech towers along Golf Course Road have high expat churn — the same sofa often returns for repair every 14–18 months between tenancies",
      "Service lift booking in Sector 54 societies is competitive — morning slots fill fast, so scheduling before 9 AM or after 6 PM works better for access",
      "Property managers in this belt prioritise speed and cost over material quality — they want the sofa presentable for the next tenant showing, not a full long-term restoration",
    ],
    recommendedMaterials: [
      "commercial-grade polyester fabric with Scotchgard stain resistance for high-turnover rental sofas",
      "medium-density 32–36D polyurethane foam for cost-effective cushion replacement",
      "pre-finished solid wood legs with metal threaded inserts for durability through multiple moves",
      "dark-toned upholstery fabrics that hide staining between tenant cycles",
    ],
    maintenanceTips: [
      "schedule professional deep cleaning between every tenant changeover rather than waiting for visible damage",
      "use zippered removable cushion covers so incoming tenants start with fresh fabric",
      "tighten all frame joints and leg bolts at each tenant transition — moving always loosens hardware",
      "keep a photographic condition report at move-in to distinguish pre-existing wear from new tenant damage",
    ],
  },

  "sushant-lok": {
    commonRepairs: [
      "sagging cushion overhaul on 15–20 year old sofa sets from Kirti Nagar showroom purchases",
      "re-upholstery of faded velvet and brocade drawing room sofas",
      "teak and sheesham frame joint repair on heavy traditional sets",
      "spring system replacement in older coil-based seating",
      "armrest wood polish restoration and scratch filling",
    ],
    commonFurniture: [
      "heavy 7-seater sofa sets with carved wooden frames from late 1990s Delhi showrooms",
      "diwan-style settees with bolster cushions in formal drawing rooms",
      "rocking chairs and single-seat arm chairs with cane work",
      "large wooden-frame sofa-cum-beds in guest rooms",
      "velvet-upholstered high-back chairs bought as wedding furniture",
    ],
    customerType: "family",
    housingType: "independent-houses",
    repairPreference: "quality-focused",
    commonCauses: [
      "natural foam degradation after 15+ years of continuous multi-generational family use",
      "wood joint loosening from seasonal humidity changes in non-AC ground-floor rooms",
      "fabric worn through from decades of daily use by large households",
      "termite damage to wooden frames in independent houses with garden adjacency",
      "rough use by children and grandchildren on furniture bought for formal drawing room entertaining",
    ],
    technicianInsights: [
      "Sushant Lok Phase 1 kothis near Galleria Market often have drawing rooms built around a central sofa set — furniture cannot be moved without dismantling, so all repair must happen in-situ",
      "Most sofa sets here were purchased from Kirti Nagar or South Extension showrooms in the late 1990s — families are emotionally attached and want exact fabric matching, not modern upgrades",
      "Ground-floor drawing rooms in these houses rarely have full-time AC, so wood frames experience more seasonal expansion and contraction than tower apartments",
      "Access is straightforward — wide kothi gates with no lift constraints — but families expect technicians to lay drop cloths and keep the room spotless throughout the job",
    ],
    recommendedMaterials: [
      "high-density rubberised coir and foam combination matching original 1990s cushion feel",
      "brocade and velvet fabrics in traditional patterns for period-accurate restoration",
      "teak-compatible wood filler and French polish for frame scratch and joint repair",
      "anti-termite treated jute webbing for spring-bed base replacement",
    ],
    maintenanceTips: [
      "apply anti-termite spray around sofa legs and wooden frame bases annually before monsoon season",
      "flip and rotate seat cushions monthly — heavy foam sets develop permanent body impressions after years of fixed seating positions",
      "keep wooden frames away from direct wall contact to prevent moisture wicking from un-waterproofed boundary walls",
      "vacuum brocade and velvet upholstery weekly to prevent dust embedding that accelerates fabric wear",
    ],
  },

  "nirvana-country": {
    commonRepairs: [
      "oversized L-shaped sectional re-upholstery and foam density upgrade",
      "fabric pilling and seam stress repair on wide modular sections",
      "sunken seat restoration on deep-seat contemporary sofas in double-height rooms",
      "leg and base repair on low-profile platform-style sectionals",
      "colour refresh on microfibre and suede-finish upholstery faded by villa window light",
    ],
    commonFurniture: [
      "oversized L-shaped sectionals spanning 10–12 feet for double-height villa living rooms",
      "low-profile platform sofas with clean contemporary lines",
      "large U-shaped modular configurations with chaise extensions",
      "statement designer sofas from Luxury Living or BoConcept showrooms",
      "floor-level lounge seating paired with area rugs in open-plan spaces",
    ],
    customerType: "luxury",
    housingType: "independent-houses",
    repairPreference: "quality-focused",
    commonCauses: [
      "foam compression on deep-seat cushions from daily family lounging in open-plan living areas",
      "fabric pilling on large surface areas from high foot traffic across oversized sectionals",
      "structural stress on extended L-shaped frames from children using them as play surfaces",
      "dust accumulation in double-height open-plan spaces accelerating fabric soiling near NH-48",
      "sun exposure through large villa windows causing uneven colour fading on one sectional arm",
    ],
    technicianInsights: [
      "Nirvana Country villas in Sector 50 have wide ground-floor entrances and no lift constraints — full sectional modules can be moved to the garden for re-upholstery in good weather",
      "Double-height living rooms demand furniture scaled to the space — residents often want deeper seats or extended modules, and repair visits become an opportunity to reconfigure",
      "Unlike Sushant Lok families, Nirvana Country residents are open to material upgrades rather than exact restoration — they want improved fabric or foam, not period-accurate matching",
      "Proximity to NH-48 means noticeably higher ambient dust in these villas — tight-weave performance fabrics outperform open-texture bouclé or loose-weave upholstery here",
    ],
    recommendedMaterials: [
      "layered memory foam over HR-40 base for deep-seat comfort restoration in villa sectionals",
      "tight-weave performance fabrics (Crypton or Aquaclean finish) suited to dusty villa environments near NH-48",
      "reinforced hardwood frame inserts for oversized sectional stress points",
      "stain-resistant microfibre in neutral tones that complement open-plan villa aesthetics",
    ],
    maintenanceTips: [
      "vacuum all sectional surfaces twice weekly — double-height ceilings circulate more dust onto low-profile furniture",
      "rotate modular sections every 3 months so high-traffic positions share wear across the full configuration",
      "use UV-filtering sheers on large villa windows to prevent asymmetric colour fading on exposed sectional arms",
      "schedule professional fabric protection re-coating annually — performance coatings degrade faster in high-dust environments near the highway",
    ],
  },

  // ─── Gurgaon mid-market + NCR (Round 3) ──────────────────────────────────────

  "sohna-road": {
    commonRepairs: [
      "first-cycle foam replacement in 3-5 year old mid-market sofas bought at possession",
      "fabric stitching repair on seam splits from early construction-dust abrasion",
      "recliner cable and lever adjustment in budget mechanism sets",
      "sofa leg levelling on uneven builder-grade flooring",
      "modular connector tightening in Pepperfry and HomeTown purchased sofas",
    ],
    commonFurniture: [
      "mid-market 3-seater fabric sofas from HomeTown and Pepperfry",
      "2+3 recliner sets from mid-range Gurgaon showrooms",
      "L-shaped modular sofas in 3 BHK apartments",
      "compact sofa-cum-beds in second bedrooms",
      "basic foam sectionals from local Gurgaon retailers",
    ],
    customerType: "professional",
    housingType: "gated-societies",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "construction dust from adjacent under-development sectors embedding in fabric weave and abrading fibres ahead of schedule",
      "first foam compression cycle in 3-5 year old sofas that are past warranty but not yet considered for replacement",
      "west-facing apartment balcony heat causing foam to soften and compress faster than north-facing units",
      "recliner lever wear in budget sets with lighter-grade metal mechanisms that were not designed for daily multi-person use",
      "slight builder-grade floor unevenness causing rocking sofa legs that stress frame joints over time",
    ],
    technicianInsights: [
      "Sohna Road societies such as Vatika City and BPTP Park Grandeura are at different completion stages — fully settled blocks exist alongside towers still under active construction, raising dust levels across the corridor",
      "Residents typically moved in 3-6 years ago and are now hitting the first repair cycle on furniture bought during the possession phase — most have never had their sofa repaired before",
      "Society security at Vatika City and BPTP properties requires vehicle pre-registration — unexpected same-day visits need gate coordination and cannot be treated as a walk-in call",
      "Most residents commute to Cyber City or Udyog Vihar and are rarely home before 7 PM — evening and weekend slots are in consistently high demand",
    ],
    recommendedMaterials: [
      "dust-resistant tight-weave polyester fabric suited to high-construction-dust environments near active sites",
      "38D foam for mid-market sofa replacement without over-engineering the repair cost for first-time repair customers",
      "cable-actuated recliner lever replacement kits compatible with budget mid-range mechanism brands",
      "self-levelling rubber feet for sofa legs on slightly uneven builder-grade flooring in newer buildings",
    ],
    maintenanceTips: [
      "vacuum sofa fabric twice weekly while adjacent construction continues — fine silica dust embeds deeply in open-weave upholstery",
      "check recliner lever tension every 6 months before full cable failure — budget mechanism cables snap suddenly without gradual warning",
      "apply fabric protector spray after professional cleaning as construction-era dust contains alkaline compounds that weaken fabric dye",
      "use anti-tip feet on sofas near balcony doorways where slight floor slope is common in newly built apartments",
    ],
  },

  "cyber-city": {
    commonRepairs: [
      "co-working lounge sofa foam restoration for multinational IT office spaces",
      "premium faux leather panel replacement on IT office lobby seating",
      "serviced apartment sofa refurbishment between occupancy cycles",
      "office reception L-shaped sofa fabric and base panel replacement",
      "ergonomic lounge chair mechanism servicing in open-plan tech offices",
    ],
    commonFurniture: [
      "premium reception L-shaped office sofas in multinational lobby areas",
      "modular lounge seating in open-plan co-working spaces",
      "high-spec faux leather visitor seating in IT office waiting areas",
      "serviced apartment sofas with international-standard upholstery",
      "ergonomic chair-sofa hybrids in creative and consulting office environments",
    ],
    customerType: "office",
    housingType: "commercial-mixed",
    repairPreference: "same-day",
    commonCauses: [
      "continuous AC operation at 18-20°C running 10-12 hours daily drying out faux leather seams in sealed glass-facade IT offices",
      "8-10 hours of daily footfall on reception sofas compressing foam within 18-24 months rather than the residential 5-7 year cycle",
      "UV exposure through full-height glass facades discolouring premium fabric upholstery on south and west-facing lobby seats",
      "heavy laptop bag and luggage dragging abrading armrest edges in co-working lounge seating",
      "serviced apartment sofas receiving back-to-back short-stay occupancy without any conditioning maintenance in between",
    ],
    technicianInsights: [
      "Cyber City offices are multinational IT and consulting companies — reception areas represent brand identity and facilities managers are sensitive to the visible quality of any repair finish",
      "Co-working spaces like WeWork and 91Springboard require same-morning completion as lounge areas open to members throughout the business day",
      "Serviced apartments in Cyber City-adjacent blocks have international guests who set higher upholstery condition expectations than domestic rental accommodation",
      "Downtime in reception or lobby areas must be scheduled before 9 AM or after 7 PM to avoid client-facing work during business hours",
    ],
    recommendedMaterials: [
      "commercial-grade 50D foam rated for 8+ hours of daily high-footfall use in reception and lobby sofas",
      "antimicrobial bonded faux leather with PU surface for hygiene-conscious multinational office environments",
      "UV-stabilised upholstery fabric for glass-facade offices with south or west orientation and all-day sun exposure",
      "stain-resistant performance fabric with pattern-matching capability for co-working lounge sets that need consistent aesthetics",
    ],
    maintenanceTips: [
      "wipe office reception faux leather sofas with a pH-neutral cleaner daily — Cyber City lobbies see constant bag and laptop contact that transfers surface grime",
      "condition faux leather monthly to counteract AC-driven drying — crack prevention at seam edges is far cheaper than full panel replacement",
      "schedule annual professional upholstery servicing for all office sofas as a planned maintenance contract rather than waiting for visible damage",
      "rotate reversible lounge cushions monthly in co-working spaces to prevent one-side foam collapse under uneven member usage patterns",
    ],
  },

  "new-gurgaon": {
    commonRepairs: [
      "early foam sagging correction in economy sofas bought at apartment possession in new sectors",
      "flat-pack sofa frame joint tightening and connector replacement",
      "fabric spot repair and blotch removal on light-coloured modern sofas",
      "sofa leg and caster replacement on online-brand units with plastic base components",
      "zipper and stitching repair on modular sofa cover panels",
    ],
    commonFurniture: [
      "IKEA flat-pack 2-3 seater sofas",
      "economy online-brand modular sofas from Wakefit and HomeTown",
      "mid-market 3+2 fabric sofa sets",
      "sofa-cum-beds in compact 2 BHK second bedrooms",
      "L-shaped affordable sectionals in new 3 BHK apartments",
    ],
    customerType: "mixed",
    housingType: "gated-societies",
    repairPreference: "cost-conscious",
    commonCauses: [
      "economy foam in budget sofas sagging faster than expected — residents are surprised by visible collapse in furniture only 2-3 years old",
      "flat-pack assembly joints loosening over 1-2 years of regular use as factory-torqued cam-lock connectors were not designed for indefinite retention",
      "ongoing construction in Sectors 77-88 generating fine silica dust that settles into fabric and weakens fibre structure",
      "condensation drip from AC units staining light-coloured upholstery on sofas positioned below wall-mounted units in new apartments",
      "UV bleaching on sofas placed near full-height east or west-facing windows in new apartment buildings",
    ],
    technicianInsights: [
      "New Gurgaon residents are predominantly first-time homeowners who relocated from Delhi or Rajasthan for roles in Manesar IMT or Cyber City — most bought furniture at possession and are encountering their first repair decision earlier than expected",
      "Sectors near the older Palam Vihar colony (Sectors 76-78) have a mix of established Palam Vihar families with traditional wooden sofa sets and newer society residents with online-brand furniture — very different repair profiles coexist in close proximity",
      "Under-construction sectors from 80 onwards still have active site traffic — technician parking and society entry need confirmation before visits",
      "Many residents work rotational shifts at nearby industrial units or Manesar companies — flexible early-morning and late-evening appointment slots are frequently requested",
    ],
    recommendedMaterials: [
      "36D foam as a cost-effective density upgrade over economy foam in budget first-ownership sofas",
      "dust-resistant polyester fabric in dark or mid-tone geometric patterns suited to construction-zone environments",
      "reinforced cam-lock hardware to replace loosened IKEA-style connectors that have cycled through expansion and contraction",
      "anti-UV fabric protector spray for south and west-facing new apartment living rooms with large window spans",
    ],
    maintenanceTips: [
      "tighten all flat-pack sofa connectors every 6 months — assembly joints loosen naturally under regular use and micro-vibration from nearby active construction sites",
      "vacuum sofas twice weekly while construction in adjacent sectors continues — fine silica dust is invisible but abrades fabric fibres faster than coarse dust",
      "use curtain sheers on east or west-facing windows to prevent UV bleaching on light-coloured modern fabric sofas",
      "run a dehumidifier near sofas during monsoon months — new-construction concrete in walls releases moisture for 2-3 years after possession, raising indoor humidity",
    ],
  },

  "dwarka-expressway": {
    commonRepairs: [
      "leather panel micro-abrasion repair on premium sofas damaged during move-in through service lifts of 30+ floor towers",
      "motorised recliner mechanism servicing and calibration in recently placed power sets",
      "foam density upgrade in mid-range sofas where residents under-specified density at time of purchase",
      "large modular sectional connector and frame re-tightening after possession-phase settling",
      "fabric re-upholstery with designer swatches to match newly decorated open-plan interiors",
    ],
    commonFurniture: [
      "premium leather sectionals in Godrej 101 and ATS Marigold handover apartments",
      "motorised recliner sets in master bedroom sitting areas of 3-4 BHK units",
      "large L-shaped modular sofas in open-plan living rooms of high-floor apartments",
      "imported upholstered accent chairs in contemporary expat-influenced interiors",
      "sofa-cum-beds in guest bedrooms of 4 BHK apartments",
    ],
    customerType: "professional",
    housingType: "gated-societies",
    repairPreference: "quality-focused",
    commonCauses: [
      "micro-abrasion on leather panels from move-in handling through narrow service lifts and low-headroom loading bays in 30-40 storey towers",
      "recliner motor and mechanism calibration drift in motorised sets after first months of operation in newly commissioned apartments",
      "foam compression in freshly purchased sofas where residents chose economy density to reduce move-in costs",
      "dust from Sheetla Mata Road construction and active development along the expressway settling on expressway-facing fabric upholstery",
      "continuous sun exposure through large north-east corner windows drying out leather surfaces in apartments with premium panoramic windows",
    ],
    technicianInsights: [
      "Societies like Godrej 101, ATS Marigold, Sobha City, and Hero Homes have 30-40 storey towers with scheduled service lift access windows — visits must be coordinated with building management 24 hours in advance",
      "Residents tend to be senior IT professionals, returning NRIs, or Delhi upgraders who invested in quality furniture and expect repair standards to match the original purchase quality",
      "Many apartments were decorated by professional interior designers — technicians should carry fabric and material sample books to allow precise colour and texture matching",
      "Expressway-side apartments receive significant road vibration from Delhi-Gurgaon heavy traffic, which residents report contributes to frame joint loosening in newly placed large sectionals",
    ],
    recommendedMaterials: [
      "top-grain leather for visible panel replacement on premium sofas in large open-plan living rooms",
      "imported high-resilience HR-40D foam for density upgrade in freshly purchased but under-specified sofas",
      "colour-matched leather conditioner and repair paste for move-in micro-abrasion correction on luxury panel surfaces",
      "UV-blocking fabric protector for expressway-facing apartments with prolonged direct sun exposure through large windows",
    ],
    maintenanceTips: [
      "condition all leather sofas every 2 months — Dwarka Expressway's combination of construction dust and year-round AC creates a chronically drying environment that accelerates micro-cracking",
      "tighten modular sectional connectors 6 months after possession — building settlement and move-in vibration loosen factory-set joints in large sectionals",
      "service motorised recliner mechanisms annually — sustained road vibration from the expressway is reported to affect motor mount fittings in tower units facing the highway",
      "apply UV-protective spray on sofas near large expressway-facing windows before summer to prevent leather surface bleaching from morning sunlight",
    ],
  },

  "vaishali": {
    commonRepairs: [
      "foam replacement in older sofas in established Sector 1-4 households approaching 12-15 year lifespan",
      "wooden sofa frame joint tightening and shellac polish renewal in traditional sets",
      "fabric changeover on long-held sofa sets where residents want to keep the frame but refresh the look",
      "recliner adjustment and spring tightening in family sofas used by senior household members throughout the day",
      "sofa-cum-bed hinge repair in second-bedroom utility sofas",
    ],
    commonFurniture: [
      "traditional wooden 3+2+1 sofa sets in older Sector 1-3 independent houses",
      "mid-market fabric sectionals in gated apartment societies near Vaishali Metro",
      "recliner chairs in master bedroom areas of established households",
      "sofa-cum-beds in Sector 3 residential blocks",
      "compact 2-seater sofas in 1-2 BHK apartments near the metro corridor",
    ],
    customerType: "mixed",
    housingType: "mixed-residential",
    repairPreference: "quality-focused",
    commonCauses: [
      "foam degradation in sofas used continuously for 12-15 years in established joint-family households where the same set has never been replaced",
      "wooden frame joint loosening from decades of seasonal thermal expansion and contraction in older Sector 1 independent houses",
      "fabric surface pilling concentrated in one or two fixed seating positions in long-held family sofa sets",
      "recliner mechanism wear in households where senior residents use the chair multiple times throughout the day as their primary sitting position",
      "dust from Anand Vihar ISBT bus traffic accumulating on upholstery in transit-adjacent apartments on the Delhi-border side",
    ],
    technicianInsights: [
      "Vaishali Sectors 1-3 contain established families with older furniture making genuine repair-vs-replace decisions — many sofas have solid wooden frames that are structurally sound and need only foam and fabric, making repair clearly the better value",
      "Newer gated societies near Vaishali Metro cater to younger commuters with newer furniture that has completely different repair triggers from the established sector households — the two profiles coexist within a short distance",
      "Transit access from Vaishali Metro improves appointment flexibility, but many residents follow predictable commute schedules and are reliably home in evenings",
      "Proximity to Anand Vihar ISBT raises ambient dust levels in transit-adjacent apartments noticeably higher than in Indirapuram's more interior apartment zones",
    ],
    recommendedMaterials: [
      "40D foam for established household sofa upgrades — older residents specifically request firmness comparable to what their original sofa felt like when new",
      "durable polyester fabric in traditional designs for wooden-frame sofa re-upholstery to match the existing aesthetic of older homes",
      "wood filler and shellac polish for frame joint restoration in older Sector 1-3 independent houses with sheesham or teak frames",
      "tight-weave anti-dust fabric covers suited to elevated ambient dust near the Anand Vihar transit corridor",
    ],
    maintenanceTips: [
      "clean wooden sofa frames with furniture wax twice a year — older sheesham and teak frames in Sector 1-3 homes benefit from regular conditioning given Delhi NCR's wide seasonal temperature swings",
      "rotate seat cushions monthly in established households where one or two seats carry most of the daily use while adjacent seats are rarely occupied",
      "vacuum transit-facing apartment sofas twice weekly — Anand Vihar bus traffic generates fine road dust at levels noticeably higher than in interior residential zones",
      "service recliner mechanisms annually in households where a senior family member uses the chair as their primary all-day seating position",
    ],
  },

  "kaushambi": {
    commonRepairs: [
      "foam replacement in compact 1-2 BHK rental apartment sofas worn by high tenant turnover",
      "faux leather re-covering on small-office waiting area sofas along NH-24 commercial strip",
      "spring and webbing replacement in older building-stock sofas from late 1990s apartment blocks",
      "armrest stitching and panel repair on heavily used residential sofas in older Kaushambi towers",
      "sofa frame strut replacement in ground-floor properties with floor-level moisture ingress",
    ],
    commonFurniture: [
      "compact 2-3 seater sofas in 1-2 BHK Kaushambi tower apartments",
      "older budget sofa sets in late 1990s and early 2000s apartment blocks",
      "small-office waiting sofas in NH-24 commercial premises",
      "sofa-cum-beds in single-room tenant accommodation near Anand Vihar",
      "traditional wooden sofas with spring suspension in older ground-floor properties",
    ],
    customerType: "mixed",
    housingType: "commercial-mixed",
    repairPreference: "cost-conscious",
    commonCauses: [
      "accelerated foam compression from high tenant turnover in rental apartments near Anand Vihar station — sofas absorb multiple tenancy cycles of use without maintenance",
      "older building fabric (1995-2005 construction era) meaning sofa frames and bases are at or past their expected serviceable lifespan",
      "road vibration from heavy vehicle traffic on NH-24 and the Kaushambi main road stressing sofa frame joints over years of low-level continuous vibration",
      "dust from Anand Vihar ISBT bus operations and the railway station settling heavily on ground and first-floor residential upholstery",
      "humidity ingress in older buildings with insufficient damp-proofing weakening jute webbing and wooden base panels at ground level",
    ],
    technicianInsights: [
      "Kaushambi's older apartment towers have lifts that may be out of service or very small — technicians should confirm access and be prepared to carry materials up narrow staircases",
      "Many residents make strictly cost-driven repair decisions and respond well to transparent labour-only pricing when they supply their own foam or fabric from the nearby Laxmi Nagar market",
      "Commercial offices along the NH-24 strip and near Kaushambi Metro prioritise speed — same-day or next-morning completion is expected because waiting areas cannot be left without seating during business hours",
      "Ground-floor properties facing the main road show the fastest fabric degradation due to combined dust, humidity, and road vibration — upper floors in the same building are in noticeably better condition",
    ],
    recommendedMaterials: [
      "28D rebonded foam for cost-effective rental apartment sofa replacement where residents do not want to invest in premium materials",
      "budget-range rexine or faux leather for commercial waiting-area seating subject to high daily visitor contact",
      "heavy-gauge jute webbing for spring platform replacement in older sofa frames where the original webbing has dried and cracked",
      "anti-humidity treated plywood for base panel replacement in older damp-prone ground-floor Kaushambi properties",
    ],
    maintenanceTips: [
      "vacuum ground-floor apartment sofas twice weekly — Anand Vihar ISBT traffic generates sustained fine road dust at ground level in this zone",
      "elevate sofas on wooden risers in ground-floor properties where monsoon water seepage along older building skirting is common",
      "wipe commercial waiting-area sofas daily with a damp cloth to prevent footfall dust from bonding permanently with faux leather surfaces",
      "inspect sofa base platforms in older building-stock apartments annually — jute webbing in 20+ year old frames is past its typical serviceable life and fails suddenly",
    ],
  },

  "vasant-kunj": {
    commonRepairs: [
      "fabric re-upholstery on designer sofas",
      "foam replacement with density upgrade",
      "recliner mechanism adjustment and lubrication",
      "sofa base board replacement",
      "decorative button tufting restoration",
    ],
    commonFurniture: [
      "designer fabric sectionals",
      "leather and fabric combination sofas",
      "recliner sets with USB charging ports",
      "modular L-shaped sofas",
      "accent chairs and ottomans",
    ],
    customerType: "professional",
    housingType: "luxury-apartments",
    repairPreference: "quality-focused",
    commonCauses: [
      "fabric pilling and wear from regular use in high-traffic living areas",
      "foam sagging in frequently used seats of large sectionals",
      "recliner mechanism wear in households with daily heavy use",
      "base board cracking from structural stress in large sofas",
      "pet scratching on fabric armrests",
    ],
    technicianInsights: [
      "Vasant Kunj residents typically purchased furniture from Ambience Mall showrooms or online premium brands",
      "Many apartments have large living areas with statement sofas as focal points — repair finish quality is paramount",
      "Proximity to DLF Promenade means exposure to branded furniture with non-standard components",
      "Customers are time-sensitive and value confirmed appointment slots over flexible visits",
    ],
    recommendedMaterials: [
      "40D to 45D high-resilience foam for primary seating",
      "performance fabric (stain and abrasion resistant) for re-upholstery",
      "high-quality sinuous spring replacement for base support",
      "PU leather for armrest sections prone to wear",
    ],
    maintenanceTips: [
      "Brush fabric sofas weekly with a soft upholstery brush to prevent fibre matting",
      "Treat fabric with a stain-repellent spray after cleaning",
      "Avoid placing sharp objects on armrests — even small cuts in fabric can spread",
      "Lubricate recliner mechanisms annually for smooth operation",
    ],
  },

  "dwarka": {
    commonRepairs: [
      "foam replacement in DDA sector sofas",
      "fabric re-upholstery on 3+2+1 sets",
      "wooden frame joint re-gluing",
      "spring replacement in older sofa bases",
      "sofa leg replacement and levelling",
    ],
    commonFurniture: [
      "fabric 3+2+1 sofa sets",
      "DDA-standard living room sofas",
      "wooden sofa sets with cushions",
      "sofa cum beds in children's rooms",
      "recliner chairs in master bedrooms",
    ],
    customerType: "family",
    housingType: "dda-flats",
    repairPreference: "cost-conscious",
    commonCauses: [
      "foam degradation in heavily used family sofas over 7–10 years",
      "joint loosening from moving furniture between Dwarka sectors",
      "spring fatigue from multiple adults using the same sofa daily",
      "fabric wear concentrated on armrests and seat edges",
      "moisture ingress in ground-floor flats causing wooden frame swelling",
    ],
    technicianInsights: [
      "Dwarka is one of Delhi's largest residential sectors — most homes are DDA 2–3 BHK flats with standard-sized sofas",
      "Many residents bought furniture 8–12 years ago and are making a repair-vs-replace decision",
      "Ground-floor flats often have dampness issues affecting wooden sofa frames",
      "Sector distance from central Delhi means residents strongly prefer doorstep service",
    ],
    recommendedMaterials: [
      "35D foam for budget repairs, 40D for premium upgrade",
      "polyester or cotton-poly blend fabric for durability",
      "moisture-resistant wooden adhesive for ground-floor flat repairs",
      "powder-coated metal L-brackets for frame joint reinforcement",
    ],
    maintenanceTips: [
      "Elevate sofas slightly off floor in ground-floor flats to reduce moisture contact",
      "Vacuum weekly — Dwarka's open sectors have higher dust levels than enclosed colonies",
      "Check and tighten frame joint screws every year before monsoon season",
      "Use seat covers in high-use positions to extend fabric lifespan",
    ],
  },

  "janakpuri": {
    commonRepairs: [
      "fabric re-upholstery on family sofas",
      "foam replacement with standard density upgrade",
      "wooden sofa frame repair",
      "recliner mechanism cable replacement",
      "spring and webbing support repair",
    ],
    commonFurniture: [
      "wooden framed sofas with loose cushions",
      "fabric 3+2 sofa sets",
      "recliner single chairs",
      "sofa cum beds in study rooms",
      "DDA-standard living room sets",
    ],
    customerType: "family",
    housingType: "mixed-residential",
    repairPreference: "cost-conscious",
    commonCauses: [
      "foam compression from daily use by multiple family members",
      "fabric wear on heavily used seat edges and armrests",
      "wooden joint loosening from regular repositioning",
      "recliner cable failure from frequent operation",
      "pet fur accumulation causing fabric surface degradation",
    ],
    technicianInsights: [
      "Janakpuri has a mix of DDA flats and independent houses — sofa types vary significantly",
      "Many residents source furniture from nearby Kirti Nagar or Uttam Nagar markets",
      "Customers are cost-aware and respond well to itemised quotes explaining what each repair addresses",
      "Independent houses sometimes have larger sofa sets requiring two technicians",
    ],
    recommendedMaterials: [
      "35D foam for standard repairs",
      "durable polyester fabric in neutral tones",
      "fibre webbing for under-seat support replacement",
      "wood filler and adhesive for frame joint repairs",
    ],
    maintenanceTips: [
      "Use armrest protectors — Janakpuri's daily-use patterns show armrests wear 3x faster than seats",
      "Vacuum weekly and deep clean fabric every 6 months",
      "Tighten wooden frame screws before and after monsoon season",
      "Keep recliner mechanisms free of dust by covering when not in regular use",
    ],
  },

  "indirapuram": {
    commonRepairs: [
      "foam replacement in apartment society sofas",
      "fabric re-upholstery on L-shaped sofas",
      "recliner mechanism repair",
      "base board and spring support replacement",
      "sofa cum bed hinge repair",
    ],
    commonFurniture: [
      "L-shaped fabric sectionals",
      "3+2 fabric sofa sets",
      "recliner sets (2+3 configurations)",
      "sofa cum beds",
      "modular sofas from online brands",
    ],
    customerType: "professional",
    housingType: "gated-societies",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "foam compression in compact apartment sofas with heavy daily use",
      "fabric wear from children and pets in family apartments",
      "recliner mechanism failures in mid-range branded recliners",
      "base board cracking from structural stress in larger L-shaped sofas",
      "dust and humidity from proximity to Yamuna floodplain area",
    ],
    technicianInsights: [
      "Indirapuram has very high apartment density — most visits cover Ahinsa Khand, Shakti Khand, and Nyay Khand zones",
      "Residents frequently purchase online (Pepperfry, Urban Ladder) — sofas may have non-standard modular configurations",
      "Society security requirements mean technicians need pre-registered vehicle details",
      "Young professional families often prefer fabric protection coating post-repair",
    ],
    recommendedMaterials: [
      "40D foam for primary seats in apartment sofas",
      "stain-resistant performance fabric for families with children",
      "sinuous spring replacement for base support in L-shaped sofas",
      "anti-humidity wood sealant for frame repairs near flood plain zone",
    ],
    maintenanceTips: [
      "Apply stain-guard spray on fabric sofas — Indirapuram apartments have younger families with higher spill frequency",
      "Clean recliner mechanisms with a dry cloth every 3 months",
      "Keep sofas away from exterior walls in monsoon months to avoid humidity damage",
      "Check sofa cum bed hinges every 6 months if used as a daily bed",
    ],
  },

  "lajpat-nagar": {
    commonRepairs: [
      "foam replacement in multi-storey apartment sofas",
      "leather sofa crack repair",
      "recliner mechanism servicing",
      "fabric re-upholstery on older sofa sets",
      "wooden frame base repair",
    ],
    commonFurniture: [
      "leather and leatherette sofas",
      "fabric 3+2+1 sofa sets",
      "recliner sets",
      "modular sofas in newer apartments",
      "traditional wooden sofa sets in older flats",
    ],
    customerType: "mixed",
    housingType: "mixed-residential",
    repairPreference: "quality-focused",
    commonCauses: [
      "leather cracking from dry air in south Delhi winters",
      "foam compression in heavily used living room sofas",
      "fabric fraying on older DDA flat sofas",
      "recliner wear from multi-person household use",
      "UV exposure causing leather discolouration near large south-facing windows",
    ],
    technicianInsights: [
      "Lajpat Nagar has both older DDA flats and newer multi-storey apartments — repair needs vary by building age",
      "Proximity to Lajpat Nagar market means many residents have market-sourced furniture with non-branded components",
      "Older residents in DDA flats tend to prefer fabric while younger residents in new apartments prefer leather",
      "Sunday and weekend slots fill faster than other south Delhi localities",
    ],
    recommendedMaterials: [
      "40D foam for quality-focused repairs",
      "semi-aniline leather conditioner for crack prevention",
      "colour-matched leather filler for surface repairs",
      "UV-resistant fabric for south-facing living room sofas",
    ],
    maintenanceTips: [
      "Condition leather sofas every 3 months — south Delhi winters are particularly drying",
      "Use curtains or blinds to reduce UV exposure on leather sofas near large windows",
      "Vacuum fabric sofas weekly — Lajpat Nagar market area generates significant ambient dust",
      "Inspect recliner cables annually and replace before they snap during use",
    ],
  },

  // ─── Delhi localities ──────────────────────────────────────────────────────

  "shalimar-bagh": {
    commonRepairs: [
      "foam replacement in sagging seat cushions of older DDA-era sets",
      "fabric re-upholstery for worn-out covers on builder-floor sofas",
      "wooden frame joint tightening",
      "spring repair in older DDA pocket sofa sets",
      "armrest padding restoration",
    ],
    commonFurniture: [
      "3+1+1 fabric sofa sets",
      "wooden frame divan-style sofas",
      "foam-cushion sectional sofas",
      "recliner chairs",
      "wooden sofa-cum-beds",
    ],
    customerType: "family",
    housingType: "dda-flats",
    repairPreference: "cost-conscious",
    commonCauses: [
      "foam degradation from 10–15 years of continuous use in older DDA pockets",
      "fabric tearing from children and daily heavy seating",
      "frame loosening from repeated shifting between small DDA rooms",
      "dust accumulation from Rani Bagh road-facing windows weakening fabric threads",
      "armrest wear from lack of sofa covers in summer months",
    ],
    technicianInsights: [
      "Older DDA Pocket 1–3 flats still have early-2000s-era wooden sofa sets with solid sheesham frames — only foam and fabric need refresh, not the frame",
      "Newer builder floors on the AD Block side tend to have market-bought sofas from Shalimar Bagh market that use lower-density foam",
      "Families near Rani Bagh crossing often place sofas facing the road, leading to faster fabric fading from dust and afternoon sunlight",
      "Lift-less DDA walk-ups mean residents strongly prefer repair over replacement — carrying a new sofa up narrow staircases is impractical",
    ],
    recommendedMaterials: [
      "40D foam for seat cushions to handle daily family use",
      "jute-backed polyester fabric for dust resistance",
      "nylon webbing replacement for saggy bases",
      "moisture-resistant wood adhesive for frame joint re-gluing in ground-floor flats",
    ],
    maintenanceTips: [
      "vacuum sofa crevices weekly — road dust from Outer Ring Road settles heavily in this area",
      "rotate seat cushions monthly to distribute wear evenly",
      "use breathable cotton covers during summer to prevent foam from trapping heat",
      "keep sofas at least 6 inches from walls in monsoon months to prevent back-panel dampness in ground-floor flats",
    ],
  },

  "rajouri-garden": {
    commonRepairs: [
      "fabric re-upholstery with updated choices from local market",
      "foam density upgrade in budget market-sourced sofas",
      "leg and caster replacement on lightweight modern sofas",
      "stitching repair on seam splits in compact builder-floor sets",
      "cushion refilling and reshaping",
    ],
    commonFurniture: [
      "L-shaped fabric sectionals",
      "compact 3-seater sofas",
      "futon-style sofa beds",
      "low-back modern lounge sofas",
      "fabric accent chairs",
    ],
    customerType: "mixed",
    housingType: "builder-floors",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "low-density foam in market-sourced budget sofas collapsing within 3–4 years",
      "seam splitting from tight sofa placement in compact builder-floor living rooms",
      "fabric pilling from synthetic blends sold at Rajouri Garden furniture shops",
      "pet damage from young couples keeping dogs in smaller apartments",
      "frame stress from frequent sofa-bed mechanism use in single-bedroom floors",
    ],
    technicianInsights: [
      "Homes near the Rajouri Garden J-Block furniture cluster often have locally sourced sofas bought from the main market lane — these use stapled joints rather than screwed frames",
      "Working couples in newer builder floors along Tagore Garden extension prefer quick 1–2 day turnaround over pickup-and-deliver models",
      "Many residents bought furniture from the Rajouri Garden market and expect pricing similar to nearby market rates",
      "Compact 2BHK builder floors mean L-shaped sofas get wedged into corners, causing uneven wear on the corner-facing cushion",
    ],
    recommendedMaterials: [
      "32D high-resilience foam to upgrade from original low-quality market filling",
      "microfibre fabric for pet-owning households",
      "metal corner brackets to reinforce stapled frame joints",
      "elastic webbing to replace broken plywood bases",
    ],
    maintenanceTips: [
      "pull out sofa beds fully when in use — half-extension strains the folding mechanism",
      "brush pet hair off weekly before it works into the fabric weave and causes pilling",
      "run a dehumidifier or AC in dry mode during July–August to prevent foam from absorbing monsoon moisture",
      "avoid placing sofas directly under ceiling fans on high speed — constant air movement accelerates fabric fibre loosening",
    ],
  },

  "punjabi-bagh": {
    commonRepairs: [
      "leather conditioning and crack repair on drawing room sets",
      "re-polishing of exposed carved wooden sofa frames",
      "foam upgrade in older heavy sofa sets from early-2000s purchases",
      "recliner mechanism servicing",
      "complete re-upholstery of vintage wooden sofa sets",
    ],
    commonFurniture: [
      "heavy carved wooden sofa sets",
      "leather 3+2 sofa combinations",
      "powered recliner sofas in newer floors",
      "teak-frame cushioned sofas",
      "designer accent lounge chairs",
    ],
    customerType: "senior",
    housingType: "independent-houses",
    repairPreference: "quality-focused",
    commonCauses: [
      "leather drying and cracking from year-round AC use in closed drawing rooms",
      "wooden frame polish fading from prolonged sunlight exposure through large windows",
      "foam flattening under heavy carved-wood armrests in older sofa sets",
      "recliner motor and lever wear from daily use by senior residents",
      "termite damage to wooden sofa legs in older ground-floor houses with gardens",
    ],
    technicianInsights: [
      "Original Punjabi Bagh East and West kothi houses often have 20+ year old carved teak sofa sets — frames are structurally excellent but foam and fabric are completely worn",
      "Senior residents in older E-Block and F-Block houses strongly prefer on-site work rather than sending sofas to a workshop",
      "Newer floors built above original kothis tend to have younger family members who have added leather recliners — the same house often has both vintage wooden sets and modern leather pieces",
      "Many homes have marble flooring which causes sofa legs to slide gradually, loosening frame joints over time",
    ],
    recommendedMaterials: [
      "leather conditioner and filler compounds for crack repair on genuine leather",
      "44D foam for long-lasting comfort in heavy-use drawing room sets",
      "melamine-based wood polish for restoring teak and sheesham frames",
      "anti-termite treated rubber leg caps for ground-floor sofas",
    ],
    maintenanceTips: [
      "apply leather conditioner every 3 months — continuous AC dries leather faster than natural ventilation",
      "place felt pads under sofa legs to prevent sliding on marble floors and loosening frame joints",
      "keep wooden sofa sets away from direct sunlight near west-facing windows to prevent polish discolouration",
      "lubricate recliner pivot points with silicone spray every 6 months if used daily",
    ],
  },

  "vasant-vihar": {
    commonRepairs: [
      "imported leather conditioning and crack repair",
      "antique wooden frame joint restoration",
      "high-density foam replacement in European-style seating",
      "fabric re-upholstery matching original imported textiles",
      "motorised recliner mechanism and footrest repair",
    ],
    commonFurniture: [
      "imported Italian leather sofas",
      "chesterfield and tufted armchairs",
      "solid teak and walnut frame sectionals",
      "motorised recliners",
      "designer lounge chairs",
    ],
    customerType: "luxury",
    housingType: "independent-houses",
    repairPreference: "premium",
    commonCauses: [
      "leather drying and cracking from prolonged AC use in large drawing rooms",
      "sun damage through floor-to-ceiling west-facing windows",
      "wear on armrests from cleaning with incorrect household products",
      "pet scratches from large breed dogs common in bungalow households",
      "fading of imported fabrics from Delhi summer UV exposure",
    ],
    technicianInsights: [
      "Many homes near the Diplomatic Enclave have furniture shipped from Europe or the US — standard Indian foam sizes rarely match their seat cushion dimensions and custom cutting is needed",
      "Independent houses on Poorvi Marg and Vasant Marg often have very large sectionals that pass through wide front doors without disassembly",
      "Some bungalows have original 1970s rosewood frames in excellent structural condition — only upholstery and foam need periodic replacement",
      "Households with diplomatic staff rotations sometimes request protective covers rather than full re-upholstery before a posting ends",
    ],
    recommendedMaterials: [
      "top-grain aniline leather for panel repairs and replacements",
      "high-resilience 40D foam for deep-seat European frames",
      "brass and stainless steel hardware for recliner mechanisms",
      "UV-resistant fabric protector spray for sun-exposed seating",
    ],
    maintenanceTips: [
      "apply leather conditioner every 6–8 weeks during Delhi's dry winter months to prevent cracking",
      "keep leather sofas at least 4 feet from AC vents — direct cold air strips natural oils from the hide",
      "use curtain liners on west-facing windows to reduce UV fading on upholstery",
      "during monsoon, run a dehumidifier near leather furniture to prevent mildew in closed drawing rooms",
    ],
  },

  "saket": {
    commonRepairs: [
      "foam replacement in high-use rental apartment sofas",
      "fabric stain treatment and re-covering",
      "arm and backrest padding restoration after tenant turnover",
      "sofa leg replacement from moving damage between DLF towers",
      "faux leather peeling repair on mid-range apartment sofas",
    ],
    commonFurniture: [
      "compact fabric 3-seater sofas",
      "modular L-shaped sectionals",
      "faux leather 2-seater loveseats",
      "slim-profile apartment sofas",
      "HomeCenter and IKEA format modular pieces",
    ],
    customerType: "professional",
    housingType: "gated-societies",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "accelerated foam compression from multiple tenants using the same sofa across rental cycles",
      "moving damage — scratched legs and torn fabric from shifting between DLF tower apartments",
      "staining from spills in apartments without dedicated dining spaces",
      "faux leather peeling from AC temperature cycling in sealed apartments",
      "seat sagging from sofas doubling as work-from-home seating for extended hours",
    ],
    technicianInsights: [
      "DLF apartment residents near Select Citywalk often have sofas from HomeCenter or IKEA — these use proprietary cushion sizes that need custom foam cutting",
      "Rental turnover in Saket DLF towers means sofas get 3–4 years of heavy use without maintenance before the next tenant requests repair",
      "Older Saket J-Block and G-Block colony houses have heavier traditional sofa sets, in contrast to the lightweight modern pieces in the tower apartments",
      "Gated society security requires technicians to coordinate entry passes in advance — confirmed time-slot appointments are strongly preferred here",
    ],
    recommendedMaterials: [
      "high-resilience 40D foam for sofas used 8+ hours daily",
      "stain-resistant treated fabric for spill-prone rental homes",
      "pre-cut modular foam inserts for standard IKEA and HomeCenter sofa frames",
      "anti-peel PU leather patches for faux leather surface restoration",
    ],
    maintenanceTips: [
      "treat fabric sofas with a stain-repellent spray after re-upholstery — particularly important in rental homes with frequent occupant changes",
      "maintain consistent AC temperature rather than extreme on-off cycling to prevent faux leather surface cracking",
      "place a thin plywood board under seat cushions if the sofa base has begun to sag — extends usable life between repairs",
      "wipe down faux leather weekly in dusty October–November months to prevent grit from scratching the surface",
    ],
  },

  "south-delhi": {
    commonRepairs: [
      "complete foam replacement in structurally sound older frames from Malviya Nagar and Chirag Delhi households",
      "fabric refresh and re-upholstery on 15–20 year old sofa sets",
      "sagging base repair with new webbing",
      "wooden frame re-gluing and joint tightening",
      "cushion reshaping and dacron wrapping",
    ],
    commonFurniture: [
      "traditional 3+1+1 wooden-frame sofa sets",
      "diwan-style seating",
      "heavy cushioned 5-seater sets",
      "older rexine-covered sofa sets",
      "teak sofa-cum-storage units",
    ],
    customerType: "family",
    housingType: "mixed-residential",
    repairPreference: "cost-conscious",
    commonCauses: [
      "natural foam degradation in 15–20 year old sofa sets that were never refilled",
      "fabric sun-fading from south-facing balcony-adjacent placement in Malviya Nagar flats",
      "jute webbing rot from monsoon humidity in ground-floor Sheikh Sarai houses",
      "frame joint loosening from years of heavy use without maintenance",
      "rexine cracking and peeling on older sofa sets in Chirag Delhi colony houses",
    ],
    technicianInsights: [
      "Older Malviya Nagar and Chirag Delhi colonies have sofas from the early 2000s with solid wood frames — residents are often surprised to learn only foam and fabric need replacement",
      "Sheikh Sarai Phase-1 ground-floor houses can have dampness that reaches sofa bases — webbing and bottom fabric show mildew even when the top looks fine",
      "Many established families in these colonies have strong attachment to their sofa sets and specifically request restoration rather than replacement",
      "Narrow lanes in Khirki Extension and Chirag Delhi make it difficult to carry full sofa sets out — on-site repair is strongly preferred",
    ],
    recommendedMaterials: [
      "40D foam with dacron wrap for restoring original cushion shape on older frames",
      "cotton-polyester blend fabric that matches the traditional look residents prefer",
      "moisture-resistant jute webbing for ground-floor flat installations",
      "PVA wood glue for re-securing mortise-and-tenon joints in older teak frames",
    ],
    maintenanceTips: [
      "flip and rotate all seat cushions at the start of each season to prevent one-sided compression",
      "check underside webbing before and after monsoon — ground-floor humidity weakens jute silently",
      "keep sofa sets away from south-west facing windows or use curtains during afternoon hours to prevent UV fabric degradation",
      "air out cushions in October–November dry weather to release trapped monsoon moisture from foam",
    ],
  },

  "nehru-place": {
    commonRepairs: [
      "office reception sofa re-upholstery",
      "foam replacement in commercial waiting-area seating",
      "faux leather peeling repair on office sofas",
      "residential sofa frame reinforcement in adjacent Govindpuri and Kalkaji homes",
      "armrest re-padding on high-traffic office sets",
    ],
    commonFurniture: [
      "office 3-seater reception sofas",
      "faux leather office visitor seating",
      "residential compact fabric sofas from Kalkaji households",
      "waiting-room bench-style seating",
      "home sofa-cum-beds in 1–2 BHK Govindpuri flats",
    ],
    customerType: "office",
    housingType: "commercial-mixed",
    repairPreference: "same-day",
    commonCauses: [
      "heavy daily visitor footfall on office reception sofas causing rapid foam compression",
      "faux leather peeling from AC-on-all-day environments in commercial Nehru Place offices",
      "armrest cracking on office sofas from constant use as leaning surfaces",
      "residential sofa wear in compact Govindpuri flats where sofas serve as multi-purpose seating",
      "dust and particulate buildup from Nehru Place commercial traffic affecting adjacent residential upholstery",
    ],
    technicianInsights: [
      "IT offices and hardware showrooms in Nehru Place complex need same-day or next-day turnaround because reception areas cannot be left without seating",
      "Residential calls from Govindpuri and Kalkaji are typically budget fabric sofas in 1–2 BHK flats — very different requirements from the commercial faux leather sets",
      "Office sofas in this area get 8–10 hours of daily visitor use — foam life is roughly half compared to residential use",
      "Many small business owners in Nehru Place prefer repair over replacement because their units have narrow corridors and no freight lift access",
    ],
    recommendedMaterials: [
      "commercial-grade 44D foam rated for high-traffic office seating",
      "antimicrobial faux leather for office reception sofas with heavy visitor use",
      "reinforced plywood base panels for sofas under constant load",
      "dust-resistant tightly-woven polyester fabric for residential sofas in the commercial zone",
    ],
    maintenanceTips: [
      "wipe office faux leather sofas daily with a damp microfibre cloth — Nehru Place commercial dust accelerates surface degradation",
      "replace office sofa foam proactively every 2–3 years rather than waiting for full collapse under heavy daily use",
      "set AC at a moderate temperature rather than maximum cold — extreme cooling dries faux leather and causes premature cracking",
      "position office sofas away from glass entrances where afternoon sun heats the seating surface and weakens adhesive on faux leather",
    ],
  },

  "preet-vihar": {
    commonRepairs: [
      "foam replacement in sagging seat cushions of DDA flat sofas",
      "fabric re-covering with locally sourced market cloth",
      "broken wooden frame strut repair",
      "torn armrest stitching and panel replacement",
      "sagging webbing and spring re-tensioning in older sets",
    ],
    commonFurniture: [
      "3+1+1 fabric sofa sets",
      "wooden frame sofas with removable cushions",
      "folding sofa-cum-beds",
      "diwan sets with bolsters",
      "L-shaped corner sofas in compact sizes",
    ],
    customerType: "family",
    housingType: "dda-flats",
    repairPreference: "cost-conscious",
    commonCauses: [
      "accelerated foam compression from joint family seating — multiple adults using the same sofa throughout the day",
      "children jumping and playing on cushions in smaller DDA living rooms",
      "dust accumulation from Vikas Marg traffic entering through balcony doors",
      "fabric and armrest wear from heavy daily use during extended family gatherings",
      "moisture from ground-floor flats facing inner lanes accumulating in sofa bases",
    ],
    technicianInsights: [
      "Homes near Preet Vihar market often have locally sourced fabric sofas from shops along the main road — matching replacement fabric is usually available within the same area",
      "DDA flats in Pocket 1 and 2 have narrow entrance doors requiring partial sofa disassembly for access",
      "Many households have larger joint-family usage patterns resulting in heavier sofa wear than in smaller single-family households",
      "Ground-floor flats facing inner roads accumulate noticeably more dust in sofa crevices than upper floors",
    ],
    recommendedMaterials: [
      "32D rebonded foam for cost-effective cushion refilling",
      "durable polyester-cotton blend fabric in darker patterns to mask everyday stains",
      "nylon webbing for base re-strapping under seat cushions",
      "treated sal wood strips for frame strut replacements",
    ],
    maintenanceTips: [
      "vacuum sofa crevices weekly — road dust from Vikas Marg settles fast in ground and first-floor flats",
      "rotate seat cushions every two weeks when multiple family members use the same sofa daily",
      "use arm covers on fabric sofas to reduce direct contact wear from daily heavy use",
      "keep sofas 6 inches from walls to allow airflow and prevent monsoon dampness from transferring to the backrest",
    ],
  },

  "mayur-vihar": {
    commonRepairs: [
      "foam density upgrade in flat-packed and assembled online-brand sofas",
      "leatherette peeling and surface re-lamination",
      "recliner lever and hinge mechanism repair",
      "loose frame tightening in modular sectionals",
      "cushion cover zipper and stitching repair",
    ],
    commonFurniture: [
      "online-purchased modular sectional sofas",
      "compact 2-seater recliners",
      "leatherette L-shaped sofas",
      "futons and sofa-cum-beds in 1–2 BHK apartments",
      "ergonomic lounge chairs",
    ],
    customerType: "professional",
    housingType: "gated-societies",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "leatherette cracking from continuous AC running in sealed Phase 2 and Phase 3 apartments",
      "weak joints in flat-packed furniture assembled without professional help",
      "foam flattening from prolonged work-from-home use in the same seating position",
      "pet claw damage — many young professional households in Phase 2 and 3 keep cats or small dogs",
      "colour fading on south-facing balcony-adjacent sofas from afternoon summer sun",
    ],
    technicianInsights: [
      "Phase 1 DDA pocket flats have older solid-frame sofas, while Phase 3 gated societies mostly have newer flat-packed or online-ordered furniture requiring different repair approaches",
      "Many residents working in Noida IT sectors prefer evening or Saturday repair slots — daytime flat access is often difficult when both occupants are at the office",
      "Gated societies like Mayur Vihar CGHS require gate passes and lift booking in advance for large sofa transport",
      "Apartments near the Yamuna-side in Phase 1 experience higher indoor humidity during monsoon, accelerating leatherette peeling",
    ],
    recommendedMaterials: [
      "breathable PU leatherette rated for AC-heavy environments",
      "high-resilience 36D foam for work-from-home seating upgrade",
      "anti-scratch microfibre fabric for pet-owning households",
      "stainless steel replacement hinges for recliner mechanisms",
    ],
    maintenanceTips: [
      "wipe leatherette surfaces with a damp cloth weekly to prevent dust from bonding with AC-dried surfaces",
      "alternate seating positions on work-from-home sofas to distribute foam compression evenly",
      "apply silicone spray to recliner hinges every 3 months to prevent stiffening",
      "use moisture-absorbing packets behind sofa backrests in Yamuna-side Phase 1 flats during July–September",
    ],
  },

  "east-delhi": {
    commonRepairs: [
      "in-place foam refilling without sofa removal in high-density buildings",
      "on-site fabric re-covering for sofas that cannot be carried through narrow staircases",
      "broken leg and base frame repair",
      "spring and belt replacement in older sofa sets",
      "patching and spot repair on torn upholstery",
    ],
    commonFurniture: [
      "heavy wooden 3+2 sofa sets",
      "steel-frame sofa-cum-beds",
      "compact 2-seater fabric sofas",
      "floor-level diwans and gadda seating",
      "locally carpentered wooden sofas",
    ],
    customerType: "mixed",
    housingType: "mixed-residential",
    repairPreference: "cost-conscious",
    commonCauses: [
      "dust ingress from construction activity and unpaved back lanes in Shakarpur and Pandav Nagar",
      "moisture damage during monsoon in ground-floor tenements with poor drainage",
      "frame stress from being forced through narrow stairwells during moves",
      "heavy daily use in multi-purpose rooms that double as sleeping areas at night",
      "fabric wear from metal folding sofa-cum-bed mechanisms rubbing against upholstery",
    ],
    technicianInsights: [
      "Buildings in Laxmi Nagar and Shakarpur typically have staircases under 3 feet wide with tight turns — most 3-seater sofas cannot be moved intact and are repaired in-room",
      "Many households near Pandav Nagar use sofas as nighttime bedding, so foam quality and thickness requests are higher than typical seating-only use",
      "Shops along Laxmi Nagar main road sell foam and fabric locally, so customers sometimes arrive already knowing material costs and request labour-only pricing",
      "Ground-floor and first-floor units are the only ones where full sofa removal for workshop repair is practical — upper floors require on-site service",
    ],
    recommendedMaterials: [
      "28D standard foam for budget-friendly refilling in compact residential setups",
      "dark-coloured rexine for high-traffic multi-use sofas",
      "heavy canvas base cloth to replace worn-out jute webbing",
      "industrial-grade wood adhesive for on-site frame fixes",
    ],
    maintenanceTips: [
      "cover sofas with washable throws in construction-heavy lanes — fine cement dust embeds in fabric weave and is difficult to vacuum out",
      "elevate ground-floor sofas on wooden risers during monsoon to avoid water seepage contact",
      "oil folding sofa-cum-bed hinges monthly to prevent rust and upholstery snagging",
      "air out cushions on the balcony during dry winter weekends to release trapped monsoon moisture from foam",
    ],
  },

  "karol-bagh": {
    commonRepairs: [
      "re-stuffing of traditional high-back carved wooden sofa cushions",
      "polish and varnish touch-up on carved sheesham and teak frames",
      "complete fabric changeover using customer-sourced material from nearby Arya Samaj Road",
      "sagging jute webbing replacement in older Punjabi-style sets",
      "foam upgrade from traditional cotton gadda filling to modern foam",
    ],
    commonFurniture: [
      "heavy carved wooden sofa sets with thick cushions",
      "traditional Punjabi-style high-back 5-seater sets",
      "shop-display fabric sofas from Karol Bagh showrooms",
      "steel and wood combination sofa-cum-beds",
      "compact 2-seaters for upper-floor bedrooms",
    ],
    customerType: "mixed",
    housingType: "commercial-mixed",
    repairPreference: "cost-conscious",
    commonCauses: [
      "decades of use on older carved wooden frames in established trading-family households",
      "fabric deterioration from cooking smoke in homes above commercial kitchens on Ajmal Khan Road",
      "termite damage to wooden sofa legs in older ground-floor properties near Pahar Ganj side",
      "cushion flattening from heavy guest traffic during wedding and festival seasons",
      "dust and pollution settling from high-footfall commercial streets below residential floors",
    ],
    technicianInsights: [
      "Customers near the Karol Bagh fabric market on Arya Samaj Road often arrive knowing foam and fabric per-metre rates — they expect transparent labour-only pricing",
      "Many older inner-lane homes have carved sheesham sofa sets that are structurally sound — only cushion and fabric work is needed, not frame replacement",
      "Residential floors above Ajmal Khan Road shops have steep narrow staircases and heavy wooden sofas that have not been moved in decades — all repair happens in-room",
      "Some households request quick turnaround before Diwali and Karva Chauth when guest hosting peaks",
    ],
    recommendedMaterials: [
      "32D foam from local Karol Bagh market suppliers for cost-effective cushion refilling",
      "jacquard and velvet upholstery fabric in traditional patterns from Arya Samaj Road",
      "anti-termite treated wood legs and base panels for older properties",
      "cotton-foam combination filling for traditional gadda-style cushions",
    ],
    maintenanceTips: [
      "apply anti-termite spray to wooden sofa legs annually — older properties with ground-floor dampness are prone to infestation",
      "wipe wooden frames with a dry cloth weekly to prevent cooking oil film buildup in homes above restaurant floors",
      "flip and rotate heavy cushions fortnightly during winter wedding season when guest usage peaks",
      "cover fabric sofas during Diwali week — firecracker smoke and residue settles heavily in dense Karol Bagh lanes",
    ],
  },

  // ─── Outer NCR (Round 4) ──────────────────────────────────────────────────

  "raj-nagar-extension": {
    commonRepairs: [
      "foam replacement in newly delivered apartment sofas where economy density has already compressed within 2 years",
      "fabric re-covering on sofas whose upholstery was damaged by construction debris during possession-phase shifting",
      "sofa frame joint re-gluing and reinforcement in towers still surrounded by active excavation vibration",
      "modular connector and cam-lock tightening in flat-pack sofas assembled during the move-in rush",
      "recliner cable adjustment in budget sets bought at possession to fill new apartments quickly",
    ],
    commonFurniture: [
      "economy 3-seater fabric sofas from Raj Nagar market and HomeTown",
      "flat-pack modular sofas assembled at possession in new 2-3 BHK apartments",
      "budget L-shaped corner sofas in newly handed-over 3 BHK living rooms",
      "sofa-cum-beds in second bedrooms of apartments with expected guest occupancy",
      "basic recliner sets purchased from local Ghaziabad showrooms at move-in",
    ],
    customerType: "family",
    housingType: "gated-societies",
    repairPreference: "cost-conscious",
    commonCauses: [
      "active excavation and pile-driving on adjacent under-construction towers transmitting ground vibration into finished blocks and loosening sofa frame joints",
      "construction dust from Phase 2 and Phase 3 towers still under build penetrating balcony gaps and embedding in fabric weave of Phase 1 residents",
      "economy foam sold at possession-phase furniture fairs sagging within 18-24 months under daily family use",
      "sofas assembled hurriedly at move-in with incorrectly seated cam-lock connectors that loosen after the first season of thermal expansion",
      "fabric surface abrasion from construction cement particles tracked indoors during active site months",
    ],
    technicianInsights: [
      "Raj Nagar Extension towers range from just-handed-over to 4 years old — residents in the older blocks are hitting their first repair cycle while neighbours in newer towers are still dealing with possession-phase logistics",
      "Lift dimensions in mid-range Raj Nagar Extension towers are smaller than in premium Gurgaon high-rises — oversized sectionals often cannot be removed and must be repaired entirely in-room",
      "Many families relocated from older Ghaziabad housing — they are accustomed to vendor negotiation and respond well to itemised breakdowns showing exactly what each repair cost covers",
      "NH-58 and NH-9 connections mean residents expect same-day or next-day service rather than multi-day workshop turnarounds common in more distant townships",
    ],
    recommendedMaterials: [
      "36D foam as a meaningful upgrade over economy density without pricing out cost-conscious first-repair customers",
      "dust-resistant tight-weave polyester fabric in mid-tone colours suited to active construction environments",
      "reinforced cam-lock connectors to replace loosened flat-pack assembly hardware in 2-4 year old modular sofas",
      "anti-vibration rubber leg pads for sofas in lower floors where ground vibration from adjacent construction is most noticeable",
    ],
    maintenanceTips: [
      "vacuum sofas twice weekly while adjacent tower construction continues — construction-zone silica dust is finer than household dust and embeds invisibly in fabric before visible soiling appears",
      "check all modular connectors after the first monsoon season — thermal cycling through the year loosens factory-set cam-locks faster in newer buildings where frame flex is higher",
      "place sofas away from balcony-facing walls during active construction months to reduce direct exposure to cement-laden wind",
      "rotate cushions every month in family apartments where children claim fixed seating positions — compression is uneven when the same seat takes all the daily load",
    ],
  },

  "crossing-republik": {
    commonRepairs: [
      "recliner mechanism overhaul in mid-range sets purchased at township possession that have now logged 4-5 years of continuous family use",
      "sofa-cum-bed hinge and base panel replacement in second-bedroom utility sofas used as primary guest beds",
      "foam replacement in 3+2 family sets where the primary seat has fully compressed while flanking seats remain firm",
      "fabric re-upholstery on township-era sofas where families are refreshing interiors for the first time since possession",
      "spring and webbing replacement in older township-block sofas in the earliest Crossing Republik sectors",
    ],
    commonFurniture: [
      "family-scale 3+2 fabric sofa sets from Crossing Republik township retail zone",
      "mid-range recliner sets in 3 BHK master bedroom sitting areas",
      "sofa-cum-beds serving as nightly guest beds in second bedrooms",
      "large L-shaped sectionals in ground-floor duplex apartments",
      "wooden-frame sofas with loose cushions in older township blocks",
    ],
    customerType: "family",
    housingType: "gated-societies",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "sustained family use over 4-6 years in apartments where children and multiple adults share the same sofa daily, concentrating compression in fixed seating positions",
      "sofa-cum-bed hinges weakening from nightly operation — a second bedroom sofa used as a daily bed cycles 365 open-close operations per year against a mechanism rated for less",
      "recliner mechanisms in mid-range township-era sets reaching end of their rated cycle count after 4-5 years of frequent family use",
      "township retail-zone furniture using lighter-density foam than equivalent urban showroom stock — compression is faster than residents expect",
      "dust from NH-58 and NH-9 approaching roads accumulating on upholstery in apartments facing the highway-side of the township",
    ],
    technicianInsights: [
      "Crossing Republik is one of the larger integrated townships in Ghaziabad — the earliest-possession sectors are now 6-8 years old and entering a second repair cycle, while later phases are at first-cycle stage, meaning all repair stages coexist within the same township boundary",
      "Township-internal retail presence means residents compare repair quotes with local furniture shops — transparent same-day pricing with no hidden charges is particularly important here",
      "Ground-floor duplex apartments have wide entry doors that allow full sofa removal for workshop repair, unlike most upper-floor flats where in-room repair is the only option",
      "Many families have school-age children with fixed after-school sofa routines — appointments are most reliably kept during school hours on weekdays",
    ],
    recommendedMaterials: [
      "40D foam for family-use primary seat replacement — residents have lived with compressed seats long enough to want a noticeable firmness improvement",
      "performance polyester fabric with stain-resistance treatment for households with school-age children and daily snack contact",
      "heavy-duty recliner mechanism kits rated for 30,000+ cycles to replace township-era mechanisms reaching end of life",
      "reinforced plywood base panels to replace compressed or cracked panels in sofa-cum-beds used as nightly beds",
    ],
    maintenanceTips: [
      "rotate sofa cushions every 2 weeks in households where children claim fixed seats — uneven compression in family sofas is almost always caused by one seat absorbing 80% of the daily load",
      "oil sofa-cum-bed hinges monthly if the sofa is used as a nightly bed — a mechanism rated for 10,000 cycles reaches that in under 3 years at daily use",
      "vacuum sofas weekly — township proximity to NH-58 means road dust levels are higher than in interior residential zones",
      "inspect recliner cable tension annually before full cable failure — mid-range mechanisms give about 6 months of increasing resistance as a warning before snapping",
    ],
  },

  "gaur-city": {
    commonRepairs: [
      "modular connector system replacement in Wakefit and Urban Ladder sofas whose cam-lock and dowel joints have fully loosened after 2-3 years in the township",
      "foam density upgrade in online-brand sofas sold with below-specification padding that residents only notice after a few months of daily use",
      "leg and base caster replacement on online-brand units with injection-moulded plastic bases that crack under daily family load",
      "fabric cover zipper and panel replacement on sofas whose modular cover system has failed at seam attachment points",
      "recliner mechanism and cable replacement in budget recliners purchased online without physical inspection",
    ],
    commonFurniture: [
      "Wakefit, Urban Ladder, and Pepperfry modular sofas in 3 BHK apartments",
      "budget online-brand L-shaped sectionals in compact township living rooms",
      "mid-range 3+2 fabric sets from Gaur City Mall and township retail outlets",
      "sofa-cum-beds in second bedrooms of 2 BHK township apartments",
      "economy recliners purchased online during sale events",
    ],
    customerType: "mixed",
    housingType: "gated-societies",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "online-brand modular sofas assembled from flat-pack with consumer-grade cam-lock hardware not rated for long-term daily load — joints loosen progressively over 18-36 months",
      "below-rated foam density in direct-to-consumer sofas sold on specifications that describe feel at delivery rather than long-term resilience",
      "plastic leg and base caster failure under family daily load — injection-moulded components in budget online brands have lower rated weight tolerances than showroom furniture",
      "delivery damage to modular cover systems in Gaur City's multi-tower lift environment where sofa sections pass through narrow service corridors",
      "Noida Extension's ongoing development generating construction dust that abrades online-brand fabric surfaces faster than the material specifications assume",
    ],
    technicianInsights: [
      "Gaur City is among the largest township developments in Noida Extension — residents span a wide age range and income bracket, but online-brand furniture is the dominant repair category because the township's internet-savvy demographic purchased heavily during early lockdown-era furniture sales",
      "Online-brand repair requires non-standard replacement hardware — technicians visiting Gaur City should carry a comprehensive cam-lock, dowel, and caster kit rather than relying on furniture-brand sourcing",
      "Gaur City Mall proximity means residents can easily comparison-shop replacement sofas while waiting for a repair quote — competitive same-day pricing is more important here than in more isolated townships",
      "Tower lifts in Gaur City are sized for residential use, not furniture logistics — multi-module L-shaped sofas must be disassembled at the apartment door before transport",
    ],
    recommendedMaterials: [
      "38D foam as a density upgrade over online-brand specification — residents who chose online brands for value appreciate foam quality improvement as visible proof that the repair is worth doing",
      "universal cam-lock and cross-dowel connector kits compatible with Wakefit, Urban Ladder, and Pepperfry modular frame systems",
      "polypropylene leg sets with metal thread inserts to replace injection-moulded plastic bases that have cracked under load",
      "stain-resistant performance fabric panels compatible with modular sofa cover systems for zipper and panel replacement",
    ],
    maintenanceTips: [
      "tighten all cam-lock connectors every 6 months — online-brand modular hardware is not rated for indefinite retention and loosens progressively under thermal cycling",
      "vacuum sofas twice weekly — Noida Extension construction dust is finer than household dust and degrades online-brand fabric surface faster than the specification assumes",
      "check plastic leg bases quarterly and replace at first sign of cracking — a leg that fails under load can cause the entire sofa frame to drop suddenly",
      "apply fabric protector spray after cleaning to extend the life of online-brand upholstery whose factory finish is lighter than showroom equivalents",
    ],
  },

  "ats-pristine": {
    commonRepairs: [
      "premium fabric re-upholstery with designer swatch-matched materials for interior-designed apartments",
      "high-resilience foam replacement in imported sofas whose original European density specification is not met by standard Indian foam grades",
      "recliner motor and electronic mechanism servicing in motorised premium sets",
      "leather conditioning treatment and micro-crack repair on imported Italian leather sofas",
      "modular sectional connector re-engineering for non-standard imported frame systems",
    ],
    commonFurniture: [
      "premium imported Italian or Spanish leather sofas in 4 BHK penthouse and duplex apartments",
      "designer fabric sectionals from Natuzzi, Ashley, or Minotti-equivalent showrooms",
      "motorised recliner sets in dedicated home-theatre or media rooms",
      "custom upholstered accent chairs and ottomans commissioned through interior designers",
      "large format L-shaped sectionals in open-plan luxury living rooms spanning 600+ sq ft",
    ],
    customerType: "luxury",
    housingType: "luxury-apartments",
    repairPreference: "premium",
    commonCauses: [
      "imported leather surface dehydration from 18-hour AC operation in sealed premium apartments — Noida Extension's dry winters compound the effect that continuous cooling creates",
      "original European foam density unavailable as a direct replacement in India — Indian foam grades approximate but do not exactly replicate the original tactile specification",
      "motorised recliner electronics developing calibration faults after 2-3 years of use in India's variable voltage supply environments",
      "UV exposure through premium double-glazed floor-to-ceiling windows bleaching leather surface on south and west-facing apartment units",
      "pet damage on premium leather panels in households with large breed dogs whose claws create surface scratches that propagate into full tears without treatment",
    ],
    technicianInsights: [
      "ATS Pristine towers have premium service lift access and wide corridors — large sectional modules can be moved out of the apartment for workshop-quality repair rather than the in-room-only service that most Noida Extension towers require",
      "Residents include senior corporate executives and returning NRIs who purchased imported furniture abroad or through luxury Delhi NCR showrooms — repair standards must visibly match the original purchase quality",
      "Many apartments were designed by professional interior designers with documented material specifications — technicians should request the original furniture spec sheet and work from it rather than visual approximation",
      "Sample approval is expected before work begins — residents at this level do not accept material substitution without physical comparison against the original",
    ],
    recommendedMaterials: [
      "imported HR-45D or HR-50D foam to approximate European premium density specifications in replacement work",
      "top-grain full-aniline leather in precisely colour-matched custom dye batches for imported leather sofa panel replacement",
      "commercial-grade motorised recliner replacement motors with Indian voltage stabilisation compatibility",
      "UV-blocking leather conditioner applied after conditioning treatment for south and west-facing premium apartment installations",
    ],
    maintenanceTips: [
      "condition leather sofas every 6 weeks in ATS Pristine apartments — the combination of dry winter air and continuous summer AC creates a chronically dehydrating environment that shortens leather life significantly",
      "use a voltage stabiliser in circuits powering motorised recliner sets — India's grid voltage fluctuations above and below 220V stress motor windings and accelerate electronic component degradation",
      "apply UV-filtering window film on south and west-facing floor-to-ceiling windows to protect leather upholstery from directional afternoon sun",
      "schedule annual professional servicing for all motorised mechanisms — ATS Pristine residents report that mechanism issues appear gradually and are best caught before a full motor failure",
    ],
  },

  "mahagun": {
    commonRepairs: [
      "foam replacement in gated-society sofas that have reached the 6-8 year compression threshold — the first major upholstery cycle for Mahagun Moderne residents",
      "fabric re-upholstery on sofas purchased at possession whose original fabric quality has degraded faster than residents expected",
      "recliner mechanism servicing for mid-to-premium sets entering their second recliner service interval",
      "base board and spring support restoration in well-maintained sofas whose structural foundations have softened under sustained use",
      "leather conditioning and surface repair on premium sofas that have been maintained but not professionally treated since purchase",
    ],
    commonFurniture: [
      "premium mid-market 3-seater and L-shaped sofas from Gurgaon or Delhi showrooms purchased at possession",
      "leather sofas in master bedroom areas of 3-4 BHK apartments",
      "recliner sets in dedicated TV rooms within larger apartment configurations",
      "modular sectionals in large open-plan living spaces of premium Mahagun towers",
      "designer accent sofas in entry lobbies of penthouse-level apartments",
    ],
    customerType: "professional",
    housingType: "gated-societies",
    repairPreference: "quality-focused",
    commonCauses: [
      "natural foam compression threshold reached in sofas that were quality purchases at possession but have now logged 6-8 years of consistent daily professional-household use",
      "AC-accelerated leather surface drying in premium apartments where cooling runs for 8-10 hours daily — residents who conditioned leather sporadically are now seeing micro-cracking",
      "recliner mechanism wear in sets used daily by households where working professionals spend 3-4 hours of evening decompression in recliner positions",
      "base spring fatigue in quality sofas where the original sinuous spring specification was adequate for the rated load but has now passed peak tension",
      "UV exposure through Mahagun Moderne's large east-facing balcony windows fading fabric upholstery on balcony-adjacent sofas",
    ],
    technicianInsights: [
      "Mahagun Moderne residents were early-adopter premium buyers in Noida Extension — their sofas are now the oldest well-maintained furniture stock in the Noida Extension township cluster, making this the first zone where first-cycle high-quality foam replacement demand is genuinely established",
      "Unlike ATS Pristine where imported furniture is common, Mahagun residents mostly purchased from Indian premium showrooms — replacement foam and fabric are available domestically at matching quality",
      "Residents in this building expect itemised written quotes before approval and are accustomed to high-quality service standards from the building's own premium management company",
      "The Noida Extension Metro station proximity means technicians can arrive without vehicle-specific gate registration if they plan entry in advance",
    ],
    recommendedMaterials: [
      "40D to 45D high-resilience foam for primary seat replacement — Mahagun residents who invested in quality at possession expect a genuine density upgrade, not just a refill",
      "colour-matched semi-aniline leather conditioner and repair paste for leather sofas receiving their first professional treatment after 6-8 years",
      "heavy-duty recliner mechanism kits with extended cycle ratings for sets entering their second service interval",
      "UV-blocking fabric protector spray for east and south-facing apartment installations with morning sun exposure",
    ],
    maintenanceTips: [
      "schedule professional foam inspection at the 6-year mark rather than waiting for visible sagging — Mahagun residents who had repairs done proactively report the re-foam feels closer to original specification than those who waited for full collapse",
      "condition leather sofas every 2 months — 8-hour AC cycles in sealed Mahagun Moderne apartments create drying conditions that require more frequent conditioning than the manufacturer's annual recommendation",
      "service recliner mechanisms at 5-year intervals rather than waiting for operational stiffness — mechanisms serviced before failure retain their original smooth travel",
      "use UV-filtering sheers on large east-facing balcony windows to slow fabric fading in apartments with panoramic morning sun exposure",
    ],
  },

  "jaypee-greens": {
    commonRepairs: [
      "full re-upholstery of bespoke custom-commissioned sofa sets in large villa formal living rooms",
      "hand-finished leather restoration on individually sourced premium leather sofas in golf-facing villas",
      "carved wooden sofa frame restoration and refinishing on artisan-made furniture commissioned through interior designers",
      "motorised mechanism overhaul in high-end imported recliner sets housed in private media rooms",
      "sectional reconfiguration and re-padding on large modular systems in double-height villa entrance halls",
    ],
    commonFurniture: [
      "bespoke custom-upholstered sofas commissioned through Jaypee Greens interior designers",
      "hand-finished imported leather sofas in villa formal sitting rooms overlooking golf greens",
      "artisan-carved wooden sofa frames with individually fitted cushions in traditional formal rooms",
      "large modular sectionals in double-height villa living rooms requiring two-technician setup",
      "motorised recliner sets in dedicated private media or home cinema rooms",
    ],
    customerType: "luxury",
    housingType: "independent-houses",
    repairPreference: "premium",
    commonCauses: [
      "natural ageing of bespoke leather and hand-finished materials that are irreplaceable from standard Indian stock — original materials must be closely matched by specialist sourcing",
      "carved wooden frame joint loosening in artisan-made furniture subjected to Yamuna floodplain humidity during monsoon, which accelerates expansion and contraction in hand-finished joinery",
      "foam compression in deep-seat villa sofas designed for aesthetic depth rather than daily residential use — the seat depth that looks correct in a large room is often beyond standard residential foam ratings",
      "UV exposure on golf-facing villa sofas near panoramic windows — morning sun from the east across open greens delivers more UV than an urban apartment facing the same direction",
      "motorised mechanism electronics affected by Yamuna-adjacent humidity during July-September monsoon months in villas with less climate control than sealed apartment towers",
    ],
    technicianInsights: [
      "Jaypee Greens villas sit along the Yamuna Expressway with no urban cluster between them and the Yamuna floodplain — logistics are isolated compared to NCR township repairs, and technicians should plan for single-visit completion rather than multiple-day workshop pickup-and-return",
      "Villa formal rooms contain furniture that residents identify as irreplaceable — repairs are restoration exercises, not commodity service calls, and residents expect the technician to understand the provenance of bespoke pieces",
      "Many villas were purchased by corporate founders, senior judges, and retired senior officers whose furniture was individually commissioned — they expect the technician to consult with their interior designer before making material choices",
      "Security access at Jaypee Greens requires advance gate registration and sometimes interior-designer coordination — unannounced visits are not possible",
    ],
    recommendedMaterials: [
      "full-aniline or nubuck leather in bespoke-matched dye batches for hand-finished villa leather restoration — standard colour charts are insufficient here",
      "HR-50D deep-seat foam for villa sofas designed with aesthetically deep cushion profiles that require premium density to remain supportive",
      "specialist joinery adhesive and beeswax wood polish for carved frame restoration — villa owners specifically reject modern synthetic finishes on artisan wooden frames",
      "humidity-resistant leather conditioner applied as a monsoon-preparation treatment for Yamuna-adjacent villa installations",
    ],
    maintenanceTips: [
      "apply leather conditioner every 6 weeks from June through October — Jaypee Greens' Yamuna floodplain proximity raises indoor humidity during monsoon in ways that sealed apartment buildings do not experience, alternately swelling and drying leather between seasons",
      "treat carved wooden frame joints with beeswax annually before monsoon — hand-cut mortise-and-tenon joints in artisan furniture are more susceptible to humidity-driven expansion than factory-machined frames",
      "commission a professional upholstery inspection every 3 years for bespoke commissioned pieces — original materials that cannot be replicated from standard stock should be monitored before failure makes matching impossible",
      "install UV-filtering film on panoramic golf-facing windows — open greens without urban shade deliver sustained morning UV that is significantly more intense than a city apartment facing the same orientation",
    ],
  },

  "vasundhara-ghaziabad": {
    commonRepairs: [
      "foam replacement in long-owned sofa sets approaching the 10-15 year lifespan in Vasundhara's owner-occupied sectors",
      "fabric re-upholstery on wooden-frame sofa sets where residents want to retain a well-maintained frame but fully refresh the look",
      "wooden sofa frame joint tightening and polish renewal in older sheesham and teak sets in Sector 1-4 independent houses",
      "recliner mechanism adjustment in family sofas used daily by senior household members as their primary seating position",
      "spring and jute webbing replacement in older sofa sets whose base suspension has softened over a decade of daily use",
    ],
    commonFurniture: [
      "traditional wooden 3+2+1 sofa sets with loose cushions in Sector 1-4 independent houses and older flats",
      "mid-market fabric sectionals in newer gated-society apartment blocks near Vaishali Metro",
      "wooden diwan sets with bolster cushions in older Sector 2 properties",
      "recliner chairs in master bedroom areas of established family households",
      "sofa-cum-beds in second bedrooms of older Vasundhara flats used as regular guest beds",
    ],
    customerType: "family",
    housingType: "mixed-residential",
    repairPreference: "quality-focused",
    commonCauses: [
      "foam reaching its natural end-of-life after 10-15 years of continuous daily use in owner-occupied households that have never changed their sofa",
      "wooden frame joint loosening from two decades of seasonal thermal expansion in Ghaziabad's wide temperature range — 45°C summers and 4°C winters work at opposite ends of wood grain",
      "fabric surface pilling in fixed seating positions where the same household members have sat in the same spot for years without cushion rotation",
      "recliner mechanism wear in family sofas where senior residents use the chair as their primary sitting position through the entire day",
      "dust from Vaishali Metro construction and Kaushambi main road traffic accumulating on upholstery in transit-adjacent flats",
    ],
    technicianInsights: [
      "Vasundhara is one of the more established planned townships in Ghaziabad — Sector 1-4 independent houses have older furniture with structurally sound frames that only need foam, fabric, and joint work, making repair clearly the better economic choice over replacement",
      "The mix of older independent houses and newer apartment societies means two completely different furniture profiles exist within a short distance — technicians should confirm property type before the visit to bring the right materials",
      "Owner-occupancy rates are high in the older sectors — residents have strong attachment to their specific sofa sets and specifically request restoration rather than a visual approximation",
      "Proximity to Indirapuram means residents are aware of professional repair services and compare standards — the bar for finish quality is higher than in more isolated townships",
    ],
    recommendedMaterials: [
      "40D foam for family sofa upgrades in established households — long-term owners request firmness that restores what their sofa felt like when it was new",
      "sheesham-matched shellac polish and wood filler for frame joint restoration in Sector 1-4 independent houses where frame aesthetics are part of the furniture's identity",
      "durable polyester-cotton blend fabric in traditional patterns for wooden-frame sofa re-upholstery to complement older home aesthetics",
      "natural jute webbing for spring platform replacement in older sofa frames where synthetic webbing would look out of place in a traditional wooden set",
    ],
    maintenanceTips: [
      "apply furniture wax to wooden sofa frames twice a year — Ghaziabad's 40°C summer-to-4°C winter range creates greater seasonal wood movement than Delhi NCR's average, and waxing reduces cracking at frame joints",
      "rotate seat cushions monthly in established households where one or two positions carry the full daily load — uneven compression is the most common reason long-owned sofas feel worn on one side",
      "vacuum transit-facing flat sofas twice weekly — Vaishali Metro and Kaushambi road traffic generate elevated dust levels at lower floors of apartment blocks facing the main roads",
      "service recliner mechanisms every 2 years in households where a senior family member uses the chair as their primary all-day seating position — daily 8-hour use cycles mechanisms at twice the residential average",
    ],
  },

  "neharpar": {
    commonRepairs: [
      "economy foam replacement in possession-era sofas bought cheaply to fill newly handed-over Neharpar apartments",
      "fabric re-covering with budget materials supplied by residents sourcing from nearby Faridabad markets",
      "sofa leg levelling on uneven builder-grade flooring common in affordable Neharpar housing stock",
      "modular connector tightening in online-brand sofas assembled at possession",
      "recliner cable and handle replacement in budget recliners whose mechanism components have failed within 3 years of purchase",
    ],
    commonFurniture: [
      "budget 3-seater fabric sofas from Faridabad furniture markets and HomeTown",
      "economy online-brand modular sofas in newly handed-over 2-3 BHK apartments",
      "basic recliner sets from affordable Faridabad showrooms",
      "sofa-cum-beds in compact 2 BHK second bedrooms",
      "economy L-shaped corner sofas in new 3 BHK living rooms",
    ],
    customerType: "mixed",
    housingType: "gated-societies",
    repairPreference: "cost-conscious",
    commonCauses: [
      "economy foam in possession-era furniture purchased from budget Faridabad furniture vendors during township handover events — material quality is below what residents expected",
      "Highway 19 dust from heavy industrial vehicle traffic settling continuously on upholstery in apartments facing the expressway side of Neharpar societies",
      "ongoing construction in later Neharpar phases generating silica dust that enters finished blocks through gaps and abrading early-phase residents' fabric sofas",
      "builder-grade floor levelling tolerances in affordable housing stock causing sofa leg rocking and progressive frame joint stress",
      "summer heat amplified in south-facing Neharpar apartments with limited tree shade — foam softening from sustained heat exposure is faster than shaded urban apartments",
    ],
    technicianInsights: [
      "Neharpar attracts buyers from Faridabad's industrial sector workforce — many are making their first property purchase and first furniture purchase simultaneously, which means furniture was often the lowest-priority expense at possession",
      "Residents are price-sensitive and respond well to labour-only pricing when they supply their own materials from Faridabad's furniture-street markets on Old Faridabad Road",
      "Highway 19 creates a clear dust gradient across Neharpar — apartments on the expressway-facing side of a society accumulate fabric dust significantly faster than those on the interior courtyard side of the same building",
      "Society security at Neharpar developments is less formal than in premium Gurgaon or Noida properties — same-day visits are generally possible without advance vehicle registration",
    ],
    recommendedMaterials: [
      "28D to 32D rebonded foam for cost-effective replacement in possession-era budget sofas where residents do not want to invest more than the original furniture cost",
      "affordable polyester fabric in darker geometric patterns that conceal dust and routine soiling — suited to Highway 19 dust levels",
      "universal cam-lock connector kits for online-brand modular sofas assembled at possession",
      "rubber self-levelling feet for sofas on uneven builder-grade flooring in affordable Neharpar housing stock",
    ],
    maintenanceTips: [
      "vacuum expressway-facing apartment sofas twice weekly — Highway 19 industrial vehicle traffic generates persistent fine road dust that settles faster than household dust and abrades fabric fibres",
      "use dark or mid-tone throws on economy fabric sofas to reduce direct UV and dust contact on sofas facing south or west in the under-shaded Neharpar zone",
      "tighten modular sofa connectors every 6 months — possession-era cam-lock assembly in budget furniture is often under-torqued at installation",
      "raise sofa legs slightly off floor in ground-floor apartments during monsoon — Neharpar's newer drainage infrastructure sometimes backs up in heavy rainfall and floor-level seepage is reported in lower floors",
    ],
  },

  "greater-faridabad": {
    commonRepairs: [
      "first-cycle foam replacement in BPTP township sofas entering the 3-5 year possession anniversary",
      "recliner mechanism adjustment in mid-range sets bought at township retail during possession phase",
      "sofa-cum-bed hinge replacement in guest-room sofas used regularly by extended family visitors",
      "fabric stitching repair on seam splits in township-era sofas whose stitching quality was below showroom standard",
      "base platform and spring restoration in earlier Greater Faridabad phase apartments now approaching 6 years",
    ],
    commonFurniture: [
      "mid-market 3+2 fabric sofas from BPTP Arena Mall and township handover furniture vendors",
      "recliner sets in master bedroom TV areas of 3 BHK township apartments",
      "large L-shaped sofas in ground-floor corner apartments with extended living room layouts",
      "sofa-cum-beds in second bedrooms with frequent guest occupancy from extended family",
      "compact 2-seater sofas in 2 BHK apartments near the Highway 19 corridor",
    ],
    customerType: "family",
    housingType: "gated-societies",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "mid-range township-retailer furniture reaching the 3-5 year first compression cycle that is characteristic of possession-era purchases across Greater Faridabad phases",
      "sofa-cum-bed hinge fatigue from high-frequency guest use — Greater Faridabad families maintain strong extended-family visiting patterns and guest beds are in active regular use",
      "Highway 19 dust from heavy goods vehicle traffic accumulating on upholstery in apartments facing the highway side of Greater Faridabad societies",
      "recliner mechanisms in township-era mid-range sets logging high daily cycles in family apartments where both adults and children use the recliner position throughout evenings",
      "base spring softening in the first-delivered Greater Faridabad blocks where sofas are now entering their second service interval",
    ],
    technicianInsights: [
      "Greater Faridabad's BPTP township is large enough that possession dates vary by 2-3 years across phases — earlier-phase families are now at first-cycle repair stage while later-phase residents are still in the possession honeymoon period, creating a rolling wave of repair demand across the township",
      "Families in this zone maintain strong joint-family visiting patterns — extended family stays over festivals and school holidays mean guest-room sofa-cum-beds receive heavier use than in nuclear-family-only households",
      "BPTP Arena Mall proximity means residents can easily compare repair quotes with new furniture prices — same-day completion with clear before-and-after results is important for demonstrating repair value",
      "Society security is professionally managed at BPTP properties — gate registration is required and technicians should be pre-listed with the resident's security app before arriving",
    ],
    recommendedMaterials: [
      "38D foam for possession-era family sofa replacement — families who bought mid-range at possession respond well to a density upgrade that makes the repaired sofa noticeably better than new",
      "stain-resistant performance fabric for households with school-age children in Greater Faridabad's young-family demographic",
      "heavy-duty sofa-cum-bed hinge kits rated for high-cycle guest use — standard hinges fail within 2-3 years under nightly operation",
      "dust-resistant tight-weave polyester for Highway 19-facing apartment installations",
    ],
    maintenanceTips: [
      "vacuum Highway 19-facing apartment sofas twice weekly — heavy goods vehicle traffic on the expressway generates sustained fine particulate that penetrates fabric weave faster than household dust",
      "oil sofa-cum-bed hinges every 2 months if the sofa is used as a regular guest bed — lubrication prevents the rust-stiffening that causes sudden hinge failure during extension",
      "rotate recliner seat cushions every 3 months in family apartments where both adults and children use the recliner daily — shared recliner use creates faster compression than single-occupant households",
      "check sofa base platforms in earlier-phase Greater Faridabad apartments annually — first-delivered blocks are now at the age where spring softening becomes noticeable before it becomes uncomfortable",
    ],
  },

  "old-faridabad": {
    commonRepairs: [
      "full re-stuffing of traditional high-back wooden sofa cushions in NIT-era independent houses",
      "carved wooden frame joint tightening and polish renewal on 20-30 year old sheesham sofa sets",
      "jute webbing and coir padding replacement in older traditional-style sofas whose base has completely flattened",
      "fabric changeover with customer-chosen material from Old Faridabad market on the textile street",
      "spring replacement in older diwan and sofa-bed sets in established residential properties",
    ],
    commonFurniture: [
      "heavy carved sheesham or teak 5-seater sofa sets in NIT-era independent house drawing rooms",
      "traditional divan sets with bolster cushions and coir padding in established homes",
      "older fabric 3+2+1 sofa sets purchased from Faridabad furniture street in the 1990s or early 2000s",
      "wooden sofa-cum-beds in upper-floor bedrooms of independent houses",
      "compact market-sourced fabric sofas in older multi-storey residential buildings",
    ],
    customerType: "senior",
    housingType: "independent-houses",
    repairPreference: "quality-focused",
    commonCauses: [
      "natural material ageing in coir, cotton, and jute padding in traditional sofas that have never been professionally serviced since purchase — these materials compress and degrade over 20+ years regardless of use intensity",
      "wooden frame joint loosening from decades of Faridabad's extreme seasonal temperature range — the city sits further from coastal humidity moderators than Delhi, amplifying wood movement between summer and winter",
      "termite damage to wooden sofa legs and lower frame rails in older ground-floor properties near the historic NIT colony drainage lines",
      "fabric fading and thread weakening from decades of use in large south-facing drawing rooms that receive full afternoon sun year-round",
      "dust from Faridabad Railway Station goods yards and the old industrial sector settling on furniture in properties near the station",
    ],
    technicianInsights: [
      "Old Faridabad's NIT colony and Sector 8-15 independent houses contain some of the oldest maintained furniture stock in the Delhi NCR service area — residents have a strong cultural attachment to their sofa sets and view repair as the correct and natural response rather than an alternative to replacement",
      "Traditional coir and cotton filling is preferred by older residents who find modern foam too firm compared to what their sofa originally felt like — technicians should carry a small coir or cotton-wrap dacron option alongside standard foam",
      "Old Faridabad's fabric market on the textile street means residents sometimes arrive at the appointment having already purchased their preferred replacement fabric — labour-only pricing flexibility is important",
      "Narrow inner lanes in NIT colony and older sectors have restricted vehicle access — parking is often only available at the lane entrance and materials must be hand-carried to the property",
    ],
    recommendedMaterials: [
      "40D foam with a dacron wrap layer to achieve the traditional soft-top firm-base feel that long-term owners of old Indian sofa sets expect",
      "coir fibre padding option for residents who specifically request traditional filling material rather than modern foam",
      "sheesham-matched shellac or oil varnish for wooden frame refinishing in original NIT-era furniture",
      "anti-termite treated timber for leg and lower rail replacements in older properties with ground-floor moisture",
    ],
    maintenanceTips: [
      "apply anti-termite spray to wooden sofa legs annually — older properties in NIT colony with seasonal ground moisture are at consistent risk, and early treatment is far cheaper than frame replacement after active infestation",
      "apply furniture oil to wooden frames before both summer and monsoon — Old Faridabad's extreme seasonal range means wooden frames need conditioning twice per year rather than the once-per-year that suits Delhi's more moderate climate",
      "use breathable cotton covers on traditional sofas during the festival season when guest usage peaks — covers protect fabric from concentrated use without changing the appearance of the furniture",
      "flip and air out coir or cotton-filled cushions seasonally — traditional filling materials benefit from drying to prevent mould formation in the post-monsoon humidity period",
    ],
  },

  "surajkund": {
    commonRepairs: [
      "artisan-level carved wooden sofa frame restoration requiring hand-finishing to preserve original craftsmanship",
      "bespoke fabric re-upholstery using handloom or hand-block-printed textile sourced through interior designers",
      "full re-stuffing of hand-finished cushions in individually commissioned sofa sets with non-standard dimensions",
      "antique furniture sofa integration repair — fitting modern comfort materials into preserved antique or artisan-built wooden frames",
      "hand-stitched upholstery seam restoration on furniture made by craftsmen without industrial machinery",
    ],
    commonFurniture: [
      "individually commissioned carved wooden sofa sets in Surajkund resort-adjacent bungalows",
      "artisan-made furniture acquired through the Surajkund Crafts Mela or bespoke interior designers",
      "antique or semi-antique wooden settees and formal chairs repurposed as living room sofas",
      "hand-block-printed or handloom-upholstered statement pieces in interior-designed spaces",
      "custom-built low-profile seating in contemporary luxury bungalows with architect-designed interiors",
    ],
    customerType: "luxury",
    housingType: "independent-houses",
    repairPreference: "premium",
    commonCauses: [
      "natural ageing of hand-finished materials — carved wood, hand-stitched upholstery, and artisan fabric are irreplaceable from standard stock and must be restored rather than replaced",
      "humidity from the Aravalli ridge and seasonal Surajkund reservoir area affecting carved wooden joinery in bungalows without full-perimeter climate control",
      "bespoke cushion filling settling and compressing in non-standard dimensions that do not correspond to any available off-the-shelf foam specification",
      "UV exposure on south-facing bungalow veranda seating in properties with limited overhead shade from architectural overhangs",
      "hand-stitched seam loosening in artisan-made upholstery where thread tension was set by hand and varies across the piece",
    ],
    technicianInsights: [
      "Surajkund's residents include artists, senior creative professionals, craft collectors, and business owners with a strong personal connection to the craftsmanship of their furniture — repair is understood as conservation, not just maintenance",
      "Many pieces in Surajkund bungalows were acquired at the annual Surajkund Crafts Mela or commissioned through the same artisan networks — residents expect the repairing technician to recognise and respect the craft tradition embedded in the piece",
      "Bungalow access is straightforward — wide driveways, single-storey layouts, and large room clearances mean large or heavy furniture can be moved for full workshop-quality repair rather than the in-room-only service that apartment towers require",
      "Colour and texture matching for bespoke fabric must be done against physical samples brought to the property — residents will not accept remote colour-matching or catalogue substitution for hand-finished materials",
    ],
    recommendedMaterials: [
      "natural jute and coir base layers topped with dacron wrap for cushions whose original hand-stuffed feel must be replicated without modern foam",
      "handloom or hand-block-printed fabric sourced through craft networks for re-upholstery on artisan pieces where machine-made textile would be aesthetically incorrect",
      "linseed or tung oil finish for carved wooden frame restoration — synthetic varnish is explicitly refused by most Surajkund residents with artisan furniture",
      "beeswax wood conditioner for carved joint sealing before monsoon season given Surajkund's Aravalli humidity profile",
    ],
    maintenanceTips: [
      "condition all carved wooden frames with linseed or tung oil before the monsoon — Surajkund's position at the Aravalli foothills creates higher ambient humidity than central Faridabad, and carved joinery with deep relief is more susceptible to moisture ingress than plain-faced frames",
      "air out all hand-stuffed cushions monthly during October-November dry season — natural coir and cotton filling absorbs monsoon humidity and benefits from the post-monsoon dry window for thorough airing",
      "commission a professional inspection every 2-3 years for all artisan-made pieces — catching hand-stitch loosening or carved joint movement before visible failure preserves the integrity of pieces that cannot be replicated",
      "avoid exposing artisan-upholstered pieces to direct afternoon veranda sun — UV degradation on handloom or block-printed fabric is irreversible and the original textile is non-reproducible from standard commercial sources",
    ],
  },

  "bptp": {
    commonRepairs: [
      "phased foam replacement across BPTP Parklands towers where different possession timelines mean residents in the same complex are at different repair stages",
      "recliner mechanism servicing for mid-range sets in recently handed-over BPTP towers now entering their first service interval",
      "fabric re-upholstery on sofas from earlier BPTP phases that are now 5-7 years old and showing consistent wear",
      "base board and spring restoration in well-used family sofas in the oldest BPTP Parklands sector blocks",
      "sofa-cum-bed hinge replacement in second-bedroom utility sofas with regular overnight guest use",
    ],
    commonFurniture: [
      "mid-range 3+2 fabric sofa sets purchased at BPTP township furniture events at possession",
      "recliner sets in master bedroom sitting areas of 3-4 BHK BPTP apartments",
      "L-shaped modular sofas in larger 3 BHK and 4 BHK apartment living rooms",
      "sofa-cum-beds in guest bedrooms with regular family visitor use",
      "compact 2-seater sofas in 2 BHK apartments in later BPTP Parklands phases",
    ],
    customerType: "mixed",
    housingType: "gated-societies",
    repairPreference: "quality-focused",
    commonCauses: [
      "BPTP Parklands' phased delivery timeline creating a rolling repair demand wave — earliest-phase residents are at 6-7 year second-cycle stage while latest-phase residents are at 2-3 year first-cycle stage within the same gated boundary",
      "Highway 19 industrial vehicle traffic generating persistent fine dust that accumulates on upholstery in expressway-facing BPTP apartment blocks",
      "mid-range township furniture reaching the natural first compression cycle at the 4-5 year mark across the main phases",
      "recliner mechanisms in possession-era sets logging high daily household cycles in family apartments where multiple family members use the recliner throughout the evening",
      "summer heat in south-facing BPTP apartments without full perimeter mature tree shade softening foam faster than in shaded urban apartment blocks",
    ],
    technicianInsights: [
      "BPTP Parklands is a single gated boundary containing multiple possession cohorts — a technician visiting the same complex on the same day can encounter a 7-year-old sofa needing second-cycle foam replacement in Block A and a 2-year-old sofa with a first connector issue in Block C",
      "BPTP's professional facilities management means security registration is strictly enforced — technicians must be pre-registered on the visitor management app and cannot enter without prior resident notification",
      "The mixed ownership profile across phases means quality expectations vary even within the same complex — later-phase residents who paid more for identical apartments expect higher repair standards than earlier-phase residents who bought at lower prices",
      "BPTP Central Market proximity means residents can easily compare repair pricing against local alternatives — transparent quotes with phase-appropriate material recommendations earn trust faster than fixed-price estimates",
    ],
    recommendedMaterials: [
      "40D foam for 5-7 year old BPTP phase residents entering the replacement cycle — a density upgrade from mid-range possession foam is the expected quality step",
      "dust-resistant tight-weave polyester for Highway 19-facing apartment installations where standard fabric accumulates visible soiling faster",
      "heavy-duty recliner mechanism kits for possession-era sets that have logged high daily household cycles",
      "anti-humidity base board treatment for ground-floor and lower-floor BPTP apartments where seasonal moisture affects the base panel",
    ],
    maintenanceTips: [
      "vacuum Highway 19-facing apartment sofas twice weekly — industrial vehicle traffic on the expressway sustains fine particulate levels noticeably higher than interior residential zones within the same BPTP complex",
      "service recliner mechanisms at the 5-year mark rather than waiting for operational stiffness — BPTP residents who maintain proactively report the mechanism retains smooth travel; those who wait until failure report the cable replacement feels less precise",
      "condition leather sofas every 2 months in south-facing BPTP apartments — summer heat from unshaded south exposure combined with AC cycling creates a chronically drying environment",
      "rotate seat cushions monthly in family apartments where evening recliner and sofa use is concentrated in 2-3 fixed positions throughout the household's daily routine",
    ],
  },

  // ─── Greater Noida localities ─────────────────────────────────────────────

  "knowledge-park": {
    commonRepairs: [
      "foam replacement in rental accommodation sofas worn by high student and PG tenant turnover across Sharda, Galgotias, and GL Bajaj campus zones",
      "basic fabric re-covering on budget sofas in staff quarters and faculty residential plots in Knowledge Park phases",
      "recliner mechanism adjustment in mid-range sets in owner-occupied faculty housing",
      "sofa frame joint tightening in older rental property sofas that have absorbed multiple tenancy cycles",
      "sofa-cum-bed hinge replacement in studio and 1 BHK PG accommodation sofas used as daily beds",
    ],
    commonFurniture: [
      "economy 2-3 seater fabric sofas in student PG and rental accommodation",
      "basic wooden-frame sofas with thin cushions in university staff quarters",
      "mid-market fabric sectionals in owner-occupied faculty residential plots in Knowledge Park Phase 2",
      "sofa-cum-beds in compact studio accommodation near campus gates",
      "budget recliners in faculty housing living rooms",
    ],
    customerType: "mixed",
    housingType: "mixed-residential",
    repairPreference: "cost-conscious",
    commonCauses: [
      "rental tenant turnover from student occupancy cycles — sofas change hands every academic year and absorb each cycle's use without maintenance",
      "budget foam in PG and hostel-adjacent rental sofas purchased by landlords at the lowest available price point, compressing within one or two academic cycles",
      "dust from Yamuna Expressway interchange construction and Knowledge Park institutional campus earthwork settling on residential upholstery in plots adjacent to campuses",
      "sofa-cum-bed hinge fatigue from nightly operation in accommodation where the sofa doubles as the only bed in compact studio units",
      "wooden frame joint loosening in older rental property sofas that have been dragged and repositioned by successive tenant cohorts",
    ],
    technicianInsights: [
      "Knowledge Park's residential mix is unusual — university staff quarters and faculty plots sit alongside student rental accommodation and newer owner-occupied sector housing, creating three completely different repair profiles within a short radius",
      "Landlords with multiple rental properties in the campus zone often call for bulk repairs across several units between academic cycles — a single visit may cover sofas in 2-3 flats in the same building",
      "Student renters are rarely the repair decision-makers — the call comes from landlords who are optimising repair cost before the next tenancy, not end-users who chose the furniture",
      "Access is straightforward in the low-rise Knowledge Park residential plots — most units are ground or first floor with no lift constraints",
    ],
    recommendedMaterials: [
      "28D rebonded foam for landlord-grade rental sofa replacement where durability per rupee is the only selection criterion",
      "rexine or basic faux leather for rental sofas in student accommodation — easier to wipe clean than fabric and more resistant to the concentrated daily use of short-cycle tenancy",
      "treated sal wood or hardwood dowels for frame joint repair in rental sofas that have been repositioned by multiple tenant cohorts",
      "heavy-gauge hinge kits for sofa-cum-beds used as nightly beds — standard residential hinges fail within one academic year under daily operation",
    ],
    maintenanceTips: [
      "schedule sofa inspection and repair between outgoing and incoming tenant occupancy — end-of-cycle maintenance costs far less than emergency repair mid-tenancy when the sofa fails completely",
      "use faux leather or rexine covers on rental fabric sofas — wipe-clean surfaces survive student tenancy cycles with far less fabric degradation than open-weave upholstery",
      "check sofa-cum-bed hinges at the start of every tenancy and replace before occupancy if the mechanism shows stiffness — a hinge that fails on the first night is a landlord liability",
      "vacuum dust from Yamuna Expressway and campus earthwork weekly from ground-floor plots — Knowledge Park's institutional construction activity is ongoing and generates fine silica dust continuously",
    ],
  },

  "pari-chowk": {
    commonRepairs: [
      "office waiting-area sofa foam replacement along the Pari Chowk commercial strip serving Yamuna Expressway-facing showrooms and corporate offices",
      "fabric re-upholstery on residential sofas in Alpha 1 and Beta 1 sector plots adjacent to the commercial hub",
      "recliner mechanism repair in mid-market residential sets in newer Alpha and Beta sector apartments",
      "faux leather re-covering on commercial seating in real estate, automobile dealership, and logistics offices at Pari Chowk",
      "sofa frame strut and joint repair in older Alpha sector independent house furniture",
    ],
    commonFurniture: [
      "commercial waiting-area sofas in automobile showrooms and corporate offices at Pari Chowk",
      "residential fabric 3+2+1 sofa sets in Alpha 1 and Beta 1 sector independent houses",
      "mid-market L-shaped sectionals in newer Alpha sector apartment flats",
      "faux leather seating in real estate office reception areas along the Yamuna Expressway service road",
      "recliner sets in owner-occupied Alpha sector residential plots",
    ],
    customerType: "mixed",
    housingType: "commercial-mixed",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "Yamuna Expressway highway dust and vehicle exhaust particulate accumulating rapidly on commercial office seating with exterior-facing entrances at Pari Chowk",
      "high daily visitor footfall in automobile and real estate showrooms compressing commercial sofa foam within 12-18 months",
      "foam compression in residential Alpha and Beta sector sofas from extended daily family use in owner-occupied independent houses",
      "faux leather cracking in commercial offices from combined AC drying and sustained dust exposure along the expressway corridor",
      "residential sofa joint loosening from Yamuna Expressway heavy vehicle road vibration in Alpha sector plots closest to the highway",
    ],
    technicianInsights: [
      "Pari Chowk sits at the junction of the Yamuna Expressway and the Greater Noida link road — the commercial strip serves both expressway travellers and Greater Noida residents, creating a true dual-profile demand: office foam replacement calls in the morning and residential re-upholstery calls in the afternoon",
      "Automobile dealerships and real estate showrooms along the strip require same-day or next-morning completion because waiting areas must be functional during business hours — unlike residential calls, there is no flexibility on timing",
      "Alpha 1 and Beta 1 sector residential plots are owner-occupied, relatively established, and have older furniture than Jaypee Greens — the repair brief here is practical restoration rather than luxury conservation",
      "Road vibration from expressway heavy vehicle traffic is noticeable in ground-floor Alpha sector properties closest to Pari Chowk — sofa frame joint loosening is reported more frequently here than in interior Greater Noida residential sectors",
    ],
    recommendedMaterials: [
      "commercial-grade 44D foam for high-footfall automobile and real estate showroom waiting-area sofas that log 8-10 hours of visitor use daily",
      "antimicrobial faux leather for expressway-facing commercial offices where highway dust and visitor contact create hygiene-sensitive surfaces",
      "40D foam for owner-occupied Alpha and Beta sector residential sofa replacement — established households expect quality restoration, not budget rental-grade refill",
      "vibration-resistant frame adhesive for sofa joint repair in ground-floor Alpha sector plots near the expressway",
    ],
    maintenanceTips: [
      "wipe commercial waiting-area faux leather sofas daily — Pari Chowk's expressway position means highway dust bonds with faux leather surfaces faster than in shielded urban office environments",
      "replace commercial foam proactively every 2 years in high-footfall showroom sofas rather than waiting for visible sagging — compressed showroom seating reflects directly on brand presentation to walk-in customers",
      "condition residential leather sofas in Alpha sector plots every 2 months — combined expressway dust and year-round AC cycling creates a drying environment that accelerates surface cracking",
      "tighten sofa frame joints in ground-floor Alpha sector properties nearest the expressway annually before monsoon — road vibration from heavy vehicles loosens joints progressively and monsoon humidity accelerates wood movement at already-loose joints",
    ],
  },

  // ─── Noida localities ──────────────────────────────────────────────────────

  "sector-62-noida": {
    commonRepairs: [
      "foam replacement in tech park residential sofas",
      "fabric re-upholstery on apartment L-shaped sofas",
      "recliner mechanism repair in premium sets",
      "modular sofa hinge and connector repair",
      "spring base support replacement",
    ],
    commonFurniture: [
      "L-shaped modular sofas",
      "3+2 fabric sofas",
      "premium recliner sets",
      "online-brand modular sofas (Pepperfry, Urban Ladder, Wakefit)",
      "sofa cum beds in 1–2 BHK apartments",
    ],
    customerType: "professional",
    housingType: "gated-societies",
    repairPreference: "quick-turnaround",
    commonCauses: [
      "foam compression from high daily use in compact 1–2 BHK apartments",
      "modular connector and hinge failures in online-brand sofas",
      "fabric wear from pets in young professional households",
      "recliner mechanism failures from frequent use",
      "dust accumulation from Noida's tech corridor construction activity",
    ],
    technicianInsights: [
      "Sector 62 is a tech and corporate hub — residents are primarily working professionals aged 25–40 with online-purchased furniture",
      "Many sofas are from Pepperfry or Urban Ladder with modular connectors requiring specific replacement hardware",
      "Residents strongly prefer weekend or evening slots around work schedules",
      "Quick, same-day service is highly valued — residents dislike multi-day repair processes",
    ],
    recommendedMaterials: [
      "40D foam for primary seating in compact apartments",
      "stain-resistant performance fabric for pet-friendly households",
      "standard modular connector hardware (cam locks, Fischer connectors) for online-brand repairs",
      "dust-resistant fabric coating for high-construction-dust areas",
    ],
    maintenanceTips: [
      "Vacuum sofas twice weekly — Noida Sector 62 has elevated construction dust levels",
      "Use a damp cloth to wipe recliner armrests and mechanisms monthly",
      "Check modular connectors every 6 months — they loosen faster in frequently rearranged sofas",
      "Apply fabric protector after professional cleaning to reduce re-soiling",
    ],
  },

};
