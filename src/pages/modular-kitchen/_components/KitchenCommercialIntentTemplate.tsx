import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Building2,
  Pencil,
  Factory,
  ShoppingBag,
  Star,
  Hammer,
  Wrench,
  ChevronRight,
  LayoutGrid,
  Layers,
  Home,
  Ruler,
} from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import { KitchenStatsBar, KitchenWhyChoose } from "@/components/kitchen-guide-conversion.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import type { CommercialIntentEntry, CommercialIntentGroup } from "@/lib/registry/kitchen-commercial-intent-registry.ts";
import { NearMeCTA } from "@/components/kitchen-near-me-cta.tsx";

// ─── Areas Covered per city ───────────────────────────────────────────────────

const CITY_AREAS: Record<string, { label: string; href: string }[]> = {
  delhi: [
    { label: "Greater Kailash", href: "/modular-kitchen-greater-kailash" },
    { label: "Vasant Kunj", href: "/modular-kitchen-vasant-kunj" },
    { label: "Saket", href: "/modular-kitchen-saket" },
    { label: "Dwarka", href: "/modular-kitchen-dwarka-delhi" },
    { label: "Rohini", href: "/modular-kitchen-rohini" },
    { label: "South Delhi", href: "/modular-kitchen-south-delhi" },
    { label: "Hauz Khas", href: "/modular-kitchen-hauz-khas" },
    { label: "Defence Colony", href: "/modular-kitchen-defence-colony" },
  ],
  gurgaon: [
    { label: "DLF Phase 5", href: "/modular-kitchen-dlf-phase-5" },
    { label: "Golf Course Road", href: "/modular-kitchen-golf-course-road" },
    { label: "Sushant Lok", href: "/modular-kitchen-sushant-lok" },
    { label: "Sohna Road", href: "/modular-kitchen-sohna-road" },
    { label: "Nirvana Country", href: "/modular-kitchen-nirvana-country" },
    { label: "South City", href: "/modular-kitchen-south-city" },
    { label: "Sector 56", href: "/modular-kitchen-sector-56" },
    { label: "Palam Vihar", href: "/modular-kitchen-palam-vihar" },
  ],
  noida: [
    { label: "Sector 50", href: "/modular-kitchen-sector-50" },
    { label: "Sector 137", href: "/modular-kitchen-sector-137" },
    { label: "Noida Extension", href: "/modular-kitchen-noida-extension" },
    { label: "Sector 62", href: "/modular-kitchen-sector-62" },
    { label: "Sector 76", href: "/modular-kitchen-sector-76" },
    { label: "Expressway Corridor", href: "/modular-kitchen-expressway-corridor" },
    { label: "Alpha 1 Greater Noida", href: "/modular-kitchen-alpha-1" },
    { label: "Sector 93", href: "/modular-kitchen-sector-93" },
  ],
  faridabad: [
    { label: "NIT Faridabad", href: "/modular-kitchen-nit" },
    { label: "Neharpar", href: "/modular-kitchen-neharpar" },
    { label: "BPTP Park Lands", href: "/modular-kitchen-bptp-park-lands" },
    { label: "Greenfields Colony", href: "/modular-kitchen-greenfields-colony" },
    { label: "Sector 15", href: "/modular-kitchen-sector-15" },
    { label: "Greater Faridabad", href: "/modular-kitchen-greater-faridabad" },
    { label: "Ballabhgarh", href: "/modular-kitchen-ballabhgarh" },
    { label: "Old Faridabad", href: "/modular-kitchen-old-faridabad" },
  ],
  ghaziabad: [
    { label: "Indirapuram", href: "/modular-kitchen-indirapuram" },
    { label: "Vaishali", href: "/modular-kitchen-vaishali" },
    { label: "Kaushambi", href: "/modular-kitchen-kaushambi" },
    { label: "Raj Nagar Extension", href: "/modular-kitchen-raj-nagar-extension" },
    { label: "Vasundhara", href: "/modular-kitchen-vasundhara" },
    { label: "Wave City", href: "/modular-kitchen-wave-city" },
    { label: "Crossings Republik", href: "/modular-kitchen-crossings-republik" },
    { label: "Gyan Khand", href: "/modular-kitchen-gyan-khand-1" },
  ],
};

