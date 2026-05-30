import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, SearchCheck } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, FaqSection, ServicesInternalLinks } from '@/components/Shared';
import { contact, coreFaqs, servicePages } from '@/lib/siteData';
import { breadcrumbSchema, faqSchema, localBusinessSchema, pageMetadata, serviceSchema } from '@/lib/schema';

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = servicePages.find((s) => s.slug === params.slug);
  if (!service) return {};
  return pageMetadata({ title: service.seoTitle, description: service.meta, path: `/services/${service.slug}`, keywords: service.keywords });
}

function ServiceListCard({ title, items }) {
  return (
    <div className="service-detail-card">
      <h2>{title}</h2>
      <div className="detail-list">
        {items.map((item) => <div key={item}><CheckCircle2 size={18} /> <span>{item}</span></div>)}
      </div>
    </div>
  );
}

export default function ServiceDetailPage({ params }) {
  const service = servicePages.find((s) => s.slug === params.slug);
  if (!service) notFound();
  const Icon = service.icon;
  const path = `/services/${service.slug}`;
  const faqs = [...service.faqs, ...coreFaqs.slice(0, 2)];
  return (
    <>
      <JsonLd data={[localBusinessSchema(), serviceSchema(service, path), faqSchema(faqs), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: service.nav, path }])]} />
      <section className="page-shell service-page-shell">
        <div className="page-gradient" />
        <div className="container relative service-hero-grid">
          <div className="service-hero-text">
            <Link href="/services" className="back-link">← All services</Link>
            <div className="icon-box"><Icon size={32} /></div>
            <p className="eyebrow gold">{service.nav} in Tendring</p>
            <h1>{service.heroTitle}</h1>
            <p>{service.intro}</p>
            <p>{service.localCopy}</p>
            <div className="button-row">
              <a href={contact.phoneHref} className="btn btn-red big"><Phone size={20} /> {service.cta}</a>
              <a href={contact.emailHref} className="btn btn-outline big"><Mail size={20} /> Email Us</a>
            </div>
          </div>
          <div className="includes-panel mobile-priority-panel">
            <h2>How this service helps</h2>
            <div>{service.bullets.map((item) => <div key={item}><CheckCircle2 size={20} /> <span>{item}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className="section deep service-detail-section">
        <div className="container">
          <div className="service-detail-grid">
            <ServiceListCard title="Common reasons customers call" items={service.reasons} />
            <ServiceListCard title="The Brodley Locksmiths approach" items={service.approach} />
          </div>

          <div className="local-service-panel">
            <div>
              <MapPin size={34} />
              <h2>Local Tendring focus</h2>
              <p>{service.localFocus}</p>
            </div>
            <div>
              <SearchCheck size={34} />
              <h2>Common searches this page covers</h2>
              <p>Customers often look for help using phrases like:</p>
              <div className="search-chip-row">{service.searchTerms.map((term) => <span key={term}>{term}</span>)}</div>
            </div>
          </div>

          <div className="content-grid compact-content-grid">
            <div className="info-box">
              <h2>Best for</h2>
              <div className="tag-cloud">{service.bestFor.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
            <div className="info-box">
              <h2>Areas covered</h2>
              <p>Available throughout Tendring, including Clacton-on-Sea, Frinton-on-Sea, Walton-on-the-Naze, Harwich, Dovercourt, Manningtree, Brightlingsea and surrounding villages.</p>
              <Link href="/areas" className="text-link">View all areas <ArrowRight size={16} /></Link>
            </div>
          </div>
          <ServicesInternalLinks current={service.slug} />
        </div>
      </section>
      <FaqSection faqs={faqs} title={`${service.nav} FAQs`} intro={`Common questions about ${service.nav.toLowerCase()} across Tendring.`} />
      <ContactCTA />
    </>
  );
}
