import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { ContactCTA, PageShell, ReviewCards, SectionHeader } from '@/components/Shared';
import { contact } from '@/lib/siteData';
import { breadcrumbSchema, localBusinessSchema, pageMetadata } from '@/lib/schema';
import { Star, MessageSquare, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const metadata = pageMetadata({
  title: 'Leave a Review | Brodley Locksmiths',
  description: 'Leave a review for Brodley Locksmiths after lock changes, door repairs, key safes, broken key help or security work across Tendring.',
  path: '/leave-a-review',
  keywords: 'leave a review Brodley Locksmiths, locksmith review Tendring, review locksmith Clacton'
});

export default function LeaveAReviewPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Leave a Review', path: '/leave-a-review' }])]} />
      <PageShell eyebrow="Leave a Review" title="Had work completed by Brodley Locksmiths?" intro="A short review helps local customers choose a locksmith with confidence and helps Brodley Locksmiths continue growing across Tendring.">
        <section className="review-summary-panel">
          <div>
            <p className="eyebrow red">Thank You</p>
            <h2>Your feedback really helps.</h2>
            <p>If Brodley Locksmiths helped with a lock change, stiff door, snapped key, key safe, window lock, patio door lock or security check, a genuine review can help the next customer make a confident decision.</p>
          </div>
          <div className="review-summary-actions">
            <a href={contact.emailHref} className="btn btn-red big"><Mail size={20} /> Send Review Text</a>
            <a href={contact.phoneHref} className="btn btn-outline big"><Phone size={20} /> Call {contact.phoneDisplay}</a>
          </div>
        </section>

        <div className="blog-grid">
          {[
            ['Mention the job', 'For example: lock change, key safe fitting, uPVC door repair, broken key extraction or patio door lock repair.'],
            ['Mention the area if comfortable', 'A town or village such as Clacton, Frinton, Walton, Harwich, Dovercourt, Brightlingsea or Manningtree helps local customers relate to the review.'],
            ['Keep it genuine', 'A simple honest sentence about communication, speed, price, workmanship or trust is more useful than a long review.']
          ].map(([title, text]) => <article className="blog-card" key={title}><div className="icon-box"><MessageSquare size={24} /></div><h2>{title}</h2><p>{text}</p></article>)}
        </div>

        <section className="section-inset">
          <SectionHeader eyebrow="Review Prompt" title="A simple review could say:">
            Brodley Locksmiths helped with my lock / door / key safe. Ron was helpful, tidy and explained the work clearly. I would recommend Brodley Locksmiths.
          </SectionHeader>
          <div className="trust-grid review-service-points">
            {['Prompt service', 'Helpful advice', 'Tidy workmanship', 'Good communication', 'Fair price', 'Would recommend'].map((item) => <div key={item}><Star size={20} /> {item}</div>)}
          </div>
        </section>

        <section className="section-inset">
          <SectionHeader eyebrow="Recent Feedback" title="What customers have already said.">
            Genuine 5-star feedback helps show the type of service new customers can expect.
          </SectionHeader>
          <ReviewCards limit={3} />
        </section>
      </PageShell>
      <ContactCTA />
    </>
  );
}
