import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, Ruler, LayoutGrid, Grid2x2, IndianRupee, Home } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import { buildEditorialSchemas } from "@/lib/seo/kitchen-jsonld.ts";
import { KitchenStatsBar, KitchenMidCta, KitchenWhyChoose } from "@/components/kitchen-guide-conversion.tsx";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "L-Shape vs U-Shape Modular Kitchen — Which Layout is Right for You?";
const META_DESCRIPTION = "Compare L-shape and U-shape modular kitchen layouts on space requirements, storage, cost and workflow. Guide for Delhi NCR homeowners.";
const CANONICAL = "https://furnirevive.com/l-shape-vs-u-shape-modular-kitchen";

type LayoutCompRow = {
  feature: string;
  lShape: string;
  uShape: string;
};

const COMPARISON_ROWS: LayoutCompRow[] = [
  { feature: "Ideal Space", lShape: "80–150 sq ft", uShape: "120–200 sq ft" },
  { feature: "Cost Range", lShape: "₹1.5L–₹5L", uShape: "₹2L–₹6.5L" },
  { feature: "Storage", lShape: "Good", uShape: "Excellent" },
  { feature: "Workflow", lShape: "Good triangle", uShape: "Optimal triangle" },
  { feature: "Best For", lShape: "Most homes", uShape: "Large kitchens" },
  { feature: "Island Possible?", lShape: "No", uShape: "Possible in large kitchens" },
];

const L_SHAPE_POINTS = [
  "Your kitchen is 80–150 sq ft — the most common size in Delhi NCR apartments",
  "You want to keep costs under ₹3L while getting an efficient layout",
  "You have an open-plan layout and want the kitchen to feel connected to the living area",
  "It's your first modular kitchen and you want something reliable and versatile",
];

const U_SHAPE_POINTS = [
  "Your kitchen is 120 sq ft or larger with three available walls",
  "You cook frequently and need maximum counter space and storage",
  "You want an optimal cooking triangle — sink, stove and fridge within easy reach",
  "Multiple family members use the kitchen and you need room to move",
];

const SPACE_GUIDE = [
  { label: "L-Shape minimum", sqft: "80 sq ft", dims: "~8×10 ft" },
  { label: "L-Shape comfortable", sqft: "120 sq ft", dims: "~10×12 ft" },
  { label: "U-Shape minimum", sqft: "120 sq ft", dims: "~10×12 ft" },
  { label: "U-Shape comfortable", sqft: "160 sq ft", dims: "~12×13 ft" },
];

const FAQS = [
  {
    q: "Which layout is cheaper — L-Shape or U-Shape?",
    a: "L-Shape is typically 20-30% cheaper because it uses fewer cabinets and less counter space. An L-Shape kitchen starts at ₹1.5L while U-Shape starts at ₹2L for similar finishes.",
  },
  {
    q: "Which layout gives more storage?",
    a: "U-Shape offers significantly more storage — up to 40-60% more cabinet space than L-Shape in the same kitchen area because it utilises three walls instead of two.",
  },
  {
    q: "Can I convert an L-Shape kitchen to U-Shape later?",
    a: "Yes, it's possible if you have a third wall available. However, it's easier and more cost-effective to plan for U-Shape from the start. Conversion typically costs 50-70% of a fresh U-Shape installation.",
  },
  {
    q: "Which layout is more popular in Delhi NCR apartments?",
    a: "L-Shape is the most popular layout in Delhi NCR apartments because most 2BHK and 3BHK kitchens are 80-130 sq ft — ideal L-Shape territory. U-Shape is more common in villas and premium 3BHK+ flats.",
  },
];

const INTERNAL_LINKS = [
  { label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape" },
  { label: "U-Shape Modular Kitchen", href: "/modular-kitchen-u-shape" },
  { label: "All Modular Kitchen Layouts", href: "/modular-kitchen" },
  { label: "Modular Kitchen Cost Delhi NCR", href: "/modular-kitchen-cost-delhi" },
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
    { name: "L-Shape vs U-Shape", href: "/l-shape-vs-u-shape-modular-kitchen" },
  ],
  faqs: FAQS,
});

export default function LShapeVsUShapePage() {
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

  const lShape = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === "l-shape");
  const uShape = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === "u-shape");

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
              <span className="text-white/80 font-medium">L-Shape vs U-Shape</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              L-Shape vs U-Shape Kitchen — Which Layout Fits Your Space?
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              The layout you choose determines your kitchen's workflow, storage capacity and overall cost. Here's how L-Shape and U-Shape compare for real Delhi NCR homes.
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

      {/* Comparison Table */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Layout Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-left p-3 font-semibold text-primary">L-Shape</th>
                  <th className="text-left p-3 font-semibold text-primary">U-Shape</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-t border-border">
                    <td className="p-3 font-medium">{row.feature}</td>
                    <td className="p-3 text-muted-foreground">{row.lShape}</td>
                    <td className="p-3 text-muted-foreground">{row.uShape}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {lShape && uShape && (
            <p className="mt-3 text-xs text-muted-foreground">
              Cost based on laminate/acrylic finishes with standard hardware. Actual pricing varies by material and accessories.
            </p>
          )}
        </div>
      </section>

      {/* Choose Cards */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-xl font-bold mb-4">Choose L-Shape if...</h3>
            <ul className="space-y-3">
              {L_SHAPE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-xl font-bold mb-4">Choose U-Shape if...</h3>
            <ul className="space-y-3">
              {U_SHAPE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Space Guide */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Ruler className="h-6 w-6 text-primary" />
            Space Guide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SPACE_GUIDE.map((item) => (
              <div key={item.label} className="bg-card rounded-xl border border-border p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="text-lg font-bold text-primary">{item.sqft}</p>
                <p className="text-xs text-muted-foreground">{item.dims}</p>
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
              { label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape", icon: LayoutGrid, desc: "Explore designs, dimensions and costs for L-shape layouts." },
              { label: "U-Shape Modular Kitchen", href: "/modular-kitchen-u-shape", icon: Grid2x2, desc: "Maximum storage and optimal workflow for larger kitchens." },
              { label: "All Modular Kitchen Layouts", href: "/modular-kitchen", icon: Home, desc: "Browse every kitchen layout type we design and install." },
              { label: "Modular Kitchen Cost Delhi NCR", href: "/modular-kitchen-cost-delhi", icon: IndianRupee, desc: "Detailed pricing guide for modular kitchens in Delhi NCR." },
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
            Tell us your kitchen size — we'll recommend the right layout
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Send us your kitchen dimensions or a photo, and our designer will suggest the best layout for your space — free of cost.
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
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need help choosing between L-shape and U-shape for my kitchen`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <HomeServicesSection service="modular-kitchen" pageType="layout" />
      <Footer />
    </div>
  );
}
