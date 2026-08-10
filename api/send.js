import { Resend } from "resend";

const apiUrl = import.meta.env.VITE_API_URL;
const resend = new Resend(apiUrl);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "cartikeyalavu <onboarding@resend.dev>",
      to: ["your-email@example.com"],
      subject: `New Message from ${name}`,
      html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });
    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
