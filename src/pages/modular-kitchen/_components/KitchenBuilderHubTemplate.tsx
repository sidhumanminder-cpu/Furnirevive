/**
 * Builder Hub Template — Batch 6 Phase A
 * Used for: /{builder}-modular-kitchen
 * Sections: Hero → Trust → Stats → Why custom → Kitchen sizes → Layouts →
 *           Finishes → Budget → Project directory → Why FurniRevive →
 *           FAQs → Nearby builders → Hub uplinks → CTA
 */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, MapPin, Building2, Ruler, Star } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { setPageMetadata } from "@/lib/metadata.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import PremiumKitchenGallery from "./PremiumKitchenGallery.tsx";
import { KITCHEN_GALLERY_IMAGES } from "./kitchen-gallery-images.ts";
import { WHY_CHOOSE_CARDS } from "../_data/kitchen-why-choose.ts";
import type { KitchenBuilderHubEntry } from "@/lib/registry/kitchen-builder-hub-registry.ts";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";

const CANONICAL_ORIGIN = "https://furnirevive.com";

function fmt(n: number) {
  return n >= 100000 ? `₹${(n / 100000).toFixed(1).replace(".0", "")}L` : `₹${(n / 1000).toFixed(0)}K`;
}

function injectJsonLd(data: object): HTMLScriptElement {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
  return el;
}

// Project display name helper
function projectDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

type Props = {
  entry: KitchenBuilderHubEntry;
  faqs: readonly { q: string; a: string }[];
};

