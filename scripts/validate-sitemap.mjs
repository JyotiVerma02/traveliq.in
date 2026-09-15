const baseUrl = process.env.SITEMAP_BASE_URL || "http://localhost:3001";
const sitemapUrl = new URL("/sitemap.xml", baseUrl).toString();

function extractTag(xml, tag) {
  return Array.from(xml.matchAll(new RegExp(`<${tag}>(.*?)</${tag}>`, "g"))).map(
    (match) => match[1]
  );
}

async function fetchText(url) {
  const response = await fetch(url, { redirect: "manual" });
  const text = await response.text();
  return { response, text };
}

const { response, text } = await fetchText(sitemapUrl);

if (!response.ok) {
  throw new Error(`Unable to fetch sitemap: ${response.status}`);
}

const urls = extractTag(text, "loc");
const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);
const failures = [];

if (duplicates.length > 0) {
  failures.push(`Duplicate sitemap URLs: ${[...new Set(duplicates)].join(", ")}`);
}

for (const absolute of urls) {
  const parsed = new URL(absolute);

  if (parsed.origin !== "https://traveliq.in") {
    failures.push(`${absolute} uses an unexpected domain`);
  }

  if (parsed.pathname !== "/" && parsed.pathname.endsWith("/")) {
    failures.push(`${absolute} uses a trailing slash`);
  }

  const localUrl = new URL(parsed.pathname, baseUrl).toString();
  const page = await fetch(localUrl, { redirect: "manual" });

  if (page.status >= 300 && page.status < 400) {
    failures.push(`${absolute} redirects with ${page.status}`);
    continue;
  }

  if (page.status !== 200) {
    failures.push(`${absolute} returned ${page.status}`);
    continue;
  }

  const html = await page.text();
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];

  if (canonical && canonical !== absolute) {
    failures.push(`${absolute} canonical mismatch: ${canonical}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${urls.length} sitemap URLs.`);
