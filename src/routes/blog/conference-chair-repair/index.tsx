import { createFileRoute } from "@tanstack/react-router";
import ConferenceChairRepairPost from "@/pages/blog/conference-chair-repair.tsx";

export const Route = createFileRoute("/blog/conference-chair-repair/")({
  head: () => ({
    meta: [
      { title: "Conference Room Chair Repair: Bulk Repair & AMC Guide | FurniRevive" },
      { name: "description", content: "Conference room chair repair for corporates — bulk reupholstery, mechanism repair, and AMC for boardroom chairs. On-site service in Delhi NCR from ₹800/chair." },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "Article", "headline": "Conference Room Chair Repair: Bulk Repair & AMC Guide", "description": "Conference room chair repair for corporates — bulk reupholstery, mechanism repair, and AMC for boardroom chairs. On-site service in Delhi NCR from ₹800/chair.", "image": "", "datePublished": "2026-03-25", "dateModified": "2026-07-21", "author": { "@type": "Organization", "name": "FurniRevive", "url": "https://furnirevive.com" }, "publisher": { "@type": "Organization", "name": "FurniRevive", "url": "https://furnirevive.com" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://furnirevive.com/blog/conference-chair-repair" } } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can you repair conference chairs after office hours?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer after-hours and weekend service specifically for boardroom and conference room repairs to avoid disruption." } }, { "@type": "Question", "name": "How do you ensure all chairs match after repair?", "acceptedAnswer": { "@type": "Answer", "text": "We always use material from the same batch for all chairs in a set, match foam density, and calibrate mechanisms to identical settings." } }, { "@type": "Question", "name": "Do you provide leather conference chair repair?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we handle genuine leather, bonded leather, and leatherette conference chairs. We can colour-match existing leather or do full re-covering." } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://furnirevive.com/blog" }, { "@type": "ListItem", "position": 3, "name": "Conference Room Chair Repair: Bulk Repair & AMC Guide", "item": "https://furnirevive.com/blog/conference-chair-repair" }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ConferenceChairRepairPost />
  );
}
