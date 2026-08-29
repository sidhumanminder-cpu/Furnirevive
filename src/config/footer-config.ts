import type { ReactNode } from "react";
import { POPULAR_CITIES } from "@/lib/seo-constants.ts";

export type FooterService = "repair" | "modular-kitchen" | "wardrobe" | "tv-unit";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

export type FooterConfig = {
  brandTagline: string;
  linkGroups: FooterLinkGroup[];
  copyrightSuffix: string;
};

export const FOOTER_CONFIGS: Record<FooterService, FooterConfig> = {
  repair: {
    brandTagline:
      "Delhi NCR's most trusted furniture repair service. Expert sofa repair, recliner repair, chair repair, wood polish & carpenter home service at your doorstep since 2018.",
    copyrightSuffix: "Furniture Repair Services in Delhi NCR",
    linkGroups: [
      {
        title: "Repair Services",
        links: [
          { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
          { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
          { label: "Recliner Repair Delhi", href: "/recliner-repair-delhi" },
          { label: "Chair Repair Delhi", href: "/chair-repair-delhi" },
          { label: "Furniture Polish Delhi", href: "/furniture-polish-delhi" },
          { label: "Carpenter Home Service", href: "/carpenter-home-service-delhi" },
          { label: "Sofa Upholstery Delhi", href: "/sofa-upholstery-delhi" },
        ],
      },
      {
        title: "Delhi Areas",
        links: [
          { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
          { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
          { label: "Recliner Repair South Delhi", href: "/recliner-repair-south-delhi" },
          { label: "Sofa Repair Dwarka", href: "/sofa-repair-dwarka" },
          { label: "Furniture Repair Rohini", href: "/furniture-repair-rohini" },
          { label: "Sofa Repair East Delhi", href: "/sofa-repair-east-delhi" },
        ],
      },
      {
        title: "Popular Cities",
        links: POPULAR_CITIES.map((c) => ({ label: `Sofa Repair ${c.label}`, href: c.href })),
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/#how-it-works" },
          { label: "Reviews", href: "/#reviews" },
          { label: "Blog", href: "/blog" },
          { label: "Repair Tips & Guides", href: "https://ncrsofarepair.wordpress.com" },
          { label: "NCR Sofa Repair Blog | Medium", href: "https://medium.com/@ncr-sofa-repair-guide" },
          { label: "Contact", href: "/contact" },
          { label: "Book Repair", href: "/book" },
        ],
      },
    ],
  },

  "modular-kitchen": {
    brandTagline:
      "Premium modular kitchen design and installation across Delhi NCR. We create custom kitchens with factory-finished cabinetry, premium hardware, and professional installation.",
    copyrightSuffix: "Modular Kitchen Design & Installation in Delhi NCR",
    linkGroups: [
      {
        title: "Modular Kitchens",
        links: [
          { label: "Modular Kitchen Delhi", href: "/modular-kitchen-delhi" },
          { label: "Modular Kitchen Gurgaon", href: "/modular-kitchen-gurgaon" },
          { label: "All Kitchen Designs", href: "/modular-kitchen" },
          { label: "Modular Kitchen Cost", href: "/modular-kitchen-cost-delhi" },
          { label: "Contact Us", href: "/contact" },
          { label: "Book Consultation", href: "/book" },
        ],
      },
      {
        title: "Layouts & Materials",
        links: [
          { label: "L-Shape Modular Kitchen", href: "/l-shape-modular-kitchen-delhi" },
          { label: "U-Shape Modular Kitchen", href: "/u-shape-modular-kitchen-delhi" },
          { label: "Parallel Modular Kitchen", href: "/parallel-modular-kitchen-delhi" },
          { label: "Island Modular Kitchen", href: "/island-modular-kitchen-delhi" },
          { label: "Acrylic Modular Kitchen", href: "/acrylic-modular-kitchen-delhi" },
          { label: "Laminate Modular Kitchen", href: "/laminate-modular-kitchen-delhi" },
          { label: "PU Finish Kitchen", href: "/pu-modular-kitchen-delhi" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About FurniRevive", href: "/#how-it-works" },
          { label: "Reviews", href: "/#reviews" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },

  wardrobe: {
    brandTagline:
      "Custom modular wardrobes designed and installed across Delhi NCR. Factory-finished cabinetry with premium hardware and professional installation.",
    copyrightSuffix: "Modular Wardrobe Design & Installation in Delhi NCR",
    linkGroups: [
      {
        title: "Modular Wardrobes",
        links: [
          { label: "Modular Wardrobe Delhi", href: "/modular-wardrobe-delhi" },
          { label: "Modular Wardrobe Gurgaon", href: "/modular-wardrobe-gurgaon" },
          { label: "Contact Us", href: "/contact" },
          { label: "Book Consultation", href: "/book" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About FurniRevive", href: "/#how-it-works" },
          { label: "Reviews", href: "/#reviews" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },

  "tv-unit": {
    brandTagline:
      "Custom TV units and entertainment walls designed and installed across Delhi NCR. Factory-finished cabinetry with premium hardware.",
    copyrightSuffix: "TV Unit Design & Installation in Delhi NCR",
    linkGroups: [
      {
        title: "TV Units",
        links: [
          { label: "TV Unit Delhi", href: "/tv-unit-delhi" },
          { label: "TV Unit Gurgaon", href: "/tv-unit-gurgaon" },
          { label: "Contact Us", href: "/contact" },
          { label: "Book Consultation", href: "/book" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About FurniRevive", href: "/#how-it-works" },
          { label: "Reviews", href: "/#reviews" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
};

// Slugs that contain "kitchen" but don't match the pattern-based rules above
const KITCHEN_EXACT_SLUGS = new Set([
  "/open-kitchen-design",
  "/modern-modular-kitchen-designs",
  "/small-modular-kitchen-designs",
  "/modular-kitchen-price",
  "/g-shaped-modular-kitchen",
  "/modular-kitchen-renovation-delhi",
  "/modular-kitchen-renovation-gurgaon",
  "/modular-kitchen-renovation-noida",
  "/kitchen-renovation-cost-delhi",
]);

export function resolveFooterService(pathname: string): FooterService {
  if (
    pathname === "/modular-kitchen" ||
    pathname.startsWith("/modular-kitchen-") ||
    pathname.includes("-modular-kitchen-") ||
    pathname.includes("-modular-kitchen") ||
    pathname.startsWith("/kitchen-") ||
    KITCHEN_EXACT_SLUGS.has(pathname)
  ) {
    return "modular-kitchen";
  }
  if (pathname.startsWith("/blog/modular-kitchen")) {
    return "modular-kitchen";
  }
  return "repair";
}

function isTricityPathname(pathname: string): boolean {
  return (
    pathname.includes("-chandigarh") || pathname.includes("chandigarh-") ||
    pathname.includes("-mohali") || pathname.includes("mohali-") ||
    pathname.includes("-panchkula") || pathname.includes("panchkula-") ||
    pathname.includes("tricity")
  );
}

export function resolveKitchenFooterConfig(pathname: string): FooterConfig {
  if (isTricityPathname(pathname)) {
    return {
      brandTagline: "Premium Modular Kitchen Design & Installation across Chandigarh, Mohali & Panchkula",
      copyrightSuffix: "Modular Kitchen Design & Installation in Chandigarh Tricity",
      linkGroups: [
        {
          title: "Modular Kitchens",
          links: [
            { label: "Modular Kitchen Chandigarh", href: "/modular-kitchen-chandigarh" },
            { label: "Modular Kitchen Mohali", href: "/modular-kitchen-mohali" },
            { label: "Modular Kitchen Panchkula", href: "/modular-kitchen-panchkula" },
            { label: "All Kitchen Designs", href: "/modular-kitchen" },
            { label: "Contact Us", href: "/contact" },
            { label: "Book Consultation", href: "/book" },
          ],
        },
        {
          title: "Layouts & Materials",
          links: [
            { label: "L-Shape Modular Kitchen", href: "/l-shape-modular-kitchen-sector-34-chandigarh" },
            { label: "U-Shape Modular Kitchen", href: "/u-shape-modular-kitchen-sector-34-chandigarh" },
            { label: "Parallel Modular Kitchen", href: "/parallel-modular-kitchen-sector-34-chandigarh" },
            { label: "Island Modular Kitchen", href: "/island-modular-kitchen-sector-34-chandigarh" },
            { label: "Acrylic Modular Kitchen", href: "/acrylic-modular-kitchen-sector-34-chandigarh" },
            { label: "Laminate Modular Kitchen", href: "/laminate-modular-kitchen-sector-34-chandigarh" },
            { label: "PU Finish Kitchen", href: "/pu-modular-kitchen-sector-34-chandigarh" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About FurniRevive", href: "/#how-it-works" },
            { label: "Reviews", href: "/#reviews" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ],
        },
      ],
    };
  }
  return FOOTER_CONFIGS["modular-kitchen"];
}
