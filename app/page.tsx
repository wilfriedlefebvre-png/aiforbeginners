import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome</h1>
        <Link
          href="/ai-for-beginners"
          className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition"
        >
          Go to AI for Beginners Page
        </Link>
      </div>
    </main>
  );
}

