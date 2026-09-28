import { readFile, writeFile } from "node:fs/promises";

const baseUrl = (process.env.MIGRATION_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const inventory = JSON.parse(await readFile(new URL("../all-urls.json", import.meta.url), "utf8"));
const requiredRoutes = [
  "/",
  "/about-travel-iq/",
  "/our-services/",
  "/irctc-agent-registration/",
  "/list-of-irctc-principal-service-providers/",
  "/irctc-agent/how-to-become-irctc-agent/",
  "/b2b-travel-portal/",
  "/contact-us/",
  "/pages/if-your-irctc-user-id-is-linked-to-your-aadhaar-number-you-can-book-up-to-24-tickets-in-a-month/",
];

async function inspect(entry) {
  const oldUrl = new URL(entry.url);
  let current = new URL(oldUrl.pathname, baseUrl);
  const chain = [];
  const seen = new Set();
  let response;
  let html = "";

  for (let hop = 0; hop < 10; hop += 1) {
    if (seen.has(current.href)) {
      return { path: oldUrl.pathname, type: entry.sitemapType, status: "LOOP", target: current.pathname, canonical: "", indexability: "unknown", result: "REDIRECT_LOOP" };
    }
    seen.add(current.href);

    try {
      response = await fetch(current, { redirect: "manual", signal: AbortSignal.timeout(12000) });
    } catch (error) {
      return { path: oldUrl.pathname, type: entry.sitemapType, status: "ERR", target: "", canonical: "", indexability: "unknown", result: `FETCH_ERROR: ${error.message}` };
    }

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) break;
      const target = new URL(location, current);
      chain.push(`${response.status} -> ${target.pathname}`);
      current = new URL(target.pathname + target.search, baseUrl);
      continue;
    }

    if (response.status === 200) html = await response.text();
    break;
  }

  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ?? "";
  const robots = html.match(/<meta\s+name="robots"\s+content="([^"]+)"/i)?.[1] ?? "";
  const indexability = /noindex/i.test(robots) ? "noindex" : response?.status === 200 ? "index" : "unknown";
  let result;

  if (chain.length) result = "REDIRECT";
  else if (response?.status === 404) result = "MISSING_404";
  else if (response?.status !== 200) result = `HTTP_${response?.status ?? "UNKNOWN"}`;
  else if (/noindex/i.test(robots)) result = "NOINDEX";
  else if (!canonical || new URL(canonical).origin !== "https://traveliq.in") result = "INVALID_CANONICAL";
  else result = "NATIVE_200";

  return {
    path: oldUrl.pathname,
    type: entry.sitemapType,
    status: response?.status ?? "unknown",
    target: chain.at(-1)?.replace(/^\d+ -> /, "") ?? current.pathname,
    canonical,
    indexability,
    result,
  };
}

const rows = [];
const requiredEntries = requiredRoutes
  .filter((route) => !inventory.some((entry) => new URL(entry.url).pathname.replace(/\/$/, "") === route.replace(/\/$/, "")))
  .map((route) => ({ url: `https://traveliq.in${route}`, sitemapType: "required" }));
const entriesToCheck = [...inventory, ...requiredEntries];
const concurrency = 8;
for (let index = 0; index < entriesToCheck.length; index += concurrency) {
  rows.push(...await Promise.all(entriesToCheck.slice(index, index + concurrency).map(inspect)));
}

const missingCritical = requiredRoutes.filter((route) => {
  const row = rows.find((item) => item.path.replace(/\/$/, "") === route.replace(/\/$/, ""));
  return !row || row.status !== 200 || row.result === "INVALID_CANONICAL" || row.result === "REDIRECT_LOOP";
});
const counts = rows.reduce((result, row) => {
  result[row.result] = (result[row.result] || 0) + 1;
  return result;
}, {});
const lines = [
  "# URL Migration Validation",
  "",
  `Generated: ${new Date().toISOString()}`,
  `Checked against: ${baseUrl}`,
  `Legacy inventory entries: ${inventory.length}`,
  `Additional required routes: ${requiredEntries.length}`,
  `Critical route failures: ${missingCritical.length ? missingCritical.join(", ") : "none"}`,
  "",
  "## Result counts",
  "",
  ...Object.entries(counts).map(([result, count]) => `- ${result}: ${count}`),
  "",
  "## Per-URL results",
  "",
  "| URL | Status | Type | Canonical | Redirect target | Indexability | Result | Disposition |",
  "| --- | ---: | --- | --- | --- | --- | --- | --- |",
  ...rows.map((row) => {
    const disposition = row.result === "NATIVE_200"
      ? "Preserved at original URL"
      : row.result === "REDIRECT"
        ? "Permanent 308 redirect"
        : row.result === "NOINDEX"
          ? "Kept accessible but excluded from indexing"
          : row.result === "MISSING_404"
            ? "No local body or verified equivalent; review legacy CMS and retirement status"
            : row.result;
    return `| ${row.path} | ${row.status} | ${row.type} | ${row.canonical || "—"} | ${row.target || "—"} | ${row.indexability} | ${row.result} | ${disposition} |`;
  }),
  "",
];

await writeFile(new URL("../URL-MIGRATION-VALIDATION.md", import.meta.url), lines.join("\n"));
console.log(`Checked ${rows.length} legacy URLs. Report: URL-MIGRATION-VALIDATION.md`);
console.log(counts);
if (missingCritical.length) process.exitCode = 1;
