import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneCall, MessageCircle, CheckCircle2, ChevronRight, MapPin,
  Wrench, Clock, Star, AlertTriangle, Hammer, Paintbrush,
} from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { setPageMetadata } from "@/lib/metadata.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import PremiumKitchenGallery from "./PremiumKitchenGallery.tsx";
import { KITCHEN_GALLERY_IMAGES } from "./kitchen-gallery-images.ts";
import { WHY_CHOOSE_CARDS } from "../_data/kitchen-why-choose.ts";
import type { KitchenRenovationEntry, RenovationType } from "@/lib/registry/kitchen-renovation-registry.ts";
import { NearMeCTA } from "@/components/kitchen-near-me-cta.tsx";

// ─── Helpers ────────────────────────────────────────────────────────────────

const CANONICAL_ORIGIN = "https://furnirevive.com";

function fmt(n: number): string {
  return n >= 100000 ? `₹${(n / 100000).toFixed(1).replace(".0", "")}L` : `₹${(n / 1000).toFixed(0)}K`;
}

function injectJsonLd(data: object): HTMLScriptElement {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
  return el;
}

// ─── Variant config ──────────────────────────────────────────────────────────

type VariantConfig = {
  badgeClass: string;
  badgeLabel: string;
  h1: (loc: string) => string;
  sub: string;
  cta: (loc: string) => string;
  ctaSection: (loc: string) => string;
  variantTitle: string;
  urlPrefix: string;
};

const VARIANT: Record<RenovationType, VariantConfig> = {
  renovation: {
    badgeClass: "bg-amber-700 text-white",
    badgeLabel: "Full Renovation",
    h1: (loc) => `Modular Kitchen Renovation in ${loc}`,
    sub: "Complete kitchen replacement — tear out the old, install a new custom modular kitchen.",
    cta: () => "Book Renovation Consultation",
    ctaSection: (loc) => `Start Your Kitchen Renovation in ${loc}`,
    variantTitle: "Modular Kitchen Renovation",
    urlPrefix: "modular-kitchen-renovation",
  },
  remodeling: {
    badgeClass: "bg-stone-600 text-white",
    badgeLabel: "Kitchen Remodeling",
    h1: (loc) => `Kitchen Remodeling in ${loc}`,
    sub: "Upgrade what matters — new layout, cabinets, countertops. Keep what works.",
    cta: () => "Get Remodeling Estimate",
    ctaSection: (loc) => `Get a Remodeling Estimate for Your ${loc} Kitchen`,
    variantTitle: "Kitchen Remodeling",
    urlPrefix: "kitchen-remodeling",
  },
  makeover: {
    badgeClass: "bg-green-700 text-white",
    badgeLabel: "Kitchen Makeover",
    h1: (loc) => `Kitchen Makeover in ${loc}`,
    sub: "Refresh your kitchen without a full renovation — new shutters, laminate, and hardware.",
    cta: () => "Get Makeover Quote",
    ctaSection: (loc) => `Refresh Your Kitchen in ${loc} — Quick & Affordable`,
    variantTitle: "Kitchen Makeover",
    urlPrefix: "kitchen-makeover",
  },
};

// ─── Cost tables ─────────────────────────────────────────────────────────────

const COST_TABLE: Record<RenovationType, { item: string; cost: string }[]> = {
  renovation: [
    { item: "Kitchen design & measurement", cost: "₹0 (Free)" },
    { item: "Demolition & disposal", cost: "₹8,000–₹15,000" },
    { item: "New carcass (BWR plywood)", cost: "₹40,000–₹80,000" },
    { item: "Shutter & finish (acrylic/PU)", cost: "₹50,000–₹1.2L" },
    { item: "Countertop (granite/quartz)", cost: "₹15,000–₹45,000" },
    { item: "Plumbing & electrical", cost: "₹10,000–₹25,000" },
    { item: "Hardware (hinges, channels)", cost: "₹12,000–₹35,000" },
    { item: "Installation & finishing", cost: "₹15,000–₹30,000" },
  ],
  remodeling: [
    { item: "Layout change & replanning", cost: "₹0 (Free assessment)" },
    { item: "Cabinet replacement (selected)", cost: "₹30,000–₹70,000" },
    { item: "New countertop", cost: "₹12,000–₹35,000" },
    { item: "Plumbing relocation (if needed)", cost: "₹8,000–₹20,000" },
    { item: "Hardware upgrade", cost: "₹8,000–₹25,000" },
  ],
  makeover: [
    { item: "Shutter replacement / refacing", cost: "₹18,000–₹50,000" },
    { item: "New laminate / paint / wrap", cost: "₹6,000–₹18,000" },
    { item: "Hardware & handle replacement", cost: "₹4,000–₹12,000" },
  ],
};

