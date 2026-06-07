import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, PageShell, SectionHeader } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, faqSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';
import { ArrowRight, BadgeCheck, FileSearch, Phone, Mail, ShieldCheck } from 'lucide-react';

export const metadata = pageMetadata({
  title: 'Example Security Survey Report Tendring | Brodley Locksmiths',
  description: 'See an example Brodley Locksmiths security survey report for homes, landlords, holiday lets and businesses across Tendring. Doors, locks, windows, key safes and access points reviewed.',
  path: '/example-security-survey-report',
  keywords: 'security survey report Tendring, home security check Clacton, landlord security survey Essex, locksmith security survey Tendring'
});

const faqs = [
  { q: 'What is a Brodley Locksmiths security survey?', a: 'A practical review of doors, locks, cylinders, windows, garages, outbuildings, key safes and access points, with clear recommendations for improving security.' },
  { q: 'Is a security survey useful for landlords and holiday lets?', a: 'Yes. It can help identify weak points around guest access, tenant changes, key control, key safes and vulnerable doors or windows.' },
  { q: 'Will I be pressured into unnecessary work?', a: 'No. The aim is to give clear priorities so you can decide what needs attention first and what can wait.' }
];

const reportSections = [
  {
    title: '1. Front and rear door security',
    priority: 'High priority',
    text: 'Check cylinder quality, handle condition, multipoint locking operation, door alignment and whether the door locks smoothly without force. A door that is hard to lift, draggy or stiff can put strain on the mechanism.'
  },
  {
    title: '2. Cylinder and anti-snap risk',
    priority: 'High priority',
    text: 'Review whether the property would benefit from stronger cylinders or anti-snap lock upgrades, especially on accessible uPVC and composite doors.'
  },
  {
    title: '3. Window locks and accessible openings',
    priority: 'Medium priority',
    text: 'Check ground-floor windows, rear windows, side access points and any windows that are reachable from flat roofs, bins, low walls or garden structures.'
  },
  {
    title: '4. Key control and key safes',
    priority: 'Medium priority',
    text: 'Consider who currently has keys, whether locks should be changed after moving home or tenant changeover, and whether a properly fitted key safe would support family, carers, guests or trusted trades.'
  },
  {
    title: '5. Garages, sheds, gates and outbuildings',
    priority: 'Practical improvement',
    text: 'Review locks on outbuildings, garages, gates and side access, especially where tools, bikes, stock or valuable equipment are stored.'
  },
  {
    title: '6. Landlord, holiday let or business access',
    priority: 'Property-specific',
    text: 'For rentals, guest houses, holiday lets and small businesses, review keyholder changes, access routines, staff or guest turnover and whether locks or key safes need upgrading.'
  }
];

export default function ExampleSecuritySurveyReportPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Example Security Survey Report', path: '/example-security-survey-report' }])]} />
      <PageShell
        eyebrow="Example Security Survey"
        title="Example security survey report for a Tendring property."
        intro="A practical example of how Brodley Locksmiths can review locks, doors, windows, key control, outbuildings and access points for homes, landlords, holiday lets and businesses."
      >
        <section className="review-summary-panel">
          <div>
            <p className="eyebrow red">Get Secure</p>
            <h2>Clear priorities instead of guesswork.</h2>
            <p>A security survey helps you understand what matters most: the locks and doors people use every day, the weak points around the property, and the improvements that give the best practical security benefit.</p>
          </div>
          <div className="review-summary-actions">
            <a href={contact.phoneHref} className="btn btn-red big"><Phone size={20} /> Call {contact.phoneDisplay}</a>
            <a href={contact.emailHref} className="btn btn-outline big"><Mail size={20} /> Request Advice</a>
          </div>
        </section>

        <div className="blog-grid">
          {reportSections.map((section) => (
            <article className="blog-card" key={section.title}>
              <div className="icon-box"><FileSearch size={26} /></div>
              <div className="blog-meta">{section.priority}</div>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>

        <section className="section-inset">
          <SectionHeader eyebrow="Who It Helps" title="Useful for homes, landlords, holiday lets, guest houses and businesses.">
            A Brodley Locksmiths security survey can be especially useful after moving home, taking on a rental, preparing a holiday let, reviewing access for carers, securing a block of flats or improving security around a small business.
          </SectionHeader>
          <div className="trust-grid review-service-points">
            {['Home security checks', 'Landlord security reviews', 'Holiday let and guest house access', 'Key safe recommendations', 'Garage, shed and gate security', 'uPVC and composite door checks'].map((item) => <div key={item}><BadgeCheck size={20} /> {item}</div>)}
          </div>
        </section>

        <section className="section-inset">
          <div className="related-box">
            <h2>Related security services</h2>
            <p>Use these pages if you already know the area you want to improve.</p>
            <div>
              <Link href="/services/security-surveys">Security Surveys</Link>
              <Link href="/services/anti-snap-lock-upgrades">Anti-Snap Lock Upgrades</Link>
              <Link href="/services/key-safes">Key Safes</Link>
              <Link href="/services/garage-shed-gate-locks">Garage, Shed & Gate Locks</Link>
              <Link href="/services/window-lock-repairs">Window Lock Repairs</Link>
              <Link href="/quote">Request a Quote</Link>
            </div>
          </div>
        </section>

        <section className="section-inset">
          <SectionHeader eyebrow="Simple Next Step" title="Get Secure with a clear security review.">
            If you are not sure whether you need lock changes, lock upgrades, key safes, door repairs or a wider security survey, contact Brodley Locksmiths and explain the property, location and concern.
          </SectionHeader>
          <div className="center"><Link href="/services/security-surveys" className="btn btn-red big"><ShieldCheck size={20} /> View Security Surveys <ArrowRight size={20} /></Link></div>
        </section>
      </PageShell>
      <ContactCTA />
    </>
  );
}
