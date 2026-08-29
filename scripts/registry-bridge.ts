/**
 * Registry Bridge — thin adapter, zero business logic.
 *
 * Sole responsibility: call generatePages() and write the result as a versioned
 * JSON envelope to stdout so that generate-sitemap.mjs can consume it without
 * parsing TypeScript source files.
 *
 * Run via: tsx scripts/registry-bridge.ts
 *
 * Output shape:
 *   { "schemaVersion": 1, "pages": PageDefinition[] }
 */

import { generatePages } from "../src/lib/registry/generate-pages.ts";

const pages = generatePages();

const envelope = {
  schemaVersion: 1,
  pages: pages.map((p) => ({
    urlPath: p.urlPath,
    service: p.service,
    locality: p.locality,
    city: p.city,
    intent: p.intent,
  })),
};

process.stdout.write(JSON.stringify(envelope));
