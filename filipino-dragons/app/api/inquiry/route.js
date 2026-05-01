import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message, inquiryType, extraField, company, timestamp } = body;

    if (company) {
      return Response.json({ success: true });
    }

    if (!timestamp || Date.now() - timestamp < 2000) {
      return Response.json({ success: true });
    }

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Filipino Dragons <hellomembers@filipinodragons.org.sg>',
      to: 'sofiavivienp@gmail.com',
      subject: `New ${inquiryType} Inquiry`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Type:</strong> ${inquiryType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interest:</strong> ${extraField}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}