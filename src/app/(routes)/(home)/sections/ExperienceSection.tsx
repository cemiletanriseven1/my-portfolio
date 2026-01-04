"use client";

import { memo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Card = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.Card));
const CardHeader = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardHeader));
const CardTitle = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardTitle));
const CardContent = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardContent));

function ExperienceSectionComponent() {
    const experiences = [
        {
            title: "Technomedicare (Stajyer)",
            date: "07/2024 - 08/2024, Ankara",
            desc: "Kulak ve soluk borusundaki hastalıkları tespit eden yapay zeka modeli geliştirdim."
        },
        {
            title: "Pointo Teknoloji (Frontend Stajı)",
            date: "2024 Yaz & Uzun Dönem",
            desc: "Front-end (React) geliştirmeleri yaptım, back-end ekibine de destek verdim."
        }
    ];

    return (
        <section className="py-20">
             <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2 mb-10"
            >
                <h3 className="text-3xl font-bold tracking-tight">Deneyim</h3>
                <div className="h-1.5 w-24 bg-gradient-to-r from-[#F87B1B] to-orange-300 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <Card className="relative overflow-hidden border-l-4 border-l-[#F87B1B] bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-colors">
                            <CardHeader className="pb-2">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                                    <span className="text-sm font-medium text-[#F87B1B] bg-[#F87B1B]/10 px-3 py-1 rounded-full w-fit">
                                        {exp.date}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {exp.desc}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default memo(ExperienceSectionComponent);