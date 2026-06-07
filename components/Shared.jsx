import Link from 'next/link';
import { CheckCircle2, Phone, Mail, ArrowRight, MapPinned, Star, BadgeCheck, Wrench, Camera, MessageSquare, ClipboardCheck, HelpCircle } from 'lucide-react';
import { blogPosts, contact, coreFaqs, customerReviews, locations, servicePages, site } from '@/lib/siteData';

export function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      <p className="eyebrow red">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <img src={site.map} alt="Brodley Locksmiths service area map covering Tendring and surrounding towns" className="hero-map" />
      <div className="hero-overlay" />
      <div className="hero-ring" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="pill"><Star size={16} /> Premium locksmith & security work across Tendring</div>
          <h1><span>Locksmith in Tendring</span> for locks, doors and security upgrades.</h1>
          <p>Brodley Locksmiths provides professional lock installations, lock upgrades, lock changes, uPVC door repairs and property security surveys for homes, landlords and businesses across Clacton-on-Sea, Frinton, Walton, Harwich, Dovercourt, Manningtree, Brightlingsea and surrounding Tendring villages.</p>
          <div className="button-row">
            <a href={contact.phoneHref} className="btn btn-red big">Call {contact.phoneDisplay} <Phone size={20} /></a>
            <Link href="/services" className="btn btn-outline big">View Services <ArrowRight size={20} /></Link>
          </div>
          <div className="mini-card-grid">
            {[
              ['Prompt Local Service', 'Locksmith and door repair support across Tendring.'],
              ['Homes & Landlords', 'Move-ins, tenants, repairs and upgrades.'],
              ['Business Security', 'Surveys, lock advice and door repairs.']
            ].map(([title, text]) => <div className="mini-card" key={title}><strong>{title}</strong><span>{text}</span></div>)}
          </div>
        </div>
        <div className="survey-panel reveal delay">
          <img src={site.logo} alt="Brodley Locksmiths key emblem" className="watermark" />
          <p className="eyebrow gold">Security Survey</p>
          <h2>Know your weak points before they become a problem.</h2>
          <p>A practical property review checking doors, locks, cylinders, windows, access routes, outbuildings and key control.</p>
          <div className="check-list">
            {['Front and rear door lock strength', 'uPVC mechanism condition and alignment', 'Cylinder snapping and forced-entry risk', 'Window locks and accessible openings', 'Garages, sheds, gates and side access', 'Key control for tenants, guests and staff'].map((item) => <div key={item}><CheckCircle2 size={20} /> {item}</div>)}
          </div>
          <Link href="/services/security-surveys" className="text-link">View security surveys <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ compact = false }) {
  return (
    <div className="services-grid">
      {servicePages.map((service) => {
        const Icon = service.icon;
        return (
          <article className="service-card" key={service.slug}>
            <div className="icon-box"><Icon size={28} /></div>
            <h3>{service.nav}</h3>
            <p>{service.short}</p>
            {!compact && <div className="mini-checks">{service.bullets.slice(0, 3).map((point) => <span key={point}><CheckCircle2 size={16} /> {point}</span>)}</div>}
            <Link href={`/services/${service.slug}`} className="text-link">View {service.nav.toLowerCase()} <ArrowRight size={16} /></Link>
          </article>
        );
      })}
    </div>
  );
}


