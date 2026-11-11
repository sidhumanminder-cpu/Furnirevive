import { createFileRoute } from "@tanstack/react-router";
import ModularKitchenRenovationGurgaonPage from "@/pages/modular-kitchen/renovation-gurgaon/page.tsx";

export const Route = createFileRoute("/modular-kitchen-renovation-gurgaon/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen Renovation Gurgaon 2025 — Kitchen Remodel & Makeover Cost | FurniRevive" },
      { name: "description", content: "Modular kitchen renovation in Gurgaon: full remodel, cabinet replacement, countertop upgrade from ₹55,000. Expert service across DLF, Golf Course Road, Sushant Lok, Sohna Road. Free consultation." },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ModularKitchenRenovationGurgaonPage />
  );
}
