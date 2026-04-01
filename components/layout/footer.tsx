import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-800 py-12">
            <div className="container-width">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link
                            href="/"
                            className="mb-4 inline-block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40"
                        >
                            <span className="flex items-center gap-0">
                                <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg">
                                    <Image
                                        src="/brand/metakademi-logo.png?v=20260401"
                                        alt="MetaAkademi logo"
                                        width={48}
                                        height={48}
                                        unoptimized
                                        className="h-[122%] w-[122%] max-w-none object-contain"
                                    />
                                </span>
                                <Image
                                    src="/brand/metaakademi-wordmark.png?v=20260401b"
                                    alt="MetaAkademi yazı logosu"
                                    width={320}
                                    height={96}
                                    unoptimized
                                    className="h-14 w-auto -ml-6 object-contain"
                                />
                            </span>
                        </Link>
                        <p className="text-sm text-slate-500 max-w-xs">
                            Geleceğinizi şekillendirmek için ihtiyacınız olan rehberlik ve destek burada.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">YKS Hazırlık</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">VR Sınıflar</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Paketler</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Kaynaklar</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Kariyer Rehberi</Link></li>
                            <li><Link href="/#faq" className="hover:text-primary transition-colors">SSS</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">İletişim</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li>info@metakademi.com</li>
                            <li>+90 555 555 55 55</li>
                            <li className="flex gap-4 mt-4">
                                {/* Social Icons would go here */}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} MetAkademi. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
}
