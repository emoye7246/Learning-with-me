'use client';

import { useState, useEffect } from 'react';

export default function OutputPanel({ output, tests, result, activeTab = 'output', completed, onNext, canGoNext }) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  return (
    <div className="h-full flex flex-col bg-zinc-50 dark:bg-zinc-950">
      <div className="px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
        <div className="flex gap-1">
          <button
            onClick={() => setCurrentTab('output')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
              currentTab === 'output'
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
            }`}
          >
            Output
          </button>
          <button
            onClick={() => setCurrentTab('tests')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
              currentTab === 'tests'
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
            }`}
          >
            Tests
          </button>
          <button
            onClick={() => setCurrentTab('results')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
              currentTab === 'results'
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
            }`}
          >
            Results
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {currentTab === 'output' && (
          <div className="h-full">
            {output || (result && result.status === 'error') ? (
              <div className="space-y-2">
                {output && (
                  <pre className="font-mono text-sm text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap">
                    {output}
                  </pre>
                )}
                {result && result.status === 'error' && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="font-mono text-sm text-red-800 dark:text-red-200">
                      {result.message}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 text-sm">
                <p>Run your code to see output here</p>
              </div>
            )}
          </div>
        )}

        {currentTab === 'tests' && (
          <div className="h-full">
            {tests && tests.length > 0 ? (
              <div className="space-y-3">
                {tests.map((test, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border ${
                      test.passed
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                        : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {test.passed ? (
                        <span className="text-green-600 dark:text-green-400">✓</span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400">✗</span>
                      )}
                      <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
                        {test.name}
                      </span>
                    </div>
                    {test.message && (
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                        {test.message}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 text-sm">
                <p>No tests available</p>
              </div>
            )}
          </div>
        )}

        {currentTab === 'results' && (
          <div className="h-full">
            {result ? (
              <div className="space-y-3">
                {result.status === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">✅</span>
                      <span className="font-semibold text-green-900 dark:text-green-100">
                        Success!
                      </span>
                    </div>
                    <p className="text-green-800 dark:text-green-200">
                      {result.message}
                    </p>
                    {result.passedCount !== undefined && (
                      <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                        Passed {result.passedCount} of {result.totalCount} tests
                      </p>
                    )}
                  </div>
                )}
                
                {result.status === 'fail' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">❌</span>
                      <span className="font-semibold text-red-900 dark:text-red-100">
                        Test Failed
                      </span>
                    </div>
                    <p className="text-red-800 dark:text-red-200">
                      {result.message}
                    </p>
                    {result.passedCount !== undefined && (
                      <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                        Passed {result.passedCount} of {result.totalCount} tests
                      </p>
                    )}
                  </div>
                )}
                
                {result.status === 'error' && (
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">⚠️</span>
                      <span className="font-semibold text-yellow-900 dark:text-yellow-100">
                        Error
                      </span>
                    </div>
                    <p className="text-yellow-800 dark:text-yellow-200">
                      {result.message}
                    </p>
                  </div>
                )}

                {completed && (
                  <div className="p-4 rounded-lg border bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800">
                    <div className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">
                      ✅ Lesson Completed
                    </div>
                    {canGoNext && onNext && (
                      <button
                        onClick={onNext}
                        className="mt-3 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors"
                        type="button"
                      >
                        Next Lesson →
                      </button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 text-sm">
                <p>Results will appear here after running tests</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

