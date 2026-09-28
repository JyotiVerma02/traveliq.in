const baseUrl = (process.env.SEO_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const sitemapResponse = await fetch(new URL("/sitemap.xml", baseUrl));
if (!sitemapResponse.ok) throw new Error(`Sitemap returned ${sitemapResponse.status}`);
const xml = await sitemapResponse.text();
const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g), (match) => match[1]);
const failures = [];
const titles = new Map();
const canonicals = new Map();
const internalLinks = new Set();

for (const url of urls) {
  const localUrl = new URL(new URL(url).pathname, baseUrl);
  const response = await fetch(localUrl, { signal: AbortSignal.timeout(12000) });
  if (response.status !== 200) {
    failures.push(`${url}: returned ${response.status}`);
    continue;
  }
  const html = await response.text();
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)) {
    if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/#")) {
      internalLinks.add(new URL(href, baseUrl).toString());
    }
  }
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim() ?? "";
  const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? "";
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ?? "";
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const robots = html.match(/<meta\s+name="robots"\s+content="([^"]+)"/i)?.[1] ?? "";
  const ogTitle = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i)?.[1];
  const ogDescription = html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i)?.[1];
  const ogImage = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i)?.[1];

  if (!title) failures.push(`${url}: missing title`);
  else if (titles.has(title)) failures.push(`${url}: duplicate title with ${titles.get(title)}`);
  else titles.set(title, url);
  if (!description) failures.push(`${url}: missing description`);
  if (!canonical || new URL(canonical).origin !== "https://traveliq.in") failures.push(`${url}: missing/invalid production canonical`);
  else if (canonicals.has(canonical)) failures.push(`${url}: duplicate canonical with ${canonicals.get(canonical)}`);
  else canonicals.set(canonical, url);
  if (h1Count !== 1) failures.push(`${url}: expected one H1, found ${h1Count}`);
  if (/noindex/i.test(robots)) failures.push(`${url}: noindex URL included in sitemap`);
  if (!ogTitle || !ogDescription || !ogImage) failures.push(`${url}: incomplete Open Graph fields`);

  const jsonLd = Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi), (match) => match[1]);
  for (const block of jsonLd) {
    try { JSON.parse(block); } catch { failures.push(`${url}: invalid JSON-LD`); }
  }
}

for (const link of internalLinks) {
  const response = await fetch(link, { redirect: "follow", signal: AbortSignal.timeout(12000) });
  if (response.status !== 200) failures.push(`Internal link ${link}: returned ${response.status}`);
}

console.log(`Checked ${urls.length} sitemap URLs and ${internalLinks.size} internal links.`);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("SEO route checks passed.");
}
