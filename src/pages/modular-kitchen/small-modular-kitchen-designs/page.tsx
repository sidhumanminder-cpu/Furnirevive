import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, Ruler } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import PremiumKitchenGallery from "@/pages/modular-kitchen/_components/PremiumKitchenGallery.tsx";
import { ROOT_GALLERY } from "@/pages/modular-kitchen/_components/kitchen-gallery-images.ts";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE =
  "Small Modular Kitchen Designs 2025 — Compact Kitchen Ideas for 1BHK & 2BHK | FurniRevive";
const META_DESCRIPTION =
  "Small modular kitchen designs for 1BHK and 2BHK flats in Delhi NCR. Compact straight, parallel and L-shape kitchens from ₹80,000. Space-saving storage and smart layouts.";
const CANONICAL = "https://furnirevive.com/small-modular-kitchen-designs";
const HERO_IMAGE = "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT";

type LayoutCard = {
  title: string;
  sqFt: string;
  price: string;
  pros: string[];
};

const LAYOUT_CARDS: LayoutCard[] = [
  {
    title: "Straight Kitchen",
    sqFt: "< 60 sq ft",
    price: "From ₹80,000",
    pros: [
      "Most space-efficient single-wall layout",
      "Ideal for narrow 1BHK kitchens",
      "Lowest cost of all layouts",
    ],
  },
  {
    title: "Parallel Kitchen",
    sqFt: "60–80 sq ft",
    price: "From ₹1.2L",
    pros: [
      "Maximum storage on two walls",
      "Efficient workflow with facing counters",
      "Great for 2BHK galley kitchens",
    ],
  },
  {
    title: "L-Shape Kitchen",
    sqFt: "80–100 sq ft",
    price: "From ₹1.5L",
    pros: [
      "Corner efficiency with carousel units",
      "Open feel with one free wall",
      "Fits slightly larger 2BHK flats",
    ],
  },
];

const SPACE_SAVING_TIPS = [
  { title: "Tall cabinets to ceiling", desc: "Use full wall height for pantry and storage — no wasted space above." },
  { title: "Pull-out drawers", desc: "Easier access than shelves, better organization for utensils and spices." },
  { title: "Corner carousel units", desc: "Eliminate dead corner space with rotating baskets or magic corners." },
  { title: "Under-sink storage", desc: "Fit pull-out bins and cleaning supply organizers below the sink." },
  { title: "Wall-mounted shelves", desc: "Display and access items without consuming floor or counter space." },
  { title: "Foldable countertop extension", desc: "Extra prep area that folds down when not in use — perfect for tiny kitchens." },
];

type BudgetCard = {
  range: string;
  finish: string;
  layout: string;
  highlights: string[];
};

const BUDGET_CARDS: BudgetCard[] = [
  {
    range: "Under ₹1 Lakh",
    finish: "Laminate finish",
    layout: "Straight layout",
    highlights: ["Basic hardware", "Granite countertop", "Best for 1BHK kitchens up to 60 sq ft"],
  },
  {
    range: "₹1L – ₹2.5L",
    finish: "Acrylic finish",
    layout: "Parallel layout",
    highlights: ["Soft-close hardware", "Quartz countertop option", "Ideal for 2BHK galley kitchens"],
  },
  {
    range: "₹2.5L – ₹5L",
    finish: "Acrylic / Membrane finish",
    layout: "L-shape with island shelf",
    highlights: ["Premium hardware & accessories", "Integrated appliance zone", "Full modular with island extension"],
  },
];

const RELATED_PAGES = [
  { label: "Modular Kitchen for Small Flat", href: "/modular-kitchen-for-small-flat" },
  { label: "Modular Kitchen Budget Guide", href: "/modular-kitchen-budget" },
  { label: "Modular Kitchen Under ₹3 Lakh", href: "/modular-kitchen-under-3-lakh" },
];

const CITY_LINKS = [
  { label: "Delhi", href: "/modular-kitchen-delhi" },
  { label: "Gurgaon", href: "/modular-kitchen-gurgaon" },
  { label: "Noida", href: "/modular-kitchen-noida" },
];

