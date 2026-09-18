'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCars, getCurrentUser, type Car } from '@/lib/norcal-data';

export default function DashboardPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(getCurrentUser());
    setCars(getCars());
  }, []);

  const stats = [
    ['4.8k', 'Profile views'],
    ['96', 'Listings'],
    ['18', 'Messages'],
    ['71%', 'Offer response']
  ];

  const posts = cars.slice(0, 3).map((car) => ({
    title: car.name,
    views: `${car.views} views`,
    status: car.status
  }));

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-green-700">Dashboard</div>
            <h1 className="mt-2 text-4xl font-black">Your Norcal account overview</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/create-listing" className="inline-flex rounded-full bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-500">
              + New listing
            </Link>
            <Link href="/" className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 hover:border-slate-300">
              Back to site
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {stats.map(([value, label]) => (
            <div key={label} className="card rounded-3xl p-5">
              <div className="text-3xl font-black">{value}</div>
              <div className="mt-2 text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="card rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black">Recent posts</h2>
              <Link href="/create-listing" className="rounded-full bg-green-600 px-4 py-2 text-sm font-bold text-white">+ New listing</Link>
            </div>
            <div className="mt-6 space-y-4">
              {posts.map((post) => (
                <div key={post.title} className="rounded-2xl border border-slate-200 p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold">{post.title}</div>
                    <div className="text-sm text-slate-500">{post.views}</div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{post.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card rounded-3xl p-6">
            <h2 className="text-2xl font-black">Privacy settings</h2>
            <div className="mt-6 space-y-4">
              {[
                ['Profile visibility', 'Public'],
                ['Private messages', 'Everyone'],
                ['Contact details', 'Visible only to serious buyers'],
                ['Location', 'City and country']
              ].map(([label, status]) => (
                <div key={label} className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-3">
                  <div className="text-sm font-medium text-slate-700">{label}</div>
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">{status}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 p-4 text-white">
              <div className="text-xs uppercase tracking-[0.12em] text-slate-300">Account</div>
              <div className="mt-3 text-lg font-bold">{user?.name || 'Guest User'}</div>
              <div className="text-sm text-slate-300">{user?.email || 'guest@norcal.com'}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
