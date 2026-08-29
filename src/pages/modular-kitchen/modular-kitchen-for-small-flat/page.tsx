import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, Lightbulb, ArrowUpRight, Home, Ruler, LayoutGrid, IndianRupee, Layers } from "lucide-react";
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

const PAGE_TITLE = "Modular Kitchen for Small Flat — Space-Saving Designs for 1BHK & 2BHK";
const META_DESCRIPTION = "Smart modular kitchen designs for small flats and 1BHK/2BHK apartments in Delhi NCR. Space-saving layouts, compact finishes and budget options from ₹80,000.";
const CANONICAL = "https://furnirevive.com/modular-kitchen-for-small-flat";

const TRUST_BADGES = [
  "From ₹80,000",
  "Free Design Consultation",
  "10-Year Warranty",
  "Delhi NCR Service",
];

const SMALL_KITCHEN_MATERIAL_REASONS: Record<string, string> = {
  laminate: "Budget-friendly, scratch-resistant and available in light colours that open up small spaces",
  pvc: "100% waterproof, termite-proof and the most affordable option for compact kitchens",
};

const SPACE_SAVING_TIPS = [
  "Vertical cabinets to ceiling — use every inch of height for storage",
  "Pull-out drawers instead of shelves — easier access and better organization",
  "Corner magic corners or carousel units — eliminate dead corner space",
  "Integrated chimney and hob — saves counter depth vs standalone units",
  "Light colours and reflective finishes — make the kitchen feel open and airy",
  "Minimal handle (J-profile) or push-to-open — clean lines, no handle protrusion",
  "Wall-mounted floating shelves — display items without eating floor space",
];

type BudgetRow = { flatType: string; dims: string; range: string };
const BUDGET_TABLE: BudgetRow[] = [
  { flatType: "1BHK small kitchen", dims: "6×6 ft", range: "₹80K–₹1.2L" },
  { flatType: "1BHK medium kitchen", dims: "8×8 ft", range: "₹1.2L–₹2L" },
  { flatType: "2BHK kitchen", dims: "8×10 ft", range: "₹1.5L–₹3L" },
];

const FAQS = [
  {
    q: "What is the minimum budget for a modular kitchen in a small flat?",
    a: "You can get a functional modular kitchen in a small 1BHK flat starting from ₹80,000 with a straight layout, PVC or laminate finish, and standard hardware. This includes cabinets, countertop and basic accessories.",
  },
  {
    q: "Which layout is best for a 1BHK kitchen?",
    a: "Straight (single-wall) layout is ideal for most 1BHK kitchens as they are typically 5–7 ft wide. If you have a corner, L-Shape works well in slightly larger 1BHK kitchens of 7–8 ft.",
  },
  {
    q: "Can I get a modular kitchen under ₹1 lakh?",
    a: "Yes. A straight-line modular kitchen with laminate or PVC finish, basic hardware and granite countertop fits within ₹80K–₹1L for kitchens up to 6×6 ft.",
  },
  {
    q: "How long does installation take for a small kitchen?",
    a: "Typically 2–3 days for small kitchens (straight or small L-Shape). This includes demolition of old setup, plumbing alignment, cabinet installation and countertop fitting.",
  },
];

const INTERNAL_LINKS = [
  { label: "Straight Modular Kitchen", href: "/modular-kitchen-straight" },
  { label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape" },
  { label: "Laminate Modular Kitchen", href: "/modular-kitchen-laminate" },
  { label: "Modular Kitchen Under ₹1 Lakh", href: "/modular-kitchen-1-lakh" },
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
    { name: "Small Flat Kitchen", href: "/modular-kitchen-for-small-flat" },
  ],
  faqs: FAQS,
});

