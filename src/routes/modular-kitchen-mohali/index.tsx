import { createFileRoute } from "@tanstack/react-router";
import ModularKitchenMohaliPage from "@/pages/modular-kitchen/mohali/page.tsx";

export const Route = createFileRoute("/modular-kitchen-mohali/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen in Mohali — Custom Design & Installation | FurniRevive" },
      { name: "description", content: "Custom modular kitchen design and installation across Mohali. Serving Aerocity, Phase 1, Phase 7, Sector 66, Sector 70 and all phases. Free design consultation, 10-year warranty." },
      { name: "keywords", content: "modular kitchen, modular kitchen mohali, modular kitchen design mohali, modular kitchen price mohali" },
      { name: "twitter:description", content: "Custom modular kitchen design and installation across Mohali. Serving Aerocity, Phase 1, Phase 7, Sector 66, Sector 70 and all phases. Free design consultation, 10-year warranty." },
      { name: "twitter:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { name: "twitter:title", content: "Modular Kitchen in Mohali — Custom Design & Installation | FurniRevive" },
      { property: "og:title", content: "Modular Kitchen in Mohali — Custom Design & Installation | FurniRevive" },
      { property: "og:description", content: "Custom modular kitchen design and installation across Mohali. Serving Aerocity, Phase 1, Phase 7, Sector 66, Sector 70 and all phases. Free design consultation, 10-year warranty." },
      { property: "og:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { property: "og:url", content: "https://furnirevive.com/modular-kitchen-mohali" },
      { property: "og:site_name", content: "FurniRevive" },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Modular Kitchens", "item": "https://furnirevive.com/modular-kitchen" }, { "@type": "ListItem", "position": 3, "name": "Mohali", "item": "https://furnirevive.com/modular-kitchen-mohali" }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹₹", "openingHours": "Mo-Su 08:00-20:00", "areaServed": "Mohali, Punjab, India" } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much does a modular kitchen cost in Mohali?", "acceptedAnswer": { "@type": "Answer", "text": "In Mohali, modular kitchen costs typically range from ₹1.2 lakh for a budget laminate kitchen to ₹6+ lakhs for a premium PU/glass kitchen. The final price depends on kitchen size, shutter material, hardware brand, and countertop choice." } }, { "@type": "Question", "name": "Which areas in Mohali do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve all phases and sectors in Mohali — including Phase 1, Phase 3B2, Phase 7, Aerocity, IT City, Sector 66, Sector 70, Sector 71, Kharar, Zirakpur, and all newer sectors." } }, { "@type": "Question", "name": "What warranty do you offer on modular kitchens in Mohali?", "acceptedAnswer": { "@type": "Answer", "text": "We offer a comprehensive 10-year warranty on all modular kitchens installed in Mohali, covering manufacturing defects, hardware mechanisms, and structural integrity." } }, { "@type": "Question", "name": "How long does modular kitchen installation take in Mohali?", "acceptedAnswer": { "@type": "Answer", "text": "Manufacturing takes 3–4 weeks after design finalisation. On-site installation is completed in 5–7 days. Total timeline from site visit to handover is typically 5–6 weeks." } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ModularKitchenMohaliPage />
  );
}
