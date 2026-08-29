import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Home,
  IndianRupee,
  LayoutGrid,
  Wrench,
  Building2,
  Pencil,
  Factory,
  ShoppingBag,
  Ruler,
  CheckCircle2,
  Star,
  ChevronRight,
  Hammer,
  Grid2x2,
  Minus,
  Sparkles,
  Paintbrush,
  Gem,
} from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import { KitchenStatsBar } from "@/components/kitchen-guide-conversion.tsx";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion.tsx";

// ─── Data ────────────────────────────────────────────────────────────────────

const WHY_CARDS = [
  { icon: MapPin, title: "Local Design Consultants", desc: "Our designers visit your home in person — we serve every neighbourhood across Delhi NCR." },
  { icon: Ruler, title: "Free Home Measurements", desc: "We measure your kitchen space precisely and create a 3D layout plan within 48 hours." },
  { icon: Wrench, title: "Dedicated Install Teams", desc: "City-specific installation crews who know local building conditions and apartment types." },
  { icon: Factory, title: "Local Manufacturing", desc: "Our factory is in Delhi NCR — shorter lead times, easier quality checks, and no long-distance freight." },
  { icon: CheckCircle2, title: "Fast After-Sales Support", desc: "Local teams mean same-week response for any post-installation adjustments or repairs." },
] as const;

const AREAS: Record<string, { name: string; localities: { label: string; href: string }[]; allHref: string }> = {
  delhi: {
    name: "Delhi",
    allHref: "/modular-kitchen-delhi",
    localities: [
      { label: "Greater Kailash", href: "/modular-kitchen-greater-kailash" },
      { label: "Vasant Kunj", href: "/modular-kitchen-vasant-kunj" },
      { label: "Saket", href: "/modular-kitchen-saket" },
      { label: "Dwarka", href: "/modular-kitchen-dwarka-delhi" },
      { label: "Rohini", href: "/modular-kitchen-rohini" },
      { label: "South Delhi", href: "/modular-kitchen-south-delhi" },
      { label: "New Friends Colony", href: "/modular-kitchen-new-friends-colony" },
      { label: "Panchsheel Park", href: "/modular-kitchen-panchsheel-park" },
      { label: "Hauz Khas", href: "/modular-kitchen-hauz-khas" },
      { label: "Defence Colony", href: "/modular-kitchen-defence-colony" },
    ],
  },
  gurgaon: {
    name: "Gurgaon",
    allHref: "/modular-kitchen-gurgaon",
    localities: [
      { label: "DLF Phase 5", href: "/modular-kitchen-dlf-phase-5" },
      { label: "Golf Course Road", href: "/modular-kitchen-golf-course-road" },
      { label: "Golf Course Extension", href: "/modular-kitchen-golf-course-extension-road" },
      { label: "Sushant Lok", href: "/modular-kitchen-sushant-lok" },
      { label: "Sohna Road", href: "/modular-kitchen-sohna-road" },
      { label: "Nirvana Country", href: "/modular-kitchen-nirvana-country" },
      { label: "South City", href: "/modular-kitchen-south-city" },
      { label: "Sector 56", href: "/modular-kitchen-sector-56" },
      { label: "Palam Vihar", href: "/modular-kitchen-palam-vihar" },
      { label: "MG Road", href: "/modular-kitchen-mg-road" },
    ],
  },
  noida: {
    name: "Noida",
    allHref: "/modular-kitchen-noida",
    localities: [
      { label: "Sector 50", href: "/modular-kitchen-sector-50" },
      { label: "Sector 137", href: "/modular-kitchen-sector-137" },
      { label: "Noida Extension", href: "/modular-kitchen-noida-extension" },
      { label: "Sector 62", href: "/modular-kitchen-sector-62" },
      { label: "Sector 18", href: "/modular-kitchen-sector-18" },
      { label: "Sector 76", href: "/modular-kitchen-sector-76" },
      { label: "Sector 100", href: "/modular-kitchen-sector-100" },
      { label: "Expressway Corridor", href: "/modular-kitchen-expressway-corridor" },
      { label: "Alpha 1 Greater Noida", href: "/modular-kitchen-alpha-1" },
      { label: "Sector 93", href: "/modular-kitchen-sector-93" },
    ],
  },
  ghaziabad: {
    name: "Ghaziabad",
    allHref: "/modular-kitchen-ghaziabad",
    localities: [
      { label: "Indirapuram", href: "/modular-kitchen-indirapuram" },
      { label: "Vaishali", href: "/modular-kitchen-vaishali" },
      { label: "Kaushambi", href: "/modular-kitchen-kaushambi" },
      { label: "Raj Nagar Extension", href: "/modular-kitchen-raj-nagar-extension" },
      { label: "Vasundhara", href: "/modular-kitchen-vasundhara" },
      { label: "Wave City", href: "/modular-kitchen-wave-city" },
      { label: "Crossings Republik", href: "/modular-kitchen-crossings-republik" },
      { label: "Shipra Sun City", href: "/modular-kitchen-shipra-sun-city" },
      { label: "Gyan Khand", href: "/modular-kitchen-gyan-khand-1" },
      { label: "Siddharth Vihar", href: "/modular-kitchen-siddharth-vihar" },
    ],
  },
  faridabad: {
    name: "Faridabad",
    allHref: "/modular-kitchen-faridabad",
    localities: [
      { label: "Sector 28", href: "/modular-kitchen-sector-28" },
      { label: "NIT Faridabad", href: "/modular-kitchen-nit" },
      { label: "Neharpar", href: "/modular-kitchen-neharpar" },
      { label: "BPTP Park Lands", href: "/modular-kitchen-bptp-park-lands" },
      { label: "Greenfields Colony", href: "/modular-kitchen-greenfields-colony" },
      { label: "Sector 15", href: "/modular-kitchen-sector-15" },
      { label: "Greater Faridabad", href: "/modular-kitchen-greater-faridabad" },
      { label: "Suraj Kund", href: "/modular-kitchen-suraj-kund" },
      { label: "Ballabhgarh", href: "/modular-kitchen-ballabhgarh" },
      { label: "Old Faridabad", href: "/modular-kitchen-old-faridabad" },
    ],
  },
};

