import JsonLd from '@/components/JsonLd';
import { FaqSection, PageShell } from '@/components/Shared';
import { coreFaqs } from '@/lib/siteData';
import { breadcrumbSchema, faqSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Locksmith FAQs Tendring | Locks, Door Repairs & Security Surveys',
  description: 'Frequently asked questions about lock changes, lock upgrades, uPVC door repairs, lock installations and security surveys across Tendring.',
  path: '/faqs',
  keywords: 'locksmith FAQs Tendring, lock change questions, uPVC door repair questions, security survey questions'
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(coreFaqs), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'FAQs', path: '/faqs' }])]} />
      <PageShell eyebrow="FAQs" title="Locksmith questions answered." intro="Helpful answers for customers across Tendring before calling or emailing Brodley Locksmiths.">
        <FaqSection faqs={coreFaqs} />
      </PageShell>
    </>
  );
}
