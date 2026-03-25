'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';

function StripeBar({ className = '' }) {
  return (
    <div className={`flex gap-[3px] ${className}`}>
      <div className="w-1.5 rounded-sm bg-[#568A99]" />
      <div className="w-1.5 rounded-sm bg-[#E9A716]" />
      <div className="w-1.5 rounded-sm bg-[#C7481D]" />
    </div>
  );
}

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
  hasChallenge = true,
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full border-b border-[#DDD0B5] dark:border-white/10 bg-[#FAF3E0] dark:bg-[#1A1A1A] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Brand mark → home */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group" title="Back to home">
          <StripeBar className="h-5" />
        </Link>

        <span className="text-sm font-medium text-[#1F1F1F] dark:text-white truncate">
          {lessonTitle}
        </span>

        {/* Progress bar */}
        <div className="hidden sm:flex items-center gap-2 flex-1 max-w-xs">
          <div className="flex-1 h-1.5 bg-[#DDD0B5] dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#568A99] transition-all duration-300 rounded-full"
              style={{ width: `${Math.max(0, Math.min(progress, 100))}%` }}
            />
          </div>
          <span className="text-xs text-[#6B6456] dark:text-[#A89F8C] whitespace-nowrap tabular-nums">
            {Math.round(progress)}%
          </span>
          {isCompleted && (
            <span className="text-[#568A99] dark:text-[#8BBCC9] text-sm font-semibold" title="Lesson completed">
              ✓
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-[#6B6456] dark:text-[#A89F8C] hover:bg-[#EDE3CC] dark:hover:bg-white/10 transition-colors"
          type="button"
          aria-label="Toggle dark mode"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* Article mode buttons */}
        {mode === "article" ? (
          <>
            {onPrev && (
              <button
                onClick={onPrev}
                disabled={!canGoPrev}
                className="px-3 py-1.5 text-sm rounded-lg border border-[#DDD0B5] dark:border-white/15 text-[#1F1F1F] dark:text-white hover:bg-[#EDE3CC] dark:hover:bg-white/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                type="button"
              >
                ← Prev
              </button>
            )}

            {hasChallenge && onStartChallenge && (
              <button
                onClick={onStartChallenge}
                className="px-4 py-1.5 text-sm rounded-lg bg-[#568A99] hover:bg-[#3D6878] text-white font-medium transition-colors whitespace-nowrap"
                type="button"
              >
                Start Challenge →
              </button>
            )}

            {onNext && (
              <button
                onClick={onNext}
                disabled={!canGoNext}
                className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-colors whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed ${
                  hasChallenge
                    ? "text-xs text-[#6B6456] dark:text-[#A89F8C] hover:text-[#1F1F1F] dark:hover:text-[#F2E4C4]"
                    : "bg-[#568A99] hover:bg-[#3D6878] text-white"
                }`}
                type="button"
              >
                {hasChallenge ? "Skip" : "Next Lesson →"}
              </button>
            )}
          </>
        ) : (
          /* Challenge mode */
          <>
            {onBackToArticle && (
              <button
                onClick={onBackToArticle}
                className="px-3 py-1.5 text-sm rounded-lg border border-[#DDD0B5] dark:border-white/15 text-[#1F1F1F] dark:text-white hover:bg-[#EDE3CC] dark:hover:bg-white/10 transition-colors"
                type="button"
              >
                ← Back to Article
              </button>
            )}

            {onNext && (
              <button
                onClick={onNext}
                disabled={!canGoNext}
                className="px-4 py-1.5 text-sm rounded-lg bg-[#568A99] hover:bg-[#3D6878] text-white font-medium transition-colors whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed"
                type="button"
              >
                Next Lesson →
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
