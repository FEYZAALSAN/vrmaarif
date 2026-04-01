import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import { CampaignTicker } from "@/components/layout/CampaignTicker";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MetAkademi | VR ile Sınav Hazırlığı",
  description:
    "MetAkademi — YKS, LGS, KPSS ve daha fazlası için VR destekli sınav hazırlığı ve sanal sınıf deneyimi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${caveat.variable} antialiased bg-white text-slate-900`}
      >
        <CampaignTicker />
        {children}
      </body>
    </html>
  );
}
