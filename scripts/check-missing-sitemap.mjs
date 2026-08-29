import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const sitemap = readFileSync(resolve(ROOT, 'public/sitemap.xml'), 'utf8');
function inSitemap(url) { return sitemap.indexOf(url) !== -1; }

// ── RENOVATION ──────────────────────────────────────────────────────────────
const ren = readFileSync(resolve(ROOT, 'src/lib/registry/kitchen-renovation-registry.ts'), 'utf8');
const renSlugs = [...ren.matchAll(/\{ slug:\s*"([a-z0-9-]+)",\s*name:/g)].map(m => m[1]);
const renPrefixes = ['modular-kitchen-renovation', 'kitchen-remodeling', 'kitchen-makeover'];
const renMissing = [];
for (const slug of renSlugs) {
  for (const prefix of renPrefixes) {
    const url = prefix + '-' + slug;
    if (!inSitemap(url)) renMissing.push(url);
  }
}
console.log('REN_MISSING:' + renMissing.length);
renMissing.forEach(u => console.log('REN:' + u));

// ── PRICE RANGE ─────────────────────────────────────────────────────────────
const pr = readFileSync(resolve(ROOT, 'src/lib/registry/kitchen-price-range-locality-registry.ts'), 'utf8');
const prSlugs = [...pr.matchAll(/\{ slug:\s*"([a-z0-9-]+)",/g)].map(m => m[1]);
const caps = ['1-lakh', '1-5-lakh', '2-lakh', '3-lakh'];
const prMissing = [];
for (const slug of prSlugs) {
  for (const cap of caps) {
    const url = 'modular-kitchen-under-' + cap + '-' + slug;
    if (!inSitemap(url)) prMissing.push(url);
  }
}
console.log('PR_MISSING:' + prMissing.length);
prMissing.forEach(u => console.log('PR:' + u));

// ── DIMENSION ───────────────────────────────────────────────────────────────
const dim = readFileSync(resolve(ROOT, 'src/lib/registry/kitchen-dimension-registry.ts'), 'utf8');
const dimSlugs = [...dim.matchAll(/\{ slug:\s*"([a-z0-9-]+)",\s*name:/g)].map(m => m[1]);
const styles = ['modern', 'contemporary', 'minimalist', 'scandinavian'];
const finishes = ['high-gloss', 'matte-finish', 'textured', 'dual-tone'];
const dimMissing = [];
for (const slug of dimSlugs) {
  for (const s of styles) {
    const url = s + '-modular-kitchen-' + slug;
    if (!inSitemap(url)) dimMissing.push(url);
  }
  for (const f of finishes) {
    const url = f + '-modular-kitchen-' + slug;
    if (!inSitemap(url)) dimMissing.push(url);
  }
}
console.log('DIM_MISSING:' + dimMissing.length);
dimMissing.forEach(u => console.log('DIM:' + u));

// ── LAYOUT LOCALITY ─────────────────────────────────────────────────────────
const lay = readFileSync(resolve(ROOT, 'src/lib/registry/kitchen-layout-locality-registry.ts'), 'utf8');
const layLocalities = [...lay.matchAll(/^  "([a-z0-9-]+)":\s*\{/gm)].map(m => m[1])
  .filter(s => !['l-shape','parallel','straight','u-shape'].includes(s));
const layouts = ['l-shape', 'parallel', 'straight', 'u-shape'];
const layMissing = [];
for (const loc of layLocalities) {
  for (const layout of layouts) {
    const url = layout + '-modular-kitchen-' + loc;
    if (!inSitemap(url)) layMissing.push(url);
  }
}
console.log('LAY_MISSING:' + layMissing.length);
layMissing.forEach(u => console.log('LAY:' + u));

// ── LOCALITY HUB ────────────────────────────────────────────────────────────
const hub = readFileSync(resolve(ROOT, 'src/lib/registry/kitchen-locality-hub-registry.ts'), 'utf8');
const hubSlugs = [...hub.matchAll(/localitySlug:\s*"([a-z0-9-]+)"/g)].map(m => m[1]);
const hubUniq = [...new Set(hubSlugs)];
const hubMissing = [];
for (const slug of hubUniq) {
  const url = 'modular-kitchen-' + slug;
  if (!inSitemap(url)) hubMissing.push(url);
}
console.log('HUB_MISSING:' + hubMissing.length);
hubMissing.forEach(u => console.log('HUB:' + u));

console.log('\nSUMMARY:');
console.log('Renovation missing:', renMissing.length);
console.log('Price range missing:', prMissing.length);
console.log('Dimension missing:', dimMissing.length);
console.log('Layout missing:', layMissing.length);
console.log('Hub missing:', hubMissing.length);
console.log('TOTAL MISSING:', renMissing.length + prMissing.length + dimMissing.length + layMissing.length + hubMissing.length);
