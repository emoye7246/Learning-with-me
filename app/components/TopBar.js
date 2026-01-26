'use client';

import { useTheme } from './ThemeProvider';

export default function TopBar({
  lessonTitle,
  progress,
  mode = "article",
  onPrev,
  onNext,
  onStartChallenge,
  onBackToArticle,
  canGoPrev = true,
  canGoNext = true,
  isCompleted = false,
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 truncate">
          {lessonTitle}
        </h1>
        <div className="hidden sm:flex items-center gap-2 flex-1 max-w-xs">
          <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300"
              style={{ width: `${Math.max(0, Math.min(progress, 100))}%` }}
            />
          </div>
          <span className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
            {Math.round(progress)}%
          </span>
          {isCompleted && (
            <span className="text-green-600 dark:text-green-400 text-lg" title="Lesson completed">
              ✓
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          type="button"
          aria-label="Toggle dark mode"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* Article mode: Start Challenge primary, Previous optional, Skip link */}
        {mode === "article" ? (
          <>
            {onPrev && (
              <button
                onClick={onPrev}
                disabled={!canGoPrev}
                className="px-3 py-1.5 text-sm rounded border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                type="button"
              >
                Previous Lesson
              </button>
            )}

            <button
              onClick={onStartChallenge}
              className="px-4 py-1.5 text-sm rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors whitespace-nowrap"
              type="button"
            >
              Start Challenge →
            </button>

            {/* Optional: tiny skip link */}
            {onNext && (
              <button
                onClick={onNext}
                disabled={!canGoNext}
                className="px-2 py-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                type="button"
              >
                Skip
              </button>
            )}
          </>
        ) : (
          /* Challenge mode: Back to Article / Next navigation */
          <>
            {onBackToArticle && (
              <button
                onClick={onBackToArticle}
                className="px-3 py-1.5 text-sm rounded border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                type="button"
              >
                ← Back to Article
              </button>
            )}

            {onNext && (
              <button
                onClick={onNext}
                disabled={!canGoNext}
                className="px-3 py-1.5 text-sm rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                type="button"
              >
                Next Lesson
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

