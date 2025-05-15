import ΜνμΑπόΕπισκέπτες from '@/app/emails/ΜνμΑπόΕπισκέπτες';

import { Resend } from 'resend';

const resend = new Resend(process.env.PW_RESEND_API_KEY);

export async function POST(request, res) {
  const { fullName, email, number, app, subject, text } = await request.json();

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
