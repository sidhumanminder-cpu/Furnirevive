import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  ChevronRight,
  ArrowLeft,
  Star,
  MapPin,
  Zap,
  CheckCircle,
  Upload,
} from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import type { BlogPost } from "@/lib/blog-data.ts";
import { ALL_BLOG_POSTS } from "@/lib/blog-data.ts";
import {
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/seo-constants.ts";

const SERVICE_AREA_LINKS = [
  { label: "Delhi", href: "/sofa-repair-delhi" },
  { label: "Noida", href: "/furniture-repair-noida" },
  { label: "Gurgaon", href: "/furniture-repair-gurgaon" },
  { label: "Ghaziabad", href: "/furniture-repair-ghaziabad" },
  { label: "Faridabad", href: "/furniture-repair-faridabad" },
];

const TRUST_REVIEWS = [
  {
    name: "Priya Sharma",
    area: "South Delhi",
    rating: 5,
    text: "Got my sofa repaired in just 3 hours. The technician was professional and the quality is amazing. Saved ₹18,000 vs buying new!",
  },
  {
    name: "Rahul Mehta",
    area: "Noida Sector 62",
    rating: 5,
    text: "Called at 10 AM, team arrived by noon. Recliner mechanism was fixed perfectly. Highly recommend FurniRevive.",
  },
  {
    name: "Anita Kapoor",
    area: "Gurgaon DLF",
    rating: 5,
    text: "My leather sofa had a big tear. They repaired it so well that you can't even tell there was damage. Great value!",
  },
];

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Sticky bottom CTA bar */
function StickyBar() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need sofa repair")}`;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-background shadow-2xl border-t border-background/10">
      <div className="max-w-5xl mx-auto px-3 py-2.5 flex items-center justify-between gap-2">
        <p className="text-xs sm:text-sm font-semibold shrink-0 hidden sm:block">
          Starting <span className="text-accent">₹999</span> · Same Day Service
        </p>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <a href={`tel:${PHONE_NUMBER}`} className="flex-1 sm:flex-none">
            <Button size="sm" className="gap-1.5 rounded-full w-full sm:w-auto text-xs sm:text-sm">
              <Phone className="size-3.5" />
              Call Now
            </Button>
          </a>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
            <Button
              size="sm"
              className="gap-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 w-full sm:w-auto text-xs sm:text-sm"
            >
              <MessageCircle className="size-3.5" />
              WhatsApp
            </Button>
          </a>
          <p className="text-[11px] font-semibold sm:hidden shrink-0">
            From <span className="text-accent">₹999</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/** Hero CTA block above blog content */
function HeroCta() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need sofa repair")}`;
  return (
    <div className="bg-primary/8 border border-primary/20 rounded-2xl p-5 sm:p-7 mb-8">
      <div className="flex items-start gap-3 mb-3">
        <Zap className="size-5 text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="text-base sm:text-lg font-serif font-bold text-foreground leading-snug">
            Get Sofa &amp; Furniture Repair – Fast &amp; Affordable
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Free inspection · 500+ homes served · Same-day service available
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-wrap mt-4">
        <a href={`tel:${PHONE_NUMBER}`}>
          <Button size="sm" className="gap-2 rounded-full">
            <Phone className="size-3.5" />
            Get Free Quote
          </Button>
        </a>
        <a href={waUrl} target="_blank" rel="noopener noreferrer">
          <Button
            size="sm"
            className="gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-0"
          >
            <MessageCircle className="size-3.5" />
            WhatsApp Now
          </Button>
        </a>
      </div>
      {/* Urgency */}
      <div className="flex items-center gap-4 mt-4 flex-wrap">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-destructive bg-destructive/10 px-2.5 py-1 rounded-full">
          <span className="size-1.5 rounded-full bg-destructive animate-pulse inline-block" />
          Limited slots today
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
          <Clock className="size-3" />
          Same-day if booked before 5 PM
        </span>
      </div>
    </div>
  );
}

/** Mid-content inline quote form */
function InlineQuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I need a repair quote.\nName: ${name}\nPhone: ${phone}${fileName ? `\nImage: ${fileName}` : ""}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="my-10 p-5 sm:p-7 bg-primary/5 border-2 border-primary/20 rounded-2xl">
      <h3 className="text-lg font-serif font-bold mb-1">
        Get Exact Repair Cost in 2 Minutes
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        Share your details — we'll send you a price on WhatsApp right away.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="rounded-xl"
        />
        <Input
          placeholder="Phone number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="rounded-xl"
        />
        <label className="flex items-center gap-2 cursor-pointer text-sm text-muted-foreground border border-border rounded-xl px-4 py-2.5 hover:bg-secondary/50 transition-colors">
          <Upload className="size-4 shrink-0" />
          <span>{fileName || "Upload furniture photo (optional)"}</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </label>
        <Button type="submit" className="w-full gap-2 rounded-xl">
          <MessageCircle className="size-4" />
          Get Price Now on WhatsApp
        </Button>
      </form>
    </div>
  );
}

