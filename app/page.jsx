import JsonLd from '@/components/JsonLd';
import { AreasPreview, BlogPreview, ContactCTA, FaqSection, GateSecurityFeature, Hero, IndexingBoostLinks, LocalSeoSection, PlannedWorkHub, ReviewsSection, ProofHubSection, SectionHeader, ServicesGrid, TrustSection } from '@/components/Shared';
import { RealWorkPreview } from '@/components/RealWork';
import { coreFaqs } from '@/lib/siteData';
import { faqSchema, localBusinessSchema, pageMetadata, websiteSchema } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Locksmith Tendring | Lock Changes, uPVC Door Repairs & Security Upgrades',
  description: 'Brodley Locksmiths helps with lock changes, uPVC door repairs, high-security cylinder upgrades, key safes, gate security and security surveys across Tendring and Clacton-on-Sea.',
  path: '/',
  keywords: 'locksmith Tendring, locksmith Clacton, lock changes Tendring, uPVC door repairs Clacton, anti snap lock upgrades, key safes Essex'
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), websiteSchema(), faqSchema(coreFaqs)]} />
      <Hero />
      <section className="section deep">
        <div className="container">
          <SectionHeader eyebrow="Core Locksmith Services" title="Lock changes, door repairs and security upgrades made simple.">
            Choose the help you need most: a lock changed, a stiff door repaired, a stronger cylinder fitted, a key safe installed, a gate secured or a practical security check.
          </SectionHeader>
          <ServicesGrid slugs={['lock-changes', 'lock-upgrades', 'anti-snap-lock-upgrades', 'upvc-door-repairs-tendring', 'door-alignment-adjustment', 'key-safes']} />
          <div className="center homepage-services-link"><a className="btn btn-outline big" href="/services">View all locksmith services</a></div>
          <GateSecurityFeature />
        </div>
      </section>
      <IndexingBoostLinks />
      <section className="section deep-soft"><div className="container"><PlannedWorkHub /></div></section>
      <RealWorkPreview />
      <LocalSeoSection />
      <TrustSection />
      <ReviewsSection />
      <ProofHubSection />
      <BlogPreview />
      <AreasPreview />
      <FaqSection faqs={coreFaqs} />
      <ContactCTA />
    </>
  );
}
