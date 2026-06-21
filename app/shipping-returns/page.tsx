import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping & Returns — Vestiarium Atelier',
  description: 'Shipping regions, processing times, and the returns and refunds policy for Vestiarium Atelier.',
};

export default function ShippingReturnsPage() {
  return (
    <main>
      <section className="legal-hero texture-dark">
        <div className="legal-hero-inner">
          <p className="eyebrow">Delivery &amp; Returns</p>
          <h1>Shipping &amp; Returns</h1>
          <p className="section-sub">
            Every vestment is made to order. Please read the following before placing a
            commission so that you understand what to expect.
          </p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-body-inner">

          <h2>Processing Time</h2>
          <p>
            Because each piece is cut and sewn by hand to your measurements and to the
            liturgical season you are vesting for, production takes <strong>six to eight
            weeks</strong> from the date payment is received. We will contact you by email
            before cutting begins to confirm measurements and any finishing details.
          </p>
          <p>
            Rush orders are considered for ordinations and installations. If your date is
            less than six weeks away, please <a href="/contact">contact us</a> before
            placing an order so that we can advise whether the timeline is achievable.
          </p>

          <h2>Shipping Regions</h2>
          <p>
            We ship worldwide. Shipping costs and carriers are quoted individually at the
            time of order confirmation, as they vary by destination and parcel weight.
            International customs duties and import taxes, where applicable, are the
            responsibility of the recipient.
          </p>
          <p>
            We ship with tracking and require a signature on delivery. If you have a
            preferred carrier or a specific delivery requirement, let us know when you place
            your order.
          </p>

          <h2>Returns &amp; Refunds</h2>
          <p>
            Because every vestment is made to order — cut to a specific commission, in a
            specific liturgical colour, to specific measurements — <strong>we do not accept
            returns or exchanges for change of mind.</strong> This applies to all items,
            including standard-length pieces.
          </p>
          <p>
            Made-to-measure vestments, by their nature, cannot be resold or recut for
            another wearer, and so are entirely non-returnable once production has begun.
          </p>

          <h2>Defective or Damaged Items</h2>
          <p>
            If your vestment arrives with a genuine manufacturing defect or has been
            damaged in transit, please contact us at{' '}
            <a href="mailto:dungnguyen3786@gmail.com">dungnguyen3786@gmail.com</a> within
            fourteen days of delivery. Include a photograph of the defect and your order
            reference. We will arrange a remake or a full refund at our discretion, and
            we will cover any return shipping costs in such cases.
          </p>

          <h2>Cancellations</h2>
          <p>
            Orders may be cancelled without penalty before cutting has begun. Once the
            fabric has been cut, we are unable to offer a refund, as the materials cannot
            be recovered. To request a cancellation, please{' '}
            <a href="/contact">contact us</a> as early as possible after placing your order.
          </p>

          <p className="legal-updated">Last updated: June 2026</p>
        </div>
      </section>
    </main>
  );
}
