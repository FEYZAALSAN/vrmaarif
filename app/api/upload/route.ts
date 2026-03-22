import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File | null;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Yüklenen dosyayı doğrudan uygulamanın ana dizinindeki "public" klasörüne bırakıyoruz.
        const filePath = path.join(process.cwd(), 'public', 'vr-hero.png');

        fs.writeFileSync(filePath, buffer);
        return NextResponse.json({ success: true, message: "File uploaded successfully" });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
    }
}
