import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, PageShell, SectionHeader } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';
import { CheckCircle2, Phone, Mail, ArrowRight, BadgeCheck } from 'lucide-react';

export const metadata = pageMetadata({
  title: 'Locksmith Pricing Guide Tendring | What Affects Cost',
  description: 'A practical guide to what affects locksmith costs in Tendring, including lock changes, uPVC door repairs, broken keys, key safes, door alignment and security upgrades.',
  path: '/pricing-guide',
  keywords: 'locksmith prices Tendring, locksmith cost Clacton, lock change cost Essex, uPVC door repair price Tendring, key safe fitting cost'
});

const costFactors = [
  ['Type of job', 'A simple cylinder change is usually different from a jammed multipoint mechanism, broken key extraction or full door alignment issue.'],
  ['Door and lock condition', 'Stiff doors, dropped hinges, worn mechanisms and seized parts can take longer because the cause needs checking properly.'],
  ['Parts required', 'Costs vary depending on whether the job needs a cylinder, handle set, gearbox, full multipoint mechanism, key safe or security upgrade.'],
  ['Security level', 'A like-for-like replacement may cost less than upgrading to stronger cylinders or improved hardware, but upgrades can be worthwhile for long-term security.'],
  ['Access and urgency', 'Locked-out situations, jammed doors and out-of-hours access problems can affect the work needed and the time involved.'],
  ['Property type', 'Homes, flats, rentals, holiday lets, guest houses, caravans and businesses can all have different access and key-control needs.']
];

const serviceLinks = [
  { label: 'Lock Changes', href: '/services/lock-changes' },
  { label: 'uPVC Door Repairs', href: '/services/upvc-door-repairs-tendring' },
  { label: 'Multipoint Lock Repairs', href: '/services/multipoint-lock-repairs' },
  { label: 'Broken Key Extraction', href: '/services/broken-key-extraction' },
  { label: 'Key Safes', href: '/services/key-safes' },
  { label: 'Security Surveys', href: '/services/security-surveys' }
];

export default function PricingGuidePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Pricing Guide', path: '/pricing-guide' }])]} />
      <PageShell eyebrow="Pricing Guide" title="What affects locksmith costs?" intro="Every property and lock problem is slightly different. This guide helps customers understand why the price can vary and what Brodley Locksmiths checks before recommending work.">
        <section className="review-summary-panel">
          <div>
            <p className="eyebrow red">Clear Advice</p>
            <h2>Practical pricing starts with understanding the problem.</h2>
            <p>A stiff uPVC door, broken key, failed mechanism or lock change may look simple at first, but the safest fix depends on the condition of the door, lock, cylinder and surrounding hardware.</p>
          </div>
          <div className="review-summary-actions">
            <a href={contact.phoneHref} className="btn btn-red big"><Phone size={20} /> Call {contact.phoneDisplay}</a>
            <Link href="/quote" className="btn btn-outline big">Request a Quote</Link>
          </div>
        </section>

        <div className="blog-grid">
          {costFactors.map(([title, text]) => (
            <article className="blog-card" key={title}>
              <div className="icon-box"><BadgeCheck size={24} /></div>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <section className="section-inset">
          <SectionHeader eyebrow="Get Secure" title="A cheaper quick fix is not always the best value.">
            If a door is out of alignment, simply replacing a lock may not solve the cause. Brodley Locksmiths looks for the reason behind the fault so customers can make a sensible decision.
          </SectionHeader>
          <div className="trust-grid review-service-points">
            {['Explain the likely options before work begins', 'Check for door alignment and mechanism strain', 'Recommend repair where practical', 'Upgrade locks where better security is worthwhile', 'Keep advice clear and customer-focused', 'Support homes, landlords, businesses, holiday lets and caravans'].map((item) => <div key={item}><CheckCircle2 size={20} /> {item}</div>)}
          </div>
        </section>

        <section className="section-inset">
          <SectionHeader eyebrow="Useful Service Pages" title="Find the service that fits your issue.">
            These pages explain common locksmith work in more detail.
          </SectionHeader>
          <div className="service-list-links wide-links">
            {serviceLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}<ArrowRight size={16} /></Link>)}
          </div>
        </section>
      </PageShell>
      <ContactCTA />
    </>
  );
}
