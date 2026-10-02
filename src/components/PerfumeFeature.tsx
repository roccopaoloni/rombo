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
      scrollTrigger: { trigger: containerRef.current, start: "top 70%" }
    });

    tl.fromTo(imageRef.current,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    ).fromTo(contentRef.current,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  return (
    <section id="perfumes" ref={containerRef} className="py-16 lg:py-24 bg-surface-lowest overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

          <div ref={imageRef} className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] w-full border-2 border-surface-highest p-3 lg:p-4 bg-surface">
              <div className="relative w-full h-full bg-surface-high overflow-hidden">
                <Image
                  src="/perfume.png"
                  alt="Perfumería Nicho Árabe"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 bg-accent flex items-center justify-center p-3 lg:p-4">
                <span className="font-heading font-bold text-surface-lowest text-center leading-none text-sm lg:text-xl uppercase transform -rotate-12">
                  Top Seller
                </span>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="w-full lg:w-1/2 lg:pl-8 xl:pl-10">
            <div className="font-mono text-[11px] lg:text-sm text-accent mb-3 lg:mb-4 tracking-widest uppercase">
              SELECCIÓN NICHO IMPORTADA // DUBAI & EMIRATOS
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl lg:text-6xl font-bold text-primary mb-4 lg:mb-6 leading-tight">
              EL FENÓMENO DE LA PERFUMERÍA ÁRABE
            </h2>
            <p className="text-sm lg:text-lg text-on-surface-variant mb-6 lg:mb-8 leading-relaxed">
              Las casas perfumistas de Medio Oriente han revolucionado el mercado global. Ofrecen extractos de parfum con una concentración y longevidad que supera ampliamente a la perfumería comercial occidental tradicional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-10">
              {[
                { title: "12+ Horas", desc: "Fijación extrema y proyección brutal" },
                { title: "100% Original", desc: "Importación directa garantizada" },
                { title: "Lujo Real", desc: "Presentaciones premium" }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-accent pl-3 lg:pl-4">
                  <h4 className="font-bold text-primary text-sm lg:text-base mb-1">{item.title}</h4>
                  <p className="text-xs lg:text-sm text-outline">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-surface border border-surface-highest p-4 lg:p-6 mb-6 lg:mb-8 rounded-sm">
              <h5 className="font-mono text-[10px] lg:text-xs text-outline mb-3 lg:mb-4">ESTRUCTURA OLFATIVA TÍPICA:</h5>
              <div className="space-y-2 lg:space-y-3">
                {([
                  { label: "SALIDA", notes: "Cítricos, Manzana, Piña, Especias" },
                  { label: "CORAZÓN", notes: "Jazmín, Rosa, Abedul, Pachulí" },
                  { label: "FONDO", notes: "Almizcle, Musgo, Ámbar, Vainilla" }
                ] as const).map(row => (
                  <div key={row.label} className="flex gap-3 lg:gap-4 items-center">
                    <span className="w-16 lg:w-20 font-bold text-[10px] lg:text-sm text-primary text-right shrink-0">{row.label}</span>
                    <div className="h-px flex-grow bg-surface-highest" />
                    <span className="text-xs lg:text-sm text-on-surface-variant">{row.notes}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-primary text-surface-lowest font-bold px-6 py-3.5 lg:px-8 lg:py-4 rounded-sm hover:bg-on-surface transition-colors text-sm lg:text-base min-h-[48px]"
            >
              Consultar Stock de Fragancias
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
