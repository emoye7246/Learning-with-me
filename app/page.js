'use client';

import Link from 'next/link';
import Image from 'next/image';

/* ─── Brand stripe decoration ──────────────────────────────────────────── */
function StripeBar({ className = '' }) {
  return (
    <div className={`flex gap-[3px] ${className}`}>
      <div className="w-2 rounded-sm bg-[#568A99]" />
      <div className="w-2 rounded-sm bg-[#E9A716]" />
      <div className="w-2 rounded-sm bg-[#C7481D]" />
    </div>
  );
}

/* ─── Course card ──────────────────────────────────────────────────────── */
function CourseCard({ href, tag, tagBg, tagColor, title, description, cta = 'Start learning' }) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-2xl border border-[#DDD0B5] bg-[#FFFDF5] p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#568A99]/60 hover:shadow-md dark:border-white/10 dark:bg-[#213444] dark:hover:border-[#8BBCC9]/50"
    >
      {/* accent bar top */}
      <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#568A99] via-[#E9A716] to-[#C7481D] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      <div className="flex items-start gap-4 mb-4">
        <span
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
          style={{ background: tagBg, color: tagColor }}
        >
          {tag}
        </span>
        <h3 className="mt-1.5 text-lg font-semibold text-[#1F1F1F] transition-colors group-hover:text-[#568A99] dark:text-[#F2E4C4] dark:group-hover:text-[#8BBCC9]">
          {title}
        </h3>
      </div>

      <p className="text-sm leading-relaxed text-[#6B6456] dark:text-[#A89F8C]">
        {description}
      </p>

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#568A99] group-hover:underline dark:text-[#8BBCC9]">
        {cta}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
          <path d="M2.5 7h9m0 0L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

/* ─── Coming soon card ─────────────────────────────────────────────────── */
function ComingSoonCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-dashed border-[#DDD0B5] bg-[#FAF3E0]/60 p-6 dark:border-white/10 dark:bg-[#213444]/40">
      <div className="flex items-start gap-4 mb-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDE3CC] font-mono text-sm text-[#A89F8C] dark:bg-white/10 dark:text-[#6B6456]">
          ?
        </span>
        <h3 className="mt-1.5 text-lg font-semibold text-[#A89F8C] dark:text-[#6B6456]">
          More coming soon
        </h3>
      </div>
      <p className="text-sm text-[#A89F8C] dark:text-[#6B6456]">
        New languages and courses are on the way.
      </p>
    </div>
  );
}

