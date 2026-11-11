/**
 * Deprecated entry point. The single sitemap generator is scripts/generate-sitemap.ts
 * (content-hash based lastmod stored in src/lib/sitemap-lastmod.json).
 * Run with: node --import tsx/esm scripts/generate-sitemap.mjs
 */
await import("./generate-sitemap.ts");
