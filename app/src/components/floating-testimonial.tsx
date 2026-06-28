import { useState, useEffect, useCallback } from "react";
import { X, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const TESTIMONIALS = [
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
] as const;

const DISPLAY_DURATION = 6000;
const INTERVAL_DELAY = 13000;

export default function FloatingTestimonial() {
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
