/**
 * LocalityNearMeSection — rich near-me section for locality/sector/area pages.
 *
 * Automatically generated from the page slug via getLocalityInfo().
 * No manual config needed per page — all existing locality pages benefit immediately.
 *
 * Supports B2B/corporate copy when `isCorporate` is true (e.g. office-chair-repair).
 */

import { CheckCircle2, MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { getLocalityInfo, type LocalityInfo } from "@/lib/seoConfigs/localities.ts";
import { selectFaqs, type SelectedFaq } from "@/lib/seoConfigs/faq-engine.ts";

// ─── Trust signals ───────────────────────────────────────────────────────────

const TRUST_SIGNALS = [
  "5,000+ Sofas Repaired",
  "10+ Years Experience",
  "Same-Day Home Visits",
  "6-Month Warranty",
  "Free Inspection",
  "WhatsApp Booking",
] as const;

const CORPORATE_TRUST_SIGNALS = [
  "5,000+ Chairs Repaired",
  "GST Invoice Provided",
  "Same-Day Onsite Service",
  "6-Month Warranty",
  "AMC Plans Available",
  "Bulk Discounts",
] as const;

// ─── Service category ──────────────────────────────────────────────────────

export type ServiceCategory = "sofa" | "furniture" | "recliner" | "upholstery" | "chair" | "corporate";

/** Derive the page's service from its slug so pages never show another service's copy. */
export function inferServiceLabel(slug: string): string {
  if (slug.startsWith("recliner-upholstery")) return "Recliner Upholstery";
  if (slug.startsWith("recliner")) return "Recliner Repair";
  if (slug.startsWith("sofa-upholstery") || slug.startsWith("sofa-reupholstery")) return "Sofa Upholstery";
  if (slug.startsWith("chair-upholstery")) return "Chair Upholstery";
  if (slug.startsWith("chair-repair")) return "Chair Repair";
  if (slug.startsWith("furniture-polishing")) return "Furniture Polishing";
  if (slug.startsWith("furniture-repair")) return "Furniture Repair";
  return "Sofa Repair";
}

function resolveCategory(serviceLabel: string, isCorporate: boolean): ServiceCategory {
  if (isCorporate) return "corporate";
  const l = serviceLabel.toLowerCase();
  if (l.includes("recliner")) return "recliner";
  if (l.includes("upholster")) return "upholstery";
  if (l.includes("chair")) return "chair";
  if (l.includes("furniture")) return "furniture";
  return "sofa";
}

type CategoryCopy = {
  noun: string;
  para1: (name: string, city: string, propertyType: string, responseTime: string) => string;
  para2: (name: string) => string;
  landmarkText: (city: string) => string;
  landmarkHref: (city: string, fallback: string) => string;
  pricing: string;
  trust: string;
};

/** Cities that actually have a city-level page for each service (avoids broken links). */
const CITY_PAGES: Record<string, readonly string[]> = {
  "recliner-repair": ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad", "chandigarh", "mohali", "panchkula"],
  "sofa-upholstery": ["delhi", "gurgaon", "noida", "faridabad", "chandigarh", "mohali", "panchkula"],
  "chair-repair": ["delhi", "gurgaon", "faridabad"],
  "furniture-repair": ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad", "chandigarh", "mohali", "panchkula"],
};

function cityHref(prefix: string, city: string, fallback: string): string {
  const c = city.toLowerCase();
  return CITY_PAGES[prefix]?.includes(c) ? `/${prefix}-${c}` : fallback;
}

const CATEGORY_COPY: Record<Exclude<ServiceCategory, "sofa" | "corporate">, CategoryCopy> = {
  furniture: {
    noun: "furniture repair",
    para1: (name, city, propertyType, rt) =>
      `Searching for furniture repair near me in ${name}? FurniRevive sends a skilled carpenter to your ${propertyType} within ${rt} across ${city}. We arrive with tools, wood filler, hardware, fabric and foam to repair sofas, beds, wardrobes, dining tables, chairs, cabinets and TV units at your doorstep — no pickup, no workshop, no wait. Most jobs are finished in a single same-day visit.`,
    para2: (name) =>
      `Common furniture problems we fix in ${name} include loose joints, broken legs, wobbly chairs, sagging bed frames, misaligned wardrobe doors, broken hinges, scratched or faded wood polish, and worn upholstery. Furniture repair cost in ${name} starts at ₹599 with a free inspection — no obligation, no hidden charges. Call or WhatsApp to book and get a 6-month warranty on every job.`,
    landmarkText: (city) => `furniture repair in ${city}`,
    landmarkHref: (city, fb) => cityHref("furniture-repair", city, fb),
    pricing: "Transparent pricing starting ₹599 with a free doorstep inspection before any work begins.",
    trust: "10,000+ Repairs Done",
  },
  recliner: {
    noun: "recliner repair",
    para1: (name, city, propertyType, rt) =>
      `Need recliner repair near me in ${name}? FurniRevive's recliner technicians reach your ${propertyType} within ${rt} across ${city}. We bring replacement mechanisms, cables, motors, control handsets, foam and tools to fix manual and motorised recliners on the spot — no pickup and no workshop. Stuck footrests, jammed backrests and dead motors are usually solved in a single visit.`,
    para2: (name) =>
      `Common recliner problems we fix in ${name} include a footrest that will not close, a backrest that will not lock, a noisy or jammed mechanism, a dead or slow motor, control handset and wiring faults, and sagging seat foam. Recliner repair cost in ${name} starts at ₹1,499 for manual mechanisms with a free inspection. Call or WhatsApp to book — every repair carries a 6-month warranty.`,
    landmarkText: (city) => `recliner repair in ${city}`,
    landmarkHref: (city, fb) => cityHref("recliner-repair", city, fb),
    pricing: "Transparent pricing starting ₹1,499 with a free doorstep inspection before any work begins.",
    trust: "Manual & Motorised Recliners",
  },
  upholstery: {
    noun: "upholstery",
    para1: (name, city, propertyType, rt) =>
      `Looking for upholstery near me in ${name}? FurniRevive brings fabric and leather swatches to your ${propertyType} within ${rt} across ${city}, so you choose the material at home. Our craftsmen then measure, cut and fit new covers and foam on site — no pickup, no workshop. We work with velvet, linen, cotton blends, microfibre, leatherette and genuine leather.`,
    para2: (name) =>
      `Reupholstery in ${name} suits sofas with worn, torn or outdated fabric and a sound frame. We replace covers, renew foam, and refresh piping and stitching to match your room. Upholstery in ${name} starts at ₹2,000 per seat with a free inspection and written quote. Call or WhatsApp to book — the work carries a 6-month warranty.`,
    landmarkText: (city) => `sofa upholstery in ${city}`,
    landmarkHref: (city, fb) => cityHref("sofa-upholstery", city, fb),
    pricing: "Transparent pricing starting ₹2,000 per seat with free fabric selection at your doorstep.",
    trust: "500+ Fabric Options",
  },
  chair: {
    noun: "chair repair",
    para1: (name, city, propertyType, rt) =>
      `Searching for chair repair near me in ${name}? FurniRevive reaches your ${propertyType} within ${rt} across ${city} with gas lifts, casters, armrests, foam and fabric. We repair office, dining, gaming and study chairs at your doorstep — no pickup and no workshop.`,
    para2: (name) =>
      `Common chair problems we fix in ${name} include a sinking gas lift, broken wheels, loose armrests, wobbly legs, flat seat foam and torn upholstery. Chair repair cost in ${name} starts at ₹599 with a free inspection. Call or WhatsApp to book — every repair carries a 6-month warranty.`,
    landmarkText: (city) => `chair repair in ${city}`,
    landmarkHref: (city, fb) => cityHref("chair-repair", city, fb),
    pricing: "Transparent pricing starting ₹599 with a free doorstep inspection before any work begins.",
    trust: "Office & Home Chairs",
  },
};

// ─── Content variation helpers ─────────────────────────────────────────────

/** Deterministic 0–3 variant from slug (no randomness — stable on every render) */
function slugVariant(slug: string): 0 | 1 | 2 | 3 {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) & 0xff;
  return (h % 4) as 0 | 1 | 2 | 3;
}

