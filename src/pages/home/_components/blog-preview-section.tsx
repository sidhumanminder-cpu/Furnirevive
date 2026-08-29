import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ALL_BLOG_POSTS } from "@/lib/blog-data.ts";

const FEATURED_POSTS = ALL_BLOG_POSTS.slice(0, 3);

export default function BlogPreviewSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30" id="blog">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            <BookOpen className="size-4" />
            Expert Tips {"&"} Guides
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Furniture Repair Blog
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Pricing guides, DIY tips, and expert advice to help you maintain
            and restore your furniture in Delhi NCR.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`}>
                <Card className="pt-0 h-full hover:shadow-lg transition-shadow group">
                  <img
                    src={post.featuredImage}
                    alt={post.h1}
                    className="w-full h-48 object-cover rounded-t-xl group-hover:scale-[1.02] transition-transform duration-500"
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
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/blog">
            <Button variant="secondary" className="gap-2 rounded-full">
              View All Articles
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
