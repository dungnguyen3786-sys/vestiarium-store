import Link from 'next/link';

export const metadata = { title: 'Checkout Cancelled — Vestiarium' };

export default function CancelPage() {
  return (
    <main className="result-page texture-dark">
      <div className="result-panel">
        <p className="eyebrow">Checkout Cancelled</p>
        <h1>No charge was made.</h1>
        <p>
          Your session was cancelled and nothing was charged. Your cart is still waiting for
          you whenever you are ready.
        </p>
        <Link href="/" className="btn btn-gold">
          Return to the Collection
        </Link>
      </div>
    </main>
  );
}
