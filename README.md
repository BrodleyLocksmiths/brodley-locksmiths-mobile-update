# Brodley Locksmiths — Stage 1 Implementation Kit
**Prepared:** 8 November 2026

## What has been done in this session

- Reviewed the public homepage, About page and Clacton page text, plus source code from the last site ZIP available in this conversation (`brodley-locksmiths-next-seo-site-clarity-conversion-update.zip`).
- Located a definite issue **in that historical ZIP**: `app/sitemap.js` calculates `const now = new Date()` and writes it to `lastModified` for every URL on every sitemap request. Google only trusts accurate last-modification dates; artificial updates can undermine the usefulness of this signal.
- Prepared a small, isolated replacement `sitemap.js` that emits canonical URL entries and does **not** claim every page has just changed. Both the file and a unified patch are included.
- Identified a potential urgent dependency-maintenance issue: historical package pins `next` to **14.2.22**. The Next.js maintainers have published many security fixes since then. Production may already have a different version; check current GitHub `package.json` and Yarn lockfile before updating. Prefer a tested migration to patched 15.x or 16.x; do not blindly edit the old full ZIP.
- Confirmed the historical Next.js code has page-specific metadata, canonical generation, LocalBusiness/Service JSON-LD, and client-side quote submission with a server `/api/enquiry` that requires `RESEND_API_KEY` and `ENQUIRY_FROM`. Configuration and actual successful delivery are not verified.

## VERY IMPORTANT: not a deployable whole-website ZIP

This kit contains **only** an incremental technical sitemap fix and work tracker. **Do not upload it as a replacement website**. A separate Clacton update was created in a different Work chat; the historical ZIP audited here may be older than the currently deployed site. Check the current `app/sitemap.js` in GitHub main and merge this change only if the incorrect `lastModified` behavior still exists.

## How to use the sitemap fix safely

1. Open the current GitHub main branch and view `app/sitemap.js`.
2. If it still sets all `lastModified` fields to `new Date()` on each request, use `sitemap-fix.patch` as a guide or copy the included `sitemap.js` **after comparing the page list to the current production list**.
3. Do not drop newly added routes from the current sitemap; merge route additions into the revised file.
4. Build and deploy through the existing GitHub/Vercel workflow. Check `/sitemap.xml` contains all intended canonical URLs and does not signal false modification dates.
5. Confirm with Search Console; there is no need to repeatedly submit unchanged URLs.

## Current checks needed for Stage 1

- Fresh November Search Console export: Page Indexing > Pages + sample URLs for `Discovered - currently not indexed` and `Crawled - currently not indexed`.
- Performance > Search results > Last 3 months > export Queries and Pages (not just 7 days).
- A current GitHub `package.json` (and ideally `yarn.lock`) or an export of the current production branch, to verify dependency status and merge safely.
- Confirm whether real test emails arrive from both Quote and Get Secure forms. **Never send credentials or API keys.**

## Release gate

Do not alter live DNS, Google Workspace MX records, or submit untested frameworks changes. Apply fixes in a preview deployment; test homepage, service pages, Get Secure, quote and email before promoting to production.

## Why Stage 1 matters

Search indexing does not improve simply by creating more content. The useful first actions are accurate indexing signals, strong internal linking, usable pages, reliable forms, and verifying that the business is running maintained software.

## Authoritative references consulted

- Google: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google: https://developers.google.com/search/docs/appearance/ai-features
- Google: https://developers.google.com/search/help/crawling-index-faq
- Next.js releases: https://github.com/vercel/next.js/releases
- Vercel May 2026 security guidance: https://vercel.com/changelog/next-js-may-2026-security-release
- OpenAI crawler docs: https://developers.openai.com/api/docs/bots
