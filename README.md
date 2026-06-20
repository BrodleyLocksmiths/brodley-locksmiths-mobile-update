# Brodley Locksmiths — Launch-Polished Next.js Website

This is the current Brodley Locksmiths Next.js website package for Vercel. It includes the red/gold/charcoal brand design, Tendring service and area pages, reviews, blog content, emergency pages, quote form and advanced **Get Secure Property Check**.

## This update adds

- A clearer, fairer **Everyday lock-up** question in the Get Secure tool, with stronger positive scoring and more natural wording.
- A three-step, assistant-style **Suggested order** within the Get Secure results, based on the customer’s answers.
- Extra Get Secure enquiry details: preferred contact method, best time to contact and the type of help the customer wants.
- A stronger quote form with property type and best-contact-time fields.
- More reliable direct enquiry handling, including safe image-file checks for optional lock/door photos.
- A customer-friendly 404 page for old or mistyped links.
- Accessibility polish: skip link, current-page navigation labels, visible focus handling and reduced-motion support.

## Vercel settings

Use these settings, which match the workflow that already works for this project:

```text
Framework Preset: Next.js
Node.js Version: 20.x
Install Command: corepack enable && yarn install --network-timeout 600000
Build Command: yarn build
Output Directory: leave blank
```

Keep `.yarnrc` in the project root:

```text
network-timeout 600000
enableTelemetry 0
```

## Testing before launch

The website stays hidden from search engines while this environment variable is set:

```text
NEXT_PUBLIC_LAUNCH_READY=false
```

When the main domain is moved to Vercel and you are ready for Google to index the new site, change it to:

```text
NEXT_PUBLIC_LAUNCH_READY=true
```

## Direct form submissions

The quote form and Get Secure Property Check can send directly to `info@brodley-locksmiths.com` once Resend is configured in Vercel. Add these environment variables in **Vercel → Project → Settings → Environment Variables**:

```text
RESEND_API_KEY=re_your_resend_api_key
ENQUIRY_FROM=Brodley Locksmiths <website@your-verified-domain.co.uk>
ENQUIRY_TO=info@brodley-locksmiths.com
```

`ENQUIRY_FROM` must use an address/domain verified in Resend. Until this is configured, the forms fall back to opening the customer’s email app.

## Before switching the live domain

- Test the Call, Quote, Email and Get Secure buttons on a phone and desktop.
- Test a real quote-form submission and a Get Secure result submission.
- Add genuine job photos and any new reviews you want included.
- Keep `NEXT_PUBLIC_LAUNCH_READY=false` during testing.
- When ready, connect the main domain in Vercel, enable indexing, and submit the sitemap in Google Search Console.
