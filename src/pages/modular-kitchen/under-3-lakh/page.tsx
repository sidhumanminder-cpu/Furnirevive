import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, XCircle, ChevronRight, ArrowUpRight } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import { buildEditorialSchemas } from "@/lib/seo/kitchen-jsonld.ts";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "Modular Kitchen Under ₹3 Lakh — Best Value Configurations for Delhi NCR";
const META_DESCRIPTION = "₹3 lakh is the sweet spot for a well-equipped modular kitchen in Delhi NCR. See which layouts, finishes and configurations deliver the best value at this budget.";
const CANONICAL = "https://furnirevive.com/modular-kitchen-under-3-lakh";

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_RECO = {
  bestFor: "2–4 member families, standard 2BHK/3BHK kitchens",
  layouts: "L-Shape, Parallel, Straight",
  budget: "₹1.8L–₹3L for a complete kitchen",
  installation: "4–6 days",
};

const SUITS = [
  "Standard 2BHK or 3BHK apartment kitchen (80–120 sq ft)",
  "Families wanting a fully equipped kitchen with branded hardware",
  "Buyers who want acrylic or membrane finish (not just laminate)",
  "Those wanting soft-close drawers, pull-outs and proper countertop",
  "Anyone building a kitchen they plan to keep for 10+ years",
];

const AVOID_IF = [
  "Your kitchen is larger than 12×10 ft — you'll need a higher budget",
  "You want PU, veneer, glass or stainless steel finishes",
  "You want Blum hardware throughout — plan ₹4L+ for that",
  "You need a full island — islands add ₹1L–₹3L to the total",
];

type ConfigRow = { config: string; layouts: string; finish: string; hardware: string; inclusions: string; total: string; highlighted?: boolean };
const CONFIG_TABLE: ConfigRow[] = [
  {
    config: "Standard",
    layouts: "Straight / L-Shape (small)",
    finish: "Laminate",
    hardware: "Hettich",
    inclusions: "Base + wall units, granite countertop",
    total: "₹1.2L–₹1.8L",
  },
  {
    config: "Popular",
    layouts: "L-Shape / Parallel",
    finish: "Acrylic / Membrane",
    hardware: "Hettich",
    inclusions: "Base + wall + loft units, quartz/granite countertop, soft-close",
    total: "₹1.8L–₹2.5L",
    highlighted: true,
  },
  {
    config: "Full-Featured",
    layouts: "L-Shape / U-Shape",
    finish: "Acrylic + accents",
    hardware: "Hettich / Häfele",
    inclusions: "Full set + tall pantry + pull-outs + chimney recess",
    total: "₹2.5L–₹3L",
  },
];

const INCLUSIONS = [
  "On-site measurement and 3D design plan",
  "18mm BWR ply or HDF board carcass",
  "Acrylic or membrane shutter finish",
  "Granite or engineered quartz countertop",
  "Hettich soft-close hinges and drawer channels",
  "Loft units and tall pantry (at ₹2.5L+)",
  "Pull-out baskets for base cabinets",
  "Professional installation with 10-year warranty",
];

const UPGRADES = [
  "Add Blum Tandembox drawers (+₹15K–₹25K) for the smoothest pull-out experience",
  "Upgrade countertop to Quartz (+₹8K–₹15K) for better scratch and heat resistance",
  "Add under-cabinet LED strips (+₹5K–₹8K) — makes the kitchen feel premium",
  "Add a pull-out pantry unit (+₹12K–₹18K) — 30% more storage without extra footprint",
  "Upgrade to Häfele handles (+₹5K–₹10K) for a more premium look and feel",
];

const MISTAKES = [
  "Going with cheap carcass to save ₹10K — a weak carcass fails in 3–5 years",
  "Choosing too many different finishes — 1–2 finishes keep the look cohesive and reduce cost",
  "Skipping the loft units to save money — loft units add 30% more storage for proportionally less cost",
  "Not budgeting for chimney and appliance niches — these need to be planned before cabinet design",
  "Comparing quotes without checking carcass thickness — 12mm vs 18mm ply is a major quality difference",
];

const FAQS = [
  {
    q: "What can I realistically get in a ₹3 lakh modular kitchen?",
    a: "At ₹2.5L–₹3L you can get a complete L-Shape or Parallel kitchen for a standard 2BHK or 3BHK apartment. This includes 18mm BWR ply carcass, acrylic or membrane shutters, quartz or granite countertop, Hettich soft-close hardware, loft units, pull-out baskets and a proper installation. It's a full, high-quality kitchen — not a compromise.",
  },
  {
    q: "Is ₹3 lakh enough for an L-Shape modular kitchen?",
    a: "Yes. An L-Shape kitchen in 80–120 sq ft with good materials and branded hardware fits comfortably in ₹1.8L–₹2.8L. If your kitchen is larger (130 sq ft+) or you want premium add-ons like Häfele handles, tall pantry and quartz countertop, budget ₹2.8L–₹3.5L.",
  },
  {
    q: "What's the difference between standard and popular configuration at this budget?",
    a: "The standard configuration uses laminate shutters and Hettich hardware without soft-close drawers — functional and durable, but visually more basic. The popular configuration adds acrylic or membrane shutters for a premium look, soft-close drawers throughout and quartz/granite options. The popular config costs ₹50K–₹80K more but is noticeably better quality and longevity.",
  },
  {
    q: "Should I buy the cheapest quote or the best value quote?",
    a: "Buy the best value quote. At ₹3 lakh, a ₹30K–₹40K saving on the cheapest quote usually means thinner carcass (12mm vs 18mm), non-branded hinges, or skipped loft units. These savings show up as failures within 3–5 years. Invest in 18mm BWR ply carcass and Hettich hardware minimum — the rest of the budget is flexible.",
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
    { name: "Under ₹3 Lakh", href: "/modular-kitchen-under-3-lakh" },
  ],
  faqs: FAQS,
});