/** Trust + reviews section */
function TrustSection() {
  return (
    <div className="my-10 space-y-6">
      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          { value: "500+", label: "Homes served" },
          { value: "4.8★", label: "Average rating" },
          { value: "6-mo", label: "Warranty" },
        ].map((s) => (
          <div key={s.label} className="bg-secondary/50 rounded-xl py-3 px-2">
            <p className="text-lg font-bold text-primary">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="space-y-3">
        {TRUST_REVIEWS.map((r) => (
          <div key={r.name} className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="size-2.5" />
                  {r.area}
                </p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Service area block */
function ServiceAreaBlock() {
  return (
    <div className="my-10 p-5 bg-secondary/40 rounded-2xl border border-border">
      <p className="text-sm font-semibold mb-3 flex items-center gap-2">
        <MapPin className="size-4 text-primary" />
        We serve across Delhi NCR
      </p>
      <div className="flex flex-wrap gap-2">
        {SERVICE_AREA_LINKS.map((a) => (
          <Link
            key={a.href}
            to={a.href}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-xs font-medium text-primary hover:bg-primary/5 transition-colors"
          >
            <CheckCircle className="size-3" />
            {a.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Strong bottom CTA */
function BottomCta() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need sofa repair")}`;
  return (
    <div className="my-10 p-6 sm:p-8 bg-primary text-primary-foreground rounded-2xl text-center space-y-4">
      <div className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/20 text-white px-3 py-1 rounded-full">
        <span className="size-1.5 rounded-full bg-white animate-pulse inline-block" />
        Limited slots available today
      </div>
      <h3 className="text-xl sm:text-2xl font-serif font-bold">
        Book Free Inspection Today
      </h3>
      <p className="text-sm opacity-80">
        Same-day service if booked before 5 PM · 6-month warranty · Doorstep service
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-1">
        <a href={`tel:${PHONE_NUMBER}`}>
          <Button size="sm" className="gap-2 rounded-full bg-white text-primary hover:bg-white/90 border-0">
            <Phone className="size-3.5" />
            {PHONE_DISPLAY}
          </Button>
        </a>
        <a href={waUrl} target="_blank" rel="noopener noreferrer">
          <Button
            size="sm"
            className="gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-0"
          >
            <MessageCircle className="size-3.5" />
            WhatsApp
          </Button>
        </a>
        <Link to="/book">
          <Button size="sm" className="gap-2 rounded-full bg-white/20 hover:bg-white/30 text-white border-0">
            Book Service
            <ArrowRight className="size-3.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function BlogPostTemplate({ post }: { post: BlogPost }) {
  const relatedPosts = ALL_BLOG_POSTS.filter((p) =>
    post.relatedPosts.includes(p.slug)
  );

  useEffect(() => {
    document.title = post.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", post.metaDescription);

    document
      .querySelectorAll('script[data-schema="blog-post"]')
      .forEach((s) => s.remove());

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.h1,
      description: post.metaDescription,
      image: post.featuredImage,
      datePublished: post.publishedDate,
      dateModified: post.updatedDate,
      author: {
        "@type": "Organization",
        name: "FurniRevive",
        url: "https://furnirevive.com",
      },
      publisher: {
        "@type": "Organization",
        name: "FurniRevive",
        url: "https://furnirevive.com",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://furnirevive.com/blog/${post.slug}`,
      },
    };

    const faqSchema =
      post.faqs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }
        : null;

    const articleScript = document.createElement("script");
    articleScript.type = "application/ld+json";
    articleScript.dataset.schema = "blog-post";
    articleScript.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);

    if (faqSchema) {
      const faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.dataset.schema = "blog-post";
      faqScript.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(faqScript);
    }

    return () => {
      document
        .querySelectorAll('script[data-schema="blog-post"]')
        .forEach((s) => s.remove());
    };
  }, [post]);

  return (
    <div className="min-h-screen flex flex-col pb-16">
      <Navbar />

      {/* Sticky bottom bar */}
      <StickyBar />

      {/* Hero / Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-foreground truncate max-w-[200px]">{post.h1}</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
              <Tag className="size-3" />
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-foreground leading-tight">
              {post.h1}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="size-3.5" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {formatDate(post.publishedDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {post.readTime}
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
            src={post.featuredImage}
            alt={post.imageAlt ?? post.h1}
            className="w-full h-56 sm:h-72 lg:h-96 object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Article body */}
      <article className="py-10 lg:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero CTA above content */}
          <HeroCta />

          {post.content.map((section, i) => (
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
              {/* Inline quote form after 3rd section */}
              {i === 2 && <InlineQuoteForm />}
            </motion.div>
          ))}

          {/* If fewer than 3 sections, still show form */}
          {post.content.length <= 2 && <InlineQuoteForm />}

          {/* Trust section */}
          <TrustSection />

          {/* Service area block */}
          <ServiceAreaBlock />

          {/* Bottom CTA */}
          <BottomCta />
        </div>
      </article>

      {/* FAQ */}
      {post.faqs.length > 0 && (
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {post.faqs.map((faq, i) => (
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

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`}>
                  <Card className="pt-0 h-full hover:shadow-lg transition-shadow group">
                    <img
                      src={rp.featuredImage}
                      alt={rp.imageAlt ?? rp.h1}
                      className="w-full h-40 object-cover rounded-t-xl"
                      loading="lazy"
                    />
                    <CardContent className="pt-4">
                      <span className="text-xs text-primary font-semibold">{rp.category}</span>
                      <h3 className="text-sm font-semibold mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {rp.h1}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{rp.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related service pages for SEO */}
      {post.relatedServicePages.length > 0 && (
        <section className="py-10 lg:py-14 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold mb-4">Related Repair Services</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {post.relatedServicePages.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  className="text-sm text-primary hover:underline"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="size-4" />
              Back to all articles
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
