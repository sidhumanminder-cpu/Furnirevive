import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { BUSINESS } from "@/lib/business-config.ts";

export default function StickyContactBar({ hideBookOnline }: { hideBookOnline?: boolean } = {}) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" as const }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 px-4 py-3 shadow-[0_-2px_16px_rgba(0,0,0,0.08)] backdrop-blur-sm"
    >
      {/* Mobile: 3 equal columns */}
      <div className="flex items-stretch gap-2 md:hidden">
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex flex-1 cursor-pointer flex-col items-center gap-1 rounded-lg bg-foreground px-3 py-2 text-background transition-opacity hover:opacity-90"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs font-semibold">Call Now</span>
        </a>
        <a
          href={BUSINESS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 cursor-pointer flex-col items-center gap-1 rounded-lg bg-[#25D366] px-3 py-2 text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        {!hideBookOnline && (
          <Link
            to="/book"
            className="flex flex-1 cursor-pointer flex-col items-center gap-1 rounded-lg bg-primary px-3 py-2 text-primary-foreground transition-opacity hover:opacity-90"
          >
            <CalendarCheck className="h-5 w-5" />
            <span className="text-xs font-semibold">Book Online</span>
          </Link>
        )}
      </div>

      {/* Desktop: centered row */}
      <div className="hidden md:flex items-center justify-center gap-3">
        <a
          href={`tel:${BUSINESS.phone}`}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href={BUSINESS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp Us
        </a>
        {!hideBookOnline && (
          <Link
            to="/book"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Online
          </Link>
        )}
        <span className="ml-2 text-sm text-muted-foreground">{BUSINESS.displayPhone}</span>
      </div>
    </motion.div>
  );
}
