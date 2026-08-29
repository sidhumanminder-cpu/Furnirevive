import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { getWhatsAppConfig, type WhatsAppService } from "@/config/whatsapp-messages.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-locality-registry.ts";

const WHATSAPP_NUMBER = "919217999355";

/**
 * Derives service, locality, and city from the current pathname.
 * Kitchen locality pages: /modular-kitchen-{slug}  e.g. /modular-kitchen-greater-kailash
 * Kitchen city hubs:      /modular-kitchen-delhi    /modular-kitchen-gurgaon
 * Kitchen root:           /modular-kitchen
 */
function resolveContext(pathname: string): {
  service: WhatsAppService;
  locality?: string;
  city?: string;
} {
  // Root kitchen page
  if (pathname === "/modular-kitchen") {
    return { service: "modular-kitchen" };
  }

  // Kitchen city hub — /modular-kitchen-delhi or /modular-kitchen-gurgaon
  if (pathname === "/modular-kitchen-delhi") {
    return { service: "modular-kitchen", city: "Delhi" };
  }
  if (pathname === "/modular-kitchen-gurgaon") {
    return { service: "modular-kitchen", city: "Gurgaon" };
  }

  // Kitchen locality page — /modular-kitchen-{slug}
  if (pathname.startsWith("/modular-kitchen-")) {
    const slug = pathname.replace("/modular-kitchen-", "");
    const entry = MODULAR_KITCHEN_LOCALITY_REGISTRY.find((e) => e.slug === slug);
    if (entry) {
      return { service: "modular-kitchen", locality: entry.name };
    }
    // Unknown slug but still a kitchen page — fall back to service-only
    return { service: "modular-kitchen" };
  }

  // All other pages — default furniture/repair
  return { service: "default" };
}

export default function FloatingWhatsApp() {
  const { pathname } = useLocation();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const { service, locality, city } = resolveContext(pathname);
  const config = getWhatsAppConfig(service);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    config.getInitialText({ locality, city })
  )}`;

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {tooltipVisible && !dismissed && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative bg-white rounded-xl shadow-lg shadow-black/10 border border-border px-4 py-3 max-w-[200px]"
          >
            <button
              onClick={() => setDismissed(true)}
              className="absolute -top-1.5 -right-1.5 size-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss tooltip"
            >
              <X className="size-3" />
            </button>
            <p className="text-xs font-semibold text-foreground leading-snug">
              {config.tooltipHeading}
            </p>
            {/* Arrow pointing right */}
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-r border-b border-border rotate-[-45deg]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => {
          if (!dismissed) setTooltipVisible(false);
        }}
        onClick={() => setDismissed(true)}
        className="relative flex items-center justify-center size-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-200"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 200, delay: 1 }}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          fill="white"
          className="size-7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.908 15.908 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.336 22.594c-.39 1.098-1.932 2.01-3.178 2.276-.852.18-1.964.324-5.71-1.228-4.8-1.986-7.89-6.858-8.13-7.178-.228-.32-1.92-2.558-1.92-4.878 0-2.32 1.214-3.46 1.646-3.934.39-.428 1.026-.642 1.636-.642.198 0 .376.01.536.018.432.018.648.042.932.722.354.852 1.218 2.958 1.324 3.174.108.216.216.498.078.78-.126.288-.234.468-.45.72-.216.252-.444.564-.636.756-.216.216-.44.45-.192.882.252.432 1.116 1.836 2.394 2.976 1.644 1.464 3.03 1.92 3.462 2.13.432.216.684.18.936-.108.252-.288 1.086-1.26 1.374-1.692.288-.432.576-.36.972-.216.396.144 2.508 1.182 2.94 1.398.432.216.72.324.828.504.108.18.108 1.044-.282 2.14z" />
        </svg>

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>
    </div>
  );
}
