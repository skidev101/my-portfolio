import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(3).max(100),
  email: z.email().max(200),
  message: z.string().trim().min(5).max(5000),
});

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ] ?? character,
  );

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send.");
    return NextResponse.json(
      { error: "Contact form is not configured" },
      { status: 500 },
    );
  }

  try {
    const parsed = contactSchema.safeParse(await request.json());
    if (!parsed.success)
      return NextResponse.json(
        { error: "Invalid contact details" },
        { status: 400 },
      );

    const { name, email, message } = parsed.data;
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      /* Resend refuses to send from its sandbox address in production, so a
         verified domain address must be supplied via env. */
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? "skidev101@gmail.com"],
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      html: `<h1>New portfolio enquiry</h1><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });

    if (error) {
      console.error("Resend rejected the message:", error);
      return NextResponse.json(
        { error: "Email delivery failed" },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true });
  } catch (cause) {
    console.error("Contact route failed:", cause);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
