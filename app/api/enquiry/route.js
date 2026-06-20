import { NextResponse } from 'next/server';

const MAX_FIELD = 4000;

function clean(value, max = MAX_FIELD) {
  return String(value ?? '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function safeAttachment(data = {}) {
  const photo = data.photo;
  if (!photo || typeof photo !== 'object') return null;

  const filename = clean(photo.filename, 120).replace(/[^a-zA-Z0-9._-]/g, '-') || 'enquiry-photo.jpg';
  const content = String(photo.content || '').replace(/\s/g, '');

  // Base64 image data only. Keep this intentionally modest for a fast, reliable enquiry form.
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(content) || content.length > 3_000_000) return null;

  return { filename, content };
}

function linesFromData(data = {}) {
  const order = [
    ['Name', data.name],
    ['Phone', data.phone],
    ['Email', data.email],
    ['Town / area', data.location],
    ['Property type', data.propertyType],
    ['Service requested', data.service],
    ['Urgency', data.urgency],
    ['Preferred contact time', data.preferredContact],
    ['Message', data.message],
    ['Get Secure summary', data.report]
  ];

  return order
    .map(([label, value]) => {
      const output = clean(value, label === 'Get Secure summary' ? 12000 : MAX_FIELD);
      return output ? `${label}: ${output}` : null;
    })
    .filter(Boolean)
    .join('\n\n');
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const type = clean(payload.type, 40) || 'Website enquiry';
    const data = payload.data || {};

    // Quietly accept bot submissions without forwarding them.
    if (clean(data.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(data.name, 140);
    const phone = clean(data.phone, 80);
    const email = clean(data.email, 160);
    const message = clean(data.message, 4000);
    const report = clean(data.report, 12000);

    if (!name || (!phone && !email) || (!message && !report)) {
      return NextResponse.json({ ok: false, error: 'Please add your name, a phone number or email address, and a short message.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.ENQUIRY_FROM;
    const to = process.env.ENQUIRY_TO || 'info@brodley-locksmiths.com';

    if (!apiKey || !from) {
      return NextResponse.json({
        ok: false,
        fallback: true,
        error: 'Online sending has not been configured yet.'
      }, { status: 503 });
    }

    const subject = `${type}: ${clean(data.service || data.propertyType || 'New website lead', 120)}`;
    const attachment = safeAttachment(data);
    const text = [
      `New website enquiry from Brodley Locksmiths`,
      `Type: ${type}`,
      '',
      linesFromData(data),
      attachment ? `\nAn optional customer photo is attached: ${attachment.filename}` : '',
      '',
      'Reply to the customer using the phone number or email address above.'
    ].join('\n');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        attachments: attachment ? [attachment] : undefined,
        reply_to: email || undefined
      })
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Resend email failed:', detail);
      return NextResponse.json({ ok: false, error: 'The online form could not send right now. Please call or email instead.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Enquiry route error:', error);
    return NextResponse.json({ ok: false, error: 'Something went wrong. Please call or email instead.' }, { status: 500 });
  }
}
