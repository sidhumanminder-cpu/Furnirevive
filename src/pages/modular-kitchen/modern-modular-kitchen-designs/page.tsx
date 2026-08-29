import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import PremiumKitchenGallery from "@/pages/modular-kitchen/_components/PremiumKitchenGallery.tsx";
import { ROOT_GALLERY } from "@/pages/modular-kitchen/_components/kitchen-gallery-images.ts";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "Modern Modular Kitchen Designs 2025 — Contemporary Indian Kitchen Ideas | FurniRevive";
const META_DESCRIPTION = "Modern modular kitchen designs for Indian homes: handleless cabinets, acrylic finishes, integrated appliances. Designs from ₹1.5L across Delhi, Gurgaon, Noida. Free 3D design consultation.";
const CANONICAL = "https://furnirevive.com/modern-modular-kitchen-designs";

const MODERN_FEATURES = [
  { title: "Handleless Cabinets", description: "Clean lines with J-profile or push-to-open mechanisms for a seamless, minimal look." },
  { title: "Acrylic/Glass Finishes", description: "High-gloss and reflective surfaces that amplify natural light and feel premium." },
  { title: "Integrated Appliances", description: "Built-in ovens, dishwashers and microwaves concealed behind matching cabinet panels." },
  { title: "Hidden Storage", description: "Pull-out pantries, magic corners and internal organisers that keep countertops clutter-free." },
  { title: "Under-cabinet Lighting", description: "LED strip lighting under wall units for task illumination and ambient evening glow." },
  { title: "Smart Workflow Zones", description: "Prep, cook and wash zones designed with the golden triangle for effortless movement." },
];

type DesignStyle = { title: string; description: string; priceRange: string };
const DESIGN_STYLES: DesignStyle[] = [
  { title: "Handle-Free Modern", description: "Sleek J-profile or gola-profile cabinets with soft-close hardware. Minimalist and ergonomic.", priceRange: "₹1.5L – ₹4L" },
  { title: "High-Gloss Acrylic", description: "Mirror-like acrylic shutters that reflect light beautifully. Easy to clean and highly durable.", priceRange: "₹2L – ₹5L" },
  { title: "Matte Finish Contemporary", description: "Anti-fingerprint matte PU or laminate in charcoal, sage, or terracotta tones.", priceRange: "₹2L – ₹4.5L" },
  { title: "Glass & PU Premium", description: "Back-painted glass shutters combined with PU-finished internals for a luxury statement kitchen.", priceRange: "₹5L – ₹12L" },
];

type MaterialOption = { title: string; range: string; highlights: string[] };
const MATERIAL_OPTIONS: MaterialOption[] = [
  { title: "Acrylic", range: "₹2L – ₹5L", highlights: ["High-gloss reflective surface", "Scratch-resistant", "UV-stable colours"] },
  { title: "Membrane", range: "₹1.5L – ₹3.5L", highlights: ["Seamless finish", "Budget-friendly", "Wide colour palette"] },
  { title: "PU Finish", range: "₹4L – ₹8L", highlights: ["Satin or matte sheen", "Premium feel", "Excellent durability"] },
  { title: "Glass", range: "₹5L – ₹12L", highlights: ["Back-painted designer glass", "Easy to clean", "Ultra-modern aesthetic"] },
];

type CityLink = { label: string; href: string };
const CITY_PAGES: CityLink[] = [
  { label: "Modern Kitchen Delhi", href: "/modular-kitchen-delhi" },
  { label: "Modern Kitchen Gurgaon", href: "/modular-kitchen-gurgaon" },
  { label: "Modern Kitchen Noida", href: "/modular-kitchen-noida" },
  { label: "Modern Kitchen Faridabad", href: "/modular-kitchen-faridabad" },
  { label: "Modern Kitchen Ghaziabad", href: "/modular-kitchen-ghaziabad" },
];

