import { createFileRoute } from "@tanstack/react-router";
import SmallModularKitchenDesignsPage from "@/pages/modular-kitchen/small-modular-kitchen-designs/page.tsx";

export const Route = createFileRoute("/small-modular-kitchen-designs/")({
  head: () => ({
    meta: [
      { title: "Small Modular Kitchen Designs 2025 — Compact Kitchen Ideas for 1BHK & 2BHK | FurniRevive" },
      { name: "description", content: "Small modular kitchen designs for 1BHK and 2BHK flats in Delhi NCR. Compact straight, parallel and L-shape kitchens from ₹80,000. Space-saving storage and smart layouts." },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SmallModularKitchenDesignsPage />
  );
}
