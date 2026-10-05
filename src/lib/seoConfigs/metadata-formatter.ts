/**
 * Metadata Formatter
 *
 * Pure, deterministic formatting functions for SEO page metadata.
 * No side effects, no randomness, never throws.
 */

// ─── Benefit Library (8 entries, rotated by localityIndex % 8) ───────────────

export const BENEFITS = [
  "Same Day Doorstep Service",
  "Free Home Inspection",
  "Professional Repair Experts",
  "Upholstery & Foam Replacement",
  "Trusted Local Experts",
  "Affordable Repair Services",
  "Premium Furniture Restoration",
  "6-Month Service Warranty",
] as const;

// ─── Hero Subtitle Templates (3 entries, rotated by localityIndex % 3) ───────

export const HERO_SUBTITLE_TEMPLATES = [
  "Professional {service} with doorstep service, free inspection and 6-month warranty across {locality}.",
  "Restore your {furnitureType} without replacing it. Expert technicians available across {locality}.",
  "Same-day {service} at your doorstep in {locality}. Free inspection. 6-month warranty.",
] as const;

// ─── Meta Description Templates ──────────────────────────────────────────────
// Superseded by META_DESCRIPTION_SEGMENT_GROUPS below (same 3 rotations,
// split into droppable sentences for graceful degradation). Kept as segment
// groups only — the single-string form was removed to avoid drift between
// the two representations.

// ─── Helper: Deterministic index from locality slug ──────────────────────────

/**
 * Derives a deterministic locality index from a locality slug.
 * Used to select benefits, subtitle templates, and meta templates.
 * Pure hash — same slug always produces the same number.
 * Returns a non-negative integer.
 */
export function localitySlugToIndex(slug: string): number {
  let sum = 0;
  for (let i = 0; i < slug.length; i++) {
    sum += slug.charCodeAt(i);
  }
  return sum;
}

// ─── Helper: City redundancy check ──────────────────────────────────────────

/**
 * Returns true when cityName is already embedded in localityName
 * so it can be suppressed from title/subtitle.
 * Examples: "New Gurgaon" contains "Gurgaon", "Greater Noida" contains "Noida",
 * "South Delhi" contains "Delhi".
 */
export function isCityRedundant(localityName: string, cityName: string): boolean {
  return localityName.toLowerCase().includes(cityName.toLowerCase());
}

// ─── Formatting Functions ────────────────────────────────────────────────────

const TITLE_BUDGET = 65;
const TITLE_MAX = 70;
const DESCRIPTION_BUDGET = 155;
const DESCRIPTION_MAX = 160;

/** Defensive safety net only — see formatTitle/formatMetaDescription. */
function hardTruncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const hardCut = text.slice(0, max - 1);
  const lastSpace = hardCut.lastIndexOf(" ");
  const cut = lastSpace > max - 16 ? hardCut.slice(0, lastSpace) : hardCut;
  return `${cut.trimEnd()}…`;
}

/**
 * Formats the <title> tag using graceful degradation so long real locality
 * names (e.g. "Tata Raisina Residency", "Golf Course Extension") never get
 * hard-truncated. Tries, in order: full form with city + benefit, without
 * city, without benefit, bare service+locality. truncate() only fires as a
 * last-resort safety net on names too long for even the shortest form.
 * localityIndex is used for deterministic benefit rotation (% 8).
 */
export function formatTitle(
  serviceName: string,
  localityName: string,
  cityName: string,
  localityIndex: number,
): string {
  const location = isCityRedundant(localityName, cityName)
    ? localityName
    : `${localityName}, ${cityName}`;
  const benefit = BENEFITS[localityIndex % 8];

  const candidates = [
    `${serviceName} in ${location} – ${benefit}`,
    `${serviceName} in ${localityName} – ${benefit}`,
    `${serviceName} in ${location}`,
    `${serviceName} in ${localityName}`,
  ];
  for (const c of candidates) {
    if (c.length <= TITLE_BUDGET) return c;
  }
  return hardTruncate(candidates[candidates.length - 1], TITLE_MAX);
}

/**
 * Formats the H1.
 * Pattern: "{Service} in {Location}" — never includes city.
 */
export function formatH1(serviceName: string, localityName: string): string {
  return `${serviceName} in ${localityName}`;
}

/**
 * Formats the hero subtitle.
 * Rotates deterministically between 3 templates by localityIndex % 3.
 */
export function formatHeroSubtitle(
  serviceName: string,
  localityName: string,
  furnitureType: string,
  localityIndex: number,
): string {
  const template = HERO_SUBTITLE_TEMPLATES[localityIndex % 3];
  return template
    .replace("{service}", serviceName)
    .replace("{locality}", localityName)
    .replace("{furnitureType}", furnitureType);
}

