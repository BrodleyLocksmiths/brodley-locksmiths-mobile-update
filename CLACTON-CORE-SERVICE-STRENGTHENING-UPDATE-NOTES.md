# Clacton & Core Service Strengthening Update

## What changed

- Strengthened the homepage opening and core-services section around Clacton-on-Sea, Tendring and the property locksmith work customers most often need.
- Improved the Services page introduction, metadata and priority service routes.
- Expanded the Clacton-on-Sea area page with four clear customer routes: lock changes, uPVC door repairs, anti-snap upgrades and key safe fitting.
- Reworked the Lock Changes, uPVC Door Repairs, Anti-Snap Lock Upgrades and Key Safes pages with more specific customer-friendly copy, stronger Clacton relevance and clearer explanations of what is checked.
- Added closely related internal links for each priority service and direct links between those services and the Clacton-on-Sea page.
- Kept the wording focused on property locks, doors, access and physical security. Vehicle locksmith work remains excluded.

## Preserved

- Existing Next.js architecture and all current routes
- LocalBusiness, Service, FAQ and breadcrumb schema
- Sitemap and robots setup
- Canonical metadata and existing redirects
- Yarn package declaration, Node 20 target and Vercel-ready configuration
- Existing images, real-work content, forms and Get Secure tool

## Verification

- Production build completed successfully.
- All 111 static pages were generated, including the homepage, Clacton-on-Sea area page and every requested service page.
- The requested page copy and internal links were confirmed in the generated output.
- Sitemap priority entries, structured-data functions and the vehicle-service exclusion were confirmed.

## Deploy

1. Replace the current website package with the contents of this ZIP, or commit the updated files to the existing GitHub repository.
2. Let Vercel build and deploy the update using the existing project settings.
3. When Vercel shows Ready / Production, check:
   - `/`
   - `/services`
   - `/areas/clacton-on-sea`
   - `/services/lock-changes`
   - `/services/upvc-door-repairs-tendring`
   - `/services/anti-snap-lock-upgrades`
   - `/services/key-safes`
   - `/quote`
4. Resubmit the existing sitemap in Google Search Console, then request indexing only for the homepage, Clacton page, Services page and four priority service pages.

No DNS changes are required.
