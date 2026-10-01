"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: "Remeras & Oversized",
    image: "/jeans.png", // Using jeans.png as placeholder per instructions? The prompt said jeans.png for remeras? I will use jeans.png.
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
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section id="coleccion" ref={sectionRef} className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="font-mono text-sm text-outline mb-4 tracking-widest">
            LÍNEAS ACTIVAS // CATÁLOGO VISUAL
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            CATÁLOGO DESTACADO
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl mb-6">
            Prendas urbanas seleccionadas y las fragancias más codiciadas de Medio Oriente. Stock dinámico: consultá disponibilidad de talles y modelos en tiempo real directo a nuestro WhatsApp.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-low border border-surface-highest rounded-full">
            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
            <span className="font-mono text-xs font-bold text-primary">STOCK SHOWROOM HOY</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div 
              key={index}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative bg-surface-low border border-surface-highest rounded-sm overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-80 w-full overflow-hidden bg-surface-high">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-surface/90 backdrop-blur-sm px-3 py-1 text-xs font-mono font-bold text-primary border border-surface-highest">
                    {item.badge}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <div className="font-mono text-sm text-outline mb-6">
                  Talles: {item.sizes}
                </div>
                
                <div className="mt-auto pt-4 border-t border-surface-highest">
                  <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    rel="noreferrer"
                    className={`block w-full text-center py-3 font-bold text-sm uppercase tracking-wider transition-colors ${
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
