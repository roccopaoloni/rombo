"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: "Remeras & Oversized",
    image: "/jeans.png",
    badge: "Heavy Cotton",
    sizes: "S-XXL",
    cta: "Consultar modelos",
    highlight: false
  },
  {
    title: "Buzos & Hoodies",
    image: "/hoodie.png",
    badge: "Frisa Invisible",
    sizes: "OVERSIZE 1-4",
    cta: "Consultar talles",
    highlight: false
  },
  {
    title: "Denim & Pantalones",
    image: "/jeans.png",
    badge: "Heavy Denim 13oz",
    sizes: "38-48",
    cta: "Ver modelos",
    highlight: false
  },
  {
    title: "Perfumería Nicho Árabe",
    image: "/perfume.png",
    badge: "Armaf/Lattafa/Afnan",
    sizes: "100ML & 200ML",
    cta: "Consultar fragancias",
    highlight: true
  }
];

export default function Catalog() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
      }
    );
  }, []);

  return (
    <section id="coleccion" ref={sectionRef} className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 lg:mb-16 max-w-3xl">
          <div className="font-mono text-[11px] lg:text-sm text-outline mb-3 tracking-widest">
            LÍNEAS ACTIVAS // CATÁLOGO VISUAL
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 lg:mb-6">
            CATÁLOGO DESTACADO
          </h2>
          <p className="text-on-surface-variant text-sm lg:text-xl mb-4 lg:mb-6 leading-relaxed">
            Prendas urbanas seleccionadas y las fragancias más codiciadas de Medio Oriente. Stock dinámico: consultá disponibilidad de talles y modelos en tiempo real directo a nuestro WhatsApp.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-surface-low border border-surface-highest">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-mono text-[10px] lg:text-xs font-bold text-primary">STOCK SHOWROOM HOY</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              ref={el => { if (el) cardsRef.current[index] = el; }}
              className="group relative bg-surface-low border border-surface-highest rounded-sm overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-56 sm:h-64 lg:h-72 xl:h-80 w-full overflow-hidden bg-surface-high">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-3 left-3">
                  <div className="bg-surface/90 backdrop-blur-sm px-2 py-1 lg:px-3 lg:py-1 text-[10px] lg:text-xs font-mono font-bold text-primary border border-surface-highest">
                    {item.badge}
                  </div>
                </div>
              </div>

              <div className="p-4 lg:p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-base lg:text-xl font-bold text-primary mb-1.5 lg:mb-2">
                  {item.title}
                </h3>
                <div className="font-mono text-[11px] lg:text-sm text-outline mb-4 lg:mb-6">
                  Talles: {item.sizes}
                </div>

                <div className="mt-auto pt-3 lg:pt-4 border-t border-surface-highest">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className={`block w-full text-center py-2.5 lg:py-3 font-bold text-xs lg:text-sm uppercase tracking-wider transition-colors min-h-[48px] flex items-center justify-center ${
                      item.highlight
                        ? "bg-accent text-surface-lowest hover:bg-accent-dim"
                        : "bg-surface-high text-primary hover:bg-surface-highest"
                    }`}
                  >
                    {item.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
