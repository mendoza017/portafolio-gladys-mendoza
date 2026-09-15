import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();
    const newSubject = `${subject} - Reach you from your Online Curriculum.`;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `${name} <${process.env.RESEND_EMAIL_FROM}>`,
      to: process.env.RESEND_EMAIL_TO!,
      subject: newSubject,
      html: `
        <h1>Nuevo mensaje desde el Portafolio virtual</h1>
        <p>Detalle: ${newSubject}</p>
        <p>Nombre del remitente: ${name}</p>
        <p>Email: ${email}</p>
        <p>Mensaje: ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
