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

    // Parallax background
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

    // Staggered text reveal
    const elements = contentRef.current.children;
    gsap.fromTo(elements, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.15, 
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Image with Parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <Image 
          src="/hero-bg.png" 
          alt="Hero Background" 
          fill 
          className="object-cover"
          priority
        />
        {/* Dark Gradients */}
        <div className="absolute inset-0 bg-surface/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20 flex flex-col justify-center">
        <div ref={contentRef} className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-surface-highest bg-surface-low rounded-sm">
            <div className="w-2 h-2 bg-accent rotate-45" />
            <span className="font-mono text-xs font-bold tracking-wider text-primary">BAHÍA BLANCA — SHOWROOM EXCLUSIVO</span>
          </div>

          <div className="font-mono text-sm text-outline mb-4">
            LAT 38°43'S • SARMIENTO 778
          </div>
          
          <div className="font-mono text-xs md:text-sm text-accent mb-2">
            DIGITAL SHOWROOM & ARCHIVE — COLLECTION 2024 / 2025
          </div>

          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-primary leading-none mb-2">
            ROMBO
          </h1>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-surface-highest mb-6 uppercase tracking-tighter">
            Indumentaria
          </h2>

          <h3 className="text-xl md:text-2xl text-primary font-medium mb-6">
            Indumentaria Masculina & Perfumes Árabes
          </h3>

          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
            Moda urbana premium y fragancias orientales de nicho seleccionadas: Club de Nuit Intense, Lattafa, Afnan. Calidad de confección superior, corte brutalista impecable y atención personalizada directa sin intermediarios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-accent text-surface-lowest font-bold px-8 py-4 rounded-sm hover:bg-accent-dim transition-colors text-lg"
            >
              Contactanos por WhatsApp
            </a>
            <a 
              href="#coleccion" 
              className="inline-flex items-center justify-center bg-surface-high text-primary border border-surface-highest font-medium px-8 py-4 rounded-sm hover:bg-surface-highest transition-colors text-lg"
            >
              Ver Colección & Stock
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-surface-highest">
            {[
              "100% Originales",
              "Precios Accesibles",
              "Atención Inmediata",
              "Envíos Nacionales"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-outline rounded-full" />
                <span className="text-sm font-mono text-on-surface-variant">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
