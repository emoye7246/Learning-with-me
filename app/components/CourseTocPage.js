'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useProgress } from '../hooks/useProgress';

function StripeBar({ className = '' }) {
  return (
    <div className={`flex gap-[3px] ${className}`}>
      <div className="w-1.5 rounded-sm bg-[#568A99]" />
      <div className="w-1.5 rounded-sm bg-[#E9A716]" />
      <div className="w-1.5 rounded-sm bg-[#C7481D]" />
    </div>
  );
}

function CircularProgressBadge({
  percent,
  imageSrc,
  imageAlt,
  shortTag,
  tagBg,
  tagColor,
  title,
}) {
  const normalizedPercent = Math.max(0, Math.min(100, percent));
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (normalizedPercent / 100) * circumference;

  return (
    <div className="relative h-28 w-28">
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 80 80" aria-hidden>
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke="rgba(221, 208, 181, 0.9)"
          strokeWidth="4"
          className="dark:stroke-white/10"
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke="url(#course-progress-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500"
        />
        <defs>
          <linearGradient id="course-progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#568A99" />
            <stop offset="50%" stopColor="#E9A716" />
            <stop offset="100%" stopColor="#C7481D" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-[12px] flex items-center justify-center rounded-full border border-[#E5E7EB] bg-[#FFFDF5] dark:border-white/10 dark:bg-[#242424]">
        <span
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden"
          style={{ background: tagBg, color: tagColor }}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          ) : (
            <span className="font-mono text-sm font-bold">{shortTag}</span>
          )}
        </span>
      </div>

      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#6B7280] shadow-sm dark:border-white/10 dark:bg-[#242424] dark:text-[#A89F8C]">
        {Math.round(normalizedPercent)}%
      </div>
    </div>
  );
}

export default function CourseTocPage({
  title,
  shortTag,
  tagBg,
  tagColor,
  imageSrc,
  imageAlt,
  curriculum,
  lessons,
  lessonHrefBase,
}) {
  const { completed, percent } = useProgress(lessons);

  const lessonById = lessons.reduce((acc, l) => {
    if (l?.id) acc[l.id] = l;
    return acc;
  }, {});

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#1A1A1A] text-[#1F1F1F] dark:text-white">
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
            {title}
          </span>
        </div>
      </div>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-10">
        <header className="mb-10">
          <div className="flex flex-col items-center text-center">
            <CircularProgressBadge
              percent={percent}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              shortTag={shortTag}
              tagBg={tagBg}
              tagColor={tagColor}
              title={title}
            />

            <h1 className="mt-7 text-2xl sm:text-3xl font-bold tracking-tight">
              {title}
            </h1>
          </div>

          <p className="mt-3 text-center text-[#6B7280] dark:text-white">
            Work through the course in order, or jump to any lesson below.
          </p>

          <div className="mt-6 flex justify-center gap-[3px] h-[3px]">
            <div className="w-10 rounded-full bg-[#568A99]" />
            <div className="w-10 rounded-full bg-[#E9A716]" />
            <div className="w-10 rounded-full bg-[#C7481D]" />
          </div>
        </header>

        <div className="space-y-8">
          {curriculum.map((module) => (
            <section key={module.id}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] dark:text-white mb-3">
                {module.title}
              </h2>

              <ul className="rounded-2xl border border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-[#242424] overflow-hidden divide-y divide-[#E5E7EB]/60 dark:divide-white/5">
                {module.lessonIds.map((lessonId, idx) => {
                  const lesson = lessonById[lessonId];
                  const done = completed(lessonId);
                  const lessonTitle = lesson?.title ?? lessonId;

                  return (
                    <li key={lessonId}>
                      <Link
                        href={`${lessonHrefBase}?lesson=${encodeURIComponent(lessonId)}`}
                        className="flex items-center gap-3 py-3 px-4 text-[#374151] dark:text-white/85 hover:bg-[#F4F4F5]/50 dark:hover:bg-white/5 hover:text-[#111827] dark:hover:text-white transition-colors group"
                      >
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

                        <span className="flex-1 text-sm">{lessonTitle}</span>

                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
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

        <div className="mt-10 pt-6 border-t border-[#E5E7EB] dark:border-white/10 flex items-center justify-between flex-wrap gap-4">
          <Link
            href={lessonHrefBase}
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