const POPULAR_DESIGNS = [
  { style: "Acrylic Kitchen", area: "Greater Kailash", href: "/modular-kitchen-greater-kailash", material: "High-gloss acrylic finish with Hettich hardware" },
  { style: "L-Shape Kitchen", area: "Gurgaon", href: "/l-shape-modular-kitchen-gurgaon", material: "Laminate finish, full-extension drawers" },
  { style: "Parallel Kitchen", area: "Noida", href: "/parallel-modular-kitchen-noida", material: "Acrylic shutters with soft-close hinges" },
  { style: "Luxury Kitchen", area: "Vasant Kunj", href: "/modular-kitchen-vasant-kunj", material: "PU finish with Blum hardware and quartz countertop" },
  { style: "Matte Finish Kitchen", area: "DLF Phase 5", href: "/modular-kitchen-dlf-phase-5", material: "Membrane finish with anti-fingerprint texture" },
  { style: "Modern Kitchen", area: "South Delhi", href: "/modular-kitchen-south-delhi", material: "Glass shutters with LED lighting and Hafele hardware" },
] as const;

const RIGHT_SERVICE = [
  { want: "Design a new modular kitchen", label: "Modular Kitchen Design", href: "/modular-kitchen-designer-delhi" },
  { want: "Get a modular kitchen installed", label: "Installation Service", href: "/modular-kitchen-installation-delhi" },
  { want: "Visit a showroom", label: "Showroom Locations", href: "/modular-kitchen-showroom-delhi" },
  { want: "Compare materials", label: "Acrylic vs Laminate Guide", href: "/acrylic-vs-laminate-modular-kitchen" },
  { want: "Renovate my old kitchen", label: "Kitchen Renovation", href: "/modular-kitchen-renovation" },
  { want: "Repair my kitchen", label: "Kitchen Repair Guide", href: "/modular-kitchen-repair-guide" },
] as const;

