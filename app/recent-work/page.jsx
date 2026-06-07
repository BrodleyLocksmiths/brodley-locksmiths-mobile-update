import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, PageShell, ReviewCards, SectionHeader } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';
import { ArrowRight, BadgeCheck, KeyRound, DoorOpen, LockKeyhole, ShieldCheck, Phone, Mail } from 'lucide-react';

export const metadata = pageMetadata({
  title: 'Recent Locksmith Work Tendring | Brodley Locksmiths',
  description: 'Recent locksmith work from Brodley Locksmiths across Tendring, including lock changes, snapped key callouts, older lock repairs, key safes and higher-security door locks.',
  path: '/recent-work',
  keywords: 'recent locksmith work Tendring, locksmith Clacton reviews, lock repairs Tendring, key safe fitting Clacton, lock changes Tendring'
});

const recentWork = [
  {
    icon: KeyRound,
    title: 'Same-day lock change after lost keys',
    service: 'Lock Changes',
    area: 'Tendring area',
    text: 'A customer lost their keys and needed the property made secure again quickly. Brodley Locksmiths attended the same day, changed the lock and helped restore confidence that old keys would no longer work.',
    links: [{ label: 'View lock changes', href: '/services/lock-changes' }, { label: 'Move-in lock changes', href: '/services/move-in-lock-change-service' }]
  },
  {
    icon: LockKeyhole,
    title: 'Older lock repaired when replacement had been suggested elsewhere',
    service: 'Older Lock Repair',
    area: 'Tendring area',
    text: 'After another company suggested a complete new lock system, Ron inspected the existing lock, sorted the fault, arranged new keys and left the lock operating smoothly again. This is a good example of repair-first thinking where replacement is not necessarily the only answer.',
    links: [{ label: 'Lock repairs and upgrades', href: '/services/lock-upgrades' }, { label: 'Euro cylinder replacement', href: '/services/euro-cylinder-replacement' }]
  },
  {
    icon: ShieldCheck,
    title: 'Higher-security door lock and key safe for a block of flats',
    service: 'Security Upgrade & Key Safe',
    area: 'Managed property / flats',
    text: 'A block of flats needed stronger door security and a practical key safe solution. Brodley Locksmiths fitted a higher-security lock and key safe, helping improve access management for residents, visitors or trusted keyholders.',
    links: [{ label: 'Key safes', href: '/services/key-safes' }, { label: 'Care access and key safes', href: '/services/locksmith-for-care-access-key-safes' }]
  },
  {
    icon: DoorOpen,
    title: 'Snapped key and urgent access on a Sunday evening',
    service: 'Snapped Key / Entry Problem',
    area: 'Tendring area',
    text: 'A customer was unable to gain entry after a key snapped. Brodley Locksmiths attended promptly, helped them get back inside and dealt with the problem calmly and professionally.',
    links: [{ label: 'Door repairs', href: '/services/door-repairs' }, { label: 'Contact Brodley Locksmiths', href: '/contact' }]
  }
];

export default function RecentWorkPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Recent Work', path: '/recent-work' }])]} />
      <PageShell
        eyebrow="Recent Work"
        title="Recent locksmith work across Tendring."
        intro="Examples of the type of locksmith, lock repair, key safe and security work Brodley Locksmiths helps with across Clacton, Harwich, Frinton, Walton, Brightlingsea, Manningtree and nearby Tendring villages."
      >
        <section className="review-summary-panel">
          <div>
            <p className="eyebrow red">Get Secure</p>
            <h2>Practical help for real lock and door problems.</h2>
            <p>These recent work examples are based on genuine customer feedback and common locksmith jobs Brodley Locksmiths carries out: lost keys, older lock repairs, snapped keys, key safe fitting and higher-security lock upgrades.</p>
          </div>
          <div className="review-summary-actions">
            <a href={contact.phoneHref} className="btn btn-red big"><Phone size={20} /> Call {contact.phoneDisplay}</a>
            <a href={contact.emailHref} className="btn btn-outline big"><Mail size={20} /> Email Brodley Locksmiths</a>
          </div>
        </section>

        <div className="blog-grid">
          {recentWork.map((job) => {
            const Icon = job.icon;
            return (
              <article className="blog-card" key={job.title}>
                <div className="icon-box"><Icon size={26} /></div>
                <div className="blog-meta">{job.service} · {job.area}</div>
                <h2>{job.title}</h2>
                <p>{job.text}</p>
                <div className="service-list-links">
                  {job.links.map((link) => <Link key={link.href} href={link.href}>{link.label}<ArrowRight size={16} /></Link>)}
                </div>
              </article>
            );
          })}
        </div>

        <section className="section-inset">
          <SectionHeader eyebrow="Trusted Local Locksmith" title="The same approach on every job.">
            Whether the issue is a lock change after lost keys, a stiff uPVC door, a snapped key or a key safe for family access, Brodley Locksmiths focuses on clear advice, tidy workmanship and practical security.
          </SectionHeader>
          <div className="trust-grid review-service-points">
            {['Same-day support where possible', 'Repair-first advice where suitable', 'Security upgrades explained clearly', 'Key safe fitting for flats, carers and families', 'Support across Tendring towns and villages', 'Get Secure with a local locksmith you can contact directly'].map((item) => <div key={item}><BadgeCheck size={20} /> {item}</div>)}
          </div>
        </section>

        <section className="section-inset">
          <SectionHeader eyebrow="Customer Feedback" title="What customers say about the work.">
            Genuine 5-star feedback from Brodley Locksmiths customers.
          </SectionHeader>
          <ReviewCards limit={3} />
        </section>
      </PageShell>
      <ContactCTA />
    </>
  );
}
