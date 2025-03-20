import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Send the user's email
    const data = await resend.emails.send({
      from: "contact@baileyco.com",
      to: "contact@baileyco.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Contact Form Submission from https://baileyco.com\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Send a confirmation email to the user
    await resend.emails.send({
      from: "contact@baileyco.com",
      to: email,
      subject: `Contact Form Confirmation`,
      text: "Thank you for reaching out to Bailey Refrigeration Co.! \n\nThis is a confirmation email that we have received your message and will be reaching out to you soon.",
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
