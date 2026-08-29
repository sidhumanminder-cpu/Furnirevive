/**
 * SEO URL validation script.
 *
 * Detects duplicate URLs across both the programmatic registry and the legacy
 * SEO batch system, plus semantic slug duplicates (same place, different format).
 *
 * Usage:
 *   npx tsx --tsconfig tsconfig.app.json scripts/validate-seo-urls.ts
 *   npm run seo:validate
 *
 * Exit codes:
 *   0  — no exact cross-system duplicates (warnings may still be printed)
 *   1  — exact cross-system duplicates found (build should fail)
 */

// Node path alias resolution for @/ imports used in the src tree
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// Register tsconfig-paths so @/ aliases resolve correctly
process.env.TS_NODE_BASEURL = path.join(root, "src");

// We use a simple manual alias resolver via tsx's built-in support.
// tsx respects tsconfig paths when invoked with --tsconfig.

import { validateCrossSystemUrls } from "../src/lib/registry/validate-registry.ts";

const { exactCrossSystemDuplicates, semanticDuplicateCandidates } = validateCrossSystemUrls();

const RESET = "\x1b[0m";
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const GREEN = "\x1b[32m";
const BOLD = "\x1b[1m";

console.log(`\n${BOLD}=== FurniRevive SEO URL Validation ===${RESET}\n`);

// ─── Exact cross-system duplicates (ERRORS) ───────────────────────────────────
if (exactCrossSystemDuplicates.length === 0) {
  console.log(`${GREEN}✓ No exact cross-system duplicate URLs found.${RESET}`);
} else {
  console.log(`${RED}${BOLD}✗ EXACT CROSS-SYSTEM DUPLICATES (${exactCrossSystemDuplicates.length}) — BUILD SHOULD FAIL${RESET}`);
  console.log(`${RED}  These URLs appear in both the programmatic registry AND the legacy batch system:${RESET}\n`);
  for (const dup of exactCrossSystemDuplicates) {
    console.log(`  ${RED}${dup.url}${RESET}`);
    console.log(`    → programmatic registry (generatePages)`);
    console.log(`    → legacy batch system (slug: "${dup.legacySlug}")\n`);
  }
}

// ─── Semantic duplicate candidates (WARNINGS) ─────────────────────────────────
if (semanticDuplicateCandidates.length === 0) {
  console.log(`\n${GREEN}✓ No semantic duplicate locality slug pairs detected.${RESET}`);
} else {
  console.log(`\n${YELLOW}${BOLD}⚠ SEMANTIC DUPLICATE CANDIDATES (${semanticDuplicateCandidates.length}) — WARNINGS ONLY${RESET}`);
  console.log(`${YELLOW}  These locality slug pairs may represent the same place under different naming conventions.`);
  console.log(`  They are NOT auto-blocked. Review and add redirects manually if confirmed duplicates.${RESET}\n`);

  for (const pair of semanticDuplicateCandidates) {
    console.log(`  ${YELLOW}Pattern: ${pair.pattern}${RESET}`);
    console.log(`    Slug A: ${pair.slugA}`);
    console.log(`    Slug B: ${pair.slugB}`);
    if (pair.affectedUrls.length > 0) {
      console.log(`    Affected URLs (${pair.affectedUrls.length}):`);
      for (const url of pair.affectedUrls.slice(0, 8)) {
        console.log(`      ${url}`);
      }
      if (pair.affectedUrls.length > 8) {
        console.log(`      ... and ${pair.affectedUrls.length - 8} more`);
      }
    }
    console.log();
  }
}

// ─── Summary ──────────────────────────────────────────────────────────────────
console.log(`${BOLD}Summary:${RESET}`);
console.log(`  Exact cross-system duplicates: ${exactCrossSystemDuplicates.length === 0 ? GREEN : RED}${exactCrossSystemDuplicates.length}${RESET}`);
console.log(`  Semantic duplicate candidates: ${YELLOW}${semanticDuplicateCandidates.length}${RESET}`);
console.log();

if (exactCrossSystemDuplicates.length > 0) {
  console.log(`${RED}${BOLD}VALIDATION FAILED — resolve exact duplicates before publishing.${RESET}\n`);
  process.exit(1);
} else {
  console.log(`${GREEN}${BOLD}VALIDATION PASSED${RESET}${semanticDuplicateCandidates.length > 0 ? ` (with ${semanticDuplicateCandidates.length} warning(s) — review semantic duplicates above)` : ""}\n`);
  process.exit(0);
}
