import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import type { BlogLinksSectionData } from "@/lib/content-engine/index.ts";

export default function BlogLinksSection({ section }: { section: BlogLinksSectionData }) {
  const { heading, posts } = section.props;

  if (posts.length === 0) return null;

  return (
    <section className="py-10 lg:py-14 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-6">
          <BookOpen className="size-5 text-primary shrink-0" />
          <h3 className="text-lg font-semibold">{heading}</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {posts.map((post) =>
            post.imageUrl ? (
              <Link key={post.href} to={post.href} className="group cursor-pointer">
                <Card className="pt-0 h-full hover:shadow-lg transition-shadow">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-36 object-cover rounded-t-xl"
                  />
                  <CardContent className="pt-4">
                    <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors flex items-start gap-1.5">
                      <ArrowRight className="size-4 shrink-0 mt-0.5 text-primary" />
                      {post.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <Link
                key={post.href}
                to={post.href}
                className="group block rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer"
              >
                <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-2 flex items-start gap-1.5">
                  <ArrowRight className="size-4 shrink-0 mt-0.5 text-primary" />
                  {post.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
