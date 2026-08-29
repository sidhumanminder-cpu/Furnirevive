import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// Run check script and capture full output
const output = execSync(`node ${resolve(__dirname, 'generate-missing-sitemap-xml.mjs')} 2>/dev/null`, {
  encoding: 'utf8',
  maxBuffer: 50 * 1024 * 1024,
  cwd: ROOT,
});

const sitemap = readFileSync(resolve(ROOT, 'public/sitemap.xml'), 'utf8');
const updated = sitemap.replace('</urlset>', output + '\n</urlset>');

writeFileSync(resolve(ROOT, 'public/sitemap-new.xml'), updated);

const count = (updated.match(/<url>/g) || []).length;
console.log('New sitemap written to public/sitemap-new.xml');
console.log('Total URL count:', count);
console.log('Lines added:', output.split('\n').length);
