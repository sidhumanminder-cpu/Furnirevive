import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, PhoneCall, MessageCircle, ArrowRight, MapPin, Star, BookOpen, Ruler, IndianRupee, Calculator, Sparkles } from "lucide-react";
import { setPageMetadata } from "@/lib/metadata.ts";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import PremiumKitchenGallery from "./PremiumKitchenGallery.tsx";
import { DELHI_GALLERY, GURGAON_GALLERY, ROOT_GALLERY } from "./kitchen-gallery-images.ts";
import { WHY_CHOOSE_CARDS } from "../_data/kitchen-why-choose.ts";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import type { KitchenCityEntry } from "@/lib/registry/kitchen-city-registry.ts";
import { getLocalitiesForCity } from "@/lib/registry/kitchen-city-registry.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import type { CityContent, CityFaq, FeaturedResourceType } from "@/content/modular-kitchen/cities/types.ts";
import { NearMeCTA } from "@/components/kitchen-near-me-cta.tsx";

// ─── Schema helpers ────────────────────────────────────────────────────────

function buildLocalBusinessSchema(content: CityContent, phone: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FurniRevive",
    telephone: phone,
    url: "https://furnirevive.com",
    priceRange: "₹₹",
    openingHours: "Mo-Su 08:00-20:00",
    geo: {
      "@type": "GeoCoordinates",
      latitude: content.coordinates.lat,
      longitude: content.coordinates.lng,
    },
    areaServed: content.serviceArea,
  };
}

function buildFAQSchema(faqs: CityFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

function buildBreadcrumbSchema(content: CityContent) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://furnirevive.com/" },
      { "@type": "ListItem", position: 2, name: "Modular Kitchens", item: "https://furnirevive.com/modular-kitchen" },
      { "@type": "ListItem", position: 3, name: content.cityDisplayName, item: content.canonical },
    ],
  };
}

function injectJsonLd(data: object): HTMLScriptElement {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
  return el;
}

// ─── Gallery helper ────────────────────────────────────────────────────────

function getGallery(filter: KitchenCityEntry["galleryFilter"]) {
  if (filter === "delhi") return DELHI_GALLERY;
  if (filter === "gurgaon") return GURGAON_GALLERY;
  return ROOT_GALLERY;
}

// ─── Component ─────────────────────────────────────────────────────────────

type Props = {
  entry: KitchenCityEntry;
};

