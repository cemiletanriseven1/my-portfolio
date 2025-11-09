// src/app/(routes)/(home)/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/ui/tabs";

import { getBaseUrl } from "@/lib/getBaseUrl"; // eğer @ alias yoksa "../../lib/getBaseUrl" kullan

type Post = {
  id: string | number;
  title: string;
  content: string;
};

const SKILLS: { name: string; href: string }[] = [
  { name: "React", href: "https://react.dev" },
  { name: "Next.js", href: "https://nextjs.org" },
  { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", href: "https://www.typescriptlang.org/" },
  { name: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "Python", href: "https://www.python.org/" },
];

const PROJECTS = [
  {
    title: "Köpek Duygu Analizi Mobil Uygulaması",
    description:
      "React Native ile geliştirilmiş, köpeklerin yüz ifadelerini analiz ederek duygusal durumlarını tahmin eden bir mobil uygulama.",
  },
  {
    title: "Giysi Giydirme ve Renk Değiştirme Modeli",
    description:
      "Stable Diffusion tabanlı model; kullanıcıların seçtiği renklerle sanal mankenin kıyafet rengini değiştirir.",
  },
  {
    title: "Kişisel Web Sitesi",
    description: "React ile oluşturduğum kişisel portföy; mobil uyumlu ve performans odaklı.",
  },
  {
    title: "Web Tabanlı Test Sitesi",
    description:
      "Yazılım test senaryolarını uygulamaya ve değerlendirmeye olanak tanıyan web tabanlı test arayüzü.",
  },
  {
    title: "E-Ticaret Sitesi",
    description:
      "Ürün listeleme, kategori filtreleme ve sepet yönetimi özelliklerine sahip tam işlevli bir e-ticaret platformu.",
  },
];

export default async function HomePage() {
  const base = getBaseUrl();
  const postsUrl = `${base}/api/project`;
  let posts: Post[] = [];

  try {
    const res = await fetch(postsUrl, { cache: "no-store" });
    if (!res.ok) {
      console.error("API responded with non-OK:", res.status, await res.text().catch(() => ""));
    } else {
      posts = await res.json();
    }
  } catch (err) {
    console.error("Error fetching posts from", postsUrl, err);
    posts = [];
  }

  return (
    <main
      className="min-h-screen transition-all duration-300 ease-in-out"
      style={
        {
          "--color-my-primary": "#fafafa",
          "--color-my-primary-foreground": "#111111",
        } as React.CSSProperties
      }
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <section className="grid md:grid-cols-2 gap-8 items-center py-8">
          <div className="order-2 md:order-2 flex justify-center md:justify-end">
            <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-border/30 bg-card/40">
  <Image
    src="/resim.png"
    alt="Cemilenur Tanrıseven portrait"
    width={288}
    height={384}
    className="object-contain w-full h-full"
    priority
  />
</div>


          </div>

          <div className="order-1 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
              Merhaba, ben Cemilenur Tanrıseven.
            </h1>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Front-end geliştirici ve yazılım mühendisliği öğrencisiyim. Temiz kod, ölçeklenebilir tasarım ve kullanıcı deneyimine önem
              veriyorum.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/project">
                <Button asChild>
                  <span className="inline-flex items-center gap-2">
                    Projelerimi Gör <ExternalLink className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" asChild>
                  <span>İletişime Geç</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Teknik Yetenekler */}
        <section className="py-16">
          <h3 className="text-2xl font-bold mb-8">Teknik Yetenekler</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group"
                title={s.name}
              >
                <Card className="p-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-base font-semibold">{s.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-[color:#F87B1B] mr-2 opacity-90 group-hover:shadow-[0_0_12px_rgba(248,123,27,0.15)]" />
                      <span className="text-sm">Detay için tıklayın</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Projeler */}
        <section className="py-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Projelerim</h3>
            <Link href="/project">
              <Button asChild>
                <span>Tüm Projelere Git</span>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <Card key={p.title} className="p-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:border-[color:#F87B1B]">
                <CardContent>
                  <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                  <p className="text-muted-foreground mb-4">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Deneyim */}
        <section className="py-16">
          <h3 className="text-2xl font-bold mb-6">Deneyim</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Technomedicare (Stajyer) — 07/2024 - 08/2024, Ankara</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kulak ve soluk borusundaki hastalıkları tespit eden yapay zeka modeli geliştirdim.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4">
              <CardHeader>
                <CardTitle>Pointo Teknoloji (Frontend Stajı) — 2024 Yaz & Uzun Dönem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Front-end (React) geliştirmeleri yaptım, back-end ekibine de destek verdim.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16">
          <div className="rounded-2xl p-6 bg-card/60 border border-border/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Birlikte harika şeyler inşa edebiliriz. 👇 Benimle iletişime geç!</h3>
                <p className="text-muted-foreground mt-2">Proje fikirlerinizi paylaşın veya bir görüşme ayarlayın — her zaman yeni işbirliklerine açığım.</p>
              </div>

              <div className="flex items-center gap-3">
                <a href="https://github.com/cemiletanriseven1" target="_blank" rel="noreferrer">
                  <Button variant="ghost" asChild>
                    <span className="inline-flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> GitHub
                    </span>
                  </Button>
                </a>
                <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noreferrer">
                  <Button variant="ghost" asChild>
                    <span className="inline-flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> LinkedIn
                    </span>
                  </Button>
                </a>
                <a href="mailto:cemiletanriseven1@gmail.com">
                  <Button variant="ghost" asChild>
                    <span className="inline-flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> E-posta
                    </span>
                  </Button>
                </a>
                <a href="https://www.instagram.com/cemiletanri7?igsh=dW5ucW9yeXg2cDJi" target="_blank" rel="noreferrer">
                  <Button variant="ghost" asChild>
                    <span className="inline-flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> Instagram
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Cemilenur Tanrıseven — Tüm hakları saklıdır.</footer>
      </div>
    </main>
  );
}
