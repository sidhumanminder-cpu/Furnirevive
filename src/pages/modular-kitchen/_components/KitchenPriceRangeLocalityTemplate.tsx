/**
 * Price-range kitchen locality template.
 * Used for: modular-kitchen-under-{cap}-{locality}
 * Caps: 1-lakh, 1-5-lakh, 2-lakh, 3-lakh
 */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, IndianRupee, MapPin, Info } from "lucide-react";
import { setPageMetadata } from "@/lib/metadata.ts";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import PremiumKitchenGallery from "./PremiumKitchenGallery.tsx";
import { KITCHEN_GALLERY_IMAGES } from "./kitchen-gallery-images.ts";
import { WHY_CHOOSE_CARDS } from "../_data/kitchen-why-choose.ts";
import type { KitchenPriceRangeLocalityEntry } from "@/lib/registry/kitchen-price-range-locality-registry.ts";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import LocalityProfileSection from "./LocalityProfileSection.tsx";
import { getLocalityProfile, getBudgetSuitability } from "@/lib/registry/locality-profile-engine.ts";
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

// ─── Per-cap content config ───────────────────────────────────────────────────
type CapContent = {
  layouts: { label: string; slug: string; note: string }[];
  materials: { label: string; slug: string }[];
  included: string[];
  notIncluded: string[];
  hardwareTier: string;
  tip: string;
};

const CAP_CONTENT: Record<string, CapContent> = {
  "1-lakh": {
    layouts: [
      { label: "Straight Kitchen", slug: "straight", note: "Best fit — maximises value at this budget" },
      { label: "Small L-Shape", slug: "l-shape", note: "Possible for compact spaces under 8 ft" },
    ],
    materials: [{ label: "Laminate", slug: "laminate" }],
    included: ["Laminate shutters", "BWR ply carcass", "Standard hardware", "Basic accessories", "Professional installation"],
    notIncluded: ["Soft-close drawers", "Premium countertop", "Tall units", "Appliance panels"],
    hardwareTier: "Standard (Ebco / Dorset)",
    tip: "A straight kitchen in laminate finish is the most value-efficient design at this budget — maximises storage per rupee spent.",
  },
  "1-5-lakh": {
    layouts: [
      { label: "L-Shape Kitchen", slug: "l-shape", note: "Most popular choice at this budget" },
      { label: "Straight Kitchen", slug: "straight", note: "Larger straight with more modules" },
      { label: "Parallel Kitchen", slug: "parallel", note: "Compact parallel for narrow kitchens" },
    ],
    materials: [
      { label: "Laminate", slug: "laminate" },
      { label: "Membrane", slug: "membrane" },
    ],
    included: ["Laminate or membrane shutters", "BWR ply carcass", "Standard/mid-range hardware", "Basic soft-close on key drawers", "Professional installation"],
    notIncluded: ["Full soft-close on all units", "Premium countertop", "Chimney panel", "Island unit"],
    hardwareTier: "Mid-range (Hettich / Ebco)",
    tip: "An L-shape with laminate shutters is the sweet spot at ₹1.5L — you get corner storage, more modules, and basic soft-close without overspending.",
  },
  "2-lakh": {
    layouts: [
      { label: "L-Shape Kitchen", slug: "l-shape", note: "Most popular at this budget" },
      { label: "Parallel Kitchen", slug: "parallel", note: "Great for galley-style spaces" },
      { label: "U-Shape Kitchen", slug: "u-shape", note: "Possible for larger kitchen footprints" },
    ],
    materials: [
      { label: "Laminate", slug: "laminate" },
      { label: "Membrane", slug: "membrane" },
      { label: "Acrylic", slug: "acrylic" },
    ],
    included: ["Laminate / membrane / entry acrylic shutters", "BWR ply carcass", "Mid-range hardware", "Soft-close on all drawers", "Quartz countertop (optional)", "Professional installation"],
    notIncluded: ["Full acrylic premium finish throughout", "Imported hardware", "Island unit", "Chimney + appliance integration"],
    hardwareTier: "Mid-range (Hettich / Grass)",
    tip: "At ₹2L you can get acrylic shutters on the upper cabinets with laminate lowers — a cost-effective way to achieve a premium look without exceeding budget.",
  },
  "3-lakh": {
    layouts: [
      { label: "L-Shape Kitchen", slug: "l-shape", note: "Full L with premium finish" },
      { label: "U-Shape Kitchen", slug: "u-shape", note: "Full U with tall units" },
      { label: "Parallel Kitchen", slug: "parallel", note: "Double-row with island possible" },
      { label: "Island Kitchen", slug: "island", note: "Island extension possible at the upper end" },
    ],
    materials: [
      { label: "Acrylic", slug: "acrylic" },
      { label: "PU Finish", slug: "pu" },
      { label: "Membrane", slug: "membrane" },
      { label: "Glass", slug: "glass" },
    ],
    included: ["Any finish (acrylic / PU / membrane / glass)", "Marine ply carcass", "Premium hardware with full soft-close", "Quartz or granite countertop", "Tall units", "Chimney & appliance integration", "Professional installation"],
    notIncluded: ["Imported Italian hardware (adds ₹50K+)", "Island with sink (structural work extra)"],
    hardwareTier: "Premium (Hettich / Blum / Grass)",
    tip: "At ₹3L you have full flexibility — material, layout, and hardware. Prioritise: (1) marine ply carcass, (2) full soft-close, (3) quartz countertop. These give the best long-term ROI.",
  },
};

