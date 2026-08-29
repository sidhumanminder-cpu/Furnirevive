import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const sitemap = readFileSync(resolve(ROOT, 'public/sitemap.xml'), 'utf8');
function inSitemap(url) { return sitemap.indexOf(url) !== -1; }

const today = '2026-08-08';
function urlBlock(slug) {
  return `  <url><loc>https://furnirevive.com/${slug}</loc><changefreq>monthly</changefreq><priority>0.75</priority><lastmod>${today}</lastmod></url>`;
}

// ── RENOVATION ──────────────────────────────────────────────────────────────
const ren = readFileSync(resolve(ROOT, 'src/lib/registry/kitchen-renovation-registry.ts'), 'utf8');
const renSlugs = [...ren.matchAll(/\{ slug:\s*"([a-z0-9-]+)",\s*name:/g)].map(m => m[1]);
const renPrefixes = ['modular-kitchen-renovation', 'kitchen-remodeling', 'kitchen-makeover'];
const renLines = [];
for (const slug of renSlugs) {
  for (const prefix of renPrefixes) {
    const url = prefix + '-' + slug;
    if (!inSitemap(url)) renLines.push(urlBlock(url));
  }
}

// ── PRICE RANGE ─────────────────────────────────────────────────────────────
const pr = readFileSync(resolve(ROOT, 'src/lib/registry/kitchen-price-range-locality-registry.ts'), 'utf8');
const prSlugs = [...pr.matchAll(/\{ slug:\s*"([a-z0-9-]+)",/g)].map(m => m[1]);
const caps = ['1-lakh', '1-5-lakh', '2-lakh', '3-lakh'];
const prLines = [];
for (const slug of prSlugs) {
  for (const cap of caps) {
    const url = 'modular-kitchen-under-' + cap + '-' + slug;
    if (!inSitemap(url)) prLines.push(urlBlock(url));
  }
}

// ── DIMENSION ───────────────────────────────────────────────────────────────
const dim = readFileSync(resolve(ROOT, 'src/lib/registry/kitchen-dimension-registry.ts'), 'utf8');
const dimSlugs = [...dim.matchAll(/\{ slug:\s*"([a-z0-9-]+)",\s*name:/g)].map(m => m[1]);
const styles = ['modern', 'contemporary', 'minimalist', 'scandinavian'];
const finishes = ['high-gloss', 'matte-finish', 'textured', 'dual-tone'];
const dimLines = [];
for (const slug of dimSlugs) {
  for (const s of styles) {
    const url = s + '-modular-kitchen-' + slug;
    if (!inSitemap(url)) dimLines.push(urlBlock(url));
  }
  for (const f of finishes) {
    const url = f + '-modular-kitchen-' + slug;
    if (!inSitemap(url)) dimLines.push(urlBlock(url));
  }
}

// ── LAYOUT LOCALITY ─────────────────────────────────────────────────────────
const lay = readFileSync(resolve(ROOT, 'src/lib/registry/kitchen-layout-locality-registry.ts'), 'utf8');
const layLocalities = [...lay.matchAll(/^  "([a-z0-9-]+)":\s*\{/gm)].map(m => m[1])
  .filter(s => !['l-shape','parallel','straight','u-shape'].includes(s));
const layouts = ['l-shape', 'parallel', 'straight', 'u-shape'];
const layLines = [];
for (const loc of layLocalities) {
  for (const layout of layouts) {
    const url = layout + '-modular-kitchen-' + loc;
    if (!inSitemap(url)) layLines.push(urlBlock(url));
  }
}

// ── Print XML injection block ────────────────────────────────────────────────
if (renLines.length) {
  process.stdout.write(`\n  <!-- Renovation Pages — ${renLines.length} added 2026-08-08 -->\n`);
  process.stdout.write(renLines.join('\n') + '\n');
}
if (prLines.length) {
  process.stdout.write(`\n  <!-- Price-Range Pages — ${prLines.length} added 2026-08-08 -->\n`);
  process.stdout.write(prLines.join('\n') + '\n');
}
if (dimLines.length) {
  process.stdout.write(`\n  <!-- Style/Finish Dimension Pages — ${dimLines.length} added 2026-08-08 -->\n`);
  process.stdout.write(dimLines.join('\n') + '\n');
}
if (layLines.length) {
  process.stdout.write(`\n  <!-- Layout-Locality Pages — ${layLines.length} added 2026-08-08 -->\n`);
  process.stdout.write(layLines.join('\n') + '\n');
}

process.stderr.write('COUNTS: ren=' + renLines.length + ' pr=' + prLines.length + ' dim=' + dimLines.length + ' lay=' + layLines.length + ' total=' + (renLines.length+prLines.length+dimLines.length+layLines.length) + '\n');
