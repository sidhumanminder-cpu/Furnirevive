import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneCall, MessageCircle, CheckCircle2, ChevronRight, MapPin,
  LayoutPanelLeft, Star, Home, Pencil, Factory, ShieldCheck,
} from "lucide-react";
import { setPageMetadata } from "@/lib/metadata.ts";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import PremiumKitchenGallery from "./PremiumKitchenGallery.tsx";
import { KITCHEN_GALLERY_IMAGES } from "./kitchen-gallery-images.ts";
import { WHY_CHOOSE_CARDS } from "../_data/kitchen-why-choose.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import { KITCHEN_MATERIAL_CITY_REGISTRY } from "@/lib/registry/kitchen-material-city-registry.ts";
import type { KitchenLocalityHubEntry } from "@/lib/registry/kitchen-locality-hub-registry.ts";
import { buildHubFaqs, getLayoutsForLocality, KITCHEN_LOCALITY_HUB_REGISTRY } from "@/lib/registry/kitchen-locality-hub-registry.ts";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import LocalityProfileSection from "./LocalityProfileSection.tsx";
import { getLocalityProfile, getLayoutSuitability } from "@/lib/registry/locality-profile-engine.ts";
import { NearMeCTA } from "@/components/kitchen-near-me-cta.tsx";

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

const LAYOUT_DISPLAY: Record<string, string> = {
  "l-shape": "L-Shape",
  "parallel": "Parallel",
  "straight": "Straight",
  "u-shape": "U-Shape",
};

// ─── Locality description (2-sentence, parameterised) ────────────────────────
function localityDescription(e: KitchenLocalityHubEntry): { p1: string; p2: string } {
  const { localityName, cityName, affluence } = e;
  const tier: Record<KitchenLocalityHubEntry["affluence"], { home: string; need: string }> = {
    "ultra-high": {
      home: "luxury villas, high-rise penthouses, and premium builder-floor residences",
      need: "island kitchens, open-plan layouts, and premium imported hardware from Hettich, Blum, and Hafele",
    },
    "high": {
      home: "premium apartments, independent floors, and well-appointed builder societies",
      need: "sleek acrylic and PU-finish kitchens with full-extension drawer systems and soft-close hardware",
    },
    "mid-high": {
      home: "mid-to-premium apartment complexes and independent residential sectors",
      need: "durable L-shape and parallel kitchens with laminate or acrylic finishes that balance quality and value",
    },
    "mid": {
      home: "established residential colonies and affordable housing sectors",
      need: "practical laminate and PVC kitchens with efficient straight or L-shape layouts",
    },
  };
  const t = tier[affluence];
  return {
    p1: `${localityName} is home to ${t.home} — a neighbourhood where homeowners invest in quality interiors that match their living standards. FurniRevive has designed and installed modular kitchens across ${localityName} since our founding, building a strong local reputation for precision, reliability, and after-sales support.`,
    p2: `${cityName}'s ${localityName} residents typically look for ${t.need}. Our in-house design team visits your home in ${localityName}, measures the space, and creates a 3D kitchen plan within 48 hours — completely free with no obligation to proceed.`,
  };
}

// ─── 3 locality highlight cards (affluence-derived) ──────────────────────────
type HighlightCard = { title: string; subtitle: string; description: string };

