const fs = require('fs');

async function getUrlsFromXml(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`Failed to fetch sitemap ${url}: ${res.status}`);
      return [];
    }
    const xml = await res.text();
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());
    return urls;
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return [];
  }
}

async function main() {
  console.log("Checking sitemaps on https://traveliq.in ...");
  
  const potentialSitemaps = [
    "https://traveliq.in/sitemap_index.xml",
    "https://traveliq.in/post-sitemap.xml",
    "https://traveliq.in/page-sitemap.xml",
    "https://traveliq.in/social-sitemap.xml",
    "https://traveliq.in/services-sitemap.xml",
  ];

  let liveUrls = new Set();

  for (const sm of potentialSitemaps) {
    const urls = await getUrlsFromXml(sm);
    urls.forEach(u => {
      if (!u.endsWith('.xml')) {
        liveUrls.add(u);
      }
    });
  }

  const liveUrlList = Array.from(liveUrls);
  console.log(`Total unique URLs found on traveliq.in: ${liveUrlList.length}`);

  console.log("\nTesting each traveliq.in path on traveliq-in.vercel.app (following redirects) ...");

  const results = [];
  let matched200 = 0;
  let status404 = 0;
  let statusError = 0;
  let missingSlugs = [];

  for (const url of liveUrlList) {
    const parsed = new URL(url);
    const path = parsed.pathname;
    const vercelUrl = `https://traveliq-in.vercel.app${path}`;

    try {
      // follow redirect automatically
      const res = await fetch(vercelUrl, { redirect: 'follow' });
      const finalUrl = res.url;
      const status = res.status;

      results.push({
        liveUrl: url,
        path: path,
        vercelUrl: vercelUrl,
        finalUrl: finalUrl,
        status: status
      });

      if (status === 200) {
        matched200++;
      } else if (status === 404) {
        status404++;
        missingSlugs.push({ liveUrl: url, path, vercelUrl });
      } else {
        statusError++;
      }
    } catch (e) {
      results.push({
        liveUrl: url,
        path: path,
        vercelUrl: vercelUrl,
        status: 'ERROR',
        error: e.message
      });
      statusError++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Comparison Summary:`);
  console.log(`Total URLs checked: ${liveUrlList.length}`);
  console.log(`Status 200 (Found on Vercel): ${matched200}`);
  console.log(`Status 404 (Missing on Vercel): ${status404}`);
  console.log(`Other Statuses/Errors: ${statusError}`);
  console.log(`========================================\n`);

  if (missingSlugs.length > 0) {
    console.log(`Missing Slugs (${missingSlugs.length}):`);
    missingSlugs.forEach(m => console.log(`- ${m.path} (${m.liveUrl})`));
  } else {
    console.log("All slugs match and return 200 OK!");
  }

  fs.writeFileSync('comparison-results-detailed.json', JSON.stringify({
    total: liveUrlList.length,
    matched200,
    status404,
    statusError,
    missingSlugs,
    results
  }, null, 2));
}

main();
