import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, ArrowUpRight, Maximize2, Layers, Palette, Settings, Square, IndianRupee, LayoutGrid, Home, Grid2x2 } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import { KitchenStatsBar, KitchenMidCta, KitchenWhyChoose } from "@/components/kitchen-guide-conversion.tsx";
import { buildEditorialSchemas } from "@/lib/seo/kitchen-jsonld.ts";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "3BHK Modular Kitchen Cost in Delhi NCR — Budget, Premium & Luxury";
const META_DESCRIPTION = "How much does a modular kitchen cost for a 3BHK flat in Delhi NCR? Detailed cost breakdown by layout, finish and budget tier with real pricing for 2026.";
const CANONICAL = "https://furnirevive.com/3bhk-modular-kitchen-cost";

type SizeRow = { type: string; dimensions: string };
const SIZE_TABLE: SizeRow[] = [
  { type: "Builder floor 3BHK", dimensions: "10×10 to 12×10 ft" },
  { type: "DDA / Society 3BHK", dimensions: "9×9 to 11×9 ft" },
  { type: "Premium 3BHK / Villa", dimensions: "12×12 to 15×12 ft" },
];

type TierCard = {
  tier: string;
  range: string;
  finish: string;
  hardware: string;
  countertop: string;
  extras: string;
  highlighted?: boolean;
};
const TIER_CARDS: TierCard[] = [
  {
    tier: "Budget",
    range: "₹2L–₹3.5L",
    finish: "Laminate / PVC",
    hardware: "Ebco (standard)",
    countertop: "Granite",
    extras: "Standard carcass, basic accessories",
  },
  {
    tier: "Standard",
    range: "₹3.5L–₹6L",
    finish: "Acrylic / Membrane",
    hardware: "Hettich",
    countertop: "Granite / Quartz",
    extras: "Soft-close, tall units, chimney cutout",
    highlighted: true,
  },
  {
    tier: "Premium",
    range: "₹6L–₹12L+",
    finish: "PU / Veneer / Glass",
    hardware: "Blum / Hafele",
    countertop: "Quartz / Corian",
    extras: "Chimney integration, island option, profile lighting",
  },
];

const COST_FACTORS = [
  { icon: Maximize2, title: "Kitchen Size", desc: "Larger kitchens need more cabinets, countertop and finish material" },
  { icon: Layers, title: "Layout Complexity", desc: "U-Shape and Island layouts cost more than L-Shape or Straight" },
  { icon: Palette, title: "Finish Choice", desc: "PU and veneer cost 2–3× more per sq ft than laminate or PVC" },
  { icon: Settings, title: "Hardware Brand", desc: "Blum/Hafele vs Ebco can add ₹30K–₹80K to total kitchen cost" },
  { icon: Square, title: "Countertop Material", desc: "Quartz is ₹400–₹800/sq ft vs granite at ₹150–₹350/sq ft" },
];

const FAQS = [
  {
    q: "What is the average cost of a modular kitchen for 3BHK in Delhi?",
    a: "Most 3BHK kitchens in Delhi NCR fall in the ₹3.5L–₹6L range for a standard modular kitchen with acrylic/membrane finish and Hettich hardware. Budget options start at ₹2L, premium can go up to ₹12L+.",
  },
  {
    q: "Is ₹3 lakh enough for a 3BHK modular kitchen?",
    a: "Yes, if you choose laminate or PVC finish with standard hardware. You'll get a functional, good-looking kitchen but with fewer premium accessories. Ideal for builder floor and DDA flat kitchens.",
  },
  {
    q: "What finish is best for ₹4–6 lakh budget?",
    a: "Acrylic or membrane finish gives you the best value in this range. Acrylic provides a premium glossy look while membrane offers soft-touch matte finishes with 3D routing options.",
  },
  {
    q: "Do you include countertop in the price?",
    a: "Yes. All FurniRevive packages include countertop (granite for budget/standard, quartz for premium). The price also includes backsplash, hardware, installation and 10-year warranty.",
  },
  {
    q: "How long does a 3BHK kitchen take to install?",
    a: "Typically 4–7 days depending on layout complexity. L-Shape takes 4–5 days, U-Shape 5–6 days, and Island layouts 6–7 days. This includes old kitchen removal, plumbing, installation and cleanup.",
  },
];