// ─── Meta description segment groups (short-form fallback per rotation) ─────
// Each group mirrors one of the 3 META_DESCRIPTION_TEMPLATES above, but as
// an ordered list of standalone sentences so a long locality name can drop
// the least-essential trailing sentence instead of being sliced mid-word.
// The phone number sentence is always last and always kept.
const META_DESCRIPTION_SEGMENT_GROUPS = [
  [
    "Need {service} in {locality}?",
    "Doorstep upholstery, foam replacement & repair by expert technicians.",
    "Free inspection, warranty included.",
    "Call 92179 99355.",
  ],
  [
    "Looking for {service} in {locality}?",
    "FurniRevive offers doorstep repair, free inspection & 6-month warranty.",
    "5,000+ happy customers.",
    "Call 92179 99355.",
  ],
  [
    "Get professional {service} in {locality} at your doorstep.",
    "Foam, upholstery & frame repair with free inspection and warranty included.",
    "Call 92179 99355.",
  ],
] as const;

/**
 * Formats the meta description using graceful degradation. Rotates
 * deterministically between 3 sentence groups by localityIndex % 3, then
 * drops trailing sentences (never the opening question or the closing
 * phone-number sentence) until the result fits the safe budget. Falls
 * back to hardTruncate() only if even the shortest 2-sentence form
 * (opening + phone) is still oversized.
 */
export function formatMetaDescription(
  serviceName: string,
  localityName: string,
  localityIndex: number,
): string {
  const segments = META_DESCRIPTION_SEGMENT_GROUPS[localityIndex % 3].map((s) =>
    s.replace("{service}", serviceName).replace("{locality}", localityName),
  );
  const opening = segments[0];
  const phoneSentence = segments[segments.length - 1];
  const middle = segments.slice(1, -1);

  // Try keeping all middle sentences, then progressively drop from the end
  // of the middle section, always keeping opening + phone sentence.
  for (let keep = middle.length; keep >= 0; keep--) {
    const candidate = [opening, ...middle.slice(0, keep), phoneSentence].join(" ");
    if (candidate.length <= DESCRIPTION_BUDGET) return candidate;
  }
  return hardTruncate([opening, phoneSentence].join(" "), DESCRIPTION_MAX);
}

/**
 * Formats a length-aware sofa-upholstery meta description. Distinct wording
 * from formatMetaDescription() (keeps the "reupholstery" framing used only
 * for this service), but follows the same graceful-degradation pattern:
 * opening + phone sentence are always kept, middle detail sentences are
 * dropped first if the locality name is long.
 */
export function formatUpholsteryMetaDescription(location: string): string {
  const opening = `Get expert sofa reupholstery and upholstery services in ${location}.`;
  const middle = [
    "Replace fabric, upgrade foam and repair stitching at your doorstep.",
    "Free inspection, 6-month warranty.",
  ];
  const phoneSentence = "Call 92179 99355.";

  for (let keep = middle.length; keep >= 0; keep--) {
    const candidate = [opening, ...middle.slice(0, keep), phoneSentence].join(" ");
    if (candidate.length <= DESCRIPTION_BUDGET) return candidate;
  }
  return hardTruncate([opening, phoneSentence].join(" "), DESCRIPTION_MAX);
}

/**
 * Formats a length-aware sofa-upholstery title. Distinct wording from
 * formatTitle() (keeps the "Reupholstery" framing used only for this
 * service), but follows the same graceful-degradation cascade: drop the
 * city (if not redundant with the locality name) before ever truncating.
 */
export function formatUpholsteryTitle(localityName: string, cityName: string): string {
  const location = isCityRedundant(localityName, cityName)
    ? localityName
    : `${localityName}, ${cityName}`;
  const candidates = [
    `Sofa Reupholstery in ${location} – FurniRevive`,
    `Sofa Reupholstery in ${localityName} – FurniRevive`,
    `Sofa Reupholstery in ${location}`,
    `Sofa Reupholstery in ${localityName}`,
  ];
  for (const c of candidates) {
    if (c.length <= TITLE_BUDGET) return c;
  }
  return hardTruncate(candidates[candidates.length - 1], TITLE_MAX);
}

/**
 * Formats the schema.org Service name.
 * Pattern: "{Service} in {Location}" — same as H1.
 */
export function formatSchemaName(serviceName: string, localityName: string): string {
  return formatH1(serviceName, localityName);
}

/**
 * Formats the hero image alt text.
 * Pattern: "Technician repairing a {furnitureType} at a customer's home in {locality}"
 */
export function formatHeroAlt(furnitureType: string, localityName: string): string {
  return `Technician repairing a ${furnitureType} at a customer's home in ${localityName}`;
}
