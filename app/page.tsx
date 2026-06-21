import Hero from '@/components/Hero';
import ShopSection from '@/components/ShopSection';
import About from '@/components/About';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ShopSection />
      <About />
      <footer className="site-footer texture-dark">
        <p><em>Induimini Dominum Iesum Christum</em></p>
        <p className="fine">© 2026 Vestiarium Atelier. Every vestment made to order.</p>
      </footer>
    </main>
  );
}
