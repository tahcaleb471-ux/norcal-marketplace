import { NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';

export async function POST(request: Request) {
  const body = await request.json();
  const { amount = 29, userId, currency = 'usd' } = body || {};

  if (!userId) {
    return NextResponse.json({ error: 'userId is required.' }, { status: 400 });
  }

  const session = await createCheckoutSession({ amount: Number(amount), userId: String(userId), currency: String(currency) });
  return NextResponse.json(session, { status: 201 });
}
