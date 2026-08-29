import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { GalleryImage } from "./kitchen-gallery-images.ts";

type Props = {
  images: GalleryImage[];
};

export default function KitchenGalleryPreview({ images }: Props) {
  const preview = images.slice(0, 4);

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">More Kitchen Designs</h2>
            <p className="text-muted-foreground text-sm mt-1">Design inspiration for your modular kitchen</p>
          </div>
          <Link
            to="/modular-kitchen#gallery"
            className="flex items-center gap-1.5 text-primary text-sm font-medium hover:underline cursor-pointer shrink-0"
          >
            Explore All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {preview.map((img) => (
            <Link key={img.id} to="/modular-kitchen#gallery" className="block group">
              <div className="relative overflow-hidden rounded-xl aspect-video bg-muted">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <p className="text-white text-xs font-medium leading-tight">{img.caption}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/modular-kitchen#gallery"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Explore More Kitchen Designs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
