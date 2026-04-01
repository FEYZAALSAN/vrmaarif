import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: {
    fullName?: string;
    email?: string;
    phone?: string;
    exam?: string;
    message?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const fullName = String(body.fullName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim().replace(/\s/g, "");
  const exam = String(body.exam ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (fullName.length < 2) {
    return NextResponse.json({ error: "Ad soyad girin." }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Geçerli bir e-posta girin." }, { status: 400 });
  }

  if (phone.length < 10) {
    return NextResponse.json(
      { error: "Geçerli bir telefon numarası girin." },
      { status: 400 }
    );
  }

  if (!exam) {
    return NextResponse.json({ error: "Sınav türü seçin." }, { status: 400 });
  }

  // Sunucu tarafında buraya e-posta / veritabanı entegrasyonu eklenebilir.
  return NextResponse.json({ ok: true, message: message || undefined });
}
