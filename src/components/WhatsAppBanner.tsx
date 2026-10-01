"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhatsAppBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(containerRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <section id="contacto" className="py-24 bg-surface-lowest px-4 lg:px-8">
      <div 
        ref={containerRef}
        className="container mx-auto bg-surface-container border border-surface-highest rounded-sm p-8 md:p-16 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute top-8 left-8 w-4 h-4 bg-accent rotate-45 opacity-50" />
        <div className="absolute bottom-8 right-8 w-2 h-2 bg-primary rotate-45 opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
            COMPRÁ O CONSULTÁ DIRECTO SIN INTERMEDIARIOS
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            Evitá plataformas de terceros y costos extra. Escribinos directamente a nuestro WhatsApp oficial para atención personalizada, consulta de talles, modelos disponibles y envíos.
          </p>

          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-accent text-surface-lowest font-bold text-xl px-10 py-5 rounded-sm hover:bg-accent-dim transition-colors mb-16 shadow-[0_0_30px_rgba(102,255,142,0.15)]"
          >
            Abrir Chat de WhatsApp
          </a>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-surface-highest pt-12">
            {[
              { num: "01", title: "Elegí lo que te gusta", desc: "Mirá el catálogo o nuestro Instagram" },
              { num: "02", title: "Envianos captura o modelo", desc: "Te confirmamos stock y talles al instante" },
              { num: "03", title: "Retiro o Envío Exprés", desc: "Pasás por el local o te lo mandamos" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono text-accent font-bold text-lg mb-2">{step.num}</span>
                <h4 className="font-bold text-primary mb-1">{step.title}</h4>
                <p className="text-sm text-outline">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
