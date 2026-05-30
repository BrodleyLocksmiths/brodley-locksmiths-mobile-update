import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, FaqSection, PageShell } from '@/components/Shared';
import { contact, servicePages, townPages } from '@/lib/siteData';
import { breadcrumbSchema, faqSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

const priorityServiceSlugs = [
  'lock-changes',
  'door-repairs',
  'lock-upgrades',
  'key-safes',
  'security-surveys',
  'caravan-holiday-park-locksmith-services',
  'landlord-locksmith-services',
  'upvc-door-mechanism-replacement'
];

export function generateStaticParams() {
  return townPages.map((town) => ({ slug: town.slug }));
}

export function generateMetadata({ params }) {
  const town = townPages.find((t) => t.slug === params.slug);
  if (!town) return {};
  return pageMetadata({
    title: `Locksmith ${town.town} | Lock Changes, Door Repairs & Security`,
    description: town.meta,
    path: `/areas/${town.slug}`,
    keywords: `locksmith ${town.town}, lock changes ${town.town}, uPVC door repairs ${town.town}, key safes ${town.town}, lock upgrades ${town.town}, Tendring locksmith`
  });
}

export default function TownDetailPage({ params }) {
  const town = townPages.find((t) => t.slug === params.slug);
  if (!town) notFound();
  const path = `/areas/${town.slug}`;
  const visibleServices = priorityServiceSlugs
    .map((slug) => servicePages.find((service) => service.slug === slug))
    .filter(Boolean);

  const townFaqs = [
    { q: `Do you provide locksmith services in ${town.town}?`, a: `Yes. Brodley Locksmiths provides lock changes, lock upgrades, lock installations, uPVC door repairs, key safes and security surveys in ${town.town} and nearby Tendring areas including ${town.related.join(', ')}.` },
    { q: `Can you repair uPVC doors in ${town.town}?`, a: `Yes. Door repairs are available in ${town.town} for common uPVC, composite and timber door issues such as stiff handles, dropped doors, jammed multipoint mechanisms and doors that will not lock properly.` },
    { q: `Can you change locks after moving home in ${town.town}?`, a: `Yes. Lock changes are available for new homeowners, tenants, landlords, holiday properties and businesses in ${town.town}. This is especially useful if you do not know how many keys are still in circulation.` },
    { q: `Do you install key safes in ${town.town}?`, a: `Yes. Key safe installation is available in ${town.town} for carers, elderly relatives, holiday lets, guest access, cleaners, landlords and trusted emergency access.` }
  ];

  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(townFaqs), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas' }, { name: town.town, path }])]} />
      <PageShell eyebrow="Local Locksmith" title={town.title} intro={town.text}>
        <div className="two-col area-detail-intro">
          <div className="info-box">
            <MapPin size={34} />
            <h2>Local locksmith in {town.town}</h2>
            <p>Brodley Locksmiths supports {town.angle}. {town.note}</p>
            <p>{town.localDetail}</p>
            <div className="button-row area-button-row">
              <a href={contact.phoneHref} className="btn btn-red big"><Phone size={20} /> {contact.phoneDisplay}</a>
              <a href={contact.emailHref} className="btn btn-outline big"><Mail size={20} /> Email</a>
            </div>
          </div>

          <div className="info-box">
            <ShieldCheck size={34} />
            <h2>Common locksmith work in {town.town}</h2>
            <div className="area-check-list">
              {town.commonIssues.map((issue) => (
                <div key={issue}><CheckCircle2 size={18} /> <span>{issue}</span></div>
              ))}
            </div>
            <h3>Property types supported</h3>
            <div className="tag-cloud area-tag-cloud">{town.propertyFocus.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>

        <div className="area-local-panel">
          <h2>Lock changes, door repairs and key safes across {town.town}</h2>
          <p>
            Whether you need a lock changed after moving home, a stiff uPVC door repaired, a key safe fitted for controlled access or a security survey for a rental, holiday let or business, Brodley Locksmiths provides clear advice and tidy workmanship across {town.town} and the surrounding Tendring area.
          </p>
          <p>
            The focus is on practical local security: checking the lock, the door, the mechanism, the cylinder, the access route and the way the property is actually used before recommending the right solution.
          </p>
        </div>

        <div className="area-services-grid">
          <div className="info-box area-services-box">
            <h2>Popular services in {town.town}</h2>
            <div className="service-list-links">
              {visibleServices.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.nav}<ArrowRight size={16} /></Link>)}
            </div>
          </div>
          <div className="info-box area-services-box">
            <h2>Nearby areas covered</h2>
            <p>Also covering nearby locations around {town.town}:</p>
            <div className="tag-cloud area-tag-cloud">{town.related.map((r) => <span key={r}>{r}</span>)}</div>
            <Link href="/areas" className="text-link area-all-link">View all Tendring areas <ArrowRight size={16} /></Link>
          </div>
        </div>
      </PageShell>
      <FaqSection faqs={townFaqs} title={`Locksmith ${town.town} FAQs`} intro={`Common questions about lock changes, uPVC door repairs, key safes and security services in ${town.town}.`} />
      <ContactCTA />
    </>
  );
}
