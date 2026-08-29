import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = 'src/lib/seo-pages';
const allSrc = readdirSync(dir).filter(f => f.endsWith('.ts') || f.endsWith('.tsx')).map(f => readFileSync(join(dir, f), 'utf8')).join('\n');

function getSlugs(prefix) {
  const re = new RegExp(`slug: "${prefix}-([^"]+)"`, 'g');
  const s = new Set(); let m;
  while ((m = re.exec(allSrc)) !== null) s.add(m[1]);
  return s;
}

const sofa = getSlugs('sofa-repair');
const furn = getSlugs('furniture-repair');
const recl = getSlugs('recliner-repair');
const uph  = getSlugs('sofa-upholstery');

const metaExact = new Set(['near-me','cost-delhi','home-service-delhi','before-after-delhi','photos-delhi',
  'price-guide-delhi','price-list-delhi','warranty-delhi','gallery-delhi','noida-expressway',
  'greater-noida','south-delhi','east-delhi','west-delhi','north-delhi','noida','faridabad',
  'gurgaon','ghaziabad','delhi','south-extension','near-me-delhi','north-delhi','price-list-delhi']);

const sofaLocs = [...sofa].filter(x => !metaExact.has(x)).sort();

// Blocked areas - should not create pages for these
const blocked = new Set([
  'rajouri-garden','lajpat-nagar','defence-colony','greater-kailash-1','greater-kailash-2',
  'gulmohar-park','vasant-vihar','vasant-kunj','karol-bagh','saket','green-park','hauz-khas',
  'safdarjung-enclave','panchsheel-park','mayur-vihar','preet-vihar','laxmi-nagar','anand-vihar',
  'karkardooma','dlf-phase-1','dlf-phase-2','dlf-phase-3','dlf-phase-4','dlf-phase-5',
  'golf-course-road','palam-vihar-gurgaon','malibu-town','pitampura','shalimar-bagh',
  'ashok-vihar','janakpuri','paschim-vihar','punjabi-bagh','nit-faridabad','old-faridabad',
  'greater-faridabad','rohini-sector-9','civil-lines','model-town','kamla-nagar',
  'mukherjee-nagar','gtb-nagar','hudson-lane','gujranwala-town','derawal-nagar','shakti-nagar',
  'adarsh-nagar','keshav-puram','delhi-cantt','patel-nagar','subhash-nagar','tagore-garden',
  'malviya-nagar','ardee-city','nirvana-country','south-city-1','golf-course-road-gurgaon',
  'maharani-bagh','new-friends-colony','east-of-kailash','friends-colony','greater-kailash',
  'gurgaon-sector-56','gurgaon-sector-57',
  // sector slugs in App.tsx as redirects
  'noida-sector-128','noida-sector-77','noida-sector-50','noida-sector-93',
  // vaishali and vasundhara ghaziabad are legacy
  'vaishali-ghaziabad','vasundhara-ghaziabad',
  // meta/informational slugs
  'before-after-delhi','photos-delhi','home-service-delhi','cost-delhi','near-me-delhi',
  'south-extension','noida-extension','raj-nagar-extension',
  // purely informational/hub
  'rohini','dwarka','sushant-lok-gurgaon','dlf-gurgaon','udyog-vihar-gurgaon',
  'sohna-road-gurgaon','dwarka-expressway-gurgaon','golf-course-extension-road',
  'gurgaon-dlf-cyber-city','nirvana-country-gurgaon',
]);

console.log('AREA | SOFA | FURN | RECL | UPH | MISSING');
console.log('-----|------|------|------|-----|--------');

let totalPages = 0;
sofaLocs.forEach(loc => {
  const hasF = furn.has(loc);
  const hasR = recl.has(loc);
  const hasU = uph.has(loc);
  if (hasF && hasR && hasU) return; // complete
  const isBlocked = blocked.has(loc);
  const missing = [!hasF && 'furniture', !hasR && 'recliner', !hasU && 'upholstery'].filter(Boolean);
  const status = isBlocked ? 'BLOCKED' : ('NEED: ' + missing.join(', '));
  if (!isBlocked) totalPages += missing.length;
  console.log(`${loc} | [x] | ${hasF?'[x]':'[ ]'} | ${hasR?'[x]':'[ ]'} | ${hasU?'[x]':'[ ]'} | ${status}`);
});
console.log('');
console.log('Total pages to create (unblocked): ' + totalPages);
