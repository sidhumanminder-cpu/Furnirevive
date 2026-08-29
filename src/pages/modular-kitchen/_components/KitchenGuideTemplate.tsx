/**
 * Kitchen Guide Template — Comparison / Planning / Budget guide pages
 * Used for: /{slug} (e.g. /acrylic-vs-laminate-modular-kitchen)
 * Sections: Hero → Trust → Key Takeaway → Guide Content → Cross-links →
 *           FAQs → Related Guides → CTA
 */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, ChevronRight, BookOpen, Scale, ClipboardList, IndianRupee, Lightbulb, ArrowRight } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { setPageMetadata } from "@/lib/metadata.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import type { KitchenGuideEntry } from "@/lib/registry/kitchen-guide-registry.ts";

const CANONICAL_ORIGIN = "https://furnirevive.com";

function injectJsonLd(data: object): HTMLScriptElement {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
  return el;
}

function slugToLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const CATEGORY_CONFIG = {
  comparison: {
    label: "Comparison Guide",
    badgeClass: "bg-amber-600/80 text-white",
    icon: Scale,
  },
  planning: {
    label: "Planning Guide",
    badgeClass: "bg-indigo-600/80 text-white",
    icon: ClipboardList,
  },
  budget: {
    label: "Budget Guide",
    badgeClass: "bg-green-600/80 text-white",
    icon: IndianRupee,
  },
} as const;

function getQuickTakeaways(entry: KitchenGuideEntry): string[] {
  switch (entry.category) {
    case "comparison":
      return [
        `Compares key differences between ${entry.relatedMaterials.slice(0, 2).map(slugToLabel).join(" and ")} finishes for modular kitchens.`,
        "Covers durability, maintenance, cost, and aesthetic appeal side by side.",
        "Helps you pick the right finish based on your lifestyle and budget.",
      ];
    case "planning":
      return [
        `Covers essential planning steps for ${entry.relatedLayouts.length > 0 ? slugToLabel(entry.relatedLayouts[0]) : "your"} kitchen layout.`,
        "Includes measurement tips, workflow zones, and storage optimization.",
        "Ideal for homeowners starting their modular kitchen journey in Delhi NCR.",
      ];
    case "budget":
      return [
        "Breaks down modular kitchen costs from affordable to premium options.",
        "Highlights where to save and where to invest for lasting quality.",
        "Includes real price ranges for Delhi NCR with no hidden charges.",
      ];
  }
}

function getComparisonContent(entry: KitchenGuideEntry): { left: string; right: string } {
  const materials = entry.relatedMaterials.slice(0, 2);
  const left = materials[0] ? slugToLabel(materials[0]) : "Option A";
  const right = materials[1] ? slugToLabel(materials[1]) : "Option B";
  return { left, right };
}

type Props = {
  entry: KitchenGuideEntry;
  faqs: readonly { q: string; a: string }[];
};

