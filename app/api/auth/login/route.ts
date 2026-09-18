import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body || {};

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: String(email).toLowerCase() }
  });

  if (!user || user.password !== String(password)) {
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
  }

  const { password: _password, ...safeUser } = user;
  return NextResponse.json({ user: safeUser });
}
