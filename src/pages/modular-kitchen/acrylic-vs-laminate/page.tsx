import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, XCircle, ChevronRight, Layers, Palette, IndianRupee, LayoutGrid, Home } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import { KitchenStatsBar, KitchenMidCta, KitchenWhyChoose } from "@/components/kitchen-guide-conversion.tsx";
import { buildEditorialSchemas } from "@/lib/seo/kitchen-jsonld.ts";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "Acrylic vs Laminate Modular Kitchen — Which is Better for Your Home?";
const META_DESCRIPTION = "Compare acrylic and laminate modular kitchen finishes on cost, durability, looks and maintenance. Expert guide with real pricing for Delhi NCR homes.";
const CANONICAL = "https://furnirevive.com/acrylic-vs-laminate-modular-kitchen";

type ComparisonRow = {
  feature: string;
  acrylic: string;
  laminate: string;
};

const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "Cost per sq ft", acrylic: "₹1,200–₹2,200", laminate: "₹700–₹1,400" },
  { feature: "Finish", acrylic: "Mirror-like gloss", laminate: "Matte / semi-gloss" },
  { feature: "Durability", acrylic: "Medium", laminate: "High" },
  { feature: "Maintenance", acrylic: "Medium", laminate: "Low" },
  { feature: "Best For", acrylic: "Modern premium look", laminate: "Budget-conscious buyers" },
  { feature: "Scratch Resistance", acrylic: "Low", laminate: "High" },
  { feature: "UV Resistance", acrylic: "Low — fades in sun", laminate: "Good" },
  { feature: "Moisture Resistance", acrylic: "Good", laminate: "Good" },
];

const ACRYLIC_REASONS = [
  "You want a sleek, mirror-like finish that makes the kitchen feel larger and brighter",
  "Your kitchen doesn't receive direct sunlight (UV fading risk)",
  "You're investing in a premium, modern aesthetic for entertaining guests",
  "Budget is not your primary constraint — you prefer visual impact",
];

const LAMINATE_REASONS = [
  "You want a durable, low-maintenance finish that handles daily wear easily",
  "You're on a mid-range or budget-friendly budget",
  "Your kitchen gets heavy use with kids or multiple family members cooking",
  "You prefer a wide variety of textures, patterns and wood-grain options",
];

const FAQS = [
  {
    q: "Is acrylic more expensive than laminate?",
    a: "Yes. Acrylic typically costs ₹1,200–₹2,200 per sq ft compared to ₹700–₹1,400 for laminate. For a standard 10×10 ft kitchen, acrylic can cost ₹50,000–₹1,00,000 more overall.",
  },
  {
    q: "Which finish lasts longer?",
    a: "Laminate generally lasts longer in everyday Indian kitchen conditions. It's scratch-resistant and UV-stable. Acrylic looks premium but is prone to surface scratches and fading if exposed to direct sunlight.",
  },
  {
    q: "Can laminate look premium?",
    a: "Absolutely. Modern anti-fingerprint and super-matte laminates rival acrylic in visual appeal. Brands like Merino and Greenlam offer texture finishes that feel high-end without the acrylic price tag.",
  },
  {
    q: "Which is easier to maintain?",
    a: "Laminate wins on maintenance. A damp cloth is all you need. Acrylic requires careful cleaning to avoid micro-scratches and fingerprint buildup — avoid abrasive cleaners.",
  },
];

const INTERNAL_LINKS = [
  { label: "Acrylic Modular Kitchen", href: "/modular-kitchen-acrylic" },
  { label: "Laminate Modular Kitchen", href: "/modular-kitchen-laminate" },
  { label: "Modular Kitchen Cost Delhi NCR", href: "/modular-kitchen-cost-delhi" },
  { label: "All Modular Kitchen Designs", href: "/modular-kitchen" },
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
    { name: "Acrylic vs Laminate", href: "/acrylic-vs-laminate-modular-kitchen" },
  ],
  faqs: FAQS,
});

export default function AcrylicVsLaminatePage() {
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

  const acrylic = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === "acrylic");
  const laminate = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === "laminate");

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
              <span className="text-white/90 font-medium">Acrylic vs Laminate</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              Acrylic vs Laminate Modular Kitchen — Which Should You Choose?
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              Choosing the right finish defines how your kitchen looks, feels and ages. This guide compares acrylic and laminate on every factor that matters — so you make the right decision for your home and budget.
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
          <h2 className="text-2xl font-bold mb-6">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-left p-3 font-semibold text-primary">Acrylic</th>
                  <th className="text-left p-3 font-semibold text-primary">Laminate</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-t border-border">
                    <td className="p-3 font-medium">{row.feature}</td>
                    <td className="p-3 text-muted-foreground">{row.acrylic}</td>
                    <td className="p-3 text-muted-foreground">{row.laminate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {acrylic && laminate && (
            <p className="mt-3 text-xs text-muted-foreground">
              Pricing based on FurniRevive Delhi NCR rates (2026). Actual cost depends on kitchen size, hardware and accessories.
            </p>
          )}
        </div>
      </section>

      {/* When to Choose Cards */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Acrylic Card */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-xl font-bold mb-4">When to Choose Acrylic</h3>
            <ul className="space-y-3">
              {ACRYLIC_REASONS.map((reason) => (
                <li key={reason} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Laminate Card */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-xl font-bold mb-4">When to Choose Laminate</h3>
            <ul className="space-y-3">
              {LAMINATE_REASONS.map((reason) => (
                <li key={reason} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Verdict */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Verdict</h2>
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">For luxury and premium homes:</strong> Choose acrylic. The mirror-like finish creates a stunning visual statement, especially in handleless or push-to-open designs. Pair it with Hettich or Blum hardware for the full premium experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">For mid-range and budget kitchens:</strong> Choose laminate. You get excellent durability, wide design variety, and significantly lower cost — without compromising on quality. Modern laminates look fantastic.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Both finishes are available at FurniRevive with a <strong className="text-foreground">10-year structural warranty</strong>, factory-manufactured precision, and professional installation in Delhi NCR.
            </p>
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
              { label: "Acrylic Modular Kitchen", href: "/modular-kitchen-acrylic", icon: Palette, desc: "Full guide to acrylic finish kitchens — designs, costs and care tips." },
              { label: "Laminate Modular Kitchen", href: "/modular-kitchen-laminate", icon: Layers, desc: "Explore laminate options — textures, patterns and pricing." },
              { label: "Modular Kitchen Cost Delhi NCR", href: "/modular-kitchen-cost-delhi", icon: IndianRupee, desc: "Complete pricing breakdown for modular kitchens in Delhi NCR." },
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
            Not sure which finish suits your kitchen?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Get a free sample visit — our designer brings acrylic and laminate samples to your home so you can compare in your own lighting.
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
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want to compare acrylic vs laminate for my kitchen`}
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

      <HomeServicesSection service="modular-kitchen" pageType="material" />
      <Footer />
    </div>
  );
}
