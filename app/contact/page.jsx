import { Mail, Phone, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { PageShell } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Contact Brodley Locksmiths | Locksmith Tendring',
  description: 'Contact Brodley Locksmiths for lock changes, lock upgrades, lock installations, uPVC door repairs, key safes and security surveys across Tendring. Call 07825 494999.',
  path: '/contact',
  keywords: 'contact Brodley Locksmiths, locksmith Tendring phone number, locksmith Clacton contact'
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]} />
      <PageShell eyebrow="Contact" title="Contact Brodley Locksmiths." intro="For lock changes, uPVC door repairs, key safes, security upgrades or practical property advice across Tendring, call or send the details below.">
        <div className="contact-grid">
          <div className="contact-box">
            <Phone size={42} />
            <h2>Call Ron</h2>
            <p>Best if a door will not lock, someone cannot get in or out safely, or you want to speak through the job.</p>
            <a href={contact.phoneHref} className="btn btn-red big">{contact.phoneDisplay}</a>
          </div>
          <div className="contact-box">
            <Mail size={42} />
            <h2>Email details</h2>
            <p>Useful for quotes, photos, location details and non-urgent lock, door or key safe work.</p>
            <a href={contact.emailHref} className="btn btn-outline big">{contact.email}</a>
          </div>
          <div className="contact-box">
            <ClipboardCheck size={42} />
            <h2>Not sure what you need?</h2>
            <p>Use the Get Secure Property Check to review locks, doors, keys and access points before getting in touch.</p>
            <Link href="/get-secure-check" className="btn btn-outline big">Start the check</Link>
          </div>
        </div>
      </PageShell>
    </>
  );
}