const INTENT_CARDS = [
  { label: "Modular Kitchen Company", q: "Looking for a trusted kitchen company?", href: "/modular-kitchen-company-delhi", icon: Building2 },
  { label: "Modular Kitchen Designer", q: "Need a designer for 3D plans?", href: "/modular-kitchen-designer-delhi", icon: Pencil },
  { label: "Kitchen Showroom", q: "Want to see samples in person?", href: "/modular-kitchen-showroom-delhi", icon: ShoppingBag },
  { label: "Kitchen Installation", q: "Need professional installation?", href: "/modular-kitchen-installation-delhi", icon: Wrench },
  { label: "Kitchen Manufacturer", q: "Looking for factory-direct pricing?", href: "/modular-kitchen-manufacturer-delhi", icon: Factory },
  { label: "Kitchen Dealer", q: "Searching for an authorised dealer?", href: "/modular-kitchen-dealer-delhi", icon: Star },
  { label: "Kitchen Contractors", q: "Need end-to-end project contractors?", href: "/modular-kitchen-contractors-delhi", icon: Hammer },
] as const;

const KITCHEN_LAYOUTS = [
  { label: "L-Shape", href: "/l-shape-modular-kitchen-delhi", icon: Grid2x2 },
  { label: "Parallel", href: "/parallel-modular-kitchen-delhi", icon: Minus },
  { label: "U-Shape", href: "/u-shape-modular-kitchen-delhi", icon: LayoutGrid },
  { label: "Straight", href: "/straight-modular-kitchen-delhi", icon: Minus },
  { label: "Island", href: "/island-modular-kitchen-delhi", icon: Home },
  { label: "Peninsula", href: "/peninsula-modular-kitchen-delhi", icon: MapPin },
] as const;

const KITCHEN_MATERIALS = [
  { label: "Acrylic", href: "/acrylic-modular-kitchen-delhi", icon: Sparkles },
  { label: "Laminate", href: "/laminate-modular-kitchen-delhi", icon: LayoutGrid },
  { label: "PU", href: "/pu-modular-kitchen-delhi", icon: Paintbrush },
  { label: "Membrane", href: "/modular-kitchen-materials", icon: Gem },
  { label: "Glass", href: "/modular-kitchen-materials", icon: Grid2x2 },
] as const;

const BUDGET_TIERS = [
  { label: "Under ₹50,000", tag: "Budget-Friendly", href: "/blog/modular-kitchen-cost-delhi-guide" },
  { label: "₹50K – ₹1.5L", tag: "Mid-Range", href: "/blog/modular-kitchen-cost-delhi-guide" },
  { label: "₹1.5L – ₹3L", tag: "Premium", href: "/blog/modular-kitchen-cost-delhi-guide" },
  { label: "₹3L+", tag: "Luxury", href: "/blog/modular-kitchen-cost-delhi-guide" },
] as const;

const STEPS = [
  { n: 1, title: "Free Home Visit", desc: "Our designer visits your home, assesses the kitchen space, and understands your requirements." },
  { n: 2, title: "Measurement & Survey", desc: "Precise measurements of your kitchen — walls, windows, doors, plumbing, and electrical points." },
  { n: 3, title: "3D Design & Quote", desc: "We create a detailed 3D kitchen layout and provide a written, itemised quote within 48 hours." },
  { n: 4, title: "Factory Manufacturing", desc: "Your kitchen is manufactured in our Delhi NCR factory with quality-checked materials and hardware." },
  { n: 5, title: "Installation", desc: "Our installation team fits and aligns your kitchen. Most installations complete in 5–10 days." },
] as const;

