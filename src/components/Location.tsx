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
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="ubicacion" ref={sectionRef} className="py-24 bg-surface border-t border-surface-highest">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="font-mono text-sm text-outline mb-4 tracking-widest uppercase">
          SHOWROOM FÍSICO // BAHÍA BLANCA
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-12">
          VISITÁ NUESTRO LOCAL
        </h2>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-low border border-surface-highest p-8 rounded-sm">
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Dirección</h3>
              <p className="text-on-surface-variant text-lg">Sarmiento 778</p>
              <p className="text-outline">Bahía Blanca, Buenos Aires</p>
            </div>

            <div className="bg-surface-low border border-surface-highest p-8 rounded-sm">
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Horarios de Atención</h3>
              <p className="text-on-surface-variant text-lg">Lunes a Sábados</p>
              <p className="text-outline">10:00 a 20:00 hs</p>
            </div>

            <div className="bg-surface-high border border-surface-highest p-6 rounded-sm flex flex-col sm:flex-row items-center gap-4">
              <div className="w-10 h-10 bg-surface-lowest flex items-center justify-center rounded-sm">
                <span className="font-bold text-primary">$</span>
              </div>
              <div>
                <h4 className="font-bold text-primary">Métodos de Pago</h4>
                <p className="text-sm text-on-surface-variant">Efectivo, Transferencia, Tarjetas de Crédito/Débito</p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative h-[400px] lg:h-auto w-full bg-surface-highest border border-surface-highest rounded-sm overflow-hidden">
            <div className="absolute inset-0 bg-surface/20 pointer-events-none z-10" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5!2d-62.2663!3d-38.7183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4m3!3e0!4m0!4m0!5e0!3m2!1ses!2sar!4v1" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0"
            />
            {/* Custom Marker Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="w-4 h-4 bg-accent rotate-45 mb-1" />
              <div className="bg-surface text-primary px-3 py-1 font-mono text-xs border border-surface-highest">ROMBO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
