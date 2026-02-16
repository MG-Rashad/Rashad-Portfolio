import React from "react";
import type { Metadata } from "next";
import { DM_Sans, Barlow, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isRtl, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
        fr: "/fr",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const rtl = isRtl(locale);

  return (
    <div dir={rtl ? "rtl" : "ltr"} className={`${dmSans.variable} ${barlow.variable} ${rtl ? notoArabic.variable : ""}`}>
      <Header dict={dict} locale={locale} />
      <main>{children}</main>
      <Footer dict={dict} />
    </div>
  );
}
