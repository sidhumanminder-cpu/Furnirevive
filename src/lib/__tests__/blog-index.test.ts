import { describe, expect, it } from "vitest";
import { BLOG_INDEX } from "@/lib/blog-index.ts";
import { ALL_BLOG_POSTS } from "@/lib/blog-data.ts";

// Fails when a post is added/edited without re-running `node --import tsx scripts/gen-blog-index.ts`.
describe("blog index", () => {
  it("matches the full blog data", () => {
    expect(BLOG_INDEX).toEqual(
      ALL_BLOG_POSTS.map((p) => ({
        slug: p.slug, h1: p.h1, excerpt: p.excerpt, featuredImage: p.featuredImage,
        imageAlt: p.imageAlt, category: p.category, keywords: p.keywords,
      })),
    );
  });
});
