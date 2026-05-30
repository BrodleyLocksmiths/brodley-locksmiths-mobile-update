import { Mail, Phone } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { PageShell } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Contact Brodley Locksmiths | Locksmith Tendring',
  description: 'Contact Brodley Locksmiths for lock changes, lock upgrades, lock installations, uPVC door repairs and security surveys across Tendring. Call 07825 494999.',
  path: '/contact',
  keywords: 'contact Brodley Locksmiths, locksmith Tendring phone number, locksmith Clacton contact'
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]} />
      <PageShell eyebrow="Contact" title="Contact Brodley Locksmiths." intro="For lock installations, upgrades, changes, door repairs or security surveys across Tendring, use the call or email links below.">
        <div className="contact-grid">
          <div className="contact-box">
            <Phone size={42} />
            <h2>Call</h2>
            <p>Tap to call directly from mobile.</p>
            <a href={contact.phoneHref} className="btn btn-red big">{contact.phoneDisplay}</a>
          </div>
          <div className="contact-box">
            <Mail size={42} />
            <h2>Email</h2>
            <p>Send details of the issue, location and any photos if useful.</p>
            <a href={contact.emailHref} className="btn btn-outline big">{contact.email}</a>
          </div>
        </div>
      </PageShell>
    </>
  );
}
