import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CalendarClock, ChevronRight, MessageCircle, Phone, ShieldCheck, Wrench, Clock } from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import RealRepairResults from "@/components/real-repair-results.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { BUSINESS, BUSINESS_ADDRESS, BUSINESS_GEO } from "@/lib/business-config.ts";
import { generateHeroAlt } from "@/lib/seoConfigs/hero-image-engine.ts";
import { getServiceFaqs } from "@/lib/seoConfigs/faq-service-pools.ts";
import { selectFaqs } from "@/lib/seoConfigs/faq-engine.ts";
import type { LocalityInfo } from "@/lib/seoConfigs/localities.ts";
import {
  SERVICE_HUB_CONFIG,
  getHubHero,
  cityDisplayFor,
  responseTimeFor,
  getHubLandmarks,
  getHubLocalities,
  joinNames,
  type HubLink,
  type HubTarget,
} from "../_lib/hub-config.ts";

type Faq = { question: string; answer: string };

function buildInfo(target: HubTarget): LocalityInfo {
  return {
    name: target.area.label,
    city: cityDisplayFor(target.area.city),
    cityKey: target.area.city,
    propertyType: "home",
    adjacentAreas: [],
    landmarks: [],
    responseTime: responseTimeFor(target.area.city),
    parentServiceSlug: `/${target.slug}`,
  };
}

/** Real FAQs from the existing service pools; no new copy. */
export function buildFaqs(target: HubTarget): Faq[] {
  const config = SERVICE_HUB_CONFIG[target.service];
  const info = buildInfo(target);
  const pool =
    getServiceFaqs(info, config.faqCategory, 6) ?? selectFaqs(info, { count: 6, category: config.faqCategory });
  return pool.map((f) => ({ question: f.question, answer: f.answer }));
}

const TRUST = [
  { icon: CalendarClock, label: "Same-day service" },
  { icon: ShieldCheck, label: "6-month warranty" },
  { icon: Wrench, label: "Free doorstep inspection" },
] as const;

/** LocalBusiness + FAQPage graph for a hub page. */
export function buildHubSchema(target: HubTarget, faqs: readonly Faq[]) {
  const config = SERVICE_HUB_CONFIG[target.service];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://furnirevive.com/${target.slug}#business`,
        name: BUSINESS.name,
        telephone: BUSINESS.phone,
        url: `https://furnirevive.com/${target.slug}`,
        priceRange: `Starting ${config.headlinePrice.replace(/^from /, "from ")}`,
        address: BUSINESS_ADDRESS,
        geo: BUSINESS_GEO,
        areaServed: { "@type": "City", name: cityDisplayFor(target.area.city) },
        makesOffer: { "@type": "Offer", itemOffered: { "@type": "Service", name: `${config.name} in ${target.area.label}` } },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

function usePageMeta(target: HubTarget, title: string, description: string, faqs: readonly Faq[]) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = `https://furnirevive.com/${target.slug}`;
    document.querySelector('link[rel="canonical"]')?.remove();
    document.head.appendChild(canonical);

    const graph = buildHubSchema(target, faqs);
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.schema = "seo-page";
    script.textContent = JSON.stringify(graph);
    document.head.appendChild(script);

    return () => {
      script.remove();
      canonical.remove();
    };
  }, [target, title, description, faqs]);
}

/** Intro paragraph built only from the area's real registry data (localities and landmarks). */
export function buildAreaIntro(target: HubTarget): string {
  const config = SERVICE_HUB_CONFIG[target.service];
  const area = target.area.label;
  const count = getHubLocalities(target.service, target.area).length;
  const landmarks = joinNames(getHubLandmarks(target.service, target.area));
  const near = landmarks ? `, including areas near ${landmarks}` : "";
  const covered = count > 0 ? `${count} localities across ${area}` : area;
  return `FurniRevive brings ${config.noun} to ${covered}${near}. Our technicians typically arrive within ${responseTimeFor(target.area.city)}, inspect for free and quote a fixed price before any work begins.`;
}

export type HubFrameProps = {
  target: HubTarget;
  eyebrow: string;
  intro: string;
  /** The locality grid(s) rendered after the trust strip */
  children: React.ReactNode;
  siblingLinks: readonly HubLink[];
};

/** Shared page frame: hero, trust strip, children (grids), pricing, FAQs, related links. */
export default function HubFrame({ target, eyebrow, intro, children, siblingLinks }: HubFrameProps) {
  const config = SERVICE_HUB_CONFIG[target.service];
  const area = target.area.label;
  const faqs = buildFaqs(target);
  const title = `${config.name} in ${area} | ${config.headlinePrice} | FurniRevive`;
  const description = `${config.name} in ${area}: doorstep service, ${config.headlinePrice}, free inspection, 6-month warranty. Call ${BUSINESS.displayPhone}.`;
  usePageMeta(target, title, description, faqs);

  const hero = getHubHero(target);
  const whatsappUrl = `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(`Hi! I'd like ${config.noun} in ${area}.`)}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:gap-12">
          <motion.div
            className="lg:flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-5">
              <Link to="/" className="hover:text-primary cursor-pointer">Home</Link>
              <ChevronRight className="size-3.5" />
              <span className="text-foreground">{config.name} {area}</span>
            </nav>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
              {config.name} in {area}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${BUSINESS.phone}`} className="cursor-pointer">
                <Button size="lg" className="gap-2 rounded-full"><Phone className="size-4" />Call Now</Button>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <Button size="lg" className="gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
                  <MessageCircle className="size-4" />WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
          {hero && (
            <div className="mt-8 lg:mt-0 lg:flex-1 lg:max-w-[520px] rounded-2xl overflow-hidden shadow-lg border border-border">
              <img
                src={hero.url}
                alt={generateHeroAlt(hero, area)}
                width={hero.width}
                height={hero.height}
                className="w-full object-cover"
                loading="eager"
              />
            </div>
          )}
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary"><t.icon className="size-4" /></span>
              <span className="text-sm font-medium">{t.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary"><Clock className="size-4" /></span>
            <span className="text-sm font-medium">Arrives in {responseTimeFor(target.area.city)}</span>
          </div>
        </div>
      </section>

      <section className="pt-10 lg:pt-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground leading-relaxed">{buildAreaIntro(target)}</p>
        </div>
      </section>

      {children}

      <RealRepairResults pageSlug={target.slug} cityName={area} service={target.service} />

      <section className="py-12 lg:py-16 bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">{config.name} Pricing in {area}</h2>
          <div className="mt-6 overflow-hidden rounded-xl border bg-card">
            <table className="w-full text-left">
              <tbody>
                {config.priceRows.map((row) => (
                  <tr key={row.item} className="border-t first:border-t-0">
                    <td className="px-5 py-3 text-sm">{row.item}</td>
                    <td className="px-5 py-3 text-sm font-semibold text-primary text-right">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{config.priceNote}</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <Card key={f.question}>
                <CardContent className="px-6">
                  <h3 className="font-semibold">{f.question}</h3>
                  <p className="mt-2 text-muted-foreground">{f.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {siblingLinks.length > 0 && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold mb-4">Related Services and Areas</h2>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {siblingLinks.map((l) => (
                <Link key={l.href} to={l.href} className="text-sm text-primary hover:underline cursor-pointer">{l.label}</Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
