import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { buildLocalBusinessSchema } from "@/lib/seo-schema.ts";
import { SITE_URL } from "@/lib/seo-constants.ts";

const BUSINESS_TYPES = new Set(["LocalBusiness", "HomeAndConstructionBusiness"]);
const EXCLUDED_PREFIXES = ["/admin", "/audit", "/my-bookings", "/auth"];
const FALLBACK_ATTR = "data-business-fallback";

/** True if a parsed JSON-LD value (object, array or @graph) contains a business node. */
function containsBusiness(value: unknown): boolean {
  if (Array.isArray(value)) return value.some(containsBusiness);
  if (typeof value !== "object" || value === null) return false;
  const node = value as Record<string, unknown>;
  const type = node["@type"];
  const types = Array.isArray(type) ? type : [type];
  if (types.some((t) => typeof t === "string" && BUSINESS_TYPES.has(t))) return true;
  return containsBusiness(node["@graph"]);
}

function isBusinessScript(el: Element): boolean {
  try {
    return containsBusiness(JSON.parse(el.textContent ?? ""));
  } catch {
    return false;
  }
}

function pageOwnsBusinessSchema(): boolean {
  const scripts = document.querySelectorAll(`script[type="application/ld+json"]:not([${FALLBACK_ATTR}])`);
  return Array.from(scripts).some(isBusinessScript);
}

function createFallbackScript(): HTMLScriptElement {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.setAttribute(FALLBACK_ATTR, "true");
  el.textContent = JSON.stringify({ "@context": "https://schema.org", ...buildLocalBusinessSchema(SITE_URL) });
  return el;
}

/**
 * Guarantees exactly one LocalBusiness-family block per page, with no fixed delay.
 * It checks the DOM immediately, and a document observer keeps it correct afterwards:
 * the fallback is removed as soon as a page template adds its own business schema,
 * and re-added if that schema disappears (route change).
 */
export default function BusinessSchemaFallback() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (EXCLUDED_PREFIXES.some((p) => pathname.startsWith(p))) return;
    let fallback: HTMLScriptElement | null = null;

    const sync = () => {
      const owned = pageOwnsBusinessSchema();
      if (owned && fallback) {
        fallback.remove();
        fallback = null;
      } else if (!owned && !fallback) {
        fallback = createFallbackScript();
        document.head.appendChild(fallback);
      }
    };

    sync();
    const observer = new MutationObserver(sync);
    // Templates render schema in <head> (effects) or <body> (JSX), so watch the whole document.
    observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    return () => {
      observer.disconnect();
      fallback?.remove();
    };
  }, [pathname]);

  return null;
}