const KitchenGuideTemplate = ({ entry, faqs }: Props) => {
  const canonical = `${CANONICAL_ORIGIN}/${entry.slug}`;
  const categoryConfig = CATEGORY_CONFIG[entry.category];
  const CategoryIcon = categoryConfig.icon;

  useEffect(() => {
    const cleanupMeta = setPageMetadata({
      title: entry.metaTitle,
      description: entry.metaDesc,
      canonical,
      ogUrl: canonical,
      ogType: "article",
    });

    const scripts: HTMLScriptElement[] = [];

    // BreadcrumbList
    scripts.push(
      injectJsonLd({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${CANONICAL_ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Modular Kitchen", item: `${CANONICAL_ORIGIN}/modular-kitchen` },
          { "@type": "ListItem", position: 3, name: entry.name, item: canonical },
        ],
      })
    );

    // FAQPage
    if (faqs.length > 0) {
      scripts.push(
        injectJsonLd({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })
      );
    }

    // LocalBusiness
    scripts.push(
      injectJsonLd({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "FurniRevive",
        telephone: PHONE_NUMBER,
        url: CANONICAL_ORIGIN,
        areaServed: "Delhi NCR",
        description: "Custom modular kitchen design & installation in Delhi NCR.",
      })
    );

    return () => {
      cleanupMeta();
      scripts.forEach((s) => s.remove());
    };
  }, [entry, canonical, faqs]);

  const takeaways = getQuickTakeaways(entry);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80')" }}
        />
        {/* Breadcrumb */}
        <nav className="absolute top-4 left-0 right-0 px-6 flex items-center gap-1 text-white/60 text-sm z-10 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/modular-kitchen" className="hover:text-white transition-colors cursor-pointer">Modular Kitchen</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/80">{entry.name}</span>
        </nav>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto pt-14 pb-10">
          <div className={`inline-flex items-center gap-1.5 ${categoryConfig.badgeClass} text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
            <CategoryIcon className="w-3 h-3" /> {categoryConfig.label}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance leading-tight">{entry.h1}</h1>
          <p className="text-lg text-white/85 mb-8 text-balance max-w-2xl mx-auto">{entry.searchIntent}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Call for Free Quote
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need help choosing a modular kitchen — ${entry.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <KitchenTrustStrip />

      {/* Quick Answer */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-700/20 flex items-center justify-center shrink-0">
              <Lightbulb className="w-4 h-4 text-amber-700" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Quick Answer</h2>
          </div>
          <ul className="space-y-3">
            {takeaways.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center font-semibold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Detailed Guide */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        {entry.category === "comparison" ? (
          <ComparisonGuideContent entry={entry} />
        ) : (
          <StepsGuideContent entry={entry} />
        )}
      </section>

      {/* Cross-links */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {entry.relatedMaterials.map((slug) => (
              <Link
                key={`mat-${slug}`}
                to={`/${slug}-modular-kitchen`}
                className="rounded-xl border border-border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group"
              >
                <p className="font-semibold text-sm text-foreground group-hover:text-amber-700 transition-colors">{slugToLabel(slug)} Kitchen</p>
                <p className="text-xs text-muted-foreground mt-1">Material guide</p>
              </Link>
            ))}
            {entry.relatedLayouts.map((slug) => (
              <Link
                key={`lay-${slug}`}
                to={`/${slug}-modular-kitchen`}
                className="rounded-xl border border-border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group"
              >
                <p className="font-semibold text-sm text-foreground group-hover:text-amber-700 transition-colors">{slugToLabel(slug)} Layout</p>
                <p className="text-xs text-muted-foreground mt-1">Layout guide</p>
              </Link>
            ))}
            {entry.crossLinks.map((slug) => (
              <Link
                key={`cx-${slug}`}
                to={`/${slug}`}
                className="rounded-xl border border-border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group"
              >
                <p className="font-semibold text-sm text-foreground group-hover:text-amber-700 transition-colors">{slugToLabel(slug)}</p>
                <p className="text-xs text-muted-foreground mt-1">Related page</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl border border-border bg-card overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-foreground text-sm select-none">
                    {faq.q}
                    <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90 shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Guides */}
      {entry.relatedGuides.length > 0 && (
        <section className="py-10 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-700" /> More Kitchen Guides
            </h2>
            <div className="flex flex-wrap gap-3">
              {entry.relatedGuides.map((slug) => (
                <Link
                  key={slug}
                  to={`/${slug}`}
                  className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  {slugToLabel(slug)} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 px-6 bg-amber-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Get a Free Kitchen Consultation</h2>
          <p className="text-white/85 mb-6">
            Speak with our modular kitchen experts — free design advice, accurate pricing, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-white text-amber-800 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Call Now — Free Quote
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like a free kitchen consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <HomeServicesSection service="modular-kitchen" pageType="locality" cityName="Delhi NCR" />
      <KitchenRelatedBlogs slug={entry.slug} />
      <Footer />
    </>
  );
};

/* ─── Sub-components ──────────────────────────────────────────────────────── */

function ComparisonGuideContent({ entry }: { entry: KitchenGuideEntry }) {
  const { left, right } = getComparisonContent(entry);

  const comparisonRows = [
    { label: "Durability", left: "High scratch & moisture resistance", right: "Moderate — depends on quality" },
    { label: "Maintenance", left: "Easy to clean, low upkeep", right: "Regular care needed" },
    { label: "Cost Range", left: "₹1.5L – ₹4L per kitchen", right: "₹80K – ₹2.5L per kitchen" },
    { label: "Aesthetic", left: "Glossy premium finish", right: "Wide texture variety" },
    { label: "Lifespan", left: "12–15 years with care", right: "8–12 years typical" },
  ] as const;

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">{left} vs {right}: Head-to-Head</h2>
      <p className="text-muted-foreground text-sm mb-8">A detailed comparison to help you make the right choice for your modular kitchen.</p>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="grid grid-cols-3 bg-stone-100 dark:bg-stone-800 text-sm font-semibold">
          <div className="p-4 text-muted-foreground">Feature</div>
          <div className="p-4 text-amber-700 border-l border-border">{left}</div>
          <div className="p-4 text-indigo-700 dark:text-indigo-400 border-l border-border">{right}</div>
        </div>
        {comparisonRows.map((row) => (
          <div key={row.label} className="grid grid-cols-3 border-t border-border text-sm">
            <div className="p-4 font-medium text-foreground">{row.label}</div>
            <div className="p-4 text-muted-foreground border-l border-border">{row.left}</div>
            <div className="p-4 text-muted-foreground border-l border-border">{row.right}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h3 className="font-bold text-foreground mb-2">Our Recommendation</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Choose <strong>{left}</strong> if you want a premium, long-lasting finish with minimal maintenance.
          Choose <strong>{right}</strong> if you are on a tighter budget and want more design flexibility.
          FurniRevive offers both options with a 10-year warranty — call for a free consultation.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-foreground mb-4">Key Decision Factors</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Kitchen Usage", desc: "Heavy cooking favours durable, heat-resistant materials." },
            { title: "Budget", desc: "Set a realistic budget — material choice impacts 40% of total cost." },
            { title: "Aesthetic Goals", desc: "Glossy or matte? Modern or classic? Match your home's design language." },
            { title: "Climate & Humidity", desc: "Delhi NCR humidity can warp cheap materials — invest in quality." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-5">
              <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepsGuideContent({ entry }: { entry: KitchenGuideEntry }) {
  const isPlanningGuide = entry.category === "planning";

  const steps = isPlanningGuide
    ? [
        { title: "Measure Your Kitchen Space", desc: "Get exact slab dimensions — length, width, ceiling height, and window/door positions. This determines your layout options." },
        { title: "Choose Your Layout", desc: "L-shaped, U-shaped, parallel, or straight — pick based on available space and cooking workflow." },
        { title: "Select Materials & Finish", desc: "Pick cabinet material (plywood/MDF), shutter finish (acrylic/laminate/PU), and countertop (granite/quartz)." },
        { title: "Plan Storage & Accessories", desc: "Include pull-outs, corner carousels, tall units, and drawer organisers for maximum functionality." },
        { title: "Get a Professional Design", desc: "A 3D render from FurniRevive ensures your kitchen is optimised before installation begins." },
      ]
    : [
        { title: "Set Your Total Budget", desc: "Modular kitchens in Delhi NCR start from ₹80K (basic) to ₹5L+ (premium). Decide your ceiling." },
        { title: "Allocate by Category", desc: "Cabinets: 40%, countertop: 15%, hardware: 15%, accessories: 15%, installation: 15%." },
        { title: "Pick the Right Material Tier", desc: "Laminate for budget-friendly, acrylic for mid-range, PU/lacquer for premium. Each tier has a 2–3x price jump." },
        { title: "Don't Skip Hardware", desc: "Hinges, channels, and baskets from Hettich/Hafele last 15+ years — cheap hardware fails in 2–3 years." },
        { title: "Get a Detailed Quote", desc: "Ask FurniRevive for a line-item quote with no hidden charges — compare before committing." },
      ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">
        {isPlanningGuide ? "Step-by-Step Kitchen Planning" : "Smart Budget Allocation"}
      </h2>
      <p className="text-muted-foreground text-sm mb-8">
        {isPlanningGuide
          ? "Follow these steps to plan your perfect modular kitchen in Delhi NCR."
          : "A practical guide to spending wisely on your modular kitchen."}
      </p>

      <div className="space-y-5">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-9 h-9 rounded-full bg-amber-700 text-white font-bold text-sm flex items-center justify-center shrink-0">
              {i + 1}
            </div>
            <div className="rounded-xl border border-border bg-card p-5 flex-1">
              <h3 className="font-semibold text-foreground text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-card p-6">
        <h3 className="font-bold text-foreground mb-3">Pro Tips from FurniRevive</h3>
        <ul className="space-y-2">
          {[
            "Always get a site visit before finalising design — measurements vary from builder plans.",
            "Invest in soft-close hardware — it's a small cost for daily comfort.",
            "Plan lighting early — under-cabinet LEDs make a huge usability difference.",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default KitchenGuideTemplate;
