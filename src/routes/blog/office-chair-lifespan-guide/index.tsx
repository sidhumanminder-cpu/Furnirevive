import { createFileRoute } from "@tanstack/react-router";
import OfficeChairLifespanGuidePost from "@/pages/blog/office-chair-lifespan-guide.tsx";

export const Route = createFileRoute("/blog/office-chair-lifespan-guide/")({
  head: () => ({
    meta: [
      { title: "Office Chair Lifespan: When to Repair vs When to Replace | FurniRevive" },
      { name: "description", content: "How long do office chairs last? Learn the expected lifespan by type, signs of end-of-life, and when repair vs replacement makes sense for your corporate office." },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "Article", "headline": "Office Chair Lifespan: When to Repair vs When to Replace", "description": "How long do office chairs last? Learn the expected lifespan by type, signs of end-of-life, and when repair vs replacement makes sense for your corporate office.", "image": "", "datePublished": "2026-06-02", "dateModified": "2026-07-21", "author": { "@type": "Organization", "name": "FurniRevive", "url": "https://furnirevive.com" }, "publisher": { "@type": "Organization", "name": "FurniRevive", "url": "https://furnirevive.com" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://furnirevive.com/blog/office-chair-lifespan-guide" } } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How long should an office chair last?", "acceptedAnswer": { "@type": "Answer", "text": "Mid-range ergonomic chairs last 5–7 years without maintenance and 8–12 years with proper AMC. Premium chairs can last 12–20 years." } }, { "@type": "Question", "name": "When is a chair too old to repair?", "acceptedAnswer": { "@type": "Answer", "text": "When the base/frame shows cracks, multiple repairs have failed within 2 years, or repair cost exceeds 60% of a new equivalent." } }, { "@type": "Question", "name": "Does warranty affect lifespan?", "acceptedAnswer": { "@type": "Answer", "text": "Not directly, but chairs with longer warranties (5+ years) typically use better materials and are built to last longer." } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://furnirevive.com/blog" }, { "@type": "ListItem", "position": 3, "name": "Office Chair Lifespan: When to Repair vs When to Replace", "item": "https://furnirevive.com/blog/office-chair-lifespan-guide" }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <OfficeChairLifespanGuidePost />
  );
}
