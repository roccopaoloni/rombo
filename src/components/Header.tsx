"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <header 
      ref={headerRef} 
      className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-surface-highest"
    >
      <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative overflow-hidden rounded-sm">
            <Image src="/logo.jpg" alt="Rombo Logo" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl leading-none text-primary tracking-wide">ROMBO</span>
            <span className="text-xs font-mono text-outline tracking-widest">INDUMENTARIA</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-on-surface-variant">
          <Link href="#coleccion" className="hover:text-primary transition-colors">Colección</Link>
          <Link href="#indumentaria" className="hover:text-primary transition-colors">Indumentaria</Link>
          <Link href="#perfumes" className="hover:text-primary transition-colors">Perfumes Árabes</Link>
          <Link href="#ubicacion" className="hover:text-primary transition-colors">Ubicación</Link>
          <Link href="#contacto" className="hover:text-primary transition-colors">Contacto</Link>
        </nav>

        <div className="hidden md:block">
          <Link 
            href="https://wa.me/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-accent text-surface-lowest font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-accent-dim transition-colors"
          >
            Contacto WhatsApp
          </Link>
        </div>
      </div>
    </header>
  );
}
