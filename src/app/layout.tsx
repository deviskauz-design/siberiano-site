import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coccolami.ch"),
  title: {
    default: "Coccolami — Allevamento di gatti siberiani in Ticino",
    template: "%s · Coccolami",
  },
  description:
    "Allevamento famigliare di gatti siberiani e Neva Masquerade a Breganzona, Ticino. Cuccioli ipoallergenici cresciuti in casa, con pedigree, libretto sanitario e test genetici.",
  keywords: [
    "gatti siberiani",
    "neva masquerade",
    "allevamento ticino",
    "gatti ipoallergenici",
    "cuccioli siberiani svizzera",
  ],
  openGraph: {
    title: "Coccolami — Allevamento di gatti siberiani",
    description:
      "Cuccioli siberiani cresciuti in famiglia. Pedigree, ipoallergenici, allevamento responsabile.",
    type: "website",
    locale: "it_CH",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
