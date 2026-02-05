'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link
              href="/"
              className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Learn to code, interactively
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Work through lessons, write code in the browser, and get instant feedback. No setup required.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="flex-1 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
            Courses
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Python course card */}
            <Link
              href="/courses/learn-python"
              className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-mono text-sm font-semibold">
                  py
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Learn Python
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                From basics to functions, data structures, and more. Run Python in the browser and pass tests as you go.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                Start course
                <span className="ml-1">→</span>
              </span>
            </Link>

            {/* Placeholder cards for future courses */}
            <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/50 p-6 opacity-60">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500 font-mono text-sm">
                  ?
                </span>
                <h3 className="text-lg font-semibold text-zinc-500 dark:text-zinc-500">
                  More coming soon
                </h3>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Additional courses will appear here.
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/50 p-6 opacity-60 hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500 font-mono text-sm">
                  ?
                </span>
                <h3 className="text-lg font-semibold text-zinc-500 dark:text-zinc-500">
                  More coming soon
                </h3>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Additional courses will appear here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
            Learning Center — Interactive coding courses
          </p>
        </div>
      </footer>
    </div>
  );
}
