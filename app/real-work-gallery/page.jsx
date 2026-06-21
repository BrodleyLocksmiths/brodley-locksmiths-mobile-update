import JsonLd from '@/components/JsonLd';
import { ContactCTA, PageShell, SectionHeader } from '@/components/Shared';
import { FullRealWorkGallery } from '@/components/RealWork';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Real Locksmith Work Gallery Tendring | Brodley Locksmiths',
  description: 'Genuine Brodley Locksmiths photographs showing lock changes, uPVC door repairs, gate security, key safes, cylinder upgrades and commercial door lock work across Tendring.',
  path: '/real-work-gallery',
  keywords: 'locksmith work photos Tendring, uPVC door repair photos Clacton, gate lock fitting Tendring, key safe fitting Essex, lock upgrade gallery'
});

export default function RealWorkGalleryPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Real Work Gallery', path: '/real-work-gallery' }])]} />
      <PageShell
        eyebrow="Real Work Gallery"
        title="Genuine locksmith work, photographed on the job."
        intro="A growing selection of real lock, door, gate and access work from Brodley Locksmiths. Photos are lightly prepared for the website and any sensitive key, key-safe or customer details are protected before they are used publicly."
      >
        <section className="real-work-gallery-intro">
          <SectionHeader eyebrow="Get Secure" title="Real work is stronger proof than stock photography.">
            These images show the kind of practical work Brodley Locksmiths carries out: lock changes, uPVC door work, cylinder upgrades, gate security, key safes, internal-door locks and commercial access repairs. Exact materials and recommendations always depend on the property and the condition of the door or gate.
          </SectionHeader>
        </section>
        <FullRealWorkGallery />
      </PageShell>
      <ContactCTA />
    </>
  );
}
