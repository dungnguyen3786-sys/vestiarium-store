import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer texture-dark">
      <div className="footer-inner">
        <p><em>Induimini Dominum Iesum Christum</em></p>
        <nav className="footer-links" aria-label="Legal">
          <Link href="/contact">Contact</Link>
          <span className="footer-divider" aria-hidden="true">·</span>
          <Link href="/shipping-returns">Shipping &amp; Returns</Link>
          <span className="footer-divider" aria-hidden="true">·</span>
          <Link href="/terms">Terms of Service</Link>
          <span className="footer-divider" aria-hidden="true">·</span>
          <Link href="/privacy">Privacy Policy</Link>
        </nav>
        <p className="fine">© {new Date().getFullYear()} Vestiarium Atelier. Every vestment made to order.</p>
        <p className="fine">ABN 64 548 593 241</p>
      </div>
    </footer>
  );
}
