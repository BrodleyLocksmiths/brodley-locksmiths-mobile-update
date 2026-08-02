import Link from 'next/link';
import { AlertTriangle, Phone } from 'lucide-react';
import { contact } from '@/lib/siteData';

export default function EmergencyBar() {
  return (
    <aside className="emergency-bar" aria-label="Locksmith help and urgent door problems">
      <div className="container emergency-bar-inner">
        <div><AlertTriangle size={18} /> <span><strong>Need locks changed, upgraded or a door repaired?</strong> If a door is insecure or will not lock, call first.</span></div>
        <div className="emergency-bar-actions">
          <Link href="/services/lock-changes">Lock changes</Link>
          <a href={contact.phoneHref}><Phone size={16} /> Call {contact.phoneDisplay}</a>
        </div>
      </div>
    </aside>
  );
}
