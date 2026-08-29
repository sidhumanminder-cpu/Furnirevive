import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { GalleryImage, GalleryCategory } from "./kitchen-gallery-images.ts";

const CATEGORY_LABELS: Record<string, string> = {
  all: "All",
  modern: "Modern",
  luxury: "Luxury",
  "l-shape": "L-Shape",
  "u-shape": "U-Shape",
  island: "Island",
  parallel: "Parallel",
  straight: "Straight",
  peninsula: "Peninsula",
  "small-kitchen": "Small Kitchen",
  "dark-theme": "Dark Theme",
  acrylic: "Acrylic",
  laminate: "Laminate",
  pu: "PU Finish",
  membrane: "Membrane",
  veneer: "Veneer",
  pvc: "PVC",
  glass: "Glass",
  "stainless-steel": "Stainless Steel",
};

type Props = {
  images: GalleryImage[];
  pageType?: "root" | "hub" | "layout" | "material";
  filter?: string;
  initialVisible?: number;
  showMoreCount?: number;
  title?: string;
  subtitle?: string;
};

export default function PremiumKitchenGallery({
  images,
  pageType,
  filter,
  initialVisible = 12,
  showMoreCount = 12,
  title,
  subtitle,
}: Props) {
  const effectivePageType = pageType ?? "root";

  // Derive behaviour flags from pageType
  const showTabs = effectivePageType === "root" || effectivePageType === "hub";
  const showShowMore = effectivePageType === "root" || effectivePageType === "layout" || effectivePageType === "material";
  const isFilteredPage = effectivePageType === "layout" || effectivePageType === "material";

  // Compute matched/other images for layout/material pages
  const matchedImages = isFilteredPage && filter
    ? images.filter((img) => img.categories.includes(filter as GalleryCategory))
    : images;
  const otherImages = isFilteredPage && filter
    ? images.filter((img) => !img.categories.includes(filter as GalleryCategory))
    : [];

  // "You may also like" logic: only for layout/material, when matched < 8 and other >= 4
  const showYouMayAlsoLike = isFilteredPage && matchedImages.length < 8 && otherImages.length >= 4;
  const youMayAlsoLikeImages = showYouMayAlsoLike
    ? [...otherImages].sort((a, b) => (a.featured ? -1 : 1) - (b.featured ? -1 : 1)).slice(0, 4)
    : [];

  // Resolve title/subtitle defaults based on pageType
  const resolvedTitle = title ?? (isFilteredPage ? "Kitchen Design Gallery" : "Premium Kitchen Gallery");
  const resolvedSubtitle = subtitle ?? (
    isFilteredPage
      ? "Designs matching your selection"
      : `Explore ${images.length}+ modular kitchen designs across Delhi NCR`
  );

  // For filtered pages, use matchedImages directly; for tab-based pages, use full images with filtering
  const primaryImages = isFilteredPage ? matchedImages : images;

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [visibleCount, setVisibleCount] = useState(initialVisible);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Derive categories present in this image set (only used when tabs are shown)
  const availableCategories: GalleryCategory[] = ["all", ...Array.from(
    new Set(primaryImages.flatMap((img) => img.categories))
  ).sort()];

  const filtered = showTabs
    ? (activeCategory === "all" ? primaryImages : primaryImages.filter((img) => img.categories.includes(activeCategory)))
    : primaryImages;

  const visible = filtered.slice(0, visibleCount);
  const hasMore = showShowMore && visibleCount < filtered.length;

  // Reset visible count when filter changes
  const handleCategoryChange = (cat: GalleryCategory) => {
    setActiveCategory(cat);
    setVisibleCount(initialVisible);
  };

  // Lightbox navigation
  const lightboxImages = filtered;
  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % lightboxImages.length));
  }, [lightboxImages.length]);
  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + lightboxImages.length) % lightboxImages.length));
  }, [lightboxImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, goNext, goPrev]);

  // Swipe support
  let touchStartX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{resolvedTitle}</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {resolvedSubtitle}
          </p>
        </div>

        {/* Filter tabs — only for root/hub pages */}
        {showTabs && (
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer shrink-0 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {CATEGORY_LABELS[cat] ?? cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        {visible.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No images in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((img, idx) => (
              <motion.div
                key={img.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-muted aspect-video"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" as const }}
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading={idx < 6 ? "eager" : "lazy"}
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3">
                  <p className="text-white text-sm font-medium leading-tight">{img.caption}</p>
                </div>
                {/* Zoom icon */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/50 rounded-full p-1.5">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Show More */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((n) => n + showMoreCount)}
              className="px-8 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              Show More Designs ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* "You may also like" section — only for layout/material pages */}
        {showYouMayAlsoLike && youMayAlsoLikeImages.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">You may also like</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                More kitchen designs for inspiration
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {youMayAlsoLikeImages.map((img) => (
                <motion.div
                  key={img.id}
                  className="group relative overflow-hidden rounded-xl cursor-pointer bg-muted aspect-video"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2, ease: "easeOut" as const }}
                  onClick={() => {
                    // Open in lightbox — find index among all lightboxImages or open standalone
                    const idx = lightboxImages.findIndex((li) => li.id === img.id);
                    if (idx >= 0) setLightboxIndex(idx);
                  }}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3">
                    <p className="text-white text-sm font-medium leading-tight">{img.caption}</p>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/50 rounded-full p-1.5">
                      <ZoomIn className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && lightboxImages[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-10"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-10"
              onClick={goPrev}
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="max-w-5xl max-h-[85vh] w-full mx-16 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={lightboxImages[lightboxIndex].url}
                alt={lightboxImages[lightboxIndex].alt}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
              <p className="text-white/80 text-sm mt-3 text-center">
                {lightboxImages[lightboxIndex].caption}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {lightboxIndex + 1} / {lightboxImages.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-10"
              onClick={goNext}
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
