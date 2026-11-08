import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardList, Phone, ShieldCheck } from 'lucide-react';
import { contact } from '@/lib/siteData';

export default function CoreServiceGuide({ guide }) {
  return (
    <section className="core-service-guide" aria-label={guide.heading}>
      <header className="core-service-guide-intro">
        <p className="eyebrow gold">{guide.eyebrow}</p>
        <h2>{guide.heading}</h2>
        <p>{guide.introduction}</p>
      </header>
      <div className="core-service-guide-grid">
        <div className="core-guide-card">
          <h3><CheckCircle2 size={23} aria-hidden="true" /> {guide.symptomsHeading}</h3>
          <div className="core-guide-item-list">
            {guide.symptoms.map((item) => <div className="core-guide-item" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>)}
          </div>
        </div>
        <div className="core-guide-card">
          <h3><ClipboardList size={23} aria-hidden="true" /> {guide.processHeading}</h3>
          <ol className="core-guide-steps">
            {guide.process.map((item, index) => <li key={item.title}>
              <span className="core-guide-step-number" aria-hidden="true">{index + 1}</span>
              <div><strong>{item.title}</strong><p>{item.text}</p></div>
            </li>)}
          </ol>
        </div>
      </div>
      <div className="core-guide-advice">
        <ShieldCheck size={27} aria-hidden="true" />
        <div><h3>{guide.adviceTitle}</h3><p>{guide.advice}</p></div>
      </div>
      <div className="core-guide-quote">
        <div><h3>Need some advice or a quote?</h3><p>{guide.quoteHint}</p></div>
        <div className="button-row">
          <a href={contact.phoneHref} className="btn btn-red"><Phone size={18} /> Call {contact.phoneDisplay}</a>
          <Link href="/quote" className="btn btn-outline">Request a quote <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
