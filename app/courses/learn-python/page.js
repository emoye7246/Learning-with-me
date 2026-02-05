'use client';

import Link from 'next/link';
import { curriculum, lessons } from './lessons';
import { useProgress } from '../../hooks/useProgress';

/**
 * Build a map: lessonId -> lesson (for titles in ToC)
 */
const lessonById = lessons.reduce((acc, l) => {
  if (l?.id) acc[l.id] = l;
  return acc;
}, {});

export default function LearnPythonTocPage() {
  const { completed, percent } = useProgress(lessons);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Breadcrumb */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-sm">
          <Link
            href="/"
            className="font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            ← Learning Center
          </Link>
          <span className="text-zinc-400 dark:text-zinc-500">/</span>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Learn Python
          </span>
        </div>
      </div>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Learn Python
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Work through the course in order or jump to any lesson below.
          </p>
          {percent > 0 && (
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 h-2 max-w-xs bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 dark:bg-blue-500 transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {Math.round(percent)}% complete
              </span>
            </div>
          )}
        </header>

        {/* Table of contents by module */}
        <div className="space-y-8">
          {curriculum.map((module) => (
            <section key={module.id}>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                {module.title}
              </h2>
              <ul className="space-y-1">
                {module.lessonIds.map((lessonId) => {
                  const lesson = lessonById[lessonId];
                  const done = completed(lessonId);
                  const title = lesson?.title ?? lessonId;

                  return (
                    <li key={lessonId}>
                      <Link
                        href={`/courses/learn-python/lesson?lesson=${encodeURIComponent(lessonId)}`}
                        className="flex items-center gap-3 py-2 px-3 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
                      >
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors"
                          aria-hidden
                        >
                          {done ? (
                            <span className="text-green-600 dark:text-green-400" title="Completed">
                              ✓
                            </span>
                          ) : (
                            <span className="bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-600">
                              ·
                            </span>
                          )}
                        </span>
                        <span className="flex-1">{title}</span>
                        <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400">
                          →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/courses/learn-python/lesson"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Start from the first lesson
            <span>→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
