import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, XCircle, ChevronRight, ArrowUpRight, Ruler, Grid2x2, IndianRupee, LayoutGrid, Home, MapPin } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import { KitchenStatsBar, KitchenMidCta, KitchenWhyChoose } from "@/components/kitchen-guide-conversion.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import { buildEditorialSchemas } from "@/lib/seo/kitchen-jsonld.ts";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "10×12 Modular Kitchen — Layouts, Cost & Design Guide for Larger Family Kitchens";
const META_DESCRIPTION = "A 10×12 ft kitchen opens up layout options including U-Shape and Peninsula. See what fits, what it costs and how to plan a spacious 10×12 modular kitchen in Delhi NCR.";
const CANONICAL = "https://furnirevive.com/modular-kitchen-10x12";

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_RECO = {
  bestFor: "Families of 3–5, 3BHK flats and independent floors",
  layouts: "L-Shape, U-Shape, Peninsula",
  budget: "₹2.5L–₹8L",
  installation: "5–8 days",
};

const SUITS = [
  "3BHK flats and independent builder floors",
  "Families of 3–5 who cook daily",
  "Buyers who want more storage and counter space",
  "Those who want a U-Shape, Peninsula or large L-Shape",
  "Entertaining households needing a prep and serving zone",
];

const AVOID_IF = [
  "Your kitchen shape is a narrow rectangle — U-Shape won't fit well",
  "You want a full freestanding island (needs 200+ sq ft)",
  "Your budget is under ₹1.5L — a 10×12 kitchen needs more cabinet count",
];

const INCLUSIONS = [
  "On-site measurement and detailed 3D layout plan",
  "Factory CNC cabinets (18mm BWR ply or HDF board)",
  "Granite or engineered quartz countertop",
  "Soft-close hinges, drawer channels and handles",
  "Professional installation and plumbing/appliance alignment",
  "10-year structural warranty on all cabinets",
];

type CostRow = { tier: string; finish: string; hardware: string; range: string; highlighted?: boolean };
const COST_TABLE: CostRow[] = [
  { tier: "Budget", finish: "Laminate / PVC", hardware: "Ebco / Hettich", range: "₹2L–₹3.5L" },
  { tier: "Standard", finish: "Acrylic / Membrane", hardware: "Hettich", range: "₹3.5L–₹5.5L", highlighted: true },
  { tier: "Premium", finish: "PU / Veneer / Glass", hardware: "Blum / Häfele", range: "₹5.5L–₹8L+" },
];

const UPGRADES = [
  "Add a breakfast counter or peninsual extension for casual dining",
  "Install a tall pantry column with pull-out baskets",
  "Upgrade to Blum Legrabox for the smoothest drawer experience",
  "Add a dedicated chimney recess during cabinet layout",
  "Build in a wine or beverage station on a separate short wall",
];

const MISTAKES = [
  "Planning a U-Shape in a narrow 10×12 — you need at least 8 ft width for a comfortable aisle",
  "Ignoring the work triangle (sink, hob, fridge) — poor placement increases cooking fatigue",
  "Under-specifying base cabinets — a 10×12 kitchen needs more cabinets than a 10×10",
  "Not planning appliance niches before cabinet design — chimney, microwave and fridge need dedicated space",
  "Choosing island over peninsula — a peninsula is better in 10×12 because it connects to a wall",
];

