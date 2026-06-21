import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Vestiarium Atelier',
  description: 'Reach the Vestiarium atelier for bespoke commissions, sizing consultations, and order enquiries.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="legal-hero texture-dark">
        <div className="legal-hero-inner">
          <p className="eyebrow">Get in Touch</p>
          <h1>Contact the Atelier</h1>
          <p className="section-sub">
            Whether you are commissioning a first vestment, enquiring about fabric and cut, or
            following up on an order in progress — we are glad to hear from you.
          </p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-body-inner">

          <h2>Write or Call</h2>
          <p>
            We respond to all enquiries within two business days. For matters of some
            urgency — an ordination, an installation, a feast arriving sooner than expected —
            please say so in your subject line and we will give your message precedence.
          </p>

          <div className="legal-contact-block">
            <span className="label">Email</span>
            <p><a href="mailto:dungnguyen3786@gmail.com">dungnguyen3786@gmail.com</a></p>
            <span className="label">Phone</span>
            <p><a href="tel:+61420393244">+61 420 393 244</a></p>
          </div>

          <h2>What to Include</h2>
          <p>
            If you are writing about a new commission, it helps us to know the liturgical
            colour required, the cut you have in mind (Roman, Gothic, or Borromeon), and
            the date by which the vestment is needed. We will write back with fabric
            options, a price, and an estimated completion date.
          </p>
          <p>
            If you are following up on an order already placed, please include your order
            reference number. You will find it in the confirmation email Stripe sent at the
            time of payment.
          </p>

          <h2>Made-to-Measure Fittings</h2>
          <p>
            Every vestment we make is cut to the measurements of the priest or deacon who
            will wear it. Before we begin cutting, we will contact you by email to confirm
            the vestment length and any adjustments required. No appointment is necessary
            for this — a brief exchange of measurements is all that is needed.
          </p>

        </div>
      </section>
    </main>
  );
}
