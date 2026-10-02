"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { href: '#coleccion', label: 'Colección' },
    { href: '#perfumes', label: 'Perfumes Árabes' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 safe-top">
      <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <div className="w-9 h-9 lg:w-10 lg:h-10 relative overflow-hidden">
            <Image src="/logo.jpg" alt="Rombo Logo" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base lg:text-xl leading-none text-primary tracking-wide">ROMBO</span>
            <span className="text-[10px] lg:text-xs font-mono text-outline tracking-widest">INDUMENTARIA</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-on-surface-variant">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</Link>
          ))}
          <Link
            href="https://wa.me/" target="_blank" rel="noreferrer"
            className="bg-accent text-surface-lowest font-bold text-sm px-4 lg:px-5 py-2 rounded-sm hover:bg-accent-dim transition-colors ml-2"
          >
            WhatsApp
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 z-50"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 md:hidden bg-surface/98 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center items-center ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <nav className="flex flex-col items-center gap-6">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-3xl font-bold text-primary hover:text-accent transition-colors"
              style={{ transitionDelay: `${i * 60}ms`, opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)' }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/" target="_blank" rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-accent text-surface-lowest font-heading font-bold text-xl px-8 py-4 rounded-sm hover:bg-accent-dim transition-colors"
          >
            Contactar por WhatsApp
          </Link>
        </nav>
      </div>
    </header>
  );
}
