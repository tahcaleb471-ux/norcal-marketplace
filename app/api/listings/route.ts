import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return NextResponse.json({ cars });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, location, price, mileage, transmission, fuel, category, status, sellerId, image, description } = body || {};

  if (!name || !location || !sellerId) {
    return NextResponse.json({ error: 'Listing requires a name, location, and sellerId.' }, { status: 400 });
  }

  const car = await prisma.car.create({
    data: {
      name: String(name),
      location: String(location),
      price: String(price || '0'),
      mileage: String(mileage || '0'),
      transmission: String(transmission || 'Automatic'),
      fuel: String(fuel || 'Petrol'),
      category: String(category || 'Sedan'),
      status: String(status || 'New arrival'),
      sellerId: String(sellerId),
      image: String(image || 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80'),
      description: String(description || 'Fresh listing from Norcal.'),
      views: 0
    }
  });

  return NextResponse.json({ car }, { status: 201 });
}
