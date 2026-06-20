import Link from 'next/link';
import { AlertTriangle, Phone } from 'lucide-react';
import { contact } from '@/lib/siteData';

export default function EmergencyBar() {
  return (
    <aside className="emergency-bar" aria-label="Urgent locksmith help">
      <div className="container emergency-bar-inner">
        <div><AlertTriangle size={18} /> <span><strong>Door will not lock, locked out or locked in?</strong> Get urgent Tendring locksmith help.</span></div>
        <div className="emergency-bar-actions">
          <Link href="/services/door-will-not-lock">Door will not lock</Link>
          <a href={contact.phoneHref}><Phone size={16} /> Call {contact.phoneDisplay}</a>
        </div>
      </div>
    </aside>
  );
}
