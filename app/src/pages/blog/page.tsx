import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Calendar,
  Clock,
  ChevronRight,
  Phone,
  MessageCircle,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { ALL_BLOG_POSTS } from "@/lib/blog-data.ts";
import {
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  BRAND_NAME,
} from "@/lib/seo-constants.ts";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogListingPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to get a quotation for furniture repair.")}`;

  useEffect(() => {
    document.title =
      "Furniture Repair Blog | Expert Tips & Guides | FurniRevive Delhi NCR";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Expert furniture repair tips, cost guides, and DIY advice for Delhi NCR homeowners. Learn about sofa repair, chair fixing, upholstery costs, and more from FurniRevive."
      );
  }, []);

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
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight className="size-3.5" />
              <span className="text-foreground">Blog</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="size-6 text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
                Furniture Repair Blog
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Expert tips, pricing guides, and DIY advice to help Delhi NCR
              homeowners maintain and restore their furniture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post (first post) */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/blog/${ALL_BLOG_POSTS[0].slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-6 group"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={ALL_BLOG_POSTS[0].featuredImage}
                  alt={ALL_BLOG_POSTS[0].imageAlt ?? ALL_BLOG_POSTS[0].h1}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 bg-muted"
                />
              </div>
              <div className="flex flex-col justify-center py-2">
                <span className="text-xs font-semibold text-primary mb-2">
                  {ALL_BLOG_POSTS[0].category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {ALL_BLOG_POSTS[0].h1}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {ALL_BLOG_POSTS[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {formatDate(ALL_BLOG_POSTS[0].publishedDate)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {ALL_BLOG_POSTS[0].readTime}
                  </span>
                </div>
                <div className="mt-5">
                  <Button variant="ghost" className="gap-2 px-0 text-primary">
                    Read article
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* All posts grid */}
      <section className="py-12 lg:py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold mb-8">All Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="pt-0 h-full hover:shadow-lg transition-shadow group">
                    <img
                      src={post.featuredImage}
                      alt={post.imageAlt ?? post.h1}
                      className="w-full h-48 object-cover rounded-t-xl group-hover:scale-[1.02] transition-transform duration-500 bg-muted"
                    />
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-primary">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="size-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {post.h1}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="size-3" />
                          {formatDate(post.publishedDate)}
                        </span>
                        <span className="text-xs font-medium text-primary flex items-center gap-1">
                          Read more
                          <ArrowRight className="size-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
            Need Furniture Repair in Delhi NCR?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            {BRAND_NAME} provides expert doorstep furniture repair across Delhi,
            Noida, Gurgaon, Ghaziabad {"&"} Faridabad. 6-month warranty on all
            work.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 rounded-full"
              >
                <Phone className="size-4" />
                Call Now
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a]"
              >
                <MessageCircle className="size-4" />
                WhatsApp Us
              </Button>
            </a>
            <Link to="/book">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 rounded-full"
              >
                Book Online
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
