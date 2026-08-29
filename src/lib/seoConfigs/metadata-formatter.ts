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

// ─── Meta Description Templates (3 entries, rotated by localityIndex % 3) ────
// Each template is crafted to produce 145–160 characters for typical inputs.

export const META_DESCRIPTION_TEMPLATES = [
  "Need {service} in {locality}? Doorstep upholstery, foam replacement & repair by expert technicians. Free inspection, warranty included. Call 92179 99355.",
  "Looking for {service} in {locality}? FurniRevive offers doorstep repair, free inspection & 6-month warranty. 5,000+ happy customers. Call 92179 99355.",
  "Get professional {service} in {locality} at your doorstep. Foam, upholstery & frame repair with free inspection and warranty included. Call 92179 99355.",
] as const;

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

/**
 * Formats the <title> tag.
 * Pattern: "{Service} in {Location} – {Benefit}"
 * City is suppressed if already in localityName (isCityRedundant).
 * localityIndex is used for deterministic benefit rotation (% 8).
 * Target: 50–60 characters.
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
  return `${serviceName} in ${location} – ${benefit}`;
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

/**
 * Formats the meta description.
 * Rotates deterministically between 3 templates by localityIndex % 3.
 * Target: 145–160 characters.
 */
export function formatMetaDescription(
  serviceName: string,
  localityName: string,
  localityIndex: number,
): string {
  const template = META_DESCRIPTION_TEMPLATES[localityIndex % 3];
  return template
    .replace("{service}", serviceName)
    .replace("{locality}", localityName);
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
