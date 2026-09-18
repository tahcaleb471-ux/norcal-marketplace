'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { addCar, getCars, getCurrentUser, type Car } from '@/lib/norcal-data';

export default function CreateListingPage() {
  const [user, setUser] = useState<any>(null);
  const [form, setForm] = useState({
    name: '',
    location: 'Los Angeles, US',
    price: '35000',
    mileage: '12000',
    transmission: 'Automatic',
    fuel: 'Petrol',
    category: 'Sedan',
    status: 'New arrival',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80'
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    if (!currentUser) {
      setMessage('Please sign in to list a car.');
    }
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setMessage('You must log in first.');
      return;
    }

    addCar({
      ...form,
      sellerId: user.id,
      views: 0,
      description: 'Fresh listing from the marketplace.'
    });

    setMessage('Vehicle listed successfully.');
    setForm({
      name: '',
      location: 'Los Angeles, US',
      price: '35000',
      mileage: '12000',
      transmission: 'Automatic',
      fuel: 'Petrol',
      category: 'Sedan',
      status: 'New arrival',
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80'
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-green-700">Create listing</div>
            <h1 className="mt-2 text-4xl font-black">Post a car for sale</h1>
          </div>
          <Link href="/dashboard" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
            Back to dashboard
          </Link>
        </div>

        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Vehicle name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
              placeholder="2024 Toyota Corolla"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Location</label>
            <input
              value={form.location}
              onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Price</label>
            <input
              type="number"
              value={form.price}
              onChange={(e) => setForm((prev) => ({ ...prev, price: e.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Mileage</label>
            <input
              value={form.mileage}
              onChange={(e) => setForm((prev) => ({ ...prev, mileage: e.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Transmission</label>
            <select
              value={form.transmission}
              onChange={(e) => setForm((prev) => ({ ...prev, transmission: e.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
            >
              <option>Automatic</option>
              <option>Manual</option>
              <option>Semi-Automatic</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Fuel</label>
            <select
              value={form.fuel}
              onChange={(e) => setForm((prev) => ({ ...prev, fuel: e.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
            >
              <option>Petrol</option>
              <option>Hybrid</option>
              <option>Electric</option>
              <option>Diesel</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
            >
              <option>Sedan</option>
              <option>SUV</option>
              <option>Luxury</option>
              <option>Electric</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Status</label>
            <select
              value={form.status}
              onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
            >
              <option>New arrival</option>
              <option>Certified</option>
              <option>Popular</option>
              <option>Premium</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Image URL</label>
            <input
              value={form.image}
              onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          {message ? <div className="md:col-span-2 rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">{message}</div> : null}

          <button type="submit" className="md:col-span-2 rounded-2xl bg-green-600 px-4 py-3 text-base font-bold text-white hover:bg-green-500">
            Publish listing
          </button>
        </form>
      </div>
    </main>
  );
}
