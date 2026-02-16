import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "System Administrator & Remote IT Services | Rashad N. Almejrab",
  description:
    "Professional system administration, remote IT support, Microsoft 365 services, and modern website development.",
  generator: "Next.js",
};

export const viewport: Viewport = {
  themeColor: "#1a3a5c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="ar" href="/ar" />
        <link rel="alternate" hrefLang="fr" href="/fr" />
        <link rel="alternate" hrefLang="x-default" href="/en" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
