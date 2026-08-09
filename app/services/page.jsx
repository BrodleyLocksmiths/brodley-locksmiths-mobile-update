import JsonLd from '@/components/JsonLd';
import { PageShell, ServicesByCategory, ContactCTA, CoreServiceHub } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Locksmith Services Clacton-on-Sea & Tendring | Locks, Doors & Security',
  description: 'Property locksmith services in Clacton-on-Sea and across Tendring, including lock changes, uPVC door repairs, anti-snap upgrades and fitted key safes.',
  path: '/services',
  keywords: 'locksmith services Tendring, lock changes Clacton, uPVC door repairs Tendring, anti snap lock upgrades, key safes Essex, landlord locksmith Tendring'
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])]} />
      <PageShell eyebrow="Property Locksmith Services" title="Lock changes, door repairs and security upgrades across Clacton and Tendring." intro="Start with the problem you need solved: regain control of your keys, repair a stiff or unreliable door, strengthen a vulnerable cylinder, arrange safer shared access or improve security around the property.">
        <CoreServiceHub />
        <ServicesByCategory />
        <div className="related-box services-help-box" style={{ textAlign: 'center' }}>
          <h2>Not sure which service fits?</h2>
          <p>Call or email with the issue, your location and the type of property. Brodley Locksmiths will help you identify whether the sensible next step is a lock change, cylinder upgrade, uPVC door repair, adjustment, key safe, gate lock or wider security check.</p>
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
