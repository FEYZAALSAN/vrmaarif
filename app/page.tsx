"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, BrainCircuit, MonitorPlay, Target, Glasses, PenTool, Globe, MoveRight, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MindMapLearningSection } from "@/components/sections/MindMapLearningSection";

const examCards = [
  {
    slug: "yks",
    title: "YKS (TYT-AYT)",
    desc: "Üniversite hayaline giden yolda sanal sınıflar ve sınav simülasyonları.",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20"
  },
  {
    slug: "dgs",
    title: "DGS",
    desc: "Dikey geçiş sınavı için özel hızlandırılmış VR kampları.",
    color: "from-emerald-400 to-cyan-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    slug: "lgs",
    title: "LGS",
    desc: "Liseye geçişte VR destekli konu anlatımları ile fark atın.",
    color: "from-pink-500 to-rose-400",
    shadow: "shadow-pink-500/20"
  },
  {
    slug: "kpss",
    title: "KPSS",
    desc: "Memurluk sınavlarına odaklanma modu ile evinizin konforunda hazırlanın.",
    color: "from-orange-400 to-amber-500",
    shadow: "shadow-orange-500/20"
  },
  {
    slug: "ydt",
    title: "YDT",
    desc: "Dil sınavı için sanal ortamda pratik yapma imkanı.",
    color: "from-red-500 to-orange-500",
    shadow: "shadow-red-500/20"
  }
];

const vrFeatures = [
  {
    icon: <Glasses className="w-8 h-8 text-primary" />,
    title: "Sanal Sınıf Ortamı",
    description: "Evde tek başınıza değil, sanal bir sınıfta mentörünüzle yan yana ders çalışın.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-secondary" />,
    title: "Odaklanma Modu (Deep Focus)",
    description: "Dikkat dağıtıcı unsurları engelleyen %100 izole VR çalışma ortamları.",
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-accent" />,
    title: "3D Konu Anlatımları",
    description: "Soyut konuları (Fizik, Biyoloji) 3 boyutlu simülasyonlarla deneyimleyerek öğrenin.",
  },
  {
    icon: <Target className="w-8 h-8 text-green-500" />,
    title: "Gerçekçi Sınav Simülasyonu",
    description: "Sınav stresini yenmek için gerçek sınav salonu atmosferinde denemeler çözün.",
  },
];

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    exam: "YKS Öğrencisi",
    content:
      "VR dersleriyle uzun saatler boyunca sıkılmadan çalışabildim. Özellikle geometri konularında netlerim ciddi şekilde arttı.",
    avatar: "AY",
  },
  {
    name: "Mehmet Demir",
    exam: "KPSS Adayı",
    content:
      "Yapay zeka destekli geri bildirimlerle hangi konuda eksik olduğumu net gördüm. Çalışma planım çok daha verimli hale geldi.",
    avatar: "MD",
  },
  {
    name: "Zeynep Kaya",
    exam: "LGS Öğrencisi",
    content:
      "Sanal laboratuvarlar ve etkileşimli içerikler sayesinde fen dersleri çok daha anlaşılır oldu. Öğrenmek gerçekten keyifli.",
    avatar: "ZK",
  },
  {
    name: "Ahmet Can",
    exam: "TYT Adayı",
    content:
      "Odaklanma modunda çalışırken dikkatimi dağıtan hiçbir şey olmuyor. Kısa sürede düzenli çalışma alışkanlığı kazandım.",
    avatar: "AC",
  },
  {
    name: "Elif Nur",
    exam: "AYT Öğrencisi",
    content:
      "Mentör görüşmeleri ve anlık analiz raporları sayesinde hangi konuda hızlanmam gerektiğini çok net gördüm.",
    avatar: "EN",
  },
  {
    name: "Berk Arslan",
    exam: "DGS Adayı",
    content:
      "Konu tekrarlarını VR ortamında yapmak motivasyonumu arttırdı. Deneme sonuçlarım istikrarlı şekilde yükseldi.",
    avatar: "BA",
  },
];

