import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, XCircle, ChevronRight, ArrowUpRight, Ruler, LayoutGrid, AlignJustify, IndianRupee, Home, MapPin } from "lucide-react";
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

const PAGE_TITLE = "10×10 Modular Kitchen — Most Popular Size Guide for Delhi NCR Homes";
const META_DESCRIPTION = "The 10×10 ft modular kitchen is the most practical size for average Indian homes. See which layouts fit best, what it costs and how to plan a 10×10 kitchen in Delhi NCR.";
const CANONICAL = "https://furnirevive.com/modular-kitchen-10x10";

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_RECO = {
  bestFor: "2–4 member families, standard 2BHK/3BHK flats",
  layouts: "L-Shape, Parallel, Straight",
  budget: "₹1.5L–₹5L",
  installation: "4–7 days",
};

const SUITS = [
  "Standard 2BHK or 3BHK apartment",
  "Family of 2–4 members",
  "Buyers wanting a versatile layout with room to grow",
  "Those wanting L-Shape, Parallel or Straight layouts",
];

const AVOID_IF = [
  "You want a full island with seating (needs 180+ sq ft)",
  "You have 5+ family members who cook together",
  "Your kitchen is unusually narrow (under 6 ft wide)",
];

const INCLUSIONS = [
  "On-site measurement and 3D design plan",
  "Factory CNC cabinets (18mm BWR ply or HDF board)",
  "Granite or engineered quartz countertop",
  "Soft-close hinges, drawer channels and handles",
  "Professional installation including plumbing alignment",
  "10-year structural warranty on all cabinets",
];

type CostRow = { tier: string; finish: string; hardware: string; range: string; highlighted?: boolean };
const COST_TABLE: CostRow[] = [
  { tier: "Budget", finish: "Laminate / PVC", hardware: "Ebco", range: "₹1.2L–₹2L" },
  { tier: "Standard", finish: "Acrylic / Membrane", hardware: "Hettich", range: "₹2L–₹3.5L", highlighted: true },
  { tier: "Premium", finish: "PU / Veneer", hardware: "Blum / Häfele", range: "₹3.5L–₹5L" },
];

const UPGRADES = [
  "Upgrade to quartz countertop for scratch and heat resistance",
  "Add a tall pantry unit to maximise vertical storage",
  "Install a built-in microwave column to free up counter space",
  "Switch to Blum Tandembox drawers for smoother operation",
  "Add under-cabinet LED lighting for better task visibility",
];

const MISTAKES = [
  "Placing the fridge in the corner — it blocks access to adjacent cabinets",
  "Skipping a dedicated chimney alcove — retrofitting it later is expensive",
  "Using an island in 10×10 — it leaves under 36 inches of aisle on two sides",
  "Over-loading upper cabinets past the ceiling — heavy cabinets need proper wall anchoring",
  "Choosing the wrong countertop depth — standard 24 inches is ideal, 18 inches feels cramped",
];

const FAQS = [
  {
    q: "Why is 10×10 the most common modular kitchen size in Delhi NCR?",
    a: "Most standard 2BHK and 3BHK apartments in Delhi NCR have kitchens measuring 9×9 to 11×10 ft. At 100 sq ft, a 10×10 kitchen is large enough for an efficient L-Shape or Parallel layout while remaining compact enough for most apartment floor plans. It's the sweet spot between functionality and space efficiency.",
  },
  {
    q: "What is the cost of a modular kitchen in a 10×10 space?",
    a: "A budget laminate/PVC kitchen in 10×10 costs ₹1.2L–₹2L. A standard acrylic/membrane kitchen with Hettich hardware runs ₹2L–₹3.5L. Premium PU or veneer finishes with Blum hardware reach ₹3.5L–₹5L. Countertop, chimney and appliances are typically quoted separately.",
  },
  {
    q: "Can I fit a Parallel layout in a 10×10 kitchen?",
    a: "Yes, if your kitchen is rectangular (e.g. 6×14 ft or 8×12 ft redrawn as an effective 10×10). Parallel layout works when you have two facing walls at least 8 ft long with 3.5–4 ft aisle between them. In a square 10×10 room, L-Shape usually makes better use of the corner.",
  },
  {
    q: "How long does it take to install a 10×10 modular kitchen?",
    a: "Typically 4–7 days. This includes old kitchen removal (day 1), wall preparation and plumbing adjustments (day 1–2), cabinet delivery and installation (day 2–4), countertop fitting (day 4–5) and final hardware and cleanup (day 5–7). Complex layouts or stone countertops may take a day longer.",
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
    { name: "10×10 Kitchen", href: "/modular-kitchen-10x10" },
  ],
  faqs: FAQS,
});

export default function Kitchen10x10Page() {
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
    (l) => l.slug === "l-shape" || l.slug === "parallel" || l.slug === "straight"
  );
  const bestMaterials = MODULAR_KITCHEN_MATERIAL_REGISTRY.filter(
    (m) => m.slug === "acrylic" || m.slug === "laminate" || m.slug === "membrane"
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
              <span className="text-white/60 font-medium">10×10 Kitchen</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              10×10 Modular Kitchen — The Most Practical Size for Indian Homes
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              The 10×10 ft kitchen is the most common modular kitchen size in Delhi NCR — versatile enough for multiple layouts and large enough for a family of four. Here's everything you need to plan yours.
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
          <h2 className="text-2xl font-bold mb-6">Best Layouts for a 10×10 Kitchen</h2>
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
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Link to="/modular-kitchen-10x8" className="text-primary hover:underline cursor-pointer">← Smaller: 10×8 kitchen</Link>
            <Link to="/modular-kitchen-10x12" className="text-primary hover:underline cursor-pointer">Larger: 10×12 kitchen →</Link>
          </div>
        </div>
      </section>

      {/* Recommended Finishes */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Popular Finishes for 10×10 Kitchens</h2>
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
          <h2 className="text-2xl font-bold mb-6">10×10 Kitchen Cost Breakdown</h2>
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
          <p className="mt-4 text-xs text-muted-foreground">Estimates for a 10×10 ft kitchen. Countertop, chimney and appliances priced separately.</p>
        </div>
      </section>

      {/* Upgrade Options */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Upgrade Options for a 10×10 Kitchen</h2>
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
          <h2 className="text-2xl font-bold mb-6">Common Planning Mistakes in 10×10 Kitchens</h2>
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
              { label: "10×12 Kitchen Guide", href: "/modular-kitchen-10x12", icon: Ruler, desc: "Larger kitchen with U-Shape and Peninsula options" },
              { label: "10×8 Kitchen Guide", href: "/modular-kitchen-10x8", icon: Home, desc: "Compact kitchen planning for smaller spaces" },
              { label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape", icon: LayoutGrid, desc: "Versatile layout for corner kitchen spaces" },
              { label: "Parallel Modular Kitchen", href: "/modular-kitchen-parallel", icon: AlignJustify, desc: "Efficient galley layout for narrow kitchens" },
              { label: "2BHK Kitchen Design", href: "/2bhk-modular-kitchen-design", icon: IndianRupee, desc: "Kitchen design guide for 2BHK apartments" },
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
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Get a free quote for your 10×10 kitchen</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            WhatsApp your kitchen photo — get a 3D layout and detailed quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 bg-background text-foreground font-medium px-6 py-3 rounded-lg hover:bg-background/90 transition-colors cursor-pointer">
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need a modular kitchen design for my 10x10 kitchen`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
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
