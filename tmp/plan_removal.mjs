import { readFileSync, writeFileSync } from 'fs';

const src = readFileSync('src/lib/registry/kitchen-locality-hub-registry.ts', 'utf8');
const lines = src.split('\n');

const entries = [];
let inArray = false;
let currentArray = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const lineNum = i + 1;
  if (/^const RAW_NCR:\s*Raw\[\]\s*=\s*\[/.test(line)) { inArray = true; currentArray = 'RAW_NCR'; continue; }
  if (/^const RAW_TRICITY:\s*Raw\[\]\s*=\s*\[/.test(line)) { inArray = true; currentArray = 'RAW_TRICITY'; continue; }
  if (inArray && /^\];/.test(line)) { inArray = false; currentArray = null; continue; }
  if (!inArray) continue;
  const slugMatch = line.match(/slug:\s*"([^"]+)"/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  const nameMatch = line.match(/name:\s*"([^"]+)"/);
  entries.push({ lineNum, slug, name: nameMatch ? nameMatch[1] : '???', array: currentArray, urlSlug: 'modular-kitchen-' + slug, raw: line });
}

const groups = new Map();
for (const e of entries) {
  if (!groups.has(e.urlSlug)) groups.set(e.urlSlug, []);
  groups.get(e.urlSlug).push(e);
}

const dupGroups = [];
for (const [urlSlug, members] of groups) {
  if (members.length > 1) dupGroups.push({ urlSlug, members });
}

const removeLineNums = new Set();
const groupLines = [];
for (const { urlSlug, members } of dupGroups) {
  const keep = members[0]; // KEEP FIRST — matches live .find() behavior, zero content change
  const removeLines = [];
  for (const m of members) {
    if (m.lineNum !== keep.lineNum) { removeLineNums.add(m.lineNum); removeLines.push(m.lineNum); }
  }
  groupLines.push(`${urlSlug} | KEEP line ${keep.lineNum} ("${keep.name}") | REMOVE line(s) ${removeLines.join(',')}`);
}
console.log(groupLines.join('\n'));

console.log('Total raw entries: ' + entries.length);
console.log('Unique urlSlugs: ' + groups.size);
console.log('Duplicate groups: ' + dupGroups.length);
console.log('Lines to remove: ' + removeLineNums.size);
console.log('Entries remaining after removal: ' + (entries.length - removeLineNums.size));
console.log('Matches unique urlSlug count: ' + ((entries.length - removeLineNums.size) === groups.size ? 'YES' : 'NO'));
console.log('Removed line numbers: ' + Array.from(removeLineNums).sort((a,b)=>a-b).join(','));
