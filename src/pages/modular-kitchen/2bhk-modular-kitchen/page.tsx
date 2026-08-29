import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, ArrowUpRight, LayoutGrid, IndianRupee, Layers, Home, Grid2x2 } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import { buildEditorialSchemas } from "@/lib/seo/kitchen-jsonld.ts";
import { KitchenStatsBar, KitchenMidCta, KitchenWhyChoose } from "@/components/kitchen-guide-conversion.tsx";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "2BHK Modular Kitchen Design — Layouts, Costs & Ideas for Delhi NCR";
const META_DESCRIPTION = "Complete guide to modular kitchen design for 2BHK flats in Delhi NCR. Typical sizes, popular layouts, material choices and cost ranges for 2BHK kitchens.";
const CANONICAL = "https://furnirevive.com/2bhk-modular-kitchen-design";

type SizeRow = { type: string; dimensions: string };
const SIZE_TABLE: SizeRow[] = [
  { type: "Builder floor 2BHK", dimensions: "8×8 to 10×8 ft" },
  { type: "DDA / Society 2BHK", dimensions: "7×7 to 9×8 ft" },
  { type: "Premium 2BHK", dimensions: "10×10 to 12×10 ft" },
];

type CostRow = { tier: string; finishes: string; hardware: string; range: string; highlighted?: boolean };
const COST_TABLE: CostRow[] = [
  { tier: "Economy", finishes: "Laminate / PVC", hardware: "Standard (Ebco)", range: "₹1.2L–₹2L" },
  { tier: "Standard", finishes: "Acrylic / Membrane", hardware: "Hettich", range: "₹2L–₹3.5L", highlighted: true },
  { tier: "Premium", finishes: "PU / Acrylic", hardware: "Hettich / Blum", range: "₹3.5L–₹6L" },
];

const PACKAGE_INCLUDES = [
  "On-site measurement and 3D design",
  "Cabinet manufacturing (factory CNC)",
  "Countertop (granite or quartz)",
  "Hardware installation (soft-close)",
  "Professional fitting and plumbing alignment",
  "10-year structural warranty",
];

const FAQS = [
  {
    q: "What is the average cost of a modular kitchen in a 2BHK flat?",
    a: "Most 2BHK kitchens in Delhi NCR cost ₹2L–₹3.5L for a standard modular kitchen with acrylic or membrane finish and Hettich hardware. Budget options start at ₹1.2L.",
  },
  {
    q: "Which layout works best for a 2BHK kitchen?",
    a: "L-Shape is the most popular for 2BHK kitchens. It fits well in 8×8 to 10×8 ft kitchens and offers a good balance of storage and counter space. Parallel works for narrow kitchens.",
  },
  {
    q: "How long does installation take for a 2BHK kitchen?",
    a: "Typically 3–5 days for a standard L-Shape or Straight kitchen. This includes old kitchen removal, plumbing adjustments, cabinet installation, countertop fitting and final cleanup.",
  },
  {
    q: "What hardware brands do you use?",
    a: "We use Ebco for budget kitchens, Hettich for standard, and Hettich/Blum for premium. All hardware comes with manufacturer warranty and soft-close mechanisms.",
  },
];

const INTERNAL_LINKS = [
  { label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape" },
  { label: "Parallel Modular Kitchen", href: "/modular-kitchen-parallel" },
  { label: "Acrylic Modular Kitchen", href: "/modular-kitchen-acrylic" },
  { label: "Modular Kitchen Cost Delhi NCR", href: "/modular-kitchen-cost-delhi" },
  { label: "All Modular Kitchen Designs", href: "/modular-kitchen" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatCost(val: number): string {
  if (val >= 100000) return `₹${(val / 100000).toFixed(1).replace(".0", "")}L`;
  if (val >= 1000) return `₹${(val / 1000).toFixed(0)}K`;
  return `₹${val}`;
}

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
    { name: "2BHK Kitchen Design", href: "/2bhk-modular-kitchen-design" },
  ],
  faqs: FAQS,
});

export default function TwoBHKModularKitchenPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", META_DESCRIPTION);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = META_DESCRIPTION;
      document.head.appendChild(m);
    }
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
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

  const popularMaterials = MODULAR_KITCHEN_MATERIAL_REGISTRY.filter(
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
              <span className="text-white/90 font-medium">2BHK Kitchen Design</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              2BHK Modular Kitchen Design — Everything You Need to Know
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              A complete guide to designing the perfect modular kitchen for your 2BHK flat — covering typical sizes, the best layouts, popular finishes and realistic cost ranges for Delhi NCR.
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

      {/* Typical 2BHK Kitchen Sizes */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Typical 2BHK Kitchen Sizes in Delhi NCR</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left p-3 font-semibold">Property Type</th>
                  <th className="text-left p-3 font-semibold">Kitchen Dimensions</th>
                </tr>
              </thead>
              <tbody>
                {SIZE_TABLE.map((row) => (
                  <tr key={row.type} className="border-t border-border">
                    <td className="p-3 font-medium">{row.type}</td>
                    <td className="p-3 text-muted-foreground">{row.dimensions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best Layouts for 2BHK */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Best Layouts for 2BHK Kitchens</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {bestLayouts.map((layout) => (
              <div key={layout.id} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{layout.shortName}</h3>
                <p className="text-muted-foreground text-sm mb-3">{layout.bestFor}</p>
                <div className="space-y-1 text-xs text-muted-foreground mb-3">
                  <p>Space: {layout.minSqFt}–{layout.maxSqFt} sq ft</p>
                  <p>Cost: {formatCost(layout.costMin)}–{formatCost(layout.costMax)}</p>
                </div>
                <Link
                  to={`/modular-kitchen-${layout.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline cursor-pointer"
                >
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Finishes */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Popular Finishes for 2BHK Kitchens</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {popularMaterials.map((mat) => (
              <div key={mat.id} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{mat.shortName}</h3>
                <p className="text-sm text-primary font-medium mb-2">₹{mat.costMin}–₹{mat.costMax}/sq ft</p>
                <p className="text-muted-foreground text-sm mb-3">{mat.finish}</p>
                <div className="flex flex-wrap gap-1.5">
                  {mat.pros.map((pro) => (
                    <span key={pro} className="inline-flex items-center gap-1 text-xs bg-muted/60 rounded px-2 py-0.5">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />{pro}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2BHK Kitchen Cost Breakdown */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">2BHK Kitchen Cost Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {COST_TABLE.map((tier) => (
              <div
                key={tier.tier}
                className={`bg-card rounded-xl border p-5 ${tier.highlighted ? "border-primary ring-2 ring-primary/20" : "border-border"}`}
              >
                {tier.highlighted && (
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 block">Most Popular</span>
                )}
                <h3 className="text-lg font-bold mb-1">{tier.tier}</h3>
                <p className="text-2xl font-bold text-primary mb-3">{tier.range}</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>Finish: {tier.finishes}</li>
                  <li>Hardware: {tier.hardware}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What's Included in Our 2BHK Package</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {PACKAGE_INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <KitchenMidCta />
      {/* FAQs */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
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
              { label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape", icon: LayoutGrid, desc: "Best layout for most 2BHK kitchens — great storage and flow." },
              { label: "Parallel Modular Kitchen", href: "/modular-kitchen-parallel", icon: Grid2x2, desc: "Ideal for narrow 2BHK kitchens with two facing counters." },
              { label: "Acrylic Modular Kitchen", href: "/modular-kitchen-acrylic", icon: Layers, desc: "Premium glossy finish option for a modern 2BHK kitchen." },
              { label: "Modular Kitchen Cost Delhi NCR", href: "/modular-kitchen-cost-delhi", icon: IndianRupee, desc: "Full price breakdown for modular kitchens across Delhi NCR." },
              { label: "All Modular Kitchen Designs", href: "/modular-kitchen", icon: Home, desc: "Browse every layout, finish and style we offer." },
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

      {/* CTA Banner */}
      <section className="py-12 md:py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Get a free 2BHK kitchen design quote
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            WhatsApp your kitchen photo — our designer sends a 3D layout and detailed quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 bg-background text-foreground font-medium px-6 py-3 rounded-lg hover:bg-background/90 transition-colors cursor-pointer"
            >
              <PhoneCall className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need a modular kitchen design for my 2BHK flat`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Kitchen Photo
            </a>
          </div>
        </div>
      </section>

      <HomeServicesSection service="modular-kitchen" pageType="layout" />
      <Footer />
    </div>
  );
}
