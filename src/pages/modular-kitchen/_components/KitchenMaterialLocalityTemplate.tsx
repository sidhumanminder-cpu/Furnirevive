/**
 * Generic material × locality template.
 * Works for acrylic, laminate, glass, PU, membrane — any material batch.
 * Pass `entry` (any material registry entry) + `faqs` array.
 */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, Sparkles, MapPin } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { setPageMetadata } from "@/lib/metadata.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import PremiumKitchenGallery from "./PremiumKitchenGallery.tsx";
import { KITCHEN_GALLERY_IMAGES } from "./kitchen-gallery-images.ts";
import { WHY_CHOOSE_CARDS } from "../_data/kitchen-why-choose.ts";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import { NearMeCTA } from "@/components/kitchen-near-me-cta.tsx";
import LocalityProfileSection from "./LocalityProfileSection.tsx";
import { getLocalityProfile, getMaterialSuitability } from "@/lib/registry/locality-profile-engine.ts";

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

// ─── Per-material feature cards ───────────────────────────────────────────────
const MATERIAL_FEATURES: Record<string, readonly { title: string; description: string }[]> = {
  acrylic: [
    { title: "Mirror-Like Gloss Finish", description: "Ultra-reflective surface that adds depth and light to your kitchen" },
    { title: "UV Resistant Coating", description: "Won't yellow or fade even with direct sunlight exposure over years" },
    { title: "Wide Colour Range", description: "100+ solid and metallic shades to match any interior palette" },
    { title: "Easy Wipe-Clean Surface", description: "Non-porous surface — stains, grease, and fingerprints wipe off instantly" },
  ],
  laminate: [
    { title: "Scratch-Resistant Surface", description: "High-pressure laminate withstands daily cutting board and utensil contact" },
    { title: "Wide Design Range", description: "300+ textures, wood grains, solids, and abstract patterns to suit any style" },
    { title: "Low Maintenance", description: "A simple wipe-down is all you need — no polishing or sealing required" },
    { title: "Budget-Friendly Value", description: "Best price-to-quality ratio of any kitchen finish — ideal for value-conscious buyers" },
  ],
  glass: [
    { title: "Elegant Transparency", description: "Glass doors create an open, display kitchen effect with a contemporary look" },
    { title: "Easy to Wipe", description: "Smooth glass surface cleans instantly — no surface texture to trap grease" },
    { title: "Premium Aesthetics", description: "Frosted, tinted, or clear glass adds a luxury hotel-quality feel" },
    { title: "Custom Back-Painted Options", description: "Any colour can be back-painted behind the glass for a fully bespoke look" },
  ],
  pu: [
    { title: "Furniture-Grade Smooth Finish", description: "PU spray delivers a paint-grade satin sheen unmatched by any other kitchen finish" },
    { title: "Highly UV-Resistant", description: "Will not yellow or chalk over years — maintains its colour and sheen for a decade" },
    { title: "Extremely Durable", description: "Hard-cured PU coating resists chips, scratches, and daily kitchen wear" },
    { title: "Wide Colour Palette", description: "Any RAL colour can be matched — perfect for custom and designer kitchens" },
  ],
  membrane: [
    { title: "Soft-Touch Matte Finish", description: "Premium wrapped surface with a tactile, furniture-like feel in every colour" },
    { title: "3D Profile Routing", description: "Membrane wraps into routed grooves — only finish that supports 3D door profiles" },
    { title: "No Joint Lines", description: "Continuous wrapped surface with no visible joints or seams on the shutter face" },
    { title: "Matte Colour Range", description: "Dozens of deep matte and soft-close colour options for contemporary interiors" },
  ],
};

// ─── Per-material breadcrumb label ────────────────────────────────────────────
const MATERIAL_PAGE_LABEL: Record<string, string> = {
  acrylic: "Acrylic Kitchens",
  laminate: "Laminate Kitchens",
  glass: "Glass Kitchens",
  pu: "PU Finish Kitchens",
  membrane: "Membrane Kitchens",
  veneer: "Veneer Kitchens",
  pvc: "PVC Kitchens",
  "stainless-steel": "Stainless Steel Kitchens",
};

