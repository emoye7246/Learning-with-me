'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function LessonPanel({ lesson }) {
  if (!lesson) {
    return (
      <div className="h-full flex items-center justify-center text-zinc-500 dark:text-zinc-400">
        <p>Select a lesson to begin</p>
      </div>
    );
  }

  return (
    <div className="h-full min-h-0 p-6 bg-white dark:bg-zinc-900 scrollable">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
          {lesson.title}
        </h2>

        {lesson.objectives && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
              Learning Objectives
            </h3>
            <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
              {lesson.objectives.map((objective, idx) => (
                <li key={idx}>{objective}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ✅ Markdown-rendered content */}
        {lesson.content && (
          <div className="mb-6 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl font-bold mt-2 mb-3 text-zinc-900 dark:text-zinc-100">
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
                p: ({ children }) => (
                  <p className="mb-3 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>
                ),
                code: ({ inline, className, children }) => {
                  // inline code: `x`
                  if (inline) {
                    return (
                      <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono text-sm">
                        {children}
                      </code>
                    );
                  }

                  // code block: ```python
                  return (
                    <pre className="mb-4 p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 overflow-auto">
                      <code className={`font-mono text-sm text-zinc-900 dark:text-zinc-100 ${className || ''}`}>
                        {children}
                      </code>
                    </pre>
                  );
                }
              }}
            >
              {lesson.content}
            </ReactMarkdown>
          </div>
        )}

        {lesson.examples && lesson.examples.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
              Examples
            </h3>
            {lesson.examples.map((example, idx) => (
              <div key={idx} className="mb-4 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                <pre className="text-sm font-mono text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap">
                  {example}
                </pre>
              </div>
            ))}
          </div>
        )}

        {lesson.tasks && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-100">
              Your Task
            </h3>
            <p className="text-blue-800 dark:text-blue-200 whitespace-pre-line">
              {lesson.tasks}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
