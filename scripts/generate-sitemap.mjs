#!/usr/bin/env node
/**
 * Sitemap Generator for FurniRevive
 * 
 * Collects all slugs from:
 * - src/lib/seo-pages/ (all batch files)
 * - src/lib/seo-service-pages.ts
 * - src/lib/seo-location-pages.ts
 * - Registry pages via scripts/registry-bridge.ts (generatePages() → PageDefinition[])
 * 
 * Run with: node scripts/generate-sitemap.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { execSync } from 'child_process';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Core pages ────────────────────────────────────────────────────────────────
const CORE_PAGES = [
  { loc: 'https://furnirevive.com/', changefreq: 'weekly', priority: '1.0' },
  { loc: 'https://furnirevive.com/contact', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://furnirevive.com/book', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://furnirevive.com/blog', changefreq: 'weekly', priority: '0.8' },
];

// ── Blog posts (from App.tsx routes) ─────────────────────────────────────────
const BLOG_SLUGS = [
  'sofa-repair-cost-delhi',
  'furniture-repair-vs-replace',
  'how-to-fix-dining-chair',
  'sofa-upholstery-cost-delhi',
  'common-furniture-repair-problems',
  'best-sofa-foam-for-delhi-climate',
  'leather-sofa-care-tips-delhi',
  'how-to-maintain-wooden-furniture-delhi',
  'termite-treatment-cost-delhi',
  'office-chair-repair-guide-delhi',
  'monsoon-furniture-care-delhi',
  'recliner-sofa-repair-guide-delhi',
  'sofa-repair-vs-upholstery-delhi',
  'sofa-fabric-types-guide-delhi',
  'sofa-repair-at-home-delhi',
  'sofa-repair-noida-vs-delhi',
  'furniture-restoration-cost-guide-delhi-ncr',
  'how-to-choose-furniture-repair-service-delhi',
  'luxury-imported-furniture-repair-delhi-ncr',
  'sofa-repair-vs-buy-new-sofa',
  'is-sofa-restoration-worth-it',
  'how-long-does-sofa-foam-last',
  'common-recliner-motor-problems',
  'imported-furniture-restoration-guide',
  'wooden-furniture-restoration-guide-delhi',
  'office-chair-ergonomic-repair-upgrade-delhi',
  'ultimate-sofa-upholstery-guide',
  'sofa-fabric-change-cost',
  'sofa-reupholstery-vs-buying-new',
  'leather-sofa-upholstery-guide',
  'best-sofa-fabrics-indian-homes',
  'sofa-upholstery-process',
  'how-long-does-sofa-upholstery-last',
  'signs-your-sofa-needs-reupholstery',
  'foam-replacement-vs-sofa-upholstery',
  'custom-sofa-upholstery',
  'velvet-vs-leather-vs-fabric-sofa-upholstery',
  'pet-friendly-sofa-fabric-guide',
  'sofa-upholstery-mistakes',
  'is-sofa-upholstery-worth-it',
  'how-to-maintain-upholstered-sofa',
  'sofa-repair-cost-delhi-ncr',
  'sofa-repair-cost-per-seat',
  'sofa-foam-replacement-cost',
  'sofa-spring-repair-cost',
  'recliner-repair-cost-guide',
  'is-sofa-repair-worth-it',
  'sofa-repair-vs-replacement',
  'is-my-sofa-worth-repairing',
  'signs-your-sofa-needs-repair',
  'extend-sofa-life',
  'ultimate-furniture-restoration-guide',
  'furniture-restoration-vs-repair-vs-refinishing',
  'is-furniture-restoration-worth-it',
  'furniture-restoration-benefits',
  'diy-vs-professional-furniture-restoration',
  'complete-furniture-restoration-process',
  'how-long-does-furniture-restoration-last',
  'furniture-restoration-mistakes',
  'how-to-choose-furniture-restoration-company',
  'furniture-restoration-checklist',
];

// ── Collect all slugs from source files ──────────────────────────────────────
function collectSlugsFromFile(filePath) {
  const slugs = new Set();
  try {
    const content = readFileSync(filePath, 'utf-8');
    const regex = /slug:\s*["']([^"']+)["']/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      slugs.add(match[1]);
    }
  } catch (e) {
    console.warn(`⚠️  Could not read ${filePath}: ${e.message}`);
  }
  return slugs;
}

function collectSlugsFromDir(dir) {
  const allSlugs = new Set();
  try {
    const files = readdirSync(dir).filter(f => f.endsWith('.ts'));
    for (const file of files) {
      const fileSlugs = collectSlugsFromFile(join(dir, file));
      fileSlugs.forEach(s => allSlugs.add(s));
    }
  } catch (e) {
    console.warn(`⚠️  Could not read directory ${dir}: ${e.message}`);
  }
  return allSlugs;
}

const seoPagesDir = join(ROOT, 'src/lib/seo-pages');
const allSlugs = new Set([
  ...collectSlugsFromDir(seoPagesDir),
  ...collectSlugsFromFile(join(ROOT, 'src/lib/seo-service-pages.ts')),
  ...collectSlugsFromFile(join(ROOT, 'src/lib/seo-location-pages.ts')),
]);

// ── Registry Pages via registry-bridge.ts ─────────────────────────────────────
/**
 * Calls generatePages() through the TypeScript bridge so the sitemap and the
 * router are guaranteed to use the same source of truth.
 *
 * The bridge writes a versioned JSON envelope to stdout:
 *   { "schemaVersion": 1, "pages": PageDefinition[] }
 *
 * Fails fast if the schema version is unexpected.
 */
