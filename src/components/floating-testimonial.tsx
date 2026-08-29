import { useState, useEffect, useCallback } from "react";
import { X, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";
import { useServiceContext } from "@/hooks/use-service-context.ts";
import { getMarketFromPathname } from "@/lib/registry/market-registry.ts";

const REPAIR_TESTIMONIALS = [
  {
    name: "Rohit",
    city: "Noida",
    review: "Sofa repaired in 2 hours. Very professional service.",
  },
  {
    name: "Priya",
    city: "Delhi",
    review: "Dining chairs fixed perfectly. Very satisfied.",
  },
  {
    name: "Aman",
    city: "Gurgaon",
    review: "Bed repair done same day. Highly recommended.",
  },
  {
    name: "Neha",
    city: "Ghaziabad",
    review: "Wood polish made my table look brand new.",
  },
  {
    name: "Gurpreet",
    city: "Chandigarh",
    review: "Sofa foam replaced at home. Feels like new again. Excellent team.",
  },
  {
    name: "Simran",
    city: "Mohali",
    review: "Recliner repaired quickly and at a fair price. Very happy.",
  },
  {
    name: "Rajinder",
    city: "Panchkula",
    review: "Chair upholstery done perfectly. Great craftsmanship.",
  },
];

const KITCHEN_TESTIMONIALS = [
  {
    name: "Kavita",
    city: "South Delhi",
    review: "The design plan was exactly what we wanted. Kitchen looks stunning.",
  },
  {
    name: "Rahul",
    city: "Gurgaon",
    review: "Factory finish quality with 10-year warranty. Very happy.",
  },
  {
    name: "Sunita",
    city: "Vasant Kunj",
    review: "Free home visit, design plan in 48 hours. Seamless experience.",
  },
  {
    name: "Deepak",
    city: "Dwarka",
    review: "Blum hardware on every drawer. Premium feel at a fair price.",
  },
  {
    name: "Rajinder",
    city: "Sector 35 Chandigarh",
    review: "FurniRevive transformed our kitchen completely. The acrylic shutters look stunning and the team was very professional.",
  },
  {
    name: "Gurpreet",
    city: "Aerocity Mohali",
    review: "Excellent quality modular kitchen. The L-shaped layout they designed fits perfectly in our home. Very happy with the result.",
  },
  {
    name: "Simran",
    city: "MDC Sector 4 Panchkula",
    review: "Best modular kitchen company in Panchkula. Delivered on time, within budget, and the finish quality is outstanding.",
  },
  {
    name: "Manpreet",
    city: "Phase 1 Mohali",
    review: "The team understood exactly what we wanted. Our kitchen looks like it's from a magazine. Highly recommended!",
  },
  {
    name: "Harpreet",
    city: "Sector 22 Chandigarh",
    review: "Very satisfied with the modular kitchen. The design team was professional and installation was neat and timely.",
  },
];

const DISPLAY_DURATION = 6000;
const INTERVAL_DELAY = 13000;

const TRICITY_KEYWORDS = ["Chandigarh", "Mohali", "Panchkula"];

function isTricityTestimonial(city: string): boolean {
  return TRICITY_KEYWORDS.some((kw) => city.includes(kw));
}

export default function FloatingTestimonial() {
  const { pathname } = useLocation();
  const { service } = useServiceContext();
  const isKitchen = service === "modular-kitchen" || pathname.includes("modular-kitchen") || pathname.includes("kitchen");
  const market = getMarketFromPathname(pathname);

  const baseList = isKitchen ? KITCHEN_TESTIMONIALS : REPAIR_TESTIMONIALS;

  const filtered = market.slug === "chandigarh-tricity"
    ? baseList.filter((t) => isTricityTestimonial(t.city))
    : baseList.filter((t) => !isTricityTestimonial(t.city));

  const TESTIMONIALS = filtered.length > 0 ? filtered : baseList;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const showNext = useCallback(() => {
    if (dismissed) return;
    setVisible(true);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, DISPLAY_DURATION);
    return hideTimer;
  }, [dismissed]);

  useEffect(() => {
    if (dismissed) return;

    // Initial delay before first testimonial
    const initialTimer = setTimeout(() => {
      showNext();
    }, 5000);

    return () => clearTimeout(initialTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dismissed]);

  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      showNext();
    }, INTERVAL_DELAY);

    return () => clearInterval(interval);
  }, [dismissed, showNext]);

  if (dismissed) return null;

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 pointer-events-none">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="pointer-events-auto w-[280px] sm:w-[320px] rounded-2xl bg-card border border-border shadow-xl shadow-black/10 overflow-hidden"
          >
            {/* Warm accent bar */}
            <div className="h-1 bg-gradient-to-r from-primary via-amber-500 to-primary" />

            <div className="p-4 relative">
              {/* Close button */}
              <button
                onClick={() => {
                  setVisible(false);
                  setDismissed(true);
                }}
                className="absolute top-2 right-2 p-1 rounded-full text-muted-foreground/50 hover:text-muted-foreground hover:bg-secondary transition-colors"
                aria-label="Dismiss testimonials"
              >
                <X className="size-3.5" />
              </button>

              {/* Stars */}
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-foreground leading-snug pr-4">
                {`"${testimonial.review}"`}
              </p>

              {/* Customer info */}
              <div className="mt-3 flex items-center gap-2">
                <div className="size-7 rounded-full bg-primary/15 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {testimonial.city}
                  </p>
                </div>
                <span className="ml-auto text-[10px] text-muted-foreground/60 font-medium uppercase tracking-wide">
                  Verified
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