export default function CityHubTemplate({ entry }: Props) {
  const { content, city } = entry;
  const localities = getLocalitiesForCity(city);
  const gallery = getGallery(entry.galleryFilter);

  // Popular Searches: use featuredLocalities if set, else first 6 from registry
  const popularSearches = useMemo(() => {
    if (content.featuredLocalities && content.featuredLocalities.length > 0) {
      return localities.filter((l) => content.featuredLocalities!.includes(l.slug));
    }
    return localities.slice(0, 6);
  }, [localities, content.featuredLocalities]);

  // Icon & badge maps for Pricing Resources section
  const iconMap: Record<FeaturedResourceType, React.ComponentType<{ className?: string }>> = {
    "city-cost": BookOpen,
    "per-sqft": Ruler,
    "budget": IndianRupee,
    "midrange": Calculator,
    "luxury": Sparkles,
  };
  const badgeColors: Record<string, string> = {
    "Popular": "bg-orange-100 text-orange-700",
    "Most Viewed": "bg-blue-100 text-blue-700",
    "Budget": "bg-green-100 text-green-700",
    "Premium": "bg-purple-100 text-purple-700",
  };

  // Top 6 materials
  const topMaterials = useMemo(
    () => MODULAR_KITCHEN_MATERIAL_REGISTRY.filter((m) => m.status === "published").slice(0, 6),
    []
  );

  useEffect(() => {
    const cleanupMeta = setPageMetadata({
      title: content.pageTitle,
      description: content.metaDescription,
      canonical: content.canonical,
      ogImage: content.heroImage,
      ogUrl: content.canonical,
      ogSiteName: "FurniRevive",
      twitterCard: "summary_large_image",
      twitterTitle: content.pageTitle,
      twitterDescription: content.metaDescription,
      twitterImage: content.heroImage,
    });

    const breadcrumbEl = injectJsonLd(buildBreadcrumbSchema(content));
    const localBusinessEl = injectJsonLd(buildLocalBusinessSchema(content, PHONE_NUMBER));
    const faqEl = content.faqs.length > 0 ? injectJsonLd(buildFAQSchema(content.faqs)) : null;

    return () => {
      cleanupMeta();
      document.head.removeChild(breadcrumbEl);
      document.head.removeChild(localBusinessEl);
      if (faqEl) document.head.removeChild(faqEl);
    };
  }, [content]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* 1. Hero */}
      <section
        className="relative min-h-[60vh] md:min-h-[620px] pt-24 flex items-center"
        style={{ backgroundImage: `url(${content.heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
            {content.heroHeading}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{content.heroSubtitle}</p>
          <p className="mt-4 text-sm text-yellow-300 font-medium">{content.heroRating}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {content.trustBadges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg hover:opacity-90 transition cursor-pointer">
              <PhoneCall className="h-5 w-5" /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${content.whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-green-700 transition cursor-pointer">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip (conditional) */}
      {content.cityStats && (
        <section className="py-8 px-4 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-5xl grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">{content.cityStats.projectsCompleted}+</p>
              <p className="text-sm text-primary-foreground/80">Kitchens Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{content.cityStats.averageCompletionDays} Days</p>
              <p className="text-sm text-primary-foreground/80">Avg. Installation</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{content.cityStats.warrantyYears}-Year</p>
              <p className="text-sm text-primary-foreground/80">Warranty</p>
            </div>
          </div>
        </section>
      )}

      {/* 3. Gallery */}
      <div id="gallery">
        <PremiumKitchenGallery
          images={gallery}
          title={`${content.cityDisplayName} Kitchen Designs`}
          subtitle={`Premium modular kitchen designs installed across ${content.cityDisplayName} homes`}
          initialVisible={8}
        />
      </div>

      {/* 4. Why Choose */}
      <section className="bg-stone-900 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Why Choose FurniRevive for Your Modular Kitchen?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {WHY_CHOOSE_CARDS.map((card) => (
              <div key={card.id} className="rounded-xl bg-stone-800 border border-stone-700 p-6 flex flex-col">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{card.title}</h3>
                <p className="text-stone-300 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. City Intro */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold sm:text-3xl">{content.introHeading}</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            {content.introParagraphs.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {content.introCards.map((card) => (
              <div key={card.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">{card.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Localities Grid */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold sm:text-3xl flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            {content.localitiesHeading}
          </h2>
          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {localities.map((loc) => (
              <Link key={loc.slug} to={`/modular-kitchen-${loc.slug}`} className="group rounded-xl border border-border bg-card p-4 hover:border-primary/50 hover:shadow-md transition cursor-pointer">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition">{loc.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{loc.propertyType}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  View <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Popular Layouts — all 6 from registry */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold sm:text-3xl">{content.layoutsHeading}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MODULAR_KITCHEN_LAYOUT_REGISTRY.filter((l) => l.status === "published").map((layout) => (
              <Link key={layout.slug} to={`/modular-kitchen-${layout.slug}`} className="group rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-md transition cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">{layout.shortName}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{layout.description}</p>
                <p className="mt-1 text-xs text-muted-foreground">Best for: {layout.bestFor}</p>
                <p className="mt-3 text-sm font-bold text-primary">
                  ₹{(layout.costMin / 100000).toFixed(1)}L – ₹{(layout.costMax / 100000).toFixed(1)}L
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Related Materials */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Kitchen Finishes & Materials</h2>
          <p className="mt-2 text-muted-foreground">Choose the right material for your {content.cityDisplayName} home</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topMaterials.map((mat) => (
              <Link key={mat.slug} to={`/modular-kitchen-${mat.slug}`} className="group rounded-xl border border-border bg-card p-5 hover:border-primary/50 hover:shadow-md transition cursor-pointer">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition">{mat.shortName}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{mat.finish}</p>
                <p className="mt-2 text-sm text-muted-foreground">{mat.bestFor}</p>
                <p className="mt-3 text-sm font-bold text-primary">
                  ₹{mat.costMin.toLocaleString("en-IN")}–₹{mat.costMax.toLocaleString("en-IN")} /sq.ft
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/modular-kitchen" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline cursor-pointer">
              View All Materials <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Pricing */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold sm:text-3xl">{content.pricingHeading}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {content.pricingTiers.map((tier) => (
              <div key={tier.tier} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">{tier.tier}</h3>
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
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center max-w-2xl mx-auto">{content.pricingNote}</p>
        </div>
      </section>

      {/* 10. Process */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Process</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.processSteps.map((s) => (
              <div key={s.step} className="rounded-xl border border-border bg-card p-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {s.step}
                </span>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Testimonials */}
      {content.testimonials.length > 0 && (
        <section className="py-16 px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold sm:text-3xl">What Our {content.cityDisplayName} Customers Say</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.testimonials.map((t) => (
                <div key={t.name} className="rounded-xl border border-border bg-card p-6 flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{`"${t.text}"`}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12. Pricing Resources */}
      {content.featuredResources && content.featuredResources.length > 0 && (
        <section className="py-14 px-4 bg-muted/40">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-foreground">Explore Modular Kitchen Pricing &amp; Buying Guides</h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
                Compare pricing, materials, and layouts before choosing the right modular kitchen for your home.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...content.featuredResources]
                .sort((a, b) => b.priority - a.priority)
                .slice(0, 4)
                .map((res) => {
                  const Icon = iconMap[res.type];
                  return (
                    <Link
                      key={res.url}
                      to={res.url}
                      className="group relative flex items-start gap-4 rounded-xl border border-primary/20 bg-card p-5 hover:border-primary hover:shadow-md transition cursor-pointer"
                    >
                      <div className="shrink-0 rounded-full bg-primary/10 p-3 mt-0.5">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition text-sm leading-snug">
                            {res.title}
                          </h3>
                          {res.badge && (
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badgeColors[res.badge] ?? "bg-muted text-muted-foreground"}`}>
                              {res.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{res.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary shrink-0 self-center opacity-60 group-hover:opacity-100 transition" />
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      )}

      {/* 13. HomeServicesSection */}
      <HomeServicesSection service="modular-kitchen" pageType="city" cityName={content.cityDisplayName} />

      {/* 14. FAQs */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            {content.faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Popular Searches */}
      {popularSearches.length > 0 && (
        <section className="py-12 px-4 bg-muted/40">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Popular Modular Kitchen Searches in {content.cityDisplayName}
            </h2>
            <div className="flex flex-wrap gap-3">
              {popularSearches.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/modular-kitchen-${loc.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground hover:border-primary hover:text-primary transition cursor-pointer"
                >
                  Modular Kitchen {loc.name} <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 16. CTA Banner */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">{content.ctaHeading}</h2>
          <p className="mt-4 text-primary-foreground/90">{content.ctaSubtext}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary shadow-lg hover:opacity-90 transition cursor-pointer">
              <PhoneCall className="h-5 w-5" /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${content.whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-green-700 transition cursor-pointer">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <KitchenTrustStrip />
      <NearMeCTA variant="featured" pageType="city" pageValue={content.cityDisplayName} />
      <KitchenRelatedBlogs slug={content.canonical.replace("https://furnirevive.com/", "")} />
      <Footer />
    </div>
  );
}
