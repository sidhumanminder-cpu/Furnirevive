import { createFileRoute } from "@tanstack/react-router";
import ModularKitchenDelhiPage from "@/pages/modular-kitchen/delhi/page.tsx";

export const Route = createFileRoute("/modular-kitchen-delhi/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen in Delhi — Custom Design & Installation | FurniRevive" },
      { name: "description", content: "Custom modular kitchen design and installation across Delhi. Serving South Delhi, Greater Kailash, Vasant Kunj, Defence Colony, Dwarka and more. Free design consultation, 10-year warranty." },
      { name: "keywords", content: "modular kitchen, modular kitchen delhi, modular kitchen design delhi, modular kitchen price delhi" },
      { name: "twitter:description", content: "Custom modular kitchen design and installation across Delhi. Serving South Delhi, Greater Kailash, Vasant Kunj, Defence Colony, Dwarka and more. Free design consultation, 10-year warranty." },
      { name: "twitter:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { name: "twitter:title", content: "Modular Kitchen in Delhi — Custom Design & Installation | FurniRevive" },
      { property: "og:title", content: "Modular Kitchen in Delhi — Custom Design & Installation | FurniRevive" },
      { property: "og:description", content: "Custom modular kitchen design and installation across Delhi. Serving South Delhi, Greater Kailash, Vasant Kunj, Defence Colony, Dwarka and more. Free design consultation, 10-year warranty." },
      { property: "og:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { property: "og:url", content: "https://furnirevive.com/modular-kitchen-delhi" },
      { property: "og:site_name", content: "FurniRevive" },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Modular Kitchens", "item": "https://furnirevive.com/modular-kitchen" }, { "@type": "ListItem", "position": 3, "name": "Delhi", "item": "https://furnirevive.com/modular-kitchen-delhi" }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹₹", "openingHours": "Mo-Su 08:00-20:00", "areaServed": "Delhi, India" } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much does a modular kitchen cost in Delhi?", "acceptedAnswer": { "@type": "Answer", "text": "In Delhi, modular kitchen costs range from ₹80,000 for a basic laminate kitchen to ₹10+ lakhs for a premium custom kitchen. Key factors: kitchen size, shutter material (laminate/acrylic/PU), hardware brand, and countertop type." } }, { "@type": "Question", "name": "Which areas in Delhi do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve South Delhi, Greater Kailash, Vasant Kunj, Defence Colony, Dwarka, Rohini, Pitampura, Punjabi Bagh, Janakpuri, and Rajouri Garden — with more areas being added." } }, { "@type": "Question", "name": "Do you do old home kitchen renovations in Delhi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We specialise in full kitchen renovations — including demolition, plumbing adjustments, and complete modular kitchen installation in older Delhi homes, builder floors, and DDA flats." } }, { "@type": "Question", "name": "How long does installation take in Delhi?", "acceptedAnswer": { "@type": "Answer", "text": "Manufacturing takes 3–4 weeks after design finalisation. Site installation is completed in 5–7 days." } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ModularKitchenDelhiPage />
  );
}
