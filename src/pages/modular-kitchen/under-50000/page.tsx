import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, XCircle, ChevronRight, ArrowUpRight, AlertTriangle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import { buildEditorialSchemas } from "@/lib/seo/kitchen-jsonld.ts";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "Modular Kitchen Under ₹50,000 — What's Realistic, What's Not";
const META_DESCRIPTION = "Planning a modular kitchen under ₹50,000 in Delhi NCR? Understand what's achievable, which layouts and finishes fit this budget, and how to upgrade later without waste.";
const CANONICAL = "https://furnirevive.com/modular-kitchen-under-50000";

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_RECO = {
  bestFor: "Studio flats, 1BHK, temporary setups",
  layouts: "Straight, small L-Shape",
  budget: "₹40K–₹50K for a minimal setup",
  installation: "2–3 days",
};

const SUITS = [
  "Studio or 1BHK apartment with a very compact kitchen",
  "Renters who need a functional but non-permanent kitchen",
  "First-time setup before a bigger renovation later",
  "Straight wall (40–60 sq ft) with 4–6 cabinet units",
];

const AVOID_IF = [
  "Your kitchen is larger than 7×6 ft — the budget won't cover it fully",
  "You want acrylic, PU or any premium finish",
  "You need soft-close hardware throughout",
  "You're planning this as a long-term, permanent kitchen",
];

const WHAT_YOU_GET = [
  "4–6 base cabinet units (Straight or small L-Shape layout)",
  "HDF board carcass (not BWR ply — cost saving)",
  "Laminate or PVC finish on shutters",
  "Standard hinges (not soft-close)",
  "Basic granite or tile countertop",
  "No loft units or tall units in this budget",
];

const WHAT_YOU_DONT_GET = [
  "Soft-close drawers or channels",
  "Quartz or engineered stone countertop",
  "Loft units or tall pantry cabinets",
  "Branded hardware (Hettich, Blum, Häfele)",
  "Acrylic, membrane, PU or veneer finish",
  "Free design consultation or 3D plan",
];

type UpgradePath = { stage: string; budget: string; what: string };
const UPGRADE_PATHS: UpgradePath[] = [
  { stage: "Stage 1 (now)", budget: "₹40K–₹50K", what: "Straight layout, laminate shutters, standard hardware, basic countertop" },
  { stage: "Stage 2 (6–12 months)", budget: "+₹30K–₹50K", what: "Add loft units, upgrade hardware to Hettich, add soft-close drawer" },
  { stage: "Stage 3 (future renovation)", budget: "₹1L–₹2L total", what: "Upgrade shutters to acrylic/membrane, replace countertop to quartz, full redesign" },
];

const MISTAKES = [
  "Expecting a full kitchen at ₹50,000 — a 10×10 kitchen realistically costs ₹1.2L minimum",
  "Choosing the cheapest carcass material (particle board) — it swells in humidity within 2 years",
  "Skipping the countertop in the quote — even basic granite adds ₹10,000–₹15,000",
  "Not leaving space for a chimney — retrofitting it later means removing cabinets",
  "Going with unbranded hinges — they break within 6–12 months of heavy use",
];

const FAQS = [
  {
    q: "Can I really get a modular kitchen under ₹50,000 in Delhi NCR?",
    a: "Yes, but with clear limitations. A ₹50,000 budget covers a Straight or very small L-Shape kitchen with 4–6 laminate or PVC shutter units, a basic countertop and standard hinges. It does not cover soft-close hardware, quartz countertops, loft units or branded hardware. If your kitchen is larger than 6×7 ft, this budget won't be enough for the full kitchen.",
  },
  {
    q: "What is the minimum realistic cost for a proper modular kitchen?",
    a: "A functional, durable modular kitchen with good carcass material, at least standard hardware and a complete countertop starts at around ₹80,000–₹1L for a Straight or small L-Shape layout in a compact kitchen. Under ₹50,000 is possible but represents a significantly stripped-back setup.",
  },
  {
    q: "Should I spend ₹50,000 now and upgrade later?",
    a: "This is worth doing if you're in a temporary home, renting, or need a functional kitchen immediately while saving for a full renovation. Plan your stage-2 upgrade before you build stage 1 — for example, leave conduit for a chimney, use compatible cabinet dimensions and choose carcass dimensions that allow easy shutter replacement later.",
  },
  {
    q: "What finish is available under ₹50,000?",
    a: "At this budget, laminate and PVC are your realistic options. Laminate is scratch-resistant and comes in many designs. PVC is 100% waterproof and best for high-moisture kitchens. Both are durable and low-maintenance. Acrylic, membrane, PU and veneer all cost significantly more and are not viable in this budget.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const SCHEMAS = buildEditorialSchemas({
  title: PAGE_TITLE,
  description: META_DESCRIPTION,
  url: CANONICAL,
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Modular Kitchen", href: "/modular-kitchen" },
    { name: "Under ₹50,000", href: "/modular-kitchen-under-50000" },
  ],
  faqs: FAQS,
});

