import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, PageShell, ReviewCards, SectionHeader } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, faqSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';
import { ArrowRight, BadgeCheck, Phone, Mail, ShieldCheck, Wrench, KeyRound, DoorOpen } from 'lucide-react';

export const metadata = pageMetadata({
  title: 'Why Choose Brodley Locksmiths | Trusted Locksmith Tendring',
  description: 'Why choose Brodley Locksmiths for lock changes, door repairs, key safes and security upgrades across Tendring. Review-led, practical and customer-focused locksmith service.',
  path: '/why-choose-brodley-locksmiths',
  keywords: 'why choose Brodley Locksmiths, trusted locksmith Tendring, locksmith reviews Clacton, local locksmith Tendring'
});

const faqs = [
  { q: 'Why choose Brodley Locksmiths?', a: 'Customers choose Brodley Locksmiths for prompt communication, practical advice, tidy workmanship and help with lock changes, door repairs, key safes and security upgrades across Tendring.' },
  { q: 'Do you always replace the whole lock system?', a: 'No. Where a sensible repair is possible, Brodley Locksmiths will explain the options rather than pushing unnecessary replacement work.' },
  { q: 'Can you help landlords, flats and managed properties?', a: 'Yes. Brodley Locksmiths helps with lock changes, key safes, higher-security locks and practical access control for landlords, flats, holiday lets and managed properties.' }
];

const reasons = [
  { icon: Phone, title: 'Prompt, direct communication', text: 'Customers mention quick replies, same-day support and help when a lock or key problem becomes stressful.' },
  { icon: Wrench, title: 'Repair-first thinking where possible', text: 'If an older lock or door problem can be solved sensibly, Brodley Locksmiths will look at the cause rather than jumping straight to unnecessary replacement.' },
  { icon: ShieldCheck, title: 'Security upgrades explained clearly', text: 'Higher-security locks, anti-snap options, key safes and security survey recommendations are explained in plain English.' },
  { icon: KeyRound, title: 'Helpful after lost keys or moving home', text: 'Lock changes help customers regain control over who can access the property after lost keys, tenant changes or moving house.' },
  { icon: DoorOpen, title: 'Door and lock problems handled together', text: 'Stiff uPVC doors, older locks, jammed mechanisms, snapped keys and replacement cylinders often need a joined-up locksmith and door repair approach.' }
];

export default function WhyChoosePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Why Choose Brodley Locksmiths', path: '/why-choose-brodley-locksmiths' }])]} />
      <PageShell
        eyebrow="Why Choose Brodley Locksmiths"
        title="A trusted local locksmith with a Get Secure approach."
        intro="Brodley Locksmiths helps customers across Tendring with lock changes, lock repairs, uPVC and composite door problems, key safes, higher-security locks and property security advice."
      >
        <section className="review-summary-panel">
          <div>
            <p className="eyebrow red">Review-Led Service</p>
            <h2>Built around trust, clear advice and practical security.</h2>
            <p>Customer feedback highlights the things that matter when choosing a locksmith: turning up when needed, explaining the issue, keeping costs sensible, carrying out tidy work and helping people feel secure again.</p>
          </div>
          <div className="review-summary-actions">
            <a href={contact.phoneHref} className="btn btn-red big"><Phone size={20} /> Call {contact.phoneDisplay}</a>
            <a href={contact.emailHref} className="btn btn-outline big"><Mail size={20} /> Email Brodley Locksmiths</a>
          </div>
        </section>

        <div className="services-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article className="service-card" key={reason.title}>
                <div className="icon-box"><Icon size={28} /></div>
                <h2>{reason.title}</h2>
                <p>{reason.text}</p>
              </article>
            );
          })}
        </div>

        <section className="section-inset">
          <SectionHeader eyebrow="Get Secure" title="A better experience than a rushed lock replacement.">
            The strongest reviews point to a careful, practical way of working: inspect the problem, explain the options, repair where suitable, upgrade where needed and leave the property easier to use and more secure.
          </SectionHeader>
          <div className="trust-grid review-service-points">
            {['Lost keys and lock changes', 'Older lock repairs', 'Snapped key support', 'Higher-security door locks', 'Key safe fitting', 'Security advice for flats, homes and businesses'].map((item) => <div key={item}><BadgeCheck size={20} /> {item}</div>)}
          </div>
        </section>

        <section className="section-inset">
          <SectionHeader eyebrow="Customer Feedback" title="5-star feedback from local customers.">
            Genuine customer reviews show the type of service Brodley Locksmiths aims to provide across Clacton, Harwich, Frinton, Walton and the wider Tendring area.
          </SectionHeader>
          <ReviewCards limit={5} />
          <div className="center"><Link href="/reviews" className="btn btn-outline big">Read more reviews <ArrowRight size={20} /></Link></div>
        </section>
      </PageShell>
      <ContactCTA />
    </>
  );
}
