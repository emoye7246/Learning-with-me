'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

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
  return (
    <div className="w-full border-b border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-[#1A1A1A] px-4 py-3 flex items-center justify-between">
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
          <span className="text-xs text-black/60 dark:text-white whitespace-nowrap tabular-nums">
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
        {/* <ThemeToggle /> */}

        {/* Article mode buttons */}
        {mode === "article" ? (
          <>
            {onPrev && (
              <button
                onClick={onPrev}
                disabled={!canGoPrev}
                className="px-3 py-1.5 text-sm rounded-lg border border-[#E5E7EB] dark:border-white/15 text-[#1F1F1F] dark:text-white hover:bg-[#F4F4F5] dark:hover:bg-white/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
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
                    ? "text-xs text-[#6B7280] dark:text-[#A89F8C] hover:text-[#111827] dark:hover:text-white"
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
                className="px-3 py-1.5 text-sm rounded-lg border border-[#E5E7EB] dark:border-white/15 text-[#1F1F1F] dark:text-white hover:bg-[#F4F4F5] dark:hover:bg-white/10 transition-colors"
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
