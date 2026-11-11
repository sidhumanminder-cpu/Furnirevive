import { createFileRoute } from "@tanstack/react-router";
import ModularKitchenNoidaPage from "@/pages/modular-kitchen/noida/page.tsx";

export const Route = createFileRoute("/modular-kitchen-noida/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen in Noida — Custom Design & Installation | FurniRevive" },
      { name: "description", content: "Custom modular kitchen design and installation in Noida. Serving Sector 150, Sector 137, Sector 62, Indirapuram and more. Free design consultation, 10-year warranty." },
      { name: "keywords", content: "modular kitchen, modular kitchen noida, modular kitchen design noida, modular kitchen price noida" },
      { name: "twitter:description", content: "Custom modular kitchen design and installation in Noida. Serving Sector 150, Sector 137, Sector 62, Indirapuram and more. Free design consultation, 10-year warranty." },
      { name: "twitter:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { name: "twitter:title", content: "Modular Kitchen in Noida — Custom Design & Installation | FurniRevive" },
      { property: "og:title", content: "Modular Kitchen in Noida — Custom Design & Installation | FurniRevive" },
      { property: "og:description", content: "Custom modular kitchen design and installation in Noida. Serving Sector 150, Sector 137, Sector 62, Indirapuram and more. Free design consultation, 10-year warranty." },
      { property: "og:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { property: "og:url", content: "https://furnirevive.com/modular-kitchen-noida" },
      { property: "og:site_name", content: "FurniRevive" },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Modular Kitchens", "item": "https://furnirevive.com/modular-kitchen" }, { "@type": "ListItem", "position": 3, "name": "Noida", "item": "https://furnirevive.com/modular-kitchen-noida" }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹₹", "openingHours": "Mo-Su 08:00-20:00", "areaServed": "Noida, Uttar Pradesh, India" } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much does a modular kitchen cost in Noida?", "acceptedAnswer": { "@type": "Answer", "text": "In Noida, modular kitchen costs range from around ₹75,000 for a basic laminate kitchen to ₹5+ lakhs for a premium custom kitchen. The final price depends on kitchen size, shutter material, hardware brand, and countertop type." } }, { "@type": "Question", "name": "Which areas in Noida do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve the Expressway sectors including Sector 150, Sector 137, Sector 100 and Sector 62, along with Indirapuram and surrounding gated societies — with more areas being added." } }, { "@type": "Question", "name": "Do you renovate kitchens in existing Noida apartments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle full kitchen renovations in existing Noida apartments and societies — including removal of the old kitchen, plumbing and electrical adjustments, and complete modular installation." } }, { "@type": "Question", "name": "How long does installation take in Noida?", "acceptedAnswer": { "@type": "Answer", "text": "Manufacturing takes 3–4 weeks after your design is finalised. On-site installation is typically completed in 5–7 days." } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ModularKitchenNoidaPage />
  );
}
