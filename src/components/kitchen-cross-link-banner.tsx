import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Contextual cross-link banner suggesting modular kitchen services
 * to furniture repair visitors. Designed to feel like a helpful suggestion.
 */
export default function KitchenCrossLinkBanner() {
  return (
    <section className="py-8 lg:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border-l-4 border-primary bg-primary/8 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-foreground/90 leading-relaxed">
            Looking for a complete home makeover? We also design and install{" "}
            <strong className="font-semibold">premium modular kitchens</strong> across Delhi NCR.
          </p>
          <Link
            to="/modular-kitchen"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors whitespace-nowrap cursor-pointer"
          >
            See Kitchen Designs
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