type Testimonial = { name: string; location: string; text: string; rating: number };
const TESTIMONIALS: Testimonial[] = [
  { name: "Rahul Batra", location: "Vasant Kunj, Delhi", text: "Absolutely love the handleless acrylic kitchen FurniRevive installed. The high-gloss finish makes the entire kitchen look premium. Neighbours keep asking for the contact!", rating: 5 },
  { name: "Sunita Arora", location: "DLF Phase 2, Gurgaon", text: "The matte PU finish in sage green is exactly the contemporary look we wanted. Professional execution from design to installation.", rating: 5 },
  { name: "Karan Verma", location: "Sector 50, Noida", text: "Got a glass shutter kitchen with integrated appliances. The design team did a 3D walkthrough before starting — very impressive service.", rating: 5 },
];

type FAQ = { q: string; a: string };
const FAQS: FAQ[] = [
  { q: "What is a modern modular kitchen?", a: "A modern modular kitchen uses pre-manufactured cabinet modules with contemporary finishes like acrylic, glass or PU. Design hallmarks include handleless profiles, integrated appliances, hidden storage and clean geometric lines suited for 2025 Indian homes." },
  { q: "How much does a modern modular kitchen cost in India?", a: "Prices start at ₹1.5 lakh for a compact membrane-finish kitchen and go up to ₹12 lakh+ for a large glass/PU premium setup. The most popular mid-range acrylic kitchens typically cost ₹2L–₹5L depending on size." },
  { q: "Which finish is best for a modern kitchen?", a: "Acrylic is the most popular modern finish — high-gloss, easy to clean and scratch-resistant. For a subtler look, matte PU offers anti-fingerprint properties. Glass is the premium choice for ultra-modern luxury kitchens." },
  { q: "How long does it take to install a modern modular kitchen?", a: "A standard modern modular kitchen takes 15–25 days from design approval to installation. This includes manufacturing (10–15 days), delivery and on-site installation (3–5 days) and final finishing touches." },
  { q: "What warranty do you offer on modern kitchens?", a: "We provide a 10-year warranty on carcass and structure, 5-year warranty on hardware and soft-close mechanisms, and 3-year warranty on finish surfaces. Lifetime service support is included at no extra charge." },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ModernModularKitchenDesignsPage() {
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
          src="https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT"
          alt="Modern modular kitchen with handleless cabinets and acrylic finishes"
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
              <span className="text-white/80 font-medium">Modern Designs</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance text-white">
              Modern Modular Kitchen Designs for Indian Homes
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              Handleless profiles, acrylic finishes and smart storage — modern kitchens designed for 2025 Indian homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" /> Call for Free 3D Design
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20a%20modern%20modular%20kitchen%20design%20consultation`}
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
          <PremiumKitchenGallery images={ROOT_GALLERY} title="Modern Modular Kitchen Gallery" />
        </div>
      )}

      {/* What Makes a Kitchen Modern? */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            What Makes a Kitchen Modern?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODERN_FEATURES.map((feature) => (
              <div key={feature.title} className="bg-card rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Styles Grid */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Modern Kitchen Design Styles</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {DESIGN_STYLES.map((style) => (
              <div key={style.title} className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold mb-2">{style.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{style.description}</p>
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                  {style.priceRange}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Material & Finish Options</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MATERIAL_OPTIONS.map((mat) => (
              <div key={mat.title} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{mat.title}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{mat.range}</p>
                <ul className="space-y-1.5">
                  {mat.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-1.5 text-muted-foreground text-xs">
                      <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Pages Grid */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Modern Kitchens by City</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CITY_PAGES.map((city) => (
              <Link
                key={city.href}
                to={city.href}
                className="flex items-center justify-between bg-card rounded-xl border border-border p-4 hover:border-amber-700 transition-colors cursor-pointer group"
              >
                <span className="font-medium text-sm group-hover:text-amber-700 transition-colors">{city.label}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-amber-700 transition-colors" />
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
      <KitchenRelatedBlogs slug="modern-modular-kitchen-designs" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