function collectRegistryPageUrls() {
  try {
    const bridgePath = join(__dirname, 'registry-bridge.ts');
    const raw = execSync(`npx tsx ${bridgePath}`, {
      encoding: 'utf-8',
      cwd: ROOT,
    });
    const envelope = JSON.parse(raw);
    if (envelope.schemaVersion !== 1) {
      throw new Error(
        `registry-bridge.ts returned unexpected schemaVersion: ${envelope.schemaVersion}. ` +
        `Expected 1. Update generate-sitemap.mjs to handle this version.`
      );
    }
    return envelope.pages.map((p) => p.urlPath);
  } catch (e) {
    console.warn(`⚠️  registry-bridge.ts failed: ${e.message}`);
    return [];
  }
}

const registryUrls = collectRegistryPageUrls();

// ── Phase 2 & 3 slugs removed 2026-08-21 (SEO recovery — confirmed 404s) ──────
// Slugs saved to scripts/kitchen-phase2-phase3-slugs.json for future use.

// ── Phase 1: Kitchen city hubs, near-me, and directory pages ─────────────────
// These have live routes in App.tsx but were never wired into the sitemap generator.
const KITCHEN_PHASE_1_SLUGS = [
  // Core city hubs (highest priority — apex of kitchen pyramid)
  'modular-kitchen-delhi',
  'modular-kitchen-gurgaon',
  // National / intent pages
  'modular-kitchen',
  'modular-kitchen-near-me',
  'modular-kitchen-designs',
  'modular-kitchen-renovation',
  'modular-kitchen-guide',
  'modular-kitchen-guides',
  'modular-kitchen-localities',
  'modular-kitchen-materials',
  'modular-kitchen-budget',
  // Chandigarh / Tricity city hubs
  'modular-kitchen-chandigarh',
  'modular-kitchen-mohali',
  'modular-kitchen-panchkula',
  'modular-kitchen-tricity',
  // Partner pages
  'kitchen-partner-chandigarh',
  'kitchen-partner-tricity',
  // Cost city pages (Delhi was missing from the existing cost architecture)
  'modular-kitchen-cost-delhi',
  // Design intent pages
  'open-kitchen-design',
  'modern-modular-kitchen-designs',
  'small-modular-kitchen-designs',
  // National price authority page
  'modular-kitchen-price',
  // Renovation city hubs
  'modular-kitchen-renovation-delhi',
  'modular-kitchen-renovation-gurgaon',
  'modular-kitchen-renovation-noida',
  'kitchen-renovation-cost-delhi',
  // G-shape layout authority page
  'g-shaped-modular-kitchen',
];

// ── Priority assignment ───────────────────────────────────────────────────────
const TOP_PRIORITY_SLUGS = new Set([
  'sofa-repair-delhi', 'furniture-repair-delhi', 'sofa-repair-near-me',
  'furniture-repair-near-me', 'carpenter-near-me', 'sofa-upholstery-near-me',
]);

function getPriority(slug) {
  if (TOP_PRIORITY_SLUGS.has(slug)) return '1.0';
  if (slug.includes('near-me') || slug.endsWith('-delhi')) return '0.9';
  if (
    slug.includes('south-delhi') || slug.includes('north-delhi') ||
    slug.includes('dwarka') || slug.includes('rohini') ||
    slug.includes('gurgaon') || slug.includes('noida') ||
    slug.includes('faridabad') || slug.includes('ghaziabad')
  ) return '0.8';
  return '0.7';
}

