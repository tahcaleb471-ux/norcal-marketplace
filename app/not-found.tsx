import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-soft">
        <div className="text-5xl font-black text-green-600">404</div>
        <h1 className="mt-4 text-3xl font-black">Page not found</h1>
        <p className="mt-3 text-slate-600">This Norcal page doesn’t exist yet.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-green-600 px-5 py-3 font-bold text-white">Return home</Link>
      </div>
    </main>
  );
}
