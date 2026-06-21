import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PRODUCTS, SHIPPING_FEE } from '@/lib/data';

const stripe = new Stripe((process.env.STRIPE_SECRET_KEY ?? '').trim(), {
  apiVersion: '2024-04-10',
});

export async function POST(req: NextRequest) {
  try {
    const { cart } = (await req.json()) as { cart: Record<string, number> };

    if (!cart || Object.keys(cart).length === 0) {
      return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = Object.entries(cart)
      .filter(([, qty]) => qty > 0)
      .map(([rawId, qty]) => {
        const product = PRODUCTS.find(p => p.id === Number(rawId));
        if (!product) throw new Error(`Unknown product id ${rawId}`);
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: `${product.cut} Cut · ${product.fabric}`,
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: qty,
        };
      });

    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Shipping & Handling',
          description: 'Made-to-order vestment shipping',
        },
        unit_amount: SHIPPING_FEE * 100,
      },
      quantity: 1,
    });

    const origin =
      req.headers.get('origin') ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
