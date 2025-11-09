// src/app/(routes)/project/page.tsx
import React from 'react'

type Post = {
    id: number | string;
    title: string;
    content: string;
};

import { getBaseUrl } from "@/lib/getBaseUrl"; // alias yoksa "../../lib/getBaseUrl" gibi düzelt

const ProjectPage = async () => {
    const base = getBaseUrl();
    const url = `${base}/api/project`;
    let posts: Post[] = [];

    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
            console.error("Project API non-OK:", res.status, await res.text().catch(() => ""));
        } else {
            posts = await res.json();
        }
    } catch (err) {
        console.error("Failed fetching project posts from", url, err);
        posts = [];
    }

    return (
        <div className="container mx-auto py-10 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-my-primary]">PROJELER</h1>
            <ul className="mt-8 space-y-6 md:space-y-8">
                {posts.map((post) => (
                    <li key={post.id} className="rounded-2xl border border-border/40 bg-card/60 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="mb-2 text-xl md:text-2xl font-semibold text-[--color-my-primary]">{post.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectPage;
