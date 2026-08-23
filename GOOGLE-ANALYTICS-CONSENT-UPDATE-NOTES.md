# Google Analytics & Consent Update

## Analytics property

- Google Analytics 4 Measurement ID: `G-SSP15NM0MD`
- Analytics is included across every route through the shared Next.js layout.
- Advertising storage, advertising personalisation and Google signals are disabled.

## Consent behaviour

- Google Analytics stays off until a visitor selects **Accept analytics**.
- **Reject analytics** leaves all website features available without loading Google Analytics.
- The visitor's choice is remembered in browser storage.
- Visitors can reopen the choice using **Cookie settings** in the footer or on the Cookie Policy page.
- Withdrawing consent updates Google's consent state and removes accessible `_ga` cookies for this site.

## Events tracked after consent

- `page_view` — page visits, including navigation within the website
- `click_to_call` — clicks on telephone links
- `email_click` — clicks on email links
- `quote_request_click` — clicks that lead to the Quote page
- `get_secure_check_click` — clicks that lead to the Get Secure Property Check
- `get_secure_results` — a visitor reveals completed Get Secure results
- `generate_lead` — a quote form or Get Secure enquiry is successfully sent

Names, phone numbers, email addresses, messages, photographs and town/postcode entries are not sent to Google Analytics.

## Policy updates

- Cookie Policy updated for optional GA4, consent choices and changing preferences.
- Privacy Policy updated to explain website analytics.

## After deployment

1. Wait for Vercel to show **Ready / Production**.
2. Open the live website in a private/incognito window.
3. Confirm the analytics choice appears and that rejecting it leaves the site working normally.
4. Open another private/incognito window, select **Accept analytics**, then visit two or three pages.
5. In Google Analytics, open **Reports → Realtime**. The test visit should normally appear within about 30 minutes.
6. Test one telephone-link click and confirm `click_to_call` appears in Realtime.
7. After events begin appearing, mark `generate_lead` and `click_to_call` as key events in GA4. `generate_lead` is the main website-enquiry conversion.

No DNS, Search Console or sitemap changes are required for this update.

## Verification

- Production build completed successfully.
- All 111 static pages generated.
- Existing SEO metadata, schema, sitemap, redirects, enquiry routes, Yarn declaration and Vercel configuration were preserved.
