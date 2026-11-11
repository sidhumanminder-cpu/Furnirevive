import { createFileRoute } from "@tanstack/react-router";
import ModularKitchenFaridabadPage from "@/pages/modular-kitchen/faridabad/page.tsx";

export const Route = createFileRoute("/modular-kitchen-faridabad/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen in Faridabad — Custom Design & Installation | FurniRevive" },
      { name: "description", content: "Custom modular kitchen design and installation in Faridabad. Serving Sector 15, Sector 16, NIT, BPTP Park Lands and more. Free design consultation, 10-year warranty." },
      { name: "keywords", content: "modular kitchen, modular kitchen faridabad, modular kitchen design faridabad, modular kitchen price faridabad" },
      { name: "twitter:description", content: "Custom modular kitchen design and installation in Faridabad. Serving Sector 15, Sector 16, NIT, BPTP Park Lands and more. Free design consultation, 10-year warranty." },
      { name: "twitter:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { name: "twitter:title", content: "Modular Kitchen in Faridabad — Custom Design & Installation | FurniRevive" },
      { property: "og:title", content: "Modular Kitchen in Faridabad — Custom Design & Installation | FurniRevive" },
      { property: "og:description", content: "Custom modular kitchen design and installation in Faridabad. Serving Sector 15, Sector 16, NIT, BPTP Park Lands and more. Free design consultation, 10-year warranty." },
      { property: "og:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { property: "og:url", content: "https://furnirevive.com/modular-kitchen-faridabad" },
      { property: "og:site_name", content: "FurniRevive" },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Modular Kitchens", "item": "https://furnirevive.com/modular-kitchen" }, { "@type": "ListItem", "position": 3, "name": "Faridabad", "item": "https://furnirevive.com/modular-kitchen-faridabad" }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹₹", "openingHours": "Mo-Su 08:00-20:00", "areaServed": "Faridabad, Haryana, India" } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much does a modular kitchen cost in Faridabad?", "acceptedAnswer": { "@type": "Answer", "text": "In Faridabad, modular kitchen costs typically range from around ₹70,000 for a basic laminate kitchen to ₹3+ lakhs for a premium custom kitchen. The final price depends on kitchen size, shutter material, hardware brand, and countertop." } }, { "@type": "Question", "name": "Which areas in Faridabad do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve Sector 15, Sector 16, the NIT area, Old Faridabad, Ballabhgarh, Neharpar, and gated townships like BPTP Park Lands and Omaxe — with more areas being added." } }, { "@type": "Question", "name": "Do you renovate kitchens in older Faridabad homes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We specialise in full renovations of older NIT-area and sector kitchens — including demolition, plumbing and electrical adjustments, and complete modular installation." } }, { "@type": "Question", "name": "How long does installation take in Faridabad?", "acceptedAnswer": { "@type": "Answer", "text": "Manufacturing takes 3–4 weeks after your design is finalised. On-site installation is usually completed in 5–7 days." } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ModularKitchenFaridabadPage />
  );
}
