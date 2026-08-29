/**
 * Budget-intent kitchen locality template.
 * Used for: affordable-modular-kitchen-{locality} and low-cost-modular-kitchen-{locality}
 * Sections: hero → trust → price card → what fits → trade-off table → typical customers →
 *           recommended layouts → recommended materials → upgrade path → FAQs → nearby → CTA
 */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, TrendingUp, MapPin, ArrowUpCircle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import { BUDGET_TIER_CONFIG } from "@/lib/registry/budget-tier-config.ts";
import type { KitchenBudgetLocalityEntry } from "@/lib/registry/kitchen-budget-locality-registry.ts";
import PremiumKitchenGallery from "./PremiumKitchenGallery.tsx";
import { KITCHEN_GALLERY_IMAGES } from "./kitchen-gallery-images.ts";
import { WHY_CHOOSE_CARDS } from "../_data/kitchen-why-choose.ts";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import LocalityProfileSection from "./LocalityProfileSection.tsx";
import { getLocalityProfile, getBudgetSuitability } from "@/lib/registry/locality-profile-engine.ts";
import { NearMeCTA } from "@/components/kitchen-near-me-cta.tsx";

const CANONICAL_ORIGIN = "https://furnirevive.com";

function fmt(n: number) {
  return n >= 100000 ? `₹${(n / 100000).toFixed(1).replace(".0", "")}L` : `₹${(n / 1000).toFixed(0)}K`;
}

function injectJsonLd(data: object): HTMLScriptElement {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
  return el;
}

type Props = {
  entry: KitchenBudgetLocalityEntry;
  faqs: readonly { q: string; a: string }[];
};

const BUDGET_FEATURE_CARDS = [
  { title: "BWR Ply Carcass", description: "Boiling water resistant ply used in all carcasses — resists kitchen moisture, steam and heat for decades" },
  { title: "Factory Precision", description: "CNC-cut modules with sub-millimetre accuracy — no site cutting means faster install and cleaner results" },
  { title: "10-Year Warranty Coverage", description: "Full parts and labour warranty on shutters, hardware, and carcass for 10 years from installation" },
  { title: "Free Post-Install Support", description: "Hinges, drawer slides, and fittings adjusted for free anytime in the first year after installation" },
] as const;

