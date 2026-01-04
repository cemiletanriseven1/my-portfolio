"use client";

import { memo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Card = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.Card));
const CardContent = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardContent));

type ProjectsSectionProps = {
    projects: { title: string; description: string }[];
};

function ProjectsSectionComponent({ projects }: ProjectsSectionProps) {
    return (
        <section className="py-20">
            <div className="flex flex-wrap items-end justify-between mb-12 gap-4">
                 <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2"
                >
                    <h3 className="text-3xl font-bold tracking-tight">Projelerim</h3>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-[#F87B1B] to-orange-300 rounded-full" />
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Link href="/project">
                        <Button variant="outline" className="group border-[#F87B1B] text-[#F87B1B] hover:bg-[#F87B1B] hover:text-white transition-all duration-300">
                            <span>Tüm Projelere Git</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((p, index) => (
                    <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full p-6 bg-card/40 border-border/60 backdrop-blur-sm transition-all duration-300 group hover:shadow-2xl hover:shadow-[#F87B1B]/10 hover:-translate-y-2 hover:border-[#F87B1B]/40 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#F87B1B] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                            <CardContent className="p-0 h-full flex flex-col">
                                <h4 className="text-xl font-bold mb-3 group-hover:text-[#F87B1B] transition-colors">{p.title}</h4>
                                <p className="text-muted-foreground leading-relaxed flex-grow">{p.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default memo(ProjectsSectionComponent);