'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/lib/norcal-data';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (getCurrentUser()) router.push('/dashboard');
  }, [router]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid login');
      }

      localStorage.setItem('norcal_current_user', JSON.stringify(data.user));
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid login');
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <Link href="/" className="inline-flex items-center gap-3 text-lg font-bold text-slate-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white">N</div>
          Norcal
        </Link>

        <h1 className="mt-8 text-3xl font-black">Log in</h1>
        <p className="mt-2 text-slate-600">Welcome back — manage listings, chats, and your dashboard.</p>

        <form className="mt-8 space-y-5" onSubmit={submit}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
            <input
              type="password"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error ? <div className="rounded-2xl bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div> : null}

          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-green-600" />
              Remember me
            </label>
            <Link href="/forgot" className="font-semibold text-green-700">Forgot password?</Link>
          </div>

          <button type="submit" className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-base font-bold text-white hover:bg-slate-800">
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Don’t have an account? <Link href="/signup" className="font-bold text-green-700">Create one</Link>
        </div>
      </div>
    </main>
  );
}
