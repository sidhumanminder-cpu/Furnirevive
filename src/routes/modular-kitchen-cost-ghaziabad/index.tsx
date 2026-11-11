import { createFileRoute } from "@tanstack/react-router";
import ModularKitchenCostGhaziabadPage from "@/pages/modular-kitchen/cost-ghaziabad/page.tsx";

export const Route = createFileRoute("/modular-kitchen-cost-ghaziabad/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen Cost in Ghaziabad 2025 — Complete Pricing Guide | FurniRevive" },
      { name: "description", content: "Modular kitchen cost in Ghaziabad: ₹80,000–₹5L+ depending on size, material and layout. Serving Vaishali, Indirapuram, Raj Nagar Extension and all areas. Free design consultation." },
      { name: "keywords", content: "modular kitchen, modular kitchen cost ghaziabad, modular kitchen price ghaziabad" },
      { name: "twitter:description", content: "Modular kitchen cost in Ghaziabad: ₹80,000–₹5L+ depending on size, material and layout. Serving Vaishali, Indirapuram, Raj Nagar Extension and all areas. Free design consultation." },
      { name: "twitter:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { name: "twitter:title", content: "Modular Kitchen Cost in Ghaziabad 2025 — Complete Pricing Guide | FurniRevive" },
      { property: "og:title", content: "Modular Kitchen Cost in Ghaziabad 2025 — Complete Pricing Guide | FurniRevive" },
      { property: "og:description", content: "Modular kitchen cost in Ghaziabad: ₹80,000–₹5L+ depending on size, material and layout. Serving Vaishali, Indirapuram, Raj Nagar Extension and all areas. Free design consultation." },
      { property: "og:image", content: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT" },
      { property: "og:url", content: "https://furnirevive.com/modular-kitchen-cost-ghaziabad" },
      { property: "og:site_name", content: "FurniRevive" },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Modular Kitchen", "item": "https://furnirevive.com/modular-kitchen" }, { "@type": "ListItem", "position": 3, "name": "Ghaziabad Kitchen Cost", "item": "https://furnirevive.com/modular-kitchen-cost-ghaziabad" }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much does a modular kitchen cost in Ghaziabad?", "acceptedAnswer": { "@type": "Answer", "text": "A modular kitchen in Ghaziabad costs between ₹80,000 and ₹5 lakh depending on size, layout, and material. Budget laminate kitchens start at ₹80K, mid-range kitchens from ₹1.8L–₹4L, and premium kitchens go up to ₹8L+." } }, { "@type": "Question", "name": "Which areas of Ghaziabad does FurniRevive serve?", "acceptedAnswer": { "@type": "Answer", "text": "FurniRevive serves all of Ghaziabad including Vaishali, Indirapuram, Raj Nagar Extension, Crossings Republik, Kaushambi, and surrounding areas." } }, { "@type": "Question", "name": "Is there any extra travel charge for Ghaziabad?", "acceptedAnswer": { "@type": "Answer", "text": "No. Ghaziabad is within our standard NCR service zone. There are no extra travel charges for site visits or installations." } }, { "@type": "Question", "name": "How long does installation take in Ghaziabad?", "acceptedAnswer": { "@type": "Answer", "text": "Standard installation takes 10–14 working days from measurement to completion. The on-site installation phase typically takes 3–4 days." } }, { "@type": "Question", "name": "Can I see a completed kitchen in Ghaziabad before ordering?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can arrange a visit to a recently completed kitchen project in your locality on request. Call us or WhatsApp to schedule." } }, { "@type": "Question", "name": "Do you provide 3D design for Ghaziabad customers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All FurniRevive customers get a free 3D kitchen design before any payment is made. The design includes exact measurements, material finishes, and hardware specifications." } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ModularKitchenCostGhaziabadPage />
  );
}
