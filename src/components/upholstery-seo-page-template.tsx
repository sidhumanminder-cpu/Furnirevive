/**
 * UpholsterySeoPageTemplateV1
 *
 * Standalone configurable template for sofa upholstery locality pages.
 * NOT inherited from programmatic-seo-page-template.tsx.
 *
 * Architecture:
 * - Entirely prop/config driven — no hard-coded locality or city values
 * - Every section independently togglable via `sections` prop
 * - Locality personalization via propertyType from localities.ts
 * - Internal links generated from pipeline — no manual hrefs
 * - templateVersion: "v1" for forward compatibility
 */

import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  Star,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock,
  Shield,
  Award,
  BookOpen,
} from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import type { SeoPageData } from "@/lib/seo-constants.ts";
import {
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_NUMBER,
  BRAND_NAME,
} from "@/lib/seo-constants.ts";
import NearbyAreasSection from "@/components/seo/NearbyAreasSection.tsx";
import ServiceHubSection from "@/components/seo/ServiceHubSection.tsx";
import { getLocalityInfo } from "@/lib/seoConfigs/localities.ts";
import { getExistingNeighbourLinks } from "@/lib/seoConfigs/location-graph.ts";
import { UPHOLSTERY_FAQS } from "@/lib/upholsteryConfigs/upholsteryFaqs.ts";
import { POPULAR_UPHOLSTERY_SERVICES } from "@/lib/upholsteryConfigs/popularServices.ts";
import LocalityNearMeSection from "@/components/seo/LocalityNearMeSection.tsx";
import FabricCatalogue from "@/components/upholstery/FabricCatalogue.tsx";
import FabricSelector from "@/components/upholstery/FabricSelector.tsx";
import FoamGuide from "@/components/upholstery/FoamGuide.tsx";
import CostTable from "@/components/upholstery/CostTable.tsx";
import ProcessSteps from "@/components/upholstery/ProcessSteps.tsx";
import BeforeAfter from "@/components/upholstery/BeforeAfter.tsx";
import DecisionGuide from "@/components/upholstery/DecisionGuide.tsx";
import WarrantyInfo from "@/components/upholstery/WarrantyInfo.tsx";
import { selectRelatedPosts } from "@/lib/blog-recommendation-engine.ts";
import { getIntroOpener, getMicroLocalContext, getUniqueFaq } from "@/lib/seo-pages/content-uniqueness.ts";
import ServicesGridSection from "@/components/seo/ServicesGridSection.tsx";
import { getPyramidLinks } from "@/lib/seo-pages/pyramid-links.ts";
import type { BlogPost } from "@/lib/blog-data.ts";

// ─── Section type ──────────────────────────────────────────────────────────────

export type UpholsterySection =
  | "hero"
  | "fabricCatalogue"
  | "fabricSelector"
  | "foamGuide"
  | "costTable"
  | "process"
  | "beforeAfter"
  | "decisionGuide"
  | "faq"
  | "nearbyAreas";

// ─── Props ─────────────────────────────────────────────────────────────────────

export type UpholsterySeoPageTemplateProps = {
  data: SeoPageData;
  templateVersion?: "v1";
  /** Toggle sections independently. All default to true when unspecified. */
  sections?: Partial<Record<UpholsterySection, boolean>>;
  /** Show/hide pricing section (alias for sections.costTable) */
  showPricing?: boolean;
  /** Show/hide gallery section (alias for sections.beforeAfter) */
  showGallery?: boolean;
  /** Override schema values (future use) */
  schemaOverrides?: Record<string, unknown>;
  /** Override specific content values (future use) */
  contentOverrides?: Partial<{
    heroHeadline: string;
    heroSubtitle: string;
  }>;
};

// ─── Helpers ───────────────────────────────────────────────────────────────────

function isOn(sections: Partial<Record<UpholsterySection, boolean>>, key: UpholsterySection): boolean {
  return sections[key] !== false;
}


// ─── Sub-components ────────────────────────────────────────────────────────────

