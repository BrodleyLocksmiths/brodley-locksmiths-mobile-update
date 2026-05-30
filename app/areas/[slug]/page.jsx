import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, FaqSection, PageShell } from '@/components/Shared';
import { contact, servicePages, townPages } from '@/lib/siteData';
import { breadcrumbSchema, faqSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

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
    keywords: `locksmith ${town.town}, lock changes ${town.town}, door repairs ${town.town}, lock upgrades ${town.town}, Tendring locksmith`
  });
}

export default function TownDetailPage({ params }) {
  const town = townPages.find((t) => t.slug === params.slug);
  if (!town) notFound();
  const path = `/areas/${town.slug}`;
  const townFaqs = [
    { q: `Do you provide locksmith services in ${town.town}?`, a: `Yes. Brodley Locksmiths provides lock changes, lock upgrades, lock installations, door repairs and security surveys in ${town.town} and nearby Tendring areas including ${town.related.join(', ')}.` },
    { q: `Can you repair uPVC doors in ${town.town}?`, a: `Yes. Door repairs are available in ${town.town} for common uPVC, composite and timber door issues such as stiff handles, dropped doors and doors that will not lock properly.` },
    { q: `Can you change locks after moving home in ${town.town}?`, a: `Yes. Lock changes are available for new homeowners, tenants, landlords and businesses in ${town.town}.` }
  ];
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(townFaqs), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas' }, { name: town.town, path }])]} />
      <PageShell eyebrow="Local Locksmith" title={town.title} intro={town.text}>
        <div className="two-col">
          <div className="info-box">
            <h2>Locksmith services in {town.town}</h2>
            <p>Brodley Locksmiths supports {town.angle}. {town.note}</p>
            <div className="service-list-links">
              {servicePages.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.nav}<ArrowRight size={16} /></Link>)}
            </div>
          </div>
          <div className="info-box">
            <h2>Nearby areas</h2>
            <p>Also covering nearby locations around {town.town}:</p>
            <div className="tag-cloud">{town.related.map((r) => <span key={r}>{r}</span>)}</div>
            <div className="button-row">
              <a href={contact.phoneHref} className="btn btn-red big"><Phone size={20} /> {contact.phoneDisplay}</a>
              <a href={contact.emailHref} className="btn btn-outline big"><Mail size={20} /> {contact.email}</a>
            </div>
          </div>
        </div>
      </PageShell>
      <FaqSection faqs={townFaqs} title={`Locksmith ${town.town} FAQs`} intro={`Common questions about lock changes, door repairs and security services in ${town.town}.`} />
      <ContactCTA />
    </>
  );
}
