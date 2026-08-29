/**
 * KitchenRelatedBlogs
 *
 * "Helpful Guides & Tips" section for modular kitchen pages.
 * Matches the sofa repair related-blog-posts pattern in programmatic-seo-page-template.tsx.
 * Shows 4 rotating cards: thumbnail + category + title + excerpt.
 *
 * Usage: <KitchenRelatedBlogs slug={entry.slug} />
 */

import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { selectRelatedKitchenBlogs } from "@/lib/kitchen-blog-recommendation-engine.ts";

type Props = { slug: string };

const CATEGORY_LABEL: Record<string, string> = {
  layouts:   "Layout Guide",
  materials: "Materials Guide",
  cost:      "Cost Guide",
  city:      "City Guide",
  planning:  "Planning Guide",
};

export default function KitchenRelatedBlogs({ slug }: Props) {
  const posts = selectRelatedKitchenBlogs(slug);
  if (posts.length === 0) return null;

  return (
    <section className="py-12 lg:py-16 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-8">
          <BookOpen className="size-5 text-primary" />
          <h3 className="text-xl font-serif font-bold">Helpful Guides &amp; Tips</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="pt-0 h-full hover:shadow-lg transition-shadow group">
                <img
                  src={post.featuredImage}
                  alt={post.h1}
                  className="w-full h-36 object-cover rounded-t-xl"
                />
                <CardContent className="pt-4">
                  <span className="text-xs text-primary font-semibold">
                    {CATEGORY_LABEL[post.category] ?? post.category}
                  </span>
                  <h4 className="text-sm font-semibold mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.h1}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
