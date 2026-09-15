const fs = require('fs');

const detailed = JSON.parse(fs.readFileSync('comparison-results-detailed.json', 'utf8'));

console.log("Analyzing 154 URLs from traveliq.in...\n");

const byPrefix = {};

detailed.results.forEach(item => {
  const p = item.path;
  const parts = p.replace(/^\/+|\/+$/g, '').split('/');
  const prefix = parts.length > 1 ? parts[0] : 'ROOT';
  
  if (!byPrefix[prefix]) byPrefix[prefix] = [];
  byPrefix[prefix].push(item);
});

console.log("Summary by top-level section:");
for (const [prefix, list] of Object.entries(byPrefix)) {
  const count200 = list.filter(i => i.status === 200).length;
  const count404 = list.filter(i => i.status === 404).length;
  console.log(`Prefix: /${prefix}/ -> Total: ${list.length} | 200 OK: ${count200} | 404 Not Found: ${count404}`);
}