const FAQS = [
  {
    q: "What layouts fit best in a 10×12 kitchen?",
    a: "L-Shape is the most versatile choice for a 10×12 ft kitchen and suits most room configurations. U-Shape works well if your kitchen is wider than 8 ft and square — it gives maximum storage and counter space for large families. Peninsula is ideal if you want extra counter without a full island. Avoid island layouts in 10×12 — they work better above 150–180 sq ft.",
  },
  {
    q: "How much does a 10×12 modular kitchen cost?",
    a: "A budget kitchen in 10×12 ft with laminate/PVC finish costs ₹2L–₹3.5L. A standard acrylic or membrane kitchen with Hettich hardware runs ₹3.5L–₹5.5L. Premium kitchens with PU, veneer or glass and Blum hardware cost ₹5.5L–₹8L or more. These are estimates — final cost depends on cabinet count, countertop material and hardware selection.",
  },
  {
    q: "How many people can comfortably use a 10×12 kitchen?",
    a: "A 10×12 ft (120 sq ft) kitchen comfortably accommodates 2–3 people working simultaneously, making it ideal for a family of 3–5 who cook together. With a U-Shape layout you get three full working walls, so a parent and a child can prep on opposite sides without getting in each other's way.",
  },
  {
    q: "What storage can I realistically get in a 10×12 kitchen?",
    a: "With a full L-Shape layout you get around 15–20 linear feet of cabinet run. With a U-Shape you can get 20–26 linear feet. That typically means 10–14 base units, 8–12 wall units and 2–3 tall units — enough for a family of 4–5 with pantry storage included. Pull-out drawers maximise deep base cabinet usability.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const SCHEMAS = buildEditorialSchemas({
  title: PAGE_TITLE,
  description: META_DESCRIPTION,
  url: CANONICAL,
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Modular Kitchen", href: "/modular-kitchen" },
    { name: "10×12 Kitchen", href: "/modular-kitchen-10x12" },
  ],
  faqs: FAQS,
});

