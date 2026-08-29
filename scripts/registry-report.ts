/**
 * Registry Generation Report
 *
 * Diagnostics/observability only — no business logic, no side effects.
 * The single source of truth remains generatePages().
 *
 * Usage:
 *   npx tsx scripts/registry-report.ts           # human-readable
 *   npx tsx scripts/registry-report.ts --json    # machine-readable JSON
 *
 * Exits with code 1 if status === "failed".
 */

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { performance } from "node:perf_hooks";
import { generatePages } from "../src/lib/registry/generate-pages.ts";
import { LOCALITY_REGISTRY } from "../src/lib/registry/locality-registry.ts";
import { SERVICE_REGISTRY } from "../src/lib/registry/service-registry.ts";
import { canGeneratePage } from "../src/lib/registry/business-rules.ts";

const ARCHITECTURE_VERSION = "1.0";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const start = performance.now();

// ── Locality counts ────────────────────────────────────────────────────────

let publishedLocalities = 0;
let draftLocalities = 0;
let deprecatedLocalities = 0;
let noindexLocalities = 0;

for (const loc of LOCALITY_REGISTRY) {
  switch (loc.status) {
    case "published":
      publishedLocalities++;
      break;
    case "draft":
      draftLocalities++;
      break;
    case "deprecated":
      deprecatedLocalities++;
      break;
    case "noindex":
      noindexLocalities++;
      break;
  }
}

// ── Expected pages via canGeneratePage() ──────────────────────────────────
// Computed directly from business rules — not a multiplication.

let expectedPages = 0;
for (const loc of LOCALITY_REGISTRY) {
  for (const svc of SERVICE_REGISTRY) {
    if (canGeneratePage(loc, svc)) expectedPages++;
  }
}

// ── Actual pages ──────────────────────────────────────────────────────────

const pages = generatePages();
const actualPages = pages.length;
const allUrls = pages.map((p) => p.urlPath);

// ── Duplicate URL detection (sorted for determinism) ──────────────────────

const urlSet = new Set<string>();
const duplicatePathsSet = new Set<string>();
for (const url of allUrls) {
  if (urlSet.has(url)) {
    duplicatePathsSet.add(url);
  }
  urlSet.add(url);
}
const duplicatePaths = [...duplicatePathsSet].sort();

// ── Route conflict detection ───────────────────────────────────────────────
// Reads the explicit path="..." attributes from App.tsx to find legacy routes
// that shadow generated registry URLs.
// NOTE: This is a temporary approach until routes are centralized. It parses
// App.tsx as raw text and should be revisited if the routing strategy changes.

function extractExplicitRoutes(appTsxPath: string): Set<string> {
  const slugs = new Set<string>();
  try {
    const content = readFileSync(appTsxPath, "utf-8");
    // Match path="..." attributes — capture the literal path value
    const re = /path=["']([^"':*]+)["']/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(content)) !== null) {
      const p = m[1].trim();
      // Only keep paths that start with / and contain no param syntax (:)
      if (p.startsWith("/") && !p.includes(":") && !p.includes("*")) {
        slugs.add(p);
      }
    }
  } catch {
    // If App.tsx can't be read, skip conflict detection silently
  }
  return slugs;
}

const explicitRoutes = extractExplicitRoutes(resolve(ROOT, "src/App.tsx"));
const conflictPathsArr = allUrls
  .filter((url) => explicitRoutes.has(url))
  .sort();
const conflictPaths = [...new Set(conflictPathsArr)]; // deduplicate + sort already done

// ── Validation errors ─────────────────────────────────────────────────────

let validationErrors = 0;
if (actualPages !== expectedPages) validationErrors++;
if (duplicatePaths.length > 0) validationErrors++;

// ── Status ────────────────────────────────────────────────────────────────

const status: "healthy" | "failed" =
  validationErrors === 0 && duplicatePaths.length === 0 && conflictPaths.length === 0
    ? "healthy"
    : "failed";

const generationTimeMs = Math.round(performance.now() - start);

// ── Output ────────────────────────────────────────────────────────────────

const isJson = process.argv.includes("--json");

if (isJson) {
  const report = {
    architectureVersion: ARCHITECTURE_VERSION,
    status,
    publishedLocalities,
    draftLocalities,
    deprecatedLocalities,
    noindexLocalities,
    services: SERVICE_REGISTRY.length,
    expectedPages,
    actualPages,
    duplicateUrls: {
      count: duplicatePaths.length,
      paths: duplicatePaths,
    },
    routeConflicts: {
      count: conflictPaths.length,
      paths: conflictPaths,
    },
    validationErrors,
    generationTimeMs,
  };
  process.stdout.write(JSON.stringify(report, null, 2) + "\n");
} else {
  const LINE = "─".repeat(44);
  const statusLabel = status === "healthy" ? "HEALTHY" : "FAILED";

  const lines: string[] = [
    ``,
    `Registry Report (Architecture v${ARCHITECTURE_VERSION})`,
    `Status: ${statusLabel}`,
    LINE,
    `Published localities:  ${publishedLocalities}`,
    `Draft localities:      ${draftLocalities}`,
    `Deprecated localities: ${deprecatedLocalities}`,
    noindexLocalities > 0 ? `Noindex localities:    ${noindexLocalities}` : "",
    ``,
    `Services:              ${SERVICE_REGISTRY.length}`,
    `Expected pages:        ${expectedPages}`,
    `Actual pages:          ${actualPages}`,
    ``,
    `Duplicate URLs:        ${duplicatePaths.length}`,
    ...duplicatePaths.map((p) => `  ${p}`),
    `Route conflicts:       ${conflictPaths.length}`,
    ...conflictPaths.map((p) => `  ${p}`),
    `Validation errors:     ${validationErrors}`,
    ``,
    `Generation time:       ${(generationTimeMs / 1000).toFixed(2)} s`,
    LINE,
    status === "healthy" ? `✓ Registry healthy` : `✗ Registry has issues — review above`,
    ``,
  ].filter((l) => l !== undefined);

  console.log(lines.join("\n"));
}

if (status === "failed") {
  process.exit(1);
}
