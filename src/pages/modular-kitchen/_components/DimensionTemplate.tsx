/**
 * Dimension template for style and finish kitchen pages.
 * Used for: {dimensionValue}-modular-kitchen-{localitySlug}
 * Sections: hero → trust → stats → price card → gallery → features → design approach →
 *           best materials → why choose → FAQs → nearby → hub uplink → CTA
 */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, MapPin, Sparkles, Layers } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { setPageMetadata } from "@/lib/metadata.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import LocalityProfileSection from "./LocalityProfileSection.tsx";
import { getLocalityProfile, getScandinavianSuitability } from "@/lib/registry/locality-profile-engine.ts";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import type { KitchenDimensionEntry } from "@/lib/registry/kitchen-dimension-registry.ts";
import PremiumKitchenGallery from "./PremiumKitchenGallery.tsx";
import { KITCHEN_GALLERY_IMAGES } from "./kitchen-gallery-images.ts";
import { WHY_CHOOSE_CARDS } from "../_data/kitchen-why-choose.ts";

const CANONICAL_ORIGIN = "https://furnirevive.com";

function fmt(n: number) {
  return n >= 100_000 ? `₹${(n / 100_000).toFixed(1).replace(".0", "")}L` : `₹${(n / 1_000).toFixed(0)}K`;
}

function injectJsonLd(data: object): HTMLScriptElement {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
  return el;
}

function materialUrlPrefix(name: string): string {
  const MAP: Record<string, string> = {
    "Acrylic": "acrylic",
    "Laminate": "laminate",
    "Wood-Grain Laminate": "laminate",
    "Matte Laminate": "laminate",
    "Stone-Effect Laminate": "laminate",
    "Glass Shutters": "glass",
    "PU Finish": "pu",
    "PU Matt White": "pu",
    "PU Finish (Matt White)": "pu",
    "Membrane Finish": "membrane",
    "Membrane (Matt)": "membrane",
    "Membrane (Textured)": "membrane",
    "Acrylic + Laminate Mix": "laminate",
    "Acrylic Accents": "acrylic",
  };
  return MAP[name] ?? "laminate";
}

// ---------------------------------------------------------------------------
// Content model
// ---------------------------------------------------------------------------

type DimensionContent = {
  featureTitle: string;
  features: readonly { title: string; desc: string }[];
  designApproachTitle: string;
  designApproach: string;
  bestMaterials: readonly { name: string; reason: string }[];
  galleryFilter: string;
};

