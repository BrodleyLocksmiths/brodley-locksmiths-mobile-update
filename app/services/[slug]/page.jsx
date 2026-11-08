import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, Phone, MapPin, SearchCheck, ClipboardCheck, ShieldCheck } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, FaqSection, GateSecurityFeature, ServiceAreaQuickLinks, ServicesInternalLinks } from '@/components/Shared';
import { GateUpgradePhotos, ServiceWorkGallery } from '@/components/RealWork';
import CoreServiceGuide from '@/components/CoreServiceGuide';
import { coreServiceGuides } from '@/lib/coreServiceGuides';
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


function GateMateSpotlight({ spotlight }) {
  return (
    <section className="gatemate-spotlight" aria-label="GateMate gate security feature">
      <div className="gatemate-mark">OUTDOOR<br />ACCESS</div>
      <div>
        <p className="eyebrow gold">{spotlight.eyebrow}</p>
        <h2>{spotlight.title}</h2>
        <p>{spotlight.text}</p>
        <div className="gatemate-point-grid">
          {spotlight.bullets.map((item) => <div key={item}><ShieldCheck size={18} /> <span>{item}</span></div>)}
        </div>
        <p className="gatemate-note">{spotlight.note}</p>
      </div>
    </section>
  );
}

export default function ServiceDetailPage({ params }) {
  const service = servicePages.find((s) => s.slug === params.slug);
  if (!service) notFound();
  const Icon = service.icon;
  const path = `/services/${service.slug}`;
  const faqs = [...service.faqs, ...coreFaqs.slice(0, 2)];
  const coreGuide = coreServiceGuides[service.slug];
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
              <Link href="/quote" className="btn btn-outline big">Request a quote <ArrowRight size={20} /></Link>
            </div>
            <p className="service-hero-secondary">Unsure about wider property security? <Link href="/get-secure-check">Try our Get Secure Property Check</Link>.</p>
          </div>
          <div className="includes-panel mobile-priority-panel">
            <h2>How this service helps</h2>
            <div>{service.bullets.map((item) => <div key={item}><CheckCircle2 size={20} /> <span>{item}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className="section deep service-detail-section">
        <div className="container">
          {coreGuide ? (
            <CoreServiceGuide guide={coreGuide} />
          ) : (
            <>
              <div className="service-detail-grid">
                <ServiceListCard title="Common reasons customers call" items={service.reasons} />
                <ServiceListCard title="The Brodley Locksmiths approach" items={service.approach} />
              </div>
              {service.spotlight && <GateMateSpotlight spotlight={service.spotlight} />}
              <div className={`local-service-panel ${service.situationsCopy ? '' : 'local-service-panel-single'}`}>
                <div>
                  <MapPin size={34} />
                  <h2>Available across Tendring</h2>
                  <p>{service.localFocus}</p>
                </div>
                {service.situationsCopy && <div>
                  <SearchCheck size={34} />
                  <h2>Worth knowing</h2>
                  <p>{service.situationsCopy}</p>
                </div>}
              </div>
            </>
          )}

          {service.clactonCopy && (
            <div className="area-local-panel">
              <p className="eyebrow gold">Clacton-on-Sea</p>
              <h2>{service.nav} for Clacton properties</h2>
              <p>{service.clactonCopy}</p>
              <div className="button-row">
                <Link href="/areas/clacton-on-sea" className="btn btn-outline">View Clacton locksmith services <ArrowRight size={18} /></Link>
                <Link href="/quote" className="btn btn-red">Request a quote <ArrowRight size={18} /></Link>
              </div>
            </div>
          )}

          <ServiceAreaQuickLinks title={`${service.nav} in Tendring`} intro="Brodley Locksmiths covers Clacton-on-Sea, Frinton, Harwich and surrounding Tendring towns and villages. Choose an area below or contact us directly." limit={coreGuide ? 6 : 12} />
          <ServiceWorkGallery serviceSlug={service.slug} />
          {service.slug === 'gatemate-gate-security' && <GateUpgradePhotos />}

          {!coreGuide && <div className="content-grid compact-content-grid">
            <div className="info-box">
              <h2>Best for</h2>
              <div className="tag-cloud">{service.bestFor.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
            <div className="info-box">
              <h2>Areas covered</h2>
              <p>Available throughout Tendring, including Clacton-on-Sea, Frinton-on-Sea, Walton-on-the-Naze, Harwich, Dovercourt, Manningtree, Brightlingsea and surrounding villages.</p>
              <Link href="/areas" className="text-link">View all areas <ArrowRight size={16} /></Link>
            </div>
          </div>}
          {!coreGuide && <div className="get-secure-inline-cta">
            <p>Not sure whether you need a repair, lock upgrade, key safe or full security survey? Use the Get Secure Property Check to spot common security and door reliability concerns first.</p>
            <Link href="/get-secure-check" className="btn btn-red"><ClipboardCheck size={18} /> Try the Get Secure Property Check</Link>
          </div>}
          {['garage-shed-gate-locks', 'caravan-holiday-park-locksmith-services', 'security-surveys'].includes(service.slug) && <GateSecurityFeature compact />}
          <ServicesInternalLinks current={service.slug} />
        </div>
      </section>
      <FaqSection faqs={faqs} title={`${service.nav} FAQs`} intro={`Common questions about ${service.nav.toLowerCase()} across Tendring.`} />
      <ContactCTA />
    </>
  );
}
