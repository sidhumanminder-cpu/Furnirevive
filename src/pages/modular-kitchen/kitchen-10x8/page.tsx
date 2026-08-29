import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, XCircle, ChevronRight, ArrowUpRight, Ruler, LayoutGrid, AlignJustify, Home, IndianRupee, MapPin } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import { buildEditorialSchemas } from "@/lib/seo/kitchen-jsonld.ts";
import { KitchenStatsBar, KitchenMidCta, KitchenWhyChoose } from "@/components/kitchen-guide-conversion.tsx";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "10×8 Modular Kitchen — Best Layouts, Cost & Design Guide for Compact Kitchens";
const META_DESCRIPTION = "Planning a modular kitchen in a 10×8 ft space? Discover the best layouts, finishes, realistic budget and common mistakes for compact 10×8 kitchens in Delhi NCR.";
const CANONICAL = "https://furnirevive.com/modular-kitchen-10x8";

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_RECO = {
  bestFor: "1–2 member households, compact apartments",
  layouts: "L-Shape, Straight",
  budget: "₹80K–₹2.5L",
  installation: "3–5 days",
};

const SUITS = [
  "Studio or 1BHK apartment",
  "Compact 2BHK builder floor",
  "Single or couple household",
  "First kitchen on a tight budget",
];

const AVOID_IF = [
  "You cook elaborate multi-dish meals daily",
  "You need an island or breakfast counter",
  "Your household is 4+ members",
  "You want a U-Shape or Peninsula layout",
];

const INCLUSIONS = [
  "On-site measurement and 3D layout plan",
  "Factory CNC cabinets (18mm BWR ply or HDF board)",
  "Granite or engineered stone countertop",
  "Soft-close hinges and drawer channels",
  "Professional installation and plumbing alignment",
  "10-year structural warranty on cabinets",
];

type CostRow = { tier: string; finish: string; hardware: string; range: string; highlighted?: boolean };
const COST_TABLE: CostRow[] = [
  { tier: "Budget", finish: "Laminate / PVC", hardware: "Ebco", range: "₹80K–₹1.2L" },
  { tier: "Standard", finish: "Acrylic / Membrane", hardware: "Hettich", range: "₹1.2L–₹2L", highlighted: true },
  { tier: "Premium", finish: "PU / Acrylic", hardware: "Blum / Hettich", range: "₹2L–₹2.5L" },
];

const UPGRADES = [
  "Add a loft unit above upper cabinets for extra storage",
  "Upgrade to quartz countertop for a premium finish",
  "Add a built-in chimney alcove during cabinet design",
  "Switch from laminate to membrane for a softer matte look",
  "Add a pull-out pantry unit — gains 30% more storage in the same footprint",
];

const MISTAKES = [
  "Skipping the upper cabinet — you lose 40% of storage in a small kitchen",
  "Using a full U-Shape in 10×8 — leaves too little aisle width (minimum 36 inches needed)",
  "Ignoring chimney placement — plan it before cabinet design, not after",
  "Choosing glossy acrylic in a south-facing kitchen — direct sunlight fades acrylic over 2–3 years",
  "Not accounting for appliance depth — tall fridge or microwave can block passage in a compact layout",
];

const FAQS = [
  {
    q: "Is 10×8 ft enough for a functional modular kitchen?",
    a: "Yes. A 10×8 ft kitchen (80 sq ft) is one of the most common sizes in Delhi NCR apartments. An L-Shape layout uses two walls efficiently, giving you adequate counter space, storage and workflow for 1–2 users. A Straight layout is another good option if one wall is shorter.",
  },
  {
    q: "What is the cost of a modular kitchen in a 10×8 space?",
    a: "Expect ₹80,000–₹1.2L for a budget laminate/PVC kitchen, ₹1.2L–₹2L for a standard acrylic/membrane kitchen with Hettich hardware, and ₹2L–₹2.5L for a premium PU or glass finish. Countertop, chimney and appliances are usually priced separately.",
  },
  {
    q: "Which layout is best for a 10×8 ft kitchen?",
    a: "L-Shape is best for most 10×8 kitchens because it uses the corner wall efficiently and keeps the aisle open. Straight layout works if you have a very narrow kitchen or prefer a minimal single-wall design. Avoid U-Shape in 10×8 — it makes the aisle too narrow.",
  },
  {
    q: "Can I add an island in a 10×8 kitchen?",
    a: "No. A 10×8 ft kitchen does not have enough floor area for a freestanding island. An island needs at least 180–200 sq ft to maintain safe passage on all sides. Consider a fold-down breakfast counter attached to one cabinet instead.",
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
    { name: "10×8 Kitchen", href: "/modular-kitchen-10x8" },
  ],
  faqs: FAQS,
});

