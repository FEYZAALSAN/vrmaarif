"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function HedefimizPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar />
      <main className="container-width flex flex-grow flex-col justify-center px-4 pb-28 pt-36 md:pb-32 md:pt-40">
        <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_-24px_rgba(79,70,229,0.35)] md:p-12">
          <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Geleceğin Eğitim Vizyonu: MetaAkademi ile Sınırları Aşın
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            MetaAkademi olarak biz, eğitimi dört duvar arasından çıkarıp sınırsız bir
            evrene taşıyoruz. Hedefimiz; sadece test çözmek değil, öğrenmeyi deneyime
            dönüştürmektir.
          </p>

          <h2 className="mt-8 text-xl font-bold text-slate-900">
            VR Gözlükle Yapay Zeka Destekli Öğrenme
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            Geleneksel çalışma düzeninin monotonluğunu geride bırakın. VR (Sanal
            Gerçeklik) teknolojimizle tarih dersinde bir antik kentin içinde
            yürüyebilir, kimya dersinde atomları kendi ellerinizle birleştirebilirsiniz.
            Teorik bilgiyi gerçek hayatla birleştirerek, ezberlemiyor, yaşıyoruz.
          </p>

          <h2 className="mt-8 text-xl font-bold text-slate-900">
            Analitik ve Kalıcı Öğrenme Süreci
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            Yapay zeka altyapımız, öğrenme sürecinizi her saniye analiz eder. Nerede
            zorlandığınızı, hangi konuyu ne kadar sürede kavradığınızı tespit ederek
            size özel bir yol haritası çıkarır. Amacımız, sınavda derece yapmanızdan
            önce, bilginin zihninizde kalıcı ve uygulanabilir olmasını sağlamaktır.
          </p>

          <h2 className="mt-8 text-xl font-bold text-slate-900">
            Eğitimde Yenilik, Sonuçta Mükemmeliyet
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            Eğitimde dijital devrimi temsil ediyoruz. Öğrencilerimizi sadece sınavlara
            değil, yapay zekanın hakim olduğu yeni dünyaya hazırlıyoruz. Sizi hayal
            ettiğiniz üniversiteye ve bölüme ulaştırmak bizim en büyük motivasyon
            kaynağımız.
          </p>

          <div className="mt-10 rounded-2xl border border-amber-300 bg-gradient-to-br from-amber-50 via-white to-yellow-50 p-6 shadow-[0_10px_30px_-18px_rgba(245,158,11,0.75)]">
            <h3 className="text-lg font-bold text-amber-900">
              Başarı Sözümüz ve Geri İade Garantisi
            </h3>
            <p className="mt-3 leading-relaxed text-amber-900/90">
              MetaAkademi sistemine ve metodolojimize olan güvenimiz tamdır.
            </p>
            <p className="mt-3 leading-relaxed text-amber-900/90">
              Taahhüdümüz net: Sizinle birlikte belirlediğimiz hedeflere ulaşmanız için
              tüm gücümüzle çalışıyoruz. Eğer MetaAkademi'nin sunduğu çalışma disiplinine
              ve analiz temelli eğitim programına tam katılım sağlamanıza rağmen
              hedeflediğiniz başarıya veya dereceye ulaşamazsanız, ücretinizin tamamını
              iade ediyoruz.
            </p>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Biz sadece bir akademi değiliz; hayallerinize giden yolda en teknolojik
            yol arkadaşınızız.
          </p>
          <Link
            href="/basvur"
            className="mt-8 inline-flex rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            Geleceğe İlk Adımı At
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

