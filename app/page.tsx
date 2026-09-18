import Link from 'next/link';
import { defaultCars, featuredCars, supportedLanguages, supportedCurrencies, defaultUsers } from '@/lib/norcal-data';

export default function HomePage() {
  const featured = featuredCars(defaultCars);
  const stats = [
    { value: '30k+', label: 'Active buyers' },
    { value: '12k+', label: 'Cars sold' },
    { value: '99.4%', label: 'Satisfaction' }
  ];

  return (
    <main className="min-h-screen text-slate-900">
      <section className="max-w-7xl mx-auto px-4 pb-16 pt-10 md:pt-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]">
              Trusted by 30k+ drivers
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight tracking-tight">
              Buy, sell, and <span className="text-gradient">trade cars</span> with confidence.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Norcal is a global car marketplace where buyers discover great deals and sellers reach new customers with secure messaging, verified profiles, multilingual experiences, and premium upgrades.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signup" className="rounded-full bg-green-600 px-6 py-3 text-base font-bold text-white hover:bg-green-500">
                Start selling
              </Link>
              <Link href="/listings" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-700 hover:border-slate-400">
                Explore listings
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {stats.map((stat) => (
                <div key={stat.label} className="card rounded-2xl p-4">
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card rounded-[32px] p-5 md:p-7">
            <div className="rounded-[28px] overflow-hidden border border-slate-200 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury car"
                className="h-[540px] w-full object-cover"
              />
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-50 p-4 border border-slate-200">
              <div>
                <div className="text-sm text-slate-500">Featured vehicle</div>
                <div className="mt-1 text-xl font-bold">2023 Mercedes C-Class</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">From</div>
                <div className="text-2xl font-black text-green-600">$35,800</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="uppercase tracking-[0.12em] text-xs font-bold text-green-700">Featured listings</div>
            <h2 className="mt-2 text-3xl font-black">Handpicked cars for today’s shoppers</h2>
          </div>
          <Link href="/listings" className="text-sm font-bold text-slate-700 hover:text-slate-900">View all listings →</Link>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {featured.map((car) => (
            <article key={car.id} className="card overflow-hidden rounded-3xl">
              <img src={car.image} alt={car.name} className="h-52 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <p className="text-sm text-slate-500">{car.location}</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700">{car.status}</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-slate-600">
                  <div><span className="font-bold text-slate-800">{car.mileage}</span><br />miles</div>
                  <div><span className="font-bold text-slate-800">{car.transmission}</span><br />gear</div>
                  <div><span className="font-bold text-slate-800">{car.fuel}</span><br />fuel</div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Asking price</div>
                    <div className="text-2xl font-black">${car.price}</div>
                  </div>
                  <Link href={`/profile/${car.sellerId}`} className="rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                    View seller
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="uppercase tracking-[0.12em] text-xs font-bold text-green-300">How it works</div>
            <h2 className="mt-3 text-3xl font-black">Built for modern car buying and selling</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ['1. Create account', 'Choose your language, country, and currency preference to personalize your marketplace experience.'],
              ['2. List or discover', 'Post cars for sale or browse curated recommendations from trusted sellers across the globe.'],
              ['3. Buy securely', 'Message sellers, compare offers, and finalize purchases with transparent communication and tracking.']
            ].map(([title, text], index) => (
              <div key={title} className="rounded-3xl border border-slate-700 bg-slate-800 p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dashboard" className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="uppercase tracking-[0.12em] text-xs font-bold text-green-700">Seller dashboard</div>
            <h2 className="mt-2 text-3xl font-black">Track views, posts, and privacy</h2>
          </div>
          <Link href="/dashboard" className="rounded-full border border-slate-300 bg-white px-5 py-2.5 font-semibold text-slate-700 hover:border-slate-400">
            Open dashboard
          </Link>
        </div>

        <div className="mt-8 grid md:grid-cols-4 gap-5">
          {[
            ['4.8k', 'Profile views'],
            ['96', 'Active listings'],
            ['18', 'Messages this week'],
            ['71%', 'Offer acceptance rate']
          ].map(([value, label]) => (
            <div key={label} className="card rounded-2xl p-5">
              <div className="text-3xl font-black text-slate-900">{value}</div>
              <div className="mt-2 text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="bg-gradient-to-br from-green-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="uppercase tracking-[0.12em] text-xs font-bold text-green-700">Upgrade</div>
            <h2 className="mt-2 text-3xl font-black">Grow your sales with Norcal Pro</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="card rounded-3xl p-6">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-[0.12em]">Free</div>
              <div className="mt-5 text-4xl font-black">$0</div>
              <p className="mt-3 text-slate-600">Perfect for browsing, account creation, and listing a few cars.</p>
            </div>
            <div className="card rounded-3xl border-2 border-green-500 p-6 relative overflow-hidden">
              <div className="absolute right-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-bold uppercase text-white">Popular</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-[0.12em]">Pro</div>
              <div className="mt-5 text-4xl font-black">$29<span className="text-lg text-slate-500">/mo</span></div>
              <p className="mt-3 text-slate-600">Advanced analytics, more visibility, and boosted seller ranking.</p>
            </div>
            <div className="card rounded-3xl p-6">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-[0.12em]">Business</div>
              <div className="mt-5 text-4xl font-black">$99<span className="text-lg text-slate-500">/mo</span></div>
              <p className="mt-3 text-slate-600">Ideal for agencies and dealership teams with multiple car listings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="card rounded-[32px] p-8 md:p-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <div className="uppercase tracking-[0.12em] text-xs font-bold text-green-700">Creator revenue</div>
              <h2 className="mt-2 text-3xl font-black">The platform owner earns 5% on every completed sale.</h2>
              <p className="mt-4 text-slate-600">
                Every transaction includes a transparent commission model, so the creator of the marketplace gets paid as the network grows.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-6 text-white">
              <div className="text-sm uppercase tracking-[0.12em] text-slate-300">Payout summary</div>
              <div className="mt-6 text-4xl font-black">5%</div>
              <div className="mt-2 text-slate-300">of each sale revenue</div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-white/5 p-4"><div className="text-slate-300">This month</div><div className="mt-2 text-xl font-bold">$18,940</div></div>
                <div className="rounded-2xl bg-white/5 p-4"><div className="text-slate-300">Projected</div><div className="mt-2 text-xl font-bold">$24,150</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-black">Verified seller profiles</h2>
          <Link href="/signup" className="text-sm font-bold text-green-700">Join as a seller</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {defaultUsers.slice(0, 4).map((profile) => (
            <Link key={profile.id} href={`/profile/${profile.id}`} className="card rounded-3xl p-5 hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4">
                <img src={profile.avatar} alt={profile.name} className="h-14 w-14 rounded-full object-cover ring-2 ring-green-100" />
                <div>
                  <div className="font-bold text-lg">{profile.name}</div>
                  <div className="text-sm text-slate-500">{profile.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">{profile.bio}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="card rounded-[32px] p-8 md:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="uppercase tracking-[0.12em] text-xs font-bold text-green-700">Global availability</div>
              <h2 className="mt-2 text-3xl font-black">All languages and currencies in one marketplace</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="rounded-2xl bg-slate-50 p-4"><div className="font-bold text-slate-900">Languages</div><div className="mt-2">{supportedLanguages.slice(0, 5).join(', ')}</div></div>
              <div className="rounded-2xl bg-slate-50 p-4"><div className="font-bold text-slate-900">Currencies</div><div className="mt-2">{supportedCurrencies.slice(0, 5).join(', ')}</div></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