export default function Under3LakhPage() {
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
    (m) => m.slug === "acrylic" || m.slug === "membrane" || m.slug === "laminate"
  );

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="bg-muted/40 py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary cursor-pointer">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/modular-kitchen" className="hover:text-primary cursor-pointer">Modular Kitchen</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">Under ₹3 Lakh</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
            Modular Kitchen Under ₹3 Lakh — Best Value for Delhi NCR Homes
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            ₹3 lakh is the sweet spot for a well-equipped modular kitchen in Delhi NCR. At this budget you can afford branded hardware, a good finish and a complete layout — without overspending. Here's how to maximise every rupee.
          </p>
        </div>
      </section>

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

      {/* Configuration Comparison */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Typical Configurations Under ₹3 Lakh</h2>
          <div className="space-y-4">
            {CONFIG_TABLE.map((row) => (
              <div key={row.config} className={`bg-card rounded-xl border p-5 ${row.highlighted ? "border-primary ring-2 ring-primary/20" : "border-border"}`}>
                {row.highlighted && <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 block">Most Popular Choice</span>}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold">{row.config}</h3>
                  <span className="text-lg font-bold text-primary whitespace-nowrap">{row.total}</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <p><span className="font-medium text-foreground">Layouts:</span> {row.layouts}</p>
                  <p><span className="font-medium text-foreground">Finish:</span> {row.finish}</p>
                  <p><span className="font-medium text-foreground">Hardware:</span> {row.hardware}</p>
                  <p><span className="font-medium text-foreground">Includes:</span> {row.inclusions}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Working with a tighter budget?{" "}
            <Link to="/modular-kitchen-under-50000" className="text-primary hover:underline cursor-pointer">See modular kitchen under ₹50,000 →</Link>
          </p>
        </div>
      </section>

      {/* Recommended Layouts */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Layouts That Deliver Best Value Under ₹3 Lakh</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {bestLayouts.map((layout) => (
              <div key={layout.id} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{layout.shortName} Modular Kitchen</h3>
                <p className="text-muted-foreground text-sm mb-3">{layout.bestFor}</p>
                <div className="space-y-1 text-xs text-muted-foreground mb-4">
                  <p>Space: {layout.minSqFt}–{layout.maxSqFt} sq ft</p>
                  <p>Budget start: ₹{(layout.costMin / 100000).toFixed(1).replace(".0", "")}L</p>
                </div>
                <Link to={`/modular-kitchen-${layout.slug}`} className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline cursor-pointer">
                  View details <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Finishes */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Finishes Worth Choosing at This Budget</h2>
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

      {/* What's Included */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What a Good ₹2.5L–₹3L Kitchen Includes</h2>
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

      {/* Upgrades */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">High-Value Upgrades to Consider</h2>
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
          <h2 className="text-2xl font-bold mb-6">Common Mistakes at the ₹3 Lakh Budget</h2>
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

      {/* Related Resources */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <ul className="flex flex-wrap gap-3">
            {[
              { label: "Modular Kitchen Under ₹50,000", href: "/modular-kitchen-under-50000" },
              { label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape" },
              { label: "Acrylic vs Laminate", href: "/acrylic-vs-laminate-modular-kitchen" },
              { label: "2BHK Kitchen Design", href: "/2bhk-modular-kitchen-design" },
              { label: "Modular Kitchen Cost Delhi", href: "/modular-kitchen-cost-delhi" },
              { label: "10×10 Kitchen Guide", href: "/modular-kitchen-10x10" },
            ].map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline cursor-pointer">
                  {link.label} <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Get the best value kitchen within your ₹3 lakh budget</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            WhatsApp your kitchen dimensions — we'll design the highest-value layout for your exact budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 bg-background text-foreground font-medium px-6 py-3 rounded-lg hover:bg-background/90 transition-colors cursor-pointer">
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I have a budget of around ₹3 lakh for a modular kitchen`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
              <MessageCircle className="h-4 w-4" /> WhatsApp Your Budget
            </a>
          </div>
        </div>
      </section>

      <HomeServicesSection service="modular-kitchen" pageType="layout" />
      <KitchenTrustStrip />
      <Footer />
    </div>
  );
}
