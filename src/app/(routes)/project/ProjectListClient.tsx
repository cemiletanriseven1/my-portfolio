"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

// Kendi projemize özel tip tanımı. Build hatasını önleyen kritik kısım burası.
export interface PortfolioProject {
    id: number | string;
    title: string;
    content: string;
}

export default function ProjectListClient({ projects }: { projects: PortfolioProject[] }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]" />;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: "easeOut" 
                    }}
                >
                    <Link href={`/project/${post.id}`} className="group block h-full">
                        <div className="relative h-full rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-8 transition-all duration-500 hover:border-[#F87B1B]/40 hover:shadow-2xl hover:shadow-[#F87B1B]/5 hover:-translate-y-1">
                            
                            <div className="mb-6 inline-flex p-3 rounded-xl bg-[#F87B1B]/10 text-[#F87B1B] group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(248,123,27,0.1)]">
                                <Code2 size={24} />
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold group-hover:text-[#F87B1B] transition-colors tracking-tight">
                                    {post.title}
                                </h2>
                                
                                <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-8 text-sm md:text-base">
                                    {post.content}
                                </p>
                            </div>

                            <div className="flex items-center text-sm font-bold text-[#F87B1B] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 mt-4">
                                DETAYLARI İNCELE <ArrowRight size={16} className="ml-2" />
                            </div>
                            
                            <div className="absolute top-6 right-8 text-5xl font-black text-foreground/[0.03] pointer-events-none group-hover:text-[#F87B1B]/10 transition-colors select-none">
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}