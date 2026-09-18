import Stripe from 'stripe';

export const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

export async function createCheckoutSession({
  amount,
  userId,
  currency = 'usd'
}: {
  amount: number;
  userId: string;
  currency?: string;
}) {
  if (!stripe) {
    return {
      url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard?payment=demo-success`,
      sessionId: 'demo_checkout_session',
      mocked: true
    };
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency,
          product_data: {
            name: 'Norcal Pro Membership',
            description: 'Upgrade to Norcal Pro and unlock premium visibility'
          },
          unit_amount: Math.round(amount * 100)
        },
        quantity: 1
      }
    ],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard?payment=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard?payment=cancelled`,
    metadata: {
      userId
    }
  });

  return {
    url: session.url,
    sessionId: session.id,
    mocked: false
  };
}
