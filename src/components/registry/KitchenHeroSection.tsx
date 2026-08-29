import type { KitchenHeroSectionData } from "@/lib/content-engine/index.ts";
import { PhoneCall, MessageCircle, CheckCircle2 } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";

export default function KitchenHeroSection({ section }: { section: KitchenHeroSectionData }) {
  const { headline, subheadline, trustBadges, imageUrl, imageAlt, cityLabel } = section.props;
  const city = cityLabel ?? "Delhi NCR";
  return (
    <section className="relative bg-gradient-to-br from-stone-900 to-stone-700 text-white overflow-hidden min-h-[55vh] md:min-h-[620px] flex items-center">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          fetchPriority="high"
          loading="eager"
        />
      )}
      <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24 w-full">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-[700px]">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-stone-200 mb-3 max-w-2xl">{subheadline}</p>
        <p className="text-white/60 text-sm mb-6">
          ★★★★★ Trusted Across {city} · Custom Kitchen Design & Professional Installation
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium"
            >
              <CheckCircle2 className="h-4 w-4 text-amber-400" />
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold cursor-pointer hover:opacity-90 transition-opacity"
          >
            <PhoneCall className="h-5 w-5" />
            Call Now — Free Quote
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like a free modular kitchen design quote`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp for Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
