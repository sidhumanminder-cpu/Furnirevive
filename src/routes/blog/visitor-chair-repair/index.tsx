import { createFileRoute } from "@tanstack/react-router";
import VisitorChairRepairPost from "@/pages/blog/visitor-chair-repair.tsx";

export const Route = createFileRoute("/blog/visitor-chair-repair/")({
  head: () => ({
    meta: [
      { title: "Visitor & Reception Chair Repair: Corporate Office Guide | FurniRevive" },
      { name: "description", content: "Visitor and reception chair repair for corporate offices — fix wobbly frames, torn upholstery, and broken armrests. Bulk repair from ₹500/chair in Delhi NCR." },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "Article", "headline": "Visitor & Reception Chair Repair: Corporate Office Guide", "description": "Visitor and reception chair repair for corporate offices — fix wobbly frames, torn upholstery, and broken armrests. Bulk repair from ₹500/chair in Delhi NCR.", "image": "", "datePublished": "2026-03-18", "dateModified": "2026-07-21", "author": { "@type": "Organization", "name": "FurniRevive", "url": "https://furnirevive.com" }, "publisher": { "@type": "Organization", "name": "FurniRevive", "url": "https://furnirevive.com" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://furnirevive.com/blog/visitor-chair-repair" } } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How many visitor chairs can you repair per day?", "acceptedAnswer": { "@type": "Answer", "text": "Our team completes 20–30 visitor chair reupholstery jobs per day on-site. For 50+ chairs, we can deploy two teams for faster turnaround." } }, { "@type": "Question", "name": "Can you match our corporate brand colours?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer 200+ colour options and can do Pantone matching. We bring physical swatches to your office for approval before starting." } }, { "@type": "Question", "name": "Do you repair tandem/beam seating?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we repair all types of visitor seating including tandem beam seats, individual visitors, lounge chairs, and reception sofas." } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://furnirevive.com/blog" }, { "@type": "ListItem", "position": 3, "name": "Visitor & Reception Chair Repair: Corporate Office Guide", "item": "https://furnirevive.com/blog/visitor-chair-repair" }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <VisitorChairRepairPost />
  );
}
