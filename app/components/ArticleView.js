'use client';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Lesson has an interactive challenge when hasChallenge !== false (default true). */
export function lessonHasChallenge(lesson) {
  return lesson?.hasChallenge !== false;
}

export default function ArticleView({ lesson, onStart, hasChallenge }) {
  const showChallenge = hasChallenge ?? lessonHasChallenge(lesson);

  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-full overflow-auto p-6 bg-white dark:bg-zinc-900 scrollable">
        <div className="max-w-3xl mx-auto">
          {/* Top section with title and optional Start Challenge button */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                {lesson.title}
              </h1>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {showChallenge
                  ? "Read the lesson, then start the challenge when you're ready."
                  : "Read the lesson, then continue to the next when you're ready."}
              </p>
            </div>

            {showChallenge && (
              <button
                onClick={onStart}
                className="shrink-0 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors"
                type="button"
              >
                Start Challenge →
              </button>
            )}
          </div>

          <div className="mt-6 prose dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl font-bold mt-6 mb-3 text-zinc-900 dark:text-zinc-100">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl font-semibold mt-6 mb-2 text-zinc-900 dark:text-zinc-100">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-semibold mt-5 mb-2 text-zinc-900 dark:text-zinc-100">
                    {children}
                  </h3>
                ),
                pre: ({ children }) => (
                  <pre className="mb-4 p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 overflow-auto">
                    {children}
                  </pre>
                ),
                p: ({ children }) => (
                  <p className="mb-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-3 space-y-1 text-zinc-700 dark:text-zinc-300">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-3 space-y-1 text-zinc-700 dark:text-zinc-300">
                    {children}
                  </ol>
                ),

                code: ({ inline, children, className }) => {
                  if (inline) {
                    return (
                      <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono text-sm">
                        {children}
                      </code>
                    );
                  }

                  // block code is handled by <pre>, so just return code
                  return (
                    <code className="font-mono text-sm text-zinc-900 dark:text-zinc-100">
                      {children}
                    </code>
                  );
                },
                hr: () => <hr className="my-6 border-zinc-300 dark:border-zinc-700" />,
              }}
            >
              {lesson.article || "No article available for this lesson yet."}
            </ReactMarkdown>
          </div>

          {/* Bottom CTA — only when lesson has a challenge */}
          {showChallenge && (
            <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <div className="text-sm text-zinc-600 dark:text-zinc-300">
                Ready to practice? Let's lock it in.
              </div>
              <button
                onClick={onStart}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors"
                type="button"
              >
                Start Challenge →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
