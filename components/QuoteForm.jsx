'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Mail, Phone, Send } from 'lucide-react';
import { contact } from '@/lib/siteData';

const services = [
  'Emergency locksmith / locked out',
  'Door will not lock / stiff uPVC door',
  'Lock change',
  'Lock installation',
  'Lock upgrade / anti-snap lock',
  'uPVC door repair / mechanism issue',
  'Broken key extraction',
  'Key safe installation',
  'Patio door / window lock repair',
  'Security survey',
  'Not sure / advice needed'
];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: 'Lock change',
    urgency: 'Flexible / advice needed',
    preferredContact: 'Phone call',
    message: '',
    website: ''
  });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState(null);
  const photoInput = useRef(null);

  const isUrgent = useMemo(() => {
    return form.urgency === 'Urgent — locked out / locked in / property will not secure' || form.service === 'Emergency locksmith / locked out' || form.service === 'Door will not lock / stiff uPVC door';
  }, [form]);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') {
      setStatus('idle');
      setMessage('');
    }
  }

  function handlePhoto(event) {
    const file = event.target.files?.[0];
    if (!file) {
      setPhoto(null);
      return;
    }
    if (!file.type.startsWith('image/')) {
      setStatus('error');
      setMessage('Please choose an image file such as a JPG, PNG or WEBP.');
      event.target.value = '';
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setStatus('error');
      setMessage('Please choose a photo smaller than 2MB so it can be sent with your enquiry.');
      event.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || '');
      const content = result.includes(',') ? result.split(',')[1] : '';
      if (!content) {
        setStatus('error');
        setMessage('That photo could not be read. Please try another image.');
        return;
      }
      setPhoto({ filename: file.name.replace(/[^a-zA-Z0-9._-]/g, '-').slice(0, 100), content });
      setStatus('idle');
      setMessage(`Photo attached: ${file.name}`);
    };
    reader.onerror = () => {
      setStatus('error');
      setMessage('That photo could not be read. Please try another image.');
    };
    reader.readAsDataURL(file);
  }

  function openEmailFallback() {
    const subject = `Website enquiry - ${form.service} - ${form.location || 'Tendring'}`;
    const body = [
      'New quote request from the website:',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Town / area: ${form.location}`,
      `Service: ${form.service}`,
      `Urgency: ${form.urgency}`,
      `Preferred contact: ${form.preferredContact}`,
      '',
      'Message:',
      form.message,
      '',
      'Please reply to the customer using the contact details above.'
    ].join('\n');
    window.location.href = `${contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function submit(event) {
    event.preventDefault();
    setStatus('sending');
    setMessage('Sending your request…');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'Quote request', data: { ...form, photo } })
      });
      const result = await response.json();

      if (response.ok && result.ok) {
        setStatus('success');
        setMessage('Thanks — your request has been sent. Brodley Locksmiths will use the contact details you supplied to get back to you.');
        setForm((current) => ({ ...current, message: '', website: '' }));
        setPhoto(null);
        if (photoInput.current) photoInput.current.value = '';
        return;
      }

      if (result.fallback) {
        setStatus('fallback');
        setMessage(photo ? 'Your details are ready in an email so you can send them now. Your selected photo is not attached to the email fallback, so add it manually if useful. For urgent issues, please call.' : 'Your details are ready in an email so you can send them now. For urgent issues, please call.');
        openEmailFallback();
        return;
      }

      setStatus('error');
      setMessage(result.error || 'The form could not send right now. Please call or email instead.');
    } catch {
      setStatus('error');
      setMessage('The form could not send right now. Please call or email instead.');
    }
  }

  return (
    <form className="quote-form direct-enquiry-form" onSubmit={submit}>
      {isUrgent && (
        <div className="urgent-form-note" role="status">
          <strong>Need urgent help?</strong>
          <span>If you are locked out, locked in, or the property will not secure, calling is usually the fastest route.</span>
          <a href={contact.phoneHref} className="btn btn-red small"><Phone size={16} /> Call {contact.phoneDisplay}</a>
        </div>
      )}
      <div className="form-grid">
        <label>Name<input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" autoComplete="name" /></label>
        <label>Phone<input required value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="Best number to call" autoComplete="tel" inputMode="tel" /></label>
        <label>Email<input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Email address (optional)" autoComplete="email" /></label>
        <label>Town / area<input required value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="e.g. Clacton, Harwich, Frinton" autoComplete="address-level2" /></label>
        <label>Service needed
          <select value={form.service} onChange={(e) => update('service', e.target.value)}>
            {services.map((service) => <option key={service}>{service}</option>)}
          </select>
        </label>
        <label>Urgency
          <select value={form.urgency} onChange={(e) => update('urgency', e.target.value)}>
            <option>Flexible / advice needed</option>
            <option>This week</option>
            <option>Planned work / future date</option>
            <option>Urgent — locked out / locked in / property will not secure</option>
          </select>
        </label>
        <label>Preferred contact
          <select value={form.preferredContact} onChange={(e) => update('preferredContact', e.target.value)}>
            <option>Phone call</option>
            <option>Text message</option>
            <option>Email</option>
          </select>
        </label>
        <label className="photo-upload-label">Photo of the issue <span>(optional)</span>
          <input ref={photoInput} type="file" accept="image/jpeg,image/png,image/webp" onChange={handlePhoto} />
          <small>Helpful for a door, lock, handle, key or mechanism issue. JPG, PNG or WEBP, up to 2MB.</small>
        </label>
        <label className="honeypot-field" aria-hidden="true">Leave this blank<input tabIndex="-1" autoComplete="off" value={form.website} onChange={(e) => update('website', e.target.value)} /></label>
      </div>
      <label>Tell us what is happening<textarea required rows={7} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Describe the lock, door, key safe or security issue. Mention if the door is uPVC, composite or timber, and whether it is currently secure." /></label>
      <div className="form-actions">
        <button className="btn btn-red big" type="submit" disabled={status === 'sending'}><Send size={20} /> {status === 'sending' ? 'Sending…' : 'Send request'}</button>
        <a className="btn btn-outline big" href={contact.phoneHref}><Phone size={20} /> Call {contact.phoneDisplay}</a>
      </div>
      {message && <p className={`form-status ${status}`} role="status">{status === 'success' && <CheckCircle2 size={18} />} {message}</p>}
      <p className="form-note">By sending this form, you are asking Brodley Locksmiths to use the details provided to respond to your enquiry. Read the <Link href="/privacy-policy">Privacy Policy</Link>.</p>
    </form>
  );
}
