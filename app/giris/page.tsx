"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function GirisPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/giris", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(typeof data.error === "string" ? data.error : "Giriş yapılamadı.");
        return;
      }
      router.push("/?giris=ok");
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
            src="/brand/giris-side-visual.png"
            alt="Giriş görseli"
            width={1024}
            height={768}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-full items-center justify-center px-4 py-10 lg:w-1/2">
        <div className="w-full max-w-[430px] rounded-3xl border border-violet-100 bg-[#eeecf8] p-7 shadow-[0_18px_45px_-24px_rgba(79,70,229,0.45)] md:p-8">
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
            Telefon ile Giriş Yap
          </h1>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="giris-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                Telefon Numarası
              </label>
              <input
                id="giris-phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="5xx xxx xx xx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              />
              <p className="mt-2 text-xs text-slate-500">
                Telefon numaranızı başında 0 olmadan, 10 hane olarak giriniz.
              </p>
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
              {loading ? "Gönderiliyor…" : "Giriş Kodu Gönder"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            <Link href="/basvur" className="font-semibold text-violet-700 hover:text-violet-800">
              Hesabınız yok mu? Hemen başvurun
            </Link>
          </p>
          <p className="mt-3 text-center">
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
