import { createFileRoute } from "@tanstack/react-router";
import MeshChairRepairGuidePost from "@/pages/blog/mesh-chair-repair-guide.tsx";

export const Route = createFileRoute("/blog/mesh-chair-repair-guide/")({
  head: () => ({
    meta: [
      { title: "Mesh Office Chair Repair: Torn Mesh, Broken Frame & Lumbar Guide | FurniRevive" },
      { name: "description", content: "Mesh office chair repair guide — fix torn mesh, broken back frames, sagging lumbar support. Costs ₹1,500–₹4,000. On-site service for corporates in Delhi NCR." },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://furnirevive.com#business", "name": "FurniRevive", "telephone": "+919217999355", "url": "https://furnirevive.com", "priceRange": "₹500–₹25,000", "areaServed": [{ "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Delhi" } }, { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }, { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Greater Noida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Kaushambi", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Vasundhara", "containedInPlace": { "@type": "AdministrativeArea", "name": "Uttar Pradesh" } }, { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "AdministrativeArea", "name": "Chandigarh" } }, { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "AdministrativeArea", "name": "Punjab" } }, { "@type": "City", "name": "Panchkula", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haryana" } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "Article", "headline": "Mesh Office Chair Repair: Torn Mesh, Broken Frame & Lumbar Guide", "description": "Mesh office chair repair guide — fix torn mesh, broken back frames, sagging lumbar support. Costs ₹1,500–₹4,000. On-site service for corporates in Delhi NCR.", "image": "", "datePublished": "2026-02-22", "dateModified": "2026-07-21", "author": { "@type": "Organization", "name": "FurniRevive", "url": "https://furnirevive.com" }, "publisher": { "@type": "Organization", "name": "FurniRevive", "url": "https://furnirevive.com" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://furnirevive.com/blog/mesh-chair-repair-guide" } } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can torn mesh be repaired?", "acceptedAnswer": { "@type": "Answer", "text": "Small tears (under 5 cm) can be patched for ₹800–₹1,500. Larger tears require full mesh panel replacement at ₹1,500–₹4,000." } }, { "@type": "Question", "name": "How long does mesh replacement last?", "acceptedAnswer": { "@type": "Answer", "text": "Quality replacement mesh lasts 4–6 years with regular use. Premium elastomeric mesh can last 7–10 years." } }, { "@type": "Question", "name": "Do you repair Herman Miller mesh chairs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we service all premium brands including Herman Miller Aeron, Steelcase Leap, and Haworth. We use compatible high-quality mesh materials." } }] } },
      { "script:ld+json": { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://furnirevive.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://furnirevive.com/blog" }, { "@type": "ListItem", "position": 3, "name": "Mesh Office Chair Repair: Torn Mesh, Broken Frame & Lumbar Guide", "item": "https://furnirevive.com/blog/mesh-chair-repair-guide" }] } },
    ] as Array<Record<string, unknown>>,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MeshChairRepairGuidePost />
  );
}
