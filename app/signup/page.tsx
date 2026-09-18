'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, supportedCurrencies, supportedLanguages } from '@/lib/norcal-data';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    language: 'English',
    currency: 'USD - US Dollar',
    country: 'United States',
    role: 'buyer'
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (getCurrentUser()) router.push('/dashboard');
  }, [router]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to create account');
      }

      localStorage.setItem('norcal_current_user', JSON.stringify(data.user));
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to create account');
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-green-700 p-10 text-white">
            <Link href="/" className="inline-flex items-center gap-3 text-lg font-bold">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">N</div>
              Norcal
            </Link>
            <h1 className="mt-12 text-4xl font-black leading-tight">Create your account and start buying or selling today.</h1>
            <p className="mt-5 text-slate-200">
              Set your country, language, and currency preferences to get the best marketplace experience.
            </p>
            <div className="mt-10 space-y-4 text-sm text-slate-200">
              <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-green-400" /> Personal dashboard</div>
              <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-green-400" /> Buyer and seller profiles</div>
              <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-green-400" /> Secure messaging and privacy controls</div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black">Sign up</h2>
              <Link href="/login" className="text-sm font-semibold text-green-700">Log in</Link>
            </div>

            <form className="mt-8 space-y-5" onSubmit={submit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
                  <input
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
                    placeholder="Maya Lewis"
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Account type</label>
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
                    value={form.role}
                    onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
                  >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
                <input
                  type="password"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Language</label>
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
                    value={form.language}
                    onChange={(e) => setForm((prev) => ({ ...prev, language: e.target.value }))}
                  >
                    {supportedLanguages.map((language) => (
                      <option key={language} value={language}>{language}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Currency</label>
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
                    value={form.currency}
                    onChange={(e) => setForm((prev) => ({ ...prev, currency: e.target.value }))}
                  >
                    {supportedCurrencies.map((currency) => (
                      <option key={currency} value={currency}>{currency}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Country</label>
                <select
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
                  value={form.country}
                  onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))}
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>India</option>
                  <option>United Arab Emirates</option>
                  <option>Germany</option>
                  <option>Spain</option>
                </select>
              </div>

              {error ? <div className="rounded-2xl bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div> : null}

              <div className="rounded-2xl bg-green-50 p-4 text-sm text-green-800">
                <div className="font-bold">Creator commission</div>
                <div className="mt-1">The marketplace creator receives 5% from each completed sale.</div>
              </div>

              <button type="submit" className="w-full rounded-2xl bg-green-600 px-4 py-3 text-base font-bold text-white hover:bg-green-500">
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
