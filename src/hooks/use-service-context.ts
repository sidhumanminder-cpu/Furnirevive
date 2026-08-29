import { useLocation } from "react-router-dom";

export type ServiceType =
  | "repair"
  | "modular-kitchen"
  | "wardrobe"
  | "tv-unit"
  | "interior";

export interface ServiceCapabilities {
  supportsBooking: boolean;
  supportsGallery: boolean;
  supportsWhatsApp: boolean;
  supportsOnlineEstimate: boolean;
  galleryUrl: string;
  ctaUrl: string;
  ctaLabel: string;
  navSecondaryLabel: string;
  navSecondaryUrl: string;
}

export const SERVICE_CONFIG: Record<ServiceType, ServiceCapabilities> = {
  "repair": {
    supportsBooking: true,
    supportsGallery: false,
    supportsWhatsApp: true,
    supportsOnlineEstimate: false,
    galleryUrl: "/",
    ctaUrl: "/book",
    ctaLabel: "Book Repair",
    navSecondaryLabel: "My Bookings",
    navSecondaryUrl: "/my-bookings",
  },
  "modular-kitchen": {
    supportsBooking: false,
    supportsGallery: true,
    supportsWhatsApp: true,
    supportsOnlineEstimate: false,
    galleryUrl: "/modular-kitchen#gallery",
    ctaUrl: "/contact",
    ctaLabel: "Get Free Consultation",
    navSecondaryLabel: "Kitchen Gallery",
    navSecondaryUrl: "/modular-kitchen#gallery",
  },
  "wardrobe": {
    supportsBooking: false,
    supportsGallery: true,
    supportsWhatsApp: true,
    supportsOnlineEstimate: false,
    galleryUrl: "/wardrobe#gallery",
    ctaUrl: "/contact",
    ctaLabel: "Get Free Consultation",
    navSecondaryLabel: "Gallery",
    navSecondaryUrl: "/wardrobe#gallery",
  },
  "tv-unit": {
    supportsBooking: false,
    supportsGallery: true,
    supportsWhatsApp: true,
    supportsOnlineEstimate: false,
    galleryUrl: "/tv-unit#gallery",
    ctaUrl: "/contact",
    ctaLabel: "Get Free Consultation",
    navSecondaryLabel: "Gallery",
    navSecondaryUrl: "/tv-unit#gallery",
  },
  "interior": {
    supportsBooking: false,
    supportsGallery: true,
    supportsWhatsApp: true,
    supportsOnlineEstimate: false,
    galleryUrl: "/interior#gallery",
    ctaUrl: "/contact",
    ctaLabel: "Get Free Consultation",
    navSecondaryLabel: "Gallery",
    navSecondaryUrl: "/interior#gallery",
  },
};

function detectService(pathname: string): ServiceType {
  if (
    pathname.startsWith("/modular-kitchen") ||
    pathname.startsWith("/kitchen-remodeling") ||
    pathname.startsWith("/kitchen-makeover") ||
    pathname.startsWith("/kitchen-renovation") ||
    pathname.includes("-modular-kitchen-") ||
    pathname.includes("-modular-kitchen")
  ) return "modular-kitchen";
  if (pathname.startsWith("/wardrobe")) return "wardrobe";
  if (pathname.startsWith("/tv-unit")) return "tv-unit";
  if (pathname.startsWith("/interior")) return "interior";
  return "repair";
}

export function useServiceContext(): { service: ServiceType; config: ServiceCapabilities } {
  const { pathname } = useLocation();
  const service = detectService(pathname);
  return { service, config: SERVICE_CONFIG[service] };
}
