import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Vestiarium Atelier',
  description: 'How Vestiarium Atelier collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="legal-hero texture-dark">
        <div className="legal-hero-inner">
          <p className="eyebrow">Your Data</p>
          <h1>Privacy Policy</h1>
          <p className="section-sub">
            Vestiarium Atelier collects only what is necessary to fulfil your order.
            We do not sell your data, and we do not hold more of it than we need.
          </p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-body-inner">

          <h2>1. Who Is Responsible for Your Data</h2>
          <p>
            Vestiarium Atelier (ABN 64 548 593 241), a sole trader registered in
            Australia, is the data controller for information collected through this
            website. If you have any questions or requests regarding your personal
            data, please contact us at{' '}
            <a href="mailto:dungnguyen3786@gmail.com">dungnguyen3786@gmail.com</a>.
          </p>

          <h2>2. What We Collect and Why</h2>
          <p>When you place an order, we collect:</p>
          <ul>
            <li><strong>Your name</strong> — to address correspondence and label your commission.</li>
            <li><strong>Your email address</strong> — to send order confirmation, production updates, and sizing questions.</li>
            <li><strong>Your shipping address</strong> — to deliver your vestment.</li>
            <li><strong>Your vestment measurements</strong> (where provided) — to cut the garment correctly.</li>
          </ul>
          <p>
            We collect only what is necessary to complete your order and communicate with
            you about it. We do not collect payment card details — those are handled
            entirely by Stripe (see below).
          </p>

          <h2>3. Payment Processing</h2>
          <p>
            All payments on this website are processed by{' '}
            <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">Stripe</a>,
            a third-party payment processor. When you proceed to checkout you are
            redirected to Stripe&rsquo;s hosted payment page. Vestiarium Atelier never
            sees, receives, or stores your card number, CVV, or any other payment
            credential. Stripe&rsquo;s own privacy policy governs the data you provide
            to them.
          </p>

          <h2>4. How We Use Your Information</h2>
          <p>We use the information we collect solely to:</p>
          <ul>
            <li>Fulfil and deliver your order.</li>
            <li>Correspond with you about your commission — measurements, fabric, timeline.</li>
            <li>Handle any after-sales queries, defect claims, or cancellation requests.</li>
          </ul>
          <p>
            We do not use your information for marketing without your explicit consent,
            and we do not sell, rent, or share your personal data with any third party
            except where necessary to deliver your order (for example, passing your
            shipping address to a courier).
          </p>

          <h2>5. How Long We Keep Your Data</h2>
          <p>
            We retain order records — name, email, shipping address, and measurements —
            for seven years in accordance with Australian tax record-keeping obligations.
            After that period, records are deleted.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You may request a copy of the personal data we hold about you, ask us to
            correct inaccurate data, or ask us to delete your data where we are not
            legally required to retain it. To make any such request, please write to{' '}
            <a href="mailto:dungnguyen3786@gmail.com">dungnguyen3786@gmail.com</a>.
            We will respond within thirty days.
          </p>

          <h2>7. Cookies</h2>
          <p>
            This website does not use tracking or advertising cookies. Stripe may set
            cookies on their hosted checkout page in accordance with their own policy.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            If we make material changes to this policy, we will update the date below
            and, where appropriate, notify customers by email.
          </p>

          <p className="legal-updated">Last updated: June 2026</p>
        </div>
      </section>
    </main>
  );
}