function CtaBar() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I'd like to get a sofa upholstery quote."
  )}`;
  return (
    <div className="flex flex-wrap gap-3">
      <a href={`tel:${PHONE_NUMBER}`}>
        <Button size="lg" className="gap-2 rounded-full cursor-pointer">
          <Phone className="size-4" />
          Call Now
        </Button>
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          className="gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] cursor-pointer"
        >
          <MessageCircle className="size-4" />
          WhatsApp Us
        </Button>
      </a>
      <Link to="/book">
        <Button size="lg" variant="secondary" className="gap-2 rounded-full cursor-pointer">
          Book Online
          <ArrowRight className="size-4" />
        </Button>
      </Link>
    </div>
  );
}

function InlineCta({ label }: { label: string }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I'd like to get a sofa upholstery quote."
  )}`;
  return (
    <div className="py-8 lg:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary/8 border border-primary/20 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-foreground text-center sm:text-left">{label}</p>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button size="sm" className="gap-1.5 rounded-full cursor-pointer">
                <Phone className="size-3.5" />
                Call Now
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="gap-1.5 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] cursor-pointer"
              >
                <MessageCircle className="size-3.5" />
                WhatsApp
              </Button>
            </a>
            <Link to="/book">
              <Button size="sm" variant="secondary" className="gap-1.5 rounded-full cursor-pointer">
                Free Quote
                <ArrowRight className="size-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustBadges() {
  const badges = [
    { icon: Star, label: "5,000+ Sofas Upholstered" },
    { icon: Shield, label: "6-Month Warranty" },
    { icon: Clock, label: "1–2 Day Turnaround" },
    { icon: Award, label: "10+ Years Experience" },
    { icon: MapPin, label: "Doorstep Service" },
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {badges.map((b) => (
        <div key={b.label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <b.icon className="size-4 text-primary" />
          <span>{b.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Hero variant by property type ─────────────────────────────────────────────

function getHeroVariant(propertyType: string): {
  tagline: string;
  descriptor: string;
} {
  const lower = propertyType.toLowerCase();
  if (lower.includes("luxury") || lower.includes("villa") || lower.includes("premium")) {
    return {
      tagline: "Premium upholstery for luxury homes",
      descriptor: "We specialise in high-end fabric restoration for imported and designer sofas.",
    };
  }
  if (lower.includes("villa") || lower.includes("independent")) {
    return {
      tagline: "Expert upholstery for villas and independent homes",
      descriptor: "Custom fabric and foam solutions for large sofas and sectionals.",
    };
  }
  if (lower.includes("apartment") || lower.includes("gated") || lower.includes("society")) {
    return {
      tagline: "Doorstep sofa upholstery for apartment residents",
      descriptor: "We collect from your flat, work at our workshop, and deliver back — hassle-free.",
    };
  }
  return {
    tagline: "Professional sofa upholstery at your doorstep",
    descriptor: "Restore your sofa with quality fabric and foam. Same locality, same day inspection.",
  };
}

// ─── FabricCare Tips ──────────────────────────────────────────────────────────

function FabricCareTips() {
  const tips = [
    { title: "Vacuum Weekly", body: "Use an upholstery attachment on all fabric sofas to remove dust and allergens before they embed." },
    { title: "Blot, Don't Rub", body: "Always blot liquid spills immediately with a clean cloth. Rubbing spreads stains and damages fibres." },
    { title: "Rotate Cushions", body: "Flip and rotate seat cushions every 2–4 weeks to distribute wear evenly and maintain shape." },
    { title: "Sunlight Protection", body: "Avoid direct sunlight on fabric sofas — UV rays fade colours and weaken fibres over time." },
    { title: "Condition Leather/Leatherette", body: "Apply a leather conditioner every 6 months to prevent cracking and keep the surface supple." },
    { title: "Professional Deep Clean", body: "Book a professional upholstery cleaning once a year to remove embedded dirt and restore freshness." },
  ];
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">Fabric Care Tips</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Extend the life of your newly upholstered sofa with these simple care habits.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Card className="h-full">
                <CardContent className="py-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <h3 className="font-semibold text-sm">{tip.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tip.body}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What is Sofa Reupholstery ────────────────────────────────────────────────

/**
 * Three deterministic content variants for the "What is Sofa Reupholstery?" section.
 * Each variant has equal length, keyword coverage, benefit emphasis, and CTA strength.
 * Only the wording differs — all factual content is identical across variants.
 *
 * Selected with: hashCode(slug) % REUPHOLSTERY_INTRO_VARIANTS.length
 * Add more variants here without changing any selection logic.
 */
type ReupholsteryVariant = {
  opening: (localityName: string, cityName: string) => string;
  benefits: (localityName: string, cityName: string) => string;
  closing: (localityName: string) => string;
};

const REUPHOLSTERY_INTRO_VARIANTS: ReupholsteryVariant[] = [
  // Variant 0 — Process-led
  {
    opening: () =>
      `Sofa reupholstery — also called sofa upholstery or fabric replacement — is the process of removing your sofa's worn-out covering and replacing it with fresh fabric, foam, and stitching to fully restore its appearance and comfort. Instead of buying a new sofa, you keep the frame (often hardwood or quality imported timber) and give it a new life with the fabric, colour, and foam density of your choice.`,
    benefits: (localityName, cityName) =>
      `Our sofa upholstery service in ${localityName}, ${cityName} covers fabric replacement, foam upgrades, stitching repair, cushion refilling, and professional installation — all completed at your doorstep. Most jobs are done within 1–2 days, with no transportation required. A reupholstered sofa typically costs 30–50% less than buying a comparable new one.`,
    closing: (localityName) =>
      `Whether you need sofa reupholstery, sofa fabric change, sofa recovering, or a complete sofa fabric replacement, FurniRevive's technicians bring everything to your home in ${localityName} — fabric swatches, foam, tools, and stitching equipment.`,
  },
  // Variant 1 — Value-led
  {
    opening: () =>
      `Sofa reupholstery is the process of replacing your sofa's worn fabric, degraded foam, and damaged stitching with fresh materials — restoring both appearance and comfort without replacing the entire piece. The structural frame, which is usually the most expensive component, is retained and given a completely new life.`,
    benefits: (localityName, cityName) =>
      `In ${localityName}, ${cityName}, our reupholstery service delivers full doorstep convenience: fabric selection at your home, professional fitting, and final cleanup — all within 1–2 days. Customers consistently save 40–60% compared to buying new furniture of equivalent quality.`,
    closing: (localityName) =>
      `From sofa fabric change and sofa recovering to full foam replacement and stitching repair, our craftsmen arrive at your ${localityName} home with 400+ fabric swatches, high-density foam options, and all necessary tools — no workshop trip needed.`,
  },
  // Variant 2 — Comfort-led
  {
    opening: () =>
      `Sofa reupholstery — widely known as sofa fabric replacement or sofa recovering — restores your sofa's original comfort and visual appeal by replacing the outer covering, internal foam, and stitching. The solid frame underneath is preserved, making reupholstery a smarter long-term investment than buying new furniture.`,
    benefits: (localityName, cityName) =>
      `Our team serving ${localityName}, ${cityName} handles every step at your doorstep: free inspection, fabric selection from 400+ swatches, professional fitting, and thorough cleanup. Most sofa upholstery jobs are completed in 1–2 days, and the cost is typically 30–50% less than a replacement sofa of comparable quality.`,
    closing: (localityName) =>
      `Whether you're looking for sofa reupholstery, a sofa fabric change, cushion refilling, or a complete sofa makeover, FurniRevive's ${localityName} craftsmen bring all materials and tools directly to your home — zero hassle, zero transportation.`,
  },
];

/** Simple hash used for variant selection — must match content-uniqueness.ts hashCode */
function hashCodeLocal(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function WhatIsReupholstery({
  localityName,
  cityName,
  slug,
}: {
  localityName: string;
  cityName: string;
  slug: string;
}) {
  const variant =
    REUPHOLSTERY_INTRO_VARIANTS[
      hashCodeLocal(slug) % REUPHOLSTERY_INTRO_VARIANTS.length
    ];
  return (
    <section className="py-12 lg:py-16 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
          What is Sofa Reupholstery?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {variant.opening(localityName, cityName)}
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {variant.benefits(localityName, cityName)}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {variant.closing(localityName)}
        </p>
      </div>
    </section>
  );
}

// ─── Popular Upholstery Services ──────────────────────────────────────────────

function PopularServicesSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-2 text-center">
          Popular Upholstery Services
        </h2>
        <p className="text-muted-foreground text-sm text-center mb-8">
          All services completed at your doorstep — no transportation needed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {POPULAR_UPHOLSTERY_SERVICES.map((svc) => (
            <div
              key={svc.name}
              className="rounded-xl border border-border bg-background p-5 hover:shadow-sm transition-shadow"
            >
              <p className="font-semibold text-sm text-foreground mb-1">{svc.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Timeline FAQ ──────────────────────────────────────────────────────────────

function UpholsteryTimeline() {
  const rows = [
    { type: "2-seater sofa", duration: "1 day" },
    { type: "3-seater sofa", duration: "1–2 working days" },
    { type: "L-shaped sofa", duration: "1–2 working days" },
    { type: "Recliner", duration: "1–2 working days" },
    { type: "Dining chairs (set of 4+)", duration: "1 day" },
    { type: "Rush service", duration: "Call to confirm availability" },
  ];
  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            How Long Does Sofa Upholstery Take?
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Timelines depend on sofa size and fabric availability. Our technicians work at your doorstep — most jobs are done the same day or next day.
          </p>
        </div>
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="hidden sm:grid grid-cols-2 bg-muted/60 px-5 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            <span>Sofa Type</span>
            <span>Typical Duration</span>
          </div>
          <div className="divide-y divide-border">
            {rows.map((r) => (
              <div key={r.type} className="grid sm:grid-cols-2 px-5 py-3.5 hover:bg-muted/20 transition-colors">
                <span className="text-sm font-medium text-foreground">{r.type}</span>
                <span className="text-sm text-muted-foreground sm:text-foreground">{r.duration}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          All work is done at your home — no pickup needed. Timeline starts from confirmed booking.
        </p>
      </div>
    </section>
  );
}

// ─── Nearby service links ──────────────────────────────────────────────────────

function NearbyServiceLinks({ slug }: { slug: string }) {
  const neighbours = getExistingNeighbourLinks(slug, "sofa-upholstery");
  if (neighbours.length === 0) return null;
  return (
    <section className="py-10 lg:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold mb-4 text-foreground">
          Sofa Upholstery in Nearby Areas
        </h2>
        <div className="flex flex-wrap gap-2">
          {neighbours.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              className="text-sm rounded-full border border-border px-3 py-1.5 hover:bg-muted/50 transition-colors text-foreground/80 hover:text-foreground cursor-pointer"
            >
              {n.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ section ───────────────────────────────────────────────────────────────

function FaqSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-background px-5"
            >
              <AccordionTrigger className="text-sm font-medium text-left py-4 hover:no-underline cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// ─── JSON-LD Schema ────────────────────────────────────────────────────────────

function UpholsterySchema({ data, localityName, cityName }: { data: SeoPageData; localityName: string; cityName: string }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  const faqSchema = data.faqs && data.faqs.length > 0
    ? {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    description: data.metaDescription,
    telephone: PHONE_NUMBER,
    url: `https://furnirevive.com/${data.slug}`,
    sameAs: [whatsappUrl],
    areaServed: {
      "@type": "Place",
      name: `${localityName}, ${cityName}`,
    },
    serviceType: "Sofa Upholstery",
    priceRange: "₹₹",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Upholstery Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sofa Reupholstery" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fabric Replacement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Foam Replacement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "L-Shape Sofa Upholstery" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recliner Upholstery" } },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...faqSchema }) }}
        />
      )}
    </>
  );
}

// ─── Breadcrumb ────────────────────────────────────────────────────────────────

function Breadcrumb({ localityName, cityName, slug }: { localityName: string; cityName: string; slug: string }) {
  const serviceHubSlug = `sofa-upholstery-${cityName.toLowerCase()}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://furnirevive.com/" },
      { "@type": "ListItem", position: 2, name: `Sofa Upholstery ${cityName}`, item: `https://furnirevive.com/${serviceHubSlug}` },
      { "@type": "ListItem", position: 3, name: `${localityName}`, item: `https://furnirevive.com/${slug}` },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-foreground transition-colors cursor-pointer">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li>
            <Link to={`/${serviceHubSlug}`} className="hover:text-foreground transition-colors cursor-pointer">
              Sofa Upholstery {cityName}
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-foreground font-medium" aria-current="page">{localityName}</li>
        </ol>
      </nav>
    </>
  );
}

// ─── Quick Answer Box ─────────────────────────────────────────────────────────

function QuickAnswerBox({ introOpener, microContext }: { introOpener: string; microContext: string }) {
  return (
    <section className="py-8 lg:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5 lg:p-6 space-y-2">
          <h2 className="text-base font-bold text-primary">Quick Answer</h2>
          <p className="text-foreground/90 leading-relaxed">{introOpener}</p>
          <p className="text-muted-foreground leading-relaxed text-sm italic">{microContext}</p>
        </div>
      </div>
    </section>
  );
}

// ─── Signs You Need Upholstery ────────────────────────────────────────────────

function SignsYouNeedUpholstery() {
  const signs = [
    "Fabric is visibly torn, frayed, or has holes that snagging fingers or pets have worsened",
    "Cushion foam has gone flat — sofa feels like sitting on a wooden board",
    "Fabric colour has faded badly from sunlight or repeated cleaning",
    "Permanent stains, odours, or pet damage that cleaning can't remove",
    "Leatherette is peeling, cracking, or flaking onto clothing",
    "Sagging seat base or deformed cushion shape that no amount of fluffing fixes",
    "Stitching is coming undone along seams, armrests, or backrest joints",
    "The sofa frame is solid but the covering makes it embarrassing to have guests over",
  ];
  return (
    <section className="py-12 lg:py-16 bg-amber-50/50 dark:bg-amber-950/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-7">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">Signs Your Sofa Needs Reupholstery</h2>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {signs.map((sign, i) => (
            <li key={i} className="flex items-start gap-2.5 p-4 bg-background rounded-xl border border-amber-200 dark:border-amber-800">
              <CheckCircle2 className="size-4 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-foreground/90 text-sm leading-relaxed">{sign}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Why Choose Section ───────────────────────────────────────────────────────

function WhyChooseSection({ data }: { data: SeoPageData }) {
  if (!data.whyChoose || data.whyChoose.length === 0) return null;
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-10 text-center">
          Why Choose {BRAND_NAME} for Sofa Upholstery?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.whyChoose.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card className="h-full">
                <CardContent className="py-6">
                  <CheckCircle2 className="size-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

function TestimonialsSection({ data }: { data: SeoPageData }) {
  if (!data.testimonials || data.testimonials.length === 0) return null;
  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <Star className="size-6 text-amber-400 fill-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">What Our Customers Say</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card className="h-full">
                <CardContent className="py-5 flex flex-col gap-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`size-4 ${s < t.rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/85 leading-relaxed">{t.text}</p>
                  <div className="mt-auto pt-2 border-t border-border">
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}{t.service ? ` · ${t.service}` : ""}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Related Blog Posts ───────────────────────────────────────────────────────

function RelatedBlogPostsSection({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="py-12 lg:py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-8">
          <BookOpen className="size-5 text-primary" />
          <h3 className="text-xl font-serif font-bold">Helpful Guides &amp; Tips</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="pt-0 h-full hover:shadow-lg transition-shadow group cursor-pointer">
                <img src={post.featuredImage} alt={post.imageAlt ?? post.h1} className="w-full h-36 object-cover rounded-t-xl" />
                <CardContent className="pt-4">
                  <span className="text-xs text-primary font-semibold">{post.category}</span>
                  <h4 className="text-sm font-semibold mt-1 line-clamp-2 group-hover:text-primary transition-colors">{post.h1}</h4>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Related Pages Section ────────────────────────────────────────────────────

function RelatedPagesSection({ slug, pyramidLinks }: { slug: string; pyramidLinks: { href: string; label: string }[] }) {
  if (pyramidLinks.length === 0) return null;
  return (
    <section className="py-10 lg:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Related Pages</h3>
        <div className="flex flex-wrap gap-2">
          {pyramidLinks.map((page) => (
            <Link key={page.href} to={page.href} className="text-sm text-primary hover:underline cursor-pointer">
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main template ─────────────────────────────────────────────────────────────

export default function UpholsterySeoPageTemplateV1({
  data,
  templateVersion = "v1",
  sections: sectionsProp = {},
  showPricing,
  showGallery,
  schemaOverrides: _schemaOverrides,
  contentOverrides,
}: UpholsterySeoPageTemplateProps) {
  // Merge alias props into sections
  const sections: Partial<Record<UpholsterySection, boolean>> = {
    ...sectionsProp,
    ...(showPricing !== undefined ? { costTable: showPricing } : {}),
    ...(showGallery !== undefined ? { beforeAfter: showGallery } : {}),
  };

  // Set page title
  useEffect(() => {
    document.title = data.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", data.metaDescription);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `https://furnirevive.com/${data.slug}`);
  }, [data.title, data.metaDescription, data.slug]);

  // Locality personalization
  const localityInfo = getLocalityInfo(data.slug);
  const heroVariant = getHeroVariant(localityInfo.propertyType);
  const localityName = localityInfo.name;
  const cityName = localityInfo.city;

  const heroHeadline =
    contentOverrides?.heroHeadline ??
    `Sofa Reupholstery in ${localityName}, ${cityName}`;
  const heroSubtitleText =
    contentOverrides?.heroSubtitle ??
    (data.heroSubtitle || heroVariant.descriptor);

  // Always use upholstery-specific FAQs — pipeline FAQs are repair-focused and not relevant here
  const displayFaqs = UPHOLSTERY_FAQS.map((f) => ({ question: f.question, answer: f.answer }));

  const introOpener = useMemo(() => getIntroOpener(data.slug), [data.slug]);
  const microContext = useMemo(() => getMicroLocalContext(data.slug), [data.slug]);
  const uniqueFaq = useMemo(() => getUniqueFaq(data.slug), [data.slug]);
  const allDisplayFaqs = useMemo(() => [...displayFaqs, uniqueFaq], [displayFaqs, uniqueFaq]);
  const relatedBlogPosts = useMemo(() => selectRelatedPosts(data.slug), [data.slug]);
  const localityDisplay = useMemo(() => {
    const match = data.h1.match(/\bin\s+(.+)$/i);
    return match ? match[1] : localityName;
  }, [data.h1, localityName]);
  const pyramidLinks = useMemo(() => getPyramidLinks(data.slug), [data.slug]);

  // Template version marker (no-op at runtime, used by DoD audit)
  void templateVersion;

  return (
    <>
      <UpholsterySchema data={data} localityName={localityName} cityName={cityName} />
      <Navbar />
      <Breadcrumb localityName={localityName} cityName={cityName} slug={data.slug} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      {isOn(sections, "hero") && (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${data.hero ? "lg:flex-row lg:items-center lg:gap-12" : ""}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={data.hero ? "lg:flex-1" : ""}
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="size-4 text-primary" />
                  <span className="text-sm text-primary font-medium">{localityName}, {cityName}</span>
                </div>
                <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                  {heroVariant.tagline}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-balance mb-4 text-foreground">
                  {heroHeadline}
                </h1>
                <p className="text-lg text-muted-foreground mb-2 leading-relaxed">
                  {heroSubtitleText}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Serving {localityInfo.propertyType} in {localityName}. Call {PHONE_DISPLAY} for a free home visit.
                </p>
                <CtaBar />
                <div className="mt-6">
                  <TrustBadges />
                </div>
              </motion.div>

              {/* Right: hero image — same layout as repair pages */}
              {data.hero && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-10 lg:mt-0 lg:flex-1 lg:max-w-[520px]"
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                    <img
                      src={data.hero.url}
                      alt={`Sofa upholstery service in ${localityName}`}
                      width={data.hero.width}
                      height={data.hero.height}
                      className="w-full object-cover"
                      loading="eager"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── What is Sofa Reupholstery ─────────────────────────────────────── */}
      <WhatIsReupholstery localityName={localityName} cityName={cityName} slug={data.slug} />

      {/* ── Quick Answer Box ──────────────────────────────────────────────── */}
      <QuickAnswerBox introOpener={introOpener} microContext={microContext} />

      {/* ── Popular Upholstery Services ───────────────────────────────────── */}
      <PopularServicesSection />

      {/* ── Fabric Catalogue ──────────────────────────────────────────────── */}
      {isOn(sections, "fabricCatalogue") && <FabricCatalogue />}

      {/* ── CTA 1 ─────────────────────────────────────────────────────────── */}
      <InlineCta label={`Speak to a fabric expert in ${localityName} — free home visit, no obligation.`} />

      {/* ── Fabric Selector ───────────────────────────────────────────────── */}
      {isOn(sections, "fabricSelector") && <FabricSelector />}

      {/* ── Foam Guide ────────────────────────────────────────────────────── */}
      {isOn(sections, "foamGuide") && <FoamGuide />}

      {/* ── Cost Table ────────────────────────────────────────────────────── */}
      {isOn(sections, "costTable") && <CostTable localityName={localityName} />}

      {/* ── CTA 2 ─────────────────────────────────────────────────────────── */}
      <InlineCta label={`Get an exact upholstery quote for your ${localityName} home — WhatsApp us photos.`} />

      {/* ── Process Steps ─────────────────────────────────────────────────── */}
      {isOn(sections, "process") && <ProcessSteps />}

      {/* ── Before & After ────────────────────────────────────────────────── */}
      {isOn(sections, "beforeAfter") && <BeforeAfter />}

      {/* ── Signs You Need Upholstery ─────────────────────────────────────── */}
      <SignsYouNeedUpholstery />

      {/* ── Decision Guide ────────────────────────────────────────────────── */}
      {isOn(sections, "decisionGuide") && <DecisionGuide />}

      {/* ── Why Choose ────────────────────────────────────────────────────── */}
      <WhyChooseSection data={data} />

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <TestimonialsSection data={data} />

      {/* ── CTA 3 ─────────────────────────────────────────────────────────── */}
      <InlineCta label="Not sure whether to reupholster or replace? Our technician will advise you — free inspection." />

      {/* ── Fabric Care Tips ──────────────────────────────────────────────── */}
      <FabricCareTips />

      {/* ── Services Grid ─────────────────────────────────────────────────── */}
      <ServicesGridSection locality={localityDisplay} />

      {/* ── Timeline ──────────────────────────────────────────────────────── */}
      <UpholsteryTimeline />

      {/* ── Warranty ──────────────────────────────────────────────────────── */}
      <div className="py-8 lg:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <WarrantyInfo />
        </div>
      </div>

      {/* ── Service Hub ───────────────────────────────────────────────────── */}
      <ServiceHubSection slug={data.slug} currentService="sofa-upholstery" />

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      {isOn(sections, "faq") && <FaqSection faqs={allDisplayFaqs} />}

      {/* ── CTA 4 (final) ─────────────────────────────────────────────────── */}
      <InlineCta label={`Ready to transform your sofa? Book a free inspection in ${localityName} today.`} />

      {/* ── Nearby Areas ──────────────────────────────────────────────────── */}
      {isOn(sections, "nearbyAreas") && (
        <NearbyAreasSection slug={data.slug} serviceKey="sofa-upholstery" />
      )}

      {/* ── Service links ─────────────────────────────────────────────────── */}


      {/* ── Related Pages ─────────────────────────────────────────────────── */}
      <RelatedPagesSection slug={data.slug} pyramidLinks={pyramidLinks} />

      {/* ── Related Blog Posts ────────────────────────────────────────────── */}
      <RelatedBlogPostsSection posts={relatedBlogPosts} />

      {/* ── Service Coverage ──────────────────────────────────────────────── */}
      <section className="py-10 lg:py-14 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-semibold mb-2">
            Sofa Upholstery Service Coverage in {cityName}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            We serve all major localities in {cityName}. Same-day inspection available in most areas.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {localityInfo.adjacentAreas.map((area) => (
              <span
                key={area}
                className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
