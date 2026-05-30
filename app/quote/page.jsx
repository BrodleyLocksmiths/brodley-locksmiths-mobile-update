import JsonLd from '@/components/JsonLd';
import QuoteForm from '@/components/QuoteForm';
import { ContactCTA, PageShell } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Request a Locksmith Quote Tendring | Brodley Locksmiths',
  description: 'Request a locksmith quote from Brodley Locksmiths for lock changes, lock upgrades, key safes, uPVC door repairs and security surveys across Tendring.',
  path: '/quote',
  keywords: 'locksmith quote Tendring, request locksmith quote Clacton, door repair quote Essex, lock change quote'
});

export default function QuotePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Request a Quote', path: '/quote' }])]} />
      <PageShell eyebrow="Quote Request" title="Request a locksmith quote." intro="Tell Brodley Locksmiths what you need help with. The form opens your email app with the details filled in so you can send the request directly.">
        <div className="two-col quote-layout">
          <div className="info-box">
            <h2>Useful details to include</h2>
            <p>The more detail you can provide, the easier it is to give clear advice.</p>
            <ul className="tick-list">
              <li>Your town or village</li>
              <li>Whether the door is uPVC, composite or timber</li>
              <li>Whether it is a home, rental, holiday let or business</li>
              <li>What the lock or door is doing</li>
              <li>Any urgency or access issue</li>
            </ul>
            <p>For urgent issues, call <a href={contact.phoneHref}>{contact.phoneDisplay}</a>.</p>
          </div>
          <QuoteForm />
        </div>
      </PageShell>
      <ContactCTA />
    </>
  );
}
