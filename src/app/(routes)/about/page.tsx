
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="mb-4 text-2xl font-semibold">Cemilenur Tanrıseven kimdir?</h1>

            <Image
  src="/resim.png"
  alt="Cemilenur Tanrıseven"
  width={400}
  height={400}
  className="mx-auto rounded-xl object-contain max-w-xs md:max-w-sm"
  priority
/>

            <div className="mt-8 mx-auto max-w-3xl space-y-6 leading-relaxed">
                <h1 className="text-base md:text-[17px] font-normal">Merhaba, ben Cemilenur Tanrıseven. Samsun Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim ve ağırlıklı olarak front-end geliştirme yapıyorum. Amacım: temiz kod, tutarlı bileşen mimarisi ve sağlam bilgi mimarisiyle hızlı, erişilebilir ve sürdürülebilir arayüzler üretmek. Tasarım sistemleri, performans optimizasyonu ve erişilebilirlik (WCAG) konularına özellikle ilgi duyuyorum.</h1>
                <h1 className="text-base md:text-[17px] font-normal">Bu yaz Pointo Teknolojisi’nde 30 iş günlük stajımı front-end (React) alanında yaptım. Şu anda aynı şirkette uzun dönem (4 ay) stajıma devam ediyorum ve bu süreçte front-end çalışmalarına ek olarak back-end tarafında (API ve sunucu odaklı geliştirme) da görev alıyorum. Kod inceleme, görev takibi ve sürüm yönetimi gibi ekip pratiklerine düzenli katkı veriyor; çıktılarımı her zaman temiz, ölçeklenebilir ve responsive bir yapıda tutmaya çalışıyorum.</h1>
                <h1 className="text-base md:text-[17px] font-normal">Öncesinde Technomedicare’de yapay zekâ alanında staj yaptım. Veri hazırlama/etiketleme, model eğitimi ve test süreçlerinde çalıştım; ayrıca mobil tarafta da görevler alarak model çıktılarının uygulamaya entegrasyonu ve arayüz akışları üzerinde deneyim kazandım. Bu deneyim, front-end çalışmalarımda teknik iletişimimi ve ürün odaklı bakışımı güçlendirdi.</h1>
                <h1 className="text-base md:text-[17px] font-normal">Kısa vadede hedefim, tasarım sistemleri ve bileşen kütüphaneleri konusunda uzmanlaşarak ekiplerin daha hızlı ve hatasız ürün çıkarmasına katkı sağlamak. Yeni teknolojileri düzenli olarak takip ediyor, küçük deney projeleriyle öğrendiklerimi pekiştiriyorum. Üretirken “kullanıcıya değer”, “ekibe sürdürülebilirlik” ve “kendime öğrenme” üçlüsünü rehber kabul ediyorum.</h1>
            </div>
        </div>
    );
}
