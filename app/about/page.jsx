import { Hammer, HousePlus, ShieldCheck } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { PageShell } from '@/components/Shared';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'About Brodley Locksmiths | Tendring Locksmith & Security Specialist',
  description: 'Learn about Brodley Locksmiths, providing premium locksmith, door repair and security survey services across Tendring, Essex.',
  path: '/about',
  keywords: 'about Brodley Locksmiths, Tendring locksmith, security specialist Essex'
});

export default function AboutPage() {
  const cards = [
    [ShieldCheck, 'Security-led', 'Recommendations are based on improving the property, not simply replacing parts.'],
    [Hammer, 'Practical workmanship', 'Door issues, lock failures and alignment problems are approached with a property maintenance mindset.'],
    [HousePlus, 'Homes, landlords & businesses', 'Support for households, rental properties, holiday lets, guest houses and small commercial premises.']
  ];
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]} />
      <PageShell eyebrow="About" title="Brodley Locksmiths — premium local security support." intro="A more professional, security-led locksmith service for customers who want clear advice, reliable workmanship and a tidy finish.">
        <div className="trust-cards">
          {cards.map(([Icon, title, text]) => <div key={title} className="trust-card"><Icon size={38} /><h2>{title}</h2><p>{text}</p></div>)}
        </div>
      </PageShell>
    </>
  );
}
