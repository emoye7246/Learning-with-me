'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function LessonPanel({ lesson }) {
  if (!lesson) {
    return (
      <div className="h-full flex items-center justify-center text-[#6B6456] dark:text-[#A89F8C]">
        <p>Select a lesson to begin</p>
      </div>
    );
  }

  return (
    <div className="h-full min-h-0 p-6 bg-[#FEFCF5] dark:bg-[#1A1A1A] scrollable">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-[#1F1F1F] dark:text-white">
          {lesson.title}
        </h2>

        {lesson.objectives && (
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-2 text-[#1F1F1F] dark:text-white">
              Learning Objectives
            </h3>
            <ul className="space-y-1">
              {lesson.objectives.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[#3A3530] dark:text-white/85">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#568A99]" />
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.content && (
          <div className="mb-6 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl font-bold mt-2 mb-3 text-[#1F1F1F] dark:text-white">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl font-semibold mt-6 mb-2 text-[#1F1F1F] dark:text-white">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-semibold mt-5 mb-2 text-[#1F1F1F] dark:text-white">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <div className="mb-3 leading-relaxed text-[#3A3530] dark:text-white/85">{children}</div>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-3 space-y-1 text-[#3A3530] dark:text-white/85">{children}</ul>
                ),
                code: ({ inline, className, children }) => {
                  if (inline) {
                    return (
                      <code className="px-1.5 py-0.5 rounded-md bg-[#EDE3CC] dark:bg-white/10 text-[#3D6878] dark:text-[#8BBCC9] font-mono text-sm">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <pre className="mb-4 p-4 rounded-xl bg-[#EEE8D8] dark:bg-[#2D2D2D] overflow-auto border border-black/5 dark:border-white/8">
                      <code className={`font-mono text-sm text-[#2A3A30] dark:text-white/90 ${className || ''}`}>
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
            <h3 className="text-base font-semibold mb-2 text-[#1F1F1F] dark:text-white">
              Examples
            </h3>
            {lesson.examples.map((example, idx) => (
              <div key={idx} className="mb-3 rounded-xl bg-[#1A1A1A] dark:bg-[#141414] border border-white/10 p-4">
                <pre className="text-sm font-mono text-[#8BBCC9] whitespace-pre-wrap">
                  {example}
                </pre>
              </div>
            ))}
          </div>
        )}

        {lesson.tasks && (
          <div className="mb-6 p-4 bg-[#568A99]/10 dark:bg-[#568A99]/15 border border-[#568A99]/30 dark:border-[#568A99]/25 rounded-xl">
            <h3 className="text-base font-semibold mb-2 text-[#3D6878] dark:text-[#8BBCC9]">
              Your Task
            </h3>
            <p className="text-sm text-[#3D6878] dark:text-[#8BBCC9] whitespace-pre-line">
              {lesson.tasks}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
