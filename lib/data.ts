import Link from 'next/link';
import { featuredCars, profiles } from '@/lib/data';

export default function ProfilePage({ params }: { params: { userId: string } }) {
  const profile = profiles.find((item) => item.id === params.userId) ?? profiles[0];
  const sellerCars = featuredCars.filter((car) => car.sellerId === profile.id);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-300">
          ← Back to marketplace
        </Link>

        <div className="card rounded-[32px] p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img src={profile.avatar} alt={profile.name} className="h-24 w-24 rounded-full object-cover ring-4 ring-green-100" />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="text-3xl font-black">{profile.name}</div>
                  <div className="text-slate-500">{profile.role} • {profile.location}</div>
                </div>
                <button className="rounded-full bg-green-600 px-5 py-2.5 font-bold text-white hover:bg-green-500">Message seller</button>
              </div>
              <p className="mt-5 max-w-2xl text-slate-600">{profile.bio}</p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Seller rating</div>
              <div className="mt-2 text-3xl font-black">4.9/5</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Listings</div>
              <div className="mt-2 text-3xl font-black">{sellerCars.length}</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Response time</div>
              <div className="mt-2 text-3xl font-black">2h</div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-black">Seller listings</h2>
          <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sellerCars.map((car) => (
              <article key={car.id} className="card overflow-hidden rounded-3xl">
                <img src={car.image} alt={car.name} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{car.name}</h3>
                      <div className="text-sm text-slate-500">{car.location}</div>
                    </div>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">{car.status}</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="text-2xl font-black">${car.price}</div>
                    <Link href="/listings" className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-slate-300">
                      View vehicle
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
