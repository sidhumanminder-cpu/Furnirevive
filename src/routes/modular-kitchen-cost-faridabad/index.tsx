import { createFileRoute } from "@tanstack/react-router";
import ModularKitchenCostFaridabadPage from "@/pages/modular-kitchen/cost-faridabad/page.tsx";

export const Route = createFileRoute("/modular-kitchen-cost-faridabad/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen Cost in Faridabad 2025 — Complete Pricing Guide | FurniRevive" },
      { name: "description", content: "Modular kitchen cost in Faridabad: ₹80,000–₹5L+ depending on size, material and layout. Serving NIT, Old Faridabad, Neharpar and all sectors. Free design consultation." },
      { name: "keywords", content: "modular kitchen, modular kitchen cost faridabad, modular kitchen price faridabad" },
      { name: "twitter:description", content: "Modular kitchen cost in Faridabad: ₹80,000–₹5L+ depending on size, material and layout. Serving NIT, Old Faridabad, Neharpar and all sectors. Free design consultation." },
      { name: "twitter:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { name: "twitter:title", content: "Modular Kitchen Cost in Faridabad 2025 — Complete Pricing Guide | FurniRevive" },
      { property: "og:title", content: "Modular Kitchen Cost in Faridabad 2025 — Complete Pricing Guide | FurniRevive" },
      { property: "og:description", content: "Modular kitchen cost in Faridabad: ₹80,000–₹5L+ depending on size, material and layout. Serving NIT, Old Faridabad, Neharpar and all sectors. Free design consultation." },
      { property: "og:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { property: "og:url", content: "https://furnirevive.com/modular-kitchen-cost-faridabad" },
      { property: "og:site_name", content: "FurniRevive" },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Modular Kitchen", "item": "https://furnirevive.com/modular-kitchen" }, { "@type": "ListItem", "position": 3, "name": "Faridabad Kitchen Cost", "item": "https://furnirevive.com/modular-kitchen-cost-faridabad" }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much does a modular kitchen cost in Faridabad?", "acceptedAnswer": { "@type": "Answer", "text": "A modular kitchen in Faridabad costs between ₹80,000 and ₹5 lakh depending on the size, layout, and material. Budget laminate kitchens start at ₹80K, mid-range acrylic kitchens range from ₹1.8L–₹4L, and premium PU kitchens go up to ₹8L+." } }, { "@type": "Question", "name": "Do you serve all areas of Faridabad?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. FurniRevive serves NIT Faridabad, Old Faridabad, Sector 21C, Neharpar, Ballabhgarh, Sectors 15, 16, 46, 88, and all other sectors of Faridabad." } }, { "@type": "Question", "name": "Is Faridabad cheaper than Delhi for modular kitchens?", "acceptedAnswer": { "@type": "Answer", "text": "Labour in Faridabad is around 10% cheaper than Delhi. Since Faridabad is part of our standard NCR service zone, there are no extra travel charges." } }, { "@type": "Question", "name": "What countertop options are available in Faridabad?", "acceptedAnswer": { "@type": "Answer", "text": "We offer granite (most affordable), quartz (mid-range), engineered stone, and stainless steel countertops. All countertops are cut and fitted on-site." } }, { "@type": "Question", "name": "How long does installation take in Faridabad?", "acceptedAnswer": { "@type": "Answer", "text": "Standard installation in Faridabad takes 10–14 working days including measurement, manufacturing in our workshop, and on-site installation (3–4 days)." } }, { "@type": "Question", "name": "Do you provide a warranty for Faridabad installations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All FurniRevive installations come with a 10-year warranty on the carcass and shutters, and a 1-year warranty on hardware." } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ModularKitchenCostFaridabadPage />
  );
}
