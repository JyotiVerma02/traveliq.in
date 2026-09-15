const fs = require('fs');

const detailed = JSON.parse(fs.readFileSync('comparison-results-detailed.json', 'utf8'));
const missingSlugs = detailed.missingSlugs;

const WORDPRESS_API = "https://traveliq.in/wp-json/wp/v2";

const postTypes = ["posts", "pages", "social", "services", "packages", "irctc", "irctc-principal-agen", "all-testing"];

async function checkWpSlug(slug) {
  // clean slug from path
  // path might be /traveliq-latest-blog/ -> traveliq-latest-blog
  const cleanSlug = slug.replace(/^\/+|\/+$/g, '');
  
  // if path is like pages/social/ or pages/services/
  const parts = cleanSlug.split('/');
  const targetSlug = parts[parts.length - 1];

  for (const pt of postTypes) {
    try {
      const res = await fetch(`${WORDPRESS_API}/${pt}?slug=${encodeURIComponent(targetSlug)}`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return { found: true, type: pt, wpItem: data[0] };
        }
      }
    } catch (e) {}
  }
  return { found: false };
}

async function main() {
  console.log(`Checking ${missingSlugs.length} missing slugs against WP REST API...\n`);

  const results = [];

  for (const item of missingSlugs) {
    const wpCheck = await checkWpSlug(item.path);
    console.log(`Path: ${item.path} -> Found in WP? ${wpCheck.found ? `YES (type: ${wpCheck.type})` : 'NO'}`);
    results.push({
      path: item.path,
      liveUrl: item.liveUrl,
      wpFound: wpCheck.found,
      wpType: wpCheck.type || null
    });
  }

  fs.writeFileSync('missing-slugs-analysis.json', JSON.stringify(results, null, 2));
}

main();
