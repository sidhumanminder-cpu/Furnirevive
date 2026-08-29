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
