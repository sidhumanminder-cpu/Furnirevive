import { createFileRoute } from "@tanstack/react-router";
import ModularKitchenTricityPage from "@/pages/modular-kitchen/tricity/page.tsx";

export const Route = createFileRoute("/modular-kitchen-tricity/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen in Chandigarh Tricity — Design & Installation | FurniRevive" },
      { name: "description", content: "Custom modular kitchen design and installation across Chandigarh, Mohali & Panchkula (Tricity). Free design consultation, 10-year warranty. 390+ kitchens completed." },
      { name: "keywords", content: "modular kitchen, modular kitchen chandigarh tricity, modular kitchen design chandigarh tricity, modular kitchen price chandigarh tricity" },
      { name: "twitter:description", content: "Custom modular kitchen design and installation across Chandigarh, Mohali & Panchkula (Tricity). Free design consultation, 10-year warranty. 390+ kitchens completed." },
      { name: "twitter:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { name: "twitter:title", content: "Modular Kitchen in Chandigarh Tricity — Design & Installation | FurniRevive" },
      { property: "og:title", content: "Modular Kitchen in Chandigarh Tricity — Design & Installation | FurniRevive" },
      { property: "og:description", content: "Custom modular kitchen design and installation across Chandigarh, Mohali & Panchkula (Tricity). Free design consultation, 10-year warranty. 390+ kitchens completed." },
      { property: "og:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { property: "og:url", content: "https://furnirevive.com/modular-kitchen-tricity" },
      { property: "og:site_name", content: "FurniRevive" },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Modular Kitchens", "item": "https://furnirevive.com/modular-kitchen" }, { "@type": "ListItem", "position": 3, "name": "Chandigarh Tricity", "item": "https://furnirevive.com/modular-kitchen-tricity" }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹₹", "openingHours": "Mo-Su 08:00-20:00", "areaServed": "Chandigarh, Mohali, Panchkula, India" } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much does a modular kitchen cost in Chandigarh Tricity?", "acceptedAnswer": { "@type": "Answer", "text": "Modular kitchen prices in Chandigarh, Mohali, and Panchkula range from ₹1.2L to ₹7L depending on layout, material finish, and hardware. Laminate kitchens start lower; premium PU and glass finish with imported hardware are at the higher end. FurniRevive offers transparent, itemised quotes." } }, { "@type": "Question", "name": "Do you serve all three Tricity cities — Chandigarh, Mohali, and Panchkula?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — FurniRevive provides complete modular kitchen design and installation across all three Tricity cities. We serve all Chandigarh sectors, all Mohali phases and sectors, and all Panchkula sectors including MDC areas." } }, { "@type": "Question", "name": "How long does modular kitchen installation take in Tricity?", "acceptedAnswer": { "@type": "Answer", "text": "Most FurniRevive modular kitchen projects in Tricity complete within 14–21 days from design approval. The process includes 3D design, manufacturing at our factory, and professional installation by our local team." } }, { "@type": "Question", "name": "What warranty do FurniRevive kitchens carry?", "acceptedAnswer": { "@type": "Answer", "text": "Every FurniRevive modular kitchen comes with a 10-year structural warranty on the carcass and hardware fittings, plus a 5-year finish warranty on shutters and surfaces. We also provide 6 months of free post-installation support." } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ModularKitchenTricityPage />
  );
}
