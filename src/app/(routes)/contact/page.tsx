// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">("idle");
  const [notice, setNotice] = useState("");

  const validateEmail = (e: string) => /\S+@\S+\.\S+/.test(e);

  const resetStatusLater = (ms = 3000) => setTimeout(() => setStatus("idle"), ms);

  // 1) mailto fallback: kullanıcı mail istemcisini açar
  const sendViaMailTo = () => {
    if (!validateEmail(email)) {
      setStatus("error");
      setNotice("Lütfen geçerli bir e-posta adresi girin.");
      resetStatusLater();
      return;
    }
    if (!messageText.trim()) {
      setStatus("error");
      setNotice("Lütfen mesaj alanını doldurun.");
      resetStatusLater();
      return;
    }

    const subject = encodeURIComponent("Portfolyo - İletişim talebi");
    const body = encodeURIComponent(`Gönderen: ${email}\n\nMesaj:\n${messageText}`);
    // bizim adres: cemiletanriseven31@gmail.com (alıcı)
    const mailto = `mailto:cemiletanriseven31@gmail.com?subject=${subject}&body=${body}`;

    // Aç ve kullanıcı mail istemcisi ile gönderir
    window.location.href = mailto;
    setStatus("sent");
    setNotice("E-posta istemciniz açıldı — göndermeyi tamamlayın.");
    resetStatusLater(4000);
  };

  // 2) api POST (sunucuya göndermek istersen): örnek kullanım
  const sendViaApi = async () => {
    if (!validateEmail(email)) {
      setStatus("error");
      setNotice("Lütfen geçerli bir e-posta adresi girin.");
      resetStatusLater();
      return;
    }
    if (!messageText.trim()) {
      setStatus("error");
      setNotice("Lütfen mesaj alanını doldurun.");
      resetStatusLater();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: messageText }),
      });
      if (!res.ok) throw new Error("Gönderim başarısız");
      setStatus("sent");
      setNotice("Teşekkürler! Mesajınız alındı, en kısa sürede dönüş yapacağım.");
      setEmail("");
      setMessageText("");
      resetStatusLater(4000);
    } catch (err) {
      setStatus("error");
      setNotice("Gönderim sırasında hata oluştu. Lütfen daha sonra tekrar deneyin.");
      resetStatusLater();
    }
  };

  // form submit handler: tercihe göre birini çağır
  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // Eğer sunucuna bağlı olmak istemiyorsan mailto'yu kullan:
    // sendViaMailTo();

    // Eğer /api/contact endpoint'in varsa sendViaApi kullan:
    sendViaApi();
  };

  return (
    <main className="min-h-screen transition-all duration-300 ease-in-out">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-6">
        <h1 className="text-3xl font-bold">İletişim</h1>
        <p className="text-muted-foreground">
          Birlikte harika şeyler inşa edebiliriz.👇 Benimle iletişime geç!
        </p>

        <Card className="p-6 bg-card/60 border border-border/30">
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <label className="block text-sm font-medium">
                E-posta
                <input
                  type="email"
                  placeholder="E-posta"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-md border border-border/30 bg-background/70 px-3 py-2 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-offset-0 focus:ring-[#F87B1B]/30"
                />
              </label>

              <label className="block text-sm font-medium">
                Mesaj
                <textarea
                  placeholder="Mesajınızı buraya yazın..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  rows={6}
                  className="mt-2 w-full rounded-md border border-border/30 bg-background/70 px-3 py-2 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-offset-0 focus:ring-[#F87B1B]/30 resize-vertical"
                />
              </label>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Button
                  type="submit"
                  className="bg-[#F87B1B] hover:bg-[#ff8f3a] text-white"
                >
                  {status === "sending" ? "Gönderiliyor..." : "mesaj gönder"}
                </Button>

                <div className="text-sm text-muted-foreground">
                  veya doğrudan:{" "}
                  <a
                    href="mailto:cemiletanriseven31@gmail.com"
                    className="text-[#F87B1B] underline"
                  >
                    cemiletanriseven31@gmail.com
                  </a>
                </div>
              </div>

              {status === "error" && <p className="text-sm text-destructive">{notice}</p>}
              {status === "sent" && <p className="text-sm text-green-500">{notice}</p>}
            </form>
          </CardContent>
        </Card>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold items-center">Sosyal Medya</h2>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a href="https://github.com/cemiletanriseven1" target="_blank" rel="noreferrer">
              <Button variant="ghost" className="group flex items-center gap-2 hover:text-[#F87B1B] transition-colors">
                <Github className="w-5 h-5 group-hover:text-[#F87B1B]" />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
            </a>

            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noreferrer">
              <Button variant="ghost" className="group flex items-center gap-2 hover:text-[#F87B1B] transition-colors">
                <Linkedin className="w-5 h-5 group-hover:text-[#F87B1B]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Button>
            </a>

            <a href="https://www.instagram.com/cemiletanri7?igsh=dW5ucW9yeXg2cDJi" target="_blank" rel="noreferrer">
              <Button variant="ghost" className="group flex items-center gap-2 hover:text-[#F87B1B] transition-colors">
                <Instagram className="w-5 h-5 group-hover:text-[#F87B1B]" />
                <span className="hidden sm:inline">Instagram</span>
              </Button>
            </a>

            <a href="mailto:cemiletanriseven31@gmail.com">
              <Button variant="ghost" className="group flex items-center gap-2 hover:text-[#F87B1B] transition-colors">
                <Mail className="w-5 h-5 group-hover:text-[#F87B1B]" />
                <span className="hidden sm:inline">E-posta</span>
              </Button>
            </a>
          </div>
        </section>

        <footer className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cemilenur Tanrıseven — Tüm hakları saklıdır.
        </footer>
      </div>
    </main>
  );
}