const FAQS = [
  {
    q: "What is the minimum size required for a modular kitchen?",
    a: "A modular kitchen can be installed in as little as 40–50 sq ft. A straight (single-wall) layout fits kitchens as narrow as 5 ft wide and 8 ft long, which is common in 1BHK apartments.",
  },
  {
    q: "What is the cheapest modular kitchen option for a small flat?",
    a: "A straight-line layout with laminate finish, basic hardware and granite countertop is the most affordable. Prices start at ₹80,000 for kitchens up to 6×6 ft.",
  },
  {
    q: "Which layout is best for a 1BHK kitchen?",
    a: "Straight (single-wall) is ideal for most 1BHK kitchens under 60 sq ft. If you have a corner available, a compact L-shape also works well in slightly larger 1BHK kitchens.",
  },
  {
    q: "How long does it take to install a small modular kitchen?",
    a: "Installation takes 3–5 days for small kitchens. This includes old kitchen demolition, plumbing alignment, cabinet installation, countertop fitting and final hardware setup.",
  },
  {
    q: "What warranty do you offer on small modular kitchens?",
    a: "We provide a 10-year warranty on carcass and structure, 5 years on hardware (hinges, channels), and 1 year on finish. Warranty covers manufacturing defects and material degradation.",
  },
];

type Testimonial = { name: string; location: string; text: string; rating: number };
const TESTIMONIALS: Testimonial[] = [
  { name: "Geeta Sharma", location: "Rohini, Delhi", text: "FurniRevive made our tiny 1BHK kitchen look and function like a dream. The pull-out drawers and ceiling-height cabinets made such a difference in storage.", rating: 5 },
  { name: "Mohit Jain", location: "Sector 23, Faridabad", text: "Very impressed with how they designed a parallel kitchen in our small galley space. Maximum storage, clean lines and delivered on time.", rating: 5 },
  { name: "Anita Singh", location: "Vaishali, Ghaziabad", text: "Compact L-shape kitchen installed in a 2BHK — the magic corner unit was a game changer. No wasted space at all. Great value for money.", rating: 5 },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SmallModularKitchenDesignsPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", META_DESCRIPTION);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = META_DESCRIPTION;
      document.head.appendChild(m);
    }
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = CANONICAL;
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Small modular kitchen design for Indian flat"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 w-full px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
              <Link to="/" className="hover:text-white cursor-pointer">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/modular-kitchen" className="hover:text-white cursor-pointer">Modular Kitchen</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80 font-medium">Small Kitchen Designs</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              Small Modular Kitchen Designs — Compact Solutions for Indian Flats
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              Smart modular kitchens designed for small Indian flats — maximum storage, minimal footprint, starting ₹80,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" /> Call for Free Consultation
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20a%20small%20modular%20kitchen%20design`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <KitchenTrustStrip />

      {/* Gallery */}
      {ROOT_GALLERY.length > 0 && (
        <div id="gallery">
          <PremiumKitchenGallery images={ROOT_GALLERY} title="Small Modular Kitchen Gallery" />
        </div>
      )}

      {/* Best Layouts for Small Kitchens */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Best Layouts for Small Kitchens</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {LAYOUT_CARDS.map((card) => (
              <div key={card.title} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1 bg-muted/60 rounded px-2 py-1">
                    <Ruler className="h-3 w-3" /> {card.sqFt}
                  </span>
                  <span className="bg-muted/60 rounded px-2 py-1 font-medium text-primary">{card.price}</span>
                </div>
                <ul className="space-y-2">
                  {card.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space-Saving Tips */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">6 Space-Saving Tips for Small Kitchens</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SPACE_SAVING_TIPS.map((tip, i) => (
              <div key={tip.title} className="bg-card rounded-xl border border-border p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-sm">{tip.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Kitchen by Budget */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Small Kitchen by Budget</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {BUDGET_CARDS.map((card) => (
              <div key={card.range} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold text-primary mb-1">{card.range}</h3>
                <p className="text-sm text-muted-foreground mb-1">{card.finish} • {card.layout}</p>
                <ul className="mt-3 space-y-2">
                  {card.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Explore Related Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {RELATED_PAGES.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="rounded-xl border bg-card p-5 hover:border-amber-700 transition-colors cursor-pointer group"
              >
                <p className="font-semibold text-sm text-foreground group-hover:text-amber-700 transition-colors flex items-center gap-1">
                  {page.label} <ChevronRight className="h-3.5 w-3.5" />
                </p>
              </Link>
            ))}
          </div>
          <h3 className="text-lg font-semibold mb-3">Modular Kitchen by City</h3>
          <div className="flex flex-wrap gap-3">
            {CITY_LINKS.map((city) => (
              <Link
                key={city.href}
                to={city.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline cursor-pointer"
              >
                {city.label} <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HomeServicesSection */}
      <HomeServicesSection service="modular-kitchen" pageType="hub" />

      {/* Testimonials */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg leading-none text-amber-400">&#9733;</span>
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{`"${t.text}"`}</p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4">
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

      {/* Related Blogs */}
      <KitchenRelatedBlogs slug="small-modular-kitchen-designs" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