function localityHighlights(e: KitchenLocalityHubEntry): HighlightCard[] {
  const { localityName, affluence } = e;
  const cards: Record<KitchenLocalityHubEntry["affluence"], HighlightCard[]> = {
    "ultra-high": [
      { title: "Island & Peninsula Kitchens", subtitle: "For large open-plan spaces", description: `${localityName}'s spacious villas and high-rises give room for island layouts — the centrepiece of modern luxury kitchens.` },
      { title: "Premium Imported Hardware", subtitle: "Hettich, Blum, Hafele as standard", description: `Every cabinet in ${localityName} installations uses full-extension soft-close drawers and lifetime-rated hinge systems.` },
      { title: "Open-Plan Kitchen Design", subtitle: "Living–dining–kitchen integration", description: `We design ${localityName} kitchens to flow seamlessly into living and dining areas — critical for open-plan homes.` },
    ],
    "high": [
      { title: "Acrylic & PU Gloss Finish", subtitle: "Showroom-quality look", description: `High-gloss acrylic and PU finishes are the most popular choices in ${localityName} — bright, easy to clean, and premium.` },
      { title: "Full-Extension Drawer Systems", subtitle: "Deep-pull, soft-close", description: `Tandem-box and deep-pull drawer systems maximise storage in ${localityName} kitchens without sacrificing aesthetics.` },
      { title: "Modular Storage Optimisation", subtitle: "Every centimetre used", description: `Our designers specialise in fitting maximum storage into ${localityName} apartments with efficient corner and overhead units.` },
    ],
    "mid-high": [
      { title: "L-Shape & Parallel Layouts", subtitle: "Best-value configurations", description: `L-shape and parallel kitchens are the top choices for ${localityName} homes — efficient layouts that fit most apartment sizes.` },
      { title: "Laminate & Acrylic Finishes", subtitle: "Durable and affordable", description: `Laminate and acrylic shutters offer ${localityName} homeowners a balance of quality, durability, and competitive pricing.` },
      { title: "Compact Kitchen Solutions", subtitle: "Smart use of limited space", description: `${localityName} apartments often have compact kitchens — our modular designs maximise every square foot with vertical storage.` },
    ],
    "mid": [
      { title: "Budget-Friendly Laminate", subtitle: "Scratch-resistant and durable", description: `Laminate finish kitchens are the most popular choice in ${localityName} — long-lasting, easy to maintain, and cost-effective.` },
      { title: "Straight & L-Shape Layouts", subtitle: "Practical and efficient", description: `Straight and L-shape layouts suit most ${localityName} kitchens, delivering maximum utility with minimum footprint.` },
      { title: "Waterproof PVC Options", subtitle: "Ideal for humid conditions", description: `PVC shutters are a practical choice for ${localityName} homes — 100% waterproof and termite-proof at a budget-friendly price.` },
    ],
  };
  return cards[affluence];
}

// ─── Testimonials (3 templates, parameterised) ───────────────────────────────
function localityTestimonials(e: KitchenLocalityHubEntry) {
  const { localityName, cityName, affluence } = e;
  const isLux = affluence === "ultra-high" || affluence === "high";
  return [
    {
      name: "Priya S.",
      location: `${localityName}, ${cityName}`,
      rating: 5,
      text: `FurniRevive transformed our ${localityName} kitchen completely. The 3D design was ready in 2 days, installation was clean, and the finish quality is exactly what we were shown in the design. Zero surprises — highly recommended.`,
    },
    {
      name: "Amit R.",
      location: `${localityName}, ${cityName}`,
      rating: 5,
      text: isLux
        ? `We wanted an open-plan kitchen for our ${localityName} villa and FurniRevive delivered exactly that. The island counter and imported Blum hardware are outstanding. The team was professional and the timeline was kept.`
        : `The L-shape modular kitchen FurniRevive installed in our ${localityName} flat is fantastic. Excellent storage, quality shutters, and the team was polite and on time. The 10-year warranty gives us real peace of mind.`,
    },
    {
      name: "Sunita M.",
      location: `${localityName}, ${cityName}`,
      rating: 5,
      text: `I was impressed by how the FurniRevive team understood our ${localityName} home's requirements. The designer suggested the right layout, the pricing was transparent, and the final kitchen exceeded our expectations.`,
    },
  ];
}

// ─── 4-step process ───────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  { icon: Home, step: 1, title: "Free Home Visit", desc: "Our designer visits your home, measures the kitchen, and discusses your requirements and style preferences." },
  { icon: Pencil, step: 2, title: "3D Design in 48 Hours", desc: "You receive a full 3D kitchen plan with layout drawings, finish options, and itemised pricing — all free." },
  { icon: Factory, step: 3, title: "Factory Manufacturing (3–4 Weeks)", desc: "Cabinets are precision CNC-cut at our factory with quality checks at every stage before dispatch." },
  { icon: ShieldCheck, step: 4, title: "Installation & 10-Year Warranty", desc: "Professional installation in 2–4 days. 10-year structural warranty activated at handover." },
] as const;

type Props = { entry: KitchenLocalityHubEntry };

