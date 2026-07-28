import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      business = 'Not provided',
      name = 'Not provided',
      email = 'Not provided',
      phone = 'Not provided',
      businessType = 'Not provided',
      budget = 'Not provided',
      message = 'No message provided',
    } = data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Email provider is not configured.' }, { status: 500 });
    }

    const subject = `Website enquiry${business ? ` from ${business}` : ''}`;
    const textBody = `Business: ${business}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness type: ${businessType}\nBudget: ${budget}\n\n${message}`;
    const htmlBody = `<pre style="white-space:pre-wrap">${escapeHtml(textBody)}</pre>`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Gaith <no-reply@gaith.example.com>',
        to: 'andreimad2024@gmail.com',
        subject,
        html: htmlBody,
        text: textBody,
      }),
    });

    if (!res.ok) {
      const txt = await res.text();
      return NextResponse.json({ error: 'Failed to send email', detail: txt }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