const WHY_CHOOSE = [
  { icon: MapPin, title: "Free Home Visit", desc: "We come to you — no showroom visit required before your quote." },
  { icon: LayoutGrid, title: "3D Design Included", desc: "Every kitchen comes with a full 3D design plan at no extra cost." },
  { icon: Factory, title: "Factory Manufacturing", desc: "In-house factory in Delhi NCR — no middlemen, better quality control." },
  { icon: Star, title: "Premium Hardware", desc: "Hettich, Blum, and Hafele hardware as standard — not as upgrades." },
  { icon: CheckCircle2, title: "10-Year Warranty", desc: "10-year structural warranty on carcass and hardware on every kitchen." },
  { icon: MapPin, title: "Delhi NCR Coverage", desc: "Full coverage across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad." },
] as const;

const FAQS = [
  { question: "How do I find a modular kitchen company near me?", answer: "FurniRevive has local design consultants across all Delhi NCR. Call or WhatsApp to book a free home visit." },
  { question: "Do you provide free home visits?", answer: "Yes, our designers visit your home, measure the space, and create a 3D plan — all at no charge." },
  { question: "Do you install kitchens in apartments?", answer: "Yes, we work with all apartment types including builder floors, DDA flats, and high-rise societies across Delhi NCR." },
  { question: "How long does modular kitchen installation take?", answer: "Typically 5–10 days for installation after manufacturing is complete. Full project turnaround is 3–5 weeks." },
  { question: "What warranty do you offer?", answer: "10-year structural warranty on carcass and hardware, plus 5-year finish warranty on shutters and surfaces." },
  { question: "Which areas in Delhi NCR do you serve?", answer: "We serve all of Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad — including hundreds of localities across Delhi NCR." },
] as const;

const POPULAR_SEARCHES = [
  { label: "Modular Kitchen Delhi", href: "/modular-kitchen-delhi" },
  { label: "Modular Kitchen Gurgaon", href: "/modular-kitchen-gurgaon" },
  { label: "Modular Kitchen Noida", href: "/modular-kitchen-noida" },
  { label: "Modular Kitchen Ghaziabad", href: "/modular-kitchen-ghaziabad" },
  { label: "Modular Kitchen Faridabad", href: "/modular-kitchen-faridabad" },
  { label: "L-Shape Kitchen Delhi", href: "/l-shape-modular-kitchen-delhi" },
  { label: "U-Shape Kitchen Gurgaon", href: "/u-shape-modular-kitchen-gurgaon" },
  { label: "Parallel Kitchen Noida", href: "/parallel-modular-kitchen-noida" },
  { label: "Acrylic Kitchen Delhi", href: "/acrylic-modular-kitchen-delhi" },
  { label: "Laminate Kitchen Gurgaon", href: "/laminate-modular-kitchen-gurgaon" },
  { label: "Kitchen Cost Delhi", href: "/blog/modular-kitchen-cost-delhi-guide" },
  { label: "Kitchen Cost Gurgaon", href: "/modular-kitchen-cost-gurgaon" },
  { label: "Kitchen Renovation", href: "/modular-kitchen-renovation" },
  { label: "Kitchen Repair Guide", href: "/modular-kitchen-repair-guide" },
  { label: "Acrylic vs Laminate", href: "/acrylic-vs-laminate-modular-kitchen" },
  { label: "L-Shape vs U-Shape", href: "/l-shape-vs-u-shape-modular-kitchen" },
  { label: "Kitchen Under ₹50,000", href: "/modular-kitchen-under-50000" },
  { label: "Kitchen Under ₹3 Lakh", href: "/modular-kitchen-under-3-lakh" },
] as const;

