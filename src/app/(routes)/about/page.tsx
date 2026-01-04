"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target, Code2 } from "lucide-react";

export default function AboutPage() {
    // Animasyon varyantları
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.2 } }
    };

    return (
        <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background to-muted/20">
            <div className="w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
                
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                    {/* Sol Sütun: Görsel ve Hızlı Bilgi */}
                    <motion.div variants={fadeInUp} className="lg:col-span-5 lg:sticky lg:top-24">
                        <div className="relative group">
                            {/* Dekoratif Arka Plan Kareleri */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#F87B1B]/20 to-orange-500/10 rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
                            
                            <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl">
                                <Image
                                    src="/resim.webp"
                                    alt="Cemilenur Tanrıseven"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />
                            </div>

                            {/* Durum Rozeti */}
                            <div className="absolute -bottom-4 -right-4 bg-card border border-border p-4 rounded-xl shadow-xl flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium">İş Birliklerine Açık</span>
                            </div>
                        </div>

                        <div className="mt-10 space-y-4">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Cemilenur <span className="text-[#F87B1B]">Tanrıseven</span>
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium border border-border">Yazılım Mühendisliği</span>
                                <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium border border-border">Frontend Developer</span>
                                <span className="px-3 py-1 rounded-full bg-[#F87B1B]/10 text-[#F87B1B] text-xs font-medium border border-[#F87B1B]/20">4. Sınıf Öğrencisi</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sağ Sütun: İçerik / Hikaye */}
                    <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-10">
                        
                        {/* Giriş Bölümü */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-2 text-[#F87B1B]">
                                <Code2 size={20} />
                                <h2 className="font-semibold uppercase tracking-wider text-sm">Merhaba</h2>
                            </div>
                            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
                                Samsun Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim ve ağırlıklı olarak front-end geliştirme yapıyorum.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
                                Amacım: temiz kod, tutarlı bileşen mimarisi ve sağlam bilgi mimarisiyle hızlı, erişilebilir ve sürdürülebilir arayüzler üretmek. Tasarım sistemleri, performans optimizasyonu ve erişilebilirlik (WCAG) konularına özellikle ilgi duyuyorum.
                            </p>
                        </section>

                        {/* Deneyim Detayı */}
                        <section className="space-y-4 p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-[#F87B1B]">
                                <Briefcase size={20} />
                                <h2 className="font-semibold uppercase tracking-wider text-sm">Şu An Ne Yapıyorum?</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
                                Bu yaz <strong>Pointo Teknolojisi’nde</strong> 30 iş günlük stajımı front-end (React) alanında yaptım. Şu anda aynı şirkette uzun dönem (4 ay) stajıma devam ediyorum. Front-end çalışmalarına ek olarak back-end tarafında (API ve sunucu odaklı geliştirme) da görev alıyorum. Ekip pratiklerine düzenli katkı veriyor; çıktılarımı her zaman temiz ve ölçeklenebilir bir yapıda tutuyorum.
                            </p>
                        </section>

                        {/* Geçmiş / Yapay Zeka */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-2 text-[#F87B1B]">
                                <GraduationCap size={20} />
                                <h2 className="font-semibold uppercase tracking-wider text-sm">Arka Plan</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
                                Öncesinde <strong>Technomedicare’de</strong> yapay zekâ alanında staj yaptım. Veri hazırlama, model eğitimi ve test süreçlerinde çalıştım. Ayrıca mobil tarafta da görevler alarak model çıktılarının uygulamaya entegrasyonu üzerinde deneyim kazandım. Bu süreç, teknik iletişimimi ve ürün odaklı bakışımı oldukça güçlendirdi.
                            </p>
                        </section>

                        {/* Hedef / Vizyon */}
                        <section className="space-y-4 relative overflow-hidden p-6 rounded-2xl border border-[#F87B1B]/20 bg-[#F87B1B]/5">
                            <div className="flex items-center gap-2 text-[#F87B1B]">
                                <Target size={20} />
                                <h2 className="font-semibold uppercase tracking-wider text-sm">Vizyon & Hedef</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
                                Kısa vadede hedefim, tasarım sistemleri ve bileşen kütüphaneleri konusunda uzmanlaşarak ekiplerin daha hızlı ve hatasız ürün çıkarmasına katkı sağlamak. Üretirken <span className="text-foreground font-semibold">“kullanıcıya değer”</span>, <span className="text-foreground font-semibold">“ekibe sürdürülebilirlik”</span> ve <span className="text-foreground font-semibold">“kendime öğrenme”</span> üçlüsünü rehber kabul ediyorum.
                            </p>
                        </section>

                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}