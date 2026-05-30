import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { PageShell } from '@/components/Shared';
import { locations, townPages } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Locksmith Areas Covered in Tendring | Brodley Locksmiths',
  description: 'Brodley Locksmiths covers Clacton-on-Sea, Frinton, Walton, Harwich, Dovercourt, Manningtree, Brightlingsea and Tendring villages for lock changes, upgrades, installations, door repairs and security surveys.',
  path: '/areas',
  keywords: 'locksmith Tendring areas, locksmith Clacton, locksmith Harwich, locksmith Frinton, locksmith Walton'
});

export default function AreasPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas' }])]} />
      <PageShell eyebrow="Areas Covered" title="Locksmith services across Tendring towns and villages." intro="Find locksmith, lock change, uPVC door repair and property security services across Tendring, including coastal towns, villages, landlords, holiday lets and local businesses.">
        <div className="area-cards">
          {townPages.map((town) => (
            <Link key={town.slug} href={`/areas/${town.slug}`} className="area-card">
              <MapPin size={32} />
              <h2>{town.town}</h2>
              <p>{town.text}</p>
              <span className="text-link">View area page <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
        <div className="location-cloud">{locations.map((place) => <span key={place}>{place}</span>)}</div>
      </PageShell>
    </>
  );
}
