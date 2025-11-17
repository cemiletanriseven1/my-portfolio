import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, message, captchaToken } = body || {};

    if (!email || !message) {
      return NextResponse.json(
        { error: "E-posta ve mesaj gereklidir." },
        { status: 400 }
      );
    }

    // 🟣 1) CAPTCHA GELMİŞ Mİ?
    if (!captchaToken) {
      return NextResponse.json(
        { error: "Captcha doğrulanamadı." },
        { status: 400 }
      );
    }

    // 🟣 2) CAPTCHA TOKENINI GOOGLE'A DOĞRULAT
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const googleRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `secret=${secretKey}&response=${captchaToken}`
      }
    );

    const captchaValidation = await googleRes.json();

    console.log("Captcha doğrulama:", captchaValidation);

    // Eğer başarılı değilse mail gönderme!
    if (!captchaValidation.success) {
      return NextResponse.json(
        { error: "Captcha doğrulaması geçersiz." },
        { status: 400 }
      );
    }

    // 🟣 3) CAPTCHA OK → Artık mail gönderebiliriz
    const sendResult = await resend.emails.send({
  from: "Cemile Form <onboarding@resend.dev>",
  to: "xxceyox@gmail.com",
  subject: `Yeni iletişim formu - ${email}`,
  text: `Gönderen: ${email}\n\nMesaj:\n${message}`,
});

    console.log("Resend yanıtı:", sendResult);

    return NextResponse.json(
      { success: true, message: "Mesaj başarıyla gönderildi." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
