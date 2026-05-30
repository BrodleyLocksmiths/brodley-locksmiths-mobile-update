import JsonLd from '@/components/JsonLd';
import { PageShell, ServicesByCategory, ContactCTA } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Locksmith Services Tendring | Locks, uPVC Doors, Key Safes & Security',
  description: 'Brodley Locksmiths provides locksmith services across Tendring including lock changes, lock upgrades, uPVC door repairs, key safes, landlord locksmith work, holiday let security and caravan locksmith support.',
  path: '/services',
  keywords: 'locksmith services Tendring, lock changes Clacton, uPVC door repairs Tendring, key safes Essex, landlord locksmith, caravan locksmith Tendring'
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])]} />
      <PageShell eyebrow="Services" title="Locksmith services across Tendring, grouped by what customers actually need." intro="Find the right help quickly on mobile, whether you need a lock changed, a uPVC door repaired, a key safe fitted, support for a rental property, or security advice for a holiday let, guest house, caravan or small business.">
        <ServicesByCategory />
        <div className="related-box services-help-box" style={{ textAlign: 'center' }}>
          <h2>Not sure which service fits?</h2>
          <p>Call or email with the issue, your location and the type of property. Brodley Locksmiths can advise whether you need a lock change, door repair, key safe, mechanism replacement, security survey or a more specific service page.</p>
          <div className="button-row center-row">
            <a href={contact.phoneHref} className="btn btn-red big">Call {contact.phoneDisplay}</a>
            <a href={contact.emailHref} className="btn btn-outline big">{contact.email}</a>
          </div>
        </div>
      </PageShell>
      <ContactCTA />
    </>
  );
}
