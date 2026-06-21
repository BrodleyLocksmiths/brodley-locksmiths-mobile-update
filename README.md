# Brodley Locksmiths — GateMate® & Outdoor Security Update

This is the current Brodley Locksmiths Next.js website package for Vercel. It includes the red/gold/charcoal brand design, Tendring service and area pages, reviews, blog content, emergency pages, quote form and advanced **Get Secure Property Check**.

## This update adds

- A dedicated **GateMate® Gate Security** service page for side gates, garden gates, sheds, workshops, garages and rear access.
- A customer-friendly GateMate® feature block on the homepage and key related pages: Security Surveys, Garage/Shed/Gate Locks and Caravan & Holiday Park Locksmith Services.
- A new in-depth local guide: **How to Secure a Side Gate, Garden Gate, Shed and Rear Access**.
- A richer outdoor-access question inside the **Get Secure Property Check**, with security and reliability weighting for stiff, rusty, misaligned or insecure gates.
- GateMate® recommendations in Get Secure result cards and assistant-style next steps where outdoor access needs attention.
- A private `GATEMATE-REAL-JOBS-READY.md` template for turning future real jobs and photos into credible Recent Work and Case Study entries without publishing invented examples.

## GateMate® wording

This website uses GateMate® as a product brand reference only. It does not claim that Brodley Locksmiths is an official GateMate® installer, stockist or manufacturer. Product suitability and availability should always be confirmed after the gate, access requirements and site conditions have been assessed.

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
