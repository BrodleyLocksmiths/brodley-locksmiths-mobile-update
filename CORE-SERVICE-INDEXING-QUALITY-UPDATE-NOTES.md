# Brodley Locksmiths — Core Service Indexing & Quality Update

Release date: 8 November 2026. Source: current GitHub export `brodley-locksmiths-mobile-update-main.zip` supplied by the business owner.

## What changed

- Four prominent commercial service pages now display **specific, practical guidance** rather than repeating generic list sections: Lock Changes, uPVC Door Repairs, Anti-Snap Lock Upgrades and Key Safes.
- Each guide distinguishes common symptoms, a practical diagnostic/installation sequence, sensible customer advice and what information helps when requesting a quote. No made-up jobs or credentials have been added.
- Replaced service hero's three competing large actions (call/email/Get Secure) with **Call** and **Request a Quote**, plus a discreet optional Get Secure link. Wider customer contact and the existing Get Secure tool remain available.
- Reduced duplicated content and excessive link clouds on these four pages. Related services and nearby-town links remain available, preserving internal crawl paths.
- Renamed the visible uPVC service navigation label from `uPVC Door Repairs Tendring` to **uPVC Door Repairs**, avoiding the awkward duplicated place name; its slug and SEO title are unchanged.
- Removed two redundant homepage shortcut blocks. The homepage still links directly to all four featured services, and the Services hub links to the full service catalogue.
- Sitemap includes each current service, town and blog URL, removes duplicates, and **does not stamp every untouched URL with today's date**. The six edited routes have a fixed, accurate 2026-11-08 lastmod value; unchanged URLs omit lastmod.
- Removed stray standalone `sitemap.js` and `sitemap-fix.patch` from the project root; Next.js uses **`app/sitemap.js`**.
- Preserved Next.js, existing components, real photos, service-area URLs, schema, redirects, forms, analytics and brand theme. Preserved **Node 26.x** in `package.json`.

## Important distinction

This release makes pages clearer, maintains discoverable internal links and improves crawl metadata. It **cannot force Google to crawl or index any URL**. Search Console indexed statuses may be delayed, and an old `URL unknown` result does not prove a block.

## Deploy safely

1. Confirm the source is the current `main` branch; make a backup or use a new GitHub branch if preferred.
2. Extract the deployment ZIP. Upload the **contents at the repository root** (the folder containing `package.json` and `app/`) — **not a nested folder**, and not the prior audit-kit files alone.
3. Keep existing Vercel project settings and environment variables. Verify `NEXT_PUBLIC_LAUNCH_READY=true` remains configured for **Production**. If missing, this project's robots and metadata **deliberately block indexing**.
4. Confirm `engines.node` stays **26.x**. The ZIP preserves `package-lock.json` and `packageManager: yarn@1.22.22`; leave your working installation settings unchanged. There is **no Next.js dependency upgrade in this release**.
5. Commit, allow Vercel to deploy, then confirm **Ready / Production**.

## After deployment: verify these public URLs

- `/` and `/services`
- `/services/lock-changes`
- `/services/upvc-door-repairs-tendring`
- `/services/anti-snap-lock-upgrades`
- `/services/key-safes`
- `/sitemap.xml` (confirm the four service URLs are present)
- `/robots.txt` (should allow Googlebot)
- `/quote` (test enquiry submission with a safe test message and confirm receipt)

Also view source on each service page and look for `robots` allowing indexing and a self-referencing `canonical` tag. These are deployment checks; the package does not include a live test of your Google Search Console property.

## Search Console follow-up

- After deploying, use **Inspect URL → Test Live URL** on a couple of priority service URLs.
- Ensure `Page fetch: Successful`, `Crawl allowed: Yes`, `Indexing allowed: Yes`, and the preferred canonical is correct.
- Once valid, request indexing **once** if not already requested; repeat requests won't make crawling immediate.
- Check indexing + impressions again during your regular weekly reviews. Do not delete large sets of location pages based only on `Discovered – currently not indexed`.

## Tests

- Completed source-level checks: 46 JS/JSX files parsed without syntax diagnostics; 101 unique sitemap URLs including all 33 service pages, 38 town pages and 9 blog posts; four guide slugs verified; 6 accurate lastmod entries; correct canonical formation; Node 26 engine retained; existing real-work photo present.
- Full local Next.js build was NOT completed: the packaging environment is Node 22 and `npm ci` timed out while trying to fetch dependencies. No dependency version was changed. Vercel's production build must pass before release.
