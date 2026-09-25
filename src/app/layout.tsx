import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.clinicName} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "diş hekimi", "diş kliniği", "istanbul diş hekimi", "implant",
    "estetik diş", "hollywood smile", "ortodonti", "diş beyazlatma",
    siteConfig.clinicShortName, siteConfig.doctor.name,
  ],
  openGraph: {
    title: `${siteConfig.clinicName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