const KitchenBuilderHubTemplate = ({ entry, faqs }: Props) => {
  const canonical = `${CANONICAL_ORIGIN}/${entry.urlSlug}`;
  const h1 = `Modular Kitchen for ${entry.builderName} Apartments`;
  const metaTitle = `Modular Kitchen for ${entry.builderName} Apartments | FurniRevive`;
  const metaDesc = `Custom modular kitchens for ${entry.builderFullName} apartments in ${entry.cityName}. ${fmt(entry.priceMin)}–${fmt(entry.priceMax)}, free 3D design, 10-year warranty. Fitted precisely to ${entry.builderName} slab dimensions.`;

  // Gallery filter — Tier A/B → acrylic, Tier C → laminate
  const galleryFilter = entry.builderTier === "C" ? "laminate" : "acrylic";

  // Hero badge colour by tier
  const tierBadgeClass =
    entry.builderTier === "A"
      ? "bg-amber-600/80"
      : entry.builderTier === "B"
      ? "bg-stone-600/80"
      : "bg-green-700/80";

  useEffect(() => {
    const cleanupMeta = setPageMetadata({
      title: metaTitle,
      description: metaDesc,
      canonical,
      ogUrl: canonical,
      ogType: "website",
      ogImage: "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
      ogSiteName: "FurniRevive",
      twitterCard: "summary_large_image",
      twitterTitle: metaTitle,
      twitterDescription: metaDesc,
      twitterImage: "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
    });

    const breadcrumbSchema = injectJsonLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${CANONICAL_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Modular Kitchen", item: `${CANONICAL_ORIGIN}/modular-kitchen` },
        { "@type": "ListItem", position: 3, name: entry.cityName, item: `${CANONICAL_ORIGIN}/modular-kitchen-${entry.citySlug}` },
        { "@type": "ListItem", position: 4, name: `${entry.builderName} Kitchens`, item: canonical },
      ],
    });
    const faqSchema = injectJsonLd({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    const serviceSchema = injectJsonLd({
      "@context": "https://schema.org",
      "@type": "Service",
      name: h1,
      provider: { "@type": "LocalBusiness", name: "FurniRevive", telephone: PHONE_NUMBER, url: CANONICAL_ORIGIN, areaServed: entry.cityName },
      description: metaDesc,
      offers: { "@type": "AggregateOffer", lowPrice: entry.priceMin, highPrice: entry.priceMax, priceCurrency: "INR" },
    });

    return () => {
      cleanupMeta();
      breadcrumbSchema.remove();
      faqSchema.remove();
      serviceSchema.remove();
    };
  }, [entry, canonical, metaTitle, metaDesc, h1, faqs]);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[460px] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80')" }}
        />
        <nav className="absolute top-4 left-0 right-0 px-6 flex items-center gap-1 text-white/60 text-sm z-10 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/modular-kitchen" className="hover:text-white transition-colors cursor-pointer">Modular Kitchen</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/modular-kitchen-${entry.citySlug}`} className="hover:text-white transition-colors cursor-pointer">{entry.cityName}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/80">{entry.builderName} Kitchens</span>
        </nav>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto pt-12 pb-8">
          <div className={`inline-flex items-center gap-1.5 ${tierBadgeClass} text-white text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
            <Building2 className="w-3 h-3" /> {entry.builderFullName}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">{h1}</h1>
          <p className="text-lg text-white/85 mb-6 text-balance">
            FurniRevive custom-fits modular kitchens in {entry.builderName} apartments — measured to your exact slab dimensions, {fmt(entry.priceMin)} onwards, free 3D design, 10-year warranty.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 text-sm">
            {["Free 3D Design", "10-Year Warranty", `${entry.builderName} Specialist`, "Slab-Perfect Fit"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />{b}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call for Free Quote
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a modular kitchen in my ${entry.builderName} apartment`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <KitchenTrustStrip />

      {/* Stats bar */}
      <section className="py-8 px-4 bg-amber-700 text-white">
        <div className="mx-auto max-w-5xl grid grid-cols-3 gap-4 text-center">
          <div><p className="text-2xl font-bold">500+</p><p className="text-sm text-white/80">Kitchens Completed</p></div>
          <div><p className="text-2xl font-bold">14 Days</p><p className="text-sm text-white/80">Avg. Installation</p></div>
          <div><p className="text-2xl font-bold">10-Year</p><p className="text-sm text-white/80">Warranty</p></div>
        </div>
      </section>

      {/* Price card */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">Modular Kitchen Price for {entry.builderName} Apartments</h2>
            <p className="text-muted-foreground text-sm">Starting from {fmt(entry.priceMin)} — premium fit-out up to {fmt(entry.priceMax)}</p>
          </div>
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer text-sm whitespace-nowrap">
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Gallery */}
      <PremiumKitchenGallery
        images={KITCHEN_GALLERY_IMAGES}
        title={`Kitchen Designs for ${entry.builderName} Apartments`}
        subtitle={`Modular kitchens installed in ${entry.builderName} homes across ${entry.cityName}`}
        filter={galleryFilter}
        initialVisible={6}
      />

      {/* Why custom for this builder */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2">Why {entry.builderName} Apartments Need Custom Modular Kitchens</h2>
        <p className="text-muted-foreground text-sm mb-6">Off-the-shelf furniture doesn't fit {entry.builderName} slab dimensions — here's why custom is the better choice</p>
        <div className="rounded-xl border border-border bg-background p-6">
          <p className="text-foreground leading-relaxed">{entry.whyCustom}</p>
        </div>
      </section>

      {/* Typical kitchen sizes */}
      <section className="py-10 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Ruler className="w-5 h-5 text-amber-700" /> Typical Kitchen Sizes in {entry.builderName} Apartments
          </h2>
          <p className="text-muted-foreground text-sm mb-5">Common kitchen footprints across {entry.builderName} projects</p>
          <div className="flex flex-wrap gap-3">
            {entry.typicalKitchenSizes.map((size) => (
              <div key={size} className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />{size}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended layouts */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-foreground mb-5">Recommended Kitchen Layouts for {entry.builderName} Homes</h2>
        <div className="flex flex-wrap gap-3">
          {entry.recommendedLayouts.map((layout) => (
            <Link
              key={layout.slug}
              to={`/${layout.slug}-modular-kitchen-${entry.citySlug}`}
              className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
            >
              {layout.label} Kitchen in {entry.cityName} <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* Recommended finishes */}
      <section className="py-10 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-2">Recommended Finishes for {entry.builderName} Apartments</h2>
          <p className="text-muted-foreground text-sm mb-5">Finishes that complement {entry.builderName}'s interior quality</p>
          <div className="flex flex-wrap gap-3">
            {entry.recommendedMaterials.map((mat) => (
              <Link
                key={mat.slug}
                to={`/${mat.slug}-modular-kitchen-${entry.citySlug}`}
                className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                {mat.label} Kitchen in {entry.cityName} <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Project directory */}
      {entry.projectSlugs.length > 0 && (
        <section className="py-14 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">{entry.builderName} Projects We Serve</h2>
          <p className="text-muted-foreground text-sm mb-7">Select your project for specific kitchen recommendations, layouts, and pricing</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {entry.projectSlugs.map((slug) => (
              <Link
                key={slug}
                to={`/modular-kitchen-${slug}`}
                className="rounded-xl border border-border bg-background p-5 hover:border-amber-700 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4 text-amber-700" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-amber-700 transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mt-3 group-hover:text-amber-700 transition-colors">
                  {projectDisplayName(slug)}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">Modular kitchen for this project</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Why FurniRevive */}
      <section className="bg-stone-900 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose FurniRevive for Your {entry.builderName} Kitchen?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {WHY_CHOOSE_CARDS.map((card) => (
              <div key={card.id} className="rounded-xl bg-stone-800 border border-stone-700 p-5">
                <div className="w-8 h-8 rounded-full bg-amber-700/30 flex items-center justify-center mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1.5">{card.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-background rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby builders */}
      {entry.nearbyBuilders.length > 0 && (
        <section className="py-12 px-6 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-700" /> Modular Kitchens for Other Builders
          </h2>
          <div className="flex flex-wrap gap-3">
            {entry.nearbyBuilders.map((slug) => (
              <Link
                key={slug}
                to={`/${slug}-modular-kitchen`}
                className="flex items-center gap-2 bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                {slug.toUpperCase()} Modular Kitchen <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Hub uplinks */}
      <section className="py-8 px-6 max-w-5xl mx-auto flex flex-wrap gap-4">
        <Link
          to={`/modular-kitchen-${entry.citySlug}`}
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors cursor-pointer"
        >
          <MapPin className="w-4 h-4" /> All kitchens in {entry.cityName}
        </Link>
        <Link
          to="/modular-kitchen"
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors cursor-pointer"
        >
          <MapPin className="w-4 h-4" /> Modular Kitchen Delhi NCR
        </Link>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-amber-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Get a Free Kitchen Design for Your {entry.builderName} Apartment</h2>
          <p className="text-white/85 mb-6">Free home visit, measured to your exact slab dimensions, 3D design in 48 hours — no hidden costs.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-amber-800 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call Now — Free Quote
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a free modular kitchen design for my ${entry.builderName} apartment`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <HomeServicesSection service="modular-kitchen" pageType="city" cityName={entry.cityName} />
      <KitchenRelatedBlogs slug={entry.urlSlug} />
      <Footer />
    </>
  );
};

export default KitchenBuilderHubTemplate;
