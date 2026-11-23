// POST /api/lead: every form on the site posts here (was inc/mail.php).
// Sends the lead by email, then sends the visitor to /thankyou.
// Needs: npm install nodemailer, and the SMTP settings in .env.local (see .env.example).
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const clean = (v, max = 300) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function back(request, status, error) {
  const wantsJson = (request.headers.get('accept') || '').includes('application/json');
  if (wantsJson) return Response.json(error ? { ok: false, error } : { ok: true }, { status });
  if (!error) return Response.redirect(new URL('/thankyou', request.url), 303);
  return new Response(
    `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Not sent</title>` +
      `<body style="font-family:system-ui;max-width:560px;margin:80px auto;padding:0 20px;color:#152339">` +
      `<h1>Sorry, your message was not sent.</h1><p>${esc(error)}</p>` +
      `<p><a href="javascript:history.back()" style="color:#248196">Go back and try again</a></p></body>`,
    { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
  );
}

export async function POST(request) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return back(request, 400, 'Invalid form.');
  }

  const name = clean(form.get('name'), 100);
  const email = clean(form.get('email'), 150);
  const phone = clean(form.get('phone'), 30);
  const pkg = clean(form.get('package'), 120);
  const service = clean(form.get('service'), 120);
  const msg = String(form.get('msg') ?? '').trim().slice(0, 5000);
  const link = clean(form.get('link'), 500);

  if (!name) return back(request, 422, 'Please enter your name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return back(request, 422, 'Please enter a valid email address.');
  if (phone.replace(/\D/g, '').length < 7) return back(request, 422, 'Please enter a valid phone number.');

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_TO, MAIL_FROM } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error('Lead form: SMTP_USER / SMTP_PASS missing in .env.local');
    return back(request, 500, 'Email is not set up yet. Please call us.');
  }

  const rows = { Name: name, Email: email, Phone: phone, Package: pkg || '-', Service: service || '-', Message: msg || '-', Page: link || '-' };
  const html =
    '<table cellpadding="8" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">' +
    Object.entries(rows)
      .map(([k, v]) => `<tr><td style="border:1px solid #ddd;background:#eaf5f8;font-weight:bold">${k}</td><td style="border:1px solid #ddd">${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
      .join('') +
    '</table>';

  const port = Number(SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || 'smtp.gmail.com',
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: { name: 'The Ebook Publisher', address: MAIL_FROM || SMTP_USER },
      to: (LEAD_TO || 'info@theebookpublisher.com').split(',').map((s) => s.trim()),
      replyTo: { name, address: email },
      subject: `Client Order Query: ${pkg || name}`,
      text: Object.entries(rows).map(([k, v]) => `${k}: ${v}`).join('\n'),
      html,
    });
    return back(request, 200);
  } catch (err) {
    console.error('Lead email failed:', err && err.message);
    return back(request, 500, 'Our mail server did not accept the message. Please call us or try again.');
  }
}
