const fs = require('fs');
const content = fs.readFileSync('src/lib/registry/kitchen-locality-hub-registry.ts', 'utf8');
const lines = content.split('\n');
const seen = new Set();
const removeSet = new Set();
lines.forEach(function(line, i) {
  var m = line.match(/slug: "([^"]+)"/);
  if (m) {
    var slug = m[1];
    if (seen.has(slug)) { removeSet.add(i); }
    else { seen.add(slug); }
  }
});
console.log('Duplicate lines to remove: ' + removeSet.size + '  Unique slugs: ' + seen.size);
var newLines = lines.filter(function(_, i) { return !removeSet.has(i); });
fs.writeFileSync('src/lib/registry/kitchen-locality-hub-registry.ts', newLines.join('\n'));
console.log('Written. New line count: ' + newLines.length);
