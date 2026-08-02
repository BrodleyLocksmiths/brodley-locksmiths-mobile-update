import Link from 'next/link';
import { CheckCircle2, Phone, Mail, ArrowRight, MapPinned, Star, BadgeCheck, Wrench, Camera, MessageSquare, ClipboardCheck, HelpCircle, ShieldCheck, KeyRound } from 'lucide-react';
import { blogPosts, contact, coreFaqs, customerReviews, locations, servicePages, site, townPages } from '@/lib/siteData';

const indexingPriorityServiceSlugs = [
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

const indexingPriorityTownNames = [
  'Clacton-on-Sea',
  'Frinton-on-Sea',
  'Walton-on-the-Naze',
  'Harwich',
  'Dovercourt',
  'Manningtree',
  'Brightlingsea',
  'Holland-on-Sea',
  'Jaywick',
  'Great Clacton',
  'St Osyth',
  'Thorpe-le-Soken'
];

function serviceBySlug(slug) {
  return servicePages.find((service) => service.slug === slug);
}

function townByName(name) {
  return townPages.find((town) => town.town === name);
}


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
          <div className="pill"><Star size={16} /> Local lock, door and security services across Tendring</div>
          <h1><span>Lock changes, uPVC door repairs</span> and security upgrades in Tendring.</h1>
          <p>Brodley Locksmiths focuses on property locks, door reliability and security improvements for homes, landlords and small businesses across Clacton-on-Sea, Frinton, Walton, Harwich, Dovercourt, Manningtree, Brightlingsea and surrounding Tendring villages.</p>
          <div className="button-row">
            <a href={contact.phoneHref} className="btn btn-red big">Call {contact.phoneDisplay} <Phone size={20} /></a>
            <Link href="/quote" className="btn btn-outline big">Request a Quote <ArrowRight size={20} /></Link>
            <Link href="/get-secure-check" className="btn btn-outline big get-secure-hero-link">Try the Get Secure Check <ClipboardCheck size={20} /></Link>
          </div>
          <Link href="/services/lock-upgrades" className="hero-urgent-link">Improving your security? Start with practical lock and cylinder upgrades <ArrowRight size={16} /></Link>
          <div className="mini-card-grid">
            {[
              ['Local Lock & Door Work', 'Lock changes, upgrades and door repairs across Tendring.'],
              ['Homes & Landlords', 'Move-ins, key control, rentals and repairs.'],
              ['Property Security', 'Surveys, key safes, gate locks and access advice.']
            ].map(([title, text]) => <div className="mini-card" key={title}><strong>{title}</strong><span>{text}</span></div>)}
          </div>
        </div>
        <div className="survey-panel reveal delay">
          <img src={site.logo} alt="Brodley Locksmiths key emblem" className="watermark" />
          <p className="eyebrow gold">Get Secure</p>
          <h2>Check locks and doors before small faults become bigger problems.</h2>
          <p>A practical review of locks, cylinders, door alignment, key control, access points, outbuildings and everyday security.</p>
          <div className="check-list">
            {['Front and rear door lock strength', 'uPVC mechanism condition and alignment', 'Cylinder snapping and forced-entry risk', 'Window locks and accessible openings', 'Garages, sheds, gates and side access', 'Key control for tenants, guests and staff'].map((item) => <div key={item}><CheckCircle2 size={20} /> {item}</div>)}
          </div>
          <Link href="/services/security-surveys" className="text-link">View security surveys <ArrowRight size={16} /></Link>
          <br />
          <Link href="/get-secure-check" className="text-link">Try the Get Secure Property Check <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ compact = false, slugs, limit }) {
  const items = slugs
    ? slugs.map((slug) => servicePages.find((service) => service.slug === slug)).filter(Boolean)
    : limit ? servicePages.slice(0, limit) : servicePages;
  return (
    <div className="services-grid">
      {items.map((service) => {
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


export function PlannedWorkHub() {
  const plannedServices = [
    ['lock-changes', 'Regain control of keys after a move, tenant change or security concern.'],
    ['lock-upgrades', 'Upgrade tired or vulnerable locks before they become a weak point.'],
    ['anti-snap-lock-upgrades', 'Improve cylinder security on suitable uPVC, composite and timber doors.'],
    ['upvc-door-repairs-tendring', 'Fix stiff handles, dropped doors and mechanisms before failure.'],
    ['key-safes', 'Create safer access for carers, family, cleaners, guests or trusted trades.'],
    ['gatemate-gate-security', 'Secure side gates, sheds, rear access and garden routes.']
  ].map(([slug, note]) => ({ ...serviceBySlug(slug), note })).filter((item) => item.slug);

  const plannedAreas = ['Clacton-on-Sea', 'Frinton-on-Sea', 'Harwich', 'Dovercourt', 'Walton-on-the-Naze', 'Brightlingsea']
    .map(townByName)
    .filter(Boolean);

  return (
    <section className="planned-work-hub" aria-label="Lock door and security services">
      <div className="planned-work-copy">
        <p className="eyebrow gold">Lock & door help</p>
        <h2>Common reasons customers call Brodley Locksmiths.</h2>
        <p>From changing locks after a move to repairing a stiff uPVC door, fitting a key safe or upgrading weak cylinders, the aim is simple: clear advice, tidy workmanship and better security for the property.</p>
        <p className="planned-work-note">Focused on property locks, door reliability, key control and practical security upgrades for homes, rentals and small businesses.</p>
      </div>
      <div className="planned-work-grid">
        {plannedServices.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="planned-work-card">
            <strong>{service.nav}</strong>
            <span>{service.note}</span>
          </Link>
        ))}
      </div>
      <div className="planned-area-strip" aria-label="Popular local areas">
        {plannedAreas.map((town) => <Link key={town.slug} href={`/areas/${town.slug}`}>{town.town}</Link>)}
      </div>
    </section>
  );
}


export function ServicesByCategory() {
  const categoryOrder = [
    'Core locksmith services',
    'Door repairs & mechanisms',
    'Security surveys & advice',
    'Access, care & key safes',
    'Move-in & key control',
    'Outdoor access & gate security',
    'Landlords & property professionals',
    'Holiday lets, guest houses & caravan sites',
    'Small business security',
    'Urgent locksmith help'
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
    'Urgent locksmith help': 'Support for doors that will not lock, snapped keys and access problems where the property is insecure or the lock is close to failure.',
    'Core locksmith services': 'Lock changes, lock upgrades and property-security improvements across Tendring.',
    'Door repairs & mechanisms': 'Help for uPVC, composite and timber doors that are stiff, dropped, jammed or no longer locking smoothly.',
    'Access, care & key safes': 'Practical access solutions for carers, family members, elderly relatives, trusted trades and emergency access.',
    'Landlords & property professionals': 'Locksmith support for rentals, managed properties, tenant changes, viewings and property handovers.',
    'Holiday lets, guest houses & caravan sites': 'Access, key safe, lock change and door repair support for Tendring’s coastal accommodation market.',
    'Small business security': 'Lock, door and key control support for shops, offices, workshops, storage areas and local business premises.',
    'Move-in & key control': 'Services for new homeowners, new tenants and anyone who needs to regain control of property keys.',
    'Outdoor access & gate security': 'Practical locks and access control for side gates, garden gates, sheds, workshops and outdoor storage.',
    'Security surveys & advice': 'Security reviews for homes, landlords, businesses and accommodation providers who want clear priorities.'
  };
  return intros[category] || 'Local locksmith support across Tendring.';
}


export function GateSecurityFeature({ compact = false }) {
  return (
    <section className={`gate-security-feature ${compact ? 'gate-security-feature-compact' : ''}`}>
      <div className="gate-security-feature-copy">
        <p className="eyebrow gold">Outdoor access</p>
        <h2>GateMate® gate security for side gates, sheds and rear access.</h2>
        <p>A side or rear gate can be the easy route to a garden, shed, garage, workshop or rear door. Brodley Locksmiths can assess the gate, access needs and outdoor exposure before advising on a practical GateMate® lock or other suitable security upgrade.</p>
        <div className="gate-security-feature-points">
          <span><ShieldCheck size={18} /> Key-controlled access where appropriate</span>
          <span><KeyRound size={18} /> Better key control for homes, rentals and holiday properties</span>
          <span><Wrench size={18} /> Alignment, hinges and keeps checked with the lock setup</span>
        </div>
        <div className="button-row gate-security-feature-actions">
          <Link href="/services/gatemate-gate-security" className="btn btn-red">Explore GateMate® gate security <ArrowRight size={18} /></Link>
          <Link href="/get-secure-check" className="btn btn-outline">Check garden & side access <ClipboardCheck size={18} /></Link>
        </div>
      </div>
      <aside className="gate-security-feature-aside">
        <p className="eyebrow red">Worth checking</p>
        <h3>Does your gate close and lock as easily as it should?</h3>
        <ul>
          <li>Side gate gives access to the rear of the property</li>
          <li>Gate is stiff, dropped, rusty or difficult to lock</li>
          <li>Tools, bikes, sheds or storage sit behind the gate</li>
          <li>Guests, tenants, staff, family or carers need controlled access</li>
        </ul>
        <Link href="/blog/how-to-secure-a-side-gate-garden-gate-shed-and-rear-access" className="text-link">Read the gate security guide <ArrowRight size={16} /></Link>
      </aside>
    </section>
  );
}

export function LocalSeoSection() {
  return (
    <section className="section charcoal">
      <div className="container two-col">
        <div>
          <p className="eyebrow gold">Local locksmith work</p>
          <h2>Property locksmith in Tendring for locks, doors and access security.</h2>
          <p>Brodley Locksmiths helps customers across Tendring choose sensible lock changes, stronger cylinders, uPVC door repairs, key safes, gate security and practical security surveys. The service is built for homeowners, landlords, holiday lets, guest houses and small businesses that want reliable work before small faults become expensive problems.</p>
          <p>Whether you are moving into a home in Clacton-on-Sea, dealing with a dropped uPVC door in Frinton-on-Sea, improving key control for a rental property in Harwich or arranging a security review near Manningtree, the aim is to identify the right solution before replacing parts unnecessarily.</p>
          <p>Brodley Locksmiths covers coastal towns, villages and rural properties throughout Tendring, including Clacton-on-Sea, Great Clacton, Holland-on-Sea, Jaywick, Little Clacton, Thorpe-le-Soken, Weeley, Frinton-on-Sea, Walton-on-the-Naze, Harwich, Dovercourt, Manningtree, Brightlingsea and surrounding areas.</p>
        </div>
        <div className="stack">
          {[
            [ClipboardCheck, 'Clear security advice', 'Straightforward recommendations based on the door, property type, key control and realistic risk.'],
            [Camera, 'Real lock and door work', 'Genuine job photos showing lock changes, uPVC repairs, cylinder upgrades, key safes and gate security.'],
            [MessageSquare, 'Property locksmith focus', 'Brodley Locksmiths focuses on homes, rentals, businesses, doors, key control and property access.']
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
          <h2>A careful, practical approach to lock and door security.</h2>
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
  const linkedPriorityTowns = indexingPriorityTownNames.map(townByName).filter(Boolean);
  const unlinkedNearbyNames = locations.filter((place) => !indexingPriorityTownNames.includes(place)).slice(0, 18);
  return (
    <section className="section deep map-section">
      <img src={site.map} alt="Tendring map background showing Brodley Locksmiths service area" />
      <div className="map-cover" />
      <div className="container relative">
        <SectionHeader eyebrow="Local Area Coverage" title="Locksmith work across Tendring towns and villages.">Lock changes, uPVC door repairs, key safes, cylinder upgrades, gate security and property-security surveys across the district, including coastal towns, villages, rural properties, landlords, guest houses and small businesses.</SectionHeader>
        <div className="priority-area-link-cloud" aria-label="Popular Tendring locksmith area pages">
          {linkedPriorityTowns.map((town) => <Link key={town.slug} href={`/areas/${town.slug}`}>{town.town}</Link>)}
        </div>
        <div className="location-cloud supporting-location-cloud">{unlinkedNearbyNames.map((place) => <span key={place}>{place}</span>)}</div>
        <div className="center"><Link href="/areas" className="btn btn-red big">View all areas <MapPinned size={20} /></Link></div>
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


export function IndexingBoostLinks({ variant = 'full' }) {
  const priorityServices = indexingPriorityServiceSlugs.map(serviceBySlug).filter(Boolean);
  const priorityTowns = indexingPriorityTownNames.map(townByName).filter(Boolean);
  return (
    <section className={`indexing-boost-links ${variant === 'compact' ? 'indexing-boost-links-compact' : ''}`} aria-label="Popular locksmith service and area links">
      <div>
        <p className="eyebrow gold">Helpful shortcuts</p>
        <h2>Find the right lock, door or security help quickly.</h2>
        <p>Choose from the most requested services and local areas across Tendring.</p>
      </div>
      <div className="indexing-link-columns">
        <div className="indexing-link-card">
          <h3>Popular services</h3>
          <div className="indexing-link-grid">
            {priorityServices.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.nav}</Link>)}
          </div>
        </div>
        <div className="indexing-link-card">
          <h3>Key Tendring areas</h3>
          <div className="indexing-link-grid">
            {priorityTowns.map((town) => <Link key={town.slug} href={`/areas/${town.slug}`}>{town.town}</Link>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceAreaQuickLinks({ title = 'Popular Tendring areas for locksmith work', intro = 'Brodley Locksmiths covers the main coastal towns, villages and local areas across Tendring.' }) {
  const priorityTowns = indexingPriorityTownNames.map(townByName).filter(Boolean);
  return (
    <div className="service-area-quick-links">
      <h2>{title}</h2>
      <p>{intro}</p>
      <div className="service-area-quick-link-grid">
        {priorityTowns.map((town) => <Link key={town.slug} href={`/areas/${town.slug}`}>{town.town}</Link>)}
      </div>
      <Link href="/areas" className="text-link">View every Tendring area <ArrowRight size={16} /></Link>
    </div>
  );
}

export function PriorityServiceLinks({ title = 'Useful locksmith services', current }) {
  const priorityServices = indexingPriorityServiceSlugs
    .filter((slug) => slug !== current)
    .map(serviceBySlug)
    .filter(Boolean)
    .slice(0, 6);
  return (
    <div className="priority-service-links">
      <h2>{title}</h2>
      <div className="priority-service-link-grid">
        {priorityServices.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.nav}</Link>)}
      </div>
    </div>
  );
}

export function ContactCTA() {
  return (
    <section className="cta">
      <img src={site.logo} alt="" />
      <div className="container">
        <p className="eyebrow dark">Get Secure</p>
        <h2>Need a lock changed, upgraded or a door repaired?</h2>
        <p>Contact Brodley Locksmiths for lock changes, door repairs, key safes, security upgrades and property security checks across Tendring. If a door will not lock or someone cannot get in or out safely, call first.</p>
        <div className="button-row center-row">
          <a href={contact.phoneHref} className="btn btn-black big"><Phone size={20} /> {contact.phoneDisplay}</a>
          <Link href="/quote" className="btn btn-gold big">Request a Quote <ArrowRight size={20} /></Link>
          <Link href="/get-secure-check" className="btn btn-black big">Get Secure Check <ClipboardCheck size={20} /></Link>
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
    .slice(0, 4);
  return (
    <div className="related-box">
      <h2>Related help</h2>
      <p>A few useful next steps that may fit the same lock, door or property concern.</p>
      <div>
        {related.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.nav}</Link>)}
      </div>
    </div>
  );
}


export function ProofHubSection() {
  const links = [
    {
      href: '/get-secure-check',
      title: 'Get Secure Property Check',
      text: 'Use the interactive lock, door, window and access checklist to spot common security concerns and find the right Brodley Locksmiths service.'
    },
    {
      href: '/locksmith-services-and-areas',
      title: 'Services and area finder',
      text: 'A simple way to find the right service or local Tendring area page for locks, doors, key safes and security upgrades.'
    },
    {
      href: '/services/gatemate-gate-security',
      title: 'GateMate® gate security',
      text: 'Practical side-gate, shed, workshop and rear-access security for homes, rentals, caravan properties and local businesses.'
    },
    {
      href: '/recent-work',
      title: 'Recent locksmith work',
      text: 'See the types of lock changes, older lock repairs, snapped key callouts, key safe installations and security upgrades Brodley Locksmiths helps with across Tendring.'
    },
    {
      href: '/real-work-gallery',
      title: 'Real work photo gallery',
      text: 'View genuine job photography showing lock, door, gate, access and commercial locksmith work, with sensitive details protected before publication.'
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

