import type { KitchenCostContent } from "./types.ts";

/**
 * National-scope authority page: /modular-kitchen-price
 * Targets: modular kitchen price + cost + rates + quotation + budget + per sq ft
 * Sits above city cost pages in the hierarchy.
 */
export const kitchenPriceContent: KitchenCostContent = {
  city: "delhi",
  cityDisplayName: "Delhi NCR",
  slug: "modular-kitchen-price",
  pageTitle: "Modular Kitchen Price in India 2025 — Complete Cost & Rates Guide | FurniRevive",
  metaDescription: "Modular kitchen price in India: ₹80,000–₹12L+ depending on size, finish and layout. Complete guide to cost per sq ft, material rates, and getting an accurate quote. Free consultation.",
  canonical: "https://furnirevive.com/modular-kitchen-price",
  heroHeading: "Modular Kitchen Price Guide 2025 — Cost, Rates & Quotation",
  heroSubtitle: "Everything you need to know about modular kitchen pricing in India — per sq ft rates, material costs, layout pricing, and how to get an accurate quotation for your home.",
  heroImage: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT",
  labourMultiplier: 1.0,
  pricingTiers: [
    {
      tier: "budget",
      label: "Budget",
      range: "₹80,000–₹2,00,000",
      features: [
        "Laminate or PVC finish shutters",
        "BWR plywood or HMR board carcass",
        "Local hardware (soft-close optional)",
        "Granite or tiles countertop",
        "Suitable for 8×8 to 10×8 kitchens",
      ],
    },
    {
      tier: "mid",
      label: "Mid-Range",
      range: "₹2,00,000–₹5,00,000",
      features: [
        "Acrylic or membrane finish shutters",
        "Marine-grade BWR plywood carcass",
        "Hettich or Hafele soft-close hardware",
        "Quartz or engineered stone countertop",
        "Suitable for 10×10 to 12×10 kitchens",
      ],
    },
    {
      tier: "premium",
      label: "Premium",
      range: "₹5,00,000–₹12,00,000+",
      features: [
        "PU finish, glass, or veneer shutters",
        "Imported Blum hardware throughout",
        "Island or peninsula layout option",
        "Premium quartz or marble countertop",
        "Appliance integration and lighting included",
      ],
    },
  ],
  testimonials: [
    {
      name: "Ankit Sharma",
      location: "Vasant Kunj, Delhi",
      text: "FurniRevive gave us a detailed breakdown of every cost component before we signed anything. The final bill matched the quote exactly. Highly recommend for anyone confused about kitchen pricing.",
      rating: 5,
    },
    {
      name: "Reena Gupta",
      location: "DLF Phase 3, Gurgaon",
      text: "We compared 5 vendors. FurniRevive was the only one who explained cost per sq ft clearly and showed us exactly what we were paying for. Transparent and professional.",
      rating: 5,
    },
    {
      name: "Vikram Nair",
      location: "Sector 137, Noida",
      text: "Great value for a mid-range acrylic kitchen. The Hettich hardware and quartz countertop together came within our ₹3L budget. No hidden charges at all.",
      rating: 5,
    },
  ],
  faqs: [
    {
      q: "What is the average price of a modular kitchen in India?",
      a: "The average modular kitchen price in India ranges from ₹1.5 lakh to ₹4 lakh for a standard 10×10 ft kitchen. Budget kitchens with laminate finishes start at ₹80,000, mid-range acrylic kitchens cost ₹2L–₹5L, and premium PU or glass kitchens with imported hardware can go up to ₹12L+.",
    },
    {
      q: "What is the modular kitchen cost per sq ft?",
      a: "Modular kitchen cost per sq ft in India: ₹1,200–₹1,800 per sq ft for budget laminate, ₹1,800–₹3,000 per sq ft for mid-range acrylic or membrane, and ₹3,000–₹6,000+ per sq ft for premium PU, glass, or veneer finishes. Note: this refers to the area of cabinet surface, not floor area.",
    },
    {
      q: "What affects the price of a modular kitchen?",
      a: "Key cost drivers: (1) Shutter finish — laminate is cheapest, acrylic mid-range, PU/glass premium. (2) Carcass material — HMR board is budget, BWR plywood is mid-range. (3) Hardware brand — local vs Hettich vs Blum. (4) Countertop — granite/tiles vs quartz vs marble. (5) Layout complexity — straight is simplest, island is most complex. (6) Kitchen size.",
    },
    {
      q: "How do I get an accurate modular kitchen quotation?",
      a: "For an accurate quote: (1) Measure your kitchen dimensions (length × width in ft). (2) Choose a shutter finish (laminate, acrylic, PU). (3) Decide on hardware brand. (4) Pick a countertop material. Share these with FurniRevive for a free detailed quotation with no hidden charges.",
    },
    {
      q: "Are modular kitchen prices negotiable?",
      a: "Material and hardware costs are largely fixed (market rates). Labour costs have some flexibility. FurniRevive offers fixed, transparent pricing — the quotation you receive is the final bill. We do not inflate prices to offer discounts.",
    },
    {
      q: "How does modular kitchen price vary by city?",
      a: "Labour costs vary: Gurgaon is typically 8–12% higher than Delhi (base). Noida is 3–5% lower than Delhi. Faridabad and Ghaziabad are 10–15% lower. Material costs are similar across NCR. For accurate city-specific pricing, see our Delhi, Gurgaon, Noida, Faridabad and Ghaziabad cost guides.",
    },
  ],
};
