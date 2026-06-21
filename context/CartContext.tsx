'use client';

import { createContext, useContext, useReducer, useState, ReactNode } from 'react';

export type CartState = Record<number, number>;

type CartAction =
  | { type: 'ADD'; id: number }
  | { type: 'INCREMENT'; id: number }
  | { type: 'DECREMENT'; id: number }
  | { type: 'REMOVE'; id: number }
  | { type: 'CLEAR' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD':
    case 'INCREMENT':
      return { ...state, [action.id]: (state[action.id] ?? 0) + 1 };
    case 'DECREMENT': {
      const qty = (state[action.id] ?? 0) - 1;
      if (qty <= 0) {
        const next = { ...state };
        delete next[action.id];
        return next;
      }
      return { ...state, [action.id]: qty };
    }
    case 'REMOVE': {
      const next = { ...state };
      delete next[action.id];
      return next;
    }
    case 'CLEAR':
      return {};
    default:
      return state;
  }
}

interface CartContextType {
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, {});
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <CartContext.Provider value={{
      cart,
      dispatch,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      totalItems,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
