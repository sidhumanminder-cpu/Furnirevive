import { createFileRoute } from "@tanstack/react-router";
import ModularKitchenRenovationDelhiPage from "@/pages/modular-kitchen/renovation-delhi/page.tsx";

export const Route = createFileRoute("/modular-kitchen-renovation-delhi/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen Renovation Delhi 2025 — Old Kitchen Makeover Cost & Service | FurniRevive" },
      { name: "description", content: "Modular kitchen renovation in Delhi: replace old kitchen, new cabinets, countertop upgrade, full remodel from ₹50,000. Expert service across South Delhi, Dwarka, Rohini, Vasant Kunj. Free consultation." },
      { name: "keywords", content: "modular kitchen renovation delhi, kitchen renovation delhi, modular kitchen delhi" },
      { property: "og:title", content: "Modular Kitchen Renovation Delhi 2025 — Old Kitchen Makeover Cost & Service | FurniRevive" },
      { property: "og:description", content: "Modular kitchen renovation in Delhi: replace old kitchen, new cabinets, countertop upgrade, full remodel from ₹50,000. Expert service across South Delhi, Dwarka, Rohini, Vasant Kunj. Free consultation." },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ModularKitchenRenovationDelhiPage />
  );
}