export default function Kitchen10x8Page() {
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
    (l) => l.slug === "l-shape" || l.slug === "straight"
  );
  const bestMaterials = MODULAR_KITCHEN_MATERIAL_REGISTRY.filter(
    (m) => m.slug === "laminate" || m.slug === "pvc" || m.slug === "membrane"
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
              <span className="text-white/90 font-medium">10×8 Kitchen</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              10×8 Modular Kitchen — The Complete Guide for Compact Spaces
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              A 10×8 ft kitchen is one of the most common sizes in Delhi NCR apartments. Here's exactly which layouts fit, what it costs and how to maximise every square foot.
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
          <h2 className="text-2xl font-bold mb-6">Recommended Layouts for 10×8 Kitchens</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {bestLayouts.map((layout) => (
              <div key={layout.id} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{layout.shortName} Modular Kitchen</h3>
                <p className="text-muted-foreground text-sm mb-3">{layout.bestFor}</p>
                <div className="space-y-1 text-xs text-muted-foreground mb-4">
                  <p>Space: {layout.minSqFt}–{layout.maxSqFt} sq ft</p>
                  <p>Cost range: ₹{(layout.costMin / 100000).toFixed(1).replace(".0", "")}L–₹{(layout.costMax / 100000).toFixed(1).replace(".0", "")}L</p>
                </div>
                <Link to={`/modular-kitchen-${layout.slug}`} className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline cursor-pointer">
                  View details <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Considering a larger space?{" "}
            <Link to="/modular-kitchen-10x10" className="text-primary hover:underline cursor-pointer">Compare with 10×10 kitchen →</Link>
          </p>
        </div>
      </section>

      {/* Recommended Finishes */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Practical Finishes for Compact Kitchens</h2>
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
          <h2 className="text-2xl font-bold mb-6">10×8 Kitchen Cost Breakdown</h2>
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
          <p className="mt-4 text-xs text-muted-foreground">Estimates for a 10×8 ft kitchen. Countertop, chimney and appliances priced separately. Actual cost depends on cabinet count and hardware selection.</p>
        </div>
      </section>

      {/* Upgrade Options */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Upgrade Options to Maximise Your 10×8 Kitchen</h2>
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
          <h2 className="text-2xl font-bold mb-6">Common Mistakes in 10×8 Kitchens</h2>
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
              { label: "10×12 Kitchen Guide", href: "/modular-kitchen-10x12", icon: Home, desc: "Larger kitchen with U-Shape and Peninsula options" },
              { label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape", icon: LayoutGrid, desc: "Versatile corner layout for compact spaces" },
              { label: "Straight Modular Kitchen", href: "/modular-kitchen-straight", icon: AlignJustify, desc: "Single-wall layout ideal for narrow kitchens" },
              { label: "Modular Kitchen for Small Flat", href: "/modular-kitchen-for-small-flat", icon: IndianRupee, desc: "Smart design ideas for compact apartment kitchens" },
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
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Get a free quote for your 10×8 kitchen</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            WhatsApp your kitchen photo — get a 3D layout and detailed quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 bg-background text-foreground font-medium px-6 py-3 rounded-lg hover:bg-background/90 transition-colors cursor-pointer">
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need a modular kitchen design for my 10x8 kitchen`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
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