const vroomFeatures = [
  {
    title: "Canlı Vroom Oturumu",
    description: "Mentör ve öğrenciler aynı anda bağlanır, konu anlatımı ve soru çözümü gerçek zamanlı ilerler.",
  },
  {
    title: "Konuya Özel Odalar",
    description: "Matematik, fen veya dil gibi farklı dersler için ayrı vroom odalarında odaklı çalışma yapılır.",
  },
  {
    title: "Kayıt + Tekrar",
    description: "Ders sonrası vroom kayıtlarıyla hızlı tekrar yapılır, eksik kalan noktalar kolayca tamamlanır.",
  },
];

const packageTabs = [
  { id: "yks", label: "YKS" },
  { id: "lgs", label: "LGS" },
  { id: "ydt", label: "YDT" },
  { id: "kpss", label: "KPSS" },
  { id: "dgs", label: "DGS" },
  { id: "uni", label: "Üniversite Dersleri" },
] as const;

type PackageTab = (typeof packageTabs)[number]["id"];

const packageData: Record<
  PackageTab,
  Array<{
    title: string;
    oldPrice?: string;
    price: string;
    period: string;
    desc: string;
    badge?: string;
    items: string[];
    cta: string;
    featured?: boolean;
  }>
> = {
  yks: [
    {
      title: "MetaAkademi YKS Koçluk",
      oldPrice: "10.347₺",
      price: "8.800₺",
      period: "12 Hafta",
      desc: "TYT-AYT sürecinde birebir mentörlük ve disiplinli takip.",
      badge: "En Popüler",
      featured: true,
      items: [
        "Birebir mentör ve uzman PDR desteği",
        "Kişiye özel haftalık plan",
        "Haftada 2 canlı görüşme",
        "7/24 mesajlaşma ve takip",
        "MetaAkademi paneli sınırsız erişim",
      ],
      cta: "YKS Koçluk Başlat",
    },
    {
      title: "MetaAkademi YKS Tam Paket",
      price: "4.399₺",
      period: "4 Hafta",
      desc: "Koçluk, deneme ve analiz sistemini tek pakette birleştiren çözüm.",
      items: [
        "Günlük plan + haftalık analiz",
        "TYT/AYT deneme setleri",
        "Video çözümler ve etüt desteği",
        "Hedef revize görüşmeleri",
        "Sınırsız panel erişimi",
      ],
      cta: "YKS Tam Paket Al",
    },
  ],
  lgs: [
    {
      title: "MetaAkademi LGS Paket",
      price: "2.499₺",
      period: "8 Hafta",
      desc: "LGS odaklı konu takibi, etüt ve deneme sistemi.",
      featured: true,
      items: [
        "LGS'ye özel haftalık plan",
        "Türkçe, matematik, fen mentörlüğü",
        "Haftada 1 canlı mentör görüşmesi",
        "Mini deneme takibi",
        "Veli bilgilendirme raporu",
      ],
      cta: "LGS Paketine Başla",
    },
    {
      title: "MetaAkademi LGS Yoğunlaştırılmış",
      price: "3.299₺",
      period: "8 Hafta",
      desc: "Eksik konulara hızlandırılmış kapanış ve net artırma programı.",
      items: [
        "Haftalık yoğun etüt planı",
        "Konu kapanış testleri",
        "Canlı soru çözüm seansları",
        "Sınav simülasyon denemeleri",
        "Bireysel performans raporu",
      ],
      cta: "Yoğun Programı Al",
    },
  ],
  ydt: [
    {
      title: "MetaAkademi YDT Paket",
      price: "2.999₺",
      period: "8 Hafta",
      desc: "Dil sınavına özel kelime, paragraf ve deneme odaklı program.",
      featured: true,
      items: [
        "YDT haftalık çalışma planı",
        "Kelime + okuma stratejileri",
        "Haftada 1 canlı mentör görüşmesi",
        "Deneme analizi ve net takibi",
        "Gelişim paneli raporları",
      ],
      cta: "YDT Paketine Başla",
    },
    {
      title: "MetaAkademi YDT Plus",
      price: "3.499₺",
      period: "8 Hafta",
      desc: "Yoğun okuma, çeviri ve soru çözüm pratikleriyle üst seviye hazırlık.",
      items: [
        "Ekstra reading atölyeleri",
        "Soru tipi bazlı hızlandırma",
        "Haftalık mini deneme",
        "Bireysel geri bildirim",
        "Sınırsız kaynak erişimi",
      ],
      cta: "YDT Plus Al",
    },
  ],
  kpss: [
    {
      title: "MetaAkademi KPSS Koçluk",
      price: "3.199₺",
      period: "8 Hafta",
      desc: "KPSS lisans önlisans adayları için planlı çalışma ve takip programı.",
      featured: true,
      items: [
        "Ders bazlı haftalık hedefler",
        "Haftada 2 kontrol görüşmesi",
        "Soru bankası yönlendirmesi",
        "Deneme performans analizi",
        "Sınırsız panel erişimi",
      ],
      cta: "KPSS Koçluk Başlat",
    },
    {
      title: "MetaAkademi KPSS Tam Paket",
      price: "4.099₺",
      period: "8 Hafta",
      desc: "Koçluk, tekrar planı ve yoğun deneme takibini bir arada sunar.",
      items: [
        "Canlı etüt + soru çözüm desteği",
        "Eksik konu tamamlama takvimi",
        "Haftalık deneme karnesi",
        "Motivasyon ve disiplin takibi",
        "Önceliklendirilmiş çalışma planı",
      ],
      cta: "KPSS Tam Paket Al",
    },
  ],
  dgs: [
    {
      title: "MetaAkademi DGS Paket",
      price: "2.799₺",
      period: "8 Hafta",
      desc: "Sayısal-sözel dengeye özel DGS koçluk ve deneme çözüm planı.",
      featured: true,
      items: [
        "DGS odaklı günlük plan",
        "Haftalık hedef takip görüşmeleri",
        "Paragraf + problem hızlandırma",
        "Deneme analiz karnesi",
        "Panel üzerinden ilerleme takibi",
      ],
      cta: "DGS Paketine Başla",
    },
    {
      title: "MetaAkademi DGS Plus",
      price: "3.299₺",
      period: "8 Hafta",
      desc: "Süre yönetimi ve net artırmaya odaklı yoğun hazırlık programı.",
      items: [
        "Haftalık hız kampı",
        "Birebir çözüm odaklı mentörlük",
        "Soru tipi özel tekrarlar",
        "Sınav provası simülasyonları",
        "Gelişim raporu ve revize plan",
      ],
      cta: "DGS Plus Al",
    },
  ],
  uni: [
    {
      title: "MetaAkademi Üniversite Ders Koçluğu",
      price: "2.299₺",
      period: "6 Hafta",
      desc: "Üniversite derslerinde düzenli ilerleme için kişisel çalışma sistemi.",
      featured: true,
      items: [
        "Ders bazlı çalışma takvimi",
        "Vize/final hazırlık planı",
        "Haftalık mentör görüşmeleri",
        "Ödev ve kaynak yönlendirmesi",
        "Performans analizi",
      ],
      cta: "Ders Koçluğuna Başla",
    },
    {
      title: "MetaAkademi Üniversite Başarı Paketi",
      price: "3.099₺",
      period: "8 Hafta",
      desc: "Birden fazla ders için yoğun takip, etüt ve sınav hazırlık desteği.",
      items: [
        "Ders gruplarına özel planlama",
        "Yoğun etüt ve tekrar sistemi",
        "Haftalık geri bildirim raporu",
        "Sınav dönemi hızlandırma",
        "Sınırsız panel ve kaynak erişimi",
      ],
      cta: "Başarı Paketini Al",
    },
  ],
};