function getDimensionContent(entry: KitchenDimensionEntry): DimensionContent {
  const loc = entry.localityName;

  switch (entry.dimensionValue) {
    case "modern":
      return {
        featureTitle: "Defining Features of a Modern Kitchen",
        features: [
          { title: "Handleless Cabinets", desc: "J-pull or push-to-open for a seamless facade" },
          { title: "Neutral Palettes", desc: "White, grey, beige with metallic accents" },
          { title: "Recessed LED Lighting", desc: "Under-cabinet and plinth LEDs standard" },
          { title: "Concealed Storage", desc: "Pull-out pantry, corner carousels, soft-close drawers" },
        ],
        designApproachTitle: "The Modern Design Approach",
        designApproach: `Modern modular kitchens prioritise function over ornamentation. Every element earns its place — from integrated appliances to handleless profiles that make the kitchen feel like a piece of furniture rather than a room. In ${loc} homes, modern kitchens work especially well in open-plan layouts where the kitchen is visible from the living area.`,
        bestMaterials: [
          { name: "Acrylic", reason: "High-sheen reflective surface central to modern aesthetics" },
          { name: "PU Finish", reason: "Premium lacquered look with excellent durability" },
          { name: "Laminate", reason: "Budget-friendly modern look in matte or silk finish" },
        ],
        galleryFilter: "modern",
      };

    case "contemporary":
      return {
        featureTitle: "What Makes a Contemporary Kitchen",
        features: [
          { title: "Mixed Materials", desc: "Wood-effect + lacquer for layered warmth" },
          { title: "Subtle Hardware", desc: "Brushed steel or matte black pulls" },
          { title: "Warm Palette", desc: "Creams, taupes, soft greens, blush" },
          { title: "Statement Island", desc: "Optional for 3BHK+ layouts" },
        ],
        designApproachTitle: "The Contemporary Design Philosophy",
        designApproach: `Contemporary design sits between modern and traditional — it references classic proportions but uses current materials and colours. It ages better than pure modern because the warm palette and mixed textures are less trend-sensitive.`,
        bestMaterials: [
          { name: "Laminate", reason: "Warm wood-grain and textured options suit contemporary style best" },
          { name: "Membrane Finish", reason: "Smooth curves and soft-touch surfaces with subtle sheen" },
          { name: "Acrylic Accents", reason: "Use acrylic for island or feature cabinets only" },
        ],
        galleryFilter: "modern",
      };

    case "minimalist":
      return {
        featureTitle: "Core Principles of Minimalist Kitchen Design",
        features: [
          { title: "Zero Hardware", desc: "Fully integrated handleless profile" },
          { title: "Monochrome Palette", desc: "White, off-white, or deep charcoal only" },
          { title: "Concealed Appliances", desc: "Built-in fridge, oven, and dishwasher behind matching panels" },
          { title: "Clean Sightlines", desc: "No visible vents, pipes, or wiring" },
        ],
        designApproachTitle: "Minimalism as a Design System",
        designApproach: `A minimalist kitchen is the result of ruthless editing — every visible element is intentional. In ${loc} apartments, minimalist kitchens maximise the perceived size of the space and are particularly effective in straight or parallel layouts.`,
        bestMaterials: [
          { name: "PU Finish (Matt White)", reason: "The quintessential minimalist surface — zero texture, zero reflection" },
          { name: "Acrylic", reason: "Similar clean look at a lower price point" },
          { name: "Laminate", reason: "Most affordable path to a minimalist aesthetic" },
        ],
        galleryFilter: "modern",
      };

    case "scandinavian":
      return {
        featureTitle: "Elements of a Scandinavian Kitchen",
        features: [
          { title: "Light Wood Tones", desc: "Birch, ash, or oak-effect laminate doors" },
          { title: "White Carcasses", desc: "Creates contrast with warm wood fronts" },
          { title: "Natural Textures", desc: "Linen-texture laminate, stone-look countertop" },
          { title: "Functional Hardware", desc: "Brushed steel or solid brass handles" },
        ],
        designApproachTitle: "Scandi Design Philosophy",
        designApproach: `Scandinavian kitchens are designed around family life — warm, unpretentious, and built to last. The light wood + white combination reflects maximum daylight, making it ideal for ${loc} apartments that lack south-facing windows.`,
        bestMaterials: [
          { name: "Wood-Grain Laminate", reason: "The canonical Scandi material — warm, durable, budget-friendly" },
          { name: "Membrane Finish", reason: "Soft-touch white or grey for contrast upper cabinets" },
          { name: "Acrylic Accents", reason: "Use sparingly on a feature cabinet or island only" },
        ],
        galleryFilter: "laminate",
      };

    case "high-gloss":
      return {
        featureTitle: "Why High Gloss Kitchens Are Popular in NCR",
        features: [
          { title: "Mirror-Like Surface", desc: "Reflects light, makes small kitchens feel larger" },
          { title: "Easy to Clean", desc: "Wipes streak-free in seconds with a microfibre cloth" },
          { title: "Bold Colour Options", desc: "Available in white, black, grey, red, navy, and more" },
          { title: "Hotel-Lobby Aesthetic", desc: "Premium appearance at mid-range cost when done in acrylic" },
        ],
        designApproachTitle: "Getting the Best from a High Gloss Kitchen",
        designApproach: `High gloss works best in kitchens with good artificial lighting and a relatively clutter-free lifestyle. In ${loc} homes, we recommend pairing gloss shutters with a matte countertop and matte wall tiles to avoid a 'too much shine' effect.`,
        bestMaterials: [
          { name: "Acrylic", reason: "The industry standard for high-gloss — scratch-resistant and vibrant" },
          { name: "PU Finish", reason: "Premium high-gloss with deeper colour accuracy" },
          { name: "Glass Shutters", reason: "Ultra-high gloss option for feature cabinets only" },
        ],
        galleryFilter: "acrylic",
      };

    case "matte-finish":
      return {
        featureTitle: "Why Matte is the Fastest-Growing Kitchen Trend in NCR",
        features: [
          { title: "Fingerprint Resistant", desc: "Daily use without visible smudges" },
          { title: "Scratch Forgiving", desc: "Minor marks blend into the matte texture" },
          { title: "Sophisticated Look", desc: "Velvety surface reads as premium, not budget" },
          { title: "Colour Versatility", desc: "Any colour looks better in matte than gloss for lived-in kitchens" },
        ],
        designApproachTitle: "Designing with Matte Finishes",
        designApproach: `Matte finishes have overtaken gloss in new kitchen installations across ${loc} because they combine a premium look with practical durability. They suit any style from modern to contemporary to traditional.`,
        bestMaterials: [
          { name: "Matte Laminate", reason: "Most durable matte option — highly scratch and impact resistant" },
          { name: "PU Matt White", reason: "Premium soft-touch finish with zero sheen" },
          { name: "Membrane (Matt)", reason: "Wraparound matte coverage with no visible edge lines" },
        ],
        galleryFilter: "laminate",
      };

    case "textured":
      return {
        featureTitle: `Textured Kitchen Shutters — A Complete Guide for ${loc} Homes`,
        features: [
          { title: "Wood-Grain Effect", desc: "Warm, natural look without real wood maintenance" },
          { title: "Stone Texture", desc: "Limestone, marble, and slate-effect laminate options" },
          { title: "Linen & Fabric Effect", desc: "Tactile surface that photographs beautifully" },
          { title: "Geometric Emboss", desc: "3D patterns for a bespoke, designer feel" },
        ],
        designApproachTitle: "When to Choose a Textured Finish",
        designApproach: `Textured finishes add depth to any kitchen design without increasing cost significantly. In ${loc} homes, wood-grain textured laminates are the most popular choice — they warm up open-plan living areas and look better over time as minor scratches blend into the grain.`,
        bestMaterials: [
          { name: "Wood-Grain Laminate", reason: "Widest range of textures — from subtle grain to deep rustic oak" },
          { name: "Stone-Effect Laminate", reason: "Marble and slate options that cost a fraction of real stone" },
          { name: "Membrane (Textured)", reason: "Wraparound textured surface ideal for curved shutters" },
        ],
        galleryFilter: "laminate",
      };

    case "dual-tone":
      return {
        featureTitle: "Dual-Tone Kitchens — Why Two Colours Beat One",
        features: [
          { title: "Visual Depth", desc: "Base and wall units in contrasting tones create a grounded look" },
          { title: "Zone Definition", desc: "Upper/lower contrast helps define cooking vs storage zones" },
          { title: "Accent Island", desc: "Different colour island becomes a natural focal point" },
          { title: "Trend-Proof Design", desc: "Neutral combinations stay fresh for 10+ years" },
        ],
        designApproachTitle: `Planning Your Dual-Tone Kitchen in ${loc}`,
        designApproach: `The most effective dual-tone combinations pair a light upper colour (white, cream, light grey) with a darker base (navy, charcoal, sage green). For ${loc} homes, we recommend sticking to a maximum 2-step contrast to avoid the kitchen feeling busy.`,
        bestMaterials: [
          { name: "Laminate", reason: "Widest colour range for cost-effective dual-tone combinations" },
          { name: "Acrylic + Laminate Mix", reason: "Gloss upper cabinets + laminate lower units — popular premium look" },
          { name: "PU Finish", reason: "Best for bespoke colour matching across both tones" },
        ],
        galleryFilter: "modern",
      };

    default:
      return {
        featureTitle: `${entry.dimensionLabel} Kitchen Features`,
        features: [
          { title: "Premium Materials", desc: "Factory-grade finishes for lasting quality" },
          { title: "Custom Layout", desc: "Designed specifically for your kitchen dimensions" },
          { title: "Smart Storage", desc: "Every inch optimised with modern organisers" },
          { title: "10-Year Warranty", desc: "Structural warranty on all carcasses and hardware" },
        ],
        designApproachTitle: `${entry.dimensionLabel} Design Approach`,
        designApproach: `We design ${entry.dimensionLabel.toLowerCase()} kitchens tailored to ${loc} apartments, balancing aesthetics with practical daily-use requirements.`,
        bestMaterials: [
          { name: "Laminate", reason: "Versatile and durable for any style" },
          { name: "Acrylic", reason: "Premium reflective surface" },
          { name: "PU Finish", reason: "Lacquered look with deep colour accuracy" },
        ],
        galleryFilter: "all",
      };
  }
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

type Props = {
  entry: KitchenDimensionEntry;
  faqs: readonly { q: string; a: string }[];
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const DimensionTemplate = ({ entry, faqs }: Props) => {
  const content = getDimensionContent(entry);
  const canonical = `${CANONICAL_ORIGIN}/${entry.slug}`;
  const h1 = `${entry.dimensionLabel} Modular Kitchen in ${entry.localityName}`;
  const metaTitle = `${entry.dimensionLabel} Modular Kitchen in ${entry.localityName} | FurniRevive`;
  const metaDesc = `${entry.dimensionLabel} modular kitchen in ${entry.localityName}, ${entry.cityName}. ${fmt(entry.priceMin)}–${fmt(entry.priceMax)}, free 3D design, 10-year warranty.`;
  const localityProfile = getLocalityProfile(entry.localitySlug, entry.affluence);
  const scandinavianSuitability = getScandinavianSuitability(entry.localityName, entry.affluence);
  const badgeText = entry.category === "style"
    ? `Custom ${entry.dimensionLabel} Design`
    : `${entry.dimensionLabel} Kitchen`;
  const trustBadges = ["Free 3D Design", "10-Year Warranty", `${entry.localityName} Service`, entry.dimensionLabel];

  useEffect(() => {
    const cleanupMeta = setPageMetadata({
      title: metaTitle,
      description: metaDesc,
      canonical,
      ogUrl: canonical,
    });

    const breadcrumbSchema = injectJsonLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${CANONICAL_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Modular Kitchen", item: `${CANONICAL_ORIGIN}/modular-kitchen` },
        { "@type": "ListItem", position: 3, name: entry.cityName, item: `${CANONICAL_ORIGIN}/modular-kitchen-${entry.citySlug}` },
        { "@type": "ListItem", position: 4, name: entry.dimensionLabel, item: `${CANONICAL_ORIGIN}/${entry.dimensionValue}-modular-kitchen-${entry.citySlug}` },
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
  }, [entry, canonical, metaTitle, metaDesc, h1, faqs]);

  const nearbyLocalities = entry.nearby.filter(Boolean);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[440px] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80')" }} />
        <nav className="absolute top-4 left-0 right-0 px-6 flex items-center gap-1 text-white/60 text-sm z-10 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/modular-kitchen" className="hover:text-white transition-colors cursor-pointer">Modular Kitchen</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/modular-kitchen-${entry.citySlug}`} className="hover:text-white transition-colors cursor-pointer">{entry.cityName}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/80">{entry.dimensionLabel}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/80">{entry.localityName}</span>
        </nav>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto pt-12 pb-8">
          <div className="inline-block bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {badgeText}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">{h1}</h1>
          <p className="text-lg text-white/85 mb-6 text-balance">
            FurniRevive designs and installs {entry.dimensionLabel.toLowerCase()} modular kitchens in {entry.localityName} — {fmt(entry.priceMin)} onwards, free 3D design, 10-year warranty.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 text-sm">
            {trustBadges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />{b}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call for Free Quote
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a ${entry.dimensionLabel.toLowerCase()} modular kitchen in ${entry.localityName}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
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
            <h2 className="text-xl font-bold text-foreground mb-1">{entry.dimensionLabel} Modular Kitchen Price in {entry.localityName}</h2>
            <p className="text-muted-foreground text-sm">Starting from {fmt(entry.priceMin)} — fully fitted up to {fmt(entry.priceMax)}</p>
          </div>
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer text-sm whitespace-nowrap">
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Gallery */}
      <PremiumKitchenGallery
        images={KITCHEN_GALLERY_IMAGES}
        title={`${entry.dimensionLabel} Kitchen Designs in ${entry.localityName}`}
        subtitle={`${entry.dimensionLabel} modular kitchens installed in ${entry.localityName} homes`}
        filter={content.galleryFilter}
        initialVisible={6}
      />

      {/* Feature section */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2">{content.featureTitle}</h2>
        <p className="text-muted-foreground text-sm mb-7">Key elements that define this kitchen style in {entry.localityName}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {content.features.map((feat, i) => (
            <div key={feat.title} className="rounded-xl border border-border bg-background p-5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0 mt-0.5">
                {i % 2 === 0
                  ? <CheckCircle2 className="w-4 h-4 text-amber-700" />
                  : <Sparkles className="w-4 h-4 text-amber-700" />}
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{feat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design approach */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">{content.designApproachTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{content.designApproach}</p>
        </div>
      </section>

      {/* ── Locality Profile ── */}
      <LocalityProfileSection
        localityName={entry.localityName}
        cityName={entry.cityName}
        profile={localityProfile}
        suitability={scandinavianSuitability}
      />

      {/* Best materials */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-700" /> Best Materials for a {entry.dimensionLabel} Kitchen in {entry.localityName}
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {content.bestMaterials.map((mat) => (
            <Link
              key={mat.name}
              to={`/${materialUrlPrefix(mat.name)}-modular-kitchen-${entry.localitySlug}`}
              className="rounded-xl border border-border bg-background p-5 hover:border-amber-700 transition-colors cursor-pointer group"
            >
              <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-amber-700 transition-colors">{mat.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{mat.reason}</p>
              <span className="inline-flex items-center gap-1 text-xs text-amber-700 font-medium">
                Explore <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
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

      {/* Nearby localities */}
      {nearbyLocalities.length > 0 && (
        <section className="py-12 px-6 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-700" /> {entry.dimensionLabel} Kitchens in Nearby Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {nearbyLocalities.map((slug) => {
              const displayName = slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
                .replace(" Delhi", "").replace(" Gurgaon", "").replace(" Noida", "").replace(" Ghaziabad", "").replace(" Faridabad", "");
              return (
                <Link key={slug} to={`/${entry.dimensionValue}-modular-kitchen-${slug}`}
                  className="bg-muted/50 border border-border rounded-lg p-3 text-center text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer">
                  {entry.dimensionLabel} Kitchen in {displayName}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Hub uplink */}
      <section className="py-8 px-6 max-w-5xl mx-auto">
        <Link
          to={`/modular-kitchen-${entry.localitySlug}`}
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors cursor-pointer"
        >
          <MapPin className="w-4 h-4" /> See all kitchens in {entry.localityName}
        </Link>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-amber-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Get a Free {entry.dimensionLabel} Kitchen Design for Your {entry.localityName} Home</h2>
          <p className="text-white/85 mb-6">Free home visit, 3D design in 48 hours, transparent pricing — no hidden costs.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-amber-800 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call Now — Free Quote
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a free ${entry.dimensionLabel.toLowerCase()} kitchen design consultation in ${entry.localityName}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <HomeServicesSection />
      <KitchenRelatedBlogs slug={entry.slug} />
      <Footer />
    </>
  );
};

export default DimensionTemplate;