// ─── Process timeline ────────────────────────────────────────────────────────

type ProcessStep = { step: string };
const PROCESS: Record<RenovationType, { steps: ProcessStep[]; timeline: string }> = {
  renovation: {
    steps: [
      { step: "Site Visit & Measurement" },
      { step: "Design & 3D Rendering" },
      { step: "Material Selection" },
      { step: "Demolition & Disposal" },
      { step: "Carcass Installation" },
      { step: "Shutter & Surface Fitting" },
      { step: "Hardware & Appliances" },
      { step: "Final Inspection & Handover" },
    ],
    timeline: "12–18 days",
  },
  remodeling: {
    steps: [
      { step: "Site Assessment" },
      { step: "Scope Planning & Design" },
      { step: "Selective Demolition" },
      { step: "New Cabinet & Counter Installation" },
      { step: "Hardware & Final Touches" },
    ],
    timeline: "7–10 days",
  },
  makeover: {
    steps: [
      { step: "Measurement & Material Selection" },
      { step: "Surface Application & Shutter Swap" },
      { step: "Hardware Fitting & Cleanup" },
    ],
    timeline: "3–5 days",
  },
};

// ─── Before / After scenarios ────────────────────────────────────────────────

type Scenario = { before: string; after: string; days: string };
const SCENARIOS: Record<RenovationType, Scenario[]> = {
  renovation: [
    { before: "10-year-old parallel kitchen", after: "open modular layout with island", days: "12–18 days" },
    { before: "Carpenter-made cabinets", after: "premium acrylic modular with quartz counter", days: "14–18 days" },
    { before: "Damaged carcass + peeling finish", after: "full BWR plywood rebuild", days: "12–16 days" },
  ],
  remodeling: [
    { before: "Straight kitchen", after: "L-shape with more storage", days: "8–10 days" },
    { before: "Old countertop + partial cabinets", after: "new granite + selected cabinet upgrade", days: "7–9 days" },
    { before: "Blocked corner space", after: "magic corner unit + pull-out drawers", days: "5–7 days" },
  ],
  makeover: [
    { before: "Faded laminate shutters", after: "fresh membrane finish", days: "3–4 days" },
    { before: "Old knob handles", after: "sleek handleless profile + soft-close", days: "1–2 days" },
    { before: "Yellowed PVC shutters", after: "new acrylic overlay + hardware refresh", days: "3–5 days" },
  ],
};

// ─── Trigger checklist ───────────────────────────────────────────────────────

const TRIGGERS: Record<RenovationType, string[]> = {
  renovation: [
    "Cabinet doors warping/cracking",
    "Carcass damaged by moisture/termites",
    "Layout no longer suits your cooking style",
    "Countertop chipped or stained beyond repair",
    "Major appliance upgrade requiring new cutouts",
    "Selling/renting — higher property value",
  ],
  remodeling: [
    "Need more storage but carcass is fine",
    "Layout feels cramped after adding appliances",
    "Single countertop crack or aging surface",
    "Planning to upgrade to gas+electric combination",
    "Adding island or breakfast counter",
    "Changing kitchen from closed to semi-open",
  ],
  makeover: [
    "Shutters looking faded or dated",
    "Hardware squeaking / soft-close broken",
    "Surface scratches on laminate doors",
    "Quick refresh before Diwali / a special event",
    "Rental property needing a cost-effective upgrade",
    "Shutter peeling but carcass is perfectly fine",
  ],
};

// ─── Props ───────────────────────────────────────────────────────────────────

