import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useServiceContext } from "@/hooks/use-service-context.ts";

type PageType = "hub" | "city" | "locality" | "layout" | "material" | "cost";

type HomeServicesSectionProps = {
  pageType?: PageType;
  cityName?: string;
  /** Optional — falls back to useServiceContext() when omitted */
  service?: "repair" | "modular-kitchen";
};

type SupportingLink = { label: string; href: string };

// ─── City slug config ─────────────────────────────────────────────────────────

const CITY_SLUG_MAP: Record<string, string> = {
  delhi: "delhi",
  "delhi ncr": "delhi",
  gurgaon: "gurgaon",
  gurugram: "gurgaon",
  noida: "noida",
  faridabad: "faridabad",
  ghaziabad: "ghaziabad",
  chandigarh: "chandigarh",
  mohali: "mohali",
  panchkula: "panchkula",
  tricity: "tricity",
};

/** City slugs that have dedicated service pages */
const CITY_HAS_PAGES = new Set<string>([
  "delhi",
  "gurgaon",
  "noida",
  "faridabad",
  "ghaziabad",
  "chandigarh",
  "mohali",
  "panchkula",
  "tricity",
]);

/** City slugs that have a dedicated L-shape kitchen page */
const CITY_HAS_LSHAPE = new Set<string>([
  "delhi",
  "gurgaon",
  "noida",
  "faridabad",
  "ghaziabad",
]);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getCitySlug(cityName?: string): string {
  if (!cityName) return "delhi";
  const normalised = cityName.trim().toLowerCase();
  return CITY_SLUG_MAP[normalised] ?? "delhi";
}

/** Display name for labels — strips " NCR" suffix and title-cases */
function getCityDisplayName(cityName?: string): string {
  if (!cityName) return "Delhi";
  const stripped = cityName.trim().replace(/\s+NCR$/i, "");
  // Title-case each word (handles "delhi ncr" → "Delhi", "chandigarh" → "Chandigarh")
  return stripped
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ─── Dynamic link builders ────────────────────────────────────────────────────

function buildRepairToKitchenLinks(
  pageType: PageType | undefined,
  citySlug: string,
  cityDisplay: string,
): SupportingLink[] {
  const hasPages = CITY_HAS_PAGES.has(citySlug);
  const cityKitchenLink: SupportingLink | null = hasPages
    ? { label: `Modular Kitchen ${cityDisplay}`, href: `/modular-kitchen-${citySlug}` }
    : null;

  const type = pageType ?? "locality";

  switch (type) {
    case "locality":
    case "layout":
    case "material": {
      const links: SupportingLink[] = [
        { label: "Modular Kitchen Design", href: "/modular-kitchen" },
        { label: "Kitchen Cost Guide", href: "/modular-kitchen-cost-guide" },
      ];
      if (cityKitchenLink) {
        links.push(cityKitchenLink);
      }
      return links;
    }
    case "city":
    case "hub": {
      const links: SupportingLink[] = [];
      if (cityKitchenLink) {
        links.push(cityKitchenLink);
      }
      links.push({ label: "Modular Kitchen Design", href: "/modular-kitchen" });
      const lShapeHref = CITY_HAS_LSHAPE.has(citySlug)
        ? `/l-shape-modular-kitchen-${citySlug}`
        : "/modular-kitchen-cost-guide";
      const lShapeLabel = CITY_HAS_LSHAPE.has(citySlug)
        ? `L-Shape Kitchen ${cityDisplay}`
        : "Kitchen Cost Guide";
      links.push({ label: lShapeLabel, href: lShapeHref });
      return links;
    }
    case "cost":
      return [
        { label: "Kitchen Cost Guide", href: "/modular-kitchen-cost-guide" },
        { label: "Modular Kitchen Design", href: "/modular-kitchen" },
        { label: "Acrylic Kitchens", href: "/acrylic-modular-kitchen" },
      ];
  }
}

function buildKitchenToRepairLinks(
  pageType: PageType | undefined,
  citySlug: string,
  cityDisplay: string,
): SupportingLink[] {
  const hasPages = CITY_HAS_PAGES.has(citySlug);
  const repairSlug = hasPages ? citySlug : "delhi";
  const cityLabel = hasPages ? ` ${cityDisplay}` : "";

  const type = pageType ?? "locality";

  switch (type) {
    case "locality":
    case "city":
    case "hub":
      return [
        { label: `Furniture Repair${cityLabel}`, href: `/sofa-repair-${repairSlug}` },
        { label: `Sofa Upholstery${cityLabel}`, href: `/sofa-upholstery-${repairSlug}` },
        { label: `Recliner Repair${cityLabel}`, href: `/recliner-repair-${repairSlug}` },
      ];
    case "layout":
    case "material":
      return [
        { label: `Sofa Upholstery${cityLabel}`, href: `/sofa-upholstery-${repairSlug}` },
        { label: `Recliner Repair${cityLabel}`, href: `/recliner-repair-${repairSlug}` },
        { label: `Furniture Repair${cityLabel}`, href: `/sofa-repair-${repairSlug}` },
      ];
    case "cost":
      return [
        { label: `Furniture Repair${cityLabel}`, href: `/sofa-repair-${repairSlug}` },
        { label: "Sofa Repair Cost", href: "/sofa-repair-cost" },
        { label: `Furniture Polishing${cityLabel}`, href: `/furniture-polishing-${repairSlug}` },
      ];
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomeServicesSection({
  service: serviceProp,
  pageType,
  cityName,
}: HomeServicesSectionProps) {
  const { service: contextService } = useServiceContext();
  const activeService = serviceProp ?? contextService;
  const isKitchen = activeService === "modular-kitchen";

  const citySlug = getCitySlug(cityName);
  const cityDisplay = getCityDisplayName(cityName);

  const supportingLinks = isKitchen
    ? buildKitchenToRepairLinks(pageType, citySlug, cityDisplay)
    : buildRepairToKitchenLinks(pageType, citySlug, cityDisplay);

  const title = isKitchen ? "Complete Your Home Renovation" : "Renovating your home?";

  const checklist = isKitchen
    ? ["Furniture Repair", "Sofa Upholstery", "Recliner Repair", "Furniture Polishing"]
    : ["Modular Kitchen Design", "Kitchen Pricing Guide", "Premium Materials"];

  const introText = isKitchen
    ? "Looking to refresh your living room too? Explore our:"
    : "Planning a kitchen renovation? Explore our:";

  const ctaLabel = isKitchen ? "Explore Furniture Repair" : "Explore Modular Kitchens";
  const ctaHref = isKitchen
    ? (CITY_HAS_PAGES.has(citySlug) ? `/sofa-repair-${citySlug}` : "/sofa-repair-delhi")
    : "/modular-kitchen";
  const bgClass = isKitchen ? "bg-stone-50" : "bg-amber-50";
  const linkClass = isKitchen
    ? "text-stone-700 underline hover:text-stone-900"
    : "text-amber-700 underline hover:text-amber-900";

  return (
    <section className={`py-10 md:py-14 ${bgClass}`}>
      <div className="px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Title + Checklist */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-5">{title}</h2>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Intro + links + CTA */}
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground leading-relaxed">{introText}</p>
            <ul className="space-y-2">
              {supportingLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={`${linkClass} cursor-pointer`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to={ctaHref}
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-medium px-6 py-3 text-base cursor-pointer hover:bg-primary/90 transition-colors w-fit mt-1"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
