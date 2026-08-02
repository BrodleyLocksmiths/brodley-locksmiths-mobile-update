import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, PageShell, PlannedWorkHub } from '@/components/Shared';
import { servicePages, townPages } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Locksmith Services and Areas | Brodley Locksmiths Tendring',
  description: 'Find planned locksmith services and local area pages for Brodley Locksmiths, including lock changes, uPVC door repairs, security upgrades, key safes and Tendring town pages.',
  path: '/locksmith-services-and-areas',
  keywords: 'locksmith services and areas Tendring, locksmith Clacton services, lock changes areas, uPVC door repairs Tendring areas'
});

const plannedServiceSlugs = [
  'lock-changes',
  'lock-upgrades',
  'anti-snap-lock-upgrades',
  'euro-cylinder-replacement',
  'upvc-door-repairs-tendring',
  'door-alignment-adjustment',
  'multipoint-lock-repairs',
  'door-handle-replacement',
  'key-safes',
  'security-surveys',
  'gatemate-gate-security',
  'locksmith-for-landlords'
];

const priorityTownNames = [
  'Clacton-on-Sea',
  'Frinton-on-Sea',
  'Harwich',
  'Dovercourt',
  'Walton-on-the-Naze',
  'Brightlingsea',
  'Manningtree',
  'Holland-on-Sea',
  'Jaywick',
  'St Osyth'
];

export default function LocksmithServicesAndAreasPage() {
  const plannedServices = plannedServiceSlugs.map((slug) => servicePages.find((service) => service.slug === slug)).filter(Boolean);
  const otherServices = servicePages.filter((service) => !plannedServiceSlugs.includes(service.slug));
  const priorityTowns = priorityTownNames.map((name) => townPages.find((town) => town.town === name)).filter(Boolean);
  const supportingTowns = townPages.filter((town) => !priorityTownNames.includes(town.town));

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services and Areas', path: '/locksmith-services-and-areas' }])]} />
      <PageShell eyebrow="Find Help" title="Find the right planned locksmith service or local area page." intro="A clear customer and crawler-friendly route to the main Brodley Locksmiths pages for planned lock changes, door repairs, security upgrades, key safes, gate security and Tendring area coverage.">
        <PlannedWorkHub />

        <section className="site-map-hub-section" aria-label="Priority planned locksmith services">
          <div className="section-header left-align">
            <p className="eyebrow red">Priority services</p>
            <h2>Planned lock, door and security work.</h2>
            <p>These are the main commercial pages Brodley Locksmiths wants Google and customers to understand first.</p>
          </div>
          <div className="site-map-hub-grid">
            {plannedServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="site-map-hub-card">
                <ShieldCheck size={24} />
                <strong>{service.nav}</strong>
                <span>{service.short}</span>
                <em>View service <ArrowRight size={14} /></em>
              </Link>
            ))}
          </div>
        </section>

        <section className="site-map-hub-section" aria-label="Priority Tendring areas">
          <div className="section-header left-align">
            <p className="eyebrow red">Priority areas</p>
            <h2>Main Tendring local pages.</h2>
            <p>These town pages support searches such as locksmith Clacton, locksmith Frinton, locksmith Harwich and locksmith near me across Tendring.</p>
          </div>
          <div className="site-map-hub-grid area-hub-grid">
            {priorityTowns.map((town) => (
              <Link key={town.slug} href={`/areas/${town.slug}`} className="site-map-hub-card">
                <MapPin size={24} />
                <strong>{town.town}</strong>
                <span>{town.text}</span>
                <em>View area <ArrowRight size={14} /></em>
              </Link>
            ))}
          </div>
        </section>

        <section className="site-map-hub-section" aria-label="Other locksmith services and supporting areas">
          <div className="content-grid compact-content-grid">
            <div className="info-box">
              <h2>Other useful service pages</h2>
              <div className="service-list-links">
                {otherServices.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.nav}<ArrowRight size={16} /></Link>)}
              </div>
            </div>
            <div className="info-box">
              <h2>Supporting Tendring areas</h2>
              <div className="tag-cloud area-tag-cloud nearby-area-links">
                {supportingTowns.map((town) => <Link key={town.slug} href={`/areas/${town.slug}`}>{town.town}</Link>)}
              </div>
            </div>
          </div>
        </section>

        <section className="site-map-hub-section property-focus-note" aria-label="Property locksmith focus">
          <div className="info-box">
            <CheckCircle2 size={30} />
            <h2>Property locksmith focus</h2>
            <p>Brodley Locksmiths focuses on property locks, door reliability, key control and physical security for homes, landlords, holiday accommodation and small businesses. Vehicle locksmith work is not offered.</p>
          </div>
        </section>
      </PageShell>
      <ContactCTA />
    </>
  );
}
