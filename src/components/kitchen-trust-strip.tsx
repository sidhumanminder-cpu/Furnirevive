import { useLocation } from "react-router-dom";

const TRUST_ITEMS = [
  "Free Design Consultation",
  "10-Year Warranty",
  "Premium Hardware",
  "Professional Installation",
] as const;

/**
 * Renders a trust strip above the footer on all modular kitchen pages.
 * Automatically hidden on repair / other pages.
 */
export default function KitchenTrustStrip() {
  const { pathname } = useLocation();
  const isKitchenPage =
    pathname === "/modular-kitchen" ||
    pathname.startsWith("/modular-kitchen-") ||
    /-(modular-kitchen|kitchen)-/.test(pathname) ||
    pathname.includes("-modular-kitchen-");

  if (!isKitchenPage) return null;

  // Derive city label from URL
  let cityLabel = "Delhi NCR";
  if (pathname.includes("-chandigarh") || pathname.includes("chandigarh-")) {
    cityLabel = "Chandigarh";
  } else if (pathname.includes("-mohali") || pathname.includes("mohali-") || pathname.includes("phase-") && pathname.includes("mohali")) {
    cityLabel = "Mohali";
  } else if (pathname.includes("-panchkula") || pathname.includes("panchkula-") || pathname.includes("mdc-sector-")) {
    cityLabel = "Panchkula";
  }

  return (
    <div className="bg-stone-900 text-white py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Rating */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-amber-400 text-lg leading-none tracking-tight">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span className="text-sm font-medium text-stone-200">
            Trusted by homeowners across {cityLabel}
          </span>
        </div>

        {/* Checkmarks */}
        <ul className="flex flex-wrap justify-center sm:justify-end gap-x-5 gap-y-1">
          {TRUST_ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-1.5 text-sm text-stone-300">
              <span className="text-green-400 font-bold leading-none">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
