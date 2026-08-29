/**
 * Project Template — /modular-kitchen-{projectSlug}
 * Programmatic SEO for residential project-specific modular kitchen pages.
 */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, MapPin, Building2, Home, Star } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { setPageMetadata } from "@/lib/metadata.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import PremiumKitchenGallery from "./PremiumKitchenGallery.tsx";
import { KITCHEN_GALLERY_IMAGES } from "./kitchen-gallery-images.ts";
import { WHY_CHOOSE_CARDS } from "../_data/kitchen-why-choose.ts";
import type { KitchenProjectEntry, ProjectTier, ProjectPageType } from "@/lib/registry/kitchen-project-registry.ts";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";

const CANONICAL_ORIGIN = "https://furnirevive.com";

type Props = {
  entry: KitchenProjectEntry;
  faqs: readonly { q: string; a: string }[];
};

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

const PAGE_TYPE_LABEL: Record<ProjectPageType, string> = {
  modular: "",
  luxury: "Luxury",
  island: "Island",
  affordable: "Affordable",
  "l-shape": "L-Shape",
};

const TIER_BADGE_CLASS: Record<ProjectTier, string> = {
  luxury: "bg-amber-700/80",
  premium: "bg-stone-600/80",
  midrange: "bg-green-700/80",
};

const TIER_FIT_LABEL: Record<ProjectTier, string> = {
  luxury: "bespoke fit-out",
  premium: "premium fit-out",
  midrange: "quality fit-out",
};

const TIER_CTA: Record<ProjectTier, string> = {
  luxury: "Get a Luxury Kitchen Design",
  premium: "Get a Premium Kitchen Design",
  midrange: "Get an Affordable Kitchen Quote",
};

const POSSESSION_SUB: Record<KitchenProjectEntry["possessionStatus"], string> = {
  "ready": "Your apartment is ready — let's fit your dream kitchen.",
  "under-construction": "Planning your new home? Lock in your kitchen design early.",
  "new-launch": "New launch — be among the first to plan your kitchen.",
};

type LayoutCard = { label: string; slug: string };
const STYLE_LAYOUTS: Record<string, LayoutCard[]> = {
  "open-island": [
    { label: "Island", slug: "island" },
    { label: "Parallel", slug: "parallel" },
    { label: "U-Shape", slug: "u-shape" },
  ],
  "l-shape": [
    { label: "L-Shape", slug: "l-shape" },
    { label: "Straight", slug: "straight" },
    { label: "Parallel", slug: "parallel" },
  ],
  "compact-l-shape": [
    { label: "L-Shape", slug: "l-shape" },
    { label: "Straight", slug: "straight" },
    { label: "Parallel", slug: "parallel" },
  ],
};

const POSSESSION_BADGE: Record<KitchenProjectEntry["possessionStatus"], string> = {
  "ready": "Ready to Move",
  "under-construction": "Under Construction",
  "new-launch": "New Launch",
};