export default function ModularKitchenSmallFlatPage() {
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

  const smallLayouts = MODULAR_KITCHEN_LAYOUT_REGISTRY.filter(
    (l) => l.slug === "straight" || l.slug === "l-shape"
  );

  const smallMaterials = MODULAR_KITCHEN_MATERIAL_REGISTRY.filter(
    (m) => m.slug === "laminate" || m.slug === "pvc"
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
              <span className="text-white/80 font-medium">Small Flat Kitchen</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              Modular Kitchen for Small Flat — Smart Designs That Maximise Every Inch
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              Small kitchens deserve smart design. Whether it's a compact 1BHK or a cozy 2BHK, a well-planned modular kitchen transforms limited space into an efficient cooking zone.
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

      {/* Best Layouts for Small Kitchens */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Best Layouts for Small Kitchens</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {smallLayouts.map((layout) => (
              <div key={layout.id} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-2">{layout.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{layout.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                  <span className="bg-muted/60 rounded px-2 py-1">{layout.minSqFt}–{layout.maxSqFt} sq ft</span>
                  <span className="bg-muted/60 rounded px-2 py-1">{formatCost(layout.costMin)}–{formatCost(layout.costMax)}</span>
                </div>
                <Link
                  to={`/modular-kitchen-${layout.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline cursor-pointer"
                >
                  View details <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Finishes for Small Kitchens */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Best Finishes for Small Kitchens</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {smallMaterials.map((mat) => (
              <div key={mat.id} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{mat.shortName}</h3>
                <p className="text-sm text-primary font-medium mb-2">₹{mat.costMin}–₹{mat.costMax}/sq ft</p>
                <p className="text-muted-foreground text-sm mb-3">
                  {SMALL_KITCHEN_MATERIAL_REASONS[mat.slug] ?? mat.bestFor}
                </p>
                <div className="flex flex-wrap gap-2">
                  {mat.pros.map((pro) => (
                    <span key={pro} className="inline-flex items-center gap-1 text-xs bg-muted/60 rounded px-2 py-1">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />{pro}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Space-Saving Tips */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            7 Space-Saving Tips for Small Kitchens
          </h2>
          <ol className="space-y-4">
            {SPACE_SAVING_TIPS.map((tip, i) => (
              <li key={tip} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-muted-foreground leading-relaxed pt-0.5">{tip}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Budget Table */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Budget Guide for Small Flats</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left p-3 font-semibold">Flat Type</th>
                  <th className="text-left p-3 font-semibold">Kitchen Size</th>
                  <th className="text-left p-3 font-semibold">Budget Range</th>
                </tr>
              </thead>
              <tbody>
                {BUDGET_TABLE.map((row) => (
                  <tr key={row.flatType} className="border-t border-border">
                    <td className="p-3 font-medium">{row.flatType}</td>
                    <td className="p-3 text-muted-foreground">{row.dims}</td>
                    <td className="p-3 font-semibold text-primary">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Includes cabinets, countertop, hardware and installation. Does not include chimney, appliances or plumbing changes.
          </p>
        </div>
      </section>

      <KitchenMidCta />

      {/* FAQs */}
      <section className="py-12 md:py-16 px-4">
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
              { label: "Straight Modular Kitchen", href: "/modular-kitchen-straight", icon: Ruler, desc: "The most space-efficient layout for narrow and compact kitchens." },
              { label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape", icon: LayoutGrid, desc: "Smart corner layouts ideal for 1BHK and small 2BHK kitchens." },
              { label: "Laminate Modular Kitchen", href: "/modular-kitchen-laminate", icon: Layers, desc: "Affordable, durable laminate finishes perfect for small kitchens." },
              { label: "Modular Kitchen Under ₹1 Lakh", href: "/modular-kitchen-1-lakh", icon: IndianRupee, desc: "Budget-friendly full modular kitchen options starting ₹80K." },
              { label: "All Modular Kitchen Designs", href: "/modular-kitchen", icon: Home, desc: "Explore every layout, finish and style we offer across Delhi NCR." },
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
            Send us your kitchen photo — we'll design a layout that fits
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Our designer creates a custom space-saving plan for your small kitchen — completely free. Just WhatsApp a photo of your kitchen.
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
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I have a small flat kitchen and need a space-saving design`}
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
