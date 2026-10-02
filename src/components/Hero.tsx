"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bgRef.current || !contentRef.current) return;

    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    const elements = contentRef.current.children;
    gsap.fromTo(elements,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center pt-16 lg:pt-24 overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-surface/70 lg:bg-surface/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-12 lg:py-20 flex flex-col justify-center">
        <div ref={contentRef} className="max-w-4xl w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 lg:mb-8 border border-surface-highest bg-surface-low/80 backdrop-blur-sm">
            <div className="w-2 h-2 bg-accent rotate-45" />
            <span className="font-mono text-[10px] lg:text-xs font-bold tracking-widest text-primary">BAHÍA BLANCA — SHOWROOM EXCLUSIVO</span>
          </div>

          <div className="font-mono text-[11px] lg:text-sm text-outline mb-3 lg:mb-4">
            LAT 38°43&apos;S &bull; SARMIENTO 778
          </div>

          <div className="font-mono text-[10px] lg:text-xs md:text-sm text-accent mb-2 lg:mb-3">
            DIGITAL SHOWROOM & ARCHIVE — COLLECTION 2024 / 2025
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight text-primary leading-[0.9] mb-1 lg:mb-2">
            ROMBO
          </h1>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-surface-highest mb-4 lg:mb-6 uppercase tracking-tighter">
            Indumentaria
          </h2>

          <h3 className="text-lg md:text-xl lg:text-2xl text-primary font-medium mb-4 lg:mb-6">
            Indumentaria Masculina & Perfumes Árabes
          </h3>

          <p className="text-sm md:text-base lg:text-lg text-on-surface-variant max-w-2xl mb-8 lg:mb-10 leading-relaxed">
            Moda urbana premium y fragancias orientales de nicho seleccionadas: Club de Nuit Intense, Lattafa, Afnan. Calidad de confección superior y atención personalizada directa sin intermediarios.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-accent text-surface-lowest font-bold px-6 py-3.5 lg:px-8 lg:py-4 rounded-sm hover:bg-accent-dim transition-colors text-sm lg:text-lg min-h-[48px]"
            >
              Contactanos por WhatsApp
            </a>
            <a
              href="#coleccion"
              className="inline-flex items-center justify-center bg-surface-high/90 backdrop-blur-sm text-primary border border-surface-highest font-medium px-6 py-3.5 lg:px-8 lg:py-4 rounded-sm hover:bg-surface-highest transition-colors text-sm lg:text-lg min-h-[48px]"
            >
              Ver Colección & Stock
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 pt-6 lg:pt-8 border-t border-surface-highest">
            {[
              "100% Originales",
              "Precios Accesibles",
              "Atención Inmediata",
              "Envíos Nacionales"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-outline shrink-0" />
                <span className="text-[11px] lg:text-sm font-mono text-on-surface-variant">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
