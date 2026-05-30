# Brodley Locksmiths — SEO Optimised Next.js Website

This is a production-ready Next.js website package for Brodley Locksmiths.

## What is included

- Premium red/gold/charcoal design using the supplied logo and background assets
- Real URL structure for service and area pages
- SEO metadata on every page
- LocalBusiness, Service, FAQ and Breadcrumb structured data
- Sitemap and robots.txt generation
- Click-to-call and email links
- Responsive mobile layout
- Pages for services, areas, FAQs, about and contact

## Main contact details

- Phone: 07825 494999
- Email: info@brodley-locksmiths.com
- Domain expected: https://www.brodley-locksmiths.com

## Install locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Create a free Vercel account.
2. Upload/import this project.
3. Vercel should detect Next.js automatically.
4. Deploy.
5. Add your domain: `brodley-locksmiths.com` and `www.brodley-locksmiths.com`.
6. Follow Vercel's DNS instructions.
7. Once live, submit `https://www.brodley-locksmiths.com/sitemap.xml` in Google Search Console.

## Important after launch

- Add real Google reviews to the reviews section.
- Add real before/after work photos.
- Optimise Google Business Profile.
- Build consistent local citations.
- Connect Google Search Console and Analytics.
- Test structured data using Google's Rich Results Test.

## Editing content

Most text, areas and services are in:

```text
lib/siteData.js
```

Global styling is in:

```text
app/globals.css
```

## Added pages in this version

This updated package adds:

- `/services/key-safes`
- `/services/upvc-door-mechanism-replacement`
- `/services/landlord-locksmith-services`
- `/services/holiday-let-guest-house-security`
- `/blog`
- `/blog/should-i-change-locks-after-moving-house`
- `/blog/why-is-my-upvc-door-hard-to-lock`
- `/blog/anti-snap-locks-explained`
- `/blog/landlord-lock-change-checklist`
- `/quote`

Most wording for the new service pages and articles is in `lib/siteData.js`.
The quote form is in `components/QuoteForm.jsx` and opens the visitor's email app with a pre-filled quote request to `info@brodley-locksmiths.com`.


## Vercel install note
Set Install Command to: corepack enable && pnpm install --no-frozen-lockfile
Build Command: pnpm run build
Framework: Next.js
