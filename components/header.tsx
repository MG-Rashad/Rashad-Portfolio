"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";

interface HeaderProps {
  dict: {
    nav: {
      about: string;
      skills: string;
      services: string;
      certifications: string;
      contact: string;
      subtitle: string;
    };
  };
  locale: Locale;
}

const languageLabels: Record<Locale, string> = {
  en: "English",
  ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
  fr: "Fran\u00E7ais",
};

export function Header({ dict, locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "#about", label: dict.nav.about },
    { href: "#skills", label: dict.nav.skills },
    { href: "#services", label: dict.nav.services },
    { href: "#certifications", label: dict.nav.certifications },
    { href: "#contact", label: dict.nav.contact },
  ];

  function switchLocale(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || `/${newLocale}`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto max-w-6xl px-6 py-3">
        {/* Top row: Logo left, Language switcher right, Nav centered */}
        <div className="flex items-center justify-between">
          {/* Logo + Name + Subtitle */}
          <div className="flex flex-shrink-0 items-center gap-3">
            <Link href={`/${locale}`} className="flex-shrink-0">
              <Image
                src="/logo1.png"
                alt="RNJ Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
            <div>
              <Link
                href={`/${locale}`}
                className="font-heading text-lg font-bold tracking-tight text-accent"
              >
                Rashad N. Almejrab
              </Link>
              <p className="text-[11px] leading-tight text-muted-foreground">
                {dict.nav.subtitle}
              </p>
            </div>
          </div>

          {/* Centered Nav (desktop) */}
          <nav
            className="hidden flex-1 items-center justify-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: Language switcher (desktop) + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Language Switcher - desktop */}
            <div className="relative hidden group lg:block">
              <button
                className="flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                aria-label="Switch language"
              >
                <Globe className="h-4 w-4" />
                {languageLabels[locale]}
              </button>
              <div className="invisible absolute end-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="rounded-lg border border-border bg-card p-1 shadow-lg">
                  {(["en", "ar", "fr"] as Locale[]).map((lang) => (
                    <Link
                      key={lang}
                      href={switchLocale(lang)}
                      className={`block whitespace-nowrap rounded-md px-4 py-2 text-sm transition-colors hover:bg-secondary ${
                        locale === lang
                          ? "font-semibold text-accent"
                          : "text-foreground"
                      }`}
                    >
                      {languageLabels[lang]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="border-t border-border bg-card px-6 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 border-t border-border pt-4">
              {(["en", "ar", "fr"] as Locale[]).map((lang) => (
                <Link
                  key={lang}
                  href={switchLocale(lang)}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                    locale === lang
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-secondary text-foreground hover:bg-muted"
                  }`}
                >
                  {languageLabels[lang]}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
