'use client';

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function lessonHasChallenge(lesson) {
  return lesson?.hasChallenge !== false;
}

function SupportSection({ support }) {
  const [revealSolution, setRevealSolution] = useState(false);

  if (!support) return null;

  // Plain string: render as markdown in a callout
  if (typeof support === "string") {
    return (
      <div className="mt-10 pt-6 border-t border-[#E5E7EB] dark:border-white/10">
        <div className="rounded-xl border border-[#E9A716]/40 dark:border-[#E9A716]/20 bg-[#E9A716]/8 dark:bg-[#E9A716]/10 p-4">
          <h3 className="text-base font-semibold text-[#7A5200] dark:text-white mb-2">
            Need help?
          </h3>
          <div className="prose prose-sm max-w-none text-[#7A5200] dark:text-white">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{support}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }

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
    <div className="mt-10 pt-6 border-t border-[#E5E7EB] dark:border-white/10">
      <div className="rounded-xl border border-[#E9A716]/40 dark:border-[#E9A716]/20 bg-[#E9A716]/8 dark:bg-[#E9A716]/10 overflow-hidden">
        <div className="p-4 border-b border-[#E9A716]/30 dark:border-[#E9A716]/20">
          <h3 className="text-base font-semibold text-[#7A5200] dark:text-white">
            Need help? (Use in order)
          </h3>
          {intro && (
            <div className="mt-2 text-sm text-[#7A5200] dark:text-white/85 whitespace-pre-wrap">
              {intro}
            </div>
          )}
        </div>

        <div className="divide-y divide-[#E9A716]/20 dark:divide-[#E9A716]/10">
          {level1Nudges.length > 0 && (
            <details className="group">
              <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-[#7A5200] dark:text-white font-medium hover:bg-[#E9A716]/10 dark:hover:bg-[#E9A716]/10 [&::-webkit-details-marker]:hidden transition-colors">
                <span>Level 1 — Nudges (questions to ask yourself)</span>
                <span className="group-open:rotate-180 transition-transform text-xs">▼</span>
              </summary>
              <ul className="px-4 pb-3 space-y-1 text-sm text-[#7A5200] dark:text-white/85 list-disc list-inside">
                {level1Nudges.map((nudge, i) => <li key={i}>{nudge}</li>)}
              </ul>
            </details>
          )}

          {level2Hints.length > 0 && (
            <details className="group">
              <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-[#7A5200] dark:text-white font-medium hover:bg-[#E9A716]/10 dark:hover:bg-[#E9A716]/10 [&::-webkit-details-marker]:hidden transition-colors">
                <span>Level 2 — Hints (more direct)</span>
                <span className="group-open:rotate-180 transition-transform text-xs">▼</span>
              </summary>
              <ul className="px-4 pb-3 space-y-1 text-sm text-[#7A5200] dark:text-white/85 list-disc list-inside">
                {level2Hints.map((hint, i) => <li key={i}>{hint}</li>)}
              </ul>
            </details>
          )}

          {blueprint.length > 0 && (
            <details className="group">
              <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-[#7A5200] dark:text-white font-medium hover:bg-[#E9A716]/10 dark:hover:bg-[#E9A716]/10 [&::-webkit-details-marker]:hidden transition-colors">
                <span>Blueprint (step-by-step structure, no code)</span>
                <span className="group-open:rotate-180 transition-transform text-xs">▼</span>
              </summary>
              <ol className="px-4 pb-3 space-y-1 text-sm text-[#7A5200] dark:text-white/85 list-decimal list-inside">
                {blueprint.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </details>
          )}

          {debuggingGuide.length > 0 && (
            <details className="group">
              <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-[#7A5200] dark:text-white font-medium hover:bg-[#E9A716]/10 dark:hover:bg-[#E9A716]/10 [&::-webkit-details-marker]:hidden transition-colors">
                <span>Debugging guide (common issues)</span>
                <span className="group-open:rotate-180 transition-transform text-xs">▼</span>
              </summary>
              <ul className="px-4 pb-3 space-y-3 text-sm text-[#7A5200] dark:text-white/85">
                {debuggingGuide.map((item, i) => (
                  <li key={i}>
                    <strong>Problem:</strong> {item.problem}
                    <br />
                    <span><strong>Hint:</strong> {item.hint}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}

          {upgrades && typeof upgrades === "object" && Object.keys(upgrades).length > 0 && (
            <details className="group">
              <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-[#7A5200] dark:text-white font-medium hover:bg-[#E9A716]/10 dark:hover:bg-[#E9A716]/10 [&::-webkit-details-marker]:hidden transition-colors">
                <span>Upgrade blueprints (optional)</span>
                <span className="group-open:rotate-180 transition-transform text-xs">▼</span>
              </summary>
              <div className="px-4 pb-3 space-y-4 text-sm text-[#7A5200] dark:text-white/85">
                {Object.entries(upgrades).map(([key, steps]) => (
                  <div key={key}>
                    <p className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                    {Array.isArray(steps) && (
                      <ol className="list-decimal list-inside mt-1 space-y-0.5">
                        {steps.map((s, i) => <li key={i}>{s}</li>)}
                      </ol>
                    )}
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
                  className="text-sm font-medium text-[#C48A0A] dark:text-[#E9A716] hover:underline"
                >
                  Reveal example solution (use only if truly stuck)
                </button>
              ) : (
                <div>
                  {revealSolutionWarning && (
                    <p className="text-sm text-[#7A5200] dark:text-white/85 mb-2 whitespace-pre-wrap">
                      {revealSolutionWarning}
                    </p>
                  )}
                  <pre className="p-3 rounded-lg bg-[#1A1A1A] dark:bg-[#2D2D2D] text-white text-xs overflow-auto">
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
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!lesson?.id || !scrollRef.current) return;
    const el = scrollRef.current;
    const scrollToTop = () => { el.scrollTop = 0; window.scrollTo(0, 0); };
    scrollToTop();
    const raf = requestAnimationFrame(() => {
      scrollToTop();
      requestAnimationFrame(scrollToTop);
    });
    return () => cancelAnimationFrame(raf);
  }, [lesson?.id]);

  return (
    <div className="flex-1 overflow-hidden">
      <div ref={scrollRef} className="h-full overflow-auto p-6 bg-white dark:bg-[#1A1A1A] scrollable">
        <div className="max-w-3xl mx-auto">

          {/* Lesson header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#1F1F1F] dark:text-white sm:text-3xl">
              {lesson.title}
            </h1>
            <p className="mt-2 text-sm text-[#6B7280] dark:text-gray-200/90">
              Read through the lesson, then mark it complete when you&apos;re ready.
            </p>
            {/* thin brand stripe under title */}
            <div className="mt-4 flex gap-[3px] h-[3px]">
              <div className="w-8 rounded-full bg-[#568A99]" />
              <div className="w-8 rounded-full bg-[#E9A716]" />
              <div className="w-8 rounded-full bg-[#C7481D]" />
            </div>
          </div>

          {/* Article body */}
          <div className="prose max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl font-bold mt-6 mb-3 text-[#1F1F1F] dark:text-white">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl font-semibold mt-8 mb-3 text-[#1F1F1F] dark:text-white">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-semibold mt-6 mb-2 text-[#1F1F1F] dark:text-white">
                    {children}
                  </h3>
                ),
                pre: ({ children }) => (
                  <pre className="mb-4 p-4 rounded-xl bg-[#1d293d] dark:bg-[#2D2D2D] overflow-auto border border-black/5 dark:border-white/8">
                    {children}
                  </pre>
                ),
                p: ({ children }) => (
                  <p className="mb-3 leading-relaxed text-[#374151] dark:text-white/85">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-outside pl-6 mb-3 space-y-1 text-[#374151] dark:text-white/85">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-outside pl-6 mb-3 space-y-1 text-[#374151] dark:text-white/85">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="[&>p]:m-0 [&>p]:inline leading-relaxed">
                    {children}
                  </li>
                ),
                code: ({ className, children }) => {
                  const isBlock =
                    !!className ||
                    (typeof children === "string" && children.includes("\n"));
                  if (isBlock) {
                    return (
                      <code className="font-mono text-sm text-white/90 dark:text-white/90 [font-variant-ligatures:none]">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className="px-1.5 py-0.5 rounded-md bg-[#F4F4F5] dark:bg-white/10 text-[#1d293d] dark:text-[#8BBCC9] font-mono text-sm [font-variant-ligatures:none]">
                      {children}
                    </code>
                  );
                },
                hr: () => <hr className="my-6 border-[#E5E7EB] dark:border-white/10" />,
                table: ({ children }) => (
                  <div className="my-4 overflow-x-auto rounded-xl border border-[#E5E7EB] dark:border-white/10">
                    <table className="w-full border-collapse text-sm text-[#374151] dark:text-white/85">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-[#F3F4F6] dark:bg-[#242424] text-[#1F1F1F] dark:text-white">
                    {children}
                  </thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="divide-y divide-[#E5E7EB] dark:divide-white/10">
                    {children}
                  </tbody>
                ),
                tr: ({ children }) => (
                  <tr className="hover:bg-[#F4F4F5]/50 dark:hover:bg-white/5 transition-colors">
                    {children}
                  </tr>
                ),
                th: ({ children }) => (
                  <th className="px-4 py-2.5 text-left font-semibold border-b border-[#E5E7EB] dark:border-white/10">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-4 py-2.5 border-b border-[#E5E7EB]/60 dark:border-white/5">
                    {children}
                  </td>
                ),
              }}
            >
              {lesson.article || "No article available for this lesson yet."}
            </ReactMarkdown>
          </div>

          {lesson.support != null && (
            <SupportSection key={lesson.id} support={lesson.support} />
          )}

          {/* Complete lesson button */}
          {showCompleteButton && (
            <div className="mt-10 pt-6 border-t border-[#E5E7EB] dark:border-white/10">
              {isCompleted ? (
                <div className="flex items-center gap-2 text-[#568A99] dark:text-[#8BBCC9] font-medium">
                  <span className="text-lg" aria-hidden>✓</span>
                  Lesson completed
                </div>
              ) : (
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-sm text-[#6B7280] dark:text-[#A89F8C]">
                    Finished reading? Mark this lesson complete to track your progress.
                  </p>
                  <button
                    onClick={onComplete}
                    className="px-5 py-2 rounded-xl bg-[#568A99] hover:bg-[#3D6878] text-white font-medium transition-colors shrink-0 shadow-sm"
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
