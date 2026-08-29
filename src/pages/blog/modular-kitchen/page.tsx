import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  ChevronRight,
  Clock,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import {
  KITCHEN_BLOG_CATEGORIES,
} from "@/lib/registry/kitchen-blog-categories.ts";
import {
  getKitchenBlogsByCategory,
} from "@/lib/registry/kitchen-blog-registry.ts";
import type { KitchenBlogEntry } from "@/lib/registry/kitchen-blog-registry.ts";
import {
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/seo-constants.ts";

const CATEGORY_LABELS: Record<KitchenBlogEntry["category"], string> = {
  layouts: "Kitchen Layouts",
  materials: "Materials",
  cost: "Cost & Pricing",
  city: "City Guide",
  planning: "Planning & Design",
};

export default function ModularKitchenBlogIndex() {
  useEffect(() => {
    document.title = "Modular Kitchen Guides & Articles | FurniRevive";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Expert modular kitchen guides — layout comparisons, material advice, cost breakdowns, city guides, and planning resources for Delhi NCR homeowners."
      );
    }

    // Cleanup previous schema
    document
      .querySelectorAll('script[data-schema="kitchen-blog-index"]')
      .forEach((s) => s.remove());

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://furnirevive.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://furnirevive.com/blog" },
        { "@type": "ListItem", position: 3, name: "Modular Kitchens", item: "https://furnirevive.com/blog/modular-kitchen" },
      ],
    };

    const collectionSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Modular Kitchen Guides & Articles",
      description:
        "Expert modular kitchen guides — layout comparisons, material advice, cost breakdowns, city guides, and planning resources for Delhi NCR homeowners.",
      url: "https://furnirevive.com/blog/modular-kitchen",
      publisher: {
        "@type": "Organization",
        name: "FurniRevive",
        url: "https://furnirevive.com",
      },
    };

    [breadcrumbSchema, collectionSchema].forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.schema = "kitchen-blog-index";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document
        .querySelectorAll('script[data-schema="kitchen-blog-index"]')
        .forEach((s) => s.remove());
    };
  }, []);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want a free modular kitchen design consultation")}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="size-3.5" />
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <ChevronRight className="size-3.5" />
              <span className="text-foreground">Modular Kitchens</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
              Modular Kitchen Guides & Articles
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Expert guides covering every aspect of modular kitchens — from choosing the right layout and materials to understanding costs across Delhi NCR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category sections */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {KITCHEN_BLOG_CATEGORIES.map((category, catIdx) => {
            const articles = getKitchenBlogsByCategory(
              category.slug as KitchenBlogEntry["category"]
            );
            if (articles.length === 0) return null;

            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.08 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                    {category.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {articles.map((article) => (
                    <Link key={article.slug} to={`/blog/${article.slug}`}>
                      <Card className="pt-0 h-full hover:shadow-lg transition-shadow group cursor-pointer">
                        <img
                          src={article.featuredImage}
                          alt={article.h1}
                          className="w-full h-44 object-cover rounded-t-xl"
                          loading="lazy"
                        />
                        <CardContent className="pt-4">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary text-[11px] font-semibold rounded-full mb-2">
                            {CATEGORY_LABELS[article.category]}
                          </span>
                          <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                            {article.h1}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="size-3" />
                              {article.readTime}
                            </span>
                            <span className="text-xs text-primary font-medium inline-flex items-center gap-0.5 group-hover:gap-1 transition-all">
                              Read Guide
                              <ArrowRight className="size-3" />
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Ready for Your Free Kitchen Design?
          </h2>
          <p className="text-sm opacity-80 max-w-lg mx-auto">
            Call us or WhatsApp to book a no-obligation consultation. Our team visits your home, takes measurements, and delivers a detailed design plan within 3–5 days.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button
                size="sm"
                className="gap-2 rounded-full bg-white text-primary hover:bg-white/90 border-0 cursor-pointer"
              >
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
