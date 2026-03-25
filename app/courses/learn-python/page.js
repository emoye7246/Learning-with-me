'use client';

import Link from 'next/link';
import { curriculum, lessons } from './lessons';
import { useProgress } from '../../hooks/useProgress';

const lessonById = lessons.reduce((acc, l) => {
  if (l?.id) acc[l.id] = l;
  return acc;
}, {});

function StripeBar({ className = '' }) {
  return (
    <div className={`flex gap-[3px] ${className}`}>
      <div className="w-1.5 rounded-sm bg-[#568A99]" />
      <div className="w-1.5 rounded-sm bg-[#E9A716]" />
      <div className="w-1.5 rounded-sm bg-[#C7481D]" />
    </div>
  );
}

export default function LearnPythonTocPage() {
  const { completed, percent } = useProgress(lessons);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#1A1A1A] text-[#1F1F1F] dark:text-white">

      {/* Breadcrumb nav */}
      <div className="border-b border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-[#1A1A1A] px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group" title="Home">
            <StripeBar className="h-4" />
            <span className="text-sm font-medium text-[#6B7280] dark:text-[#A89F8C] group-hover:text-[#568A99] dark:group-hover:text-[#8BBCC9] transition-colors">
              LWM
            </span>
          </Link>
          <span className="text-[#D1D5DB] dark:text-white/20">/</span>
          <span className="text-sm font-medium text-[#1F1F1F] dark:text-white">
            Learn Python
          </span>
        </div>
      </div>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-10">

        {/* Page header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-1">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#568A99]/15 font-mono text-sm font-bold text-[#3D6878] dark:text-[#8BBCC9]">
              py
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Learn Python
            </h1>
          </div>
          <p className="mt-2 text-[#6B7280] dark:text-[#A89F8C] pl-[52px]">
            Work through the course in order, or jump to any lesson below.
          </p>

          {/* Progress bar */}
          {percent > 0 && (
            <div className="mt-5 pl-[52px] flex items-center gap-3">
              <div className="flex-1 h-1.5 max-w-xs bg-[#DDD0B5] dark:bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#568A99] rounded-full transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <span className="text-sm text-[#6B7280] dark:text-[#A89F8C] tabular-nums">
                {Math.round(percent)}% complete
              </span>
            </div>
          )}

          {/* Brand stripe divider */}
          <div className="mt-6 flex gap-[3px] h-[3px]">
            <div className="w-10 rounded-full bg-[#568A99]" />
            <div className="w-10 rounded-full bg-[#E9A716]" />
            <div className="w-10 rounded-full bg-[#C7481D]" />
          </div>
        </header>

        {/* Modules + lessons */}
        <div className="space-y-8">
          {curriculum.map((module) => (
            <section key={module.id}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] dark:text-[#A89F8C] mb-3">
                {module.title}
              </h2>

              <ul className="rounded-2xl border border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-[#242424] overflow-hidden divide-y divide-[#E5E7EB]/60 dark:divide-white/5">
                {module.lessonIds.map((lessonId, idx) => {
                  const lesson = lessonById[lessonId];
                  const done = completed(lessonId);
                  const title = lesson?.title ?? lessonId;

                  return (
                    <li key={lessonId}>
                      <Link
                        href={`/courses/learn-python/lesson?lesson=${encodeURIComponent(lessonId)}`}
                        className="flex items-center gap-3 py-3 px-4 text-[#374151] dark:text-white/85 hover:bg-[#F4F4F5]/50 dark:hover:bg-white/5 hover:text-[#111827] dark:hover:text-white transition-colors group"
                      >
                        {/* Status indicator */}
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden>
                          {done ? (
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#568A99]/15 text-[#568A99] dark:text-[#8BBCC9] text-xs font-bold">
                              ✓
                            </span>
                          ) : (
                            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#E5E7EB] dark:border-white/15 text-[#9CA3AF] text-xs">
                              {idx + 1}
                            </span>
                          )}
                        </span>

                        <span className="flex-1 text-sm">{title}</span>

                        <svg
                          width="14" height="14" viewBox="0 0 14 14" fill="none"
                          className="text-[#D1D5DB] dark:text-white/20 group-hover:text-[#568A99] dark:group-hover:text-[#8BBCC9] transition-colors"
                        >
                          <path d="M2.5 7h9m0 0L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        {/* CTA footer */}
        <div className="mt-10 pt-6 border-t border-[#E5E7EB] dark:border-white/10 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/courses/learn-python/lesson"
            className="inline-flex items-center gap-2 rounded-xl bg-[#568A99] hover:bg-[#3D6878] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors"
          >
            Start from lesson 1
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9m0 0L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/"
            className="text-sm text-[#6B7280] dark:text-[#A89F8C] hover:text-[#568A99] dark:hover:text-[#8BBCC9] transition-colors"
          >
            ← Back to all courses
          </Link>
        </div>
      </main>
    </div>
  );
}