const KitchenBudgetLocalityTemplate = ({ entry, faqs }: Props) => {
  const cfg = BUDGET_TIER_CONFIG[entry.budgetTier];
  const canonical = `${CANONICAL_ORIGIN}/${entry.urlSlug}`;
  const h1 = `${cfg.label} Modular Kitchen in ${entry.localityName}`;
  const localityProfile = getLocalityProfile(entry.localitySlug, entry.affluence);
  const budgetSuitability = getBudgetSuitability(entry.budgetTier, entry.localityName, entry.affluence);
  const metaTitle = `${cfg.label} Modular Kitchen in ${entry.localityName} | FurniRevive`;
  const metaDesc = `${cfg.label} modular kitchen in ${entry.localityName}, ${entry.cityName}. ${fmt(entry.priceMin)}–${fmt(entry.priceMax)}, free 3D design, 10-year warranty. ${cfg.tagline}.`;

  useEffect(() => {
    document.title = metaTitle;
    const metas: HTMLMetaElement[] = [];
    function setMeta(name: string, content: string, attr = "name") {
      const el = document.createElement("meta");
      el.setAttribute(attr, name);
      el.setAttribute("content", content);
      document.head.appendChild(el);
      metas.push(el);
    }
    setMeta("description", metaDesc);
    setMeta("og:title", metaTitle, "property");
    setMeta("og:description", metaDesc, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:type", "website", "property");
    const linkEl = document.createElement("link");
    linkEl.rel = "canonical";
    linkEl.href = canonical;
    document.head.appendChild(linkEl);

    const breadcrumbSchema = injectJsonLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${CANONICAL_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Modular Kitchen", item: `${CANONICAL_ORIGIN}/modular-kitchen` },
        { "@type": "ListItem", position: 3, name: entry.cityName, item: `${CANONICAL_ORIGIN}/modular-kitchen-${entry.citySlug}` },
        { "@type": "ListItem", position: 4, name: `${cfg.label} Kitchens`, item: canonical },
      ],
    });
    const faqSchema = injectJsonLd({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    const serviceSchema = injectJsonLd({
      "@context": "https://schema.org",
      "@type": "Service",
      name: h1,
      provider: { "@type": "LocalBusiness", name: "FurniRevive", telephone: PHONE_NUMBER, url: CANONICAL_ORIGIN, areaServed: entry.localityName },
      description: metaDesc,
      offers: { "@type": "AggregateOffer", lowPrice: entry.priceMin, highPrice: entry.priceMax, priceCurrency: "INR" },
    });

    return () => {
      metas.forEach((m) => m.remove());
      linkEl.remove();
      breadcrumbSchema.remove();
      faqSchema.remove();
      serviceSchema.remove();
    };
  }, [entry, canonical, metaTitle, metaDesc, h1, faqs, cfg]);

  const nearbyLocalities = entry.nearby.filter(Boolean);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[440px] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80')" }} />
        <nav className="absolute top-4 left-0 right-0 px-6 flex items-center gap-1 text-white/60 text-sm z-10 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/modular-kitchen" className="hover:text-white transition-colors cursor-pointer">Modular Kitchen</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/modular-kitchen-${entry.citySlug}`} className="hover:text-white transition-colors cursor-pointer">{entry.cityName}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/80">{entry.localityName}</span>
        </nav>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto pt-12 pb-8">
          <div className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {cfg.tagline}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">{h1}</h1>
          <p className="text-lg text-white/85 mb-6 text-balance">
            FurniRevive installs {cfg.label.toLowerCase()} modular kitchens in {entry.localityName} — {fmt(entry.priceMin)} onwards, free 3D design, 10-year warranty.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 text-sm">
            {["Free 3D Design", "10-Year Warranty", `${entry.localityName} Service`, cfg.hardwareTier].map((b) => (
              <span key={b} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />{b}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call for Free Quote
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want an ${cfg.label.toLowerCase()} modular kitchen in ${entry.localityName}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <KitchenTrustStrip />

      {/* Stats bar */}
      <section className="py-8 px-4 bg-amber-700 text-white">
        <div className="mx-auto max-w-5xl grid grid-cols-3 gap-4 text-center">
          <div><p className="text-2xl font-bold">500+</p><p className="text-sm text-white/80">Kitchens Completed</p></div>
          <div><p className="text-2xl font-bold">14 Days</p><p className="text-sm text-white/80">Avg. Installation</p></div>
          <div><p className="text-2xl font-bold">10-Year</p><p className="text-sm text-white/80">Warranty</p></div>
        </div>
      </section>

      {/* Price card */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">{cfg.label} Modular Kitchen Price in {entry.localityName}</h2>
            <p className="text-muted-foreground text-sm">Starting from {fmt(entry.priceMin)} — fully fitted up to {fmt(entry.priceMax)}</p>
          </div>
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer text-sm whitespace-nowrap">
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Gallery */}
      <PremiumKitchenGallery
        images={KITCHEN_GALLERY_IMAGES}
        title={`${cfg.label} Kitchen Designs in ${entry.localityName}`}
        subtitle={`Budget-friendly modular kitchens installed in ${entry.localityName} homes`}
        filter="laminate"
        initialVisible={6}
      />

      {/* What fits in this budget */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2">What You Get in an {cfg.label} Modular Kitchen</h2>
        <p className="text-muted-foreground text-sm mb-7">Honest breakdown of what's included at the {fmt(entry.priceMin)}–{fmt(entry.priceMax)} price point in {entry.localityName}</p>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-xl border border-border bg-background p-5">
            <h3 className="font-semibold text-foreground mb-3 text-sm">Finishes Available</h3>
            <ul className="space-y-2">
              {cfg.finishes.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <h3 className="font-semibold text-foreground mb-3 text-sm">Best Layouts for This Budget</h3>
            <ul className="space-y-2">
              {cfg.layoutLabels.map((l) => (
                <li key={l} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />{l}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <h3 className="font-semibold text-foreground mb-3 text-sm">Hardware Tier</h3>
            <p className="text-sm text-muted-foreground">{cfg.hardwareTier}</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <h3 className="font-semibold text-foreground mb-3 text-sm">Typical Kitchen Size</h3>
            <p className="text-sm text-muted-foreground">8–12 running feet, standard 2BHK kitchen footprint</p>
          </div>
        </div>
      </section>

      {/* Honest trade-off table */}
      <section className="py-10 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">{cfg.label} vs {cfg.tradeOffVsAbove.above}</h2>
          <p className="text-muted-foreground text-sm mb-6">Honest comparison — no upsell pressure</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-5">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 text-sm">Why Choose {cfg.label}</h3>
              <ul className="space-y-2">
                {cfg.tradeOffVsAbove.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-5">
              <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-3 text-sm">Trade-offs vs {cfg.tradeOffVsAbove.above}</h3>
              <ul className="space-y-2">
                {cfg.tradeOffVsAbove.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-foreground">
                    <TrendingUp className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Typical customers */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-foreground mb-5">Who Typically Chooses an {cfg.label} Kitchen?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {cfg.typicalCustomers.map((c) => (
            <div key={c} className="rounded-xl border border-border bg-background p-4 text-center">
              <p className="text-sm font-medium text-foreground">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended layouts */}
      <section className="py-10 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5">Recommended Layouts in {entry.localityName}</h2>
          <div className="flex flex-wrap gap-3">
            {cfg.layouts.map((slug, i) => (
              <Link key={slug} to={`/${slug}-modular-kitchen-${entry.localitySlug}`}
                className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer">
                {cfg.layoutLabels[i]} Kitchen in {entry.localityName}
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended materials */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-foreground mb-5">Best Materials at This Price Point</h2>
        <div className="flex flex-wrap gap-3">
          {cfg.materials.map((slug, i) => (
            <Link key={slug} to={`/${slug}-modular-kitchen-${entry.localitySlug}`}
              className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer">
              {cfg.materialLabels[i]} Kitchen in {entry.localityName}
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* Feature/benefit cards */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2">What Makes Our {cfg.label} Kitchens Different</h2>
        <p className="text-muted-foreground mb-7 text-sm">Quality you can see and feel — at a price that fits your budget</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {BUDGET_FEATURE_CARDS.map((feat) => (
            <div key={feat.title} className="rounded-xl border border-border bg-background p-5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{feat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upgrade path */}
      <section className="py-10 px-6 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-700/20 flex items-center justify-center shrink-0">
            <ArrowUpCircle className="w-5 h-5 text-amber-700" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">Upgrade Path</h3>
            <p className="text-sm text-muted-foreground">
              For approximately {fmt(cfg.upgradePrice)} more — {cfg.upgradeBenefit}.
            </p>
          </div>
          <Link to={`/modular-kitchen-${entry.localitySlug}`}
            className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
            Explore All Options <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ── Locality Profile ── */}
      <LocalityProfileSection
        localityName={entry.localityName}
        cityName={entry.cityName}
        profile={localityProfile}
        suitability={budgetSuitability}
      />

      {/* Why FurniRevive */}
      <section className="bg-stone-900 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose FurniRevive in {entry.localityName}?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {WHY_CHOOSE_CARDS.map((card) => (
              <div key={card.id} className="rounded-xl bg-stone-800 border border-stone-700 p-5">
                <div className="w-8 h-8 rounded-full bg-amber-700/30 flex items-center justify-center mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1.5">{card.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-background rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby localities */}
      {nearbyLocalities.length > 0 && (
        <section className="py-12 px-6 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-700" /> {cfg.label} Kitchens in Nearby Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {nearbyLocalities.map((slug) => {
              const displayName = slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
                .replace(" Delhi", "").replace(" Gurgaon", "").replace(" Noida", "").replace(" Ghaziabad", "").replace(" Faridabad", "");
              return (
                <Link key={slug} to={`/${cfg.urlPrefix}-${slug}`}
                  className="bg-muted/50 border border-border rounded-lg p-3 text-center text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer">
                  {cfg.label} Kitchen in {displayName}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Hub uplink */}
      <section className="py-8 px-6 max-w-5xl mx-auto">
        <Link
          to={`/modular-kitchen-${entry.localitySlug}`}
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors cursor-pointer"
        >
          <MapPin className="w-4 h-4" /> See all kitchens in {entry.localityName}
        </Link>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-amber-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Get a Free {cfg.label} Kitchen Design for Your {entry.localityName} Home</h2>
          <p className="text-white/85 mb-6">Free home visit, 3D design in 48 hours, transparent pricing — no hidden costs.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-amber-800 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer">
              <PhoneCall className="w-4 h-4" /> Call Now — Free Quote
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a free ${cfg.label.toLowerCase()} kitchen design consultation in ${entry.localityName}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <NearMeCTA variant="compact" pageType="budget" />
      <HomeServicesSection />
      <KitchenRelatedBlogs slug={entry.urlSlug} />
      <Footer />
    </>
  );
};

export default KitchenBudgetLocalityTemplate;
