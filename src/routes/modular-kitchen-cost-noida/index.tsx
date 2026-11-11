import { createFileRoute } from "@tanstack/react-router";
import ModularKitchenCostNoidaPage from "@/pages/modular-kitchen/cost-noida/page.tsx";

export const Route = createFileRoute("/modular-kitchen-cost-noida/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen Cost in Noida 2025 — Complete Pricing Guide | FurniRevive" },
      { name: "description", content: "Modular kitchen cost in Noida: ₹85,000–₹6L+ depending on size, material and layout. Get accurate quotes for Sector 150, Indirapuram, and expressway sector homes. Free design consultation." },
      { name: "keywords", content: "modular kitchen, modular kitchen cost noida, modular kitchen price noida" },
      { name: "twitter:description", content: "Modular kitchen cost in Noida: ₹85,000–₹6L+ depending on size, material and layout. Get accurate quotes for Sector 150, Indirapuram, and expressway sector homes. Free design consultation." },
      { name: "twitter:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { name: "twitter:title", content: "Modular Kitchen Cost in Noida 2025 — Complete Pricing Guide | FurniRevive" },
      { property: "og:title", content: "Modular Kitchen Cost in Noida 2025 — Complete Pricing Guide | FurniRevive" },
      { property: "og:description", content: "Modular kitchen cost in Noida: ₹85,000–₹6L+ depending on size, material and layout. Get accurate quotes for Sector 150, Indirapuram, and expressway sector homes. Free design consultation." },
      { property: "og:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { property: "og:url", content: "https://furnirevive.com/modular-kitchen-cost-noida" },
      { property: "og:site_name", content: "FurniRevive" },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Modular Kitchen", "item": "https://furnirevive.com/modular-kitchen" }, { "@type": "ListItem", "position": 3, "name": "Noida Kitchen Cost", "item": "https://furnirevive.com/modular-kitchen-cost-noida" }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much does a modular kitchen cost in Noida?", "acceptedAnswer": { "@type": "Answer", "text": "A modular kitchen in Noida typically costs between ₹85,000 and ₹6 lakh depending on the size, material, layout, and hardware. Budget laminate kitchens start at ₹85K, mid-range acrylic kitchens range from ₹2L–₹4.5L, and premium PU or glass kitchens with imported hardware can go up to ₹10L+." } }, { "@type": "Question", "name": "Is Noida cheaper than Delhi for modular kitchens?", "acceptedAnswer": { "@type": "Answer", "text": "Labour costs in Noida are marginally lower than Delhi (around 5% less). Material costs are similar. The overall difference on a complete project is typically ₹8,000–₹20,000." } }, { "@type": "Question", "name": "Which sectors in Noida does FurniRevive serve?", "acceptedAnswer": { "@type": "Answer", "text": "FurniRevive serves all of Noida including Sector 150, Sector 137, Sector 100, Sector 62, Indirapuram, Sectors 50, 44, 29, 18, and all expressway sectors from Sector 76 to Sector 168." } }, { "@type": "Question", "name": "How long does installation take in Noida?", "acceptedAnswer": { "@type": "Answer", "text": "A standard modular kitchen in Noida takes 10–14 working days from measurement to completion. This includes manufacturing time (7–10 days) and installation (3–4 days)." } }, { "@type": "Question", "name": "Do you serve Greater Noida and Noida Extension?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. FurniRevive serves Greater Noida West (Noida Extension), Jaypee Greens, and other Greater Noida sectors within our standard service area." } }, { "@type": "Question", "name": "What is included in the modular kitchen price?", "acceptedAnswer": { "@type": "Answer", "text": "Our price includes carcass, shutters, hardware, countertop, basic plumbing connections, and installation. Appliances (chimney, hob, sink) and electrical work are charged separately." } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ModularKitchenCostNoidaPage />
  );
}
