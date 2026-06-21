import Link from 'next/link';
import { ArrowRight, Camera, ShieldCheck } from 'lucide-react';
import { getRealWorkForService, realWorkById, realWorkHighlights, realWorkPhotos } from '@/lib/realWork';

export function WorkPhotoCard({ photo, compact = false }) {
  return (
    <article className={`real-work-card ${compact ? 'real-work-card-compact' : ''}`}>
      <div className="real-work-image-wrap">
        <img src={photo.src} alt={photo.alt} className="real-work-image" loading="lazy" />
        {photo.label && <span className="real-work-label">{photo.label}</span>}
        <span className="real-work-category">{photo.category}</span>
      </div>
      <div className="real-work-copy">
        <h3>{photo.title}</h3>
        <p>{photo.caption}</p>
      </div>
    </article>
  );
}

export function RealWorkPreview() {
  const photos = realWorkHighlights.map((id) => realWorkById[id]).filter(Boolean);
  return (
    <section className="real-work-preview section deep-soft">
      <div className="container">
        <div className="real-work-heading-row">
          <div>
            <p className="eyebrow red">Real work</p>
            <h2>Genuine locksmith work, photographed on the job.</h2>
            <p>Real lock, door and access work from Brodley Locksmiths. Sensitive details such as keys and key-safe information are protected before photographs are used publicly.</p>
          </div>
          <Link href="/real-work-gallery" className="text-link">View real work gallery <ArrowRight size={16} /></Link>
        </div>
        <div className="real-work-grid real-work-grid-preview">
          {photos.map((photo) => <WorkPhotoCard key={photo.id} photo={photo} compact />)}
        </div>
      </div>
    </section>
  );
}

export function ServiceWorkGallery({ serviceSlug }) {
  const photos = getRealWorkForService(serviceSlug);
  if (!photos.length) return null;
  return (
    <section className="service-work-gallery" aria-label="Recent work photos">
      <div className="service-work-gallery-intro">
        <div className="icon-box"><Camera size={25} /></div>
        <div>
          <p className="eyebrow red">Real work</p>
          <h2>Examples of the type of work we carry out.</h2>
          <p>Selected job photographs showing lock, door and access work. Every setup is assessed individually, and sensitive details are obscured before images are shared.</p>
        </div>
      </div>
      <div className="real-work-grid">
        {photos.map((photo) => <WorkPhotoCard key={photo.id} photo={photo} compact />)}
      </div>
      <Link href="/real-work-gallery" className="text-link service-work-gallery-link">View more real work <ArrowRight size={16} /></Link>
    </section>
  );
}

export function GateUpgradePhotos() {
  const before = realWorkById['gate-lock-before'];
  const after = realWorkById['gate-lock-after'];
  return (
    <section className="gate-upgrade-photos" aria-label="Outdoor gate lock upgrade photographs">
      <div className="gate-upgrade-photos-heading">
        <div className="icon-box"><ShieldCheck size={24} /></div>
        <div>
          <p className="eyebrow red">Real gate work</p>
          <h2>Outdoor gate lock upgrade</h2>
          <p>An example of an older, corroded gate lock replaced with a more practical outdoor locking setup. The exact lock choice depends on the gate, access requirements and condition of the posts, hinges and closing line.</p>
        </div>
      </div>
      <div className="real-work-grid real-work-grid-two">
        <WorkPhotoCard photo={before} compact />
        <WorkPhotoCard photo={after} compact />
      </div>
    </section>
  );
}

export function FullRealWorkGallery() {
  return (
    <div className="real-work-grid real-work-gallery-grid">
      {realWorkPhotos.map((photo) => <WorkPhotoCard key={photo.id} photo={photo} />)}
    </div>
  );
}
