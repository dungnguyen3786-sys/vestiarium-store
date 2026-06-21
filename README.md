# Vestiarium Store

A Next.js 14 e-commerce site for handmade liturgical vestments, with Stripe Checkout payments.

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your Stripe keys

Copy the example env file and fill in your keys:

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and set:

```
STRIPE_SECRET_KEY=sk_test_...
```

Get your keys from the [Stripe Dashboard → Developers → API keys](https://dashboard.stripe.com/apikeys).
Use `sk_test_...` keys while developing — no real charges are made.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Test a checkout

Stripe's test card number is **4242 4242 4242 4242**, any future expiry, any CVC.

---

## Project structure

```
app/
  layout.tsx          Root layout — wraps everything in CartProvider, renders Header + CartDrawer
  page.tsx            Home page (Hero → Seasons filter → Product grid → About → Footer)
  success/page.tsx    Shown after a successful Stripe payment
  cancel/page.tsx     Shown when the user cancels on Stripe's hosted page
  api/checkout/
    route.ts          POST handler — creates a Stripe Checkout Session and returns its URL

components/
  Header.tsx          Sticky nav with cart icon and live item count
  Hero.tsx            Full-width dark hero section
  ShopSection.tsx     Liturgical-season filter strip + product grid (client component)
  CartDrawer.tsx      Slide-in cart with qty controls and Stripe redirect
  About.tsx           Atelier info section
  ChasubleSvg.tsx     Inline SVG chasuble illustration, coloured by product

context/
  CartContext.tsx     React Context + useReducer for cart state

lib/
  data.ts             COLORS, SEASONS, PRODUCTS catalogue, SHIPPING_FEE constant
```

## Adding or editing products

Open `lib/data.ts` and edit the `PRODUCTS` array. Each product needs:

| Field    | Type   | Notes                                         |
|----------|--------|-----------------------------------------------|
| `id`     | number | Unique integer                                |
| `name`   | string | Displayed in card and Stripe checkout         |
| `color`  | string | Key into `COLORS` — controls the SVG fill     |
| `fabric` | string | e.g. `'Brocade'`, `'Damask'`                  |
| `cut`    | string | e.g. `'Gothic'`, `'Roman'`, `'Borromeon'`     |
| `price`  | number | In USD, whole dollars                         |
| `desc`   | string | Short product description                     |

To add a new liturgical colour, add an entry to `COLORS` with a `hex` and `label`.

## Deploying

The recommended host is [Vercel](https://vercel.com) — it supports Next.js natively and
zero-config deploys from a Git repo.

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add `STRIPE_SECRET_KEY` (your live key: `sk_live_...`) under Project → Settings → Environment Variables.
4. Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://vestiarium.example.com`).
5. Deploy.

For production, switch your Stripe keys to live keys and make sure your Stripe account has
completed activation.
