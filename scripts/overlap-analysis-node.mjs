#!/usr/bin/env node
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

function extractPublishedSlugs(filePath) {
  const text = readFileSync(filePath, 'utf8');
  const slugs = [];
  // Split on entry boundaries - each entry ends with "},\n" or "},\n]"
  // Split text into chunks at object boundaries
  // Each object entry: starts after a `{` line and ends with `},`
  // We extract slug + status line by line within each block
  const lines = text.split('\n');
  let currentSlug = null;
  let currentStatus = null;
  let depth = 0;

  for (const line of lines) {
    const opens = (line.match(/\{/g) || []).length;
    const closes = (line.match(/\}/g) || []).length;
    
    if (depth === 1) {
      // Inside a top-level entry object
      const slugMatch = line.match(/^\s+slug:\s*"([^"]+)"/);
      const statusMatch = line.match(/^\s+status:\s*"(published|draft)"/);
      if (slugMatch) currentSlug = slugMatch[1];
      if (statusMatch) currentStatus = statusMatch[1];
    }
    
    depth += opens - closes;
    
    if (depth === 0 && closes > 0 && currentSlug !== null) {
      // End of an entry
      if (currentStatus === 'published') {
        slugs.push(currentSlug);
      }
      currentSlug = null;
      currentStatus = null;
    }
  }
  
  return new Set(slugs.map(s => 'modular-kitchen-' + s));
}

function extractHubSlugs(filePath) {
  const text = readFileSync(filePath, 'utf8');
  const slugs = new Set();
  // RAW array entries are like: { slug: "...", name: "...", ... }
  // Find all slug: "..." within the RAW arrays section (before export const KITCHEN_LOCALITY_HUB_REGISTRY)
  const rawSection = text.split('export const KITCHEN_LOCALITY_HUB_REGISTRY')[0];
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = slugRegex.exec(rawSection)) !== null) {
    // Only include if it looks like a locality slug (in a RAW entry, not type definitions)
    slugs.add('modular-kitchen-' + m[1]);
  }
  return slugs;
}

const pathASlugs = extractPublishedSlugs(resolve(root, 'src/lib/registry/locality-registry.ts'));
const pathBSlugs = extractPublishedSlugs(resolve(root, 'src/lib/registry/kitchen-locality-registry.ts'));
const pathCSlugs = extractHubSlugs(resolve(root, 'src/lib/registry/kitchen-locality-hub-registry.ts'));

// Check if modular-kitchen service exists and has no excludeServices impact
// (canGeneratePage returns true for published + not in excludeServices)
// For path A, we need to check excludeServices too - but let's check if any entries exclude modular-kitchen
const localityText = readFileSync(resolve(root, 'src/lib/registry/locality-registry.ts'), 'utf8');
const excludesModularKitchen = (localityText.match(/excludeServices[\s\S]*?modular-kitchen/g) || []).length;
console.log('(Entries with excludeServices for modular-kitchen:', excludesModularKitchen, ')');

const abOverlap = [...pathASlugs].filter(s => pathBSlugs.has(s));
const acOverlap = [...pathASlugs].filter(s => pathCSlugs.has(s));
const onlyInA = [...pathASlugs].filter(s => !pathBSlugs.has(s) && !pathCSlugs.has(s));

console.log('Path A count:', pathASlugs.size);
console.log('Path B count:', pathBSlugs.size);
console.log('Path C count:', pathCSlugs.size);
console.log('A∩B overlap:', abOverlap.length);
console.log('A∩C overlap:', acOverlap.length);
console.log('Only in A (not in B or C):', onlyInA.length);
console.log('');
console.log('A∩B slugs (first 10):', abOverlap.slice(0,10));
console.log('A∩C slugs (first 10):', acOverlap.slice(0,10));
console.log('Only-in-A slugs (first 20):', onlyInA.slice(0,20));
