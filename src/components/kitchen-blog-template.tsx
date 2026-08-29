import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import type { KitchenBlogEntry } from "@/lib/registry/kitchen-blog-registry.ts";
import {
  KITCHEN_BLOG_REGISTRY,
  getAdjacentKitchenBlogs,
} from "@/lib/registry/kitchen-blog-registry.ts";
import {
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/seo-constants.ts";
import type { KitchenBlogContent } from "@/lib/content/kitchen-blogs/l-shape-kitchen-guide.ts";

// Static content imports — all 38 kitchen blog content files
import lShapeContent from "@/lib/content/kitchen-blogs/l-shape-kitchen-guide.ts";
import uShapeContent from "@/lib/content/kitchen-blogs/u-shape-kitchen-guide.ts";
import parallelContent from "@/lib/content/kitchen-blogs/parallel-kitchen-guide.ts";
import straightContent from "@/lib/content/kitchen-blogs/straight-kitchen-guide.ts";
import islandContent from "@/lib/content/kitchen-blogs/island-kitchen-guide.ts";
import peninsulaContent from "@/lib/content/kitchen-blogs/peninsula-kitchen-guide.ts";
import acrylicContent from "@/lib/content/kitchen-blogs/acrylic-modular-kitchen-guide.ts";
import laminateContent from "@/lib/content/kitchen-blogs/laminate-modular-kitchen-guide.ts";
import membraneContent from "@/lib/content/kitchen-blogs/membrane-modular-kitchen-guide.ts";
import pvcContent from "@/lib/content/kitchen-blogs/pvc-modular-kitchen-guide.ts";
import puContent from "@/lib/content/kitchen-blogs/pu-modular-kitchen-guide.ts";
import veneerContent from "@/lib/content/kitchen-blogs/veneer-modular-kitchen-guide.ts";
import glassContent from "@/lib/content/kitchen-blogs/glass-modular-kitchen-guide.ts";
import stainlessSteelContent from "@/lib/content/kitchen-blogs/stainless-steel-kitchen-guide.ts";
import costDelhiContent from "@/lib/content/kitchen-blogs/modular-kitchen-cost-delhi-guide.ts";
import costGurgaonContent from "@/lib/content/kitchen-blogs/modular-kitchen-cost-gurgaon.ts";
import smallKitchenCostContent from "@/lib/content/kitchen-blogs/small-kitchen-cost-guide.ts";
import tenByTenContent from "@/lib/content/kitchen-blogs/10x10-kitchen-cost-guide.ts";
import luxuryCostContent from "@/lib/content/kitchen-blogs/luxury-kitchen-cost-guide.ts";
import acrylicCostContent from "@/lib/content/kitchen-blogs/acrylic-kitchen-cost-guide.ts";
import laminateCostContent from "@/lib/content/kitchen-blogs/laminate-kitchen-cost-guide.ts";
import installationCostContent from "@/lib/content/kitchen-blogs/kitchen-installation-cost-guide.ts";
import delhiGuideContent from "@/lib/content/kitchen-blogs/modular-kitchen-delhi-guide.ts";
import gurgaonGuideContent from "@/lib/content/kitchen-blogs/modular-kitchen-gurgaon-guide.ts";
import noidaGuideContent from "@/lib/content/kitchen-blogs/modular-kitchen-noida-guide.ts";
import faridabadGuideContent from "@/lib/content/kitchen-blogs/modular-kitchen-faridabad-guide.ts";
import ghaziabadGuideContent from "@/lib/content/kitchen-blogs/modular-kitchen-ghaziabad-guide.ts";
import modularVsCarpenterContent from "@/lib/content/kitchen-blogs/modular-vs-carpenter-kitchen.ts";
import howToPlanContent from "@/lib/content/kitchen-blogs/how-to-plan-modular-kitchen.ts";
import measuringContent from "@/lib/content/kitchen-blogs/measuring-kitchen-for-modular.ts";
import choosingLayoutContent from "@/lib/content/kitchen-blogs/choosing-kitchen-layout-guide.ts";
import choosingMaterialsContent from "@/lib/content/kitchen-blogs/choosing-kitchen-materials-guide.ts";
import commonMistakesContent from "@/lib/content/kitchen-blogs/common-kitchen-renovation-mistakes.ts";
import maintenanceContent from "@/lib/content/kitchen-blogs/kitchen-maintenance-guide.ts";
import warrantyContent from "@/lib/content/kitchen-blogs/modular-kitchen-warranty-guide.ts";
import designIdeasContent from "@/lib/content/kitchen-blogs/modular-kitchen-design-ideas.ts";
import smallApartmentContent from "@/lib/content/kitchen-blogs/small-apartment-modular-kitchen.ts";
import checklistContent from "@/lib/content/kitchen-blogs/modular-kitchen-checklist.ts";

const CONTENT_MAP: Record<string, KitchenBlogContent> = {
  "l-shape-kitchen-guide": lShapeContent,
  "u-shape-kitchen-guide": uShapeContent,
  "parallel-kitchen-guide": parallelContent,
  "straight-kitchen-guide": straightContent,
  "island-kitchen-guide": islandContent,
  "peninsula-kitchen-guide": peninsulaContent,
  "acrylic-modular-kitchen-guide": acrylicContent,
  "laminate-modular-kitchen-guide": laminateContent,
  "membrane-modular-kitchen-guide": membraneContent,
  "pvc-modular-kitchen-guide": pvcContent,
  "pu-modular-kitchen-guide": puContent,
  "veneer-modular-kitchen-guide": veneerContent,
  "glass-modular-kitchen-guide": glassContent,
  "stainless-steel-kitchen-guide": stainlessSteelContent,
  "modular-kitchen-cost-delhi-guide": costDelhiContent,
  "modular-kitchen-cost-gurgaon": costGurgaonContent,
  "small-kitchen-cost-guide": smallKitchenCostContent,
  "10x10-kitchen-cost-guide": tenByTenContent,
  "luxury-kitchen-cost-guide": luxuryCostContent,
  "acrylic-kitchen-cost-guide": acrylicCostContent,
  "laminate-kitchen-cost-guide": laminateCostContent,
  "kitchen-installation-cost-guide": installationCostContent,
  "modular-kitchen-delhi-guide": delhiGuideContent,
  "modular-kitchen-gurgaon-guide": gurgaonGuideContent,
  "modular-kitchen-noida-guide": noidaGuideContent,
  "modular-kitchen-faridabad-guide": faridabadGuideContent,
  "modular-kitchen-ghaziabad-guide": ghaziabadGuideContent,
  "modular-vs-carpenter-kitchen": modularVsCarpenterContent,
  "how-to-plan-modular-kitchen": howToPlanContent,
  "measuring-kitchen-for-modular": measuringContent,
  "choosing-kitchen-layout-guide": choosingLayoutContent,
  "choosing-kitchen-materials-guide": choosingMaterialsContent,
  "common-kitchen-renovation-mistakes": commonMistakesContent,
  "kitchen-maintenance-guide": maintenanceContent,
  "modular-kitchen-warranty-guide": warrantyContent,
  "modular-kitchen-design-ideas": designIdeasContent,
  "small-apartment-modular-kitchen": smallApartmentContent,
  "modular-kitchen-checklist": checklistContent,
};

const CATEGORY_LABELS: Record<KitchenBlogEntry["category"], string> = {
  layouts: "Kitchen Layouts",
  materials: "Materials",
  cost: "Cost & Pricing",
  city: "City Guide",
  planning: "Planning & Design",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Sticky bottom CTA bar — kitchen themed */
function KitchenStickyBar() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want a free modular kitchen design consultation")}`;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-background shadow-2xl border-t border-background/10">
      <div className="max-w-5xl mx-auto px-3 py-2.5 flex items-center justify-between gap-2">
        <p className="text-xs sm:text-sm font-semibold shrink-0 hidden sm:block">
          Free Design Consultation · <span className="text-accent">10-Year Warranty</span>
        </p>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <a href={`tel:${PHONE_NUMBER}`} className="flex-1 sm:flex-none">
            <Button size="sm" className="gap-1.5 rounded-full w-full sm:w-auto text-xs sm:text-sm cursor-pointer">
              <Phone className="size-3.5" />
              Call Now
            </Button>
          </a>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
            <Button
              size="sm"
              className="gap-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 w-full sm:w-auto text-xs sm:text-sm cursor-pointer"
            >
              <MessageCircle className="size-3.5" />
              WhatsApp for Free Quote
            </Button>
          </a>
          <p className="text-[11px] font-semibold sm:hidden shrink-0">
            Free <span className="text-accent">Quote</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/** Inline kitchen CTA box inserted after section index 2 */
function InlineKitchenCta() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want a free kitchen design consultation")}`;
  return (
    <div className="my-10 p-5 sm:p-7 bg-primary/5 border-2 border-primary/20 rounded-2xl">
      <div className="flex items-start gap-3 mb-3">
        <Sparkles className="size-5 text-primary shrink-0 mt-0.5" />
        <div>
          <h3 className="text-lg font-serif font-bold text-foreground leading-snug">
            Get a Free Kitchen Design Consultation
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Get a detailed design plan for your kitchen before production begins. No cost, no obligation.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-wrap mt-4">
        <a href={`tel:${PHONE_NUMBER}`}>
          <Button size="sm" className="gap-2 rounded-full cursor-pointer">
            <Phone className="size-3.5" />
            {PHONE_DISPLAY}
          </Button>
        </a>
        <a href={waUrl} target="_blank" rel="noopener noreferrer">
          <Button
            size="sm"
            className="gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 cursor-pointer"
          >
            <MessageCircle className="size-3.5" />
            WhatsApp for Free Quote
          </Button>
        </a>
      </div>
      <div className="flex items-center gap-4 mt-4 flex-wrap">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
          <Clock className="size-3" />
          Design ready in 3–5 days
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
          10-year warranty included
        </span>
      </div>
    </div>
  );
}

export default function KitchenBlogTemplate({ entry }: { entry: KitchenBlogEntry }) {
  const blogContent = CONTENT_MAP[entry.contentId];
  const { prev, next } = getAdjacentKitchenBlogs(entry.slug);

  // Related articles from registry
  const relatedArticles = entry.relatedArticleSlugs
    .map((slug) => KITCHEN_BLOG_REGISTRY.find((e) => e.slug === slug))
    .filter((e): e is KitchenBlogEntry => e !== undefined)
    .slice(0, 4);

  // SEO schema injection
  useEffect(() => {
    document.title = entry.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", entry.metaDescription);

    const ogMetas: HTMLMetaElement[] = [];
    function setOgMeta(attrName: string, attrVal: string, ogContent: string) {
      const el = document.createElement("meta");
      el.setAttribute(attrName, attrVal);
      el.setAttribute("content", ogContent);
      document.head.appendChild(el);
      ogMetas.push(el);
    }
    const blogUrl = `https://furnirevive.com/blog/${entry.slug}`;
    setOgMeta("property", "og:title", entry.title);
    setOgMeta("property", "og:description", entry.metaDescription);
    setOgMeta("property", "og:url", blogUrl);
    setOgMeta("property", "og:image", entry.featuredImage);
    setOgMeta("property", "og:type", "article");
    setOgMeta("property", "og:site_name", "FurniRevive");
    setOgMeta("name", "twitter:card", "summary_large_image");
    setOgMeta("name", "twitter:title", entry.title);
    setOgMeta("name", "twitter:description", entry.metaDescription);
    setOgMeta("name", "twitter:image", entry.featuredImage);

    // Cleanup previous schema
    document
      .querySelectorAll('script[data-schema="kitchen-blog"]')
      .forEach((s) => s.remove());

    const blogPostingSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: entry.h1,
      description: entry.metaDescription,
      image: entry.featuredImage,
      datePublished: entry.publishedAt,
      dateModified: entry.updatedAt,
      author: {
        "@type": "Organization",
        name: "FurniRevive Editorial Team",
        url: "https://furnirevive.com",
      },
      publisher: {
        "@type": "Organization",
        name: "FurniRevive",
        url: "https://furnirevive.com",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://furnirevive.com/blog/${entry.slug}`,
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://furnirevive.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://furnirevive.com/blog" },
        { "@type": "ListItem", position: 3, name: "Modular Kitchens", item: "https://furnirevive.com/blog/modular-kitchen" },
        { "@type": "ListItem", position: 4, name: entry.h1, item: `https://furnirevive.com/blog/${entry.slug}` },
      ],
    };

    const faqSchema =
      blogContent && blogContent.faqs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: blogContent.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }
        : null;

    // Inject schemas
    const schemas = [blogPostingSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];
    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.schema = "kitchen-blog";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      ogMetas.forEach((m) => m.remove());
      document
        .querySelectorAll('script[data-schema="kitchen-blog"]')
        .forEach((s) => s.remove());
    };
  }, [entry, blogContent]);

  if (!blogContent) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Content not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pb-16">
      <Navbar />
      <KitchenStickyBar />

      {/* Hero / Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6 flex-wrap">
              <Link to="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="size-3.5" />
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <ChevronRight className="size-3.5" />
              <Link to="/blog/modular-kitchen" className="hover:text-primary">Modular Kitchens</Link>
              <ChevronRight className="size-3.5" />
              <span className="text-foreground truncate max-w-[200px]">{entry.h1}</span>
            </nav>

            {/* Category badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
              <Tag className="size-3" />
              {CATEGORY_LABELS[entry.category]}
            </span>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-foreground leading-tight">
              {entry.h1}
            </h1>

            {/* Meta: dates + read time */}
            <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                Published: {formatDate(entry.publishedAt)} · Updated: {formatDate(entry.updatedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {entry.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={entry.featuredImage}
            alt={entry.h1}
            className="w-full h-56 sm:h-72 lg:h-96 object-cover"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* Article body */}
      <article className="py-10 lg:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogContent.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="mb-10"
            >
              {section.heading && (
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-4">
                  {section.heading}
                </h2>
              )}
              {section.body.map((para, j) => (
                <p
                  key={j}
                  className="text-foreground/90 leading-relaxed mb-3 text-base lg:text-[1.05rem]"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
              {/* Inline kitchen CTA after section index 2 */}
              {i === 2 && <InlineKitchenCta />}
            </motion.div>
          ))}

          {/* If fewer than 3 sections, still show CTA */}
          {blogContent.sections.length <= 2 && <InlineKitchenCta />}
        </div>
      </article>

      {/* FAQs */}
      {blogContent.faqs.length > 0 && (
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {blogContent.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedArticles.map((article) => (
                <Link key={article.slug} to={`/blog/${article.slug}`}>
                  <Card className="pt-0 h-full hover:shadow-lg transition-shadow group cursor-pointer">
                    <img
                      src={article.featuredImage}
                      alt={article.h1}
                      className="w-full h-40 object-cover rounded-t-xl"
                      loading="lazy"
                    />
                    <CardContent className="pt-4">
                      <span className="text-xs text-primary font-semibold">
                        {CATEGORY_LABELS[article.category]}
                      </span>
                      <h3 className="text-sm font-semibold mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.h1}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related service pages */}
      {entry.relatedServiceLinks.length > 0 && (
        <section className="py-10 lg:py-14 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold mb-4">Related Kitchen Services</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {entry.relatedServiceLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev/Next navigation */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <Link
                to={`/blog/${prev.slug}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline truncate max-w-[200px]">{prev.h1}</span>
                <span className="sm:hidden">Previous Guide</span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/blog/${next.slug}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group text-right"
              >
                <span className="hidden sm:inline truncate max-w-[200px]">{next.h1}</span>
                <span className="sm:hidden">Next Guide</span>
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Back to index */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog/modular-kitchen">
            <Button variant="ghost" className="gap-2 cursor-pointer">
              <ArrowLeft className="size-4" />
              All Kitchen Guides
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
