import Image from "next/image";
import Link from "next/link";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";

import { Button } from "../ui/button";
import styles from "./HeroSection.module.css";



export function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroMedia}>
                <div className={styles.heroFrame}>
                    <Image
                        src="/resim.webp" // Görsel yolunun doğru olduğundan emin ol
        alt="Cemilenur Tanrıseven"
        width={286} // Görselin gerçek genişliğine uygun bir değer
        height={382} // Görselin gerçek yüksekliğine uygun bir değer
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        priority // <-- BU SATIRI EKLE
                    />
                </div>
            </div>

            <div className={styles.heroCopy}>
                <h1 className={styles.heroTitle}>Merhaba, ben Cemilenur Tanrıseven.</h1>
                <p className={styles.heroLead}>
                    Front-end geliştirici ve yazılım mühendisliği öğrencisiyim. Temiz kod, ölçeklenebilir tasarım ve kullanıcı
                    deneyimine önem veriyorum.
                </p>
                <div className={styles.heroActions}>
                    <Link href="/project">
                        <Button asChild>
                            <span className="inline-flex items-center gap-2">
                                Projelerimi Gör <ExternalLink className="w-4 h-4" />
                            </span>
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" asChild>
                            <span>İletişime Geç</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
