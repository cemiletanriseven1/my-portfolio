import React from "react";
import ProjectListClient, { PortfolioProject } from "./ProjectListClient";

export const revalidate = 3600;

async function getProjects(): Promise<PortfolioProject[]> {
    const vercelHost = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? vercelHost ?? "http://localhost:3000";
    
    try {
        const res = await fetch(`${baseUrl}/api/project`, {
            next: { revalidate },
        });
        if (!res.ok) return [];
        return res.json();
    } catch {
    return [];
}
}

const ProjectPage = async () => {
    const posts = await getProjects();

    return (
        <main className="min-h-screen py-16 px-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-background via-background to-muted/20">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-4 mb-16 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic">
                        PRO<span className="text-[#F87B1B]">JELER</span>
                    </h1>
                    <div className="h-1.5 w-32 bg-[#F87B1B] rounded-full mx-auto md:mx-0" />
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        API üzerinden dinamik olarak çekilen, geliştirme süreçlerimi yansıtan çalışmalarım.
                    </p>
                </div>

                <ProjectListClient projects={posts} />
            </div>
        </main>
    );
};

export default ProjectPage;