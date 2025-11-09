// src/components/layout/header/Header.tsx
"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search } from "lucide-react";

import { Button } from "../../ui/button";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "../../ModeToggle";

// Dialog bileşenlerimiz (src/components/ui/dialog.tsx varsa)
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";

export default function Header() {
  const [query, setQuery] = useState("");
  const [mobileQuery, setMobileQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname() || "/";

  const submitSearch = (q: string) => {
    const qenc = encodeURIComponent(q.trim());
    if (!qenc) return;
    router.push(`/search?q=${qenc}`);
  };

  // helper: aktif link kontrolü
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    // project alt sayfalarını da kapsasın istiyorsan startsWith kullan
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <header
      className="
        bg-my-primary
        sticky top-0 z-50
        text-my-primary-foreground
        border-b border-border/60 shadow-sm
        backdrop-blur supports-[backdrop-filter]:bg-my-primary
      "
      role="banner"
    >
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4 text-white">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-md px-1"
        >
          Cemilenur Tanrıseven
        </Link>

        {/* Masaüstü menü */}
        <nav aria-label="Ana menü" className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={`transition-colors duration-200 underline-offset-4 ${isActive("/")
              ? "text-[#F87B1B] underline decoration-[#F87B1B] decoration-2"
              : "text-inherit hover:text-[#F87B1B] hover:underline hover:decoration-[#F87B1B] hover:decoration-2"
              }`}
          >
            Anasayfa
          </Link>

          <Link
            href="/about"
            aria-current={isActive("/about") ? "page" : undefined}
            className={`transition-colors duration-200 underline-offset-4 ${isActive("/about")
              ? "text-[#F87B1B] underline decoration-[#F87B1B] decoration-2"
              : "text-inherit hover:text-[#F87B1B] hover:underline hover:decoration-[#F87B1B] hover:decoration-2"
              }`}
          >
            Hakkımda
          </Link>

          <Link
            href="/project"
            aria-current={isActive("/project") ? "page" : undefined}
            className={`transition-colors duration-200 underline-offset-4 ${isActive("/project")
              ? "text-[#F87B1B] underline decoration-[#F87B1B] decoration-2"
              : "text-inherit hover:text-[#F87B1B] hover:underline hover:decoration-[#F87B1B] hover:decoration-2"
              }`}
          >
            Projeler
          </Link>

          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={`transition-colors duration-200 underline-offset-4 ${isActive("/contact")
              ? "text-[#F87B1B] underline decoration-[#F87B1B] decoration-2"
              : "text-inherit hover:text-[#F87B1B] hover:underline hover:decoration-[#F87B1B] hover:decoration-2"
              }`}
          >
            İletişim
          </Link>
        </nav>



        <div className="flex items-center gap-2">
          {/* Desktop: inline search (md +) */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center bg-card/40 border border-border/30 rounded-md px-2 py-1 transition-all duration-200">
              <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
              <label htmlFor="header-search" className="sr-only">Site içinde ara</label>
              <input
                id="header-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submitSearch(query);
                }}
                placeholder="Ara..."
                className="ml-2 w-40 bg-transparent text-sm placeholder:opacity-60 outline-none text-[color:var(--color-my-primary-foreground)]"
                aria-label="Ara"
              />
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => submitSearch(query)}
              aria-label="Aramayı başlat"
            >
              Ara
            </Button>
          </div>

          {/* Mobile: Dialog ile arama */}
          <div className="md:hidden">
            <Dialog>
              <DialogTrigger asChild>
                <Button aria-label="Mobil arama" variant="secondary" size="icon">
                  <Search className="h-5 w-5" aria-hidden />
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Site içinde ara</DialogTitle>
                  <DialogDescription>Aramak için bir kelime veya cümle yaz.</DialogDescription>
                </DialogHeader>

                <div className="mt-3 flex w-full items-center gap-2">
                  <input
                    autoFocus
                    value={mobileQuery}
                    onChange={(e) => setMobileQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        submitSearch(mobileQuery);
                      }
                    }}
                    placeholder="Ara..."
                    className="w-full rounded-md border border-border/30 bg-background/70 px-3 py-2 text-[color:var(--color-my-primary-foreground)] outline-none"
                  />
                  <Button
                    onClick={() => submitSearch(mobileQuery)}
                    variant="secondary"
                    size="sm"
                  >
                    Ara
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <ModeToggle />

          {/* Sadece mobilde görünen menü tetikleyicisi */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
