import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, event, date, details } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Kody Sun Site <bookings@kodysun.com>",
      to: process.env.BOOKING_EMAIL!,
      replyTo: email,
      subject: `Booking Inquiry — ${event ?? "New Request"} — ${name}`,
      text: `
New booking inquiry from kodysun.com

Name:    ${name}
Email:   ${email}
Phone:   ${phone ?? "—"}
Event:   ${event ?? "—"}
Date:    ${date ?? "—"}

Details:
${details ?? "—"}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Booking error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
