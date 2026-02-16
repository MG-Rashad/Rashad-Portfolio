"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  label: string;
  caption: string;
}

interface HeroProps {
  dict: {
    hero: {
      title: string;
      titleLine2: string;
      titleLine3: string;
      tagline: string;
      ctaServices: string;
      ctaContact: string;
      slides: Slide[];
    };
  };
}

export function HeroSection({ dict }: HeroProps) {
  const slides = dict.hero.slides;
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* ---- Full-screen images ---- */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.label}
            fill
            className="object-cover"
            sizes="100vw"
            quality={100}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Bottom gradient only -- lets images stay clear at top/center */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      {/* ---- Centered text content ---- */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
          <span className="block">{dict.hero.title}</span>
          <span className="block text-white/80">
            {dict.hero.titleLine2}
          </span>
          <span className="block text-accent">{dict.hero.titleLine3}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg text-white/85 drop-shadow-md md:text-xl">
          {dict.hero.tagline}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            {dict.hero.ctaServices}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            {dict.hero.ctaContact}
          </a>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide label badge */}
      <div className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2">
        <div className="rounded-full bg-white/15 px-5 py-2 text-center backdrop-blur-md">
          <span className="text-sm font-semibold text-accent">
            {slides[current].label}
          </span>
          <span className="mx-2 text-white/40">{"/"}</span>
          <span className="text-xs text-white/75">
            {slides[current].caption}
          </span>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current
                ? "w-8 bg-accent"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={slide.label}
          />
        ))}
      </div>
    </section>
  );
}
