import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  IndianRupee,
  LayoutGrid,
  Layers,
  Wrench,
  Settings,
  MapPin,
  Building2,
  Pencil,
  Factory,
  ShoppingBag,
  Hammer,
  Ruler,
  Grid2x2,
  AlignJustify,
  Square,
  Minus,
  PanelRight,
  Sparkles,
  Paintbrush,
  LayoutList,
  Gem,
  Minimize2,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import { KitchenStatsBar } from "@/components/kitchen-guide-conversion.tsx";
import { NearMeCTA } from "@/components/kitchen-near-me-cta.tsx";

// ─── Section Config ──────────────────────────────────────────────────────────

const SECTION_ORDER = [
  "startHere",
  "layouts",
  "materials",
  "budget",
  "nearMe",
  "commercial",
  "renovation",
  "repair",
  "guides",
  "cities",
  "popularSearches",
  "faq",
] as const;

// ─── Data Registries ─────────────────────────────────────────────────────────

const START_HERE = [
  { icon: Home, label: "New Modular Kitchen", desc: "Design & install a brand-new kitchen", href: "/modular-kitchen-near-me" },
  { icon: IndianRupee, label: "Kitchen Prices", desc: "Cost guide for Delhi NCR kitchens", href: "/modular-kitchen-cost-delhi" },
  { icon: LayoutGrid, label: "Layout Ideas", desc: "L-Shape, U-Shape, Parallel, Island", href: "/l-shape-modular-kitchen-delhi" },
  { icon: Layers, label: "Materials Guide", desc: "Acrylic, Laminate, PU, Membrane, Glass", href: "/acrylic-modular-kitchen-delhi" },
  { icon: Wrench, label: "Kitchen Renovation", desc: "Renovate your existing kitchen", href: "/modular-kitchen-renovation" },
  { icon: Settings, label: "Kitchen Repair", desc: "Fix hinges, shutters, and hardware", href: "/modular-kitchen-repair-guide" },
  { icon: MapPin, label: "Near Me", desc: "Find a kitchen company near you", href: "/modular-kitchen-near-me" },
  { icon: Building2, label: "Showrooms & Companies", desc: "Designers, dealers, and showrooms", href: "/modular-kitchen-company-delhi" },
] as const;

const LAYOUTS = [
  { label: "L-Shape Kitchen", desc: "Best for corner kitchens in 2-3BHK flats", href: "/l-shape-modular-kitchen-delhi", icon: LayoutGrid },
  { label: "Parallel Kitchen", desc: "Efficient galley layout for narrow kitchens", href: "/parallel-modular-kitchen-delhi", icon: AlignJustify },
  { label: "U-Shape Kitchen", desc: "Maximum storage for large square kitchens", href: "/u-shape-modular-kitchen-delhi", icon: Square },
  { label: "Straight Kitchen", desc: "Compact single-wall for studio apartments", href: "/straight-modular-kitchen-delhi", icon: Minus },
  { label: "Island Kitchen", desc: "Open-plan luxury with a central island", href: "/island-modular-kitchen-delhi", icon: Grid2x2 },
  { label: "Peninsula Kitchen", desc: "Island benefits in smaller spaces", href: "/peninsula-modular-kitchen-delhi", icon: PanelRight },
] as const;

const MATERIALS = [
  { label: "Acrylic", desc: "High-gloss premium finish", href: "/acrylic-modular-kitchen-delhi", icon: Sparkles },
  { label: "Laminate", desc: "Durable, budget-friendly", href: "/laminate-modular-kitchen-delhi", icon: Layers },
  { label: "PU Finish", desc: "Smooth matte or gloss", href: "/pu-modular-kitchen-delhi", icon: Paintbrush },
  { label: "Membrane", desc: "Textured 3D surface finish", href: "/membrane-modular-kitchen-delhi", icon: LayoutList },
  { label: "Glass", desc: "Modern backlit glass shutters", href: "/glass-modular-kitchen-delhi", icon: Gem },
] as const;

