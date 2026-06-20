# Brodley Locksmiths — Full Launch Polish Update

This package is the current polished Next.js website build for Brodley Locksmiths. It keeps the premium red / gold / charcoal design, the Tendring service and area pages, reviews, advice pages and the advanced **Get Secure Property Check**.

## What this update adds

- Focused homepage service section and clearer top-of-page calls to action
- Urgent route for doors that will not lock, lockouts, lock-ins and unsafe access
- New pages:
  - `/services/emergency-locksmith-tendring`
  - `/services/locked-out-non-destructive-entry`
  - `/services/door-will-not-lock`
- Improved Get Secure Property Check:
  - property-specific question paths
  - town/area context that personalises advice but does **not** automatically increase a score
  - stronger door reliability / lockout / lock-in warning weighting
  - urgent first question and urgent call route
  - clearer assistant-style summary, good habits and practical next steps
  - direct result sending, copy and save options
- Direct quote and Get Secure enquiry endpoint with a graceful email-app fallback
- Optional photo upload on quote requests (JPG, PNG or WEBP, up to 2MB)
- Privacy Policy and Cookie Policy pages, plus privacy notes on enquiry forms
- Accessibility and mobile improvements: earlier mobile menu switch, Escape-to-close menu, focus states and improved urgent route visibility
- Favicon, Apple icon and web manifest
- Review/profile links in the footer and `sameAs` structured data
- Redirects prepared for important old website URLs
- Staging-safe search settings: previews are blocked from indexing until the launch setting is changed
- Cleaner sitemap behaviour and no meta-keywords output
- Blog bylines, updated dates and practical local-advice notes

## Vercel settings — keep these as they are

```text
Framework: Next.js
Node.js Version: 20.x
Install Command: corepack enable && yarn install --network-timeout 600000
Build Command: yarn build
Output Directory: leave blank
```

Keep `.yarnrc` at the project root:

```text
network-timeout 600000
enableTelemetry 0
```

## Important: staging / launch setting

This package is intentionally set to **not be indexed yet** so the Vercel preview does not compete with the current website in Google.

In Vercel, add this environment variable for Preview and Production while you are still testing:

```text
NEXT_PUBLIC_LAUNCH_READY=false
```

When the main domain is ready to switch to this site, change it to:

```text
NEXT_PUBLIC_LAUNCH_READY=true
```

Then redeploy. That activates normal indexing, robots and sitemap behaviour.

## Direct form sending — recommended before launch

The website will fall back to opening an email if direct form sending is not configured. For a proper lead form, add the following Vercel environment variables using a verified email-sending domain with Resend:

```text
RESEND_API_KEY=re_your_resend_api_key
ENQUIRY_FROM=Brodley Locksmiths <website@your-verified-domain.co.uk>
ENQUIRY_TO=info@brodley-locksmiths.com
```

The included `/api/enquiry` route sends quote requests and Get Secure results directly to the business email address. Do not put the Resend API key into GitHub or client-side code.

## Launch sequence

1. Deploy and test the Vercel preview on desktop and mobile.
2. Test every Call, Quote, Email and Get Secure button.
3. Test a direct quote form and Get Secure submission after configuring the Resend variables.
4. Connect `www.brodley-locksmiths.com` to Vercel.
5. Redirect the non-www domain to the preferred `www` version in the Vercel domain settings.
6. Change `NEXT_PUBLIC_LAUNCH_READY` to `true` and redeploy.
7. The old route redirects are already included in `next.config.js`.
8. Add the final site in Google Search Console and submit:

```text
https://www.brodley-locksmiths.com/sitemap.xml
```

## Ongoing content that still needs real business material

- Add genuine job photos to Recent Work and Case Studies as they become available.
- Add new genuine reviews with customer permission / platform wording where appropriate.
- Update blog dates when material changes substantially.
- Review Search Console data after launch to decide which service and area pages need strengthening next.

## Editing content

- Main services, areas, FAQs, reviews, blog content and contact details: `lib/siteData.js`
- Global styling: `app/globals.css`
- Direct quote form: `components/QuoteForm.jsx`
- Get Secure Property Check: `components/GetSecureCheckTool.jsx`
- Direct enquiry endpoint: `app/api/enquiry/route.js`
- Redirects: `next.config.js`
