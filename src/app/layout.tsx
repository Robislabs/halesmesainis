import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"], variable: "--font-display" });
const body = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Halės Mėsainis — Pirmieji smash burgeriai Vilniuje",
  description: "Sausai brandinta lietuviška Black Angus jautiena, vietoje keptos bandelės. Halės turgavietėje nuo 2021.",
  openGraph: {
    title: "Halės Mėsainis",
    description: "Pirmieji smash burgeriai Vilniuje. Nuo 2021.",
    images: ["/og-image.jpg"],
    locale: "lt_LT",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
