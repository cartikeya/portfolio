import { Resend } from "resend";

// 1. Use standard Node.js process.env, and pass the API Key, not a URL
const resend = new Resend(process.env.RESEND_API_KEY);

// 2. Use Vercel's standard handler syntax for non-Next.js apps
export default async function handler(req, res) {
  // Reject anything that isn't a POST request
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Parse the body using standard req.body
  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "cartikeyalavu <onboarding@resend.dev>",
      to: ["cartikeya.official@gmail.com"],
      subject: `New Message from ${name}`,
      html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
