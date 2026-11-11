import { createFileRoute } from "@tanstack/react-router";
import KitchenBlogIndexPage from "@/pages/blog/modular-kitchen/page.tsx";

export const Route = createFileRoute("/blog/modular-kitchen/")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen Guides & Articles | FurniRevive" },
      { name: "description", content: "Expert modular kitchen guides — layout comparisons, material advice, cost breakdowns, city guides, and planning resources for Delhi NCR homeowners." },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://furnirevive.com/blog" }, { "@type": "ListItem", "position": 3, "name": "Modular Kitchens", "item": "https://furnirevive.com/blog/modular-kitchen" }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "CollectionPage", "name": "Modular Kitchen Guides & Articles", "description": "Expert modular kitchen guides — layout comparisons, material advice, cost breakdowns, city guides, and planning resources for Delhi NCR homeowners.", "url": "https://furnirevive.com/blog/modular-kitchen", "publisher": { "@type": "Organization", "name": "FurniRevive", "url": "https://furnirevive.com" } } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <KitchenBlogIndexPage />
  );
}