const faqItems = [
  {
    q: "MetaAkademi kimler için uygun?",
    a: "YKS, LGS, YDT, KPSS, DGS ve üniversite derslerinde planlı ilerlemek isteyen öğrenciler için uygundur. Seviyenize göre kişisel yol haritası oluşturulur.",
  },
  {
    q: "Program nasıl kişiselleştiriliyor?",
    a: "Haftalık hedefleriniz, çözüm hızınız ve deneme sonuçlarınız analiz edilerek size özel bir çalışma planı hazırlanır. Süreç boyunca plan düzenli olarak güncellenir.",
  },
  {
    q: "Koçluk görüşmeleri ne sıklıkta yapılıyor?",
    a: "Pakete göre haftada 1 veya 2 canlı görüşme yapılır. Görüşmelerde hedef takibi, eksik konu analizi ve bir sonraki hafta planı netleştirilir.",
  },
  {
    q: "VR gözlüğüm yoksa yine de katılabilir miyim?",
    a: "Evet. Bilgisayar veya tablet üzerinden sanal ekran moduyla derslere katılabilirsiniz. Uygun paketlerde cihaz desteği seçenekleri için ekibimizle görüşebilirsiniz.",
  },
  {
    q: "Deneme ve performans takibi nasıl yapılıyor?",
    a: "Çözdüğünüz denemeler panelde analiz edilir. Net değişimi, konu bazlı başarı oranı ve zaman yönetimi raporlarıyla gelişiminiz adım adım izlenir.",
  },
  {
    q: "Ödeme ve iade süreci nasıl işliyor?",
    a: "Ödemeler güvenli şekilde alınır. Paket şartlarına ve katılım durumuna göre iade politikamız uygulanır. Detaylar kayıt öncesinde şeffaf olarak paylaşılır.",
  },
];

