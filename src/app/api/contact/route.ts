// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, message } = body || {};

    if (!email || !message) {
      return NextResponse.json({ error: "Eksik alan" }, { status: 400 });
    }

    // Burada e-posta servisine gönderim yapabilirsin.
    // Örnek (Nodemailer) - NOT: gerçek kullanım için SMTP bilgilerini .env içine koy:
    /*
    import nodemailer from "nodemailer";
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Boolean(process.env.SMTP_SECURE === "true"),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: `"Site İletişim" <${process.env.SMTP_FROM}>`,
      to: "cemiletanriseven31@gmail.com",
      subject: `Yeni iletişim formu - ${email}`,
      text: `Gönderen: ${email}\n\nMesaj:\n${message}`,
    });
    */

    // Şimdilik sadece logla (geliştirme)
    // eslint-disable-next-line no-console
    console.log("Contact form received:", { email, message });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
