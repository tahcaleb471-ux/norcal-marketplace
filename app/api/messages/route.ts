import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userA = searchParams.get('userA');
  const userB = searchParams.get('userB');

  if (!userA || !userB) {
    return NextResponse.json({ messages: [] });
  }

  const messages = await prisma.message.findMany({
    where: {
      OR: [
        { senderId: userA, receiverId: userB },
        { senderId: userB, receiverId: userA }
      ]
    },
    orderBy: { createdAt: 'asc' }
  });

  return NextResponse.json({ messages });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { senderId, receiverId, text } = body || {};

  if (!senderId || !receiverId || !text) {
    return NextResponse.json({ error: 'senderId, receiverId, and text are required.' }, { status: 400 });
  }

  const message = await prisma.message.create({
    data: {
      senderId: String(senderId),
      receiverId: String(receiverId),
      text: String(text)
    }
  });

  return NextResponse.json({ message }, { status: 201 });
}
