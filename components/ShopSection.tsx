'use client';

import { useState } from 'react';
import { COLORS, SEASONS, PRODUCTS } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import ChasubleSvg from './ChasubleSvg';

export default function ShopSection() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const { dispatch, openCart } = useCart();

  function toggleFilter(color: string) {
    setActiveFilter(prev => (prev === color ? null : color));
  }

  function addToCart(id: number) {
    dispatch({ type: 'ADD', id });
    openCart();
  }

  const visibleProducts = activeFilter
    ? PRODUCTS.filter(p => p.color === activeFilter)
    : PRODUCTS;

  return (
    <>
      <section className="seasons texture-dark" id="seasons">
        <div className="seasons-inner">
          <h2>Shop by Liturgical Colour</h2>
          <p className="section-sub">
            The colour of a vestment is fixed by the season, not by preference. Choose the season
            you are vesting for, and see what is proper to it.
          </p>
          <div className="season-strip">
            {SEASONS.map(s => (
              <button
                key={s.key}
                className={`season-card${activeFilter === s.color ? ' active' : ''}`}
                onClick={() => toggleFilter(s.color)}
              >
                <span
                  className="season-swatch"
                  style={{ background: COLORS[s.color].hex }}
                />
                <span className="s-name">{s.name}</span>
                <span className="s-note">
                  {COLORS[s.color].label} — {s.note}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="shop" id="shop">
        <div className="shop-head">
          <h2>
            {activeFilter
              ? `Vestments in ${COLORS[activeFilter].label}`
              : 'The Full Collection'}
          </h2>
          {activeFilter && (
            <button className="text-link" onClick={() => setActiveFilter(null)}>
              Clear filter ×
            </button>
          )}
        </div>

        <div className="product-grid">
          {visibleProducts.map(p => (
            <div key={p.id} className="product-card">
              <div className="product-figure">
                <ChasubleSvg colorKey={p.color} />
              </div>
              <h3>{p.name}</h3>
              <div className="product-meta">{p.cut} Cut · {p.fabric}</div>
              <p className="product-desc">{p.desc}</p>
              <div className="product-price">${p.price.toFixed(2)}</div>
              <button className="add-btn" onClick={() => addToCart(p.id)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
