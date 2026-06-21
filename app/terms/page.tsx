import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Vestiarium Atelier',
  description: 'Terms of service for orders placed with Vestiarium Atelier.',
};

export default function TermsPage() {
  return (
    <main>
      <section className="legal-hero texture-dark">
        <div className="legal-hero-inner">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p className="section-sub">
            Please read these terms before placing a commission. By completing an order
            you confirm that you have read and agreed to them.
          </p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-body-inner">

          <h2>1. Who We Are</h2>
          <p>
            This website is operated by Vestiarium Atelier, an Australian atelier
            specialising in handmade liturgical vestments. References to &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; and &ldquo;our&rdquo; throughout these terms refer to
            Vestiarium Atelier.
          </p>

          <h2>2. Orders and Acceptance</h2>
          <p>
            An order placed through this website constitutes an offer to purchase. We
            reserve the right to decline any order at our discretion — for example, if a
            product is unavailable, if we suspect the order is fraudulent, or if we are
            unable to fulfil the requested timeline. If we decline your order, we will
            contact you promptly and arrange a full refund.
          </p>
          <p>
            A binding contract between you and Vestiarium Atelier is formed when we send
            you an order confirmation email following successful payment.
          </p>

          <h2>3. Pricing</h2>
          <p>
            All prices are listed in United States dollars (USD) and are exclusive of
            shipping. Shipping costs are quoted separately and confirmed before production
            begins. We reserve the right to correct pricing errors; if a price shown was
            incorrect, we will contact you before proceeding.
          </p>

          <h2>4. Payment</h2>
          <p>
            Payment is taken in full at the time of order via Stripe, our payment
            processor. We do not store your card details; all payment data is handled
            directly by Stripe in accordance with their security standards. Production
            does not begin until payment has been received and confirmed.
          </p>

          <h2>5. Production and Delivery</h2>
          <p>
            All vestments are made to order by hand. Our standard production time is six
            to eight weeks from the date payment is received. We will contact you before
            cutting begins to confirm measurements and finishing details. Delays may occur
            in exceptional circumstances — sourcing particular fabrics, public holidays,
            or periods of high demand — and we will notify you promptly if your order is
            affected.
          </p>
          <p>
            Delivery times vary by destination and are additional to production time.
            We ship with tracking; risk of loss passes to you once the parcel is handed
            to the carrier.
          </p>

          <h2>6. Cancellations and Refunds</h2>
          <p>
            Please refer to our <a href="/shipping-returns">Shipping &amp; Returns</a> page
            for the full policy on cancellations, returns, and defective goods.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on this website — text, images, and design — belongs to
            Vestiarium Atelier. You may not reproduce or redistribute it without our
            written permission.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the extent permitted by law, Vestiarium Atelier is not liable for indirect
            or consequential losses arising from the use of this website or from any
            order. Nothing in these terms limits rights you may have under Australian
            consumer law.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms are governed by the laws of Australia. Any disputes will be
            subject to the jurisdiction of the courts of Australia.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms should be directed to{' '}
            <a href="mailto:dungnguyen3786@gmail.com">dungnguyen3786@gmail.com</a> or via
            our <a href="/contact">Contact page</a>.
          </p>

          <p className="legal-updated">Last updated: June 2026</p>
        </div>
      </section>
    </main>
  );
}
