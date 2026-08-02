import Link from 'next/link';
import { contact, servicePages, site, townPages } from '@/lib/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <img src={site.headerLogo} alt="Brodley Locksmiths logo" className="footer-logo" />
          <p>Planned locksmith, door repair and security survey services across Tendring, including Clacton-on-Sea, Frinton-on-Sea, Walton-on-the-Naze, Harwich, Dovercourt, Manningtree and Brightlingsea.</p>
          <p className="footer-contact"><a href={contact.phoneHref}>{contact.phoneDisplay}</a><br /><a href={contact.emailHref}>{contact.email}</a></p>
          <div className="footer-profile-links" aria-label="Brodley Locksmiths profile links">
            <a href={site.profiles[0]} target="_blank" rel="noreferrer">Facebook</a>
            <a href={site.profiles[1]} target="_blank" rel="noreferrer">Yell</a>
            <a href={site.profiles[2]} target="_blank" rel="noreferrer">Checkatrade</a>
            <a href={site.profiles[3]} target="_blank" rel="noreferrer">MyBuilder</a>
          </div>
        </div>
        <div>
          <h2>Priority Services</h2>
          {[
            'lock-changes',
            'lock-upgrades',
            'anti-snap-lock-upgrades',
            'euro-cylinder-replacement',
            'upvc-door-repairs-tendring',
            'door-alignment-adjustment',
            'key-safes',
            'security-surveys',
            'gatemate-gate-security',
            'locksmith-for-landlords'
          ].map((slug) => servicePages.find((s) => s.slug === slug)).filter(Boolean).map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.nav}</Link>)}
          <Link href="/services">View all services</Link>
        </div>
        <div>
          <h2>Key Areas</h2>
          {[
            'Clacton-on-Sea',
            'Frinton-on-Sea',
            'Walton-on-the-Naze',
            'Harwich',
            'Dovercourt',
            'Manningtree',
            'Brightlingsea',
            'Holland-on-Sea',
            'Jaywick',
            'St Osyth'
          ].map((name) => townPages.find((t) => t.town === name)).filter(Boolean).map((t) => <Link key={t.slug} href={`/areas/${t.slug}`}>{t.town}</Link>)}
          <Link href="/areas">View all areas</Link>
        </div>
        <div>
          <h2>Main Pages</h2>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/get-secure-check">Get Secure Property Check</Link>
          <Link href="/areas">Areas</Link>
          <Link href="/locksmith-services-and-areas">Services & Areas</Link>
          <Link href="/blog">Advice Blog</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/recent-work">Recent Work</Link>
          <Link href="/real-work-gallery">Real Work Gallery</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/why-choose-brodley-locksmiths">Why Choose Brodley Locksmiths</Link>
          <Link href="/example-security-survey-report">Example Security Survey</Link>
          <Link href="/pricing-guide">Pricing Guide</Link>
          <Link href="/workmanship-promise">Workmanship Promise</Link>
          <Link href="/leave-a-review">Leave a Review</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/quote">Request a Quote</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Brodley Locksmiths. Locksmith and security services across Tendring.</div>
      <div className="mobile-sticky-cta" aria-label="Quick contact options">
        <a href={contact.phoneHref}>Call</a>
        <Link href="/quote">Quote</Link>
        <a href={contact.emailHref}>Email</a>
      </div>
    </footer>
  );
}