export default function Home() {
  const router = useRouter();
  const [selectedPackageTab, setSelectedPackageTab] = useState<PackageTab>("yks");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white text-slate-900 font-sans selection:bg-purple-500/30">
      <Navbar />

      {/* Hero Background Elements - More Cyberpunk/VR feel */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute bottom-[-10%] left-[30%] w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-150 contrast-100 mix-blend-overlay"></div>
      </div>

      <main className="flex-grow z-10 pt-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          {/* Yerel atmosfer: yumuşak ışık + grid (minimal, etkileyici) */}
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
            <div className="absolute top-[8%] left-1/2 h-[min(52vw,480px)] w-[min(92vw,820px)] -translate-x-1/2 rounded-[50%] bg-gradient-to-br from-violet-500/[0.09] via-cyan-500/[0.06] to-fuchsia-500/[0.08] blur-3xl" />
            <div className="absolute top-[12%] right-[6%] h-44 w-44 rounded-full bg-cyan-400/[0.12] blur-3xl md:h-52 md:w-52" />
            <div className="absolute bottom-[28%] left-[4%] h-36 w-36 rounded-full bg-purple-500/[0.10] blur-3xl md:h-44 md:w-44" />
            <div
              className="absolute inset-0 opacity-[0.45] [background-image:linear-gradient(to_right,rgb(148_163_184/0.11)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.11)_1px,transparent_1px)] [background-size:2.75rem_2.75rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_20%,transparent_72%)]"
            />
          </div>
          {/* İnce köşe çerçeveleri (sadece geniş ekran) */}
          <div
            className="pointer-events-none absolute left-6 top-28 z-0 hidden h-20 w-20 rounded-tl-2xl border-l border-t border-violet-300/35 lg:block xl:left-10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-6 top-28 z-0 hidden h-20 w-20 rounded-tr-2xl border-r border-t border-cyan-300/35 lg:block xl:right-10"
            aria-hidden
          />

          <div className="container-width relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading mb-6 text-5xl font-bold tracking-tight text-slate-900 drop-shadow-sm md:mb-8 md:text-8xl"
            >
              Sınavlara{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-500 bg-clip-text animate-hero-gradient">
                  VR Teknolojisi
                </span>
                <span
                  className="absolute -bottom-1 left-0 right-0 mx-auto h-px max-w-[95%] bg-gradient-to-r from-transparent via-violet-400/50 to-transparent md:-bottom-2"
                  aria-hidden
                />
              </span>
              <br />
              ile Hazırlanın
            </motion.h1>

            <div
              className="mx-auto mb-10 h-px w-24 max-w-full bg-gradient-to-r from-transparent via-slate-300/80 to-transparent md:mb-12"
              aria-hidden
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl"
            >
              YKS, LGS, KPSS ve daha fazlası. Sanal gerçeklik gözlükleriyle dikkatiniz dağılmadan,
              %100 odaklanarak ve yaşayarak öğrenin. Türkiye'nin ilk Metaverse dershanesi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            >
              <Button
                size="lg"
                className="h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-10 text-lg text-white shadow-lg shadow-indigo-500/25 ring-1 ring-white/20 transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/35"
                onClick={() => router.push("/basvur")}
              >
                Ücretsiz VR Deneyimi Başlat <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 rounded-full border-slate-200/90 bg-white/80 px-10 text-lg text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-violet-200 hover:bg-white hover:shadow-md"
              >
                Tanıtım Videosunu İzle
              </Button>
            </motion.div>

            {/* Satış Paketleri */}
            <motion.section
              id="satis-paketleri"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-14 rounded-[2rem] border border-slate-200 bg-slate-50/70 p-5 shadow-sm md:mt-18 md:p-8"
            >
              <div className="mb-8 text-center">
                <h2 className="font-heading text-2xl font-bold text-slate-900 md:text-3xl">
                  Size Uygun Paketi Seçin
                </h2>
                <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Eğitimin 'Meta' hali: Hayalindeki üniversiteye giden yolu şansa bırakma! Derece yapmış mentörler ve alanında uzman koçlarla, hedefine ulaşana dek yanındayız.
                </p>
              </div>

              <div className="mx-auto mb-6 w-full max-w-4xl rounded-full bg-white p-1.5 shadow-[0_10px_24px_-16px_rgba(79,70,229,0.45)] ring-1 ring-slate-200">
                <div className="grid grid-cols-3 gap-1 md:grid-cols-6">
                  {packageTabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedPackageTab(tab.id)}
                      className={`rounded-full px-3 py-2.5 text-xs font-bold transition md:text-sm ${
                        selectedPackageTab === tab.id
                          ? "bg-gradient-to-r from-indigo-600 to-violet-500 text-white shadow-md"
                          : "text-violet-700 hover:bg-violet-50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {packageData[selectedPackageTab].map((pkg, idx) => (
                  <article
                    key={`${selectedPackageTab}-${pkg.title}`}
                    className={`relative flex h-full flex-col rounded-2xl bg-white p-6 ${
                      pkg.featured
                        ? "border-2 border-violet-500 shadow-[0_18px_30px_-20px_rgba(124,58,237,0.45)]"
                        : "border border-slate-200 shadow-sm"
                    }`}
                  >
                    {pkg.badge ? (
                      <span className="absolute right-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                        {pkg.badge}
                      </span>
                    ) : null}
                    <h3 className="text-xl font-bold text-slate-900">{pkg.title}</h3>
                    {idx === 0 ? (
                      <p className="mt-1 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        Sınırlı Kontenjan
                      </p>
                    ) : null}
                    {pkg.oldPrice ? (
                      <p className="mt-4 text-sm text-slate-400 line-through">{pkg.oldPrice}</p>
                    ) : (
                      <div className="mt-4" />
                    )}
                    <p className="text-4xl font-extrabold tracking-tight text-violet-700">
                      {pkg.price} <span className="text-base font-semibold text-slate-500">/ {pkg.period}</span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{pkg.desc}</p>
                    <ul className="mt-5 space-y-2 text-sm text-slate-700">
                      {pkg.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                    <Button className="mt-auto h-12 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500 text-white hover:from-indigo-500 hover:to-violet-400">
                      {pkg.cta}
                    </Button>
                  </article>
                ))}
              </div>
            </motion.section>

            {/* Vroomlarda eğitim alanı */}
            <motion.section
              id="vroom-egitim"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-16 rounded-[2rem] border border-blue-200/70 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-[0_20px_60px_-20px_rgba(37,99,235,0.25)] md:mt-20 md:p-10"
            >
              <div className="grid items-center gap-8 lg:grid-cols-[240px_1fr]">
                <div className="mx-auto w-full max-w-[240px] rounded-2xl bg-[#0f50d8] p-4 shadow-lg shadow-blue-500/20">
                  <img
                    src="/brand/vroom-logo.png"
                    alt="Vroom Logo"
                    className="h-20 w-full object-contain"
                  />
                </div>

                <div className="text-left">
                  <h2 className="font-heading text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                    Vroom ile eğitimi{" "}
                    <span className="text-blue-600">daha odaklı ve daha etkili</span> hale getiriyoruz
                  </h2>
                  <p className="mt-3 max-w-3xl text-slate-600 md:text-lg">
                    Öğrenciler aynı ortamda buluşur, mentör rehberliğinde ilerler ve sınav sürecini düzenli takip eder.
                  </p>

                  <ul className="mt-6 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                    <li className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">Canlı Vroom oturumları ve anlık etkileşim</li>
                    <li className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">Konuya özel odalarda hedefe yönelik çalışma</li>
                    <li className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">Ders kayıtları ile hızlı tekrar imkanı</li>
                    <li className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">Mentör takibiyle düzenli gelişim planı</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Sanal Sınıf — zihin haritalarının üstünde */}
            <div
              id="sanal-sinif"
              className="mt-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-4 md:mt-28"
            >
              {/* Left Side: Blob and Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 relative flex justify-center items-center py-20"
              >
                {/* Organic animated blobs to mimic the yellow/blue shape */}
                <div
                  className="absolute w-[85%] h-[90%] bg-gradient-to-bl from-amber-400 to-amber-300 z-0 opacity-80"
                  style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                />
                <div
                  className="absolute w-[80%] h-[80%] bg-white/20 z-0 backdrop-blur-sm shadow-xl"
                  style={{ borderRadius: '40% 60% 70% 30% / 50% 60% 30% 60%' }}
                />

                {/* Floating Elements mimicking the icons */}
                <div className="absolute top-10 left-5 w-16 h-16 bg-blue-500 rounded-2xl shadow-[0_10px_30px_rgba(59,130,246,0.5)] z-20 flex items-center justify-center animate-bounce duration-1000">
                  <span className="text-3xl text-white">💬</span>
                </div>
                <div className="absolute bottom-5 right-10 w-14 h-14 bg-emerald-400 rounded-2xl shadow-[0_10px_30px_rgba(52,211,153,0.5)] z-20 flex items-center justify-center animate-bounce" style={{ animationDelay: '0.4s' }}>
                  <span className="text-2xl text-white">☁️</span>
                </div>

                {/* Fallback image if their vr-hero.png is absent, easily substitutable */}
                <img
                  src="/vr-hero.png"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2670&auto=format&fit=crop";
                  }}
                  alt="VR Education Character"
                  className="relative z-10 w-full max-w-sm rounded-[3rem] object-cover drop-shadow-2xl border-4 border-white aspect-[4/5] md:aspect-auto md:h-[450px]"
                />
              </motion.div>

              {/* Right Side: Copy Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 text-left"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight font-heading">
                  <span className="text-amber-500">Sanal Sınıf</span><br />
                  Modu ile Tam Odaklanma!
                </h2>
                <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                  Evde tek başınıza değil, sanki gerçekten bir sınıftaymışsınız gibi
                  öğretmeniniz ve diğer öğrencilerle etkileşime geçin. VR teknolojisi
                  sayesinde %100 odaklanma sağlayarak sınavlara hazırlığınızı en üst düzeye çıkarın.
                </p>
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full px-10 h-14 text-lg shadow-xl shadow-amber-500/30 transition-transform hover:-translate-y-1"
                  onClick={() => router.push("/basvur")}
                >
                  Hemen Başla!
                </Button>
              </motion.div>
            </div>

            {/* Zihin haritaları — sanal sınıfın altında */}
            <MindMapLearningSection />
          </div>
        </section>

        {/* Exam Categories */}
        <section id="exams" className="py-24 relative bg-slate-50 border-y border-slate-200">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-slate-900">
                Hangi Sınava Hazırlanıyorsunuz?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Her sınav grubu için özel olarak tasarlanmış VR müfredatları ve deneme simülasyonları.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 p-4 md:p-6 max-w-6xl mx-auto">
              {examCards.map((card, index) => {

                return (
                  <div
                    key={index}
                    className={`group relative p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-br ${card.color} transition-all duration-500 hover:scale-[1.02] ${card.shadow} shadow-xl h-full min-h-[380px] md:min-h-[420px]`}
                  >
                    <div className="bg-white/95 backdrop-blur-xl rounded-[0.9rem] md:rounded-[1.35rem] p-4 md:p-5 h-full min-h-0 flex flex-col overflow-hidden relative">
                      {/* Arka Plan Dekoratif Işıklar */}
                      <div className={`absolute -top-16 -right-16 w-32 h-32 md:w-36 md:h-36 bg-gradient-to-br ${card.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>

                      {/* Görsel: kartın üst kısmındaki tüm boşluğu doldurur, object-contain ile ortalanır */}
                      <div className="relative z-[1] flex-1 min-h-[160px] md:min-h-[180px] w-full mb-3 rounded-xl md:rounded-2xl overflow-hidden shadow-inner bg-slate-50/50 flex items-center justify-center p-1.5 md:p-2">
                        <img
                          src={`/assets/images/exams/${card.slug}.png`}
                          alt={card.title}
                          className="w-full h-full max-w-full max-h-full object-contain object-center drop-shadow-lg transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>

                      <div className="shrink-0 relative z-[1]">
                        {/* Yazı İçeriği */}
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-xs md:text-sm font-medium">
                          {card.desc}
                        </p>
                      </div>

                      {/* Buton Alanı */}
                      <div className="shrink-0 mt-auto pt-4 md:pt-5">
                        <button className="flex items-center gap-2 px-4 py-2.5 text-sm bg-gray-100/80 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-all active:scale-95 group/btn">
                          Ayrıntılı İncele
                          <MoveRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </section>
        {/* VR Features Section */}
        <section id="features" className="py-24 relative bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-slate-900">
                Neden <span className="text-purple-600">VR ile Eğitim?</span>
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Geleneksel yöntemlerin ötesine geçin. Öğrenmeyi deneyime dönüştürün.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vrFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-md transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics / Trust Lines */}
        <section className="py-12 border-y border-slate-200 bg-slate-50">
          <div className="container-width flex flex-wrap justify-center md:justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">10.000+ Dk</h4>
              <p className="text-sm text-slate-500 uppercase tracking-wider">VR Ders İçeriği</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">5.000+</h4>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Mutlu Öğrenci</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">%40</h4>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Daha Yüksek Kalıcılık</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">81 İl</h4>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Erişilebilirlik</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="scroll-mt-28 py-24 relative bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-slate-900">
                Öğrenci Yorumları
              </h2>
            </div>

            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent" />
              <div className="testimonial-track flex w-max gap-6 py-2">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <article
                    key={`${t.name}-${i}`}
                    className="w-[310px] rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="min-h-[118px] text-slate-600">
                      "{t.content}"
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-slate-200 text-sm font-bold text-slate-700">
                        {t.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{t.name}</h4>
                        <p className="text-sm text-slate-500">{t.exam}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SSS — navbar #faq */}
        <section id="faq" className="scroll-mt-28 py-24 relative bg-slate-50 border-y border-slate-200">
          <div className="container-width max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-slate-900 text-center">
              Sık sorulan sorular
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-xl mx-auto">
              VR eğitimi ve başvuru süreci hakkında merak edilenler.
            </p>
            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.q} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-semibold text-slate-900">{item.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen ? (
                      <div className="border-t border-slate-100 px-5 pb-4 pt-3 text-slate-600">
                        {item.a}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 pointer-events-none"></div>
          <div className="container-width relative z-10">
            <div className="relative rounded-3xl overflow-hidden bg-indigo-600 px-6 py-14 text-center md:px-16 md:py-18 shadow-2xl shadow-indigo-200 border border-indigo-500">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626379953822-baec8cd418e7?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30 grayscale"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-indigo-900/80 to-transparent"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-heading">
                  VR Gözlüğünüz Yok mu?
                </h2>
                <p className="text-indigo-100 text-base md:text-lg mb-7">
                  Endişelenmeyin! Kayıt olan ilk 100 öğrenciye VR başlığını biz gönderiyoruz veya bilgisayar/tablet üzerinden "Sanal Ekran" moduyla katılabilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-12 px-8 text-base bg-white text-indigo-950 hover:bg-slate-200 border-0 shadow-xl font-bold"
                    onClick={() => router.push("/basvur")}
                  >
                    Hemen Başvurun
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 text-base bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white hover:text-white"
                    onClick={() => {
                      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Detaylı Bilgi Alın
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <style jsx global>{`
        @keyframes testimonial-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        .testimonial-track {
          animation: testimonial-scroll 34s linear infinite;
        }
      `}</style>
    </div>
  );
}