const INTERNAL_LINKS = [
  { label: "Modular Kitchen Cost Delhi NCR", href: "/modular-kitchen-cost-delhi" },
  { label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape" },
  { label: "U-Shape Modular Kitchen", href: "/modular-kitchen-u-shape" },
  { label: "Acrylic Modular Kitchen", href: "/modular-kitchen-acrylic" },
  { label: "PU Finish Modular Kitchen", href: "/modular-kitchen-pu" },
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
    { name: "3BHK Kitchen Cost", href: "/3bhk-modular-kitchen-cost" },
  ],
  faqs: FAQS,
});

export default function ThreeBHKModularKitchenPage() {
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
              <span className="text-white/90 font-medium">3BHK Kitchen Cost</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              3BHK Modular Kitchen Cost in Delhi NCR — 2026 Pricing Guide
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              A detailed breakdown of what a modular kitchen actually costs for a 3BHK flat in Delhi NCR — by layout, finish, hardware and budget tier. Real pricing, no hidden costs.
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

      {/* Typical 3BHK Kitchen Sizes */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Typical 3BHK Kitchen Sizes</h2>
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

      {/* Cost by Budget Tier */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">3BHK Kitchen Cost by Budget Tier</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TIER_CARDS.map((tier) => (
              <div
                key={tier.tier}
                className={`bg-card rounded-xl border p-5 ${tier.highlighted ? "border-primary ring-2 ring-primary/20" : "border-border"}`}
              >
                {tier.highlighted && (
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 block">Most Popular</span>
                )}
                <h3 className="text-lg font-bold mb-1">{tier.tier}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{tier.range}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Finish:</strong> {tier.finish}</li>
                  <li><strong className="text-foreground">Hardware:</strong> {tier.hardware}</li>
                  <li><strong className="text-foreground">Countertop:</strong> {tier.countertop}</li>
                  <li><strong className="text-foreground">Extras:</strong> {tier.extras}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost by Layout */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Cost by Layout</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {MODULAR_KITCHEN_LAYOUT_REGISTRY.map((layout) => (
              <Link
                key={layout.id}
                to={`/modular-kitchen-${layout.slug}`}
                className="bg-card rounded-xl border border-border p-4 hover:border-primary transition-colors cursor-pointer group"
              >
                <h3 className="font-semibold text-sm mb-1 group-hover:text-primary">{layout.shortName}</h3>
                <p className="text-lg font-bold text-primary">
                  {formatCost(layout.costMin)}–{formatCost(layout.costMax)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{layout.minSqFt}–{layout.maxSqFt} sq ft</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost by Finish */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Cost by Finish</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left p-3 font-semibold">Finish</th>
                  <th className="text-left p-3 font-semibold">Cost/sq ft</th>
                  <th className="text-left p-3 font-semibold">Durability</th>
                  <th className="text-left p-3 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {MODULAR_KITCHEN_MATERIAL_REGISTRY.map((mat) => (
                  <tr key={mat.id} className="border-t border-border">
                    <td className="p-3 font-medium">{mat.shortName}</td>
                    <td className="p-3 text-primary font-semibold">₹{mat.costMin}–₹{mat.costMax}</td>
                    <td className="p-3 text-muted-foreground capitalize">{mat.durability.replace("-", " ")}</td>
                    <td className="p-3 text-muted-foreground text-xs">{mat.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What Affects Your 3BHK Kitchen Cost?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COST_FACTORS.map((factor) => (
              <div key={factor.title} className="bg-card rounded-xl border border-border p-5 flex items-start gap-3">
                <factor.icon className="h-7 w-7 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-sm">{factor.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
              { label: "Modular Kitchen Cost Delhi NCR", href: "/modular-kitchen-cost-delhi", icon: IndianRupee, desc: "Complete pricing guide for modular kitchens across Delhi NCR." },
              { label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape", icon: LayoutGrid, desc: "Most popular layout — works for almost every 3BHK kitchen." },
              { label: "U-Shape Modular Kitchen", href: "/modular-kitchen-u-shape", icon: Grid2x2, desc: "Maximum storage and counter space for larger 3BHK kitchens." },
              { label: "Acrylic Modular Kitchen", href: "/modular-kitchen-acrylic", icon: Layers, desc: "Glossy premium finish loved in modern 3BHK homes." },
              { label: "PU Finish Modular Kitchen", href: "/modular-kitchen-pu", icon: Palette, desc: "Luxury PU finish for ultra-premium 3BHK interiors." },
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
            Get a detailed 3BHK kitchen quote — includes layout drawing
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Send us your kitchen dimensions or a photo. We'll reply with a 3D layout plan and itemised quote — no obligation.
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
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need a modular kitchen quote for my 3BHK flat`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </section>

      <HomeServicesSection service="modular-kitchen" pageType="cost" />
      <Footer />
    </div>
  );
}