const KitchenProjectTemplate = ({ entry, faqs }: Props) => {
  const canonical = `${CANONICAL_ORIGIN}/modular-kitchen-${entry.projectSlug}`;
  const typeLabel = PAGE_TYPE_LABEL[entry.pageType];
  const h1 = typeLabel ? `${typeLabel} Modular Kitchen for ${entry.projectName}` : `Modular Kitchen for ${entry.projectName}`;
  const metaTitle = `${entry.pageType === "modular" ? "" : typeLabel + " "}Modular Kitchen for ${entry.projectName} | FurniRevive`;
  const metaDesc = `Custom modular kitchens for ${entry.projectName} by ${entry.builderName} in ${entry.localityName}, ${entry.cityName}. ${fmt(entry.priceMin)}–${fmt(entry.priceMax)} ${TIER_FIT_LABEL[entry.projectTier]}, free 3D design, 10-year warranty.`;
  const galleryFilter = entry.projectTier === "midrange" ? "laminate" : "acrylic";

  useEffect(() => {
    const cleanupMeta = setPageMetadata({
      title: metaTitle,
      description: metaDesc,
      canonical,
      ogUrl: canonical,
      ogType: "website",
    });

    const breadcrumbSchema = injectJsonLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${CANONICAL_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Modular Kitchen", item: `${CANONICAL_ORIGIN}/modular-kitchen` },
        { "@type": "ListItem", position: 3, name: entry.cityName, item: `${CANONICAL_ORIGIN}/modular-kitchen-${entry.citySlug}` },
        { "@type": "ListItem", position: 4, name: `${entry.builderName} Kitchens`, item: `${CANONICAL_ORIGIN}/${entry.builderSlug}-modular-kitchen` },
        { "@type": "ListItem", position: 5, name: entry.projectName, item: canonical },
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

  const layouts: LayoutCard[] = STYLE_LAYOUTS[entry.kitchenStyle] ?? STYLE_LAYOUTS["l-shape"];

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
          <Link to="/" className="hover:text-white transition-colors cursor-pointer"><Home className="w-3 h-3 inline" /> Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/modular-kitchen" className="hover:text-white transition-colors cursor-pointer">Modular Kitchen</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/modular-kitchen-${entry.citySlug}`} className="hover:text-white transition-colors cursor-pointer">{entry.cityName}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/${entry.builderSlug}-modular-kitchen`} className="hover:text-white transition-colors cursor-pointer">{entry.builderName}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/80">{entry.projectName}</span>
        </nav>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto pt-12 pb-8">
          <div className={`inline-flex items-center gap-1.5 ${TIER_BADGE_CLASS[entry.projectTier]} text-white text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
            <Building2 className="w-3 h-3" /> {entry.projectName}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">{h1}</h1>
          <p className="text-lg text-white/85 mb-6 text-balance">{POSSESSION_SUB[entry.possessionStatus]}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 text-sm">
            {["Free 3D Design", "10-Year Warranty", "Slab-Perfect Fit", `${entry.projectName} Specialist`].map((b) => (
              <span key={b} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />{b}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> {TIER_CTA[entry.projectTier]}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a modular kitchen in my ${entry.projectName} apartment`}
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

      {/* Project info card */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">{entry.projectName} — Modular Kitchen Price</h2>
              <p className="text-muted-foreground text-sm">{fmt(entry.priceMin)}–{fmt(entry.priceMax)} {TIER_FIT_LABEL[entry.projectTier]}</p>
            </div>
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer text-sm whitespace-nowrap">
              Get Free Quote
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div className="bg-background rounded-lg border border-border p-3">
              <p className="text-muted-foreground text-xs mb-0.5">Avg. Unit Size</p>
              <p className="font-semibold text-foreground">{entry.averageUnitSize}</p>
            </div>
            <div className="bg-background rounded-lg border border-border p-3">
              <p className="text-muted-foreground text-xs mb-0.5">Units</p>
              <p className="font-semibold text-foreground">{entry.unitCount.toLocaleString()}</p>
            </div>
            <div className="bg-background rounded-lg border border-border p-3">
              <p className="text-muted-foreground text-xs mb-0.5">Handover</p>
              <p className="font-semibold text-foreground">{entry.handoverYear}</p>
            </div>
            <div className="bg-background rounded-lg border border-border p-3">
              <p className="text-muted-foreground text-xs mb-0.5">Status</p>
              <p className="font-semibold text-foreground">{POSSESSION_BADGE[entry.possessionStatus]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <PremiumKitchenGallery
        images={KITCHEN_GALLERY_IMAGES}
        title={`Kitchen Designs for ${entry.projectName}`}
        subtitle={`${entry.projectTier.charAt(0).toUpperCase() + entry.projectTier.slice(1)} modular kitchens installed in ${entry.cityName}`}
        filter={galleryFilter}
        initialVisible={6}
      />

      {/* Recommended layouts */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-foreground mb-2">Best Kitchen Layouts for {entry.projectName}</h2>
        <p className="text-muted-foreground text-sm mb-5">Layouts suited to the typical floor plan in {entry.projectName}</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {layouts.map((layout) => (
            <Link
              key={layout.slug}
              to={`/${layout.slug}-modular-kitchen-${entry.localitySlug}`}
              className="rounded-xl border border-border bg-background p-5 hover:border-amber-700 transition-colors cursor-pointer group"
            >
              <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-amber-700 transition-colors">
                {layout.label} Kitchen
              </h3>
              <p className="text-xs text-muted-foreground mb-3">Popular in {entry.localityName}</p>
              <span className="inline-flex items-center gap-1 text-amber-700 text-xs font-medium">
                View designs <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recommended finishes */}
      <section className="py-10 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-2">Recommended Kitchen Finishes for {entry.projectName}</h2>
          <p className="text-muted-foreground text-sm mb-5">Finishes that complement {entry.projectName}'s interior quality</p>
          <div className="flex flex-wrap gap-3">
            {entry.recommendedFinishes.map((finish) => (
              <Link
                key={finish}
                to={`/${finish}-modular-kitchen-${entry.citySlug}`}
                className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer capitalize"
              >
                {finish.replace(/-/g, " ")} Kitchen in {entry.cityName} <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why FurniRevive */}
      <section className="bg-stone-900 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why {entry.projectName} Residents Choose FurniRevive</h2>
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

      {/* Nearby / sibling projects */}
      {entry.nearbyProjects.length > 0 && (
        <section className="py-12 px-6 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-700" /> Other {entry.builderName} Projects We Serve
          </h2>
          <p className="text-muted-foreground text-sm mb-5">
            Explore kitchen designs for other {entry.builderName} projects —{" "}
            <Link to={`/${entry.builderSlug}-modular-kitchen`} className="text-amber-700 hover:text-amber-800 underline underline-offset-2 cursor-pointer">
              view all {entry.builderName} projects
            </Link>
          </p>
          <div className="flex flex-wrap gap-3">
            {entry.nearbyProjects.map((slug) => (
              <Link
                key={slug}
                to={`/modular-kitchen-${slug}`}
                className="flex items-center gap-2 bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                <Building2 className="w-3.5 h-3.5" />
                {slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Hub uplinks */}
      <section className="py-8 px-6 max-w-5xl mx-auto flex flex-wrap gap-4 border-t border-border">
        <Link
          to={`/modular-kitchen-${entry.localitySlug}`}
          className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors cursor-pointer"
        >
          <MapPin className="w-4 h-4" /> All kitchens in {entry.localityName}
        </Link>
        <Link
          to={`/modular-kitchen-${entry.citySlug}`}
          className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors cursor-pointer"
        >
          <MapPin className="w-4 h-4" /> All kitchens in {entry.cityName}
        </Link>
        <Link
          to={`/${entry.builderSlug}-modular-kitchen`}
          className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors cursor-pointer"
        >
          <Building2 className="w-4 h-4" /> {entry.builderName} Kitchens
        </Link>
        <Link
          to="/modular-kitchen"
          className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors cursor-pointer"
        >
          <MapPin className="w-4 h-4" /> Modular Kitchen Delhi NCR
        </Link>
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

      {/* CTA */}
      <section className="py-12 px-6 bg-amber-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">{TIER_CTA[entry.projectTier]} for {entry.projectName}</h2>
          <p className="text-white/85 mb-6">Free home visit, measured to your exact slab dimensions, 3D design in 48 hours — no hidden costs.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-amber-800 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call Now — Free Quote
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a modular kitchen design for ${entry.projectName}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <HomeServicesSection />
      <KitchenRelatedBlogs slug={entry.urlSlug} />
      <Footer />
    </>
  );
};

export default KitchenProjectTemplate;
