/**
 * ProgrammaticSeoPageTemplate
 *
 * Isolated template for the 10 programmatic locality pages only.
 * Extends the core SeoPageTemplate layout with additional SEO sections:
 *   ServicesGrid → Pricing → CommonProblems → Brands → Materials → RepairTimes → ServiceCoverage
 *
 * SeoPageTemplate is NOT modified — existing service pages are unaffected.
 */

import { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
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
  Wrench,
  Tag,
  Search,
  Leaf,
  Scale,
  AlertTriangle,
  Quote,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import RealRepairResults from "@/components/real-repair-results.tsx";
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
  SERVICE_AREAS,
} from "@/lib/seo-constants.ts";
import { selectRelatedPosts } from "@/lib/blog-recommendation-engine.ts";
import {
  getIntroOpener,
  getMicroLocalContext,
  getRotatedBadges,
  getUniqueSentence,
  getSectionOrder,
  getUniqueFaq,
} from "@/lib/seo-pages/content-uniqueness.ts";
import { getPyramidLinks } from "@/lib/seo-pages/pyramid-links.ts";
import NearMeSection, { type CityKey } from "@/components/seo/NearMeSection.tsx";
import LocalityNearMeSection from "@/components/seo/LocalityNearMeSection.tsx";
import NearbyAreasSection from "@/components/seo/NearbyAreasSection.tsx";
import ServiceAvailabilitySection from "@/components/seo/ServiceAvailabilitySection.tsx";
import RepairScenarioSection from "@/components/seo/RepairScenarioSection.tsx";
import { getRepairScenario } from "@/lib/seoConfigs/repair-scenario-engine.ts";
import BeforeAfterGallery from "@/components/seo/BeforeAfterGallery.tsx";
import { getGalleryImages } from "@/lib/seoConfigs/gallery-engine.ts";
import { resolvePageType, resolveServiceKey } from "@/lib/seoConfigs/location-graph.ts";
import { getLocalityInfo } from "@/lib/seoConfigs/localities.ts";
import {
  deriveLocalityRecord,
  buildDerivedRelatedLinks,
  PROGRAMMATIC_RELATED_LINKS_MODE,
} from "@/lib/seoConfigs/derived-authority.ts";
import TopicalAuthoritySection from "@/components/seo/TopicalAuthoritySection.tsx";
import { getAuthorityLinks } from "@/lib/seoConfigs/authority-engine.ts";
// New programmatic-only sections
import ServicesGridSection from "@/components/seo/ServicesGridSection.tsx";
import PricingSection from "@/components/seo/PricingSection.tsx";
import CommonProblemsSection from "@/components/seo/CommonProblemsSection.tsx";
import BrandsSection from "@/components/seo/BrandsSection.tsx";
import MaterialOptionsSection from "@/components/seo/MaterialOptionsSection.tsx";
import ServiceCoverageSection from "@/components/seo/ServiceCoverageSection.tsx";
import ServiceHubSection from "@/components/seo/ServiceHubSection.tsx";
import { REPAIR_TIMES } from "@/lib/seoConfigs/pricing-data.ts";
import KitchenCrossLinkBanner from "@/components/kitchen-cross-link-banner.tsx";

const ICON_MAP: Record<string, LucideIcon> = {
  star: Star,
  clock: Clock,
  shield: Shield,
  award: Award,
  wrench: Wrench,
  tag: Tag,
  search: Search,
  leaf: Leaf,
};

function CtaBar() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to get a quotation for furniture repair.")}`;
  return (
    <div className="flex flex-wrap gap-3">
      <a href={`tel:${PHONE_NUMBER}`}>
        <Button size="lg" className="gap-2 rounded-full">
          <Phone className="size-4" />
          Call Now
        </Button>
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button size="lg" variant="secondary" className="gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
          <MessageCircle className="size-4" />
          WhatsApp Us
        </Button>
      </a>
      <Link to="/book">
        <Button size="lg" variant="secondary" className="gap-2 rounded-full">
          Book Online
          <ArrowRight className="size-4" />
        </Button>
      </Link>
    </div>
  );
}

