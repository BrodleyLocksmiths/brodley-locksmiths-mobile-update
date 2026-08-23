import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { PageShell } from '@/components/Shared';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';
import { CookieSettingsButton } from '@/components/AnalyticsConsent';

export const metadata = pageMetadata({
  title: 'Cookie Policy',
  description: 'How Brodley Locksmiths uses essential browser storage and optional Google Analytics cookies on this website.',
  path: '/cookie-policy'
});

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Cookie Policy', path: '/cookie-policy' }])]} />
      <PageShell eyebrow="Website Preferences" title="Cookie Policy" intro="How this website uses essential browser storage and optional analytics.">
        <div className="policy-wrap">
          <p className="policy-date">Last updated: 23 August 2026</p>
          <section className="policy-section"><h2>Your choice</h2><p>Google Analytics is optional and stays off unless you select Accept analytics. You can reject analytics without losing any website features. Your choice is remembered in browser storage so the website does not ask on every page.</p><CookieSettingsButton className="btn btn-outline policy-settings-button" /></section>
          <section className="policy-section"><h2>Essential website functions</h2><p>Essential browser features are used to display pages, keep the website secure, process forms and remember choices you actively make. These functions are needed for the website to work and are not used for advertising.</p></section>
          <section className="policy-section"><h2>Google Analytics</h2><p>If you accept analytics, Google Analytics 4 uses cookies and related information to measure visits, page views and useful website actions such as telephone-link clicks, quote requests and Get Secure Property Check activity. This helps Brodley Locksmiths understand which pages are useful and whether the website leads to genuine enquiries.</p><p>The Analytics setup does not send names, phone numbers, email addresses, enquiry messages or uploaded photographs to Google. Advertising storage, advertising personalisation and Google signals are disabled in this implementation.</p></section>
          <section className="policy-section"><h2>Analytics provider</h2><p>Analytics information is processed using Google Analytics. Google may process technical information such as browser and device details, approximate location, page addresses, referral information and interaction events according to its own privacy and security terms.</p></section>
          <section className="policy-section"><h2>Get Secure Property Check</h2><p>The Get Secure Property Check only saves results on your device when you press the Save results button. This uses browser storage on your device. You can remove saved results at any time by clearing site data in your browser settings.</p></section>
          <section className="policy-section"><h2>Changing or withdrawing consent</h2><p>Select Cookie settings in the website footer or use the button above. Rejecting analytics updates the consent setting and removes Brodley Locksmiths Google Analytics cookies that are accessible to the website. You can also clear site data through your browser settings.</p></section>
          <section className="policy-section"><h2>Contact</h2><p>Questions about this policy can be sent through the <Link href="/contact">Contact page</Link> or by using the details in the <Link href="/privacy-policy">Privacy Policy</Link>.</p></section>
        </div>
      </PageShell>
    </>
  );
}
