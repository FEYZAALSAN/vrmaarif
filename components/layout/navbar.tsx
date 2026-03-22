"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MetAkademiLogo } from "@/components/brand/MetAkademiLogo";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    const navLinks = [
        { name: "Sınavlar", href: "#exams" },
        { name: "Sanal Sınıf", href: "#sanal-sinif" },
        { name: "Zihin Haritası", href: "#mindmap" },
        { name: "VR Teknolojisi", href: "#features" },
        { name: "Başarılar", href: "#testimonials" },
        { name: "SSS", href: "#faq" },
    ];

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "glass py-3" : "bg-transparent py-5"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container-width flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 rounded-xl">
                    <MetAkademiLogo size="md" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-700 hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-slate-700 dark:text-slate-300">
                        Giriş Yap
                    </Button>
                    <Button size="sm">Hemen Başvur</Button>
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
                        className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden dark:bg-slate-950/95"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-semibold text-slate-800 dark:text-slate-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-4 mt-8 w-full px-8">
                            <Button onClick={() => setIsMobileMenuOpen(false)} variant="outline" className="w-full">
                                Giriş Yap
                            </Button>
                            <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                                Hemen Başvur
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
}