const ALSO_SEARCH = [
  { label: "Wardrobe & Closet Design Near Me", href: "/" },
  { label: "Interior Designer Near Me", href: "/" },
  { label: "Kitchen Renovation Near Me", href: "/modular-kitchen-renovation" },
  { label: "Kitchen Repair Near Me", href: "/modular-kitchen-repair-guide" },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export default function ModularKitchenNearMePage() {
  const [activeTab, setActiveTab] = useState("delhi");

  useEffect(() => {
    document.title = "Modular Kitchen Near Me in Delhi NCR | FurniRevive";
    const metaDesc = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');

    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    const prevCanonical = canonical?.getAttribute("href") ?? "";

    if (metaDesc) {
      metaDesc.setAttribute("content", "Looking for a modular kitchen company near you? FurniRevive designs and installs modular kitchens across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad. Free home visit.");
    }
    if (canonical) {
      canonical.setAttribute("href", "https://furnirevive.com/modular-kitchen-near-me");
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://furnirevive.com/modular-kitchen-near-me";
      document.head.appendChild(link);
    }

    return () => {
      if (metaDesc) metaDesc.setAttribute("content", prevDesc);
      if (canonical) canonical.setAttribute("href", prevCanonical);
    };
  }, []);

  const activeArea = AREAS[activeTab];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* 1. Dark Hero */}
      <section className="bg-stone-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Modular Kitchen Near Me in Delhi NCR – Free Home Visit & 3D Design
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg mb-8">
            Looking for the best modular kitchen company near you? FurniRevive provides free home visits, 3D kitchen designs, factory manufacturing, and professional installation across Delhi NCR.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Call for Free Consultation
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'm looking for modular kitchen near me")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              "Free Home Visit",
              "3D Design Included",
              "Factory Manufacturing",
              "10-Year Structural Warranty",
            ].map((signal) => (
              <span
                key={signal}
                className="inline-flex items-center gap-1.5 bg-stone-800 border border-stone-700 text-stone-200 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                <CheckCircle2 className="w-3 h-3 text-amber-400" />
                {signal}
              </span>
            ))}
          </div>
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-stone-400">
            <Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/modular-kitchen-guide" className="hover:text-white transition-colors cursor-pointer">Modular Kitchen Guide</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-200">Near Me</span>
          </nav>
        </div>
      </section>

      {/* 2. Trust Strip + Stats Bar */}
      <KitchenTrustStrip />
      <KitchenStatsBar />

      {/* 3. Why We're Near You */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Why Homeowners Choose FurniRevive</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
            When you search for a <strong>modular kitchen company near me</strong>, you need a team that's truly local — designers, installers, and support staff who know your neighbourhood.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-xl border bg-card p-5">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-amber-700" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Areas Covered */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Areas We Cover</h2>
          {/* Tab bar */}
          <div className="flex gap-2 flex-wrap mb-6 justify-center">
            {Object.entries(AREAS).map(([key, area]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === key
                    ? "bg-amber-700 text-white"
                    : "border border-border bg-card hover:border-amber-700"
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>
          {/* Locality pills */}
          {activeArea && (
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {activeArea.localities.map((loc) => (
                  <Link
                    key={loc.href}
                    to={loc.href}
                    className="rounded-full border border-border px-3 py-1.5 text-sm hover:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors cursor-pointer"
                  >
                    {loc.label}
                  </Link>
                ))}
              </div>
              <Link
                to={activeArea.allHref}
                className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
              >
                View all {activeArea.name} locations <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 5. Popular Kitchen Designs in Delhi NCR */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Recently Designed Kitchens</h2>
          <p className="text-center text-muted-foreground mb-8">
            A selection of kitchen styles we design and install across Delhi NCR — from compact L-Shapes to luxury island kitchens.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {POPULAR_DESIGNS.map((design) => (
              <Link
                key={design.style}
                to={design.href}
                className="rounded-xl border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group"
              >
                <h3 className="font-semibold mb-2 group-hover:text-amber-700 transition-colors">{design.style}</h3>
                <span className="inline-block text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded-full mb-2">
                  {design.area}
                </span>
                <p className="text-xs text-muted-foreground">{design.material}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Choose the Right Service */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Choose the Right Service</h2>
          <p className="text-center text-muted-foreground mb-8">
            Not sure where to start? Pick what you{"'"}re looking for.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {RIGHT_SERVICE.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="rounded-xl border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group flex items-center justify-between"
              >
                <div>
                  <p className="text-xs text-muted-foreground mb-1">I want to...</p>
                  <p className="font-semibold text-sm text-amber-700 group-hover:text-amber-800">{item.label}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-700 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Commercial Intent Links */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Find a Modular Kitchen Designer or Company Near Me</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTENT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.label}
                  to={card.href}
                  className="rounded-xl border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-amber-700" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-amber-700 transition-colors">{card.label}</h3>
                  <p className="text-xs text-muted-foreground">{card.q}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Kitchen Layouts */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Kitchen Layouts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {KITCHEN_LAYOUTS.map((layout) => {
              const Icon = layout.icon;
              return (
                <Link
                  key={layout.label}
                  to={layout.href}
                  className="rounded-xl border bg-card p-4 text-center hover:border-amber-700 transition-colors cursor-pointer group"
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-amber-700" />
                  <p className="text-sm font-medium group-hover:text-amber-700 transition-colors">{layout.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Materials */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Kitchen Materials</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {KITCHEN_MATERIALS.map((mat) => {
              const Icon = mat.icon;
              return (
                <Link
                  key={mat.label}
                  to={mat.href}
                  className="rounded-xl border bg-card p-4 text-center hover:border-amber-700 transition-colors cursor-pointer group"
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-amber-700" />
                  <p className="text-sm font-medium group-hover:text-amber-700 transition-colors">{mat.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Budget Cards */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Kitchen Budgets</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {BUDGET_TIERS.map((tier) => (
              <Link
                key={tier.label}
                to={tier.href}
                className="rounded-xl border bg-card p-4 text-center hover:border-amber-700 transition-colors cursor-pointer group"
              >
                <IndianRupee className="w-5 h-5 mx-auto mb-2 text-amber-700" />
                <p className="text-sm font-bold group-hover:text-amber-700 transition-colors">{tier.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{tier.tag}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Design Process — Vertical Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Our Process</h2>
          <p className="text-center text-muted-foreground mb-10 text-sm">How our <strong>modular kitchen installation near me</strong> service works — from first visit to finished kitchen.</p>
          <div className="relative">
            {STEPS.map((step, i) => (
              <div key={step.n} className="flex gap-4 pb-8 last:pb-0">
                {/* Timeline line + circle */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {step.n}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-amber-200 dark:bg-amber-800 mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Why Choose FurniRevive — Dark section */}
      <section className="bg-stone-900 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose FurniRevive</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl bg-stone-800 border border-stone-700 p-5">
                  <div className="w-9 h-9 rounded-lg bg-amber-700 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Browse By City */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Browse Kitchens By City</h2>
          <p className="text-center text-muted-foreground mb-8 text-sm">Serving localities across Delhi NCR — find modular kitchen services in your city.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { city: "Delhi", desc: "Serving localities across Delhi", areas: ["Greater Kailash", "Saket", "Dwarka"], href: "/modular-kitchen-delhi" },
              { city: "Gurgaon", desc: "Serving localities across Gurgaon", areas: ["DLF Phase 5", "Golf Course Rd", "Sushant Lok"], href: "/modular-kitchen-gurgaon" },
              { city: "Noida", desc: "Serving localities across Noida", areas: ["Sector 50", "Sector 137", "Noida Ext"], href: "/modular-kitchen-noida" },
              { city: "Ghaziabad", desc: "Serving localities across Ghaziabad", areas: ["Indirapuram", "Vaishali", "Kaushambi"], href: "/modular-kitchen-ghaziabad" },
              { city: "Faridabad", desc: "Serving localities across Faridabad", areas: ["NIT", "Neharpar", "Greater Faridabad"], href: "/modular-kitchen-faridabad" },
            ].map((item) => (
              <Link
                key={item.city}
                to={item.href}
                className="rounded-xl border bg-card p-4 hover:border-amber-700 transition-colors cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                  <MapPin className="w-4 h-4 text-amber-700" />
                </div>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-amber-700 transition-colors">{item.city}</h3>
                <p className="text-xs text-muted-foreground mb-2">{item.desc}</p>
                <ul className="space-y-0.5">
                  {item.areas.map((area) => (
                    <li key={area} className="text-xs text-muted-foreground">• {area}</li>
                  ))}
                </ul>
                <p className="text-xs text-amber-700 font-medium mt-2">View {item.city} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Search Near Me */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Why People Search "Modular Kitchen Near Me"</h2>
          <p className="text-center text-muted-foreground mb-8 text-sm">Most people searching near me are looking for one of these three things.</p>
          <div className="grid sm:grid-cols-3 gap-5">
            <Link to="/modular-kitchen-designer-delhi" className="rounded-xl border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group">
              <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                <Pencil className="w-4 h-4 text-amber-700" />
              </div>
              <h3 className="font-semibold text-sm mb-1 group-hover:text-amber-700 transition-colors">Need a home design consultation?</h3>
              <p className="text-xs text-muted-foreground mb-3">Find a modular kitchen designer near me who visits your home and creates a 3D plan.</p>
              <span className="text-xs text-amber-700 font-medium">Kitchen Designer Delhi →</span>
            </Link>
            <Link to="/modular-kitchen-installation-delhi" className="rounded-xl border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group">
              <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                <Wrench className="w-4 h-4 text-amber-700" />
              </div>
              <h3 className="font-semibold text-sm mb-1 group-hover:text-amber-700 transition-colors">Looking for a nearby installation team?</h3>
              <p className="text-xs text-muted-foreground mb-3">Professional modular kitchen installation near me — from site prep to final alignment.</p>
              <span className="text-xs text-amber-700 font-medium">Kitchen Installation Delhi →</span>
            </Link>
            <Link to="/acrylic-vs-laminate-modular-kitchen" className="rounded-xl border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group">
              <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4 text-amber-700" />
              </div>
              <h3 className="font-semibold text-sm mb-1 group-hover:text-amber-700 transition-colors">Want to compare materials before buying?</h3>
              <p className="text-xs text-muted-foreground mb-3">Acrylic vs Laminate vs PU — understand the differences before choosing your kitchen finish.</p>
              <span className="text-xs text-amber-700 font-medium">Materials Guide →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 13. FAQ Accordion */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 14. Popular Searches */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Popular Searches</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {POPULAR_SEARCHES.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="rounded-full border border-border px-3 py-1.5 text-sm hover:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 15. People Also Search For */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">People Also Search For</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {ALSO_SEARCH.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="rounded-xl border bg-card p-4 hover:border-amber-700 transition-colors cursor-pointer group flex items-center justify-between"
              >
                <span className="text-sm font-medium group-hover:text-amber-700 transition-colors">{item.label}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-amber-700 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-4 px-4 border-t bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            <strong>Last Updated: August 2026</strong> — This guide is regularly updated to reflect our latest service areas, kitchen materials, hardware options, and installation processes across Delhi NCR.
          </p>
        </div>
      </section>

      {/* 16. Link to Master Guide */}
      <section className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-2">Explore the complete modular kitchen resource</p>
          <Link
            to="/modular-kitchen-guide"
            className="inline-flex items-center gap-1 text-amber-700 font-semibold hover:text-amber-800 transition-colors cursor-pointer"
          >
            Modular Kitchen Guide <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Pre-CTA conversion strip */}
      <section className="py-10 px-4 bg-amber-50 dark:bg-amber-950/20 border-t border-amber-200 dark:border-amber-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Ready to Design Your Kitchen?</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            {["Free Home Visit", "3D Design", "Factory Manufacturing", "Professional Installation"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 font-medium text-foreground">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                {item}
              </span>
            ))}
          </div>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" /> Book Your Free Consultation
          </a>
        </div>
      </section>

      {/* 17. Footer CTA */}
      <section className="bg-stone-900 text-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Get Your Free Kitchen Consultation</h2>
          <p className="text-stone-300 text-sm mb-6">
            Call or WhatsApp us to schedule a free home visit and 3D design plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'm looking for modular kitchen near me")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
