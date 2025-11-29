import ΜνμΑπόΕπισκέπτες from '@/app/emails/ΜνμΑπόΕπισκέπτες';

import { Resend } from 'resend';

// Guard creating the Resend client when the API key is not available at build time.
const resend = process.env.PW_RESEND_API_KEY
  ? new Resend(process.env.PW_RESEND_API_KEY)
  : null;

export async function POST(request, res) {
  const { fullName, email, number, app, subject, text } = await request.json();

  if (!resend) {
    return Response.json(
      { error: 'Missing PW_RESEND_API_KEY on server.' },
      { status: 500 }
    );
  }

  try {
    const { results, error } = await resend.emails.send({
      from: 'message@d-man.dev',
      to: 'ik4r0s@icloud.com',
      subject: 'Νέο μήνυμα από προσωπικό ιστότοπο',
      react: ΜνμΑπόΕπισκέπτες({ fullName, email, number, app, subject, text }),
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ data: results }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