const KitchenLocalityHubTemplate = ({ entry }: Props) => {
  const canonical = `${CANONICAL_ORIGIN}/${entry.urlSlug}`;
  const metaTitle = `Modular Kitchen in ${entry.localityName} | FurniRevive`;
  const metaDesc = `Get a custom modular kitchen in ${entry.localityName}, ${entry.cityName}. ${fmt(entry.priceMin)}–${fmt(entry.priceMax)}, free design consultation, 10-year warranty. FurniRevive.`;
  const h1 = `Modular Kitchen in ${entry.localityName}`;
  const localityProfile = getLocalityProfile(entry.localitySlug, entry.affluence);
  const layoutSuitability = getLayoutSuitability("l-shape", entry.localityName, entry.affluence);
  const faqs = buildHubFaqs(entry);
  const layoutPages = getLayoutsForLocality(entry.localitySlug);
  const desc = localityDescription(entry);
  const highlights = localityHighlights(entry);
  const testimonials = localityTestimonials(entry);

  useEffect(() => {
    const cleanupMeta = setPageMetadata({
      title: metaTitle,
      description: metaDesc,
      canonical,
      ogImage: "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
      ogUrl: canonical,
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
        { "@type": "ListItem", position: 4, name: h1, item: canonical },
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

  // Auto-fill nearby hubs to 7–10 using same-city pool when explicit list is short
  const nearbyHubs = (() => {
    const explicit = entry.nearby.filter(Boolean);
    if (explicit.length >= 7) return explicit.slice(0, 10);

    // Extract sector number from slug for adjacency sorting (e.g. "sector-93-gurgaon" → 93)
    const sectorMatch = entry.localitySlug.match(/sector-(\d+)/);
    const currentSector = sectorMatch ? parseInt(sectorMatch[1], 10) : null;

    const sameCityPool = KITCHEN_LOCALITY_HUB_REGISTRY
      .filter((h) => h.citySlug === entry.citySlug && h.urlSlug !== entry.urlSlug && !explicit.includes(h.localitySlug))
      .sort((a, b) => {
        if (currentSector !== null) {
          const aMatch = a.localitySlug.match(/sector-(\d+)/);
          const bMatch = b.localitySlug.match(/sector-(\d+)/);
          if (aMatch && bMatch) {
            return Math.abs(parseInt(aMatch[1], 10) - currentSector) - Math.abs(parseInt(bMatch[1], 10) - currentSector);
          }
          if (aMatch) return -1;
          if (bMatch) return 1;
        }
        return 0;
      });

    const needed = 10 - explicit.length;
    const extras = sameCityPool.slice(0, needed).map((h) => h.localitySlug);
    return [...explicit, ...extras];
  })();
  const publishedMaterials = MODULAR_KITCHEN_MATERIAL_REGISTRY.filter((m) => m.status === "published");

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center justify-center bg-stone-900 overflow-hidden">
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
          <span className="text-white/80">{entry.localityName}</span>
        </nav>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto pt-12 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">{h1}</h1>
          <p className="text-lg text-white/85 mb-6 text-balance">
            FurniRevive designs and installs modular kitchens in {entry.localityName} — all layouts, all finishes, 10-year warranty. Free home visit and 3D design.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 text-sm">
            {["Free Design Consultation", "10-Year Warranty", `${entry.localityName} Service`, "All Layouts & Finishes"].map((b) => (
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
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a modular kitchen in ${entry.localityName}`}
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
            <h2 className="text-xl font-bold text-foreground mb-1">Modular Kitchen Price in {entry.localityName}</h2>
            <p className="text-muted-foreground text-sm">Starting from {fmt(entry.priceMin)} — Premium up to {fmt(entry.priceMax)}+</p>
          </div>
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer text-sm whitespace-nowrap">
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Locality description */}
      <section className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-4">Modular Kitchens for {entry.localityName} Homes</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{desc.p1}</p>
        <p className="text-muted-foreground leading-relaxed">{desc.p2}</p>
      </section>

      {/* ── Locality Profile ── */}
      <LocalityProfileSection
        localityName={entry.localityName}
        cityName={entry.cityName}
        profile={localityProfile}
        suitability={layoutSuitability}
      />

      {/* Locality highlight cards */}
      <section className="py-10 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-5">
            {highlights.map((card) => (
              <div key={card.title} className="rounded-xl border border-border bg-background p-6">
                <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-700" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{card.title}</h3>
                <p className="text-xs text-amber-700 font-medium mb-2">{card.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <PremiumKitchenGallery
        images={KITCHEN_GALLERY_IMAGES}
        title={`Kitchen Designs in ${entry.localityName}`}
        subtitle={`Modular kitchens installed in ${entry.localityName} homes`}
        initialVisible={6}
      />

      {/* Layout cards — upgraded with description + best-for */}
      {layoutPages.length > 0 && (
        <section className="py-14 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">Kitchen Layouts in {entry.localityName}</h2>
          <p className="text-muted-foreground mb-7 text-sm">Choose the layout that best fits your kitchen shape and lifestyle</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {layoutPages.map((lp) => (
              <Link
                key={lp.urlSlug}
                to={`/${lp.urlSlug}`}
                className="group rounded-xl border border-border bg-background hover:border-amber-700 transition-colors p-5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-1">
                  <LayoutPanelLeft className="w-5 h-5 text-amber-700" />
                </div>
                <div className="font-semibold text-foreground group-hover:text-amber-700 transition-colors">
                  {LAYOUT_DISPLAY[lp.layoutSlug] ?? lp.layoutName} Kitchen
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  {lp.layoutDescription.split("—")[0].trim()}
                </div>
                <div className="text-xs text-amber-700/80 font-medium">
                  Best for: {lp.bestFor}
                </div>
                <div className="text-xs font-semibold text-amber-700 mt-auto">
                  {fmt(lp.priceMin)} – {fmt(lp.priceMax)}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Material cards — upgraded with finish + best-for + per-sq-ft pricing */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-2">Kitchen Finishes & Materials in {entry.localityName}</h2>
          <p className="text-muted-foreground mb-6 text-sm">Choose the right material for your {entry.localityName} home</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {publishedMaterials.map((mat) => {
              const materialCityExists = KITCHEN_MATERIAL_CITY_REGISTRY.some(
                (e) => e.materialSlug === mat.slug && e.citySlug === entry.citySlug
              );
              const href = materialCityExists
                ? `/${mat.slug}-modular-kitchen-${entry.citySlug}`
                : `/modular-kitchen-${mat.slug}`;
              return (
                <Link
                  key={mat.slug}
                  to={href}
                  className="group rounded-xl border border-border bg-background hover:border-amber-700 transition-colors p-5 flex flex-col gap-1.5 cursor-pointer"
                >
                  <div className="font-semibold text-foreground group-hover:text-amber-700 transition-colors">
                    {mat.shortName} Kitchen
                  </div>
                  <div className="text-xs text-muted-foreground">{mat.finish}</div>
                  <div className="text-xs text-amber-700/80 leading-relaxed">
                    Best for: {mat.bestFor}
                  </div>
                  <div className="text-xs font-semibold text-amber-700 mt-1">
                    ₹{mat.costMin.toLocaleString("en-IN")}–₹{mat.costMax.toLocaleString("en-IN")} /sq.ft
                  </div>
                </Link>
              );
            })}
          </div>
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

      {/* 4-step process */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2 text-center">Our Process</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">
          From site visit to installed kitchen in as little as 3 weeks
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {PROCESS_STEPS.map(({ icon: Icon, step, title, desc: stepDesc }) => (
            <div key={step} className="rounded-xl border border-border bg-background p-5 flex flex-col gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                {step}
              </div>
              <Icon className="w-5 h-5 text-amber-700" />
              <h3 className="font-semibold text-foreground text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{stepDesc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
            What Our {entry.localityName} Customers Say
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-8">
            Real feedback from homeowners in {entry.localityName}
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-background p-5 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{`"${t.text}"`}</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby localities */}
      {nearbyHubs.length > 0 && (
        <section className="py-12 px-6 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-700" /> Nearby Areas We Also Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {nearbyHubs.map((slug) => {
              const displayName = slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
                .replace(" Delhi", "").replace(" Gurgaon", "").replace(" Noida", "").replace(" Ghaziabad", "").replace(" Faridabad", "");
              return (
                <Link key={slug} to={`/modular-kitchen-${slug}`}
                  className="bg-muted/50 border border-border rounded-lg p-3 text-center text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer">
                  Modular Kitchen in {displayName}
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

      {/* Near Me CTA — between FAQs and hard-sell section */}
      <NearMeCTA variant="compact" pageType="locality" />

      {/* CTA */}
      <section className="py-12 px-6 bg-amber-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Get a Free Kitchen Design for Your {entry.localityName} Home</h2>
          <p className="text-white/85 mb-6">Free home visit, 3D design within 48 hours, transparent pricing — no surprises.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-amber-800 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call Now — Free Quote
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a free modular kitchen design consultation in ${entry.localityName}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <HomeServicesSection service="modular-kitchen" pageType="locality" cityName={entry.cityName} />
      <KitchenRelatedBlogs slug={entry.urlSlug} />
      <Footer />
    </>
  );
};

export default KitchenLocalityHubTemplate;