type Props = {
  entry: KitchenPriceRangeLocalityEntry;
  faqs: readonly { q: string; a: string }[];
};

const BUDGET_FEATURE_CARDS = [
  { title: "BWR Ply Carcass", description: "Boiling water resistant ply used in all carcasses — resists kitchen moisture, steam and heat for decades" },
  { title: "Factory Precision", description: "CNC-cut modules with sub-millimetre accuracy — no site cutting means faster install and cleaner results" },
  { title: "10-Year Warranty Coverage", description: "Full parts and labour warranty on shutters, hardware, and carcass for 10 years from installation" },
  { title: "Free Post-Install Support", description: "Hinges, drawer slides, and fittings adjusted for free anytime in the first year after installation" },
] as const;

const KitchenPriceRangeLocalityTemplate = ({ entry, faqs }: Props) => {
  const capContent = CAP_CONTENT[entry.priceCap] ?? CAP_CONTENT["2-lakh"];
  const galleryFilter = (entry.priceCap === "1-lakh" || entry.priceCap === "1-5-lakh") ? "laminate" : "acrylic";
  const canonical = `${CANONICAL_ORIGIN}/${entry.urlSlug}`;
  const h1 = `Modular Kitchen Under ${entry.priceCapLabel} in ${entry.localityName}`;
  const metaTitle = `Modular Kitchen Under ${entry.priceCapLabel} in ${entry.localityName} | FurniRevive`;
  const localityProfile = getLocalityProfile(entry.localitySlug, entry.affluence);
  const budgetSuitability = getBudgetSuitability(entry.priceCap, entry.localityName, entry.affluence);
  const metaDesc = `Modular kitchen under ${entry.priceCapLabel} in ${entry.localityName}, ${entry.cityName}. Starting ${fmt(entry.priceFrom)}, free 3D design, 10-year warranty. See what fits your budget.`;

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
        { "@type": "ListItem", position: 4, name: `Under ${entry.priceCapLabel}`, item: `${CANONICAL_ORIGIN}/modular-kitchen-under-${entry.priceCap}` },
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
      offers: { "@type": "Offer", price: entry.priceCapValue, priceCurrency: "INR" },
    });

    return () => {
      cleanupMeta();
      breadcrumbSchema.remove();
      faqSchema.remove();
      serviceSchema.remove();
    };
  }, [entry, canonical, metaTitle, metaDesc, h1, faqs, capContent]);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80')" }} />
        <nav className="absolute top-4 left-0 right-0 px-6 flex items-center gap-1 text-white/60 text-sm z-10 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/modular-kitchen" className="hover:text-white transition-colors cursor-pointer">Modular Kitchen</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/modular-kitchen-${entry.citySlug}`} className="hover:text-white transition-colors cursor-pointer">{entry.cityName}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/80">Under {entry.priceCapLabel} — {entry.localityName}</span>
        </nav>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto pt-12 pb-8">
          <div className="inline-flex items-center gap-1.5 bg-amber-600/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <IndianRupee className="w-3 h-3" /> Budget: Under {entry.priceCapLabel}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">{h1}</h1>
          <p className="text-lg text-white/85 mb-6 text-balance">
            FurniRevive delivers modular kitchens within your {entry.priceCapLabel} budget in {entry.localityName} — starting {fmt(entry.priceFrom)}, free 3D design, 10-year warranty.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 text-sm">
            {["Free 3D Design", "10-Year Warranty", `${entry.localityName} Service`, capContent.hardwareTier].map((b) => (
              <span key={b} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />{b}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call for Free Quote
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a modular kitchen under ${entry.priceCapLabel} in ${entry.localityName}`}
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

      {/* Price cap card */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">Modular Kitchen Under {entry.priceCapLabel} in {entry.localityName}</h2>
            <p className="text-muted-foreground text-sm">Starting from {fmt(entry.priceFrom)} — fully fitted within {entry.priceCapLabel}</p>
          </div>
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer text-sm whitespace-nowrap">
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Gallery */}
      <PremiumKitchenGallery
        images={KITCHEN_GALLERY_IMAGES}
        title={`Modular Kitchen Designs Under ${entry.priceCapLabel} in ${entry.localityName}`}
        subtitle={`Real kitchens installed in ${entry.localityName} within this budget`}
        filter={galleryFilter}
        initialVisible={6}
      />

      {/* What's included / not included */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2">What Fits Under {entry.priceCapLabel} in {entry.localityName}</h2>
        <p className="text-muted-foreground text-sm mb-7">Honest breakdown — no surprises at installation</p>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-xl border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800 p-5">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 text-sm">Included in This Budget</h3>
            <ul className="space-y-2">
              {capContent.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800 p-5">
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3 text-sm">Typically Not Included</h3>
            <ul className="space-y-2">
              {capContent.notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <Info className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Expert tip */}
        <div className="mt-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-sm text-foreground"><span className="font-semibold">Expert tip: </span>{capContent.tip}</p>
        </div>
      </section>

      {/* Recommended layouts */}
      <section className="py-10 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5">Best Layouts Under {entry.priceCapLabel} in {entry.localityName}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {capContent.layouts.map((layout) => (
              <Link key={layout.slug} to={`/${layout.slug}-modular-kitchen-${entry.localitySlug}`}
                className="rounded-xl border border-border bg-background p-4 hover:border-amber-700 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground text-sm group-hover:text-amber-700 transition-colors">{layout.label}</h3>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-amber-700 transition-colors" />
                </div>
                <p className="text-xs text-muted-foreground">{layout.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended materials */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-foreground mb-5">Finishes Available Under {entry.priceCapLabel}</h2>
        <div className="flex flex-wrap gap-3">
          {capContent.materials.map((mat) => (
            <Link key={mat.slug} to={`/${mat.slug}-modular-kitchen-${entry.localitySlug}`}
              className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer">
              {mat.label} Kitchen in {entry.localityName} <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* Compare other price caps */}
      <section className="py-10 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5">Compare Budget Options in {entry.localityName}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(["1-lakh", "1-5-lakh", "2-lakh", "3-lakh"] as const).map((cap) => {
              const labels: Record<string, string> = { "1-lakh": "Under ₹1L", "1-5-lakh": "Under ₹1.5L", "2-lakh": "Under ₹2L", "3-lakh": "Under ₹3L" };
              const isCurrent = cap === entry.priceCap;
              return (
                <Link key={cap} to={`/modular-kitchen-under-${cap}-${entry.localitySlug}`}
                  className={`rounded-xl border p-3 text-center text-sm font-medium transition-colors cursor-pointer ${isCurrent ? "bg-amber-700 text-white border-amber-700" : "bg-background border-border text-foreground hover:border-amber-700 hover:text-amber-700"}`}>
                  {labels[cap]}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature/benefit cards */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2">What Makes Our Kitchens Different</h2>
        <p className="text-muted-foreground mb-7 text-sm">Quality you can see and feel — at a price that fits your budget in {entry.localityName}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {BUDGET_FEATURE_CARDS.map((feat) => (
            <div key={feat.title} className="rounded-xl border border-border bg-background p-5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{feat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Locality Profile ── */}
      <LocalityProfileSection
        localityName={entry.localityName}
        cityName={entry.cityName}
        profile={localityProfile}
        suitability={budgetSuitability}
      />

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
      <section className="py-14 px-6">
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
      {entry.nearby.length > 0 && (
        <section className="py-12 px-6 bg-muted/30 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-700" /> Under {entry.priceCapLabel} Kitchens in Nearby Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {entry.nearby.map((slug) => {
              const displayName = slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
                .replace(" Delhi", "").replace(" Gurgaon", "").replace(" Noida", "").replace(" Ghaziabad", "").replace(" Faridabad", "");
              return (
                <Link key={slug} to={`/modular-kitchen-under-${entry.priceCap}-${slug}`}
                  className="bg-background border border-border rounded-lg p-3 text-center text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer">
                  Under {entry.priceCapLabel} in {displayName}
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
          <h2 className="text-2xl font-bold mb-3">Get a Free Kitchen Design Under {entry.priceCapLabel} in {entry.localityName}</h2>
          <p className="text-white/85 mb-6">Free home visit, 3D design in 48 hours, no hidden charges — exactly within your budget.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-amber-800 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call Now — Free Quote
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a free kitchen design under ${entry.priceCapLabel} in ${entry.localityName}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <NearMeCTA variant="compact" pageType="budget" />
      <HomeServicesSection service="modular-kitchen" pageType="locality" cityName={entry.cityName} />
      <KitchenRelatedBlogs slug={entry.urlSlug} />
      <Footer />
    </>
  );
};

export default KitchenPriceRangeLocalityTemplate;
