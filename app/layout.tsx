import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "San Antón Trail — La conquista del Molino",
  description:
    "Trail por los campos y senderos de Puerto Lápice. La carrera con la que empiezas el año. Senderismo 10K y Carrera 15.2K en enero.",
  keywords: [
    "trail running",
    "carrera popular",
    "carrera enero",
    "Puerto Lápice",
    "Ciudad Real",
    "La Mancha",
    "San Antón",
    "carrera trail",
  ],
  openGraph: {
    title: "San Antón Trail — La conquista del Molino",
    description:
      "Trail por los campos y senderos de Puerto Lápice. 11 de enero · Puerto Lápice, Ciudad Real.",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0B0B0B] text-white">{children}</body>
    </html>
  );
}