"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { 
    Mail, 
    Github, 
    Linkedin, 
    Instagram, 
    Send, 
    CheckCircle2, 
    AlertCircle, 
    ExternalLink,
    LucideIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import type ReCAPTCHAComponent from "react-google-recaptcha";
import type { ComponentProps } from "react";

type ReCAPTCHAProps = ComponentProps<typeof ReCAPTCHAComponent>;

const ReCAPTCHA = dynamic<ReCAPTCHAProps>(() => import("react-google-recaptcha"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="mt-4 h-[78px] w-full rounded-xl border border-border/30 bg-muted/50 animate-pulse"
    />
  ),
});

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">("idle");
  const [notice, setNotice] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false); // Çerez sorununu çözen yeni state

  useEffect(() => { setMounted(true); }, []);

  const validateEmail = (e: string) => /\S+@\S+\.\S+/.test(e);

  const resetStatusLater = (ms = 3000) =>
    setTimeout(() => setStatus("idle"), ms);

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
    if (!captchaToken) {
      setStatus("error");
      setNotice("Lütfen robot olmadığınızı doğrulayın.");
      resetStatusLater();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: messageText, captchaToken }),
      });

      if (!res.ok) throw new Error("Gönderim başarısız");

      setStatus("sent");
      setNotice("Harika! Mesajın başarıyla iletildi.");
      setEmail("");
      setMessageText("");
      setCaptchaToken(null);
      resetStatusLater(5000);
    } catch {
      setStatus("error");
      setNotice("Bir şeyler ters gitti. Lütfen tekrar dene.");
      resetStatusLater();
    }
  };

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    sendViaApi();
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen py-20 px-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic">
            BANA <span className="text-[#F87B1B]">ULAŞIN</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#F87B1B] rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Yeni projeler, iş birlikleri veya sadece merhaba demek için form doldurabilir ya da sosyal medyadan yazabilirsin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="relative overflow-hidden border-border/40 bg-card/40 backdrop-blur-md shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F87B1B] to-transparent" />
              <CardContent className="p-8">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold tracking-wider uppercase opacity-70">E-Posta Adresin</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="adiniz@ornek.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setShowCaptcha(true)} // Tıklanınca Captcha'yı yükle
                      className="w-full rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#F87B1B]/50 focus:ring-4 focus:ring-[#F87B1B]/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold tracking-wider uppercase opacity-70">Mesajın</label>
                    <textarea
                      id="message"
                      placeholder="Fikrinizi veya sorunuzu buraya bırakın..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onFocus={() => setShowCaptcha(true)} // Tıklanınca Captcha'yı yükle
                      rows={6}
                      className="w-full rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#F87B1B]/50 focus:ring-4 focus:ring-[#F87B1B]/10 resize-none"
                    />
                  </div>

                  {/* Sadece etkileşim olduğunda yüklenir, Lighthouse skorunu kurtarır */}
                  {showCaptcha && (
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                      onChange={(token: string | null) => setCaptchaToken(token)}
                      theme="dark"
                    />
                  )}

                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full h-12 bg-[#F87B1B] hover:bg-[#ff8f3a] text-white font-bold rounded-xl transition-all duration-300 group"
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                          <Send size={18} />
                        </motion.span>
                        Gönderiliyor...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Mesajı Gönder
                      </span>
                    )}
                  </Button>

                  <AnimatePresence mode="wait">
                    {status === "error" && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-destructive text-sm font-medium">
                        <AlertCircle size={16} /> {notice}
                      </motion.div>
                    )}
                    {status === "sent" && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-green-500 text-sm font-bold">
                        <CheckCircle2 size={16} /> {notice}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-xl font-bold italic tracking-tight">DOĞRUDAN İLETİŞİM</h2>
              <a 
                href="mailto:cemiletanriseven31@gmail.com" 
                className="group flex items-center p-4 rounded-2xl border border-border/40 bg-card/40 hover:border-[#F87B1B]/40 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-[#F87B1B]/10 text-[#F87B1B] mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">E-posta</p>
                  <p className="text-sm font-medium group-hover:text-[#F87B1B] transition-colors">cemiletanriseven31@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold italic tracking-tight">SOSYAL MEDYA</h2>
              <div className="grid grid-cols-2 gap-4">
                <SocialLink href="https://github.com/cemiletanriseven1" icon={Github} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/feed/" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="https://www.instagram.com/cemiletanri7" icon={Instagram} label="Instagram" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F87B1B]/10 to-transparent border border-[#F87B1B]/10">
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  &quot;Kod yazmak bir sanat, doğru iletişim ise o sanatın kalbidir. En kısa sürede geri dönüş yapacağım.&quot;
                </p>
            </div>
          </motion.div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border/40 text-center">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} <span className="font-bold text-foreground">Cemilenur Tanrıseven</span> — Tüm hakları saklıdır.
            </p>
        </footer>
      </div>
    </main>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string, icon: LucideIcon, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-4 rounded-2xl border border-border/40 bg-card/40 hover:border-[#F87B1B]/40 hover:bg-[#F87B1B]/5 transition-all duration-300 group"
    >
      <div className="text-muted-foreground group-hover:text-[#F87B1B] group-hover:scale-110 transition-all duration-300 mb-2">
        <Icon size={24} />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">{label}</span>
      <ExternalLink size={10} className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}