function TrustBadges({ slug }: { slug: string }) {
  const badges = getRotatedBadges(slug);
  return (
    <div className="flex flex-wrap gap-4">
      {badges.map((b) => {
        const IconComp = ICON_MAP[b.icon] ?? Star;
        return (
          <div key={b.label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <IconComp className="size-4 text-primary" />
            <span>{b.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function InlineCta({ label }: { label: string }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to get a quotation for furniture repair.")}`;
  return (
    <div className="py-8 lg:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary/8 border border-primary/20 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-foreground text-center sm:text-left">{label}</p>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button size="sm" className="gap-1.5 rounded-full">
                <Phone className="size-3.5" />
                Call Now
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-1.5 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <MessageCircle className="size-3.5" />
                WhatsApp
              </Button>
            </a>
            <a href="/book">
              <Button size="sm" variant="secondary" className="gap-1.5 rounded-full">
                Free Quote
                <ArrowRight className="size-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection({ data }: { data: SeoPageData }) {
  if (!data.testimonials || data.testimonials.length === 0) return null;
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
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
                  <div className="relative">
                    <Quote className="size-5 text-primary/20 absolute -top-1 -left-0.5" />
                    <p className="text-sm text-foreground/85 leading-relaxed pl-5">{t.text}</p>
                  </div>
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

function WhyChooseSection({ data }: { data: SeoPageData }) {
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-10 text-center">
          Why Choose {BRAND_NAME}?
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

function ProcessSection({ data }: { data: SeoPageData }) {
  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-10 text-center">
          Our Repair Process
        </h2>
        <div className="space-y-6">
          {data.process.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
              <div className="flex-shrink-0 size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{step.step}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentParagraph({ para, repairImages }: { para: string; repairImages?: SeoPageData["repairImages"] }) {
  if (para.startsWith("{{IMAGE:") && para.endsWith("}}")) {
    if (!repairImages || repairImages.length === 0) return null;
    return (
      <div className="grid sm:grid-cols-3 gap-4 my-6">
        {repairImages.map((img, i) => (
          <figure key={i} className="flex flex-col rounded-xl overflow-hidden border border-border shadow-sm">
            <div className="relative">
              <img src={img.src} alt={img.alt} referrerPolicy="no-referrer" className="w-full aspect-video object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              <span className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full ${img.type === "before" ? "bg-destructive/90 text-destructive-foreground" : img.type === "after" ? "bg-primary/90 text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                {img.type === "before" ? "Before" : img.type === "after" ? "After" : "Our Technician"}
              </span>
            </div>
            <figcaption className="px-3 py-2.5 text-xs text-muted-foreground bg-muted/40">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    );
  }
  const hasHtml = /<[a-z][\s\S]*>/i.test(para);
  const htmlContent = para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary underline hover:opacity-80">$1</a>');
  if (hasHtml || htmlContent !== para) {
    return <p className="text-foreground/90 leading-relaxed mb-3 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary/80" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  }
  return <p className="text-foreground/90 leading-relaxed mb-3">{para}</p>;
}

function RepairImageGallery({ repairImages }: { repairImages: NonNullable<SeoPageData["repairImages"]> }) {
  const beforeAfter = repairImages.filter(img => img.type === "before" || img.type === "after");
  const pairs: typeof beforeAfter[] = [];
  for (let i = 0; i < beforeAfter.length; i += 2) pairs.push(beforeAfter.slice(i, i + 2));
  const technicians = repairImages.filter(img => img.type === "technician");
  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-2 text-center">Before &amp; After Repair Photos</h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">Real repairs by FurniRevive technicians at customer homes in Delhi NCR</p>
        {pairs.map((pair, pi) => (
          <div key={pi} className="grid grid-cols-2 gap-5 mb-5">
            {pair.map((img, i) => (
              <figure key={i} className="flex flex-col rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="relative">
                  <img src={img.src} alt={img.alt} referrerPolicy="no-referrer" className="w-full aspect-video object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                </div>
                <figcaption className="px-3 py-2.5 text-xs text-muted-foreground bg-muted/40">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        ))}
        {technicians.map((img, i) => (
          <figure key={i} className="flex flex-col rounded-xl overflow-hidden border border-border shadow-sm">
            <div className="relative">
              <img src={img.src} alt={img.alt} referrerPolicy="no-referrer" className="w-full aspect-video object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              <span className="absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">Our Technician</span>
            </div>
            <figcaption className="px-3 py-2.5 text-xs text-muted-foreground bg-muted/40">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ContentSectionsBlock({ data }: { data: SeoPageData }) {
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {data.contentSections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">{section.heading}</h2>
            {section.body.map((para, j) => (
              <ContentParagraph key={j} para={para} repairImages={data.repairImages} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function BenefitsSection({ data }: { data: SeoPageData }) {
  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8">Key Benefits</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {data.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/90">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ComparisonSection({ data }: { data: SeoPageData }) {
  if (!data.comparisonSection) return null;
  const { heading, rows, conclusion } = data.comparisonSection;
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Scale className="size-6 text-primary" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">{heading}</h2>
        </div>
        <div className="rounded-xl border border-border overflow-hidden mb-8">
          <table className="w-full text-left">
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-secondary/40"}>
                  <td className="px-5 py-4 font-semibold text-foreground">{row.label}</td>
                  <td className="px-5 py-4 text-foreground/90">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {conclusion.map((para, i) => (
          <p key={i} className="text-foreground/90 leading-relaxed mb-3 text-base lg:text-lg [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary/80" dangerouslySetInnerHTML={{ __html: para }} />
        ))}
      </div>
    </section>
  );
}

// ── Repair Time Estimates section (inline, no separate component) ──────────

function RepairTimesSection() {
  return (
    <section className="py-12 lg:py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <Clock className="size-6 text-primary" />
          <h2 className="text-2xl font-serif font-bold">Repair Time Estimates</h2>
        </div>
        <p className="text-muted-foreground mb-6 text-sm">Most repairs are completed the same day at your home.</p>
        {/* Desktop table */}
        <div className="hidden sm:block rounded-xl border border-border overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-5 py-3 font-semibold text-sm">Service</th>
                <th className="px-5 py-3 font-semibold text-sm">Typical Time</th>
                <th className="px-5 py-3 font-semibold text-sm">Same Day?</th>
              </tr>
            </thead>
            <tbody>
              {REPAIR_TIMES.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-secondary/40"}>
                  <td className="px-5 py-3.5 text-foreground/90 text-sm">{row.service}</td>
                  <td className="px-5 py-3.5 text-foreground/90 text-sm">{row.time}</td>
                  <td className="px-5 py-3.5 text-sm">
                    {row.sameDay === "yes" ? (
                      <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                        <CheckCircle2 className="size-4" /> Yes
                      </span>
                    ) : row.sameDay === "usually" ? (
                      <span className="text-amber-600 font-medium">Usually</span>
                    ) : (
                      <span className="text-muted-foreground">No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile stacked */}
        <div className="sm:hidden space-y-3">
          {REPAIR_TIMES.map((row, i) => (
            <div key={i} className="rounded-lg border border-border bg-background px-4 py-3 flex justify-between items-center gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{row.service}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{row.time}</p>
              </div>
              <div className="shrink-0">
                {row.sameDay === "yes" ? (
                  <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 dark:bg-green-950/30 px-2 py-1 rounded-full">
                    <CheckCircle2 className="size-3" /> Same Day
                  </span>
                ) : (
                  <span className="text-xs text-amber-600 font-medium bg-amber-50 dark:bg-amber-950/30 px-2 py-1 rounded-full">Usually</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Main template ─────────────────────────────────────────────────────────

export default function ProgrammaticSeoPageTemplate({ data }: { data: SeoPageData }) {
  const { pathname } = useLocation();
  const isKitchenPage = pathname.includes("kitchen") || pathname.includes("modular");
  const relatedBlogPosts = selectRelatedPosts(data.slug);

  const pageType = useMemo(() => resolvePageType(data), [data]);
  const resolvedServiceKey = useMemo(() => resolveServiceKey(data), [data]);
  const scenarioData = useMemo(
    () => (resolvedServiceKey ? getRepairScenario(resolvedServiceKey, data.slug) : null),
    [resolvedServiceKey, data.slug],
  );
  const galleryMatches = useMemo(
    () => (resolvedServiceKey ? getGalleryImages(resolvedServiceKey, data.slug) : null),
    [resolvedServiceKey, data.slug],
  );
  const authorityMatches = useMemo(() => {
    if (!resolvedServiceKey) return null;
    // Suppress on Tricity pages — no Tricity authority records exist yet, so engine
    // surfaces Delhi-specific pages (wrong geography for Mohali/Chandigarh/Panchkula visitors)
    const tricityKeys = ["chandigarh", "mohali", "panchkula"] as const;
    if (tricityKeys.some((k) => data.slug.includes(k))) return null;
    const pyramidHrefs = new Set(getPyramidLinks(data.slug).map((l) => l.href));
    pyramidHrefs.add(`/${data.slug}`);
    return getAuthorityLinks(resolvedServiceKey, data.slug, { limit: 4, excludeHrefs: pyramidHrefs });
  }, [resolvedServiceKey, data.slug]);

  // Derived authority links — hybrid mode: injects parent hub, apex hub,
  // siblings, commercial, and cost picks while preserving existing relatedPages
  const derivedLinks = useMemo(() => {
    if (PROGRAMMATIC_RELATED_LINKS_MODE === "legacy") return null;
    if (!resolvedServiceKey) return null;
    const localityInfo = getLocalityInfo(data.slug);
    const record = deriveLocalityRecord(
      data.slug,
      data.h1 ?? data.slug,
      resolvedServiceKey,
      localityInfo.cityKey,
      localityInfo.name,
    );
    return buildDerivedRelatedLinks(record, data.relatedPages ?? []);
  }, [resolvedServiceKey, data.slug, data.h1, data.relatedPages]);

  const introOpener = useMemo(() => getIntroOpener(data.slug), [data.slug]);
  const microContext = useMemo(() => getMicroLocalContext(data.slug), [data.slug]);
  const uniqueSentence = useMemo(() => getUniqueSentence(data.slug), [data.slug]);
  const sectionOrder = useMemo(() => getSectionOrder(data.slug), [data.slug]);
  const uniqueFaq = useMemo(() => getUniqueFaq(data.slug), [data.slug]);
  const allFaqs = useMemo(() => [...data.faqs, uniqueFaq], [data.faqs, uniqueFaq]);

  // Extract locality display name from h1 (e.g. "Sofa Repair in Sector 49" → "Sector 49")
  const localityDisplay = useMemo(() => {
    const match = data.h1.match(/\bin\s+(.+)$/i);
    return match ? match[1] : data.h1;
  }, [data.h1]);

  useEffect(() => {
    document.title = data.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", data.metaDescription);

    const existingScripts = document.querySelectorAll('script[data-schema="seo-page"]');
    existingScripts.forEach((s) => s.remove());

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: BRAND_NAME,
      telephone: PHONE_NUMBER,
      url: "https://furnirevive.com",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "127", bestRating: "5", worstRating: "1" },
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.h1,
      description: data.metaDescription,
      provider: { "@type": "LocalBusiness", name: BRAND_NAME, telephone: PHONE_NUMBER, url: "https://furnirevive.com" },
      areaServed: [
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Ghaziabad" },
        { "@type": "City", name: "Faridabad" },
        { "@type": "City", name: "Greater Noida" },
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "599",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "599", priceCurrency: "INR", minPrice: "599", maxPrice: "15000" },
        availability: "https://schema.org/InStock",
        areaServed: { "@type": "City", name: "Delhi" },
      },
      url: `https://furnirevive.com/${data.slug}`,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://furnirevive.com/" },
        { "@type": "ListItem", position: 2, name: data.h1, item: `https://furnirevive.com/${data.slug}` },
      ],
    };

    for (const schema of [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.schema = "seo-page";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) existingCanonical.remove();
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = `https://furnirevive.com/${data.slug}`;
    document.head.appendChild(canonical);

    return () => {
      document.querySelectorAll('script[data-schema="seo-page"]').forEach((s) => s.remove());
      document.querySelector('link[rel="canonical"]')?.remove();
    };
  }, [data.title, data.metaDescription, data.h1, data.slug, allFaqs]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to get a quotation for furniture repair.")}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col ${(data.showcaseImage || data.hero) ? "lg:flex-row lg:items-center lg:gap-12" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={data.showcaseImage || data.hero ? "lg:flex-1" : ""}
            >
              <nav className="text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">{data.h1}</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">{data.h1}</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{data.heroSubtitle}</p>
              <div className="mt-8"><CtaBar /></div>
              {/* 2. Trust Badges */}
              <div className="mt-6"><TrustBadges slug={data.slug} /></div>
            </motion.div>

            {data.showcaseImage && (
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-10 lg:mt-0 lg:flex-1 lg:max-w-[520px]">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                  <img src={data.showcaseImage.imageUrl} alt={data.showcaseImage.altText} className="w-full object-cover" loading="eager" />
                </div>
                {data.showcaseImage.caption && <p className="mt-2 text-xs text-muted-foreground text-center leading-relaxed px-2">{data.showcaseImage.caption}</p>}
              </motion.div>
            )}

            {!data.showcaseImage && data.hero && (
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-10 lg:mt-0 lg:flex-1 lg:max-w-[520px]">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                  <img
                    src={data.hero.url}
                    alt={`Technician repairing a ${data.hero.furnitureType} at a customer's home in ${data.h1.replace(/^.+ in /, "")}`}
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

      {/* Quick Answer */}
      {data.quickAnswer && (
        <section className="py-8 lg:py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5 lg:p-6">
              <h2 className="text-base font-bold text-primary mb-2">Quick Answer</h2>
              <p className="text-foreground/90 leading-relaxed text-base lg:text-lg">{data.quickAnswer}</p>
            </div>
          </div>
        </section>
      )}

      {/* Intro */}
      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-foreground/90 leading-relaxed mb-4 text-base lg:text-lg font-medium">{introOpener}</p>
          {data.intro.map((para, i) => (
            <p key={i} className="text-foreground/90 leading-relaxed mb-4 text-base lg:text-lg [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary/80" dangerouslySetInnerHTML={{ __html: para }} />
          ))}
          <p className="text-foreground/80 leading-relaxed mb-4 text-base italic">{microContext}</p>
        </div>
      </section>

      {/* Service Hub — cross-links all available services for this locality */}
      {pageType === "locality" && resolvedServiceKey && (
        <ServiceHubSection slug={data.slug} currentService={resolvedServiceKey} />
      )}

      {/* Near-me section — city/hub pages only */}
      {data.cityKey && (
        <NearMeSection city={data.cityKey as CityKey} />
      )}

      {/* Location Graph sections */}
      {pageType === "locality" && resolvedServiceKey && (
        <NearbyAreasSection slug={data.slug} serviceKey={resolvedServiceKey} />
      )}
      {pageType === "service" && resolvedServiceKey && (
        <ServiceAvailabilitySection serviceKey={resolvedServiceKey} />
      )}

      {/* 3. Services Grid */}
      <ServicesGridSection locality={localityDisplay} />

      {/* 4. Pricing Section */}
      <PricingSection locality={localityDisplay} />

      {/* Cross-link: Modular Kitchen — placed after pricing so it's seen early */}
      {!isKitchenPage && <KitchenCrossLinkBanner />}

      {/* 5. Before/After Gallery */}
      {galleryMatches && galleryMatches.length > 0 && (
        <BeforeAfterGallery matches={galleryMatches} />
      )}
      {data.repairImages && data.repairImages.length > 0 && (
        <RepairImageGallery repairImages={data.repairImages} />
      )}

      {/* Repair Scenario Engine */}
      {scenarioData && <RepairScenarioSection data={scenarioData} />}

      {/* 6. Common Problems */}
      <CommonProblemsSection locality={localityDisplay} />

      {/* 7. Repair Process */}
      <ProcessSection data={data} />

      {/* 8. Why Choose */}
      <WhyChooseSection data={data} />

      {/* Content sections + benefits */}
      {sectionOrder === "benefits-first" ? (
        <>
          <BenefitsSection data={data} />
          <ContentSectionsBlock data={data} />
        </>
      ) : (
        <>
          <ContentSectionsBlock data={data} />
          <section className="py-8 lg:py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-lg border border-primary/20 bg-primary/5 px-5 py-4 flex items-start gap-3">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground/90 text-sm lg:text-base leading-relaxed">{uniqueSentence}</p>
              </div>
            </div>
          </section>
          <BenefitsSection data={data} />
        </>
      )}

      <ComparisonSection data={data} />
      {data.comparisonSection && (
        <InlineCta label="Still unsure? Call us — we'll inspect for free and give you an honest recommendation." />
      )}
      <TestimonialsSection data={data} />

      {/* 9. Brand Expertise */}
      <BrandsSection />

      {/* 10. Material Options */}
      <MaterialOptionsSection />

      {/* 11. Repair Time Estimates */}
      <RepairTimesSection />

      {/* Local areas section */}
      {data.localAreasSection && (
        <section className="py-14 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">{data.localAreasSection.heading}</h2>
            <div className="flex flex-wrap gap-2">
              {data.localAreasSection.areas.map((area) => (
                <span key={area} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 border border-border rounded-full text-sm text-foreground">
                  <MapPin className="size-3.5 text-primary" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Real Repair Results */}
      <RealRepairResults pageSlug={data.slug} />

      {/* Service Areas */}
      <section className="py-14 lg:py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">Service Areas in Delhi NCR</h2>
          <p className="text-muted-foreground mb-6">We provide doorstep furniture repair services across Delhi NCR including:</p>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.map((area) => (
              <span key={area} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border rounded-full text-sm text-foreground">
                <MapPin className="size-3.5 text-primary" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need Repair */}
      {data.repairSigns && data.repairSigns.length > 0 && (
        <section className="py-12 lg:py-16 bg-amber-50/50 dark:bg-amber-950/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-7">
              <AlertTriangle className="size-6 text-amber-500 shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">Signs You Need Repair</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {data.repairSigns.map((sign, i) => (
                <li key={i} className="flex items-start gap-2.5 p-4 bg-background rounded-xl border border-amber-200 dark:border-amber-800">
                  <AlertTriangle className="size-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-foreground/90 text-sm leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 12. Service Coverage */}
      <ServiceCoverageSection locality={localityDisplay} />

      {/* 13. FAQs */}
      <section className="py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-center">
            Frequently Asked Questions — {localityDisplay}
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
            <AccordionItem value="faq-unique" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline">{uniqueFaq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{uniqueFaq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <InlineCta label="Ready to restore your sofa? Book a free inspection today — same-day slots available." />

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Ready to Restore Your Furniture?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Get a free quotation today. Our expert craftsmen serve {localityDisplay} and all of Delhi NCR with same-day service available.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button size="lg" variant="secondary" className="gap-2 rounded-full">
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <MessageCircle className="size-4" />
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 14 & 15. Related Pages + Blog Posts + Nearby Areas */}
      <section className="py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {data.relatedPageGroups ? (
            <div>
              <h3 className="text-lg font-semibold mb-6">Related Pages</h3>
              <div className="space-y-6">
                {data.relatedPageGroups.map((group) => (
                  <div key={group.heading}>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">{group.heading}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.pages.map((page) => (
                        <Link key={page.href} to={page.href} className="text-sm text-primary hover:underline">{page.label}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold mb-4">Related Pages</h3>
              <div className="flex flex-wrap gap-2">
                {(() => {
                  const pyramidLinks = getPyramidLinks(data.slug).filter(
                    (page, idx, arr) => arr.findIndex((p) => p.href === page.href) === idx,
                  );
                  const pyramidHrefSet = new Set(pyramidLinks.map((l) => l.href));

                  // Hybrid / derived mode: use derived authority engine for secondary links
                  if (derivedLinks && PROGRAMMATIC_RELATED_LINKS_MODE !== "legacy") {
                    // Exclude pyramid hrefs and self from derived links (already deduped by engine)
                    const secondaryLinks = derivedLinks.links.filter(
                      (l) => !pyramidHrefSet.has(l.href) && l.href !== `/${data.slug}`,
                    );
                    return [...pyramidLinks, ...secondaryLinks].map((page) => (
                      <Link key={page.href} to={page.href} className="text-sm text-primary hover:underline">{page.label}</Link>
                    ));
                  }

                  // Legacy fallback: original priorityScore() logic unchanged
                  const FOOTER_NAVBAR_HREFS = new Set([
                    "/sofa-repair-delhi", "/furniture-repair-delhi", "/recliner-repair-delhi",
                    "/chair-repair-delhi", "/furniture-polish-delhi", "/carpenter-home-service-delhi",
                    "/sofa-upholstery-delhi", "/dining-chair-repair-delhi",
                    "/sofa-repair-south-delhi", "/furniture-repair-south-delhi", "/recliner-repair-south-delhi",
                    "/sofa-repair-dwarka", "/furniture-repair-rohini", "/sofa-repair-east-delhi",
                    "/sofa-repair-gurgaon", "/furniture-repair-gurgaon", "/recliner-repair-gurgaon",
                    "/sofa-repair-noida", "/furniture-repair-noida", "/recliner-repair-noida",
                    "/sofa-repair-rohini", "/blog", "/contact", "/book", "/",
                  ]);
                  const excluded = new Set([...FOOTER_NAVBAR_HREFS, ...pyramidHrefSet, `/${data.slug}`]);

                  function priorityScore(href: string): number {
                    if (href.includes("sector-") || href.match(/-[a-z]+-(?:delhi|gurgaon|noida|faridabad)$/)) return 5;
                    if (href.includes("durian") || href.includes("evok") || href.includes("royaloak") || href.includes("wakefit") || href.includes("urban-ladder") || href.includes("nilkamal") || href.includes("home-centre") || href.includes("wooden-street")) return 4;
                    if (href.includes("leather") || href.includes("recliner-motor") || href.includes("italian") || href.includes("imported") || href.includes("foam-replacement") || href.includes("upholstery")) return 3;
                    if (href.includes("luxury") || href.includes("restoration") || href.includes("refinishing")) return 2;
                    if (href.includes("cost") || href.includes("price") || href.includes("pricing")) return 1;
                    return 0;
                  }

                  const secondaryLinks = (data.relatedPages ?? [])
                    .filter((p) => !excluded.has(p.href))
                    .filter((p, idx, arr) => arr.findIndex((q) => q.href === p.href) === idx)
                    .sort((a, b) => priorityScore(b.href) - priorityScore(a.href))
                    .slice(0, 6);

                  return [...pyramidLinks, ...secondaryLinks].map((page) => (
                    <Link key={page.href} to={page.href} className="text-sm text-primary hover:underline">{page.label}</Link>
                  ));
                })()}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Topical Authority Section */}
      <TopicalAuthoritySection matches={authorityMatches} slug={data.slug} />

      {/* Related Blog Posts */}
      {relatedBlogPosts.length > 0 && (
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2.5 mb-8">
              <BookOpen className="size-5 text-primary" />
              <h3 className="text-xl font-serif font-bold">Helpful Guides &amp; Tips</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedBlogPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="pt-0 h-full hover:shadow-lg transition-shadow group">
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
      )}

      <Footer />
    </div>
  );
}
