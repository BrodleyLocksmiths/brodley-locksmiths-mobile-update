import JsonLd from '@/components/JsonLd';
import GetSecureCheckTool from '@/components/GetSecureCheckTool';
import { ContactCTA, FaqSection, PageShell } from '@/components/Shared';
import { breadcrumbSchema, faqSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

const checkFaqs = [
  {
    q: 'What is the Get Secure Property Check?',
    a: 'The Get Secure Property Check is a simple online checklist from Brodley Locksmiths to help you spot common lock, door, window and access concerns before requesting advice or a security survey.'
  },
  {
    q: 'Can the online check replace a professional locksmith visit?',
    a: 'No. It is a helpful starting point, but it cannot inspect the condition of locks, uPVC mechanisms, cylinders, keeps, hinges or window locks in person. Brodley Locksmiths can carry out a practical security survey if you want a clearer assessment.'
  },
  {
    q: 'Which areas is the security check useful for?',
    a: 'It is useful for homes, landlords, holiday lets, guest houses, static caravans, flats and small businesses across Tendring, including Clacton-on-Sea, Frinton, Walton, Harwich, Dovercourt, Manningtree, Brightlingsea, St Osyth and surrounding villages.'
  },
  {
    q: 'What should I do if the check shows security or door reliability concerns?',
    a: 'If the check highlights security concerns or a higher risk of lock, door or mechanism failure, contact Brodley Locksmiths for advice. A lock change, anti-snap upgrade, uPVC door repair, key safe, garage lock or security survey may be recommended depending on the property.'
  }
];

export const metadata = pageMetadata({
  title: 'Free Home Security Check Tendring | Get Secure Property Check',
  description: 'Use the Brodley Locksmiths Get Secure Property Check to score property security, door reliability, key control, uPVC door issues, key safe access and window lock concerns across Tendring.',
  path: '/get-secure-check',
  keywords: 'home security check Tendring, property security check Clacton, lock security check Tendring, uPVC door security check, lockout risk check, door reliability check, Get Secure Brodley Locksmiths'
});

export default function GetSecureCheckPage() {
  return (
    <>
      <JsonLd data={[
        localBusinessSchema(),
        faqSchema(checkFaqs),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Get Secure Property Check', path: '/get-secure-check' }])
      ]} />
      <PageShell
        eyebrow="Get Secure Property Check"
        title="Check your property security and door reliability."
        intro="Use this simple multi-choice check to spot security risks, key-control issues, uPVC door problems, window concerns and the chance of being locked out or stuck with a failed mechanism. It also highlights what you are already doing well, so the advice stays fair, useful and easy to understand."
      >
        <GetSecureCheckTool />
      </PageShell>
      <FaqSection faqs={checkFaqs} title="Get Secure Property Check FAQs" intro="A quick guide to using the Brodley Locksmiths online security check and knowing when to request professional advice." />
      <ContactCTA />
    </>
  );
}
