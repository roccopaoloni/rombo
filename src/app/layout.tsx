import type { Metadata } from 'next';
import { Inter, Syne, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: 'Rombo Indumentaria | Digital Showroom',
  description: 'Moda urbana premium y fragancias orientales de nicho seleccionadas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${syne.variable} ${jetbrains.variable}`}>
      <body className="bg-surface text-on-surface font-body min-h-screen overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
