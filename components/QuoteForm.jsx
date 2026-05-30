'use client';

import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { contact } from '@/lib/siteData';

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: 'Lock change',
    urgency: 'Flexible / advice needed',
    message: ''
  });

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const subject = `Quote request - ${form.service} - ${form.location || 'Tendring'}`;
    const body = [
      'New quote request from the website:',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Location: ${form.location}`,
      `Service: ${form.service}`,
      `Urgency: ${form.urgency}`,
      '',
      'Message:',
      form.message,
      '',
      'Please reply to the customer using the contact details above.'
    ].join('\n');
    window.location.href = `${contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Name<input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" /></label>
        <label>Phone<input required value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="Best number to call" /></label>
        <label>Email<input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Email address" /></label>
        <label>Town / area<input required value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="e.g. Clacton, Harwich, Frinton" /></label>
        <label>Service needed
          <select value={form.service} onChange={(e) => update('service', e.target.value)}>
            <option>Lock change</option>
            <option>Lock installation</option>
            <option>Lock upgrade</option>
            <option>uPVC door repair</option>
            <option>uPVC mechanism replacement</option>
            <option>Key safe installation</option>
            <option>Landlord locksmith service</option>
            <option>Holiday let / guest house security</option>
            <option>Security survey</option>
            <option>Not sure / advice needed</option>
          </select>
        </label>
        <label>Urgency
          <select value={form.urgency} onChange={(e) => update('urgency', e.target.value)}>
            <option>Flexible / advice needed</option>
            <option>As soon as possible</option>
            <option>This week</option>
            <option>Planned work / future date</option>
          </select>
        </label>
      </div>
      <label>Tell me what is happening<textarea required rows={7} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Describe the lock, door, key safe or security issue. Mention if it is uPVC, composite, timber, rental property, holiday let or business premises if relevant." /></label>
      <div className="form-actions">
        <button className="btn btn-red big" type="submit"><Mail size={20} /> Send quote request</button>
        <a className="btn btn-outline big" href={contact.phoneHref}><Phone size={20} /> Call {contact.phoneDisplay}</a>
      </div>
      <p className="form-note">This form opens your email app with the details filled in, so you can check the message before sending. For urgent issues, calling is usually best.</p>
    </form>
  );
}
