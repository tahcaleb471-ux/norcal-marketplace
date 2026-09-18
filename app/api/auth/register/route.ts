import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password, language, currency, country, role } = body || {};

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Name, email and password are required.' }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({
    where: { email: String(email).toLowerCase() }
  });

  if (existing) {
    return NextResponse.json({ error: 'A user with this email already exists.' }, { status: 409 });
  }

  const user = await prisma.user.create({
    data: {
      name: String(name),
      email: String(email).toLowerCase(),
      password: String(password),
      language: String(language || 'English'),
      currency: String(currency || 'USD - US Dollar'),
      country: String(country || 'United States'),
      role: String(role || 'buyer'),
      location: String(country || 'United States'),
      bio: 'New Norcal user exploring the marketplace.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
      pro: false
    }
  });

  const { password: _password, ...safeUser } = user;
  return NextResponse.json({ user: safeUser }, { status: 201 });
}
