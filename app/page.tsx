"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, MonitorPlay, Target, Trophy, Glasses, PenTool, Globe, MoveRight } from "lucide-react";
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
    name: "Elif Demir",
    exam: "YKS - Eşit Ağırlık 500.",
    content: "Matematik konularını 3 boyutlu görmek inanılmazdı. VR gözlükle çalışmak odağımı 2 katına çıkardı.",
    avatar: "ED",
  },
  {
    name: "Caner Yılmaz",
    exam: "LGS - %0.1 Dilim",
    content: "Sanal sınıfta mentörümle soru çözerken sanki gerçekten yanımdaymış gibi hissettim.",
    avatar: "CY",
  },
  {
    name: "Selin Kaya",
    exam: "KPSS - P3 92 Puan",
    content: "Ev ortamında dikkatim çok dağılıyordu. VR odaklanma modu sayesinde verimli çalıştım.",
    avatar: "SK",
  },
];

export default function Home() {
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 shadow-[0_1px_0_rgb(255_255_255/0.9)_inset,0_8px_32px_-8px_rgb(99_102_241/0.18)] ring-1 ring-indigo-500/[0.08] backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 shadow-[0_0_12px_rgb(139_92_246/0.6)]" />
              <Glasses className="h-4 w-4 text-violet-600" />
              <span className="text-sm font-medium tracking-tight text-slate-700">
                Geleceğin Eğitim Teknolojisi Şimdi Evinizde
              </span>
            </motion.div>

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
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full px-10 h-14 text-lg shadow-xl shadow-amber-500/30 transition-transform hover:-translate-y-1">
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
        <section className="py-24 relative bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-slate-900">
                Derece Yapan Öğrencilerimiz
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="absolute top-8 right-8 text-yellow-500/20">
                    <Trophy className="w-10 h-10 fill-current" />
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-800 font-bold text-lg">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{t.name}</h4>
                      <p className="text-xs text-indigo-600 font-semibold">{t.exam}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic">"{t.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 pointer-events-none"></div>
          <div className="container-width relative z-10">
            <div className="relative rounded-3xl overflow-hidden bg-indigo-600 px-6 py-20 text-center md:px-20 md:py-28 shadow-2xl shadow-indigo-200 border border-indigo-500">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626379953822-baec8cd418e7?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30 grayscale"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-indigo-900/80 to-transparent"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                  VR Gözlüğünüz Yok mu?
                </h2>
                <p className="text-indigo-100 text-lg mb-10">
                  Endişelenmeyin! Kayıt olan ilk 100 öğrenciye VR başlığını biz gönderiyoruz veya bilgisayar/tablet üzerinden "Sanal Ekran" moduyla katılabilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 px-10 text-lg bg-white text-indigo-950 hover:bg-slate-200 border-0 shadow-xl font-bold">
                    Hemen Başvurun
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-10 text-lg bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white hover:text-white">
                    Detaylı Bilgi Alın
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
