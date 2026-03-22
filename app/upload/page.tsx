"use client";

import { useState } from "react";

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState("");

    const handleUpload = async () => {
        if (!file) return;
        setStatus("Yükleniyor... Lütfen bekleyin. Görselinizi sayfanıza ekliyorum!");

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setStatus("✅ Harika! Görseli projeye başarıyla taşıdım! Artık http://localhost:3000 adresine gidip o güzel resmi yerinde görebilirsiniz.");
            } else {
                setStatus("❌ Bir sorun oluştu. Lütfen tekrar deneyin.");
            }
        } catch (e) {
            setStatus("❌ Sunucuya bağlanırken hata oluştu.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-10 text-center border-t-8 border-amber-400">
                <h1 className="text-3xl font-extrabold text-slate-900 mb-4 font-heading tracking-tight">Görsel Yükleme Asistanı</h1>
                <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                    Lütfen sohbete attığınız o harika görseli bilgisayarınıza <b>"Kaydet"</b> dedikten sonra bana buraya tıklayarak gönderin. Hemen sayfanıza entegre edeyim!
                </p>

                <label className="block w-full border-4 border-dashed border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 rounded-2xl p-10 mb-8 cursor-pointer transition-all duration-300">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="hidden"
                    />
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-4xl shadow-sm">
                            📸
                        </div>
                        <span className="font-semibold text-slate-700 text-lg">
                            {file ? file.name : "Buraya tıklayın ve indirdiğiniz resmi seçin 👆"}
                        </span>
                    </div>
                </label>

                <button
                    onClick={handleUpload}
                    disabled={!file}
                    className="w-full h-16 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xl font-bold rounded-2xl transition-all shadow-xl shadow-amber-500/30"
                >
                    Görseli Sisteme Yükle!
                </button>

                {status && (
                    <div className="mt-8 p-6 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 text-base font-medium shadow-inner">
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
}
