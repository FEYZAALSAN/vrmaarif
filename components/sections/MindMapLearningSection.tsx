"use client";

import { motion } from "framer-motion";
import {
  Brain,
  GitBranch,
  ImageIcon,
  Palette,
  RefreshCw,
  Link2,
  Sparkles,
} from "lucide-react";

const BRANCHES = [
  {
    title: "Zihin haritaları",
    desc: "Merkezdeki konuyu dallara ayırın; ilişkileri tek bakışta görün, unutmayı azaltın.",
    icon: GitBranch,
    color: "from-sky-500 to-blue-600",
    border: "border-sky-400/50",
    delay: 0.05,
  },
  {
    title: "Görsel özet",
    desc: "Soyut kavramları şema ve diyagramlarla somutlaştırın; çalışma notlarınız hafızanıza kazınır.",
    icon: ImageIcon,
    color: "from-emerald-500 to-teal-600",
    border: "border-emerald-400/50",
    delay: 0.1,
  },
  {
    title: "Renk & kodlama",
    desc: "Her temayı bir renkle eşleştirin; sınavda aynı ‘dal’ zihninizde canlanır.",
    icon: Palette,
    color: "from-amber-500 to-orange-600",
    border: "border-amber-400/50",
    delay: 0.15,
  },
  {
    title: "Aktif tekrar",
    desc: "Okumak yetmez: soru çözün, VR simülasyonunda pekiştirin; bilgi uzun süre kalır.",
    icon: RefreshCw,
    color: "from-rose-500 to-pink-600",
    border: "border-rose-400/50",
    delay: 0.2,
  },
  {
    title: "Bağlantı kurma",
    desc: "Yeni bilgiyi eskiyle ilişkilendirin; zihin haritasındaki ‘kökler’ güçlendikçe öğrenme hızlanır.",
    icon: Link2,
    color: "from-violet-500 to-purple-600",
    border: "border-violet-400/50",
    delay: 0.25,
  },
  {
    title: "Derin odak (VR)",
    desc: "Sanal sınıfta dış uyaranları kesin; zihin haritanızı sessizce inşa edin.",
    icon: Sparkles,
    color: "from-indigo-500 to-indigo-700",
    border: "border-indigo-400/50",
    delay: 0.3,
  },
];

/** Dekoratif organik çizgiler — merkezden uzanan dallar */
function MindMapBackdrop({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="mm-blue" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="1" stopColor="#6366f1" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="mm-green" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#34d399" stopOpacity="0.3" />
          <stop offset="1" stopColor="#14b8a6" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="mm-warm" x1="1" y1="0" x2="0" y2="1">
          <stop stopColor="#fbbf24" stopOpacity="0.28" />
          <stop offset="1" stopColor="#f472b6" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <path
        d="M450 340 C 280 320 120 180 80 120 M450 340 C 620 300 780 160 820 100 M450 340 C 300 400 140 520 100 600 M450 340 C 600 420 760 540 800 620 M450 340 C 450 200 450 80 450 40 M450 340 C 200 340 60 340 20 340 M450 340 C 700 340 840 340 880 340"
        stroke="url(#mm-blue)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M450 340 Q 320 260 220 200 M450 340 Q 580 260 680 200 M450 340 Q 320 420 240 520 M450 340 Q 580 420 660 520"
        stroke="url(#mm-green)"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M450 340 Q 380 240 340 140 M450 340 Q 520 240 560 140 M450 340 Q 380 440 340 540 M450 340 Q 520 440 560 540"
        stroke="url(#mm-warm)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="450" cy="340" r="28" fill="#a855f7" fillOpacity="0.15" />
      <circle cx="450" cy="340" r="12" fill="#6366f1" fillOpacity="0.25" />
    </svg>
  );
}

export function MindMapLearningSection() {
  const left = BRANCHES.slice(0, 3);
  const right = BRANCHES.slice(3, 6);

  return (
    <div
      id="mindmap"
      className="relative mt-28 w-full overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-violet-50/40 px-4 py-16 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.12)] md:mt-32 md:rounded-[2.5rem] md:px-8 md:py-20"
    >
      <MindMapBackdrop className="pointer-events-none absolute left-1/2 top-1/2 h-[min(120%,900px)] w-[min(140%,1200px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.55] md:opacity-70" />

      <div className="relative z-[1] mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 shadow-sm backdrop-blur-sm">
            <Brain className="h-3.5 w-3.5" />
            Öğrenme mimarisi
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Zihin haritalarıyla{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
              akılda kalıcı
            </span>{" "}
            yöntemler
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Karmaşık konuları dallar ve renklerle düzenleyin. MetAkademi, bu yöntemi sanal sınıf ve VR
            odak moduyla birleştirerek bilgiyi hem yapılandırır hem de pekiştirir.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-10 lg:grid-cols-[1fr_minmax(200px,260px)_1fr] lg:gap-6">
          {/* Sol dallar */}
          <div className="flex flex-col gap-5 lg:gap-6">
            {left.map((b, i) => (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: b.delay }}
                className={`group relative rounded-2xl border-2 ${b.border} bg-white/90 p-5 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:p-6`}
              >
                <div
                  className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${b.color} text-white shadow-md`}
                >
                  <b.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 md:text-xl">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-[0.9375rem]">{b.desc}</p>
              </motion.article>
            ))}
          </div>

          {/* Merkez göbek */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex min-h-[200px] flex-col items-center justify-center lg:min-h-0"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-violet-400/20 via-fuchsia-400/15 to-cyan-400/20 blur-2xl" />
            <div className="relative flex aspect-square w-full max-w-[220px] flex-col items-center justify-center rounded-[2rem] border-4 border-dashed border-violet-300/60 bg-white p-6 text-center shadow-[0_12px_40px_-12px_rgba(124,58,237,0.35)] ring-4 ring-violet-100/80 lg:max-w-none lg:translate-y-4">
              <span className="font-[family-name:var(--font-caveat)] text-2xl font-semibold leading-tight text-violet-800 md:text-3xl">
                Öğrenmenin
                <br />
                merkezi
              </span>
              <span className="mt-3 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold tracking-wide text-white">
                MetAkademi
              </span>
              <p className="mt-3 text-[11px] leading-snug text-slate-500 md:text-xs">
                Her dal bir yöntem — hepsi birlikte güçlü bir hafıza ağı kurar.
              </p>
            </div>
          </motion.div>

          {/* Sağ dallar */}
          <div className="flex flex-col gap-5 lg:gap-6">
            {right.map((b) => (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: b.delay }}
                className={`group relative rounded-2xl border-2 ${b.border} bg-white/90 p-5 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:p-6`}
              >
                <div
                  className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${b.color} text-white shadow-md`}
                >
                  <b.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 md:text-xl">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-[0.9375rem]">{b.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-12 text-center font-[family-name:var(--font-caveat)] text-xl text-slate-500 md:text-2xl"
        >
          Sanal sınıfta odaklanırken — öğrenmeyi görselleştirme yöntemlerinizi yanınızda tutun ✦
        </motion.p>
      </div>
    </div>
  );
}
