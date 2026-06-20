import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { PageShell } from '@/components/Shared';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Cookie Policy',
  description: 'How Brodley Locksmiths uses essential browser storage and cookies on this website.',
  path: '/cookie-policy'
});

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Cookie Policy', path: '/cookie-policy' }])]} />
      <PageShell eyebrow="Website Preferences" title="Cookie Policy" intro="A simple explanation of the limited browser storage used by this website.">
        <div className="policy-wrap">
          <p className="policy-date">Last updated: 20 June 2026</p>
          <section className="policy-section"><h2>Essential website functions</h2><p>This website does not include advertising tracking or optional analytics cookies in the current build. Basic technical functions may use essential browser features needed to display pages, keep the website secure and remember a choice you have actively made.</p></section>
          <section className="policy-section"><h2>Get Secure Property Check</h2><p>The Get Secure Property Check only saves results on your device when you press the Save results button. This uses browser storage on your device. You can remove saved results at any time by clearing site data in your browser settings.</p></section>
          <section className="policy-section"><h2>Future analytics or advertising</h2><p>Before optional analytics, advertising pixels or similar tracking are added, this website should provide a clear choice and obtain any consent that is required. This policy will be updated if that happens.</p></section>
          <section className="policy-section"><h2>Contact</h2><p>Questions about this policy can be sent through the <Link href="/contact">Contact page</Link> or by using the details in the <Link href="/privacy-policy">Privacy Policy</Link>.</p></section>
        </div>
      </PageShell>
    </>
  );
}
