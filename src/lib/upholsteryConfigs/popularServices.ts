/**
 * Popular Upholstery Services — FurniRevive
 *
 * Typed data only. No JSX. No rendering logic.
 * Used in the "Popular Upholstery Services" section of the upholstery template.
 * Add new services here — the section renders automatically.
 */

export type PopularService = {
  /** Display name */
  name: string;
  /** Short description shown below the name */
  description: string;
  /** Lucide icon name (string key) */
  icon: string;
};

export const POPULAR_UPHOLSTERY_SERVICES: PopularService[] = [
  {
    name: "Fabric Replacement",
    description: "Full fabric change for all sofa types — linen, velvet, leatherette, microfiber, chenille, and more.",
    icon: "scissors",
  },
  {
    name: "Foam Replacement",
    description: "High-density foam upgrade (32D / 36D / 40D) to restore seat firmness and cushion shape.",
    icon: "layers",
  },
  {
    name: "Cushion Refilling",
    description: "Refill sagging cushions with fresh foam or fibre filling without replacing the outer fabric.",
    icon: "square",
  },
  {
    name: "Stitching Repair",
    description: "Professional re-stitching for torn seams, loose piping, and damaged corner joins.",
    icon: "pen-tool",
  },
  {
    name: "Leatherette Upholstery",
    description: "Wipe-clean leatherette covering — ideal for families with children, pets, or rental properties.",
    icon: "shield",
  },
  {
    name: "Velvet Upholstery",
    description: "Premium velvet reupholstery for living rooms, statement sofas, and luxury interiors.",
    icon: "star",
  },
  {
    name: "Sofa Cover Replacement",
    description: "Custom-fitted removable covers stitched to match your sofa dimensions precisely.",
    icon: "package",
  },
];