function buildPara1(info: LocalityInfo, variant: 0 | 1 | 2 | 3, category: ServiceCategory): string {
  const { name, city, propertyType, responseTime } = info;
  const isCorporate = category === "corporate";
  if (category !== "sofa" && !isCorporate) return CATEGORY_COPY[category].para1(name, city, propertyType, responseTime);

  if (isCorporate) {
    return `Searching for reliable office chair repair near me in ${name}? FurniRevive provides on-site corporate chair repair for offices, startups and co-working spaces in ${city}. Our technician reaches your premises in ${responseTime} with all parts — gas lifts, casters, armrests, mesh panels, and executive chair components. Same-day repair for hydraulic cylinders, wheels, armrests, and fabric/leather seating.`;
  }

  const options = [
    `When ${name} residents search for sofa repair near me, fast response is what separates a good service from a great one. FurniRevive's local sofa technicians are stationed across ${city} and reach your ${propertyType} within ${responseTime}. We arrive with foam, fabric, springs, and tools for complete doorstep sofa repair — no pickup, no workshop, no wait. Our team handles fabric sofas, leather sofas, wooden sofas, recliners, sofa cum beds, and full upholstery as home sofa repair in a single visit.`,
    `Searching for reliable sofa repair near me in ${name}? FurniRevive provides doorstep sofa repair at your ${propertyType} with a ${responseTime} technician response across ${city}. We bring everything needed — high-density foam, matching fabric, recliner parts, webbing springs — to complete home sofa repair right in your living room. From torn fabric and sagging cushions to cracked leather and broken frames, we repair all sofa types: fabric, leather, wooden, recliner, and sofa cum bed.`,
    `For ${name} residents who need a trusted sofa repair service, FurniRevive offers doorstep sofa repair with a local sofa technician stationed near you in ${city}. Our team reaches your ${propertyType} within ${responseTime} fully equipped for same-day sofa repair — foam replacement, re-upholstery, spring repair, and frame tightening all done as home sofa repair on-site. We service fabric sofas, leather sofas, recliners, wooden sofas, and sofa cum beds without moving your furniture anywhere.`,
    `FurniRevive is the local sofa repair service ${name} households trust — with technicians across ${city} who reach your ${propertyType} within ${responseTime}. Every job is completed as doorstep sofa repair: our craftsmen arrive at your door with foam, fabric swatches, recliner spares, and tools, delivering home sofa repair without the hassle of transportation. We repair fabric sofas, leather sofas, wooden sofas, sofa cum beds, recliners, and full upholstery sets in a single same-day visit.`,
  ];
  return options[variant];
}

