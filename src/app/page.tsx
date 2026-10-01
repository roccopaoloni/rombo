import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Catalog from '@/components/Catalog';
import PerfumeFeature from '@/components/PerfumeFeature';
import Location from '@/components/Location';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Ticker />
      <Catalog />
      <PerfumeFeature />
      <Location />
      <WhatsAppBanner />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
