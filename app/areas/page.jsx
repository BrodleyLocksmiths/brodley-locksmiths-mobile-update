import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { IndexingBoostLinks, PageShell, PlannedWorkHub } from '@/components/Shared';
import { locations, townPages } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Locksmith Areas Covered in Tendring | Clacton, Frinton, Harwich & More',
  description: 'Brodley Locksmiths covers Clacton-on-Sea, Frinton, Harwich, Dovercourt, Walton, Brightlingsea and Tendring villages for planned lock changes, uPVC door repairs, key safes and security upgrades.',
  path: '/areas',
  keywords: 'locksmith Clacton, locksmith Frinton, locksmith Harwich, locksmith Walton, locksmith Tendring areas'
});

const priorityTownNames = [
  'Clacton-on-Sea',
  'Frinton-on-Sea',
  'Harwich',
  'Dovercourt',
  'Walton-on-the-Naze',
  'Brightlingsea',
  'Manningtree'
];

export default function AreasPage() {
  const priorityTowns = priorityTownNames.map((name) => townPages.find((town) => town.town === name)).filter(Boolean);
  const supportingTowns = townPages.filter((town) => !priorityTownNames.includes(town.town));

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas' }])]} />
      <PageShell eyebrow="Areas Covered" title="Planned locksmith services across Tendring towns and villages." intro="Find lock changes, uPVC door repairs, key safes, high-security cylinder upgrades, gate security and property-security services across the main Tendring towns and surrounding villages.">
        <PlannedWorkHub />
        <IndexingBoostLinks variant="compact" />

        <section className="priority-area-section" aria-label="Priority Tendring locksmith areas">
          <div className="section-header left-align">
            <p className="eyebrow red">Priority local pages</p>
            <h2>Strongest local locksmith areas.</h2>
            <p>These pages are given extra detail because they are the main local search opportunities for planned lock, door and security work.</p>
          </div>
          <div className="area-cards priority-area-cards">
            {priorityTowns.map((town) => (
              <Link key={town.slug} href={`/areas/${town.slug}`} className="area-card priority-area-card">
                <MapPin size={32} />
                <h2>{town.town}</h2>
                <p>{town.text}</p>
                <div className="mini-checks">
                  {town.commonIssues.slice(0, 3).map((issue) => <span key={issue}><CheckCircle2 size={16} /> {issue}</span>)}
                </div>
                <span className="text-link">View {town.town} locksmith page <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="supporting-area-section" aria-label="Supporting Tendring locksmith areas">
          <div className="section-header left-align">
            <p className="eyebrow red">Supporting towns and villages</p>
            <h2>Also covering nearby Tendring locations.</h2>
            <p>Smaller village pages remain available for customers and Google, but the main towns above now act as stronger local hubs.</p>
          </div>
          <div className="supporting-area-grid">
            {supportingTowns.map((town) => (
              <Link key={town.slug} href={`/areas/${town.slug}`}>
                <span>{town.town}</span>
                <small>{town.commonIssues[0]}</small>
              </Link>
            ))}
          </div>
        </section>

        <div className="location-cloud">{locations.map((place) => <span key={place}>{place}</span>)}</div>
      </PageShell>
    </>
  );
}
