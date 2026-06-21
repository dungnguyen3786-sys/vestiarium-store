'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { PRODUCTS, SHIPPING_FEE } from '@/lib/data';
import ChasubleSvg from './ChasubleSvg';

export default function CartDrawer() {
  const { cart, dispatch, isOpen, closeCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lineIds = Object.keys(cart).map(Number).filter(id => cart[id] > 0);

  const subtotal = lineIds.reduce((sum, id) => {
    const p = PRODUCTS.find(p => p.id === id);
    return sum + (p ? p.price * cart[id] : 0);
  }, 0);

  async function handleCheckout() {
    if (lineIds.length === 0) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Checkout failed. Please try again.');
      }
      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setLoading(false);
    }
  }

  return (
    <>
      <div
        className={`overlay${isOpen ? ' show' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside className={`cart-drawer${isOpen ? ' open' : ''}`} aria-label="Shopping cart">
        <div className="drawer-head">
          <h2>Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart">×</button>
        </div>

        <div className="drawer-body">
          {lineIds.length === 0 ? (
            <p className="empty-cart">
              Your cart is empty. Browse the collection to add a vestment.
            </p>
          ) : (
            lineIds.map(id => {
              const p = PRODUCTS.find(p => p.id === id)!;
              const qty = cart[id];
              return (
                <div key={id} className="cart-line">
                  <div className="cart-line-figure">
                    <ChasubleSvg colorKey={p.color} />
                  </div>
                  <div className="cart-line-info">
                    <h4>{p.name}</h4>
                    <div className="cart-line-meta">{p.cut} · {p.fabric}</div>
                    <div className="qty-row">
                      <button
                        className="qty-btn"
                        aria-label="Decrease quantity"
                        onClick={() => dispatch({ type: 'DECREMENT', id })}
                      >–</button>
                      <span className="qty-val">{qty}</span>
                      <button
                        className="qty-btn"
                        aria-label="Increase quantity"
                        onClick={() => dispatch({ type: 'INCREMENT', id })}
                      >+</button>
                      <button
                        className="remove-link"
                        onClick={() => dispatch({ type: 'REMOVE', id })}
                      >Remove</button>
                    </div>
                  </div>
                  <div className="line-price">${(p.price * qty).toFixed(2)}</div>
                </div>
              );
            })
          )}
        </div>

        <div className="drawer-foot">
          <div className="subtotal-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button
            className="btn btn-gold full"
            onClick={handleCheckout}
            disabled={lineIds.length === 0 || loading}
          >
            {loading ? 'Redirecting…' : 'Proceed to Checkout'}
          </button>
          {error && <p className="checkout-error">{error}</p>}
        </div>
      </aside>
    </>
  );
}
