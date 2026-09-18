'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCurrentUser, getUsers, saveUserProfile, type User } from '@/lib/norcal-data';

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    language: 'English',
    currency: 'USD - US Dollar',
    country: 'United States',
    bio: ''
  });

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    setUser(currentUser);
    setForm({
      name: currentUser.name,
      email: currentUser.email,
      language: currentUser.language,
      currency: currentUser.currency,
      country: currentUser.country,
      bio: currentUser.bio || ''
    });
  }, []);

  const saveProfile = () => {
    if (!user) return;
    const updatedUser = saveUserProfile({
      ...user,
      name: form.name,
      email: form.email,
      language: form.language,
      currency: form.currency,
      country: form.country,
      bio: form.bio
    });
    setUser(updatedUser);
  };

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md rounded-[32px] bg-white p-8 text-center shadow-soft border border-slate-200">
          <div className="text-3xl font-black">Sign in required</div>
          <p className="mt-3 text-slate-600">Log in to manage your account and privacy settings.</p>
          <Link href="/login" className="mt-6 inline-flex rounded-full bg-green-600 px-5 py-3 font-bold text-white">Log in</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-green-700">Account</div>
            <h1 className="mt-2 text-4xl font-black">My profile settings</h1>
          </div>
          <Link href="/dashboard" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Dashboard</Link>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
            <input value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
            <input value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Language</label>
            <select value={form.language} onChange={(e) => setForm((prev) => ({ ...prev, language: e.target.value }))} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              {['English', 'Español', 'Français', 'Deutsch', 'العربية', 'हिन्दी', '日本語', '한국어'].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Currency</label>
            <select value={form.currency} onChange={(e) => setForm((prev) => ({ ...prev, currency: e.target.value }))} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              {['USD - US Dollar', 'EUR - Euro', 'GBP - British Pound', 'CAD - Canadian Dollar', 'AUD - Australian Dollar', 'INR - Indian Rupee', 'AED - Dirham'].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Country</label>
            <select value={form.country} onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>India</option>
              <option>United Arab Emirates</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">About</label>
            <textarea value={form.bio} onChange={(e) => setForm((prev) => ({ ...prev, bio: e.target.value }))} rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-900 p-5 text-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.12em] text-slate-300">Upgrade</div>
              <div className="mt-2 text-2xl font-black">Norcal Pro</div>
            </div>
            <button className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-bold text-white">Upgrade</button>
          </div>
        </div>

        <button onClick={saveProfile} className="mt-8 rounded-2xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-500">Save changes</button>
      </div>
    </main>
  );
}