// ─── Shared base type (satisfied by every material locality registry entry) ───
export type KitchenMaterialLocalityBaseEntry = {
  urlSlug: string;
  localitySlug: string;
  localityName: string;
  materialSlug: string;
  materialName: string;
  citySlug: string;
  cityName: string;
  affluence: "ultra-high" | "high" | "mid-high" | "mid";
  priceMin: number;
  priceMax: number;
  nearby: string[];
  layoutCrossLink: string;
};

type Props = {
  entry: KitchenMaterialLocalityBaseEntry;
  faqs: readonly { q: string; a: string }[];
};

const KitchenMaterialLocalityTemplate = ({ entry, faqs }: Props) => {
  const matLabel = entry.materialName;
  const canonical = `${CANONICAL_ORIGIN}/${entry.urlSlug}`;
  const metaTitle = `${matLabel} Modular Kitchen in ${entry.localityName} | FurniRevive`;
  const metaDesc = `Get a custom ${matLabel.toLowerCase()} modular kitchen in ${entry.localityName}, ${entry.cityName}. ${fmt(entry.priceMin)}–${fmt(entry.priceMax)}, free design, 10-year warranty.`;
  const h1 = `${matLabel} Modular Kitchen in ${entry.localityName}`;
  const breadcrumbLabel = MATERIAL_PAGE_LABEL[entry.materialSlug] ?? `${matLabel} Kitchens`;
  const features = MATERIAL_FEATURES[entry.materialSlug] ?? MATERIAL_FEATURES["acrylic"];

  // Locality differentiation — uses verified sofa repair registry data where available
  const localityProfile = getLocalityProfile(entry.localitySlug, entry.affluence);
  const materialSuitability = getMaterialSuitability(entry.materialSlug, entry.localityName, entry.affluence);

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
        { "@type": "ListItem", position: 4, name: breadcrumbLabel, item: `${CANONICAL_ORIGIN}/modular-kitchen-${entry.materialSlug}` },
        { "@type": "ListItem", position: 5, name: entry.localityName, item: canonical },
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
      provider: { "@type": "LocalBusiness", name: "FurniRevive", telephone: PHONE_NUMBER, url: CANONICAL_ORIGIN, areaServed: entry.localityName },
      description: metaDesc,
      offers: { "@type": "AggregateOffer", lowPrice: entry.priceMin, highPrice: entry.priceMax, priceCurrency: "INR" },
    });

    return () => {
      cleanupMeta();
      breadcrumbSchema.remove();
      faqSchema.remove();
      serviceSchema.remove();
    };
  }, [entry, canonical, metaTitle, metaDesc, h1, faqs, breadcrumbLabel]);

  const nearbyLocalities = entry.nearby.filter(Boolean);

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
          <Link to={`/modular-kitchen-${entry.materialSlug}`} className="hover:text-white transition-colors cursor-pointer">{breadcrumbLabel}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/80">{entry.localityName}</span>
        </nav>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto pt-12 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">{h1}</h1>
          <p className="text-lg text-white/85 mb-6 text-balance">
            FurniRevive designs and installs {matLabel.toLowerCase()} modular kitchens in {entry.localityName} — 10-year warranty, free 3D design.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 text-sm">
            {["Free 3D Design", "10-Year Warranty", `${entry.localityName} Service`, `${matLabel} Finish`].map((b) => (
              <span key={b} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />{b}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a ${matLabel.toLowerCase()} modular kitchen in ${entry.localityName}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <KitchenTrustStrip />

      {/* Stats */}
      <section className="py-8 px-4 bg-amber-700 text-white">
        <div className="mx-auto max-w-5xl grid grid-cols-3 gap-4 text-center">
          <div><p className="text-2xl font-bold">500+</p><p className="text-sm text-white/80">Kitchens Completed</p></div>
          <div><p className="text-2xl font-bold">14 Days</p><p className="text-sm text-white/80">Avg. Installation</p></div>
          <div><p className="text-2xl font-bold">10-Year</p><p className="text-sm text-white/80">Warranty</p></div>
        </div>
      </section>

      {/* Price overview */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">{matLabel} Kitchen Price in {entry.localityName}</h2>
            <p className="text-muted-foreground text-sm">Starting from {fmt(entry.priceMin)} — Premium up to {fmt(entry.priceMax)}+</p>
          </div>
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer text-sm whitespace-nowrap">
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Gallery */}
      <PremiumKitchenGallery
        images={KITCHEN_GALLERY_IMAGES}
        title={`${matLabel} Kitchen Designs in ${entry.localityName}`}
        subtitle={`${matLabel} finish kitchens installed in ${entry.localityName} homes`}
        filter={entry.materialSlug}
        initialVisible={6}
      />

      {/* Material Features */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2">{matLabel} Kitchen Features</h2>
        <p className="text-muted-foreground mb-7 text-sm">Why homeowners in {entry.localityName} choose {matLabel.toLowerCase()} finish for their modular kitchens</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((feat) => (
            <div key={feat.title} className="rounded-xl border border-border bg-background p-5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{feat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locality profile + material suitability */}
      <LocalityProfileSection
        localityName={entry.localityName}
        cityName={entry.cityName}
        profile={localityProfile}
        suitability={materialSuitability}
      />

      {/* Layout cross-link */}
      <section className="py-10 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-foreground mb-1">Explore L-Shape {matLabel} Kitchens</h2>
            <p className="text-muted-foreground text-sm">See L-Shape modular kitchen options with {matLabel.toLowerCase()} finish in {entry.localityName}</p>
          </div>
          <Link
            to={`/${entry.layoutCrossLink}`}
            className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer text-sm whitespace-nowrap"
          >
            View L-Shape Kitchens <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Hub uplink */}
      <section className="py-8 px-6 max-w-5xl mx-auto">
        <Link
          to={`/modular-kitchen-${entry.localitySlug}`}
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors cursor-pointer"
        >
          <MapPin className="w-4 h-4" /> See all kitchens in {entry.localityName}
        </Link>
      </section>

      {/* Why FurniRevive */}
      <section className="bg-stone-900 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose FurniRevive in {entry.localityName}?</h2>
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

      {/* Nearby localities */}
      {nearbyLocalities.length > 0 && (
        <section className="py-12 px-6 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-700" /> {matLabel} Kitchens in Nearby Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {nearbyLocalities.map((slug) => {
              const displayName = slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
                .replace(" Delhi", "").replace(" Gurgaon", "").replace(" Noida", "").replace(" Ghaziabad", "").replace(" Faridabad", "");
              return (
                <Link key={slug} to={`/${entry.materialSlug}-modular-kitchen-${slug}`}
                  className="bg-muted/50 border border-border rounded-lg p-3 text-center text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer">
                  {matLabel} Kitchen in {displayName}
                </Link>
              );
            })}
          </div>
        </section>
      )}

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
          <h2 className="text-2xl font-bold mb-3">Get a Free {matLabel} Kitchen Design for Your {entry.localityName} Home</h2>
          <p className="text-white/85 mb-6">Free home visit, 3D design within 48 hours, transparent pricing — no surprises.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-amber-800 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call Now — Free Quote
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a free ${matLabel.toLowerCase()} kitchen design consultation in ${entry.localityName}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <NearMeCTA variant="compact" pageType="material" pageValue={entry.materialName} />
      <HomeServicesSection service="modular-kitchen" pageType="material" cityName={entry.cityName} />
      <KitchenRelatedBlogs slug={entry.urlSlug} />
      <Footer />
    </>
  );
};

export default KitchenMaterialLocalityTemplate;
export type { Props as KitchenMaterialLocalityTemplateProps };
