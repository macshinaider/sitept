import { loadStripe } from '@stripe/stripe-js';

export async function getStripeJs() {
  const stripePublickey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

  const stripeJs = await loadStripe(stripePublickey!);

  return stripeJs;
}
