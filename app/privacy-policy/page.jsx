import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { PageShell } from '@/components/Shared';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';
import { contact } from '@/lib/siteData';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How Brodley Locksmiths uses and protects personal information submitted through this website.',
  path: '/privacy-policy'
});

const sections = [
  {
    title: 'Who we are',
    body: <>Brodley Locksmiths is the business responsible for this website and for responding to enquiries sent through it. For privacy questions, contact <a href={contact.emailHref}>{contact.email}</a> or call <a href={contact.phoneHref}>{contact.phoneDisplay}</a>.</>
  },
  {
    title: 'Information we may collect',
    body: <>When you request a quote, contact us, or choose to send a Get Secure Property Check, we may collect your name, phone number, email address, town or area, property type, service needs, preferred contact method, optional photographs, and the details you choose to include about your lock, door, access or security issue.</>
  },
  {
    title: 'Why we use it',
    body: <>We use this information to respond to your enquiry, provide locksmith advice, arrange or quote for work where requested, keep a record of the discussion, and protect the website against misuse. We do not sell your personal information.</>
  },
  {
    title: 'How long we keep it',
    body: <>We keep enquiry information only for as long as reasonably needed to respond, provide any requested service, keep business records, resolve queries or meet legal and accounting obligations. The exact period can vary according to the enquiry and whether work is carried out.</>
  },
  {
    title: 'Who we share it with',
    body: <>We do not share enquiry details for other companies’ marketing. We may use carefully chosen service providers that help us run the website or send enquiry emails, but only where they need the information to provide that service. We may also disclose information where required by law or to protect people, property or our legal rights.</>
  },
  {
    title: 'Your choices and rights',
    body: <>You can ask us about the information we hold about you, request correction of inaccurate information, or ask us to delete information where there is no good reason for us to keep it. Contact us using the details above and we will respond as soon as reasonably possible.</>
  },
  {
    title: 'Keeping information secure',
    body: <>We take reasonable steps to protect enquiry information. Please avoid sending highly sensitive personal information through a general website form unless it is necessary for the enquiry.</>
  },
  {
    title: 'Changes to this notice',
    body: <>We may update this policy when the website or the way we handle enquiries changes. The latest version will always be available on this page.</>
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }])]} />
      <PageShell eyebrow="Your Privacy" title="Privacy Policy" intro="How Brodley Locksmiths handles information you choose to send through this website.">
        <div className="policy-wrap">
          <p className="policy-date">Last updated: 20 June 2026</p>
          <p>This notice is written in plain English. It explains what happens when you contact Brodley Locksmiths through the website, request a quote or send a Get Secure Property Check.</p>
          {sections.map((section) => <section key={section.title} className="policy-section"><h2>{section.title}</h2><p>{section.body}</p></section>)}
          <div className="related-box"><h2>Related information</h2><p>Read the <Link href="/cookie-policy">Cookie Policy</Link> to understand the limited browser storage used by the website.</p></div>
        </div>
      </PageShell>
    </>
  );
}
