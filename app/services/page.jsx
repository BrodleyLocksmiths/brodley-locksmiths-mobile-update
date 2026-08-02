import JsonLd from '@/components/JsonLd';
import { PageShell, ServicesByCategory, ContactCTA, PlannedWorkHub } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Core Locksmith Services Tendring | Lock Changes, uPVC Door Repairs & Security',
  description: 'Locksmith services across Tendring: lock changes, high-security cylinder upgrades, uPVC door repairs, door alignment, key safes, gate security and property security surveys.',
  path: '/services',
  keywords: 'locksmith services Tendring, lock changes Clacton, uPVC door repairs Tendring, anti snap lock upgrades, key safes Essex, landlord locksmith Tendring'
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])]} />
      <PageShell eyebrow="Services" title="Locksmith services across Tendring, grouped by what you need." intro="Find the right help quickly, whether you need locks changed, a uPVC door repaired, a high-security cylinder upgrade, a key safe fitted, support for a rental property, or practical security advice for a home, holiday let or small business.">
        <PlannedWorkHub />
        <ServicesByCategory />
        <div className="related-box services-help-box" style={{ textAlign: 'center' }}>
          <h2>Not sure which service fits?</h2>
          <p>Call or email with the issue, your location and the type of property. Brodley Locksmiths can advise whether you need a lock change, cylinder upgrade, uPVC door repair, door adjustment, key safe, gate lock, security survey or a more specific Brodley Locksmiths service.</p>
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
