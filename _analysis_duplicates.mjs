import { readFileSync } from 'fs';

const src = readFileSync('src/lib/registry/kitchen-locality-hub-registry.ts', 'utf8');
const lines = src.split('\n');

// We need to find all entries inside RAW_NCR and RAW_TRICITY arrays
// Parse entries by matching lines with `slug:` patterns inside the arrays
const entries = [];
let inArray = false;
let currentArray = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const lineNum = i + 1;

  // Detect array starts
  if (/^const RAW_NCR:\s*Raw\[\]\s*=\s*\[/.test(line)) {
    inArray = true;
    currentArray = 'RAW_NCR';
    continue;
  }
  if (/^const RAW_TRICITY:\s*Raw\[\]\s*=\s*\[/.test(line)) {
    inArray = true;
    currentArray = 'RAW_TRICITY';
    continue;
  }

  // Detect array end
  if (inArray && /^\];/.test(line)) {
    inArray = false;
    currentArray = null;
    continue;
  }

  if (!inArray) continue;

  // Match entry lines: { slug: "...", name: "...", ... aff: "...", nearby: [...] }
  const slugMatch = line.match(/slug:\s*"([^"]+)"/);
  if (!slugMatch) continue;

  const slug = slugMatch[1];
  const nameMatch = line.match(/name:\s*"([^"]+)"/);
  const affMatch = line.match(/aff:\s*"([^"]+)"/);
  
  // Extract nearby array
  const nearbyMatch = line.match(/nearby:\s*\[([^\]]*)\]/);
  let nearby = [];
  if (nearbyMatch) {
    nearby = nearbyMatch[1].split(',').map(s => s.trim().replace(/"/g, '')).filter(Boolean);
  }

  entries.push({
    lineNum,
    slug,
    name: nameMatch ? nameMatch[1] : '???',
    aff: affMatch ? affMatch[1] : '???',
    nearby,
    array: currentArray,
    urlSlug: `modular-kitchen-${slug}`,
  });
}

console.log(`Total raw entries: ${entries.length}`);

// Group by urlSlug
const groups = new Map();
for (const e of entries) {
  if (!groups.has(e.urlSlug)) groups.set(e.urlSlug, []);
  groups.get(e.urlSlug).push(e);
}

const uniqueCount = groups.size;
console.log(`Total unique urlSlug values: ${uniqueCount}`);

// Find duplicates
const dupGroups = [];
for (const [urlSlug, members] of groups) {
  if (members.length > 1) {
    dupGroups.push({ urlSlug, members });
  }
}

console.log(`Duplicate groups: ${dupGroups.length}`);
const excessCount = dupGroups.reduce((sum, g) => sum + g.members.length - 1, 0);
console.log(`Total excess entries (to remove): ${excessCount}`);
console.log(`After removal, unique count: ${uniqueCount} (unchanged — one remains per group)`);
console.log(`\n${'='.repeat(100)}`);
console.log('DUPLICATE GROUPS DETAIL');
console.log('='.repeat(100));

for (const { urlSlug, members } of dupGroups) {
  console.log(`\n--- urlSlug: ${urlSlug} (${members.length} occurrences) ---`);

  for (const m of members) {
    console.log(`  Line ${m.lineNum} | name: "${m.name}" | aff: "${m.aff}" | array: ${m.array} | nearby: [${m.nearby.join(', ')}]`);
  }

  // Compare fields between entries
  const first = members[0];
  const last = members[members.length - 1];
  
  let allIdentical = true;
  let affDiffers = false;
  let nearbyDiffers = false;
  
  for (let i = 1; i < members.length; i++) {
    const prev = members[0];
    const curr = members[i];
    if (curr.aff !== prev.aff) { affDiffers = true; allIdentical = false; }
    if (curr.name !== prev.name) { allIdentical = false; }
    const prevNearby = JSON.stringify(prev.nearby);
    const currNearby = JSON.stringify(curr.nearby);
    if (currNearby !== prevNearby) { nearbyDiffers = true; allIdentical = false; }
  }

  if (allIdentical) {
    console.log(`  STATUS: All occurrences are byte-for-byte identical (except line number).`);
    console.log(`  RECOMMENDATION: KEEP line ${last.lineNum} (last), REMOVE line(s) ${members.slice(0, -1).map(m => m.lineNum).join(', ')}`);
  } else if (affDiffers) {
    console.log(`  STATUS: NEEDS HUMAN JUDGMENT — 'aff' values differ between occurrences.`);
    console.log(`    First (line ${first.lineNum}): aff="${first.aff}", nearby=[${first.nearby.join(', ')}]`);
    console.log(`    Last  (line ${last.lineNum}): aff="${last.aff}", nearby=[${last.nearby.join(', ')}]`);
  } else {
    // Only nearby differs or name differs
    console.log(`  STATUS: Entries differ (nearby or name). Recommending KEEP last (line ${last.lineNum}), REMOVE earlier.`);
    console.log(`  RECOMMENDATION: KEEP line ${last.lineNum}, REMOVE line(s) ${members.slice(0, -1).map(m => m.lineNum).join(', ')}`);
    if (nearbyDiffers) {
      console.log(`    (nearby arrays differ — later entry likely more complete)`);
    }
  }
}

// Cross-check
console.log(`\n${'='.repeat(100)}`);
console.log('CROSS-CHECK');
console.log(`Duplicate groups: ${dupGroups.length}`);
console.log(`After removing ${excessCount} excess entries, remaining entries: ${entries.length - excessCount}`);
console.log(`Unique urlSlugs: ${uniqueCount}`);
console.log(`Remaining entries should equal unique count: ${entries.length - excessCount === uniqueCount ? 'YES ✓' : 'NO ✗'}`);
