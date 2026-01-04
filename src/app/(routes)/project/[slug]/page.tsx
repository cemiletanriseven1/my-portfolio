import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react'

const BlogSlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const slug = (await params).slug

    return (
        <main className="min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Geri Dön Butonu */}
                <Link 
                    href="/project" 
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-[#F87B1B] transition-colors mb-12 group"
                >
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Projelere Geri Dön
                </Link>

                <article className="space-y-10">
                    {/* Üst Bilgi */}
                    <header className="space-y-6">
                        <div className="inline-flex px-3 py-1 rounded-full bg-[#F87B1B]/10 text-[#F87B1B] text-xs font-bold uppercase tracking-widest">
                            Proje Detayı
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                            {slug.replace(/-/g, ' ').toUpperCase()}
                        </h1>
                        
                        {/* Meta Bilgiler */}
                        <div className="flex flex-wrap gap-6 pt-4 border-y border-border/40 py-6">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar size={16} className="text-[#F87B1B]" />
                                <span>{new Date().toLocaleDateString('tr-TR')}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Tag size={16} className="text-[#F87B1B]" />
                                <span>Full Stack Development</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <User size={16} className="text-[#F87B1B]" />
                                <span>Cemilenur Tanrıseven</span>
                            </div>
                        </div>
                    </header>

                    {/* İçerik Alanı */}
                    <div className="prose prose-invert max-w-none">
                        <div className="rounded-3xl bg-card/40 border border-border/40 p-8 md:p-12 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold mb-6 text-[#F87B1B]">Proje Hakkında</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {slug} projesi, modern web teknolojileri kullanılarak kullanıcı deneyimi odaklı geliştirilmiştir. 
                                Şu an bu sayfa içerik yönetim sistemi üzerinden gelen verileri yansıtmaktadır.
                            </p>
                            
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6 rounded-2xl bg-background/50 border border-border/20">
                                    <h3 className="font-bold mb-3">Kullanılan Teknolojiler</h3>
                                    <ul className="text-sm space-y-2 text-muted-foreground">
                                        <li>• Next.js 15 (App Router)</li>
                                        <li>• Tailwind CSS & Framer Motion</li>
                                        <li>• TypeScript</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-2xl bg-background/50 border border-border/20">
                                    <h3 className="font-bold mb-3">Temel Özellikler</h3>
                                    <ul className="text-sm space-y-2 text-muted-foreground">
                                        <li>• Dinamik API Entegrasyonu</li>
                                        <li>• Responsive Tasarım</li>
                                        <li>• Yüksek Performans</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    )
}

export default BlogSlugPage