'use client';

import { useState, useEffect } from 'react';

export default function OutputPanel({ output, tests, result, activeTab = 'output', completed, onNext, canGoNext }) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const tabs = ['output', 'tests', 'results'];

  return (
    <div className="h-full flex flex-col bg-white dark:bg-[#1A1A1A]">
      {/* Tab bar */}
      <div className="px-4 py-2 border-b border-[#E5E7EB] dark:border-white/10 bg-[#F3F4F6] dark:bg-[#242424]">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-3 py-1 text-xs font-medium rounded-md capitalize transition-colors ${
                currentTab === tab
                  ? 'bg-[#568A99] text-white'
                  : 'text-[#6B7280] dark:text-[#A89F8C] hover:bg-[#DDD0B5] dark:hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">

        {/* Output tab */}
        {currentTab === 'output' && (
          <div className="h-full">
            {output || (result && result.status === 'error') ? (
              <div className="space-y-2">
                {output && (
                  <pre className="font-mono text-sm text-[#1F1F1F] dark:text-white whitespace-pre-wrap">
                    {output}
                  </pre>
                )}
                {result && result.status === 'error' && (
                  <div className="p-3 bg-[#C7481D]/10 dark:bg-[#C7481D]/15 border border-[#C7481D]/30 dark:border-[#C7481D]/25 rounded-xl">
                    <p className="font-mono text-sm text-[#A33614] dark:text-[#E06040]">
                      {result.message}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-[#6B7280] dark:text-[#A89F8C] text-sm">
                <p>Run your code to see output here</p>
              </div>
            )}
          </div>
        )}

        {/* Tests tab */}
        {currentTab === 'tests' && (
          <div className="h-full">
            {tests && tests.length > 0 ? (
              <div className="space-y-2">
                {tests.map((test, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border ${
                      test.passed
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                        : 'bg-[#C7481D]/8 dark:bg-[#C7481D]/15 border-[#C7481D]/30 dark:border-[#C7481D]/25'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {test.passed ? (
                        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">✓</span>
                      ) : (
                        <span className="text-[#C7481D] dark:text-[#E06040] font-semibold text-sm">✗</span>
                      )}
                      <span className="font-medium text-sm text-[#1F1F1F] dark:text-white">
                        {test.name}
                      </span>
                    </div>
                    {test.message && (
                      <p className="text-xs text-[#6B7280] dark:text-[#A89F8C] mt-1 pl-5">
                        {test.message}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-[#6B7280] dark:text-[#A89F8C] text-sm">
                <p>No tests available</p>
              </div>
            )}
          </div>
        )}

        {/* Results tab */}
        {currentTab === 'results' && (
          <div className="h-full">
            {result ? (
              <div className="space-y-3">
                {result.status === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-green-900 dark:text-green-100">All tests passed</span>
                    </div>
                    <p className="text-sm text-green-800 dark:text-green-200">{result.message}</p>
                    {result.passedCount !== undefined && (
                      <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                        {result.passedCount} of {result.totalCount} tests
                      </p>
                    )}
                  </div>
                )}

                {result.status === 'fail' && (
                  <div className="p-4 bg-[#C7481D]/8 dark:bg-[#C7481D]/15 border border-[#C7481D]/30 dark:border-[#C7481D]/25 rounded-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-[#A33614] dark:text-[#E06040]">Tests failed</span>
                    </div>
                    <p className="text-sm text-[#A33614] dark:text-[#E06040]">{result.message}</p>
                    {result.passedCount !== undefined && (
                      <p className="text-xs text-[#A33614]/80 dark:text-[#E06040]/80 mt-1">
                        {result.passedCount} of {result.totalCount} tests passed
                      </p>
                    )}
                  </div>
                )}

                {result.status === 'error' && (
                  <div className="p-4 bg-[#E9A716]/10 dark:bg-[#E9A716]/10 border border-[#E9A716]/40 dark:border-[#E9A716]/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-[#7A5200] dark:text-white">Error</span>
                    </div>
                    <p className="text-sm text-[#7A5200] dark:text-white/85">{result.message}</p>
                  </div>
                )}

                {completed && (
                  <div className="p-4 rounded-xl border border-[#568A99]/40 dark:border-[#568A99]/30 bg-[#568A99]/10 dark:bg-[#568A99]/15">
                    <div className="font-semibold text-[#3D6878] dark:text-[#8BBCC9] mb-2">
                      ✓ Lesson Completed
                    </div>
                    {canGoNext && onNext && (
                      <button
                        onClick={onNext}
                        className="mt-1 px-4 py-2 rounded-lg bg-[#568A99] hover:bg-[#3D6878] text-white font-medium transition-colors text-sm"
                        type="button"
                      >
                        Next Lesson →
                      </button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-[#6B7280] dark:text-[#A89F8C] text-sm">
                <p>Results will appear here after running</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
