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
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 85%" }
      }
    );
  }, []);

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-surface-lowest px-4 lg:px-8">
      <div
        ref={containerRef}
        className="container mx-auto bg-surface-container border border-surface-highest rounded-sm p-6 lg:p-8 xl:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 lg:w-64 h-48 lg:h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute top-6 left-6 w-3 h-3 lg:w-4 lg:h-4 bg-accent rotate-45 opacity-50" />
        <div className="absolute bottom-6 right-6 w-2 h-2 lg:w-2 lg:h-2 bg-primary rotate-45 opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 lg:mb-6 leading-tight">
            COMPRÁ O CONSULTÁ DIRECTO SIN INTERMEDIARIOS
          </h2>
          <p className="text-on-surface-variant text-sm lg:text-lg mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
            Evitá plataformas de terceros y costos extra. Escribinos directamente a nuestro WhatsApp oficial para atención personalizada, consulta de talles, modelos disponibles y envíos.
          </p>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-accent text-surface-lowest font-bold text-base lg:text-xl px-8 py-4 lg:px-10 lg:py-5 rounded-sm hover:bg-accent-dim transition-colors mb-12 lg:mb-16 shadow-[0_0_30px_rgba(102,255,142,0.15)] min-h-[52px]"
          >
            Abrir Chat de WhatsApp
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 text-left border-t border-surface-highest pt-8 lg:pt-12">
            {[
              { num: "01", title: "Elegí lo que te gusta", desc: "Mirá el catálogo o nuestro Instagram" },
              { num: "02", title: "Envianos captura o modelo", desc: "Te confirmamos stock y talles al instante" },
              { num: "03", title: "Retiro o Envío Exprés", desc: "Pasás por el local o te lo mandamos" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono text-accent font-bold text-base lg:text-lg mb-1.5 lg:mb-2">{step.num}</span>
                <h4 className="font-bold text-primary text-sm lg:text-base mb-1">{step.title}</h4>
                <p className="text-xs lg:text-sm text-outline">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
