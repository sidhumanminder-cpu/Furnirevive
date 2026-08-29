/**
 * Kitchen Blog Category Registry
 * Data-driven categories for the /blog/modular-kitchen index page.
 * Add new categories here — the index template adapts automatically.
 */

export type KitchenBlogCategory = {
  slug: string;
  title: string;
  description: string;
};

export const KITCHEN_BLOG_CATEGORIES: readonly KitchenBlogCategory[] = [
  {
    slug: "layouts",
    title: "Kitchen Layout Guides",
    description: "Detailed guides for every modular kitchen layout — L-shape, U-shape, island, and more.",
  },
  {
    slug: "materials",
    title: "Kitchen Material Guides",
    description: "Compare acrylic, laminate, PU, membrane, veneer, glass, and stainless steel finishes.",
  },
  {
    slug: "cost",
    title: "Cost & Pricing Guides",
    description: "Transparent pricing breakdowns for every kitchen type, size, and budget range.",
  },
  {
    slug: "city",
    title: "City Guides",
    description: "Modular kitchen trends, pricing, and top areas across Delhi NCR cities.",
  },
  {
    slug: "planning",
    title: "Planning & Design Guides",
    description: "Expert planning advice — from measuring your kitchen to choosing materials and avoiding mistakes.",
  },
] as const;
