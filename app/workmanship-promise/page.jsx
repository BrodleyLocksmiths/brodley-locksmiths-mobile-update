import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, PageShell, SectionHeader } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';
import { CheckCircle2, Phone, Mail, ShieldCheck } from 'lucide-react';

export const metadata = pageMetadata({
  title: 'Workmanship Promise | Brodley Locksmiths Tendring',
  description: 'The Brodley Locksmiths workmanship promise: clear advice, tidy work, practical security recommendations and reliable locksmith support across Tendring.',
  path: '/workmanship-promise',
  keywords: 'trusted locksmith Tendring, Brodley Locksmiths promise, locksmith workmanship Clacton, reliable locksmith Essex'
});

const promises = [
  ['Clear advice first', 'You get a straightforward explanation of the problem and the sensible options before work is carried out.'],
  ['Repair where practical', 'If a repair or adjustment is the right answer, Brodley Locksmiths will not push unnecessary replacement work.'],
  ['Security-first recommendations', 'When an upgrade is worthwhile, the reason will be explained in plain English so you can choose confidently.'],
  ['Tidy, respectful work', 'Homes, rental properties, guest accommodation and business premises are treated with care.'],
  ['Door operation checked properly', 'For door and lock faults, the alignment, handle, cylinder and mechanism are considered together where relevant.'],
  ['Local service across Tendring', 'Support is focused around Clacton, Frinton, Walton, Harwich, Dovercourt, Manningtree, Brightlingsea and surrounding villages.']
];

export default function WorkmanshipPromisePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Workmanship Promise', path: '/workmanship-promise' }])]} />
      <PageShell eyebrow="Workmanship Promise" title="Clear advice, tidy work and practical security." intro="Brodley Locksmiths is built around trust: explain the issue, recommend sensible options and complete the work with care.">
        <section className="review-summary-panel">
          <div>
            <p className="eyebrow red">Get Secure</p>
            <h2>A locksmith service customers can feel comfortable calling.</h2>
            <p>Whether it is a lock change after lost keys, a stiff uPVC door, a key safe, a snapped key or a full security survey, the aim is to leave the property safer, easier to use and properly explained.</p>
          </div>
          <div className="review-summary-actions">
            <a href={contact.phoneHref} className="btn btn-red big"><Phone size={20} /> Call {contact.phoneDisplay}</a>
            <a href={contact.emailHref} className="btn btn-outline big"><Mail size={20} /> Email Brodley Locksmiths</a>
          </div>
        </section>

        <div className="blog-grid">
          {promises.map(([title, text]) => (
            <article className="blog-card" key={title}>
              <div className="icon-box"><ShieldCheck size={24} /></div>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <section className="section-inset">
          <SectionHeader eyebrow="Why It Matters" title="Good locksmith work should solve the cause, not just the symptom.">
            A stiff handle, jammed mechanism or snapped key often points to a wider issue. Checking the door properly can reduce repeat problems and help avoid future lockouts or lock-ins.
          </SectionHeader>
          <div className="trust-grid review-service-points">
            {['Helpful communication', 'Careful fault checking', 'Practical repair advice', 'Security upgrades where useful', 'Respectful work at the property', 'Customer-focused recommendations'].map((item) => <div key={item}><CheckCircle2 size={20} /> {item}</div>)}
          </div>
        </section>
      </PageShell>
      <ContactCTA />
    </>
  );
}
