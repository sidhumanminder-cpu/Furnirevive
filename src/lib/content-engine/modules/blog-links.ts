/**
 * Content Engine — Blog Links Module
 *
 * Curated guide/blog post links per service.
 * Static config — no database query needed.
 * Domain data only.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { BlogLinksSectionData, BlogLinkItem } from "../types.ts";

const SERVICE_BLOG_LINKS: Record<string, BlogLinkItem[]> = {
  "sofa-repair": [
    {
      title: "Sofa Repair vs Replacement: When Does It Make Sense?",
      href: "/blog/sofa-repair-vs-replacement",
      excerpt: "A practical guide to deciding when to repair your sofa and when to buy new.",
      imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    },
    {
      title: "How Much Does Sofa Repair Cost in Delhi?",
      href: "/sofa-repair-cost-delhi",
      excerpt: "Complete pricing guide for sofa foam, spring, frame, and upholstery repair in Delhi.",
      imageUrl: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&q=80",
    },
    {
      title: "What Foam Density is Right for Your Sofa?",
      href: "/blog/sofa-foam-density-guide",
      excerpt: "32D, 40D, HR foam — what each means and how it affects comfort and longevity.",
      imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80",
    },
  ],
  "recliner-repair": [
    {
      title: "Recliner Motor Repair vs Replacement: What to Expect",
      href: "/blog/recliner-motor-repair-guide",
      excerpt: "Electric recliner not working? Here's how technicians diagnose and fix motor issues.",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    },
    {
      title: "Recliner Repair Cost in Delhi",
      href: "/recliner-repair-cost-delhi",
      excerpt: "Pricing for motor, mechanism, leather, and foam repair for all recliner brands.",
      imageUrl: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80",
    },
    {
      title: "How to Maintain Your Recliner",
      href: "/blog/recliner-maintenance-guide",
      excerpt: "Simple care tips to extend the life of your electric or manual recliner.",
      imageUrl: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&q=80",
    },
  ],
  "furniture-repair": [
    {
      title: "Furniture Repair vs Buying New: A Cost Comparison",
      href: "/blog/furniture-repair-vs-buying-new",
      excerpt: "How to assess whether repairing your furniture is worth it financially.",
      imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80",
    },
    {
      title: "Furniture Repair Cost in Delhi",
      href: "/blog/furniture-repair-cost-delhi",
      excerpt: "Pricing guide for sofa, wooden furniture, wardrobe, and bed repairs.",
      imageUrl: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&q=80",
    },
    {
      title: "How to Care for Wooden Furniture",
      href: "/blog/wooden-furniture-care-guide",
      excerpt: "Preventive tips to extend the lifespan of wooden sofas, beds, and wardrobes.",
      imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80",
    },
  ],
  "sofa-upholstery": [
    {
      title: "How to Choose the Right Fabric for Sofa Reupholstery",
      href: "/blog/sofa-upholstery-fabric-guide",
      excerpt: "Cotton, velvet, leather, leatherette — what each fabric offers and costs.",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    },
    {
      title: "Sofa Upholstery Cost in Delhi",
      href: "/sofa-upholstery-cost-delhi",
      excerpt: "Complete pricing for fabric change, leather reupholstery, and foam replacement.",
      imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    },
    {
      title: "Reupholstery vs New Sofa: Which Saves More Money?",
      href: "/blog/reupholstery-vs-new-sofa",
      excerpt: "A cost and quality comparison to help you decide what's best for your sofa.",
      imageUrl: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&q=80",
    },
  ],
  "office-chair-repair": [
    {
      title: "Office Chair Repair vs Replacement: A Cost Guide",
      href: "/blog/office-chair-repair-cost-guide",
      excerpt: "When does repairing your office chair save money vs buying new? Full cost breakdown for gas lift, wheels, mesh, and leather chairs.",
      imageUrl: "https://hercules-cdn.com/file_wj3de1Goxxj5Lj02YFnTDa7w",
    },
    {
      title: "Gas Lift Replacement Guide: Fix a Sinking Office Chair",
      href: "/blog/gas-lift-replacement-guide",
      excerpt: "Your chair keeps sinking? Here's exactly how technicians diagnose and replace hydraulic gas lifts — with pricing.",
      imageUrl: "https://hercules-cdn.com/file_sWTz3QdbCUwSIj3BkPXP8jVR",
    },
    {
      title: "Bulk Office Chair Repair for Corporates & Co-Working Spaces",
      href: "/blog/bulk-office-chair-repair",
      excerpt: "AMC plans, bulk discounts, and onsite repair programmes for offices with 10+ chairs in Delhi NCR.",
      imageUrl: "https://hercules-cdn.com/file_JOav9LwlWmocZ5MSIz3JsTrU",
    },
  ],
};

export function buildBlogLinks(
  locality: LocalityEntry,
  service: ServiceEntry,
): BlogLinksSectionData {
  const posts = SERVICE_BLOG_LINKS[service.slug] ?? [];

  return {
    id: `${service.slug}-${locality.slug}-blog-links`,
    type: "blog-links",
    version: "v1",
    props: {
      heading: "Helpful Guides & Tips",
      posts,
    },
  };
}