// ── Build XML ─────────────────────────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0];

function urlBlock(loc, changefreq, priority) {
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n    <lastmod>${today}</lastmod>\n  </url>`;
}

const corePagesXml = CORE_PAGES
  .map(p => urlBlock(p.loc, p.changefreq, p.priority))
  .join('\n');

const blogXml = BLOG_SLUGS
  .map(slug => urlBlock(`https://furnirevive.com/blog/${slug}`, 'monthly', '0.6'))
  .join('\n');

const seoPagesXml = [...allSlugs]
  .sort()
  .map(slug => urlBlock(`https://furnirevive.com/${slug}`, 'monthly', getPriority(slug)))
  .join('\n');

const kitchenPhase1Xml = KITCHEN_PHASE_1_SLUGS
  .map(slug => urlBlock(`https://furnirevive.com/${slug}`, 'monthly', getPriority(slug)))
  .join('\n');

const registryXml = registryUrls
  .map(path => urlBlock(`https://furnirevive.com${path}`, 'monthly', '0.8'))
  .join('\n');

const registrySection = registryUrls.length > 0
  ? `
  <!-- ═══════════════════════════════════════════════ -->
  <!-- Registry Pages (${registryUrls.length} pages)                          -->
  <!-- Auto-generated via generatePages() bridge       -->
  <!-- ═══════════════════════════════════════════════ -->
${registryXml}
`
  : `
  <!-- ═══════════════════════════════════════════════ -->
  <!-- Registry Pages (auto-generated via generatePages()) -->
  <!-- No pages yet — all localities are "draft".      -->
  <!-- Add entries with status: "published" to include  -->
  <!-- them automatically in the next sitemap build.   -->
  <!-- ═══════════════════════════════════════════════ -->
`;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- ═══════════════════════════════════════════════ -->
  <!-- Core Pages                                       -->
  <!-- ═══════════════════════════════════════════════ -->
${corePagesXml}

  <!-- ═══════════════════════════════════════════════ -->
  <!-- Blog Posts (${BLOG_SLUGS.length} posts)                        -->
  <!-- ═══════════════════════════════════════════════ -->
${blogXml}

  <!-- ═══════════════════════════════════════════════ -->
  <!-- SEO Service & Location Pages (${allSlugs.size} pages)      -->
  <!-- Auto-generated from src/lib/seo-pages/ registry -->
  <!-- ═══════════════════════════════════════════════ -->
${seoPagesXml}
${registrySection}
  <!-- ═══════════════════════════════════════════════ -->
  <!-- Kitchen Phase 1: City hubs + near-me + directories -->
  <!-- (${KITCHEN_PHASE_1_SLUGS.length} pages — live routes not in legacy registry)  -->
  <!-- ═══════════════════════════════════════════════ -->
${kitchenPhase1Xml}
</urlset>`;

writeFileSync(join(ROOT, 'public/sitemap.xml'), xml);

const totalUrls = CORE_PAGES.length + BLOG_SLUGS.length + allSlugs.size + registryUrls.length + KITCHEN_PHASE_1_SLUGS.length;
console.log(`✅ Sitemap generated with ${totalUrls} total URLs`);
console.log(`   - ${CORE_PAGES.length} core pages`);
console.log(`   - ${BLOG_SLUGS.length} blog posts`);
console.log(`   - ${allSlugs.size} SEO pages`);
console.log(`   - ${registryUrls.length} registry pages (${registryUrls.length === 0 ? 'all localities draft' : 'from generatePages()'})`);
console.log(`   - ${KITCHEN_PHASE_1_SLUGS.length} kitchen phase 1 pages`);

// ── Registry report ───────────────────────────────────────────────────────
// Print the registry health summary after every sitemap generation.
try {
  const reportOutput = execSync(`npx tsx ${join(__dirname, 'registry-report.ts')}`, {
    encoding: 'utf-8',
    cwd: ROOT,
  });
  process.stdout.write(reportOutput);
} catch (e) {
  // If the report exits with code 1 (failed status), still print the output
  if (e.stdout) process.stdout.write(e.stdout);
  if (e.stderr) process.stderr.write(e.stderr);
}
