import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setPageMetadata } from "@/lib/metadata.ts";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, Ruler, IndianRupee, LayoutPanelLeft } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import PremiumKitchenGallery from "./PremiumKitchenGallery.tsx";
import { KITCHEN_GALLERY_IMAGES } from "./kitchen-gallery-images.ts";
import { WHY_CHOOSE_CARDS } from "../_data/kitchen-why-choose.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import { KITCHEN_MATERIAL_CITY_REGISTRY } from "@/lib/registry/kitchen-material-city-registry.ts";
import type { KitchenLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";
import { NearMeCTA } from "@/components/kitchen-near-me-cta.tsx";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatINR(amount: number): string {
  if (amount >= 100000) return `\u20B9${(amount / 100000).toFixed(1).replace(".0", "")}L`;
  if (amount >= 1000) return `\u20B9${(amount / 1000).toFixed(0)}K`;
  return `\u20B9${amount}`;
}

function injectJsonLd(data: object): HTMLScriptElement {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
  return el;
}

const CANONICAL_ORIGIN = "https://furnirevive.com";

// ─── Component ────────────────────────────────────────────────────────────────

type Props = { entry: KitchenLayoutCityEntry };

export default function LayoutCityTemplate({ entry }: Props) {
  const canonical = `${CANONICAL_ORIGIN}/${entry.slug}`;

  // SEO meta + JSON-LD
  useEffect(() => {
    const cleanupMeta = setPageMetadata({
      title: entry.metaTitle,
      description: entry.metaDescription,
      canonical,
      ogTitle: entry.metaTitle,
      ogDescription: entry.metaDescription,
      ogUrl: canonical,
      ogType: "website",
      ogImage: "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
      ogSiteName: "FurniRevive",
      twitterCard: "summary_large_image",
      twitterTitle: entry.metaTitle,
      twitterDescription: entry.metaDescription,
      twitterImage: "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
    });

    const breadcrumbSchema = injectJsonLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${CANONICAL_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Modular Kitchen", item: `${CANONICAL_ORIGIN}/modular-kitchen` },
        { "@type": "ListItem", position: 3, name: `Modular Kitchen ${entry.cityName}`, item: `${CANONICAL_ORIGIN}/modular-kitchen-${entry.citySlug}` },
        { "@type": "ListItem", position: 4, name: entry.h1, item: canonical },
      ],
    });
    const faqSchema = injectJsonLd({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: entry.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    const serviceSchema = injectJsonLd({
      "@context": "https://schema.org",
      "@type": "Service",
      name: entry.h1,
      provider: {
        "@type": "LocalBusiness",
        name: "FurniRevive",
        telephone: PHONE_NUMBER,
        url: CANONICAL_ORIGIN,
        areaServed: entry.cityName,
      },
      description: entry.metaDescription,
      offers: {
        "@type": "AggregateOffer",
        lowPrice: entry.priceMin,
        highPrice: entry.priceMax,
        priceCurrency: "INR",
      },
    });

    return () => {
      cleanupMeta();
      breadcrumbSchema.remove();
      faqSchema.remove();
      serviceSchema.remove();
    };
  }, [entry, canonical]);

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[480px] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80')" }}
        />
        {/* Breadcrumb */}
        <nav className="absolute top-4 left-0 right-0 px-6 flex items-center gap-1 text-white/60 text-sm z-10">
          <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/modular-kitchen" className="hover:text-white transition-colors cursor-pointer">Modular Kitchen</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/modular-kitchen-${entry.citySlug}`} className="hover:text-white transition-colors cursor-pointer">{entry.cityName}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/80">{entry.layoutName}</span>
        </nav>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto pt-12 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">{entry.h1}</h1>
          <p className="text-lg text-white/85 mb-6 text-balance">{entry.heroSubtext}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
            {["Free Design Consultation", "10-Year Warranty", `${entry.cityName}-Wide Service`, "Premium Hardware"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />{b}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a ${entry.layoutName} modular kitchen in ${entry.cityName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <KitchenTrustStrip />

      {/* ── Stats Strip ── */}
      <section className="py-8 px-4 bg-amber-700 text-white">
        <div className="mx-auto max-w-5xl grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">500+</p>
            <p className="text-sm text-white/80">Kitchens Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold">14 Days</p>
            <p className="text-sm text-white/80">Avg. Installation</p>
          </div>
          <div>
            <p className="text-2xl font-bold">10-Year</p>
            <p className="text-sm text-white/80">Warranty</p>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <PremiumKitchenGallery
        images={KITCHEN_GALLERY_IMAGES}
        filter={entry.layoutSlug}
        title={`${entry.layoutName} Kitchen Designs`}
        subtitle={`${entry.layoutName} modular kitchens installed across ${entry.cityName} homes`}
        initialVisible={6}
      />

      {/* ── Layout Overview ── */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-3">About the {entry.layoutName} Kitchen Layout</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{entry.layoutDescription}</p>
            <p className="text-muted-foreground"><strong className="text-foreground">Best for:</strong> {entry.bestFor}</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-5 space-y-4">
            <div className="flex items-start gap-3">
              <Ruler className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-foreground">Ideal Kitchen Size</div>
                <div className="text-sm text-muted-foreground">{entry.minSqFt}–{entry.maxSqFt} sq ft</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <IndianRupee className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-foreground">Price Range in {entry.cityName}</div>
                <div className="text-sm text-muted-foreground">{formatINR(entry.priceMin)} – {formatINR(entry.priceMax)}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <LayoutPanelLeft className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-foreground">Layout Type</div>
                <div className="text-sm text-muted-foreground">{entry.layoutName}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why this city ── */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Why {entry.layoutName} Kitchens Work Well in {entry.cityName}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {entry.whyThisCityPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-background rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing tiers ── */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
          {entry.layoutName} Kitchen Price in {entry.cityName}
        </h2>
        <p className="text-muted-foreground text-center mb-8">Transparent pricing across three budget tiers</p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              label: "Budget",
              range: `${formatINR(entry.priceMin)} – ${formatINR(Math.round(entry.priceMin * 1.6 / 10000) * 10000)}`,
              features: ["Laminate or PVC shutters", "BWR plywood carcass", "Standard hardware", "Granite countertop"],
              highlight: false,
            },
            {
              label: "Mid-Range",
              range: `${formatINR(Math.round(entry.priceMin * 1.6 / 10000) * 10000)} – ${formatINR(Math.round(entry.priceMax * 0.7 / 10000) * 10000)}`,
              features: ["Acrylic or membrane shutters", "Marine BWR plywood", "Hettich soft-close hardware", "Quartz countertop"],
              highlight: true,
            },
            {
              label: "Premium",
              range: `${formatINR(Math.round(entry.priceMax * 0.7 / 10000) * 10000)} – ${formatINR(entry.priceMax)}+`,
              features: ["PU finish or glass shutters", "Imported Blum hardware", "Island or peninsula option", "Marble or premium quartz"],
              highlight: false,
            },
          ].map((tier) => (
            <div
              key={tier.label}
              className={`rounded-xl border p-6 relative ${tier.highlight ? "border-amber-700 shadow-lg" : "border-border"}`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="font-bold text-foreground mb-1">{tier.label}</div>
              <div className="text-amber-700 font-semibold text-lg mb-4">{tier.range}</div>
              <ul className="space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose FurniRevive ── */}
      <section className="bg-stone-900 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Why Choose FurniRevive for Your {entry.layoutName} Kitchen?
          </h2>
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

      {/* ── Available Finishes in this city ── */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-foreground mb-2">
          Kitchen Finishes Available in {entry.cityName}
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          Pair your {entry.layoutName} layout with any finish — from budget laminate to premium acrylic and PU.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
          {MODULAR_KITCHEN_MATERIAL_REGISTRY.filter((m) => m.status === "published").map((mat) => {
            const cityPageExists = KITCHEN_MATERIAL_CITY_REGISTRY.some(
              (e) => e.materialSlug === mat.slug && e.citySlug === entry.citySlug
            );
            const href = cityPageExists
              ? `/${mat.slug}-modular-kitchen-${entry.citySlug}`
              : `/modular-kitchen-${mat.slug}`;
            return (
              <Link
                key={mat.slug}
                to={href}
                className="bg-muted/50 border border-border rounded-lg p-3 text-center text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                {mat.shortName} Kitchen
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Related layouts in this city ── */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-5">
            Other Kitchen Layouts in {entry.cityName}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {entry.relatedLayouts.map((ls) => {
              const linkSlug = `${ls}-modular-kitchen-${entry.citySlug}`;
              const name = ls.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("-");
              return (
                <Link
                  key={ls}
                  to={`/${linkSlug}`}
                  className="bg-background border border-border rounded-lg p-3 text-center text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  {name} Kitchen in {entry.cityName}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Same layout in other cities ── */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-foreground mb-5">
          {entry.layoutName} Kitchens in Other Cities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {entry.sameCities.map((cs) => {
            const linkSlug = `${entry.layoutSlug}-modular-kitchen-${cs}`;
            const cname = cs.charAt(0).toUpperCase() + cs.slice(1);
            return (
              <Link
                key={cs}
                to={`/${linkSlug}`}
                className="bg-muted/50 border border-border rounded-lg p-3 text-center text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                {entry.layoutName} Kitchen in {cname}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-14 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {entry.faqs.map((faq, i) => (
              <div key={i} className="bg-background rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="py-12 px-6 bg-amber-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Get a Free {entry.layoutName} Kitchen Design for Your {entry.cityName} Home</h2>
          <p className="text-white/85 mb-6">Our designer visits your home, takes measurements, and delivers a 3D design within 48 hours — completely free.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-white text-amber-800 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Call Now — Free Quote
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want a free design consultation for a ${entry.layoutName} modular kitchen in ${entry.cityName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <NearMeCTA variant="compact" pageType="layout" pageValue={entry.layoutName} />
      <HomeServicesSection service="modular-kitchen" pageType="layout" cityName={entry.cityName} />
      <KitchenRelatedBlogs slug={entry.slug} />
      <Footer />
    </>
  );
}
