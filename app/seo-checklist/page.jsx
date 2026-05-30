import JsonLd from '@/components/JsonLd';
import { PageShell } from '@/components/Shared';
import { localBusinessSchema, pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Home Security Checklist Tendring | Brodley Locksmiths',
  description: 'A practical home security checklist for Tendring properties covering locks, doors, windows, key safes, landlords and rental properties.',
  path: '/seo-checklist'
});

export default function SeoChecklistPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema()]} />
      <PageShell eyebrow="Security Checklist" title="Practical home security checklist for Tendring properties." intro="A simple guide to the locks, doors and access points worth checking if you want to improve security at a home, rental property, holiday let or small business.">
        <div className="seo-check-grid">
          <div className="seo-box">
            <h2>Locks and doors to check</h2>
            <ul>
              <li>Front door and rear door locks</li>
              <li>uPVC and composite door mechanisms</li>
              <li>Euro cylinders and anti-snap lock protection</li>
              <li>Handles, hinges, keeps and door alignment</li>
              <li>Window locks on accessible windows</li>
              <li>Side gates, garages, sheds and outbuildings</li>
              <li>Key safes used by carers, cleaners or trusted trades</li>
              <li>Spare keys, previous tenants and unknown keyholders</li>
              <li>Holiday let and guest house access arrangements</li>
            </ul>
          </div>
          <div className="seo-box">
            <h2>When to call a locksmith</h2>
            <ul>
              <li>You have moved home and do not know who still has keys</li>
              <li>The door handle is stiff or needs lifting to lock</li>
              <li>A uPVC door mechanism is grinding, jamming or failing</li>
              <li>Keys have been lost, stolen or not returned</li>
              <li>A tenant, guest or staff member has moved on</li>
              <li>You want anti-snap lock upgrades for better protection</li>
              <li>A key safe is needed for carers, family or guest access</li>
              <li>A landlord, holiday let or business needs a security review</li>
            </ul>
          </div>
        </div>
      </PageShell>
    </>
  );
}
