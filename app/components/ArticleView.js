'use client';

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Lesson has an interactive challenge when hasChallenge !== false (default true). Kept for backwards compatibility. */
export function lessonHasChallenge(lesson) {
  return lesson?.hasChallenge !== false;
}

/** Renders lesson.support when present: string as markdown, or structured object (intro, level1Nudges, level2Hints, blueprint, etc.). */
function SupportSection({ support }) {
  const [revealSolution, setRevealSolution] = useState(false);

  if (!support) return null;

  // Plain string: render as markdown in a callout
  if (typeof support === "string") {
    return (
      <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 p-4">
          <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">
            Need help?
          </h3>
          <div className="prose prose-sm dark:prose-invert max-w-none text-amber-900 dark:text-amber-100">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{support}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }

  // Structured support object (e.g. mini-projects)
  const {
    intro,
    level1Nudges = [],
    level2Hints = [],
    blueprint = [],
    debuggingGuide = [],
    revealSolutionWarning,
    exampleSolution,
    upgrades,
  } = support;

  return (
    <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 overflow-hidden">
        <div className="p-4 border-b border-amber-200 dark:border-amber-800">
          <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100">
            Need help? (Use in order)
          </h3>
          {intro && (
            <div className="mt-2 text-sm text-amber-900 dark:text-amber-100 whitespace-pre-wrap">
              {intro}
            </div>
          )}
        </div>

        <div className="divide-y divide-amber-200 dark:divide-amber-800">
          {level1Nudges.length > 0 && (
            <details className="group">
              <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-amber-900 dark:text-amber-100 font-medium hover:bg-amber-100/50 dark:hover:bg-amber-900/30 [&::-webkit-details-marker]:hidden">
                <span>Level 1 — Nudges (questions to ask yourself)</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <ul className="px-4 pb-3 space-y-1 text-sm text-amber-900 dark:text-amber-100 list-disc list-inside">
                {level1Nudges.map((nudge, i) => (
                  <li key={i}>{nudge}</li>
                ))}
              </ul>
            </details>
          )}

          {level2Hints.length > 0 && (
            <details className="group">
              <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-amber-900 dark:text-amber-100 font-medium hover:bg-amber-100/50 dark:hover:bg-amber-900/30 [&::-webkit-details-marker]:hidden">
                <span>Level 2 — Hints (more direct)</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <ul className="px-4 pb-3 space-y-1 text-sm text-amber-900 dark:text-amber-100 list-disc list-inside">
                {level2Hints.map((hint, i) => (
                  <li key={i}>{hint}</li>
                ))}
              </ul>
            </details>
          )}

          {blueprint.length > 0 && (
            <details className="group">
              <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-amber-900 dark:text-amber-100 font-medium hover:bg-amber-100/50 dark:hover:bg-amber-900/30 [&::-webkit-details-marker]:hidden">
                <span>Blueprint (step-by-step structure, no code)</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <ol className="px-4 pb-3 space-y-1 text-sm text-amber-900 dark:text-amber-100 list-decimal list-inside">
                {blueprint.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </details>
          )}

          {debuggingGuide.length > 0 && (
            <details className="group">
              <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-amber-900 dark:text-amber-100 font-medium hover:bg-amber-100/50 dark:hover:bg-amber-900/30 [&::-webkit-details-marker]:hidden">
                <span>Debugging guide (common issues)</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <ul className="px-4 pb-3 space-y-3 text-sm text-amber-900 dark:text-amber-100">
                {debuggingGuide.map((item, i) => (
                  <li key={i}>
                    <strong>Problem:</strong> {item.problem}
                    <br />
                    <span className="text-amber-800 dark:text-amber-200">
                      <strong>Hint:</strong> {item.hint}
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          )}

          {upgrades && typeof upgrades === "object" && Object.keys(upgrades).length > 0 && (
            <details className="group">
              <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-amber-900 dark:text-amber-100 font-medium hover:bg-amber-100/50 dark:hover:bg-amber-900/30 [&::-webkit-details-marker]:hidden">
                <span>Upgrade blueprints (optional)</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-3 space-y-4 text-sm text-amber-900 dark:text-amber-100">
                {Object.entries(upgrades).map(([key, steps]) => (
                  <div key={key}>
                    <p className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                    {Array.isArray(steps) ? (
                      <ol className="list-decimal list-inside mt-1 space-y-0.5">
                        {steps.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ol>
                    ) : null}
                  </div>
                ))}
              </div>
            </details>
          )}

          {exampleSolution != null && (
            <div className="px-4 py-3">
              {!revealSolution ? (
                <button
                  type="button"
                  onClick={() => setRevealSolution(true)}
                  className="text-sm font-medium text-amber-800 dark:text-amber-200 hover:underline"
                >
                  Reveal example solution (use only if truly stuck)
                </button>
              ) : (
                <div>
                  {revealSolutionWarning && (
                    <p className="text-sm text-amber-900 dark:text-amber-100 mb-2 whitespace-pre-wrap">
                      {revealSolutionWarning}
                    </p>
                  )}
                  <pre className="p-3 rounded-lg bg-zinc-800 dark:bg-zinc-900 text-zinc-100 text-xs overflow-auto">
                    {exampleSolution}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ArticleView({
  lesson,
  onComplete,
  isCompleted = false,
  showCompleteButton = true,
}) {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-full overflow-auto p-6 bg-white dark:bg-zinc-900 scrollable">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                {lesson.title}
              </h1>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Read the lesson, then mark it complete when you&apos;re ready.
              </p>
            </div>
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

                // ✅ Keep normal paragraphs nice…
                p: ({ children }) => (
                  <p className="mb-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {children}
                  </p>
                ),

                ul: ({ children }) => (
                  <ul className="list-disc list-outside pl-6 mb-3 space-y-1 text-zinc-700 dark:text-zinc-300">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-outside pl-6 mb-3 space-y-1 text-zinc-700 dark:text-zinc-300">
                    {children}
                  </ol>
                ),

                // ✅ …but in list items, kill <p> margins so text doesn’t drop under the bullet
                li: ({ children }) => (
                  <li className="[&>p]:m-0 [&>p]:inline leading-relaxed">
                    {children}
                  </li>
                ),

                code: ({ inline, children }) => {
                  if (inline) {
                    return (
                      <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono text-sm">
                        {children}
                      </code>
                    );
                  }
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

          {lesson.support != null && (
            <SupportSection key={lesson.id} support={lesson.support} />
          )}

          {/* Complete lesson button at end of article */}
          {showCompleteButton && (
            <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              {isCompleted ? (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                  <span className="text-xl" aria-hidden>✓</span>
                  Lesson completed
                </div>
              ) : (
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    Finished reading? Mark this lesson complete to track your progress.
                  </p>
                  <button
                    onClick={onComplete}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors shrink-0"
                    type="button"
                  >
                    Complete lesson
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