type Props = {
  entry: KitchenRenovationEntry;
  faqs: readonly { q: string; a: string }[];
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function KitchenRenovationTemplate({ entry, faqs }: Props) {
  const { renovationType: rt, localityName, localitySlug, cityName, citySlug, priceMin, priceMax } = entry;
  const vc = VARIANT[rt];
  const canonical = `${CANONICAL_ORIGIN}/${entry.urlSlug}`;
  const galleryFilter = rt === "makeover" ? "laminate" : "acrylic";
  const altLocalityLink = rt === "renovation"
    ? { label: `Kitchen Remodeling in ${localityName}`, href: `/kitchen-remodeling-${localitySlug}` }
    : { label: `Affordable Modular Kitchen in ${localityName}`, href: `/affordable-modular-kitchen-${localitySlug}` };

  const variantIcon = rt === "renovation" ? <Hammer className="w-4 h-4" /> : rt === "remodeling" ? <Wrench className="w-4 h-4" /> : <Paintbrush className="w-4 h-4" />;

  // SEO
  useEffect(() => {
    const title = `${vc.variantTitle} in ${localityName} | FurniRevive`;
    const desc = `${vc.variantTitle} in ${localityName}, ${cityName}. ${fmt(priceMin)}–${fmt(priceMax)} all-in cost, free site visit, factory-made cabinets, 10-year warranty. Call FurniRevive today.`;

    const cleanupMeta = setPageMetadata({
      title,
      description: desc,
      canonical,
      ogUrl: canonical,
    });

    const schemas: HTMLScriptElement[] = [];

    schemas.push(injectJsonLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${CANONICAL_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Modular Kitchen", item: `${CANONICAL_ORIGIN}/modular-kitchen` },
        { "@type": "ListItem", position: 3, name: cityName, item: `${CANONICAL_ORIGIN}/modular-kitchen-${citySlug}` },
        { "@type": "ListItem", position: 4, name: `${vc.variantTitle} in ${localityName}`, item: canonical },
      ],
    }));

    schemas.push(injectJsonLd({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }));

    schemas.push(injectJsonLd({
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${vc.variantTitle} in ${localityName}`,
      provider: { "@type": "LocalBusiness", name: "FurniRevive", url: CANONICAL_ORIGIN },
      areaServed: { "@type": "Place", name: localityName },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: priceMin,
          maxPrice: priceMax,
          priceCurrency: "INR",
        },
      },
    }));

    return () => {
      cleanupMeta();
      schemas.forEach((el) => el.remove());
    };
  }, [canonical, cityName, citySlug, localityName, priceMin, priceMax, vc.variantTitle, faqs]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-stone-900 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-4 ${vc.badgeClass}`}>
            {variantIcon} {vc.badgeLabel}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">{vc.h1(localityName)}</h1>
          <p className="text-stone-300 text-lg mb-6 max-w-2xl">{vc.sub}</p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-5 py-2.5 rounded-lg cursor-pointer transition-colors">
              <PhoneCall className="w-4 h-4" /> {vc.cta(localityName)}
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-2.5 rounded-lg cursor-pointer transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
          <div className="mt-5 flex items-center gap-1.5 text-stone-400 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Serving {localityName}, {cityName} &amp; nearby localities</span>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <KitchenTrustStrip />

      {/* ── Stats bar ── */}
      <section className="bg-amber-700 text-white py-5 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {([["Project Cost", `${fmt(priceMin)} – ${fmt(priceMax)}`], ["Timeline", PROCESS[rt].timeline], ["Warranty", "10 Years"], ["Site Visit", "Free"]] as const).map(([label, val]) => (
            <div key={label}><div className="text-lg font-bold">{val}</div><div className="text-amber-200 text-xs">{label}</div></div>
          ))}
        </div>
      </section>

      {/* ── Cost breakdown ── */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Cost Breakdown</h2>
          <p className="text-muted-foreground text-sm mb-6">Typical costs for {vc.variantTitle.toLowerCase()} in {localityName}. Exact quote after free site visit.</p>
          <div className="border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-stone-100 dark:bg-stone-800">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Item</th>
                  <th className="text-right px-4 py-3 font-semibold">Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                {COST_TABLE[rt].map((row, i) => (
                  <tr key={i} className="border-t odd:bg-background even:bg-stone-50 dark:even:bg-stone-900/40">
                    <td className="px-4 py-3">{row.item}</td>
                    <td className="px-4 py-3 text-right font-medium text-amber-700 dark:text-amber-400">{row.cost}</td>
                  </tr>
                ))}
                <tr className="border-t bg-amber-50 dark:bg-amber-950/30 font-semibold">
                  <td className="px-4 py-3">Total Estimate</td>
                  <td className="px-4 py-3 text-right text-amber-700 dark:text-amber-400">{fmt(priceMin)} – {fmt(priceMax)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Process timeline ── */}
      <section className="py-12 px-4 bg-stone-50 dark:bg-stone-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-1">Our Process</h2>
          <p className="text-muted-foreground text-sm mb-7 flex items-center gap-1.5"><Clock className="w-4 h-4" /> Typical completion: <strong>{PROCESS[rt].timeline}</strong></p>
          <ol className="relative border-l border-amber-300 dark:border-amber-700 pl-6 space-y-6">
            {PROCESS[rt].steps.map((s, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[1.65rem] top-0.5 w-5 h-5 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                <p className="font-semibold text-sm">{s.step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Before &amp; After Transformations</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {SCENARIOS[rt].map((sc, i) => (
              <div key={i} className="border rounded-xl p-4 bg-stone-50 dark:bg-stone-900/40 flex flex-col gap-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Before</span>
                <p className="text-sm font-medium">{sc.before}</p>
                <span className="text-amber-600 font-bold text-lg leading-none">→</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">After</span>
                <p className="text-sm font-medium">{sc.after}</p>
                <span className="mt-1 self-start inline-flex items-center gap-1 text-xs bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full">
                  <Clock className="w-3 h-3" /> Approx. {sc.days}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why renovate now ── */}
      <section className="py-12 px-4 bg-stone-50 dark:bg-stone-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-600" /> Signs It's Time for a {vc.variantTitle}</h2>
          <p className="text-muted-foreground text-sm mb-6">If you're experiencing any of the following, it's time to act.</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {TRIGGERS[rt].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Kitchen Work</h2>
          <PremiumKitchenGallery images={KITCHEN_GALLERY_IMAGES} filter={galleryFilter} />
        </div>
      </section>

      {/* ── Why FurniRevive ── */}
      <section className="py-14 px-4 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Why Choose FurniRevive?</h2>
          <p className="text-stone-400 text-sm mb-8">Factory precision, honest pricing, and a 10-year warranty — that's how we work.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE_CARDS.map((c) => (
              <div key={c.id} className="bg-stone-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="font-semibold text-sm">{c.title}</span>
                </div>
                <p className="text-stone-400 text-xs leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cross-links ── */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-5">Related Pages</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {[
              { label: `Modular Kitchen in ${localityName}`, href: `/modular-kitchen-${localitySlug}` },
              { label: `Modular Kitchen in ${cityName}`, href: `/modular-kitchen-${citySlug}` },
              { label: "All Modular Kitchens Delhi NCR", href: "/modular-kitchen" },
              { label: `Furniture Repair in ${cityName}`, href: `/furniture-repair-${citySlug}` },
              { label: `Carpenter Services in ${cityName}`, href: `/carpenter-${citySlug}` },
              altLocalityLink,
              { label: "Kitchen Budget Guide", href: `/affordable-modular-kitchen-${localitySlug}` },
            ].map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 hover:underline">
                  <ChevronRight className="w-4 h-4 shrink-0" />{link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Nearby localities ── */}
      {entry.nearbyLocalities.length > 0 && (
        <section className="py-10 px-4 bg-stone-50 dark:bg-stone-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-600" /> Nearby Areas We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {entry.nearbyLocalities.map((nearbySlug) => (
                <Link
                  key={nearbySlug}
                  to={`/${vc.urlPrefix}-${nearbySlug}`}
                  className="text-sm border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors cursor-pointer"
                >
                  {nearbySlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      {faqs.length > 0 && (
        <section className="py-12 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((f, i) => (
                <div key={i} className="border-b pb-5">
                  <h3 className="font-semibold text-sm mb-1">{f.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-amber-700 text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance">{vc.ctaSection(localityName)}</h2>
          <p className="text-amber-100 mb-7">Free site visit · Written quote · {fmt(priceMin)}–{fmt(priceMax)} all-in</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 bg-white text-amber-700 font-semibold px-6 py-3 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors">
              <PhoneCall className="w-4 h-4" /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg cursor-pointer transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <NearMeCTA variant="compact" pageType="renovation" />
      <HomeServicesSection service="modular-kitchen" pageType="locality" cityName={cityName} />
      <KitchenRelatedBlogs slug={entry.urlSlug} />
      <Footer />
    </div>
  );
}