function buildPara2(info: LocalityInfo, variant: 0 | 1 | 2 | 3, category: ServiceCategory): string {
  const { name } = info;
  const isCorporate = category === "corporate";
  if (category !== "sofa" && !isCorporate) return CATEGORY_COPY[category].para2(name);

  if (isCorporate) {
    return `We handle all common office chair issues in ${name}: gas lift replacement, hydraulic cylinder repair, caster wheel replacement, armrest repair, mesh back panel repair, and executive chair restoration. Office chair repair price in ${name} starts at ₹599 per chair with bulk discounts for 10+ chairs. GST invoice provided. Book a corporate chair technician near you — 6-month warranty on every repair.`;
  }

  const options = [
    `Common issues we fix in ${name} include sofa sagging from worn foam, torn fabric upholstery, sofa frame repair for wobbly joints, sofa spring repair for collapsed seating, and leather sofa repair for peeling or cracked surfaces. Sofa repair cost in ${name} starts at ₹500 with a free inspection — no obligation, no hidden charges. Call or WhatsApp to book the best sofa repair in ${name} and get a 6-month warranty on every job.`,
    `Whether your sofa has a sagging seat from flat foam, needs sofa spring repair, sofa frame repair, recliner mechanism work, or torn sofa repair for fabric or leather, our same-day sofa repair service in ${name} handles it all. Sofa repair price in ${name} starts at ₹500 with a free doorstep inspection included. Book a sofa technician near you today — all repairs come with a 6-month warranty.`,
    `We handle all common sofa problems in ${name}: sofa sagging repair, sofa spring repair, sofa frame repair, torn sofa repair, leather sofa repair, recliner repair near me, and wooden sofa repair. Sofa repair cost in ${name} starts at ₹500 and includes a free inspection. FurniRevive is rated the best sofa repair service by hundreds of ${name} customers — every repair is backed by a 6-month warranty.`,
    `From sofa sagging and sofa spring repair to sofa frame repair and leather sofa repair, our same-day sofa repair covers every issue in ${name} starting at ₹500. Free doorstep inspection before any work begins — no surprise bills. WhatsApp us or call now to book a local sofa technician near you in ${name}; we provide a 6-month warranty on every repair.`,
  ];
  return options[variant];
}