// ─── Related Searches per city ────────────────────────────────────────────────

const RELATED: Record<string, { label: string; href: string }[]> = {
  delhi: [
    { label: "Modular Kitchen Near Me", href: "/modular-kitchen-near-me" },
    { label: "Modular Kitchen Delhi", href: "/modular-kitchen-delhi" },
    { label: "Modular Kitchen Cost Delhi", href: "/blog/modular-kitchen-cost-delhi-guide" },
    { label: "Acrylic Kitchen Delhi", href: "/acrylic-modular-kitchen-delhi" },
    { label: "L-Shape Kitchen Delhi", href: "/l-shape-modular-kitchen-delhi" },
    { label: "Modular Kitchen Guide", href: "/modular-kitchen-guide" },
  ],
  gurgaon: [
    { label: "Modular Kitchen Near Me", href: "/modular-kitchen-near-me" },
    { label: "Modular Kitchen Gurgaon", href: "/modular-kitchen-gurgaon" },
    { label: "Modular Kitchen Cost Gurgaon", href: "/modular-kitchen-cost-gurgaon" },
    { label: "Acrylic Kitchen Gurgaon", href: "/acrylic-modular-kitchen-gurgaon" },
    { label: "L-Shape Kitchen Gurgaon", href: "/l-shape-modular-kitchen-gurgaon" },
    { label: "Modular Kitchen Guide", href: "/modular-kitchen-guide" },
  ],
  noida: [
    { label: "Modular Kitchen Near Me", href: "/modular-kitchen-near-me" },
    { label: "Modular Kitchen Noida", href: "/modular-kitchen-noida" },
    { label: "Acrylic Kitchen Noida", href: "/acrylic-modular-kitchen-noida" },
    { label: "L-Shape Kitchen Noida", href: "/l-shape-modular-kitchen-noida" },
    { label: "Modular Kitchen Guide", href: "/modular-kitchen-guide" },
  ],
  faridabad: [
    { label: "Modular Kitchen Near Me", href: "/modular-kitchen-near-me" },
    { label: "Modular Kitchen Faridabad", href: "/modular-kitchen-faridabad" },
    { label: "Acrylic Kitchen Faridabad", href: "/acrylic-modular-kitchen-faridabad" },
    { label: "Modular Kitchen Guide", href: "/modular-kitchen-guide" },
  ],
  ghaziabad: [
    { label: "Modular Kitchen Near Me", href: "/modular-kitchen-near-me" },
    { label: "Modular Kitchen Ghaziabad", href: "/modular-kitchen-ghaziabad" },
    { label: "Acrylic Kitchen Ghaziabad", href: "/acrylic-modular-kitchen-ghaziabad" },
    { label: "Modular Kitchen Guide", href: "/modular-kitchen-guide" },
  ],
};

// ─── Sibling intents (same city, different intent) ────────────────────────────

const ALL_INTENTS: CommercialIntentEntry["intent"][] = [
  "company", "designer", "showroom", "dealer", "manufacturer", "installation", "contractors",
];

const INTENT_LABELS: Record<CommercialIntentEntry["intent"], string> = {
  company: "Company",
  designer: "Designer",
  showroom: "Showroom",
  dealer: "Dealer",
  manufacturer: "Manufacturer",
  installation: "Installation",
  contractors: "Contractors",
};

function getSiblingIntentLinks(entry: CommercialIntentEntry): { label: string; href: string }[] {
  const siblings = ALL_INTENTS.filter((i) => i !== entry.intent).slice(0, 3);
  return siblings.map((i) => ({
    label: `Modular Kitchen ${INTENT_LABELS[i]} ${entry.cityName}`,
    href: `/modular-kitchen-${i}-${entry.city}`,
  }));
}

// ─── FAQs per group ───────────────────────────────────────────────────────────

