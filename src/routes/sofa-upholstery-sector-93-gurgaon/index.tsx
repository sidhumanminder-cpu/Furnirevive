import { createFileRoute } from "@tanstack/react-router";
import SofaUpholsterySector93Gurgaon from "@/pages/services/programmatic/sofa-upholstery-sector-93-gurgaon.tsx";

export const Route = createFileRoute("/sofa-upholstery-sector-93-gurgaon/")({
  staticData: { ownCanonical: true },
  head: () => ({
    meta: [
      { title: "Sofa Reupholstery in Sector 93, Gurgaon – FurniRevive" },
      { name: "description", content: "Get expert sofa reupholstery and upholstery services in Sector 93, Gurgaon. Call 92179 99355." },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
    ] as Array<Record<string, unknown>>,
    links: [
      { rel: "canonical", href: "https://furnirevive.com/sofa-repair-sector-93-gurgaon" },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SofaUpholsterySector93Gurgaon />
  );
}
