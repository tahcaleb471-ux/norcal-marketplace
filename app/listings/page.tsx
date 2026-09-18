'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { defaultCars, getCars, getCurrentUser, getMessagesForUser, saveUserProfile, sendMessage, type Car } from '@/lib/norcal-data';

export default function ListingsPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    setCars(getCars());
  }, []);

  const filteredCars = useMemo(() => {
    const query = search.toLowerCase();
    return cars.filter((car) => {
      const matchesQuery = !query || car.name.toLowerCase().includes(query) || car.location.toLowerCase().includes(query);
      const matchesFilter = activeFilter === 'All' || car.category === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [cars, search, activeFilter]);

  const filters = ['All', 'Sedan', 'SUV', 'Luxury', 'Electric'];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-green-700">Marketplace</div>
            <h1 className="mt-2 text-4xl font-black">Buy and sell cars across the world</h1>
          </div>
          <Link href="/create-listing" className="inline-flex rounded-full bg-green-600 px-5 py-3 font-bold text-white hover:bg-green-500">
            Sell a car
          </Link>
        </div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            className="w-full lg:max-w-lg rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-green-500"
            placeholder="Search by car name or city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  activeFilter === filter
                    ? 'bg-slate-900 text-white'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          <aside className="card rounded-3xl p-6 h-fit">
            <div className="text-xl font-black">Filters</div>
            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Country</label>
                <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>United Arab Emirates</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Price range</label>
                <input type="range" className="w-full accent-green-600" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Mileage</label>
                <input type="range" className="w-full accent-green-600" />
              </div>
            </div>
          </aside>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <article key={car.id} className="card overflow-hidden rounded-3xl">
                <img src={car.image} alt={car.name} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold">{car.name}</h3>
                      <div className="text-sm text-slate-500">{car.location}</div>
                    </div>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">{car.status}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
                    <span>{car.mileage} mi</span>
                    <span>•</span>
                    <span>{car.transmission}</span>
                    <span>•</span>
                    <span>{car.fuel}</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500">Price</div>
                      <div className="text-2xl font-black">${car.price}</div>
                    </div>
                    <Link href={`/profile/${car.sellerId}`} className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-slate-300">
                      View seller
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
