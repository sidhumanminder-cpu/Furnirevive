import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = 'src/lib/seo-pages';
const files = readdirSync(dir).filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));
const allSrc = files.map(f => readFileSync(join(dir, f), 'utf8')).join('\n');

function getSlugs(prefix) {
  const re = new RegExp(`slug: "${prefix}-([^"]+)"`, 'g');
  const locs = new Set();
  let m;
  while ((m = re.exec(allSrc)) !== null) locs.add(m[1]);
  return locs;
}

const sofa = getSlugs('sofa-repair');
const furniture = getSlugs('furniture-repair');
const recliner = getSlugs('recliner-repair');
const upholstery = getSlugs('sofa-upholstery');

function isMetaSlug(s) {
  const metaExact = new Set(['near-me','cost-delhi','home-service-delhi','before-after-delhi','photos-delhi','price-guide-delhi','price-list-delhi','warranty-delhi','gallery-delhi','noida-expressway','greater-noida','south-delhi','east-delhi','west-delhi','north-delhi','noida','faridabad','gurgaon','ghaziabad','delhi','south-extension','near-me-delhi','price-list-delhi','north-delhi']);
  if (metaExact.has(s)) return true;
  // meta page patterns
  if (s.match(/^(near-me|cost|home-service|before-after|photos|price|warranty|gallery)/)) return true;
  return false;
}

const sofaLocs = [...sofa].filter(x => !isMetaSlug(x));
const furnitureLocs = new Set([...furniture].filter(x => !isMetaSlug(x)));
const reclinerLocs = new Set([...recliner].filter(x => !isMetaSlug(x)));
const upholsteryLocs = new Set([...upholstery].filter(x => !isMetaSlug(x)));

const missingFurniture = sofaLocs.filter(x => !furnitureLocs.has(x)).sort();
const missingRecliner = sofaLocs.filter(x => !reclinerLocs.has(x)).sort();
const missingUpholstery = sofaLocs.filter(x => !upholsteryLocs.has(x)).sort();

console.log('=== SOFA but no FURNITURE (' + missingFurniture.length + ') ===');
missingFurniture.forEach(x => console.log('  ' + x));
console.log('');
console.log('=== SOFA but no RECLINER (' + missingRecliner.length + ') ===');
missingRecliner.forEach(x => console.log('  ' + x));
console.log('');
console.log('=== SOFA but no UPHOLSTERY (' + missingUpholstery.length + ') ===');
missingUpholstery.forEach(x => console.log('  ' + x));
