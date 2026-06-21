import JsonLd from '@/components/JsonLd';
import { AreasPreview, BlogPreview, ContactCTA, FaqSection, GateSecurityFeature, Hero, LocalSeoSection, ReviewsSection, ProofHubSection, SectionHeader, ServicesGrid, TrustSection } from '@/components/Shared';
import { coreFaqs } from '@/lib/siteData';
import { faqSchema, localBusinessSchema, pageMetadata, websiteSchema } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Locksmith Tendring | Lock Changes, Door Repairs & Security Surveys',
  description: 'Brodley Locksmiths provides lock installations, lock upgrades, lock changes, uPVC door repairs and security surveys across Tendring, Clacton, Frinton, Walton, Harwich, Dovercourt, Manningtree and Brightlingsea.',
  path: '/',
  keywords: 'locksmith Tendring, lock changes Tendring, uPVC door repairs Tendring, locksmith Clacton, security surveys Essex'
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), websiteSchema(), faqSchema(coreFaqs)]} />
      <Hero />
      <section className="section deep">
        <div className="container">
          <SectionHeader eyebrow="Core Services" title="The locksmith help most Tendring customers need.">
            Start with the service that best matches the problem. For urgent access or a door that will not lock, call Brodley Locksmiths directly. For planned work, request a quote or use the Get Secure Property Check.
          </SectionHeader>
          <ServicesGrid slugs={['lock-changes', 'lock-upgrades', 'upvc-door-repairs-tendring', 'multipoint-lock-repairs', 'security-surveys', 'key-safes']} />
          <div className="center homepage-services-link"><a className="btn btn-outline big" href="/services">View all locksmith services</a></div>
          <GateSecurityFeature />
        </div>
      </section>
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