export function ServicesByCategory() {
  const categoryOrder = [
    'Core locksmith services',
    'Door repairs & mechanisms',
    'Access, care & key safes',
    'Landlords & property professionals',
    'Holiday lets, guest houses & caravan sites',
    'Small business security',
    'Move-in & key control',
    'Security surveys & advice'
  ];
  const grouped = categoryOrder
    .map((category) => ({ category, items: servicePages.filter((service) => service.category === category) }))
    .filter((group) => group.items.length);
  return (
    <div className="service-category-wrap">
      {grouped.map((group) => (
        <section className="service-category" key={group.category}>
          <div className="service-category-heading">
            <h2>{group.category}</h2>
            <p>{categoryIntro(group.category)}</p>
          </div>
          <div className="services-grid category-grid">
            {group.items.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card service-card-compact" key={service.slug}>
                  <div className="icon-box"><Icon size={26} /></div>
                  <h3>{service.nav}</h3>
                  <p>{service.short}</p>
                  <Link href={`/services/${service.slug}`} className="text-link">View service <ArrowRight size={16} /></Link>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

function categoryIntro(category) {
  const intros = {
    'Core locksmith services': 'Everyday locksmith help for locks, keys, upgrades and stronger property security across Tendring.',
    'Door repairs & mechanisms': 'Help for uPVC, composite and timber doors that are stiff, dropped, jammed or no longer locking smoothly.',
    'Access, care & key safes': 'Practical access solutions for carers, family members, elderly relatives, trusted trades and emergency access.',
    'Landlords & property professionals': 'Locksmith support for rentals, managed properties, tenant changes, viewings and property handovers.',
    'Holiday lets, guest houses & caravan sites': 'Access, key safe, lock change and door repair support for Tendring’s coastal accommodation market.',
    'Small business security': 'Lock, door and key control support for shops, offices, workshops, storage areas and local business premises.',
    'Move-in & key control': 'Services for new homeowners, new tenants and anyone who needs to regain control of property keys.',
    'Security surveys & advice': 'Security reviews for homes, landlords, businesses and accommodation providers who want clear priorities.'
  };
  return intros[category] || 'Local locksmith support across Tendring.';
}

export function LocalSeoSection() {
  return (
    <section className="section charcoal">
      <div className="container two-col">
        <div>
          <p className="eyebrow gold">Local Locksmith Support</p>
          <h2>Local locksmith in Tendring for homes, landlords and businesses.</h2>
          <p>Brodley Locksmiths helps customers across Tendring improve practical property security through lock changes, lock upgrades, professional lock installations, uPVC door repairs and security surveys. The service is suitable for homeowners, landlords, holiday lets, guest houses and small businesses that need reliable advice and a premium finish.</p>
          <p>Whether you are moving into a home in Clacton-on-Sea, dealing with a dropped uPVC door in Frinton-on-Sea, improving security for a rental property in Harwich or arranging a security survey near Manningtree, the aim is to identify the right solution before replacing parts unnecessarily.</p>
          <p>Brodley Locksmiths covers coastal towns, villages and rural properties throughout Tendring, including Clacton-on-Sea, Great Clacton, Holland-on-Sea, Jaywick, Little Clacton, Thorpe-le-Soken, Weeley, Frinton-on-Sea, Walton-on-the-Naze, Harwich, Dovercourt, Manningtree, Brightlingsea and surrounding areas.</p>
        </div>
        <div className="stack">
          {[
            [ClipboardCheck, 'Security-first advice', 'Recommendations are based on the door, property type, key control and realistic risk.'],
            [Camera, 'Door and lock repair specialists', 'Help with stiff uPVC doors, dropped handles, jammed mechanisms, worn cylinders and locks that no longer feel secure.'],
            [MessageSquare, 'Trusted local service', 'Clear communication, tidy workmanship and practical locksmith advice for customers across Clacton, Harwich, Frinton, Walton and the wider Tendring area.']
          ].map(([Icon, title, text]) => <div className="info-box" key={title}><Icon size={32} /><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="section deep pattern">
      <div className="container two-col">
        <div>
          <p className="eyebrow gold">Why Brodley Locksmiths</p>
          <h2>A more considered approach than a standard locksmith callout.</h2>
          <p>The aim is to improve the property properly: identify the cause, explain the options and complete the work to a clean, professional standard.</p>
          <div className="trust-grid">
            {['Professional, tidy workmanship', 'Security-first recommendations', 'Clear advice before work begins', 'Local Tendring-area service', 'Homes, landlords and businesses', 'Premium finish without pushy sales'].map((item) => <div key={item}><BadgeCheck size={20} /> {item}</div>)}
          </div>
        </div>
        <div className="useful-panel">
          <Wrench size={40} />
          <h3>Useful for:</h3>
          {[
            ['New homeowners', 'Change locks, check inherited security and remove unknown key risks.'],
            ['Landlords', 'Improve tenant safety, respond to turnover and protect rental assets.'],
            ['Holiday lets & guest houses', 'Review access, key safes, guest turnover and vulnerable doors.'],
            ['Small businesses', 'Check entrance doors, staff access, rear doors, storage areas and lock suitability.']
          ].map(([title, text]) => <div className="useful-item" key={title}><strong>{title}</strong><p>{text}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function StarRating({ rating = 5 }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={18} className={index < rating ? 'star-filled' : ''} />
      ))}
    </div>
  );
}

export function ReviewCards({ limit }) {
  const items = limit ? customerReviews.slice(0, limit) : customerReviews;
  return (
    <div className="review-grid">
      {items.map((review) => (
        <article className="review-card" key={`${review.name}-${review.service}`}>
          <StarRating rating={review.rating} />
          <blockquote>“{review.quote}”</blockquote>
          <div className="review-author">
            <strong>{review.name}</strong>
            <span>{review.service}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="section charcoal">
      <div className="container">
        <SectionHeader eyebrow="5-Star Customer Reviews" title="Trusted locksmith work across Tendring.">
          Customers choose Brodley Locksmiths for prompt help, honest advice, tidy workmanship and practical security improvements. From lock changes after lost keys to uPVC door repairs, higher-security locks and key safe fitting, every job is handled with care.
        </SectionHeader>
        <ReviewCards limit={3} />
        <div className="center review-cta">
          <Link href="/reviews" className="btn btn-outline big">Read more reviews <ArrowRight size={20} /></Link>
        </div>
      </div>
    </section>
  );
}

export function AreasPreview() {
  return (
    <section className="section deep map-section">
      <img src={site.map} alt="Tendring map background showing Brodley Locksmiths service area" />
      <div className="map-cover" />
      <div className="container relative">
        <SectionHeader eyebrow="Local Area Coverage" title="Serving towns and villages throughout Tendring.">Local locksmith and security services across the district, including coastal towns, villages, rural properties, landlords, guest houses and small businesses.</SectionHeader>
        <div className="location-cloud">{locations.map((place) => <span key={place}>{place}</span>)}</div>
        <div className="center"><Link href="/areas" className="btn btn-red big">View area pages <MapPinned size={20} /></Link></div>
      </div>
    </section>
  );
}

export function FaqSection({ faqs = coreFaqs, title = 'Frequently asked locksmith questions', intro = 'Common questions about lock changes, uPVC door repairs, security upgrades and security surveys across Tendring.' }) {
  return (
    <section className="section deep">
      <div className="container faq-wrap">
        <SectionHeader eyebrow="FAQs" title={title}>{intro}</SectionHeader>
        <div className="faq-list">
          {faqs.map((faq) => <details key={faq.q}><summary>{faq.q}<HelpCircle size={20} /></summary><p>{faq.a}</p></details>)}
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="cta">
      <img src={site.logo} alt="" />
      <div className="container">
        <p className="eyebrow dark">Get Secure</p>
        <h2>Need locks changed, upgraded or a door repaired?</h2>
        <p>Contact Brodley Locksmiths for lock installations, lock upgrades, lock changes, door repairs and property security surveys across Tendring.</p>
        <div className="button-row center-row">
          <a href={contact.phoneHref} className="btn btn-black big"><Phone size={20} /> {contact.phoneDisplay}</a>
          <a href={contact.emailHref} className="btn btn-gold big"><Mail size={20} /> Email Brodley Locksmiths</a>
        </div>
      </div>
    </section>
  );
}

export function PageShell({ eyebrow, title, intro, children }) {
  return (
    <section className="page-shell">
      <img src={site.map} alt="" className="page-map" />
      <div className="page-gradient" />
      <div className="container relative">
        <div className="page-title">
          <p className="eyebrow gold">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function ServicesInternalLinks({ current }) {
  const currentService = servicePages.find((service) => service.slug === current);
  const related = servicePages
    .filter((service) => service.slug !== current)
    .filter((service) => currentService?.category ? service.category === currentService.category || service.priority : service.priority)
    .slice(0, 8);
  return (
    <div className="related-box">
      <h2>Related locksmith services</h2>
      <p>Explore similar services that may also be relevant to your property, rental, business or accommodation setup.</p>
      <div>
        {related.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.nav}</Link>)}
      </div>
    </div>
  );
}


export function ProofHubSection() {
  const links = [
    {
      href: '/recent-work',
      title: 'Recent locksmith work',
      text: 'See the types of lock changes, older lock repairs, snapped key callouts, key safe installations and security upgrades Brodley Locksmiths helps with across Tendring.'
    },
    {
      href: '/case-studies',
      title: 'Review-led case studies',
      text: 'Read customer-inspired stories showing how clear advice, repair-first thinking and tidy workmanship can help save time, stress and unnecessary replacement costs.'
    },
    {
      href: '/why-choose-brodley-locksmiths',
      title: 'Why choose Brodley Locksmiths',
      text: 'A local locksmith service built around trust, practical security advice, prompt communication and the Get Secure approach.'
    },
    {
      href: '/example-security-survey-report',
      title: 'Example security survey report',
      text: 'See how a Brodley Locksmiths security review can break down lock, door, window, key safe and outbuilding priorities in plain English.'
    }
  ];
  return (
    <section className="section charcoal">
      <div className="container">
        <SectionHeader eyebrow="Proof & Practical Advice" title="Real locksmith work, clear security thinking and stronger local trust.">
          Customers want to know they are choosing the right local locksmith. These pages show how Brodley Locksmiths approaches common lock, door and security problems across Tendring.
        </SectionHeader>
        <div className="blog-grid preview">
          {links.map((item) => (
            <article className="blog-card" key={item.href}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link href={item.href} className="text-link">View page <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="section deep">
      <div className="container">
        <SectionHeader eyebrow="Advice Hub" title="Helpful locksmith advice for property owners across Tendring.">
          Practical guides for homeowners, landlords, holiday lets and businesses who want to make better security decisions.
        </SectionHeader>
        <div className="blog-grid preview">
          {posts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div className="blog-meta">{post.readTime}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-link">Read article <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
        <div className="center"><Link href="/blog" className="btn btn-outline big">View all advice articles <ArrowRight size={20} /></Link></div>
      </div>
    </section>
  );
}