const BUDGETS = [
  { label: "Under \u20B91 Lakh", desc: "Straight or small L-Shape with laminate finish", href: "/blog/modular-kitchen-cost-delhi-guide", color: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900" },
  { label: "\u20B91 \u2013 \u20B92 Lakh", desc: "L-Shape or Parallel with acrylic or laminate", href: "/blog/modular-kitchen-cost-delhi-guide", color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900" },
  { label: "\u20B92 \u2013 \u20B93 Lakh", desc: "U-Shape or Island with premium hardware", href: "/blog/modular-kitchen-cost-delhi-guide", color: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900" },
  { label: "Luxury \u20B93L+", desc: "Imported hardware, PU or glass finish", href: "/blog/modular-kitchen-cost-delhi-guide", color: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900" },
] as const;

const COMMERCIAL = [
  { label: "Modular Kitchen Company", desc: "Full-service design, manufacture, and install", href: "/modular-kitchen-company-delhi", icon: Building2 },
  { label: "Modular Kitchen Designer", desc: "3D design, space planning, and consultation", href: "/modular-kitchen-designer-delhi", icon: Pencil },
  { label: "Kitchen Showroom", desc: "View material samples and hardware finishes", href: "/modular-kitchen-showroom-delhi", icon: ShoppingBag },
  { label: "Kitchen Installation", desc: "Professional fitting and alignment service", href: "/modular-kitchen-installation-delhi", icon: Wrench },
  { label: "Kitchen Manufacturer", desc: "Factory-direct modular kitchen cabinets", href: "/modular-kitchen-manufacturer-delhi", icon: Factory },
  { label: "Kitchen Dealer", desc: "Authorised dealer for modular kitchen components", href: "/modular-kitchen-dealer-delhi", icon: ShoppingBag },
  { label: "Kitchen Contractors", desc: "End-to-end kitchen project contractors", href: "/modular-kitchen-contractors-delhi", icon: Hammer },
] as const;

const GUIDES = [
  { label: "10x12 Kitchen Guide", desc: "Best layouts and cost for 10x12 ft kitchens", href: "/modular-kitchen-10x12", icon: Ruler },
  { label: "10x10 Kitchen Guide", desc: "Planning a 10x10 modular kitchen", href: "/modular-kitchen-10x10", icon: Ruler },
  { label: "10x8 Kitchen Guide", desc: "Compact 10x8 kitchen design ideas", href: "/modular-kitchen-10x8", icon: Ruler },
  { label: "2BHK Kitchen Guide", desc: "Ideal layouts for 2BHK apartments", href: "/2bhk-modular-kitchen", icon: Home },
  { label: "3BHK Kitchen Guide", desc: "Spacious kitchen designs for 3BHK flats", href: "/3bhk-modular-kitchen", icon: Home },
  { label: "Acrylic vs Laminate", desc: "Which finish is right for your kitchen?", href: "/acrylic-vs-laminate-modular-kitchen", icon: Layers },
  { label: "L-Shape vs U-Shape", desc: "Compare the two most popular layouts", href: "/l-shape-vs-u-shape-modular-kitchen", icon: LayoutGrid },
  { label: "Modular vs Semi-Modular", desc: "Understand the key differences", href: "/modular-vs-semi-modular-kitchen", icon: Grid2x2 },
  { label: "Small Flat Kitchen", desc: "Space-saving ideas for small kitchens", href: "/modular-kitchen-for-small-flat", icon: Minimize2 },
] as const;

const CITIES = [
  { label: "Delhi", desc: "280+ kitchens installed", href: "/modular-kitchen-delhi", icon: MapPin },
  { label: "Gurgaon", desc: "Premium kitchens in DLF, Golf Course", href: "/modular-kitchen-gurgaon", icon: MapPin },
  { label: "Noida", desc: "Sectors, extensions, expressway", href: "/modular-kitchen-noida", icon: MapPin },
  { label: "Ghaziabad", desc: "Indirapuram, Vaishali, Raj Nagar Ext", href: "/modular-kitchen-ghaziabad", icon: MapPin },
  { label: "Faridabad", desc: "NIT, Neharpar, Greater Faridabad", href: "/modular-kitchen-faridabad", icon: MapPin },
] as const;

const POPULAR_SEARCHES = [
  { label: "Modular Kitchen Delhi", href: "/modular-kitchen-delhi" },
  { label: "Modular Kitchen Gurgaon", href: "/modular-kitchen-gurgaon" },
  { label: "Modular Kitchen Noida", href: "/modular-kitchen-noida" },
  { label: "Modular Kitchen Cost Delhi", href: "/blog/modular-kitchen-cost-delhi-guide" },
  { label: "Acrylic Modular Kitchen Delhi", href: "/acrylic-modular-kitchen-delhi" },
  { label: "L-Shape Modular Kitchen Delhi", href: "/l-shape-modular-kitchen-delhi" },
  { label: "Modular Kitchen Near Me", href: "/modular-kitchen-near-me" },
  { label: "Modular Kitchen Renovation", href: "/modular-kitchen-renovation" },
  { label: "Affordable Modular Kitchen Delhi", href: "/affordable-modular-kitchen-delhi" },
  { label: "Modular Kitchen Greater Kailash", href: "/modular-kitchen-greater-kailash" },
  { label: "Modular Kitchen DLF Phase 5", href: "/modular-kitchen-dlf-phase-5" },
  { label: "Modular Kitchen Sector 50 Gurgaon", href: "/modular-kitchen-sector-50" },
  { label: "Laminate Modular Kitchen Delhi", href: "/laminate-modular-kitchen-delhi" },
  { label: "Parallel Kitchen Delhi", href: "/parallel-modular-kitchen-delhi" },
  { label: "U-Shape Kitchen Delhi", href: "/u-shape-modular-kitchen-delhi" },
  { label: "Modular Kitchen Company Delhi", href: "/modular-kitchen-company-delhi" },
  { label: "Modular Kitchen Indirapuram", href: "/modular-kitchen-indirapuram" },
  { label: "Modular Kitchen Vasant Kunj", href: "/modular-kitchen-vasant-kunj" },
] as const;

const FAQS = [
  { question: "What is a modular kitchen?", answer: "A modular kitchen is a modern kitchen made of pre-manufactured cabinet modules (carcass), factory-finished shutters, and standardised hardware. Components are built in a factory and assembled on-site, giving you precise fits, consistent quality, and faster installation compared to carpenter-made kitchens." },
  { question: "How much does a modular kitchen cost in Delhi NCR?", answer: "Modular kitchen prices in Delhi NCR range from approximately \u20B980,000 for a compact straight kitchen with laminate finish to \u20B98 lakh+ for a large U-shape or island kitchen with premium PU or imported hardware. The final cost depends on kitchen size, layout, material, and accessories chosen." },
  { question: "How long does modular kitchen installation take?", answer: "From design approval to handover, a typical modular kitchen takes 2\u20134 weeks. This includes factory manufacturing (7\u201312 days) and on-site installation (3\u20135 days). Custom or large kitchens may take slightly longer." },
  { question: "What is the best material for modular kitchen shutters?", answer: "It depends on your budget and preferences. Laminate is the best value for money and highly durable. Acrylic offers a stunning high-gloss look. PU finish provides a smooth, premium matte or gloss surface. Membrane gives textured 3D effects. Glass shutters suit modern, backlit designs." },
  { question: "Do you offer a warranty?", answer: "Yes. FurniRevive provides a 10-year structural warranty on the carcass and a 5-year warranty on shutters and finishes. Hardware carries the manufacturer\u2019s standard warranty (typically 5\u201310 years for soft-close hinges and channels)." },
  { question: "How do I get started?", answer: "Simply call us or send a WhatsApp message. We\u2019ll schedule a free home visit where our designer measures your kitchen space. Within 48 hours you\u2019ll receive a 3D design with a no-obligation quote. Once approved, manufacturing and installation begin immediately." },
] as const;

// ─── Section Components ──────────────────────────────────────────────────────

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
      <Icon className="h-5 w-5 text-amber-700 dark:text-amber-400" />
    </div>
  );
}

// ─── Section: Start Here ─────────────────────────────────────────────────────

function StartHereSection() {
  return (
    <section id="start-here" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Start Here" subtitle="Choose what you need help with." />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {START_HERE.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group cursor-pointer rounded-xl border bg-card p-5 transition-colors hover:border-amber-700"
            >
              <IconBadge icon={item.icon} />
              <h3 className="mt-3 font-semibold text-sm sm:text-base">{item.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Layouts ────────────────────────────────────────────────────────

function LayoutsSection() {
  return (
    <section id="layouts" className="py-12 sm:py-16 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Kitchen Layout Ideas" subtitle="Choose the right layout for your kitchen shape and size." />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {LAYOUTS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group cursor-pointer rounded-xl border bg-card p-5 transition-colors hover:border-amber-700"
            >
              <IconBadge icon={item.icon} />
              <h3 className="mt-3 font-semibold text-sm sm:text-base">{item.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Materials ──────────────────────────────────────────────────────

function MaterialsSection() {
  return (
    <section id="materials" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Kitchen Materials & Finishes" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {MATERIALS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group cursor-pointer rounded-xl border bg-card p-5 text-center transition-colors hover:border-amber-700"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
                <item.icon className="h-5 w-5 text-amber-700 dark:text-amber-400" />
              </div>
              <h3 className="mt-3 font-semibold text-sm">{item.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Budget ─────────────────────────────────────────────────────────

function BudgetSection() {
  return (
    <section id="budget" className="py-12 sm:py-16 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Kitchen Budgets" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BUDGETS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`cursor-pointer rounded-xl border p-5 transition-colors hover:border-amber-700 ${item.color}`}
            >
              <h3 className="font-bold text-base">{item.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Near Me CTA ────────────────────────────────────────────────────

function NearMeSection() {
  return (
    <section id="near-me" className="bg-amber-700 py-12 sm:py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Looking for a modular kitchen company near you?</h2>
        <p className="mt-3 text-amber-100 text-base sm:text-lg">
          FurniRevive serves all of Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad — with local designers, factory manufacturing, and on-site installation teams.
        </p>
        <Link
          to="/modular-kitchen-near-me"
          className="mt-6 inline-block cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-amber-800 transition-colors hover:bg-amber-50"
        >
          Find Kitchen Services Near Me
        </Link>
      </div>
    </section>
  );
}

// ─── Section: Commercial ─────────────────────────────────────────────────────

function CommercialSection() {
  return (
    <section id="commercial" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Modular Kitchen Services in Delhi NCR" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMMERCIAL.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group cursor-pointer rounded-xl border bg-card p-5 transition-colors hover:border-amber-700"
            >
              <IconBadge icon={item.icon} />
              <h3 className="mt-3 font-semibold">{item.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Renovation & Repair ────────────────────────────────────────────

function RenovationRepairSection() {
  return (
    <section id="renovation" className="py-12 sm:py-16 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Renovation */}
          <div className="rounded-xl border bg-card p-6">
            <IconBadge icon={Hammer} />
            <h3 className="mt-4 text-xl font-bold">Kitchen Renovation</h3>
            <p className="mt-2 text-muted-foreground">
              Transform your old kitchen with new shutters, countertop, and hardware. Prices from \u20B950,000.
            </p>
            <Link
              to="/modular-kitchen-renovation"
              className="mt-4 inline-block cursor-pointer rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
            >
              Explore Renovation
            </Link>
          </div>
          {/* Repair */}
          <div className="rounded-xl border bg-card p-6">
            <IconBadge icon={Wrench} />
            <h3 className="mt-4 text-xl font-bold">Kitchen Repair & Maintenance</h3>
            <p className="mt-2 text-muted-foreground">
              Fix broken hinges, misaligned shutters, warped carcass, and leaking pipes.
            </p>
            <Link
              to="/modular-kitchen-repair-guide"
              className="mt-4 inline-block cursor-pointer rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Explore Repair
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Guides ─────────────────────────────────────────────────────────

function GuidesSection() {
  return (
    <section id="guides" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Modular Kitchen Buying Guides" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group cursor-pointer rounded-xl border bg-card p-5 transition-colors hover:border-amber-700"
            >
              <IconBadge icon={item.icon} />
              <h3 className="mt-3 font-semibold">{item.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Cities ─────────────────────────────────────────────────────────

function CitiesSection() {
  return (
    <section id="cities" className="py-12 sm:py-16 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Modular Kitchens Across Delhi NCR" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {CITIES.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group cursor-pointer rounded-xl border bg-card p-5 text-center transition-colors hover:border-amber-700"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                <MapPin className="h-5 w-5 text-amber-700 dark:text-amber-400" />
              </div>
              <h3 className="mt-3 font-semibold text-sm">{item.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Popular Searches ───────────────────────────────────────────────

function PopularSearchesSection() {
  return (
    <section id="popular-searches" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Popular Searches" />
        <div className="flex flex-wrap gap-2">
          {POPULAR_SEARCHES.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="cursor-pointer rounded-full border border-border bg-muted/50 px-3 py-1.5 text-sm transition-colors hover:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-950/20"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: FAQ ────────────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section id="faq" className="py-12 sm:py-16 bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// ─── Section Map ─────────────────────────────────────────────────────────────

const SECTION_MAP: Record<typeof SECTION_ORDER[number], () => React.JSX.Element> = {
  startHere: StartHereSection,
  layouts: LayoutsSection,
  materials: MaterialsSection,
  budget: BudgetSection,
  nearMe: NearMeSection,
  commercial: CommercialSection,
  renovation: RenovationRepairSection,
  repair: RenovationRepairSection, // combined in renovation section
  guides: GuidesSection,
  cities: CitiesSection,
  popularSearches: PopularSearchesSection,
  faq: FaqSection,
};

// ─── Page Component ──────────────────────────────────────────────────────────

export default function ModularKitchenGuidePage() {
  useEffect(() => {
    document.title = "Modular Kitchen Guide \u2014 Designs, Cost, Materials & More | FurniRevive Delhi NCR";

    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Complete modular kitchen guide for Delhi NCR homeowners. Explore layouts, materials, budgets, designers, showrooms, and local installation. FurniRevive \u2014 280+ kitchens installed.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }

    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute("href", "https://furnirevive.com/modular-kitchen-guide");
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://furnirevive.com/modular-kitchen-guide";
      document.head.appendChild(link);
    }

    return () => {
      const canon = document.querySelector('link[rel="canonical"][href="https://furnirevive.com/modular-kitchen-guide"]');
      if (canon) canon.remove();
    };
  }, []);

  // Deduplicate: "repair" uses same component as "renovation"
  const rendered = new Set<string>();
  const sections = SECTION_ORDER.filter((key) => {
    const component = SECTION_MAP[key];
    const id = component.name;
    if (rendered.has(id)) return false;
    rendered.add(id);
    return true;
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Dark Hero */}
        <section className="bg-stone-900 py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-stone-400" aria-label="Breadcrumb">
              <Link to="/" className="cursor-pointer hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-stone-200">Modular Kitchen Guide</span>
            </nav>

            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-balance">
              Modular Kitchen Guide
            </h1>
            <p className="mt-4 text-base text-stone-300 sm:text-lg max-w-2xl mx-auto text-balance">
              Everything you need to plan, design, and install your modular kitchen in Delhi NCR — layouts, materials, budgets, local designers, showrooms, and more.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
              >
                <PhoneCall className="h-4 w-4" />
                Call for Free Consultation
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need help with my modular kitchen`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Trust Strip + Stats Bar */}
        <KitchenTrustStrip />
        <KitchenStatsBar />

        {/* Dynamic sections */}
        {sections.map((key) => {
          const Component = SECTION_MAP[key];
          return <Component key={key} />;
        })}

        {/* Bottom CTA */}
        <section className="bg-stone-900 py-14 sm:py-16 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to build your dream kitchen?</h2>
            <p className="mt-3 text-stone-300 sm:text-lg">
              Get a free home visit and 3D design plan — no commitment required.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
              >
                <PhoneCall className="h-4 w-4" />
                Call for Free Consultation
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need help with my modular kitchen`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <NearMeCTA variant="featured" pageType="guide" />
      <Footer />
    </>
  );
}
