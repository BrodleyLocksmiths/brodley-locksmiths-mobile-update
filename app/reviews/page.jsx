import JsonLd from '@/components/JsonLd';
import { ContactCTA, PageShell, ReviewCards, SectionHeader } from '@/components/Shared';
import { contact, customerReviews } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';
import { Phone, Mail, BadgeCheck } from 'lucide-react';

export const metadata = pageMetadata({
  title: 'Brodley Locksmiths Reviews | 5-Star Locksmith Tendring',
  description: 'Read genuine 5-star customer reviews for Brodley Locksmiths. Trusted lock changes, uPVC door repairs, key safe fitting and locksmith services across Tendring.',
  path: '/reviews',
  keywords: 'Brodley Locksmiths reviews, locksmith reviews Tendring, 5 star locksmith Clacton, trusted locksmith Tendring'
});

export default function ReviewsPage() {
  const average = customerReviews.reduce((total, review) => total + review.rating, 0) / customerReviews.length;
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Reviews', path: '/reviews' }])]} />
      <PageShell
        eyebrow="Customer Reviews"
        title="5-star locksmith reviews for Brodley Locksmiths."
        intro="Real customer feedback from locksmith work across Tendring, including lock changes, lock repairs, snapped keys, higher-security locks and key safe fitting."
      >
        <section className="review-summary-panel">
          <div>
            <p className="eyebrow red">Trusted Local Locksmith</p>
            <h2>{average.toFixed(1)} out of 5 from customer feedback</h2>
            <p>Every review currently shown is a 5-star review provided by genuine Brodley Locksmiths customers. If you need a locksmith in Clacton, Harwich, Frinton, Walton, Brightlingsea, Manningtree or the wider Tendring area, these reviews show the kind of service you can expect: prompt, helpful, tidy and honest.</p>
          </div>
          <div className="review-summary-actions">
            <a href={contact.phoneHref} className="btn btn-red big"><Phone size={20} /> Call {contact.phoneDisplay}</a>
            <a href={contact.emailHref} className="btn btn-outline big"><Mail size={20} /> Email Brodley Locksmiths</a>
          </div>
        </section>

        <ReviewCards />

        <section className="section-inset">
          <SectionHeader eyebrow="Get Secure" title="Need the same reliable locksmith help?">
            Whether you have lost your keys, snapped a key in the lock, need a lock changed after moving home, or want stronger security for a block of flats, rental property, business or family home, Brodley Locksmiths can help.
          </SectionHeader>
          <div className="trust-grid review-service-points">
            {[
              'Lock changes after lost keys or moving home',
              'uPVC, composite and older lock repairs',
              'Higher-security locks and anti-snap upgrades',
              'Key safe fitting for flats, care access and managed properties',
              'Prompt help across Tendring towns and villages',
              'Clear communication and courteous workmanship'
            ].map((item) => <div key={item}><BadgeCheck size={20} /> {item}</div>)}
          </div>
        </section>
      </PageShell>
      <ContactCTA />
    </>
  );
}
