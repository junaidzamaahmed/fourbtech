import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstname, lastname, email, phone, message } = data;

    const { data: emailData, error } = await resend.emails.send({
      from: "website@fourbtech.com", // Update with your verified domain
      to: "info@fourbtech.com", // Your company email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.log(error);
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true, id: emailData?.id });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
