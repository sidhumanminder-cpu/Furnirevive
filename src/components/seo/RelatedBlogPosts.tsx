import { Link } from "@/lib/router-compat.tsx";
import { BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { cdnImage } from "@/lib/image-cdn.ts";
import { selectRelatedPosts } from "@/lib/blog-recommendation-engine.ts";

/**
 * "Helpful Guides & Tips" cards for a page. Import this lazily (React.lazy): it pulls in the whole
 * blog library, which most visitors never need on first paint.
 */
export default function RelatedBlogPosts({ slug }: { slug: string }) {
  const posts = selectRelatedPosts(slug);
  if (posts.length === 0) return null;
  return (
    <section className="py-12 lg:py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-8">
          <BookOpen className="size-5 text-primary" />
          <h3 className="text-xl font-serif font-bold">Helpful Guides &amp; Tips</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="pt-0 h-full hover:shadow-lg transition-shadow group cursor-pointer">
                <img
                  src={cdnImage(post.featuredImage, { w: 528, h: 288 })}
                  alt={post.imageAlt ?? post.h1}
                  width={528}
                  height={288}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-36 object-cover rounded-t-xl"
                />
                <CardContent className="pt-4">
                  <span className="text-xs text-primary font-semibold">{post.category}</span>
                  <h4 className="text-sm font-semibold mt-1 line-clamp-2 group-hover:text-primary transition-colors">{post.h1}</h4>
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
