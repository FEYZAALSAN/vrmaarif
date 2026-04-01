import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { email?: string; password?: string; phone?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  const password = String(body.password ?? "");
  const phone = String(body.phone ?? "").replace(/\D/g, "");

  // Telefonla giriş akışı
  if (phone) {
    if (phone.length !== 10) {
      return NextResponse.json(
        { error: "Telefon numarasını 10 hane girin." },
        { status: 400 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Geçerli bir e-posta girin." }, { status: 400 });
  }

  if (password.length < 4) {
    return NextResponse.json(
      { error: "Şifre en az 4 karakter olmalıdır." },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true });
}
