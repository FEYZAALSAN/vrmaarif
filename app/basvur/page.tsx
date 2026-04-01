"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const examOptions = [
  { value: "", label: "Seçin" },
  { value: "yks", label: "YKS (TYT–AYT)" },
  { value: "lgs", label: "LGS" },
  { value: "kpss", label: "KPSS" },
  { value: "dgs", label: "DGS" },
  { value: "ydt", label: "YDT / dil" },
  { value: "diger", label: "Diğer" },
] as const;

export default function BasvurPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [exam, setExam] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/basvur", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, exam, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(typeof data.error === "string" ? data.error : "Başvuru gönderilemedi.");
        return;
      }
      setDone(true);
    } catch {
      setError("Bağlantı hatası. Tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7fb]">
      <main className="flex min-h-screen w-full">
        <div className="hidden w-1/2 lg:block">
          <Image
            src="/brand/basvur-side-visual.png"
            alt="Başvuru görseli"
            width={1024}
            height={768}
            unoptimized
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex w-full items-center justify-center px-4 py-10 lg:w-1/2">
          <div className="w-full max-w-[460px] rounded-3xl border border-violet-100 bg-[#eeecf8] p-7 shadow-[0_18px_45px_-24px_rgba(79,70,229,0.45)] md:p-8">
            <div className="mb-7 flex items-center justify-center">
              <Link href="/" className="rounded-xl transition hover:scale-[1.03]">
                <Image
                  src="/brand/giris-top-logo.png?v=20260401c"
                  alt="MetaAkademi logo"
                  width={360}
                  height={100}
                  unoptimized
                  className="h-20 w-auto object-contain md:h-24"
                />
              </Link>
            </div>
            <h1 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
              Hemen Başvur
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Bilgilerinizi bırakın; ekibimiz size en kısa sürede dönüş yapsın.
            </p>

            {done ? (
              <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50/80 p-6 text-center">
                <p className="font-semibold text-emerald-900">Başvurunuz alındı.</p>
                <p className="mt-2 text-sm text-emerald-800">
                  Teşekkür ederiz. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <Link
                  href="/"
                  className="mt-6 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800"
                >
                  Ana sayfaya dön
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label htmlFor="basvur-name" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Ad Soyad
                  </label>
                  <input
                    id="basvur-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="basvur-email" className="mb-1.5 block text-sm font-medium text-slate-700">
                    E-posta
                  </label>
                  <input
                    id="basvur-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="basvur-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Telefon
                  </label>
                  <input
                    id="basvur-phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="5xx xxx xx xx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="basvur-exam" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Hazırlandığınız sınav
                  </label>
                  <select
                    id="basvur-exam"
                    required
                    value={exam}
                    onChange={(e) => setExam(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
                  >
                    {examOptions.map((o) => (
                      <option key={o.value || "empty"} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="basvur-message" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Mesajınız (isteğe bağlı)
                  </label>
                  <textarea
                    id="basvur-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
                  />
                </div>

                {error ? (
                  <p className="text-sm font-medium text-red-600" role="alert">
                    {error}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  className="h-12 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500 font-semibold text-white hover:from-indigo-500 hover:to-violet-400"
                  disabled={loading}
                >
                  {loading ? "Gönderiliyor…" : "Başvuruyu Gönder"}
                </Button>
              </form>
            )}
            <p className="mt-6 text-center">
              <Link href="/giris" className="text-sm font-semibold text-violet-700 hover:text-violet-800">
                Zaten hesabım var — giriş yap
              </Link>
            </p>
            <p className="mt-2 text-center">
              <Link href="/" className="text-sm text-slate-500 hover:text-slate-700">
                ← Ana sayfaya dön
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
