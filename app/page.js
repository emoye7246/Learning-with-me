'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col bg-zinc-950 text-zinc-100"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url("/Black%20White%20Dark%20Futuristic%20Coming%20Soon%20Website%20Coming%20Soon%20Page.svg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Header */}
      <header className="border-b border-white/10 bg-black/35 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link
              href="/"
              className="text-lg font-semibold text-white transition-colors hover:text-zinc-300"
            >
              Learning Center
            </Link>
            <nav className="flex items-center gap-6">
              {/* Placeholder for future nav items */}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Learn to code, interactively
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto">
            Work through lessons, write code in the browser, and get instant feedback. No setup required.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="flex-1 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Courses
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Python course card */}
            <Link
              href="/courses/learn-python"
              className="group block rounded-xl border border-white/10 bg-black/45 p-6 shadow-sm backdrop-blur-xs transition-all hover:border-blue-400/50 hover:bg-black/55 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/15 text-amber-300 font-mono text-sm font-semibold">
                  py
                </span>
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
                  Learn Python
                </h3>
              </div>
              <p className="text-sm text-zinc-300">
                From basics to functions, data structures, and more. Run Python in the browser and pass tests as you go.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-300 group-hover:underline">
                Start course
                <span className="ml-1">→</span>
              </span>
            </Link>

            {/* Placeholder cards for future courses */}
            <div className="rounded-xl border border-dashed border-white/15 bg-black/25 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-zinc-400 font-mono text-sm">
                  ?
                </span>
                <h3 className="text-lg font-semibold text-zinc-300">
                  More coming soon
                </h3>
              </div>
              <p className="text-sm text-zinc-400">
                Additional courses will appear here.
              </p>
            </div>
            <div className="hidden rounded-xl border border-dashed border-white/15 bg-black/25 p-6 lg:block">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-zinc-400 font-mono text-sm">
                  ?
                </span>
                <h3 className="text-lg font-semibold text-zinc-300">
                  More coming soon
                </h3>
              </div>
              <p className="text-sm text-zinc-400">
                Additional courses will appear here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-zinc-400">
            Learning Center — Interactive coding courses
          </p>
        </div>
      </footer>
    </div>
  );
}
