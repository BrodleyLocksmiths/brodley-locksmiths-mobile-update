import Link from 'next/link';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { contact } from '@/lib/siteData';

export const metadata = { title: 'Page not found | Brodley Locksmiths', robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="section deep not-found-page">
      <div className="container narrow center">
        <ShieldCheck size={48} className="not-found-icon" />
        <p className="eyebrow gold">Brodley Locksmiths</p>
        <h1>That page has moved or is no longer available.</h1>
        <p>Use the links below to find locksmith help, request a quote or try the Get Secure Property Check. For an urgent lockout, lock-in or door that will not lock, call directly.</p>
        <div className="button-row center">
          <Link href="/services" className="btn btn-outline big">View services <ArrowRight size={20} /></Link>
          <Link href="/get-secure-check" className="btn btn-ghost big">Get Secure Check <ArrowRight size={20} /></Link>
          <a href={contact.phoneHref} className="btn btn-red big"><Phone size={20} /> Call {contact.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
