/**
 * Business configuration — single source of truth for all business constants.
 * Every template and schema references this instead of hardcoded literals.
 */

export const BUSINESS = {
  name: "FurniRevive",
  phone: "+919217999355",
  displayPhone: "92179 99355",
  url: "https://furnirevive.com",
  logo: "https://cdn.hercules.app/file_dtr8PtooAsmRwfNTJKNRTESW",
  image: "https://cdn.hercules.app/file_dtr8PtooAsmRwfNTJKNRTESW",
  whatsappUrl: "https://wa.me/919217999355",
  email: "support@furnirevive.com",
  priceRange: "₹500–₹25,000",
  /** Lowest published price in INR, used for schema Offers so it cannot drift from the site-wide starting price. */
  startingPrice: "500",
  currency: "INR",
  foundingYear: 2016,
  openingHours: "Mo-Su 08:00-20:00",
} as const;

/**
 * Service Area Business: no public storefront, so only a city-level address
 * is published. Per-page targeting lives in `areaServed`, never the address.
 * Not emitted: no public address. Re-enable only if a public address is shown on the site and matches Google Business Profile.
 */
export const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Gurugram",
  addressRegion: "Haryana",
  postalCode: "122001",
  addressCountry: "IN",
} as const;

/** Approximate city-level coordinates for Gurugram 122001 (not a building). */
export const BUSINESS_GEO = {
  "@type": "GeoCoordinates",
  latitude: 28.4595,
  longitude: 77.0266,
} as const;

const SERVICE_AREA_LIST = [
  { name: "Delhi", state: "Delhi" },
  { name: "Gurgaon", state: "Haryana" },
  { name: "Faridabad", state: "Haryana" },
  { name: "Noida", state: "Uttar Pradesh" },
  { name: "Ghaziabad", state: "Uttar Pradesh" },
  { name: "Greater Noida", state: "Uttar Pradesh" },
  { name: "Kaushambi", state: "Uttar Pradesh" },
  { name: "Vasundhara", state: "Uttar Pradesh" },
  { name: "Chandigarh", state: "Chandigarh" },
  { name: "Mohali", state: "Punjab" },
  { name: "Panchkula", state: "Haryana" },
] as const;

type AreaNode = Record<string, unknown>;

/**
 * Per-page areaServed: the page's city (with its state) plus the locality when known.
 * Keeps non-Delhi pages from advertising a Delhi service area.
 */
export function buildAreaServed(localityLabel: string | null, city: string): AreaNode[] {
  const cityNode: AreaNode =
    SERVICE_AREA_LIST.filter((a) => a.name.toLowerCase() === city.toLowerCase()).map((a) => ({
      "@type": "City",
      name: a.name,
      containedInPlace: { "@type": "AdministrativeArea", name: a.state },
    }))[0] ?? { "@type": "City", name: city };

  const label = localityLabel?.replace(/\s*\/\s*gurugram/i, "").trim() ?? "";
  const isCityWide = !label || label.toLowerCase() === city.toLowerCase() || /delhi\s*ncr/i.test(label);
  if (isCityWide) return [cityNode];

  const placeName = label.toLowerCase().includes(city.toLowerCase()) ? label : `${label}, ${city}`;
  return [{ "@type": "Place", name: placeName }, cityNode];
}

/** Site-wide areaServed list for every LocalBusiness schema block. */
export const BUSINESS_AREA_SERVED = SERVICE_AREA_LIST.map((a) => ({
  "@type": "City",
  name: a.name,
  containedInPlace: { "@type": "AdministrativeArea", name: a.state },
}));
