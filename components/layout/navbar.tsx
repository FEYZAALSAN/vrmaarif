"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <motion.header
            className={cn(
                "fixed left-0 right-0 top-10 z-50 transition-all duration-300",
                isScrolled ? "glass py-3" : "bg-transparent py-5"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container-width flex items-center justify-between gap-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="z-50 min-w-0 max-w-[calc(100vw-5rem)] shrink rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 md:max-w-none"
                >
                    <span className="flex min-w-0 items-center gap-0 md:gap-0.5">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:h-14 sm:w-14 md:h-16 md:w-16">
                            <Image
                                src="/brand/metakademi-logo.png?v=20260401"
                                alt="MetaAkademi logo"
                                width={56}
                                height={56}
                                priority
                                unoptimized
                                className="h-[122%] w-[122%] max-w-none object-contain"
                            />
                        </span>
                        <Image
                            src="/brand/metaakademi-wordmark.png?v=20260401b"
                            alt="MetaAkademi yazı logosu"
                            width={400}
                            height={120}
                            priority
                            unoptimized
                            className="h-10 w-auto max-h-10 max-w-[min(200px,calc(100vw-6.75rem))] min-w-0 object-contain object-left -ml-4 sm:h-12 sm:max-h-12 sm:max-w-[min(240px,calc(100vw-7rem))] md:-ml-6 md:h-20 md:max-h-none md:max-w-none"
                        />
                    </span>
                </Link>

                {/* Center nav between logo and login */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-12 text-base font-semibold text-slate-700">
                    <Link href="#features" className="rounded-md px-1 py-0.5 transition-all duration-200 hover:-translate-y-1.5 hover:text-primary hover:drop-shadow-[0_2px_8px_rgba(79,70,229,0.35)]">
                        Koçluk
                    </Link>
                    <Link href="/hedefimiz" className="rounded-md px-1 py-0.5 transition-all duration-200 hover:-translate-y-1.5 hover:text-primary hover:drop-shadow-[0_2px_8px_rgba(79,70,229,0.35)]">
                        Hedefimiz
                    </Link>
                    <Link href="#testimonials" className="rounded-md px-1 py-0.5 transition-all duration-200 hover:-translate-y-1.5 hover:text-primary hover:drop-shadow-[0_2px_8px_rgba(79,70,229,0.35)]">
                        Derecelerimiz
                    </Link>
                    <Link href="#features" className="rounded-md px-1 py-0.5 transition-all duration-200 hover:-translate-y-1.5 hover:text-primary hover:drop-shadow-[0_2px_8px_rgba(79,70,229,0.35)]">
                        Biz Kimiz
                    </Link>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-700 dark:text-slate-300"
                        onClick={() => router.push("/giris")}
                    >
                        Giriş Yap
                    </Button>
                    <Button size="sm" onClick={() => router.push("/basvur")}>
                        Hemen Başvur
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-slate-700 dark:text-slate-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 z-40 flex min-h-screen w-full flex-col items-stretch justify-center gap-2 bg-white/95 px-6 py-10 backdrop-blur-xl md:hidden dark:bg-slate-950/95"
                    >
                        <nav className="mx-auto flex w-full max-w-sm flex-col gap-1 text-center text-base font-semibold text-slate-700">
                            <Link
                                href="/#features"
                                className="rounded-xl py-3 transition-colors hover:bg-violet-50 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Koçluk
                            </Link>
                            <Link
                                href="/hedefimiz"
                                className="rounded-xl py-3 transition-colors hover:bg-violet-50 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Hedefimiz
                            </Link>
                            <Link
                                href="/#testimonials"
                                className="rounded-xl py-3 transition-colors hover:bg-violet-50 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Derecelerimiz
                            </Link>
                            <Link
                                href="/#features"
                                className="rounded-xl py-3 transition-colors hover:bg-violet-50 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Biz Kimiz
                            </Link>
                        </nav>
                        <div className="mx-auto mt-6 flex w-full max-w-sm flex-col gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
                            <Button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    router.push("/giris");
                                }}
                                variant="outline"
                                className="w-full"
                            >
                                Giriş Yap
                            </Button>
                            <Button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    router.push("/basvur");
                                }}
                                className="w-full"
                            >
                                Hemen Başvur
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
}