function getFaqs(group: CommercialIntentGroup, cityName: string): { question: string; answer: string }[] {
  switch (group) {
    case "design":
      return [
        { question: `Do you offer free kitchen design consultations in ${cityName}?`, answer: `Yes, our designer visits your home in ${cityName}, takes exact measurements, discusses your requirements, and creates a 3D plan — all at no charge and no obligation.` },
        { question: "How long does the 3D design process take?", answer: "We deliver a detailed 3D plan within 48 hours of the home visit. You can request revisions until you are satisfied before any manufacturing begins." },
        { question: "Can I make changes to the design before manufacturing?", answer: "Yes, unlimited revisions until you approve the final layout. Changes are free during the design phase." },
        { question: "What information do I need for the first consultation?", answer: "Just your kitchen dimensions and a rough budget range. Our designer handles the rest on-site." },
        { question: `Do you design kitchens for all flat types in ${cityName}?`, answer: `Yes — builder floors, DDA flats, high-rise societies, independent houses, and villas. We handle all property types across ${cityName}.` },
      ];
    case "purchase":
      return [
        { question: `Where can I see modular kitchen samples in ${cityName}?`, answer: `Contact us to arrange a sample viewing in ${cityName}. We bring material swatches, hardware demos, and finish samples to your home.` },
        { question: "What materials do you offer?", answer: "Acrylic, laminate, PU, membrane, and glass in dozens of colours and textures — each with different durability and price characteristics." },
        { question: "What hardware brands do you use?", answer: "Hettich, Blum, and Hafele as standard. These are European-grade soft-close hinges, channels, and accessories that last 15+ years." },
        { question: "Can I get a price estimate before visiting?", answer: "Yes, WhatsApp us your kitchen dimensions and preferred material type — we will send a ballpark quote within an hour." },
        { question: "Do you offer EMI options?", answer: "We work with multiple financing partners to offer 0% EMI for 3–12 months on select orders." },
      ];
    case "execution":
      return [
        { question: `How long does modular kitchen installation take in ${cityName}?`, answer: `Typically 5–10 days depending on kitchen size and complexity. Our ${cityName} team works 6 days a week to minimise disruption.` },
        { question: "Do you handle plumbing and electrical work?", answer: "We coordinate with plumbers and electricians to ensure all connections, drainage points, and electrical outlets are correctly positioned before cabinet fitting." },
        { question: "What happens if there are fitting issues after installation?", answer: "Our 6-month post-installation support covers all adjustments, settling gaps, or hardware tune-ups at no extra cost." },
        { question: `Do you install kitchens in high-rise apartments in ${cityName}?`, answer: `Yes, we have dedicated teams for high-rise logistics — material hoisting, society NOC coordination, and time-slot management.` },
        { question: "What is included in the 10-year warranty?", answer: "The carcass structure, hinges, channels, and hardware mechanisms are all covered for 10 years. Finish and surface warranty is 5 years." },
      ];
  }
}

// ─── Intent Body Cards ────────────────────────────────────────────────────────

type CardItem = { icon: React.ComponentType<{ className?: string }>; title: string; desc: string };

function getIntentCards(group: CommercialIntentGroup, cityName: string): CardItem[] {
  switch (group) {
    case "design":
      return [
        { icon: Pencil, title: "Free 3D Kitchen Design", desc: `Our ${cityName} designers visit your home, take measurements, and create a detailed 3D kitchen plan within 48 hours — at no charge.` },
        { icon: LayoutGrid, title: "Space Planning", desc: "We design around your kitchen's exact dimensions — optimising storage, workflow, and appliance placement for your lifestyle." },
        { icon: Home, title: "Full Project Management", desc: `From design approval to final installation, FurniRevive manages the entire project in ${cityName} — one point of contact throughout.` },
      ];
    case "purchase":
      return [
        { icon: ShoppingBag, title: "Premium Material Samples", desc: `See acrylic, laminate, PU, membrane, and glass kitchen finishes in person — with live hardware demonstrations by our ${cityName} team.` },
        { icon: Star, title: "Transparent Pricing", desc: "Every quote is itemised — cabinet count, material, hardware, countertop, and installation. No hidden charges or post-order surprises." },
        { icon: Factory, title: "Factory-Direct Quality", desc: "Our in-house factory manufactures every kitchen — no sub-contracting. Better quality control and shorter lead times." },
      ];
    case "execution":
      return [
        { icon: Wrench, title: "Professional Installation", desc: `Our ${cityName} installation team handles cabinet fitting, alignment, plumbing coordination, and electrical clearance.` },
        { icon: CheckCircle2, title: "10-Year Warranty", desc: "Every FurniRevive kitchen includes a 10-year structural warranty on the carcass and hardware, plus 5-year finish warranty." },
        { icon: Hammer, title: "Post-Installation Support", desc: "We provide 6 months of free post-installation support — any adjustments, settling gaps, or hardware tune-ups are covered." },
      ];
  }
}

