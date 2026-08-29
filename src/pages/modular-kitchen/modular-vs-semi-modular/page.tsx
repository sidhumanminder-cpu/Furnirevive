import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, XCircle, ChevronRight, AlertCircle, Factory, Shield, Zap, Wrench, LayoutGrid, IndianRupee, Home, Layers } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { COMPARISON_OPTIONS, COMPARISON_ROWS } from "@/pages/modular-kitchen/_data/kitchen-comparison.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import { buildEditorialSchemas } from "@/lib/seo/kitchen-jsonld.ts";
import { KitchenStatsBar, KitchenMidCta, KitchenWhyChoose } from "@/components/kitchen-guide-conversion.tsx";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "Modular vs Semi-Modular Kitchen — What's the Difference?";
const META_DESCRIPTION = "Understand the real difference between modular and semi-modular kitchens. Compare cost, quality, installation time and warranty for Indian homes.";
const CANONICAL = "https://furnirevive.com/modular-vs-semi-modular-kitchen";

const MODULAR_POINTS = [
  "100% factory-manufactured with CNC precision — every cabinet is quality-checked before delivery",
  "Fully customisable layouts, hardware and finishes to match your exact kitchen dimensions",
  "Comes with a written structural warranty (typically 10 years) covering carcass and hardware",
];

const SEMI_MODULAR_POINTS = [
  "Mix of ready-made modular units and on-site carpentry work",
  "Lower upfront cost but compromises on precision and finish consistency",
  "Limited warranty — usually only on factory-made components, not on-site work",
];

const WHY_MODULAR_WINS = [
  { icon: Factory, title: "Factory Precision", desc: "CNC-cut panels ensure perfect tolerances. No gaps, no uneven edges." },
  { icon: Shield, title: "10-Year Warranty", desc: "Written warranty covers the entire kitchen — carcass, finish and hardware." },
  { icon: Zap, title: "Fast Installation", desc: "Pre-made units install in 2–4 days vs 2–3 weeks for semi-modular with carpentry." },
  { icon: Wrench, title: "Easy to Upgrade", desc: "Add or replace individual modules later without disturbing the rest of your kitchen." },
];

const FAQS = [
  {
    q: "What is the cost difference between modular and semi-modular?",
    a: "Semi-modular kitchens are 15-25% cheaper upfront, but the gap closes when you factor in lower durability and lack of warranty. A modular kitchen starts at ₹1.2L while semi-modular starts at ₹90K–₹1L for similar sizes.",
  },
  {
    q: "Is a semi-modular kitchen good for rental homes?",
    a: "It can work for short-term rental use where budget is the primary concern. However, if you plan to live in the home 3+ years, modular is a better investment due to durability and resale value.",
  },
  {
    q: "Can a semi-modular kitchen be upgraded to fully modular?",
    a: "Partially. You can replace the semi-modular components with modular units over time, but it's usually more cost-effective to do a complete modular installation from scratch.",
  },
  {
    q: "What warranty does a modular kitchen get?",
    a: "FurniRevive offers a 10-year structural warranty on all modular kitchens, covering the carcass, finish adhesion, and hardware mechanisms. Semi-modular typically gets 1-3 years on limited components.",
  },
];

const INTERNAL_LINKS = [
  { label: "Modular Kitchen Designs", href: "/modular-kitchen" },
  { label: "Modular Kitchen Cost Delhi NCR", href: "/modular-kitchen-cost-delhi" },
  { label: "Modular Kitchen Gurgaon", href: "/modular-kitchen-gurgaon" },
  { label: "Modular Kitchen Noida", href: "/modular-kitchen-noida" },
];

// ─── Badge Component ──────────────────────────────────────────────────────────

function ValueBadge({ value }: { value: "yes" | "no" | "partial" }) {
  if (value === "yes") return <CheckCircle2 className="h-5 w-5 text-green-600" />;
  if (value === "no") return <XCircle className="h-5 w-5 text-red-500" />;
  return <AlertCircle className="h-5 w-5 text-amber-500" />;
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
    { name: "Modular vs Semi-Modular", href: "/modular-vs-semi-modular-kitchen" },
  ],
  faqs: FAQS,
});

export default function ModularVsSemiModularPage() {
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

  // Filter to show only modular vs semi-modular (exclude carpenter for this page's focus)
  const relevantOptions = COMPARISON_OPTIONS.filter((o) => o.id === "modular" || o.id === "semi-modular");

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
              <span className="text-white/80 font-medium">Modular vs Semi-Modular</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              Modular vs Semi-Modular Kitchen — Which is the Better Investment?
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              Many homeowners confuse modular with semi-modular kitchens. The difference affects your kitchen's durability, finish quality and long-term value. Here's what you need to know.
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

      {/* Comparison Table (from shared data) */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Feature Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  {COMPARISON_OPTIONS.map((opt) => (
                    <th key={opt.id} className="text-center p-3 font-semibold text-primary">
                      {opt.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.id} className="border-t border-border">
                    <td className="p-3 font-medium">{row.feature}</td>
                    {COMPARISON_OPTIONS.map((opt) => (
                      <td key={opt.id} className="p-3 text-center">
                        <span className="inline-flex items-center justify-center">
                          <ValueBadge value={row.values[opt.id] ?? "no"} />
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Green = Full support | Yellow = Partial | Red = Not available
          </p>
        </div>
      </section>

      {/* What is Modular / Semi-Modular */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-xl font-bold mb-4">What is a Modular Kitchen?</h3>
            <ul className="space-y-3">
              {MODULAR_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-xl font-bold mb-4">What is a Semi-Modular Kitchen?</h3>
            <ul className="space-y-3">
              {SEMI_MODULAR_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Modular Wins */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Why Modular Wins for Delhi NCR Homes</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {WHY_MODULAR_WINS.map((item) => (
              <div key={item.title} className="bg-card rounded-xl border border-border p-5 flex items-start gap-4">
                <item.icon className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
              { label: "Modular Kitchen Designs", href: "/modular-kitchen", icon: LayoutGrid, desc: "Browse all modular kitchen styles, layouts and finishes." },
              { label: "Modular Kitchen Cost Delhi NCR", href: "/modular-kitchen-cost-delhi", icon: IndianRupee, desc: "Complete pricing guide with material and layout breakdowns." },
              { label: "Modular Kitchen Gurgaon", href: "/modular-kitchen-gurgaon", icon: Home, desc: "Our modular kitchen services across Gurgaon and DLF areas." },
              { label: "Modular Kitchen Noida", href: "/modular-kitchen-noida", icon: Layers, desc: "Full modular kitchen installation covering Noida and Greater Noida." },
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
            Get a full modular kitchen with 10-year warranty
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Free consultation — our designer visits your home, takes measurements and provides a complete quote with 3D design.
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
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a free modular kitchen consultation`}
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

      <HomeServicesSection service="modular-kitchen" pageType="hub" />
      <Footer />
    </div>
  );
}