export default function Under50000Page() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    let meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", META_DESCRIPTION);
    else {
      meta = document.createElement("meta");
      (meta as HTMLMetaElement).name = "description";
      meta.setAttribute("content", META_DESCRIPTION);
      document.head.appendChild(meta);
    }
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = CANONICAL;
    // JSON-LD structured data
    document.querySelectorAll('script[data-kitchen-jsonld]').forEach((el) => el.remove());
    SCHEMAS.forEach((schema) => {
      const script = document.createElement("script") as HTMLScriptElement;
      script.type = "application/ld+json";
      script.setAttribute("data-kitchen-jsonld", "true");
      script.textContent = schema;
      document.head.appendChild(script);
    });
    return () => {
      document.querySelectorAll('script[data-kitchen-jsonld]').forEach((el) => el.remove());
    };
  }, []);

  const entryLayouts = MODULAR_KITCHEN_LAYOUT_REGISTRY.filter(
    (l) => l.slug === "straight" || l.slug === "l-shape"
  );
  const entryMaterials = MODULAR_KITCHEN_MATERIAL_REGISTRY.filter(
    (m) => m.slug === "laminate" || m.slug === "pvc"
  );

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="bg-muted/40 py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary cursor-pointer">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/modular-kitchen" className="hover:text-primary cursor-pointer">Modular Kitchen</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">Under ₹50,000</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
            Modular Kitchen Under ₹50,000 — What's Realistically Achievable
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            ₹50,000 is a very tight budget for a modular kitchen. This guide tells you exactly what you can get, what you can't, which trade-offs are worth making and how to plan a smart upgrade path.
          </p>
        </div>
      </section>

      {/* Quick Recommendation Box */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 grid sm:grid-cols-4 gap-4">
            {[
              { label: "Best For", value: QUICK_RECO.bestFor },
              { label: "Viable Layouts", value: QUICK_RECO.layouts },
              { label: "Realistic Budget", value: QUICK_RECO.budget },
              { label: "Installation", value: QUICK_RECO.installation },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-0.5">{label}</p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest expectations callout */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Honest assessment:</strong> A ₹50,000 budget covers a minimal, compact setup — not a full kitchen renovation. If your kitchen is larger than 6×7 ft, you'll need more. A realistic full kitchen starts at ₹80,000–₹1L. This guide helps you get the most from ₹50,000 if that's your starting point.
            </p>
          </div>
        </div>
      </section>

      {/* Who It Suits + Avoid If */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" /> Suitable for
            </h2>
            <ul className="space-y-2.5">
              {SUITS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-border p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" /> Avoid if
            </h2>
            <ul className="space-y-2.5">
              {AVOID_IF.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What you get vs what you don't */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What ₹50,000 Includes — and What It Doesn't</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-700 mb-3">What you get</h3>
              <ul className="space-y-2.5">
                {WHAT_YOU_GET.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 mb-3">What you don't get</h3>
              <ul className="space-y-2.5">
                {WHAT_YOU_DONT_GET.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Layouts */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Layouts Viable Under ₹50,000</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {entryLayouts.map((layout) => (
              <div key={layout.id} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{layout.shortName} Modular Kitchen</h3>
                <p className="text-muted-foreground text-sm mb-3">{layout.bestFor}</p>
                <div className="space-y-1 text-xs text-muted-foreground mb-4">
                  <p>Space: {layout.minSqFt}–{layout.maxSqFt} sq ft</p>
                  <p>Budget start: ₹{(layout.costMin / 1000).toFixed(0)}K</p>
                </div>
                <Link to={`/modular-kitchen-${layout.slug}`} className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline cursor-pointer">
                  View details <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Want more flexibility?{" "}
            <Link to="/modular-kitchen-under-3-lakh" className="text-primary hover:underline cursor-pointer">See what ₹3 lakh gets you →</Link>
          </p>
        </div>
      </section>

      {/* Entry Finishes */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Finishes Available in This Budget</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {entryMaterials.map((mat) => (
              <div key={mat.id} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{mat.shortName}</h3>
                <p className="text-sm text-primary font-medium mb-2">₹{mat.costMin}–₹{mat.costMax}/sq ft</p>
                <p className="text-muted-foreground text-sm mb-3">{mat.finish}</p>
                <div className="flex flex-wrap gap-1.5">
                  {mat.pros.map((pro) => (
                    <span key={pro} className="text-xs bg-muted/60 rounded px-2 py-0.5">{pro}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Paths */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">How to Upgrade Later Without Waste</h2>
          <div className="space-y-4">
            {UPGRADE_PATHS.map((path) => (
              <div key={path.stage} className="bg-card rounded-xl border border-border p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold">{path.stage}</h3>
                  <span className="text-sm font-bold text-primary whitespace-nowrap">{path.budget}</span>
                </div>
                <p className="text-muted-foreground text-sm">{path.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Key principle: build with upgrade-compatible dimensions and carcass from the start, so future upgrades replace shutters and hardware — not the entire structure.</p>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-10 md:py-14 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Common Mistakes at This Budget</h2>
          <ul className="space-y-3">
            {MISTAKES.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <ul className="flex flex-wrap gap-3">
            {[
              { label: "Modular Kitchen Under ₹3 Lakh", href: "/modular-kitchen-under-3-lakh" },
              { label: "Straight Modular Kitchen", href: "/modular-kitchen-straight" },
              { label: "Laminate vs Acrylic", href: "/acrylic-vs-laminate-modular-kitchen" },
              { label: "Small Flat Kitchen Guide", href: "/modular-kitchen-for-small-flat" },
              { label: "Modular Kitchen Cost Delhi", href: "/modular-kitchen-cost-delhi" },
            ].map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline cursor-pointer">
                  {link.label} <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Tell us your budget — we'll plan what's possible</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            WhatsApp your kitchen photo and budget — we'll tell you exactly what fits and how to plan future upgrades.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 bg-background text-foreground font-medium px-6 py-3 rounded-lg hover:bg-background/90 transition-colors cursor-pointer">
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I have a budget of around ₹50,000 for a modular kitchen`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
              <MessageCircle className="h-4 w-4" /> WhatsApp Your Budget
            </a>
          </div>
        </div>
      </section>

      <HomeServicesSection service="modular-kitchen" pageType="layout" />
      <KitchenTrustStrip />
      <Footer />
    </div>
  );
}
