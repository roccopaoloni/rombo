"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(footerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "none",
        scrollTrigger: { trigger: footerRef.current, start: "top 95%" }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-surface pt-12 lg:pt-16 pb-8 safe-bottom border-t border-surface-highest">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 lg:mb-16">

          <div>
            <div className="flex flex-col mb-3">
              <span className="font-heading font-bold text-xl lg:text-2xl leading-none text-primary tracking-wide">ROMBO</span>
              <span className="text-xs lg:text-sm font-mono text-outline tracking-widest">INDUMENTARIA</span>
            </div>
            <p className="text-xs lg:text-sm text-on-surface-variant mt-3 leading-relaxed">
              Digital showroom & archive. Colecciones exclusivas, indumentaria urbana y perfumería nicho.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-3 lg:mb-4 font-mono text-xs lg:text-sm">UBICACIÓN</h4>
            <ul className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm text-on-surface-variant">
              <li>Sarmiento 778</li>
              <li>Bahía Blanca</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-3 lg:mb-4 font-mono text-xs lg:text-sm">HORARIOS</h4>
            <ul className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm text-on-surface-variant">
              <li>Lunes a Sábados</li>
              <li>10:00 a 20:00 hs</li>
              <li className="text-accent mt-2">Atención Online 24/7</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-3 lg:mb-4 font-mono text-xs lg:text-sm">CONTACTO</h4>
            <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm">
              <li>
                <a href="https://instagram.com/rombo.ind" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-outline rounded-full shrink-0" />
                  Instagram: @rombo.ind
                </a>
              </li>
              <li>
                <a href="https://wa.me/" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-outline rounded-full shrink-0" />
                  WhatsApp Directo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-highest pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] lg:text-xs font-mono text-outline">
            © 2024 ROMBO INDUMENTARIA. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-3 lg:gap-4 text-[10px] lg:text-xs font-mono text-outline">
            <Link href="#" className="hover:text-primary transition-colors">TÉRMINOS</Link>
            <Link href="#" className="hover:text-primary transition-colors">PRIVACIDAD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