export default function Kitchen10x12Page() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    let meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", META_DESCRIPTION);
    else {
      meta = document.createElement("meta");
      (meta as HTMLMetaElement).name = "description";
      meta.setAttribute("content", META_DESCRIPTION);
      document.head.appendChild(meta);
    }
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = CANONICAL;
    // JSON-LD structured data
    document.querySelectorAll('script[data-kitchen-jsonld]').forEach((el) => el.remove());
    SCHEMAS.forEach((schema) => {
      const script = document.createElement("script") as HTMLScriptElement;
      script.type = "application/ld+json";
      script.setAttribute("data-kitchen-jsonld", "true");
      script.textContent = schema;
      document.head.appendChild(script);
    });
    return () => {
      document.querySelectorAll('script[data-kitchen-jsonld]').forEach((el) => el.remove());
    };
  }, []);

  const bestLayouts = MODULAR_KITCHEN_LAYOUT_REGISTRY.filter(
    (l) => l.slug === "l-shape" || l.slug === "u-shape" || l.slug === "peninsula"
  );
  const bestMaterials = MODULAR_KITCHEN_MATERIAL_REGISTRY.filter(
    (m) => m.slug === "acrylic" || m.slug === "membrane" || m.slug === "pu"
  );

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="relative min-h-[380px] flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/95 via-stone-800/90 to-stone-900/95" />
        <div className="relative z-10 w-full px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
              <Link to="/" className="hover:text-white cursor-pointer">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/modular-kitchen" className="hover:text-white cursor-pointer">Modular Kitchen</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/60 font-medium">10×12 Kitchen</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              10×12 Modular Kitchen — More Space, More Layout Flexibility
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              A 10×12 ft kitchen is where layout options really open up. U-Shape, Peninsula and large L-Shape layouts become practical — here's how to plan one for maximum storage and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
                <PhoneCall className="w-4 h-4" /> Call for Free Consultation
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20a%20modular%20kitchen%20design%20consultation`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <KitchenTrustStrip />
      <KitchenStatsBar />
      <KitchenWhyChoose />

      {/* Quick Recommendation Box */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 grid sm:grid-cols-4 gap-4">
            {[
              { label: "Best For", value: QUICK_RECO.bestFor },
              { label: "Recommended Layouts", value: QUICK_RECO.layouts },
              { label: "Typical Budget", value: QUICK_RECO.budget },
              { label: "Installation", value: QUICK_RECO.installation },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-0.5">{label}</p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Suits + Avoid If */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" /> Suitable for
            </h2>
            <ul className="space-y-2.5">
              {SUITS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-border p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" /> Avoid if
            </h2>
            <ul className="space-y-2.5">
              {AVOID_IF.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recommended Layouts */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Best Layouts for a 10×12 Kitchen</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {bestLayouts.map((layout) => (
              <div key={layout.id} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{layout.shortName} Modular Kitchen</h3>
                <p className="text-muted-foreground text-sm mb-3">{layout.bestFor}</p>
                <div className="space-y-1 text-xs text-muted-foreground mb-4">
                  <p>Space: {layout.minSqFt}–{layout.maxSqFt} sq ft</p>
                  <p>Cost: ₹{(layout.costMin / 100000).toFixed(1).replace(".0", "")}L–₹{(layout.costMax / 100000).toFixed(1).replace(".0", "")}L</p>
                </div>
                <Link to={`/modular-kitchen-${layout.slug}`} className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline cursor-pointer">
                  View details <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Smaller space?{" "}
            <Link to="/modular-kitchen-10x10" className="text-primary hover:underline cursor-pointer">← See 10×10 kitchen guide</Link>
          </p>
        </div>
      </section>

      {/* Recommended Finishes */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Finishes That Work Well in a 10×12 Kitchen</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {bestMaterials.map((mat) => (
              <div key={mat.id} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{mat.shortName}</h3>
                <p className="text-sm text-primary font-medium mb-2">₹{mat.costMin}–₹{mat.costMax}/sq ft</p>
                <p className="text-muted-foreground text-sm mb-3">{mat.finish}</p>
                <div className="flex flex-wrap gap-1.5">
                  {mat.pros.map((pro) => (
                    <span key={pro} className="text-xs bg-muted/60 rounded px-2 py-0.5">{pro}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What's Typically Included</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {INCLUSIONS.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">10×12 Kitchen Cost Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {COST_TABLE.map((tier) => (
              <div key={tier.tier} className={`bg-card rounded-xl border p-5 ${tier.highlighted ? "border-primary ring-2 ring-primary/20" : "border-border"}`}>
                {tier.highlighted && <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 block">Most Popular</span>}
                <h3 className="text-lg font-bold mb-1">{tier.tier}</h3>
                <p className="text-2xl font-bold text-primary mb-3">{tier.range}</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Finish: {tier.finish}</li>
                  <li>Hardware: {tier.hardware}</li>
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Estimates for a 10×12 ft kitchen. Countertop, chimney and appliances priced separately.</p>
        </div>
      </section>

      {/* Upgrade Options */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Upgrade Options for a 10×12 Kitchen</h2>
          <ul className="space-y-3">
            {UPGRADES.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <ArrowUpRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Common Planning Mistakes in 10×12 Kitchens</h2>
          <ul className="space-y-3">
            {MISTAKES.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <KitchenMidCta />

      {/* FAQs */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-10 md:py-14 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Related Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "10×10 Kitchen Guide", href: "/modular-kitchen-10x10", icon: Ruler, desc: "The most popular kitchen size for Indian apartments" },
              { label: "10×8 Kitchen Guide", href: "/modular-kitchen-10x8", icon: Home, desc: "Compact kitchen planning guide for smaller spaces" },
              { label: "U-Shape Modular Kitchen", href: "/modular-kitchen-u-shape", icon: Grid2x2, desc: "Maximum storage layout for square kitchens" },
              { label: "L-Shape vs U-Shape", href: "/l-shape-vs-u-shape-modular-kitchen", icon: LayoutGrid, desc: "Which layout fits your kitchen better?" },
              { label: "3BHK Kitchen Cost", href: "/3bhk-modular-kitchen-cost", icon: IndianRupee, desc: "Full cost breakdown for 3BHK modular kitchens" },
              { label: "Modular Kitchen Cost Delhi", href: "/modular-kitchen-cost-delhi", icon: MapPin, desc: "Delhi NCR pricing guide with real estimates" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} to={item.href} className="rounded-xl border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-amber-700" />
                  </div>
                  <p className="font-semibold text-sm text-foreground group-hover:text-amber-700 transition-colors mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Plan your 10×12 kitchen with FurniRevive</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            WhatsApp your kitchen dimensions — get a 3D layout and detailed quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 bg-background text-foreground font-medium px-6 py-3 rounded-lg hover:bg-background/90 transition-colors cursor-pointer">
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need a modular kitchen design for my 10x12 kitchen`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
              <MessageCircle className="h-4 w-4" /> WhatsApp Kitchen Photo
            </a>
          </div>
        </div>
      </section>

      <HomeServicesSection service="modular-kitchen" pageType="layout" />
      <Footer />
    </div>
  );
}
