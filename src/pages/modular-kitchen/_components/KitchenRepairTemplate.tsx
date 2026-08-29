/**
 * Kitchen Repair Template — Problem diagnosis / repair / replacement / cost / maintenance pages
 * pageKind "problem" → 10-section repair guide
 * pageKind "hub"     → grouped directory of all repair pages
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setPageMetadata } from "@/lib/metadata.ts";
import {
  Wrench,
  AlertTriangle,
  CheckCircle,
  Clock,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Phone,
  MessageCircle,
  Hammer,
  Settings,
  Droplets,
  Package,
  Zap,
  Layers,
  GripVertical,
  RectangleHorizontal,
  Search,
  Archive,
  DoorOpen,
  Cog,
  Star,
} from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import type { KitchenRepairEntry, RepairIntent, RepairDomain } from "@/lib/registry/kitchen-repair-registry.ts";
import { NearMeCTA } from "@/components/kitchen-near-me-cta.tsx";
import { KITCHEN_REPAIR_REGISTRY } from "@/lib/registry/kitchen-repair-registry.ts";

const CANONICAL_ORIGIN = "https://furnirevive.com";

function slugToLabel(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function injectJsonLd(data: object): HTMLScriptElement {
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
  return el;
}

function fmt(n: number): string {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1).replace(".0", "")}L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(1).replace(".0", "")}K`;
  return `₹${n}`;
}

const SEVERITY_CONFIG = {
  minor:    { label: "Minor Issue",   badgeClass: "bg-green-600/80 text-white",  dotClass: "bg-green-500",  icon: CheckCircle },
  moderate: { label: "Moderate",      badgeClass: "bg-amber-500/80 text-white",  dotClass: "bg-amber-500",  icon: AlertTriangle },
  major:    { label: "Major Issue",   badgeClass: "bg-orange-600/80 text-white", dotClass: "bg-orange-500", icon: AlertTriangle },
  critical: { label: "Critical",      badgeClass: "bg-red-600/80 text-white",    dotClass: "bg-red-500",    icon: Zap },
} as const;

const URGENCY_CONFIG = {
  immediate:       { label: "Fix Immediately",     cls: "text-red-600 font-semibold" },
  "within-a-week": { label: "Fix Within a Week",   cls: "text-amber-600 font-semibold" },
  routine:         { label: "Routine Maintenance", cls: "text-green-600 font-semibold" },
} as const;

const STEP_TITLES: Record<RepairIntent, string> = {
  diagnosis:   "How to Diagnose the Problem",
  repair:      "Step-by-Step Repair Guide",
  replacement: "How to Replace the Component",
  cost:        "Cost Breakdown",
  maintenance: "Maintenance Schedule & Tips",
  hub:         "",
};

type HubDomainGroup = { domain: RepairDomain; label: string; icon: typeof Wrench };

const HUB_DOMAIN_GROUPS: HubDomainGroup[] = [
  { domain: "door-shutter",    label: "Door & Shutter Problems", icon: DoorOpen },
  { domain: "hinges",          label: "Hinge Problems",          icon: Cog },
  { domain: "drawer-storage",  label: "Drawer & Storage",        icon: Archive },
  { domain: "laminate-surface",label: "Surface Problems",        icon: Layers },
  { domain: "acrylic-surface", label: "Acrylic Surface",         icon: Layers },
  { domain: "water-damage",    label: "Water Damage",            icon: Droplets },
  { domain: "structural",      label: "Structural Issues",       icon: Hammer },
  { domain: "handle-hardware", label: "Hardware",                icon: GripVertical },
  { domain: "countertop-edge", label: "Countertop",              icon: RectangleHorizontal },
];

function generateSteps(entry: KitchenRepairEntry): { title: string; desc: string }[] {
  const comp = entry.affectedComponents[0] ?? "component";
  const material = entry.affectedMaterials[0] ?? "material";

  switch (entry.intent) {
    case "diagnosis":
      return [
        { title: "Visual Inspection", desc: `Examine the ${comp} for visible signs of damage, misalignment, or wear. Check surrounding areas for secondary issues.` },
        { title: "Function Test", desc: `Open and close the ${comp} multiple times. Listen for unusual sounds, check for resistance or looseness.` },
        { title: "Material Assessment", desc: `Inspect the ${material} for swelling, discolouration, peeling, or cracks that indicate deeper damage.` },
        { title: "Root Cause Identification", desc: `Based on your findings, determine if the issue stems from hardware failure, moisture damage, or normal wear.` },
        { title: "Professional Evaluation", desc: "If the root cause isn't clear, call FurniRevive for a free inspection — our technicians use diagnostic tools for accurate assessment." },
      ];
    case "repair":
      return [
        { title: "Gather Tools & Parts", desc: `You'll need: ${entry.relatedParts.slice(0, 3).join(", ")}. Prepare a clean workspace with good lighting.` },
        { title: "Remove Damaged Section", desc: `Carefully detach the affected ${comp}. Use the right tools to avoid damaging adjacent panels or hardware.` },
        { title: "Prepare the Surface", desc: `Clean the mounting area. Sand any rough edges on ${material} surfaces. Apply primer if needed for adhesive repairs.` },
        { title: "Install Replacement / Repair", desc: `Fit the repaired or new ${comp}. Ensure proper alignment and secure all fasteners. Test fit and movement.` },
        { title: "Final Testing", desc: "Open, close, and stress-test the repair. Verify smooth operation, no gaps, and a clean finish." },
      ];
    case "replacement":
      return [
        { title: "Measure & Order Parts", desc: `Measure the existing ${comp} precisely. Order matching parts from the same brand or a compatible alternative.` },
        { title: "Remove Old Component", desc: `Unscrew or detach the old ${comp}. Label connections and keep screws for reference.` },
        { title: "Prepare Mounting Points", desc: "Clean and inspect mounting holes. Fill any stripped holes with wood filler. Allow to dry completely." },
        { title: "Install New Component", desc: `Position the new ${comp}, align carefully, and secure with fresh hardware. Avoid over-tightening on ${material} surfaces.` },
        { title: "Align & Adjust", desc: "Make fine adjustments for level, gap consistency, and smooth operation. Apply soft-close dampeners where applicable." },
      ];
    case "cost":
      return [
        { title: "Assess Damage Extent", desc: "Determine if the issue is isolated or affects multiple areas. Scope directly impacts cost." },
        { title: "Material Cost Estimate", desc: `Parts for ${comp} repair typically cost ₹${Math.round(entry.proCostMin * 0.3).toLocaleString("en-IN")}–₹${Math.round(entry.proCostMax * 0.4).toLocaleString("en-IN")}.` },
        { title: "Labour Cost Breakdown", desc: `Professional labour for this repair: ₹${Math.round(entry.proCostMin * 0.5).toLocaleString("en-IN")}–₹${Math.round(entry.proCostMax * 0.6).toLocaleString("en-IN")} based on complexity.` },
        { title: "Compare Repair vs Replace", desc: entry.repairVsReplace },
        { title: "Get a Fixed-Price Quote", desc: "FurniRevive provides transparent, fixed-price quotes with no hidden charges. Call for a free assessment." },
      ];
    case "maintenance":
      return [
        { title: "Monthly Visual Check", desc: `Inspect ${comp} for early signs of wear — loose screws, minor swelling, discolouration, or stiffness.` },
        { title: "Quarterly Cleaning", desc: `Clean ${material} surfaces with appropriate cleaner. Avoid harsh chemicals. Wipe hardware with a dry cloth.` },
        { title: "Bi-Annual Lubrication", desc: "Apply silicone spray or light oil to hinges, drawer channels, and moving parts. Wipe excess immediately." },
        { title: "Annual Professional Service", desc: "Schedule a professional inspection to catch issues early. FurniRevive offers annual kitchen maintenance packages." },
        { title: "Preventive Upgrades", desc: "Replace worn-out hardware before it fails. Upgrade to soft-close mechanisms and moisture-resistant materials where possible." },
      ];
    case "hub":
      return [];
  }
}

const REPAIR_TESTIMONIALS = [
  { name: "Rahul S.", locality: "Vasant Kunj", quote: "The technician diagnosed our warped cabinet door in 20 minutes and fixed it the same day. Transparent pricing, no surprises." },
  { name: "Priya M.", locality: "Sector 50, Gurgaon", quote: "Our soft-close hinges were failing on a 3-year-old kitchen. FurniRevive replaced them with genuine Hettich hardware and gave a 6-month warranty." },
  { name: "Amit K.", locality: "Indirapuram", quote: "Water damage under the sink — they fixed the swollen carcass and resurfaced the laminate. Couldn't tell there was ever a problem." },
] as const;

type Props = { entry: KitchenRepairEntry; faqs: readonly { q: string; a: string }[] };

export default function KitchenRepairTemplate({ entry, faqs }: Props) {
  if (entry.pageKind === "hub") return <HubTemplate entry={entry} faqs={faqs} />;
  return <ProblemTemplate entry={entry} faqs={faqs} />;
}

// ─── Problem Template ─────────────────────────────────────────────────────────

function ProblemTemplate({ entry, faqs }: Props) {
  const canonical = `${CANONICAL_ORIGIN}/${entry.slug}`;
  const severity = SEVERITY_CONFIG[entry.severity];
  const urgency = URGENCY_CONFIG[entry.urgency];
  const SeverityIcon = severity.icon;

  useEffect(() => {
    const cleanupMeta = setPageMetadata({
      title: entry.metaTitle,
      description: entry.metaDesc,
      canonical,
      ogTitle: entry.metaTitle,
      ogDescription: entry.metaDesc,
      ogUrl: canonical,
      ogType: "article",
    });

    const scripts: HTMLScriptElement[] = [];

    scripts.push(injectJsonLd({ "@context": "https://schema.org", "@type": "WebPage", name: entry.metaTitle, description: entry.metaDesc, url: canonical }));

    if (faqs.length > 0) {
      scripts.push(injectJsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }));
    }

    scripts.push(injectJsonLd({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Modular Kitchen Repair",
      provider: { "@type": "LocalBusiness", name: "FurniRevive", telephone: PHONE_NUMBER, url: CANONICAL_ORIGIN },
      areaServed: { "@type": "Place", name: "Delhi NCR" },
      description: entry.metaDesc,
    }));

    const intentsThatHaveSteps: RepairIntent[] = ["diagnosis", "repair", "replacement", "cost", "maintenance"];
    if (intentsThatHaveSteps.includes(entry.intent)) {
      const howToSteps = generateSteps(entry);
      if (howToSteps.length > 0) {
        scripts.push(injectJsonLd({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": entry.h1,
          "description": entry.searchIntent,
          "step": howToSteps.map((s, i) => ({
            "@type": "HowToStep",
            "position": i + 1,
            "name": s.title,
            "text": s.desc,
          })),
        }));
      }
    }

    return () => {
      cleanupMeta();
      scripts.forEach((s) => s.remove());
    };
  }, [entry, canonical, faqs]);

  const steps = generateSteps(entry);
  const diyMin = Math.round(entry.proCostMin * 0.3);
  const diyMax = Math.round(entry.proCostMax * 0.5);
  const replaceMin = entry.proCostMin * 2;
  const replaceMax = entry.proCostMax * 3;

  return (
    <>
      <Navbar />

      {/* 1. Problem Hero */}
      <section className="relative min-h-[440px] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/95 via-stone-800/90 to-stone-900/95" />

        <nav className="absolute top-4 left-0 right-0 px-6 flex items-center gap-1 text-white/60 text-sm z-10 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/modular-kitchen" className="hover:text-white transition-colors cursor-pointer">Modular Kitchen</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/modular-kitchen-repair-guide" className="hover:text-white transition-colors cursor-pointer">Kitchen Repairs</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/80">{entry.name}</span>
        </nav>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto pt-16 pb-10">
          <div className="flex items-center justify-center gap-3 mb-5 flex-wrap">
            <span className={`inline-flex items-center gap-1.5 ${severity.badgeClass} text-xs font-semibold px-3 py-1 rounded-full`}>
              <SeverityIcon className="w-3 h-3" /> {severity.label}
            </span>
            <span className={`text-xs px-3 py-1 rounded-full bg-white/10 ${urgency.cls}`}>
              {urgency.label}
            </span>
            {entry.diyPossible && !entry.requiresProfessional ? (
              <span className="inline-flex items-center gap-1.5 bg-blue-600/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                <Hammer className="w-3 h-3" /> DIY Possible
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 bg-violet-700/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                <ShieldCheck className="w-3 h-3" /> Professional Recommended
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance leading-tight">{entry.h1}</h1>
          <p className="text-lg text-white/85 mb-8 text-balance max-w-2xl mx-auto">{entry.searchIntent}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <Phone className="w-4 h-4" /> Call for Free Inspection
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need help with: ${entry.name}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <KitchenTrustStrip />

      {/* 2. Quick Diagnosis Box */}
      <section className="py-12 md:py-16 px-6 max-w-4xl mx-auto">
        <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-6">
          <h2 className="text-lg font-bold text-foreground mb-5">Quick Assessment</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
            <div className="text-center">
              <Clock className="w-5 h-5 text-amber-700 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Fix Time</p>
              <p className="text-sm font-semibold text-foreground">{entry.fixTimeHours} hr{entry.fixTimeHours > 1 ? "s" : ""}</p>
            </div>
            <div className="text-center">
              <AlertTriangle className="w-5 h-5 text-amber-700 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Urgency</p>
              <p className={`text-sm ${urgency.cls}`}>{urgency.label}</p>
            </div>
            <div className="text-center">
              <Hammer className="w-5 h-5 text-amber-700 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">DIY Possible</p>
              <p className="text-sm font-semibold text-foreground">{entry.diyPossible ? "Yes" : "No"}</p>
            </div>
            <div className="text-center">
              <ShieldCheck className="w-5 h-5 text-amber-700 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Needs Professional</p>
              <p className="text-sm font-semibold text-foreground">{entry.requiresProfessional ? "Yes" : "No"}</p>
            </div>
          </div>
          {entry.affectedComponents.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-medium text-muted-foreground mb-2">Components Affected:</p>
              <div className="flex flex-wrap gap-2">
                {entry.affectedComponents.map((comp) => (
                  <span key={comp} className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs font-medium px-2.5 py-1 rounded-full">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          )}
          <p className="text-sm text-muted-foreground leading-relaxed">{entry.searchIntent}</p>
        </div>
      </section>

      {/* 3. Root Causes */}
      {entry.commonCauses.length > 0 && (
        <section className="py-12 md:py-16 px-6 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Common Causes</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {entry.commonCauses.map((cause, i) => {
                const icons = [Droplets, Settings, Hammer, AlertTriangle, Wrench, Zap];
                const Icon = icons[i % icons.length];
                return (
                  <div key={cause} className="rounded-xl border bg-card p-5">
                    <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{cause}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      A common issue in Delhi NCR kitchens. Early detection prevents more expensive repairs down the line.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. Repair vs Replace */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border-l-4 border-l-amber-500 border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-3">Should You Repair or Replace?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{entry.repairVsReplace}</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-lg bg-green-50 dark:bg-green-950/20 p-4 border border-green-200 dark:border-green-800">
                <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">Repair Cost</p>
                <p className="text-lg font-bold text-foreground">{fmt(entry.proCostMin)} – {fmt(entry.proCostMax)}</p>
              </div>
              <div className="rounded-lg bg-red-50 dark:bg-red-950/20 p-4 border border-red-200 dark:border-red-800">
                <p className="text-xs font-semibold text-red-700 dark:text-red-400 mb-1">Replace Cost (estimate)</p>
                <p className="text-lg font-bold text-foreground">{fmt(replaceMin)} – {fmt(replaceMax)}</p>
              </div>
            </div>
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors cursor-pointer">
              <Phone className="w-4 h-4" /> Get a Free Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Mid-Page Trust Block */}
      <section className="py-12 md:py-16 px-6 bg-amber-50/60 dark:bg-stone-900/40">
        <div className="max-w-5xl mx-auto">
          {/* Warranty / Guarantee Strip */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-card p-5 text-center">
              <ShieldCheck className="w-7 h-7 text-amber-700 mx-auto mb-2" />
              <p className="font-semibold text-sm text-foreground">6-Month Repair Warranty</p>
            </div>
            <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-card p-5 text-center">
              <CheckCircle className="w-7 h-7 text-amber-700 mx-auto mb-2" />
              <p className="font-semibold text-sm text-foreground">Fixed Pricing — No Hidden Charges</p>
            </div>
            <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-card p-5 text-center">
              <Wrench className="w-7 h-7 text-amber-700 mx-auto mb-2" />
              <p className="font-semibold text-sm text-foreground">Certified Technicians</p>
            </div>
          </div>

          {/* Testimonials */}
          <h2 className="text-xl font-bold text-foreground mb-6 text-center">What Our Customers Say</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {REPAIR_TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-5">
                <p className="text-sm italic text-muted-foreground leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.locality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Step-by-Step Guide */}
      {steps.length > 0 && (
        <section className="py-12 md:py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-2">{STEP_TITLES[entry.intent]}</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Follow these steps. When in doubt, call a professional — FurniRevive offers free inspection.
            </p>
            <div className="space-y-5 mb-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-full bg-amber-700 text-white font-bold text-sm flex items-center justify-center shrink-0">{i + 1}</div>
                  <div className="rounded-xl border border-border bg-card p-5 flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {entry.relatedParts.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-700" /> Tools & Parts Needed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {entry.relatedParts.map((part) => (
                    <span key={part} className="inline-flex items-center gap-1 bg-stone-100 dark:bg-stone-800 text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                      {part}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. Cost Table */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">Repair Cost Estimate — Delhi NCR (2026)</h2>
          <p className="text-sm text-muted-foreground mb-6">Transparent pricing with no hidden charges.</p>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-2 bg-stone-100 dark:bg-stone-800 text-sm font-semibold">
              <div className="p-4 text-muted-foreground">Item</div>
              <div className="p-4 text-foreground border-l border-border">Estimate</div>
            </div>
            {[
              ["Professional Cost", `${fmt(entry.proCostMin)} – ${fmt(entry.proCostMax)}`],
              ["DIY Cost", entry.requiresProfessional ? "Not recommended" : `${fmt(diyMin)} – ${fmt(diyMax)}`],
              ["Time Required", `${entry.fixTimeHours} hour${entry.fixTimeHours > 1 ? "s" : ""}`],
              ["Warranty", "6 months on repair work"],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-2 border-t border-border text-sm">
                <div className="p-4 font-medium text-foreground">{label}</div>
                <div className="p-4 text-muted-foreground border-l border-border">{value}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">* Pricing varies by locality and kitchen size. Get a fixed-price quote before work begins.</p>
        </div>
      </section>

      {/* 7. Related Parts */}
      {entry.relatedParts.length > 0 && (
        <section className="py-12 md:py-16 px-6 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-2">Parts Typically Involved</h2>
            <p className="text-sm text-muted-foreground mb-6">FurniRevive sources genuine spare parts from Hettich, Blum, Hafele, and other leading brands.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {entry.relatedParts.map((part) => (
                <div key={part} className="rounded-xl border bg-card p-5 text-center">
                  <Package className="w-6 h-6 text-amber-700 mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{part}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Cross-links */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {entry.crossLinksKitchen.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Related Kitchen Guides</h2>
              <div className="flex flex-wrap gap-3">
                {entry.crossLinksKitchen.map((slug) => (
                  <Link key={slug} to={`/${slug}`} className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer">
                    {slugToLabel(slug)} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}
          {entry.crossLinksFurniture.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Furniture Repair Services</h2>
              <div className="flex flex-wrap gap-3">
                {entry.crossLinksFurniture.map((slug) => (
                  <Link key={slug} to={`/${slug}`} className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer">
                    {slugToLabel(slug)} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 9. FAQs */}
      {faqs.length > 0 && (
        <section className="py-12 md:py-16 px-6 bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl border border-border bg-card overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-foreground text-sm select-none">
                    {faq.q}
                    <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90 shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Related Repairs + CTA */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {entry.relatedRepairs.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-5">More Kitchen Repair Guides</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {entry.relatedRepairs.map((slug) => (
                  <Link key={slug} to={`/${slug}`} className="rounded-xl border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <Wrench className="w-5 h-5 text-amber-700 shrink-0" />
                      <p className="font-semibold text-sm text-foreground group-hover:text-amber-700 transition-colors">{slugToLabel(slug)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <Link to="/modular-kitchen-repair-guide" className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors cursor-pointer mb-10">
            View All Kitchen Repair Guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-12 px-6 bg-stone-900">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Need a Professional?</h2>
          <p className="text-white/80 mb-6">FurniRevive's certified kitchen technicians fix it right the first time — with a warranty.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer">
              <Phone className="w-4 h-4" /> Call Now — Free Inspection
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need kitchen repair help: ${entry.name}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Considering a New Kitchen? */}
      <section className="py-12 md:py-16 px-6 bg-amber-50 dark:bg-amber-950/20 border-t border-amber-200 dark:border-amber-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-2">Considering a New Modular Kitchen Instead?</h2>
          <p className="text-sm text-muted-foreground mb-6">Sometimes a repair is the right call — and sometimes a new kitchen is the better investment. Explore your options below.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { slug: "modular-kitchen-under-2-lakh", label: "Affordable Modular Kitchen", desc: "Complete kitchens under ₹2 lakh" },
              { slug: "modern-modular-kitchen-design", label: "Modern Modular Kitchen", desc: "Contemporary designs for Delhi NCR homes" },
              { slug: "modular-kitchen-renovation", label: "Kitchen Renovation", desc: "Upgrade your existing kitchen affordably" },
              { slug: "modular-kitchen-delhi-ncr", label: "Modular Kitchen Delhi NCR", desc: "FurniRevive's full service area" },
            ].map((item) => (
              <Link key={item.slug} to={`/${item.slug}`} className="rounded-xl border border-amber-200 dark:border-amber-800 bg-card p-5 hover:border-amber-600 transition-colors cursor-pointer group">
                <p className="font-semibold text-sm text-foreground group-hover:text-amber-700 transition-colors mb-1">{item.label}</p>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NearMeCTA variant="compact" pageType="repair" />
      <HomeServicesSection service="modular-kitchen" pageType="locality" cityName="Delhi NCR" />
      <KitchenRelatedBlogs slug={entry.slug} />
      <Footer />
    </>
  );
}

// ─── Hub Template ─────────────────────────────────────────────────────────────

function HubTemplate({ entry, faqs }: Props) {
  const canonical = `${CANONICAL_ORIGIN}/${entry.slug}`;
  const [query, setQuery] = useState("");

  useEffect(() => {
    const cleanupMeta = setPageMetadata({
      title: entry.metaTitle,
      description: entry.metaDesc,
      canonical,
      ogTitle: entry.metaTitle,
      ogDescription: entry.metaDesc,
      ogUrl: canonical,
      ogType: "website",
    });

    const scripts: HTMLScriptElement[] = [];

    scripts.push(injectJsonLd({ "@context": "https://schema.org", "@type": "WebPage", name: entry.metaTitle, description: entry.metaDesc, url: canonical }));

    if (faqs.length > 0) {
      scripts.push(injectJsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }));
    }

    scripts.push(injectJsonLd({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Modular Kitchen Repair",
      provider: { "@type": "LocalBusiness", name: "FurniRevive", telephone: PHONE_NUMBER, url: CANONICAL_ORIGIN },
      areaServed: { "@type": "Place", name: "Delhi NCR" },
      description: "Complete modular kitchen repair services — doors, hinges, drawers, surfaces, water damage, and structural repairs.",
    }));

    return () => {
      cleanupMeta();
      scripts.forEach((s) => s.remove());
    };
  }, [entry, canonical, faqs]);

  const allEntries = KITCHEN_REPAIR_REGISTRY.filter((e) => e.pageKind === "problem" && e.status === "published");

  // Filter by search query
  const q = query.toLowerCase();
  const filtered = q.length > 1
    ? allEntries.filter((e) =>
        e.name.toLowerCase().includes(q) ||
        e.commonCauses.some((c) => c.toLowerCase().includes(q)) ||
        e.affectedComponents.some((c) => c.toLowerCase().includes(q)) ||
        e.domain.toLowerCase().includes(q)
      )
    : allEntries;

  // Build domain groups
  type DomainGroupData = HubDomainGroup & { entries: KitchenRepairEntry[] };
  const domainGroups: DomainGroupData[] = HUB_DOMAIN_GROUPS.reduce<DomainGroupData[]>((acc, group) => {
    const entries = filtered.filter((e) => e.domain === group.domain);
    if (entries.length === 0) return acc;
    if (group.domain === "acrylic-surface") {
      const surface = acc.find((g) => g.domain === "laminate-surface");
      if (surface) { surface.entries = [...surface.entries, ...entries]; surface.label = "Surface Problems"; return acc; }
    }
    acc.push({ ...group, entries });
    return acc;
  }, []);

  const urgencyGroups = [
    { key: "emergency", label: "Emergency Repairs", desc: "Fix these immediately to prevent further damage", entries: filtered.filter((e) => e.urgency === "immediate") },
    { key: "professional", label: "Needs a Professional", desc: "These repairs require expert skills and tools", entries: filtered.filter((e) => e.requiresProfessional && e.urgency !== "immediate") },
    { key: "diy", label: "DIY Repairs", desc: "Safe to attempt yourself with basic tools", entries: filtered.filter((e) => e.diyPossible && !e.requiresProfessional) },
    { key: "routine", label: "Routine Maintenance", desc: "Preventive care to extend kitchen life", entries: filtered.filter((e) => e.urgency === "routine" && !e.requiresProfessional) },
  ].filter((g) => g.entries.length > 0);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[380px] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/95 via-stone-800/90 to-stone-900/95" />
        <nav className="absolute top-4 left-0 right-0 px-6 flex items-center gap-1 text-white/60 text-sm z-10 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/modular-kitchen" className="hover:text-white transition-colors cursor-pointer">Modular Kitchen</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/80">Kitchen Repairs</span>
        </nav>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto pt-14 pb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-700/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Wrench className="w-3 h-3" /> Complete Repair Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance leading-tight">{entry.h1}</h1>
          <p className="text-lg text-white/85 mb-8 text-balance max-w-2xl mx-auto">
            Your complete guide to diagnosing and fixing every modular kitchen problem — Delhi NCR's most trusted kitchen repair experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <Phone className="w-4 h-4" /> Call for Free Inspection
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need help with modular kitchen repair`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <KitchenTrustStrip />

      {/* Search bar */}
      <section className="py-8 px-6 border-b border-border bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your kitchen problem..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-700 text-sm"
            />
          </div>
          {q.length > 1 && (
            <p className="text-xs text-muted-foreground mt-2 text-center">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{query}"
            </p>
          )}
        </div>
      </section>

      {/* Section A — By Domain */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">What problem are you facing?</h2>
          <p className="text-sm text-muted-foreground mb-8">Select your kitchen issue to find the right repair guide.</p>
          {domainGroups.length === 0 && (
            <p className="text-sm text-muted-foreground py-8 text-center">No results found for "{query}" — try a different keyword.</p>
          )}
          <div className="space-y-10">
            {domainGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.domain}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <GroupIcon className="w-4 h-4 text-amber-700" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{group.label}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {group.entries.slice(0, 6).map((e) => {
                      const sev = SEVERITY_CONFIG[e.severity];
                      return (
                        <Link key={e.slug} to={`/${e.slug}`} className="rounded-xl border bg-card p-4 hover:border-amber-700 transition-colors cursor-pointer group">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-sm text-foreground group-hover:text-amber-700 transition-colors">{e.name}</p>
                              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                                <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${sev.badgeClass}`}>
                                  {sev.label}
                                </span>
                                {e.diyPossible && !e.requiresProfessional ? (
                                  <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                    DIY Possible
                                  </span>
                                ) : (
                                  <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
                                    Pro Recommended
                                  </span>
                                )}
                                <span className="text-xs text-muted-foreground">
                                  {fmt(e.proCostMin)}–{fmt(e.proCostMax)}
                                </span>
                              </div>
                            </div>
                            <span className="text-xs font-medium text-amber-700 whitespace-nowrap mt-0.5 flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
                              Read guide <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section B — By Urgency */}
      <section className="py-12 md:py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">Need an urgent repair?</h2>
          <p className="text-sm text-muted-foreground mb-8">Find repairs based on how quickly they need attention.</p>
          <div className="space-y-10">
            {urgencyGroups.map((group) => (
              <div key={group.key}>
                <h3 className="text-lg font-bold text-foreground mb-1">{group.label}</h3>
                <p className="text-xs text-muted-foreground mb-4">{group.desc}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.entries.slice(0, 6).map((e) => {
                    const sev = SEVERITY_CONFIG[e.severity];
                    return (
                      <Link key={e.slug} to={`/${e.slug}`} className="rounded-xl border bg-card p-4 hover:border-amber-700 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${sev.dotClass}`} />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm text-foreground group-hover:text-amber-700 transition-colors">{e.name}</p>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                              <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${sev.badgeClass}`}>
                                {sev.label}
                              </span>
                              {e.diyPossible && !e.requiresProfessional ? (
                                <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                  DIY Possible
                                </span>
                              ) : (
                                <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
                                  Pro Recommended
                                </span>
                              )}
                              <span className="text-xs text-muted-foreground">{fmt(e.proCostMin)}–{fmt(e.proCostMax)} · {e.fixTimeHours}h</span>
                            </div>
                          </div>
                          <span className="text-xs font-medium text-amber-700 flex items-center gap-0.5">
                            Read <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl border border-border bg-card overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-foreground text-sm select-none">
                    {faq.q}
                    <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90 shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 px-6 bg-stone-900">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Need a Professional Kitchen Repair?</h2>
          <p className="text-white/80 mb-6">FurniRevive's certified kitchen technicians serve all of Delhi NCR — free inspection, fixed pricing, warranty on all repairs.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer">
              <Phone className="w-4 h-4" /> Call Now — Free Inspection
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need help with modular kitchen repair`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <NearMeCTA variant="compact" pageType="repair" />
      <HomeServicesSection service="modular-kitchen" pageType="locality" cityName="Delhi NCR" />
      <KitchenRelatedBlogs slug={entry.slug} />
      <Footer />
    </>
  );
}
