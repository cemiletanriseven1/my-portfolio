# 💻 Kişisel Portföy Web Sitesi

Modern web teknolojileri ve sektörel standartlar (Clean Code, Atomic Design) takip edilerek geliştirilmiş, yüksek performanslı kişisel portföy projesidir. Proje; hakkımda, yetenekler, dinamik projeler ve güvenli iletişim formu gibi temel bölümlerden oluşmaktadır.

## 🚀 Öne Çıkan Özellikler

- [cite_start]**🌗 Dark/Light Mode:** Kullanıcı tercihlerine göre dinamik tema desteği[cite: 108].
- [cite_start]**📊 Dinamik Proje Yönetimi:** Next.js API Routes üzerinden JSON veri modelleri ile projelerin dinamik olarak listelenmesi[cite: 134, 135].
- [cite_start]**📧 Güvenli İletişim:** Resend API ile e-posta gönderimi ve Google reCAPTCHA ile spam koruması.
- **⚡ Performans Odaklı:** Görsel optimizasyonlar ve lazy loading teknikleri ile 100/100 Lighthouse skoru hedefleyen yapı.
- [cite_start]**📱 Tam Duyarlı (Responsive):** TailwindCSS kullanılarak tüm cihazlarda kusursuz görüntüleme[cite: 236].

## 🛠️ Teknik Yığın (Tech Stack)

- [cite_start]**Framework:** [Next.js](https://nextjs.org/) (App Router Mimarisi) [cite: 134]
- [cite_start]**Dil:** [TypeScript](https://www.typescriptlang.org/) [cite: 84]
- [cite_start]**Stil:** [Tailwind CSS](https://tailwindcss.com/) [cite: 84]
- [cite_start]**UI Bileşenleri:** [shadcn/ui](https://ui.shadcn.com/) [cite: 86]
- [cite_start]**E-Posta Servisi:** [Resend](https://resend.com/) [cite: 203]
- [cite_start]**Güvenlik:** Google reCAPTCHA [cite: 205]

## 🏗️ Proje Mimarisi

[cite_start]Sürdürülebilirlik için modüler bir klasör yapısı ve **Atomic Design** yaklaşımı benimsenmiştir[cite: 88]:

```text
src/
├── app/            # Next.js App Router (Sayfalar ve API Route'lar) [cite: 134]
├── components/     # UI bileşenleri (Header, Footer, Kartlar vb.) [cite: 108, 137]
├── lib/            # Yardımcı fonksiyonlar ve API konfigürasyonları
└── public/         # Statik varlıklar ve optimize edilmiş görseller
```
