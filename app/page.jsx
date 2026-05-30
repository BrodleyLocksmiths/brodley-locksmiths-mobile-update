import JsonLd from '@/components/JsonLd';
import { AreasPreview, BlogPreview, ContactCTA, FaqSection, Hero, LocalSeoSection, ReviewsSection, SectionHeader, ServicesGrid, TrustSection } from '@/components/Shared';
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
          <SectionHeader eyebrow="Core Services" title="Locksmith services built around security, reliability and tidy workmanship.">
            Whether you need a lock changed, a door repaired, a key safe fitted or a full security review, Brodley Locksmiths provides practical advice, professional workmanship and a security-first approach across Tendring.
          </SectionHeader>
          <ServicesGrid />
        </div>
      </section>
      <LocalSeoSection />
      <TrustSection />
      <ReviewsSection />
      <BlogPreview />
      <AreasPreview />
      <FaqSection faqs={coreFaqs} />
      <ContactCTA />
    </>
  );
}
