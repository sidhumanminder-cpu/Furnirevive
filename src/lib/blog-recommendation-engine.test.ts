import { describe, it, expect } from "vitest";
import { selectRelatedPosts, scorePostsForPage } from "./blog-recommendation-engine.ts";
import { ALL_BLOG_POSTS } from "./blog-data.ts";

const UNIVERSAL_ANCHOR_SLUG = "furniture-repair-vs-replace";

describe("selectRelatedPosts", () => {
  it("sofa page recommends sofa-related blogs", () => {
    const results = selectRelatedPosts("sofa-repair-delhi");
    // At least one result should have "sofa" in its slug or keywords
    expect(results.some(p => p.slug.includes("sofa") || p.keywords.some(k => k.includes("sofa")))).toBe(true);
  });

  it("recliner page recommends recliner-related blogs", () => {
    const results = selectRelatedPosts("recliner-repair-delhi");
    expect(results.some(p => p.slug.includes("recliner") || p.keywords.some(k => k.includes("recliner")))).toBe(true);
  });

  it("universal anchor is always present", () => {
    const slugsToTest = [
      "sofa-repair-delhi",
      "sofa-repair-sector-49-gurgaon",
      "recliner-repair-noida",
      "chair-repair-faridabad",
      "unknown-service-unknown-city",
    ];
    for (const slug of slugsToTest) {
      const results = selectRelatedPosts(slug);
      expect(results.some(p => p.slug === UNIVERSAL_ANCHOR_SLUG), `anchor missing for ${slug}`).toBe(true);
    }
  });

  it("returns at most MAX_RECOMMENDATIONS posts", () => {
    const results = selectRelatedPosts("sofa-repair-delhi");
    expect(results.length).toBeLessThanOrEqual(4);
  });

  it("returns at least 1 post (the universal anchor) even for unknown pages", () => {
    const results = selectRelatedPosts("completely-unknown-service-xyz");
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results.some(p => p.slug === UNIVERSAL_ANCHOR_SLUG)).toBe(true);
  });

  it("duplicate categories are filtered (max 1 per category)", () => {
    const results = selectRelatedPosts("sofa-repair-delhi");
    const categories = results.map(p => p.category);
    const uniqueCategories = new Set(categories);
    expect(categories.length).toBe(uniqueCategories.size);
  });

  it("output is deterministic — same input always returns same output", () => {
    const slug = "sofa-repair-sector-65-gurgaon";
    const first = selectRelatedPosts(slug).map(p => p.slug);
    const second = selectRelatedPosts(slug).map(p => p.slug);
    expect(first).toEqual(second);
  });

  it("unknown service falls back to including the universal anchor", () => {
    const results = selectRelatedPosts("mystery-service-delhi");
    expect(results.some(p => p.slug === UNIVERSAL_ANCHOR_SLUG)).toBe(true);
  });

  it("unknown city does not throw or return empty results", () => {
    expect(() => selectRelatedPosts("sofa-repair-atlantis")).not.toThrow();
    const results = selectRelatedPosts("sofa-repair-atlantis");
    expect(results.length).toBeGreaterThanOrEqual(1);
  });
});

describe("scorePostsForPage", () => {
  it("returns scores with reasons for all blog posts", () => {
    const scored = scorePostsForPage("sofa-repair-delhi");
    expect(scored.length).toBe(ALL_BLOG_POSTS.length);
    for (const sp of scored) {
      expect(sp).toHaveProperty("post");
      expect(sp).toHaveProperty("score");
      expect(sp).toHaveProperty("reasons");
      expect(Array.isArray(sp.reasons)).toBe(true);
    }
  });

  it("sofa page gives service reason to sofa posts", () => {
    const scored = scorePostsForPage("sofa-repair-delhi");
    // Find a post that has "sofa" in keywords
    const sofaPost = scored.find(sp => sp.post.keywords.some(k => k.includes("sofa")));
    if (sofaPost) {
      expect(sofaPost.reasons).toContain("service");
    }
  });
});
