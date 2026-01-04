"use client";

import { memo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";

const Button = dynamic(() => import("../../../../components/ui/button").then((mod) => mod.Button));

function ContactCTAComponent() {
    return (
        <section className="py-24">
            <motion.div 
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-border/50 bg-gradient-to-br from-card/80 to-background shadow-2xl"
            >
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F87B1B]/15 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#F87B1B]/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 z-10">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                            Birlikte harika şeyler <span className="text-[#F87B1B] drop-shadow-sm">inşa edebiliriz.</span> 👇
                        </h3>
                        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                            Proje fikirlerinizi paylaşın veya bir görüşme ayarlayın — her zaman yeni işbirliklerine açığım.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
                        <SocialButton href="https://github.com/cemiletanriseven1" icon={<Github className="w-5 h-5" />} label="GitHub" />
                        <SocialButton href="https://www.linkedin.com/feed/" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                        <SocialButton href="mailto:cemiletanriseven1@gmail.com" icon={<Mail className="w-5 h-5" />} label="E-posta" />
                        <SocialButton href="https://www.instagram.com/cemiletanri7" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="group border-border/50 bg-background/50 backdrop-blur-md hover:border-[#F87B1B] hover:text-[#F87B1B] transition-all duration-300 gap-2 px-6 h-12 text-base">
                <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>
                {label}
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 ml-1" />
            </Button>
        </a>
    );
}

export default memo(ContactCTAComponent);