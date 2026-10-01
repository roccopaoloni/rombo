"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PerfumeFeature() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(imageRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    ).fromTo(contentRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );
  }, []);

  return (
    <section id="perfumes" ref={containerRef} className="py-24 bg-surface-lowest overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Column - Image */}
          <div ref={imageRef} className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] w-full border-2 border-surface-highest p-4 bg-surface">
              <div className="relative w-full h-full bg-surface-high overflow-hidden">
                <Image 
                  src="/perfume.png" 
                  alt="Perfumería Nicho Árabe" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent flex items-center justify-center p-4">
                <span className="font-heading font-bold text-surface-lowest text-center leading-none text-xl uppercase transform -rotate-12">
                  Top Seller
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div ref={contentRef} className="w-full lg:w-1/2 lg:pl-10">
            <div className="font-mono text-sm text-accent mb-4 tracking-widest uppercase">
              SELECCIÓN NICHO IMPORTADA // DUBAI & EMIRATOS
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              EL FENÓMENO DE LA PERFUMERÍA ÁRABE
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
              Las casas perfumistas de Medio Oriente han revolucionado el mercado global. Ofrecen extractos de parfum con una concentración y longevidad que supera ampliamente a la perfumería comercial occidental tradicional, manteniendo precios accesibles gracias a su venta directa.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { title: "12+ Horas", desc: "Fijación extrema y proyección brutal" },
                { title: "100% Original", desc: "Importación directa garantizada" },
                { title: "Lujo Real", desc: "Presentaciones premium" }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-accent pl-4">
                  <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-outline">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Pyramid */}
            <div className="bg-surface border border-surface-highest p-6 mb-10 rounded-sm">
              <h5 className="font-mono text-xs text-outline mb-4">ESTRUCTURA OLFATIVA TÍPICA:</h5>
              <div className="space-y-3">
                <div className="flex gap-4 items-center">
                  <span className="w-20 font-bold text-sm text-primary text-right">SALIDA</span>
                  <div className="h-px flex-grow bg-surface-highest" />
                  <span className="text-sm text-on-surface-variant">Cítricos, Manzana, Piña, Especias</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="w-20 font-bold text-sm text-primary text-right">CORAZÓN</span>
                  <div className="h-px flex-grow bg-surface-highest" />
                  <span className="text-sm text-on-surface-variant">Jazmín, Rosa, Abedul, Pachulí</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="w-20 font-bold text-sm text-primary text-right">FONDO</span>
                  <div className="h-px flex-grow bg-surface-highest" />
                  <span className="text-sm text-on-surface-variant">Almizcle, Musgo, Ámbar, Vainilla</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-primary text-surface-lowest font-bold px-8 py-4 rounded-sm hover:bg-on-surface transition-colors"
            >
              Consultar Stock de Fragancias
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
