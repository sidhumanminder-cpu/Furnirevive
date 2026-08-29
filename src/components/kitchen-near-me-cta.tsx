/**
 * NearMeCTA — site-wide Near Me authority signal for the modular kitchen cluster.
 *
 * Exports:
 *   TrustPills — reusable 4-pill row (used on Near Me page hero + this component)
 *   NearMeCTA  — compact / standard / featured variants
 *
 * Usage:
 *   <NearMeCTA variant="compact" />
 *   <NearMeCTA variant="standard" pageType="material" pageValue="Acrylic" />
 *   <NearMeCTA variant="featured" />
 */

import { Link } from "react-router-dom";
import { CheckCircle2, MapPin, PhoneCall, ArrowRight } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/seo-constants.ts";

// ─── Types ────────────────────────────────────────────────────────────────────

type PageType =
  | "locality"
  | "layout"
  | "material"
  | "budget"
  | "renovation"
  | "repair"
  | "commercial"
  | "city"
  | "guide"
  | "default";

type NearMeCTAProps = {
  variant?: "compact" | "standard" | "featured";
  pageType?: PageType;
  pageValue?: string;
  /** Override the auto-generated headline */
  contextualHeadline?: string;
  showTrustPills?: boolean;
  showSecondaryLink?: boolean;
  ctaText?: string;
};

// ─── Headline generator ───────────────────────────────────────────────────────

function buildHeadline(pageType: PageType, pageValue?: string): string {
  switch (pageType) {
    case "layout":
      return pageValue
        ? `Need an ${pageValue} Modular Kitchen Expert Near You?`
        : "Need a Modular Kitchen Layout Expert Near You?";
    case "material":
      return pageValue
        ? `Looking for an ${pageValue} Modular Kitchen Near You?`
        : "Looking for a Modular Kitchen Material Expert Near You?";
    case "budget":
      return "Planning a Modular Kitchen Within Your Budget?";
    case "renovation":
      return "Looking for a Kitchen Renovation Expert Near You?";
    case "repair":
      return "Need a Kitchen Repair Expert Near You?";
    case "commercial":
      return pageValue
        ? `Find a ${pageValue} Near You in Delhi NCR`
        : "Find the Right Kitchen Service Near You";
    case "city":
      return pageValue
        ? `Looking for a Modular Kitchen Near You in ${pageValue}?`
        : "Looking for a Modular Kitchen Near You?";
    case "locality":
    case "guide":
    case "default":
    default:
      return "Looking for a Modular Kitchen Near You?";
  }
}

// ─── TrustPills ───────────────────────────────────────────────────────────────

const TRUST_PILLS = [
  "Free Home Visit",
  "3D Design Included",
  "Factory Manufacturing",
  "10-Year Structural Warranty",
] as const;

export function TrustPills({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 justify-center ${className}`}>
      {TRUST_PILLS.map((pill) => (
        <span
          key={pill}
          className="inline-flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs font-medium px-3 py-1.5 rounded-full"
        >
          <CheckCircle2 className="w-3 h-3 text-amber-700 flex-shrink-0" />
          {pill}
        </span>
      ))}
    </div>
  );
}

// ─── NearMeCTA ────────────────────────────────────────────────────────────────

const CITIES = [
  { label: "Delhi", href: "/modular-kitchen-delhi" },
  { label: "Gurgaon", href: "/modular-kitchen-gurgaon" },
  { label: "Noida", href: "/modular-kitchen-noida" },
  { label: "Ghaziabad", href: "/modular-kitchen-ghaziabad" },
  { label: "Faridabad", href: "/modular-kitchen-faridabad" },
] as const;

export function NearMeCTA({
  variant = "compact",
  pageType = "default",
  pageValue,
  contextualHeadline,
  showTrustPills = true,
  showSecondaryLink = true,
  ctaText = "Book Free Consultation",
}: NearMeCTAProps) {
  const headline = contextualHeadline ?? buildHeadline(pageType, pageValue);

  // ── compact ──────────────────────────────────────────────────────────────────
  if (variant === "compact") {
    return (
      <section className="py-7 px-4 bg-amber-50 dark:bg-amber-950/20 border-t border-amber-200 dark:border-amber-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-foreground mb-3">{headline}</p>
          {showTrustPills && <TrustPills className="mb-4" />}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              {ctaText}
            </a>
            {showSecondaryLink && (
              <Link
                to="/modular-kitchen-near-me"
                className="inline-flex items-center gap-1 text-sm text-amber-700 hover:text-amber-800 font-medium transition-colors"
              >
                Explore Our Near Me Guide
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  // ── standard ─────────────────────────────────────────────────────────────────
  if (variant === "standard") {
    return (
      <section className="py-9 px-4 bg-amber-50 dark:bg-amber-950/20 border-t border-amber-200 dark:border-amber-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-bold text-foreground mb-1">{headline}</h2>
          <p className="text-sm text-muted-foreground mb-4">
            FurniRevive serves Delhi NCR — free home visit, 3D design, and professional installation.
          </p>
          {showTrustPills && <TrustPills className="mb-5" />}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              {ctaText}
            </a>
            {showSecondaryLink && (
              <Link
                to="/modular-kitchen-near-me"
                className="inline-flex items-center gap-1 text-sm text-amber-700 hover:text-amber-800 font-medium transition-colors"
              >
                Explore Our Near Me Guide
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  // ── featured ─────────────────────────────────────────────────────────────────
  return (
    <section className="py-12 px-4 bg-amber-50 dark:bg-amber-950/20 border-t border-amber-200 dark:border-amber-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-foreground mb-1">{headline}</h2>
          <p className="text-sm text-muted-foreground">
            We serve every locality across Delhi NCR — free home visit and 3D design included.
          </p>
        </div>
        {showTrustPills && <TrustPills className="mb-6" />}
        {/* Mini city grid */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {CITIES.map((city) => (
            <Link
              key={city.label}
              to={city.href}
              className="inline-flex items-center gap-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-amber-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              {city.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-7 py-3 rounded-lg transition-colors cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            {ctaText}
          </a>
          {showSecondaryLink && (
            <Link
              to="/modular-kitchen-near-me"
              className="inline-flex items-center gap-1 text-sm text-amber-700 hover:text-amber-800 font-medium transition-colors"
            >
              Explore Our Near Me Guide
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
