import Link from 'next/link';
import { featuredCars, languages, currencies, profiles, marketplaceStats } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="min-h-screen text-slate-900">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-lg font-bold text-white flex items-center justify-center shadow-lg shadow-emerald-200">
              N
            </div>
            <div>
              <div className="text-xl font-extrabold">Norcal</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#featured">Featured</Link>
            <Link href="#how-it-works">How it works</Link>
            <Link href="#dashboard">Dashboard</Link>
            <Link href="#plans">Plans</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/listings" className="hidden sm:inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold hover:border-slate-300">
              Browse cars
            </Link>
            <Link href="/login" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Log in
            </Link>
            <Link href="/signup" className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500">
              Create account
            </Link>
          </div>
        </div>
      </header>

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
              Norcal is a global car marketplace where buyers discover great deals and sellers reach new customers with secure messaging, verified profiles, and flexible pricing.
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
              {marketplaceStats.map((stat) => (
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
          {featuredCars.map((car) => (
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
              ['1. Create account', 'Choose your language and currency, set your country preference, and build your profile.'],
              ['2. List or discover', 'Post cars for sale or browse curated recommendations from trusted sellers around the world.'],
              ['3. Buy securely', 'Message sellers, compare offers, and finalize purchases with transparent tracking and payout flows.']
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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {profiles.slice(0, 4).map((profile) => (
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

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-slate-600">
          <div className="font-bold text-slate-900">Norcal</div>
          <div className="flex flex-wrap gap-5">
            <span>Global marketplace</span>
            <span>All languages</span>
            <span>All currencies</span>
            <span>Secure messaging</span>
          </div>
          <div className="text-slate-500">© 2026 Norcal</div>
        </div>
      </footer>
    </main>
  );
}
