import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <Link href="/" className="inline-flex items-center gap-3 text-lg font-bold text-slate-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white">N</div>
          Norcal
        </Link>

        <h1 className="mt-8 text-3xl font-black">Log in</h1>
        <p className="mt-2 text-slate-600">Welcome back — manage listings, chats, and your dashboard.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
            <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500" placeholder="you@example.com" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
            <input type="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500" placeholder="••••••••" />
          </div>

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
