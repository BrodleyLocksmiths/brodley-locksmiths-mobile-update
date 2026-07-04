import { NextResponse } from 'next/server';

const MAX_FIELD = 4000;

function clean(value, max = MAX_FIELD) {
  return String(value ?? '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function escapeHtml(value) {
  return clean(value, 12000)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function safeAttachment(data = {}) {
  const photo = data.photo;
  if (!photo || typeof photo !== 'object') return null;

  const filename = clean(photo.filename, 120).replace(/[^a-zA-Z0-9._-]/g, '-') || 'enquiry-photo.jpg';
  const content = String(photo.content || '').replace(/\s/g, '');
  const allowed = /\.(jpe?g|png|webp)$/i;

  if (!allowed.test(filename) || !/^[A-Za-z0-9+/]+={0,2}$/.test(content) || content.length > 3_000_000) return null;

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
    ['Preferred contact', data.preferredContact],
    ['Best time to contact', data.bestTime],
    ['Customer note', data.customerNotes],
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

function splitItems(value) {
  return clean(value, 4000)
    .split('|')
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 5);
}

function safeValue(value, fallback = 'Not provided') {
  return clean(value, 4000) || fallback;
}

function getSecureText(data = {}) {
  const priorities = splitItems(data.mainPriorities);
  const foundations = splitItems(data.existingSafeguards);
  return [
    'GET SECURE PROPERTY CHECK',
    '',
    'CUSTOMER DETAILS',
    `Name: ${safeValue(data.name)}`,
    `Phone: ${safeValue(data.phone)}`,
    `Email: ${safeValue(data.email)}`,
    `Preferred contact: ${safeValue(data.preferredContact)}`,
    `Best time to contact: ${safeValue(data.bestTime)}`,
    '',
    'PROPERTY & LOCATION',
    `Property type: ${safeValue(data.propertyType)}`,
    `Location: ${safeValue(data.location)}`,
    '',
    'RESULTS',
    `Security: ${safeValue(data.securityScore)}`,
    `Door & lock reliability: ${safeValue(data.reliabilityScore)}`,
    `Security foundations: ${safeValue(data.foundationsScore)}`,
    `Overall priority: ${safeValue(data.urgency)}`,
    `Recommended next service: ${safeValue(data.recommendedService)}`,
    '',
    'TAILORED SUMMARY',
    safeValue(data.summary),
    safeValue(data.nextStep),
    '',
    'MAIN PRIORITIES',
    ...(priorities.length ? priorities.map((item) => `• ${item}`) : ['• No major concerns were selected in this check.']),
    '',
    'EXISTING SAFEGUARDS SELECTED',
    ...(foundations.length ? foundations.map((item) => `• ${item}`) : ['• No existing safeguards were selected in this check yet.']),
    '',
    'CUSTOMER NOTE',
    safeValue(data.customerNotes, 'No additional note added.'),
    '',
    'REQUESTED HELP',
    safeValue(data.helpType),
    '',
    'Reply to the customer using the phone number or email address above.'
  ].join('\n');
}

function getSecureHtml(data = {}) {
  const priorities = splitItems(data.mainPriorities);
  const foundations = splitItems(data.existingSafeguards);
  const row = (label, value) => `<tr><td style="padding:9px 12px;color:#6b7280;font-weight:700;width:42%;border-bottom:1px solid #e5e7eb;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:9px 12px;color:#111827;border-bottom:1px solid #e5e7eb;vertical-align:top;">${escapeHtml(safeValue(value))}</td></tr>`;
  const list = (items, fallback) => `<ul style="margin:0;padding-left:20px;color:#1f2937;line-height:1.55;">${(items.length ? items : [fallback]).map((item) => `<li style="margin:0 0 7px;">${escapeHtml(item)}</li>`).join('')}</ul>`;
  const heading = (title) => `<h2 style="font-size:14px;letter-spacing:.08em;text-transform:uppercase;color:#8a2924;margin:28px 0 10px;">${escapeHtml(title)}</h2>`;

  return `<!doctype html><html><body style="margin:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#111827;">
  <div style="max-width:680px;margin:0 auto;padding:28px 14px;">
    <div style="overflow:hidden;border-radius:18px;background:#ffffff;box-shadow:0 10px 30px rgba(17,24,39,.12);">
      <div style="padding:24px 26px;background:#1d1f23;border-top:6px solid #b8322c;">
        <div style="color:#d4b178;font-size:12px;font-weight:800;letter-spacing:.11em;text-transform:uppercase;">Brodley Locksmiths</div>
        <h1 style="margin:8px 0 0;color:#ffffff;font-size:25px;line-height:1.2;">Get Secure Property Check</h1>
        <p style="margin:7px 0 0;color:#e5e7eb;font-size:14px;">New customer summary ready for review.</p>
      </div>
      <div style="padding:8px 26px 30px;">
        ${heading('Customer details')}
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:12px;border-collapse:separate;border-spacing:0;overflow:hidden;background:#ffffff;">${row('Name', data.name)}${row('Phone', data.phone)}${row('Email', data.email)}${row('Preferred contact', data.preferredContact)}${row('Best time to contact', data.bestTime)}</table>
        ${heading('Property & location')}
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:12px;border-collapse:separate;border-spacing:0;overflow:hidden;background:#ffffff;">${row('Property type', data.propertyType)}${row('Location', data.location)}</table>
        ${heading('Results')}
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:12px;border-collapse:separate;border-spacing:0;overflow:hidden;background:#ffffff;">${row('Security', data.securityScore)}${row('Door & lock reliability', data.reliabilityScore)}${row('Security foundations', data.foundationsScore)}${row('Overall priority', data.urgency)}${row('Recommended next service', data.recommendedService)}</table>
        ${heading('Tailored summary')}
        <div style="border-left:4px solid #b8322c;background:#fff7f6;border-radius:0 12px 12px 0;padding:14px 16px;line-height:1.6;color:#1f2937;">${escapeHtml(safeValue(data.summary))}<br><br><strong>${escapeHtml(safeValue(data.nextStep))}</strong></div>
        ${heading('Main priorities')}
        <div style="border:1px solid #f1d0cd;background:#fffafa;border-radius:12px;padding:14px 16px;">${list(priorities, 'No major concerns were selected in this check.')}</div>
        ${heading('Existing safeguards selected')}
        <div style="border:1px solid #c9ead5;background:#f7fff9;border-radius:12px;padding:14px 16px;">${list(foundations, 'No existing safeguards were selected in this check yet.')}</div>
        ${heading('Customer note')}
        <div style="border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;background:#ffffff;line-height:1.6;color:#1f2937;">${escapeHtml(safeValue(data.customerNotes, 'No additional note added.'))}</div>
        ${heading('Requested help')}
        <p style="margin:0;color:#1f2937;line-height:1.6;">${escapeHtml(safeValue(data.helpType))}</p>
      </div>
    </div>
  </div>
  </body></html>`;
}

export const runtime = 'nodejs';
export const maxDuration = 10;

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ ok: false, error: 'Please send the form again.' }, { status: 415 });
    }
    const payload = await request.json();
    const type = clean(payload.type, 40) || 'Website enquiry';
    const data = payload.data || {};

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
      return NextResponse.json({ ok: false, fallback: true, error: 'Online sending has not been configured yet.' }, { status: 503 });
    }

    const attachment = safeAttachment(data);
    const isGetSecure = type === 'Get Secure Property Check';
    const subject = isGetSecure
      ? `Get Secure Check: ${clean(data.location || data.propertyType || 'New website lead', 120)}`
      : `${type}: ${clean(data.service || data.propertyType || 'New website lead', 120)}`;
    const text = isGetSecure
      ? getSecureText(data)
      : [
          'New website enquiry from Brodley Locksmiths',
          `Type: ${type}`,
          '',
          linesFromData(data),
          attachment ? `\nAn optional customer photo is attached: ${attachment.filename}` : '',
          '',
          'Reply to the customer using the phone number or email address above.'
        ].join('\n');
    const html = isGetSecure ? getSecureHtml(data) : undefined;

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
        html,
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
