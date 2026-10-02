"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    gsap.fromTo(contentRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      }
    );
  }, []);

  return (
    <section id="ubicacion" ref={sectionRef} className="py-16 lg:py-24 bg-surface border-t border-surface-highest">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="font-mono text-[11px] lg:text-sm text-outline mb-3 tracking-widest uppercase">
          SHOWROOM FÍSICO // BAHÍA BLANCA
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-8 lg:mb-12">
          VISITÁ NUESTRO LOCAL
        </h2>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="bg-surface-low border border-surface-highest p-6 lg:p-8 rounded-sm">
              <h3 className="font-heading text-lg lg:text-xl font-bold text-primary mb-2">Dirección</h3>
              <p className="text-on-surface-variant text-base lg:text-lg">Sarmiento 778</p>
              <p className="text-outline text-sm lg:text-base">Bahía Blanca, Buenos Aires</p>
            </div>

            <div className="bg-surface-low border border-surface-highest p-6 lg:p-8 rounded-sm">
              <h3 className="font-heading text-lg lg:text-xl font-bold text-primary mb-2">Horarios de Atención</h3>
              <p className="text-on-surface-variant text-base lg:text-lg">Lunes a Sábados</p>
              <p className="text-outline text-sm lg:text-base">10:00 a 20:00 hs</p>
            </div>

            <div className="bg-surface-high border border-surface-highest p-4 lg:p-6 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-surface-lowest flex items-center justify-center rounded-sm shrink-0">
                <span className="font-bold text-primary text-lg">$</span>
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm lg:text-base">Métodos de Pago</h4>
                <p className="text-xs lg:text-sm text-on-surface-variant">Efectivo, Transferencia, Tarjetas de Crédito/Débito</p>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[350px] lg:h-auto lg:min-h-[400px] w-full bg-surface-highest border border-surface-highest rounded-sm overflow-hidden">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-62.275%2C-38.725%2C-62.260%2C-38.710&layer=mapnik&marker=-38.718%2C-62.268"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) opacity(0.85)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Rombo Indumentaria"
              className="absolute inset-0 z-0"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="w-3 h-3 lg:w-4 lg:h-4 bg-accent rotate-45 mb-1" />
              <div className="bg-surface text-primary px-2 py-0.5 lg:px-3 lg:py-1 font-mono text-[10px] lg:text-xs border border-surface-highest">ROMBO</div>
            </div>
            <a
              href="https://www.google.com/maps/search/Sarmiento+778+Bahía+Blanca"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 right-3 z-20 bg-surface border border-surface-highest px-3 py-1.5 font-mono text-[10px] lg:text-xs text-on-surface-variant hover:text-primary transition-colors rounded-sm"
            >
              Abrir en Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