function IntentBody({ entry }: { entry: CommercialIntentEntry }) {
  const cards = getIntentCards(entry.group, entry.cityName);
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
          What You Get with FurniRevive
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-base mb-2 text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Hero subtitle per group ──────────────────────────────────────────────────

function getHeroSubtitle(group: CommercialIntentGroup, cityName: string): string {
  switch (group) {
    case "design":
      return `FurniRevive's design team visits your home, creates a 3D kitchen plan, and manages manufacturing and installation — all under one roof in ${cityName}.`;
    case "purchase":
      return `Visit FurniRevive to see acrylic, laminate, PU, and glass kitchen samples with live hardware demonstrations across ${cityName}.`;
    case "execution":
      return `FurniRevive's installation team handles site preparation, cabinet fitting, alignment, plumbing coordination, and final quality check in ${cityName}.`;
  }
}

// ─── Main Template ────────────────────────────────────────────────────────────

export default function KitchenCommercialIntentTemplate({ entry }: { entry: CommercialIntentEntry }) {
  // Meta / head injection
  useEffect(() => {
    document.title = entry.metaTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", entry.metaDescription);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://furnirevive.com/${entry.slug}`);
  }, [entry]);

  const areas = CITY_AREAS[entry.city] ?? [];
  const related = RELATED[entry.city] ?? [];
  const siblingLinks = getSiblingIntentLinks(entry);
  const faqs = getFaqs(entry.group, entry.cityName);
  const subtitle = getHeroSubtitle(entry.group, entry.cityName);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-stone-900 text-white py-14 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/modular-kitchen-guide" className="hover:text-white transition-colors cursor-pointer">Modular Kitchen Guide</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to={`/modular-kitchen-${entry.city}`} className="hover:text-white transition-colors cursor-pointer">{entry.cityName}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/90">{INTENT_LABELS[entry.intent]}</span>
          </nav>

          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">{entry.h1}</h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Call for Free Consultation
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I need a modular kitchen ${entry.intent} in ${entry.cityName}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Trust + Stats */}
      <KitchenTrustStrip />
      <KitchenStatsBar />

      {/* Why Choose */}
      <KitchenWhyChoose />

      {/* Intent-specific body */}
      <IntentBody entry={entry} />

      {/* Areas Covered */}
      {areas.length > 0 && (
        <section className="py-10 md:py-14 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-amber-700" />
              <h2 className="text-lg md:text-xl font-bold text-foreground">
                Areas We Cover in {entry.cityName}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <Link
                  key={area.href}
                  to={area.href}
                  className="rounded-full border border-border px-3 py-1.5 text-sm hover:border-amber-700 transition-colors cursor-pointer"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-10 md:py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left text-sm font-medium cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-10 md:py-14 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-6">Related Searches</h2>
          <div className="flex flex-wrap gap-2">
            {[...related, ...siblingLinks].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-full border border-border px-3 py-1.5 text-sm hover:border-amber-700 transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-stone-900 text-white py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Building2 className="w-8 h-8 text-amber-500 mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Get Your Free Kitchen Consultation
          </h2>
          <p className="text-white/70 text-sm mb-6 max-w-lg mx-auto">
            Our team in {entry.cityName} is ready to visit your home, take measurements, and create a 3D design plan — at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I need a modular kitchen ${entry.intent} in ${entry.cityName}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <NearMeCTA variant="standard" pageType="commercial" pageValue={INTENT_LABELS[entry.intent]} />
      <Footer />
    </>
  );
}
