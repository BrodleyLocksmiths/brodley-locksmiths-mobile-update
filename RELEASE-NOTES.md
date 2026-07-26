# Release Notes — Brodley Locksmiths Indexing Boost Update

This update focuses on crawl priority, customer navigation and internal linking after launch.

## Added

- Homepage **Popular locksmith help** link hub pointing to priority services and key Tendring area pages.
- Direct linked area buttons in the homepage area section instead of only unlinked town names.
- Stronger priority service links on area pages.
- Stronger key Tendring area links on service pages and blog articles.
- Nearby area names on town pages are now linked where a matching area page exists.
- Footer now highlights the most important commercial services and key local areas.
- `INDEXING-BOOST-MANUAL-CHECKLIST.md` with the priority URLs to manually inspect and request indexing for in Google Search Console.

## Sitemap refinements

- Added `lastModified` dates to sitemap entries.
- Increased sitemap priority for the homepage, services hub, area hub, Get Secure check, quote/contact pages, priority service pages and key area pages.
- Kept legal/privacy pages lower priority.

## Why this update exists

Google Search Console showed many pages as **Discovered - currently not indexed** with **Last crawled: N/A**. That usually means Google knows the URLs exist but has not yet crawled them. This update makes the important pages easier to reach from the homepage, service pages, area pages, footer and blog content.

## Deployment

Commit the package contents to the GitHub `main` branch. Vercel should deploy automatically. No DNS changes are required.
