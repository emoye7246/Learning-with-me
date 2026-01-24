'use client';

export default function TopBar({ lessonTitle, progress, onNext, nextDisabled = false }) {
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
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
        type="button"
      >
        Next
      </button>
    </div>
  );
}

