# TravelIQ SEO and Migration Audit

Audit date: 2026-09-25  
Canonical origin: `https://traveliq.in`  
Validation target: local production build at `http://localhost:3100`

## Summary

- Canonical URLs use `https://traveliq.in`; no `traveliq-in.vercel.app` references remain in `src`.
- Sitemap validation passed for 22 canonical URLs. The sitemap excludes payment instructions and registration forms because these are noindex utility pages.
- SEO validation passed for all 22 sitemap pages and 28 internal links: titles, descriptions, canonicals, one H1, Open Graph fields, and parseable JSON-LD.
- The legacy inventory contains 154 URLs. The validation report includes the 154 entries plus two required new routes. Results: 19 native 200 pages, 48 permanent redirects, one noindex utility route, and 88 unmatched 404s. See [URL-MIGRATION-VALIDATION.md](./URL-MIGRATION-VALIDATION.md) for every URL and result.
- The known Aadhaar article now responds at its original `/pages/...` path. The duplicate `/pages/social/...` path redirects to that canonical article.
- The application builds, TypeScript passes, and ESLint passes.

## Changes made

- Restored the known Aadhaar monthly-limit article with a clear distinction between personal user limits and authorized agent rules. Its copy links to the official IRCTC instructions.
- Added `/irctc-agent/how-to-become-irctc-agent/` and `/b2b-travel-portal/` as native pages with canonical metadata, visible breadcrumbs, internal links, and relevant schema.
- Updated agent registration, PSP directory, and registration FAQs. The PSP page labels its linked IRCTC source as a 23 December 2024 snapshot and tells applicants to verify current details.
- Added route-specific permanent redirects from obsolete cancellation/refund posts to the current refund policy, old agent instruction posts to the how-to guide, the PSP rules post to the PSP directory, and matching train, tour, flight, hotel and digital-signature posts to their current service pages.
- Replaced stale homepage news links with local article/service links and local image assets.
- Removed Vistara from current flight-booking copy and named Air India Express among current airline options.
- Centralized metadata generation in `src/lib/metadata.ts`; applied it to the new pages, agent-registration page, PSP directory, and policy pages.
- Kept the Organization and WebSite schema at the root layout. Added BreadcrumbList to the new pages and Article schema to article pages.
- Production `robots.txt` allows public pages and disallows `/api/`, `/admin/`, `/signup/`, and `/login/`. It does not block Next static files, media, or scripts. Non-production hosts disallow crawling. Vercel preview page metadata is `noindex, follow` when `VERCEL_ENV=preview`; production remains indexable.
- Reduced `public/vande_bharat_hero.webp` from 219,854 bytes to 116,054 bytes at the same 1860×846 dimensions (about 47% smaller). `HeroMedia` already uses `next/image`, priority loading, high fetch priority, and responsive sizing.

## Redirect and route findings

Next.js configured permanent redirects return HTTP 308. The migration validator reports these as `REDIRECT` and captures their destinations. Existing payment, duplicate policy, service, and agent-registration aliases continue to resolve to their canonical targets; no blanket redirects to the homepage were added.

The 88 unmatched URLs are 68 old posts, 9 social posts and 11 old pages whose bodies or equivalent destinations are absent from the repository’s `src/lib/local-content.ts` store. Some old posts remain available on the current legacy site; for example, the [original 2015 refund article](https://traveliq.in/pages/irctc-railway-refund-rule/) contained obsolete refund rules and now redirects to the current policy. The remaining URLs are itemized as 404 instead of being sent to an unrelated page. This is unresolved migration work, not a claim that all 88 URLs were permanently removed: review those rows against the legacy CMS and migrate still-useful content under the exact slug, add a verified relevant redirect, or document a confirmed retirement.

The source repository does not contain the requested prior `production-url-inventory.json`, `nextjs-route-inventory.json`, or `URL-MIGRATION-REPORT.md`; `all-urls.json` is the available 154-entry legacy inventory.

## Validation commands

```powershell
npm run lint
npx tsc --noEmit
npm run build
$env:SEO_BASE_URL='http://localhost:3100'; npm run validate:seo
$env:MIGRATION_BASE_URL='http://localhost:3100'; npm run validate:migration
$env:SITEMAP_BASE_URL='http://localhost:3100'; npm run validate:sitemap
```

The audit does not include a live 154-URL test against the final `traveliq.in` deployment or a Lighthouse run. The 88 unmatched legacy URLs are the main unresolved migration risk; do not treat the site as fully migration-ready until those are reviewed.
