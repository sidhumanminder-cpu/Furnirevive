import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { setPageMetadata } from "@/lib/metadata.ts";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-locality-registry.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import type { KitchenCostContent } from "@/content/modular-kitchen/costs/types.ts";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import PremiumKitchenGallery from "./PremiumKitchenGallery.tsx";
import { getHubGallery, ROOT_GALLERY } from "./kitchen-gallery-images.ts";

// ─── Config ────────────────────────────────────────────────────────────────
// Ordered list of pricing sections rendered by the template.
// Add future pricing sections here only.
const pricingSections = ["size", "layout", "material"] as const;
type PricingSectionKey = (typeof pricingSections)[number];

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatINR(amount: number): string {
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1).replace(".0", "")}L`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
  return `₹${amount}`;
}

function injectJsonLd(data: object): HTMLScriptElement {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
  return el;
}

function buildBreadcrumbSchema(content: KitchenCostContent) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://furnirevive.com/" },
      { "@type": "ListItem", position: 2, name: "Modular Kitchen", item: "https://furnirevive.com/modular-kitchen" },
      { "@type": "ListItem", position: 3, name: `${content.cityDisplayName} Kitchen Cost`, item: content.canonical },
    ],
  };
}

function buildFaqSchema(content: KitchenCostContent) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

// ─── Static content ───────────────────────────────────────────────────────

type KitchenSizeRow = { size: string; dimensions: string; range: string };

const SIZE_ROWS: readonly KitchenSizeRow[] = [
  { size: "Small", dimensions: "8×8 ft", range: "₹80K – ₹1.5L" },
  { size: "Medium", dimensions: "10×10 ft", range: "₹1.5L – ₹3L" },
  { size: "Large", dimensions: "12×12+ ft", range: "₹3L – ₹6L+" },
] as const;

const INSTALLATION_INCLUDES: readonly string[] = [
  "Demolition of old kitchen",
  "Plumbing changes",
  "Electrical modifications",
  "Cabinet installation",
  "Countertop fitting",
  "Hardware fitting",
  "Touch-up and cleaning",
] as const;

const COST_FACTORS: readonly { title: string; description: string }[] = [
  {
    title: "Kitchen size and layout",
    description: "Larger kitchens and complex layouts (U-shape, island) need more cabinetry and hardware, raising the total cost.",
  },
  {
    title: "Choice of material and finish",
    description: "Laminate and PVC are budget-friendly, while acrylic, PU, veneer and glass finishes cost more per square foot.",
  },
  {
    title: "Brand of hardware",
    description: "Premium hinges and channels from Hettich or Hafele cost more than local hardware but last significantly longer.",
  },
  {
    title: "Countertop material",
    description: "Granite is economical, quartz offers a premium look, and stainless steel suits heavy-use kitchens — each at a different price point.",
  },
  {
    title: "Appliance integration",
    description: "Built-in hobs, chimneys, ovens and tall units for refrigerators add to both material and installation cost.",
  },
] as const;

// ─── Section components ──────────────────────────────────────────────────────

function SizePricingSection({ bgClass }: { bgClass: string }) {
  return (
    <section className={`py-16 px-4 ${bgClass}`}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold sm:text-3xl">Modular Kitchen Cost by Size</h2>
        <p className="mt-2 text-muted-foreground">Typical price ranges based on your kitchen's footprint.</p>
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/60 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold sm:px-6">Kitchen Size</th>
                <th className="px-4 py-3 font-semibold sm:px-6">Approx. Dimensions</th>
                <th className="px-4 py-3 font-semibold sm:px-6">Estimated Cost</th>
              </tr>
            </thead>
            <tbody>
              {SIZE_ROWS.map((row) => (
                <tr key={row.size} className="border-t border-border">
                  <td className="px-4 py-4 font-medium text-foreground sm:px-6">{row.size}</td>
                  <td className="px-4 py-4 text-muted-foreground sm:px-6">{row.dimensions}</td>
                  <td className="px-4 py-4 font-bold text-primary sm:px-6">{row.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Prices vary by material and layout.</p>
      </div>
    </section>
  );
}

function LayoutPricingSection({ bgClass }: { bgClass: string }) {
  const layouts = MODULAR_KITCHEN_LAYOUT_REGISTRY.filter((l) => l.status === "published");
  return (
    <section className={`py-16 px-4 ${bgClass}`}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold sm:text-3xl">Modular Kitchen Cost by Layout</h2>
        <p className="mt-2 text-muted-foreground">Compare pricing across popular kitchen layouts.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {layouts.map((layout) => (
            <Link
              key={layout.slug}
              to={`/modular-kitchen-${layout.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-md transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">{layout.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{layout.description}</p>
              <p className="mt-1 text-xs text-muted-foreground">Best for: {layout.bestFor}</p>
              <p className="mt-3 text-sm font-bold text-primary">
                {formatINR(layout.costMin)}–{formatINR(layout.costMax)}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                View details <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialPricingSection({ bgClass }: { bgClass: string }) {
  const materials = MODULAR_KITCHEN_MATERIAL_REGISTRY.filter((m) => m.status === "published").slice(0, 6);
  return (
    <section className={`py-16 px-4 ${bgClass}`}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold sm:text-3xl">Modular Kitchen Cost by Material</h2>
        <p className="mt-2 text-muted-foreground">Per square foot pricing for popular shutter finishes.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((mat) => (
            <Link
              key={mat.slug}
              to={`/modular-kitchen-${mat.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 hover:border-primary/50 hover:shadow-md transition cursor-pointer"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition">{mat.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{mat.finish}</p>
              <p className="mt-3 text-sm font-bold text-primary">
                ₹{mat.costMin.toLocaleString("en-IN")}–₹{mat.costMax.toLocaleString("en-IN")} /sq.ft
              </p>
              <ul className="mt-3 space-y-1.5">
                {mat.pros.slice(0, 2).map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                    {pro}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstallationCostSection({ bgClass }: { bgClass: string }) {
  return (
    <section className={`py-16 px-4 ${bgClass}`}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold sm:text-3xl">What's Included in Installation Cost</h2>
        <p className="mt-2 text-muted-foreground">
          Our end-to-end installation covers everything from teardown to final cleaning.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {INSTALLATION_INCLUDES.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="text-sm text-foreground">
            <span className="font-semibold text-primary">Typical timeline:</span> 7–15 working days from measurement to
            handover, depending on kitchen size and finish.
          </p>
        </div>
      </div>
    </section>
  );
}

function FactorsSection({ bgClass }: { bgClass: string }) {
  return (
    <section className={`py-16 px-4 ${bgClass}`}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold sm:text-3xl">Factors That Affect Modular Kitchen Cost</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {COST_FACTORS.map((factor, i) => (
            <div key={factor.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{factor.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{factor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Template ────────────────────────────────────────────────────────────────

type Props = {
  content: KitchenCostContent;
};

export default function KitchenCostPageTemplate({ content }: Props) {
  const {
    city,
    cityDisplayName,
    canonical,
    pageTitle,
    metaDescription,
    heroHeading,
    heroSubtitle,
    heroImage,
    pricingTiers,
    testimonials,
    faqs,
  } = content;

  // Gallery: use city-specific gallery for Delhi/Gurgaon, fallback to root gallery
  const galleryImages = (city === "delhi" || city === "gurgaon") ? getHubGallery(city) : ROOT_GALLERY;

  const trustBadges = useMemo(
    () => ["Free Design Consultation", "10-Year Warranty", `${cityDisplayName}-Wide Service`, "Premium Hardware"],
    [cityDisplayName]
  );

  const whatsappMessage = useMemo(
    () => encodeURIComponent(`Hi, I'd like a modular kitchen cost estimate in ${cityDisplayName}.`),
    [cityDisplayName]
  );

  // Related Resources — auto-derived from registries + static cost guides.
  const relatedResources = useMemo(() => {
    const topLocalities = MODULAR_KITCHEN_LOCALITY_REGISTRY.filter(
      (l) => l.city === city && l.status === "published"
    ).slice(0, 4);

    const links: { label: string; href: string }[] = [
      { label: `${cityDisplayName} Modular Kitchen`, href: `/modular-kitchen-${city}` },
      ...topLocalities.map((loc) => ({
        label: `Modular Kitchen ${loc.name}`,
        href: `/modular-kitchen-${loc.slug}`,
      })),
    ];

    // These pages only cover non-Delhi cities, so the Delhi guide is always a useful cross-link.
    links.push(
      { label: "Delhi Kitchen Cost Guide", href: "/modular-kitchen-cost-delhi" },
      { label: "Cost Per Sq Ft Guide", href: "/modular-kitchen-cost-per-sqft" },
      { label: "Kitchens Under ₹1 Lakh", href: "/modular-kitchen-1-lakh" },
      { label: "Kitchens Under ₹2 Lakhs", href: "/modular-kitchen-2-lakh" }
    );

    return links;
  }, [city, cityDisplayName]);

  // SEO head + structured data
  useEffect(() => {
    const cleanupMeta = setPageMetadata({
      title: pageTitle,
      description: metaDescription,
      canonical,
      ogImage: heroImage,
      ogUrl: canonical,
      ogSiteName: "FurniRevive",
      twitterCard: "summary_large_image",
      twitterTitle: pageTitle,
      twitterDescription: metaDescription,
      twitterImage: heroImage,
    });

    const breadcrumbEl = injectJsonLd(buildBreadcrumbSchema(content));
    const faqEl = faqs.length > 0 ? injectJsonLd(buildFaqSchema(content)) : null;

    return () => {
      cleanupMeta();
      document.head.removeChild(breadcrumbEl);
      if (faqEl) document.head.removeChild(faqEl);
    };
  }, [content, pageTitle, metaDescription, canonical, faqs]);

  // Renders a pricing section by key with an alternating background.
  const renderPricingSection = (key: PricingSectionKey, bgClass: string) => {
    if (key === "size") return <SizePricingSection bgClass={bgClass} />;
    if (key === "layout") {
      return MODULAR_KITCHEN_LAYOUT_REGISTRY.length > 0 ? <LayoutPricingSection bgClass={bgClass} /> : null;
    }
    return MODULAR_KITCHEN_MATERIAL_REGISTRY.length > 0 ? <MaterialPricingSection bgClass={bgClass} /> : null;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* 1. Hero */}
      <section
        className="relative flex min-h-[60vh] items-center pt-24 md:min-h-[560px]"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 text-center text-white">
          <nav className="mb-5 flex items-center justify-center gap-1 text-xs text-white/70">
            <Link to="/" className="hover:text-white transition cursor-pointer">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/modular-kitchen" className="hover:text-white transition cursor-pointer">Modular Kitchen</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{cityDisplayName} Cost</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">{heroHeading}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{heroSubtitle}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition hover:opacity-90 cursor-pointer"
            >
              <PhoneCall className="h-5 w-5" /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700 cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. Gallery — immediately after hero, mirrors /modular-kitchen page layout */}
      {galleryImages.length > 0 && (
        <div id="gallery">
          <PremiumKitchenGallery
            images={galleryImages}
            pageType="hub"
            title={`${cityDisplayName} Modular Kitchen Gallery`}
          />
        </div>
      )}

      {/* 3. Price Table (3-tier) */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Modular Kitchen Price in {cityDisplayName}</h2>
          <p className="mt-2 text-muted-foreground">Transparent pricing across three budget tiers.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {pricingTiers.map((tier) => {
              const highlighted = tier.tier === "mid";
              return (
                <div
                  key={tier.tier}
                  className={`relative flex flex-col rounded-xl bg-card p-6 ${
                    highlighted ? "border-2 border-primary shadow-lg" : "border border-border"
                  }`}
                >
                  {highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-foreground">{tier.label}</h3>
                  <p className="mt-1 text-xl font-bold text-primary">{tier.range}</p>
                  <ul className="mt-4 space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3-5. Pricing sections (size, layout, material) driven by config */}
      {pricingSections.map((key, i) => {
        const bgClass = i % 2 === 0 ? "bg-muted/40" : "bg-background";
        const section = renderPricingSection(key, bgClass);
        return section ? <div key={key}>{section}</div> : null;
      })}

      {/* 6. Installation cost (static) */}
      <InstallationCostSection bgClass="bg-background" />

      {/* 7. Factors (static) */}
      <FactorsSection bgClass="bg-muted/40" />

      {/* 8. Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold sm:text-3xl">What Our {cityDisplayName} Customers Say</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="flex flex-col rounded-xl border border-border bg-card p-6">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-lg leading-none text-amber-400">
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{`"${t.text}"`}</p>
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Related Resources */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Explore More Kitchen Resources</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedResources.map((res) => (
              <Link
                key={res.href}
                to={res.href}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary/50 hover:shadow-md transition cursor-pointer"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition">{res.label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary opacity-60 transition group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. HomeServicesSection */}
      <HomeServicesSection service="modular-kitchen" pageType="cost" cityName={cityDisplayName} />

      {/* 11. FAQs */}
      {faqs.length > 0 && (
        <section className="py-16 px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12. CTA Banner */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Get a Free {cityDisplayName} Kitchen Quote</h2>
          <p className="mt-4 text-primary-foreground/90">
            Share your kitchen size and we'll send a detailed, transparent estimate — no hidden charges.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary shadow-lg transition hover:opacity-90 cursor-pointer"
            >
              <PhoneCall className="h-5 w-5" /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700 cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 13. Footer + trust strip */}
      <KitchenTrustStrip />
      <KitchenRelatedBlogs slug={`modular-kitchen-${content.slug}`} />
      <Footer />
    </div>
  );
}
