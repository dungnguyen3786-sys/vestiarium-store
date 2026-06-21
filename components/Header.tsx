'use client';

import { useCart } from '@/context/CartContext';

export default function Header() {
  const { totalItems, openCart } = useCart();

  return (
    <header className="site-header texture-dark">
      <div className="header-inner">
        <a className="logo" href="#top">Vestiarium</a>
        <nav className="main-nav">
          <a href="#shop">Shop</a>
          <a href="#seasons">Liturgical Seasons</a>
          <a href="#about">The Atelier</a>
        </nav>
        <button className="cart-btn" onClick={openCart} aria-label="Open cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 6h2l2.2 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6" />
            <circle cx="10" cy="21" r="1.3" />
            <circle cx="17" cy="21" r="1.3" />
          </svg>
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </button>
      </div>
    </header>
  );
}
