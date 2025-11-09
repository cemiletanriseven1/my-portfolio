// src/lib/getBaseUrl.ts
export const getBaseUrl = (): string => {
    // Tarayıcıda çalışıyorsa relative path kullan (origin otomatik)
    if (typeof window !== "undefined") return "";

    // Sunucuda çalışıyorsak öncelikle public env değişkenine bak
    if (process.env.NEXT_PUBLIC_BASE_URL) {
        return process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "");
    }

    // Vercel gibi hostlar için otomatik fallback
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
    }

    // Geliştirme fallback
    return "http://localhost:3000";
};
