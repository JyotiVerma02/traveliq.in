const fs = require("fs");

const sitemaps = [
  {
    url: "https://traveliq.in/post-sitemap.xml",
    type: "post",
  },
  {
    url: "https://traveliq.in/page-sitemap.xml",
    type: "page",
  },
  {
    url: "https://traveliq.in/social-sitemap.xml",
    type: "social",
  },
  {
    url: "https://traveliq.in/services-sitemap.xml",
    type: "service",
  },
];

async function getAllUrls() {
  const allUrls = [];

  for (const sitemap of sitemaps) {
    console.log("\nReading:", sitemap.url);

    const response = await fetch(sitemap.url);
    const xml = await response.text();

    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
      .map((match) => match[1].trim());

    console.log("URLs found:", urls.length);

    urls.forEach((url) => {
      allUrls.push({
        url,
        sitemapType: sitemap.type,
      });
    });
  }

  // Remove duplicate URLs
  const uniqueUrls = Array.from(
    new Map(allUrls.map((item) => [item.url, item])).values()
  );

  console.log("\n========================");
  console.log("TOTAL URLs:", uniqueUrls.length);
  console.log("========================");

  fs.writeFileSync(
    "all-urls.json",
    JSON.stringify(uniqueUrls, null, 2)
  );

  console.log("\nCreated: all-urls.json");
}

getAllUrls();