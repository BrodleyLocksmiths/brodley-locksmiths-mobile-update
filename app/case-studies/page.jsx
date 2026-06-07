import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, PageShell, SectionHeader } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';
import { ArrowRight, BadgeCheck, CheckCircle2, Phone, Mail } from 'lucide-react';

export const metadata = pageMetadata({
  title: 'Locksmith Case Studies Tendring | Brodley Locksmiths',
  description: 'Review-inspired locksmith case studies from Brodley Locksmiths across Tendring, including lost keys, older lock repairs, snapped keys, key safes and security upgrades.',
  path: '/case-studies',
  keywords: 'locksmith case studies Tendring, lock change case study Clacton, key safe case study Tendring, locksmith reviews Clacton'
});

const caseStudies = [
  {
    title: 'Lost keys: same-day lock change and restored security',
    challenge: 'A customer had lost their keys and needed the property secured quickly. The main concern was not just getting a working lock, but making sure the missing keys could no longer provide access.',
    approach: 'Brodley Locksmiths attended the same day, changed the lock, checked the door operation and left the customer with working keys and a more secure property.',
    outcome: 'The customer described the service as brilliant, good value and something they would recommend.',
    links: [{ label: 'Lock Changes', href: '/services/lock-changes' }, { label: 'Move-In Lock Change Service', href: '/services/move-in-lock-change-service' }]
  },
  {
    title: 'Older lock: problem solved without unnecessary full replacement',
    challenge: 'A customer had been told by another company that the older lock could not be fixed and would need a complete new system.',
    approach: 'Ron inspected the lock, identified the issue, sorted the lock operation, arranged new keys and delivered a more practical solution than the customer had first been offered.',
    outcome: 'The customer was impressed that the lock operated smoothly again and described the service as top notch.',
    links: [{ label: 'Lock Upgrades', href: '/services/lock-upgrades' }, { label: 'Euro Cylinder Replacement', href: '/services/euro-cylinder-replacement' }]
  },
  {
    title: 'Block of flats: higher-security lock and key safe fitted',
    challenge: 'A block of flats needed a stronger door lock and a key safe solution to support secure access for the building.',
    approach: 'Brodley Locksmiths fitted a higher-security door lock and key safe, keeping the work clear, courteous and well organised.',
    outcome: 'The customer highlighted the competitive price, high-quality work and courteous service.',
    links: [{ label: 'Key Safes', href: '/services/key-safes' }, { label: 'Security Surveys', href: '/services/security-surveys' }]
  },
  {
    title: 'Snapped key: urgent access problem handled calmly',
    challenge: 'A customer snapped a key and could not gain entry on a Sunday evening, creating a stressful situation.',
    approach: 'Brodley Locksmiths attended quickly, helped the customer regain access and dealt with the problem in a trustworthy, reassuring way.',
    outcome: 'The customer called the service a lifesaver and highly recommended Brodley Locksmiths.',
    links: [{ label: 'Door Repairs', href: '/services/door-repairs' }, { label: 'Contact', href: '/contact' }]
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/case-studies' }])]} />
      <PageShell
        eyebrow="Case Studies"
        title="Review-led locksmith case studies."
        intro="Customer-inspired examples showing how Brodley Locksmiths approaches lock changes, older lock repairs, snapped keys, key safes and security upgrades across Tendring."
      >
        <section className="review-summary-panel">
          <div>
            <p className="eyebrow red">Get Secure</p>
            <h2>Real problems, practical locksmith solutions.</h2>
            <p>These case studies are based on genuine customer feedback. They are written to show the problem, the Brodley Locksmiths approach and the outcome without adding unsupported details.</p>
          </div>
          <div className="review-summary-actions">
            <a href={contact.phoneHref} className="btn btn-red big"><Phone size={20} /> Call {contact.phoneDisplay}</a>
            <a href={contact.emailHref} className="btn btn-outline big"><Mail size={20} /> Email Brodley Locksmiths</a>
          </div>
        </section>

        <div className="blog-grid">
          {caseStudies.map((study) => (
            <article className="blog-card" key={study.title}>
              <h2>{study.title}</h2>
              <div className="check-list">
                <div><CheckCircle2 size={20} /><strong>Challenge:</strong> {study.challenge}</div>
                <div><CheckCircle2 size={20} /><strong>Approach:</strong> {study.approach}</div>
                <div><CheckCircle2 size={20} /><strong>Outcome:</strong> {study.outcome}</div>
              </div>
              <div className="service-list-links">
                {study.links.map((link) => <Link key={link.href} href={link.href}>{link.label}<ArrowRight size={16} /></Link>)}
              </div>
            </article>
          ))}
        </div>

        <section className="section-inset">
          <SectionHeader eyebrow="Why This Matters" title="Choosing the right locksmith can save time, stress and unnecessary replacement work.">
            A good locksmith does more than swap parts. Brodley Locksmiths checks the issue, explains the options and helps customers choose a sensible repair, replacement or security upgrade based on the property and the problem.
          </SectionHeader>
          <div className="trust-grid review-service-points">
            {['Repair where practical', 'Upgrade where security needs improving', 'Explain options before work begins', 'Support landlords, flats, homes and businesses', 'Help with urgent access problems', 'Get Secure with clear local advice'].map((item) => <div key={item}><BadgeCheck size={20} /> {item}</div>)}
          </div>
        </section>
      </PageShell>
      <ContactCTA />
    </>
  );
}
