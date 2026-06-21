import Link from 'next/link';

export const metadata = { title: 'Order Received — Vestiarium' };

export default function SuccessPage() {
  return (
    <main className="result-page texture-dark">
      <div className="result-panel">
        <p className="eyebrow">Order Confirmed</p>
        <h1>Thank you.</h1>
        <p>
          Your order has been received and will be cut by hand in our atelier. A confirmation
          has been sent to your email with an estimated completion date of six to eight weeks.
        </p>
        <div className="order-chip">Payment Successful</div>
        <br />
        <Link href="/" className="btn btn-outline">
          Continue Browsing
        </Link>
      </div>
    </main>
  );
}
