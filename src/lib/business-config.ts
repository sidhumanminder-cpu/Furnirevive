/**
 * Business configuration — single source of truth for all business constants.
 * Every template and schema references this instead of hardcoded literals.
 */

export const BUSINESS = {
  name: "FurniRevive",
  phone: "+919217999355",
  displayPhone: "92179 99355",
  url: "https://furnirevive.com",
  logo: "https://furnirevive.com/logo.png",
  image: "https://furnirevive.com/og-image.jpg",
  whatsappUrl: "https://wa.me/919217999355",
  email: "hello@furnirevive.com",
  priceRange: "Starting from ₹599",
  currency: "INR",
  foundingYear: 2019,
  openingHours: "Mo-Su 08:00-20:00",
} as const;

/**
 * Service Area Business: no public storefront, so only a city-level address
 * is published. Per-page targeting lives in `areaServed`, never the address.
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

/** Site-wide areaServed list for every LocalBusiness schema block. */
export const BUSINESS_AREA_SERVED = SERVICE_AREA_LIST.map((a) => ({
  "@type": "City",
  name: a.name,
  containedInPlace: { "@type": "AdministrativeArea", name: a.state },
}));