// ─── Component ─────────────────────────────────────────────────────────────

export interface LocalityNearMeSectionProps {
  /** The page's slug — used to derive all locality content */
  slug: string;
  /** Service label shown in headings (inferred from the slug when omitted) */
  serviceLabel?: string;
  /** When true, renders B2B / corporate copy (e.g. office chair repair) */
  isCorporate?: boolean;
  /**
   * GSC intent boosts — pass real Search Console impression multipliers per intent group.
   * E.g. { "leather_repair": 1.8, "pricing": 1.3 }
   * When omitted, selection falls back to profile-based scoring only.
   */
  gscBoosts?: Record<string, number>;
  /** Whether to render the FAQ block and FAQ JSON-LD (default true) */
  showFaqs?: boolean;
  /** Set false when the host page already emits its own FAQPage schema (avoids duplicates) */
  emitFaqSchema?: boolean;
}

export default function LocalityNearMeSection({
  slug,
  serviceLabel: serviceLabelProp,
  isCorporate = false,
  gscBoosts,
  showFaqs = true,
  emitFaqSchema = true,
}: LocalityNearMeSectionProps) {
  const serviceLabel = serviceLabelProp ?? inferServiceLabel(slug);
  const category = resolveCategory(serviceLabel, isCorporate);
  const info: LocalityInfo = getLocalityInfo(slug);
  const variant = slugVariant(slug);
  const faqs: SelectedFaq[] = selectFaqs(info, { count: 7, gscBoosts, category });
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I need ${serviceLabel.toLowerCase()} near me in ${info.name}. Please share a quote.`,
  )}`;

  const sectionId = `locality-near-me-${slug}`;
  const trustSignals =
    category === "corporate"
      ? CORPORATE_TRUST_SIGNALS
      : category === "sofa"
        ? TRUST_SIGNALS
        : ([CATEGORY_COPY[category].trust, ...TRUST_SIGNALS.slice(1)] as readonly string[]);

  // Landmark paragraph link details
  const copy = category === "sofa" || category === "corporate" ? null : CATEGORY_COPY[category];
  const landmarkLinkText = copy
    ? copy.landmarkText(info.city)
    : isCorporate
      ? `office chair repair in ${info.city}`
      : `sofa repair in ${info.city}`;
  const landmarkLinkHref = copy
    ? copy.landmarkHref(info.city, info.parentServiceSlug)
    : isCorporate
      ? `/office-chair-repair-${info.city.toLowerCase()}`
      : info.parentServiceSlug;
  const landmarkPricing = copy
    ? copy.pricing
    : isCorporate
      ? "Transparent pricing starting ₹599 per chair with GST invoice and AMC plans available."
      : "Transparent pricing starting ₹500 with a free doorstep inspection before any work begins.";

  return (
    <section
      className="py-12 lg:py-18 bg-primary/5"
      aria-labelledby={sectionId}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* H2 */}
        <div className="flex items-start gap-3 mb-4">
          <MapPin className="size-6 text-primary shrink-0 mt-1" aria-hidden="true" />
          <h2
            id={sectionId}
            className="text-2xl sm:text-3xl font-serif font-bold"
          >
            {serviceLabel} Near Me in {info.name}
          </h2>
        </div>

        {/* Response time — surfaced early */}
        <p className="ml-9 mb-5 text-sm font-semibold text-primary flex items-center gap-2">
          <Clock className="size-4 shrink-0" aria-hidden="true" />
          A FurniRevive technician reaches {info.name} within {info.responseTime}.
        </p>

        {/* Para 1 — near me, doorstep, home, local, sofa/chair types */}
        <p className="text-foreground/90 leading-relaxed text-base lg:text-lg ml-9 mb-4">
          {buildPara1(info, variant, category)}
        </p>

        {/* Para 2 — problem keywords, cost, warranty, CTA nudge */}
        <p className="text-foreground/90 leading-relaxed text-base lg:text-lg ml-9 mb-5">
          {buildPara2(info, variant, category)}
        </p>

        {/* Trust signal chips */}
        <div
          className="flex flex-wrap gap-2.5 ml-9 mb-8"
          role="list"
          aria-label="Service highlights"
        >
          {trustSignals.map((signal) => (
            <span
              key={signal}
              role="listitem"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
            >
              <CheckCircle2 className="size-3.5" aria-hidden="true" />
              {signal}
            </span>
          ))}
        </div>

        {/* Areas We Serve */}
        <div className="ml-9 mb-8">
          <h3 className="text-base font-semibold text-foreground mb-3">
            {serviceLabel} Service in {info.name} and Nearby Areas
          </h3>
          <div
            className="flex flex-wrap gap-2"
            role="list"
            aria-label={`Areas near ${info.name} we cover`}
          >
            {info.adjacentAreas.map((area) => (
              <span
                key={area}
                role="listitem"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/60 border border-border rounded-full text-sm text-foreground"
              >
                <MapPin className="size-3 text-primary" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Landmark italic para with internal links */}
        <p className="text-foreground/80 leading-relaxed text-base italic ml-9 mb-8">
          Fastest response near {info.landmarks.join(", ")}. Our locally stationed technicians
          complete{" "}
          <Link
            to={landmarkLinkHref}
            className="text-primary underline underline-offset-2 not-italic hover:text-primary/80"
          >
            {landmarkLinkText}
          </Link>{" "}
          every day — at apartments, independent houses, offices, and restaurants alike.
          {" "}{landmarkPricing}
        </p>

        {/* FAQs */}
        {showFaqs !== false && (
        <div className="ml-9">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Frequently Asked Questions — {info.name}
          </h3>
          <dl className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-lg border border-border bg-background px-5 py-4"
              >
                <dt className="font-semibold text-foreground text-sm mb-1.5">
                  {faq.question}
                </dt>
                <dd className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
        )}

        {/* CTA strip */}
        <div className="ml-9 mt-8 flex flex-wrap gap-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label={`Call FurniRevive for ${serviceLabel.toLowerCase()} in ${info.name}`}
          >
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer hover:opacity-90 transition-opacity">
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp FurniRevive for ${serviceLabel.toLowerCase()} in ${info.name}`}
          >
            <span className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer hover:bg-[#20bd5a] transition-colors">
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </span>
          </a>
        </div>
      </div>

      {/* FAQ JSON-LD schema — scoped to this section */}
      {showFaqs !== false && emitFaqSchema && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
      )}
    </section>
  );
}
