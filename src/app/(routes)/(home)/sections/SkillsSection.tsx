"use client";

import { memo } from "react";
import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";

const Card = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.Card));
const CardContent = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardContent));
const CardHeader = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardHeader));
const CardTitle = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardTitle));

type SkillsSectionProps = {
    skills: { name: string; href: string }[];
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // Artık TypeScript bunun geçerli bir tip olduğunu anlayacak
      stiffness: 100,
    },
  },
};

function SkillsSectionComponent({ skills }: SkillsSectionProps) {
    return (
        <section className="py-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2 mb-10"
            >
                <h3 className="text-3xl font-bold tracking-tight">Teknik Yetenekler</h3>
                <div className="h-1.5 w-24 bg-gradient-to-r from-[#F87B1B] to-orange-300 rounded-full" />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {skills.map((s) => (
                    <motion.a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group"
                        title={s.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Card className="h-full border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-[#F87B1B]/50 group-hover:shadow-[0_4px_20px_-12px_rgba(248,123,27,0.5)]">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base font-semibold flex items-center gap-2">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#F87B1B] group-hover:animate-pulse" />
                                    {s.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                                    <span className="text-[#F87B1B] font-medium">Detay için tıklayın</span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
}

export default memo(SkillsSectionComponent);