/* ─── Feature callout ──────────────────────────────────────────────────── */
function Feature({ color, title, body }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 h-5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
      <div>
        <p className="font-semibold text-[#1F1F1F] dark:text-[#F2E4C4]">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-[#6B6456] dark:text-[#A89F8C]">{body}</p>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF3E0] text-[#1F1F1F] dark:bg-[#1B2D3C] dark:text-[#F2E4C4]">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 border-b border-[#DDD0B5]/80 bg-[#FAF3E0]/90 backdrop-blur-md dark:border-white/10 dark:bg-[#1B2D3C]/90">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <StripeBar className="h-6" />
            <span className="font-semibold tracking-tight text-[#1F1F1F] transition-opacity group-hover:opacity-70 dark:text-[#F2E4C4]">
              LWM
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/courses/learn-python"
              className="text-sm text-[#6B6456] transition-colors hover:text-[#568A99] dark:text-[#A89F8C] dark:hover:text-[#8BBCC9]"
            >
              Python
            </Link>
            <Link
              href="/courses/learn-python"
              className="rounded-lg bg-[#568A99] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#3D6878]"
            >
              Start free
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Decorative vertical stripes — echoes the logo & inspiration images */}
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-32 flex-col gap-[6px] lg:flex" aria-hidden>
          <div className="flex h-full gap-[6px] opacity-[0.07] dark:opacity-[0.12]">
            <div className="flex-1 bg-[#568A99]" />
            <div className="flex-1 bg-[#8BBCC9]" />
            <div className="flex-1 bg-[#E9A716]" />
            <div className="flex-1 bg-[#C7481D]" />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DDD0B5] bg-[#FFFDF5] px-3 py-1 text-xs font-medium text-[#6B6456] dark:border-white/10 dark:bg-white/5 dark:text-[#A89F8C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#568A99]" />
              Built for the AI era
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Coding is more{' '}
              <span className="relative inline-block">
                powerful
                {/* underline accent in brand amber */}
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[#E9A716]" />
              </span>
              {' '}than ever.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#6B6456] dark:text-[#A89F8C] sm:text-xl">
              Everyone says AI is replacing code. They&apos;re wrong. Knowing how
              to think in code — precisely, logically — is exactly what makes
              you 10× more effective with AI. This is where you learn that.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/courses/learn-python"
                className="rounded-xl bg-[#568A99] px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#3D6878] hover:shadow-md"
              >
                Start with Python — free
              </Link>
              <Link
                href="#courses"
                className="text-sm font-medium text-[#568A99] underline-offset-4 hover:underline dark:text-[#8BBCC9]"
              >
                Browse courses ↓
              </Link>
            </div>
          </div>
        </div>

        {/* Divider stripe — full-width diagonal motif */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#568A99] via-[#E9A716] to-[#C7481D]" />
      </section>

      {/* ── Why section ─────────────────────────────────────────────────── */}
      <section className="bg-[#F2E4C4]/50 py-16 dark:bg-[#213444]/40 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                The language of precision
              </h2>
              <p className="mt-4 text-[#6B6456] dark:text-[#A89F8C]">
                AI agents do exactly what you tell them. The more precisely you
                can think and communicate — the more extraordinary your results.
                That clarity starts with understanding code.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <Feature
                color="#568A99"
                title="Think, don't just prompt"
                body="Understanding code structure helps you write better prompts, debug AI output, and know when something's wrong."
              />
              <Feature
                color="#E9A716"
                title="Run real code in the browser"
                body="No setup, no installs. Write Python, see results instantly. Every lesson is a feedback loop."
              />
              <Feature
                color="#C7481D"
                title="Progress that sticks"
                body="Bite-sized lessons with pass/fail tests. You don't move on until you actually get it."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Courses ─────────────────────────────────────────────────────── */}
      <section id="courses" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Courses</h2>
              <p className="mt-1 text-sm text-[#6B6456] dark:text-[#A89F8C]">
                Start with the fundamentals, build from there.
              </p>
            </div>
            <StripeBar className="mb-1 h-8 ml-auto shrink-0" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <CourseCard
              href="/courses/learn-python"
              tag="py"
              tagBg="rgba(86,138,153,0.15)"
              tagColor="#3D6878"
              title="Learn Python"
              description="Variables, functions, data structures, and control flow. Write real code and pass real tests — from your first line to full programs."
            />
            <ComingSoonCard />
            <div className="hidden lg:block">
              <ComingSoonCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1B2D3C] py-16 text-[#F2E4C4]">
        {/* subtle stripe texture on the right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 opacity-10" aria-hidden>
          <div className="flex h-full gap-[4px]">
            <div className="flex-1 bg-[#568A99]" />
            <div className="flex-1 bg-[#E9A716]" />
            <div className="flex-1 bg-[#C7481D]" />
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to start?</h2>
          <p className="mt-3 text-[#A89F8C]">
            Begin with Python — no account required, no setup needed.
          </p>
          <Link
            href="/courses/learn-python"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#E9A716] px-7 py-3.5 text-base font-semibold text-[#1B2D3C] shadow-md transition-all hover:bg-[#C48A0A] hover:shadow-lg"
          >
            Open Python course
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#DDD0B5] bg-[#FAF3E0] py-8 dark:border-white/10 dark:bg-[#1B2D3C]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              <StripeBar className="h-5" />
              <span className="text-sm font-medium text-[#6B6456] dark:text-[#A89F8C]">LWM</span>
            </div>
            <p className="text-xs text-[#A89F8C] dark:text-[#6B6456]">
              Learn With Me — interactive coding for the AI era
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
