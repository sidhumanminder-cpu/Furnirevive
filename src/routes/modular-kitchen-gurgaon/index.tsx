import { createFileRoute } from "@tanstack/react-router";
import ModularKitchenGurgaonPage from "@/pages/modular-kitchen/gurgaon/page.tsx";

export const Route = createFileRoute("/modular-kitchen-gurgaon/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen in Gurgaon — Custom Design & Installation | FurniRevive" },
      { name: "description", content: "Custom modular kitchen design and installation in Gurgaon. Serving DLF Phases, Golf Course Road, Sushant Lok, Sohna Road and more. Free design consultation, 10-year warranty." },
      { name: "keywords", content: "modular kitchen, modular kitchen gurgaon, modular kitchen design gurgaon, modular kitchen price gurgaon" },
      { name: "twitter:description", content: "Custom modular kitchen design and installation in Gurgaon. Serving DLF Phases, Golf Course Road, Sushant Lok, Sohna Road and more. Free design consultation, 10-year warranty." },
      { name: "twitter:image", content: "https://hercules-cdn.com/file_377PCNdLNGIek6MzCyjCt9ck" },
      { name: "twitter:title", content: "Modular Kitchen in Gurgaon — Custom Design & Installation | FurniRevive" },
      { property: "og:title", content: "Modular Kitchen in Gurgaon — Custom Design & Installation | FurniRevive" },
      { property: "og:description", content: "Custom modular kitchen design and installation in Gurgaon. Serving DLF Phases, Golf Course Road, Sushant Lok, Sohna Road and more. Free design consultation, 10-year warranty." },
      { property: "og:image", content: "https://hercules-cdn.com/file_377PCNdLNGIek6MzCyjCt9ck" },
      { property: "og:url", content: "https://furnirevive.com/modular-kitchen-gurgaon" },
      { property: "og:site_name", content: "FurniRevive" },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Modular Kitchens", "item": "https://furnirevive.com/modular-kitchen" }, { "@type": "ListItem", "position": 3, "name": "Gurgaon", "item": "https://furnirevive.com/modular-kitchen-gurgaon" }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹₹", "openingHours": "Mo-Su 08:00-20:00", "areaServed": "Gurgaon, Haryana, India" } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much does a modular kitchen cost in Gurgaon?", "acceptedAnswer": { "@type": "Answer", "text": "In Gurgaon, most projects fall in the ₹1.5L–₹8L range depending on kitchen size, layout, and finish. DLF and Golf Course Road projects often go higher with island units and imported hardware." } }, { "@type": "Question", "name": "Which areas in Gurgaon do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve DLF Phase 1–5, Golf Course Road, Golf Course Extension, Sushant Lok, and Sohna Road — covering the primary premium residential zones of Gurgaon." } }, { "@type": "Question", "name": "Do you design open-plan kitchens in Gurgaon?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open-plan kitchen design is our speciality for Gurgaon's high-rise apartments. We design kitchens that integrate seamlessly with your living and dining space." } }, { "@type": "Question", "name": "Can you install an island kitchen in a Gurgaon apartment?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for apartments with sufficient square footage (typically 200+ sq ft kitchen area). We'll survey your space and advise on feasibility during the free consultation." } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ModularKitchenGurgaonPage />
  );
}
