import { createFileRoute } from "@tanstack/react-router";
import ErgonomicChairCarePost from "@/pages/blog/ergonomic-chair-care.tsx";

export const Route = createFileRoute("/blog/ergonomic-chair-care/")({
  head: () => ({
    meta: [
      { title: "Ergonomic Office Chair Care: Extend Chair Life by 3–5 Years | FurniRevive" },
      { name: "description", content: "Extend your ergonomic office chair's life by 3–5 years with proper care. Maintenance tips for mesh, foam, mechanisms, and adjustable components. Delhi NCR." },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "Article", "headline": "Ergonomic Office Chair Care: Extend Chair Life by 3–5 Years", "description": "Extend your ergonomic office chair's life by 3–5 years with proper care. Maintenance tips for mesh, foam, mechanisms, and adjustable components. Delhi NCR.", "image": "", "datePublished": "2026-04-18", "dateModified": "2026-07-21", "author": { "@type": "Organization", "name": "FurniRevive", "url": "https://furnirevive.com" }, "publisher": { "@type": "Organization", "name": "FurniRevive", "url": "https://furnirevive.com" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://furnirevive.com/blog/ergonomic-chair-care" } } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How long should an ergonomic chair last?", "acceptedAnswer": { "@type": "Answer", "text": "With proper care, a quality ergonomic chair lasts 8–12 years. Without maintenance, the same chair may fail in 4–5 years." } }, { "@type": "Question", "name": "Can I use WD-40 on my chair mechanism?", "acceptedAnswer": { "@type": "Answer", "text": "No, WD-40 attracts dust and gums up mechanisms. Use silicone-based lubricant specifically designed for furniture mechanisms." } }, { "@type": "Question", "name": "How often should ergonomic chairs be serviced?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend quarterly professional service and monthly user-level maintenance for optimal lifespan and performance." } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://furnirevive.com/blog" }, { "@type": "ListItem", "position": 3, "name": "Ergonomic Office Chair Care: Extend Chair Life by 3–5 Years", "item": "https://furnirevive.com/blog/ergonomic-chair-care" }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ErgonomicChairCarePost />
  );
}
